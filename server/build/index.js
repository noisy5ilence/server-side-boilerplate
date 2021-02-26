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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderer */ \"./server/renderer.js\");\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_http_proxy__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use('/api', express_http_proxy__WEBPACK_IMPORTED_MODULE_2___default()('http://react-ssr-api.herokuapp.com', {\n  proxyReqOptDecorator: function proxyReqOptDecorator(opts) {\n    opts.headers['x-forwarded-host'] = 'localhost:3000';\n    return opts;\n  }\n}));\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static('./build'));\napp.get('*', _renderer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar PORT = process.env.PORT || 3000;\napp.listen(PORT, function () {\n  console.log(\"Server is listening on port \".concat(PORT));\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./server/renderer.js":
/*!****************************!*\
  !*** ./server/renderer.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_query_hydration__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-query/hydration */ \"react-query/hydration\");\n/* harmony import */ var react_query_hydration__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_query_hydration__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _src_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/routes */ \"./src/routes.js\");\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (request, response) {\n  var client = axios__WEBPACK_IMPORTED_MODULE_3___default.a.create({\n    baseURL: 'http://react-ssr-api.herokuapp.com',\n    headers: {\n      cookie: request.get('cookie') || ''\n    }\n  });\n  client.interceptors.response.use(function (_ref) {\n    var data = _ref.data;\n    return data;\n  });\n  var queryClient = new react_query__WEBPACK_IMPORTED_MODULE_8__[\"QueryClient\"]();\n  var context = {};\n  Promise.all(Object(react_router_config__WEBPACK_IMPORTED_MODULE_7__[\"matchRoutes\"])(_src_routes__WEBPACK_IMPORTED_MODULE_10__[\"default\"], request.path).filter(function (_ref2) {\n    var prefetch = _ref2.route.prefetch;\n    return prefetch;\n  }).map(function (_ref3) {\n    var prefetch = _ref3.route.prefetch;\n\n    var _prefetch = prefetch(client),\n        keys = _prefetch.keys,\n        query = _prefetch.query;\n\n    return queryClient.prefetchQuery(keys, query);\n  })).then(function () {\n    var dehydratedState = Object(react_query_hydration__WEBPACK_IMPORTED_MODULE_9__[\"dehydrate\"])(queryClient);\n    var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_6__[\"renderToString\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_query__WEBPACK_IMPORTED_MODULE_8__[\"QueryClientProvider\"], {\n      client: queryClient\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_query_hydration__WEBPACK_IMPORTED_MODULE_9__[\"Hydrate\"], {\n      state: dehydratedState\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"StaticRouter\"], {\n      location: request.path,\n      context: context\n    }, Object(react_router_config__WEBPACK_IMPORTED_MODULE_7__[\"renderRoutes\"])(_src_routes__WEBPACK_IMPORTED_MODULE_10__[\"default\"])))));\n    return fs__WEBPACK_IMPORTED_MODULE_1___default.a.promises.readFile(path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('./build/index.html'), 'utf8').then(function (data) {\n      data = data.replace(\"<div id='root'></div>\", \"<div id='root'>\".concat(content, \"</div>\"));\n      data = data.replace(\"<script>window.__STATE__ = {}</script>\", \"<script>window.__STATE__ = \".concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_2___default()(dehydratedState), \"</script>\"));\n      return response.send(data);\n    }).catch(function (error) {\n      throw error;\n    });\n  });\n});\n\n//# sourceURL=webpack:///./server/renderer.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client */ \"./src/client.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Header */ \"./src/components/Header.js\");\n\n\n\n\n\n\n\nvar App = function App(_ref) {\n  var route = _ref.route;\n\n  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])(['isAuth'], function () {\n    return Object(_api__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_client__WEBPACK_IMPORTED_MODULE_4__[\"default\"]).isAuth();\n  }),\n      isAuth = _useQuery.data;\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    isAuth: isAuth\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__[\"renderRoutes\"])(route.routes)));\n};\n\nvar prefetch = function prefetch(client) {\n  return {\n    keys: ['isAuth'],\n    query: function query() {\n      return Object(_api__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(client).isAuth();\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  prefetch: prefetch,\n  component: App\n});\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/HOCs/withAuth.js":
