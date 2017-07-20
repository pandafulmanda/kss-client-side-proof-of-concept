/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Both of these internal methods are really small/simple and we are only
// working with arrays anyway
var filter = __webpack_require__(21);
var forEach = __webpack_require__(22);
var map = __webpack_require__(23

// require('underscore-plus')
);var plus = {
  camelize: function camelize(string) {
    if (string) {
      return string.replace(/[_-]+(\w)/g, function (m) {
        return m[1].toUpperCase();
      });
    } else {
      return '';
    }
  },
  uncamelize: function uncamelize(string) {
    if (!string) {
      return '';
    }
    return string.replace(/([A-Z])+/g, function (match) {
      var letter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      return '_' + letter.toLowerCase();
    });
  },
  dasherize: function dasherize(string) {
    if (!string) {
      return '';
    }

    string = string[0].toLowerCase() + string.slice(1);
    return string.replace(/([A-Z])|(_)/g, function (m, letter) {
      if (letter) {
        return '-' + letter.toLowerCase();
      } else {
        return '-';
      }
    });
  },


  // Just _.extend(target, source)
  extend: function extend(target, source) {
    if (source) {
      return Object.keys(source).map(function (key) {
        target[key] = source[key];
      });
    }
  },


  // Just _.forOwn(obj, iterator)
  forOwn: function forOwn(obj, iterator) {
    return Object.keys(obj).map(function (key) {
      return iterator(obj[key], key);
    });
  },


  filter: filter,
  forEach: forEach,
  map: map
};

module.exports = plus;
//# sourceMappingURL=plus.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (message) {
  if (console && console.warn) {
    console.warn("Octokat Deprecation: " + message);
  }
};
//# sourceMappingURL=deprecate.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Converts a dictionary to a query string.
// Internal helper method
var toQueryString = function toQueryString(options, omitQuestionMark) {
  // Returns '' if `options` is empty so this string can always be appended to a URL
  if (!options || options === {}) {
    return '';
  }

  var params = [];
  var object = options || {};
  for (var key in object) {
    var value = object[key];
    if (value) {
      params.push(key + '=' + encodeURIComponent(value));
    }
  }
  if (params.length) {
    if (omitQuestionMark) {
      return '&' + params.join('&');
    } else {
      return '?' + params.join('&');
    }
  } else {
    return '';
  }
};

module.exports = toQueryString;
//# sourceMappingURL=querystring.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _module$exports;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Reuse these fields because there are 2 URL structures for accessing repositores:
// - `/repos/philschatz/octokat.js/...`
// - `/repositories/20044005/...`
var REPO_FIELDS = {
  'readme': false,
  'tarball': false,
  'zipball': false,
  'compare': false,
  'deployments': {
    'statuses': false
  },
  'hooks': {
    'tests': false
  },
  'assignees': false,
  'languages': false,
  'teams': false,
  'tags': false,
  'branches': false,
  'contributors': false,
  'subscribers': false,
  'subscription': false,
  'stargazers': false,
  'comments': false,
  'downloads': false,
  'forks': false,
  'milestones': {
    'labels': false
  },
  'labels': false,
  'releases': {
    'assets': false,
    'latest': false,
    'tags': false
  },
  'events': false,
  'notifications': false,
  'merges': false,
  'statuses': false,
  'pulls': {
    'merge': false,
    'comments': false,
    'commits': false,
    'files': false,
    'events': false,
    'labels': false,
    'requested_reviewers': false,
    'reviews': {
      'comments': false,
      'events': false,
      'dismissals': false
    }
  },
  'pages': {
    'builds': {
      'latest': false
    }
  },
  'commits': {
    'comments': false,
    'status': false,
    'statuses': false
  },
  'contents': false,
  'collaborators': {
    'permission': false
  },
  'projects': false,
  'issues': {
    'events': false,
    'comments': false,
    'labels': false
  },
  'git': {
    'refs': {
      'heads': false,
      'tags': false
    },
    'trees': false,
    'blobs': false,
    'commits': false
  },
  'stats': {
    'contributors': false,
    'commit_activity': false,
    'code_frequency': false,
    'participation': false,
    'punch_card': false
  },
  'traffic': {
    'popular': {
      'referrers': false,
      'paths': false
    },
    'views': false,
    'clones': false
  }
};

module.exports = (_module$exports = {
  'zen': false,
  'octocat': false,
  'organizations': false,
  'issues': false,
  'emojis': false,
  'markdown': false,
  'meta': false,
  'rate_limit': false,
  'feeds': false,
  'events': false,
  'repositories': false,
  'notifications': {
    'threads': {
      'subscription': false
    }
  },
  'gitignore': {
    'templates': false
  },
  'user': {
    'repos': false,
    'orgs': false,
    'followers': false,
    'following': false,
    'emails': false,
    'issues': false,
    'public_emails': false,
    'starred': false,
    'teams': false
  },
  'orgs': {
    'repos': false,
    'issues': false,
    'members': false,
    'events': false,
    'projects': false,
    'teams': false
  },
  'projects': {
    'columns': {
      'moves': false,
      'cards': {
        'moves': false
      }
    }
  },
  'teams': {
    'members': false,
    'memberships': false,
    'repos': false
  },
  'users': {
    'repos': false,
    'orgs': false,
    'gists': false,
    'followers': false,
    'following': false,
    'keys': false,
    'starred': false,
    'received_events': {
      'public': false
    },
    'events': {
      'public': false,
      'orgs': false
    },
    // Enterprise-only:
    'site_admin': false,
    'suspended': false
  },

  'search': {
    'repositories': false,
    'commits': false,
    'issues': false,
    'users': false,
    'code': false
  },
  'gists': {
    'public': false,
    'starred': false,
    'star': false,
    'comments': false,
    'forks': false
  },
  'repos': REPO_FIELDS
}, _defineProperty(_module$exports, 'repositories', REPO_FIELDS), _defineProperty(_module$exports, 'licenses', false), _defineProperty(_module$exports, 'authorizations', {
  'clients': false
}), _defineProperty(_module$exports, 'applications', {
  'tokens': false
}), _defineProperty(_module$exports, 'enterprise', {
  'settings': {
    'license': false
  },
  'stats': {
    'issues': false,
    'hooks': false,
    'milestones': false,
    'orgs': false,
    'comments': false,
    'pages': false,
    'users': false,
    'gists': false,
    'pulls': false,
    'repos': false,
    'all': false
  }
}), _defineProperty(_module$exports, 'staff', {
  'indexing_jobs': false
}), _defineProperty(_module$exports, 'setup', {
  'api': {
    'start': false, // POST
    'upgrade': false, // POST
    'configcheck': false, // GET
    'configure': false, // POST
    'settings': { // GET/PUT
      'authorized-keys': false // GET/POST/DELETE
    },
    'maintenance': false // GET/POST
  }
}), _module$exports);
//# sourceMappingURL=tree-options.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var plus = __webpack_require__(0

// Daisy-Chainer
// ===============================
//
// Generates the functions so `octo.repos(...).issues.comments.fetch()` works.
// Constructs a URL for the verb methods (like `.fetch` and `.create`).

);module.exports = function () {
  function Chainer(_verbMethods) {
    _classCallCheck(this, Chainer);

    this._verbMethods = _verbMethods;
  }

  _createClass(Chainer, [{
    key: 'chain',
    value: function chain(path, name, contextTree, fn) {
      var _this = this;

      if (typeof fn === 'undefined' || fn === null) {
        fn = function fn() {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          if (!args.length) {
            throw new Error('BUG! must be called with at least one argument');
          }
          var separator = '/';
          // Special-case compare because its args turn into '...' instead of the usual '/'
          if (name === 'compare') {
            separator = '...';
          }
          return _this.chain(path + '/' + args.join(separator), name, contextTree);
        };
      }

      this._verbMethods.injectVerbMethods(path, fn);

      if (typeof fn === 'function' || (typeof fn === 'undefined' ? 'undefined' : _typeof(fn)) === 'object') {
        for (name in contextTree || {}) {
          (function (name) {
            // Delete the key if it already exists
            delete fn[plus.camelize(name)];

            return Object.defineProperty(fn, plus.camelize(name), {
              configurable: true,
              enumerable: true,
              get: function get() {
                return _this.chain(path + '/' + name, name, contextTree[name]);
              }
            });
          })(name);
        }
      }

      return fn;
    }
  }]);

  return Chainer;
}();
//# sourceMappingURL=chainer.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _require = __webpack_require__(0

// When `origFn` is not passed a callback as the last argument then return a
// Promise, or error if no Promise can be found (see `plugins/promise/*` for
// some strategies for loading a Promise implementation)
),
    filter = _require.filter,
    forOwn = _require.forOwn,
    extend = _require.extend;

var toPromise = function toPromise(orig) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var last = args[args.length - 1];
    if (typeof last === 'function') {
      // The last arg is a callback function
      args.pop();
      return orig.apply(undefined, args).then(function (v) {
        last(null, v);
      }).catch(function (err) {
        last(err);
      });
    } else if (typeof Promise !== 'undefined') {
      return orig.apply(undefined, args);
    } else {
      throw new Error('You must specify a callback or have a promise library loaded');
    }
  };
};

var VerbMethods = function () {
  function VerbMethods(plugins, _requester) {
    _classCallCheck(this, VerbMethods);

    this._requester = _requester;
    if (!this._requester) {
      throw new Error('Octokat BUG: request is required');
    }

    var promisePlugins = filter(plugins, function (_ref) {
      var promiseCreator = _ref.promiseCreator;
      return promiseCreator;
    });
    if (promisePlugins) {
      this._promisePlugin = promisePlugins[0];
    }

    this._syncVerbs = {};
    var iterable = filter(plugins, function (_ref2) {
      var verbs = _ref2.verbs;
      return verbs;
    });
    for (var i = 0; i < iterable.length; i++) {
      var plugin = iterable[i];
      extend(this._syncVerbs, plugin.verbs);
    }
    this._asyncVerbs = {};
    var iterable1 = filter(plugins, function (_ref3) {
      var asyncVerbs = _ref3.asyncVerbs;
      return asyncVerbs;
    });
    for (var j = 0; j < iterable1.length; j++) {
      var _plugin = iterable1[j];
      extend(this._asyncVerbs, _plugin.asyncVerbs);
    }
  }

  // Injects verb methods onto `obj`


  _createClass(VerbMethods, [{
    key: 'injectVerbMethods',
    value: function injectVerbMethods(path, obj) {
      var _this = this;

      if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' || typeof obj === 'function') {
        obj.url = path; // Mostly for testing
        forOwn(this._syncVerbs, function (verbFunc, verbName) {
          obj[verbName] = function () {
            var makeRequest = function makeRequest() {
              for (var _len2 = arguments.length, originalArgs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                originalArgs[_key2] = arguments[_key2];
              }

              var data = void 0,
                  method = void 0,
                  options = void 0;

              var _verbFunc = verbFunc.apply(undefined, [path].concat(originalArgs));

              method = _verbFunc.method;
              path = _verbFunc.path;
              data = _verbFunc.data;
              options = _verbFunc.options;

              return _this._requester.request(method, path, data, options);
            };
            return toPromise(makeRequest).apply(undefined, arguments);
          };
        });

        forOwn(this._asyncVerbs, function (verbFunc, verbName) {
          obj[verbName] = function () {
            var makeRequest = verbFunc(_this._requester, path // Curried function
            );return toPromise(makeRequest).apply(undefined, arguments);
          };
        });
      } else {
        // console.warn('BUG: Attempted to injectVerbMethods on a ' + (typeof obj));
      }

      return obj;
    }
  }]);

  return VerbMethods;
}();

exports.VerbMethods = VerbMethods;
exports.toPromise = toPromise;
//# sourceMappingURL=verb-methods.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toQueryString = __webpack_require__(2

// new class SimpleVerbs
);module.exports = {
  verbs: {
    fetch: function fetch(path, query) {
      return { method: 'GET', path: '' + path + toQueryString(query) };
    },
    read: function read(path, query) {
      return { method: 'GET', path: '' + path + toQueryString(query), options: { isRaw: true } };
    },
    remove: function remove(path, data) {
      return { method: 'DELETE', path: path, data: data, options: { isBoolean: true } };
    },
    create: function create(path, data, contentType) {
      if (contentType) {
        return { method: 'POST', path: path, data: data, options: { isRaw: true, contentType: contentType } };
      } else {
        return { method: 'POST', path: path, data: data };
      }
    },
    update: function update(path, data) {
      return { method: 'PATCH', path: path, data: data };
    },
    add: function add(path, data) {
      return { method: 'PUT', path: path, data: data, options: { isBoolean: true } };
    },
    contains: function contains(path) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return { method: 'GET', path: path + '/' + args.join('/'), options: { isBoolean: true } };
    }
  }
};
//# sourceMappingURL=simple-verbs.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

const kssParse = __webpack_require__(9);
const OctoKat = __webpack_require__(17);
const Prism = __webpack_require__(41);

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


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * The `kss/lib/parse` module is normally accessed via the
 * [`parse()`]{@link module:kss.parse} method of the `kss` module:
 * ```
 * const kss = require('kss');
 * let styleGuide = kss.parse(input, options);
 * ```
 * @private
 * @module kss/lib/parse
 */

const KssStyleGuide = __webpack_require__(10),
  marked = __webpack_require__(14),
  path = __webpack_require__(15);

// Create a MarkDown renderer that does not output a wrapping paragraph.
const inlineRenderer = new marked.Renderer();
inlineRenderer.paragraph = function(text) {
  return text;
};

// @TODO: Replace {base, path, contents} with Vinyl.
/**
 * Parse an array/string of documented CSS, or an array of file objects with
 * their content.
 *
 * Each File object in the array should be formatted as:
 * `{ base: "path to source directory", path: "full path to file", contents: "content" }`.
 *
 * @alias module:kss.parse
 * @param {*} input The input to parse
 * @param {Object} [options] Options to alter the output content. Same as the
 *   options in [`traverse()`]{@link module:kss.traverse}.
 * @returns {KssStyleGuide} Returns a `KssStyleGuide` object.
 */
const parse = function(input, options) {
  // Default parsing options.
  options = options || {};
  if (typeof options.markdown === 'undefined') {
    options.markdown = true;
  }
  if (typeof options.header === 'undefined') {
    options.header = true;
  }
  options.custom = options.custom || [];

  // Massage our input into a "files" array of Vinyl-like objects.
  let files = [],
    styleGuide = {
      files: [],
      sections: []
    },
    toFloat = function(value) {
      return isNaN(value) ? 0 : parseFloat(value);
    };

  // If supplied a string.
  if (typeof input === 'string') {
    files.push({
      contents: input
    });

  // If supplied an array of strings or objects.
  } else {
    files = input.map(file => {
      if (typeof file === 'string') {
        return {contents: file};
      } else {
        styleGuide.files.push(file.path);
        return file;
      }
    });
  }

  for (let file of files) {
    // Retrieve an array of "comment block" strings, and then evaluate each one.
    let comments = findCommentBlocks(file.contents);

    for (let comment of comments) {
      // Create a new, temporary section object with some default values.
      // "raw" is a comment block from the array above.
      let newSection = {
        raw: comment.raw,
        header: '',
        description: '',
        modifiers: [],
        parameters: [],
        markup: '',
        source: {
          // Always display using UNIX separators.
          filename: file.base ? path.relative(file.base, file.path).replace(/\\/g, '/') : file.path,
          path: file.path ? file.path : '',
          line: comment.line
        }
      };

      // Split the comment block into paragraphs.
      let paragraphs = comment.text.split('\n\n');

      // Ignore this block if a style guide reference number is not listed.
      newSection.reference = findReference(paragraphs.pop());
      if (!newSection.reference) {
        continue;
      }

      // Before anything else, process the properties that are clearly labeled
      // and can be found right away and then removed.
      processProperty.call(newSection, paragraphs, 'Markup');
      processProperty.call(newSection, paragraphs, 'Weight', toFloat);
      // Process custom properties.
      for (let customProperty of options.custom) {
        processProperty.call(newSection, paragraphs, customProperty);
      }

      // If the block is just a reference, copy the reference into the header.
      if (paragraphs.length === 0) {
        newSection.header = newSection.reference;

      // If the block has just 1 paragraph, it is just a header and a reference.
      } else if (paragraphs.length === 1) {
        newSection.header = newSection.description = paragraphs[0];

      // If it has 2+ paragraphs, search for modifiers.
      } else {

        // Extract the approximate header, description and modifiers paragraphs.
        // The modifiers will be split into an array of lines.
        newSection.header = paragraphs[0];
        let possibleModifiers = paragraphs.pop();
        newSection.modifiers = possibleModifiers.split('\n');
        newSection.description = paragraphs.join('\n\n');

        // Check the modifiers paragraph. Does it look like it's a list of
        // modifiers, or just another paragraph of the description?
        let numModifierLines = newSection.modifiers.length,
          hasModifiers = true,
          lastModifier = 0;
        for (let j = 0; j < numModifierLines; j += 1) {
          if (newSection.modifiers[j].match(/^\s*.+?\s+\-\s/g)) {
            lastModifier = j;
          } else if (j === 0) {
            // The paragraph doesn't start with a modifier, so bail out.
            hasModifiers = false;
            j = numModifierLines;
          } else {
            // If the current line doesn't match a modifier, it must be a
            // multi-line modifier description.
            newSection.modifiers[lastModifier] += ' ' + newSection.modifiers[j].replace(/^\s+|\s+$/g, '');
            // We will strip this blank line later.
            newSection.modifiers[j] = '';
          }
        }
        // Remove any blank lines added.
        newSection.modifiers = newSection.modifiers.filter(line => { return line !== ''; });

        // If it's a modifiers paragraph, turn each one into a modifiers object.
        if (hasModifiers) {
          // If the section has markup, create KssModifier objects.
          if (newSection.markup) {
            newSection.modifiers = createModifiers(newSection.modifiers, options);
          } else {
            // If the section has no markup, create KssParameter objects.
            newSection.parameters = createParameters(newSection.modifiers, options);
            newSection.modifiers = [];
          }

        // Otherwise, add it back to the description.
        } else {
          newSection.description += '\n\n' + possibleModifiers;
          newSection.modifiers = [];
        }
      }

      // Squash the header into a single line.
      newSection.header = newSection.header.replace(/\n/g, ' ');

      // Check the section's status.
      newSection.deprecated = hasPrefix(newSection.description, 'Deprecated');
      newSection.experimental = hasPrefix(newSection.description, 'Experimental');

      // If a separate header is requested, remove the first paragraph from the
      // description.
      if (options.header) {
        if (newSection.description.match(/\n{2,}/)) {
          newSection.description = newSection.description.replace(/^.*?\n{2,}/, '');
        } else {
          newSection.description = '';
        }
      }

      // Markdown Parsing.
      if (options.markdown) {
        newSection.description = marked(newSection.description);
      }

      // Add the new section instance to the sections array.
      styleGuide.sections.push(newSection);
    }
  }

  return new KssStyleGuide(styleGuide);
};

