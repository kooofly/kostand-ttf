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

	var __weex_template__ = __webpack_require__(67)
	var __weex_style__ = __webpack_require__(68)
	var __weex_script__ = __webpack_require__(69)
	
	__weex_define__('@weex-component/edbe680ce7278a8936316e61dbac3d88', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})
	
	__weex_bootstrap__('@weex-component/edbe680ce7278a8936316e61dbac3d88',undefined,undefined)

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
	    scriptRoot: '/kostand-ttf/ttf/1001/',
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
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "list-item"
	  ],
	  "events": {
	    "click": function ($event) {this.openDetail(this.id,$event)}
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "left"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "left-row"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "left-row-label"
	              ],
	              "style": {
	                "backgroundColor": function () {return this.labelBackground}
	              },
	              "attr": {
	                "value": function () {return this.type}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "left-row-title"
	              ],
	              "style": {
	                "color": function () {return this.color}
	              },
	              "attr": {
	                "value": function () {return this.title}
	              }
	            }
	          ]
	        },
	        {
	          "type": "text",
	          "classList": [
	            "left-sub-title"
	          ],
	          "style": {
	            "color": function () {return this.color}
	          },
	          "attr": {
	            "value": function () {return this.subTitle}
	          }
	        }
	      ]
	    },
	    {
	      "type": "text",
	      "classList": [
	        "list-item-date"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": function () {return this.date}
	      }
	    }
	  ]
	}

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = {
	  "list-item": {
	    "flexWrap": "wrap",
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "center",
	    "width": 726,
	    "height": 150,
	    "marginLeft": 24,
	    "paddingRight": 20,
	    "borderBottomColor": "#dbdbdb",
	    "borderBottomStyle": "solid",
	    "borderBottomWidth": 1
	  },
	  "left": {
	    "flexWrap": "wrap",
	    "flexDirection": "column",
	    "marginLeft": 10
	  },
	  "left-row": {
	    "flexWrap": "wrap",
	    "flexDirection": "row"
	  },
	  "left-row-label": {
	    "paddingTop": 4,
	    "paddingBottom": 4,
	    "paddingLeft": 10,
	    "paddingRight": 10,
	    "borderRadius": 4,
	    "color": "#ffffff",
	    "fontSize": 28
	  },
	  "left-row-title": {
	    "fontSize": 32,
	    "fontWeight": "bold"
	  },
	  "left-sub-title": {
	    "marginTop": 20,
	    "fontSize": 28
	  },
	  "list-item-date": {
	    "marginRight": 20,
	    "fontSize": 28
	  }
	}

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _assign = __webpack_require__(8);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _methods = __webpack_require__(45);
	
	var methods = _interopRequireWildcard(_methods);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            date: '',
	            id: '',
	            title: '',
	            type: '',
	            subTitle: '',
	            status: '',
	            color: '',
	            labelColor: '',
	            labelBackground: ''
	        };
	    },
	    created: function created() {
	        var _this = this;
	
	        this.render();
	        this.$on('ignoreNotices', function (e) {
	            _this.render();
	        });
	    },
	
	    methods: (0, _assign2.default)({
	        openDetail: function openDetail(id, e) {
	            console.log(id);
	            this.open('notices_detail?id=' + id);
	        },
	        render: function render() {
	            if (this.status === '已读') {
	                this.color = '#999';
	                this.labelBackground = '#b3b3b3';
	            } else {
	                var type = this.type;
	                switch (type) {
	                    case '公告':
	                        this.labelBackground = '#5ac6ff';
	                        break;
	                    case '活动':
	                        this.labelBackground = '#ffad38';
	                        break;
	                    default:
	                        this.labelBackground = '#5ac6ff';
	                }
	            }
	        }
	    }, methods)
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGJlZGNhM2IxY2U3ODliZDI0Y2U/MDVmOSoqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xpc3QtaXRlbS9saXN0LWl0ZW0tbm90aWNlcy53ZT9jNTIzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanM/ZTZjYSoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcz84MGU0KioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzPzkwMDcqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcz9lY2UyKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanM/NzdhYSoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcz8xYjYyKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanM/Y2UwMCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcz9kNTNlKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzP2E2ZGEqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcz80MTE2KioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanM/MGRhMyoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzPzI0YzgqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzP2JkMWYqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzPzcwNTEqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzPzkzNWQqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanM/YWI0NCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzPzQ5YTQqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanM/MWU4NioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcz81YzBjKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcz9mNWJjKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcz9mY2VhKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanM/ZDg1MCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcz82OTQ2KioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzPzVjZjkqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcz80OGVhKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzPzQ1ZDMqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzPzYxOTkqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcz82MmE3KioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzP2Y2NWYqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzPzlmZDQqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanM/MmE2YyoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzPzdiNmMqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcz9lOGNkKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzPzc1OTgqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzP2E1ZmIqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanM/ZDBkMioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzP2I1YzAqKioqIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vbWV0aG9kcy5qcz8zZDkyKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2FwaS5qcz9jM2I1KioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbmZpZy5qcz9jMTgzKioqKioqIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZGV0ZWN0aW9uLmpzPzhmYjQqKioqIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vcm91dGUuanM/NzZmZCoqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGlzdC1pdGVtL2xpc3QtaXRlbS1ub3RpY2VzLndlPzI1YzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGlzdC1pdGVtL2xpc3QtaXRlbS1ub3RpY2VzLndlP2ZmNmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGlzdC1pdGVtL2xpc3QtaXRlbS1ub3RpY2VzLndlIl0sIm5hbWVzIjpbInJvdXRlVG9VcmwiLCJvcGVuIiwicGFyYW1zIiwicmVhbEhlaWdodCIsImRldGVjdGlvbiIsInJvdXRlTmFtZSIsInRlc3QiLCJzcGxpdCIsInIiLCJjb21waWxlVXJsIiwiY29uc29sZSIsImxvZyIsInVybCIsImpvaW4iLCJjYWxsIiwid2luZG93IiwibyIsInRoZW4iLCIkb3BlblVSTCIsImZhaWxDYWxsYmFjayIsIm5hbWUiLCJyZXN1bHQiLCIkZ2V0Q29uZmlnIiwiYnVuZGxlVXJsIiwiaW5kZXhPZiIsInN0ciIsInN1YnN0ciIsInAiLCJmb3JFYWNoIiwidGVtcCIsInYiLCJkZWNvZGVVUkkiLCJoZWlnaHQiLCJ3IiwiZW52IiwiZGV2aWNlV2lkdGgiLCJoIiwiZGV2aWNlSGVpZ2h0IiwiZmV0Y2giLCJzaWduaW4iLCJmZXRjaFRhYkJhciIsImFkYXB0ZXJUYWJCYXIiLCJmZXRjaEFwcHMiLCJmZXRjaE5vdGljZXMiLCJmZXRjaEJhbm5lcnMiLCJmZXRjaE1lcmNoYW50Q2F0ZWdvcnkiLCJmZXRjaE1lcmNoYW50TGlzdCIsImdldEJhc2VVUkwiLCJzdHJlYW0iLCJfX3dlZXhfZGVmaW5lX18iLCJfX3dlZXhfcmVxdWlyZV9fIiwiYXBpUm9vdCIsInBhdGgiLCJvcHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIk9iamVjdCIsImFzc2lnbiIsIm1ldGhvZHMiLCJ0eXBlIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJkYXRhIiwidGFiSXRlbXMiLCJpbmRleCIsInNlbGVjdGVkQ29sb3IiLCJiYXNlVVJMIiwidGFiSXRlbSIsImkiLCJzcmMiLCJpbWFnZSIsImFzc2V0c1Jvb3QiLCJzZWxlY3RlZEltYWdlIiwidmlzaWJpbGl0eSIsImljb24iLCJ0aXRsZUNvbG9yIiwiaXNOYXYiLCJuYXRpdmVCYXNlIiwiaXNBbmRyb2lkQXNzZXRzIiwiaXNpT1NBc3NldHMiLCJzdWJzdHJpbmciLCJsYXN0SW5kZXhPZiIsImhvc3QiLCJzY3JpcHRIb3N0IiwibWF0Y2hlcyIsImV4ZWMiLCJsZW5ndGgiLCJodG1sSW5kZXgiLCJzY3JpcHRSb290IiwiYW5kcm9pZEFzc2V0c1Jvb3QiLCJtYXAiLCJtYXBfbGlmZSIsIm5vdGljZSIsInNjYW4iLCJjb2RlIiwidHJhbnNhY3Rpb25fcmVjb3JkIiwic2VhcmNoIiwiYmFjayIsInJpZ2h0X2Fycm93Iiwic3RvcmFnZSIsImxvZ2luTW9kdWxlIiwiZ2V0SXRlbSIsImUiLCJ0b0xvZ2luIiwiYXBwcyIsInRpdGxlIiwibGlmZSIsIm1lcmNoYW50IiwibWVyY2hhbnRfY29sbGVjdGlvbiIsIm1lcmNoYW50X25lYXJieSIsIm1lcmNoYW50X2Fyb3VuZCIsIm1lcmNoYW50X2ludHJvZHVjdGlvbiIsIm1vcmUiLCJub3RpY2VzIiwibm90aWNlc19kZXRhaWwiLCJwYXltZW50X3Bob25lIiwicGF5bWVudF9wZXRyb2xldW0iLCJwYXltZW50X3dhdGVyIiwicGF5bWVudF9lbGVjdHJpY2l0eSIsInBheW1lbnRfZ2FzIiwiZGFzaGJvYXJkIiwiZGFzaGJvYXJkX3JlY2hhcmdlIiwiZGFzaGJvYXJkX3RyYW5zZmVyIiwiZGFzaGJvYXJkX2JhbmtfY2FyZCIsImRhc2hib2FyZF90cmFkaW5nX3JlY29yZHMiLCJkYXNoYm9hcmRfcGFzc3dvcmQiLCJkYXNoYm9hcmRfY2VydGlmaWNhdGUiLCJzdW1wYXlfY2FyZCIsInN1bXBheV9jYXJkX2JhbGFuY2UiLCJzdW1wYXlfY2FyZF9wYXNzd29yZCIsInN1bXBheV9jYXJkX2Rl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QUNBOzhDQUNBO0FBQ0E7bUNBQ0E7dUNBQ0E7OEJBQ0E7d0NBQ0E7b0JBQ0E7aUNBQ0E7eUJBQ0E7MEJBQ0E7Z0RBQ0E7QUFDQTswQkFDQTtnREFDQTtBQUNBO0FBQ0E7Z0RBRUE7O0FBQ0E7QUFDQTtBQXRCQSxRQXVCQTtBQTNDQSIsImZpbGUiOiJjb21wb25lbnRzXFxsaXN0LWl0ZW1cXGxpc3QtaXRlbS1ub3RpY2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZGJlZGNhM2IxY2U3ODliZDI0Y2UiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL2xpc3QtaXRlbS1ub3RpY2VzLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL2xpc3QtaXRlbS1ub3RpY2VzLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vbGlzdC1pdGVtLW5vdGljZXMud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvZWRiZTY4MGNlNzI3OGE4OTM2MzE2ZTYxZGJhYzNkODgnLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuX193ZWV4X2Jvb3RzdHJhcF9fKCdAd2VleC1jb21wb25lbnQvZWRiZTY4MGNlNzI3OGE4OTM2MzE2ZTYxZGJhYzNkODgnLHVuZGVmaW5lZCx1bmRlZmluZWQpXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9saXN0LWl0ZW0vbGlzdC1pdGVtLW5vdGljZXMud2U/ZW50cnk9dHJ1ZVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM3IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCAkYXNzaWduICA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHZhciBBID0ge31cbiAgICAsIEIgPSB7fVxuICAgICwgUyA9IFN5bWJvbCgpXG4gICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgYUxlbiAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpbmRleCA9IDFcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmZcbiAgICAsIGlzRW51bSAgICAgPSBwSUUuZjtcbiAgd2hpbGUoYUxlbiA+IGluZGV4KXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pXG4gICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNyIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJ2YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b0lPYmplY3QgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwga2V5O1xuICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiaW1wb3J0IHsgZ2V0QmFzZVVSTCB9IGZyb20gJy4vYXBpJ1xyXG5pbXBvcnQgKiBhcyBkZXRlY3Rpb24gZnJvbSAnLi9kZXRlY3Rpb24nXHJcbmltcG9ydCByb3V0ZSBmcm9tICcuL3JvdXRlJ1xyXG4vKipcclxuICog6Lev55Sx6L2s6ZO+5o6lXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSByb3V0ZU5hbWVcclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByb3V0ZVRvVXJsIChyb3V0ZU5hbWUpIHtcclxuICAgIHZhciBwYXJhbXMgPSAnJ1xyXG4gICAgaWYgKC9cXD8vLnRlc3Qocm91dGVOYW1lKSkge1xyXG4gICAgICAgIHBhcmFtcyA9IHJvdXRlTmFtZS5zcGxpdCgnPycpWzFdXHJcbiAgICAgICAgcm91dGVOYW1lID0gcm91dGVOYW1lLnNwbGl0KCc/JylbMF1cclxuICAgIH1cclxuICAgIGxldCByID0gcm91dGVbcm91dGVOYW1lXVxyXG4gICAgbGV0IGNvbXBpbGVVcmxcclxuICAgIGlmICghcikge1xyXG4gICAgICAgIC8vIFRPRE8g6Lez6L2s5Yiw6ZSZ6K+v6aG1XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yOiDot6/nlLHkuI3lrZjlnKjvvIzor7flnKhyb3V0ZXIuanPkuK3phY3nva7lr7nlupTnmoTot6/nlLEnKVxyXG4gICAgfVxyXG4gICAgY29tcGlsZVVybCA9IHIudXJsID8gci51cmwgOiAndmlld3MvJyArIHJvdXRlTmFtZS5zcGxpdCgnXycpLmpvaW4oJy0nKVxyXG4gICAgbGV0IHVybCA9IGdldEJhc2VVUkwuY2FsbCh0aGlzLCB0cnVlKSArIGNvbXBpbGVVcmwgKyAnLmpzJ1xyXG4gICAgLy8g5YWB6K645re75Yqg5Y+C5pWwIOS+i+WmgiBtZXJjaGFudF9hcm91bmQ/YT0xJmI9MiDlpITnkIbop4TliJnlkozmtY/op4jlmajnmoRxdWVyeXN0cmluZ+S4gOiHtFxyXG4gICAgaWYgKHBhcmFtcykge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwgKyAnJicgKyBwYXJhbXNcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwgKyAnPycgKyBwYXJhbXNcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXJsXHJcbn1cclxuLyoqXHJcbiAqIOaJk+W8gOaWsOmhtemdolxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcm91dGVOYW1lIC0g6Lev55Sx5ZCN56ewIOaJgOaciei3r+eUseWQjeensOWcqHJvdXRlLmpz5LitXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvIC0g546w5Zyo5Y+q5pyJ6Lev55Sx5omT5byA5aSx6LSl5aSE55CG5pa55rOV77yM5Lul5ZCO5Y+v5Lul5re75Yqg5YW25LuW5aSE55CGXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG8uZmFpbENhbGxiYWNrIC0g6Lev55Sx5omT5byA5aSx6LSl5aSE55CGY2FsbGJhY2tcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvcGVuIChyb3V0ZU5hbWUsIG8pIHtcclxuICAgIGxldCByID0gcm91dGVbcm91dGVOYW1lXVxyXG4gICAgbGV0IHVybCA9IHJvdXRlVG9VcmwuY2FsbCh0aGlzLCByb3V0ZU5hbWUpXHJcbiAgICBpZiAoci5kZXRlY3Rpb24pIHtcclxuICAgICAgICBkZXRlY3Rpb25bci5kZXRlY3Rpb25dKHtcclxuICAgICAgICAgICAgcm91dGVOYW1lOiByb3V0ZU5hbWUsXHJcbiAgICAgICAgICAgIHVybDogdXJsXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJG9wZW5VUkwodXJsKVxyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgdHlwZW9mIG8uZmFpbENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvLmZhaWxDYWxsYmFjay5jYWxsKHRoaXMsIHJvdXRlTmFtZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuJG9wZW5VUkwodXJsKVxyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiDop6PmnpDot6/nlLHlj4LmlbBcclxuICog5L6L5aaC77yabWVyY2hhbnRfYXJvdW5kP2E9MSZiPTIg6aG16Z2iXHJcbiAqICAgICAg6LCD55SocGFyYW1zKCnmlrnms5Ug6L+U5Zue5YC85Li677yaIHthOjEsIGI6Mn1cclxuICogICAgICDosIPnlKhwYXJhbXMoJ2EnKeaWueazlSDov5Tlm57lgLzkuLrvvJogMVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW25hbWVdIOWPr+mAieWPguaVsFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3VybF0g5Y+v6YCJ5Y+C5pWwIOm7mOiupOS4umJ1bmRsZVVybFxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfG9iamVjdH1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJhbXMgKG5hbWUsIHVybCl7XHJcbiAgICBsZXQgcmVzdWx0ID0ge31cclxuICAgIGlmICghdXJsKSB7XHJcbiAgICAgICAgdXJsID0gdGhpcy4kZ2V0Q29uZmlnKCkuYnVuZGxlVXJsXHJcbiAgICB9XHJcbiAgICBpZiAodXJsLmluZGV4T2YoXCI/XCIpICE9PSAtMSkge1xyXG4gICAgICAgIGxldCBzdHIgPSB1cmwuc3Vic3RyKHVybC5pbmRleE9mKFwiP1wiKSArIDEpXHJcbiAgICAgICAgbGV0IHAgPSBzdHIuc3BsaXQoXCImXCIpXHJcbiAgICAgICAgcC5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdGVtcCA9IHYuc3BsaXQoXCI9XCIpXHJcbiAgICAgICAgICAgIHJlc3VsdFt0ZW1wWzBdXSA9IGRlY29kZVVSSSh0ZW1wWzFdKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgaWYgKHJlc3VsdFtuYW1lXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0W25hbWVdXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnXHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9XHJcbn1cclxuLy8g6I635Y+W55yf5a6e6auY5bqm77yM55Sx5LqOd2VleOmXrumimOacquiDvemAgumFjeaJgOacieacuuWei+OAglxyXG5leHBvcnQgZnVuY3Rpb24gcmVhbEhlaWdodCAoaGVpZ2h0KSB7XHJcbiAgICBsZXQgdyA9IHRoaXMuJGdldENvbmZpZygpLmVudi5kZXZpY2VXaWR0aFxyXG4gICAgbGV0IGggPSB0aGlzLiRnZXRDb25maWcoKS5lbnYuZGV2aWNlSGVpZ2h0XHJcbiAgICAvLyAxMzMyXHJcbiAgICByZXR1cm4gdyAvIDc1MCAqIGhlaWdodFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9tZXRob2RzLmpzIiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZydcclxudmFyIHN0cmVhbVxyXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LXRlbXAvYXBpJywgZnVuY3Rpb24gKF9fd2VleF9yZXF1aXJlX18pIHtcclxuICAgIHN0cmVhbSA9IF9fd2VleF9yZXF1aXJlX18oJ0B3ZWV4LW1vZHVsZS9zdHJlYW0nKVxyXG59KTtcclxuXHJcbi8vIOaVsOaNruWcsOWdgFxyXG5jb25zdCBhcGlSb290ID0gY29uZmlnLmFwaVJvb3RcclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoIChwYXRoLCBvcHQpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgc3RyZWFtLmZldGNoKE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICBtZXRob2RzOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiAvaHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvLy50ZXN0KHBhdGgpID8gcGF0aCA6IGAke2FwaVJvb3R9LyR7cGF0aH0uanNvbmAsXHJcbiAgICAgICAgICAgIHR5cGU6ICdqc29uJ1xyXG4gICAgICAgIH0sIG9wdCksIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChyZXNwb25zZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gKVxyXG4gICAgfSwgKCkgPT4ge30pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaWduaW4gKCkge1xyXG4gICAgcmV0dXJuIGZldGNoKCdzaWduaW4nLCB7XHJcbiAgICAgICAgbWV0aG9kczogJ1BPU1QnXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hUYWJCYXIgKCkge1xyXG4gICAgcmV0dXJuIGZldGNoKCd0YWItYmFyJylcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYWRhcHRlclRhYkJhcih0YWJJdGVtcywgaW5kZXgsIHNlbGVjdGVkQ29sb3IpIHtcclxuICAgIGNvbnN0IGJhc2VVUkwgPSBnZXRCYXNlVVJMLmNhbGwodGhpcylcclxuICAgIHRhYkl0ZW1zLmZvckVhY2goKHRhYkl0ZW0sIGkpID0+IHtcclxuICAgICAgICB0YWJJdGVtLnNyYyA9IGJhc2VVUkwgK+OAgHRhYkl0ZW0uc3JjO1xyXG4gICAgICAgIHRhYkl0ZW0uaW1hZ2UgPSBjb25maWcuYXNzZXRzUm9vdCAr44CAdGFiSXRlbS5pbWFnZTtcclxuICAgICAgICB0YWJJdGVtLnNlbGVjdGVkSW1hZ2UgPSBjb25maWcuYXNzZXRzUm9vdCAr44CAdGFiSXRlbS5zZWxlY3RlZEltYWdlXHJcbiAgICAgICAgaWYgKGluZGV4ID09IGkpIHtcclxuICAgICAgICAgICAgdGFiSXRlbS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXHJcbiAgICAgICAgICAgIHRhYkl0ZW0uaWNvbiA9IHRhYkl0ZW0uc2VsZWN0ZWRJbWFnZTtcclxuICAgICAgICAgICAgdGFiSXRlbS50aXRsZUNvbG9yID0gc2VsZWN0ZWRDb2xvcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0YWJJdGVtLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xyXG4gICAgICAgICAgICB0YWJJdGVtLmljb24gPSB0YWJJdGVtLmltYWdlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHRhYkl0ZW1zXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEFwcHMgKCkge1xyXG4gICAgcmV0dXJuIGZldGNoKCdhcHBzJylcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hOb3RpY2VzICgpIHtcclxuICAgIHJldHVybiBmZXRjaCgnbm90aWNlcycpXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQmFubmVycyAoKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goJ2Jhbm5lcnMnKVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaE1lcmNoYW50Q2F0ZWdvcnkgKCkge1xyXG4gICAgcmV0dXJuIGZldGNoKCdtZXJjaGFudC1jYXRlZ29yeScpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaE1lcmNoYW50TGlzdCAoKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goJ21lcmNoYW50LWxpc3QnKVxyXG59XHJcblxyXG5cclxuLy8gYXBwIGpzYnVuZGxlIOmdmeaAgei1hOa6kOWcsOWdgFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmFzZVVSTCAoaXNOYXYpIHtcclxuICAgIHZhciBidW5kbGVVcmxcclxuXHJcbiAgICBpZiAodHlwZW9mIHRoaXMuJGdldENvbmZpZyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIGJ1bmRsZVVybCA9IHRoaXMuJGdldENvbmZpZygpLmJ1bmRsZVVybFxyXG4gICAgfVxyXG4gICAgdmFyIG5hdGl2ZUJhc2U7XHJcbiAgICB2YXIgaXNBbmRyb2lkQXNzZXRzID0gYnVuZGxlVXJsLmluZGV4T2YoJ2ZpbGU6Ly9hc3NldHMvJykgPj0gMDtcclxuXHJcbiAgICB2YXIgaXNpT1NBc3NldHMgPSBidW5kbGVVcmwuaW5kZXhPZignZmlsZTovLy8nKSA+PSAwICYmIGJ1bmRsZVVybC5pbmRleE9mKCdXZWV4RGVtby5hcHAnKSA+IDA7XHJcbiAgICBpZiAoaXNBbmRyb2lkQXNzZXRzKSB7XHJcbiAgICAgICAgbmF0aXZlQmFzZSA9ICdmaWxlOi8vYXNzZXRzL2Rpc3QvJztcclxuICAgIH0gZWxzZSBpZiAoaXNpT1NBc3NldHMpIHtcclxuICAgICAgICBuYXRpdmVCYXNlID0gYnVuZGxlVXJsLnN1YnN0cmluZygwLCBidW5kbGVVcmwubGFzdEluZGV4T2YoJy8nKSArIDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgaG9zdCA9IGNvbmZpZy5zY3JpcHRIb3N0O1xyXG4gICAgICAgIHZhciBtYXRjaGVzID0gL1xcL1xcLyhbXlxcL10rPylcXC8vLmV4ZWMoYnVuZGxlVXJsKTtcclxuXHJcbiAgICAgICAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlcy5sZW5ndGggPj0gMikge1xyXG4gICAgICAgICAgICBob3N0ID0gbWF0Y2hlc1sxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/mraTlpITpnIDms6jmhI/kuIDkuIssdGFiYmFyIOeUqOeahOebtOaOpeaYr2pzYnVuZGxlIOeahOi3r+W+hCzkvYbmmK9uYXZpZ2F0b3LmmK/nm7TmjqXot7PovazliLDmlrDpobXpnaLkuIrnmoQuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIG5hdGl2ZUJhc2UgPSBpc05hdiA/IGNvbmZpZy5odG1sSW5kZXggKyAnP3BhZ2U9JyArIGNvbmZpZy5zY3JpcHRSb290IDogY29uZmlnLnNjcmlwdEhvc3QgKyBjb25maWcuc2NyaXB0Um9vdDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuYXRpdmVCYXNlID0gY29uZmlnLnNjcmlwdEhvc3QgKyBjb25maWcuc2NyaXB0Um9vdDtcclxuICAgICAgICAgICAgLy8gbmF0aXZlQmFzZSA9ICdodHRwOi8vJyArIGhvc3QgKyB0ZXN0Um9vdERpciArICcvZGlzdC8nO1xyXG4gICAgICAgICAgICAvLyBuYXRpdmVCYXNlID0gJ2h0dHA6Ly8nICsgaG9zdCArICcvZGlzdC8nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBuYXRpdmVCYXNlO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9hcGkuanMiLCIvLyBjb25zdCBhc3NldHNVUkwgPSAnZmlsZTovLy9zZGNhcmQvaW1nLydcclxuY29uc3QgYXNzZXRzUm9vdCA9ICdodHRwczovL2tvb29mbHkuZ2l0aHViLmlvL2tvc3RhbmQtdHRmL3R0Zi9hc3NldHMvJ1xyXG5cclxuZnVuY3Rpb24gaWNvbih2KSB7XHJcbiAgICByZXR1cm4gYXNzZXRzUm9vdCArICdpY29uLycgKyB2XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgLy8gd2VleOiEmuacrGhvc3RcclxuICAgIHNjcmlwdEhvc3Q6ICdodHRwczovL2tvb29mbHkuZ2l0aHViLmlvL2tvc3RhbmQtdHRmL3R0ZicsXHJcbiAgICAvLyBIVE1MIGluZGV4XHJcbiAgICBodG1sSW5kZXg6ICdodHRwczovL2tvb29mbHkuZ2l0aHViLmlvL2tvc3RhbmQtdHRmL3R0Zi9pbmRleC5odG1sJyxcclxuICAgIC8vIHdlZXjohJrmnKzmoLnnm67lvZVcclxuICAgIHNjcmlwdFJvb3Q6ICcva29zdGFuZC10dGYvdHRmLzEwMDEvJyxcclxuICAgIC8vIOWbvueJh+etiemdmeaAgei1hOa6kOagueebruW9lVxyXG4gICAgYXNzZXRzUm9vdDogYXNzZXRzUm9vdCxcclxuICAgIC8vIHJlc2V0ZnVsIEFQSeacjeWKoeaguei3r+W+hFxyXG4gICAgYXBpUm9vdDogJ2h0dHBzOi8va29vb2ZseS5naXRodWIuaW8va29zdGFuZC10dGYvdHRmL2FwaS92MScsXHJcbiAgICAvLyBhbmRyb2lkIOacrOWcsOmdmeaAgei1hOa6kOi3r+W+hFxyXG4gICAgYW5kcm9pZEFzc2V0c1Jvb3Q6ICdmaWxlOi8vL3NkY2FyZC9hc3NldHMvJyxcclxuICAgIGljb246IHtcclxuICAgICAgICBtYXA6IGljb24oJ21hcEAyeC5wbmcnKSxcclxuICAgICAgICBtYXBfbGlmZTogaWNvbignbWFwX2xpZmVAMngucG5nJyksXHJcbiAgICAgICAgbm90aWNlOiBpY29uKCdub3RpY2VAMngucG5nJyksXHJcbiAgICAgICAgc2NhbjogaWNvbignc2NhbkAyeC5wbmcnKSxcclxuICAgICAgICBjb2RlOiBpY29uKCdjb2RlQDJ4LnBuZycpLFxyXG4gICAgICAgIHRyYW5zYWN0aW9uX3JlY29yZDogaWNvbigndHJhbnNhY3Rpb25fcmVjb3JkQDJ4LnBuZycpLFxyXG4gICAgICAgIHNlYXJjaDogaWNvbignc2VhcmNoQDJ4LnBuZycpLFxyXG4gICAgICAgIGJhY2s6IGljb24oJ2JhY2tAMngucG5nJyksXHJcbiAgICAgICAgcmlnaHRfYXJyb3c6IGljb24oJ3JpZ2h0X2Fycm93QDJ4LnBuZycpLFxyXG4gICAgICAgIHNlYXJjaDogaWNvbignc2VhcmNoX3Nob3BAMngucG5nJyksXHJcbiAgICAgICAgYXJvdW5kOiBpY29uKCdhcm91bmRAMngucG5nJyksXHJcbiAgICAgICAgc2VhcmNoX3Bhc3M6IGljb24oJ3NlYXJjaF9wYXNzQDJ4LnBuZycpLFxyXG4gICAgICAgIHN0YXI6IGljb24oJ3N0YXJAMngucG5nJyksXHJcbiAgICAgICAgaGFsZl9zdGFyOiBpY29uKCdoYWxmX3N0YXJAMngucG5nJyksXHJcbiAgICAgICAgZHJvcGRvd246IGljb24oJ2Ryb3Bkb3duQDJ4LnBuZycpLFxyXG4gICAgICAgIHRpY2s6IGljb24oJ3RpY2tAMngucG5nJyksXHJcbiAgICAgICAgY29sbGVjdDogaWNvbignY29sbGVjdEAyeC5wbmcnKSxcclxuICAgICAgICBjb2xsZWN0X3Vuc2VsZWN0ZWQ6IGljb24oJ2NvbGxlY3QtdW5zZWxlY3RlZEAyeC5wbmcnKVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9jb25maWcuanMiLCJpbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJ1xyXG5sZXQgc3RvcmFnZVxyXG5sZXQgbG9naW5Nb2R1bGVcclxuX193ZWV4X2RlZmluZV9fKCdAd2VleC10ZW1wL2RldGVjdGlvbicsIGZ1bmN0aW9uIChfX3dlZXhfcmVxdWlyZV9fKSB7XHJcbiAgICBzdG9yYWdlID0gX193ZWV4X3JlcXVpcmVfXygnQHdlZXgtbW9kdWxlL3N0b3JhZ2UnKVxyXG4gICAgbG9naW5Nb2R1bGUgPSBfX3dlZXhfcmVxdWlyZV9fKCdAd2VleC1tb2R1bGUvbG9naW5Nb2R1bGUnKVxyXG4gICAgLy8gdGVzdE1vZHVsZS5vcGVuVVJMMVxyXG59KTtcclxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25pbiAocikge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBzdG9yYWdlLmdldEl0ZW0oJ3VzZXInLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5yZXN1bHQgIT09ICdmYWlsZWQnKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGUuZGF0YSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdCgpXHJcbiAgICAgICAgICAgICAgICAvLyDot7PovazliLDnmbvlvZXpobXpnaJcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2dpbiByZWZlcjonLCByLnVybClcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAnb2JqZWN0JyAmJiBsb2dpbk1vZHVsZSAmJiBsb2dpbk1vZHVsZS50b0xvZ2luKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9naW5Nb2R1bGUudG9Mb2dpbignbG9naW4nLCByLnVybClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9kZXRlY3Rpb24uanMiLCIvKlxyXG4qIOWRveWQjeinhOWIme+8mlxyXG4qIGFwcHMgPT4gdmlld3MvYXBwcy5qc1xyXG4qIGFjY291bnRfdHJhZGluZ19yZWNvcmRzID0+IHZpZXdzL2FjY291bnQtdHJhZGluZy1yZWNvcmRzLmpzXHJcbiogYWJjX2RlZl96enogPT4gdmlld3MvYWJjLWRlZi16enouanNcclxuKiDlvLrliLbov5nmoLfop6PmnpAg5pyJ5Yip5LqO5ZG95ZCN55qE6KeE6IyD5LiO57uf5LiA77yM56ym5ZCI5q2k6KeE6IyD55qE5YmN5o+Q5LiLIHVybCDlrZfmrrXlj6/ku6XnnIHnlaVcclxuKiDlr7nlupTnmoTop6PmnpDmlrnms5XvvJptZXRob2RzLmpzIG9wZW4oKVxyXG4qICovXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGluZGV4OiB7IHVybDogJ3dlZXgtYm9vdHN0cmFwJyB9LFxyXG4gICAgYXBwczogeyB0aXRsZTogJ+eyvumAiScgfSxcclxuICAgIGxpZmU6IHsgdGl0bGU6ICfnlJ/mtLsnIH0sXHJcblxyXG5cclxuXHJcbiAgICBtZXJjaGFudDogeyB0aXRsZTogJ+WVhuaIt+afpeivoicsIGljb246ICdtZXJjaGFudCcgfSxcclxuICAgIG1lcmNoYW50X2NvbGxlY3Rpb246IHsgdGl0bGU6ICfllYbmiLfmlLbol48nIH0sXHJcbiAgICBtZXJjaGFudF9uZWFyYnk6IHsgdGl0bGU6ICfpmYTov5HllYbmiLcnIH0sXHJcbiAgICBtZXJjaGFudF9hcm91bmQ6IHsgdGl0bGU6ICflkajovrnllYbmiLcnIH0sXHJcbiAgICBtZXJjaGFudF9pbnRyb2R1Y3Rpb246IHsgdGl0bGU6ICfnroDku4snIH0sXHJcblxyXG4gICAgbW9yZTogeyB0aXRsZTogJ+abtOWkmicsIGljb246ICdtb3JlJyB9LFxyXG5cclxuICAgIG5vdGljZXM6IHsgdGl0bGU6ICflhazlkYonIH0sXHJcbiAgICBub3RpY2VzX2RldGFpbDogeyB0aXRsZTogJ+WFrOWRiuivpuaDhScgfSxcclxuICAgIHNpZ25pbjogeyB0aXRsZTogJ+eZu+W9lScgfSxcclxuXHJcbiAgICBwYXltZW50X3Bob25lOiB7IHRpdGxlOiAn5omL5py65YWF5YC8JywgZGV0ZWN0aW9uOiAnc2lnbmluJyB9LFxyXG4gICAgcGF5bWVudF9wZXRyb2xldW06IHsgdGl0bGU6ICfliqDmsrnljaHlhYXlgLwnIH0sXHJcbiAgICBwYXltZW50X3dhdGVyOiB7IHRpdGxlOiAn5rC06LS557y057qzJyB9LFxyXG4gICAgcGF5bWVudF9lbGVjdHJpY2l0eTogeyB0aXRsZTogJ+eUtei0uee8tOe6sycgfSxcclxuICAgIHBheW1lbnRfZ2FzOiB7IHRpdGxlOiAn54eD5rCU57y06LS5JyB9LFxyXG5cclxuICAgIGRhc2hib2FyZDogeyB0aXRsZTogJ+aIkeeahOi0puaItycsIGRldGVjdGlvbjogJ3NpZ25pbicgfSxcclxuICAgIGRhc2hib2FyZF9yZWNoYXJnZTogeyB0aXRsZTogJ+i0puaIt+WFheWAvCcgfSxcclxuICAgIGRhc2hib2FyZF90cmFuc2ZlcjogeyB0aXRsZTogJ+i0puaIt+i9rOi0picgfSxcclxuICAgIGRhc2hib2FyZF9iYW5rX2NhcmQ6IHsgdGl0bGU6ICfpk7booYzljaEnIH0sXHJcbiAgICBkYXNoYm9hcmRfdHJhZGluZ19yZWNvcmRzOiB7IHRpdGxlOiAn5Lqk5piT6K6w5b2VJyB9LFxyXG4gICAgZGFzaGJvYXJkX3Bhc3N3b3JkOiB7IHRpdGxlOiAn5a+G56CB566h55CGJyB9LFxyXG4gICAgZGFzaGJvYXJkX2NlcnRpZmljYXRlOiB7IHRpdGxlOiAn6K+B5Lmm566h55CGJyB9LFxyXG5cclxuICAgIHN1bXBheV9jYXJkOiB7IHRpdGxlOiAn5ZWG55uf5Y2hJyB9LFxyXG4gICAgc3VtcGF5X2NhcmRfYmFsYW5jZTogeyB0aXRsZTogJ+WNoeS9memineafpeivoicgfSxcclxuICAgIHN1bXBheV9jYXJkX3Bhc3N3b3JkOiB7IHRpdGxlOiAn5Y2h5a+G56CB5L+u5pS5JyB9LFxyXG4gICAgc3VtcGF5X2NhcmRfZGV0YWlsOiB7IHRpdGxlOiAn5Y2h5piO57uG5p+l6K+iJyB9LFxyXG5cclxuICAgIHRlc3Q6IHsgdGl0bGU6ICfkuLTml7bmtYvor5XpobXpnaInIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vcm91dGUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImxpc3QtaXRlbVwiXG4gIF0sXG4gIFwiZXZlbnRzXCI6IHtcbiAgICBcImNsaWNrXCI6IGZ1bmN0aW9uICgkZXZlbnQpIHt0aGlzLm9wZW5EZXRhaWwodGhpcy5pZCwkZXZlbnQpfVxuICB9LFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJsZWZ0XCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwibGVmdC1yb3dcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwibGVmdC1yb3ctbGFiZWxcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICBcImJhY2tncm91bmRDb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGFiZWxCYWNrZ3JvdW5kfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnR5cGV9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwibGVmdC1yb3ctdGl0bGVcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICBcImNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5jb2xvcn1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aXRsZX1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImxlZnQtc3ViLXRpdGxlXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgXCJjb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuY29sb3J9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuc3ViVGl0bGV9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwibGlzdC1pdGVtLWRhdGVcIlxuICAgICAgXSxcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcImNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5jb2xvcn1cbiAgICAgIH0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5kYXRlfVxuICAgICAgfVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vc3JjL2NvbXBvbmVudHMvbGlzdC1pdGVtL2xpc3QtaXRlbS1ub3RpY2VzLndlXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDggMjkiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJsaXN0LWl0ZW1cIjoge1xuICAgIFwiZmxleFdyYXBcIjogXCJ3cmFwXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIndpZHRoXCI6IDcyNixcbiAgICBcImhlaWdodFwiOiAxNTAsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IDI0LFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDIwLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjZGJkYmRiXCIsXG4gICAgXCJib3JkZXJCb3R0b21TdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiAxXG4gIH0sXG4gIFwibGVmdFwiOiB7XG4gICAgXCJmbGV4V3JhcFwiOiBcIndyYXBcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcIm1hcmdpbkxlZnRcIjogMTBcbiAgfSxcbiAgXCJsZWZ0LXJvd1wiOiB7XG4gICAgXCJmbGV4V3JhcFwiOiBcIndyYXBcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIlxuICB9LFxuICBcImxlZnQtcm93LWxhYmVsXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogNCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogNCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDEwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDEwLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IDQsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImZvbnRTaXplXCI6IDI4XG4gIH0sXG4gIFwibGVmdC1yb3ctdGl0bGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogMzIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiYm9sZFwiXG4gIH0sXG4gIFwibGVmdC1zdWItdGl0bGVcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IDIwLFxuICAgIFwiZm9udFNpemVcIjogMjhcbiAgfSxcbiAgXCJsaXN0LWl0ZW0tZGF0ZVwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiAyMCxcbiAgICBcImZvbnRTaXplXCI6IDI4XG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3NyYy9jb21wb25lbnRzL2xpc3QtaXRlbS9saXN0LWl0ZW0tbm90aWNlcy53ZVxuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSA4IDI5IiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImxpc3QtaXRlbVwiIG9uY2xpY2s9XCJvcGVuRGV0YWlsKGlkKVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJsZWZ0LXJvdy1sYWJlbFwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjoge3tsYWJlbEJhY2tncm91bmR9fVwiPnt7dHlwZX19PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJsZWZ0LXJvdy10aXRsZVwiIHN0eWxlPVwiY29sb3I6IHt7Y29sb3J9fVwiPnt7dGl0bGV9fTwvdGV4dD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwibGVmdC1zdWItdGl0bGVcIiBzdHlsZT1cImNvbG9yOiB7e2NvbG9yfX1cIj57e3N1YlRpdGxlfX08L3RleHQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJsaXN0LWl0ZW0tZGF0ZVwiIHN0eWxlPVwiY29sb3I6IHt7Y29sb3J9fVwiPnt7ZGF0ZX19PC90ZXh0PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgICAubGlzdC1pdGVtIHtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7IGZsZXgtZGlyZWN0aW9uOiByb3c7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogNzI2cHg7IGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI0cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZGJkYmRiOyBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDsgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xyXG4gICAgfVxyXG4gICAgLmxlZnQge1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIH1cclxuICAgIC5sZWZ0LXJvd3sgZmxleC13cmFwOiB3cmFwOyBmbGV4LWRpcmVjdGlvbjogcm93OyB9XHJcbiAgICAubGVmdC1yb3ctbGFiZWwge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0cHg7IHBhZGRpbmctYm90dG9tOiA0cHg7IHBhZGRpbmctbGVmdDogMTBweDsgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7IGZvbnQtc2l6ZTogMjhweDtcclxuICAgIH1cclxuICAgIC5sZWZ0LXJvdy10aXRsZSB7IGZvbnQtc2l6ZTogMzJweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cclxuICAgIC5sZWZ0LXN1Yi10aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICB9XHJcbiAgICAubGlzdC1pdGVtLWRhdGUge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgKiBhcyBtZXRob2RzIGZyb20gJy4uLy4uL2NvbW1vbi9tZXRob2RzJ1xyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIGRhdGEgKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZGF0ZTogJycsXHJcbiAgICAgICAgICAgICAgICBpZDogJycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnJyxcclxuICAgICAgICAgICAgICAgIHN1YlRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogJycsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJycsXHJcbiAgICAgICAgICAgICAgICBsYWJlbENvbG9yOiAnJyxcclxuICAgICAgICAgICAgICAgIGxhYmVsQmFja2dyb3VuZDogJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlYXRlZCAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKClcclxuICAgICAgICAgICAgdGhpcy4kb24oJ2lnbm9yZU5vdGljZXMnLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICBvcGVuRGV0YWlsIChpZCwgZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaWQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW4oJ25vdGljZXNfZGV0YWlsP2lkPScgKyBpZClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVuZGVyICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gJ+W3suivuycpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbG9yID0gJyM5OTknO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFiZWxCYWNrZ3JvdW5kID0gJyNiM2IzYjMnXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0eXBlID0gdGhpcy50eXBlXHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ+WFrOWRiic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmVsQmFja2dyb3VuZCA9ICcjNWFjNmZmJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ+a0u+WKqCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmVsQmFja2dyb3VuZCA9ICcjZmZhZDM4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmVsQmFja2dyb3VuZCA9ICcjNWFjNmZmJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBtZXRob2RzKVxyXG4gICAgfVxyXG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9saXN0LWl0ZW0vbGlzdC1pdGVtLW5vdGljZXMud2U/MTUxMmYwMzIiXSwic291cmNlUm9vdCI6IiJ9