/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(222)
	var __weex_style__ = __webpack_require__(223)
	var __weex_script__ = __webpack_require__(224)
	
	__weex_define__('@weex-component/7c571e3c0d304012ef474886a5ef75ca', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})
	
	__weex_bootstrap__('@weex-component/7c571e3c0d304012ef474886a5ef75ca',undefined,undefined)

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(9), __esModule: true };

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(10);
	module.exports = __webpack_require__(13).Object.assign;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(11);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(26)});

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(12)
	  , core      = __webpack_require__(13)
	  , ctx       = __webpack_require__(14)
	  , hide      = __webpack_require__(16)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 12 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 13 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(15);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(17)
	  , createDesc = __webpack_require__(25);
	module.exports = __webpack_require__(21) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(18)
	  , IE8_DOM_DEFINE = __webpack_require__(20)
	  , toPrimitive    = __webpack_require__(24)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(21) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(19);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(21) && !__webpack_require__(22)(function(){
	  return Object.defineProperty(__webpack_require__(23)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(22)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(19)
	  , document = __webpack_require__(12).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(19);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(27)
	  , gOPS     = __webpack_require__(42)
	  , pIE      = __webpack_require__(43)
	  , toObject = __webpack_require__(44)
	  , IObject  = __webpack_require__(31)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(22)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(28)
	  , enumBugKeys = __webpack_require__(41);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(29)
	  , toIObject    = __webpack_require__(30)
	  , arrayIndexOf = __webpack_require__(34)(false)
	  , IE_PROTO     = __webpack_require__(38)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(31)
	  , defined = __webpack_require__(33);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(32);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(30)
	  , toLength  = __webpack_require__(35)
	  , toIndex   = __webpack_require__(37);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(36)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(36)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(39)('keys')
	  , uid    = __webpack_require__(40);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(12)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 42 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 43 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(33);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.routeToUrl = routeToUrl;
	exports.open = open;
	exports.params = params;
	exports.realHeight = realHeight;
	
	var _api = __webpack_require__(46);
	
	var _detection = __webpack_require__(48);
	
	var detection = _interopRequireWildcard(_detection);
	
	var _route = __webpack_require__(49);
	
	var _route2 = _interopRequireDefault(_route);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/**
	 * 路由转链接
	 * @param {string} routeName
	 * @returns {string}
	 */
	function routeToUrl(routeName) {
	    var params = '';
	    if (/\?/.test(routeName)) {
	        params = routeName.split('?')[1];
	        routeName = routeName.split('?')[0];
	    }
	    var r = _route2.default[routeName];
	    var compileUrl = void 0;
	    if (!r) {
	        // TODO 跳转到错误页
	        console.log('error: 路由不存在，请在router.js中配置对应的路由');
	    }
	    compileUrl = r.url ? r.url : 'views/' + routeName.split('_').join('-');
	    var url = _api.getBaseURL.call(this, true) + compileUrl + '.js';
	    // 允许添加参数 例如 merchant_around?a=1&b=2 处理规则和浏览器的querystring一致
	    if (params) {
	        if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
	            url = url + '&' + params;
	        } else {
	            url = url + '?' + params;
	        }
	    }
	    return url;
	}
	/**
	 * 打开新页面
	 * @param {string} routeName - 路由名称 所有路由名称在route.js中
	 * @param {object} o - 现在只有路由打开失败处理方法，以后可以添加其他处理
	 * @param {function} o.failCallback - 路由打开失败处理callback
	 */
	function open(routeName, o) {
	    var _this = this;
	
	    var r = _route2.default[routeName];
	    var url = routeToUrl.call(this, routeName);
	    if (r.detection) {
	        detection[r.detection]({
	            routeName: routeName,
	            url: url
	        }).then(function () {
	            _this.$openURL(url);
	        }, function () {
	            if (o && typeof o.failCallback === 'function') {
	                o.failCallback.call(_this, routeName);
	            }
	        });
	    } else {
	        this.$openURL(url);
	    }
	}
	/**
	 * 解析路由参数
	 * 例如：merchant_around?a=1&b=2 页面
	 *      调用params()方法 返回值为： {a:1, b:2}
	 *      调用params('a')方法 返回值为： 1
	 * @param {string} [name] 可选参数
	 * @param {string} [url] 可选参数 默认为bundleUrl
	 * @returns {string|object}
	 */
	function params(name, url) {
	    var result = {};
	    if (!url) {
	        url = this.$getConfig().bundleUrl;
	    }
	    if (url.indexOf("?") !== -1) {
	        var str = url.substr(url.indexOf("?") + 1);
	        var p = str.split("&");
	        p.forEach(function (v) {
	            var temp = v.split("=");
	            result[temp[0]] = decodeURI(temp[1]);
	        });
	    }
	    if (typeof name === 'string') {
	        if (result[name]) {
	            return result[name];
	        } else {
	            return '';
	        }
	    } else {
	        return result;
	    }
	}
	// 获取真实高度，由于weex问题未能适配所有机型。
	function realHeight(height) {
	    var w = this.$getConfig().env.deviceWidth;
	    var h = this.$getConfig().env.deviceHeight;
	    // 1332
	    return w / 750 * height;
	}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.fetch = fetch;
	exports.signin = signin;
	exports.fetchTabBar = fetchTabBar;
	exports.adapterTabBar = adapterTabBar;
	exports.fetchApps = fetchApps;
	exports.fetchNotices = fetchNotices;
	exports.fetchBanners = fetchBanners;
	exports.fetchMerchantCategory = fetchMerchantCategory;
	exports.fetchMerchantList = fetchMerchantList;
	exports.getBaseURL = getBaseURL;
	
	var _config = __webpack_require__(47);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var stream;
	__weex_define__('@weex-temp/api', function (__weex_require__) {
	    stream = __weex_require__('@weex-module/stream');
	});
	
	// 数据地址
	var apiRoot = _config2.default.apiRoot;
	function fetch(path, opt) {
	    return new Promise(function (resolve, reject) {
	        stream.fetch(Object.assign({
	            methods: 'GET',
	            url: /http:\/\/|https:\/\//.test(path) ? path : apiRoot + '/' + path + '.json',
	            type: 'json'
	        }, opt), function (response) {
	            if (response.status == 200) {
	                resolve(response.data);
	            } else {
	                reject(response);
	            }
	        });
	    }, function () {});
	}
	
	function signin() {
	    return fetch('signin', {
	        methods: 'POST'
	    });
	}
	
	function fetchTabBar() {
	    return fetch('tab-bar');
	}
	function adapterTabBar(tabItems, index, selectedColor) {
	    var baseURL = getBaseURL.call(this);
	    tabItems.forEach(function (tabItem, i) {
	        tabItem.src = baseURL + tabItem.src;
	        tabItem.image = _config2.default.assetsRoot + tabItem.image;
	        tabItem.selectedImage = _config2.default.assetsRoot + tabItem.selectedImage;
	        if (index == i) {
	            tabItem.visibility = 'visible';
	            tabItem.icon = tabItem.selectedImage;
	            tabItem.titleColor = selectedColor;
	        } else {
	            tabItem.visibility = 'hidden';
	            tabItem.icon = tabItem.image;
	        }
	    });
	    return tabItems;
	}
	
	function fetchApps() {
	    return fetch('apps');
	}
	function fetchNotices() {
	    return fetch('notices');
	}
	function fetchBanners() {
	    return fetch('banners');
	}
	function fetchMerchantCategory() {
	    return fetch('merchant-category');
	}
	
	function fetchMerchantList() {
	    return fetch('merchant-list');
	}
	
	// app jsbundle 静态资源地址
	function getBaseURL(isNav) {
	    var bundleUrl;
	
	    if (typeof this.$getConfig === 'function') {
	        bundleUrl = this.$getConfig().bundleUrl;
	    }
	    var nativeBase;
	    var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;
	
	    var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
	    if (isAndroidAssets) {
	        nativeBase = 'file://assets/dist/';
	    } else if (isiOSAssets) {
	        nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
	    } else {
	        var host = _config2.default.scriptHost;
	        var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
	
	        if (matches && matches.length >= 2) {
	            host = matches[1];
	        }
	        //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
	        if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
	            nativeBase = isNav ? _config2.default.htmlIndex + '?page=' + _config2.default.scriptRoot : _config2.default.scriptHost + _config2.default.scriptRoot;
	        } else {
	            nativeBase = _config2.default.scriptHost + _config2.default.scriptRoot;
	            // nativeBase = 'http://' + host + testRootDir + '/dist/';
	            // nativeBase = 'http://' + host + '/dist/';
	        }
	    }
	    return nativeBase;
	}

/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _icon;
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	// const assetsURL = 'file:///sdcard/img/'
	var assetsRoot = 'https://kooofly.github.io/kostand-ttf/ttf/assets/';
	
	function icon(v) {
	    return assetsRoot + 'icon/' + v;
	}
	exports.default = {
	    // weex脚本host
	    scriptHost: 'https://kooofly.github.io/kostand-ttf/ttf',
	    // HTML index
	    htmlIndex: 'https://kooofly.github.io/kostand-ttf/ttf/index.html',
	    // weex脚本根目录
	    scriptRoot: '/1001/',
	    // 图片等静态资源根目录
	    assetsRoot: assetsRoot,
	    // resetful API服务根路径
	    apiRoot: 'https://kooofly.github.io/kostand-ttf/ttf/api/v1',
	    // android 本地静态资源路径
	    androidAssetsRoot: 'file:///sdcard/assets/',
	    icon: (_icon = {
	        map: icon('map@2x.png'),
	        map_life: icon('map_life@2x.png'),
	        notice: icon('notice@2x.png'),
	        scan: icon('scan@2x.png'),
	        code: icon('code@2x.png'),
	        transaction_record: icon('transaction_record@2x.png'),
	        search: icon('search@2x.png'),
	        back: icon('back@2x.png'),
	        right_arrow: icon('right_arrow@2x.png')
	    }, _defineProperty(_icon, 'search', icon('search_shop@2x.png')), _defineProperty(_icon, 'around', icon('around@2x.png')), _defineProperty(_icon, 'search_pass', icon('search_pass@2x.png')), _defineProperty(_icon, 'star', icon('star@2x.png')), _defineProperty(_icon, 'half_star', icon('half_star@2x.png')), _defineProperty(_icon, 'dropdown', icon('dropdown@2x.png')), _defineProperty(_icon, 'tick', icon('tick@2x.png')), _defineProperty(_icon, 'collect', icon('collect@2x.png')), _defineProperty(_icon, 'collect_unselected', icon('collect-unselected@2x.png')), _icon)
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.signin = signin;
	
	var _config = __webpack_require__(47);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var storage = void 0;
	var loginModule = void 0;
	__weex_define__('@weex-temp/detection', function (__weex_require__) {
	    storage = __weex_require__('@weex-module/storage');
	    loginModule = __weex_require__('@weex-module/loginModule');
	    // testModule.openURL1
	});
	function signin(r) {
	    return new Promise(function (resolve, reject) {
	        storage.getItem('user', function (e) {
	            if (e.result !== 'failed') {
	                resolve(e.data);
	            } else {
	                reject();
	                // 跳转到登录页面
	                console.log('login refer:', r.url);
	                if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' && loginModule && loginModule.toLogin) {
	                    loginModule.toLogin('login', r.url);
	                }
	            }
	        });
	    });
	}

/***/ },
/* 49 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/*
	* 命名规则：
	* apps => views/apps.js
	* account_trading_records => views/account-trading-records.js
	* abc_def_zzz => views/abc-def-zzz.js
	* 强制这样解析 有利于命名的规范与统一，符合此规范的前提下 url 字段可以省略
	* 对应的解析方法：methods.js open()
	* */
	exports.default = {
	    index: { url: 'weex-bootstrap' },
	    apps: { title: '精选' },
	    life: { title: '生活' },
	
	    merchant: { title: '商户查询', icon: 'merchant' },
	    merchant_collection: { title: '商户收藏' },
	    merchant_nearby: { title: '附近商户' },
	    merchant_around: { title: '周边商户' },
	    merchant_introduction: { title: '简介' },
	
	    more: { title: '更多', icon: 'more' },
	
	    notices: { title: '公告' },
	    notices_detail: { title: '公告详情' },
	    signin: { title: '登录' },
	
	    payment_phone: { title: '手机充值', detection: 'signin' },
	    payment_petroleum: { title: '加油卡充值' },
	    payment_water: { title: '水费缴纳' },
	    payment_electricity: { title: '电费缴纳' },
	    payment_gas: { title: '燃气缴费' },
	
	    dashboard: { title: '我的账户', detection: 'signin' },
	    dashboard_recharge: { title: '账户充值' },
	    dashboard_transfer: { title: '账户转账' },
	    dashboard_bank_card: { title: '银行卡' },
	    dashboard_trading_records: { title: '交易记录' },
	    dashboard_password: { title: '密码管理' },
	    dashboard_certificate: { title: '证书管理' },
	
	    sumpay_card: { title: '商盟卡' },
	    sumpay_card_balance: { title: '卡余额查询' },
	    sumpay_card_password: { title: '卡密码修改' },
	    sumpay_card_detail: { title: '卡明细查询' },
	
	    test: { title: '临时测试页面' }
	};