/**
 * Returns an array of comment blocks found within a string.
 *
 * @private
 * @param  {String} input The string to search.
 * @returns {Array} An array of blocks found as objects containing line, text,
 *   and raw properties.
 */
const findCommentBlocks = function(input) {
  /* eslint-disable key-spacing */
  const commentRegex = {
    single:        /^\s*\/\/.*$/,
    docblockStart: /^\s*\/\*\*\s*$/,
    multiStart:    /^\s*\/\*+\s*$/,
    multiFinish:   /^\s*\*\/\s*$/
  };
  /* eslint-enable key-spacing */

  // Convert Windows/Mac line endings to Unix ones.
  input = input.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

  let blocks = [],
    block = {
      line: 0,
      text: '',
      raw: ''
    },
    indentAmount = false,
    insideSingleBlock = false,
    insideMultiBlock = false,
    insideDocblock = false;

  // Add an empty line to catch any comment at the end of the input.
  input += '\n';
  const lines = input.split('\n');
  for (let i = 0; i < lines.length; i += 1) {
    let line = lines[i];

    // Remove trailing space.
    line = line.replace(/\s*$/, '');

    // Single-line parsing.
    if (!insideMultiBlock && !insideDocblock && line.match(commentRegex.single)) {
      block.raw += line + '\n';
      // Add the current line (and a newline) minus the comment marker.
      block.text += line.replace(/^\s*\/\/\s?/, '') + '\n';
      if (!insideSingleBlock) {
        block.line = i + 1;
      }
      insideSingleBlock = true;
      // Continue to next line.
      continue;
    }

    // If we have reached the end of the current block, save it.
    if (insideSingleBlock || (insideMultiBlock || insideDocblock) && line.match(commentRegex.multiFinish)) {
      let doneWithCurrentLine = !insideSingleBlock;
      block.text = block.text.replace(/^\n+/, '').replace(/\n+$/, '');
      blocks.push(block);
      insideMultiBlock = insideDocblock = insideSingleBlock = indentAmount = false;
      block = {
        line: 0,
        text: '',
        raw: ''
      };
      // If we "found" the end of a single-line comment block, we are not done
      // processing the current line and cannot skip the rest of this loop.
      if (doneWithCurrentLine) {
        continue;
      }
    }

    // Docblock parsing.
    if (line.match(commentRegex.docblockStart)) {
      insideDocblock = true;
      block.raw += line + '\n';
      block.line = i + 1;
      continue;
    }
    if (insideDocblock) {
      block.raw += line + '\n';
      // Add the current line (and a newline) minus the comment marker.
      block.text += line.replace(/^\s*\*\s?/, '') + '\n';
      continue;
    }

    // Multi-line parsing.
    if (line.match(commentRegex.multiStart)) {
      insideMultiBlock = true;
      block.raw += line + '\n';
      block.line = i + 1;
      continue;
    }
    if (insideMultiBlock) {
      block.raw += line + '\n';
      // If this is the first interior line, determine the indentation amount.
      if (indentAmount === false) {
        // Skip initial blank lines.
        if (line === '') {
          continue;
        }
        indentAmount = line.match(/^\s*/)[0];
      }
      // Always strip same indentation amount from each line.
      block.text += line.replace(new RegExp('^' + indentAmount), '', 1) + '\n';
    }
  }

  return blocks;
};

/**
 * Takes an array of modifier lines, and turns it into a JSON equivalent of
 * KssModifier.
 *
 * @private
 * @param {Array} rawModifiers Raw Modifiers, which should all be strings.
 * @param {Object} options The options object.
 * @returns {Array} The modifier instances created.
 */
const createModifiers = function(rawModifiers, options) {
  return rawModifiers.map(entry => {
    // Split modifier name and the description.
    let modifier = entry.split(/\s+\-\s+/, 1)[0];
    let description = entry.replace(modifier, '', 1).replace(/^\s+\-\s+/, '');

    // Markdown parsing.
    if (options.markdown) {
      description = marked(description, {renderer: inlineRenderer});
    }

    return {
      name: modifier,
      description: description
    };
  });
};

/**
 * Takes an array of parameter lines, and turns it into instances of
 * KssParameter.
 *
 * @private
 * @param {Array} rawParameters Raw parameters, which should all be strings.
 * @param {Object} options The options object.
 * @returns {Array} The parameter instances created.
 */
const createParameters = function(rawParameters, options) {
  return rawParameters.map(entry => {
    // Split parameter name and the description.
    let parameter = entry.split(/\s+\-\s+/, 1)[0];
    let defaultValue = '';
    let description = entry.replace(parameter, '', 1).replace(/^\s+\-\s+/, '');

    // Split parameter name and the default value.
    if (/\s+=\s+/.test(parameter)) {
      let tokens = parameter.split(/\s+=\s+/);
      parameter = tokens[0];
      defaultValue = tokens[1];
    }

    // Markdown parsing.
    if (options.markdown) {
      description = marked(description, {renderer: inlineRenderer});
    }

    return {
      name: parameter,
      defaultValue: defaultValue,
      description: description
    };
  });
};

/**
 * Check a section for the reference number it may or may not have.
 *
 * @private
 * @param {Array} text An array of the paragraphs in a single block.
 * @returns {Boolean|String} False if not found, otherwise returns the reference
 *   number as a string.
 */
const findReference = function(text) {
  // Replace runs of white space with a single space.
  text = text.trim().replace(/\s+/g, ' ');

  // Search for the "styleguide" (or "style guide") keyword at the start of the
  // paragraph.
  let regex = /^style\s?guide\s?[-:]?\s?/i;
  if (regex.test(text)) {
    return text.replace(regex, '');
  }
  return false;
};

/**
 * Checks if there is a specific property in the comment block, adds it to
 * `this`, and removes it from the original array of paragraphs.
 *
 * @private
 * @param {Array} paragraphs An array of the paragraphs in a single comment
 *   block.
 * @param {String} propertyName The name of the property to search for.
 * @param {Function} [processValue] A function to massage the value before it is
 *   inserted into `this`.
 */
const processProperty = function(paragraphs, propertyName, processValue) {
  let indexToRemove = false;

  propertyName = propertyName.toLowerCase();

  for (let i = 0; i < paragraphs.length; i++) {
    if (hasPrefix(paragraphs[i], propertyName)) {
      this[propertyName] = paragraphs[i].replace(new RegExp('^\\s*' + propertyName + '\\:\\s+?', 'gmi'), '');
      if (typeof processValue === 'function') {
        this[propertyName] = processValue(this[propertyName]);
      }
      indexToRemove = i;
      break;
    }
  }

  if (indexToRemove !== false) {
    paragraphs.splice(indexToRemove, 1);
  }
};

/**
 * Essentially this function checks if a string is prefixed by a particular
 * attribute, e.g. 'Deprecated:' and 'Markup:'
 *
 * @private
 * @param {String} description The string to check.
 * @param {String} prefix The prefix to search for.
 * @returns {Boolean} Whether the description contains the specified prefix.
 */
const hasPrefix = function(description, prefix) {
  return (new RegExp('^\\s*' + prefix + '\\:', 'gmi')).test(description);
};

module.exports = parse;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const KssSection = __webpack_require__(11);

/**
 * The `kss/lib/kss_styleguide` module is normally accessed via the
 * [`KssStyleGuide()`]{@link module:kss.KssStyleGuide} class of the `kss`
 * module:
 * ```
 * const KssStyleGuide = require('kss').KssStyleGuide;
 * ```
 * @private
 * @module kss/lib/kss_styleguide
 */

/**
 * A KssStyleGuide object represents multi-section style guide.
 *
 * This class is normally accessed via the [`kss`]{@link module:kss} module:
 * ```
 * const KssStyleGuide = require('kss').KssStyleGuide;
 * ```
 *
 * @alias module:kss.KssStyleGuide
 */
class KssStyleGuide {

  /**
   * Creates a KssStyleGuide object and stores the given data.
   *
   * If passed an object, it will add `autoInit`, `customPropertyNames`, and
   * `sections` properties.
   *
   * @param {Object} [data] An object of data.
   */
  constructor(data) {
    data = data || {};

    this.meta = {
      autoInit: false,
      files: data.files || [],
      hasNumericReferences: true,
      needsDepth: false,
      needsReferenceNumber: false,
      needsSort: false,
      referenceDelimiter: '.',
      referenceMap: {},
      weightMap: {}
    };

    this.data = {
      customPropertyNames: [],
      sections: []
    };

    if (data.customPropertyNames) {
      this.customPropertyNames(data.customPropertyNames);
    }

    if (data.sections) {
      // Note that auto-initialization is temporarily off since we don't want to
      // init this new object until after these sections are added.
      this.sections(data.sections);
    }

    // Now that all sections are added, turn on auto-initialization. But allow a
    // flag passed to the constructor to turn off auto-initialization.
    if (data.autoInit !== false) {
      this.meta.autoInit = true;
    }

    if (this.meta.autoInit) {
      this.init();
    }
  }

  /**
   * Return the `KssStyleGuide` as a JSON object.
   *
   * @returns {Object} A JSON object representation of the KssStyleGuide.
   */
  toJSON() {
    let returnObject;

    returnObject = {
      customPropertyNames: this.customPropertyNames(),
      hasNumericReferences: this.hasNumericReferences(),
      referenceDelimiter: this.referenceDelimiter()
    };

    returnObject.sections = this.sections().map(section => {
      return section.toJSON();
    });

    return returnObject;
  }

  /**
   * Toggles the auto-initialization setting of this style guide.
   *
   * If a `false` value is provided, auto-initialization is disabled and users
   * will be required to call `init()` manually after adding sections via
   * `sections()`. If a `true' value is provided, auto-initialization will be
   * enabled and the `init()` method will immediately be called.
   *
   * @param {boolean} autoInit The new setting for auto-initialization.
   * @returns {KssStyleGuide} The `KssStyleGuide` object is returned to allow
   *   chaining of methods.
   */
  autoInit(autoInit) {
    this.meta.autoInit = !!autoInit;

    if (this.meta.autoInit) {
      this.init();
    }

    // Allow chaining.
    return this;
  }

  /**
   * Sorts the style guides sections and (re-)initializes some section values.
   *
   * Some section data is dependent on the state of the KssStyleGuide. When
   * sections are added with `sections()`, it determines what updates are needed.
   * If needed, this method:
   * - Calculates the depth of the reference for each section. e.g. Section 2.1.7
   *   has a depth of 3.
   * - Sorts all the sections by reference.
   * - Calculates a reference number if the style guide uses
   *   word-based references.
   *
   * By default this method is called automatically whenever new sections are
   * added to the style guide. This
   *
   * @returns {KssStyleGuide} Returns the `KssStyleGuide` object to allow chaining
   *   of methods.
   */
  init() {
    if (this.data.sections.length) {
      let numSections = this.data.sections.length;

      // The delimiter has changed, so recalculate the depth of each section's
      // reference.
      if (this.meta.needsDepth) {
        for (let i = 0; i < numSections; i++) {
          this.data.sections[i].depth(this.data.sections[i].reference().split(this.referenceDelimiter()).length);
        }
        this.meta.needsDepth = false;
      }

      // Sort all the sections.
      if (this.meta.needsSort) {
        let delimiter = this.referenceDelimiter();
        // Sorting helper function that gets the weight of the given reference at
        // the given depth. e.g. `getWeight('4.3.2.2', 2)` will return the weight
        // for section 4.3.
        let getWeight = (reference, depth) => {
          reference = reference.toLowerCase().split(delimiter, depth).join(delimiter);

          return this.meta.weightMap[reference] ? this.meta.weightMap[reference] : 0;
        };

        // Sort sections based on the references.
        this.data.sections.sort((a, b) => {
          // Split the 2 references into chunks by their period or dash separators.
          let refsA = a.reference().toLowerCase().split(delimiter),
            refsB = b.reference().toLowerCase().split(delimiter),
            weightA, weightB,
            maxRefLength = Math.max(refsA.length, refsB.length);

          // Compare each set of chunks until we know which reference should be listed first.
          for (let i = 0; i < maxRefLength; i++) {
            if (refsA[i] && refsB[i]) {
              // If the 2 chunks are unequal, compare them.
              if (refsA[i] !== refsB[i]) {
                // If the chunks have different weights, sort by weight.
                weightA = getWeight(a.reference(), i + 1);
                weightB = getWeight(b.reference(), i + 1);
                if (weightA !== weightB) {
                  return weightA - weightB;
                } else if (refsA[i].match(/^\d+$/) && refsB[i].match(/^\d+$/)) {
                  // If both chunks are digits, use numeric sorting.
                  return refsA[i] - refsB[i];
                } else {
                  // Otherwise, use alphabetical string sorting.
                  return (refsA[i] > refsB[i]) ? 1 : -1;
                }
              }
            } else {
              // If 1 of the chunks is empty, it goes first.
              return refsA[i] ? 1 : -1;
            }
          }

          return 0;
        });
        this.meta.needsSort = false;
      }

      // Create an auto-incremented reference number if the references are not
      // number-based references.
      if (this.meta.needsReferenceNumber) {
        let autoIncrement = [0], ref, previousRef = [];
        for (let i = 0; i < numSections; i++) {
          ref = this.data.sections[i].reference();

          // Compare the previous Ref to the new Ref.
          ref = ref.split(this.referenceDelimiter());
          // If they are already equal, we don't need to increment the section number.
          if (previousRef.join(this.referenceDelimiter()) !== ref.join(this.referenceDelimiter())) {
            let incrementIndex = 0;
            for (let index = 0; index < previousRef.length; index += 1) {
              // Find the index where the refs differ.
              if (index >= ref.length || previousRef[index] !== ref[index]) {
                break;
              }
              incrementIndex = index + 1;
            }
            if (incrementIndex < autoIncrement.length) {
              // Increment the part where the refs started to differ.
              autoIncrement[incrementIndex]++;
              // Trim off the extra parts of the autoincrement where the refs differed.
              autoIncrement = autoIncrement.slice(0, incrementIndex + 1);
            }
            // Add parts to the autoincrement to ensure it is the same length as the new ref.
            for (let index = autoIncrement.length; index < ref.length; index += 1) {
              autoIncrement[index] = 1;
            }
          }
          this.data.sections[i].referenceNumber(autoIncrement.join('.'));
          previousRef = ref;
        }
        this.meta.needsReferenceNumber = false;
      }
    }

    // Allow chaining.
    return this;
  }

  /**
   * Gets or sets the list of custom properties of the style guide.
   *
   * If the `names` value is provided, the names are added to the style guide's
   * list of custom properties. Otherwise, the style guide's list of custom
   * properties is returned.
   *
   * @param {string|string[]} [names] Optional. The names of  of the section.
   * @returns {KssStyleGuide|string[]} If `names` is given, the `KssStyleGuide`
   *   object is returned to allow chaining of methods. Otherwise, the list of
   *   custom properties of the style guide is returned.
   */
  customPropertyNames(names) {
    if (typeof names === 'undefined') {
      return this.data.customPropertyNames;
    }

    if (!(names instanceof Array)) {
      names = [names];
    }
    for (let i = 0; i < names.length; i++) {
      if (this.data.customPropertyNames.indexOf(names[i]) === -1) {
        this.data.customPropertyNames.push(names[i]);
      }
    }
    // Allow chaining.
    return this;
  }

  /**
   * Returns whether the style guide has numeric references or not.
   *
   * @returns {boolean} Whether the style guide has numeric references or not.
   */
  hasNumericReferences() {
    return this.meta.hasNumericReferences;
  }

  /**
   * Returns the delimiter used in the style guide's section references.
   *
   * @returns {string} The delimiter used in the section references.
   */
  referenceDelimiter() {
    return this.meta.referenceDelimiter;
  }