/*!******************************!*\
  !*** ./src/HOCs/withAuth.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useAuth */ \"./src/hooks/useAuth.js\");\n\n\n\n\nvar withAuth = function withAuth(Component) {\n  var WrappedComponent = function WrappedComponent(props) {\n    var isAuth = Object(_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    return isAuth ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, props) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Redirect\"], {\n      to: \"/\"\n    });\n  };\n\n  WrappedComponent.displayName = \"withAuth(\".concat(Component.displayName || Component.name, \")\");\n  return WrappedComponent;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (withAuth);\n\n//# sourceURL=webpack:///./src/HOCs/withAuth.js?");

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (client) {\n  return {\n    admins: function admins() {\n      return client.get('/admins');\n    },\n    users: function users() {\n      return client.get('/users');\n    },\n    isAuth: function isAuth() {\n      return client.get('/current_user').then(function (data) {\n        return !!data;\n      });\n    }\n  };\n});\n\n//# sourceURL=webpack:///./src/api.js?");

/***/ }),

/***/ "./src/client.js":
/*!***********************!*\
  !*** ./src/client.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nvar client = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  baseURL: '/api'\n});\nclient.interceptors.response.use(function (_ref) {\n  var data = _ref.data;\n  return data;\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (client);\n\n//# sourceURL=webpack:///./src/client.js?");

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\nvar paths = [{\n  path: '/',\n  title: 'Home'\n}, {\n  path: '/users',\n  title: 'Users'\n}, {\n  path: '/admins',\n  title: 'Admins',\n  isAuth: true\n}];\nvar actions = [{\n  path: '/api/logout',\n  title: 'Logout',\n  isAuth: true\n}, {\n  path: '/api/auth/google',\n  title: 'Login',\n  isAuth: false\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var isAuth = _ref.isAuth;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, paths.map(function (_ref2) {\n    var title = _ref2.title,\n        path = _ref2.path,\n        rest = _objectWithoutProperties(_ref2, [\"title\", \"path\"]);\n\n    return (!rest.isAuth || rest.isAuth === isAuth) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: path\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      to: path\n    }, title));\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, actions.map(function (_ref3) {\n    var title = _ref3.title,\n        path = _ref3.path,\n        rest = _objectWithoutProperties(_ref3, [\"title\", \"path\"]);\n\n    return rest.isAuth === isAuth && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: path\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: path\n    }, title));\n  })));\n});\n\n//# sourceURL=webpack:///./src/components/Header.js?");

/***/ }),

/***/ "./src/hooks/useAuth.js":
/*!******************************!*\
  !*** ./src/hooks/useAuth.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_0__[\"useQueryClient\"])();\n  return queryClient.getQueryData(['isAuth']) || false;\n});\n\n//# sourceURL=webpack:///./src/hooks/useAuth.js?");

/***/ }),

/***/ "./src/pages/AdminsPage.js":
/*!*********************************!*\
  !*** ./src/pages/AdminsPage.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ \"./src/api.js\");\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client */ \"./src/client.js\");\n/* harmony import */ var _HOCs_withAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../HOCs/withAuth */ \"./src/HOCs/withAuth.js\");\n\n\n\n\n\n\nvar AdminsPage = function AdminsPage() {\n  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_1__[\"useQuery\"])(['admins'], function () {\n    return Object(_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_client__WEBPACK_IMPORTED_MODULE_3__[\"default\"]).admins();\n  }),\n      admins = _useQuery.data,\n      isLoading = _useQuery.isLoading;\n\n  if (isLoading) {\n    return 'Loading...';\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Admins\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, admins.map(function (_ref) {\n    var id = _ref.id,\n        name = _ref.name;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: id\n    }, name);\n  })));\n};\n\nvar prefetch = function prefetch(client) {\n  return {\n    keys: ['admins'],\n    query: function query() {\n      return Object(_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(client).admins();\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  prefetch: prefetch,\n  component: Object(_HOCs_withAuth__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(AdminsPage)\n});\n\n//# sourceURL=webpack:///./src/pages/AdminsPage.js?");