/***/ },
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['btn-primary', 'btn-' + (this.status)]},
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "btn-primary-txt"
	      ],
	      "attr": {
	        "value": function () {return this.text}
	      }
	    }
	  ]
	}

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = {
	  "btn-primary": {
	    "alignItems": "center",
	    "justifyContent": "center",
	    "width": 686,
	    "height": 90,
	    "fontSize": 42,
	    "color": "#ffffff",
	    "borderRadius": 6
	  },
	  "btn-primary-txt": {
	    "fontSize": 42,
	    "color": "#ffffff"
	  },
	  "btn-disabled": {
	    "backgroundColor": "#cccccc"
	  },
	  "btn-enabled": {
	    "backgroundColor": "#3b8aea"
	  }
	}

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    data: function data() {
	        return {
	            text: '确 定',
	            status: 'disabled'
	        };
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "list-item"
	  ],
	  "style": {
	    "borderBottomWidth": function () {return this.borderBottomWidth}
	  },
	  "children": [
	    {
	      "type": "content"
	    }
	  ]
	}

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = {
	  "list-item": {
	    "flexWrap": "wrap",
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "center",
	    "width": 726,
	    "height": 110,
	    "marginLeft": 24,
	    "paddingRight": 20,
	    "borderBottomColor": "#dbdbdb",
	    "borderBottomStyle": "solid"
	  }
	}

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    data: function data() {
	        return {
	            last: false,
	            borderBottomWidth: 1
	        };
	    },
	    created: function created() {
	        if (this.last) {
	            this.borderBottomWidth = 0;
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "height": function () {return this.height},
	    "backgroundColor": function () {return this.backgroundColor}
	  },
	  "attr": {
	    "dataRole": function () {return this.dataRole}
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "right-text"
	      ],
	      "style": {
	        "color": function () {return this.rightItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "right",
	        "value": function () {return this.rightItemTitle}
	      },
	      "shown": function () {return !this.rightItemSrc},
	      "events": {
	        "click": "onclickrightitem"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "right-image"
	      ],
	      "attr": {
	        "naviItemPosition": "right",
	        "src": function () {return this.rightItemSrc}
	      },
	      "shown": function () {return this.rightItemSrc},
	      "events": {
	        "click": "onclickrightitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "right-mark"
	      ],
	      "shown": function () {return this.rightItemMark},
	      "events": {
	        "click": "onclickrightitem"
	      },
	      "attr": {
	        "value": function () {return this.rightItemMark}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "left-text"
	      ],
	      "style": {
	        "color": function () {return this.leftItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "left",
	        "value": function () {return this.leftItemTitle}
	      },
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "left-des"
	      ],
	      "style": {
	        "color": function () {return this.leftItemColor}
	      },
	      "shown": function () {return this.leftItemDes},
	      "attr": {
	        "value": function () {return this.leftItemDes}
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "left-image"
	      ],
	      "attr": {
	        "naviItemPosition": "left",
	        "src": function () {return this.leftItemSrc}
	      },
	      "shown": function () {return this.leftItemSrc},
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "center-text"
	      ],
	      "style": {
	        "color": function () {return this.titleColor}
	      },
	      "attr": {
	        "naviItemPosition": "center",
	        "value": function () {return this.title}
	      }
	    }
	  ]
	}

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "width": 750
	  },
	  "right-text": {
	    "position": "absolute",
	    "bottom": 24,
	    "right": 32,
	    "textAlign": "right",
	    "fontSize": 28,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "left-text": {
	    "position": "absolute",
	    "bottom": 22,
	    "left": 80,
	    "textAlign": "left",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "left-des": {
	    "position": "absolute",
	    "bottom": 22,
	    "left": 80,
	    "textAlign": "left",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "center-text": {
	    "position": "absolute",
	    "bottom": 16,
	    "left": 172,
	    "right": 172,
	    "textAlign": "center",
	    "fontSize": 38
	  },
	  "left-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "left": 28,
	    "width": 48,
	    "height": 48
	  },
	  "right-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "right": 28,
	    "width": 48,
	    "height": 48
	  },
	  "right-mark": {
	    "position": "absolute",
	    "right": 16,
	    "bottom": 38,
	    "width": 40,
	    "height": 40,
	    "backgroundColor": "#0f4f9e",
	    "borderRadius": 20,
	    "fontSize": 24,
	    "textAlign": "center",
	    "lineHeight": 40,
	    "verticalAlign": "middle",
	    "color": "#ffffff",
	    "opacity": 0.9
	  }
	}

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
	    data: function () {return {
	        dataRole: 'navbar',
	
	        backgroundColor: 'black',
	
	        height: 88,
	
	        title: "",
	
	        titleColor: 'black',
	
	        rightItemSrc: '',
	
	        rightItemTitle: '',
	        rightItemMark: '',
	
	        rightItemColor: 'black',
	
	        leftItemSrc: '',
	
	        leftItemTitle: '',
	        leftItemDes: '',
	
	        leftItemColor: 'black'
	    }},
	    methods: {
	        onclickrightitem: function onclickrightitem(e) {
	            this.$dispatch('naviBar.rightItem.click', {});
	        },
	        onclickleftitem: function onclickleftitem(e) {
	            this.$dispatch('naviBar.leftItem.click', {});
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(83)
	var __weex_style__ = __webpack_require__(84)
	var __weex_script__ = __webpack_require__(85)
	
	__weex_define__('@weex-component/navbar', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 87 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "children": [
	    {
	      "type": "navbar",
	      "classList": [
	        "navbar"
	      ],
	      "attr": {
	        "dataRole": function () {return this.dataRole},
	        "height": function () {return this.height},
	        "backgroundColor": function () {return this.backgroundColor},
	        "title": function () {return this.title},
	        "leftItemDes": function () {return this.leftItemDes},
	        "titleColor": function () {return this.titleColor},
	        "leftItemSrc": function () {return this.leftItemSrc},
	        "leftItemTitle": function () {return this.leftItemTitle},
	        "leftItemColor": function () {return this.leftItemColor},
	        "rightItemSrc": function () {return this.rightItemSrc},
	        "rightItemTitle": function () {return this.rightItemTitle},
	        "rightItemColor": function () {return this.rightItemColor},
	        "rightItemMark": function () {return this.rightItemMark}
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "wrapper"
	      ],
	      "style": {
	        "borderTopColor": function () {return this.borderBottomColor},
	        "borderTopWidth": function () {return this.borderBottomWidth},
	        "borderTopStyle": "solid",
	        "marginTop": function () {return this.marginTop}
	      },
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = {
	  "navbar": {
	    "zIndex": 10
	  },
	  "wrapper": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "zIndex": 8,
	    "width": 750
	  }
	}

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	__webpack_require__(86);
	module.exports = {
	    data: function () {return {
	        dataRole: 'navbar',
	        backgroundColor: 'black',
	        height: 88,
	        title: "",
	        borderBottomWidth: 0,
	        borderBottomColor: '#d8d8d8',
	        titleColor: 'black',
	        rightItemSrc: '',
	        rightItemTitle: '',
	        rightItemColor: 'black',
	        rightItemMark: '',
	        leftItemSrc: '',
	        leftItemTitle: '',
	        leftItemDes: '',
	        leftItemColor: 'black',
	        marginTop: 0
	    }},
	    created: function created() {
	        if (this.$getConfig().env.platform === 'iOS') {
	            this.marginTop = 0;
	        } else {
	            this.marginTop = this.height;
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(86)
	var __weex_template__ = __webpack_require__(87)
	var __weex_style__ = __webpack_require__(88)
	var __weex_script__ = __webpack_require__(89)
	
	__weex_define__('@weex-component/navpage', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(56)
	var __weex_style__ = __webpack_require__(57)
	var __weex_script__ = __webpack_require__(58)
	
	__weex_define__('@weex-component/button-primary', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(73)
	var __weex_style__ = __webpack_require__(74)
	var __weex_script__ = __webpack_require__(75)
	
	__weex_define__('@weex-component/list-item-row', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "navpage",
	  "classList": [
	    "container"
	  ],
	  "attr": {
	    "leftItemSrc": function () {return this.nav.back},
	    "title": function () {return this.nav.title},
	    "titleColor": function () {return this.nav.color},
	    "borderBottomWidth": function () {return this.nav.borderBottomWidth},
	    "backgroundColor": function () {return this.nav.backgroundColor}
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "diver"
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "wrapper"
	      ],
	      "children": [
	        {
	          "type": "list-item-row",
	          "classList": [
	            "row"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "row-label"
	              ],
	              "attr": {
	                "value": "所属省份"
	              }
	            },
	            {
	              "type": "div",
	              "classList": [
	                "row-right"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "row-right-selected-value"
	                  ],
	                  "attr": {
	                    "value": function () {return this.value.province}
	                  }
	                },
	                {
	                  "type": "image",
	                  "classList": [
	                    "row-right-icon"
	                  ],
	                  "attr": {
	                    "src": function () {return this.ui.right_arrow}
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "list-item-row",
	          "classList": [
	            "row"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "row-left"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "row-label"
	                  ],
	                  "attr": {
	                    "value": "加油卡卡号"
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "row-left-pre"
	                  ],
	                  "attr": {
	                    "value": "10001133 -"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "row-right"
	              ],
	              "children": [
	                {
	                  "type": "input",
	                  "classList": [
	                    "input",
	                    "row-right-input"
	                  ],
	                  "events": {
	                    "input": "onNumberInput"
	                  },
	                  "attr": {
	                    "type": "password",
	                    "placeholder": "加油卡末11位",
	                    "value": ""
	                  }
	                },
	                {
	                  "type": "image",
	                  "classList": [
	                    "row-right-icon"
	                  ],
	                  "attr": {
	                    "src": function () {return this.ui.right_arrow}
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "list-item-row",
	          "classList": [
	            "row",
	            "row-flex-start"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "row-label"
	              ],
	              "attr": {
	                "value": "充值金额"
	              }
	            },
	            {
	              "type": "div",
	              "classList": function () {return ['box', 'box-' + (this.status)]},
	              "repeat": function () {return this.paymentAmount},
	              "events": {
	                "click": function ($event) {this.select(this.$index,$event)}
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "classList": function () {return ['box-text-' + (this.status)]},
	                  "attr": {
	                    "value": function () {return (this.text) + '元'}
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "list-item-row",
	          "classList": [
	            "row"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "row-left"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "row-label"
	                  ],
	                  "attr": {
	                    "value": "通知手机号码"
	                  }
	                },
	                {
	                  "type": "input",
	                  "classList": [
	                    "input",
	                    "input-phone"
	                  ],
	                  "events": {
	                    "input": "onPhoneInput"
	                  },
	                  "attr": {
	                    "type": "text",
	                    "placeholder": "请输入手机号码",
	                    "value": ""
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "row-right"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": function () {return ['btn-code', 'btn-code-' + (this.btnCode.status)]},
	                  "events": {
	                    "click": "onBtnCodeClick"
	                  },
	                  "attr": {
	                    "value": function () {return this.btnCode.text}
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "list-item-row",
	          "classList": [
	            "row",
	            "row-flex-start"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "row-label"
	              ],
	              "attr": {
	                "value": "验证码"
	              }
	            },
	            {
	              "type": "input",
	              "classList": [
	                "input",
	                "input-code"
	              ],
	              "events": {
	                "input": "onCodeInput"
	              },
	              "attr": {
	                "type": "text",
	                "placeholder": "请输入短信验证码",
	                "value": ""
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "agreement"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "agreement-text"
	          ],
	          "attr": {
	            "value": "阅读并同意"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "agreement-link"
	          ],
	          "attr": {
	            "value": "统统付充值缴费协议"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "center"
	      ],
	      "children": [
	        {
	          "type": "button-primary",
	          "events": {
	            "click": "submit"
	          },
	          "attr": {
	            "status": function () {return this.btnPrimaryStatus},
	            "text": "下一步"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "help"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "style": {
	            "fontSize": 28
	          },
	          "attr": {
	            "value": "温馨提示："
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "help-text"
	          ],
	          "attr": {
	            "value": "1、按充值金额收取1.5%服务费，一般2-5个工作日完成充值，双休日及节假日顺延"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "help-text"
	          ],
	          "attr": {
	            "value": "2、一个账户最多允许给4张加油卡充值，下单即自动绑定，绑定后不可更改"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "help-text"
	          ],
	          "attr": {
	            "value": "3、加油卡充值仅针对浙江省内中石化加油卡卡主进行充值，副卡不能进行充值；充值后用户须携带加油卡在浙江省内中石化加油站进行圈存方可正常使用"
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 223 */
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "backgroundColor": "#ffffff"
	  },
	  "diver": {
	    "height": 20,
	    "width": 750,
	    "backgroundColor": "#f2f2f2"
	  },
	  "row-label": {
	    "width": 224,
	    "marginRight": 42,
	    "marginLeft": 10,
	    "fontSize": 36,
	    "color": "#333333"
	  },
	  "row-left": {
	    "flexDirection": "row",
	    "justifyContent": "flex-start",
	    "alignItems": "center"
	  },
	  "row-left-pre": {
	    "fontSize": 28
	  },
	  "row-right": {
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "row-right-input": {
	    "width": 200,
	    "marginRight": 25
	  },
	  "row-right-selected-value": {
	    "marginRight": 25,
	    "fontSize": 32,
	    "color": "#999999"
	  },
	  "row-right-icon": {
	    "width": 40,
	    "height": 40
	  },
	  "row-flex-start": {
	    "justifyContent": "flex-start"
	  },
	  "agreement": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "marginTop": 60,
	    "marginBottom": 30
	  },
	  "agreement-text": {
	    "fontSize": 26,
	    "color": "#4d4d4d"
	  },
	  "agreement-link": {
	    "fontSize": 26,
	    "color": "#2680ed"
	  },
	  "wrapper": {
	    "width": 750,
	    "borderTopWidth": 1,
	    "borderTopColor": "#dbdbdb",
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#dbdbdb"
	  },
	  "center": {
	    "alignItems": "center"
	  },
	  "help": {
	    "marginLeft": 30,
	    "marginRight": 30,
	    "marginTop": 30
	  },
	  "help-text": {
	    "marginBottom": 20,
	    "color": "#999999",
	    "fontSize": 24,
	    "lineHeight": 40
	  },
	  "box": {
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": 60,
	    "paddingLeft": 20,
	    "paddingRight": 20,
	    "marginRight": 40,
	    "fontSize": 28,
	    "borderWidth": 2,
	    "borderColor": "#3b8aea",
	    "borderRadius": 6
	  },
	  "box-unselected": {
	    "backgroundColor": "#ffffff"
	  },
	  "box-selected": {
	    "backgroundColor": "#3b8aea"
	  },
	  "box-text-unselected": {
	    "color": "#3b8aea"
	  },
	  "box-text-selected": {
	    "color": "#ffffff"
	  },
	  "input": {
	    "height": 60,
	    "fontSize": 32,
	    "color": "#333333"
	  },
	  "input-phone": {
	    "width": 240,
	    "height": 60
	  },
	  "input-code": {
	    "width": 268,
	    "height": 60
	  },
	  "btn-code-enabled": {
	    "fontSize": 32,
	    "color": "#2680ed"
	  },
	  "btn-code-disabled": {
	    "fontSize": 32,
	    "color": "#cccccc"
	  },
	  "btn-code-timing": {
	    "fontSize": 24,
	    "color": "#cccccc"
	  }
	}

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _assign = __webpack_require__(8);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _config = __webpack_require__(47);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _validation = __webpack_require__(225);
	
	var _validation2 = _interopRequireDefault(_validation);
	
	var _methods = __webpack_require__(45);
	
	var methods = _interopRequireWildcard(_methods);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var navigator = __weex_require__('@weex-module/navigator');
	__webpack_require__(149);
	__webpack_require__(217);
	__webpack_require__(218);
	exports.default = {
	    data: {
	        nav: {
	            title: '加油卡充值',
	            color: '#4d4d4d',
	            backgroundColor: '#fff',
	            borderBottomWidth: 1,
	            back: _config2.default.icon.back
	        },
	        ui: {
	            right_arrow: _config2.default.icon.right_arrow
	        },
	        paymentAmount: [{ amount: '500', text: '500', status: 'unselected' }, { amount: '1000', text: '1000', status: 'unselected' }],
	        btnCode: {
	            text: '获取验证码',
	            status: 'disabled'
	        },
	        btnPrimaryStatus: 'disabled',
	        value: {
	            province: '浙江',
	            number: '',
	            amount: '',
	            phone: '',
	            code: ''
	        }
	    },
	    created: function created() {
	        var _this = this;
	
	        this.$on('naviBar.leftItem.click', function () {
	            var params = {
	                'animated': 'true'
	            };
	            navigator.pop(params, function () {});
	        });
	        this.$on('formChange', function () {
	            _this.btnPrimaryStatus = _this.value.province && _this.value.number && _this.value.amount && _this.value.phone && _this.value.code ? 'enabled' : 'disabled';
	        });
	    },
	
	    methods: (0, _assign2.default)({
	        select: function select(index) {
	            var _this2 = this;
	
	            this.paymentAmount.forEach(function (v, i) {
	                if (index === i) {
	                    v.status = 'selected';
	                    _this2.value.amount = v.amount;
	                    _this2.$dispatch('formChange');
	                } else {
	                    v.status = 'unselected';
	                }
	            });
	        },
	        onNumberInput: function onNumberInput(e) {
	            this.value.number = e.value;
	            this.$dispatch('formChange');
	        },
	        onCodeInput: function onCodeInput(e) {
	            this.value.code = e.value;
	            this.$dispatch('formChange');
	        },
	        onPhoneInput: function onPhoneInput(e) {
	            if (_validation2.default.isPhoneNo(e.value)) {
	                this.value.phone = e.value;
	                this.setBtnCodeStatus('enabled');
	            } else {
	                this.setBtnCodeStatus('disabled');
	            }
	            this.$dispatch('formChange');
	        },
	        onBtnCodeClick: function onBtnCodeClick() {
	            if (this.btnCode.status === 'enabled') {
	                this.setBtnCodeStatus('timing');
	            }
	        },
	        setBtnCodeStatus: function setBtnCodeStatus(status) {
	            var _this3 = this;
	
	            switch (status) {
	                case 'timing':
	                    var clock = 30;
	                    this.btnCode.text = clock + 's后重新获取';
	                    var t = setInterval(function () {
	                        if (clock > 1) {
	                            clock--;
	                            _this3.btnCode.text = clock + 's后重新获取';
	                        } else {
	                            _this3.btnCode.text = '获取验证码';
	                            _this3.btnCode.status = 'enabled';
	                            clearInterval(t);
	                        }
	                    }, 1000);
	                    break;
	                case 'enabled':
	                    this.btnCode.text = '获取验证码';
	
	                    break;
	                case 'disabled':
	                    this.btnCode.text = '获取验证码';
	
	                    break;
	            }
	            this.btnCode.status = status;
	        },
	        submit: function submit() {
	            console.log(this.value);
	        }
	    }, methods)
	};}
	/* generated by weex-loader */


/***/ },
/* 225 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    isPhoneNo: function isPhoneNo(v) {
	        return true;
	        return (/^1[34578]\d{9}$/.test(v)
	        );
	    }
	};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWRiMDEyZWQ3NjI2ZThiNjU1ZGU/ODkxOCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wYXltZW50LXBldHJvbGV1bS53ZT84M2I2Iiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanM/ZTZjYSoqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzPzgwZTQqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcz85MDA3KioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcz9lY2UyKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcz83N2FhKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanM/MWI2MioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanM/Y2UwMCoqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzP2Q1M2UqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcz9hNmRhKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcz80MTE2KioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcz8wZGEzKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcz8yNGM4KioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzP2JkMWYqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanM/NzA1MSoqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcz85MzVkKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanM/YWI0NCoqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanM/NDlhNCoqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzPzFlODYqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcz81YzBjKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzP2Y1YmMqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanM/ZmNlYSoqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanM/ZDg1MCoqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzPzY5NDYqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcz81Y2Y5KioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcz80OGVhKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanM/NDVkMyoqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcz82MTk5KioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcz82MmE3KioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanM/ZjY1ZioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qcz85ZmQ0KioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanM/MmE2YyoqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanM/N2I2YyoqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanM/ZThjZCoqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzPzc1OTgqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanM/YTVmYioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzP2QwZDIqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzP2I1YzAqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9tZXRob2RzLmpzPzNkOTIqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9hcGkuanM/YzNiNSoqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbmZpZy5qcz9jMTgzKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kZXRlY3Rpb24uanM/OGZiNCoqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3JvdXRlLmpzPzc2ZmQqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi1wcmltYXJ5LndlPzc2MDgqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi1wcmltYXJ5LndlPzllMmEqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi1wcmltYXJ5LndlP2IxMTYqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9saXN0LWl0ZW0vbGlzdC1pdGVtLXJvdy53ZT9mMDlkKioqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xpc3QtaXRlbS9saXN0LWl0ZW0tcm93LndlPzU0YWUqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGlzdC1pdGVtL2xpc3QtaXRlbS1yb3cud2U/NzhlZioqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25hdnBhZ2UvbmF2YmFyLndlP2I1NTEqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25hdnBhZ2UvbmF2YmFyLndlPzUwOGEqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25hdnBhZ2UvbmF2YmFyLndlPzY1MzkqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2cGFnZS9uYXZiYXIud2U/OWMxMioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZwYWdlL25hdnBhZ2Uud2U/MmYyNioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZwYWdlL25hdnBhZ2Uud2U/MGZmYioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZwYWdlL25hdnBhZ2Uud2U/ZmY0YioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZwYWdlL25hdnBhZ2Uud2U/ODAyNioqKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24tcHJpbWFyeS53ZT81YWI4KioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGlzdC1pdGVtL2xpc3QtaXRlbS1yb3cud2U/N2ZjMSoqIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wYXltZW50LXBldHJvbGV1bS53ZT85MGUyIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wYXltZW50LXBldHJvbGV1bS53ZT82ZGRhIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wYXltZW50LXBldHJvbGV1bS53ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3ZhbGlkYXRpb24uanMiXSwibmFtZXMiOlsicm91dGVUb1VybCIsIm9wZW4iLCJwYXJhbXMiLCJyZWFsSGVpZ2h0IiwiZGV0ZWN0aW9uIiwicm91dGVOYW1lIiwidGVzdCIsInNwbGl0IiwiciIsImNvbXBpbGVVcmwiLCJjb25zb2xlIiwibG9nIiwidXJsIiwiam9pbiIsImNhbGwiLCJ3aW5kb3ciLCJvIiwidGhlbiIsIiRvcGVuVVJMIiwiZmFpbENhbGxiYWNrIiwibmFtZSIsInJlc3VsdCIsIiRnZXRDb25maWciLCJidW5kbGVVcmwiLCJpbmRleE9mIiwic3RyIiwic3Vic3RyIiwicCIsImZvckVhY2giLCJ0ZW1wIiwidiIsImRlY29kZVVSSSIsImhlaWdodCIsInciLCJlbnYiLCJkZXZpY2VXaWR0aCIsImgiLCJkZXZpY2VIZWlnaHQiLCJmZXRjaCIsInNpZ25pbiIsImZldGNoVGFiQmFyIiwiYWRhcHRlclRhYkJhciIsImZldGNoQXBwcyIsImZldGNoTm90aWNlcyIsImZldGNoQmFubmVycyIsImZldGNoTWVyY2hhbnRDYXRlZ29yeSIsImZldGNoTWVyY2hhbnRMaXN0IiwiZ2V0QmFzZVVSTCIsInN0cmVhbSIsIl9fd2VleF9kZWZpbmVfXyIsIl9fd2VleF9yZXF1aXJlX18iLCJhcGlSb290IiwicGF0aCIsIm9wdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiT2JqZWN0IiwiYXNzaWduIiwibWV0aG9kcyIsInR5cGUiLCJyZXNwb25zZSIsInN0YXR1cyIsImRhdGEiLCJ0YWJJdGVtcyIsImluZGV4Iiwic2VsZWN0ZWRDb2xvciIsImJhc2VVUkwiLCJ0YWJJdGVtIiwiaSIsInNyYyIsImltYWdlIiwiYXNzZXRzUm9vdCIsInNlbGVjdGVkSW1hZ2UiLCJ2aXNpYmlsaXR5IiwiaWNvbiIsInRpdGxlQ29sb3IiLCJpc05hdiIsIm5hdGl2ZUJhc2UiLCJpc0FuZHJvaWRBc3NldHMiLCJpc2lPU0Fzc2V0cyIsInN1YnN0cmluZyIsImxhc3RJbmRleE9mIiwiaG9zdCIsInNjcmlwdEhvc3QiLCJtYXRjaGVzIiwiZXhlYyIsImxlbmd0aCIsImh0bWxJbmRleCIsInNjcmlwdFJvb3QiLCJhbmRyb2lkQXNzZXRzUm9vdCIsIm1hcCIsIm1hcF9saWZlIiwibm90aWNlIiwic2NhbiIsImNvZGUiLCJ0cmFuc2FjdGlvbl9yZWNvcmQiLCJzZWFyY2giLCJiYWNrIiwicmlnaHRfYXJyb3ciLCJzdG9yYWdlIiwibG9naW5Nb2R1bGUiLCJnZXRJdGVtIiwiZSIsInRvTG9naW4iLCJhcHBzIiwidGl0bGUiLCJsaWZlIiwibWVyY2hhbnQiLCJtZXJjaGFudF9jb2xsZWN0aW9uIiwibWVyY2hhbnRfbmVhcmJ5IiwibWVyY2hhbnRfYXJvdW5kIiwibWVyY2hhbnRfaW50cm9kdWN0aW9uIiwibW9yZSIsIm5vdGljZXMiLCJub3RpY2VzX2RldGFpbCIsInBheW1lbnRfcGhvbmUiLCJwYXltZW50X3BldHJvbGV1bSIsInBheW1lbnRfd2F0ZXIiLCJwYXltZW50X2VsZWN0cmljaXR5IiwicGF5bWVudF9nYXMiLCJkYXNoYm9hcmQiLCJkYXNoYm9hcmRfcmVjaGFyZ2UiLCJkYXNoYm9hcmRfdHJhbnNmZXIiLCJkYXNoYm9hcmRfYmFua19jYXJkIiwiZGFzaGJvYXJkX3RyYWRpbmdfcmVjb3JkcyIsImRhc2hib2FyZF9wYXNzd29yZCIsImRhc2hib2FyZF9jZXJ0aWZpY2F0ZSIsInN1bXBheV9jYXJkIiwic3VtcGF5X2NhcmRfYmFsYW5jZSIsInN1bXBheV9jYXJkX3Bhc3N3b3JkIiwic3VtcGF5X2NhcmRfZGV0YWlsIiwiaXNQaG9uZU5vIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0Esb0NBQW1DLDZCQUE2QjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQy9WQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ1lBOzs7O0FBQ0E7Ozs7OztLQUNBOzs7Ozs7eUJBQ0E7cUJBQ0E7cUJBQ0E7cUJBQ0E7Ozs7b0JBSUE7b0JBQ0E7OEJBQ0E7Z0NBQ0E7eUNBRUE7QUFOQTs7Z0RBU0E7QUFGQTt3QkFHQSx1Q0FDQSx3REFFQTs7bUJBRUE7cUJBRUE7QUFIQTsyQkFJQTs7dUJBRUE7cUJBQ0E7cUJBQ0E7b0JBQ0E7bUJBR0E7QUFQQTtBQXBCQTs7QUE0QkE7O3dEQUNBOzs2QkFHQTtBQUZBO2dEQUdBO0FBQ0E7NENBQ0E7MklBQ0EsbUJBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7O3dEQUNBO2tDQUNBO2dDQUNBOzZDQUNBO3NDQUNBO3dCQUNBO2dDQUNBO0FBQ0E7QUFDQTtBQUNBO2tEQUNBO21DQUNBOzRCQUNBO0FBQ0E7OENBQ0E7aUNBQ0E7NEJBQ0E7QUFDQTtnREFDQTswREFDQTtzQ0FDQTt1Q0FDQTtvQkFDQTt1Q0FDQTtBQUNBOzRCQUNBO0FBQ0E7bURBQ0E7b0RBQ0E7dUNBQ0E7QUFDQTtBQUNBOztBQUNBOztxQkFDQTtzQkFDQTtpQ0FDQTtpREFDQTtxREFDQTt3Q0FDQTtBQUNBOzJEQUNBO2dDQUNBO21EQUNBO3FEQUNBOzJDQUNBO0FBQ0E7d0JBQ0E7QUFDQTtzQkFDQTt5Q0FFQTs7QUFDQTtzQkFDQTt5Q0FFQTs7QUFFQTs7bUNBQ0E7QUFDQTttQ0FDQTs4QkFDQTtBQUNBO0FBL0RBLFFBZ0VBO0FBekdBOzs7Ozs7Ozs7Ozs7O21CQ25KZTtBQUNYMEIsZ0JBQVcsbUJBQVV0RyxDQUFWLEVBQWE7QUFDcEIsZ0JBQU8sSUFBUDtBQUNBLGdCQUFPLG1CQUFrQnhCLElBQWxCLENBQXVCd0IsQ0FBdkI7QUFBUDtBQUNIO0FBSlUsRSIsImZpbGUiOiJ2aWV3c1xccGF5bWVudC1wZXRyb2xldW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1ZGIwMTJlZDc2MjZlOGI2NTVkZSIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vcGF5bWVudC1wZXRyb2xldW0ud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vcGF5bWVudC1wZXRyb2xldW0ud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9wYXltZW50LXBldHJvbGV1bS53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC83YzU3MWUzYzBkMzA0MDEyZWY0NzQ4ODZhNWVmNzVjYScsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5fX3dlZXhfYm9vdHN0cmFwX18oJ0B3ZWV4LWNvbXBvbmVudC83YzU3MWUzYzBkMzA0MDEyZWY0NzQ4ODZhNWVmNzVjYScsdW5kZWZpbmVkLHVuZGVmaW5lZClcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3cy9wYXltZW50LXBldHJvbGV1bS53ZT9lbnRyeT10cnVlXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMzMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM3IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCAkYXNzaWduICA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHZhciBBID0ge31cbiAgICAsIEIgPSB7fVxuICAgICwgUyA9IFN5bWJvbCgpXG4gICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgYUxlbiAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpbmRleCA9IDFcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmZcbiAgICAsIGlzRW51bSAgICAgPSBwSUUuZjtcbiAgd2hpbGUoYUxlbiA+IGluZGV4KXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pXG4gICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNyIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJ2YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b0lPYmplY3QgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwga2V5O1xuICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiaW1wb3J0IHsgZ2V0QmFzZVVSTCB9IGZyb20gJy4vYXBpJ1xyXG5pbXBvcnQgKiBhcyBkZXRlY3Rpb24gZnJvbSAnLi9kZXRlY3Rpb24nXHJcbmltcG9ydCByb3V0ZSBmcm9tICcuL3JvdXRlJ1xyXG4vKipcclxuICog6Lev55Sx6L2s6ZO+5o6lXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSByb3V0ZU5hbWVcclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByb3V0ZVRvVXJsIChyb3V0ZU5hbWUpIHtcclxuICAgIHZhciBwYXJhbXMgPSAnJ1xyXG4gICAgaWYgKC9cXD8vLnRlc3Qocm91dGVOYW1lKSkge1xyXG4gICAgICAgIHBhcmFtcyA9IHJvdXRlTmFtZS5zcGxpdCgnPycpWzFdXHJcbiAgICAgICAgcm91dGVOYW1lID0gcm91dGVOYW1lLnNwbGl0KCc/JylbMF1cclxuICAgIH1cclxuICAgIGxldCByID0gcm91dGVbcm91dGVOYW1lXVxyXG4gICAgbGV0IGNvbXBpbGVVcmxcclxuICAgIGlmICghcikge1xyXG4gICAgICAgIC8vIFRPRE8g6Lez6L2s5Yiw6ZSZ6K+v6aG1XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yOiDot6/nlLHkuI3lrZjlnKjvvIzor7flnKhyb3V0ZXIuanPkuK3phY3nva7lr7nlupTnmoTot6/nlLEnKVxyXG4gICAgfVxyXG4gICAgY29tcGlsZVVybCA9IHIudXJsID8gci51cmwgOiAndmlld3MvJyArIHJvdXRlTmFtZS5zcGxpdCgnXycpLmpvaW4oJy0nKVxyXG4gICAgbGV0IHVybCA9IGdldEJhc2VVUkwuY2FsbCh0aGlzLCB0cnVlKSArIGNvbXBpbGVVcmwgKyAnLmpzJ1xyXG4gICAgLy8g5YWB6K645re75Yqg5Y+C5pWwIOS+i+WmgiBtZXJjaGFudF9hcm91bmQ/YT0xJmI9MiDlpITnkIbop4TliJnlkozmtY/op4jlmajnmoRxdWVyeXN0cmluZ+S4gOiHtFxyXG4gICAgaWYgKHBhcmFtcykge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwgKyAnJicgKyBwYXJhbXNcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwgKyAnPycgKyBwYXJhbXNcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXJsXHJcbn1cclxuLyoqXHJcbiAqIOaJk+W8gOaWsOmhtemdolxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcm91dGVOYW1lIC0g6Lev55Sx5ZCN56ewIOaJgOaciei3r+eUseWQjeensOWcqHJvdXRlLmpz5LitXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvIC0g546w5Zyo5Y+q5pyJ6Lev55Sx5omT5byA5aSx6LSl5aSE55CG5pa55rOV77yM5Lul5ZCO5Y+v5Lul5re75Yqg5YW25LuW5aSE55CGXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG8uZmFpbENhbGxiYWNrIC0g6Lev55Sx5omT5byA5aSx6LSl5aSE55CGY2FsbGJhY2tcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvcGVuIChyb3V0ZU5hbWUsIG8pIHtcclxuICAgIGxldCByID0gcm91dGVbcm91dGVOYW1lXVxyXG4gICAgbGV0IHVybCA9IHJvdXRlVG9VcmwuY2FsbCh0aGlzLCByb3V0ZU5hbWUpXHJcbiAgICBpZiAoci5kZXRlY3Rpb24pIHtcclxuICAgICAgICBkZXRlY3Rpb25bci5kZXRlY3Rpb25dKHtcclxuICAgICAgICAgICAgcm91dGVOYW1lOiByb3V0ZU5hbWUsXHJcbiAgICAgICAgICAgIHVybDogdXJsXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJG9wZW5VUkwodXJsKVxyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgdHlwZW9mIG8uZmFpbENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvLmZhaWxDYWxsYmFjay5jYWxsKHRoaXMsIHJvdXRlTmFtZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuJG9wZW5VUkwodXJsKVxyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiDop6PmnpDot6/nlLHlj4LmlbBcclxuICog5L6L5aaC77yabWVyY2hhbnRfYXJvdW5kP2E9MSZiPTIg6aG16Z2iXHJcbiAqICAgICAg6LCD55SocGFyYW1zKCnmlrnms5Ug6L+U5Zue5YC85Li677yaIHthOjEsIGI6Mn1cclxuICogICAgICDosIPnlKhwYXJhbXMoJ2EnKeaWueazlSDov5Tlm57lgLzkuLrvvJogMVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW25hbWVdIOWPr+mAieWPguaVsFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3VybF0g5Y+v6YCJ5Y+C5pWwIOm7mOiupOS4umJ1bmRsZVVybFxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfG9iamVjdH1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJhbXMgKG5hbWUsIHVybCl7XHJcbiAgICBsZXQgcmVzdWx0ID0ge31cclxuICAgIGlmICghdXJsKSB7XHJcbiAgICAgICAgdXJsID0gdGhpcy4kZ2V0Q29uZmlnKCkuYnVuZGxlVXJsXHJcbiAgICB9XHJcbiAgICBpZiAodXJsLmluZGV4T2YoXCI/XCIpICE9PSAtMSkge1xyXG4gICAgICAgIGxldCBzdHIgPSB1cmwuc3Vic3RyKHVybC5pbmRleE9mKFwiP1wiKSArIDEpXHJcbiAgICAgICAgbGV0IHAgPSBzdHIuc3BsaXQoXCImXCIpXHJcbiAgICAgICAgcC5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdGVtcCA9IHYuc3BsaXQoXCI9XCIpXHJcbiAgICAgICAgICAgIHJlc3VsdFt0ZW1wWzBdXSA9IGRlY29kZVVSSSh0ZW1wWzFdKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgaWYgKHJlc3VsdFtuYW1lXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0W25hbWVdXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnXHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9XHJcbn1cclxuLy8g6I635Y+W55yf5a6e6auY5bqm77yM55Sx5LqOd2VleOmXrumimOacquiDvemAgumFjeaJgOacieacuuWei+OAglxyXG5leHBvcnQgZnVuY3Rpb24gcmVhbEhlaWdodCAoaGVpZ2h0KSB7XHJcbiAgICBsZXQgdyA9IHRoaXMuJGdldENvbmZpZygpLmVudi5kZXZpY2VXaWR0aFxyXG4gICAgbGV0IGggPSB0aGlzLiRnZXRDb25maWcoKS5lbnYuZGV2aWNlSGVpZ2h0XHJcbiAgICAvLyAxMzMyXHJcbiAgICByZXR1cm4gdyAvIDc1MCAqIGhlaWdodFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9tZXRob2RzLmpzIiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZydcclxudmFyIHN0cmVhbVxyXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LXRlbXAvYXBpJywgZnVuY3Rpb24gKF9fd2VleF9yZXF1aXJlX18pIHtcclxuICAgIHN0cmVhbSA9IF9fd2VleF9yZXF1aXJlX18oJ0B3ZWV4LW1vZHVsZS9zdHJlYW0nKVxyXG59KTtcclxuXHJcbi8vIOaVsOaNruWcsOWdgFxyXG5jb25zdCBhcGlSb290ID0gY29uZmlnLmFwaVJvb3RcclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoIChwYXRoLCBvcHQpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgc3RyZWFtLmZldGNoKE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICBtZXRob2RzOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiAvaHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvLy50ZXN0KHBhdGgpID8gcGF0aCA6IGAke2FwaVJvb3R9LyR7cGF0aH0uanNvbmAsXHJcbiAgICAgICAgICAgIHR5cGU6ICdqc29uJ1xyXG4gICAgICAgIH0sIG9wdCksIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChyZXNwb25zZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gKVxyXG4gICAgfSwgKCkgPT4ge30pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaWduaW4gKCkge1xyXG4gICAgcmV0dXJuIGZldGNoKCdzaWduaW4nLCB7XHJcbiAgICAgICAgbWV0aG9kczogJ1BPU1QnXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hUYWJCYXIgKCkge1xyXG4gICAgcmV0dXJuIGZldGNoKCd0YWItYmFyJylcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYWRhcHRlclRhYkJhcih0YWJJdGVtcywgaW5kZXgsIHNlbGVjdGVkQ29sb3IpIHtcclxuICAgIGNvbnN0IGJhc2VVUkwgPSBnZXRCYXNlVVJMLmNhbGwodGhpcylcclxuICAgIHRhYkl0ZW1zLmZvckVhY2goKHRhYkl0ZW0sIGkpID0+IHtcclxuICAgICAgICB0YWJJdGVtLnNyYyA9IGJhc2VVUkwgK+OAgHRhYkl0ZW0uc3JjO1xyXG4gICAgICAgIHRhYkl0ZW0uaW1hZ2UgPSBjb25maWcuYXNzZXRzUm9vdCAr44CAdGFiSXRlbS5pbWFnZTtcclxuICAgICAgICB0YWJJdGVtLnNlbGVjdGVkSW1hZ2UgPSBjb25maWcuYXNzZXRzUm9vdCAr44CAdGFiSXRlbS5zZWxlY3RlZEltYWdlXHJcbiAgICAgICAgaWYgKGluZGV4ID09IGkpIHtcclxuICAgICAgICAgICAgdGFiSXRlbS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXHJcbiAgICAgICAgICAgIHRhYkl0ZW0uaWNvbiA9IHRhYkl0ZW0uc2VsZWN0ZWRJbWFnZTtcclxuICAgICAgICAgICAgdGFiSXRlbS50aXRsZUNvbG9yID0gc2VsZWN0ZWRDb2xvcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0YWJJdGVtLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xyXG4gICAgICAgICAgICB0YWJJdGVtLmljb24gPSB0YWJJdGVtLmltYWdlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHRhYkl0ZW1zXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEFwcHMgKCkge1xyXG4gICAgcmV0dXJuIGZldGNoKCdhcHBzJylcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hOb3RpY2VzICgpIHtcclxuICAgIHJldHVybiBmZXRjaCgnbm90aWNlcycpXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQmFubmVycyAoKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goJ2Jhbm5lcnMnKVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaE1lcmNoYW50Q2F0ZWdvcnkgKCkge1xyXG4gICAgcmV0dXJuIGZldGNoKCdtZXJjaGFudC1jYXRlZ29yeScpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaE1lcmNoYW50TGlzdCAoKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goJ21lcmNoYW50LWxpc3QnKVxyXG59XHJcblxyXG5cclxuLy8gYXBwIGpzYnVuZGxlIOmdmeaAgei1hOa6kOWcsOWdgFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmFzZVVSTCAoaXNOYXYpIHtcclxuICAgIHZhciBidW5kbGVVcmxcclxuXHJcbiAgICBpZiAodHlwZW9mIHRoaXMuJGdldENvbmZpZyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIGJ1bmRsZVVybCA9IHRoaXMuJGdldENvbmZpZygpLmJ1bmRsZVVybFxyXG4gICAgfVxyXG4gICAgdmFyIG5hdGl2ZUJhc2U7XHJcbiAgICB2YXIgaXNBbmRyb2lkQXNzZXRzID0gYnVuZGxlVXJsLmluZGV4T2YoJ2ZpbGU6Ly9hc3NldHMvJykgPj0gMDtcclxuXHJcbiAgICB2YXIgaXNpT1NBc3NldHMgPSBidW5kbGVVcmwuaW5kZXhPZignZmlsZTovLy8nKSA+PSAwICYmIGJ1bmRsZVVybC5pbmRleE9mKCdXZWV4RGVtby5hcHAnKSA+IDA7XHJcbiAgICBpZiAoaXNBbmRyb2lkQXNzZXRzKSB7XHJcbiAgICAgICAgbmF0aXZlQmFzZSA9ICdmaWxlOi8vYXNzZXRzL2Rpc3QvJztcclxuICAgIH0gZWxzZSBpZiAoaXNpT1NBc3NldHMpIHtcclxuICAgICAgICBuYXRpdmVCYXNlID0gYnVuZGxlVXJsLnN1YnN0cmluZygwLCBidW5kbGVVcmwubGFzdEluZGV4T2YoJy8nKSArIDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgaG9zdCA9IGNvbmZpZy5zY3JpcHRIb3N0O1xyXG4gICAgICAgIHZhciBtYXRjaGVzID0gL1xcL1xcLyhbXlxcL10rPylcXC8vLmV4ZWMoYnVuZGxlVXJsKTtcclxuXHJcbiAgICAgICAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlcy5sZW5ndGggPj0gMikge1xyXG4gICAgICAgICAgICBob3N0ID0gbWF0Y2hlc1sxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/mraTlpITpnIDms6jmhI/kuIDkuIssdGFiYmFyIOeUqOeahOebtOaOpeaYr2pzYnVuZGxlIOeahOi3r+W+hCzkvYbmmK9uYXZpZ2F0b3LmmK/nm7TmjqXot7PovazliLDmlrDpobXpnaLkuIrnmoQuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIG5hdGl2ZUJhc2UgPSBpc05hdiA/IGNvbmZpZy5odG1sSW5kZXggKyAnP3BhZ2U9JyArIGNvbmZpZy5zY3JpcHRSb290IDogY29uZmlnLnNjcmlwdEhvc3QgKyBjb25maWcuc2NyaXB0Um9vdDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuYXRpdmVCYXNlID0gY29uZmlnLnNjcmlwdEhvc3QgKyBjb25maWcuc2NyaXB0Um9vdDtcclxuICAgICAgICAgICAgLy8gbmF0aXZlQmFzZSA9ICdodHRwOi8vJyArIGhvc3QgKyB0ZXN0Um9vdERpciArICcvZGlzdC8nO1xyXG4gICAgICAgICAgICAvLyBuYXRpdmVCYXNlID0gJ2h0dHA6Ly8nICsgaG9zdCArICcvZGlzdC8nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBuYXRpdmVCYXNlO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9hcGkuanMiLCIvLyBjb25zdCBhc3NldHNVUkwgPSAnZmlsZTovLy9zZGNhcmQvaW1nLydcclxuY29uc3QgYXNzZXRzUm9vdCA9ICdodHRwczovL2tvb29mbHkuZ2l0aHViLmlvL2tvc3RhbmQtdHRmL3R0Zi9hc3NldHMvJ1xyXG5cclxuZnVuY3Rpb24gaWNvbih2KSB7XHJcbiAgICByZXR1cm4gYXNzZXRzUm9vdCArICdpY29uLycgKyB2XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgLy8gd2VleOiEmuacrGhvc3RcclxuICAgIHNjcmlwdEhvc3Q6ICdodHRwczovL2tvb29mbHkuZ2l0aHViLmlvL2tvc3RhbmQtdHRmL3R0ZicsXHJcbiAgICAvLyBIVE1MIGluZGV4XHJcbiAgICBodG1sSW5kZXg6ICdodHRwczovL2tvb29mbHkuZ2l0aHViLmlvL2tvc3RhbmQtdHRmL3R0Zi9pbmRleC5odG1sJyxcclxuICAgIC8vIHdlZXjohJrmnKzmoLnnm67lvZVcclxuICAgIHNjcmlwdFJvb3Q6ICcvMTAwMS8nLFxyXG4gICAgLy8g5Zu+54mH562J6Z2Z5oCB6LWE5rqQ5qC555uu5b2VXHJcbiAgICBhc3NldHNSb290OiBhc3NldHNSb290LFxyXG4gICAgLy8gcmVzZXRmdWwgQVBJ5pyN5Yqh5qC56Lev5b6EXHJcbiAgICBhcGlSb290OiAnaHR0cHM6Ly9rb29vZmx5LmdpdGh1Yi5pby9rb3N0YW5kLXR0Zi90dGYvYXBpL3YxJyxcclxuICAgIC8vIGFuZHJvaWQg5pys5Zyw6Z2Z5oCB6LWE5rqQ6Lev5b6EXHJcbiAgICBhbmRyb2lkQXNzZXRzUm9vdDogJ2ZpbGU6Ly8vc2RjYXJkL2Fzc2V0cy8nLFxyXG4gICAgaWNvbjoge1xyXG4gICAgICAgIG1hcDogaWNvbignbWFwQDJ4LnBuZycpLFxyXG4gICAgICAgIG1hcF9saWZlOiBpY29uKCdtYXBfbGlmZUAyeC5wbmcnKSxcclxuICAgICAgICBub3RpY2U6IGljb24oJ25vdGljZUAyeC5wbmcnKSxcclxuICAgICAgICBzY2FuOiBpY29uKCdzY2FuQDJ4LnBuZycpLFxyXG4gICAgICAgIGNvZGU6IGljb24oJ2NvZGVAMngucG5nJyksXHJcbiAgICAgICAgdHJhbnNhY3Rpb25fcmVjb3JkOiBpY29uKCd0cmFuc2FjdGlvbl9yZWNvcmRAMngucG5nJyksXHJcbiAgICAgICAgc2VhcmNoOiBpY29uKCdzZWFyY2hAMngucG5nJyksXHJcbiAgICAgICAgYmFjazogaWNvbignYmFja0AyeC5wbmcnKSxcclxuICAgICAgICByaWdodF9hcnJvdzogaWNvbigncmlnaHRfYXJyb3dAMngucG5nJyksXHJcbiAgICAgICAgc2VhcmNoOiBpY29uKCdzZWFyY2hfc2hvcEAyeC5wbmcnKSxcclxuICAgICAgICBhcm91bmQ6IGljb24oJ2Fyb3VuZEAyeC5wbmcnKSxcclxuICAgICAgICBzZWFyY2hfcGFzczogaWNvbignc2VhcmNoX3Bhc3NAMngucG5nJyksXHJcbiAgICAgICAgc3RhcjogaWNvbignc3RhckAyeC5wbmcnKSxcclxuICAgICAgICBoYWxmX3N0YXI6IGljb24oJ2hhbGZfc3RhckAyeC5wbmcnKSxcclxuICAgICAgICBkcm9wZG93bjogaWNvbignZHJvcGRvd25AMngucG5nJyksXHJcbiAgICAgICAgdGljazogaWNvbigndGlja0AyeC5wbmcnKSxcclxuICAgICAgICBjb2xsZWN0OiBpY29uKCdjb2xsZWN0QDJ4LnBuZycpLFxyXG4gICAgICAgIGNvbGxlY3RfdW5zZWxlY3RlZDogaWNvbignY29sbGVjdC11bnNlbGVjdGVkQDJ4LnBuZycpXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2NvbmZpZy5qcyIsImltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnXHJcbmxldCBzdG9yYWdlXHJcbmxldCBsb2dpbk1vZHVsZVxyXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LXRlbXAvZGV0ZWN0aW9uJywgZnVuY3Rpb24gKF9fd2VleF9yZXF1aXJlX18pIHtcclxuICAgIHN0b3JhZ2UgPSBfX3dlZXhfcmVxdWlyZV9fKCdAd2VleC1tb2R1bGUvc3RvcmFnZScpXHJcbiAgICBsb2dpbk1vZHVsZSA9IF9fd2VleF9yZXF1aXJlX18oJ0B3ZWV4LW1vZHVsZS9sb2dpbk1vZHVsZScpXHJcbiAgICAvLyB0ZXN0TW9kdWxlLm9wZW5VUkwxXHJcbn0pO1xyXG5leHBvcnQgZnVuY3Rpb24gc2lnbmluIChyKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHN0b3JhZ2UuZ2V0SXRlbSgndXNlcicsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLnJlc3VsdCAhPT0gJ2ZhaWxlZCcpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoZS5kYXRhKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KClcclxuICAgICAgICAgICAgICAgIC8vIOi3s+i9rOWIsOeZu+W9lemhtemdolxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvZ2luIHJlZmVyOicsIHIudXJsKVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICdvYmplY3QnICYmIGxvZ2luTW9kdWxlICYmIGxvZ2luTW9kdWxlLnRvTG9naW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2dpbk1vZHVsZS50b0xvZ2luKCdsb2dpbicsIHIudXJsKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2RldGVjdGlvbi5qcyIsIi8qXHJcbiog5ZG95ZCN6KeE5YiZ77yaXHJcbiogYXBwcyA9PiB2aWV3cy9hcHBzLmpzXHJcbiogYWNjb3VudF90cmFkaW5nX3JlY29yZHMgPT4gdmlld3MvYWNjb3VudC10cmFkaW5nLXJlY29yZHMuanNcclxuKiBhYmNfZGVmX3p6eiA9PiB2aWV3cy9hYmMtZGVmLXp6ei5qc1xyXG4qIOW8uuWItui/meagt+ino+aekCDmnInliKnkuo7lkb3lkI3nmoTop4TojIPkuI7nu5/kuIDvvIznrKblkIjmraTop4TojIPnmoTliY3mj5DkuIsgdXJsIOWtl+auteWPr+S7peecgeeVpVxyXG4qIOWvueW6lOeahOino+aekOaWueazle+8mm1ldGhvZHMuanMgb3BlbigpXHJcbiogKi9cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgaW5kZXg6IHsgdXJsOiAnd2VleC1ib290c3RyYXAnIH0sXHJcbiAgICBhcHBzOiB7IHRpdGxlOiAn57K+6YCJJyB9LFxyXG4gICAgbGlmZTogeyB0aXRsZTogJ+eUn+a0uycgfSxcclxuXHJcblxyXG5cclxuICAgIG1lcmNoYW50OiB7IHRpdGxlOiAn5ZWG5oi35p+l6K+iJywgaWNvbjogJ21lcmNoYW50JyB9LFxyXG4gICAgbWVyY2hhbnRfY29sbGVjdGlvbjogeyB0aXRsZTogJ+WVhuaIt+aUtuiXjycgfSxcclxuICAgIG1lcmNoYW50X25lYXJieTogeyB0aXRsZTogJ+mZhOi/keWVhuaItycgfSxcclxuICAgIG1lcmNoYW50X2Fyb3VuZDogeyB0aXRsZTogJ+WRqOi+ueWVhuaItycgfSxcclxuICAgIG1lcmNoYW50X2ludHJvZHVjdGlvbjogeyB0aXRsZTogJ+eugOS7iycgfSxcclxuXHJcbiAgICBtb3JlOiB7IHRpdGxlOiAn5pu05aSaJywgaWNvbjogJ21vcmUnIH0sXHJcblxyXG4gICAgbm90aWNlczogeyB0aXRsZTogJ+WFrOWRiicgfSxcclxuICAgIG5vdGljZXNfZGV0YWlsOiB7IHRpdGxlOiAn5YWs5ZGK6K+m5oOFJyB9LFxyXG4gICAgc2lnbmluOiB7IHRpdGxlOiAn55m75b2VJyB9LFxyXG5cclxuICAgIHBheW1lbnRfcGhvbmU6IHsgdGl0bGU6ICfmiYvmnLrlhYXlgLwnLCBkZXRlY3Rpb246ICdzaWduaW4nIH0sXHJcbiAgICBwYXltZW50X3BldHJvbGV1bTogeyB0aXRsZTogJ+WKoOayueWNoeWFheWAvCcgfSxcclxuICAgIHBheW1lbnRfd2F0ZXI6IHsgdGl0bGU6ICfmsLTotLnnvLTnurMnIH0sXHJcbiAgICBwYXltZW50X2VsZWN0cmljaXR5OiB7IHRpdGxlOiAn55S16LS557y057qzJyB9LFxyXG4gICAgcGF5bWVudF9nYXM6IHsgdGl0bGU6ICfnh4PmsJTnvLTotLknIH0sXHJcblxyXG4gICAgZGFzaGJvYXJkOiB7IHRpdGxlOiAn5oiR55qE6LSm5oi3JywgZGV0ZWN0aW9uOiAnc2lnbmluJyB9LFxyXG4gICAgZGFzaGJvYXJkX3JlY2hhcmdlOiB7IHRpdGxlOiAn6LSm5oi35YWF5YC8JyB9LFxyXG4gICAgZGFzaGJvYXJkX3RyYW5zZmVyOiB7IHRpdGxlOiAn6LSm5oi36L2s6LSmJyB9LFxyXG4gICAgZGFzaGJvYXJkX2JhbmtfY2FyZDogeyB0aXRsZTogJ+mTtuihjOWNoScgfSxcclxuICAgIGRhc2hib2FyZF90cmFkaW5nX3JlY29yZHM6IHsgdGl0bGU6ICfkuqTmmJPorrDlvZUnIH0sXHJcbiAgICBkYXNoYm9hcmRfcGFzc3dvcmQ6IHsgdGl0bGU6ICflr4bnoIHnrqHnkIYnIH0sXHJcbiAgICBkYXNoYm9hcmRfY2VydGlmaWNhdGU6IHsgdGl0bGU6ICfor4HkuabnrqHnkIYnIH0sXHJcblxyXG4gICAgc3VtcGF5X2NhcmQ6IHsgdGl0bGU6ICfllYbnm5/ljaEnIH0sXHJcbiAgICBzdW1wYXlfY2FyZF9iYWxhbmNlOiB7IHRpdGxlOiAn5Y2h5L2Z6aKd5p+l6K+iJyB9LFxyXG4gICAgc3VtcGF5X2NhcmRfcGFzc3dvcmQ6IHsgdGl0bGU6ICfljaHlr4bnoIHkv67mlLknIH0sXHJcbiAgICBzdW1wYXlfY2FyZF9kZXRhaWw6IHsgdGl0bGU6ICfljaHmmI7nu4bmn6Xor6InIH0sXHJcblxyXG4gICAgdGVzdDogeyB0aXRsZTogJ+S4tOaXtua1i+ivlemhtemdoicgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9yb3V0ZS5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjbGFzc0xpc3RcIjogZnVuY3Rpb24gKCkge3JldHVybiBbJ2J0bi1wcmltYXJ5JywgJ2J0bi0nICsgKHRoaXMuc3RhdHVzKV19LFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiYnRuLXByaW1hcnktdHh0XCJcbiAgICAgIF0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50ZXh0fVxuICAgICAgfVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi1wcmltYXJ5LndlXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDQgMzEgMzIgMzMgMzQgMzUiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJidG4tcHJpbWFyeVwiOiB7XG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwid2lkdGhcIjogNjg2LFxuICAgIFwiaGVpZ2h0XCI6IDkwLFxuICAgIFwiZm9udFNpemVcIjogNDIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiA2XG4gIH0sXG4gIFwiYnRuLXByaW1hcnktdHh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IDQyLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJidG4tZGlzYWJsZWRcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2NjY2NjY1wiXG4gIH0sXG4gIFwiYnRuLWVuYWJsZWRcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzNiOGFlYVwiXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24tcHJpbWFyeS53ZVxuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSA0IDMxIDMyIDMzIDM0IDM1IiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImJ0bi1wcmltYXJ5IGJ0bi17e3N0YXR1c319XCI+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJidG4tcHJpbWFyeS10eHRcIj57e3RleHR9fTwvdGV4dD5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c3R5bGUgc2NvcGVkPlxyXG4gICAgLmJ0bi1wcmltYXJ5IHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogNjg2cHg7IGhlaWdodDogOTBweDtcclxuICAgICAgICBmb250LXNpemU6IDQycHg7IGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIH1cclxuICAgIC5idG4tcHJpbWFyeS10eHQgeyBmb250LXNpemU6IDQycHg7IGNvbG9yOiAjZmZmOyB9XHJcblxyXG4gICAgLmJ0bi1kaXNhYmxlZHsgYmFja2dyb3VuZC1jb2xvcjogI2NjYzsgfVxyXG4gICAgLmJ0bi1lbmFibGVkeyBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I4YWVhOyB9XHJcbjwvc3R5bGU+XHJcbjxzY3JpcHQ+XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgZGF0YSAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAn56GuIOWumicsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdkaXNhYmxlZCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi1wcmltYXJ5LndlPzA1NmFjZmNkIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJsaXN0LWl0ZW1cIlxuICBdLFxuICBcInN0eWxlXCI6IHtcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5ib3JkZXJCb3R0b21XaWR0aH1cbiAgfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiY29udGVudFwiXG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9zcmMvY29tcG9uZW50cy9saXN0LWl0ZW0vbGlzdC1pdGVtLXJvdy53ZVxuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCAzMSAzMiAzMyAzNSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImxpc3QtaXRlbVwiOiB7XG4gICAgXCJmbGV4V3JhcFwiOiBcIndyYXBcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwid2lkdGhcIjogNzI2LFxuICAgIFwiaGVpZ2h0XCI6IDExMCxcbiAgICBcIm1hcmdpbkxlZnRcIjogMjQsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMjAsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNkYmRiZGJcIixcbiAgICBcImJvcmRlckJvdHRvbVN0eWxlXCI6IFwic29saWRcIlxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9zcmMvY29tcG9uZW50cy9saXN0LWl0ZW0vbGlzdC1pdGVtLXJvdy53ZVxuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCAzMSAzMiAzMyAzNSIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJsaXN0LWl0ZW1cIiBzdHlsZT1cImJvcmRlci1ib3R0b20td2lkdGg6IHt7Ym9yZGVyQm90dG9tV2lkdGh9fVwiPlxyXG4gICAgICAgIDxjb250ZW50PjwvY29udGVudD5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c3R5bGUgc2NvcGVkPlxyXG4gICAgLmxpc3QtaXRlbSB7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwOyBmbGV4LWRpcmVjdGlvbjogcm93OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDcyNnB4OyBoZWlnaHQ6IDExMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2RiZGJkYjsgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbjxzY3JpcHQ+XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgZGF0YSAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBsYXN0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoOiAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZWQgKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sYXN0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvcmRlckJvdHRvbVdpZHRoID0gMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9saXN0LWl0ZW0vbGlzdC1pdGVtLXJvdy53ZT8yNmIyNTg3MSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiY29udGFpbmVyXCJcbiAgXSxcbiAgXCJzdHlsZVwiOiB7XG4gICAgXCJoZWlnaHRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmhlaWdodH0sXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmJhY2tncm91bmRDb2xvcn1cbiAgfSxcbiAgXCJhdHRyXCI6IHtcbiAgICBcImRhdGFSb2xlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5kYXRhUm9sZX1cbiAgfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInJpZ2h0LXRleHRcIlxuICAgICAgXSxcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcImNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodEl0ZW1Db2xvcn1cbiAgICAgIH0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcIm5hdmlJdGVtUG9zaXRpb25cIjogXCJyaWdodFwiLFxuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodEl0ZW1UaXRsZX1cbiAgICAgIH0sXG4gICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gIXRoaXMucmlnaHRJdGVtU3JjfSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcIm9uY2xpY2tyaWdodGl0ZW1cIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJyaWdodC1pbWFnZVwiXG4gICAgICBdLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJuYXZpSXRlbVBvc2l0aW9uXCI6IFwicmlnaHRcIixcbiAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJpZ2h0SXRlbVNyY31cbiAgICAgIH0sXG4gICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodEl0ZW1TcmN9LFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwib25jbGlja3JpZ2h0aXRlbVwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwicmlnaHQtbWFya1wiXG4gICAgICBdLFxuICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmlnaHRJdGVtTWFya30sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJvbmNsaWNrcmlnaHRpdGVtXCJcbiAgICAgIH0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodEl0ZW1NYXJrfVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImxlZnQtdGV4dFwiXG4gICAgICBdLFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtQ29sb3J9XG4gICAgICB9LFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJuYXZpSXRlbVBvc2l0aW9uXCI6IFwibGVmdFwiLFxuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sZWZ0SXRlbVRpdGxlfVxuICAgICAgfSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcIm9uY2xpY2tsZWZ0aXRlbVwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwibGVmdC1kZXNcIlxuICAgICAgXSxcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcImNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sZWZ0SXRlbUNvbG9yfVxuICAgICAgfSxcbiAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtRGVzfSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtRGVzfVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJsZWZ0LWltYWdlXCJcbiAgICAgIF0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcIm5hdmlJdGVtUG9zaXRpb25cIjogXCJsZWZ0XCIsXG4gICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sZWZ0SXRlbVNyY31cbiAgICAgIH0sXG4gICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sZWZ0SXRlbVNyY30sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJvbmNsaWNrbGVmdGl0ZW1cIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImNlbnRlci10ZXh0XCJcbiAgICAgIF0sXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGVDb2xvcn1cbiAgICAgIH0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcIm5hdmlJdGVtUG9zaXRpb25cIjogXCJjZW50ZXJcIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGV9XG4gICAgICB9XG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9zcmMvY29tcG9uZW50cy9uYXZwYWdlL25hdmJhci53ZVxuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyAxNCAyMSAyMiAyMyAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImNvbnRhaW5lclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJ3aWR0aFwiOiA3NTBcbiAgfSxcbiAgXCJyaWdodC10ZXh0XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImJvdHRvbVwiOiAyNCxcbiAgICBcInJpZ2h0XCI6IDMyLFxuICAgIFwidGV4dEFsaWduXCI6IFwicmlnaHRcIixcbiAgICBcImZvbnRTaXplXCI6IDI4LFxuICAgIFwiZm9udEZhbWlseVwiOiBcIidPcGVuIFNhbnMnLCBzYW5zLXNlcmlmXCJcbiAgfSxcbiAgXCJsZWZ0LXRleHRcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiYm90dG9tXCI6IDIyLFxuICAgIFwibGVmdFwiOiA4MCxcbiAgICBcInRleHRBbGlnblwiOiBcImxlZnRcIixcbiAgICBcImZvbnRTaXplXCI6IDMyLFxuICAgIFwiZm9udEZhbWlseVwiOiBcIidPcGVuIFNhbnMnLCBzYW5zLXNlcmlmXCJcbiAgfSxcbiAgXCJsZWZ0LWRlc1wiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJib3R0b21cIjogMjIsXG4gICAgXCJsZWZ0XCI6IDgwLFxuICAgIFwidGV4dEFsaWduXCI6IFwibGVmdFwiLFxuICAgIFwiZm9udFNpemVcIjogMzIsXG4gICAgXCJmb250RmFtaWx5XCI6IFwiJ09wZW4gU2FucycsIHNhbnMtc2VyaWZcIlxuICB9LFxuICBcImNlbnRlci10ZXh0XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImJvdHRvbVwiOiAxNixcbiAgICBcImxlZnRcIjogMTcyLFxuICAgIFwicmlnaHRcIjogMTcyLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmb250U2l6ZVwiOiAzOFxuICB9LFxuICBcImxlZnQtaW1hZ2VcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiYm90dG9tXCI6IDIwLFxuICAgIFwibGVmdFwiOiAyOCxcbiAgICBcIndpZHRoXCI6IDQ4LFxuICAgIFwiaGVpZ2h0XCI6IDQ4XG4gIH0sXG4gIFwicmlnaHQtaW1hZ2VcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiYm90dG9tXCI6IDIwLFxuICAgIFwicmlnaHRcIjogMjgsXG4gICAgXCJ3aWR0aFwiOiA0OCxcbiAgICBcImhlaWdodFwiOiA0OFxuICB9LFxuICBcInJpZ2h0LW1hcmtcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwicmlnaHRcIjogMTYsXG4gICAgXCJib3R0b21cIjogMzgsXG4gICAgXCJ3aWR0aFwiOiA0MCxcbiAgICBcImhlaWdodFwiOiA0MCxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwZjRmOWVcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiAyMCxcbiAgICBcImZvbnRTaXplXCI6IDI0LFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDQwLFxuICAgIFwidmVydGljYWxBbGlnblwiOiBcIm1pZGRsZVwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJvcGFjaXR5XCI6IDAuOVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9zcmMvY29tcG9uZW50cy9uYXZwYWdlL25hdmJhci53ZVxuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyAxNCAyMSAyMiAyMyAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBzdHlsZT1cImhlaWdodDp7e2hlaWdodH19OyBiYWNrZ3JvdW5kLWNvbG9yOnt7YmFja2dyb3VuZENvbG9yfX07XCIgZGF0YS1yb2xlPXt7ZGF0YVJvbGV9fT5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInJpZ2h0LXRleHRcIiBzdHlsZT1cImNvbG9yOnt7cmlnaHRJdGVtQ29sb3J9fTtcIiBuYXZpLWl0ZW0tcG9zaXRpb249XCJyaWdodFwiIGlmPXt7IXJpZ2h0SXRlbVNyY319IG9uY2xpY2sgPSBcIm9uY2xpY2tyaWdodGl0ZW1cIj57e3JpZ2h0SXRlbVRpdGxlfX08L3RleHQ+XHJcbiAgICAgICAgPGltYWdlIGNsYXNzPVwicmlnaHQtaW1hZ2VcIiBuYXZpLWl0ZW0tcG9zaXRpb249XCJyaWdodFwiIHNyYz17e3JpZ2h0SXRlbVNyY319IGlmPXt7cmlnaHRJdGVtU3JjfX0gb25jbGljaz1cIm9uY2xpY2tyaWdodGl0ZW1cIj48L2ltYWdlPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwicmlnaHQtbWFya1wiIGlmPVwie3tyaWdodEl0ZW1NYXJrfX1cIiBvbmNsaWNrPVwib25jbGlja3JpZ2h0aXRlbVwiPnt7cmlnaHRJdGVtTWFya319PC90ZXh0PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwibGVmdC10ZXh0XCIgc3R5bGU9XCJjb2xvcjp7e2xlZnRJdGVtQ29sb3J9fTtcIiBuYXZpLWl0ZW0tcG9zaXRpb249XCJsZWZ0XCIgIG9uY2xpY2s9IFwib25jbGlja2xlZnRpdGVtXCI+e3tsZWZ0SXRlbVRpdGxlfX08L3RleHQ+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJsZWZ0LWRlc1wiIHN0eWxlPVwiY29sb3I6e3tsZWZ0SXRlbUNvbG9yfX07XCIgaWY9e3tsZWZ0SXRlbURlc319Pnt7bGVmdEl0ZW1EZXN9fTwvdGV4dD5cclxuICAgICAgICA8aW1hZ2UgY2xhc3M9XCJsZWZ0LWltYWdlXCIgbmF2aS1pdGVtLXBvc2l0aW9uPVwibGVmdFwiIHNyYz17e2xlZnRJdGVtU3JjfX0gaWY9e3tsZWZ0SXRlbVNyY319IG9uY2xpY2s9XCJvbmNsaWNrbGVmdGl0ZW1cIj48L2ltYWdlPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiY2VudGVyLXRleHRcIiBzdHlsZT1cImNvbG9yOnt7dGl0bGVDb2xvcn19O1wiIG5hdmktaXRlbS1wb3NpdGlvbj1cImNlbnRlclwiPnt7dGl0bGV9fTwvdGV4dD5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlPlxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7IHRvcDogMDsgbGVmdDogMDsgcmlnaHQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDc1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5yaWdodC10ZXh0IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogMjRweDsgcmlnaHQ6IDMycHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IGZvbnQtc2l6ZTogMjhweDsgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gICAgLmxlZnQtdGV4dCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDIycHg7IGxlZnQ6IDgwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDsgZm9udC1zaXplOiAzMnB4OyBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgICAubGVmdC1kZXMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAyMnB4OyBsZWZ0OiA4MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMnB4OyBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgICAuY2VudGVyLXRleHQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAxNnB4OyBsZWZ0OiAxNzJweDsgcmlnaHQ6IDE3MnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAzOHB4O1xyXG4gICAgfVxyXG4gICAgLmxlZnQtaW1hZ2Uge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAyMHB4OyBsZWZ0OiAyOHB4O1xyXG4gICAgICAgIHdpZHRoOiA0OHB4OyBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB9XHJcbiAgICAucmlnaHQtaW1hZ2Uge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAyMHB4OyByaWdodDogMjhweDtcclxuICAgICAgICB3aWR0aDogNDhweDsgaGVpZ2h0OiA0OHB4O1xyXG4gICAgfVxyXG4gICAgLnJpZ2h0LW1hcmsge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IDE2cHg7IGJvdHRvbTogMzhweDtcclxuICAgICAgICB3aWR0aDogNDBweDsgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwZjRmOWU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7IHRleHQtYWxpZ246IGNlbnRlcjsgIGxpbmUtaGVpZ2h0OiA0MHB4OyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBjb2xvcjogI2ZmZjtcclxuICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBkYXRhUm9sZTogJ25hdmJhcicsXHJcbiAgICAgICAgICAgIC8v5a+86Iiq5p2h6IOM5pmv6ImyXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgLy/lr7zoiKrmnaHpq5jluqZcclxuICAgICAgICAgICAgaGVpZ2h0OiA4OCxcclxuICAgICAgICAgICAgLy/lr7zoiKrmnaHmoIfpophcclxuICAgICAgICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgICAgICAgIC8v5a+86Iiq5p2h5qCH6aKY6aKc6ImyXHJcbiAgICAgICAgICAgIHRpdGxlQ29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgICAgIC8v5Y+z5L6n5oyJ6ZKu5Zu+54mHXHJcbiAgICAgICAgICAgIHJpZ2h0SXRlbVNyYzogJycsXHJcbiAgICAgICAgICAgIC8v5Y+z5L6n5oyJ6ZKu5qCH6aKYXHJcbiAgICAgICAgICAgIHJpZ2h0SXRlbVRpdGxlOiAnJyxcclxuICAgICAgICAgICAgcmlnaHRJdGVtTWFyazogJycsXHJcbiAgICAgICAgICAgIC8v5Y+z5L6n5oyJ6ZKu5qCH6aKY6aKc6ImyXHJcbiAgICAgICAgICAgIHJpZ2h0SXRlbUNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgICAgICAvL+W3puS+p+aMiemSruWbvueJh1xyXG4gICAgICAgICAgICBsZWZ0SXRlbVNyYzogJycsXHJcbiAgICAgICAgICAgIC8v5bem5L6n5oyJ6ZKu5qCH6aKYXHJcbiAgICAgICAgICAgIGxlZnRJdGVtVGl0bGU6ICcnLFxyXG4gICAgICAgICAgICBsZWZ0SXRlbURlczogJycsXHJcbiAgICAgICAgICAgIC8v5bem5L6n5oyJ6ZKu6aKc6ImyXHJcbiAgICAgICAgICAgIGxlZnRJdGVtQ29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIG9uY2xpY2tyaWdodGl0ZW06IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRkaXNwYXRjaCgnbmF2aUJhci5yaWdodEl0ZW0uY2xpY2snLCB7fSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uY2xpY2tsZWZ0aXRlbTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGRpc3BhdGNoKCduYXZpQmFyLmxlZnRJdGVtLmNsaWNrJywge30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvbmF2cGFnZS9uYXZiYXIud2U/M2RmN2Y0YTYiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL25hdmJhci53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9uYXZiYXIud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9uYXZiYXIud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvbmF2YmFyJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL25hdnBhZ2UvbmF2YmFyLndlXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDE0IDIxIDIyIDIzIDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJjb250YWluZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJuYXZiYXJcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJuYXZiYXJcIlxuICAgICAgXSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwiZGF0YVJvbGVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmRhdGFSb2xlfSxcbiAgICAgICAgXCJoZWlnaHRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmhlaWdodH0sXG4gICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5iYWNrZ3JvdW5kQ29sb3J9LFxuICAgICAgICBcInRpdGxlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aXRsZX0sXG4gICAgICAgIFwibGVmdEl0ZW1EZXNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtRGVzfSxcbiAgICAgICAgXCJ0aXRsZUNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aXRsZUNvbG9yfSxcbiAgICAgICAgXCJsZWZ0SXRlbVNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGVmdEl0ZW1TcmN9LFxuICAgICAgICBcImxlZnRJdGVtVGl0bGVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtVGl0bGV9LFxuICAgICAgICBcImxlZnRJdGVtQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtQ29sb3J9LFxuICAgICAgICBcInJpZ2h0SXRlbVNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmlnaHRJdGVtU3JjfSxcbiAgICAgICAgXCJyaWdodEl0ZW1UaXRsZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmlnaHRJdGVtVGl0bGV9LFxuICAgICAgICBcInJpZ2h0SXRlbUNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodEl0ZW1Db2xvcn0sXG4gICAgICAgIFwicmlnaHRJdGVtTWFya1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmlnaHRJdGVtTWFya31cbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcIndyYXBwZXJcIlxuICAgICAgXSxcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcImJvcmRlclRvcENvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5ib3JkZXJCb3R0b21Db2xvcn0sXG4gICAgICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmJvcmRlckJvdHRvbVdpZHRofSxcbiAgICAgICAgXCJib3JkZXJUb3BTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgICAgIFwibWFyZ2luVG9wXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5tYXJnaW5Ub3B9XG4gICAgICB9LFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJjb250ZW50XCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vc3JjL2NvbXBvbmVudHMvbmF2cGFnZS9uYXZwYWdlLndlXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDE0IDIxIDIyIDIzIDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwibmF2YmFyXCI6IHtcbiAgICBcInpJbmRleFwiOiAxMFxuICB9LFxuICBcIndyYXBwZXJcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wXCI6IDAsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwiYm90dG9tXCI6IDAsXG4gICAgXCJ6SW5kZXhcIjogOCxcbiAgICBcIndpZHRoXCI6IDc1MFxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9zcmMvY29tcG9uZW50cy9uYXZwYWdlL25hdnBhZ2Uud2Vcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMTQgMjEgMjIgMjMgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYiLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPG5hdmJhciBjbGFzcz1cIm5hdmJhclwiIGRhdGEtcm9sZT17e2RhdGFSb2xlfX0gaGVpZ2h0PXt7aGVpZ2h0fX0gYmFja2dyb3VuZC1jb2xvcj17e2JhY2tncm91bmRDb2xvcn19IHRpdGxlPXt7dGl0bGV9fSAgbGVmdC1pdGVtLWRlcz1cInt7bGVmdEl0ZW1EZXN9fVwiIHRpdGxlLWNvbG9yPXt7dGl0bGVDb2xvcn19IGxlZnQtaXRlbS1zcmM9e3tsZWZ0SXRlbVNyY319IGxlZnQtaXRlbS10aXRsZT17e2xlZnRJdGVtVGl0bGV9fSBsZWZ0LWl0ZW0tY29sb3I9e3tsZWZ0SXRlbUNvbG9yfX0gcmlnaHQtaXRlbS1zcmM9e3tyaWdodEl0ZW1TcmN9fSByaWdodC1pdGVtLXRpdGxlPXt7cmlnaHRJdGVtVGl0bGV9fSByaWdodC1pdGVtLWNvbG9yPXt7cmlnaHRJdGVtQ29sb3J9fSByaWdodC1pdGVtLW1hcms9XCJ7e3JpZ2h0SXRlbU1hcmt9fVwiPjwvbmF2YmFyPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCIgc3R5bGU9XCJib3JkZXItdG9wLWNvbG9yOiB7e2JvcmRlckJvdHRvbUNvbG9yfX07IGJvcmRlci10b3Atd2lkdGg6e3tib3JkZXJCb3R0b21XaWR0aH19OyBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDsgbWFyZ2luLXRvcDp7e21hcmdpblRvcH19XCI+XHJcbiAgICAgICAgICAgIDxjb250ZW50PjwvY29udGVudD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlPlxyXG4gICAgLm5hdmJhciB7IHotaW5kZXg6IDEwOyB9XHJcbiAgICAud3JhcHBlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7IHotaW5kZXg6IDg7XHJcbiAgICAgICAgd2lkdGg6IDc1MHB4O1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIHJlcXVpcmUoJy4vbmF2YmFyLndlJylcclxuICAgIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGF0YVJvbGU6ICduYXZiYXInLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgICAgIGhlaWdodDogODgsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aDogMCxcclxuICAgICAgICAgICAgYm9yZGVyQm90dG9tQ29sb3I6ICcjZDhkOGQ4JyxcclxuICAgICAgICAgICAgdGl0bGVDb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgcmlnaHRJdGVtU3JjOiAnJyxcclxuICAgICAgICAgICAgcmlnaHRJdGVtVGl0bGU6ICcnLFxyXG4gICAgICAgICAgICByaWdodEl0ZW1Db2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgcmlnaHRJdGVtTWFyazogJycsXHJcbiAgICAgICAgICAgIGxlZnRJdGVtU3JjOiAnJyxcclxuICAgICAgICAgICAgbGVmdEl0ZW1UaXRsZTogJycsXHJcbiAgICAgICAgICAgIGxlZnRJdGVtRGVzOiAnJyxcclxuICAgICAgICAgICAgbGVmdEl0ZW1Db2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVhdGVkICgpIHtcclxuICAgICAgICAgICAgLy8gaU9TIOWktOmDqG5hdnBhZ2UgdWnmuLLmn5PkuI5INSBBbmRyb2lk5LiN5LiA6Ie0XHJcbiAgICAgICAgICAgIGlmKHRoaXMuJGdldENvbmZpZygpLmVudi5wbGF0Zm9ybSA9PT0gJ2lPUycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFyZ2luVG9wID0gMFxyXG4gICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmdpblRvcCA9IHRoaXMuaGVpZ2h0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL25hdnBhZ2UvbmF2cGFnZS53ZT80ODU4MjE4NCIsInJlcXVpcmUoXCIuL25hdmJhci53ZVwiKVxudmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9uYXZwYWdlLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL25hdnBhZ2Uud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9uYXZwYWdlLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L25hdnBhZ2UnLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvbmF2cGFnZS9uYXZwYWdlLndlXG4vLyBtb2R1bGUgaWQgPSAxNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAyMSAyMiAyMyAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vYnV0dG9uLXByaW1hcnkud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vYnV0dG9uLXByaW1hcnkud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9idXR0b24tcHJpbWFyeS53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC9idXR0b24tcHJpbWFyeScsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLXByaW1hcnkud2Vcbi8vIG1vZHVsZSBpZCA9IDIxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDMxIDMyIDMzIDM0IDM1IiwidmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9saXN0LWl0ZW0tcm93LndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL2xpc3QtaXRlbS1yb3cud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9saXN0LWl0ZW0tcm93LndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L2xpc3QtaXRlbS1yb3cnLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvbGlzdC1pdGVtL2xpc3QtaXRlbS1yb3cud2Vcbi8vIG1vZHVsZSBpZCA9IDIxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDMxIDMyIDMzIDM1IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcIm5hdnBhZ2VcIixcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiY29udGFpbmVyXCJcbiAgXSxcbiAgXCJhdHRyXCI6IHtcbiAgICBcImxlZnRJdGVtU3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5uYXYuYmFja30sXG4gICAgXCJ0aXRsZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubmF2LnRpdGxlfSxcbiAgICBcInRpdGxlQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm5hdi5jb2xvcn0sXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubmF2LmJvcmRlckJvdHRvbVdpZHRofSxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubmF2LmJhY2tncm91bmRDb2xvcn1cbiAgfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiZGl2ZXJcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwid3JhcHBlclwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJsaXN0LWl0ZW0tcm93XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJyb3dcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwicm93LWxhYmVsXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5omA5bGe55yB5Lu9XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInJvdy1yaWdodFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJyb3ctcmlnaHQtc2VsZWN0ZWQtdmFsdWVcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnZhbHVlLnByb3ZpbmNlfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJyb3ctcmlnaHQtaWNvblwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnVpLnJpZ2h0X2Fycm93fVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImxpc3QtaXRlbS1yb3dcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInJvd1wiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInJvdy1sZWZ0XCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInJvdy1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuWKoOayueWNoeWNoeWPt1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwicm93LWxlZnQtcHJlXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiMTAwMDExMzMgLVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwicm93LXJpZ2h0XCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICBcInJvdy1yaWdodC1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImlucHV0XCI6IFwib25OdW1iZXJJbnB1dFwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuWKoOayueWNoeacqzEx5L2NXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJyb3ctcmlnaHQtaWNvblwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnVpLnJpZ2h0X2Fycm93fVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImxpc3QtaXRlbS1yb3dcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInJvd1wiLFxuICAgICAgICAgICAgXCJyb3ctZmxleC1zdGFydFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJyb3ctbGFiZWxcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLlhYXlgLzph5Hpop1cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogZnVuY3Rpb24gKCkge3JldHVybiBbJ2JveCcsICdib3gtJyArICh0aGlzLnN0YXR1cyldfSxcbiAgICAgICAgICAgICAgXCJyZXBlYXRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnBheW1lbnRBbW91bnR9LFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbiAoJGV2ZW50KSB7dGhpcy5zZWxlY3QodGhpcy4kaW5kZXgsJGV2ZW50KX1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogZnVuY3Rpb24gKCkge3JldHVybiBbJ2JveC10ZXh0LScgKyAodGhpcy5zdGF0dXMpXX0sXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gKHRoaXMudGV4dCkgKyAn5YWDJ31cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJsaXN0LWl0ZW0tcm93XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJyb3dcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJyb3ctbGVmdFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJyb3ctbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLpgJrnn6XmiYvmnLrlj7fnoIFcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICBcImlucHV0LXBob25lXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiaW5wdXRcIjogXCJvblBob25lSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuivt+i+k+WFpeaJi+acuuWPt+eggVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJyb3ctcmlnaHRcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFsnYnRuLWNvZGUnLCAnYnRuLWNvZGUtJyArICh0aGlzLmJ0bkNvZGUuc3RhdHVzKV19LFxuICAgICAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImNsaWNrXCI6IFwib25CdG5Db2RlQ2xpY2tcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmJ0bkNvZGUudGV4dH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJsaXN0LWl0ZW0tcm93XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJyb3dcIixcbiAgICAgICAgICAgIFwicm93LWZsZXgtc3RhcnRcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwicm93LWxhYmVsXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi6aqM6K+B56CBXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICBcImlucHV0LWNvZGVcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJpbnB1dFwiOiBcIm9uQ29kZUlucHV0XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuivt+i+k+WFpeefreS/oemqjOivgeeggVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJhZ3JlZW1lbnRcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiYWdyZWVtZW50LXRleHRcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCLpmIXor7vlubblkIzmhI9cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImFncmVlbWVudC1saW5rXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFwi57uf57uf5LuY5YWF5YC857y06LS55Y2P6K6uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImNlbnRlclwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJidXR0b24tcHJpbWFyeVwiLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogXCJzdWJtaXRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwic3RhdHVzXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5idG5QcmltYXJ5U3RhdHVzfSxcbiAgICAgICAgICAgIFwidGV4dFwiOiBcIuS4i+S4gOatpVwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJoZWxwXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgIFwiZm9udFNpemVcIjogMjhcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFwi5rip6aao5o+Q56S677yaXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJoZWxwLXRleHRcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCIx44CB5oyJ5YWF5YC86YeR6aKd5pS25Y+WMS41JeacjeWKoei0ue+8jOS4gOiIrDItNeS4quW3peS9nOaXpeWujOaIkOWFheWAvO+8jOWPjOS8keaXpeWPiuiKguWBh+aXpemhuuW7tlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiaGVscC10ZXh0XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiMuOAgeS4gOS4qui0puaIt+acgOWkmuWFgeiuuOe7mTTlvKDliqDmsrnljaHlhYXlgLzvvIzkuIvljZXljbPoh6rliqjnu5HlrprvvIznu5HlrprlkI7kuI3lj6/mm7TmlLlcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImhlbHAtdGV4dFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIjPjgIHliqDmsrnljaHlhYXlgLzku4Xpkojlr7nmtZnmsZ/nnIHlhoXkuK3nn7PljJbliqDmsrnljaHljaHkuLvov5vooYzlhYXlgLzvvIzlia/ljaHkuI3og73ov5vooYzlhYXlgLzvvJvlhYXlgLzlkI7nlKjmiLfpobvmkLrluKbliqDmsrnljaHlnKjmtZnmsZ/nnIHlhoXkuK3nn7PljJbliqDmsrnnq5nov5vooYzlnIjlrZjmlrnlj6/mraPluLjkvb/nlKhcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vc3JjL3ZpZXdzL3BheW1lbnQtcGV0cm9sZXVtLndlXG4vLyBtb2R1bGUgaWQgPSAyMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAzMyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImNvbnRhaW5lclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJkaXZlclwiOiB7XG4gICAgXCJoZWlnaHRcIjogMjAsXG4gICAgXCJ3aWR0aFwiOiA3NTAsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjJmMmYyXCJcbiAgfSxcbiAgXCJyb3ctbGFiZWxcIjoge1xuICAgIFwid2lkdGhcIjogMjI0LFxuICAgIFwibWFyZ2luUmlnaHRcIjogNDIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IDEwLFxuICAgIFwiZm9udFNpemVcIjogMzYsXG4gICAgXCJjb2xvclwiOiBcIiMzMzMzMzNcIlxuICB9LFxuICBcInJvdy1sZWZ0XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1zdGFydFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwicm93LWxlZnQtcHJlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IDI4XG4gIH0sXG4gIFwicm93LXJpZ2h0XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcInJvdy1yaWdodC1pbnB1dFwiOiB7XG4gICAgXCJ3aWR0aFwiOiAyMDAsXG4gICAgXCJtYXJnaW5SaWdodFwiOiAyNVxuICB9LFxuICBcInJvdy1yaWdodC1zZWxlY3RlZC12YWx1ZVwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiAyNSxcbiAgICBcImZvbnRTaXplXCI6IDMyLFxuICAgIFwiY29sb3JcIjogXCIjOTk5OTk5XCJcbiAgfSxcbiAgXCJyb3ctcmlnaHQtaWNvblwiOiB7XG4gICAgXCJ3aWR0aFwiOiA0MCxcbiAgICBcImhlaWdodFwiOiA0MFxuICB9LFxuICBcInJvdy1mbGV4LXN0YXJ0XCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1zdGFydFwiXG4gIH0sXG4gIFwiYWdyZWVtZW50XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogNjAsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogMzBcbiAgfSxcbiAgXCJhZ3JlZW1lbnQtdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiAyNixcbiAgICBcImNvbG9yXCI6IFwiIzRkNGQ0ZFwiXG4gIH0sXG4gIFwiYWdyZWVtZW50LWxpbmtcIjoge1xuICAgIFwiZm9udFNpemVcIjogMjYsXG4gICAgXCJjb2xvclwiOiBcIiMyNjgwZWRcIlxuICB9LFxuICBcIndyYXBwZXJcIjoge1xuICAgIFwid2lkdGhcIjogNzUwLFxuICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogMSxcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiI2RiZGJkYlwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogMSxcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI2RiZGJkYlwiXG4gIH0sXG4gIFwiY2VudGVyXCI6IHtcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImhlbHBcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiAzMCxcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDMwLFxuICAgIFwibWFyZ2luVG9wXCI6IDMwXG4gIH0sXG4gIFwiaGVscC10ZXh0XCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiAyMCxcbiAgICBcImNvbG9yXCI6IFwiIzk5OTk5OVwiLFxuICAgIFwiZm9udFNpemVcIjogMjQsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDQwXG4gIH0sXG4gIFwiYm94XCI6IHtcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJoZWlnaHRcIjogNjAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiAyMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiAyMCxcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDQwLFxuICAgIFwiZm9udFNpemVcIjogMjgsXG4gICAgXCJib3JkZXJXaWR0aFwiOiAyLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjM2I4YWVhXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogNlxuICB9LFxuICBcImJveC11bnNlbGVjdGVkXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcImJveC1zZWxlY3RlZFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjM2I4YWVhXCJcbiAgfSxcbiAgXCJib3gtdGV4dC11bnNlbGVjdGVkXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzNiOGFlYVwiXG4gIH0sXG4gIFwiYm94LXRleHQtc2VsZWN0ZWRcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJpbnB1dFwiOiB7XG4gICAgXCJoZWlnaHRcIjogNjAsXG4gICAgXCJmb250U2l6ZVwiOiAzMixcbiAgICBcImNvbG9yXCI6IFwiIzMzMzMzM1wiXG4gIH0sXG4gIFwiaW5wdXQtcGhvbmVcIjoge1xuICAgIFwid2lkdGhcIjogMjQwLFxuICAgIFwiaGVpZ2h0XCI6IDYwXG4gIH0sXG4gIFwiaW5wdXQtY29kZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiAyNjgsXG4gICAgXCJoZWlnaHRcIjogNjBcbiAgfSxcbiAgXCJidG4tY29kZS1lbmFibGVkXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IDMyLFxuICAgIFwiY29sb3JcIjogXCIjMjY4MGVkXCJcbiAgfSxcbiAgXCJidG4tY29kZS1kaXNhYmxlZFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiAzMixcbiAgICBcImNvbG9yXCI6IFwiI2NjY2NjY1wiXG4gIH0sXG4gIFwiYnRuLWNvZGUtdGltaW5nXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IDI0LFxuICAgIFwiY29sb3JcIjogXCIjY2NjY2NjXCJcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vc3JjL3ZpZXdzL3BheW1lbnQtcGV0cm9sZXVtLndlXG4vLyBtb2R1bGUgaWQgPSAyMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAzMyIsIjx0ZW1wbGF0ZT5cclxuICAgIDxuYXZwYWdlIGNsYXNzPVwiY29udGFpbmVyXCJcclxuICAgICAgICAgICAgIGxlZnQtaXRlbS1zcmM9XCJ7e25hdi5iYWNrfX1cIlxyXG4gICAgICAgICAgICAgdGl0bGU9XCJ7e25hdi50aXRsZX19XCJcclxuICAgICAgICAgICAgIHRpdGxlLWNvbG9yPVwie3tuYXYuY29sb3J9fVwiXHJcbiAgICAgICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoPVwie3tuYXYuYm9yZGVyQm90dG9tV2lkdGh9fVwiXHJcbiAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yPVwie3tuYXYuYmFja2dyb3VuZENvbG9yfX1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGl2ZXJcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8bGlzdC1pdGVtLXJvdyBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJyb3ctbGFiZWxcIj7miYDlsZ7nnIHku708L3RleHQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJyb3ctcmlnaHQtc2VsZWN0ZWQtdmFsdWVcIj57e3ZhbHVlLnByb3ZpbmNlfX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltYWdlIGNsYXNzPVwicm93LXJpZ2h0LWljb25cIiBzcmM9XCJ7e3VpLnJpZ2h0X2Fycm93fX1cIj48L2ltYWdlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGlzdC1pdGVtLXJvdz5cclxuXHJcbiAgICAgICAgICAgIDxsaXN0LWl0ZW0tcm93IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cInJvdy1sYWJlbFwiPuWKoOayueWNoeWNoeWPtzwvdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cInJvdy1sZWZ0LXByZVwiPjEwMDAxMTMzIC08L3RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3ctcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJpbnB1dCByb3ctcmlnaHQtaW5wdXRcIiBvbmlucHV0PVwib25OdW1iZXJJbnB1dFwiIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwi5Yqg5rK55Y2h5pyrMTHkvY1cIiB2YWx1ZT1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltYWdlIGNsYXNzPVwicm93LXJpZ2h0LWljb25cIiBzcmM9XCJ7e3VpLnJpZ2h0X2Fycm93fX1cIj48L2ltYWdlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGlzdC1pdGVtLXJvdz5cclxuXHJcbiAgICAgICAgICAgIDxsaXN0LWl0ZW0tcm93IGNsYXNzPVwicm93IHJvdy1mbGV4LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cInJvdy1sYWJlbFwiPuWFheWAvOmHkeminTwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3ggYm94LXt7c3RhdHVzfX1cIiByZXBlYXQ9XCJ7e3BheW1lbnRBbW91bnR9fVwiIG9uY2xpY2s9XCJzZWxlY3QoJGluZGV4KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiYm94LXRleHQte3tzdGF0dXN9fVwiPnt7dGV4dH195YWDPC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGlzdC1pdGVtLXJvdz5cclxuXHJcbiAgICAgICAgICAgIDxsaXN0LWl0ZW0tcm93IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cInJvdy1sYWJlbFwiPumAmuefpeaJi+acuuWPt+eggTwvdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJpbnB1dCBpbnB1dC1waG9uZVwiIG9uaW5wdXQ9XCJvblBob25lSW5wdXRcIiAgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeaJi+acuuWPt+eggVwiIHZhbHVlPVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdy1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiYnRuLWNvZGUgYnRuLWNvZGUte3tidG5Db2RlLnN0YXR1c319XCIgb25jbGljaz1cIm9uQnRuQ29kZUNsaWNrXCI+e3tidG5Db2RlLnRleHR9fTwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpc3QtaXRlbS1yb3c+XHJcbiAgICAgICAgICAgIDxsaXN0LWl0ZW0tcm93IGNsYXNzPVwicm93IHJvdy1mbGV4LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cInJvdy1sYWJlbFwiPumqjOivgeeggTwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImlucHV0IGlucHV0LWNvZGVcIiBvbmlucHV0PVwib25Db2RlSW5wdXRcIiAgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeefreS/oemqjOivgeeggVwiIHZhbHVlPVwiXCIgLz5cclxuICAgICAgICAgICAgPC9saXN0LWl0ZW0tcm93PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhZ3JlZW1lbnRcIj5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJhZ3JlZW1lbnQtdGV4dFwiPumYheivu+W5tuWQjOaEjzwvdGV4dD5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJhZ3JlZW1lbnQtbGlua1wiPue7n+e7n+S7mOWFheWAvOe8tOi0ueWNj+iurjwvdGV4dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24tcHJpbWFyeSBvbmNsaWNrPVwic3VibWl0XCIgc3RhdHVzPVwie3tidG5QcmltYXJ5U3RhdHVzfX1cIiB0ZXh0PVwi5LiL5LiA5q2lXCI+PC9idXR0b24tcHJpbWFyeT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVscFwiPlxyXG4gICAgICAgICAgICA8dGV4dCBzdHlsZT1cImZvbnQtc2l6ZTogMjhweDtcIj7muKnppqjmj5DnpLrvvJo8L3RleHQ+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiaGVscC10ZXh0XCI+MeOAgeaMieWFheWAvOmHkemineaUtuWPljEuNSXmnI3liqHotLnvvIzkuIDoiKwyLTXkuKrlt6XkvZzml6XlrozmiJDlhYXlgLzvvIzlj4zkvJHml6Xlj4roioLlgYfml6Xpobrlu7Y8L3RleHQ+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiaGVscC10ZXh0XCI+MuOAgeS4gOS4qui0puaIt+acgOWkmuWFgeiuuOe7mTTlvKDliqDmsrnljaHlhYXlgLzvvIzkuIvljZXljbPoh6rliqjnu5HlrprvvIznu5HlrprlkI7kuI3lj6/mm7TmlLk8L3RleHQ+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiaGVscC10ZXh0XCI+M+OAgeWKoOayueWNoeWFheWAvOS7hemSiOWvuea1meaxn+ecgeWGheS4reefs+WMluWKoOayueWNoeWNoeS4u+i/m+ihjOWFheWAvO+8jOWJr+WNoeS4jeiDvei/m+ihjOWFheWAvO+8m+WFheWAvOWQjueUqOaIt+mhu+aQuuW4puWKoOayueWNoeWcqOa1meaxn+ecgeWGheS4reefs+WMluWKoOayueermei/m+ihjOWciOWtmOaWueWPr+ato+W4uOS9v+eUqDwvdGV4dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvbmF2cGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuPHN0eWxlPlxyXG4gICAgLmNvbnRhaW5lciB7IGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cclxuICAgIC5kaXZlciB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4OyB3aWR0aDogNzUwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgIH1cclxuXHJcbiAgICAucm93LWxhYmVsIHtcclxuICAgICAgICB3aWR0aDogMjI0cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MnB4OyBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDM2cHg7IGNvbG9yOiAjMzMzO1xyXG4gICAgfVxyXG4gICAgLnJvdy1sZWZ0IHsgZmxleC1kaXJlY3Rpb246IHJvdzsganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyBhbGlnbi1pdGVtczogY2VudGVyOyB9XHJcbiAgICAucm93LWxlZnQtcHJlIHsgZm9udC1zaXplOiAyOHB4OyB9XHJcbiAgICAucm93LXJpZ2h0IHsgZmxleC1kaXJlY3Rpb246IHJvdzsgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxyXG4gICAgLnJvdy1yaWdodC1pbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxuICAgIH1cclxuICAgIC5yb3ctcmlnaHQtc2VsZWN0ZWQtdmFsdWUge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7IGNvbG9yOiAjOTk5O1xyXG4gICAgfVxyXG4gICAgLnJvdy1yaWdodC1pY29uIHtcclxuICAgICAgICB3aWR0aDogNDBweDsgaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5yb3ctZmxleC1zdGFydCB7IGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxyXG5cclxuICAgIC5hZ3JlZW1lbnQge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDYwcHg7IG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB9XHJcbiAgICAuYWdyZWVtZW50LXRleHQgeyBmb250LXNpemU6IDI2cHg7IGNvbG9yOiAjNGQ0ZDRkOyB9XHJcbiAgICAuYWdyZWVtZW50LWxpbmsgeyBmb250LXNpemU6IDI2cHg7IGNvbG9yOiAjMjY4MGVkOyB9XHJcblxyXG5cclxuICAgIC53cmFwcGVyIHtcclxuICAgICAgICB3aWR0aDogNzUwcHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC13aWR0aDogMXB4OyBib3JkZXItdG9wLWNvbG9yOiAjZGJkYmRiO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDsgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2RiZGJkYjtcclxuICAgIH1cclxuICAgIC5jZW50ZXIgeyBhbGlnbi1pdGVtczogY2VudGVyOyB9XHJcbiAgICAuaGVscCB7IG1hcmdpbi1sZWZ0OiAzMHB4OyBtYXJnaW4tcmlnaHQ6IDMwcHg7IG1hcmdpbi10b3A6IDMwcHg7IH1cclxuICAgIC5oZWxwLXRleHQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICM5OTk7IGZvbnQtc2l6ZTogMjRweDsgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJveCB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDsgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMnB4OyBib3JkZXItY29sb3I6ICMzYjhhZWE7IGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIH1cclxuXHJcbiAgICAuYm94LXVuc2VsZWN0ZWQgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XHJcbiAgICAuYm94LXNlbGVjdGVkIHsgYmFja2dyb3VuZC1jb2xvcjogIzNiOGFlYTsgfVxyXG4gICAgLmJveC10ZXh0LXVuc2VsZWN0ZWQgeyBjb2xvcjogIzNiOGFlYTsgfVxyXG4gICAgLmJveC10ZXh0LXNlbGVjdGVkIHsgY29sb3I6ICNmZmY7IH1cclxuXHJcbiAgICAuaW5wdXQge1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7IGNvbG9yOiAjMzMzO1xyXG4gICAgfVxyXG4gICAgLmlucHV0LXBob25lIHsgd2lkdGg6IDI0MHB4OyBoZWlnaHQ6IDYwcHg7IH1cclxuICAgIC5pbnB1dC1jb2RlIHsgd2lkdGg6IDI2OHB4OyBoZWlnaHQ6IDYwcHg7IH1cclxuXHJcbiAgICAuYnRuLWNvZGUtZW5hYmxlZCB7IGZvbnQtc2l6ZTogMzJweDsgY29sb3I6ICMyNjgwZWQ7IH1cclxuICAgIC5idG4tY29kZS1kaXNhYmxlZCB7IGZvbnQtc2l6ZTogMzJweDsgY29sb3I6ICNjY2M7IH1cclxuICAgIC5idG4tY29kZS10aW1pbmcgeyBmb250LXNpemU6IDI0cHg7IGNvbG9yOiAjY2NjOyB9XHJcbjwvc3R5bGU+XHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbW1vbi9jb25maWcnXHJcbiAgICBpbXBvcnQgdmFsaWRhdGlvbiBmcm9tICcuLi9jb21tb24vdmFsaWRhdGlvbidcclxuICAgIGltcG9ydCAqIGFzIG1ldGhvZHMgZnJvbSAnLi4vY29tbW9uL21ldGhvZHMnXHJcbiAgICBjb25zdCBuYXZpZ2F0b3IgPSByZXF1aXJlKCdAd2VleC1tb2R1bGUvbmF2aWdhdG9yJylcclxuICAgIHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvbmF2cGFnZS9uYXZwYWdlLndlJylcclxuICAgIHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi1wcmltYXJ5LndlJylcclxuICAgIHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvbGlzdC1pdGVtL2xpc3QtaXRlbS1yb3cud2UnKVxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgbmF2OiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+WKoOayueWNoeWFheWAvCcsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyM0ZDRkNGQnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aDogMSxcclxuICAgICAgICAgICAgICAgIGJhY2s6IGNvbmZpZy5pY29uLmJhY2tcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdWk6IHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0X2Fycm93OiBjb25maWcuaWNvbi5yaWdodF9hcnJvd1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwYXltZW50QW1vdW50OiBbXHJcbiAgICAgICAgICAgICAgICB7IGFtb3VudDogJzUwMCcsIHRleHQ6ICc1MDAnLCBzdGF0dXM6ICd1bnNlbGVjdGVkJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBhbW91bnQ6ICcxMDAwJywgdGV4dDogJzEwMDAnLCBzdGF0dXM6ICd1bnNlbGVjdGVkJyB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGJ0bkNvZGU6IHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICfojrflj5bpqozor4HnoIEnLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnZGlzYWJsZWQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJ0blByaW1hcnlTdGF0dXM6ICdkaXNhYmxlZCcsXHJcbiAgICAgICAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgICAgICAgICBwcm92aW5jZTogJ+a1meaxnycsXHJcbiAgICAgICAgICAgICAgICBudW1iZXI6ICcnLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiAnJyxcclxuICAgICAgICAgICAgICAgIHBob25lOiAnJyxcclxuICAgICAgICAgICAgICAgIGNvZGU6ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZWQgKCkge1xyXG4gICAgICAgICAgICB0aGlzLiRvbignbmF2aUJhci5sZWZ0SXRlbS5jbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2FuaW1hdGVkJzogJ3RydWUnLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yLnBvcChwYXJhbXMsIGZ1bmN0aW9uICgpIHt9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLiRvbignZm9ybUNoYW5nZScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuUHJpbWFyeVN0YXR1cyA9ICh0aGlzLnZhbHVlLnByb3ZpbmNlICYmIHRoaXMudmFsdWUubnVtYmVyICYmIHRoaXMudmFsdWUuYW1vdW50ICYmIHRoaXMudmFsdWUucGhvbmUgJiYgdGhpcy52YWx1ZS5jb2RlKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgJ2VuYWJsZWQnOiAnZGlzYWJsZWQnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAgICAgc2VsZWN0IChpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXltZW50QW1vdW50LmZvckVhY2goKHYsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi5zdGF0dXMgPSAnc2VsZWN0ZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUuYW1vdW50ID0gdi5hbW91bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZGlzcGF0Y2goJ2Zvcm1DaGFuZ2UnKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYuc3RhdHVzID0gJ3Vuc2VsZWN0ZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25OdW1iZXJJbnB1dCAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZS5udW1iZXIgPSBlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRkaXNwYXRjaCgnZm9ybUNoYW5nZScpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uQ29kZUlucHV0IChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlLmNvZGUgPSBlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRkaXNwYXRjaCgnZm9ybUNoYW5nZScpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uUGhvbmVJbnB1dCAoZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb24uaXNQaG9uZU5vKGUudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZS5waG9uZSA9IGUudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEJ0bkNvZGVTdGF0dXMoJ2VuYWJsZWQnKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEJ0bkNvZGVTdGF0dXMoJ2Rpc2FibGVkJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuJGRpc3BhdGNoKCdmb3JtQ2hhbmdlJylcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25CdG5Db2RlQ2xpY2sgKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYnRuQ29kZS5zdGF0dXMgPT09ICdlbmFibGVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QnRuQ29kZVN0YXR1cygndGltaW5nJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0QnRuQ29kZVN0YXR1cyAoc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RpbWluZyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjbG9jayA9IDMwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuQ29kZS50ZXh0ID0gY2xvY2sgKyAnc+WQjumHjeaWsOiOt+WPlidcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xvY2sgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvY2sgLS1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bkNvZGUudGV4dCA9IGNsb2NrICsgJ3PlkI7ph43mlrDojrflj5YnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuQ29kZS50ZXh0ID0gJ+iOt+WPlumqjOivgeeggSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bkNvZGUuc3RhdHVzID0gJ2VuYWJsZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdlbmFibGVkJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5Db2RlLnRleHQgPSAn6I635Y+W6aqM6K+B56CBJ1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGlzYWJsZWQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bkNvZGUudGV4dCA9ICfojrflj5bpqozor4HnoIEnXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuQ29kZS5zdGF0dXMgPSBzdGF0dXNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VibWl0ICgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudmFsdWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBtZXRob2RzKVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZpZXdzL3BheW1lbnQtcGV0cm9sZXVtLndlPzdhMDU1ZGM0IiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgaXNQaG9uZU5vOiBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgcmV0dXJuIC9eMVszNDU3OF1cXGR7OX0kLy50ZXN0KHYpXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL3ZhbGlkYXRpb24uanMiXSwic291cmNlUm9vdCI6IiJ9