  /**
   * Gets or sets the sections of the style guide.
   *
   * If `sections` objects are provided, the sections are added to the style
   * guide. Otherwise, a search is performed to return the desired sections.
   *
   * There's a few ways to use search with this method:
   * - `sections()` returns all of the sections.
   *
   * Using strings:
   * - `sections('2')` returns Section 2.
   * - `sections('2.*')` returns Section 2 and all of its descendants.
   * - `sections('2.x')` returns Section 2's children only.
   * - `sections('2.x.x')` returns Section 2's children, and their children too.
   *
   * Or Regular Expressions:
   * - `sections(/2\.[1-5]/)` returns Sections 2.1 through to 2.5.
   *
   * @param {Object|Object[]|string|RegExp} [sections] Optional. A section object
   *   or array of secction objects to add to the style guide. Or a string or
   *   Regexp object to match a KssSection's style guide reference.
   * @returns {KssStyleGuide|KssSection|KssSection[]|boolean} If `sections` is
   *   given, the `KssStyleGuide` object is returned to allow chaining of methods.
   *   Otherwise, the exact KssSection requested, an array of KssSection objects
   *   matching the query, or false is returned.
   */
  sections(sections) {
    let query,
      matchedSections = [];

    if (typeof sections === 'undefined') {
      return this.data.sections;
    }

    // If we are given an object, assign the properties.
    if (typeof sections === 'object' && !(sections instanceof RegExp)) {
      if (!(sections instanceof Array)) {
        sections = [sections];
      }
      sections.forEach(section => {
        let originalDelimiter = this.referenceDelimiter();

        if (!(section instanceof KssSection)) {
          section = new KssSection(section);
        }

        // Set the style guide for each section.
        section.styleGuide(this);

        // Determine if the references are number-based or word-based.
        this.meta.hasNumericReferences = this.meta.hasNumericReferences && /^[\.\d]+$/.test(section.reference());
        // Store the reference for quick searching later.
        this.meta.referenceMap[section.reference()] = section;
        // Store the section's weight.
        this.meta.weightMap[section.reference().toLowerCase()] = section.weight();
        // Determine the separator used in references; e.g. 'a - b' or 'a.b'.
        if (section.reference().indexOf(' - ') > -1) {
          this.meta.referenceDelimiter = ' - ';
        }

        // Add the section to the style guide.
        this.data.sections.push(section);

        // If the delimiter changed, flag the depths as needing recalculation.
        if (originalDelimiter !== this.referenceDelimiter()) {
          this.meta.needsDepth = true;
        } else {
          // Set the depth of this section's reference.
          section.depth(section.reference().split(this.referenceDelimiter()).length);
        }

        // Determine if all sections need their reference number recalculated.
        if (!this.meta.hasNumericReferences) {
          this.meta.needsReferenceNumber = true;
        }

        // A new section means all sections need to be sorted.
        this.meta.needsSort = true;
      });

      // Automatically re-initialize the style guide.
      if (this.meta.autoInit) {
        this.init();
      }
      // Allow chaining.
      return this;
    }

    // Otherwise, we should search for the requested section.
    query = sections;

    // Exact queries.
    if (typeof query === 'string') {
      // If the query is '*', 'x', or ends with '.*', ' - *', '.x', or ' - x',
      // then it is not an exact query.
      if (!(/(^[x\*]$|\s\-\s[x\*]$|\.[x\*]$)/.test(query))) {
        if (this.meta.referenceMap[query]) {
          return this.meta.referenceMap[query];
        } else {
          return false;
        }
      }
    }

    // Convert regex strings into proper JavaScript RegExp objects.
    if (!(query instanceof RegExp)) {
      let delim = this.referenceDelimiter() === '.' ? '\\.' : '\\ \\-\\ ';
      query = new RegExp(
        query
        // Convert '*' to a simple .+ regex.
          .replace(/^\*$/, '.+')
          // Convert 'x' to a regex matching one level of reference.
          .replace(/^x$/, '^.+?(?=($|' + delim + '))')
          // Convert '.*' or ' - *' to a ([delim].+){0,1} regex.
          .replace(/(\.|\s+\-\s+)\*$/g, '(' + delim + '.+){0,1}')
          // Convert the first '.x' or ' - x' to a regex matching one sub-level
          // of a reference.
          .replace(/(\.|\s+\-\s+)x\b/, delim + '.+?(?=($|' + delim + '))')
          // Convert any remaining '.x' or ' - x' to a regex matching zero or one
          // sub-levels of a reference.
          .replace(/(\.|\s+\-\s+)x\b/g, '(' + delim + '.+?(?=($|' + delim + '))){0,1}')
          // Convert any remaining '-' into '\-'
          .replace(/([^\\])\-/g, '$1\\-')
      );
    }

    // General (regex) search
    for (let i = 0; i < this.data.sections.length; i += 1) {
      let match = this.data.sections[i].reference().match(query);
      // The regex must match the full reference.
      if (match && match[0] === this.data.sections[i].reference()) {
        matchedSections.push(this.data.sections[i]);
      }
    }

    return matchedSections;
  }
}

module.exports = KssStyleGuide;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const KssModifier = __webpack_require__(12),
  KssParameter = __webpack_require__(13);

/**
 * The `kss/lib/kss_section` module is normally accessed via the
 * [`KssSection()`]{@link module:kss.KssSection} class of the `kss` module:
 * ```
 * const KssSection = require('kss').KssSection;
 * ```
 * @private
 * @module kss/lib/kss_section
 */

/**
 * A KssSection object represents a single section of a `KssStyleGuide`.
 *
 * A section of a style guide can be used for:
 * - a category of sub-sections, since sections are hierarchical
 * - a component in a design
 * - a mixin (or similar concept) of a CSS preprocessor
 *
 * This class is normally accessed via the [`kss`]{@link module:kss} module:
 * ```
 * const KssSection = require('kss').KssSection;
 * ```
 *
 * @alias module:kss.KssSection
 */
class KssSection {

  /**
   * Creates a KssSection object and stores the given data.
   *
   * If passed an object, it will add the properties to the section.
   *
   * @param {Object} [data] An object of data.
   */
  constructor(data) {
    data = data || {};

    this.meta = {
      styleGuide: data.styleGuide || null,
      raw: data.raw || '',
      customPropertyNames: [],
      depth: data.depth || 0
    };

    this.data = {
      header: '',
      description: '',
      deprecated: false,
      experimental: false,
      reference: '',
      referenceNumber: '',
      referenceURI: '',
      weight: 0,
      markup: '',
      source: {
        filename: '',
        path: '',
        line: ''
      },
      modifiers: [],
      parameters: []
    };

    // Loop through the given properties.
    for (let name in data) {
      // istanbul ignore else
      if (data.hasOwnProperty(name)) {
        // If the property is defined in this.data, add it via our API.
        if (this.data.hasOwnProperty(name)) {
          this[name](data[name]);

          // If the property isn't defined in meta or data, add a custom property.
        } else if (!this.meta.hasOwnProperty(name)) {
          this.custom(name, data[name]);
        }
      }
    }
  }

  /**
   * Return the `KssSection` as a JSON object.
   *
   * @returns {Object} A JSON object representation of the KssSection.
   */
  toJSON() {
    /* eslint-disable key-spacing */
    let returnObject = {
      header: this.header(),
      description: this.description(),
      deprecated: this.deprecated(),
      experimental: this.experimental(),
      reference: this.reference(),
      referenceNumber: this.referenceNumber(),
      referenceURI: this.referenceURI(),
      weight: this.weight(),
      markup: this.markup(),
      source: this.source(),
      // Include meta as well.
      depth: this.depth()
    };
    /* eslint-enable key-spacing */

    returnObject.modifiers = this.modifiers().map(modifier => {
      return modifier.toJSON();
    });
    returnObject.parameters = this.parameters().map(parameter => {
      return parameter.toJSON();
    });

    // Add custom properties to the JSON object.
    for (let i = 0; i < this.meta.customPropertyNames.length; i++) {
      // istanbul ignore else
      if (typeof this.custom(this.meta.customPropertyNames[i]) !== 'undefined') {
        returnObject[this.meta.customPropertyNames[i]] = this.custom(this.meta.customPropertyNames[i]);
      }
    }

    return returnObject;
  }

  /**
   * Gets or sets the `KssStyleGuide` object this `KssSection` is associated with.
   *
   * If the `styleGuide` value is provided, the `KssStyleGuide` for this section
   * is set. Otherwise, the `KssStyleGuide` of the section is returned.
   *
   * @param {KssStyleGuide} [styleGuide] Optional. The `KssStyleGuide` that owns the
   *   `KssSection`.
   * @returns {KssStyleGuide|KssSection} If styleGuide is given, the current
   *   `KssSection` object is returned to allow chaining of methods. Otherwise,
   *   the `KssStyleGuide` object the section belongs to is returned.
   */
  styleGuide(styleGuide) {
    if (typeof styleGuide === 'undefined') {
      return this.meta.styleGuide;
    }

    this.meta.styleGuide = styleGuide;
    // Tell the style guide about this section's custom property names.
    this.meta.styleGuide.customPropertyNames(this.customPropertyNames());
    // Allow chaining.
    return this;
  }

  /**
   * Gets or sets the header of the section, i.e. the first line in the description.
   *
   * If the `header` value is provided, the `header` for this section is set.
   * Otherwise, the `header` of the section is returned.
   *
   * @param {string} [header] Optional. The header of the section.
   * @returns {KssSection|string} If `header` is given, the `KssSection` object is
   *   returned to allow chaining of methods. Otherwise, the header of the section
   *   is returned.
   */
  header(header) {
    if (typeof header === 'undefined') {
      return this.data.header;
    }

    this.data.header = header;
    // Allow chaining.
    return this;
  }

  /**
   * Gets or sets the description of the section.
   *
   * If the `description` value is provided, the `description` for this section is
   * set. Otherwise, the `description` of the section is returned.
   *
   * @param {string} [description] Optional. The description of the section.
   * @returns {KssSection|string} If `description` is given, the `KssSection`
   *   object is returned to allow chaining of methods. Otherwise, the description
   *   of the section is returned.
   */
  description(description) {
    if (typeof description === 'undefined') {
      return this.data.description;
    }

    this.data.description = description;
    // Allow chaining.
    return this;
  }

  /**
   * Gets the list of custom properties of the section.
   *
   * Note that this method will return the actual custom properties set for this
   * section, and not all of the custom properties available for the entire style
   * guide. Use KssStyleGuide.customPropertyNames() for that list.
   *
   * @returns {string[]} An array of the section's custom property names.
   */
  customPropertyNames() {
    return this.meta.customPropertyNames;
  }

  /**
   * Gets or sets a custom property of the section.
   *
   * If the `value` is provided, the requested custom property of the section is
   * set. Otherwise, the section's custom property with the name specified in the
   * `name` parameter is returned.
   *
   * @param {string} name The name of the section's custom property.
   * @param {*} [value] Optional. The value of the section's custom property.
   * @returns {KssSection|*} If `value` is given, the `KssSection` object is
   *   returned to allow chaining of methods. Otherwise, the section's custom
   *   property, `name`, is returned.
   */
  custom(name, value) {
    if (typeof value === 'undefined') {
      /* eslint-disable no-undefined */
      return this.meta.customPropertyNames.indexOf(name) === -1 ? undefined : this.data[name];
    }

    if (this.styleGuide()) {
      this.styleGuide().customPropertyNames(name);
    }
    this.meta.customPropertyNames.push(name);
    this.data[name] = value;
    // Allow chaining.
    return this;
  }

  /**
   * Gets or sets the deprecated flag for the section.
   *
   * If the `deprecated` value is provided, the `deprecated` flag for this section
   * is set. Otherwise, the `deprecated` flag for the section is returned.
   *
   * @param {boolean} [deprecated] Optional. The deprecated flag for the section.
   * @returns {KssSection|boolean} If `deprecated` is given, the `KssSection`
   *   object is returned to allow chaining of methods. Otherwise, the deprecated
   *   flag for the section is returned.
   */
  deprecated(deprecated) {
    if (typeof deprecated === 'undefined') {
      return this.data.deprecated;
    }

    this.data.deprecated = !!deprecated;
    // Allow chaining.
    return this;
  }

  /**
   * Gets or sets the experimental flag for the section.
   *
   * If the `experimental` value is provided, the `experimental` flag for this
   * section is set. Otherwise, the `deprecated` flag for the section is returned.
   *
   * @param {boolean} [experimental] Optional. The experimental flag for the
   *   section.
   * @returns {KssSection|boolean} If `experimental` is given, the `KssSection`
   *   object is returned to allow chaining of methods. Otherwise, the
   *   experimental flag for the section is returned.
   */
  experimental(experimental) {
    if (typeof experimental === 'undefined') {
      return this.data.experimental;
    }

    this.data.experimental = !!experimental;
    // Allow chaining.
    return this;
  }

  /**
   * Gets or sets the reference for the section.
   *
   * If the `reference` value is provided, the `reference` for this section is
   * set. Otherwise, the `reference` for the section is returned.
   *
   * @param {string} [reference] Optional. The reference of the section.
   * @returns {KssSection|string} If `reference` is given, the `KssSection` object
   *   is returned to allow chaining of methods. Otherwise, the reference for the
   *   section is returned.
   */
  reference(reference) {
    if (typeof reference === 'undefined') {
      return this.data.reference;
    }

    // @TODO: Tell the KssStyleGuide about the update.

    reference = reference.toString();
    // Normalize any " - " delimiters.
    reference = reference.replace(/\s+\-\s+/g, ' - ');
    // Remove trailing dot-zeros and periods.
    reference = reference.replace(/\.$|(\.0){1,}$/g, '');

    this.data.reference = reference;
    // Allow chaining.
    return this;
  }

  /**
   * Gets or sets a numeric reference number for the section.
   *
   * If the `referenceNumber` value is provided, the `referenceNumber` for this
   * section is set.
   *
   * If no parameters are given, this method returns a numeric reference number;
   * if the style guide's references are already numeric (e.g. 2, 2.1.3, 3.2),
   * then this method returns the same value as reference() does. Otherwise, an
   * auto-incremented reference number will be returned.
   *
   * @param {string} [referenceNumber] Optional. The auto-incremented reference
   *   number of the section.
   * @returns {KssSection|string} If `referenceNumber` is given, the `KssSection`
   *   object is returned to allow chaining of methods. Otherwise, the reference
   *   number of the section is returned.
   */
  referenceNumber(referenceNumber) {
    if (typeof referenceNumber === 'undefined') {
      if (this.styleGuide() && this.styleGuide().hasNumericReferences()) {
        return this.data.reference;
      } else {
        return this.data.referenceNumber;
      }
    }

    this.data.referenceNumber = referenceNumber;
    // Allow chaining.
    return this;
  }

  /**
   * Gets or sets the reference of the section, encoded as a valid URI fragment.
   *
   * If the `referenceURI` value is provided, the `referenceURI` for this section
   * is set. Otherwise, the `referenceURI` of the section is returned.
   *
   * @param {string} [referenceURI] Optional. The referenceURI of the section.
   * @returns {KssSection|string} If `referenceURI` is given, the `KssSection`
   *   object is returned to allow chaining of methods. Otherwise, the
   *   referenceURI of the section is returned.
   */
  referenceURI(referenceURI) {
    if (typeof referenceURI === 'undefined') {
      if (!this.data.referenceURI) {
        this.data.referenceURI = encodeURI(
          this.reference()
            .replace(/ \- /g, '-')
            .replace(/[^\w-]+/g, '-')
            .toLowerCase()
        );
      }
      return this.data.referenceURI;
    }

    this.data.referenceURI = referenceURI;
    // Allow chaining.
    return this;
  }

  /**
   * Gets or sets the weight of the section.
   *
   * If the `weight` value is provided, the `weight` for this section is set.
   * Otherwise, the `weight` of the section is returned.
   *
   * @param {number} [weight] Optional. The weight of the section as an integer.
   * @returns {KssSection|number} If `weight` is given, the `KssSection` object
   *   is returned to allow chaining of methods. Otherwise, the weight of the
   *   section is returned.
   */
  weight(weight) {
    if (typeof weight === 'undefined') {
      return this.data.weight;
    }

    // @TODO: The weight needs to bubble-up to the KssStyleGuide weightMap.
    this.data.weight = weight;
    // Allow chaining.
    return this;
  }

  /**
   * Gets or sets the depth of the section.
   *
   * If the `depth` value is provided, the `depth` for this section is set.
   * Otherwise, the `depth` of the section is returned.
   *
   * @param {number} [depth] Optional. The depth of the section as a positive
   *   integer.
   * @returns {KssSection|number} If `depth` is given, the `KssSection` object is
   *   returned to allow chaining of methods. Otherwise, the depth of the section
   *   is returned.
   */
  depth(depth) {
    if (typeof depth === 'undefined') {
      return this.meta.depth;
    }

    this.meta.depth = depth;
    // Allow chaining.
    return this;
  }

  /**
   * Gets or sets the markup of the section.
   *
   * If the `markup` value is provided, the `markup` for this section is set.
   * Otherwise, the `markup` of the section is returned.
   *
   * @param {string} [markup] Optional. The markup of the section.
   * @returns {KssSection|string|boolean} If `markup` is given, the `KssSection` object is
   *   returned to allow chaining of methods. Otherwise, the markup of the section
   *   is returned, or `false` if none.
   */
  markup(markup) {
    if (typeof markup === 'undefined') {
      return this.data.markup;
    }

    this.data.markup = markup;
    // Allow chaining.
    return this;
  }

  /**
   * Gets or sets the file information of the file where the section was
   * originally found.
   *
   * If the `source` parameter is provided, the `source` for this section is
   * set. Otherwise, the `source` of the section is returned.
   *
   * The `source` object contains the following information:
   * - filename: The name of the file.
   * - path: The full path of the file.
   * - line: The line number where the KSS comment is found.
   *
   * @param {{filename, path, line}} [source] The source file information where
   *   the section was originally found.
   * @returns {KssSection|{filename, path, line}} If `source` is given, the
   *   `KssSection` object is returned to allow chaining of methods. Otherwise,
   *   the source of the section is returned.
   */
  source(source) {
    if (typeof source === 'undefined') {
      return this.data.source;
    }

    if (source.filename) {
      this.data.source.filename = source.filename;
    }
    if (source.path) {
      this.data.source.path = source.path;
    }
    if (source.line) {
      this.data.source.line = source.line;
    }

    // Allow chaining.
    return this;
  }

  /**
   * Gets the name of the file where the section was originally found.
   *
   * @returns {string} Returns the source file's path relative to the base path.
   */
  sourceFileName() {
    return this.data.source.filename;
  }

  /**
   * Gets the line number where the section was found in the original source file.
   *
   * @returns {string} Returns the source file's line number.
   */
  sourceLine() {
    return this.data.source.line;
  }

  /**
   * Gets or adds nested objects of the section.
   *
   * A common helper for `.modifiers()` and `.parameters()` methods.
   *
   * Different types of arguments for `properties` will yield different results:
   * - `Object|Array`: If the value is an array of objects or an object, the
   *   `properties` are added to this section.
   * - `undefined`: Pass nothing to return all of the section's properties in an
   *   array.
   * - `integer`: Use a 0-based index to return the section's Nth property.
   * - `string`: Use a string to return a specific modifier by name.
   *
   * @private
   * @param {string} propertyName The name of property in `KssSection`.
   * @param {Constructor} objectConstructor The constructor function for the type
   *   of object the property is.
   * @param {*} [properties] Optional. The properties to set for the section.
   * @returns {*} If `properties` is given, the `KssSection` object is returned to
   *   allow chaining of methods. Otherwise, the requested properties of the
   *   section are returned.
   */
  _propertyHelper(propertyName, objectConstructor, properties) {
    if (typeof properties === 'undefined') {
      return this.data[propertyName];
    }

    // If we are given an object, assign the properties.
    if (typeof properties === 'object') {
      if (!(properties instanceof Array)) {
        properties = [properties];
      }
      properties.forEach(property => {
        let newProperty = (property instanceof objectConstructor) ? property : new objectConstructor(property);
        newProperty.section(this);
        this.data[propertyName].push(newProperty);
      });
      // Allow chaining.
      return this;
    }

    // Otherwise, we should search for the requested property.
    let query = properties,
      index = parseInt(query);
    if (typeof query === 'number' || typeof query === 'string' && query === (index + '')) {
      return (index < this.data[propertyName].length) ? this.data[propertyName][index] : false;
      // If the query can be converted to an integer, search by index instead.
    } else {
      // Otherwise, search for the property by name.
      for (let i = 0; i < this.data[propertyName].length; i++) {
        if (this.data[propertyName][i].name() === query) {
          return this.data[propertyName][i];
        }
      }
    }

    // No matching property found.
    return false;
  }

