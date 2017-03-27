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

	var __weex_template__ = __webpack_require__(183)
	var __weex_style__ = __webpack_require__(184)
	var __weex_script__ = __webpack_require__(185)
	
	__weex_define__('@weex-component/64f818237c05b00056270fe134334f83', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})
	
	__weex_bootstrap__('@weex-component/64f818237c05b00056270fe134334f83',undefined,undefined)

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
/***/ function(module, exports) {

	import { getBaseURL } from './api';
	import * as detection from './detection';
	import route from './route';
	/**
	 * 路由转链接
	 * @param {string} routeName
	 * @returns {string}
	 */
	export function routeToUrl(routeName) {
	    var params = '';
	    if (/\?/.test(routeName)) {
	        params = routeName.split('?')[1];
	        routeName = routeName.split('?')[0];
	    }
	    let r = route[routeName];
	    let compileUrl;
	    if (!r) {
	        // TODO 跳转到错误页
	        console.log('error: 路由不存在，请在router.js中配置对应的路由');
	    }
	    compileUrl = r.url ? r.url : 'views/' + routeName.split('_').join('-');
	    let url = getBaseURL.call(this, true) + compileUrl + '.js';
	    // 允许添加参数 例如 merchant_around?a=1&b=2 处理规则和浏览器的querystring一致
	    if (params) {
	        if (typeof window === 'object') {
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
	export function open(routeName, o) {
	    let r = route[routeName];
	    let url = routeToUrl.call(this, routeName);
	    if (r.detection) {
	        detection[r.detection]({
	            routeName: routeName,
	            url: url
	        }).then(() => {
	            this.$openURL(url);
	        }, () => {
	            if (o && typeof o.failCallback === 'function') {
	                o.failCallback.call(this, routeName);
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
	export function params(name, url) {
	    let result = {};
	    if (!url) {
	        url = this.$getConfig().bundleUrl;
	    }
	    if (url.indexOf("?") !== -1) {
	        let str = url.substr(url.indexOf("?") + 1);
	        let p = str.split("&");
	        p.forEach(v => {
	            let temp = v.split("=");
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
	export function realHeight(height) {
	    let w = this.$getConfig().env.deviceWidth;
	    let h = this.$getConfig().env.deviceHeight;
	    // 1332
	    return w / 750 * height;
	}

/***/ },
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */
/***/ function(module, exports) {

	// const assetsURL = 'file:///sdcard/img/'
	const assetsRoot = 'https://kooofly.github.io/kostand-ttf/ttf/assets/';
	
	function icon(v) {
	    return assetsRoot + 'icon/' + v;
	}
	export default {
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
	    icon: {
	        map: icon('map@2x.png'),
	        map_life: icon('map_life@2x.png'),
	        notice: icon('notice@2x.png'),
	        scan: icon('scan@2x.png'),
	        code: icon('code@2x.png'),
	        transaction_record: icon('transaction_record@2x.png'),
	        search: icon('search@2x.png'),
	        back: icon('back@2x.png'),
	        right_arrow: icon('right_arrow@2x.png'),
	        search: icon('search_shop@2x.png'),
	        around: icon('around@2x.png'),
	        search_pass: icon('search_pass@2x.png'),
	        star: icon('star@2x.png'),
	        half_star: icon('half_star@2x.png'),
	        dropdown: icon('dropdown@2x.png'),
	        tick: icon('tick@2x.png'),
	        collect: icon('collect@2x.png'),
	        collect_unselected: icon('collect-unselected@2x.png')
	    }
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
	  "type": "web",
	  "attr": {
	    "ref": "webview",
	    ":src": "url",
	    "@pagestart": "start",
	    "@pagefinish": "finish",
	    "@error": "error"
	  },
	  "classList": [
	    "webview"
	  ]
	}

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _assign = __webpack_require__(8);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _config = __webpack_require__(49);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _methods = __webpack_require__(45);
	
	var methods = _interopRequireWildcard(_methods);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: {
	        nav: {
	            title: '消息详情',
	            color: '#4d4d4d',
	            backgroundColor: '#fff',
	            leftItemSrc: _config2.default.icon.back,
	            rightItemMark: 5,
	            borderBottomWidth: 1
	        }
	    },
	    created: function created() {
	        console.log(this.params('id'));
	    },
	
	    methods: (0, _assign2.default)({}, methods)
	};}
	/* generated by weex-loader */


/***/ },
/* 58 */,
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
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */
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
/* 82 */
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
/* 83 */
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
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(81)
	var __weex_style__ = __webpack_require__(82)
	var __weex_script__ = __webpack_require__(83)
	
	__weex_define__('@weex-component/navbar', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 85 */
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
/* 86 */
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
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	__webpack_require__(84);
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
/* 88 */,
/* 89 */,
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
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(84)
	var __weex_template__ = __webpack_require__(85)
	var __weex_style__ = __webpack_require__(86)
	var __weex_script__ = __webpack_require__(87)
	
	__weex_define__('@weex-component/navpage', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 148 */,
/* 149 */,
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
/* 183 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "navpage",
	  "classList": [
	    "container"
	  ],
	  "attr": {
	    "leftItemSrc": function () {return this.nav.leftItemSrc},
	    "title": function () {return this.nav.title},
	    "rightItemTitle": function () {return this.nav.rightItemTitle},
	    "titleColor": function () {return this.nav.color},
	    "borderBottomWidth": function () {return this.nav.borderBottomWidth},
	    "backgroundColor": function () {return this.nav.backgroundColor}
	  },
	  "children": [
	    {
	      "type": "web",
	      "shown": function () {return this.url},
	      "classList": [
	        "webview"
	      ],
	      "style": {
	        "height": function () {return this.webviewHeight}
	      },
	      "id": "webview",
	      "attr": {
	        "src": function () {return this.url}
	      },
	      "events": {
	        "error": "pageerror",
	        "pagestart": "pagestart",
	        "pagefinish": "pagefinish"
	      }
	    }
	  ]
	}

/***/ },
/* 184 */
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "backgroundColor": "#f2f2f2"
	  },
	  "webview": {
	    "width": 720,
	    "marginLeft": 15,
	    "marginTop": 15,
	    "borderRadius": 4,
	    "backgroundColor": "#ffffff"
	  }
	}

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _assign = __webpack_require__(8);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _weexNat = __webpack_require__(186);
	
	var _weexNat2 = _interopRequireDefault(_weexNat);
	
	var _config = __webpack_require__(49);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _methods = __webpack_require__(45);
	
	var methods = _interopRequireWildcard(_methods);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(147);
	__webpack_require__(211);
	
	var modal = __weex_require__('@weex-module/modal');
	var navigator = __weex_require__('@weex-module/navigator');
	var webview = __weex_require__('@weex-module/webview');
	
	exports.default = {
	    data: {
	        nav: {
	            title: '消息详情',
	            color: '#4d4d4d',
	            backgroundColor: '#fff',
	            leftItemSrc: _config2.default.icon.back,
	            rightItemMark: 5,
	            borderBottomWidth: 1
	        },
	        webviewHeight: 1100,
	        url: ''
	    },
	    created: function created() {
	        this.url = _config2.default.scriptRoot + 'html/detail.html?id=' + this.params('id');
	
	        this.$on('naviBar.leftItem.click', function () {
	            var params = {
	                'animated': 'true'
	            };
	            navigator.pop(params, function () {});
	        });
	    },
	
	    methods: (0, _assign2.default)({
	        pagefinish: function pagefinish(e) {
	
	            console.log(e);
	        },
	        pagestart: function pagestart(e) {
	            console.log(e);
	        },
	        pageerror: function pageerror(e) {
	            modal.alert({
	                message: 'error'
	            });
	            console.log(e);
	        }
	    }, methods)
	};}
	/* generated by weex-loader */


/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Nat = {};
	
	if (typeof __weex_define__ === 'function') {
		var camera = __webpack_require__(187);
		var communication = __webpack_require__(188);
		var geolocation = __webpack_require__(190);
		var media = __webpack_require__(191);
		var modal = __webpack_require__(195);
		var recorder = __webpack_require__(196);
		var network = __webpack_require__(197);
		var sensor = __webpack_require__(200);
		var device = __webpack_require__(203);
		var navigator = __webpack_require__(210);
	
		// camera
		if (camera) {
			Nat.camera = camera;
		}
	
		// communication
		if (communication) {
			Nat.call = communication.call;
			Nat.sms = communication.sms;
			Nat.mail = communication.mail;
		}
	
		// geolocation
		if (geolocation) {
			Nat.geolocation = geolocation;
		}
	
		// media
		if (media) {
			Nat.audio = media.audio;
			Nat.image = media.image;
			Nat.video = media.video;
		}
	
		// recorder
		if (recorder) {
			Nat.recorder = recorder;
		}
	
		// modal
		if (modal) {
			Nat.alert = modal.alert;
			Nat.confirm = modal.confirm;
			Nat.prompt = modal.prompt;
			Nat.toast = modal.toast;
		}
	
		// network
		if (network) {
			Nat.fetch = network.stream.fetch;
			Nat.download = network.transfer.download;
			Nat.upload = network.transfer.upload;
			Nat.websocket = network.websocket;
		}
	
		// sensor
		if (sensor) {
			Nat.accelerometer = sensor.accelerometer;
			Nat.compass = sensor.compass;
		}
	
		// device
		if (device) {
			Nat.device = device.base;
			Nat.battery = device.battery;
			Nat.network = device.network;
			Nat.screen = device.screen;
			Nat.vibrate = device.vibration.vibrate;
			Nat.volume = device.volume;
		}
	
		// navigator
		if (navigator) {
			Nat.navigator = navigator;
		}
	}
	
	module.exports = Nat;

/***/ },
/* 187 */
/***/ function(module, exports) {

	'use strict';
	
	var camera = void 0;
	
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		camera = __weex_require__('@weex-module/nat/camera');
	});
	
	// launch
	
	var launch = function launch(opts) {
		camera.launch();
	};
	
	// captureImage (snap)
	
	var captureImage = function captureImage(opts, cb) {
		opts = opts || {};
	
		return new Promise(function (resolve, reject) {
			camera.captureImage({
				width: opts.width || null,
				height: opts.height || null
			}, function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	};
	
	// captureVideo (record)
	
	var captureVideo = function captureVideo(opts, cb) {
		opts = opts || {};
	
		return new Promise(function (resolve, reject) {
			camera.captureVideo({
				width: opts.width || null,
				height: opts.height || null
			}, function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	};
	
	module.exports = {
		launch: launch,
		captureImage: captureImage,
		captureVideo: captureVideo
	};

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _utils = __webpack_require__(189);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var communication = void 0;
	
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		communication = __weex_require__('@weex-module/nat/communication');
	});
	
	// call
	
	var call = function call(to, cb) {
		return new Promise(function (resolve, reject) {
			if (!to) {
				reject({
					code: 101040,
					message: 'CALL_MISSING_ARGUMENT'
				});
				return;
			} else if (!_utils2.default.isPhone(to)) {
				reject({
					code: 101050,
					message: 'CALL_INVALID_ARGUMENT',
					details: 'Invalid phone number: ' + to
				});
				return;
			}
	
			communication.call(to, function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve();
					if (typeof cb === 'function') cb(null);
				}
			});
		});
	};
	
	// sms
	
	var sms = function sms(to, text, cb) {
		text = text || '';
	
		if (typeof text === 'function') {
			cb = text;
			text = '';
		}
	
		return new Promise(function (resolve, reject) {
			if (!to) {
				reject({
					code: 102040,
					message: 'SMS_MISSING_ARGUMENT'
				});
				return;
			}
	
			if (typeof to === 'string') {
				to = [to];
			}
	
			for (var i = 0; i < to.length; i++) {
				if (!_utils2.default.isPhone(to[i])) {
					reject({
						code: 102050,
						message: 'SMS_INVALID_ARGUMENT'
					});
					return;
				}
			}
	
			communication.sms(to, text, function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve();
					if (typeof cb === 'function') cb(null);
				}
			});
		});
	};
	
	// mail
	
	var mail = function mail(to, opts, cb) {
		opts = opts || {};
	
		if (typeof opts === 'function') {
			cb = opts;
			opts = {};
		}
	
		return new Promise(function (resolve, reject) {
			if (!to) {
				reject({
					code: 103040,
					message: 'MAIL_MISSING_ARGUMENT'
				});
				return;
			}
	
			if (typeof to === 'string') {
				to = [to];
			}
	
			for (var i = 0; i < to.length; i++) {
				if (!_utils2.default.isEmail(to[i])) {
					reject({
						code: 103050,
						message: 'MAIL_INVALID_ARGUMENT',
						details: 'Invalid emaill address: ' + to[i]
					});
					return;
				}
			}
	
			communication.mail(to, {
				subject: opts.subject || '',
				body: opts.body || '',
				attachments: opts.attachments || null
			}, function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve();
					if (typeof cb === 'function') cb(null);
				}
			});
		});
	};
	
	module.exports = {
		call: call,
		sms: sms,
		mail: mail
	};

/***/ },
/* 189 */
/***/ function(module, exports) {

	'use strict';
	
	var isFn = function isFn(fn) {
		return typeof fn === 'function';
	};
	
	var isPhone = function isPhone(str) {
		if (typeof str === 'number') {
			str = str.toString();
		} else if (typeof str !== 'string') {
			return false;
		}
	
		return !!str.match(/^\+?[\d\-\#\*\.\(\)]+$/);
	};
	
	var isEmail = function isEmail(str) {
		if (typeof str !== 'string') {
			return false;
		}
	
		return !!str.match(/^(\w)+([\.\-\_]\w+)*@(\w)+(([\.\-\_]\w+)+)$/);
	};
	
	module.exports = {
		isFn: isFn,
		isPhone: isPhone,
		isEmail: isEmail
	};

/***/ },
/* 190 */
/***/ function(module, exports) {

	'use strict';
	
	var geolocation = void 0;
	
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		geolocation = __weex_require__('@weex-module/nat/geolocation');
	});
	
	// get
	var get = function get(opts, cb) {
		if (typeof opts === 'function') {
			cb = opts;
			opts = {};
		}
	
		return new Promise(function (resolve, reject) {
			geolocation.get(function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	};
	
	// watch
	
	var watch = function watch(opts, cb) {
		if (typeof opts === 'function') {
			cb = opts;
			opts = {};
		}
	
		return new Promise(function (resolve, reject) {
			geolocation.watch({
				maximumAge: opts.maximumAge || 0,
				timeout: opts.timeout || 10000,
				model: opts.model || 'highAccuracy'
			}, function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	};
	
	// clear watch
	
	var clearWatch = function clearWatch(cb) {
		return new Promise(function (resolve, reject) {
			geolocation.clearWatch(function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	};
	
	module.exports = {
		get: get,
		watch: watch,
		clearWatch: clearWatch
	};

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _audio = __webpack_require__(192);
	
	var _audio2 = _interopRequireDefault(_audio);
	
	var _image = __webpack_require__(193);
	
	var _image2 = _interopRequireDefault(_image);
	
	var _video = __webpack_require__(194);
	
	var _video2 = _interopRequireDefault(_video);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
		audio: _audio2.default,
		image: _image2.default,
		video: _video2.default
	};

/***/ },
/* 192 */
/***/ function(module, exports) {

	'use strict';
	
	var audio = void 0;
	
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		audio = __weex_require__('@weex-module/nat/media/audio');
	});
	
	// play
	var play = function play(path, cb) {
		return new Promise(function (resolve, reject) {
			if (!path) {
				reject({
					code: 110040,
					message: 'MEDIA_MISSING_ARGUMENT'
				});
				return;
			}
	
			audio.play(path, function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve();
					if (typeof cb === 'function') cb(null);
				}
			});
		});
	};
	
	// pause
	
	var pause = function pause(cb) {
		return new Promise(function (resolve, reject) {
			audio.pause(function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve();
					if (typeof cb === 'function') cb(null);
				}
			});
		});
	};
	
	// stop
	
	var stop = function stop(cb) {
		return new Promise(function (resolve, reject) {
			audio.stop(function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve();
					if (typeof cb === 'function') cb(null);
				}
			});
		});
	};
	
	module.exports = {
		play: play,
		pause: pause,
		stop: stop
	};

/***/ },
/* 193 */
/***/ function(module, exports) {

	'use strict';
	
	var image = void 0;
	
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		image = __weex_require__('@weex-module/nat/media/image');
	});
	
	// pick
	var pick = function pick(opts, cb) {
		opts = opts || {};
	
		if (typeof opts === 'function') {
			cb = opts;
			opts = {};
		}
	
		opts.limit = opts.limit || 1;
		opts.quality = opts.quality && opts.quality < 100 ? parseInt(opts.quality) : 100;
	
		return new Promise(function (resolve, reject) {
			image.pick({
				limit: opts.limit,
				quality: opts.quality,
				width: opts.width || null,
				height: opts.height || null
			}, function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	};
	
	// preview
	
	var preview = function preview(files, opts, cb) {
		opts = opts || {};
	
		if (typeof opts === 'function') {
			cb = opts;
			opts = {};
		}
	
		return new Promise(function (resolve, reject) {
			if (!files) {
				reject({
					code: 110040,
					message: 'MEDIA_MISSING_ARGUMENT'
				});
				return;
			}
	
			if (typeof files === 'string') {
				files = [files];
			}
	
			// style
			if (['dots', 'label', 'none'].indexOf(opts.style) < 0) {
				opts.style = 'dots';
			}
	
			if (opts.style === 'dots') {
				if (files.length > 9) {
					opts.style = 'label';
				} else if (files.length === 1) {
					opts.style = 'none';
				}
			}
	
			image.preview(files, {
				current: opts.current,
				style: opts.style
			}, function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve();
					if (typeof cb === 'function') cb(null);
				}
			});
		});
	};
	
	// info
	
	var info = function info(path, cb) {
		return new Promise(function (resolve, reject) {
			if (!path) {
				reject({
					code: 110040,
					message: 'MEDIA_MISSING_ARGUMENT'
				});
				return;
			}
	
			image.info(path, function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	};
	
	// exif
	
	var exif = function exif(path, cb) {
		return new Promise(function (resolve, reject) {
			if (!path) {
				reject({
					code: 110040,
					message: 'MEDIA_MISSING_ARGUMENT'
				});
				return;
			}
	
			image.exif(path, function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	};
	
	module.exports = {
		pick: pick,
		preview: preview,
		info: info,
		exif: exif
	};

/***/ },
/* 194 */
/***/ function(module, exports) {

	'use strict';
	
	var video = void 0;
	
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		video = __weex_require__('@weex-module/nat/media/video');
	});
	
	// play
	var play = function play(path, cb) {
		return new Promise(function (resolve, reject) {
			if (!path) {
				reject({
					code: 110040,
					message: 'MEDIA_MISSING_ARGUMENT'
				});
				return;
			}
	
			video.play(path, function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve();
					if (typeof cb === 'function') cb(null);
				}
			});
		});
	};
	
	// pause
	
	var pause = function pause(cb) {
		return new Promise(function (resolve, reject) {
			video.pause(function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve();
					if (typeof cb === 'function') cb(null);
				}
			});
		});
	};
	
	// stop
	
	var stop = function stop(cb) {
		return new Promise(function (resolve, reject) {
			video.stop(function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve();
					if (typeof cb === 'function') cb(null);
				}
			});
		});
	};
	
	module.exports = {
		play: play,
		pause: pause,
		stop: stop
	};

/***/ },
/* 195 */
/***/ function(module, exports) {

	'use strict';
	
	var modal = void 0;
	
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		modal = __weex_require__('@weex-module/nat/modal');
	});
	
	// alert
	
	var alert = function alert(opts, cb) {
		return new Promise(function (resolve, reject) {
			if (typeof opts === 'string') {
				opts = {
					message: opts
				};
			}
	
			opts = opts || {};
	
			modal.alert({
				title: opts.title || '',
				message: opts.message || '',
				okButton: opts.okButton || 'OK'
			}, function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve();
					if (typeof cb === 'function') cb(null);
				}
			});
		});
	};
	
	// confirm
	
	var confirm = function confirm(opts, cb) {
		return new Promise(function (resolve, reject) {
			if (typeof opts === 'string') {
				opts = {
					message: opts
				};
			}
	
			opts = opts || {};
	
			modal.confirm({
				title: opts.title || '',
				message: opts.message || '',
				okButton: opts.okButton || 'OK',
				cancelButton: opts.cancelButton || 'Cancel'
			}, function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	};
	
	// prompt
	
	var prompt = function prompt(opts, cb) {
		return new Promise(function (resolve, reject) {
			if (typeof opts === 'string') {
				opts = {
					message: opts
				};
			}
	
			opts = opts || {};
	
			modal.prompt({
				title: opts.title || '',
				message: opts.message || '',
				text: opts.text || '',
				okButton: opts.okButton || 'OK',
				cancelButton: opts.cancelButton || 'Cancel'
			}, function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	};
	
	// toast
	
	var toast = function toast(opts, cb) {
		return new Promise(function (resolve, reject) {
			if (typeof opts === 'string') {
				opts = {
					message: opts
				};
			}
	
			opts = opts || {};
	
			// position
			if (['top', 'middle', 'bottom'].indexOf(opts.position) < 0) {
				opts.position = 'bottom';
			}
	
			modal.toast({
				message: opts.message || '',
				duration: opts.duration || 3000,
				position: opts.position
			}, function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve();
					if (typeof cb === 'function') cb(null);
				}
			});
		});
	};
	
	module.exports = {
		alert: alert,
		confirm: confirm,
		prompt: prompt,
		toast: toast
	};

/***/ },
/* 196 */
/***/ function(module, exports) {

	'use strict';
	
	var recorder = void 0;
	
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		recorder = __weex_require__('@weex-module/nat/recorder');
	});
	
	// start
	var start = function start(opts, cb) {
		opts = opts || {};
	
		if (typeof opts === 'function') {
			cb = opts;
			opts = {};
		}
	
		return new Promise(function (resolve, reject) {
			// channel
			if (['stereo', 'mono'].indexOf(opts.channel) < 0) {
				opts.channel = 'stereo';
			}
	
			// quality
			if (['low', 'standard', 'high'].indexOf(opts.quality) < 0) {
				opts.quality = 'standard';
			}
	
			recorder.start({
				channel: opts.channel,
				quality: opts.quality
			}, function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve();
					if (typeof cb === 'function') cb(null);
				}
			});
		});
	};
	
	// pause
	
	var pause = function pause(cb) {
		return new Promise(function (resolve, reject) {
			recorder.pause(function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve();
					if (typeof cb === 'function') cb(null);
				}
			});
		});
	};
	
	// stop
	
	var stop = function stop(cb) {
		return new Promise(function (resolve, reject) {
			recorder.stop(function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	};
	
	module.exports = {
		start: start,
		pause: pause,
		stop: stop
	};

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _stream = __webpack_require__(198);
	
	var _stream2 = _interopRequireDefault(_stream);
	
	var _transfer = __webpack_require__(199);
	
	var _transfer2 = _interopRequireDefault(_transfer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import websocket from './websocket'
	// import info from './info'
	
	module.exports = {
		stream: _stream2.default,
		transfer: _transfer2.default
	};

/***/ },
/* 198 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var stream = void 0;
	
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		stream = __weex_require__('@weex-module/nat/network/stream');
	});
	
	// fetch
	
	var fetch = function fetch(url, opts, cb) {
		return new Promise(function (resolve, reject) {
			if (!url) {
				reject({
					code: 151040,
					message: 'FETCH_MISSING_ARGUMENT'
				});
				return;
			}
	
			if ((typeof url === 'undefined' ? 'undefined' : _typeof(url)) === 'object') {
				cb = opts;
				opts = url;
			} else if (typeof opts === 'function') {
				cb = opts;
				opts = {
					url: url
				};
			} else {
				opts = opts || {};
				opts.url = url;
			}
	
			// headers
			opts.headers = opts.headers || {};
	
			if (opts.headers['Content-Type'] && /application\/json/.test(opts.headers['Content-Type'])) {
				opts.type = 'json';
			}
	
			// method
			opts.method = opts.method ? opts.method.toUpperCase() : 'GET';
	
			if (['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD'].indexOf(opts.method) < 0) {
				reject({
					code: 151050,
					message: 'FETCH_INVALID_ARGUMENT',
					details: 'Unsupported request method'
				});
				return;
			}
	
			// type
			opts.type = opts.type ? opts.type.toLowerCase() : 'json';
	
			if (['json', 'jsonp', 'text'].indexOf(opts.type) < 0) {
				reject({
					code: 151050,
					message: 'FETCH_INVALID_ARGUMENT',
					details: 'Unsupported request type'
				});
				return;
			}
	
			// body
			if (_typeof(opts.body) === 'object') {
				if (opts.type === 'json' && opts.method !== 'GET') {
					opts.body = JSON.stringify(opts.body);
				} else {
					reject({
						code: 151050,
						message: 'FETCH_INVALID_ARGUMENT',
						details: 'Request body must be a string'
					});
					return;
				}
			}
	
			stream.fetch({
				method: opts.method,
				url: opts.url,
				headers: opts.headers,
				type: opts.type,
				body: opts.body
			}, function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					if (ret.ok && typeof ret.data === 'string') {
						switch (opts.type) {
							case 'json':
								ret.data = JSON.parse(ret.data);
								break;
	
							case 'jsonp':
								{
									var matched = ret.data.match(/^\s*?.*\((.*)\)\s*?$/);
									if (matched) {
										ret.data = JSON.parse(matched[1]);
									}
									break;
								}
						}
					}
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	};
	
	module.exports = {
		fetch: fetch
	};

/***/ },
/* 199 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var transfer = void 0;
	
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		transfer = __weex_require__('@weex-module/nat/network/transfer');
	});
	
	// download
	
	var download = function download(url, opts, hooks, cb) {
		return new Promise(function (resolve, reject) {
			if (!url) {
				reject({
					code: 151040,
					message: 'DOWNLOAD_MISSING_ARGUMENT'
				});
				return;
			}
	
			if (typeof opts === 'function') {
				cb = opts;
			} else if ((typeof opts === 'undefined' ? 'undefined' : _typeof(opts)) === 'object') {
				if (typeof hooks === 'function') {
					cb = hooks;
				}
				// todo
				if (typeof opts.onProgress === 'function') {
					hooks = opts;
				}
			}
	
			if ((typeof url === 'undefined' ? 'undefined' : _typeof(url)) === 'object') {
				opts = url;
			} else {
				opts = opts || {};
				opts.url = url;
			}
	
			// hooks
			hooks = hooks || {};
	
			transfer.download({
				url: opts.url,
				headers: opts.headers || {},
				target: opts.target
			}, function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else if (ret.progress) {
					if (typeof hooks.onProgress === 'function') {
						hooks.onProgress(ret.progress);
					}
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	};
	
	// upload
	
	var upload = function upload(url, opts, hooks, cb) {
		return new Promise(function (resolve, reject) {
			if (!url) {
				reject({
					code: 151040,
					message: 'UPLOAD_MISSING_ARGUMENT'
				});
				return;
			}
	
			if (typeof opts === 'function') {
				cb = opts;
			} else if ((typeof opts === 'undefined' ? 'undefined' : _typeof(opts)) === 'object') {
				if (typeof hooks === 'function') {
					cb = hooks;
				}
				// todo
				if (typeof opts.onProgress === 'function') {
					hooks = opts;
				}
			}
	
			if ((typeof url === 'undefined' ? 'undefined' : _typeof(url)) === 'object') {
				opts = url;
			} else {
				opts = opts || {};
				opts.url = url;
			}
	
			// hooks
			hooks = hooks || {};
	
			// path
			if (!opts.path) {
				reject({
					code: 151040,
					message: 'UPLOAD_MISSING_ARGUMENT'
				});
				return;
			}
	
			// method
			opts.method = opts.method ? opts.method.toUpperCase() : 'POST';
	
			if (['POST', 'PUT', 'PATCH'].indexOf(opts.method) < 0) {
				reject({
					code: 151050,
					message: 'UPLOAD_INVALID_ARGUMENT',
					details: 'Unsupported request method'
				});
				return;
			}
	
			transfer.upload({
				url: opts.url,
				method: opts.method,
				path: opts.path,
				name: opts.name,
				headers: opts.headers || {},
				formData: opts.formData || {},
				mimeType: opts.mimeType
			}, function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else if (ret.progress) {
					if (typeof hooks.onProgress === 'function') {
						hooks.onProgress(ret.progress);
					}
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	};
	
	module.exports = {
		download: download,
		upload: upload
	};

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _accelerometer = __webpack_require__(201);
	
	var _accelerometer2 = _interopRequireDefault(_accelerometer);
	
	var _compass = __webpack_require__(202);
	
	var _compass2 = _interopRequireDefault(_compass);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
		accelerometer: _accelerometer2.default,
		compass: _compass2.default
	};

/***/ },
/* 201 */
/***/ function(module, exports) {

	'use strict';
	
	var accelerometer = void 0;
	
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		accelerometer = __weex_require__('@weex-module/nat/sensor/accelerometer');
	});
	
	// get
	var get = function get(opts, cb) {
		if (typeof opts === 'function') {
			cb = opts;
			opts = {};
		}
	
		return new Promise(function (resolve, reject) {
			accelerometer.get(function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	};
	
	// watch
	
	var watch = function watch(opts, cb) {
		if (typeof opts === 'function') {
			cb = opts;
			opts = {};
		}
	
		return new Promise(function (resolve, reject) {
			accelerometer.watch({
				interval: opts.interval || 100
			}, function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	};
	
	// clear watch
	
	var clearWatch = function clearWatch(cb) {
		return new Promise(function (resolve, reject) {
			accelerometer.clearWatch(function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	};
	
	module.exports = {
		get: get,
		watch: watch,
		clearWatch: clearWatch
	};

/***/ },
/* 202 */
/***/ function(module, exports) {

	'use strict';
	
	var compass = void 0;
	
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		compass = __weex_require__('@weex-module/nat/sensor/compass');
	});
	
	// get
	var get = function get(opts, cb) {
		if (typeof opts === 'function') {
			cb = opts;
			opts = {};
		}
	
		return new Promise(function (resolve, reject) {
			compass.get(function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	};
	
	// watch
	
	var watch = function watch(opts, cb) {
		if (typeof opts === 'function') {
			cb = opts;
			opts = {};
		}
	
		return new Promise(function (resolve, reject) {
			compass.watch({
				interval: opts.interval || 100
			}, function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	};
	
	// clear watch
	
	var clearWatch = function clearWatch(cb) {
		return new Promise(function (resolve, reject) {
			compass.clearWatch(function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	};
	
	module.exports = {
		get: get,
		watch: watch,
		clearWatch: clearWatch
	};

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _base = __webpack_require__(204);
	
	var _base2 = _interopRequireDefault(_base);
	
	var _battery = __webpack_require__(205);
	
	var _battery2 = _interopRequireDefault(_battery);
	
	var _network = __webpack_require__(206);
	
	var _network2 = _interopRequireDefault(_network);
	
	var _screen = __webpack_require__(207);
	
	var _screen2 = _interopRequireDefault(_screen);
	
	var _vibration = __webpack_require__(208);
	
	var _vibration2 = _interopRequireDefault(_vibration);
	
	var _volume = __webpack_require__(209);
	
	var _volume2 = _interopRequireDefault(_volume);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
		base: _base2.default,
		battery: _battery2.default,
		network: _network2.default,
		screen: _screen2.default,
		vibration: _vibration2.default,
		volume: _volume2.default
	};

/***/ },
/* 204 */
/***/ function(module, exports) {

	'use strict';
	
	var device = void 0;
	
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		device = __weex_require__('@weex-module/nat/device/base');
	});
	
	// info
	
	var info = function info(cb) {
		return new Promise(function (resolve, reject) {
			device.info(function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	};
	
	module.exports = {
		info: info
	};

/***/ },
/* 205 */
/***/ function(module, exports) {

	'use strict';
	
	var battery = void 0;
	
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		battery = __weex_require__('@weex-module/nat/device/battery');
	});
	
	// status
	
	var status = function status(cb) {
		return new Promise(function (resolve, reject) {
			battery.status(function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	};
	
	module.exports = {
		status: status
	};

/***/ },
/* 206 */
/***/ function(module, exports) {

	'use strict';
	
	var network = void 0;
	
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		network = __weex_require__('@weex-module/nat/device/network');
	});
	
	// status
	
	var status = function status(cb) {
		return new Promise(function (resolve, reject) {
			network.status(function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	};
	
	module.exports = {
		status: status
	};

/***/ },
/* 207 */
/***/ function(module, exports) {

	'use strict';
	
	var screen = void 0;
	
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		screen = __weex_require__('@weex-module/nat/device/screen');
	});
	
	// brightness
	
	var brightness = {
		get: function get(cb) {
			return new Promise(function (resolve, reject) {
				screen.getBrightness(function (ret) {
					ret = ret || {};
	
					if (ret.error) {
						reject(ret.error);
						if (typeof cb === 'function') cb(ret.error, null);
					} else {
						resolve(ret);
						if (typeof cb === 'function') cb(null, ret);
					}
				});
			});
		},
	
		set: function set(brightness, cb) {
			return new Promise(function (resolve, reject) {
				screen.setBrightness(brightness, function (ret) {
					ret = ret || {};
	
					if (ret.error) {
						reject(ret.error);
						if (typeof cb === 'function') cb(ret.error, null);
					} else {
						resolve(ret);
						if (typeof cb === 'function') cb(null, ret);
					}
				});
			});
		}
	};
	
	// orientation
	
	var orientation = {
		status: function status(cb) {
			return new Promise(function (resolve, reject) {
				screen.getOrientation(function (ret) {
					ret = ret || {};
	
					if (ret.error) {
						reject(ret.error);
						if (typeof cb === 'function') cb(ret.error, null);
					} else {
						resolve(ret);
						if (typeof cb === 'function') cb(null, ret);
					}
				});
			});
		},
	
		lock: function lock(orientation, cb) {
			if (typeof orientation === 'function') {
				cb = orientation;
				orientation = {};
			}
	
			// orientation
			if (['portrait-primary', 'portrait-secondary', 'landscape-primary', 'landscape-secondary', 'portrait', // either portrait-primary or portrait-secondary.
			'landscape', // either landscape-primary or landscape-secondary.
			'any' // All orientations are supported (unlocked orientation)
			].indexOf(orientation) < 0) {
				orientation = 'any';
			}
	
			return new Promise(function (resolve, reject) {
				screen.lockOrientation(orientation, function (ret) {
					ret = ret || {};
	
					if (ret.error) {
						reject(ret.error);
						if (typeof cb === 'function') cb(ret.error, null);
					} else {
						resolve(ret);
						if (typeof cb === 'function') cb(null, ret);
					}
				});
			});
		},
	
		unlock: function unlock(cb) {
			return new Promise(function (resolve, reject) {
				screen.unlockOrientation(function (ret) {
					ret = ret || {};
	
					if (ret.error) {
						reject(ret.error);
						if (typeof cb === 'function') cb(ret.error, null);
					} else {
						resolve(ret);
						if (typeof cb === 'function') cb(null, ret);
					}
				});
			});
		}
	};
	
	// info
	
	var info = function info(cb) {
		return new Promise(function (resolve, reject) {
			screen.info(function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	};
	
	module.exports = {
		brightness: brightness,
		orientation: orientation,
		info: info
	};

/***/ },
/* 208 */
/***/ function(module, exports) {

	'use strict';
	
	var vibration = void 0;
	
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		vibration = __weex_require__('@weex-module/nat/device/vibration');
	});
	
	// vibrate
	
	var vibrate = function vibrate(time, cb) {
		if (typeof time === 'function') {
			cb = time;
			time = {};
		}
	
		return new Promise(function (resolve, reject) {
			vibration.vibrate(time || 500, function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	};
	
	module.exports = {
		vibrate: vibrate
	};

/***/ },
/* 209 */
/***/ function(module, exports) {

	'use strict';
	
	var volume = void 0;
	
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		volume = __weex_require__('@weex-module/nat/device/volume');
	});
	
	// get
	
	var get = function get(cb) {
		return new Promise(function (resolve, reject) {
			volume.get(function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	};
	
	// set
	
	var set = function set(vol, cb) {
		return new Promise(function (resolve, reject) {
			volume.set(vol, function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	};
	
	module.exports = {
		get: get,
		set: set
	};

/***/ },
/* 210 */
/***/ function(module, exports) {

	'use strict';
	
	var navigator = void 0;
	
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		navigator = __weex_require__('@weex-module/nat/navigator');
	});
	
	// push
	
	var push = function push(opts, cb) {
		opts = opts || {};
	
		if (typeof opts === 'string') {
			opts = {
				url: opts
			};
		}
	
		return new Promise(function (resolve, reject) {
			navigator.push(opts, function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	};
	
	// pop
	var pop = function pop(opts, cb) {
		return new Promise(function (resolve, reject) {
			navigator.pop(opts, function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	};
	
	// setTitle
	var setTitle = function setTitle(opts, cb) {
		opts = opts || {};
	
		if (typeof opts === 'string') {
			opts = {
				title: opts
			};
		}
	
		return new Promise(function (resolve, reject) {
			navigator.setTitle(opts, function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	};
	
	// setColor
	var setColor = function setColor(opts, cb) {
		opts = opts || {};
	
		if (typeof opts === 'string') {
			opts = {
				color: opts
			};
		}
	
		return new Promise(function (resolve, reject) {
			navigator.setColor(opts, function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	};
	
	// setBackgroundColor
	var setBackgroundColor = function setBackgroundColor(opts, cb) {
		opts = opts || {};
	
		if (typeof opts === 'string') {
			opts = {
				backgroundColor: opts
			};
		}
	
		return new Promise(function (resolve, reject) {
			navigator.setBackgroundColor(opts, function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	};
	
	// setFontSize
	var setFontSize = function setFontSize(opts, cb) {
		opts = opts || {};
	
		if (typeof opts === 'string' || typeof opts === 'number') {
			opts = {
				fontSize: opts
			};
		}
	
		return new Promise(function (resolve, reject) {
			navigator.setFontSize(opts, function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	};
	
	// init
	var init = function init(opts, cb) {
		opts = opts || {};
	
		return new Promise(function (resolve, reject) {
			navigator.init(opts, function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	};
	
	// hide
	var hide = function hide(cb) {
		return new Promise(function (resolve, reject) {
			navigator.hide(function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	};
	
	// show
	var show = function show(cb) {
		return new Promise(function (resolve, reject) {
			navigator.show(function (ret) {
				ret = ret || {};
	
				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	};
	
	module.exports = {
		push: push,
		pop: pop,
		setTitle: setTitle,
		setColor: setColor,
		setBackgroundColor: setBackgroundColor,
		setFontSize: setFontSize,
		init: init,
		hide: hide,
		show: show
	};

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(56)
	var __weex_script__ = __webpack_require__(57)
	
	__weex_define__('@weex-component/detail', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	})


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTZlY2Q1YzViMGFjZjE5MzZkYmI/YzBlMCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9ub3RpY2VzLWRldGFpbC53ZT82NGQzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanM/ZTZjYSoqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzPzgwZTQqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcz85MDA3KioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcz9lY2UyKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcz83N2FhKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanM/MWI2MioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanM/Y2UwMCoqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzP2Q1M2UqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcz9hNmRhKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcz80MTE2KioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcz8wZGEzKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcz8yNGM4KioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzP2JkMWYqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanM/NzA1MSoqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcz85MzVkKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanM/YWI0NCoqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanM/NDlhNCoqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzPzFlODYqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcz81YzBjKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzP2Y1YmMqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanM/ZmNlYSoqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanM/ZDg1MCoqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzPzY5NDYqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcz81Y2Y5KioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcz80OGVhKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanM/NDVkMyoqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcz82MTk5KioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcz82MmE3KioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanM/ZjY1ZioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qcz85ZmQ0KioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanM/MmE2YyoqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanM/N2I2YyoqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanM/ZThjZCoqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzPzc1OTgqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanM/YTVmYioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzP2QwZDIqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzP2I1YzAqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9tZXRob2RzLmpzPzNkOTIqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb25maWcuanM/YzE4MyoqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RldGFpbC9kZXRhaWwud2U/YTk0YyoiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGV0YWlsL2RldGFpbC53ZT83YWIwIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25hdnBhZ2UvbmF2YmFyLndlP2I1NTEqKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25hdnBhZ2UvbmF2YmFyLndlPzUwOGEqKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25hdnBhZ2UvbmF2YmFyLndlPzY1MzkqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2cGFnZS9uYXZiYXIud2U/OWMxMioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZwYWdlL25hdnBhZ2Uud2U/MmYyNioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZwYWdlL25hdnBhZ2Uud2U/MGZmYioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZwYWdlL25hdnBhZ2Uud2U/ZmY0YioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZwYWdlL25hdnBhZ2Uud2U/ODAyNioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9ub3RpY2VzLWRldGFpbC53ZT9iNWY1Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9ub3RpY2VzLWRldGFpbC53ZT80ZjAyIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9ub3RpY2VzLWRldGFpbC53ZSIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtbmF0L2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtbmF0L2xpYi9jYW1lcmEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LW5hdC9saWIvY29tbXVuaWNhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtbmF0L2xpYi91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtbmF0L2xpYi9nZW9sb2NhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtbmF0L2xpYi9tZWRpYS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtbmF0L2xpYi9tZWRpYS9hdWRpby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtbmF0L2xpYi9tZWRpYS9pbWFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtbmF0L2xpYi9tZWRpYS92aWRlby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtbmF0L2xpYi9tb2RhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtbmF0L2xpYi9yZWNvcmRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtbmF0L2xpYi9uZXR3b3JrL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vd2VleC1uYXQvbGliL25ldHdvcmsvc3RyZWFtL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vd2VleC1uYXQvbGliL25ldHdvcmsvdHJhbnNmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LW5hdC9saWIvc2Vuc29yL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vd2VleC1uYXQvbGliL3NlbnNvci9hY2NlbGVyb21ldGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vd2VleC1uYXQvbGliL3NlbnNvci9jb21wYXNzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vd2VleC1uYXQvbGliL2RldmljZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtbmF0L2xpYi9kZXZpY2UvYmFzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtbmF0L2xpYi9kZXZpY2UvYmF0dGVyeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtbmF0L2xpYi9kZXZpY2UvbmV0d29yay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtbmF0L2xpYi9kZXZpY2Uvc2NyZWVuL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vd2VleC1uYXQvbGliL2RldmljZS92aWJyYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LW5hdC9saWIvZGV2aWNlL3ZvbHVtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtbmF0L2xpYi9uYXZpZ2F0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGV0YWlsL2RldGFpbC53ZT9mMTEyIl0sIm5hbWVzIjpbImdldEJhc2VVUkwiLCJkZXRlY3Rpb24iLCJyb3V0ZSIsInJvdXRlVG9VcmwiLCJyb3V0ZU5hbWUiLCJwYXJhbXMiLCJ0ZXN0Iiwic3BsaXQiLCJyIiwiY29tcGlsZVVybCIsImNvbnNvbGUiLCJsb2ciLCJ1cmwiLCJqb2luIiwiY2FsbCIsIndpbmRvdyIsIm9wZW4iLCJvIiwidGhlbiIsIiRvcGVuVVJMIiwiZmFpbENhbGxiYWNrIiwibmFtZSIsInJlc3VsdCIsIiRnZXRDb25maWciLCJidW5kbGVVcmwiLCJpbmRleE9mIiwic3RyIiwic3Vic3RyIiwicCIsImZvckVhY2giLCJ2IiwidGVtcCIsImRlY29kZVVSSSIsInJlYWxIZWlnaHQiLCJoZWlnaHQiLCJ3IiwiZW52IiwiZGV2aWNlV2lkdGgiLCJoIiwiZGV2aWNlSGVpZ2h0IiwiYXNzZXRzUm9vdCIsImljb24iLCJzY3JpcHRIb3N0IiwiaHRtbEluZGV4Iiwic2NyaXB0Um9vdCIsImFwaVJvb3QiLCJhbmRyb2lkQXNzZXRzUm9vdCIsIm1hcCIsIm1hcF9saWZlIiwibm90aWNlIiwic2NhbiIsImNvZGUiLCJ0cmFuc2FjdGlvbl9yZWNvcmQiLCJzZWFyY2giLCJiYWNrIiwicmlnaHRfYXJyb3ciLCJhcm91bmQiLCJzZWFyY2hfcGFzcyIsInN0YXIiLCJoYWxmX3N0YXIiLCJkcm9wZG93biIsInRpY2siLCJjb2xsZWN0IiwiY29sbGVjdF91bnNlbGVjdGVkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsRUFBQzs7QUFFRCwyRjs7Ozs7Ozs7Ozs7OztBQ2pCQSxtQkFBa0IsdUQ7Ozs7OztBQ0FsQjtBQUNBLHdEOzs7Ozs7QUNEQTtBQUNBOztBQUVBLDJDQUEwQyxnQ0FBb0MsRTs7Ozs7O0FDSDlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBbUU7QUFDbkU7QUFDQSxzRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWCxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLGdEQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFjO0FBQ2QsZUFBYztBQUNkLGVBQWM7QUFDZCxlQUFjO0FBQ2QsZ0JBQWU7QUFDZixnQkFBZTtBQUNmLGdCQUFlO0FBQ2YsaUJBQWdCO0FBQ2hCLDBCOzs7Ozs7QUM1REE7QUFDQTtBQUNBO0FBQ0Esd0NBQXVDLGdDOzs7Ozs7QUNIdkMsOEJBQTZCO0FBQzdCLHNDQUFxQyxnQzs7Ozs7O0FDRHJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQSxHOzs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHLFVBQVU7QUFDYjtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ0pBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNGQTtBQUNBLHNFQUFzRSxnQkFBZ0IsVUFBVSxHQUFHO0FBQ25HLEVBQUMsRTs7Ozs7O0FDRkQ7QUFDQTtBQUNBLGtDQUFpQyxRQUFRLGdCQUFnQixVQUFVLEdBQUc7QUFDdEUsRUFBQyxFOzs7Ozs7QUNIRDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEc7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBa0MsVUFBVSxFQUFFO0FBQzlDLG9CQUFtQixzQ0FBc0M7QUFDekQsRUFBQyxvQ0FBb0M7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEVBQUMsVzs7Ozs7O0FDaENEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ2hCQSx3QkFBdUI7QUFDdkI7QUFDQTtBQUNBLEc7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ0pBLGtCQUFpQjs7QUFFakI7QUFDQTtBQUNBLEc7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLLFdBQVcsZUFBZTtBQUMvQjtBQUNBLE1BQUs7QUFDTDtBQUNBLEc7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUEyRDtBQUMzRCxHOzs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNKQTtBQUNBO0FBQ0Esb0RBQW1EO0FBQ25EO0FBQ0Esd0NBQXVDO0FBQ3ZDLEc7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0EsYzs7Ozs7O0FDSEEsMEM7Ozs7OztBQ0FBLGVBQWMsc0I7Ozs7OztBQ0FkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDSkEsVUFBU0EsVUFBVCxRQUEyQixPQUEzQjtBQUNBLFFBQU8sS0FBS0MsU0FBWixNQUEyQixhQUEzQjtBQUNBLFFBQU9DLEtBQVAsTUFBa0IsU0FBbEI7QUFDQTs7Ozs7QUFLQSxRQUFPLFNBQVNDLFVBQVQsQ0FBcUJDLFNBQXJCLEVBQWdDO0FBQ25DLFNBQUlDLFNBQVMsRUFBYjtBQUNBLFNBQUksS0FBS0MsSUFBTCxDQUFVRixTQUFWLENBQUosRUFBMEI7QUFDdEJDLGtCQUFTRCxVQUFVRyxLQUFWLENBQWdCLEdBQWhCLEVBQXFCLENBQXJCLENBQVQ7QUFDQUgscUJBQVlBLFVBQVVHLEtBQVYsQ0FBZ0IsR0FBaEIsRUFBcUIsQ0FBckIsQ0FBWjtBQUNIO0FBQ0QsU0FBSUMsSUFBSU4sTUFBTUUsU0FBTixDQUFSO0FBQ0EsU0FBSUssVUFBSjtBQUNBLFNBQUksQ0FBQ0QsQ0FBTCxFQUFRO0FBQ0o7QUFDQUUsaUJBQVFDLEdBQVIsQ0FBWSxrQ0FBWjtBQUNIO0FBQ0RGLGtCQUFhRCxFQUFFSSxHQUFGLEdBQVFKLEVBQUVJLEdBQVYsR0FBZ0IsV0FBV1IsVUFBVUcsS0FBVixDQUFnQixHQUFoQixFQUFxQk0sSUFBckIsQ0FBMEIsR0FBMUIsQ0FBeEM7QUFDQSxTQUFJRCxNQUFNWixXQUFXYyxJQUFYLENBQWdCLElBQWhCLEVBQXNCLElBQXRCLElBQThCTCxVQUE5QixHQUEyQyxLQUFyRDtBQUNBO0FBQ0EsU0FBSUosTUFBSixFQUFZO0FBQ1IsYUFBSSxPQUFPVSxNQUFQLEtBQWtCLFFBQXRCLEVBQWdDO0FBQzVCSCxtQkFBTUEsTUFBTSxHQUFOLEdBQVlQLE1BQWxCO0FBQ0gsVUFGRCxNQUVPO0FBQ0hPLG1CQUFNQSxNQUFNLEdBQU4sR0FBWVAsTUFBbEI7QUFDSDtBQUNKO0FBQ0QsWUFBT08sR0FBUDtBQUNIO0FBQ0Q7Ozs7OztBQU1BLFFBQU8sU0FBU0ksSUFBVCxDQUFlWixTQUFmLEVBQTBCYSxDQUExQixFQUE2QjtBQUNoQyxTQUFJVCxJQUFJTixNQUFNRSxTQUFOLENBQVI7QUFDQSxTQUFJUSxNQUFNVCxXQUFXVyxJQUFYLENBQWdCLElBQWhCLEVBQXNCVixTQUF0QixDQUFWO0FBQ0EsU0FBSUksRUFBRVAsU0FBTixFQUFpQjtBQUNiQSxtQkFBVU8sRUFBRVAsU0FBWixFQUF1QjtBQUNuQkcsd0JBQVdBLFNBRFE7QUFFbkJRLGtCQUFLQTtBQUZjLFVBQXZCLEVBR0dNLElBSEgsQ0FHUSxNQUFNO0FBQ1Ysa0JBQUtDLFFBQUwsQ0FBY1AsR0FBZDtBQUNILFVBTEQsRUFLRyxNQUFNO0FBQ0wsaUJBQUlLLEtBQUssT0FBT0EsRUFBRUcsWUFBVCxLQUEwQixVQUFuQyxFQUErQztBQUMzQ0gsbUJBQUVHLFlBQUYsQ0FBZU4sSUFBZixDQUFvQixJQUFwQixFQUEwQlYsU0FBMUI7QUFDSDtBQUNKLFVBVEQ7QUFVSCxNQVhELE1BV087QUFDSCxjQUFLZSxRQUFMLENBQWNQLEdBQWQ7QUFDSDtBQUNKO0FBQ0Q7Ozs7Ozs7OztBQVNBLFFBQU8sU0FBU1AsTUFBVCxDQUFpQmdCLElBQWpCLEVBQXVCVCxHQUF2QixFQUEyQjtBQUM5QixTQUFJVSxTQUFTLEVBQWI7QUFDQSxTQUFJLENBQUNWLEdBQUwsRUFBVTtBQUNOQSxlQUFNLEtBQUtXLFVBQUwsR0FBa0JDLFNBQXhCO0FBQ0g7QUFDRCxTQUFJWixJQUFJYSxPQUFKLENBQVksR0FBWixNQUFxQixDQUFDLENBQTFCLEVBQTZCO0FBQ3pCLGFBQUlDLE1BQU1kLElBQUllLE1BQUosQ0FBV2YsSUFBSWEsT0FBSixDQUFZLEdBQVosSUFBbUIsQ0FBOUIsQ0FBVjtBQUNBLGFBQUlHLElBQUlGLElBQUluQixLQUFKLENBQVUsR0FBVixDQUFSO0FBQ0FxQixXQUFFQyxPQUFGLENBQVVDLEtBQUs7QUFDWCxpQkFBSUMsT0FBT0QsRUFBRXZCLEtBQUYsQ0FBUSxHQUFSLENBQVg7QUFDQWUsb0JBQU9TLEtBQUssQ0FBTCxDQUFQLElBQWtCQyxVQUFVRCxLQUFLLENBQUwsQ0FBVixDQUFsQjtBQUNILFVBSEQ7QUFJSDtBQUNELFNBQUksT0FBT1YsSUFBUCxLQUFnQixRQUFwQixFQUE4QjtBQUMxQixhQUFJQyxPQUFPRCxJQUFQLENBQUosRUFBa0I7QUFDZCxvQkFBT0MsT0FBT0QsSUFBUCxDQUFQO0FBQ0gsVUFGRCxNQUVPO0FBQ0gsb0JBQU8sRUFBUDtBQUNIO0FBQ0osTUFORCxNQU1PO0FBQ0gsZ0JBQU9DLE1BQVA7QUFDSDtBQUNKO0FBQ0Q7QUFDQSxRQUFPLFNBQVNXLFVBQVQsQ0FBcUJDLE1BQXJCLEVBQTZCO0FBQ2hDLFNBQUlDLElBQUksS0FBS1osVUFBTCxHQUFrQmEsR0FBbEIsQ0FBc0JDLFdBQTlCO0FBQ0EsU0FBSUMsSUFBSSxLQUFLZixVQUFMLEdBQWtCYSxHQUFsQixDQUFzQkcsWUFBOUI7QUFDQTtBQUNBLFlBQU9KLElBQUksR0FBSixHQUFVRCxNQUFqQjtBQUNILEU7Ozs7Ozs7OztBQzlGRDtBQUNBLE9BQU1NLGFBQWEsbURBQW5COztBQUVBLFVBQVNDLElBQVQsQ0FBY1gsQ0FBZCxFQUFpQjtBQUNiLFlBQU9VLGFBQWEsT0FBYixHQUF1QlYsQ0FBOUI7QUFDSDtBQUNELGdCQUFlO0FBQ1g7QUFDQVksaUJBQVksMkNBRkQ7QUFHWDtBQUNBQyxnQkFBVyxzREFKQTtBQUtYO0FBQ0FDLGlCQUFZLFFBTkQ7QUFPWDtBQUNBSixpQkFBWUEsVUFSRDtBQVNYO0FBQ0FLLGNBQVMsa0RBVkU7QUFXWDtBQUNBQyx3QkFBbUIsd0JBWlI7QUFhWEwsV0FBTTtBQUNGTSxjQUFLTixLQUFLLFlBQUwsQ0FESDtBQUVGTyxtQkFBVVAsS0FBSyxpQkFBTCxDQUZSO0FBR0ZRLGlCQUFRUixLQUFLLGVBQUwsQ0FITjtBQUlGUyxlQUFNVCxLQUFLLGFBQUwsQ0FKSjtBQUtGVSxlQUFNVixLQUFLLGFBQUwsQ0FMSjtBQU1GVyw2QkFBb0JYLEtBQUssMkJBQUwsQ0FObEI7QUFPRlksaUJBQVFaLEtBQUssZUFBTCxDQVBOO0FBUUZhLGVBQU1iLEtBQUssYUFBTCxDQVJKO0FBU0ZjLHNCQUFhZCxLQUFLLG9CQUFMLENBVFg7QUFVRlksaUJBQVFaLEtBQUssb0JBQUwsQ0FWTjtBQVdGZSxpQkFBUWYsS0FBSyxlQUFMLENBWE47QUFZRmdCLHNCQUFhaEIsS0FBSyxvQkFBTCxDQVpYO0FBYUZpQixlQUFNakIsS0FBSyxhQUFMLENBYko7QUFjRmtCLG9CQUFXbEIsS0FBSyxrQkFBTCxDQWRUO0FBZUZtQixtQkFBVW5CLEtBQUssaUJBQUwsQ0FmUjtBQWdCRm9CLGVBQU1wQixLQUFLLGFBQUwsQ0FoQko7QUFpQkZxQixrQkFBU3JCLEtBQUssZ0JBQUwsQ0FqQlA7QUFrQkZzQiw2QkFBb0J0QixLQUFLLDJCQUFMO0FBbEJsQjtBQWJLLEVBQWYsQzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7Ozs7OztLQUNBOzs7Ozs7Ozs7b0JBSUE7b0JBQ0E7OEJBQ0E7Z0RBQ0E7NEJBQ0E7Z0NBR0E7QUFSQTtBQURBO2lDQVVBO2lDQUNBO0FBQ0E7O29DQUVBLElBQ0E7QUFoQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBMkIsbUJBQW1CO0FBQzlDLHFDQUFvQztBQUNwQyxJQUFHO0FBQ0g7QUFDQSw4QkFBNkI7QUFDN0IsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQThCO0FBQzlCLFFBQU87QUFDUDtBQUNBO0FBQ0EsK0JBQThCO0FBQzlCLFFBQU87QUFDUCw2QkFBNEIsMEJBQTBCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QjtBQUM1QixRQUFPO0FBQ1AsNkJBQTRCLHlCQUF5QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QiwwQkFBMEI7QUFDdEQ7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLCtCQUE4QjtBQUM5QjtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBOEI7QUFDOUIsUUFBTztBQUNQO0FBQ0E7QUFDQSwrQkFBOEI7QUFDOUIsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBOEI7QUFDOUIsUUFBTztBQUNQLDZCQUE0Qix3QkFBd0I7QUFDcEQ7QUFDQSwrQkFBOEI7QUFDOUI7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNEI7QUFDNUIsUUFBTztBQUNQLDZCQUE0Qix3QkFBd0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUE4QjtBQUM5QixRQUFPO0FBQ1A7QUFDQTtBQUNBLCtCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNsSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7O0FDZkE7O21CQUlBOzswQkFFQTs7aUJBRUE7O2dCQUVBOztxQkFFQTs7dUJBRUE7O3lCQUNBO3dCQUVBOzt5QkFFQTs7c0JBRUE7O3dCQUNBO3NCQUVBOzt3QkFFQTtBQXhCQTs7d0RBMEJBO3VEQUNBO0FBQ0E7c0RBQ0E7c0RBQ0E7QUFFQTtBQVBBO0FBMUJBOzs7Ozs7OztBQ3hEQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsRUFBQzs7Ozs7OztBQ2ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyxxQkFBcUI7QUFDdEQsZ0NBQStCLG1CQUFtQjtBQUNsRCx5Q0FBd0MsNEJBQTRCO0FBQ3BFLCtCQUE4QixrQkFBa0I7QUFDaEQscUNBQW9DLHdCQUF3QjtBQUM1RCxvQ0FBbUMsdUJBQXVCO0FBQzFELHFDQUFvQyx3QkFBd0I7QUFDNUQsdUNBQXNDLDBCQUEwQjtBQUNoRSx1Q0FBc0MsMEJBQTBCO0FBQ2hFLHNDQUFxQyx5QkFBeUI7QUFDOUQsd0NBQXVDLDJCQUEyQjtBQUNsRSx3Q0FBdUMsMkJBQTJCO0FBQ2xFLHVDQUFzQztBQUN0QztBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBdUMsOEJBQThCO0FBQ3JFLHdDQUF1Qyw4QkFBOEI7QUFDckU7QUFDQSxtQ0FBa0M7QUFDbEMsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7OztBQ0tBLHFCQUNBOzs7bUJBR0E7MEJBQ0E7aUJBQ0E7Z0JBQ0E7NEJBQ0E7NEJBQ0E7cUJBQ0E7dUJBQ0E7eUJBQ0E7eUJBQ0E7d0JBQ0E7c0JBQ0E7d0JBQ0E7c0JBQ0E7d0JBQ0E7b0JBRUE7QUFqQkE7aUNBbUJBO3VEQUNBOzhCQUNBO2dCQUNBO21DQUNBO0FBQ0E7QUFDQTtBQTFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWdDLDRCQUE0QjtBQUM1RCwyQkFBMEIsc0JBQXNCO0FBQ2hELG9DQUFtQywrQkFBK0I7QUFDbEUsZ0NBQStCLHNCQUFzQjtBQUNyRCx1Q0FBc0Msa0NBQWtDO0FBQ3hFLHFDQUFvQztBQUNwQyxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsNkJBQTRCLGdCQUFnQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQjtBQUMvQixRQUFPO0FBQ1A7QUFDQTtBQUNBLDZCQUE0QjtBQUM1QixRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ2FBOzs7O0FBQ0E7Ozs7OztLQUNBOzs7Ozs7cUJBQ0E7cUJBRUE7O3FCQUNBO3lCQUNBO3VCQUVBOzs7OztvQkFJQTtvQkFDQTs4QkFDQTtnREFDQTs0QkFDQTtnQ0FFQTtBQVBBO3dCQVFBO2NBRUE7QUFYQTtpQ0FZQTt1RkFvQkE7O3dEQUNBOzs2QkFHQTtBQUZBO2dEQUdBO0FBQ0E7QUFDQTs7OzRDQUdBOzt5QkFDQTtBQUNBOzBDQUlBO3lCQUNBO0FBQ0E7MENBQ0E7OzBCQUdBO0FBRkE7eUJBR0E7QUFDQTtBQWhCQSxRQWlCQTtBQTFEQTs7Ozs7Ozs7QUNsQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0I7Ozs7OztBQ25GQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEdBQUU7QUFDRjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDaEVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Rjs7QUFFQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBaUIsZUFBZTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEdBQUU7QUFDRjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWlCLGVBQWU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUN0SkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQzVCQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEdBQUU7QUFDRjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEdBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQy9FQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNwQkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDekVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEdBQUU7QUFDRjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEdBQUU7QUFDRjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUN0SkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDekVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUM3SUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FB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QUNKO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ3RKQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDZkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEdBQUU7QUFDRjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEdBQUU7QUFDRjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEdBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQzdFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDN0VBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ25DQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEdBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDNUJBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQSxHOzs7Ozs7QUM1QkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBLEc7Ozs7OztBQzVCQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0osSUFBRztBQUNILEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSixJQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0osSUFBRztBQUNILEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSixJQUFHO0FBQ0gsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKLElBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDbklBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNqQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDL0NBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEdBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEdBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEdBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUN0TkE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxFQUFDIiwiZmlsZSI6InZpZXdzXFxub3RpY2VzLWRldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDk2ZWNkNWM1YjBhY2YxOTM2ZGJiIiwidmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9ub3RpY2VzLWRldGFpbC53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9ub3RpY2VzLWRldGFpbC53ZVwiKVxudmFyIF9fd2VleF9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL25vdGljZXMtZGV0YWlsLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50LzY0ZjgxODIzN2MwNWIwMDA1NjI3MGZlMTM0MzM0ZjgzJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cbl9fd2VleF9ib290c3RyYXBfXygnQHdlZXgtY29tcG9uZW50LzY0ZjgxODIzN2MwNWIwMDA1NjI3MGZlMTM0MzM0ZjgzJyx1bmRlZmluZWQsdW5kZWZpbmVkKVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL25vdGljZXMtZGV0YWlsLndlP2VudHJ5PXRydWVcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAzMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzciLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM3IiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0Jywge2Fzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM3IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIEMpe1xuICAgICAgICAgIHN3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZihJU19QUk9UTyl7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSloaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsICRhc3NpZ24gID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCBhTGVuICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZlxuICAgICwgaXNFbnVtICAgICA9IHBJRS5mO1xuICB3aGlsZShhTGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM3IiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJpbXBvcnQgeyBnZXRCYXNlVVJMIH0gZnJvbSAnLi9hcGknXHJcbmltcG9ydCAqIGFzIGRldGVjdGlvbiBmcm9tICcuL2RldGVjdGlvbidcclxuaW1wb3J0IHJvdXRlIGZyb20gJy4vcm91dGUnXHJcbi8qKlxyXG4gKiDot6/nlLHovazpk77mjqVcclxuICogQHBhcmFtIHtzdHJpbmd9IHJvdXRlTmFtZVxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJvdXRlVG9VcmwgKHJvdXRlTmFtZSkge1xyXG4gICAgdmFyIHBhcmFtcyA9ICcnXHJcbiAgICBpZiAoL1xcPy8udGVzdChyb3V0ZU5hbWUpKSB7XHJcbiAgICAgICAgcGFyYW1zID0gcm91dGVOYW1lLnNwbGl0KCc/JylbMV1cclxuICAgICAgICByb3V0ZU5hbWUgPSByb3V0ZU5hbWUuc3BsaXQoJz8nKVswXVxyXG4gICAgfVxyXG4gICAgbGV0IHIgPSByb3V0ZVtyb3V0ZU5hbWVdXHJcbiAgICBsZXQgY29tcGlsZVVybFxyXG4gICAgaWYgKCFyKSB7XHJcbiAgICAgICAgLy8gVE9ETyDot7PovazliLDplJnor6/pobVcclxuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3I6IOi3r+eUseS4jeWtmOWcqO+8jOivt+WcqHJvdXRlci5qc+S4remFjee9ruWvueW6lOeahOi3r+eUsScpXHJcbiAgICB9XHJcbiAgICBjb21waWxlVXJsID0gci51cmwgPyByLnVybCA6ICd2aWV3cy8nICsgcm91dGVOYW1lLnNwbGl0KCdfJykuam9pbignLScpXHJcbiAgICBsZXQgdXJsID0gZ2V0QmFzZVVSTC5jYWxsKHRoaXMsIHRydWUpICsgY29tcGlsZVVybCArICcuanMnXHJcbiAgICAvLyDlhYHorrjmt7vliqDlj4LmlbAg5L6L5aaCIG1lcmNoYW50X2Fyb3VuZD9hPTEmYj0yIOWkhOeQhuinhOWImeWSjOa1j+iniOWZqOeahHF1ZXJ5c3RyaW5n5LiA6Ie0XHJcbiAgICBpZiAocGFyYW1zKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIHVybCA9IHVybCArICcmJyArIHBhcmFtc1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHVybCA9IHVybCArICc/JyArIHBhcmFtc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB1cmxcclxufVxyXG4vKipcclxuICog5omT5byA5paw6aG16Z2iXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSByb3V0ZU5hbWUgLSDot6/nlLHlkI3np7Ag5omA5pyJ6Lev55Sx5ZCN56ew5Zyocm91dGUuanPkuK1cclxuICogQHBhcmFtIHtvYmplY3R9IG8gLSDnjrDlnKjlj6rmnInot6/nlLHmiZPlvIDlpLHotKXlpITnkIbmlrnms5XvvIzku6XlkI7lj6/ku6Xmt7vliqDlhbbku5blpITnkIZcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gby5mYWlsQ2FsbGJhY2sgLSDot6/nlLHmiZPlvIDlpLHotKXlpITnkIZjYWxsYmFja1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9wZW4gKHJvdXRlTmFtZSwgbykge1xyXG4gICAgbGV0IHIgPSByb3V0ZVtyb3V0ZU5hbWVdXHJcbiAgICBsZXQgdXJsID0gcm91dGVUb1VybC5jYWxsKHRoaXMsIHJvdXRlTmFtZSlcclxuICAgIGlmIChyLmRldGVjdGlvbikge1xyXG4gICAgICAgIGRldGVjdGlvbltyLmRldGVjdGlvbl0oe1xyXG4gICAgICAgICAgICByb3V0ZU5hbWU6IHJvdXRlTmFtZSxcclxuICAgICAgICAgICAgdXJsOiB1cmxcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kb3BlblVSTCh1cmwpXHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobyAmJiB0eXBlb2Ygby5mYWlsQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG8uZmFpbENhbGxiYWNrLmNhbGwodGhpcywgcm91dGVOYW1lKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy4kb3BlblVSTCh1cmwpXHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIOino+aekOi3r+eUseWPguaVsFxyXG4gKiDkvovlpoLvvJptZXJjaGFudF9hcm91bmQ/YT0xJmI9MiDpobXpnaJcclxuICogICAgICDosIPnlKhwYXJhbXMoKeaWueazlSDov5Tlm57lgLzkuLrvvJoge2E6MSwgYjoyfVxyXG4gKiAgICAgIOiwg+eUqHBhcmFtcygnYScp5pa55rOVIOi/lOWbnuWAvOS4uu+8miAxXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbmFtZV0g5Y+v6YCJ5Y+C5pWwXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdXJsXSDlj6/pgInlj4LmlbAg6buY6K6k5Li6YnVuZGxlVXJsXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd8b2JqZWN0fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtcyAobmFtZSwgdXJsKXtcclxuICAgIGxldCByZXN1bHQgPSB7fVxyXG4gICAgaWYgKCF1cmwpIHtcclxuICAgICAgICB1cmwgPSB0aGlzLiRnZXRDb25maWcoKS5idW5kbGVVcmxcclxuICAgIH1cclxuICAgIGlmICh1cmwuaW5kZXhPZihcIj9cIikgIT09IC0xKSB7XHJcbiAgICAgICAgbGV0IHN0ciA9IHVybC5zdWJzdHIodXJsLmluZGV4T2YoXCI/XCIpICsgMSlcclxuICAgICAgICBsZXQgcCA9IHN0ci5zcGxpdChcIiZcIilcclxuICAgICAgICBwLmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0ZW1wID0gdi5zcGxpdChcIj1cIilcclxuICAgICAgICAgICAgcmVzdWx0W3RlbXBbMF1dID0gZGVjb2RlVVJJKHRlbXBbMV0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBpZiAocmVzdWx0W25hbWVdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRbbmFtZV1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gJydcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiByZXN1bHRcclxuICAgIH1cclxufVxyXG4vLyDojrflj5bnnJ/lrp7pq5jluqbvvIznlLHkuo53ZWV46Zeu6aKY5pyq6IO96YCC6YWN5omA5pyJ5py65Z6L44CCXHJcbmV4cG9ydCBmdW5jdGlvbiByZWFsSGVpZ2h0IChoZWlnaHQpIHtcclxuICAgIGxldCB3ID0gdGhpcy4kZ2V0Q29uZmlnKCkuZW52LmRldmljZVdpZHRoXHJcbiAgICBsZXQgaCA9IHRoaXMuJGdldENvbmZpZygpLmVudi5kZXZpY2VIZWlnaHRcclxuICAgIC8vIDEzMzJcclxuICAgIHJldHVybiB3IC8gNzUwICogaGVpZ2h0XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL21ldGhvZHMuanMiLCIvLyBjb25zdCBhc3NldHNVUkwgPSAnZmlsZTovLy9zZGNhcmQvaW1nLydcclxuY29uc3QgYXNzZXRzUm9vdCA9ICdodHRwczovL2tvb29mbHkuZ2l0aHViLmlvL2tvc3RhbmQtdHRmL3R0Zi9hc3NldHMvJ1xyXG5cclxuZnVuY3Rpb24gaWNvbih2KSB7XHJcbiAgICByZXR1cm4gYXNzZXRzUm9vdCArICdpY29uLycgKyB2XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgLy8gd2VleOiEmuacrGhvc3RcclxuICAgIHNjcmlwdEhvc3Q6ICdodHRwczovL2tvb29mbHkuZ2l0aHViLmlvL2tvc3RhbmQtdHRmL3R0ZicsXHJcbiAgICAvLyBIVE1MIGluZGV4XHJcbiAgICBodG1sSW5kZXg6ICdodHRwczovL2tvb29mbHkuZ2l0aHViLmlvL2tvc3RhbmQtdHRmL3R0Zi9pbmRleC5odG1sJyxcclxuICAgIC8vIHdlZXjohJrmnKzmoLnnm67lvZVcclxuICAgIHNjcmlwdFJvb3Q6ICcvMTAwMS8nLFxyXG4gICAgLy8g5Zu+54mH562J6Z2Z5oCB6LWE5rqQ5qC555uu5b2VXHJcbiAgICBhc3NldHNSb290OiBhc3NldHNSb290LFxyXG4gICAgLy8gcmVzZXRmdWwgQVBJ5pyN5Yqh5qC56Lev5b6EXHJcbiAgICBhcGlSb290OiAnaHR0cHM6Ly9rb29vZmx5LmdpdGh1Yi5pby9rb3N0YW5kLXR0Zi90dGYvYXBpL3YxJyxcclxuICAgIC8vIGFuZHJvaWQg5pys5Zyw6Z2Z5oCB6LWE5rqQ6Lev5b6EXHJcbiAgICBhbmRyb2lkQXNzZXRzUm9vdDogJ2ZpbGU6Ly8vc2RjYXJkL2Fzc2V0cy8nLFxyXG4gICAgaWNvbjoge1xyXG4gICAgICAgIG1hcDogaWNvbignbWFwQDJ4LnBuZycpLFxyXG4gICAgICAgIG1hcF9saWZlOiBpY29uKCdtYXBfbGlmZUAyeC5wbmcnKSxcclxuICAgICAgICBub3RpY2U6IGljb24oJ25vdGljZUAyeC5wbmcnKSxcclxuICAgICAgICBzY2FuOiBpY29uKCdzY2FuQDJ4LnBuZycpLFxyXG4gICAgICAgIGNvZGU6IGljb24oJ2NvZGVAMngucG5nJyksXHJcbiAgICAgICAgdHJhbnNhY3Rpb25fcmVjb3JkOiBpY29uKCd0cmFuc2FjdGlvbl9yZWNvcmRAMngucG5nJyksXHJcbiAgICAgICAgc2VhcmNoOiBpY29uKCdzZWFyY2hAMngucG5nJyksXHJcbiAgICAgICAgYmFjazogaWNvbignYmFja0AyeC5wbmcnKSxcclxuICAgICAgICByaWdodF9hcnJvdzogaWNvbigncmlnaHRfYXJyb3dAMngucG5nJyksXHJcbiAgICAgICAgc2VhcmNoOiBpY29uKCdzZWFyY2hfc2hvcEAyeC5wbmcnKSxcclxuICAgICAgICBhcm91bmQ6IGljb24oJ2Fyb3VuZEAyeC5wbmcnKSxcclxuICAgICAgICBzZWFyY2hfcGFzczogaWNvbignc2VhcmNoX3Bhc3NAMngucG5nJyksXHJcbiAgICAgICAgc3RhcjogaWNvbignc3RhckAyeC5wbmcnKSxcclxuICAgICAgICBoYWxmX3N0YXI6IGljb24oJ2hhbGZfc3RhckAyeC5wbmcnKSxcclxuICAgICAgICBkcm9wZG93bjogaWNvbignZHJvcGRvd25AMngucG5nJyksXHJcbiAgICAgICAgdGljazogaWNvbigndGlja0AyeC5wbmcnKSxcclxuICAgICAgICBjb2xsZWN0OiBpY29uKCdjb2xsZWN0QDJ4LnBuZycpLFxyXG4gICAgICAgIGNvbGxlY3RfdW5zZWxlY3RlZDogaWNvbignY29sbGVjdC11bnNlbGVjdGVkQDJ4LnBuZycpXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2NvbmZpZy5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJ3ZWJcIixcbiAgXCJhdHRyXCI6IHtcbiAgICBcInJlZlwiOiBcIndlYnZpZXdcIixcbiAgICBcIjpzcmNcIjogXCJ1cmxcIixcbiAgICBcIkBwYWdlc3RhcnRcIjogXCJzdGFydFwiLFxuICAgIFwiQHBhZ2VmaW5pc2hcIjogXCJmaW5pc2hcIixcbiAgICBcIkBlcnJvclwiOiBcImVycm9yXCJcbiAgfSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwid2Vidmlld1wiXG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3NyYy9jb21wb25lbnRzL2RldGFpbC9kZXRhaWwud2Vcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gNSAzMCIsIjx0ZW1wbGF0ZT5cclxuICAgIDx3ZWIgcmVmPVwid2Vidmlld1wiIDpzcmM9XCJ1cmxcIiBjbGFzcz1cIndlYnZpZXdcIiBAcGFnZXN0YXJ0PVwic3RhcnRcIiBAcGFnZWZpbmlzaD1cImZpbmlzaFwiIEBlcnJvcj1cImVycm9yXCI+PC93ZWI+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uL2NvbW1vbi9jb25maWcnXHJcbiAgICBpbXBvcnQgKiBhcyBtZXRob2RzIGZyb20gJy4uLy4uL2NvbW1vbi9tZXRob2RzJ1xyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgbmF2OiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+a2iOaBr+ivpuaDhScsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyM0ZDRkNGQnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgICAgICBsZWZ0SXRlbVNyYzogY29uZmlnLmljb24uYmFjayxcclxuICAgICAgICAgICAgICAgIHJpZ2h0SXRlbU1hcms6IDUsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aDogMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlYXRlZCAoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGFyYW1zKCdpZCcpKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczogT2JqZWN0LmFzc2lnbih7XHJcblxyXG4gICAgICAgIH0sIG1ldGhvZHMpXHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9kZXRhaWwvZGV0YWlsLndlP2Q0OWFhZDkwIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJjb250YWluZXJcIlxuICBdLFxuICBcInN0eWxlXCI6IHtcbiAgICBcImhlaWdodFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaGVpZ2h0fSxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYmFja2dyb3VuZENvbG9yfVxuICB9LFxuICBcImF0dHJcIjoge1xuICAgIFwiZGF0YVJvbGVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmRhdGFSb2xlfVxuICB9LFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwicmlnaHQtdGV4dFwiXG4gICAgICBdLFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJpZ2h0SXRlbUNvbG9yfVxuICAgICAgfSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwibmF2aUl0ZW1Qb3NpdGlvblwiOiBcInJpZ2h0XCIsXG4gICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJpZ2h0SXRlbVRpdGxlfVxuICAgICAgfSxcbiAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiAhdGhpcy5yaWdodEl0ZW1TcmN9LFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwib25jbGlja3JpZ2h0aXRlbVwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInJpZ2h0LWltYWdlXCJcbiAgICAgIF0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcIm5hdmlJdGVtUG9zaXRpb25cIjogXCJyaWdodFwiLFxuICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmlnaHRJdGVtU3JjfVxuICAgICAgfSxcbiAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJpZ2h0SXRlbVNyY30sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJvbmNsaWNrcmlnaHRpdGVtXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJyaWdodC1tYXJrXCJcbiAgICAgIF0sXG4gICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodEl0ZW1NYXJrfSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcIm9uY2xpY2tyaWdodGl0ZW1cIlxuICAgICAgfSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJpZ2h0SXRlbU1hcmt9XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwibGVmdC10ZXh0XCJcbiAgICAgIF0sXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGVmdEl0ZW1Db2xvcn1cbiAgICAgIH0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcIm5hdmlJdGVtUG9zaXRpb25cIjogXCJsZWZ0XCIsXG4gICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtVGl0bGV9XG4gICAgICB9LFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwib25jbGlja2xlZnRpdGVtXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJsZWZ0LWRlc1wiXG4gICAgICBdLFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtQ29sb3J9XG4gICAgICB9LFxuICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGVmdEl0ZW1EZXN9LFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGVmdEl0ZW1EZXN9XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImxlZnQtaW1hZ2VcIlxuICAgICAgXSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwibmF2aUl0ZW1Qb3NpdGlvblwiOiBcImxlZnRcIixcbiAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtU3JjfVxuICAgICAgfSxcbiAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtU3JjfSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcIm9uY2xpY2tsZWZ0aXRlbVwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiY2VudGVyLXRleHRcIlxuICAgICAgXSxcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcImNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aXRsZUNvbG9yfVxuICAgICAgfSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwibmF2aUl0ZW1Qb3NpdGlvblwiOiBcImNlbnRlclwiLFxuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aXRsZX1cbiAgICAgIH1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3NyYy9jb21wb25lbnRzL25hdnBhZ2UvbmF2YmFyLndlXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIDE0IDIxIDIyIDIzIDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiY29udGFpbmVyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcInRvcFwiOiAwLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcIndpZHRoXCI6IDc1MFxuICB9LFxuICBcInJpZ2h0LXRleHRcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiYm90dG9tXCI6IDI0LFxuICAgIFwicmlnaHRcIjogMzIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJyaWdodFwiLFxuICAgIFwiZm9udFNpemVcIjogMjgsXG4gICAgXCJmb250RmFtaWx5XCI6IFwiJ09wZW4gU2FucycsIHNhbnMtc2VyaWZcIlxuICB9LFxuICBcImxlZnQtdGV4dFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJib3R0b21cIjogMjIsXG4gICAgXCJsZWZ0XCI6IDgwLFxuICAgIFwidGV4dEFsaWduXCI6IFwibGVmdFwiLFxuICAgIFwiZm9udFNpemVcIjogMzIsXG4gICAgXCJmb250RmFtaWx5XCI6IFwiJ09wZW4gU2FucycsIHNhbnMtc2VyaWZcIlxuICB9LFxuICBcImxlZnQtZGVzXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImJvdHRvbVwiOiAyMixcbiAgICBcImxlZnRcIjogODAsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJsZWZ0XCIsXG4gICAgXCJmb250U2l6ZVwiOiAzMixcbiAgICBcImZvbnRGYW1pbHlcIjogXCInT3BlbiBTYW5zJywgc2Fucy1zZXJpZlwiXG4gIH0sXG4gIFwiY2VudGVyLXRleHRcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiYm90dG9tXCI6IDE2LFxuICAgIFwibGVmdFwiOiAxNzIsXG4gICAgXCJyaWdodFwiOiAxNzIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImZvbnRTaXplXCI6IDM4XG4gIH0sXG4gIFwibGVmdC1pbWFnZVwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJib3R0b21cIjogMjAsXG4gICAgXCJsZWZ0XCI6IDI4LFxuICAgIFwid2lkdGhcIjogNDgsXG4gICAgXCJoZWlnaHRcIjogNDhcbiAgfSxcbiAgXCJyaWdodC1pbWFnZVwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJib3R0b21cIjogMjAsXG4gICAgXCJyaWdodFwiOiAyOCxcbiAgICBcIndpZHRoXCI6IDQ4LFxuICAgIFwiaGVpZ2h0XCI6IDQ4XG4gIH0sXG4gIFwicmlnaHQtbWFya1wiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJyaWdodFwiOiAxNixcbiAgICBcImJvdHRvbVwiOiAzOCxcbiAgICBcIndpZHRoXCI6IDQwLFxuICAgIFwiaGVpZ2h0XCI6IDQwLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzBmNGY5ZVwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IDIwLFxuICAgIFwiZm9udFNpemVcIjogMjQsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImxpbmVIZWlnaHRcIjogNDAsXG4gICAgXCJ2ZXJ0aWNhbEFsaWduXCI6IFwibWlkZGxlXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcIm9wYWNpdHlcIjogMC45XG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3NyYy9jb21wb25lbnRzL25hdnBhZ2UvbmF2YmFyLndlXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIDE0IDIxIDIyIDIzIDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIHN0eWxlPVwiaGVpZ2h0Ont7aGVpZ2h0fX07IGJhY2tncm91bmQtY29sb3I6e3tiYWNrZ3JvdW5kQ29sb3J9fTtcIiBkYXRhLXJvbGU9e3tkYXRhUm9sZX19PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwicmlnaHQtdGV4dFwiIHN0eWxlPVwiY29sb3I6e3tyaWdodEl0ZW1Db2xvcn19O1wiIG5hdmktaXRlbS1wb3NpdGlvbj1cInJpZ2h0XCIgaWY9e3shcmlnaHRJdGVtU3JjfX0gb25jbGljayA9IFwib25jbGlja3JpZ2h0aXRlbVwiPnt7cmlnaHRJdGVtVGl0bGV9fTwvdGV4dD5cclxuICAgICAgICA8aW1hZ2UgY2xhc3M9XCJyaWdodC1pbWFnZVwiIG5hdmktaXRlbS1wb3NpdGlvbj1cInJpZ2h0XCIgc3JjPXt7cmlnaHRJdGVtU3JjfX0gaWY9e3tyaWdodEl0ZW1TcmN9fSBvbmNsaWNrPVwib25jbGlja3JpZ2h0aXRlbVwiPjwvaW1hZ2U+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJyaWdodC1tYXJrXCIgaWY9XCJ7e3JpZ2h0SXRlbU1hcmt9fVwiIG9uY2xpY2s9XCJvbmNsaWNrcmlnaHRpdGVtXCI+e3tyaWdodEl0ZW1NYXJrfX08L3RleHQ+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJsZWZ0LXRleHRcIiBzdHlsZT1cImNvbG9yOnt7bGVmdEl0ZW1Db2xvcn19O1wiIG5hdmktaXRlbS1wb3NpdGlvbj1cImxlZnRcIiAgb25jbGljaz0gXCJvbmNsaWNrbGVmdGl0ZW1cIj57e2xlZnRJdGVtVGl0bGV9fTwvdGV4dD5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cImxlZnQtZGVzXCIgc3R5bGU9XCJjb2xvcjp7e2xlZnRJdGVtQ29sb3J9fTtcIiBpZj17e2xlZnRJdGVtRGVzfX0+e3tsZWZ0SXRlbURlc319PC90ZXh0PlxyXG4gICAgICAgIDxpbWFnZSBjbGFzcz1cImxlZnQtaW1hZ2VcIiBuYXZpLWl0ZW0tcG9zaXRpb249XCJsZWZ0XCIgc3JjPXt7bGVmdEl0ZW1TcmN9fSBpZj17e2xlZnRJdGVtU3JjfX0gb25jbGljaz1cIm9uY2xpY2tsZWZ0aXRlbVwiPjwvaW1hZ2U+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJjZW50ZXItdGV4dFwiIHN0eWxlPVwiY29sb3I6e3t0aXRsZUNvbG9yfX07XCIgbmF2aS1pdGVtLXBvc2l0aW9uPVwiY2VudGVyXCI+e3t0aXRsZX19PC90ZXh0PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGU+XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDsgdG9wOiAwOyBsZWZ0OiAwOyByaWdodDogMDtcclxuICAgICAgICB3aWR0aDogNzUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnJpZ2h0LXRleHQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAyNHB4OyByaWdodDogMzJweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDsgZm9udC1zaXplOiAyOHB4OyBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgICAubGVmdC10ZXh0IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogMjJweDsgbGVmdDogODBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0OyBmb250LXNpemU6IDMycHg7IGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuICAgIC5sZWZ0LWRlcyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDIycHg7IGxlZnQ6IDgwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7IGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuICAgIC5jZW50ZXItdGV4dCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDE2cHg7IGxlZnQ6IDE3MnB4OyByaWdodDogMTcycHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBmb250LXNpemU6IDM4cHg7XHJcbiAgICB9XHJcbiAgICAubGVmdC1pbWFnZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDIwcHg7IGxlZnQ6IDI4cHg7XHJcbiAgICAgICAgd2lkdGg6IDQ4cHg7IGhlaWdodDogNDhweDtcclxuICAgIH1cclxuICAgIC5yaWdodC1pbWFnZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDIwcHg7IHJpZ2h0OiAyOHB4O1xyXG4gICAgICAgIHdpZHRoOiA0OHB4OyBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB9XHJcbiAgICAucmlnaHQtbWFyayB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyByaWdodDogMTZweDsgYm90dG9tOiAzOHB4O1xyXG4gICAgICAgIHdpZHRoOiA0MHB4OyBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBmNGY5ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDsgdGV4dC1hbGlnbjogY2VudGVyOyAgbGluZS1oZWlnaHQ6IDQwcHg7IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIH1cclxuPC9zdHlsZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGRhdGFSb2xlOiAnbmF2YmFyJyxcclxuICAgICAgICAgICAgLy/lr7zoiKrmnaHog4zmma/oibJcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgICAgICAvL+WvvOiIquadoemrmOW6plxyXG4gICAgICAgICAgICBoZWlnaHQ6IDg4LFxyXG4gICAgICAgICAgICAvL+WvvOiIquadoeagh+mimFxyXG4gICAgICAgICAgICB0aXRsZTogXCJcIixcclxuICAgICAgICAgICAgLy/lr7zoiKrmnaHmoIfpopjpopzoibJcclxuICAgICAgICAgICAgdGl0bGVDb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgLy/lj7PkvqfmjInpkq7lm77niYdcclxuICAgICAgICAgICAgcmlnaHRJdGVtU3JjOiAnJyxcclxuICAgICAgICAgICAgLy/lj7PkvqfmjInpkq7moIfpophcclxuICAgICAgICAgICAgcmlnaHRJdGVtVGl0bGU6ICcnLFxyXG4gICAgICAgICAgICByaWdodEl0ZW1NYXJrOiAnJyxcclxuICAgICAgICAgICAgLy/lj7PkvqfmjInpkq7moIfpopjpopzoibJcclxuICAgICAgICAgICAgcmlnaHRJdGVtQ29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgICAgIC8v5bem5L6n5oyJ6ZKu5Zu+54mHXHJcbiAgICAgICAgICAgIGxlZnRJdGVtU3JjOiAnJyxcclxuICAgICAgICAgICAgLy/lt6bkvqfmjInpkq7moIfpophcclxuICAgICAgICAgICAgbGVmdEl0ZW1UaXRsZTogJycsXHJcbiAgICAgICAgICAgIGxlZnRJdGVtRGVzOiAnJyxcclxuICAgICAgICAgICAgLy/lt6bkvqfmjInpkq7popzoibJcclxuICAgICAgICAgICAgbGVmdEl0ZW1Db2xvcjogJ2JsYWNrJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgb25jbGlja3JpZ2h0aXRlbTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGRpc3BhdGNoKCduYXZpQmFyLnJpZ2h0SXRlbS5jbGljaycsIHt9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25jbGlja2xlZnRpdGVtOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZGlzcGF0Y2goJ25hdmlCYXIubGVmdEl0ZW0uY2xpY2snLCB7fSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9uYXZwYWdlL25hdmJhci53ZT8zZGY3ZjRhNiIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vbmF2YmFyLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL25hdmJhci53ZVwiKVxudmFyIF9fd2VleF9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL25hdmJhci53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC9uYXZiYXInLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvbmF2cGFnZS9uYXZiYXIud2Vcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMTQgMjEgMjIgMjMgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImNvbnRhaW5lclwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcIm5hdmJhclwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcIm5hdmJhclwiXG4gICAgICBdLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJkYXRhUm9sZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuZGF0YVJvbGV9LFxuICAgICAgICBcImhlaWdodFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaGVpZ2h0fSxcbiAgICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmJhY2tncm91bmRDb2xvcn0sXG4gICAgICAgIFwidGl0bGVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdGxlfSxcbiAgICAgICAgXCJsZWZ0SXRlbURlc1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGVmdEl0ZW1EZXN9LFxuICAgICAgICBcInRpdGxlQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdGxlQ29sb3J9LFxuICAgICAgICBcImxlZnRJdGVtU3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sZWZ0SXRlbVNyY30sXG4gICAgICAgIFwibGVmdEl0ZW1UaXRsZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGVmdEl0ZW1UaXRsZX0sXG4gICAgICAgIFwibGVmdEl0ZW1Db2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGVmdEl0ZW1Db2xvcn0sXG4gICAgICAgIFwicmlnaHRJdGVtU3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodEl0ZW1TcmN9LFxuICAgICAgICBcInJpZ2h0SXRlbVRpdGxlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodEl0ZW1UaXRsZX0sXG4gICAgICAgIFwicmlnaHRJdGVtQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJpZ2h0SXRlbUNvbG9yfSxcbiAgICAgICAgXCJyaWdodEl0ZW1NYXJrXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodEl0ZW1NYXJrfVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwid3JhcHBlclwiXG4gICAgICBdLFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmJvcmRlckJvdHRvbUNvbG9yfSxcbiAgICAgICAgXCJib3JkZXJUb3BXaWR0aFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYm9yZGVyQm90dG9tV2lkdGh9LFxuICAgICAgICBcImJvcmRlclRvcFN0eWxlXCI6IFwic29saWRcIixcbiAgICAgICAgXCJtYXJnaW5Ub3BcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm1hcmdpblRvcH1cbiAgICAgIH0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImNvbnRlbnRcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9zcmMvY29tcG9uZW50cy9uYXZwYWdlL25hdnBhZ2Uud2Vcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMTQgMjEgMjIgMjMgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJuYXZiYXJcIjoge1xuICAgIFwiekluZGV4XCI6IDEwXG4gIH0sXG4gIFwid3JhcHBlclwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJib3R0b21cIjogMCxcbiAgICBcInpJbmRleFwiOiA4LFxuICAgIFwid2lkdGhcIjogNzUwXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3NyYy9jb21wb25lbnRzL25hdnBhZ2UvbmF2cGFnZS53ZVxuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAxNCAyMSAyMiAyMyAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8bmF2YmFyIGNsYXNzPVwibmF2YmFyXCIgZGF0YS1yb2xlPXt7ZGF0YVJvbGV9fSBoZWlnaHQ9e3toZWlnaHR9fSBiYWNrZ3JvdW5kLWNvbG9yPXt7YmFja2dyb3VuZENvbG9yfX0gdGl0bGU9e3t0aXRsZX19ICBsZWZ0LWl0ZW0tZGVzPVwie3tsZWZ0SXRlbURlc319XCIgdGl0bGUtY29sb3I9e3t0aXRsZUNvbG9yfX0gbGVmdC1pdGVtLXNyYz17e2xlZnRJdGVtU3JjfX0gbGVmdC1pdGVtLXRpdGxlPXt7bGVmdEl0ZW1UaXRsZX19IGxlZnQtaXRlbS1jb2xvcj17e2xlZnRJdGVtQ29sb3J9fSByaWdodC1pdGVtLXNyYz17e3JpZ2h0SXRlbVNyY319IHJpZ2h0LWl0ZW0tdGl0bGU9e3tyaWdodEl0ZW1UaXRsZX19IHJpZ2h0LWl0ZW0tY29sb3I9e3tyaWdodEl0ZW1Db2xvcn19IHJpZ2h0LWl0ZW0tbWFyaz1cInt7cmlnaHRJdGVtTWFya319XCI+PC9uYXZiYXI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIiBzdHlsZT1cImJvcmRlci10b3AtY29sb3I6IHt7Ym9yZGVyQm90dG9tQ29sb3J9fTsgYm9yZGVyLXRvcC13aWR0aDp7e2JvcmRlckJvdHRvbVdpZHRofX07IGJvcmRlci10b3Atc3R5bGU6IHNvbGlkOyBtYXJnaW4tdG9wOnt7bWFyZ2luVG9wfX1cIj5cclxuICAgICAgICAgICAgPGNvbnRlbnQ+PC9jb250ZW50PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGU+XHJcbiAgICAubmF2YmFyIHsgei1pbmRleDogMTA7IH1cclxuICAgIC53cmFwcGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgbGVmdDogMDsgcmlnaHQ6IDA7IGJvdHRvbTogMDsgei1pbmRleDogODtcclxuICAgICAgICB3aWR0aDogNzUwcHg7XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgcmVxdWlyZSgnLi9uYXZiYXIud2UnKVxyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBkYXRhUm9sZTogJ25hdmJhcicsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiA4OCxcclxuICAgICAgICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoOiAwLFxyXG4gICAgICAgICAgICBib3JkZXJCb3R0b21Db2xvcjogJyNkOGQ4ZDgnLFxyXG4gICAgICAgICAgICB0aXRsZUNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgICAgICByaWdodEl0ZW1TcmM6ICcnLFxyXG4gICAgICAgICAgICByaWdodEl0ZW1UaXRsZTogJycsXHJcbiAgICAgICAgICAgIHJpZ2h0SXRlbUNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgICAgICByaWdodEl0ZW1NYXJrOiAnJyxcclxuICAgICAgICAgICAgbGVmdEl0ZW1TcmM6ICcnLFxyXG4gICAgICAgICAgICBsZWZ0SXRlbVRpdGxlOiAnJyxcclxuICAgICAgICAgICAgbGVmdEl0ZW1EZXM6ICcnLFxyXG4gICAgICAgICAgICBsZWZ0SXRlbUNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZWQgKCkge1xyXG4gICAgICAgICAgICAvLyBpT1Mg5aS06YOobmF2cGFnZSB1aea4suafk+S4jkg1IEFuZHJvaWTkuI3kuIDoh7RcclxuICAgICAgICAgICAgaWYodGhpcy4kZ2V0Q29uZmlnKCkuZW52LnBsYXRmb3JtID09PSAnaU9TJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJnaW5Ub3AgPSAwXHJcbiAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFyZ2luVG9wID0gdGhpcy5oZWlnaHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvbmF2cGFnZS9uYXZwYWdlLndlPzQ4NTgyMTg0IiwicmVxdWlyZShcIi4vbmF2YmFyLndlXCIpXG52YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL25hdnBhZ2Uud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vbmF2cGFnZS53ZVwiKVxudmFyIF9fd2VleF9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL25hdnBhZ2Uud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvbmF2cGFnZScsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9uYXZwYWdlL25hdnBhZ2Uud2Vcbi8vIG1vZHVsZSBpZCA9IDE0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDIxIDIyIDIzIDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcIm5hdnBhZ2VcIixcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiY29udGFpbmVyXCJcbiAgXSxcbiAgXCJhdHRyXCI6IHtcbiAgICBcImxlZnRJdGVtU3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5uYXYubGVmdEl0ZW1TcmN9LFxuICAgIFwidGl0bGVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm5hdi50aXRsZX0sXG4gICAgXCJyaWdodEl0ZW1UaXRsZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubmF2LnJpZ2h0SXRlbVRpdGxlfSxcbiAgICBcInRpdGxlQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm5hdi5jb2xvcn0sXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubmF2LmJvcmRlckJvdHRvbVdpZHRofSxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubmF2LmJhY2tncm91bmRDb2xvcn1cbiAgfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwid2ViXCIsXG4gICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy51cmx9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcIndlYnZpZXdcIlxuICAgICAgXSxcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcImhlaWdodFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMud2Vidmlld0hlaWdodH1cbiAgICAgIH0sXG4gICAgICBcImlkXCI6IFwid2Vidmlld1wiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnVybH1cbiAgICAgIH0sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiZXJyb3JcIjogXCJwYWdlZXJyb3JcIixcbiAgICAgICAgXCJwYWdlc3RhcnRcIjogXCJwYWdlc3RhcnRcIixcbiAgICAgICAgXCJwYWdlZmluaXNoXCI6IFwicGFnZWZpbmlzaFwiXG4gICAgICB9XG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9zcmMvdmlld3Mvbm90aWNlcy1kZXRhaWwud2Vcbi8vIG1vZHVsZSBpZCA9IDE4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDMwIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiY29udGFpbmVyXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmMmYyZjJcIlxuICB9LFxuICBcIndlYnZpZXdcIjoge1xuICAgIFwid2lkdGhcIjogNzIwLFxuICAgIFwibWFyZ2luTGVmdFwiOiAxNSxcbiAgICBcIm1hcmdpblRvcFwiOiAxNSxcbiAgICBcImJvcmRlclJhZGl1c1wiOiA0LFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3NyYy92aWV3cy9ub3RpY2VzLWRldGFpbC53ZVxuLy8gbW9kdWxlIGlkID0gMTg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMzAiLCI8dGVtcGxhdGU+XHJcbiAgICA8bmF2cGFnZSBjbGFzcz1cImNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgICBsZWZ0LWl0ZW0tc3JjPVwie3tuYXYubGVmdEl0ZW1TcmN9fVwiXHJcbiAgICAgICAgICAgICB0aXRsZT1cInt7bmF2LnRpdGxlfX1cIlxyXG4gICAgICAgICAgICAgcmlnaHQtaXRlbS10aXRsZT1cInt7bmF2LnJpZ2h0SXRlbVRpdGxlfX1cIlxyXG4gICAgICAgICAgICAgdGl0bGUtY29sb3I9XCJ7e25hdi5jb2xvcn19XCJcclxuICAgICAgICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg9XCJ7e25hdi5ib3JkZXJCb3R0b21XaWR0aH19XCJcclxuICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I9XCJ7e25hdi5iYWNrZ3JvdW5kQ29sb3J9fVwiPlxyXG5cclxuICAgICAgICA8d2ViIGlmPVwie3t1cmx9fVwiIGNsYXNzPVwid2Vidmlld1wiIHN0eWxlPVwiaGVpZ2h0OiB7e3dlYnZpZXdIZWlnaHR9fVwiIGlkPVwid2Vidmlld1wiIHNyYz1cInt7dXJsfX1cIiBjbGFzcz1cIndlYnZpZXdcIiBvbmVycm9yPVwicGFnZWVycm9yXCIgb25wYWdlc3RhcnQ9XCJwYWdlc3RhcnRcIiBvbnBhZ2VmaW5pc2g9XCJwYWdlZmluaXNoXCI+PC93ZWI+XHJcblxyXG4gICAgPC9uYXZwYWdlPlxyXG48L3RlbXBsYXRlPlxyXG48c3R5bGU+XHJcbiAgICAuY29udGFpbmVyIHsgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjsgfVxyXG4gICAgLndlYnZpZXcge1xyXG4gICAgICAgIHdpZHRoOiA3MjBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDsgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIH1cclxuPC9zdHlsZT5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBOYXQgZnJvbSAnd2VleC1uYXQnXHJcbiAgICBpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbW1vbi9jb25maWcnXHJcbiAgICBpbXBvcnQgKiBhcyBtZXRob2RzIGZyb20gJy4uL2NvbW1vbi9tZXRob2RzJ1xyXG4gICAgcmVxdWlyZSgnLi4vY29tcG9uZW50cy9uYXZwYWdlL25hdnBhZ2Uud2UnKVxyXG4gICAgcmVxdWlyZSgnLi4vY29tcG9uZW50cy9kZXRhaWwvZGV0YWlsLndlJylcclxuXHJcbiAgICBjb25zdCBtb2RhbCA9IHJlcXVpcmUoJ0B3ZWV4LW1vZHVsZS9tb2RhbCcpXHJcbiAgICBjb25zdCBuYXZpZ2F0b3IgPSByZXF1aXJlKCdAd2VleC1tb2R1bGUvbmF2aWdhdG9yJylcclxuICAgIGNvbnN0IHdlYnZpZXcgPSByZXF1aXJlKCdAd2VleC1tb2R1bGUvd2VidmlldycpXHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgbmF2OiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+a2iOaBr+ivpuaDhScsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyM0ZDRkNGQnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgICAgICBsZWZ0SXRlbVNyYzogY29uZmlnLmljb24uYmFjayxcclxuICAgICAgICAgICAgICAgIHJpZ2h0SXRlbU1hcms6IDUsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aDogMSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgd2Vidmlld0hlaWdodDogMTEwMCxcclxuICAgICAgICAgICAgdXJsOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlYXRlZCAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXJsID0gY29uZmlnLnNjcmlwdFJvb3QgKyAnaHRtbC9kZXRhaWwuaHRtbD9pZD0nICsgdGhpcy5wYXJhbXMoJ2lkJylcclxuXHJcbiAgICAgICAgICAgIC8qY29uc29sZS5sb2coJ05hdCcsIE5hdClcclxuICAgICAgICAgICAgdGhpcy53ZWJ2aWV3SGVpZ2h0ID0gMTQwOVxyXG4gICAgICAgICAgICBOYXQuc2NyZWVuLmluZm8oKGVyciwgcmV0KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy53ZWJ2aWV3SGVpZ2h0ID0gdGhpcy4kZ2V0Q29uZmlnKCkuZW52LmRldmljZUhlaWdodCAtIHRoaXMucmVhbEhlaWdodCg4OCArIDMwKSAqIHJldC5zY2FsZTtcclxuICAgICAgICAgICAgICAgIG1vZGFsLmFsZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXQuc2NhbGUgKyAnLCcgKyB0aGlzLnJlYWxIZWlnaHQoODggKyAzMCkgKiByZXQuc2NhbGUgKyAnLCB3ZWI6ICcgKyB0aGlzLndlYnZpZXdIZWlnaHRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JldCcsIHJldCwgdGhpcy5yZWFsSGVpZ2h0KDg4ICsgMzApICogcmV0LnNjYWxlKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgbGV0IGIgPSB0aGlzLiRnZXRDb25maWcoKS5lbnYuZGV2aWNlV2lkdGggLyA3NTBcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuJGdldENvbmZpZygpLmVudikqL1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy4kb24oJ25hdmlCYXIubGVmdEl0ZW0uY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICdhbmltYXRlZCc6ICd0cnVlJyxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5hdmlnYXRvci5wb3AocGFyYW1zLCBmdW5jdGlvbiAoKSB7fSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICBwYWdlZmluaXNoIChlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGFnZXN0YXJ0IChlKSB7XHJcbiAgICAgICAgICAgICAgICAvKm1vZGFsLmFsZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAncGFnZXN0YXJ0J1xyXG4gICAgICAgICAgICAgICAgfSk7Ki9cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBhZ2VlcnJvciAoZSkge1xyXG4gICAgICAgICAgICAgICAgbW9kYWwuYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdlcnJvcidcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIG1ldGhvZHMpXHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlld3Mvbm90aWNlcy1kZXRhaWwud2U/YWQzMzI2OWEiLCIndXNlIHN0cmljdCc7XG5cbnZhciBOYXQgPSB7fTtcblxuaWYgKHR5cGVvZiBfX3dlZXhfZGVmaW5lX18gPT09ICdmdW5jdGlvbicpIHtcblx0dmFyIGNhbWVyYSA9IHJlcXVpcmUoJy4vY2FtZXJhJyk7XG5cdHZhciBjb21tdW5pY2F0aW9uID0gcmVxdWlyZSgnLi9jb21tdW5pY2F0aW9uJyk7XG5cdHZhciBnZW9sb2NhdGlvbiA9IHJlcXVpcmUoJy4vZ2VvbG9jYXRpb24nKTtcblx0dmFyIG1lZGlhID0gcmVxdWlyZSgnLi9tZWRpYScpO1xuXHR2YXIgbW9kYWwgPSByZXF1aXJlKCcuL21vZGFsJyk7XG5cdHZhciByZWNvcmRlciA9IHJlcXVpcmUoJy4vcmVjb3JkZXInKTtcblx0dmFyIG5ldHdvcmsgPSByZXF1aXJlKCcuL25ldHdvcmsnKTtcblx0dmFyIHNlbnNvciA9IHJlcXVpcmUoJy4vc2Vuc29yJyk7XG5cdHZhciBkZXZpY2UgPSByZXF1aXJlKCcuL2RldmljZScpO1xuXHR2YXIgbmF2aWdhdG9yID0gcmVxdWlyZSgnLi9uYXZpZ2F0b3InKTtcblxuXHQvLyBjYW1lcmFcblx0aWYgKGNhbWVyYSkge1xuXHRcdE5hdC5jYW1lcmEgPSBjYW1lcmE7XG5cdH1cblxuXHQvLyBjb21tdW5pY2F0aW9uXG5cdGlmIChjb21tdW5pY2F0aW9uKSB7XG5cdFx0TmF0LmNhbGwgPSBjb21tdW5pY2F0aW9uLmNhbGw7XG5cdFx0TmF0LnNtcyA9IGNvbW11bmljYXRpb24uc21zO1xuXHRcdE5hdC5tYWlsID0gY29tbXVuaWNhdGlvbi5tYWlsO1xuXHR9XG5cblx0Ly8gZ2VvbG9jYXRpb25cblx0aWYgKGdlb2xvY2F0aW9uKSB7XG5cdFx0TmF0Lmdlb2xvY2F0aW9uID0gZ2VvbG9jYXRpb247XG5cdH1cblxuXHQvLyBtZWRpYVxuXHRpZiAobWVkaWEpIHtcblx0XHROYXQuYXVkaW8gPSBtZWRpYS5hdWRpbztcblx0XHROYXQuaW1hZ2UgPSBtZWRpYS5pbWFnZTtcblx0XHROYXQudmlkZW8gPSBtZWRpYS52aWRlbztcblx0fVxuXG5cdC8vIHJlY29yZGVyXG5cdGlmIChyZWNvcmRlcikge1xuXHRcdE5hdC5yZWNvcmRlciA9IHJlY29yZGVyO1xuXHR9XG5cblx0Ly8gbW9kYWxcblx0aWYgKG1vZGFsKSB7XG5cdFx0TmF0LmFsZXJ0ID0gbW9kYWwuYWxlcnQ7XG5cdFx0TmF0LmNvbmZpcm0gPSBtb2RhbC5jb25maXJtO1xuXHRcdE5hdC5wcm9tcHQgPSBtb2RhbC5wcm9tcHQ7XG5cdFx0TmF0LnRvYXN0ID0gbW9kYWwudG9hc3Q7XG5cdH1cblxuXHQvLyBuZXR3b3JrXG5cdGlmIChuZXR3b3JrKSB7XG5cdFx0TmF0LmZldGNoID0gbmV0d29yay5zdHJlYW0uZmV0Y2g7XG5cdFx0TmF0LmRvd25sb2FkID0gbmV0d29yay50cmFuc2Zlci5kb3dubG9hZDtcblx0XHROYXQudXBsb2FkID0gbmV0d29yay50cmFuc2Zlci51cGxvYWQ7XG5cdFx0TmF0LndlYnNvY2tldCA9IG5ldHdvcmsud2Vic29ja2V0O1xuXHR9XG5cblx0Ly8gc2Vuc29yXG5cdGlmIChzZW5zb3IpIHtcblx0XHROYXQuYWNjZWxlcm9tZXRlciA9IHNlbnNvci5hY2NlbGVyb21ldGVyO1xuXHRcdE5hdC5jb21wYXNzID0gc2Vuc29yLmNvbXBhc3M7XG5cdH1cblxuXHQvLyBkZXZpY2Vcblx0aWYgKGRldmljZSkge1xuXHRcdE5hdC5kZXZpY2UgPSBkZXZpY2UuYmFzZTtcblx0XHROYXQuYmF0dGVyeSA9IGRldmljZS5iYXR0ZXJ5O1xuXHRcdE5hdC5uZXR3b3JrID0gZGV2aWNlLm5ldHdvcms7XG5cdFx0TmF0LnNjcmVlbiA9IGRldmljZS5zY3JlZW47XG5cdFx0TmF0LnZpYnJhdGUgPSBkZXZpY2UudmlicmF0aW9uLnZpYnJhdGU7XG5cdFx0TmF0LnZvbHVtZSA9IGRldmljZS52b2x1bWU7XG5cdH1cblxuXHQvLyBuYXZpZ2F0b3Jcblx0aWYgKG5hdmlnYXRvcikge1xuXHRcdE5hdC5uYXZpZ2F0b3IgPSBuYXZpZ2F0b3I7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOYXQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbmF0L2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMzAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjYW1lcmEgPSB2b2lkIDA7XG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtdGVtcC94JywgZnVuY3Rpb24gKF9fd2VleF9yZXF1aXJlX18pIHtcblx0Y2FtZXJhID0gX193ZWV4X3JlcXVpcmVfXygnQHdlZXgtbW9kdWxlL25hdC9jYW1lcmEnKTtcbn0pO1xuXG4vLyBsYXVuY2hcblxudmFyIGxhdW5jaCA9IGZ1bmN0aW9uIGxhdW5jaChvcHRzKSB7XG5cdGNhbWVyYS5sYXVuY2goKTtcbn07XG5cbi8vIGNhcHR1cmVJbWFnZSAoc25hcClcblxudmFyIGNhcHR1cmVJbWFnZSA9IGZ1bmN0aW9uIGNhcHR1cmVJbWFnZShvcHRzLCBjYikge1xuXHRvcHRzID0gb3B0cyB8fCB7fTtcblxuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdGNhbWVyYS5jYXB0dXJlSW1hZ2Uoe1xuXHRcdFx0d2lkdGg6IG9wdHMud2lkdGggfHwgbnVsbCxcblx0XHRcdGhlaWdodDogb3B0cy5oZWlnaHQgfHwgbnVsbFxuXHRcdH0sIGZ1bmN0aW9uIChyZXQpIHtcblx0XHRcdHJldCA9IHJldCB8fCB7fTtcblxuXHRcdFx0aWYgKHJldC5lcnJvcikge1xuXHRcdFx0XHRyZWplY3QocmV0LmVycm9yKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IocmV0LmVycm9yLCBudWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc29sdmUocmV0KTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IobnVsbCwgcmV0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59O1xuXG4vLyBjYXB0dXJlVmlkZW8gKHJlY29yZClcblxudmFyIGNhcHR1cmVWaWRlbyA9IGZ1bmN0aW9uIGNhcHR1cmVWaWRlbyhvcHRzLCBjYikge1xuXHRvcHRzID0gb3B0cyB8fCB7fTtcblxuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdGNhbWVyYS5jYXB0dXJlVmlkZW8oe1xuXHRcdFx0d2lkdGg6IG9wdHMud2lkdGggfHwgbnVsbCxcblx0XHRcdGhlaWdodDogb3B0cy5oZWlnaHQgfHwgbnVsbFxuXHRcdH0sIGZ1bmN0aW9uIChyZXQpIHtcblx0XHRcdHJldCA9IHJldCB8fCB7fTtcblxuXHRcdFx0aWYgKHJldC5lcnJvcikge1xuXHRcdFx0XHRyZWplY3QocmV0LmVycm9yKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IocmV0LmVycm9yLCBudWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc29sdmUocmV0KTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IobnVsbCwgcmV0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0bGF1bmNoOiBsYXVuY2gsXG5cdGNhcHR1cmVJbWFnZTogY2FwdHVyZUltYWdlLFxuXHRjYXB0dXJlVmlkZW86IGNhcHR1cmVWaWRlb1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1uYXQvbGliL2NhbWVyYS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMzAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG52YXIgX3V0aWxzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGNvbW11bmljYXRpb24gPSB2b2lkIDA7XG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtdGVtcC94JywgZnVuY3Rpb24gKF9fd2VleF9yZXF1aXJlX18pIHtcblx0Y29tbXVuaWNhdGlvbiA9IF9fd2VleF9yZXF1aXJlX18oJ0B3ZWV4LW1vZHVsZS9uYXQvY29tbXVuaWNhdGlvbicpO1xufSk7XG5cbi8vIGNhbGxcblxudmFyIGNhbGwgPSBmdW5jdGlvbiBjYWxsKHRvLCBjYikge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdGlmICghdG8pIHtcblx0XHRcdHJlamVjdCh7XG5cdFx0XHRcdGNvZGU6IDEwMTA0MCxcblx0XHRcdFx0bWVzc2FnZTogJ0NBTExfTUlTU0lOR19BUkdVTUVOVCdcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH0gZWxzZSBpZiAoIV91dGlsczIuZGVmYXVsdC5pc1Bob25lKHRvKSkge1xuXHRcdFx0cmVqZWN0KHtcblx0XHRcdFx0Y29kZTogMTAxMDUwLFxuXHRcdFx0XHRtZXNzYWdlOiAnQ0FMTF9JTlZBTElEX0FSR1VNRU5UJyxcblx0XHRcdFx0ZGV0YWlsczogJ0ludmFsaWQgcGhvbmUgbnVtYmVyOiAnICsgdG9cblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbW11bmljYXRpb24uY2FsbCh0bywgZnVuY3Rpb24gKHJldCkge1xuXHRcdFx0cmV0ID0gcmV0IHx8IHt9O1xuXG5cdFx0XHRpZiAocmV0LmVycm9yKSB7XG5cdFx0XHRcdHJlamVjdChyZXQuZXJyb3IpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihyZXQuZXJyb3IsIG51bGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihudWxsKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59O1xuXG4vLyBzbXNcblxudmFyIHNtcyA9IGZ1bmN0aW9uIHNtcyh0bywgdGV4dCwgY2IpIHtcblx0dGV4dCA9IHRleHQgfHwgJyc7XG5cblx0aWYgKHR5cGVvZiB0ZXh0ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0Y2IgPSB0ZXh0O1xuXHRcdHRleHQgPSAnJztcblx0fVxuXG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0aWYgKCF0bykge1xuXHRcdFx0cmVqZWN0KHtcblx0XHRcdFx0Y29kZTogMTAyMDQwLFxuXHRcdFx0XHRtZXNzYWdlOiAnU01TX01JU1NJTkdfQVJHVU1FTlQnXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mIHRvID09PSAnc3RyaW5nJykge1xuXHRcdFx0dG8gPSBbdG9dO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdG8ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmICghX3V0aWxzMi5kZWZhdWx0LmlzUGhvbmUodG9baV0pKSB7XG5cdFx0XHRcdHJlamVjdCh7XG5cdFx0XHRcdFx0Y29kZTogMTAyMDUwLFxuXHRcdFx0XHRcdG1lc3NhZ2U6ICdTTVNfSU5WQUxJRF9BUkdVTUVOVCdcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb21tdW5pY2F0aW9uLnNtcyh0bywgdGV4dCwgZnVuY3Rpb24gKHJldCkge1xuXHRcdFx0cmV0ID0gcmV0IHx8IHt9O1xuXG5cdFx0XHRpZiAocmV0LmVycm9yKSB7XG5cdFx0XHRcdHJlamVjdChyZXQuZXJyb3IpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihyZXQuZXJyb3IsIG51bGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihudWxsKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59O1xuXG4vLyBtYWlsXG5cbnZhciBtYWlsID0gZnVuY3Rpb24gbWFpbCh0bywgb3B0cywgY2IpIHtcblx0b3B0cyA9IG9wdHMgfHwge307XG5cblx0aWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0Y2IgPSBvcHRzO1xuXHRcdG9wdHMgPSB7fTtcblx0fVxuXG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0aWYgKCF0bykge1xuXHRcdFx0cmVqZWN0KHtcblx0XHRcdFx0Y29kZTogMTAzMDQwLFxuXHRcdFx0XHRtZXNzYWdlOiAnTUFJTF9NSVNTSU5HX0FSR1VNRU5UJ1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiB0byA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHRvID0gW3RvXTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRvLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoIV91dGlsczIuZGVmYXVsdC5pc0VtYWlsKHRvW2ldKSkge1xuXHRcdFx0XHRyZWplY3Qoe1xuXHRcdFx0XHRcdGNvZGU6IDEwMzA1MCxcblx0XHRcdFx0XHRtZXNzYWdlOiAnTUFJTF9JTlZBTElEX0FSR1VNRU5UJyxcblx0XHRcdFx0XHRkZXRhaWxzOiAnSW52YWxpZCBlbWFpbGwgYWRkcmVzczogJyArIHRvW2ldXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29tbXVuaWNhdGlvbi5tYWlsKHRvLCB7XG5cdFx0XHRzdWJqZWN0OiBvcHRzLnN1YmplY3QgfHwgJycsXG5cdFx0XHRib2R5OiBvcHRzLmJvZHkgfHwgJycsXG5cdFx0XHRhdHRhY2htZW50czogb3B0cy5hdHRhY2htZW50cyB8fCBudWxsXG5cdFx0fSwgZnVuY3Rpb24gKHJldCkge1xuXHRcdFx0cmV0ID0gcmV0IHx8IHt9O1xuXG5cdFx0XHRpZiAocmV0LmVycm9yKSB7XG5cdFx0XHRcdHJlamVjdChyZXQuZXJyb3IpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihyZXQuZXJyb3IsIG51bGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihudWxsKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0Y2FsbDogY2FsbCxcblx0c21zOiBzbXMsXG5cdG1haWw6IG1haWxcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbmF0L2xpYi9jb21tdW5pY2F0aW9uL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxODhcbi8vIG1vZHVsZSBjaHVua3MgPSAzMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGlzRm4gPSBmdW5jdGlvbiBpc0ZuKGZuKSB7XG5cdHJldHVybiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbic7XG59O1xuXG52YXIgaXNQaG9uZSA9IGZ1bmN0aW9uIGlzUGhvbmUoc3RyKSB7XG5cdGlmICh0eXBlb2Ygc3RyID09PSAnbnVtYmVyJykge1xuXHRcdHN0ciA9IHN0ci50b1N0cmluZygpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuICEhc3RyLm1hdGNoKC9eXFwrP1tcXGRcXC1cXCNcXCpcXC5cXChcXCldKyQvKTtcbn07XG5cbnZhciBpc0VtYWlsID0gZnVuY3Rpb24gaXNFbWFpbChzdHIpIHtcblx0aWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuICEhc3RyLm1hdGNoKC9eKFxcdykrKFtcXC5cXC1cXF9dXFx3KykqQChcXHcpKygoW1xcLlxcLVxcX11cXHcrKSspJC8pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGlzRm46IGlzRm4sXG5cdGlzUGhvbmU6IGlzUGhvbmUsXG5cdGlzRW1haWw6IGlzRW1haWxcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbmF0L2xpYi91dGlscy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMzAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBnZW9sb2NhdGlvbiA9IHZvaWQgMDtcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC10ZW1wL3gnLCBmdW5jdGlvbiAoX193ZWV4X3JlcXVpcmVfXykge1xuXHRnZW9sb2NhdGlvbiA9IF9fd2VleF9yZXF1aXJlX18oJ0B3ZWV4LW1vZHVsZS9uYXQvZ2VvbG9jYXRpb24nKTtcbn0pO1xuXG4vLyBnZXRcbnZhciBnZXQgPSBmdW5jdGlvbiBnZXQob3B0cywgY2IpIHtcblx0aWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0Y2IgPSBvcHRzO1xuXHRcdG9wdHMgPSB7fTtcblx0fVxuXG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0Z2VvbG9jYXRpb24uZ2V0KGZ1bmN0aW9uIChyZXQpIHtcblx0XHRcdHJldCA9IHJldCB8fCB7fTtcblxuXHRcdFx0aWYgKHJldC5lcnJvcikge1xuXHRcdFx0XHRyZWplY3QocmV0LmVycm9yKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IocmV0LmVycm9yLCBudWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc29sdmUocmV0KTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IobnVsbCwgcmV0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59O1xuXG4vLyB3YXRjaFxuXG52YXIgd2F0Y2ggPSBmdW5jdGlvbiB3YXRjaChvcHRzLCBjYikge1xuXHRpZiAodHlwZW9mIG9wdHMgPT09ICdmdW5jdGlvbicpIHtcblx0XHRjYiA9IG9wdHM7XG5cdFx0b3B0cyA9IHt9O1xuXHR9XG5cblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRnZW9sb2NhdGlvbi53YXRjaCh7XG5cdFx0XHRtYXhpbXVtQWdlOiBvcHRzLm1heGltdW1BZ2UgfHwgMCxcblx0XHRcdHRpbWVvdXQ6IG9wdHMudGltZW91dCB8fCAxMDAwMCxcblx0XHRcdG1vZGVsOiBvcHRzLm1vZGVsIHx8ICdoaWdoQWNjdXJhY3knXG5cdFx0fSwgZnVuY3Rpb24gKHJldCkge1xuXHRcdFx0cmV0ID0gcmV0IHx8IHt9O1xuXG5cdFx0XHRpZiAocmV0LmVycm9yKSB7XG5cdFx0XHRcdHJlamVjdChyZXQuZXJyb3IpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihyZXQuZXJyb3IsIG51bGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzb2x2ZShyZXQpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihudWxsLCByZXQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbi8vIGNsZWFyIHdhdGNoXG5cbnZhciBjbGVhcldhdGNoID0gZnVuY3Rpb24gY2xlYXJXYXRjaChjYikge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdGdlb2xvY2F0aW9uLmNsZWFyV2F0Y2goZnVuY3Rpb24gKHJldCkge1xuXHRcdFx0cmV0ID0gcmV0IHx8IHt9O1xuXG5cdFx0XHRpZiAocmV0LmVycm9yKSB7XG5cdFx0XHRcdHJlamVjdChyZXQuZXJyb3IpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihyZXQuZXJyb3IsIG51bGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzb2x2ZShyZXQpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihudWxsLCByZXQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRnZXQ6IGdldCxcblx0d2F0Y2g6IHdhdGNoLFxuXHRjbGVhcldhdGNoOiBjbGVhcldhdGNoXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LW5hdC9saWIvZ2VvbG9jYXRpb24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDMwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2F1ZGlvID0gcmVxdWlyZSgnLi9hdWRpbycpO1xuXG52YXIgX2F1ZGlvMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2F1ZGlvKTtcblxudmFyIF9pbWFnZSA9IHJlcXVpcmUoJy4vaW1hZ2UnKTtcblxudmFyIF9pbWFnZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbWFnZSk7XG5cbnZhciBfdmlkZW8gPSByZXF1aXJlKCcuL3ZpZGVvJyk7XG5cbnZhciBfdmlkZW8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmlkZW8pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0YXVkaW86IF9hdWRpbzIuZGVmYXVsdCxcblx0aW1hZ2U6IF9pbWFnZTIuZGVmYXVsdCxcblx0dmlkZW86IF92aWRlbzIuZGVmYXVsdFxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1uYXQvbGliL21lZGlhL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAzMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGF1ZGlvID0gdm9pZCAwO1xuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LXRlbXAveCcsIGZ1bmN0aW9uIChfX3dlZXhfcmVxdWlyZV9fKSB7XG5cdGF1ZGlvID0gX193ZWV4X3JlcXVpcmVfXygnQHdlZXgtbW9kdWxlL25hdC9tZWRpYS9hdWRpbycpO1xufSk7XG5cbi8vIHBsYXlcbnZhciBwbGF5ID0gZnVuY3Rpb24gcGxheShwYXRoLCBjYikge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdGlmICghcGF0aCkge1xuXHRcdFx0cmVqZWN0KHtcblx0XHRcdFx0Y29kZTogMTEwMDQwLFxuXHRcdFx0XHRtZXNzYWdlOiAnTUVESUFfTUlTU0lOR19BUkdVTUVOVCdcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGF1ZGlvLnBsYXkocGF0aCwgZnVuY3Rpb24gKHJldCkge1xuXHRcdFx0cmV0ID0gcmV0IHx8IHt9O1xuXG5cdFx0XHRpZiAocmV0LmVycm9yKSB7XG5cdFx0XHRcdHJlamVjdChyZXQuZXJyb3IpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihyZXQuZXJyb3IsIG51bGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihudWxsKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59O1xuXG4vLyBwYXVzZVxuXG52YXIgcGF1c2UgPSBmdW5jdGlvbiBwYXVzZShjYikge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdGF1ZGlvLnBhdXNlKGZ1bmN0aW9uIChyZXQpIHtcblx0XHRcdHJldCA9IHJldCB8fCB7fTtcblxuXHRcdFx0aWYgKHJldC5lcnJvcikge1xuXHRcdFx0XHRyZWplY3QocmV0LmVycm9yKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IocmV0LmVycm9yLCBudWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IobnVsbCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuLy8gc3RvcFxuXG52YXIgc3RvcCA9IGZ1bmN0aW9uIHN0b3AoY2IpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRhdWRpby5zdG9wKGZ1bmN0aW9uIChyZXQpIHtcblx0XHRcdHJldCA9IHJldCB8fCB7fTtcblxuXHRcdFx0aWYgKHJldC5lcnJvcikge1xuXHRcdFx0XHRyZWplY3QocmV0LmVycm9yKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IocmV0LmVycm9yLCBudWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IobnVsbCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHBsYXk6IHBsYXksXG5cdHBhdXNlOiBwYXVzZSxcblx0c3RvcDogc3RvcFxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1uYXQvbGliL21lZGlhL2F1ZGlvL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAzMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGltYWdlID0gdm9pZCAwO1xuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LXRlbXAveCcsIGZ1bmN0aW9uIChfX3dlZXhfcmVxdWlyZV9fKSB7XG5cdGltYWdlID0gX193ZWV4X3JlcXVpcmVfXygnQHdlZXgtbW9kdWxlL25hdC9tZWRpYS9pbWFnZScpO1xufSk7XG5cbi8vIHBpY2tcbnZhciBwaWNrID0gZnVuY3Rpb24gcGljayhvcHRzLCBjYikge1xuXHRvcHRzID0gb3B0cyB8fCB7fTtcblxuXHRpZiAodHlwZW9mIG9wdHMgPT09ICdmdW5jdGlvbicpIHtcblx0XHRjYiA9IG9wdHM7XG5cdFx0b3B0cyA9IHt9O1xuXHR9XG5cblx0b3B0cy5saW1pdCA9IG9wdHMubGltaXQgfHwgMTtcblx0b3B0cy5xdWFsaXR5ID0gb3B0cy5xdWFsaXR5ICYmIG9wdHMucXVhbGl0eSA8IDEwMCA/IHBhcnNlSW50KG9wdHMucXVhbGl0eSkgOiAxMDA7XG5cblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRpbWFnZS5waWNrKHtcblx0XHRcdGxpbWl0OiBvcHRzLmxpbWl0LFxuXHRcdFx0cXVhbGl0eTogb3B0cy5xdWFsaXR5LFxuXHRcdFx0d2lkdGg6IG9wdHMud2lkdGggfHwgbnVsbCxcblx0XHRcdGhlaWdodDogb3B0cy5oZWlnaHQgfHwgbnVsbFxuXHRcdH0sIGZ1bmN0aW9uIChyZXQpIHtcblx0XHRcdHJldCA9IHJldCB8fCB7fTtcblxuXHRcdFx0aWYgKHJldC5lcnJvcikge1xuXHRcdFx0XHRyZWplY3QocmV0LmVycm9yKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IocmV0LmVycm9yLCBudWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc29sdmUocmV0KTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IobnVsbCwgcmV0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59O1xuXG4vLyBwcmV2aWV3XG5cbnZhciBwcmV2aWV3ID0gZnVuY3Rpb24gcHJldmlldyhmaWxlcywgb3B0cywgY2IpIHtcblx0b3B0cyA9IG9wdHMgfHwge307XG5cblx0aWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0Y2IgPSBvcHRzO1xuXHRcdG9wdHMgPSB7fTtcblx0fVxuXG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0aWYgKCFmaWxlcykge1xuXHRcdFx0cmVqZWN0KHtcblx0XHRcdFx0Y29kZTogMTEwMDQwLFxuXHRcdFx0XHRtZXNzYWdlOiAnTUVESUFfTUlTU0lOR19BUkdVTUVOVCdcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlb2YgZmlsZXMgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRmaWxlcyA9IFtmaWxlc107XG5cdFx0fVxuXG5cdFx0Ly8gc3R5bGVcblx0XHRpZiAoWydkb3RzJywgJ2xhYmVsJywgJ25vbmUnXS5pbmRleE9mKG9wdHMuc3R5bGUpIDwgMCkge1xuXHRcdFx0b3B0cy5zdHlsZSA9ICdkb3RzJztcblx0XHR9XG5cblx0XHRpZiAob3B0cy5zdHlsZSA9PT0gJ2RvdHMnKSB7XG5cdFx0XHRpZiAoZmlsZXMubGVuZ3RoID4gOSkge1xuXHRcdFx0XHRvcHRzLnN0eWxlID0gJ2xhYmVsJztcblx0XHRcdH0gZWxzZSBpZiAoZmlsZXMubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdG9wdHMuc3R5bGUgPSAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aW1hZ2UucHJldmlldyhmaWxlcywge1xuXHRcdFx0Y3VycmVudDogb3B0cy5jdXJyZW50LFxuXHRcdFx0c3R5bGU6IG9wdHMuc3R5bGVcblx0XHR9LCBmdW5jdGlvbiAocmV0KSB7XG5cdFx0XHRyZXQgPSByZXQgfHwge307XG5cblx0XHRcdGlmIChyZXQuZXJyb3IpIHtcblx0XHRcdFx0cmVqZWN0KHJldC5lcnJvcik7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHJldC5lcnJvciwgbnVsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKG51bGwpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbi8vIGluZm9cblxudmFyIGluZm8gPSBmdW5jdGlvbiBpbmZvKHBhdGgsIGNiKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0aWYgKCFwYXRoKSB7XG5cdFx0XHRyZWplY3Qoe1xuXHRcdFx0XHRjb2RlOiAxMTAwNDAsXG5cdFx0XHRcdG1lc3NhZ2U6ICdNRURJQV9NSVNTSU5HX0FSR1VNRU5UJ1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aW1hZ2UuaW5mbyhwYXRoLCBmdW5jdGlvbiAocmV0KSB7XG5cdFx0XHRyZXQgPSByZXQgfHwge307XG5cblx0XHRcdGlmIChyZXQuZXJyb3IpIHtcblx0XHRcdFx0cmVqZWN0KHJldC5lcnJvcik7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHJldC5lcnJvciwgbnVsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXNvbHZlKHJldCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKG51bGwsIHJldCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuLy8gZXhpZlxuXG52YXIgZXhpZiA9IGZ1bmN0aW9uIGV4aWYocGF0aCwgY2IpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRpZiAoIXBhdGgpIHtcblx0XHRcdHJlamVjdCh7XG5cdFx0XHRcdGNvZGU6IDExMDA0MCxcblx0XHRcdFx0bWVzc2FnZTogJ01FRElBX01JU1NJTkdfQVJHVU1FTlQnXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpbWFnZS5leGlmKHBhdGgsIGZ1bmN0aW9uIChyZXQpIHtcblx0XHRcdHJldCA9IHJldCB8fCB7fTtcblxuXHRcdFx0aWYgKHJldC5lcnJvcikge1xuXHRcdFx0XHRyZWplY3QocmV0LmVycm9yKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IocmV0LmVycm9yLCBudWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc29sdmUocmV0KTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IobnVsbCwgcmV0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0cGljazogcGljayxcblx0cHJldmlldzogcHJldmlldyxcblx0aW5mbzogaW5mbyxcblx0ZXhpZjogZXhpZlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1uYXQvbGliL21lZGlhL2ltYWdlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAzMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHZpZGVvID0gdm9pZCAwO1xuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LXRlbXAveCcsIGZ1bmN0aW9uIChfX3dlZXhfcmVxdWlyZV9fKSB7XG5cdHZpZGVvID0gX193ZWV4X3JlcXVpcmVfXygnQHdlZXgtbW9kdWxlL25hdC9tZWRpYS92aWRlbycpO1xufSk7XG5cbi8vIHBsYXlcbnZhciBwbGF5ID0gZnVuY3Rpb24gcGxheShwYXRoLCBjYikge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdGlmICghcGF0aCkge1xuXHRcdFx0cmVqZWN0KHtcblx0XHRcdFx0Y29kZTogMTEwMDQwLFxuXHRcdFx0XHRtZXNzYWdlOiAnTUVESUFfTUlTU0lOR19BUkdVTUVOVCdcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZpZGVvLnBsYXkocGF0aCwgZnVuY3Rpb24gKHJldCkge1xuXHRcdFx0cmV0ID0gcmV0IHx8IHt9O1xuXG5cdFx0XHRpZiAocmV0LmVycm9yKSB7XG5cdFx0XHRcdHJlamVjdChyZXQuZXJyb3IpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihyZXQuZXJyb3IsIG51bGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihudWxsKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59O1xuXG4vLyBwYXVzZVxuXG52YXIgcGF1c2UgPSBmdW5jdGlvbiBwYXVzZShjYikge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdHZpZGVvLnBhdXNlKGZ1bmN0aW9uIChyZXQpIHtcblx0XHRcdHJldCA9IHJldCB8fCB7fTtcblxuXHRcdFx0aWYgKHJldC5lcnJvcikge1xuXHRcdFx0XHRyZWplY3QocmV0LmVycm9yKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IocmV0LmVycm9yLCBudWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IobnVsbCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuLy8gc3RvcFxuXG52YXIgc3RvcCA9IGZ1bmN0aW9uIHN0b3AoY2IpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHR2aWRlby5zdG9wKGZ1bmN0aW9uIChyZXQpIHtcblx0XHRcdHJldCA9IHJldCB8fCB7fTtcblxuXHRcdFx0aWYgKHJldC5lcnJvcikge1xuXHRcdFx0XHRyZWplY3QocmV0LmVycm9yKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IocmV0LmVycm9yLCBudWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IobnVsbCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHBsYXk6IHBsYXksXG5cdHBhdXNlOiBwYXVzZSxcblx0c3RvcDogc3RvcFxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1uYXQvbGliL21lZGlhL3ZpZGVvL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAzMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIG1vZGFsID0gdm9pZCAwO1xuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LXRlbXAveCcsIGZ1bmN0aW9uIChfX3dlZXhfcmVxdWlyZV9fKSB7XG5cdG1vZGFsID0gX193ZWV4X3JlcXVpcmVfXygnQHdlZXgtbW9kdWxlL25hdC9tb2RhbCcpO1xufSk7XG5cbi8vIGFsZXJ0XG5cbnZhciBhbGVydCA9IGZ1bmN0aW9uIGFsZXJ0KG9wdHMsIGNiKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0aWYgKHR5cGVvZiBvcHRzID09PSAnc3RyaW5nJykge1xuXHRcdFx0b3B0cyA9IHtcblx0XHRcdFx0bWVzc2FnZTogb3B0c1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRvcHRzID0gb3B0cyB8fCB7fTtcblxuXHRcdG1vZGFsLmFsZXJ0KHtcblx0XHRcdHRpdGxlOiBvcHRzLnRpdGxlIHx8ICcnLFxuXHRcdFx0bWVzc2FnZTogb3B0cy5tZXNzYWdlIHx8ICcnLFxuXHRcdFx0b2tCdXR0b246IG9wdHMub2tCdXR0b24gfHwgJ09LJ1xuXHRcdH0sIGZ1bmN0aW9uIChyZXQpIHtcblx0XHRcdHJldCA9IHJldCB8fCB7fTtcblxuXHRcdFx0aWYgKHJldC5lcnJvcikge1xuXHRcdFx0XHRyZWplY3QocmV0LmVycm9yKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IocmV0LmVycm9yLCBudWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IobnVsbCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuLy8gY29uZmlybVxuXG52YXIgY29uZmlybSA9IGZ1bmN0aW9uIGNvbmZpcm0ob3B0cywgY2IpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRpZiAodHlwZW9mIG9wdHMgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRvcHRzID0ge1xuXHRcdFx0XHRtZXNzYWdlOiBvcHRzXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdG9wdHMgPSBvcHRzIHx8IHt9O1xuXG5cdFx0bW9kYWwuY29uZmlybSh7XG5cdFx0XHR0aXRsZTogb3B0cy50aXRsZSB8fCAnJyxcblx0XHRcdG1lc3NhZ2U6IG9wdHMubWVzc2FnZSB8fCAnJyxcblx0XHRcdG9rQnV0dG9uOiBvcHRzLm9rQnV0dG9uIHx8ICdPSycsXG5cdFx0XHRjYW5jZWxCdXR0b246IG9wdHMuY2FuY2VsQnV0dG9uIHx8ICdDYW5jZWwnXG5cdFx0fSwgZnVuY3Rpb24gKHJldCkge1xuXHRcdFx0cmV0ID0gcmV0IHx8IHt9O1xuXG5cdFx0XHRpZiAocmV0LmVycm9yKSB7XG5cdFx0XHRcdHJlamVjdChyZXQuZXJyb3IpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihyZXQuZXJyb3IsIG51bGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzb2x2ZShyZXQpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihudWxsLCByZXQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbi8vIHByb21wdFxuXG52YXIgcHJvbXB0ID0gZnVuY3Rpb24gcHJvbXB0KG9wdHMsIGNiKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0aWYgKHR5cGVvZiBvcHRzID09PSAnc3RyaW5nJykge1xuXHRcdFx0b3B0cyA9IHtcblx0XHRcdFx0bWVzc2FnZTogb3B0c1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRvcHRzID0gb3B0cyB8fCB7fTtcblxuXHRcdG1vZGFsLnByb21wdCh7XG5cdFx0XHR0aXRsZTogb3B0cy50aXRsZSB8fCAnJyxcblx0XHRcdG1lc3NhZ2U6IG9wdHMubWVzc2FnZSB8fCAnJyxcblx0XHRcdHRleHQ6IG9wdHMudGV4dCB8fCAnJyxcblx0XHRcdG9rQnV0dG9uOiBvcHRzLm9rQnV0dG9uIHx8ICdPSycsXG5cdFx0XHRjYW5jZWxCdXR0b246IG9wdHMuY2FuY2VsQnV0dG9uIHx8ICdDYW5jZWwnXG5cdFx0fSwgZnVuY3Rpb24gKHJldCkge1xuXHRcdFx0cmV0ID0gcmV0IHx8IHt9O1xuXG5cdFx0XHRpZiAocmV0LmVycm9yKSB7XG5cdFx0XHRcdHJlamVjdChyZXQuZXJyb3IpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihyZXQuZXJyb3IsIG51bGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzb2x2ZShyZXQpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihudWxsLCByZXQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbi8vIHRvYXN0XG5cbnZhciB0b2FzdCA9IGZ1bmN0aW9uIHRvYXN0KG9wdHMsIGNiKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0aWYgKHR5cGVvZiBvcHRzID09PSAnc3RyaW5nJykge1xuXHRcdFx0b3B0cyA9IHtcblx0XHRcdFx0bWVzc2FnZTogb3B0c1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRvcHRzID0gb3B0cyB8fCB7fTtcblxuXHRcdC8vIHBvc2l0aW9uXG5cdFx0aWYgKFsndG9wJywgJ21pZGRsZScsICdib3R0b20nXS5pbmRleE9mKG9wdHMucG9zaXRpb24pIDwgMCkge1xuXHRcdFx0b3B0cy5wb3NpdGlvbiA9ICdib3R0b20nO1xuXHRcdH1cblxuXHRcdG1vZGFsLnRvYXN0KHtcblx0XHRcdG1lc3NhZ2U6IG9wdHMubWVzc2FnZSB8fCAnJyxcblx0XHRcdGR1cmF0aW9uOiBvcHRzLmR1cmF0aW9uIHx8IDMwMDAsXG5cdFx0XHRwb3NpdGlvbjogb3B0cy5wb3NpdGlvblxuXHRcdH0sIGZ1bmN0aW9uIChyZXQpIHtcblx0XHRcdHJldCA9IHJldCB8fCB7fTtcblxuXHRcdFx0aWYgKHJldC5lcnJvcikge1xuXHRcdFx0XHRyZWplY3QocmV0LmVycm9yKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IocmV0LmVycm9yLCBudWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IobnVsbCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGFsZXJ0OiBhbGVydCxcblx0Y29uZmlybTogY29uZmlybSxcblx0cHJvbXB0OiBwcm9tcHQsXG5cdHRvYXN0OiB0b2FzdFxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1uYXQvbGliL21vZGFsL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAzMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlY29yZGVyID0gdm9pZCAwO1xuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LXRlbXAveCcsIGZ1bmN0aW9uIChfX3dlZXhfcmVxdWlyZV9fKSB7XG5cdHJlY29yZGVyID0gX193ZWV4X3JlcXVpcmVfXygnQHdlZXgtbW9kdWxlL25hdC9yZWNvcmRlcicpO1xufSk7XG5cbi8vIHN0YXJ0XG52YXIgc3RhcnQgPSBmdW5jdGlvbiBzdGFydChvcHRzLCBjYikge1xuXHRvcHRzID0gb3B0cyB8fCB7fTtcblxuXHRpZiAodHlwZW9mIG9wdHMgPT09ICdmdW5jdGlvbicpIHtcblx0XHRjYiA9IG9wdHM7XG5cdFx0b3B0cyA9IHt9O1xuXHR9XG5cblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHQvLyBjaGFubmVsXG5cdFx0aWYgKFsnc3RlcmVvJywgJ21vbm8nXS5pbmRleE9mKG9wdHMuY2hhbm5lbCkgPCAwKSB7XG5cdFx0XHRvcHRzLmNoYW5uZWwgPSAnc3RlcmVvJztcblx0XHR9XG5cblx0XHQvLyBxdWFsaXR5XG5cdFx0aWYgKFsnbG93JywgJ3N0YW5kYXJkJywgJ2hpZ2gnXS5pbmRleE9mKG9wdHMucXVhbGl0eSkgPCAwKSB7XG5cdFx0XHRvcHRzLnF1YWxpdHkgPSAnc3RhbmRhcmQnO1xuXHRcdH1cblxuXHRcdHJlY29yZGVyLnN0YXJ0KHtcblx0XHRcdGNoYW5uZWw6IG9wdHMuY2hhbm5lbCxcblx0XHRcdHF1YWxpdHk6IG9wdHMucXVhbGl0eVxuXHRcdH0sIGZ1bmN0aW9uIChyZXQpIHtcblx0XHRcdHJldCA9IHJldCB8fCB7fTtcblxuXHRcdFx0aWYgKHJldC5lcnJvcikge1xuXHRcdFx0XHRyZWplY3QocmV0LmVycm9yKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IocmV0LmVycm9yLCBudWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IobnVsbCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuLy8gcGF1c2VcblxudmFyIHBhdXNlID0gZnVuY3Rpb24gcGF1c2UoY2IpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRyZWNvcmRlci5wYXVzZShmdW5jdGlvbiAocmV0KSB7XG5cdFx0XHRyZXQgPSByZXQgfHwge307XG5cblx0XHRcdGlmIChyZXQuZXJyb3IpIHtcblx0XHRcdFx0cmVqZWN0KHJldC5lcnJvcik7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHJldC5lcnJvciwgbnVsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKG51bGwpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbi8vIHN0b3BcblxudmFyIHN0b3AgPSBmdW5jdGlvbiBzdG9wKGNiKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0cmVjb3JkZXIuc3RvcChmdW5jdGlvbiAocmV0KSB7XG5cdFx0XHRyZXQgPSByZXQgfHwge307XG5cblx0XHRcdGlmIChyZXQuZXJyb3IpIHtcblx0XHRcdFx0cmVqZWN0KHJldC5lcnJvcik7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHJldC5lcnJvciwgbnVsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXNvbHZlKHJldCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKG51bGwsIHJldCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHN0YXJ0OiBzdGFydCxcblx0cGF1c2U6IHBhdXNlLFxuXHRzdG9wOiBzdG9wXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LW5hdC9saWIvcmVjb3JkZXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDMwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3N0cmVhbSA9IHJlcXVpcmUoJy4vc3RyZWFtJyk7XG5cbnZhciBfc3RyZWFtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0cmVhbSk7XG5cbnZhciBfdHJhbnNmZXIgPSByZXF1aXJlKCcuL3RyYW5zZmVyJyk7XG5cbnZhciBfdHJhbnNmZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNmZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBpbXBvcnQgd2Vic29ja2V0IGZyb20gJy4vd2Vic29ja2V0J1xuLy8gaW1wb3J0IGluZm8gZnJvbSAnLi9pbmZvJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0c3RyZWFtOiBfc3RyZWFtMi5kZWZhdWx0LFxuXHR0cmFuc2ZlcjogX3RyYW5zZmVyMi5kZWZhdWx0XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LW5hdC9saWIvbmV0d29yay9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMzAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIHN0cmVhbSA9IHZvaWQgMDtcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC10ZW1wL3gnLCBmdW5jdGlvbiAoX193ZWV4X3JlcXVpcmVfXykge1xuXHRzdHJlYW0gPSBfX3dlZXhfcmVxdWlyZV9fKCdAd2VleC1tb2R1bGUvbmF0L25ldHdvcmsvc3RyZWFtJyk7XG59KTtcblxuLy8gZmV0Y2hcblxudmFyIGZldGNoID0gZnVuY3Rpb24gZmV0Y2godXJsLCBvcHRzLCBjYikge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdGlmICghdXJsKSB7XG5cdFx0XHRyZWplY3Qoe1xuXHRcdFx0XHRjb2RlOiAxNTEwNDAsXG5cdFx0XHRcdG1lc3NhZ2U6ICdGRVRDSF9NSVNTSU5HX0FSR1VNRU5UJ1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih1cmwpKSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGNiID0gb3B0cztcblx0XHRcdG9wdHMgPSB1cmw7XG5cdFx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Y2IgPSBvcHRzO1xuXHRcdFx0b3B0cyA9IHtcblx0XHRcdFx0dXJsOiB1cmxcblx0XHRcdH07XG5cdFx0fSBlbHNlIHtcblx0XHRcdG9wdHMgPSBvcHRzIHx8IHt9O1xuXHRcdFx0b3B0cy51cmwgPSB1cmw7XG5cdFx0fVxuXG5cdFx0Ly8gaGVhZGVyc1xuXHRcdG9wdHMuaGVhZGVycyA9IG9wdHMuaGVhZGVycyB8fCB7fTtcblxuXHRcdGlmIChvcHRzLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddICYmIC9hcHBsaWNhdGlvblxcL2pzb24vLnRlc3Qob3B0cy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcblx0XHRcdG9wdHMudHlwZSA9ICdqc29uJztcblx0XHR9XG5cblx0XHQvLyBtZXRob2Rcblx0XHRvcHRzLm1ldGhvZCA9IG9wdHMubWV0aG9kID8gb3B0cy5tZXRob2QudG9VcHBlckNhc2UoKSA6ICdHRVQnO1xuXG5cdFx0aWYgKFsnR0VUJywgJ1BPU1QnLCAnUFVUJywgJ1BBVENIJywgJ0RFTEVURScsICdIRUFEJ10uaW5kZXhPZihvcHRzLm1ldGhvZCkgPCAwKSB7XG5cdFx0XHRyZWplY3Qoe1xuXHRcdFx0XHRjb2RlOiAxNTEwNTAsXG5cdFx0XHRcdG1lc3NhZ2U6ICdGRVRDSF9JTlZBTElEX0FSR1VNRU5UJyxcblx0XHRcdFx0ZGV0YWlsczogJ1Vuc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kJ1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gdHlwZVxuXHRcdG9wdHMudHlwZSA9IG9wdHMudHlwZSA/IG9wdHMudHlwZS50b0xvd2VyQ2FzZSgpIDogJ2pzb24nO1xuXG5cdFx0aWYgKFsnanNvbicsICdqc29ucCcsICd0ZXh0J10uaW5kZXhPZihvcHRzLnR5cGUpIDwgMCkge1xuXHRcdFx0cmVqZWN0KHtcblx0XHRcdFx0Y29kZTogMTUxMDUwLFxuXHRcdFx0XHRtZXNzYWdlOiAnRkVUQ0hfSU5WQUxJRF9BUkdVTUVOVCcsXG5cdFx0XHRcdGRldGFpbHM6ICdVbnN1cHBvcnRlZCByZXF1ZXN0IHR5cGUnXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBib2R5XG5cdFx0aWYgKF90eXBlb2Yob3B0cy5ib2R5KSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGlmIChvcHRzLnR5cGUgPT09ICdqc29uJyAmJiBvcHRzLm1ldGhvZCAhPT0gJ0dFVCcpIHtcblx0XHRcdFx0b3B0cy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkob3B0cy5ib2R5KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlamVjdCh7XG5cdFx0XHRcdFx0Y29kZTogMTUxMDUwLFxuXHRcdFx0XHRcdG1lc3NhZ2U6ICdGRVRDSF9JTlZBTElEX0FSR1VNRU5UJyxcblx0XHRcdFx0XHRkZXRhaWxzOiAnUmVxdWVzdCBib2R5IG11c3QgYmUgYSBzdHJpbmcnXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0c3RyZWFtLmZldGNoKHtcblx0XHRcdG1ldGhvZDogb3B0cy5tZXRob2QsXG5cdFx0XHR1cmw6IG9wdHMudXJsLFxuXHRcdFx0aGVhZGVyczogb3B0cy5oZWFkZXJzLFxuXHRcdFx0dHlwZTogb3B0cy50eXBlLFxuXHRcdFx0Ym9keTogb3B0cy5ib2R5XG5cdFx0fSwgZnVuY3Rpb24gKHJldCkge1xuXHRcdFx0cmV0ID0gcmV0IHx8IHt9O1xuXG5cdFx0XHRpZiAocmV0LmVycm9yKSB7XG5cdFx0XHRcdHJlamVjdChyZXQuZXJyb3IpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihyZXQuZXJyb3IsIG51bGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHJldC5vayAmJiB0eXBlb2YgcmV0LmRhdGEgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0c3dpdGNoIChvcHRzLnR5cGUpIHtcblx0XHRcdFx0XHRcdGNhc2UgJ2pzb24nOlxuXHRcdFx0XHRcdFx0XHRyZXQuZGF0YSA9IEpTT04ucGFyc2UocmV0LmRhdGEpO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdFx0Y2FzZSAnanNvbnAnOlxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIG1hdGNoZWQgPSByZXQuZGF0YS5tYXRjaCgvXlxccyo/LipcXCgoLiopXFwpXFxzKj8kLyk7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKG1hdGNoZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldC5kYXRhID0gSlNPTi5wYXJzZShtYXRjaGVkWzFdKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmVzb2x2ZShyZXQpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihudWxsLCByZXQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRmZXRjaDogZmV0Y2hcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbmF0L2xpYi9uZXR3b3JrL3N0cmVhbS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMzAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIHRyYW5zZmVyID0gdm9pZCAwO1xuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LXRlbXAveCcsIGZ1bmN0aW9uIChfX3dlZXhfcmVxdWlyZV9fKSB7XG5cdHRyYW5zZmVyID0gX193ZWV4X3JlcXVpcmVfXygnQHdlZXgtbW9kdWxlL25hdC9uZXR3b3JrL3RyYW5zZmVyJyk7XG59KTtcblxuLy8gZG93bmxvYWRcblxudmFyIGRvd25sb2FkID0gZnVuY3Rpb24gZG93bmxvYWQodXJsLCBvcHRzLCBob29rcywgY2IpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRpZiAoIXVybCkge1xuXHRcdFx0cmVqZWN0KHtcblx0XHRcdFx0Y29kZTogMTUxMDQwLFxuXHRcdFx0XHRtZXNzYWdlOiAnRE9XTkxPQURfTUlTU0lOR19BUkdVTUVOVCdcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Y2IgPSBvcHRzO1xuXHRcdH0gZWxzZSBpZiAoKHR5cGVvZiBvcHRzID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihvcHRzKSkgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRpZiAodHlwZW9mIGhvb2tzID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNiID0gaG9va3M7XG5cdFx0XHR9XG5cdFx0XHQvLyB0b2RvXG5cdFx0XHRpZiAodHlwZW9mIG9wdHMub25Qcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRob29rcyA9IG9wdHM7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih1cmwpKSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdG9wdHMgPSB1cmw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG9wdHMgPSBvcHRzIHx8IHt9O1xuXHRcdFx0b3B0cy51cmwgPSB1cmw7XG5cdFx0fVxuXG5cdFx0Ly8gaG9va3Ncblx0XHRob29rcyA9IGhvb2tzIHx8IHt9O1xuXG5cdFx0dHJhbnNmZXIuZG93bmxvYWQoe1xuXHRcdFx0dXJsOiBvcHRzLnVybCxcblx0XHRcdGhlYWRlcnM6IG9wdHMuaGVhZGVycyB8fCB7fSxcblx0XHRcdHRhcmdldDogb3B0cy50YXJnZXRcblx0XHR9LCBmdW5jdGlvbiAocmV0KSB7XG5cdFx0XHRyZXQgPSByZXQgfHwge307XG5cblx0XHRcdGlmIChyZXQuZXJyb3IpIHtcblx0XHRcdFx0cmVqZWN0KHJldC5lcnJvcik7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHJldC5lcnJvciwgbnVsbCk7XG5cdFx0XHR9IGVsc2UgaWYgKHJldC5wcm9ncmVzcykge1xuXHRcdFx0XHRpZiAodHlwZW9mIGhvb2tzLm9uUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRob29rcy5vblByb2dyZXNzKHJldC5wcm9ncmVzcyk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc29sdmUocmV0KTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IobnVsbCwgcmV0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59O1xuXG4vLyB1cGxvYWRcblxudmFyIHVwbG9hZCA9IGZ1bmN0aW9uIHVwbG9hZCh1cmwsIG9wdHMsIGhvb2tzLCBjYikge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdGlmICghdXJsKSB7XG5cdFx0XHRyZWplY3Qoe1xuXHRcdFx0XHRjb2RlOiAxNTEwNDAsXG5cdFx0XHRcdG1lc3NhZ2U6ICdVUExPQURfTUlTU0lOR19BUkdVTUVOVCdcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Y2IgPSBvcHRzO1xuXHRcdH0gZWxzZSBpZiAoKHR5cGVvZiBvcHRzID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihvcHRzKSkgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRpZiAodHlwZW9mIGhvb2tzID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNiID0gaG9va3M7XG5cdFx0XHR9XG5cdFx0XHQvLyB0b2RvXG5cdFx0XHRpZiAodHlwZW9mIG9wdHMub25Qcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRob29rcyA9IG9wdHM7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih1cmwpKSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdG9wdHMgPSB1cmw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG9wdHMgPSBvcHRzIHx8IHt9O1xuXHRcdFx0b3B0cy51cmwgPSB1cmw7XG5cdFx0fVxuXG5cdFx0Ly8gaG9va3Ncblx0XHRob29rcyA9IGhvb2tzIHx8IHt9O1xuXG5cdFx0Ly8gcGF0aFxuXHRcdGlmICghb3B0cy5wYXRoKSB7XG5cdFx0XHRyZWplY3Qoe1xuXHRcdFx0XHRjb2RlOiAxNTEwNDAsXG5cdFx0XHRcdG1lc3NhZ2U6ICdVUExPQURfTUlTU0lOR19BUkdVTUVOVCdcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIG1ldGhvZFxuXHRcdG9wdHMubWV0aG9kID0gb3B0cy5tZXRob2QgPyBvcHRzLm1ldGhvZC50b1VwcGVyQ2FzZSgpIDogJ1BPU1QnO1xuXG5cdFx0aWYgKFsnUE9TVCcsICdQVVQnLCAnUEFUQ0gnXS5pbmRleE9mKG9wdHMubWV0aG9kKSA8IDApIHtcblx0XHRcdHJlamVjdCh7XG5cdFx0XHRcdGNvZGU6IDE1MTA1MCxcblx0XHRcdFx0bWVzc2FnZTogJ1VQTE9BRF9JTlZBTElEX0FSR1VNRU5UJyxcblx0XHRcdFx0ZGV0YWlsczogJ1Vuc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kJ1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dHJhbnNmZXIudXBsb2FkKHtcblx0XHRcdHVybDogb3B0cy51cmwsXG5cdFx0XHRtZXRob2Q6IG9wdHMubWV0aG9kLFxuXHRcdFx0cGF0aDogb3B0cy5wYXRoLFxuXHRcdFx0bmFtZTogb3B0cy5uYW1lLFxuXHRcdFx0aGVhZGVyczogb3B0cy5oZWFkZXJzIHx8IHt9LFxuXHRcdFx0Zm9ybURhdGE6IG9wdHMuZm9ybURhdGEgfHwge30sXG5cdFx0XHRtaW1lVHlwZTogb3B0cy5taW1lVHlwZVxuXHRcdH0sIGZ1bmN0aW9uIChyZXQpIHtcblx0XHRcdHJldCA9IHJldCB8fCB7fTtcblxuXHRcdFx0aWYgKHJldC5lcnJvcikge1xuXHRcdFx0XHRyZWplY3QocmV0LmVycm9yKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IocmV0LmVycm9yLCBudWxsKTtcblx0XHRcdH0gZWxzZSBpZiAocmV0LnByb2dyZXNzKSB7XG5cdFx0XHRcdGlmICh0eXBlb2YgaG9va3Mub25Qcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdGhvb2tzLm9uUHJvZ3Jlc3MocmV0LnByb2dyZXNzKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzb2x2ZShyZXQpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihudWxsLCByZXQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRkb3dubG9hZDogZG93bmxvYWQsXG5cdHVwbG9hZDogdXBsb2FkXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LW5hdC9saWIvbmV0d29yay90cmFuc2Zlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMzAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfYWNjZWxlcm9tZXRlciA9IHJlcXVpcmUoJy4vYWNjZWxlcm9tZXRlcicpO1xuXG52YXIgX2FjY2VsZXJvbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWNjZWxlcm9tZXRlcik7XG5cbnZhciBfY29tcGFzcyA9IHJlcXVpcmUoJy4vY29tcGFzcycpO1xuXG52YXIgX2NvbXBhc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcGFzcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRhY2NlbGVyb21ldGVyOiBfYWNjZWxlcm9tZXRlcjIuZGVmYXVsdCxcblx0Y29tcGFzczogX2NvbXBhc3MyLmRlZmF1bHRcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbmF0L2xpYi9zZW5zb3IvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDIwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDMwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYWNjZWxlcm9tZXRlciA9IHZvaWQgMDtcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC10ZW1wL3gnLCBmdW5jdGlvbiAoX193ZWV4X3JlcXVpcmVfXykge1xuXHRhY2NlbGVyb21ldGVyID0gX193ZWV4X3JlcXVpcmVfXygnQHdlZXgtbW9kdWxlL25hdC9zZW5zb3IvYWNjZWxlcm9tZXRlcicpO1xufSk7XG5cbi8vIGdldFxudmFyIGdldCA9IGZ1bmN0aW9uIGdldChvcHRzLCBjYikge1xuXHRpZiAodHlwZW9mIG9wdHMgPT09ICdmdW5jdGlvbicpIHtcblx0XHRjYiA9IG9wdHM7XG5cdFx0b3B0cyA9IHt9O1xuXHR9XG5cblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRhY2NlbGVyb21ldGVyLmdldChmdW5jdGlvbiAocmV0KSB7XG5cdFx0XHRyZXQgPSByZXQgfHwge307XG5cblx0XHRcdGlmIChyZXQuZXJyb3IpIHtcblx0XHRcdFx0cmVqZWN0KHJldC5lcnJvcik7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHJldC5lcnJvciwgbnVsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXNvbHZlKHJldCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKG51bGwsIHJldCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuLy8gd2F0Y2hcblxudmFyIHdhdGNoID0gZnVuY3Rpb24gd2F0Y2gob3B0cywgY2IpIHtcblx0aWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0Y2IgPSBvcHRzO1xuXHRcdG9wdHMgPSB7fTtcblx0fVxuXG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0YWNjZWxlcm9tZXRlci53YXRjaCh7XG5cdFx0XHRpbnRlcnZhbDogb3B0cy5pbnRlcnZhbCB8fCAxMDBcblx0XHR9LCBmdW5jdGlvbiAocmV0KSB7XG5cdFx0XHRyZXQgPSByZXQgfHwge307XG5cblx0XHRcdGlmIChyZXQuZXJyb3IpIHtcblx0XHRcdFx0cmVqZWN0KHJldC5lcnJvcik7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHJldC5lcnJvciwgbnVsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXNvbHZlKHJldCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKG51bGwsIHJldCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuLy8gY2xlYXIgd2F0Y2hcblxudmFyIGNsZWFyV2F0Y2ggPSBmdW5jdGlvbiBjbGVhcldhdGNoKGNiKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0YWNjZWxlcm9tZXRlci5jbGVhcldhdGNoKGZ1bmN0aW9uIChyZXQpIHtcblx0XHRcdHJldCA9IHJldCB8fCB7fTtcblxuXHRcdFx0aWYgKHJldC5lcnJvcikge1xuXHRcdFx0XHRyZWplY3QocmV0LmVycm9yKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IocmV0LmVycm9yLCBudWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc29sdmUocmV0KTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IobnVsbCwgcmV0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0Z2V0OiBnZXQsXG5cdHdhdGNoOiB3YXRjaCxcblx0Y2xlYXJXYXRjaDogY2xlYXJXYXRjaFxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1uYXQvbGliL3NlbnNvci9hY2NlbGVyb21ldGVyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAzMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNvbXBhc3MgPSB2b2lkIDA7XG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtdGVtcC94JywgZnVuY3Rpb24gKF9fd2VleF9yZXF1aXJlX18pIHtcblx0Y29tcGFzcyA9IF9fd2VleF9yZXF1aXJlX18oJ0B3ZWV4LW1vZHVsZS9uYXQvc2Vuc29yL2NvbXBhc3MnKTtcbn0pO1xuXG4vLyBnZXRcbnZhciBnZXQgPSBmdW5jdGlvbiBnZXQob3B0cywgY2IpIHtcblx0aWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0Y2IgPSBvcHRzO1xuXHRcdG9wdHMgPSB7fTtcblx0fVxuXG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0Y29tcGFzcy5nZXQoZnVuY3Rpb24gKHJldCkge1xuXHRcdFx0cmV0ID0gcmV0IHx8IHt9O1xuXG5cdFx0XHRpZiAocmV0LmVycm9yKSB7XG5cdFx0XHRcdHJlamVjdChyZXQuZXJyb3IpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihyZXQuZXJyb3IsIG51bGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzb2x2ZShyZXQpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihudWxsLCByZXQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbi8vIHdhdGNoXG5cbnZhciB3YXRjaCA9IGZ1bmN0aW9uIHdhdGNoKG9wdHMsIGNiKSB7XG5cdGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGNiID0gb3B0cztcblx0XHRvcHRzID0ge307XG5cdH1cblxuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdGNvbXBhc3Mud2F0Y2goe1xuXHRcdFx0aW50ZXJ2YWw6IG9wdHMuaW50ZXJ2YWwgfHwgMTAwXG5cdFx0fSwgZnVuY3Rpb24gKHJldCkge1xuXHRcdFx0cmV0ID0gcmV0IHx8IHt9O1xuXG5cdFx0XHRpZiAocmV0LmVycm9yKSB7XG5cdFx0XHRcdHJlamVjdChyZXQuZXJyb3IpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihyZXQuZXJyb3IsIG51bGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzb2x2ZShyZXQpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihudWxsLCByZXQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbi8vIGNsZWFyIHdhdGNoXG5cbnZhciBjbGVhcldhdGNoID0gZnVuY3Rpb24gY2xlYXJXYXRjaChjYikge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdGNvbXBhc3MuY2xlYXJXYXRjaChmdW5jdGlvbiAocmV0KSB7XG5cdFx0XHRyZXQgPSByZXQgfHwge307XG5cblx0XHRcdGlmIChyZXQuZXJyb3IpIHtcblx0XHRcdFx0cmVqZWN0KHJldC5lcnJvcik7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHJldC5lcnJvciwgbnVsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXNvbHZlKHJldCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKG51bGwsIHJldCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGdldDogZ2V0LFxuXHR3YXRjaDogd2F0Y2gsXG5cdGNsZWFyV2F0Y2g6IGNsZWFyV2F0Y2hcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbmF0L2xpYi9zZW5zb3IvY29tcGFzcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMzAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfYmFzZSA9IHJlcXVpcmUoJy4vYmFzZScpO1xuXG52YXIgX2Jhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmFzZSk7XG5cbnZhciBfYmF0dGVyeSA9IHJlcXVpcmUoJy4vYmF0dGVyeScpO1xuXG52YXIgX2JhdHRlcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmF0dGVyeSk7XG5cbnZhciBfbmV0d29yayA9IHJlcXVpcmUoJy4vbmV0d29yaycpO1xuXG52YXIgX25ldHdvcmsyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbmV0d29yayk7XG5cbnZhciBfc2NyZWVuID0gcmVxdWlyZSgnLi9zY3JlZW4nKTtcblxudmFyIF9zY3JlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2NyZWVuKTtcblxudmFyIF92aWJyYXRpb24gPSByZXF1aXJlKCcuL3ZpYnJhdGlvbicpO1xuXG52YXIgX3ZpYnJhdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92aWJyYXRpb24pO1xuXG52YXIgX3ZvbHVtZSA9IHJlcXVpcmUoJy4vdm9sdW1lJyk7XG5cbnZhciBfdm9sdW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZvbHVtZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRiYXNlOiBfYmFzZTIuZGVmYXVsdCxcblx0YmF0dGVyeTogX2JhdHRlcnkyLmRlZmF1bHQsXG5cdG5ldHdvcms6IF9uZXR3b3JrMi5kZWZhdWx0LFxuXHRzY3JlZW46IF9zY3JlZW4yLmRlZmF1bHQsXG5cdHZpYnJhdGlvbjogX3ZpYnJhdGlvbjIuZGVmYXVsdCxcblx0dm9sdW1lOiBfdm9sdW1lMi5kZWZhdWx0XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LW5hdC9saWIvZGV2aWNlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAzMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRldmljZSA9IHZvaWQgMDtcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC10ZW1wL3gnLCBmdW5jdGlvbiAoX193ZWV4X3JlcXVpcmVfXykge1xuXHRkZXZpY2UgPSBfX3dlZXhfcmVxdWlyZV9fKCdAd2VleC1tb2R1bGUvbmF0L2RldmljZS9iYXNlJyk7XG59KTtcblxuLy8gaW5mb1xuXG52YXIgaW5mbyA9IGZ1bmN0aW9uIGluZm8oY2IpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRkZXZpY2UuaW5mbyhmdW5jdGlvbiAocmV0KSB7XG5cdFx0XHRyZXQgPSByZXQgfHwge307XG5cblx0XHRcdGlmIChyZXQuZXJyb3IpIHtcblx0XHRcdFx0cmVqZWN0KHJldC5lcnJvcik7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHJldC5lcnJvciwgbnVsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXNvbHZlKHJldCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKG51bGwsIHJldCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGluZm86IGluZm9cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbmF0L2xpYi9kZXZpY2UvYmFzZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMzAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBiYXR0ZXJ5ID0gdm9pZCAwO1xuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LXRlbXAveCcsIGZ1bmN0aW9uIChfX3dlZXhfcmVxdWlyZV9fKSB7XG5cdGJhdHRlcnkgPSBfX3dlZXhfcmVxdWlyZV9fKCdAd2VleC1tb2R1bGUvbmF0L2RldmljZS9iYXR0ZXJ5Jyk7XG59KTtcblxuLy8gc3RhdHVzXG5cbnZhciBzdGF0dXMgPSBmdW5jdGlvbiBzdGF0dXMoY2IpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRiYXR0ZXJ5LnN0YXR1cyhmdW5jdGlvbiAocmV0KSB7XG5cdFx0XHRyZXQgPSByZXQgfHwge307XG5cblx0XHRcdGlmIChyZXQuZXJyb3IpIHtcblx0XHRcdFx0cmVqZWN0KHJldC5lcnJvcik7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHJldC5lcnJvciwgbnVsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXNvbHZlKHJldCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKG51bGwsIHJldCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHN0YXR1czogc3RhdHVzXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LW5hdC9saWIvZGV2aWNlL2JhdHRlcnkvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDIwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDMwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbmV0d29yayA9IHZvaWQgMDtcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC10ZW1wL3gnLCBmdW5jdGlvbiAoX193ZWV4X3JlcXVpcmVfXykge1xuXHRuZXR3b3JrID0gX193ZWV4X3JlcXVpcmVfXygnQHdlZXgtbW9kdWxlL25hdC9kZXZpY2UvbmV0d29yaycpO1xufSk7XG5cbi8vIHN0YXR1c1xuXG52YXIgc3RhdHVzID0gZnVuY3Rpb24gc3RhdHVzKGNiKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0bmV0d29yay5zdGF0dXMoZnVuY3Rpb24gKHJldCkge1xuXHRcdFx0cmV0ID0gcmV0IHx8IHt9O1xuXG5cdFx0XHRpZiAocmV0LmVycm9yKSB7XG5cdFx0XHRcdHJlamVjdChyZXQuZXJyb3IpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihyZXQuZXJyb3IsIG51bGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzb2x2ZShyZXQpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihudWxsLCByZXQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRzdGF0dXM6IHN0YXR1c1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1uYXQvbGliL2RldmljZS9uZXR3b3JrL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAzMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHNjcmVlbiA9IHZvaWQgMDtcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC10ZW1wL3gnLCBmdW5jdGlvbiAoX193ZWV4X3JlcXVpcmVfXykge1xuXHRzY3JlZW4gPSBfX3dlZXhfcmVxdWlyZV9fKCdAd2VleC1tb2R1bGUvbmF0L2RldmljZS9zY3JlZW4nKTtcbn0pO1xuXG4vLyBicmlnaHRuZXNzXG5cbnZhciBicmlnaHRuZXNzID0ge1xuXHRnZXQ6IGZ1bmN0aW9uIGdldChjYikge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHRzY3JlZW4uZ2V0QnJpZ2h0bmVzcyhmdW5jdGlvbiAocmV0KSB7XG5cdFx0XHRcdHJldCA9IHJldCB8fCB7fTtcblxuXHRcdFx0XHRpZiAocmV0LmVycm9yKSB7XG5cdFx0XHRcdFx0cmVqZWN0KHJldC5lcnJvcik7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IocmV0LmVycm9yLCBudWxsKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXNvbHZlKHJldCk7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IobnVsbCwgcmV0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0sXG5cblx0c2V0OiBmdW5jdGlvbiBzZXQoYnJpZ2h0bmVzcywgY2IpIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdFx0c2NyZWVuLnNldEJyaWdodG5lc3MoYnJpZ2h0bmVzcywgZnVuY3Rpb24gKHJldCkge1xuXHRcdFx0XHRyZXQgPSByZXQgfHwge307XG5cblx0XHRcdFx0aWYgKHJldC5lcnJvcikge1xuXHRcdFx0XHRcdHJlamVjdChyZXQuZXJyb3IpO1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHJldC5lcnJvciwgbnVsbCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVzb2x2ZShyZXQpO1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKG51bGwsIHJldCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG59O1xuXG4vLyBvcmllbnRhdGlvblxuXG52YXIgb3JpZW50YXRpb24gPSB7XG5cdHN0YXR1czogZnVuY3Rpb24gc3RhdHVzKGNiKSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRcdHNjcmVlbi5nZXRPcmllbnRhdGlvbihmdW5jdGlvbiAocmV0KSB7XG5cdFx0XHRcdHJldCA9IHJldCB8fCB7fTtcblxuXHRcdFx0XHRpZiAocmV0LmVycm9yKSB7XG5cdFx0XHRcdFx0cmVqZWN0KHJldC5lcnJvcik7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IocmV0LmVycm9yLCBudWxsKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXNvbHZlKHJldCk7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IobnVsbCwgcmV0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0sXG5cblx0bG9jazogZnVuY3Rpb24gbG9jayhvcmllbnRhdGlvbiwgY2IpIHtcblx0XHRpZiAodHlwZW9mIG9yaWVudGF0aW9uID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRjYiA9IG9yaWVudGF0aW9uO1xuXHRcdFx0b3JpZW50YXRpb24gPSB7fTtcblx0XHR9XG5cblx0XHQvLyBvcmllbnRhdGlvblxuXHRcdGlmIChbJ3BvcnRyYWl0LXByaW1hcnknLCAncG9ydHJhaXQtc2Vjb25kYXJ5JywgJ2xhbmRzY2FwZS1wcmltYXJ5JywgJ2xhbmRzY2FwZS1zZWNvbmRhcnknLCAncG9ydHJhaXQnLCAvLyBlaXRoZXIgcG9ydHJhaXQtcHJpbWFyeSBvciBwb3J0cmFpdC1zZWNvbmRhcnkuXG5cdFx0J2xhbmRzY2FwZScsIC8vIGVpdGhlciBsYW5kc2NhcGUtcHJpbWFyeSBvciBsYW5kc2NhcGUtc2Vjb25kYXJ5LlxuXHRcdCdhbnknIC8vIEFsbCBvcmllbnRhdGlvbnMgYXJlIHN1cHBvcnRlZCAodW5sb2NrZWQgb3JpZW50YXRpb24pXG5cdFx0XS5pbmRleE9mKG9yaWVudGF0aW9uKSA8IDApIHtcblx0XHRcdG9yaWVudGF0aW9uID0gJ2FueSc7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRcdHNjcmVlbi5sb2NrT3JpZW50YXRpb24ob3JpZW50YXRpb24sIGZ1bmN0aW9uIChyZXQpIHtcblx0XHRcdFx0cmV0ID0gcmV0IHx8IHt9O1xuXG5cdFx0XHRcdGlmIChyZXQuZXJyb3IpIHtcblx0XHRcdFx0XHRyZWplY3QocmV0LmVycm9yKTtcblx0XHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihyZXQuZXJyb3IsIG51bGwpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJlc29sdmUocmV0KTtcblx0XHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihudWxsLCByZXQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fSxcblxuXHR1bmxvY2s6IGZ1bmN0aW9uIHVubG9jayhjYikge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHRzY3JlZW4udW5sb2NrT3JpZW50YXRpb24oZnVuY3Rpb24gKHJldCkge1xuXHRcdFx0XHRyZXQgPSByZXQgfHwge307XG5cblx0XHRcdFx0aWYgKHJldC5lcnJvcikge1xuXHRcdFx0XHRcdHJlamVjdChyZXQuZXJyb3IpO1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHJldC5lcnJvciwgbnVsbCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVzb2x2ZShyZXQpO1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKG51bGwsIHJldCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG59O1xuXG4vLyBpbmZvXG5cbnZhciBpbmZvID0gZnVuY3Rpb24gaW5mbyhjYikge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdHNjcmVlbi5pbmZvKGZ1bmN0aW9uIChyZXQpIHtcblx0XHRcdHJldCA9IHJldCB8fCB7fTtcblxuXHRcdFx0aWYgKHJldC5lcnJvcikge1xuXHRcdFx0XHRyZWplY3QocmV0LmVycm9yKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IocmV0LmVycm9yLCBudWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc29sdmUocmV0KTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IobnVsbCwgcmV0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0YnJpZ2h0bmVzczogYnJpZ2h0bmVzcyxcblx0b3JpZW50YXRpb246IG9yaWVudGF0aW9uLFxuXHRpbmZvOiBpbmZvXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LW5hdC9saWIvZGV2aWNlL3NjcmVlbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMzAiLCIndXNlIHN0cmljdCc7XG5cbnZhciB2aWJyYXRpb24gPSB2b2lkIDA7XG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtdGVtcC94JywgZnVuY3Rpb24gKF9fd2VleF9yZXF1aXJlX18pIHtcblx0dmlicmF0aW9uID0gX193ZWV4X3JlcXVpcmVfXygnQHdlZXgtbW9kdWxlL25hdC9kZXZpY2UvdmlicmF0aW9uJyk7XG59KTtcblxuLy8gdmlicmF0ZVxuXG52YXIgdmlicmF0ZSA9IGZ1bmN0aW9uIHZpYnJhdGUodGltZSwgY2IpIHtcblx0aWYgKHR5cGVvZiB0aW1lID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0Y2IgPSB0aW1lO1xuXHRcdHRpbWUgPSB7fTtcblx0fVxuXG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0dmlicmF0aW9uLnZpYnJhdGUodGltZSB8fCA1MDAsIGZ1bmN0aW9uIChyZXQpIHtcblx0XHRcdHJldCA9IHJldCB8fCB7fTtcblxuXHRcdFx0aWYgKHJldC5lcnJvcikge1xuXHRcdFx0XHRyZWplY3QocmV0LmVycm9yKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IocmV0LmVycm9yLCBudWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc29sdmUocmV0KTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IobnVsbCwgcmV0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0dmlicmF0ZTogdmlicmF0ZVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1uYXQvbGliL2RldmljZS92aWJyYXRpb24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDIwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDMwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdm9sdW1lID0gdm9pZCAwO1xuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LXRlbXAveCcsIGZ1bmN0aW9uIChfX3dlZXhfcmVxdWlyZV9fKSB7XG5cdHZvbHVtZSA9IF9fd2VleF9yZXF1aXJlX18oJ0B3ZWV4LW1vZHVsZS9uYXQvZGV2aWNlL3ZvbHVtZScpO1xufSk7XG5cbi8vIGdldFxuXG52YXIgZ2V0ID0gZnVuY3Rpb24gZ2V0KGNiKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0dm9sdW1lLmdldChmdW5jdGlvbiAocmV0KSB7XG5cdFx0XHRyZXQgPSByZXQgfHwge307XG5cblx0XHRcdGlmIChyZXQuZXJyb3IpIHtcblx0XHRcdFx0cmVqZWN0KHJldC5lcnJvcik7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHJldC5lcnJvciwgbnVsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXNvbHZlKHJldCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKG51bGwsIHJldCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuLy8gc2V0XG5cbnZhciBzZXQgPSBmdW5jdGlvbiBzZXQodm9sLCBjYikge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdHZvbHVtZS5zZXQodm9sLCBmdW5jdGlvbiAocmV0KSB7XG5cdFx0XHRyZXQgPSByZXQgfHwge307XG5cblx0XHRcdGlmIChyZXQuZXJyb3IpIHtcblx0XHRcdFx0cmVqZWN0KHJldC5lcnJvcik7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHJldC5lcnJvciwgbnVsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXNvbHZlKHJldCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKG51bGwsIHJldCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGdldDogZ2V0LFxuXHRzZXQ6IHNldFxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1uYXQvbGliL2RldmljZS92b2x1bWUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDIwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDMwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbmF2aWdhdG9yID0gdm9pZCAwO1xuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LXRlbXAveCcsIGZ1bmN0aW9uIChfX3dlZXhfcmVxdWlyZV9fKSB7XG5cdG5hdmlnYXRvciA9IF9fd2VleF9yZXF1aXJlX18oJ0B3ZWV4LW1vZHVsZS9uYXQvbmF2aWdhdG9yJyk7XG59KTtcblxuLy8gcHVzaFxuXG52YXIgcHVzaCA9IGZ1bmN0aW9uIHB1c2gob3B0cywgY2IpIHtcblx0b3B0cyA9IG9wdHMgfHwge307XG5cblx0aWYgKHR5cGVvZiBvcHRzID09PSAnc3RyaW5nJykge1xuXHRcdG9wdHMgPSB7XG5cdFx0XHR1cmw6IG9wdHNcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRuYXZpZ2F0b3IucHVzaChvcHRzLCBmdW5jdGlvbiAocmV0KSB7XG5cdFx0XHRyZXQgPSByZXQgfHwge307XG5cblx0XHRcdGlmIChyZXQuZXJyb3IpIHtcblx0XHRcdFx0cmVqZWN0KHJldC5lcnJvcik7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHJldC5lcnJvciwgbnVsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXNvbHZlKHJldCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKG51bGwsIHJldCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuLy8gcG9wXG52YXIgcG9wID0gZnVuY3Rpb24gcG9wKG9wdHMsIGNiKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0bmF2aWdhdG9yLnBvcChvcHRzLCBmdW5jdGlvbiAocmV0KSB7XG5cdFx0XHRyZXQgPSByZXQgfHwge307XG5cblx0XHRcdGlmIChyZXQuZXJyb3IpIHtcblx0XHRcdFx0cmVqZWN0KHJldC5lcnJvcik7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHJldC5lcnJvciwgbnVsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXNvbHZlKHJldCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKG51bGwsIHJldCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuLy8gc2V0VGl0bGVcbnZhciBzZXRUaXRsZSA9IGZ1bmN0aW9uIHNldFRpdGxlKG9wdHMsIGNiKSB7XG5cdG9wdHMgPSBvcHRzIHx8IHt9O1xuXG5cdGlmICh0eXBlb2Ygb3B0cyA9PT0gJ3N0cmluZycpIHtcblx0XHRvcHRzID0ge1xuXHRcdFx0dGl0bGU6IG9wdHNcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRuYXZpZ2F0b3Iuc2V0VGl0bGUob3B0cywgZnVuY3Rpb24gKHJldCkge1xuXHRcdFx0cmV0ID0gcmV0IHx8IHt9O1xuXG5cdFx0XHRpZiAocmV0LmVycm9yKSB7XG5cdFx0XHRcdHJlamVjdChyZXQuZXJyb3IpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihyZXQuZXJyb3IsIG51bGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzb2x2ZShyZXQpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihudWxsLCByZXQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbi8vIHNldENvbG9yXG52YXIgc2V0Q29sb3IgPSBmdW5jdGlvbiBzZXRDb2xvcihvcHRzLCBjYikge1xuXHRvcHRzID0gb3B0cyB8fCB7fTtcblxuXHRpZiAodHlwZW9mIG9wdHMgPT09ICdzdHJpbmcnKSB7XG5cdFx0b3B0cyA9IHtcblx0XHRcdGNvbG9yOiBvcHRzXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0bmF2aWdhdG9yLnNldENvbG9yKG9wdHMsIGZ1bmN0aW9uIChyZXQpIHtcblx0XHRcdHJldCA9IHJldCB8fCB7fTtcblxuXHRcdFx0aWYgKHJldC5lcnJvcikge1xuXHRcdFx0XHRyZWplY3QocmV0LmVycm9yKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IocmV0LmVycm9yLCBudWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc29sdmUocmV0KTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IobnVsbCwgcmV0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59O1xuXG4vLyBzZXRCYWNrZ3JvdW5kQ29sb3JcbnZhciBzZXRCYWNrZ3JvdW5kQ29sb3IgPSBmdW5jdGlvbiBzZXRCYWNrZ3JvdW5kQ29sb3Iob3B0cywgY2IpIHtcblx0b3B0cyA9IG9wdHMgfHwge307XG5cblx0aWYgKHR5cGVvZiBvcHRzID09PSAnc3RyaW5nJykge1xuXHRcdG9wdHMgPSB7XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IG9wdHNcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRuYXZpZ2F0b3Iuc2V0QmFja2dyb3VuZENvbG9yKG9wdHMsIGZ1bmN0aW9uIChyZXQpIHtcblx0XHRcdHJldCA9IHJldCB8fCB7fTtcblxuXHRcdFx0aWYgKHJldC5lcnJvcikge1xuXHRcdFx0XHRyZWplY3QocmV0LmVycm9yKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IocmV0LmVycm9yLCBudWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc29sdmUocmV0KTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IobnVsbCwgcmV0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59O1xuXG4vLyBzZXRGb250U2l6ZVxudmFyIHNldEZvbnRTaXplID0gZnVuY3Rpb24gc2V0Rm9udFNpemUob3B0cywgY2IpIHtcblx0b3B0cyA9IG9wdHMgfHwge307XG5cblx0aWYgKHR5cGVvZiBvcHRzID09PSAnc3RyaW5nJyB8fCB0eXBlb2Ygb3B0cyA9PT0gJ251bWJlcicpIHtcblx0XHRvcHRzID0ge1xuXHRcdFx0Zm9udFNpemU6IG9wdHNcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRuYXZpZ2F0b3Iuc2V0Rm9udFNpemUob3B0cywgZnVuY3Rpb24gKHJldCkge1xuXHRcdFx0cmV0ID0gcmV0IHx8IHt9O1xuXG5cdFx0XHRpZiAocmV0LmVycm9yKSB7XG5cdFx0XHRcdHJlamVjdChyZXQuZXJyb3IpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihyZXQuZXJyb3IsIG51bGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzb2x2ZShyZXQpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihudWxsLCByZXQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbi8vIGluaXRcbnZhciBpbml0ID0gZnVuY3Rpb24gaW5pdChvcHRzLCBjYikge1xuXHRvcHRzID0gb3B0cyB8fCB7fTtcblxuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdG5hdmlnYXRvci5pbml0KG9wdHMsIGZ1bmN0aW9uIChyZXQpIHtcblx0XHRcdHJldCA9IHJldCB8fCB7fTtcblxuXHRcdFx0aWYgKHJldC5lcnJvcikge1xuXHRcdFx0XHRyZWplY3QocmV0LmVycm9yKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IocmV0LmVycm9yLCBudWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc29sdmUocmV0KTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IobnVsbCwgcmV0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59O1xuXG4vLyBoaWRlXG52YXIgaGlkZSA9IGZ1bmN0aW9uIGhpZGUoY2IpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRuYXZpZ2F0b3IuaGlkZShmdW5jdGlvbiAocmV0KSB7XG5cdFx0XHRyZXQgPSByZXQgfHwge307XG5cblx0XHRcdGlmIChyZXQuZXJyb3IpIHtcblx0XHRcdFx0cmVqZWN0KHJldC5lcnJvcik7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHJldC5lcnJvciwgbnVsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXNvbHZlKHJldCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKG51bGwsIHJldCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuLy8gc2hvd1xudmFyIHNob3cgPSBmdW5jdGlvbiBzaG93KGNiKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0bmF2aWdhdG9yLnNob3coZnVuY3Rpb24gKHJldCkge1xuXHRcdFx0cmV0ID0gcmV0IHx8IHt9O1xuXG5cdFx0XHRpZiAocmV0LmVycm9yKSB7XG5cdFx0XHRcdHJlamVjdChyZXQuZXJyb3IpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihyZXQuZXJyb3IsIG51bGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzb2x2ZShyZXQpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihudWxsLCByZXQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRwdXNoOiBwdXNoLFxuXHRwb3A6IHBvcCxcblx0c2V0VGl0bGU6IHNldFRpdGxlLFxuXHRzZXRDb2xvcjogc2V0Q29sb3IsXG5cdHNldEJhY2tncm91bmRDb2xvcjogc2V0QmFja2dyb3VuZENvbG9yLFxuXHRzZXRGb250U2l6ZTogc2V0Rm9udFNpemUsXG5cdGluaXQ6IGluaXQsXG5cdGhpZGU6IGhpZGUsXG5cdHNob3c6IHNob3dcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbmF0L2xpYi9uYXZpZ2F0b3IvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDIxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDMwIiwidmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9kZXRhaWwud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9kZXRhaWwud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvZGV0YWlsJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2RldGFpbC9kZXRhaWwud2Vcbi8vIG1vZHVsZSBpZCA9IDIxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDMwIl0sInNvdXJjZVJvb3QiOiIifQ==