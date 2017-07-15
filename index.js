// const OctoKat = require('../octokat.js/dist/octokat.js');
const OctoKat = require('octokat');
const kssParse = require('kss/lib/parse');

window.OctoKat = OctoKat;
window.OctoKat.Fetch = window.fetch.bind(window);
const octo = new OctoKat();

function renderSection(section) {
  return `<section>
    <h1>${section.data.header}</h1>
    ${section.data.description}
  </section>`;
}

function render(parsedContent) {
  const html = parsedContent.data.sections.map(renderSection).join('');
  document.body.innerHTML = html;
  return html;
}

function getParsedContents(contentUrl) {
  return octo.repos('Connexions', 'cnx-recipes').contents(contentUrl).fetch()
  .then(function(response){
    return response.read();
  })
  .then(function(content){
    return kssParse(content);
  });
}

function getAndDocument(contentUrl) {
  return getParsedContents(contentUrl)
    .then(render);
}

window.octo = octo;
window.kssParse = kssParse;

window.getAndDocument = getAndDocument;
