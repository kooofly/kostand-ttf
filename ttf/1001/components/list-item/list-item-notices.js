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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWRiMDEyZWQ3NjI2ZThiNjU1ZGU/ODkxOCoqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xpc3QtaXRlbS9saXN0LWl0ZW0tbm90aWNlcy53ZT9jNTIzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanM/ZTZjYSoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcz84MGU0KioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzPzkwMDcqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcz9lY2UyKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanM/NzdhYSoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcz8xYjYyKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanM/Y2UwMCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcz9kNTNlKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzP2E2ZGEqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcz80MTE2KioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanM/MGRhMyoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzPzI0YzgqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzP2JkMWYqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzPzcwNTEqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzPzkzNWQqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanM/YWI0NCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzPzQ5YTQqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanM/MWU4NioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcz81YzBjKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcz9mNWJjKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcz9mY2VhKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanM/ZDg1MCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcz82OTQ2KioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzPzVjZjkqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcz80OGVhKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzPzQ1ZDMqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzPzYxOTkqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcz82MmE3KioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzP2Y2NWYqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzPzlmZDQqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanM/MmE2YyoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzPzdiNmMqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcz9lOGNkKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzPzc1OTgqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzP2E1ZmIqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanM/ZDBkMioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzP2I1YzAqKioqIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vbWV0aG9kcy5qcz8zZDkyKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2FwaS5qcz9jM2I1KioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbmZpZy5qcz9jMTgzKioqKioqIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZGV0ZWN0aW9uLmpzPzhmYjQqKioqIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vcm91dGUuanM/NzZmZCoqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGlzdC1pdGVtL2xpc3QtaXRlbS1ub3RpY2VzLndlPzI1YzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGlzdC1pdGVtL2xpc3QtaXRlbS1ub3RpY2VzLndlP2ZmNmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGlzdC1pdGVtL2xpc3QtaXRlbS1ub3RpY2VzLndlIl0sIm5hbWVzIjpbInJvdXRlVG9VcmwiLCJvcGVuIiwicGFyYW1zIiwicmVhbEhlaWdodCIsImRldGVjdGlvbiIsInJvdXRlTmFtZSIsInRlc3QiLCJzcGxpdCIsInIiLCJjb21waWxlVXJsIiwiY29uc29sZSIsImxvZyIsInVybCIsImpvaW4iLCJjYWxsIiwid2luZG93IiwibyIsInRoZW4iLCIkb3BlblVSTCIsImZhaWxDYWxsYmFjayIsIm5hbWUiLCJyZXN1bHQiLCIkZ2V0Q29uZmlnIiwiYnVuZGxlVXJsIiwiaW5kZXhPZiIsInN0ciIsInN1YnN0ciIsInAiLCJmb3JFYWNoIiwidGVtcCIsInYiLCJkZWNvZGVVUkkiLCJoZWlnaHQiLCJ3IiwiZW52IiwiZGV2aWNlV2lkdGgiLCJoIiwiZGV2aWNlSGVpZ2h0IiwiZmV0Y2giLCJzaWduaW4iLCJmZXRjaFRhYkJhciIsImFkYXB0ZXJUYWJCYXIiLCJmZXRjaEFwcHMiLCJmZXRjaE5vdGljZXMiLCJmZXRjaEJhbm5lcnMiLCJmZXRjaE1lcmNoYW50Q2F0ZWdvcnkiLCJmZXRjaE1lcmNoYW50TGlzdCIsImdldEJhc2VVUkwiLCJzdHJlYW0iLCJfX3dlZXhfZGVmaW5lX18iLCJfX3dlZXhfcmVxdWlyZV9fIiwiYXBpUm9vdCIsInBhdGgiLCJvcHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIk9iamVjdCIsImFzc2lnbiIsIm1ldGhvZHMiLCJ0eXBlIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJkYXRhIiwidGFiSXRlbXMiLCJpbmRleCIsInNlbGVjdGVkQ29sb3IiLCJiYXNlVVJMIiwidGFiSXRlbSIsImkiLCJzcmMiLCJpbWFnZSIsImFzc2V0c1Jvb3QiLCJzZWxlY3RlZEltYWdlIiwidmlzaWJpbGl0eSIsImljb24iLCJ0aXRsZUNvbG9yIiwiaXNOYXYiLCJuYXRpdmVCYXNlIiwiaXNBbmRyb2lkQXNzZXRzIiwiaXNpT1NBc3NldHMiLCJzdWJzdHJpbmciLCJsYXN0SW5kZXhPZiIsImhvc3QiLCJzY3JpcHRIb3N0IiwibWF0Y2hlcyIsImV4ZWMiLCJsZW5ndGgiLCJodG1sSW5kZXgiLCJzY3JpcHRSb290IiwiYW5kcm9pZEFzc2V0c1Jvb3QiLCJtYXAiLCJtYXBfbGlmZSIsIm5vdGljZSIsInNjYW4iLCJjb2RlIiwidHJhbnNhY3Rpb25fcmVjb3JkIiwic2VhcmNoIiwiYmFjayIsInJpZ2h0X2Fycm93Iiwic3RvcmFnZSIsImxvZ2luTW9kdWxlIiwiZ2V0SXRlbSIsImUiLCJ0b0xvZ2luIiwiYXBwcyIsInRpdGxlIiwibGlmZSIsIm1lcmNoYW50IiwibWVyY2hhbnRfY29sbGVjdGlvbiIsIm1lcmNoYW50X25lYXJieSIsIm1lcmNoYW50X2Fyb3VuZCIsIm1lcmNoYW50X2ludHJvZHVjdGlvbiIsIm1vcmUiLCJub3RpY2VzIiwibm90aWNlc19kZXRhaWwiLCJwYXltZW50X3Bob25lIiwicGF5bWVudF9wZXRyb2xldW0iLCJwYXltZW50X3dhdGVyIiwicGF5bWVudF9lbGVjdHJpY2l0eSIsInBheW1lbnRfZ2FzIiwiZGFzaGJvYXJkIiwiZGFzaGJvYXJkX3JlY2hhcmdlIiwiZGFzaGJvYXJkX3RyYW5zZmVyIiwiZGFzaGJvYXJkX2JhbmtfY2FyZCIsImRhc2hib2FyZF90cmFkaW5nX3JlY29yZHMiLCJkYXNoYm9hcmRfcGFzc3dvcmQiLCJkYXNoYm9hcmRfY2VydGlmaWNhdGUiLCJzdW1wYXlfY2FyZCIsInN1bXBheV9jYXJkX2JhbGFuY2UiLCJzdW1wYXlfY2FyZF9wYXNzd29yZCIsInN1bXBheV9jYXJkX2RldGFpbCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUM7O0FBRUQsMkY7Ozs7Ozs7Ozs7Ozs7QUNqQkEsbUJBQWtCLHVEOzs7Ozs7QUNBbEI7QUFDQSx3RDs7Ozs7O0FDREE7QUFDQTs7QUFFQSwyQ0FBMEMsZ0NBQW9DLEU7Ozs7OztBQ0g5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW1FO0FBQ25FO0FBQ0Esc0ZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1gsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxnREFBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBYztBQUNkLGVBQWM7QUFDZCxlQUFjO0FBQ2QsZUFBYztBQUNkLGdCQUFlO0FBQ2YsZ0JBQWU7QUFDZixnQkFBZTtBQUNmLGlCQUFnQjtBQUNoQiwwQjs7Ozs7O0FDNURBO0FBQ0E7QUFDQTtBQUNBLHdDQUF1QyxnQzs7Ozs7O0FDSHZDLDhCQUE2QjtBQUM3QixzQ0FBcUMsZ0M7Ozs7OztBQ0RyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0EsRzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRyxVQUFVO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNKQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDRkE7QUFDQSxzRUFBc0UsZ0JBQWdCLFVBQVUsR0FBRztBQUNuRyxFQUFDLEU7Ozs7OztBQ0ZEO0FBQ0E7QUFDQSxrQ0FBaUMsUUFBUSxnQkFBZ0IsVUFBVSxHQUFHO0FBQ3RFLEVBQUMsRTs7Ozs7O0FDSEQ7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxHOzs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQWtDLFVBQVUsRUFBRTtBQUM5QyxvQkFBbUIsc0NBQXNDO0FBQ3pELEVBQUMsb0NBQW9DO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxFQUFDLFc7Ozs7OztBQ2hDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEc7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNoQkEsd0JBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxHOzs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNKQSxrQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQSxHOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSyxXQUFXLGVBQWU7QUFDL0I7QUFDQSxNQUFLO0FBQ0w7QUFDQSxHOzs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBMkQ7QUFDM0QsRzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDSkE7QUFDQTtBQUNBLG9EQUFtRDtBQUNuRDtBQUNBLHdDQUF1QztBQUN2QyxHOzs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBLGM7Ozs7OztBQ0hBLDBDOzs7Ozs7QUNBQSxlQUFjLHNCOzs7Ozs7QUNBZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7Ozs7Ozs7Ozs7O1NDSWdCQSxVLEdBQUFBLFU7U0E4QkFDLEksR0FBQUEsSTtTQTJCQUMsTSxHQUFBQSxNO1NBd0JBQyxVLEdBQUFBLFU7O0FBekZoQjs7QUFDQTs7S0FBWUMsUzs7QUFDWjs7Ozs7Ozs7QUFDQTs7Ozs7QUFLTyxVQUFTSixVQUFULENBQXFCSyxTQUFyQixFQUFnQztBQUNuQyxTQUFJSCxTQUFTLEVBQWI7QUFDQSxTQUFJLEtBQUtJLElBQUwsQ0FBVUQsU0FBVixDQUFKLEVBQTBCO0FBQ3RCSCxrQkFBU0csVUFBVUUsS0FBVixDQUFnQixHQUFoQixFQUFxQixDQUFyQixDQUFUO0FBQ0FGLHFCQUFZQSxVQUFVRSxLQUFWLENBQWdCLEdBQWhCLEVBQXFCLENBQXJCLENBQVo7QUFDSDtBQUNELFNBQUlDLElBQUksZ0JBQU1ILFNBQU4sQ0FBUjtBQUNBLFNBQUlJLG1CQUFKO0FBQ0EsU0FBSSxDQUFDRCxDQUFMLEVBQVE7QUFDSjtBQUNBRSxpQkFBUUMsR0FBUixDQUFZLGtDQUFaO0FBQ0g7QUFDREYsa0JBQWFELEVBQUVJLEdBQUYsR0FBUUosRUFBRUksR0FBVixHQUFnQixXQUFXUCxVQUFVRSxLQUFWLENBQWdCLEdBQWhCLEVBQXFCTSxJQUFyQixDQUEwQixHQUExQixDQUF4QztBQUNBLFNBQUlELE1BQU0sZ0JBQVdFLElBQVgsQ0FBZ0IsSUFBaEIsRUFBc0IsSUFBdEIsSUFBOEJMLFVBQTlCLEdBQTJDLEtBQXJEO0FBQ0E7QUFDQSxTQUFJUCxNQUFKLEVBQVk7QUFDUixhQUFJLFFBQU9hLE1BQVAseUNBQU9BLE1BQVAsT0FBa0IsUUFBdEIsRUFBZ0M7QUFDNUJILG1CQUFNQSxNQUFNLEdBQU4sR0FBWVYsTUFBbEI7QUFDSCxVQUZELE1BRU87QUFDSFUsbUJBQU1BLE1BQU0sR0FBTixHQUFZVixNQUFsQjtBQUNIO0FBQ0o7QUFDRCxZQUFPVSxHQUFQO0FBQ0g7QUFDRDs7Ozs7O0FBTU8sVUFBU1gsSUFBVCxDQUFlSSxTQUFmLEVBQTBCVyxDQUExQixFQUE2QjtBQUFBOztBQUNoQyxTQUFJUixJQUFJLGdCQUFNSCxTQUFOLENBQVI7QUFDQSxTQUFJTyxNQUFNWixXQUFXYyxJQUFYLENBQWdCLElBQWhCLEVBQXNCVCxTQUF0QixDQUFWO0FBQ0EsU0FBSUcsRUFBRUosU0FBTixFQUFpQjtBQUNiQSxtQkFBVUksRUFBRUosU0FBWixFQUF1QjtBQUNuQkMsd0JBQVdBLFNBRFE7QUFFbkJPLGtCQUFLQTtBQUZjLFVBQXZCLEVBR0dLLElBSEgsQ0FHUSxZQUFNO0FBQ1YsbUJBQUtDLFFBQUwsQ0FBY04sR0FBZDtBQUNILFVBTEQsRUFLRyxZQUFNO0FBQ0wsaUJBQUlJLEtBQUssT0FBT0EsRUFBRUcsWUFBVCxLQUEwQixVQUFuQyxFQUErQztBQUMzQ0gsbUJBQUVHLFlBQUYsQ0FBZUwsSUFBZixRQUEwQlQsU0FBMUI7QUFDSDtBQUNKLFVBVEQ7QUFVSCxNQVhELE1BV087QUFDSCxjQUFLYSxRQUFMLENBQWNOLEdBQWQ7QUFDSDtBQUNKO0FBQ0Q7Ozs7Ozs7OztBQVNPLFVBQVNWLE1BQVQsQ0FBaUJrQixJQUFqQixFQUF1QlIsR0FBdkIsRUFBMkI7QUFDOUIsU0FBSVMsU0FBUyxFQUFiO0FBQ0EsU0FBSSxDQUFDVCxHQUFMLEVBQVU7QUFDTkEsZUFBTSxLQUFLVSxVQUFMLEdBQWtCQyxTQUF4QjtBQUNIO0FBQ0QsU0FBSVgsSUFBSVksT0FBSixDQUFZLEdBQVosTUFBcUIsQ0FBQyxDQUExQixFQUE2QjtBQUN6QixhQUFJQyxNQUFNYixJQUFJYyxNQUFKLENBQVdkLElBQUlZLE9BQUosQ0FBWSxHQUFaLElBQW1CLENBQTlCLENBQVY7QUFDQSxhQUFJRyxJQUFJRixJQUFJbEIsS0FBSixDQUFVLEdBQVYsQ0FBUjtBQUNBb0IsV0FBRUMsT0FBRixDQUFVLGFBQUs7QUFDWCxpQkFBSUMsT0FBT0MsRUFBRXZCLEtBQUYsQ0FBUSxHQUFSLENBQVg7QUFDQWMsb0JBQU9RLEtBQUssQ0FBTCxDQUFQLElBQWtCRSxVQUFVRixLQUFLLENBQUwsQ0FBVixDQUFsQjtBQUNILFVBSEQ7QUFJSDtBQUNELFNBQUksT0FBT1QsSUFBUCxLQUFnQixRQUFwQixFQUE4QjtBQUMxQixhQUFJQyxPQUFPRCxJQUFQLENBQUosRUFBa0I7QUFDZCxvQkFBT0MsT0FBT0QsSUFBUCxDQUFQO0FBQ0gsVUFGRCxNQUVPO0FBQ0gsb0JBQU8sRUFBUDtBQUNIO0FBQ0osTUFORCxNQU1PO0FBQ0gsZ0JBQU9DLE1BQVA7QUFDSDtBQUNKO0FBQ0Q7QUFDTyxVQUFTbEIsVUFBVCxDQUFxQjZCLE1BQXJCLEVBQTZCO0FBQ2hDLFNBQUlDLElBQUksS0FBS1gsVUFBTCxHQUFrQlksR0FBbEIsQ0FBc0JDLFdBQTlCO0FBQ0EsU0FBSUMsSUFBSSxLQUFLZCxVQUFMLEdBQWtCWSxHQUFsQixDQUFzQkcsWUFBOUI7QUFDQTtBQUNBLFlBQU9KLElBQUksR0FBSixHQUFVRCxNQUFqQjtBQUNILEU7Ozs7Ozs7Ozs7Ozs7O1NDdEZlTSxLLEdBQUFBLEs7U0FnQkFDLE0sR0FBQUEsTTtTQU1BQyxXLEdBQUFBLFc7U0FHQUMsYSxHQUFBQSxhO1NBbUJBQyxTLEdBQUFBLFM7U0FHQUMsWSxHQUFBQSxZO1NBR0FDLFksR0FBQUEsWTtTQUdBQyxxQixHQUFBQSxxQjtTQUlBQyxpQixHQUFBQSxpQjtTQU1BQyxVLEdBQUFBLFU7O0FBdkVoQjs7Ozs7O0FBQ0EsS0FBSUMsTUFBSjtBQUNBQyxpQkFBZ0IsZ0JBQWhCLEVBQWtDLFVBQVVDLGdCQUFWLEVBQTRCO0FBQzFERixjQUFTRSxpQkFBaUIscUJBQWpCLENBQVQ7QUFDSCxFQUZEOztBQUlBO0FBQ0EsS0FBTUMsVUFBVSxpQkFBT0EsT0FBdkI7QUFDTyxVQUFTYixLQUFULENBQWdCYyxJQUFoQixFQUFzQkMsR0FBdEIsRUFBMkI7QUFDOUIsWUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDUixnQkFBT1YsS0FBUCxDQUFhbUIsT0FBT0MsTUFBUCxDQUFjO0FBQ3ZCQyxzQkFBUyxLQURjO0FBRXZCL0Msa0JBQUssdUJBQXVCTixJQUF2QixDQUE0QjhDLElBQTVCLElBQW9DQSxJQUFwQyxHQUE4Q0QsT0FBOUMsU0FBeURDLElBQXpELFVBRmtCO0FBR3ZCUSxtQkFBTTtBQUhpQixVQUFkLEVBSVZQLEdBSlUsQ0FBYixFQUlTLG9CQUFZO0FBQ2pCLGlCQUFJUSxTQUFTQyxNQUFULElBQW1CLEdBQXZCLEVBQTRCO0FBQ3hCUCx5QkFBUU0sU0FBU0UsSUFBakI7QUFDSCxjQUZELE1BRU87QUFDSFAsd0JBQU9LLFFBQVA7QUFDSDtBQUNKLFVBVkQ7QUFXSCxNQVpNLEVBWUosWUFBTSxDQUFFLENBWkosQ0FBUDtBQWFIOztBQUVNLFVBQVN0QixNQUFULEdBQW1CO0FBQ3RCLFlBQU9ELE1BQU0sUUFBTixFQUFnQjtBQUNuQnFCLGtCQUFTO0FBRFUsTUFBaEIsQ0FBUDtBQUdIOztBQUVNLFVBQVNuQixXQUFULEdBQXdCO0FBQzNCLFlBQU9GLE1BQU0sU0FBTixDQUFQO0FBQ0g7QUFDTSxVQUFTRyxhQUFULENBQXVCdUIsUUFBdkIsRUFBaUNDLEtBQWpDLEVBQXdDQyxhQUF4QyxFQUF1RDtBQUMxRCxTQUFNQyxVQUFVcEIsV0FBV2pDLElBQVgsQ0FBZ0IsSUFBaEIsQ0FBaEI7QUFDQWtELGNBQVNwQyxPQUFULENBQWlCLFVBQUN3QyxPQUFELEVBQVVDLENBQVYsRUFBZ0I7QUFDN0JELGlCQUFRRSxHQUFSLEdBQWNILFVBQVVDLFFBQVFFLEdBQWhDO0FBQ0FGLGlCQUFRRyxLQUFSLEdBQWdCLGlCQUFPQyxVQUFQLEdBQW9CSixRQUFRRyxLQUE1QztBQUNBSCxpQkFBUUssYUFBUixHQUF3QixpQkFBT0QsVUFBUCxHQUFvQkosUUFBUUssYUFBcEQ7QUFDQSxhQUFJUixTQUFTSSxDQUFiLEVBQWdCO0FBQ1pELHFCQUFRTSxVQUFSLEdBQXFCLFNBQXJCO0FBQ0FOLHFCQUFRTyxJQUFSLEdBQWVQLFFBQVFLLGFBQXZCO0FBQ0FMLHFCQUFRUSxVQUFSLEdBQXFCVixhQUFyQjtBQUNILFVBSkQsTUFJTztBQUNIRSxxQkFBUU0sVUFBUixHQUFxQixRQUFyQjtBQUNBTixxQkFBUU8sSUFBUixHQUFlUCxRQUFRRyxLQUF2QjtBQUNIO0FBRUosTUFiRDtBQWNBLFlBQU9QLFFBQVA7QUFDSDs7QUFFTSxVQUFTdEIsU0FBVCxHQUFzQjtBQUN6QixZQUFPSixNQUFNLE1BQU4sQ0FBUDtBQUNIO0FBQ00sVUFBU0ssWUFBVCxHQUF5QjtBQUM1QixZQUFPTCxNQUFNLFNBQU4sQ0FBUDtBQUNIO0FBQ00sVUFBU00sWUFBVCxHQUF5QjtBQUM1QixZQUFPTixNQUFNLFNBQU4sQ0FBUDtBQUNIO0FBQ00sVUFBU08scUJBQVQsR0FBa0M7QUFDckMsWUFBT1AsTUFBTSxtQkFBTixDQUFQO0FBQ0g7O0FBRU0sVUFBU1EsaUJBQVQsR0FBOEI7QUFDakMsWUFBT1IsTUFBTSxlQUFOLENBQVA7QUFDSDs7QUFHRDtBQUNPLFVBQVNTLFVBQVQsQ0FBcUI4QixLQUFyQixFQUE0QjtBQUMvQixTQUFJdEQsU0FBSjs7QUFFQSxTQUFJLE9BQU8sS0FBS0QsVUFBWixLQUEyQixVQUEvQixFQUEyQztBQUN2Q0MscUJBQVksS0FBS0QsVUFBTCxHQUFrQkMsU0FBOUI7QUFDSDtBQUNELFNBQUl1RCxVQUFKO0FBQ0EsU0FBSUMsa0JBQWtCeEQsVUFBVUMsT0FBVixDQUFrQixnQkFBbEIsS0FBdUMsQ0FBN0Q7O0FBRUEsU0FBSXdELGNBQWN6RCxVQUFVQyxPQUFWLENBQWtCLFVBQWxCLEtBQWlDLENBQWpDLElBQXNDRCxVQUFVQyxPQUFWLENBQWtCLGNBQWxCLElBQW9DLENBQTVGO0FBQ0EsU0FBSXVELGVBQUosRUFBcUI7QUFDakJELHNCQUFhLHFCQUFiO0FBQ0gsTUFGRCxNQUVPLElBQUlFLFdBQUosRUFBaUI7QUFDcEJGLHNCQUFhdkQsVUFBVTBELFNBQVYsQ0FBb0IsQ0FBcEIsRUFBdUIxRCxVQUFVMkQsV0FBVixDQUFzQixHQUF0QixJQUE2QixDQUFwRCxDQUFiO0FBQ0gsTUFGTSxNQUVBO0FBQ0gsYUFBSUMsT0FBTyxpQkFBT0MsVUFBbEI7QUFDQSxhQUFJQyxVQUFVLGtCQUFrQkMsSUFBbEIsQ0FBdUIvRCxTQUF2QixDQUFkOztBQUVBLGFBQUk4RCxXQUFXQSxRQUFRRSxNQUFSLElBQWtCLENBQWpDLEVBQW9DO0FBQ2hDSixvQkFBT0UsUUFBUSxDQUFSLENBQVA7QUFDSDtBQUNEO0FBQ0EsYUFBSSxRQUFPdEUsTUFBUCx5Q0FBT0EsTUFBUCxPQUFrQixRQUF0QixFQUFnQztBQUM1QitELDBCQUFhRCxRQUFRLGlCQUFPVyxTQUFQLEdBQW1CLFFBQW5CLEdBQThCLGlCQUFPQyxVQUE3QyxHQUEwRCxpQkFBT0wsVUFBUCxHQUFvQixpQkFBT0ssVUFBbEc7QUFDSCxVQUZELE1BRU87QUFDSFgsMEJBQWEsaUJBQU9NLFVBQVAsR0FBb0IsaUJBQU9LLFVBQXhDO0FBQ0E7QUFDQTtBQUNIO0FBQ0o7QUFDRCxZQUFPWCxVQUFQO0FBQ0gsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RHRDtBQUNBLEtBQU1OLGFBQWEsbURBQW5COztBQUVBLFVBQVNHLElBQVQsQ0FBYzdDLENBQWQsRUFBaUI7QUFDYixZQUFPMEMsYUFBYSxPQUFiLEdBQXVCMUMsQ0FBOUI7QUFDSDttQkFDYztBQUNYO0FBQ0FzRCxpQkFBWSwyQ0FGRDtBQUdYO0FBQ0FJLGdCQUFXLHNEQUpBO0FBS1g7QUFDQUMsaUJBQVksUUFORDtBQU9YO0FBQ0FqQixpQkFBWUEsVUFSRDtBQVNYO0FBQ0FyQixjQUFTLGtEQVZFO0FBV1g7QUFDQXVDLHdCQUFtQix3QkFaUjtBQWFYZjtBQUNJZ0IsY0FBS2hCLEtBQUssWUFBTCxDQURUO0FBRUlpQixtQkFBVWpCLEtBQUssaUJBQUwsQ0FGZDtBQUdJa0IsaUJBQVFsQixLQUFLLGVBQUwsQ0FIWjtBQUlJbUIsZUFBTW5CLEtBQUssYUFBTCxDQUpWO0FBS0lvQixlQUFNcEIsS0FBSyxhQUFMLENBTFY7QUFNSXFCLDZCQUFvQnJCLEtBQUssMkJBQUwsQ0FOeEI7QUFPSXNCLGlCQUFRdEIsS0FBSyxlQUFMLENBUFo7QUFRSXVCLGVBQU12QixLQUFLLGFBQUwsQ0FSVjtBQVNJd0Isc0JBQWF4QixLQUFLLG9CQUFMO0FBVGpCLHlDQVVZQSxLQUFLLG9CQUFMLENBVlosb0NBV1lBLEtBQUssZUFBTCxDQVhaLHlDQVlpQkEsS0FBSyxvQkFBTCxDQVpqQixrQ0FhVUEsS0FBSyxhQUFMLENBYlYsdUNBY2VBLEtBQUssa0JBQUwsQ0FkZixzQ0FlY0EsS0FBSyxpQkFBTCxDQWZkLGtDQWdCVUEsS0FBSyxhQUFMLENBaEJWLHFDQWlCYUEsS0FBSyxnQkFBTCxDQWpCYixnREFrQndCQSxLQUFLLDJCQUFMLENBbEJ4QjtBQWJXLEU7Ozs7Ozs7Ozs7Ozs7O1NDRUNwQyxNLEdBQUFBLE07O0FBUmhCOzs7Ozs7QUFDQSxLQUFJNkQsZ0JBQUo7QUFDQSxLQUFJQyxvQkFBSjtBQUNBcEQsaUJBQWdCLHNCQUFoQixFQUF3QyxVQUFVQyxnQkFBVixFQUE0QjtBQUNoRWtELGVBQVVsRCxpQkFBaUIsc0JBQWpCLENBQVY7QUFDQW1ELG1CQUFjbkQsaUJBQWlCLDBCQUFqQixDQUFkO0FBQ0E7QUFDSCxFQUpEO0FBS08sVUFBU1gsTUFBVCxDQUFpQi9CLENBQWpCLEVBQW9CO0FBQ3ZCLFlBQU8sSUFBSThDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEM0QyxpQkFBUUUsT0FBUixDQUFnQixNQUFoQixFQUF3QixVQUFDQyxDQUFELEVBQU87QUFDM0IsaUJBQUlBLEVBQUVsRixNQUFGLEtBQWEsUUFBakIsRUFBMkI7QUFDdkJrQyx5QkFBUWdELEVBQUV4QyxJQUFWO0FBQ0gsY0FGRCxNQUVPO0FBQ0hQO0FBQ0E7QUFDQTlDLHlCQUFRQyxHQUFSLENBQVksY0FBWixFQUE0QkgsRUFBRUksR0FBOUI7QUFDQSxxQkFBSSxRQUFPRyxNQUFQLHlDQUFPQSxNQUFQLE9BQWtCLFFBQWxCLElBQThCc0YsV0FBOUIsSUFBNkNBLFlBQVlHLE9BQTdELEVBQXNFO0FBQ2xFSCxpQ0FBWUcsT0FBWixDQUFvQixPQUFwQixFQUE2QmhHLEVBQUVJLEdBQS9CO0FBQ0g7QUFDSjtBQUNKLFVBWEQ7QUFZSCxNQWJNLENBQVA7QUFjSCxFOzs7Ozs7Ozs7OztBQ3ZCRDs7Ozs7Ozs7bUJBUWU7QUFDWHFELFlBQU8sRUFBRXJELEtBQUssZ0JBQVAsRUFESTtBQUVYNkYsV0FBTSxFQUFFQyxPQUFPLElBQVQsRUFGSztBQUdYQyxXQUFNLEVBQUVELE9BQU8sSUFBVCxFQUhLOztBQU9YRSxlQUFVLEVBQUVGLE9BQU8sTUFBVCxFQUFpQi9CLE1BQU0sVUFBdkIsRUFQQztBQVFYa0MsMEJBQXFCLEVBQUVILE9BQU8sTUFBVCxFQVJWO0FBU1hJLHNCQUFpQixFQUFFSixPQUFPLE1BQVQsRUFUTjtBQVVYSyxzQkFBaUIsRUFBRUwsT0FBTyxNQUFULEVBVk47QUFXWE0sNEJBQXVCLEVBQUVOLE9BQU8sSUFBVCxFQVhaOztBQWFYTyxXQUFNLEVBQUVQLE9BQU8sSUFBVCxFQUFlL0IsTUFBTSxNQUFyQixFQWJLOztBQWVYdUMsY0FBUyxFQUFFUixPQUFPLElBQVQsRUFmRTtBQWdCWFMscUJBQWdCLEVBQUVULE9BQU8sTUFBVCxFQWhCTDtBQWlCWG5FLGFBQVEsRUFBRW1FLE9BQU8sSUFBVCxFQWpCRzs7QUFtQlhVLG9CQUFlLEVBQUVWLE9BQU8sTUFBVCxFQUFpQnRHLFdBQVcsUUFBNUIsRUFuQko7QUFvQlhpSCx3QkFBbUIsRUFBRVgsT0FBTyxPQUFULEVBcEJSO0FBcUJYWSxvQkFBZSxFQUFFWixPQUFPLE1BQVQsRUFyQko7QUFzQlhhLDBCQUFxQixFQUFFYixPQUFPLE1BQVQsRUF0QlY7QUF1QlhjLGtCQUFhLEVBQUVkLE9BQU8sTUFBVCxFQXZCRjs7QUF5QlhlLGdCQUFXLEVBQUVmLE9BQU8sTUFBVCxFQUFpQnRHLFdBQVcsUUFBNUIsRUF6QkE7QUEwQlhzSCx5QkFBb0IsRUFBRWhCLE9BQU8sTUFBVCxFQTFCVDtBQTJCWGlCLHlCQUFvQixFQUFFakIsT0FBTyxNQUFULEVBM0JUO0FBNEJYa0IsMEJBQXFCLEVBQUVsQixPQUFPLEtBQVQsRUE1QlY7QUE2QlhtQixnQ0FBMkIsRUFBRW5CLE9BQU8sTUFBVCxFQTdCaEI7QUE4QlhvQix5QkFBb0IsRUFBRXBCLE9BQU8sTUFBVCxFQTlCVDtBQStCWHFCLDRCQUF1QixFQUFFckIsT0FBTyxNQUFULEVBL0JaOztBQWlDWHNCLGtCQUFhLEVBQUV0QixPQUFPLEtBQVQsRUFqQ0Y7QUFrQ1h1QiwwQkFBcUIsRUFBRXZCLE9BQU8sT0FBVCxFQWxDVjtBQW1DWHdCLDJCQUFzQixFQUFFeEIsT0FBTyxPQUFULEVBbkNYO0FBb0NYeUIseUJBQW9CLEVBQUV6QixPQUFPLE9BQVQsRUFwQ1Q7O0FBc0NYcEcsV0FBTSxFQUFFb0csT0FBTyxRQUFUO0FBdENLLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUmY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWdDO0FBQ2hDLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFnRDtBQUNoRCxnQkFBZTtBQUNmO0FBQ0EsdUNBQXNDO0FBQ3RDO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUFzQztBQUN0QyxnQkFBZTtBQUNmO0FBQ0EsdUNBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBa0M7QUFDbEMsWUFBVztBQUNYO0FBQ0EsbUNBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBOEI7QUFDOUIsUUFBTztBQUNQO0FBQ0EsK0JBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBOztLQUNBOzs7Ozs7OzJCQUVBOzttQkFFQTtpQkFDQTtvQkFDQTttQkFDQTt1QkFDQTtxQkFDQTtvQkFDQTt5QkFDQTs4QkFFQTtBQVZBO0FBV0E7O0FBQ0E7O2NBQ0E7Z0RBQ0E7bUJBQ0E7QUFDQTtBQUNBOzs7Z0RBRUE7eUJBQ0E7OENBQ0E7QUFDQTttQ0FDQTt1Q0FDQTs4QkFDQTt3Q0FDQTtvQkFDQTtpQ0FDQTt5QkFDQTswQkFDQTtnREFDQTtBQUNBOzBCQUNBO2dEQUNBO0FBQ0E7QUFDQTtnREFFQTs7QUFDQTtBQUNBO0FBdEJBLFFBdUJBO0FBM0NBIiwiZmlsZSI6ImNvbXBvbmVudHNcXGxpc3QtaXRlbVxcbGlzdC1pdGVtLW5vdGljZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1ZGIwMTJlZDc2MjZlOGI2NTVkZSIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vbGlzdC1pdGVtLW5vdGljZXMud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vbGlzdC1pdGVtLW5vdGljZXMud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9saXN0LWl0ZW0tbm90aWNlcy53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC9lZGJlNjgwY2U3Mjc4YTg5MzYzMTZlNjFkYmFjM2Q4OCcsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5fX3dlZXhfYm9vdHN0cmFwX18oJ0B3ZWV4LWNvbXBvbmVudC9lZGJlNjgwY2U3Mjc4YTg5MzYzMTZlNjFkYmFjM2Q4OCcsdW5kZWZpbmVkLHVuZGVmaW5lZClcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2xpc3QtaXRlbS9saXN0LWl0ZW0tbm90aWNlcy53ZT9lbnRyeT10cnVlXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzciLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM3IiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0Jywge2Fzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM3IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIEMpe1xuICAgICAgICAgIHN3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZihJU19QUk9UTyl7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSloaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsICRhc3NpZ24gID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCBhTGVuICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZlxuICAgICwgaXNFbnVtICAgICA9IHBJRS5mO1xuICB3aGlsZShhTGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM3IiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJpbXBvcnQgeyBnZXRCYXNlVVJMIH0gZnJvbSAnLi9hcGknXHJcbmltcG9ydCAqIGFzIGRldGVjdGlvbiBmcm9tICcuL2RldGVjdGlvbidcclxuaW1wb3J0IHJvdXRlIGZyb20gJy4vcm91dGUnXHJcbi8qKlxyXG4gKiDot6/nlLHovazpk77mjqVcclxuICogQHBhcmFtIHtzdHJpbmd9IHJvdXRlTmFtZVxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJvdXRlVG9VcmwgKHJvdXRlTmFtZSkge1xyXG4gICAgdmFyIHBhcmFtcyA9ICcnXHJcbiAgICBpZiAoL1xcPy8udGVzdChyb3V0ZU5hbWUpKSB7XHJcbiAgICAgICAgcGFyYW1zID0gcm91dGVOYW1lLnNwbGl0KCc/JylbMV1cclxuICAgICAgICByb3V0ZU5hbWUgPSByb3V0ZU5hbWUuc3BsaXQoJz8nKVswXVxyXG4gICAgfVxyXG4gICAgbGV0IHIgPSByb3V0ZVtyb3V0ZU5hbWVdXHJcbiAgICBsZXQgY29tcGlsZVVybFxyXG4gICAgaWYgKCFyKSB7XHJcbiAgICAgICAgLy8gVE9ETyDot7PovazliLDplJnor6/pobVcclxuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3I6IOi3r+eUseS4jeWtmOWcqO+8jOivt+WcqHJvdXRlci5qc+S4remFjee9ruWvueW6lOeahOi3r+eUsScpXHJcbiAgICB9XHJcbiAgICBjb21waWxlVXJsID0gci51cmwgPyByLnVybCA6ICd2aWV3cy8nICsgcm91dGVOYW1lLnNwbGl0KCdfJykuam9pbignLScpXHJcbiAgICBsZXQgdXJsID0gZ2V0QmFzZVVSTC5jYWxsKHRoaXMsIHRydWUpICsgY29tcGlsZVVybCArICcuanMnXHJcbiAgICAvLyDlhYHorrjmt7vliqDlj4LmlbAg5L6L5aaCIG1lcmNoYW50X2Fyb3VuZD9hPTEmYj0yIOWkhOeQhuinhOWImeWSjOa1j+iniOWZqOeahHF1ZXJ5c3RyaW5n5LiA6Ie0XHJcbiAgICBpZiAocGFyYW1zKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIHVybCA9IHVybCArICcmJyArIHBhcmFtc1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHVybCA9IHVybCArICc/JyArIHBhcmFtc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB1cmxcclxufVxyXG4vKipcclxuICog5omT5byA5paw6aG16Z2iXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSByb3V0ZU5hbWUgLSDot6/nlLHlkI3np7Ag5omA5pyJ6Lev55Sx5ZCN56ew5Zyocm91dGUuanPkuK1cclxuICogQHBhcmFtIHtvYmplY3R9IG8gLSDnjrDlnKjlj6rmnInot6/nlLHmiZPlvIDlpLHotKXlpITnkIbmlrnms5XvvIzku6XlkI7lj6/ku6Xmt7vliqDlhbbku5blpITnkIZcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gby5mYWlsQ2FsbGJhY2sgLSDot6/nlLHmiZPlvIDlpLHotKXlpITnkIZjYWxsYmFja1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9wZW4gKHJvdXRlTmFtZSwgbykge1xyXG4gICAgbGV0IHIgPSByb3V0ZVtyb3V0ZU5hbWVdXHJcbiAgICBsZXQgdXJsID0gcm91dGVUb1VybC5jYWxsKHRoaXMsIHJvdXRlTmFtZSlcclxuICAgIGlmIChyLmRldGVjdGlvbikge1xyXG4gICAgICAgIGRldGVjdGlvbltyLmRldGVjdGlvbl0oe1xyXG4gICAgICAgICAgICByb3V0ZU5hbWU6IHJvdXRlTmFtZSxcclxuICAgICAgICAgICAgdXJsOiB1cmxcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kb3BlblVSTCh1cmwpXHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobyAmJiB0eXBlb2Ygby5mYWlsQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG8uZmFpbENhbGxiYWNrLmNhbGwodGhpcywgcm91dGVOYW1lKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy4kb3BlblVSTCh1cmwpXHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIOino+aekOi3r+eUseWPguaVsFxyXG4gKiDkvovlpoLvvJptZXJjaGFudF9hcm91bmQ/YT0xJmI9MiDpobXpnaJcclxuICogICAgICDosIPnlKhwYXJhbXMoKeaWueazlSDov5Tlm57lgLzkuLrvvJoge2E6MSwgYjoyfVxyXG4gKiAgICAgIOiwg+eUqHBhcmFtcygnYScp5pa55rOVIOi/lOWbnuWAvOS4uu+8miAxXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbmFtZV0g5Y+v6YCJ5Y+C5pWwXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdXJsXSDlj6/pgInlj4LmlbAg6buY6K6k5Li6YnVuZGxlVXJsXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd8b2JqZWN0fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtcyAobmFtZSwgdXJsKXtcclxuICAgIGxldCByZXN1bHQgPSB7fVxyXG4gICAgaWYgKCF1cmwpIHtcclxuICAgICAgICB1cmwgPSB0aGlzLiRnZXRDb25maWcoKS5idW5kbGVVcmxcclxuICAgIH1cclxuICAgIGlmICh1cmwuaW5kZXhPZihcIj9cIikgIT09IC0xKSB7XHJcbiAgICAgICAgbGV0IHN0ciA9IHVybC5zdWJzdHIodXJsLmluZGV4T2YoXCI/XCIpICsgMSlcclxuICAgICAgICBsZXQgcCA9IHN0ci5zcGxpdChcIiZcIilcclxuICAgICAgICBwLmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0ZW1wID0gdi5zcGxpdChcIj1cIilcclxuICAgICAgICAgICAgcmVzdWx0W3RlbXBbMF1dID0gZGVjb2RlVVJJKHRlbXBbMV0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBpZiAocmVzdWx0W25hbWVdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRbbmFtZV1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gJydcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiByZXN1bHRcclxuICAgIH1cclxufVxyXG4vLyDojrflj5bnnJ/lrp7pq5jluqbvvIznlLHkuo53ZWV46Zeu6aKY5pyq6IO96YCC6YWN5omA5pyJ5py65Z6L44CCXHJcbmV4cG9ydCBmdW5jdGlvbiByZWFsSGVpZ2h0IChoZWlnaHQpIHtcclxuICAgIGxldCB3ID0gdGhpcy4kZ2V0Q29uZmlnKCkuZW52LmRldmljZVdpZHRoXHJcbiAgICBsZXQgaCA9IHRoaXMuJGdldENvbmZpZygpLmVudi5kZXZpY2VIZWlnaHRcclxuICAgIC8vIDEzMzJcclxuICAgIHJldHVybiB3IC8gNzUwICogaGVpZ2h0XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL21ldGhvZHMuanMiLCJpbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJ1xyXG52YXIgc3RyZWFtXHJcbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtdGVtcC9hcGknLCBmdW5jdGlvbiAoX193ZWV4X3JlcXVpcmVfXykge1xyXG4gICAgc3RyZWFtID0gX193ZWV4X3JlcXVpcmVfXygnQHdlZXgtbW9kdWxlL3N0cmVhbScpXHJcbn0pO1xyXG5cclxuLy8g5pWw5o2u5Zyw5Z2AXHJcbmNvbnN0IGFwaVJvb3QgPSBjb25maWcuYXBpUm9vdFxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2ggKHBhdGgsIG9wdCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBzdHJlYW0uZmV0Y2goT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgICAgIG1ldGhvZHM6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IC9odHRwOlxcL1xcL3xodHRwczpcXC9cXC8vLnRlc3QocGF0aCkgPyBwYXRoIDogYCR7YXBpUm9vdH0vJHtwYXRofS5qc29uYCxcclxuICAgICAgICAgICAgdHlwZTogJ2pzb24nXHJcbiAgICAgICAgfSwgb3B0KSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KHJlc3BvbnNlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSApXHJcbiAgICB9LCAoKSA9PiB7fSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25pbiAoKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goJ3NpZ25pbicsIHtcclxuICAgICAgICBtZXRob2RzOiAnUE9TVCdcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFRhYkJhciAoKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goJ3RhYi1iYXInKVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGFwdGVyVGFiQmFyKHRhYkl0ZW1zLCBpbmRleCwgc2VsZWN0ZWRDb2xvcikge1xyXG4gICAgY29uc3QgYmFzZVVSTCA9IGdldEJhc2VVUkwuY2FsbCh0aGlzKVxyXG4gICAgdGFiSXRlbXMuZm9yRWFjaCgodGFiSXRlbSwgaSkgPT4ge1xyXG4gICAgICAgIHRhYkl0ZW0uc3JjID0gYmFzZVVSTCAr44CAdGFiSXRlbS5zcmM7XHJcbiAgICAgICAgdGFiSXRlbS5pbWFnZSA9IGNvbmZpZy5hc3NldHNSb290ICvjgIB0YWJJdGVtLmltYWdlO1xyXG4gICAgICAgIHRhYkl0ZW0uc2VsZWN0ZWRJbWFnZSA9IGNvbmZpZy5hc3NldHNSb290ICvjgIB0YWJJdGVtLnNlbGVjdGVkSW1hZ2VcclxuICAgICAgICBpZiAoaW5kZXggPT0gaSkge1xyXG4gICAgICAgICAgICB0YWJJdGVtLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcclxuICAgICAgICAgICAgdGFiSXRlbS5pY29uID0gdGFiSXRlbS5zZWxlY3RlZEltYWdlO1xyXG4gICAgICAgICAgICB0YWJJdGVtLnRpdGxlQ29sb3IgPSBzZWxlY3RlZENvbG9yO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhYkl0ZW0udmlzaWJpbGl0eSA9ICdoaWRkZW4nXHJcbiAgICAgICAgICAgIHRhYkl0ZW0uaWNvbiA9IHRhYkl0ZW0uaW1hZ2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcbiAgICByZXR1cm4gdGFiSXRlbXNcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQXBwcyAoKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goJ2FwcHMnKVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaE5vdGljZXMgKCkge1xyXG4gICAgcmV0dXJuIGZldGNoKCdub3RpY2VzJylcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hCYW5uZXJzICgpIHtcclxuICAgIHJldHVybiBmZXRjaCgnYmFubmVycycpXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoTWVyY2hhbnRDYXRlZ29yeSAoKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goJ21lcmNoYW50LWNhdGVnb3J5JylcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoTWVyY2hhbnRMaXN0ICgpIHtcclxuICAgIHJldHVybiBmZXRjaCgnbWVyY2hhbnQtbGlzdCcpXHJcbn1cclxuXHJcblxyXG4vLyBhcHAganNidW5kbGUg6Z2Z5oCB6LWE5rqQ5Zyw5Z2AXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCYXNlVVJMIChpc05hdikge1xyXG4gICAgdmFyIGJ1bmRsZVVybFxyXG5cclxuICAgIGlmICh0eXBlb2YgdGhpcy4kZ2V0Q29uZmlnID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgYnVuZGxlVXJsID0gdGhpcy4kZ2V0Q29uZmlnKCkuYnVuZGxlVXJsXHJcbiAgICB9XHJcbiAgICB2YXIgbmF0aXZlQmFzZTtcclxuICAgIHZhciBpc0FuZHJvaWRBc3NldHMgPSBidW5kbGVVcmwuaW5kZXhPZignZmlsZTovL2Fzc2V0cy8nKSA+PSAwO1xyXG5cclxuICAgIHZhciBpc2lPU0Fzc2V0cyA9IGJ1bmRsZVVybC5pbmRleE9mKCdmaWxlOi8vLycpID49IDAgJiYgYnVuZGxlVXJsLmluZGV4T2YoJ1dlZXhEZW1vLmFwcCcpID4gMDtcclxuICAgIGlmIChpc0FuZHJvaWRBc3NldHMpIHtcclxuICAgICAgICBuYXRpdmVCYXNlID0gJ2ZpbGU6Ly9hc3NldHMvZGlzdC8nO1xyXG4gICAgfSBlbHNlIGlmIChpc2lPU0Fzc2V0cykge1xyXG4gICAgICAgIG5hdGl2ZUJhc2UgPSBidW5kbGVVcmwuc3Vic3RyaW5nKDAsIGJ1bmRsZVVybC5sYXN0SW5kZXhPZignLycpICsgMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBob3N0ID0gY29uZmlnLnNjcmlwdEhvc3Q7XHJcbiAgICAgICAgdmFyIG1hdGNoZXMgPSAvXFwvXFwvKFteXFwvXSs/KVxcLy8uZXhlYyhidW5kbGVVcmwpO1xyXG5cclxuICAgICAgICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgICAgICAgIGhvc3QgPSBtYXRjaGVzWzFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+atpOWkhOmcgOazqOaEj+S4gOS4iyx0YWJiYXIg55So55qE55u05o6l5pivanNidW5kbGUg55qE6Lev5b6ELOS9huaYr25hdmlnYXRvcuaYr+ebtOaOpei3s+i9rOWIsOaWsOmhtemdouS4iueahC5cclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgbmF0aXZlQmFzZSA9IGlzTmF2ID8gY29uZmlnLmh0bWxJbmRleCArICc/cGFnZT0nICsgY29uZmlnLnNjcmlwdFJvb3QgOiBjb25maWcuc2NyaXB0SG9zdCArIGNvbmZpZy5zY3JpcHRSb290O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5hdGl2ZUJhc2UgPSBjb25maWcuc2NyaXB0SG9zdCArIGNvbmZpZy5zY3JpcHRSb290O1xyXG4gICAgICAgICAgICAvLyBuYXRpdmVCYXNlID0gJ2h0dHA6Ly8nICsgaG9zdCArIHRlc3RSb290RGlyICsgJy9kaXN0Lyc7XHJcbiAgICAgICAgICAgIC8vIG5hdGl2ZUJhc2UgPSAnaHR0cDovLycgKyBob3N0ICsgJy9kaXN0Lyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5hdGl2ZUJhc2U7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2FwaS5qcyIsIi8vIGNvbnN0IGFzc2V0c1VSTCA9ICdmaWxlOi8vL3NkY2FyZC9pbWcvJ1xyXG5jb25zdCBhc3NldHNSb290ID0gJ2h0dHBzOi8va29vb2ZseS5naXRodWIuaW8va29zdGFuZC10dGYvdHRmL2Fzc2V0cy8nXHJcblxyXG5mdW5jdGlvbiBpY29uKHYpIHtcclxuICAgIHJldHVybiBhc3NldHNSb290ICsgJ2ljb24vJyArIHZcclxufVxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICAvLyB3ZWV46ISa5pysaG9zdFxyXG4gICAgc2NyaXB0SG9zdDogJ2h0dHBzOi8va29vb2ZseS5naXRodWIuaW8va29zdGFuZC10dGYvdHRmJyxcclxuICAgIC8vIEhUTUwgaW5kZXhcclxuICAgIGh0bWxJbmRleDogJ2h0dHBzOi8va29vb2ZseS5naXRodWIuaW8va29zdGFuZC10dGYvdHRmL2luZGV4Lmh0bWwnLFxyXG4gICAgLy8gd2VleOiEmuacrOagueebruW9lVxyXG4gICAgc2NyaXB0Um9vdDogJy8xMDAxLycsXHJcbiAgICAvLyDlm77niYfnrYnpnZnmgIHotYTmupDmoLnnm67lvZVcclxuICAgIGFzc2V0c1Jvb3Q6IGFzc2V0c1Jvb3QsXHJcbiAgICAvLyByZXNldGZ1bCBBUEnmnI3liqHmoLnot6/lvoRcclxuICAgIGFwaVJvb3Q6ICdodHRwczovL2tvb29mbHkuZ2l0aHViLmlvL2tvc3RhbmQtdHRmL3R0Zi9hcGkvdjEnLFxyXG4gICAgLy8gYW5kcm9pZCDmnKzlnLDpnZnmgIHotYTmupDot6/lvoRcclxuICAgIGFuZHJvaWRBc3NldHNSb290OiAnZmlsZTovLy9zZGNhcmQvYXNzZXRzLycsXHJcbiAgICBpY29uOiB7XHJcbiAgICAgICAgbWFwOiBpY29uKCdtYXBAMngucG5nJyksXHJcbiAgICAgICAgbWFwX2xpZmU6IGljb24oJ21hcF9saWZlQDJ4LnBuZycpLFxyXG4gICAgICAgIG5vdGljZTogaWNvbignbm90aWNlQDJ4LnBuZycpLFxyXG4gICAgICAgIHNjYW46IGljb24oJ3NjYW5AMngucG5nJyksXHJcbiAgICAgICAgY29kZTogaWNvbignY29kZUAyeC5wbmcnKSxcclxuICAgICAgICB0cmFuc2FjdGlvbl9yZWNvcmQ6IGljb24oJ3RyYW5zYWN0aW9uX3JlY29yZEAyeC5wbmcnKSxcclxuICAgICAgICBzZWFyY2g6IGljb24oJ3NlYXJjaEAyeC5wbmcnKSxcclxuICAgICAgICBiYWNrOiBpY29uKCdiYWNrQDJ4LnBuZycpLFxyXG4gICAgICAgIHJpZ2h0X2Fycm93OiBpY29uKCdyaWdodF9hcnJvd0AyeC5wbmcnKSxcclxuICAgICAgICBzZWFyY2g6IGljb24oJ3NlYXJjaF9zaG9wQDJ4LnBuZycpLFxyXG4gICAgICAgIGFyb3VuZDogaWNvbignYXJvdW5kQDJ4LnBuZycpLFxyXG4gICAgICAgIHNlYXJjaF9wYXNzOiBpY29uKCdzZWFyY2hfcGFzc0AyeC5wbmcnKSxcclxuICAgICAgICBzdGFyOiBpY29uKCdzdGFyQDJ4LnBuZycpLFxyXG4gICAgICAgIGhhbGZfc3RhcjogaWNvbignaGFsZl9zdGFyQDJ4LnBuZycpLFxyXG4gICAgICAgIGRyb3Bkb3duOiBpY29uKCdkcm9wZG93bkAyeC5wbmcnKSxcclxuICAgICAgICB0aWNrOiBpY29uKCd0aWNrQDJ4LnBuZycpLFxyXG4gICAgICAgIGNvbGxlY3Q6IGljb24oJ2NvbGxlY3RAMngucG5nJyksXHJcbiAgICAgICAgY29sbGVjdF91bnNlbGVjdGVkOiBpY29uKCdjb2xsZWN0LXVuc2VsZWN0ZWRAMngucG5nJylcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vY29uZmlnLmpzIiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZydcclxubGV0IHN0b3JhZ2VcclxubGV0IGxvZ2luTW9kdWxlXHJcbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtdGVtcC9kZXRlY3Rpb24nLCBmdW5jdGlvbiAoX193ZWV4X3JlcXVpcmVfXykge1xyXG4gICAgc3RvcmFnZSA9IF9fd2VleF9yZXF1aXJlX18oJ0B3ZWV4LW1vZHVsZS9zdG9yYWdlJylcclxuICAgIGxvZ2luTW9kdWxlID0gX193ZWV4X3JlcXVpcmVfXygnQHdlZXgtbW9kdWxlL2xvZ2luTW9kdWxlJylcclxuICAgIC8vIHRlc3RNb2R1bGUub3BlblVSTDFcclxufSk7XHJcbmV4cG9ydCBmdW5jdGlvbiBzaWduaW4gKHIpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgc3RvcmFnZS5nZXRJdGVtKCd1c2VyJywgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUucmVzdWx0ICE9PSAnZmFpbGVkJykge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShlLmRhdGEpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoKVxyXG4gICAgICAgICAgICAgICAgLy8g6Lez6L2s5Yiw55m75b2V6aG16Z2iXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9naW4gcmVmZXI6Jywgci51cmwpXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ29iamVjdCcgJiYgbG9naW5Nb2R1bGUgJiYgbG9naW5Nb2R1bGUudG9Mb2dpbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvZ2luTW9kdWxlLnRvTG9naW4oJ2xvZ2luJywgci51cmwpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vZGV0ZWN0aW9uLmpzIiwiLypcclxuKiDlkb3lkI3op4TliJnvvJpcclxuKiBhcHBzID0+IHZpZXdzL2FwcHMuanNcclxuKiBhY2NvdW50X3RyYWRpbmdfcmVjb3JkcyA9PiB2aWV3cy9hY2NvdW50LXRyYWRpbmctcmVjb3Jkcy5qc1xyXG4qIGFiY19kZWZfenp6ID0+IHZpZXdzL2FiYy1kZWYtenp6LmpzXHJcbiog5by65Yi26L+Z5qC36Kej5p6QIOacieWIqeS6juWRveWQjeeahOinhOiMg+S4jue7n+S4gO+8jOespuWQiOatpOinhOiMg+eahOWJjeaPkOS4iyB1cmwg5a2X5q615Y+v5Lul55yB55WlXHJcbiog5a+55bqU55qE6Kej5p6Q5pa55rOV77yabWV0aG9kcy5qcyBvcGVuKClcclxuKiAqL1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBpbmRleDogeyB1cmw6ICd3ZWV4LWJvb3RzdHJhcCcgfSxcclxuICAgIGFwcHM6IHsgdGl0bGU6ICfnsr7pgIknIH0sXHJcbiAgICBsaWZlOiB7IHRpdGxlOiAn55Sf5rS7JyB9LFxyXG5cclxuXHJcblxyXG4gICAgbWVyY2hhbnQ6IHsgdGl0bGU6ICfllYbmiLfmn6Xor6InLCBpY29uOiAnbWVyY2hhbnQnIH0sXHJcbiAgICBtZXJjaGFudF9jb2xsZWN0aW9uOiB7IHRpdGxlOiAn5ZWG5oi35pS26JePJyB9LFxyXG4gICAgbWVyY2hhbnRfbmVhcmJ5OiB7IHRpdGxlOiAn6ZmE6L+R5ZWG5oi3JyB9LFxyXG4gICAgbWVyY2hhbnRfYXJvdW5kOiB7IHRpdGxlOiAn5ZGo6L655ZWG5oi3JyB9LFxyXG4gICAgbWVyY2hhbnRfaW50cm9kdWN0aW9uOiB7IHRpdGxlOiAn566A5LuLJyB9LFxyXG5cclxuICAgIG1vcmU6IHsgdGl0bGU6ICfmm7TlpJonLCBpY29uOiAnbW9yZScgfSxcclxuXHJcbiAgICBub3RpY2VzOiB7IHRpdGxlOiAn5YWs5ZGKJyB9LFxyXG4gICAgbm90aWNlc19kZXRhaWw6IHsgdGl0bGU6ICflhazlkYror6bmg4UnIH0sXHJcbiAgICBzaWduaW46IHsgdGl0bGU6ICfnmbvlvZUnIH0sXHJcblxyXG4gICAgcGF5bWVudF9waG9uZTogeyB0aXRsZTogJ+aJi+acuuWFheWAvCcsIGRldGVjdGlvbjogJ3NpZ25pbicgfSxcclxuICAgIHBheW1lbnRfcGV0cm9sZXVtOiB7IHRpdGxlOiAn5Yqg5rK55Y2h5YWF5YC8JyB9LFxyXG4gICAgcGF5bWVudF93YXRlcjogeyB0aXRsZTogJ+awtOi0uee8tOe6sycgfSxcclxuICAgIHBheW1lbnRfZWxlY3RyaWNpdHk6IHsgdGl0bGU6ICfnlLXotLnnvLTnurMnIH0sXHJcbiAgICBwYXltZW50X2dhczogeyB0aXRsZTogJ+eHg+awlOe8tOi0uScgfSxcclxuXHJcbiAgICBkYXNoYm9hcmQ6IHsgdGl0bGU6ICfmiJHnmoTotKbmiLcnLCBkZXRlY3Rpb246ICdzaWduaW4nIH0sXHJcbiAgICBkYXNoYm9hcmRfcmVjaGFyZ2U6IHsgdGl0bGU6ICfotKbmiLflhYXlgLwnIH0sXHJcbiAgICBkYXNoYm9hcmRfdHJhbnNmZXI6IHsgdGl0bGU6ICfotKbmiLfovazotKYnIH0sXHJcbiAgICBkYXNoYm9hcmRfYmFua19jYXJkOiB7IHRpdGxlOiAn6ZO26KGM5Y2hJyB9LFxyXG4gICAgZGFzaGJvYXJkX3RyYWRpbmdfcmVjb3JkczogeyB0aXRsZTogJ+S6pOaYk+iusOW9lScgfSxcclxuICAgIGRhc2hib2FyZF9wYXNzd29yZDogeyB0aXRsZTogJ+WvhueggeeuoeeQhicgfSxcclxuICAgIGRhc2hib2FyZF9jZXJ0aWZpY2F0ZTogeyB0aXRsZTogJ+ivgeS5pueuoeeQhicgfSxcclxuXHJcbiAgICBzdW1wYXlfY2FyZDogeyB0aXRsZTogJ+WVhuebn+WNoScgfSxcclxuICAgIHN1bXBheV9jYXJkX2JhbGFuY2U6IHsgdGl0bGU6ICfljaHkvZnpop3mn6Xor6InIH0sXHJcbiAgICBzdW1wYXlfY2FyZF9wYXNzd29yZDogeyB0aXRsZTogJ+WNoeWvhueggeS/ruaUuScgfSxcclxuICAgIHN1bXBheV9jYXJkX2RldGFpbDogeyB0aXRsZTogJ+WNoeaYjue7huafpeivoicgfSxcclxuXHJcbiAgICB0ZXN0OiB7IHRpdGxlOiAn5Li05pe25rWL6K+V6aG16Z2iJyB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL3JvdXRlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJsaXN0LWl0ZW1cIlxuICBdLFxuICBcImV2ZW50c1wiOiB7XG4gICAgXCJjbGlja1wiOiBmdW5jdGlvbiAoJGV2ZW50KSB7dGhpcy5vcGVuRGV0YWlsKHRoaXMuaWQsJGV2ZW50KX1cbiAgfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwibGVmdFwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImxlZnQtcm93XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImxlZnQtcm93LWxhYmVsXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxhYmVsQmFja2dyb3VuZH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50eXBlfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImxlZnQtcm93LXRpdGxlXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJjb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuY29sb3J9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGV9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJsZWZ0LXN1Yi10aXRsZVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgIFwiY29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmNvbG9yfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnN1YlRpdGxlfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImxpc3QtaXRlbS1kYXRlXCJcbiAgICAgIF0sXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuY29sb3J9XG4gICAgICB9LFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuZGF0ZX1cbiAgICAgIH1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3NyYy9jb21wb25lbnRzL2xpc3QtaXRlbS9saXN0LWl0ZW0tbm90aWNlcy53ZVxuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSA4IDI5IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwibGlzdC1pdGVtXCI6IHtcbiAgICBcImZsZXhXcmFwXCI6IFwid3JhcFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJ3aWR0aFwiOiA3MjYsXG4gICAgXCJoZWlnaHRcIjogMTUwLFxuICAgIFwibWFyZ2luTGVmdFwiOiAyNCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiAyMCxcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI2RiZGJkYlwiLFxuICAgIFwiYm9yZGVyQm90dG9tU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogMVxuICB9LFxuICBcImxlZnRcIjoge1xuICAgIFwiZmxleFdyYXBcIjogXCJ3cmFwXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IDEwXG4gIH0sXG4gIFwibGVmdC1yb3dcIjoge1xuICAgIFwiZmxleFdyYXBcIjogXCJ3cmFwXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgfSxcbiAgXCJsZWZ0LXJvdy1sYWJlbFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IDQsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDQsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiAxMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiAxMCxcbiAgICBcImJvcmRlclJhZGl1c1wiOiA0LFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJmb250U2l6ZVwiOiAyOFxuICB9LFxuICBcImxlZnQtcm93LXRpdGxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IDMyLFxuICAgIFwiZm9udFdlaWdodFwiOiBcImJvbGRcIlxuICB9LFxuICBcImxlZnQtc3ViLXRpdGxlXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiAyMCxcbiAgICBcImZvbnRTaXplXCI6IDI4XG4gIH0sXG4gIFwibGlzdC1pdGVtLWRhdGVcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogMjAsXG4gICAgXCJmb250U2l6ZVwiOiAyOFxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9zcmMvY29tcG9uZW50cy9saXN0LWl0ZW0vbGlzdC1pdGVtLW5vdGljZXMud2Vcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gOCAyOSIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJsaXN0LWl0ZW1cIiBvbmNsaWNrPVwib3BlbkRldGFpbChpZClcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1yb3dcIj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwibGVmdC1yb3ctbGFiZWxcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHt7bGFiZWxCYWNrZ3JvdW5kfX1cIj57e3R5cGV9fTwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwibGVmdC1yb3ctdGl0bGVcIiBzdHlsZT1cImNvbG9yOiB7e2NvbG9yfX1cIj57e3RpdGxlfX08L3RleHQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImxlZnQtc3ViLXRpdGxlXCIgc3R5bGU9XCJjb2xvcjoge3tjb2xvcn19XCI+e3tzdWJUaXRsZX19PC90ZXh0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwibGlzdC1pdGVtLWRhdGVcIiBzdHlsZT1cImNvbG9yOiB7e2NvbG9yfX1cIj57e2RhdGV9fTwvdGV4dD5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c3R5bGUgc2NvcGVkPlxyXG4gICAgLmxpc3QtaXRlbSB7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwOyBmbGV4LWRpcmVjdGlvbjogcm93OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDcyNnB4OyBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2RiZGJkYjsgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7IGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxuICAgIH1cclxuICAgIC5sZWZ0IHtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAubGVmdC1yb3d7IGZsZXgtd3JhcDogd3JhcDsgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxyXG4gICAgLmxlZnQtcm93LWxhYmVsIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNHB4OyBwYWRkaW5nLWJvdHRvbTogNHB4OyBwYWRkaW5nLWxlZnQ6IDEwcHg7IHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmOyBmb250LXNpemU6IDI4cHg7XHJcbiAgICB9XHJcbiAgICAubGVmdC1yb3ctdGl0bGUgeyBmb250LXNpemU6IDMycHg7IGZvbnQtd2VpZ2h0OiBib2xkOyB9XHJcbiAgICAubGVmdC1zdWItdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgfVxyXG4gICAgLmxpc3QtaXRlbS1kYXRlIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0ICogYXMgbWV0aG9kcyBmcm9tICcuLi8uLi9jb21tb24vbWV0aG9kcydcclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBkYXRhICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGRhdGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgaWQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJycsXHJcbiAgICAgICAgICAgICAgICBzdWJUaXRsZTogJycsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICcnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcnLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxDb2xvcjogJycsXHJcbiAgICAgICAgICAgICAgICBsYWJlbEJhY2tncm91bmQ6ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZWQgKCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpXHJcbiAgICAgICAgICAgIHRoaXMuJG9uKCdpZ25vcmVOb3RpY2VzJywgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAgICAgb3BlbkRldGFpbCAoaWQsIGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuKCdub3RpY2VzX2RldGFpbD9pZD0nICsgaWQpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09ICflt7Lor7snKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xvciA9ICcjOTk5JztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmVsQmFja2dyb3VuZCA9ICcjYjNiM2IzJ1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZSA9IHRoaXMudHlwZVxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICflhazlkYonOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYWJlbEJhY2tncm91bmQgPSAnIzVhYzZmZidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICfmtLvliqgnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYWJlbEJhY2tncm91bmQgPSAnI2ZmYWQzOCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYWJlbEJhY2tncm91bmQgPSAnIzVhYzZmZic7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgbWV0aG9kcylcclxuICAgIH1cclxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvbGlzdC1pdGVtL2xpc3QtaXRlbS1ub3RpY2VzLndlPzE1MTJmMDMyIl0sInNvdXJjZVJvb3QiOiIifQ==