  /**
   * Gets or adds modifiers of the section.
   *
   * Different types of arguments will yield different results:
   * - `modifiers(Object|Array)`: If the value is an array of objects or an
   *   object, the `modifiers` are added to this section.
   * - `modifiers()`: Pass nothing to return all of the section's modifiers in an
   *   array.
   * - `modifiers(Integer)`: Use a 0-based index to return the section's Nth
   *   modifier.
   * - `modifiers(String)`: Use a string to return a specific modifier by name.
   *
   * @param {*} [modifiers] Optional. The modifiers of the section.
   * @returns {KssSection|KssModifier|KssModifier[]|boolean} If `modifiers` is
   *   given, the `KssSection` object is returned to allow chaining of methods.
   *   Otherwise, the requested modifiers of the section are returned.
   */
  modifiers(modifiers) {
    return this._propertyHelper('modifiers', KssModifier, modifiers);
  }

  /**
   * Gets or adds parameters if the section is a CSS preprocessor function/mixin.
   *
   * Different types of arguments will yield different results:
   *  - `parameters(Object|Array)`: If the value is an array of objects or an
   *    object, the `parameters` are added to this section.
   * - `parameters()`: Pass nothing to return all of the section's parameters in
   *   an array.
   * - `parameters(Integer)`: Use a 0-based index to return the section's Nth
   *   parameter.
   * - `parameters(String)`: Use a string to return a specific parameter by name.
   *
   * @param {*} [parameters] Optional. The parameters of the section.
   * @returns {KssSection|KssParameter|KssParameter[]|boolean} If `parameters` is
   *   given, the `KssSection` object is returned to allow chaining of methods.
   *   Otherwise, the requested parameters of the section are returned.
   */
  parameters(parameters) {
    return this._propertyHelper('parameters', KssParameter, parameters);
  }
}

module.exports = KssSection;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * The `kss/lib/kss_modifier` module is normally accessed via the
 * [`KssModifier()`]{@link module:kss.KssModifier} class of the `kss` module:
 * ```
 * const KssModifier = require('kss').KssModifier;
 * ```
 * @private
 * @module kss/lib/kss_modifier
 */

/**
 * A KssModifier object represents a single modifier of a `KssSection`.
 *
 * This class is normally accessed via the [`kss`]{@link module:kss} module:
 * ```
 * const KssModifier = require('kss').KssModifier;
 * ```
 *
 * @alias module:kss.KssModifier
 */
class KssModifier {

  /**
   * Creates a KssModifier object and stores the given data.
   *
   * If passed an object, it will add `section`, `name`, `description`, and
   * `className` properties.
   *
   * @param {Object} [data] An object of data.
   */
  constructor(data) {
    data = data || {};

    this.meta = {
      section: null
    };

    this.data = {
      name: '',
      description: '',
      className: ''
    };

    // Loop through the given properties.
    for (let name in data) {
      // If the property is defined in this.data or this.meta, add it via our
      // API.
      if (data.hasOwnProperty(name) && (this.data.hasOwnProperty(name) || this.meta.hasOwnProperty(name))) {
        this[name](data[name]);
      }
    }
  }

  /**
   * Gets or sets the `KssSection` object this `KssModifier` is associated with.
   *
   * If the `section` value is provided, the `KssSection` for this modifier is
   * set. Otherwise, the `KssSection` of the modifier is returned.
   *
   * @param {KssSection} [section] Optional. The `KssSection` that owns the
   *   `KssModifier`.
   * @returns {KssSection|KssModifier} If section is given, the current
   *   `KssModifier` object is returned to allow chaining of methods. Otherwise,
   *   the `KssSection` object the modifier belongs to is returned.
   */
  section(section) {
    if (typeof section === 'undefined') {
      return this.meta.section;
    }

    this.meta.section = section;
    // Allow chaining.
    return this;
  }

  /**
   * Gets or sets the name of the `KssModifier`, e.g. `:hover`, `.primary`, etc.
   *
   * If the `name` value is provided, the name of this `KssModifier` is set.
   * Otherwise, the name of the `KssModifier` is returned.
   *
   * @param {string} [name] Optional. The name of the `KssModifier`.
   * @returns {string|KssModifier} If name is given, the current `KssModifier`
   *   object is returned to allow chaining of methods. Otherwise, the name of
   *   the `KssModifier` is returned.
   */
  name(name) {
    if (typeof name === 'undefined') {
      return this.data.name;
    }

    this.data.name = name;
    // Allow chaining.
    return this;
  }

  /**
   * Gets or sets the description of the `KssModifier`.
   *
   * If the `description` is provided, the description of this `KssModifier` is
   * set. Otherwise, the description of the `KssModifier` is returned.
   *
   * @param {string} [description] Optional. The description of the
   *   `KssModifier`.
   * @returns {string|KssModifier} If description is given, the current
   *   `KssModifier` object is returned to allow chaining of methods. Otherwise,
   *   the description of the `KssModifier` is returned.
   */
  description(description) {
    if (typeof description === 'undefined') {
      return this.data.description;
    }

    this.data.description = description;
    // Allow chaining.
    return this;
  }

  /**
   * Gets or sets CSS class(es) suitable to insert into a markup sample to
   * display the modifier's design.
   *
   * By default, the CSS classes the className() method returns are based on the
   * modifier's name. If the modifier's name includes a pseudo-class, e.g.
   * `:hover`, this method will replace the ":" with "pseudo-class-", which
   * matches the selector expected by the kss.js script and its
   * KssStateGenerator.
   *
   * ```
   * modifier.name('.primary:hover');
   * modifier.className(); // Returns "primary pseudo-class-hover"
   * ```
   *
   * To override, the default behavior the class(es) can also be set manually;
   * if the `className` parameter is provided, the className of this
   * `KssModifier` is set and will later be returned as-is instead of calculated
   * based on the `name()`.
   *
   * @param {string} [className] Optional. The class(es) of the `KssModifier`.
   * @returns {string|KssModifier} If the className parameter is given, the
   *   current `KssModifier` object is returned to allow chaining of methods.
   *   Otherwise, the class name(s) of the `KssModifier` are returned.
   */
  className(className) {
    if (typeof className === 'undefined') {
      if (this.data.className) {
        return this.data.className;
      } else {
        let name = this.name().replace(/:/g, '.pseudo-class-');

        // If the name includes child selectors, we only want the first parent
        // selector. Markup should not be multiple elements deep at this stage.
        name = name.split(/\s/)[0];

        // Split into space-separated classes.
        name = name
          .replace(/\./g, ' ')
          .replace(/^\s*/g, '');

        return name;
      }
    }

    this.data.className = className;
    // Allow chaining.
    return this;
  }

  /**
   * Returns the HTML markup used to render this modifier.
   *
   * The markup is retrieved from the KssModifier's section. See
   * `KssSection.markup()` to see how to set the markup.
   *
   * @returns {string} The markup of the modifier.
   */
  markup() {
    if (!this.section()) {
      return '';
    }

    return (this.section().markup() || '');
  }

  /**
   * Return the `KssModifier` as a JSON object.
   *
   * @returns {Object} A JSON object representation of the `KssModifier`.
   */
  toJSON() {
    return {
      name: this.name(),
      description: this.description(),
      className: this.className()
    };
  }
}

module.exports = KssModifier;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * The `kss/lib/kss_parameter` module is normally accessed via the
 * [`KssParameter()`]{@link module:kss.KssParameter} class of the `kss` module:
 * ```
 * const KssParameter = require('kss').KssParameter;
 * ```
 * @private
 * @module kss/lib/kss_parameter
 */

/**
 * A KssParameter object represents a single parameter of a `KssSection`.
 *
 * This class is normally accessed via the [`kss`]{@link module:kss} module:
 * ```
 * const KssParameter = require('kss').KssParameter;
 * ```
 *
 * @alias module:kss.KssParameter
 */
class KssParameter {

  /**
   * Creates a KssParameter object and stores the given data.
   *
   * If passed an object, it will add `section`, `name`, and `description`
   * properties.
   *
   * @param {Object} [data] An object of data.
   */
  constructor(data) {
    data = data || {};

    this.meta = {
      section: null
    };

    this.data = {
      name: '',
      defaultValue: '',
      description: ''
    };

    // Loop through the given properties.
    for (let name in data) {
      // If the property is defined in this.data or this.meta, add it via our API.
      if (data.hasOwnProperty(name) && (this.data.hasOwnProperty(name) || this.meta.hasOwnProperty(name))) {
        this[name](data[name]);
      }
    }
  }

  /**
   * Gets or sets the `KssSection` object this `KssParameter` is associated with.
   *
   * If the `section` value is provided, the `KssSection` for this parameter is
   * set. Otherwise, the `KssSection` of the parameter is returned.
   *
   * @param {KssSection} [section] Optional. The `KssSection` that owns the
   *   `KssParameter`.
   * @returns {KssSection|KssParameter} If section is given, the current
   *   `KssParameter` object is returned to allow chaining of methods. Otherwise,
   *   the `KssSection` object the parameter belongs to is returned.
   */
  section(section) {
    if (typeof section === 'undefined') {
      return this.meta.section;
    }

    this.meta.section = section;
    // Allow chaining.
    return this;
  }

  /**
   * Gets or sets the name of the `KssParameter`.
   *
   * If the `name` value is provided, the name of this `KssParameter` is set.
   * Otherwise, the name of the `KssParameter` is returned.
   *
   * @param {string} [name] Optional. The name of the `KssParameter`.
   * @returns {string|KssParameter} If name is given, the current `KssParameter`
   *   object is returned to allow chaining of methods. Otherwise, the name of the
   *   `KssParameter` is returned.
   */
  name(name) {
    if (typeof name === 'undefined') {
      return this.data.name;
    }

    this.data.name = name;
    // Allow chaining.
    return this;
  }

  /**
   * Gets or sets the default value of the `KssParameter`.
   *
   * If the `defaultValue` value is provided, the default value of this
   * `KssParameter` is set. Otherwise, the default value of the `KssParameter` is
   * returned.
   *
   * @param {string} defaultValue Optional. The default value of the
   *   `KssParameter`.
   * @returns {string|KssParameter} If `defaultValue` is given, the current
   *   `KssParameter` object is returned to allow chaining of methods. Otherwise,
   *   the default value of the `KssParameter` is returned.
   */
  defaultValue(defaultValue) {
    if (typeof defaultValue !== 'undefined') {
      this.data.defaultValue = defaultValue;
      // Allow chaining.
      return this;
    } else {
      return this.data.defaultValue;
    }
  }

  /**
   * Gets or sets the description of the `KssParameter`.
   *
   * If the `description` is provided, the description of this `KssParameter` is set.
   * Otherwise, the description of the `KssParameter` is returned.
   *
   * @param {string} [description] Optional. The description of the `KssParameter`.
   * @returns {string|KssParameter} If description is given, the current
   *   `KssParameter` object is returned to allow chaining of methods. Otherwise,
   *   the description of the `KssParameter` is returned.
   */
  description(description) {
    if (typeof description === 'undefined') {
      return this.data.description;
    }

    this.data.description = description;
    // Allow chaining.
    return this;
  }

  /**
   * Return the `KssParameter` as a JSON object.
   *
   * @returns {Object} A JSON object representation of the `KssParameter`.
   */
  toJSON() {
    return {
      name: this.name(),
      defaultValue: this.defaultValue(),
      description: this.description()
    };
  }
}

module.exports = KssParameter;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * marked - a markdown parser
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 */

;(function() {

/**
 * Block-Level Grammar
 */

var block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: noop,
  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
  nptable: noop,
  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
  blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
  table: noop,
  paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
  text: /^[^\n]+/
};

block.bullet = /(?:[*+-]|\d+\.)/;
block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
block.item = replace(block.item, 'gm')
  (/bull/g, block.bullet)
  ();

block.list = replace(block.list)
  (/bull/g, block.bullet)
  ('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')
  ('def', '\\n+(?=' + block.def.source + ')')
  ();

block.blockquote = replace(block.blockquote)
  ('def', block.def)
  ();

block._tag = '(?!(?:'
  + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
  + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
  + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';

block.html = replace(block.html)
  ('comment', /<!--[\s\S]*?-->/)
  ('closed', /<(tag)[\s\S]+?<\/\1>/)
  ('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
  (/tag/g, block._tag)
  ();

block.paragraph = replace(block.paragraph)
  ('hr', block.hr)
  ('heading', block.heading)
  ('lheading', block.lheading)
  ('blockquote', block.blockquote)
  ('tag', '<' + block._tag)
  ('def', block.def)
  ();

/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);

/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
  paragraph: /^/,
  heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
});

block.gfm.paragraph = replace(block.paragraph)
  ('(?!', '(?!'
    + block.gfm.fences.source.replace('\\1', '\\2') + '|'
    + block.list.source.replace('\\1', '\\3') + '|')
  ();

/**
 * GFM + Tables Block Grammar
 */

block.tables = merge({}, block.gfm, {
  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
});

/**
 * Block Lexer
 */

function Lexer(options) {
  this.tokens = [];
  this.tokens.links = {};
  this.options = options || marked.defaults;
  this.rules = block.normal;

  if (this.options.gfm) {
    if (this.options.tables) {
      this.rules = block.tables;
    } else {
      this.rules = block.gfm;
    }
  }
}

/**
 * Expose Block Rules
 */

Lexer.rules = block;

/**
 * Static Lex Method
 */

Lexer.lex = function(src, options) {
  var lexer = new Lexer(options);
  return lexer.lex(src);
};

/**
 * Preprocessing
 */

Lexer.prototype.lex = function(src) {
  src = src
    .replace(/\r\n|\r/g, '\n')
    .replace(/\t/g, '    ')
    .replace(/\u00a0/g, ' ')
    .replace(/\u2424/g, '\n');

  return this.token(src, true);
};

/**
 * Lexing
 */

Lexer.prototype.token = function(src, top, bq) {
  var src = src.replace(/^ +$/gm, '')
    , next
    , loose
    , cap
    , bull
    , b
    , item
    , space
    , i
    , l;

  while (src) {
    // newline
    if (cap = this.rules.newline.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[0].length > 1) {
        this.tokens.push({
          type: 'space'
        });
      }
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      cap = cap[0].replace(/^ {4}/gm, '');
      this.tokens.push({
        type: 'code',
        text: !this.options.pedantic
          ? cap.replace(/\n+$/, '')
          : cap
      });
      continue;
    }

    // fences (gfm)
    if (cap = this.rules.fences.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'code',
        lang: cap[2],
        text: cap[3] || ''
      });
      continue;
    }

    // heading
    if (cap = this.rules.heading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[1].length,
        text: cap[2]
      });
      continue;
    }

    // table no leading pipe (gfm)
    if (top && (cap = this.rules.nptable.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i].split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // lheading
    if (cap = this.rules.lheading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[2] === '=' ? 1 : 2,
        text: cap[1]
      });
      continue;
    }

    // hr
    if (cap = this.rules.hr.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'hr'
      });
      continue;
    }

    // blockquote
    if (cap = this.rules.blockquote.exec(src)) {
      src = src.substring(cap[0].length);

      this.tokens.push({
        type: 'blockquote_start'
      });

      cap = cap[0].replace(/^ *> ?/gm, '');

      // Pass `top` to keep the current
      // "toplevel" state. This is exactly
      // how markdown.pl works.
      this.token(cap, top, true);

      this.tokens.push({
        type: 'blockquote_end'
      });

      continue;
    }

    // list
    if (cap = this.rules.list.exec(src)) {
      src = src.substring(cap[0].length);
      bull = cap[2];

      this.tokens.push({
        type: 'list_start',
        ordered: bull.length > 1
      });

      // Get each top-level item.
      cap = cap[0].match(this.rules.item);

      next = false;
      l = cap.length;
      i = 0;

      for (; i < l; i++) {
        item = cap[i];

        // Remove the list item's bullet
        // so it is seen as the next token.
        space = item.length;
        item = item.replace(/^ *([*+-]|\d+\.) +/, '');

        // Outdent whatever the
        // list item contains. Hacky.
        if (~item.indexOf('\n ')) {
          space -= item.length;
          item = !this.options.pedantic
            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
            : item.replace(/^ {1,4}/gm, '');
        }

        // Determine whether the next list item belongs here.
        // Backpedal if it does not belong in this list.
        if (this.options.smartLists && i !== l - 1) {
          b = block.bullet.exec(cap[i + 1])[0];
          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
            src = cap.slice(i + 1).join('\n') + src;
            i = l - 1;
          }
        }

        // Determine whether item is loose or not.
        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
        // for discount behavior.
        loose = next || /\n\n(?!\s*$)/.test(item);
        if (i !== l - 1) {
          next = item.charAt(item.length - 1) === '\n';
          if (!loose) loose = next;
        }

        this.tokens.push({
          type: loose
            ? 'loose_item_start'
            : 'list_item_start'
        });

        // Recurse.
        this.token(item, false, bq);

        this.tokens.push({
          type: 'list_item_end'
        });
      }

      this.tokens.push({
        type: 'list_end'
      });

      continue;
    }

    // html
    if (cap = this.rules.html.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: this.options.sanitize
          ? 'paragraph'
          : 'html',
        pre: !this.options.sanitizer
          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
        text: cap[0]
      });
      continue;
    }

    // def
    if ((!bq && top) && (cap = this.rules.def.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.links[cap[1].toLowerCase()] = {
        href: cap[2],
        title: cap[3]
      };
      continue;
    }

    // table (gfm)
    if (top && (cap = this.rules.table.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i]
          .replace(/^ *\| *| *\| *$/g, '')
          .split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // top-level paragraph
    if (top && (cap = this.rules.paragraph.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'paragraph',
        text: cap[1].charAt(cap[1].length - 1) === '\n'
          ? cap[1].slice(0, -1)
          : cap[1]
      });
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      // Top-level should never reach here.
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'text',
        text: cap[0]
      });
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return this.tokens;
};

/**
 * Inline-Level Grammar
 */

var inline = {
  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
  url: noop,
  tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
  link: /^!?\[(inside)\]\(href\)/,
  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
  em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
  code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
  br: /^ {2,}\n(?!\s*$)/,
  del: noop,
  text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
};

inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

inline.link = replace(inline.link)
  ('inside', inline._inside)
  ('href', inline._href)
  ();

inline.reflink = replace(inline.reflink)
  ('inside', inline._inside)
  ();

/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
});

/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: replace(inline.escape)('])', '~|])')(),
  url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
  del: /^~~(?=\S)([\s\S]*?\S)~~/,
  text: replace(inline.text)
    (']|', '~]|')
    ('|', '|https?://|')
    ()
});

/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: replace(inline.br)('{2,}', '*')(),
  text: replace(inline.gfm.text)('{2,}', '*')()
});

/**
 * Inline Lexer & Compiler
 */

function InlineLexer(links, options) {
  this.options = options || marked.defaults;
  this.links = links;
  this.rules = inline.normal;
  this.renderer = this.options.renderer || new Renderer;
  this.renderer.options = this.options;

  if (!this.links) {
    throw new
      Error('Tokens array requires a `links` property.');
  }

  if (this.options.gfm) {
    if (this.options.breaks) {
      this.rules = inline.breaks;
    } else {
      this.rules = inline.gfm;
    }
  } else if (this.options.pedantic) {
    this.rules = inline.pedantic;
  }
}

/**
 * Expose Inline Rules
 */

InlineLexer.rules = inline;

/**
 * Static Lexing/Compiling Method
 */

InlineLexer.output = function(src, links, options) {
  var inline = new InlineLexer(links, options);
  return inline.output(src);
};

/**
 * Lexing/Compiling
 */