/***/ }),

/***/ "./src/pages/HomePage.js":
/*!*******************************!*\
  !*** ./src/pages/HomePage.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar HomePage = function HomePage() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Home\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  component: HomePage\n});\n\n//# sourceURL=webpack:///./src/pages/HomePage.js?");

/***/ }),

/***/ "./src/pages/NotFoundPage.js":
/*!***********************************!*\
  !*** ./src/pages/NotFoundPage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar NotFoundPage = function NotFoundPage(_ref) {\n  var _ref$staticContext = _ref.staticContext,\n      staticContext = _ref$staticContext === void 0 ? {} : _ref$staticContext;\n  staticContext.notFound = true;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Ooops, route not found.\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  component: NotFoundPage\n});\n\n//# sourceURL=webpack:///./src/pages/NotFoundPage.js?");

/***/ }),

/***/ "./src/pages/UsersListPage.js":
/*!************************************!*\
  !*** ./src/pages/UsersListPage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ \"./src/api.js\");\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client */ \"./src/client.js\");\n\n\n\n\n\nvar UsersListPage = function UsersListPage() {\n  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_1__[\"useQuery\"])(['users'], function () {\n    return Object(_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_client__WEBPACK_IMPORTED_MODULE_3__[\"default\"]).users();\n  }),\n      users = _useQuery.data,\n      isLoading = _useQuery.isLoading;\n\n  if (isLoading) {\n    return 'Loading...';\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Users\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, users.map(function (_ref) {\n    var name = _ref.name,\n        id = _ref.id;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: id\n    }, name);\n  })));\n};\n\nvar prefetch = function prefetch(client) {\n  return {\n    keys: ['users'],\n    query: function query() {\n      return Object(_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(client).users();\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  prefetch: prefetch,\n  component: UsersListPage\n});\n\n//# sourceURL=webpack:///./src/pages/UsersListPage.js?");

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n/* harmony import */ var _pages_HomePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/HomePage */ \"./src/pages/HomePage.js\");\n/* harmony import */ var _pages_UsersListPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/UsersListPage */ \"./src/pages/UsersListPage.js\");\n/* harmony import */ var _pages_AdminsPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/AdminsPage */ \"./src/pages/AdminsPage.js\");\n/* harmony import */ var _pages_NotFoundPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/NotFoundPage */ \"./src/pages/NotFoundPage.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([_objectSpread(_objectSpread({}, _App__WEBPACK_IMPORTED_MODULE_0__[\"default\"]), {}, {\n  routes: [_objectSpread(_objectSpread({}, _pages_HomePage__WEBPACK_IMPORTED_MODULE_1__[\"default\"]), {}, {\n    path: '/',\n    exact: true\n  }), _objectSpread(_objectSpread({}, _pages_UsersListPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"]), {}, {\n    path: '/users'\n  }), _objectSpread(_objectSpread({}, _pages_AdminsPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]), {}, {\n    path: '/admins'\n  }), _objectSpread({}, _pages_NotFoundPage__WEBPACK_IMPORTED_MODULE_4__[\"default\"])]\n})]);\n\n//# sourceURL=webpack:///./src/routes.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-http-proxy\");\n\n//# sourceURL=webpack:///external_%22express-http-proxy%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-query\");\n\n//# sourceURL=webpack:///external_%22react-query%22?");

/***/ }),

/***/ "react-query/hydration":
/*!****************************************!*\
  !*** external "react-query/hydration" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-query/hydration\");\n\n//# sourceURL=webpack:///external_%22react-query/hydration%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ })

/******/ });