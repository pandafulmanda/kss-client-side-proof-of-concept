const kssParse = require('kss/lib/parse');
const OctoKat = require('octokat');
const Prism = require('prismjs');

// octokat client-side gets a bit confused without this.
window.OctoKat = OctoKat;
window.OctoKat.Fetch = window.fetch.bind(window);

const octo = new OctoKat();

const organization = 'Connexions';
const repo = 'cnx-recipes';
const octoRepo = octo.repos(organization, repo);

const pathInputElement = document.getElementById('path-input');
const contentElement = document.getElementById('content');

function makeMarkupHTML(markup) {
  return `<pre class="language-html">
    <code class="language-html">${Prism.highlight(markup, Prism.languages.html)}</code>
  </pre>`;
}

function makeSectionMarkupHTML(section) {
  if (!section.data.markup) { return ''; }

  if (isSectionMarkupPath(section)) {
    return `<pre class="language-html" data-markup-src="${section.data.markup}"></pre>`;
  }

  return makeMarkupHTML(section.data.markup);
}

function makeSectionHTML(section) {
  return `
    <h2>${section.data.header}</h2>
    <i>${section.data.referenceNumber} ${section.data.reference}</i>
    ${section.data.description}
    ${makeSectionMarkupHTML(section)}
  `;
}

function handleMissingMarkup(contentElement, contentPath, parsedContent) {

  const markupPathSections = parsedContent.data.sections
    .filter(isSectionMarkupPath);

  const paths = markupPathSections
    .map(getRepoPathOfSectionMarkup(contentPath));

  return paths.forEach((path, sectionIndex) => {
    octoRepo.contents(path).read()
      .then((content) => {
        const section = markupPathSections[sectionIndex];
        const sectionMarkupElement = contentElement.querySelector(`[data-markup-src="${section.data.markup}"]`);
        if (sectionMarkupElement) {
          sectionMarkupElement.outerHTML = makeMarkupHTML(content);
        }
      });
  });

}

function renderer(contentElement) {
  function render({source, parsedContent, contentUrl}) {
    const html = parsedContent.data.sections.map(makeSectionHTML).join('');
    contentElement.innerHTML = `
      <h1 class="title">
        ${source}
        <a class="heading-link" target="_blank" href="${contentUrl}">
          <span class="icon is-small">
            <i class="fa fa-link"></i>
          </span>
        </a>
      </h1>
      ${html}
    `;
    handleMissingMarkup(contentElement, source, parsedContent);
    return html;
  }

  return render;
}

const renderInContent = renderer(contentElement);

// very naive string thing.
function isSectionMarkupPath(kssSection) {
  return kssSection.data.markup[0] === '.' && kssSection.data.markup[1] === '/';
}

function getRepoPathOfSectionMarkup(contentPath){
  function makePath(kssSection) {
    const pathDivider = '/';
    let pathSegments = contentPath.split(pathDivider);
    pathSegments.pop();
    return `${pathSegments.join(pathDivider)}${kssSection.data.markup.replace('-baked.html', '').slice(1)}`;
  }

  return makePath;
}

function getParsedContents(contentPath) {
  return octoRepo.contents(contentPath).fetch()
    .then((response) => {
      return response.read()
        .then((content) => {
          return {
            content: content,
            contentUrl: response.htmlUrl
          }
        });
    })
    .then(({content, contentUrl}) => {
      return {
        source: contentPath,
        contentUrl: contentUrl,
        parsedContent: kssParse(content)
      };
    });
}

function getAndDocument(contentPath) {
  return getParsedContents(contentPath)
    .then(renderInContent);
}

function setupInput(inputElement) {
  inputElement.addEventListener('keydown', function(keydownEvent){
    if (keydownEvent.key === 'Enter') {
      getAndDocument(this.value);
    }
  });
}

function renderInitial(inputElement, contentPath) {
  inputElement.value = contentPath;
  getAndDocument(contentPath);
}

// setup the input
setupInput(pathInputElement);

// just to have stuffs showing
renderInitial(pathInputElement, 'recipes/mixins/styleguide/_all.scss');

// for trying stuffs.
window.getAndDocument = getAndDocument;