InlineLexer.prototype.output = function(src) {
  var out = ''
    , link
    , text
    , href
    , cap;

  while (src) {
    // escape
    if (cap = this.rules.escape.exec(src)) {
      src = src.substring(cap[0].length);
      out += cap[1];
      continue;
    }

    // autolink
    if (cap = this.rules.autolink.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[2] === '@') {
        text = cap[1].charAt(6) === ':'
          ? this.mangle(cap[1].substring(7))
          : this.mangle(cap[1]);
        href = this.mangle('mailto:') + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      out += this.renderer.link(href, null, text);
      continue;
    }

    // url (gfm)
    if (!this.inLink && (cap = this.rules.url.exec(src))) {
      src = src.substring(cap[0].length);
      text = escape(cap[1]);
      href = text;
      out += this.renderer.link(href, null, text);
      continue;
    }

    // tag
    if (cap = this.rules.tag.exec(src)) {
      if (!this.inLink && /^<a /i.test(cap[0])) {
        this.inLink = true;
      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
        this.inLink = false;
      }
      src = src.substring(cap[0].length);
      out += this.options.sanitize
        ? this.options.sanitizer
          ? this.options.sanitizer(cap[0])
          : escape(cap[0])
        : cap[0]
      continue;
    }

    // link
    if (cap = this.rules.link.exec(src)) {
      src = src.substring(cap[0].length);
      this.inLink = true;
      out += this.outputLink(cap, {
        href: cap[2],
        title: cap[3]
      });
      this.inLink = false;
      continue;
    }

    // reflink, nolink
    if ((cap = this.rules.reflink.exec(src))
        || (cap = this.rules.nolink.exec(src))) {
      src = src.substring(cap[0].length);
      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = this.links[link.toLowerCase()];
      if (!link || !link.href) {
        out += cap[0].charAt(0);
        src = cap[0].substring(1) + src;
        continue;
      }
      this.inLink = true;
      out += this.outputLink(cap, link);
      this.inLink = false;
      continue;
    }

    // strong
    if (cap = this.rules.strong.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.strong(this.output(cap[2] || cap[1]));
      continue;
    }

    // em
    if (cap = this.rules.em.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.em(this.output(cap[2] || cap[1]));
      continue;
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.codespan(escape(cap[2], true));
      continue;
    }

    // br
    if (cap = this.rules.br.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.br();
      continue;
    }

    // del (gfm)
    if (cap = this.rules.del.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.del(this.output(cap[1]));
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.text(escape(this.smartypants(cap[0])));
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return out;
};

/**
 * Compile Link
 */

InlineLexer.prototype.outputLink = function(cap, link) {
  var href = escape(link.href)
    , title = link.title ? escape(link.title) : null;

  return cap[0].charAt(0) !== '!'
    ? this.renderer.link(href, title, this.output(cap[1]))
    : this.renderer.image(href, title, escape(cap[1]));
};

/**
 * Smartypants Transformations
 */

InlineLexer.prototype.smartypants = function(text) {
  if (!this.options.smartypants) return text;
  return text
    // em-dashes
    .replace(/---/g, '\u2014')
    // en-dashes
    .replace(/--/g, '\u2013')
    // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
    // closing singles & apostrophes
    .replace(/'/g, '\u2019')
    // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
    // closing doubles
    .replace(/"/g, '\u201d')
    // ellipses
    .replace(/\.{3}/g, '\u2026');
};

/**
 * Mangle Links
 */

InlineLexer.prototype.mangle = function(text) {
  if (!this.options.mangle) return text;
  var out = ''
    , l = text.length
    , i = 0
    , ch;

  for (; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }
    out += '&#' + ch + ';';
  }

  return out;
};

/**
 * Renderer
 */

function Renderer(options) {
  this.options = options || {};
}

Renderer.prototype.code = function(code, lang, escaped) {
  if (this.options.highlight) {
    var out = this.options.highlight(code, lang);
    if (out != null && out !== code) {
      escaped = true;
      code = out;
    }
  }

  if (!lang) {
    return '<pre><code>'
      + (escaped ? code : escape(code, true))
      + '\n</code></pre>';
  }

  return '<pre><code class="'
    + this.options.langPrefix
    + escape(lang, true)
    + '">'
    + (escaped ? code : escape(code, true))
    + '\n</code></pre>\n';
};

Renderer.prototype.blockquote = function(quote) {
  return '<blockquote>\n' + quote + '</blockquote>\n';
};

Renderer.prototype.html = function(html) {
  return html;
};

Renderer.prototype.heading = function(text, level, raw) {
  return '<h'
    + level
    + ' id="'
    + this.options.headerPrefix
    + raw.toLowerCase().replace(/[^\w]+/g, '-')
    + '">'
    + text
    + '</h'
    + level
    + '>\n';
};

Renderer.prototype.hr = function() {
  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
};

Renderer.prototype.list = function(body, ordered) {
  var type = ordered ? 'ol' : 'ul';
  return '<' + type + '>\n' + body + '</' + type + '>\n';
};

Renderer.prototype.listitem = function(text) {
  return '<li>' + text + '</li>\n';
};

Renderer.prototype.paragraph = function(text) {
  return '<p>' + text + '</p>\n';
};

Renderer.prototype.table = function(header, body) {
  return '<table>\n'
    + '<thead>\n'
    + header
    + '</thead>\n'
    + '<tbody>\n'
    + body
    + '</tbody>\n'
    + '</table>\n';
};

Renderer.prototype.tablerow = function(content) {
  return '<tr>\n' + content + '</tr>\n';
};

Renderer.prototype.tablecell = function(content, flags) {
  var type = flags.header ? 'th' : 'td';
  var tag = flags.align
    ? '<' + type + ' style="text-align:' + flags.align + '">'
    : '<' + type + '>';
  return tag + content + '</' + type + '>\n';
};

// span level renderer
Renderer.prototype.strong = function(text) {
  return '<strong>' + text + '</strong>';
};

Renderer.prototype.em = function(text) {
  return '<em>' + text + '</em>';
};

Renderer.prototype.codespan = function(text) {
  return '<code>' + text + '</code>';
};

Renderer.prototype.br = function() {
  return this.options.xhtml ? '<br/>' : '<br>';
};

Renderer.prototype.del = function(text) {
  return '<del>' + text + '</del>';
};

Renderer.prototype.link = function(href, title, text) {
  if (this.options.sanitize) {
    try {
      var prot = decodeURIComponent(unescape(href))
        .replace(/[^\w:]/g, '')
        .toLowerCase();
    } catch (e) {
      return '';
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
      return '';
    }
  }
  var out = '<a href="' + href + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += '>' + text + '</a>';
  return out;
};

Renderer.prototype.image = function(href, title, text) {
  var out = '<img src="' + href + '" alt="' + text + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += this.options.xhtml ? '/>' : '>';
  return out;
};

Renderer.prototype.text = function(text) {
  return text;
};

/**
 * Parsing & Compiling
 */

function Parser(options) {
  this.tokens = [];
  this.token = null;
  this.options = options || marked.defaults;
  this.options.renderer = this.options.renderer || new Renderer;
  this.renderer = this.options.renderer;
  this.renderer.options = this.options;
}

/**
 * Static Parse Method
 */

Parser.parse = function(src, options, renderer) {
  var parser = new Parser(options, renderer);
  return parser.parse(src);
};

/**
 * Parse Loop
 */

Parser.prototype.parse = function(src) {
  this.inline = new InlineLexer(src.links, this.options, this.renderer);
  this.tokens = src.reverse();

  var out = '';
  while (this.next()) {
    out += this.tok();
  }

  return out;
};

/**
 * Next Token
 */

Parser.prototype.next = function() {
  return this.token = this.tokens.pop();
};

/**
 * Preview Next Token
 */

Parser.prototype.peek = function() {
  return this.tokens[this.tokens.length - 1] || 0;
};

/**
 * Parse Text Tokens
 */

Parser.prototype.parseText = function() {
  var body = this.token.text;

  while (this.peek().type === 'text') {
    body += '\n' + this.next().text;
  }

  return this.inline.output(body);
};

/**
 * Parse Current Token
 */

Parser.prototype.tok = function() {
  switch (this.token.type) {
    case 'space': {
      return '';
    }
    case 'hr': {
      return this.renderer.hr();
    }
    case 'heading': {
      return this.renderer.heading(
        this.inline.output(this.token.text),
        this.token.depth,
        this.token.text);
    }
    case 'code': {
      return this.renderer.code(this.token.text,
        this.token.lang,
        this.token.escaped);
    }
    case 'table': {
      var header = ''
        , body = ''
        , i
        , row
        , cell
        , flags
        , j;

      // header
      cell = '';
      for (i = 0; i < this.token.header.length; i++) {
        flags = { header: true, align: this.token.align[i] };
        cell += this.renderer.tablecell(
          this.inline.output(this.token.header[i]),
          { header: true, align: this.token.align[i] }
        );
      }
      header += this.renderer.tablerow(cell);

      for (i = 0; i < this.token.cells.length; i++) {
        row = this.token.cells[i];

        cell = '';
        for (j = 0; j < row.length; j++) {
          cell += this.renderer.tablecell(
            this.inline.output(row[j]),
            { header: false, align: this.token.align[j] }
          );
        }

        body += this.renderer.tablerow(cell);
      }
      return this.renderer.table(header, body);
    }
    case 'blockquote_start': {
      var body = '';

      while (this.next().type !== 'blockquote_end') {
        body += this.tok();
      }

      return this.renderer.blockquote(body);
    }
    case 'list_start': {
      var body = ''
        , ordered = this.token.ordered;

      while (this.next().type !== 'list_end') {
        body += this.tok();
      }

      return this.renderer.list(body, ordered);
    }
    case 'list_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.token.type === 'text'
          ? this.parseText()
          : this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'loose_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'html': {
      var html = !this.token.pre && !this.options.pedantic
        ? this.inline.output(this.token.text)
        : this.token.text;
      return this.renderer.html(html);
    }
    case 'paragraph': {
      return this.renderer.paragraph(this.inline.output(this.token.text));
    }
    case 'text': {
      return this.renderer.paragraph(this.parseText());
    }
  }
};

/**
 * Helpers
 */

function escape(html, encode) {
  return html
    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function unescape(html) {
	// explicitly match decimal, hex, and named HTML entities 
  return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g, function(_, n) {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x'
        ? String.fromCharCode(parseInt(n.substring(2), 16))
        : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}

function replace(regex, opt) {
  regex = regex.source;
  opt = opt || '';
  return function self(name, val) {
    if (!name) return new RegExp(regex, opt);
    val = val.source || val;
    val = val.replace(/(^|[^\[])\^/g, '$1');
    regex = regex.replace(name, val);
    return self;
  };
}

function noop() {}
noop.exec = noop;

function merge(obj) {
  var i = 1
    , target
    , key;

  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}


/**
 * Marked
 */

function marked(src, opt, callback) {
  if (callback || typeof opt === 'function') {
    if (!callback) {
      callback = opt;
      opt = null;
    }

    opt = merge({}, marked.defaults, opt || {});

    var highlight = opt.highlight
      , tokens
      , pending
      , i = 0;

    try {
      tokens = Lexer.lex(src, opt)
    } catch (e) {
      return callback(e);
    }

    pending = tokens.length;

    var done = function(err) {
      if (err) {
        opt.highlight = highlight;
        return callback(err);
      }

      var out;

      try {
        out = Parser.parse(tokens, opt);
      } catch (e) {
        err = e;
      }

      opt.highlight = highlight;

      return err
        ? callback(err)
        : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done();
    }

    delete opt.highlight;

    if (!pending) return done();

    for (; i < tokens.length; i++) {
      (function(token) {
        if (token.type !== 'code') {
          return --pending || done();
        }
        return highlight(token.text, token.lang, function(err, code) {
          if (err) return done(err);
          if (code == null || code === token.text) {
            return --pending || done();
          }
          token.text = code;
          token.escaped = true;
          --pending || done();
        });
      })(tokens[i]);
    }

    return;
  }
  try {
    if (opt) opt = merge({}, marked.defaults, opt);
    return Parser.parse(Lexer.lex(src, opt), opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/chjj/marked.';
    if ((opt || marked.defaults).silent) {
      return '<p>An error occured:</p><pre>'
        + escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
  merge(marked.defaults, opt);
  return marked;
};

marked.defaults = {
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  sanitizer: null,
  mangle: true,
  smartLists: false,
  silent: false,
  highlight: null,
  langPrefix: 'lang-',
  smartypants: false,
  headerPrefix: '',
  renderer: new Renderer,
  xhtml: false
};

/**
 * Expose
 */

marked.Parser = Parser;
marked.parser = Parser.parse;

marked.Renderer = Renderer;

marked.Lexer = Lexer;
marked.lexer = Lexer.lex;

marked.InlineLexer = InlineLexer;
marked.inlineLexer = InlineLexer.output;

marked.parse = marked;

if (true) {
  module.exports = marked;
} else if (typeof define === 'function' && define.amd) {
  define(function() { return marked; });
} else {
  this.marked = marked;
}

}).call(function() {
  return this || (typeof window !== 'undefined' ? window : global);
}());

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18)


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deprecate = __webpack_require__(1);
var OctokatBase = __webpack_require__(19);

var HypermediaPlugin = __webpack_require__(26);

var ALL_PLUGINS = [__webpack_require__(27), // re-chain methods when we detect an object (issue, comment, user, etc)
__webpack_require__(29), __webpack_require__(31), __webpack_require__(33), __webpack_require__(35), __webpack_require__(7), __webpack_require__(36), __webpack_require__(37),
// Run cacheHandler after PagedResults so the link headers are remembered
// but before hypermedia so the object is still serializable
__webpack_require__(38), __webpack_require__(39), HypermediaPlugin, __webpack_require__(40)];

var Octokat = function Octokat() {
  var clientOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (clientOptions.plugins == null) {
    clientOptions.plugins = ALL_PLUGINS;
  }

  if (clientOptions.disableHypermedia) {
    deprecate('Please use the clientOptions.plugins array and just do not include the hypermedia plugin');
    clientOptions.plugins = clientOptions.plugins.filter(function (plugin) {
      return plugin !== HypermediaPlugin;
    });
  }

  // HACK to propagate the Fetch implementation
  if (Octokat.Fetch) {
    OctokatBase.Fetch = Octokat.Fetch;
  }
  // the octokat instance
  var instance = new OctokatBase(clientOptions);
  return instance;
};

// module.exports = Octokat;
module.exports = Octokat;
//# sourceMappingURL=octokat.js.map

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var fetch = __webpack_require__(20);
var plus = __webpack_require__(0);
var deprecate = __webpack_require__(1);
var TREE_OPTIONS = __webpack_require__(4);
var Chainer = __webpack_require__(5);

var _require = __webpack_require__(6

// Use the following plugins by default (they should be neglegible additional code)
),
    VerbMethods = _require.VerbMethods,
    toPromise = _require.toPromise;

var SimpleVerbsPlugin = __webpack_require__(7);

var Requester = __webpack_require__(24);
var applyHypermedia = __webpack_require__(25

// Checks if a response is a Buffer or not
);var isBuffer = function isBuffer(data) {
  if (typeof global['Buffer'] !== 'undefined') {
    return global['Buffer'].isBuffer(data);
  } else {
    // If `global` is not defined then we are not running inside Node so
    // the object could never be a Buffer.
    return false;
  }
};

var uncamelizeObj = function uncamelizeObj(obj) {
  if (Array.isArray(obj)) {
    return obj.map(function (i) {
      return uncamelizeObj(i);
    });
  } else if (obj === Object(obj)) {
    var o = {};
    var iterable = Object.keys(obj);
    for (var j = 0; j < iterable.length; j++) {
      var key = iterable[j];
      var value = obj[key];
      o[plus.uncamelize(key)] = uncamelizeObj(value);
    }
    return o;
  } else {
    return obj;
  }
};

var OctokatBase = function OctokatBase() {
  var clientOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var plugins = clientOptions.plugins || [SimpleVerbsPlugin];

  // TODO remove disableHypermedia
  var disableHypermedia = clientOptions.disableHypermedia;
  // set defaults

  if (typeof disableHypermedia === 'undefined' || disableHypermedia === null) {
    disableHypermedia = false;
  }

  // the octokat instance
  var instance = {};

  var fetchImpl = OctokatBase.Fetch || fetch;

  var request = function request(method, path, data) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : { raw: false, isBase64: false, isBoolean: false };
    var cb = arguments[4];

    // replacer = new Replacer(request)

    // Use a slightly convoluted syntax so browserify does not include the
    // NodeJS Buffer in the browser version.
    // data is a Buffer when uploading a release asset file
    if (data && !isBuffer(data)) {
      data = uncamelizeObj(data);
    }

    // For each request, convert the JSON into Objects
    var requester = new Requester(instance, clientOptions, plugins, fetchImpl);

    return requester.request(method, path, data, options).then(function (val) {
      if ((options || {}).raw) {
        return val;
      }

      if (!disableHypermedia) {
        var context = {
          data: val,
          plugins: plugins,
          requester: requester,
          instance: instance,
          clientOptions: clientOptions
        };
        return instance._parseWithContextPromise(path, context);
      } else {
        return val;
      }
    });
  };

  var verbMethods = new VerbMethods(plugins, { request: request });
  new Chainer(verbMethods).chain('', null, TREE_OPTIONS, instance

  // Special case for `me`
  );instance.me = instance.user;

  instance.parse = function (data) {
    // The signature of toPromise has cb as the 1st arg
    var context = {
      requester: { request: request },
      plugins: plugins,
      data: data,
      instance: instance,
      clientOptions: clientOptions
    };
    return instance._parseWithContextPromise('', context);
  };

  // If not callback is provided then return a promise
  instance.parse = toPromise(instance.parse);

  instance._parseWithContextPromise = function (path, context) {
    var data = context.data;

    if (data) {
      context.url = data.url || path;
    }

    var responseMiddlewareAsyncs = plus.map(plus.filter(plugins, function (_ref) {
      var responseMiddlewareAsync = _ref.responseMiddlewareAsync;
      return responseMiddlewareAsync;
    }), function (plugin) {
      return plugin.responseMiddlewareAsync.bind(plugin);
    });

    var prev = Promise.resolve(context);
    responseMiddlewareAsyncs.forEach(function (p) {
      prev = prev.then(p);
    });
    return prev.then(function (val) {
      return val.data;
    });
  };

  // TODO remove this deprectaion too
  instance._fromUrlWithDefault = function (path, defaultFn) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    path = applyHypermedia.apply(undefined, [path].concat(args));
    verbMethods.injectVerbMethods(path, defaultFn);
    return defaultFn;
  };

  instance.fromUrl = function (path) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    var defaultFn = function defaultFn() {
      deprecate('call ....fetch() explicitly instead of ...()');
      return defaultFn.fetch.apply(defaultFn, arguments);
    };

    return instance._fromUrlWithDefault.apply(instance, [path, defaultFn].concat(args));
  };

  instance._fromUrlCurried = function (path, defaultFn) {
    var fn = function fn() {
      for (var _len3 = arguments.length, templateArgs = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        templateArgs[_key3] = arguments[_key3];
      }

      // This conditional logic is for the deprecated .nextPage() call
      if (defaultFn && templateArgs.length === 0) {
        return defaultFn.apply(fn);
      } else {
        return instance.fromUrl.apply(instance, [path].concat(templateArgs));
      }
    };

    if (!/\{/.test(path)) {
      verbMethods.injectVerbMethods(path, fn);
    }
    return fn;
  };

  // Add the GitHub Status API https://status.github.com/api
  instance.status = instance.fromUrl('https://status.github.com/api/status.json');
  instance.status.api = instance.fromUrl('https://status.github.com/api.json');
  instance.status.lastMessage = instance.fromUrl('https://status.github.com/api/last-message.json');
  instance.status.messages = instance.fromUrl('https://status.github.com/api/messages.json');

  return instance;
};

module.exports = OctokatBase;
//# sourceMappingURL=base.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (typeof window.fetch === 'function') {
  module.exports = window.fetch;
} else {
  module.exports = function () {
    throw new Error('Octokat Error: window.fetch function not found. Either use the https://npmjs.com/package/whatwg-fetch polyfill or set Octokat.Fetch variable to be the fetch function');
  };
}
//# sourceMappingURL=fetch-browser.js.map

/***/ }),
/* 21 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _require = __webpack_require__(0

// Request Function
// ===============================
//
// Generates the actual HTTP requests to GitHub.
// Handles ETag caching, authentication headers, boolean requests, and paged results

// # Construct the request function.
// It contains all the auth credentials passed in to the client constructor

),
    filter = _require.filter,
    map = _require.map;

var EVENT_ID = 0; // counter for the emitter so it is easier to match up requests

module.exports = function () {
  function Requester(_instance) {
    var _clientOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var plugins = arguments[2];
    var fetchImpl = arguments[3];

    _classCallCheck(this, Requester);

    // Provide an option to override the default URL
    this._instance = _instance;
    this._clientOptions = _clientOptions;
    if (this._clientOptions.rootURL == null) {
      this._clientOptions.rootURL = 'https://api.github.com';
    }
    if (this._clientOptions.useETags == null) {
      this._clientOptions.useETags = true;
    }
    if (this._clientOptions.usePostInsteadOfPatch == null) {
      this._clientOptions.usePostInsteadOfPatch = false;
    }
    if (this._clientOptions.userAgent == null) {
      if (typeof window === 'undefined' || window === null) {
        // Set the `User-Agent` because it is required and NodeJS
        // does not send one by default.
        // See http://developer.github.com/v3/#user-agent-required
        this._clientOptions.userAgent = 'octokat.js';
      }
    }

    // These are updated whenever a request is made (optional)
    if (typeof this._clientOptions.emitter === 'function') {
      this._emit = this._clientOptions.emitter;
    }

    this._pluginMiddlewareAsync = map(filter(plugins, function (_ref) {
      var requestMiddlewareAsync = _ref.requestMiddlewareAsync;
      return requestMiddlewareAsync;
    }), function (plugin) {
      return plugin.requestMiddlewareAsync.bind(plugin);
    });
    this._plugins = plugins;
    this._fetchImpl = fetchImpl;
  }

  // HTTP Request Abstraction
  // =======
  //


  _createClass(Requester, [{
    key: 'request',
    value: function request(method, path, data) {
      var _this = this;

      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : { isRaw: false, isBase64: false, isBoolean: false, contentType: 'application/json' };
      var cb = arguments[4];

      if (typeof options === 'undefined' || options === null) {
        options = {};
      }
      if (options.isRaw == null) {
        options.isRaw = false;
      }
      if (options.isBase64 == null) {
        options.isBase64 = false;
      }
      if (options.isBoolean == null) {
        options.isBoolean = false;
      }
      if (options.contentType == null) {
        options.contentType = 'application/json';
      }

      // console.log method, path, data, options, typeof cb

      // Only prefix the path when it does not begin with http.
      // This is so pagination works (which provides absolute URLs).
      if (!/^http/.test(path)) {
        path = '' + this._clientOptions.rootURL + path;
      }

      var headers = {
        'Accept': this._clientOptions.acceptHeader || 'application/json',
        'User-Agent': this._clientOptions.userAgent || 'octokat.js'
      };

      var acc = { method: method, path: path, headers: headers, options: options, clientOptions: this._clientOptions

        // To use async.waterfall we need to pass in the initial data (`acc`)
        // so we create an initial function that just takes a callback
      };var initial = Promise.resolve(acc);

      var prev = initial;
      this._pluginMiddlewareAsync.forEach(function (p) {
        prev = prev.then(p);
      });
      return prev.then(function (acc) {
        var _acc = acc;
        method = _acc.method;
        headers = _acc.headers;


        if (options.isRaw) {
          headers['Accept'] = 'application/vnd.github.raw';
        }

        var fetchArgs = {
          // Be sure to **not** blow the cache with a random number
          // (GitHub will respond with 5xx or CORS errors)
          method: method,
          headers: headers,
          body: !options.isRaw && data && JSON.stringify(data) || data
        };

        var eventId = ++EVENT_ID;
        __guardFunc__(_this._emit, function (f) {
          return f('start', eventId, { method: method, path: path, data: data, options: options });
        });

        return _this._fetchImpl(path, fetchArgs).then(function (response) {
          var jqXHR = response;

          // Fire listeners when the request completes or fails
          if (_this._emit) {
            if (response.headers.get('X-RateLimit-Limit')) {
              var rateLimit = parseFloat(response.headers.get('X-RateLimit-Limit'));
              var rateLimitRemaining = parseFloat(response.headers.get('X-RateLimit-Remaining'));
              var rateLimitReset = parseFloat(response.headers.get('X-RateLimit-Reset')
              // Reset time is in seconds, not milliseconds
              // if rateLimitReset
              //   rateLimitReset = new Date(rateLimitReset * 1000)

              );var emitterRate = {
                remaining: rateLimitRemaining,
                limit: rateLimit,
                reset: rateLimitReset
              };

              if (response.headers.get('X-OAuth-Scopes')) {
                emitterRate.scopes = response.headers.get('X-OAuth-Scopes').split(', ');
              }
            }
            _this._emit('end', eventId, { method: method, path: path, data: data, options: options }, response.status, emitterRate);
          }

          // Return the result and Base64 encode it if `options.isBase64` flag is set.

          // Respond with the redirect URL (for archive links)
          // TODO: implement a `followRedirects` plugin
          if (response.status === 302) {
            return response.headers.get('Location');
          } else if (options.isBoolean && response.status === 204) {
            // If the request is a boolean yes/no question GitHub will indicate
            // via the HTTP Status of 204 (No Content) or 404 instead of a 200.
            return true;
          } else if (options.isBoolean && response.status === 404) {
            return false;
            // } else if (options.isBoolean) {
            //   throw new Error(`Octokat Bug? got a response to a boolean question that was not 204 or 404.  ${fetchArgs.method} ${path} Status: ${response.status}`)
          } else if (response.status >= 200 && response.status < 300 || response.status === 304 || response.status === 302 || response.status === 0) {
            // If it was a boolean question and the server responded with 204 ignore.
            var dataPromise = void 0;

            // If the status was 304 then let the cache handler pick it up. leave data blank
            if (response.status === 304) {
              dataPromise = Promise.resolve(null);
            } else {
              // TODO: use a blob if we are expecting a binary

              var contentType = response.headers.get('content-type') || '';

              // Use .indexOf instead of .startsWith because PhantomJS does not support .startsWith
              if (contentType.indexOf('application/json') === 0) {
                dataPromise = response.json();
              } else {
                // Other contentTypes:
                // - 'text/plain'
                // - 'application/octocat-stream'
                // - 'application/vnd.github.raw'
                dataPromise = response.text();
              }
            }

            return dataPromise.then(function (data) {
              acc = {
                clientOptions: _this._clientOptions,
                plugins: _this._plugins,
                data: data,
                options: options,
                jqXHR: jqXHR, // for cacheHandler
                status: response.status, // cacheHandler changes this
                request: acc, // Include the request data for plugins like cacheHandler
                requester: _this, // for Hypermedia to generate verb methods
                instance: _this._instance // for Hypermedia to be able to call `.fromUrl`
              };
              return _this._instance._parseWithContextPromise('', acc);
            });
          } else {
            return response.text().then(function (text) {
              return Promise.reject(new Error(text + ' ' + fetchArgs.method + ' ' + path + ' Status: ' + response.status));
            });
          }
        });
      });
    }
  }]);

  return Requester;
}();

function __guardFunc__(func, transform) {
  return typeof func === 'function' ? transform(func) : undefined;
}
//# sourceMappingURL=requester.js.map

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toQueryString = __webpack_require__(2);
var deprecate = __webpack_require__(1);

module.exports = function (url) {
  // Deprecated interface. Use an Object to specify the args in the template.
  // the order of fields in the template should not matter.
  var m = void 0;
  if ((arguments.length <= 1 ? 0 : arguments.length - 1) === 0) {
    var templateParams = {};
  } else {
    if ((arguments.length <= 1 ? 0 : arguments.length - 1) > 1) {
      deprecate('When filling in a template URL pass all the field to fill in 1 object instead of comma-separated args');
    }

    var templateParams = arguments.length <= 1 ? undefined : arguments[1];
  }

  // url can contain {name} or {/name} in the URL.
  // for every arg passed in, replace {...} with that arg
  // and remove the rest (they may or may not be optional)
  var i = 0;
  while (m = /(\{[^\}]+\})/.exec(url)) {
    // `match` is something like `{/foo}` or `{?foo,bar}` or `{foo}` (last one means it is required)
    var match = m[1];
    var param = '';
    // replace it
    switch (match[1]) {
      case '/':
        var fieldName = match.slice(2, match.length - 1 // omit the braces and the slash
        );var fieldValue = templateParams[fieldName];
        if (fieldValue) {
          if (/\//.test(fieldValue)) {
            throw new Error('Octokat Error: this field must not contain slashes: ' + fieldName);
          }
          param = '/' + fieldValue;
        }
        break;
      case '+':
        fieldName = match.slice(2, match.length - 1 // omit the braces and the `+`
        );fieldValue = templateParams[fieldName];
        if (fieldValue) {
          param = fieldValue;
        }
        break;
      case '?':
        // Strip off the "{?" and the trailing "}"
        // For example, the URL is `/assets{?name,label}`
        //   which turns into `/assets?name=foo.zip`
        // Used to upload releases via the repo releases API.
        //
        // When match contains `,` or
        // `args.length is 1` and args[0] is object match the args to those in the template
        var optionalNames = match.slice(2, -2 + 1).split(',' // omit the braces and the `?` before splitting
        );var optionalParams = {};
        for (var j = 0; j < optionalNames.length; j++) {
          fieldName = optionalNames[j];
          optionalParams[fieldName] = templateParams[fieldName];
        }
        param = toQueryString(optionalParams);
        break;
      case '&':
        optionalNames = match.slice(2, -2 + 1).split(',' // omit the braces and the `?` before splitting
        );optionalParams = {};
        for (var k = 0; k < optionalNames.length; k++) {
          fieldName = optionalNames[k];
          optionalParams[fieldName] = templateParams[fieldName];
        }
        param = toQueryString(optionalParams, true // true means omitQuestionMark
        );break;

      default:
        // This is a required field. ie `{repoName}`
        fieldName = match.slice(1, match.length - 1 // omit the braces
        );if (templateParams[fieldName]) {
          param = templateParams[fieldName];
        } else {
          throw new Error('Octokat Error: Required parameter is missing: ' + fieldName);
        }
    }

    url = url.replace(match, param);
    i++;
  }

  return url;
};
//# sourceMappingURL=hypermedia.js.map

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var deprecate = __webpack_require__(1);

module.exports = new (function () {
  function HyperMedia() {
    _classCallCheck(this, HyperMedia);
  }

  _createClass(HyperMedia, [{
    key: 'replace',
    value: function replace(instance, data) {
      if (Array.isArray(data)) {
        return this._replaceArray(instance, data);
      } else if (typeof data === 'function') {
        return data;
      } else if (data instanceof Date) {
        return data;
      } else if (data === Object(data)) {
        return this._replaceObject(instance, data);
      } else {
        return data;
      }
    }
  }, {
    key: '_replaceObject',
    value: function _replaceObject(instance, orig) {
      var acc = {};
      var iterable = Object.keys(orig);
      for (var i = 0; i < iterable.length; i++) {
        var key = iterable[i];
        var value = orig[key];
        this._replaceKeyValue(instance, acc, key, value);
      }

      return acc;
    }
  }, {
    key: '_replaceArray',
    value: function _replaceArray(instance, orig) {
      var _this = this;

      var arr = orig.map(function (item) {
        return _this.replace(instance, item);
      });
      // Convert the nextPage methods for paged results
      var iterable = Object.keys(orig);
      for (var i = 0; i < iterable.length; i++) {
        var key = iterable[i];
        var value = orig[key];
        this._replaceKeyValue(instance, arr, key, value);
      }
      return arr;
    }

    // Convert things that end in `_url` to methods which return a Promise

  }, {
    key: '_replaceKeyValue',
    value: function _replaceKeyValue(instance, acc, key, value) {
      if (/_url$/.test(key)) {
        if (/^upload_url$/.test(key)) {
          // POST https://<upload_url>/repos/:owner/:repo/releases/:id/assets?name=foo.zip
          var defaultFn = function defaultFn() {
            // TODO: Maybe always set isRaw=true when contentType is provided
            deprecate('call .upload({name, label}).create(data, contentType)' + ' instead of .upload(name, data, contentType)');
            return defaultFn.create.apply(defaultFn, arguments);
          };

          var fn = function fn() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            return instance._fromUrlWithDefault.apply(instance, [value, defaultFn].concat(args))();
          };
        } else {
          var defaultFn = function defaultFn() {
            deprecate('instead of directly calling methods like .nextPage(), use .nextPage.fetch()');
            return this.fetch();
          };
          var fn = instance._fromUrlCurried(value, defaultFn);
        }

        var newKey = key.substring(0, key.length - '_url'.length);
        acc[newKey] = fn;
        // add a camelCase URL field for retrieving non-templated URLs
        // like `avatarUrl` and `htmlUrl`
        if (!/\{/.test(value)) {
          return acc[key] = value;
        }
      } else if (/_at$/.test(key)) {
        // Ignore null dates so we do not get `Wed Dec 31 1969`
        return acc[key] = value ? new Date(value) : null;
      } else {
        return acc[key] = this.replace(instance, value);
      }
    }
  }, {
    key: 'responseMiddlewareAsync',
    value: function responseMiddlewareAsync(input) {
      var instance = input.instance,
          data = input.data;

      data = this.replace(instance, data);
      input.data = data; // or throw new Error('BUG! Expected JSON data to exist')
      return Promise.resolve(input);
    }
  }]);

  return HyperMedia;
}())();
//# sourceMappingURL=hypermedia.js.map

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OBJECT_MATCHER = __webpack_require__(28);
var TREE_OPTIONS = __webpack_require__(4);

var _require = __webpack_require__(6),
    VerbMethods = _require.VerbMethods;

var Chainer = __webpack_require__(5);

module.exports = new (function () {
  function ObjectChainer() {
    _classCallCheck(this, ObjectChainer);
  }

  _createClass(ObjectChainer, [{
    key: 'chainChildren',
    value: function chainChildren(chainer, url, obj) {
      return function () {
        var result = [];
        for (var key in OBJECT_MATCHER) {
          var re = OBJECT_MATCHER[key];
          var item = void 0;
          if (re.test(obj.url)) {
            var context = TREE_OPTIONS;
            var iterable = key.split('.');
            for (var i = 0; i < iterable.length; i++) {
              var k = iterable[i];
              context = context[k];
            }
            item = chainer.chain(url, k, context, obj);
          }
          result.push(item);
        }
        return result;
      }();
    }
  }, {
    key: 'responseMiddlewareAsync',
    value: function responseMiddlewareAsync(input) {
      var plugins = input.plugins,
          requester = input.requester,
          data = input.data,
          url = input.url;
      // unless data
      //    throw new Error('BUG! Expected JSON data to exist')

      var verbMethods = new VerbMethods(plugins, requester);
      var chainer = new Chainer(verbMethods);
      if (url) {
        chainer.chain(url, true, {}, data);
        this.chainChildren(chainer, url, data);
      } else {
        chainer.chain('', null, {}, data
        // For the paged results, rechain all children in the array
        );if (Array.isArray(data)) {
          for (var i = 0; i < data.length; i++) {
            var datum = data[i];
            this.chainChildren(chainer, datum.url, datum);
          }
        }
      }

      return Promise.resolve(input);
    }
  }]);

  return ObjectChainer;
}())();
//# sourceMappingURL=object-chainer.js.map

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Generated by CoffeeScript 1.12.6
(function () {
  module.exports = {
    'repos': /^(https?:\/\/[^\/]+)?(\/api\/v3)?\/(repos(\/[^\/]+){2}|repositories\/([0-9]+))$/,
    'gists': /^(https?:\/\/[^\/]+)?(\/api\/v3)?\/gists\/[^\/]+$/,
    'issues': /^(https?:\/\/[^\/]+)?(\/api\/v3)?\/(repos(\/[^\/]+){2}|repositories\/([0-9]+))\/(issues|pulls)\/[^\/]+$/,
    'users': /^(https?:\/\/[^\/]+)?(\/api\/v3)?\/users\/[^\/]+$/,
    'orgs': /^(https?:\/\/[^\/]+)?(\/api\/v3)?\/orgs\/[^\/]+$/,
    'teams': /^(https?:\/\/[^\/]+)?(\/api\/v3)?\/teams\/[^\/]+$/,
    'repos.comments': /^(https?:\/\/[^\/]+)?(\/api\/v3)?\/repos\/[^\/]+\/[^\/]+\/comments\/[^\/]+$/
  };
}).call(undefined);

//# sourceMappingURL=object-matcher.js.map
//# sourceMappingURL=object-matcher.js.map

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var URL_VALIDATOR = __webpack_require__(30);

module.exports = new (function () {
  function PathValidator() {
    _classCallCheck(this, PathValidator);
  }

  _createClass(PathValidator, [{
    key: 'requestMiddlewareAsync',
    value: function requestMiddlewareAsync(input) {
      var path = input.path;

      if (!URL_VALIDATOR.test(path)) {
        var err = 'Octokat BUG: Invalid Path. If this is actually a valid path then please update the URL_VALIDATOR. path=' + path;
        console.warn(err);
      }
      return Promise.resolve(input);
    }
  }]);

  return PathValidator;
}())();
//# sourceMappingURL=path-validator.js.map

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Generated by CoffeeScript 1.12.6
(function () {
  module.exports = /^(https:\/\/status.github.com\/api\/(status.json|last-message.json|messages.json)$)|(https?:\/\/[^\/]+)?(\/api\/v3)?\/(zen|octocat|users|organizations|issues|gists|emojis|markdown|meta|rate_limit|feeds|events|repositories(\/\d+)?|notifications|notifications\/threads(\/[^\/]+)|notifications\/threads(\/[^\/]+)\/subscription|gitignore\/templates(\/[^\/]+)?|user(\/\d+)?|user(\/\d+)?\/(|repos|orgs|followers|following(\/[^\/]+)?|emails(\/[^\/]+)?|issues|public_emails|starred|starred(\/[^\/]+){2}|teams)|orgs\/[^\/]+|orgs\/[^\/]+\/(repos|issues|members|events|teams|projects)|projects\/[0-9]+|projects\/[0-9]+\/columns|projects\/columns\/[0-9]+|projects\/columns\/[0-9]+\/moves|projects\/columns\/[0-9]+\/cards|projects\/columns\/cards\/[0-9]+|projects\/columns\/cards\/[0-9]+\/moves|teams\/[^\/]+|teams\/[^\/]+\/(members(\/[^\/]+)?|memberships\/[^\/]+|repos|repos(\/[^\/]+){2})|users\/[^\/]+|users\/[^\/]+\/(repos|orgs|gists|followers|following(\/[^\/]+){0,2}|keys|starred|received_events(\/public)?|events(\/public)?|events\/orgs\/[^\/]+)|search\/(repositories|commits|issues|users|code)|gists\/(public|starred|([a-f0-9]{20,32}|[0-9]+)|([a-f0-9]{20,32}|[0-9]+)\/forks|([a-f0-9]{20,32}|[0-9]+)\/comments(\/[0-9]+)?|([a-f0-9]{20,32}|[0-9]+)\/star)|repos(\/[^\/]+){2}|(repos(\/[^\/]+){2}|repositories\/([0-9]+))\/(readme|tarball(\/[^\/]+)?|zipball(\/[^\/]+)?|compare\/([^\.{3}]+)\.{3}([^\.{3}]+)|deployments(\/[0-9]+)?|deployments\/[0-9]+\/statuses(\/[0-9]+)?|hooks|hooks\/[^\/]+|hooks\/[^\/]+\/tests|assignees|languages|teams|tags|branches(\/[^\/]+){0,2}|contributors|subscribers|subscription|stargazers|comments(\/[0-9]+)?|downloads(\/[0-9]+)?|forks|milestones|milestones\/[0-9]+|milestones\/[0-9]+\/labels|labels(\/[^\/]+)?|releases|releases\/([0-9]+)|releases\/([0-9]+)\/assets|releases\/latest|releases\/tags\/([^\/]+)|releases\/assets\/([0-9]+)|events|notifications|merges|statuses\/[a-f0-9]{40}|pages|pages\/builds|pages\/builds\/latest|commits|commits\/[a-f0-9]{40}|commits\/[a-f0-9]{40}\/(comments|status|statuses)?|contents\/|contents(\/[^\/]+)*|collaborators(\/[^\/]+)?|collaborators\/([^\/]+)\/permission|projects|(issues|pulls)|(issues|pulls)\/(events|events\/[0-9]+|comments(\/[0-9]+)?|[0-9]+|[0-9]+\/events|[0-9]+\/comments|[0-9]+\/labels(\/[^\/]+)?)|pulls\/[0-9]+\/(files|commits|merge|requested_reviewers|reviews(\/[0-9]+)?|reviews(\/[0-9]+)\/(comments|events|dismissals))|git\/(refs|refs\/(.+|heads(\/[^\/]+)?|tags(\/[^\/]+)?)|trees(\/[^\/]+)?|blobs(\/[a-f0-9]{40}$)?|commits(\/[a-f0-9]{40}$)?)|stats\/(contributors|commit_activity|code_frequency|participation|punch_card)|traffic\/(popular\/(referrers|paths)|views|clones))|licenses|licenses\/([^\/]+)|authorizations|authorizations\/((\d+)|clients\/([^\/]{20})|clients\/([^\/]{20})\/([^\/]+))|applications\/([^\/]{20})\/tokens|applications\/([^\/]{20})\/tokens\/([^\/]+)|enterprise\/(settings\/license|stats\/(issues|hooks|milestones|orgs|comments|pages|users|gists|pulls|repos|all))|staff\/indexing_jobs|users\/[^\/]+\/(site_admin|suspended)|setup\/api\/(start|upgrade|configcheck|configure|settings(authorized-keys)?|maintenance))(\?.*)?$/;
}).call(undefined);

//# sourceMappingURL=url-validator.js.map
//# sourceMappingURL=url-validator.js.map

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var base64encode = __webpack_require__(32);

module.exports = new (function () {
  function Authorization() {
    _classCallCheck(this, Authorization);
  }

  _createClass(Authorization, [{
    key: 'requestMiddlewareAsync',
    value: function requestMiddlewareAsync(input) {
      if (input.headers == null) {
        input.headers = {};
      }
      var headers = input.headers,
          _input$clientOptions = input.clientOptions,
          token = _input$clientOptions.token,
          username = _input$clientOptions.username,
          password = _input$clientOptions.password;

      if (token || username && password) {
        if (token) {
          var auth = 'token ' + token;
        } else {
          var auth = 'Basic ' + base64encode(username + ':' + password);
        }
        input.headers['Authorization'] = auth;
      }
      return Promise.resolve(input);
    }
  }]);

  return Authorization;
}())();
//# sourceMappingURL=authorization.js.map

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = btoa;
//# sourceMappingURL=base64-browser.js.map

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PREVIEW_HEADERS = __webpack_require__(34);

var DEFAULT_HEADER = function DEFAULT_HEADER(url) {
  for (var key in PREVIEW_HEADERS) {
    var val = PREVIEW_HEADERS[key];
    if (val.test(url)) {
      return key;
    }
  }
};

// Use the preview API header if one of the routes match the preview APIs
module.exports = new (function () {
  function PreviewApis() {
    _classCallCheck(this, PreviewApis);
  }

  _createClass(PreviewApis, [{
    key: 'requestMiddlewareAsync',
    value: function requestMiddlewareAsync(input) {
      var path = input.path;

      var acceptHeader = DEFAULT_HEADER(path);
      if (acceptHeader) {
        input.headers['Accept'] = acceptHeader;
      }

      return Promise.resolve(input);
    }
  }]);

  return PreviewApis;
}())();
//# sourceMappingURL=preview-apis.js.map

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Generated by CoffeeScript 1.12.6
(function () {
  module.exports = {
    'application/vnd.github.drax-preview+json': /^(https?:\/\/[^\/]+)?(\/api\/v3)?(\/licenses|\/licenses\/([^\/]+)|\/repos\/([^\/]+)\/([^\/]+))$/,
    'application/vnd.github.v3.star+json': /^(https?:\/\/[^\/]+)?(\/api\/v3)?\/users\/([^\/]+)\/starred$/,
    'application/vnd.github.cloak-preview+json': /^(https?:\/\/[^\/]+)?(\/api\/v3)?\/search\/commits$/,
    'application/vnd.github.black-cat-preview+json': /^(https?:\/\/[^\/]+)?(\/api\/v3)?\/repos(\/[^\/]+){2}\/pulls\/[0-9]+\/(|requested_reviewers|reviews(\/[0-9]+)?|reviews(\/[0-9]+)\/(comments|events|dismissals))$/,
    'application/vnd.github.inertia-preview+json': /^(https?:\/\/[^\/]+)?(\/api\/v3)?(\/repos(\/[^\/]+){2}\/projects|\/orgs\/([^\/]+)\/projects|\/projects\/([0-9]+|[0-9]+\/columns|columns|columns\/[0-9]+|columns\/[0-9]+\/moves|columns\/[0-9]+\/cards|columns\/cards\/[0-9]+|columns\/cards\/[0-9]+\/moves))$/
  };
}).call(undefined);

//# sourceMappingURL=preview-headers.js.map
//# sourceMappingURL=preview-headers.js.map

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = new (function () {
  function UsePostInsteadOfPatch() {
    _classCallCheck(this, UsePostInsteadOfPatch);
  }

  _createClass(UsePostInsteadOfPatch, [{
    key: 'requestMiddlewareAsync',
    value: function requestMiddlewareAsync(input, cb) {
      var usePostInsteadOfPatch = input.clientOptions.usePostInsteadOfPatch,
          method = input.method;

      if (usePostInsteadOfPatch && method === 'PATCH') {
        input.method = 'POST';
      }
      return Promise.resolve(input);
    }
  }]);

  return UsePostInsteadOfPatch;
}())();
//# sourceMappingURL=use-post-instead-of-patch.js.map

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toQueryString = __webpack_require__(2);

var pushAll = function pushAll(target, source) {
  if (!Array.isArray(source)) {
    throw new Error('Octokat Error: Calling fetchAll on a request that does not yield an array');
  }
  return target.push.apply(target, source);
};

var getMore = function getMore(fetchable, requester, acc) {
  var nextPagePromise = fetchNextPage(fetchable, requester);
  if (nextPagePromise) {
    return nextPagePromise.then(function (results) {
      pushAll(acc, results.items
      // TODO: handle `items.next_page = string/function`, `items.nextPage = string/function`
      );return getMore(results, requester, acc);
    });
  } else {
    return acc;
  }
};

// TODO: HACK to handle camelCase and hypermedia plugins
var fetchNextPage = function fetchNextPage(obj, requester) {
  if (typeof obj.next_page_url === 'string') {
    return requester.request('GET', obj.next_page_url, null, null);
  } else if (obj.next_page) {
    return obj.next_page.fetch();
  } else if (typeof obj.nextPageUrl === 'string') {
    return requester.request('GET', obj.nextPageUrl, null, null);
  } else if (obj.nextPage) {
    return obj.nextPage.fetch();
  } else {
    return false;
  }
};

// new class FetchAll
module.exports = {
  asyncVerbs: {
    fetchAll: function fetchAll(requester, path) {
      return function (query) {
        // TODO: Pass in the instance so we can just call fromUrl maybe? and we don't rely on hypermedia to create nextPage
        return requester.request('GET', '' + path + toQueryString(query), null, null).then(function (results) {
          var acc = [];
          pushAll(acc, results.items
          // TODO: handle `items.next_page = string/function`, `items.nextPage = string/function`
          );return getMore(results, requester, acc);
        });
      };
    }
  }
};
//# sourceMappingURL=fetch-all.js.map

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = new (function () {
  function Pagination() {
    _classCallCheck(this, Pagination);
  }

  _createClass(Pagination, [{
    key: 'responseMiddlewareAsync',
    value: function responseMiddlewareAsync(input) {
      var jqXHR = input.jqXHR,
          data = input.data;

      if (!jqXHR) {
        return Promise.resolve(input);
      } // The plugins are all used in `octo.parse()` which does not have a jqXHR

      // Only JSON responses have next/prev/first/last link headers
      // Add them to data so the resolved value is iterable

      if (Array.isArray(data)) {
        data = { items: data.slice() // Convert to object so we can add the next/prev/first/last link headers

          // Parse the Link headers
          // of the form `<http://a.com>; rel="next", <https://b.com?a=b&c=d>; rel="previous"`
        };var linksHeader = jqXHR.headers.get('Link');
        if (linksHeader) {
          linksHeader.split(',').forEach(function (part) {
            var _part$match = part.match(/<([^>]+)>; rel="([^"]+)"/
            // Add the pagination functions on the JSON since Promises resolve one value
            // Name the functions `nextPage`, `previousPage`, `firstPage`, `lastPage`
            ),
                _part$match2 = _slicedToArray(_part$match, 3),
                unusedField = _part$match2[0],
                href = _part$match2[1],
                rel = _part$match2[2];

            data[rel + '_page_url'] = href;
          });
        }
        input.data = data; // or throw new Error('BUG! Expected JSON data to exist')
      }
      return Promise.resolve(input);
    }
  }]);

  return Pagination;
}())();
//# sourceMappingURL=pagination.js.map

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = new (function () {
  function CacheHandler() {
    _classCallCheck(this, CacheHandler);

    this._cachedETags = {};
  }

  // Default cacheHandler methods


  _createClass(CacheHandler, [{
    key: 'get',
    value: function get(method, path) {
      return this._cachedETags[method + ' ' + path];
    }
  }, {
    key: 'add',
    value: function add(method, path, eTag, data, status) {
      return this._cachedETags[method + ' ' + path] = { eTag: eTag, data: data, status: status };
    }
  }, {
    key: 'requestMiddlewareAsync',
    value: function requestMiddlewareAsync(input) {
      var clientOptions = input.clientOptions,
          method = input.method,
          path = input.path;

      if (input.headers == null) {
        input.headers = {};
      }
      var cacheHandler = clientOptions.cacheHandler || this;
      // Send the ETag if re-requesting a URL
      if (cacheHandler.get(method, path)) {
        input.headers['If-None-Match'] = cacheHandler.get(method, path).eTag;
      } else {
        // The browser will sneak in a 'If-Modified-Since' header if the GET has been requested before
        // but for some reason the cached response does not seem to be available
        // in the jqXHR object.
        // So, the first time a URL is requested set this date to 0 so we always get a response the 1st time
        // a URL is requested.
        input.headers['If-Modified-Since'] = 'Thu, 01 Jan 1970 00:00:00 GMT';
      }

      return Promise.resolve(input);
    }
  }, {
    key: 'responseMiddlewareAsync',
    value: function responseMiddlewareAsync(input, cb) {
      var clientOptions = input.clientOptions,
          request = input.request,
          status = input.status,
          jqXHR = input.jqXHR,
          data = input.data;

      if (!jqXHR) {
        return Promise.resolve(input);
      } // The plugins are all used in `octo.parse()` which does not have a jqXHR

      // Since this can be called via `octo.parse`, skip caching when there is no jqXHR
      if (jqXHR) {
        var method = request.method,
            path = request.path; // This is also not defined when octo.parse is called

        var cacheHandler = clientOptions.cacheHandler || this;
        if (status === 304 || status === 0) {
          var ref = cacheHandler.get(method, path);
          if (ref) {
            var eTag;

            // Set a flag on the object so users know this is a cached response
            // if (typeof data !== 'string') {
            //   data.__IS_CACHED = eTag || true
            // }
            data = ref.data;
            status = ref.status;
            eTag = ref.eTag;
          } else {
            throw new Error('ERROR: Bug in Octokat cacheHandler for path \'' + method + ' ' + path + '\'. It had an eTag but not the cached response.');
          }
        } else {
          // Cache the response to reuse later
          if (method === 'GET' && jqXHR.headers.get('ETag')) {
            var eTag = jqXHR.headers.get('ETag');
            cacheHandler.add(method, path, eTag, data, jqXHR.status);
          }
        }

        input.data = data;
        input.status = status;
        return Promise.resolve(input);
      }
    }
  }]);

  return CacheHandler;
}())();
//# sourceMappingURL=cache-handler.js.map

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var toQueryString = __webpack_require__(2);

module.exports = new (function () {
  function ReadBinary() {
    _classCallCheck(this, ReadBinary);

    this.verbs = {
      readBinary: function readBinary(path, query) {
        return { method: 'GET', path: '' + path + toQueryString(query), options: { isRaw: true, isBase64: true } };
      }
    };
  }

  _createClass(ReadBinary, [{
    key: 'requestMiddlewareAsync',
    value: function requestMiddlewareAsync(input) {
      var options = input.options;

      if (options) {
        var isBase64 = options.isBase64;

        if (isBase64) {
          input.headers['Accept'] = 'application/vnd.github.raw';
          input.mimeType = 'text/plain; charset=x-user-defined';
        }
      }
      return Promise.resolve(input);
    }
  }, {
    key: 'responseMiddlewareAsync',
    value: function responseMiddlewareAsync(input) {
      var options = input.options,
          data = input.data;

      if (options) {
        var isBase64 = options.isBase64;
        // Convert the response to a Base64 encoded string

        if (isBase64) {
          // Convert raw data to binary chopping off the higher-order bytes in each char.
          // Useful for Base64 encoding.
          var converted = '';
          var iterable = __range__(0, data.length, false);
          for (var j = 0; j < iterable.length; j++) {
            var i = iterable[j];
            converted += String.fromCharCode(data.charCodeAt(i) & 0xff);
          }

          input.data = converted; // or throw new Error('BUG! Expected JSON data to exist')
        }
      }
      return Promise.resolve(input);
    }
  }]);

  return ReadBinary;
}())();

function __range__(left, right, inclusive) {
  var range = [];
  var ascending = left < right;
  var end = !inclusive ? right : ascending ? right + 1 : right - 1;
  for (var i = left; ascending ? i < end : i > end; ascending ? i++ : i--) {
    range.push(i);
  }
  return range;
}
//# sourceMappingURL=read-binary.js.map

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var plus = __webpack_require__(0);

module.exports = new (function () {
  function CamelCase() {
    _classCallCheck(this, CamelCase);
  }

  _createClass(CamelCase, [{
    key: 'responseMiddlewareAsync',
    value: function responseMiddlewareAsync(input) {
      var data = input.data;

      data = this.replace(data);
      input.data = data; // or throw new Error('BUG! Expected JSON data to exist')
      return Promise.resolve(input);
    }
  }, {
    key: 'replace',
    value: function replace(data) {
      if (Array.isArray(data)) {
        return this._replaceArray(data);
      } else if (typeof data === 'function') {
        return data;
      } else if (data instanceof Date) {
        return data;
      } else if (data === Object(data)) {
        return this._replaceObject(data);
      } else {
        return data;
      }
    }
  }, {
    key: '_replaceObject',
    value: function _replaceObject(orig) {
      var acc = {};
      var iterable = Object.keys(orig);
      for (var i = 0; i < iterable.length; i++) {
        var key = iterable[i];
        var value = orig[key];
        this._replaceKeyValue(acc, key, value);
      }

      return acc;
    }
  }, {
    key: '_replaceArray',
    value: function _replaceArray(orig) {
      var _this = this;

      var arr = orig.map(function (item) {
        return _this.replace(item);
      });
      // Convert the nextPage methods for paged results
      var iterable = Object.keys(orig);
      for (var i = 0; i < iterable.length; i++) {
        var key = iterable[i];
        var value = orig[key];
        this._replaceKeyValue(arr, key, value);
      }
      return arr;
    }

    // Convert things that end in `_url` to methods which return a Promise

  }, {
    key: '_replaceKeyValue',
    value: function _replaceKeyValue(acc, key, value) {
      return acc[plus.camelize(key)] = this.replace(value);
    }
  }]);

  return CamelCase;
}())();
//# sourceMappingURL=camel-case.js.map

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/* **********************************************
     Begin prism-core.js
********************************************** */

var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
		? self // if in worker
		: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

var Prism = (function(){

// Private helper vars
var lang = /\blang(?:uage)?-(\w+)\b/i;
var uniqueId = 0;

var _ = _self.Prism = {
	util: {
		encode: function (tokens) {
			if (tokens instanceof Token) {
				return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
			} else if (_.util.type(tokens) === 'Array') {
				return tokens.map(_.util.encode);
			} else {
				return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
			}
		},

		type: function (o) {
			return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
		},

		objId: function (obj) {
			if (!obj['__id']) {
				Object.defineProperty(obj, '__id', { value: ++uniqueId });
			}
			return obj['__id'];
		},

		// Deep clone a language definition (e.g. to extend it)
		clone: function (o) {
			var type = _.util.type(o);

			switch (type) {
				case 'Object':
					var clone = {};

					for (var key in o) {
						if (o.hasOwnProperty(key)) {
							clone[key] = _.util.clone(o[key]);
						}
					}

					return clone;

				case 'Array':
					// Check for existence for IE8
					return o.map && o.map(function(v) { return _.util.clone(v); });
			}

			return o;
		}
	},

	languages: {
		extend: function (id, redef) {
			var lang = _.util.clone(_.languages[id]);

			for (var key in redef) {
				lang[key] = redef[key];
			}

			return lang;
		},

		/**
		 * Insert a token before another token in a language literal
		 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
		 * we cannot just provide an object, we need anobject and a key.
		 * @param inside The key (or language id) of the parent
		 * @param before The key to insert before. If not provided, the function appends instead.
		 * @param insert Object with the key/value pairs to insert
		 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
		 */
		insertBefore: function (inside, before, insert, root) {
			root = root || _.languages;
			var grammar = root[inside];

			if (arguments.length == 2) {
				insert = arguments[1];

				for (var newToken in insert) {
					if (insert.hasOwnProperty(newToken)) {
						grammar[newToken] = insert[newToken];
					}
				}

				return grammar;
			}

			var ret = {};

			for (var token in grammar) {

				if (grammar.hasOwnProperty(token)) {

					if (token == before) {

						for (var newToken in insert) {

							if (insert.hasOwnProperty(newToken)) {
								ret[newToken] = insert[newToken];
							}
						}
					}

					ret[token] = grammar[token];
				}
			}

			// Update references in other language definitions
			_.languages.DFS(_.languages, function(key, value) {
				if (value === root[inside] && key != inside) {
					this[key] = ret;
				}
			});

			return root[inside] = ret;
		},

		// Traverse a language definition with Depth First Search
		DFS: function(o, callback, type, visited) {
			visited = visited || {};
			for (var i in o) {
				if (o.hasOwnProperty(i)) {
					callback.call(o, i, o[i], type || i);

					if (_.util.type(o[i]) === 'Object' && !visited[_.util.objId(o[i])]) {
						visited[_.util.objId(o[i])] = true;
						_.languages.DFS(o[i], callback, null, visited);
					}
					else if (_.util.type(o[i]) === 'Array' && !visited[_.util.objId(o[i])]) {
						visited[_.util.objId(o[i])] = true;
						_.languages.DFS(o[i], callback, i, visited);
					}
				}
			}
		}
	},
	plugins: {},

	highlightAll: function(async, callback) {
		var env = {
			callback: callback,
			selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
		};

		_.hooks.run("before-highlightall", env);

		var elements = env.elements || document.querySelectorAll(env.selector);

		for (var i=0, element; element = elements[i++];) {
			_.highlightElement(element, async === true, env.callback);
		}
	},

	highlightElement: function(element, async, callback) {
		// Find language
		var language, grammar, parent = element;

		while (parent && !lang.test(parent.className)) {
			parent = parent.parentNode;
		}

		if (parent) {
			language = (parent.className.match(lang) || [,''])[1].toLowerCase();
			grammar = _.languages[language];
		}

		// Set language on the element, if not present
		element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

		// Set language on the parent, for styling
		parent = element.parentNode;

		if (/pre/i.test(parent.nodeName)) {
			parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
		}

		var code = element.textContent;

		var env = {
			element: element,
			language: language,
			grammar: grammar,
			code: code
		};

		_.hooks.run('before-sanity-check', env);

		if (!env.code || !env.grammar) {
			if (env.code) {
				env.element.textContent = env.code;
			}
			_.hooks.run('complete', env);
			return;
		}

		_.hooks.run('before-highlight', env);

		if (async && _self.Worker) {
			var worker = new Worker(_.filename);

			worker.onmessage = function(evt) {
				env.highlightedCode = evt.data;

				_.hooks.run('before-insert', env);

				env.element.innerHTML = env.highlightedCode;

				callback && callback.call(env.element);
				_.hooks.run('after-highlight', env);
				_.hooks.run('complete', env);
			};

			worker.postMessage(JSON.stringify({
				language: env.language,
				code: env.code,
				immediateClose: true
			}));
		}
		else {
			env.highlightedCode = _.highlight(env.code, env.grammar, env.language);

			_.hooks.run('before-insert', env);

			env.element.innerHTML = env.highlightedCode;

			callback && callback.call(element);

			_.hooks.run('after-highlight', env);
			_.hooks.run('complete', env);
		}
	},

	highlight: function (text, grammar, language) {
		var tokens = _.tokenize(text, grammar);
		return Token.stringify(_.util.encode(tokens), language);
	},

	tokenize: function(text, grammar, language) {
		var Token = _.Token;

		var strarr = [text];

		var rest = grammar.rest;

		if (rest) {
			for (var token in rest) {
				grammar[token] = rest[token];
			}

			delete grammar.rest;
		}

		tokenloop: for (var token in grammar) {
			if(!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			var patterns = grammar[token];
			patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				var pattern = patterns[j],
					inside = pattern.inside,
					lookbehind = !!pattern.lookbehind,
					greedy = !!pattern.greedy,
					lookbehindLength = 0,
					alias = pattern.alias;

				if (greedy && !pattern.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
					pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
				}

				pattern = pattern.pattern || pattern;

				// Don’t cache length as it changes during the loop
				for (var i=0, pos = 0; i<strarr.length; pos += strarr[i].length, ++i) {

					var str = strarr[i];

					if (strarr.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						break tokenloop;
					}

					if (str instanceof Token) {
						continue;
					}

					pattern.lastIndex = 0;

					var match = pattern.exec(str),
					    delNum = 1;

					// Greedy patterns can override/remove up to two previously matched tokens
					if (!match && greedy && i != strarr.length - 1) {
						pattern.lastIndex = pos;
						match = pattern.exec(text);
						if (!match) {
							break;
						}

						var from = match.index + (lookbehind ? match[1].length : 0),
						    to = match.index + match[0].length,
						    k = i,
						    p = pos;

						for (var len = strarr.length; k < len && p < to; ++k) {
							p += strarr[k].length;
							// Move the index i to the element in strarr that is closest to from
							if (from >= p) {
								++i;
								pos = p;
							}
						}

						/*
						 * If strarr[i] is a Token, then the match starts inside another Token, which is invalid
						 * If strarr[k - 1] is greedy we are in conflict with another greedy pattern
						 */
						if (strarr[i] instanceof Token || strarr[k - 1].greedy) {
							continue;
						}

						// Number of tokens to delete and replace with the new match
						delNum = k - i;
						str = text.slice(pos, p);
						match.index -= pos;
					}

					if (!match) {
						continue;
					}

					if(lookbehind) {
						lookbehindLength = match[1].length;
					}

					var from = match.index + lookbehindLength,
					    match = match[0].slice(lookbehindLength),
					    to = from + match.length,
					    before = str.slice(0, from),
					    after = str.slice(to);

					var args = [i, delNum];

					if (before) {
						args.push(before);
					}

					var wrapped = new Token(token, inside? _.tokenize(match, inside) : match, alias, match, greedy);

					args.push(wrapped);

					if (after) {
						args.push(after);
					}

					Array.prototype.splice.apply(strarr, args);
				}
			}
		}

		return strarr;
	},

	hooks: {
		all: {},

		add: function (name, callback) {
			var hooks = _.hooks.all;

			hooks[name] = hooks[name] || [];

			hooks[name].push(callback);
		},

		run: function (name, env) {
			var callbacks = _.hooks.all[name];

			if (!callbacks || !callbacks.length) {
				return;
			}

			for (var i=0, callback; callback = callbacks[i++];) {
				callback(env);
			}
		}
	}
};

var Token = _.Token = function(type, content, alias, matchedStr, greedy) {
	this.type = type;
	this.content = content;
	this.alias = alias;
	// Copy of the full string this token was created from
	this.length = (matchedStr || "").length|0;
	this.greedy = !!greedy;
};

Token.stringify = function(o, language, parent) {
	if (typeof o == 'string') {
		return o;
	}

	if (_.util.type(o) === 'Array') {
		return o.map(function(element) {
			return Token.stringify(element, language, o);
		}).join('');
	}

	var env = {
		type: o.type,
		content: Token.stringify(o.content, language, parent),
		tag: 'span',
		classes: ['token', o.type],
		attributes: {},
		language: language,
		parent: parent
	};

	if (env.type == 'comment') {
		env.attributes['spellcheck'] = 'true';
	}

	if (o.alias) {
		var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
		Array.prototype.push.apply(env.classes, aliases);
	}

	_.hooks.run('wrap', env);

	var attributes = Object.keys(env.attributes).map(function(name) {
		return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
	}).join(' ');

	return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';

};

if (!_self.document) {
	if (!_self.addEventListener) {
		// in Node.js
		return _self.Prism;
	}
 	// In worker
	_self.addEventListener('message', function(evt) {
		var message = JSON.parse(evt.data),
		    lang = message.language,
		    code = message.code,
		    immediateClose = message.immediateClose;

		_self.postMessage(_.highlight(code, _.languages[lang], lang));
		if (immediateClose) {
			_self.close();
		}
	}, false);

	return _self.Prism;
}

//Get current script and highlight
var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();

if (script) {
	_.filename = script.src;

	if (document.addEventListener && !script.hasAttribute('data-manual')) {
		if(document.readyState !== "loading") {
			if (window.requestAnimationFrame) {
				window.requestAnimationFrame(_.highlightAll);
			} else {
				window.setTimeout(_.highlightAll, 16);
			}
		}
		else {
			document.addEventListener('DOMContentLoaded', _.highlightAll);
		}
	}
}

return _self.Prism;

})();

if (typeof module !== 'undefined' && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof global !== 'undefined') {
	global.Prism = Prism;
}


/* **********************************************
     Begin prism-markup.js
********************************************** */

Prism.languages.markup = {
	'comment': /<!--[\w\W]*?-->/,
	'prolog': /<\?[\w\W]+?\?>/,
	'doctype': /<!DOCTYPE[\w\W]+?>/i,
	'cdata': /<!\[CDATA\[[\w\W]*?]]>/i,
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/i,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'attr-value': {
				pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
				inside: {
					'punctuation': /[=>"']/
				}
			},
			'punctuation': /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: {
					'namespace': /^[^\s>\/:]+:/
				}
			}

		}
	},
	'entity': /&#?[\da-z]{1,8};/i
};

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function(env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});

Prism.languages.xml = Prism.languages.markup;
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;


/* **********************************************
     Begin prism-css.js
********************************************** */

Prism.languages.css = {
	'comment': /\/\*[\w\W]*?\*\//,
	'atrule': {
		pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
		inside: {
			'rule': /@[\w-]+/
			// See rest below
		}
	},
	'url': /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
	'selector': /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
	'string': {
		pattern: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'property': /(\b|\B)[\w-]+(?=\s*:)/i,
	'important': /\B!important\b/i,
	'function': /[-a-z0-9]+(?=\()/i,
	'punctuation': /[(){};:]/
};

Prism.languages.css['atrule'].inside.rest = Prism.util.clone(Prism.languages.css);

if (Prism.languages.markup) {
	Prism.languages.insertBefore('markup', 'tag', {
		'style': {
			pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
			lookbehind: true,
			inside: Prism.languages.css,
			alias: 'language-css'
		}
	});
	
	Prism.languages.insertBefore('inside', 'attr-value', {
		'style-attr': {
			pattern: /\s*style=("|').*?\1/i,
			inside: {
				'attr-name': {
					pattern: /^\s*style/i,
					inside: Prism.languages.markup.tag.inside
				},
				'punctuation': /^\s*=\s*['"]|['"]\s*$/,
				'attr-value': {
					pattern: /.+/i,
					inside: Prism.languages.css
				}
			},
			alias: 'language-css'
		}
	}, Prism.languages.markup.tag);
}

/* **********************************************
     Begin prism-clike.js
********************************************** */

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
			lookbehind: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true
		}
	],
	'string': {
		pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'class-name': {
		pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
		lookbehind: true,
		inside: {
			punctuation: /(\.|\\)/
		}
	},
	'keyword': /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	'boolean': /\b(true|false)\b/,
	'function': /[a-z0-9_]+(?=\()/i,
	'number': /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
	'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
	'punctuation': /[{}[\];(),.:]/
};


/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
	'keyword': /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
	'number': /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,
	'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/
});

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
		lookbehind: true,
		greedy: true
	}
});

Prism.languages.insertBefore('javascript', 'string', {
	'template-string': {
		pattern: /`(?:\\\\|\\?[^\\])*?`/,
		greedy: true,
		inside: {
			'interpolation': {
				pattern: /\$\{[^}]+\}/,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\$\{|\}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	}
});

if (Prism.languages.markup) {
	Prism.languages.insertBefore('markup', 'tag', {
		'script': {
			pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
			lookbehind: true,
			inside: Prism.languages.javascript,
			alias: 'language-javascript'
		}
	});
}

Prism.languages.js = Prism.languages.javascript;

/* **********************************************
     Begin prism-file-highlight.js
********************************************** */

(function () {
	if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
		return;
	}

	self.Prism.fileHighlight = function() {

		var Extensions = {
			'js': 'javascript',
			'py': 'python',
			'rb': 'ruby',
			'ps1': 'powershell',
			'psm1': 'powershell',
			'sh': 'bash',
			'bat': 'batch',
			'h': 'c',
			'tex': 'latex'
		};

		if(Array.prototype.forEach) { // Check to prevent error in IE8
			Array.prototype.slice.call(document.querySelectorAll('pre[data-src]')).forEach(function (pre) {
				var src = pre.getAttribute('data-src');

				var language, parent = pre;
				var lang = /\blang(?:uage)?-(?!\*)(\w+)\b/i;
				while (parent && !lang.test(parent.className)) {
					parent = parent.parentNode;
				}

				if (parent) {
					language = (pre.className.match(lang) || [, ''])[1];
				}

				if (!language) {
					var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
					language = Extensions[extension] || extension;
				}

				var code = document.createElement('code');
				code.className = 'language-' + language;

				pre.textContent = '';

				code.textContent = 'Loading…';

				pre.appendChild(code);

				var xhr = new XMLHttpRequest();

				xhr.open('GET', src, true);

				xhr.onreadystatechange = function () {
					if (xhr.readyState == 4) {

						if (xhr.status < 400 && xhr.responseText) {
							code.textContent = xhr.responseText;

							Prism.highlightElement(code);
						}
						else if (xhr.status >= 400) {
							code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
						}
						else {
							code.textContent = '✖ Error: File does not exist or is empty';
						}
					}
				};

				xhr.send(null);
			});
		}

	};

	document.addEventListener('DOMContentLoaded', self.Prism.fileHighlight);

})();

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ })
/******/ ]);