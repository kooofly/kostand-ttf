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

	var __weex_template__ = __webpack_require__(212)
	var __weex_style__ = __webpack_require__(213)
	var __weex_script__ = __webpack_require__(214)
	
	__weex_define__('@weex-component/3106a3017a7035b2071dabdd86220c4a', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})
	
	__weex_bootstrap__('@weex-component/3106a3017a7035b2071dabdd86220c4a',undefined,undefined)

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
/* 53 */
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
/* 54 */
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
/* 55 */
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
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */
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
/* 71 */
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
/* 72 */
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
/* 212 */
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
	                "value": "缴费城市"
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
	                    "value": function () {return this.value.city}
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
	              "type": "text",
	              "classList": [
	                "row-label"
	              ],
	              "attr": {
	                "value": "缴费单位"
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
	                    "value": function () {return this.value.department}
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
	            "row-flex-start"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "row-label"
	              ],
	              "attr": {
	                "value": "缴费单号"
	              }
	            },
	            {
	              "type": "input",
	              "classList": [
	                "row-input"
	              ],
	              "attr": {
	                "type": "text",
	                "placeholder": "请输入缴费单号",
	                "value": ""
	              }
	            }
	          ]
	        },
	        {
	          "type": "list-item-row",
	          "classList": [
	            "row-flex-start"
	          ],
	          "attr": {
	            "last": "true"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "row-label"
	              ],
	              "attr": {
	                "value": "缴费金额"
	              }
	            },
	            {
	              "type": "input",
	              "classList": [
	                "row-input"
	              ],
	              "events": {
	                "input": "onAmountInput"
	              },
	              "attr": {
	                "type": "text",
	                "placeholder": "请输入缴费金额",
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
	          "classList": [
	            "help-text"
	          ],
	          "attr": {
	            "value": "1、到账时间一般为3个工作日以内，双休日及节假日顺延"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "help-text"
	          ],
	          "attr": {
	            "value": "2、一个账户每月最多可提交6笔缴费订单（指水费、电费、燃气费订单总数），单笔/丹迪缴费金额上限为2000元"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "help-text"
	          ],
	          "attr": {
	            "value": "3、为避免不必要的麻烦和损失，请您在缴费账单“最后付款日期”之前7个工作日进行缴费。逾期账单（已产生滞纳金）将无法完成正常缴费，请至各类缴费营业网办理"
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 213 */
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
	    "marginRight": 42,
	    "marginLeft": 10,
	    "fontSize": 36,
	    "color": "#333333"
	  },
	  "row-right": {
	    "flexDirection": "row",
	    "alignItems": "center"
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
	  "row-input": {
	    "width": 450,
	    "height": 60,
	    "fontSize": 32,
	    "color": "#333333"
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
	  }
	}

/***/ },
/* 214 */
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
	
	var navigator = __weex_require__('@weex-module/navigator');
	__webpack_require__(147);
	__webpack_require__(215);
	__webpack_require__(216);
	exports.default = {
	    data: {
	        nav: {
	            title: '电费缴纳',
	            color: '#4d4d4d',
	            backgroundColor: '#fff',
	            borderBottomWidth: 1,
	            back: _config2.default.icon.back
	        },
	        ui: {
	            right_arrow: _config2.default.icon.right_arrow
	        },
	        btnPrimaryStatus: 'disabled',
	        value: {
	            city: '杭州市',
	            department: '',
	            orderNo: '',
	            amount: ''
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
	            _this.btnPrimaryStatus = _this.value.amount ? 'enabled' : 'disabled';
	        });
	    },
	
	    methods: (0, _assign2.default)({
	        onAmountInput: function onAmountInput(e) {
	            this.value.amount = e.value;
	            this.$dispatch('formChange');
	        },
	        submit: function submit() {
	            console.log(this.value);
	        }
	    }, methods)
	};}
	/* generated by weex-loader */


/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(53)
	var __weex_style__ = __webpack_require__(54)
	var __weex_script__ = __webpack_require__(55)
	
	__weex_define__('@weex-component/button-primary', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(70)
	var __weex_style__ = __webpack_require__(71)
	var __weex_script__ = __webpack_require__(72)
	
	__weex_define__('@weex-component/list-item-row', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTZlY2Q1YzViMGFjZjE5MzZkYmI/YzBlMCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcGF5bWVudC1lbGVjdHJpY2l0eS53ZT9mZGYyIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanM/ZTZjYSoqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcz84MGU0KioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzPzkwMDcqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcz9lY2UyKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanM/NzdhYSoqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcz8xYjYyKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanM/Y2UwMCoqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcz9kNTNlKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzP2E2ZGEqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcz80MTE2KioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanM/MGRhMyoqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzPzI0YzgqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzP2JkMWYqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzPzcwNTEqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzPzkzNWQqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanM/YWI0NCoqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzPzQ5YTQqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanM/MWU4NioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcz81YzBjKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcz9mNWJjKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcz9mY2VhKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanM/ZDg1MCoqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcz82OTQ2KioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzPzVjZjkqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcz80OGVhKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzPzQ1ZDMqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzPzYxOTkqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcz82MmE3KioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzP2Y2NWYqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzPzlmZDQqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanM/MmE2YyoqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzPzdiNmMqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcz9lOGNkKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzPzc1OTgqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzP2E1ZmIqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanM/ZDBkMioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzP2I1YzAqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vbWV0aG9kcy5qcz8zZDkyKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbmZpZy5qcz9jMTgzKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24tcHJpbWFyeS53ZT83NjA4KiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLXByaW1hcnkud2U/OWUyYSoiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi1wcmltYXJ5LndlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xpc3QtaXRlbS9saXN0LWl0ZW0tcm93LndlP2YwOWQqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xpc3QtaXRlbS9saXN0LWl0ZW0tcm93LndlPzU0YWUqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xpc3QtaXRlbS9saXN0LWl0ZW0tcm93LndlPzc4ZWYqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25hdnBhZ2UvbmF2YmFyLndlP2I1NTEqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZwYWdlL25hdmJhci53ZT81MDhhKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2cGFnZS9uYXZiYXIud2U/NjUzOSoqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2cGFnZS9uYXZiYXIud2U/OWMxMioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2cGFnZS9uYXZwYWdlLndlPzJmMjYqKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25hdnBhZ2UvbmF2cGFnZS53ZT8wZmZiKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZwYWdlL25hdnBhZ2Uud2U/ZmY0YioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2cGFnZS9uYXZwYWdlLndlPzgwMjYqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BheW1lbnQtZWxlY3RyaWNpdHkud2U/NDUzMiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcGF5bWVudC1lbGVjdHJpY2l0eS53ZT85NzFhIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wYXltZW50LWVsZWN0cmljaXR5LndlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24tcHJpbWFyeS53ZT81YWI4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xpc3QtaXRlbS9saXN0LWl0ZW0tcm93LndlPzdmYzEiXSwibmFtZXMiOlsiZ2V0QmFzZVVSTCIsImRldGVjdGlvbiIsInJvdXRlIiwicm91dGVUb1VybCIsInJvdXRlTmFtZSIsInBhcmFtcyIsInRlc3QiLCJzcGxpdCIsInIiLCJjb21waWxlVXJsIiwiY29uc29sZSIsImxvZyIsInVybCIsImpvaW4iLCJjYWxsIiwid2luZG93Iiwib3BlbiIsIm8iLCJ0aGVuIiwiJG9wZW5VUkwiLCJmYWlsQ2FsbGJhY2siLCJuYW1lIiwicmVzdWx0IiwiJGdldENvbmZpZyIsImJ1bmRsZVVybCIsImluZGV4T2YiLCJzdHIiLCJzdWJzdHIiLCJwIiwiZm9yRWFjaCIsInYiLCJ0ZW1wIiwiZGVjb2RlVVJJIiwicmVhbEhlaWdodCIsImhlaWdodCIsInciLCJlbnYiLCJkZXZpY2VXaWR0aCIsImgiLCJkZXZpY2VIZWlnaHQiLCJhc3NldHNSb290IiwiaWNvbiIsInNjcmlwdEhvc3QiLCJodG1sSW5kZXgiLCJzY3JpcHRSb290IiwiYXBpUm9vdCIsImFuZHJvaWRBc3NldHNSb290IiwibWFwIiwibWFwX2xpZmUiLCJub3RpY2UiLCJzY2FuIiwiY29kZSIsInRyYW5zYWN0aW9uX3JlY29yZCIsInNlYXJjaCIsImJhY2siLCJyaWdodF9hcnJvdyIsImFyb3VuZCIsInNlYXJjaF9wYXNzIiwic3RhciIsImhhbGZfc3RhciIsImRyb3Bkb3duIiwidGljayIsImNvbGxlY3QiLCJjb2xsZWN0X3Vuc2VsZWN0ZWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFDOztBQUVELDJGOzs7Ozs7Ozs7Ozs7O0FDakJBLG1CQUFrQix1RDs7Ozs7O0FDQWxCO0FBQ0Esd0Q7Ozs7OztBQ0RBO0FBQ0E7O0FBRUEsMkNBQTBDLGdDQUFvQyxFOzs7Ozs7QUNIOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFtRTtBQUNuRTtBQUNBLHNGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMEM7QUFDMUM7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMEM7QUFDMUM7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBLG9DQUFtQyw2QkFBNkI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQy9QQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ3VCQTs7Ozs7O0tBQ0E7Ozs7Ozt5QkFDQTtxQkFDQTtxQkFDQTtxQkFDQTs7OztvQkFJQTtvQkFDQTs4QkFDQTtnQ0FDQTt5Q0FFQTtBQU5BOztnREFTQTtBQUZBOzJCQUdBOzttQkFFQTt5QkFDQTtzQkFDQTtxQkFHQTtBQU5BO0FBWkE7O0FBbUJBOzt3REFDQTs7NkJBR0E7QUFGQTtnREFHQTtBQUNBOzRDQUNBO2tEQUNBLHFCQUNBO0FBQ0E7QUFDQTs7O2tEQUVBO21DQUNBOzRCQUNBO0FBQ0E7bUNBQ0E7OEJBQ0E7QUFDQTtBQVBBLFFBUUE7QUF4Q0E7Ozs7Ozs7O0FDckdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFDOzs7Ozs7O0FDZkQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUMiLCJmaWxlIjoidmlld3NcXHBheW1lbnQtZWxlY3RyaWNpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5NmVjZDVjNWIwYWNmMTkzNmRiYiIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vcGF5bWVudC1lbGVjdHJpY2l0eS53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9wYXltZW50LWVsZWN0cmljaXR5LndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vcGF5bWVudC1lbGVjdHJpY2l0eS53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC8zMTA2YTMwMTdhNzAzNWIyMDcxZGFiZGQ4NjIyMGM0YScsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5fX3dlZXhfYm9vdHN0cmFwX18oJ0B3ZWV4LWNvbXBvbmVudC8zMTA2YTMwMTdhNzAzNWIyMDcxZGFiZGQ4NjIyMGM0YScsdW5kZWZpbmVkLHVuZGVmaW5lZClcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3cy9wYXltZW50LWVsZWN0cmljaXR5LndlP2VudHJ5PXRydWVcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAzMSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzciLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM3IiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0Jywge2Fzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM3IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIEMpe1xuICAgICAgICAgIHN3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZihJU19QUk9UTyl7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSloaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsICRhc3NpZ24gID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCBhTGVuICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZlxuICAgICwgaXNFbnVtICAgICA9IHBJRS5mO1xuICB3aGlsZShhTGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM3IiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJpbXBvcnQgeyBnZXRCYXNlVVJMIH0gZnJvbSAnLi9hcGknXHJcbmltcG9ydCAqIGFzIGRldGVjdGlvbiBmcm9tICcuL2RldGVjdGlvbidcclxuaW1wb3J0IHJvdXRlIGZyb20gJy4vcm91dGUnXHJcbi8qKlxyXG4gKiDot6/nlLHovazpk77mjqVcclxuICogQHBhcmFtIHtzdHJpbmd9IHJvdXRlTmFtZVxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJvdXRlVG9VcmwgKHJvdXRlTmFtZSkge1xyXG4gICAgdmFyIHBhcmFtcyA9ICcnXHJcbiAgICBpZiAoL1xcPy8udGVzdChyb3V0ZU5hbWUpKSB7XHJcbiAgICAgICAgcGFyYW1zID0gcm91dGVOYW1lLnNwbGl0KCc/JylbMV1cclxuICAgICAgICByb3V0ZU5hbWUgPSByb3V0ZU5hbWUuc3BsaXQoJz8nKVswXVxyXG4gICAgfVxyXG4gICAgbGV0IHIgPSByb3V0ZVtyb3V0ZU5hbWVdXHJcbiAgICBsZXQgY29tcGlsZVVybFxyXG4gICAgaWYgKCFyKSB7XHJcbiAgICAgICAgLy8gVE9ETyDot7PovazliLDplJnor6/pobVcclxuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3I6IOi3r+eUseS4jeWtmOWcqO+8jOivt+WcqHJvdXRlci5qc+S4remFjee9ruWvueW6lOeahOi3r+eUsScpXHJcbiAgICB9XHJcbiAgICBjb21waWxlVXJsID0gci51cmwgPyByLnVybCA6ICd2aWV3cy8nICsgcm91dGVOYW1lLnNwbGl0KCdfJykuam9pbignLScpXHJcbiAgICBsZXQgdXJsID0gZ2V0QmFzZVVSTC5jYWxsKHRoaXMsIHRydWUpICsgY29tcGlsZVVybCArICcuanMnXHJcbiAgICAvLyDlhYHorrjmt7vliqDlj4LmlbAg5L6L5aaCIG1lcmNoYW50X2Fyb3VuZD9hPTEmYj0yIOWkhOeQhuinhOWImeWSjOa1j+iniOWZqOeahHF1ZXJ5c3RyaW5n5LiA6Ie0XHJcbiAgICBpZiAocGFyYW1zKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIHVybCA9IHVybCArICcmJyArIHBhcmFtc1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHVybCA9IHVybCArICc/JyArIHBhcmFtc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB1cmxcclxufVxyXG4vKipcclxuICog5omT5byA5paw6aG16Z2iXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSByb3V0ZU5hbWUgLSDot6/nlLHlkI3np7Ag5omA5pyJ6Lev55Sx5ZCN56ew5Zyocm91dGUuanPkuK1cclxuICogQHBhcmFtIHtvYmplY3R9IG8gLSDnjrDlnKjlj6rmnInot6/nlLHmiZPlvIDlpLHotKXlpITnkIbmlrnms5XvvIzku6XlkI7lj6/ku6Xmt7vliqDlhbbku5blpITnkIZcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gby5mYWlsQ2FsbGJhY2sgLSDot6/nlLHmiZPlvIDlpLHotKXlpITnkIZjYWxsYmFja1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9wZW4gKHJvdXRlTmFtZSwgbykge1xyXG4gICAgbGV0IHIgPSByb3V0ZVtyb3V0ZU5hbWVdXHJcbiAgICBsZXQgdXJsID0gcm91dGVUb1VybC5jYWxsKHRoaXMsIHJvdXRlTmFtZSlcclxuICAgIGlmIChyLmRldGVjdGlvbikge1xyXG4gICAgICAgIGRldGVjdGlvbltyLmRldGVjdGlvbl0oe1xyXG4gICAgICAgICAgICByb3V0ZU5hbWU6IHJvdXRlTmFtZSxcclxuICAgICAgICAgICAgdXJsOiB1cmxcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kb3BlblVSTCh1cmwpXHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobyAmJiB0eXBlb2Ygby5mYWlsQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG8uZmFpbENhbGxiYWNrLmNhbGwodGhpcywgcm91dGVOYW1lKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy4kb3BlblVSTCh1cmwpXHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIOino+aekOi3r+eUseWPguaVsFxyXG4gKiDkvovlpoLvvJptZXJjaGFudF9hcm91bmQ/YT0xJmI9MiDpobXpnaJcclxuICogICAgICDosIPnlKhwYXJhbXMoKeaWueazlSDov5Tlm57lgLzkuLrvvJoge2E6MSwgYjoyfVxyXG4gKiAgICAgIOiwg+eUqHBhcmFtcygnYScp5pa55rOVIOi/lOWbnuWAvOS4uu+8miAxXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbmFtZV0g5Y+v6YCJ5Y+C5pWwXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdXJsXSDlj6/pgInlj4LmlbAg6buY6K6k5Li6YnVuZGxlVXJsXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd8b2JqZWN0fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtcyAobmFtZSwgdXJsKXtcclxuICAgIGxldCByZXN1bHQgPSB7fVxyXG4gICAgaWYgKCF1cmwpIHtcclxuICAgICAgICB1cmwgPSB0aGlzLiRnZXRDb25maWcoKS5idW5kbGVVcmxcclxuICAgIH1cclxuICAgIGlmICh1cmwuaW5kZXhPZihcIj9cIikgIT09IC0xKSB7XHJcbiAgICAgICAgbGV0IHN0ciA9IHVybC5zdWJzdHIodXJsLmluZGV4T2YoXCI/XCIpICsgMSlcclxuICAgICAgICBsZXQgcCA9IHN0ci5zcGxpdChcIiZcIilcclxuICAgICAgICBwLmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0ZW1wID0gdi5zcGxpdChcIj1cIilcclxuICAgICAgICAgICAgcmVzdWx0W3RlbXBbMF1dID0gZGVjb2RlVVJJKHRlbXBbMV0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBpZiAocmVzdWx0W25hbWVdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRbbmFtZV1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gJydcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiByZXN1bHRcclxuICAgIH1cclxufVxyXG4vLyDojrflj5bnnJ/lrp7pq5jluqbvvIznlLHkuo53ZWV46Zeu6aKY5pyq6IO96YCC6YWN5omA5pyJ5py65Z6L44CCXHJcbmV4cG9ydCBmdW5jdGlvbiByZWFsSGVpZ2h0IChoZWlnaHQpIHtcclxuICAgIGxldCB3ID0gdGhpcy4kZ2V0Q29uZmlnKCkuZW52LmRldmljZVdpZHRoXHJcbiAgICBsZXQgaCA9IHRoaXMuJGdldENvbmZpZygpLmVudi5kZXZpY2VIZWlnaHRcclxuICAgIC8vIDEzMzJcclxuICAgIHJldHVybiB3IC8gNzUwICogaGVpZ2h0XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL21ldGhvZHMuanMiLCIvLyBjb25zdCBhc3NldHNVUkwgPSAnZmlsZTovLy9zZGNhcmQvaW1nLydcclxuY29uc3QgYXNzZXRzUm9vdCA9ICdodHRwczovL2tvb29mbHkuZ2l0aHViLmlvL2tvc3RhbmQtdHRmL3R0Zi9hc3NldHMvJ1xyXG5cclxuZnVuY3Rpb24gaWNvbih2KSB7XHJcbiAgICByZXR1cm4gYXNzZXRzUm9vdCArICdpY29uLycgKyB2XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgLy8gd2VleOiEmuacrGhvc3RcclxuICAgIHNjcmlwdEhvc3Q6ICdodHRwczovL2tvb29mbHkuZ2l0aHViLmlvL2tvc3RhbmQtdHRmL3R0ZicsXHJcbiAgICAvLyBIVE1MIGluZGV4XHJcbiAgICBodG1sSW5kZXg6ICdodHRwczovL2tvb29mbHkuZ2l0aHViLmlvL2tvc3RhbmQtdHRmL3R0Zi9pbmRleC5odG1sJyxcclxuICAgIC8vIHdlZXjohJrmnKzmoLnnm67lvZVcclxuICAgIHNjcmlwdFJvb3Q6ICcvMTAwMS8nLFxyXG4gICAgLy8g5Zu+54mH562J6Z2Z5oCB6LWE5rqQ5qC555uu5b2VXHJcbiAgICBhc3NldHNSb290OiBhc3NldHNSb290LFxyXG4gICAgLy8gcmVzZXRmdWwgQVBJ5pyN5Yqh5qC56Lev5b6EXHJcbiAgICBhcGlSb290OiAnaHR0cHM6Ly9rb29vZmx5LmdpdGh1Yi5pby9rb3N0YW5kLXR0Zi90dGYvYXBpL3YxJyxcclxuICAgIC8vIGFuZHJvaWQg5pys5Zyw6Z2Z5oCB6LWE5rqQ6Lev5b6EXHJcbiAgICBhbmRyb2lkQXNzZXRzUm9vdDogJ2ZpbGU6Ly8vc2RjYXJkL2Fzc2V0cy8nLFxyXG4gICAgaWNvbjoge1xyXG4gICAgICAgIG1hcDogaWNvbignbWFwQDJ4LnBuZycpLFxyXG4gICAgICAgIG1hcF9saWZlOiBpY29uKCdtYXBfbGlmZUAyeC5wbmcnKSxcclxuICAgICAgICBub3RpY2U6IGljb24oJ25vdGljZUAyeC5wbmcnKSxcclxuICAgICAgICBzY2FuOiBpY29uKCdzY2FuQDJ4LnBuZycpLFxyXG4gICAgICAgIGNvZGU6IGljb24oJ2NvZGVAMngucG5nJyksXHJcbiAgICAgICAgdHJhbnNhY3Rpb25fcmVjb3JkOiBpY29uKCd0cmFuc2FjdGlvbl9yZWNvcmRAMngucG5nJyksXHJcbiAgICAgICAgc2VhcmNoOiBpY29uKCdzZWFyY2hAMngucG5nJyksXHJcbiAgICAgICAgYmFjazogaWNvbignYmFja0AyeC5wbmcnKSxcclxuICAgICAgICByaWdodF9hcnJvdzogaWNvbigncmlnaHRfYXJyb3dAMngucG5nJyksXHJcbiAgICAgICAgc2VhcmNoOiBpY29uKCdzZWFyY2hfc2hvcEAyeC5wbmcnKSxcclxuICAgICAgICBhcm91bmQ6IGljb24oJ2Fyb3VuZEAyeC5wbmcnKSxcclxuICAgICAgICBzZWFyY2hfcGFzczogaWNvbignc2VhcmNoX3Bhc3NAMngucG5nJyksXHJcbiAgICAgICAgc3RhcjogaWNvbignc3RhckAyeC5wbmcnKSxcclxuICAgICAgICBoYWxmX3N0YXI6IGljb24oJ2hhbGZfc3RhckAyeC5wbmcnKSxcclxuICAgICAgICBkcm9wZG93bjogaWNvbignZHJvcGRvd25AMngucG5nJyksXHJcbiAgICAgICAgdGljazogaWNvbigndGlja0AyeC5wbmcnKSxcclxuICAgICAgICBjb2xsZWN0OiBpY29uKCdjb2xsZWN0QDJ4LnBuZycpLFxyXG4gICAgICAgIGNvbGxlY3RfdW5zZWxlY3RlZDogaWNvbignY29sbGVjdC11bnNlbGVjdGVkQDJ4LnBuZycpXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2NvbmZpZy5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjbGFzc0xpc3RcIjogZnVuY3Rpb24gKCkge3JldHVybiBbJ2J0bi1wcmltYXJ5JywgJ2J0bi0nICsgKHRoaXMuc3RhdHVzKV19LFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiYnRuLXByaW1hcnktdHh0XCJcbiAgICAgIF0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50ZXh0fVxuICAgICAgfVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi1wcmltYXJ5LndlXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDQgMzEgMzIgMzMgMzQgMzUiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJidG4tcHJpbWFyeVwiOiB7XG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwid2lkdGhcIjogNjg2LFxuICAgIFwiaGVpZ2h0XCI6IDkwLFxuICAgIFwiZm9udFNpemVcIjogNDIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiA2XG4gIH0sXG4gIFwiYnRuLXByaW1hcnktdHh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IDQyLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJidG4tZGlzYWJsZWRcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2NjY2NjY1wiXG4gIH0sXG4gIFwiYnRuLWVuYWJsZWRcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzNiOGFlYVwiXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24tcHJpbWFyeS53ZVxuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSA0IDMxIDMyIDMzIDM0IDM1IiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImJ0bi1wcmltYXJ5IGJ0bi17e3N0YXR1c319XCI+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJidG4tcHJpbWFyeS10eHRcIj57e3RleHR9fTwvdGV4dD5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c3R5bGUgc2NvcGVkPlxyXG4gICAgLmJ0bi1wcmltYXJ5IHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogNjg2cHg7IGhlaWdodDogOTBweDtcclxuICAgICAgICBmb250LXNpemU6IDQycHg7IGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIH1cclxuICAgIC5idG4tcHJpbWFyeS10eHQgeyBmb250LXNpemU6IDQycHg7IGNvbG9yOiAjZmZmOyB9XHJcblxyXG4gICAgLmJ0bi1kaXNhYmxlZHsgYmFja2dyb3VuZC1jb2xvcjogI2NjYzsgfVxyXG4gICAgLmJ0bi1lbmFibGVkeyBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I4YWVhOyB9XHJcbjwvc3R5bGU+XHJcbjxzY3JpcHQ+XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgZGF0YSAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAn56GuIOWumicsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdkaXNhYmxlZCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi1wcmltYXJ5LndlPzA1NmFjZmNkIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJsaXN0LWl0ZW1cIlxuICBdLFxuICBcInN0eWxlXCI6IHtcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5ib3JkZXJCb3R0b21XaWR0aH1cbiAgfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiY29udGVudFwiXG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9zcmMvY29tcG9uZW50cy9saXN0LWl0ZW0vbGlzdC1pdGVtLXJvdy53ZVxuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCAzMSAzMiAzMyAzNSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImxpc3QtaXRlbVwiOiB7XG4gICAgXCJmbGV4V3JhcFwiOiBcIndyYXBcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwid2lkdGhcIjogNzI2LFxuICAgIFwiaGVpZ2h0XCI6IDExMCxcbiAgICBcIm1hcmdpbkxlZnRcIjogMjQsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMjAsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNkYmRiZGJcIixcbiAgICBcImJvcmRlckJvdHRvbVN0eWxlXCI6IFwic29saWRcIlxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9zcmMvY29tcG9uZW50cy9saXN0LWl0ZW0vbGlzdC1pdGVtLXJvdy53ZVxuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCAzMSAzMiAzMyAzNSIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJsaXN0LWl0ZW1cIiBzdHlsZT1cImJvcmRlci1ib3R0b20td2lkdGg6IHt7Ym9yZGVyQm90dG9tV2lkdGh9fVwiPlxyXG4gICAgICAgIDxjb250ZW50PjwvY29udGVudD5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c3R5bGUgc2NvcGVkPlxyXG4gICAgLmxpc3QtaXRlbSB7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwOyBmbGV4LWRpcmVjdGlvbjogcm93OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDcyNnB4OyBoZWlnaHQ6IDExMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2RiZGJkYjsgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbjxzY3JpcHQ+XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgZGF0YSAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBsYXN0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoOiAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZWQgKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sYXN0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvcmRlckJvdHRvbVdpZHRoID0gMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9saXN0LWl0ZW0vbGlzdC1pdGVtLXJvdy53ZT8yNmIyNTg3MSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiY29udGFpbmVyXCJcbiAgXSxcbiAgXCJzdHlsZVwiOiB7XG4gICAgXCJoZWlnaHRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmhlaWdodH0sXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmJhY2tncm91bmRDb2xvcn1cbiAgfSxcbiAgXCJhdHRyXCI6IHtcbiAgICBcImRhdGFSb2xlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5kYXRhUm9sZX1cbiAgfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInJpZ2h0LXRleHRcIlxuICAgICAgXSxcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcImNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodEl0ZW1Db2xvcn1cbiAgICAgIH0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcIm5hdmlJdGVtUG9zaXRpb25cIjogXCJyaWdodFwiLFxuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodEl0ZW1UaXRsZX1cbiAgICAgIH0sXG4gICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gIXRoaXMucmlnaHRJdGVtU3JjfSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcIm9uY2xpY2tyaWdodGl0ZW1cIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJyaWdodC1pbWFnZVwiXG4gICAgICBdLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJuYXZpSXRlbVBvc2l0aW9uXCI6IFwicmlnaHRcIixcbiAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJpZ2h0SXRlbVNyY31cbiAgICAgIH0sXG4gICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodEl0ZW1TcmN9LFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwib25jbGlja3JpZ2h0aXRlbVwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwicmlnaHQtbWFya1wiXG4gICAgICBdLFxuICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmlnaHRJdGVtTWFya30sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJvbmNsaWNrcmlnaHRpdGVtXCJcbiAgICAgIH0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodEl0ZW1NYXJrfVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImxlZnQtdGV4dFwiXG4gICAgICBdLFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtQ29sb3J9XG4gICAgICB9LFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJuYXZpSXRlbVBvc2l0aW9uXCI6IFwibGVmdFwiLFxuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sZWZ0SXRlbVRpdGxlfVxuICAgICAgfSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcIm9uY2xpY2tsZWZ0aXRlbVwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwibGVmdC1kZXNcIlxuICAgICAgXSxcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcImNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sZWZ0SXRlbUNvbG9yfVxuICAgICAgfSxcbiAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtRGVzfSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtRGVzfVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJsZWZ0LWltYWdlXCJcbiAgICAgIF0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcIm5hdmlJdGVtUG9zaXRpb25cIjogXCJsZWZ0XCIsXG4gICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sZWZ0SXRlbVNyY31cbiAgICAgIH0sXG4gICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sZWZ0SXRlbVNyY30sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJvbmNsaWNrbGVmdGl0ZW1cIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImNlbnRlci10ZXh0XCJcbiAgICAgIF0sXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGVDb2xvcn1cbiAgICAgIH0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcIm5hdmlJdGVtUG9zaXRpb25cIjogXCJjZW50ZXJcIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGV9XG4gICAgICB9XG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9zcmMvY29tcG9uZW50cy9uYXZwYWdlL25hdmJhci53ZVxuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyAxNCAyMSAyMiAyMyAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImNvbnRhaW5lclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJ3aWR0aFwiOiA3NTBcbiAgfSxcbiAgXCJyaWdodC10ZXh0XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImJvdHRvbVwiOiAyNCxcbiAgICBcInJpZ2h0XCI6IDMyLFxuICAgIFwidGV4dEFsaWduXCI6IFwicmlnaHRcIixcbiAgICBcImZvbnRTaXplXCI6IDI4LFxuICAgIFwiZm9udEZhbWlseVwiOiBcIidPcGVuIFNhbnMnLCBzYW5zLXNlcmlmXCJcbiAgfSxcbiAgXCJsZWZ0LXRleHRcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiYm90dG9tXCI6IDIyLFxuICAgIFwibGVmdFwiOiA4MCxcbiAgICBcInRleHRBbGlnblwiOiBcImxlZnRcIixcbiAgICBcImZvbnRTaXplXCI6IDMyLFxuICAgIFwiZm9udEZhbWlseVwiOiBcIidPcGVuIFNhbnMnLCBzYW5zLXNlcmlmXCJcbiAgfSxcbiAgXCJsZWZ0LWRlc1wiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJib3R0b21cIjogMjIsXG4gICAgXCJsZWZ0XCI6IDgwLFxuICAgIFwidGV4dEFsaWduXCI6IFwibGVmdFwiLFxuICAgIFwiZm9udFNpemVcIjogMzIsXG4gICAgXCJmb250RmFtaWx5XCI6IFwiJ09wZW4gU2FucycsIHNhbnMtc2VyaWZcIlxuICB9LFxuICBcImNlbnRlci10ZXh0XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImJvdHRvbVwiOiAxNixcbiAgICBcImxlZnRcIjogMTcyLFxuICAgIFwicmlnaHRcIjogMTcyLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmb250U2l6ZVwiOiAzOFxuICB9LFxuICBcImxlZnQtaW1hZ2VcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiYm90dG9tXCI6IDIwLFxuICAgIFwibGVmdFwiOiAyOCxcbiAgICBcIndpZHRoXCI6IDQ4LFxuICAgIFwiaGVpZ2h0XCI6IDQ4XG4gIH0sXG4gIFwicmlnaHQtaW1hZ2VcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiYm90dG9tXCI6IDIwLFxuICAgIFwicmlnaHRcIjogMjgsXG4gICAgXCJ3aWR0aFwiOiA0OCxcbiAgICBcImhlaWdodFwiOiA0OFxuICB9LFxuICBcInJpZ2h0LW1hcmtcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwicmlnaHRcIjogMTYsXG4gICAgXCJib3R0b21cIjogMzgsXG4gICAgXCJ3aWR0aFwiOiA0MCxcbiAgICBcImhlaWdodFwiOiA0MCxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwZjRmOWVcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiAyMCxcbiAgICBcImZvbnRTaXplXCI6IDI0LFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDQwLFxuICAgIFwidmVydGljYWxBbGlnblwiOiBcIm1pZGRsZVwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJvcGFjaXR5XCI6IDAuOVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9zcmMvY29tcG9uZW50cy9uYXZwYWdlL25hdmJhci53ZVxuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyAxNCAyMSAyMiAyMyAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBzdHlsZT1cImhlaWdodDp7e2hlaWdodH19OyBiYWNrZ3JvdW5kLWNvbG9yOnt7YmFja2dyb3VuZENvbG9yfX07XCIgZGF0YS1yb2xlPXt7ZGF0YVJvbGV9fT5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInJpZ2h0LXRleHRcIiBzdHlsZT1cImNvbG9yOnt7cmlnaHRJdGVtQ29sb3J9fTtcIiBuYXZpLWl0ZW0tcG9zaXRpb249XCJyaWdodFwiIGlmPXt7IXJpZ2h0SXRlbVNyY319IG9uY2xpY2sgPSBcIm9uY2xpY2tyaWdodGl0ZW1cIj57e3JpZ2h0SXRlbVRpdGxlfX08L3RleHQ+XHJcbiAgICAgICAgPGltYWdlIGNsYXNzPVwicmlnaHQtaW1hZ2VcIiBuYXZpLWl0ZW0tcG9zaXRpb249XCJyaWdodFwiIHNyYz17e3JpZ2h0SXRlbVNyY319IGlmPXt7cmlnaHRJdGVtU3JjfX0gb25jbGljaz1cIm9uY2xpY2tyaWdodGl0ZW1cIj48L2ltYWdlPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwicmlnaHQtbWFya1wiIGlmPVwie3tyaWdodEl0ZW1NYXJrfX1cIiBvbmNsaWNrPVwib25jbGlja3JpZ2h0aXRlbVwiPnt7cmlnaHRJdGVtTWFya319PC90ZXh0PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwibGVmdC10ZXh0XCIgc3R5bGU9XCJjb2xvcjp7e2xlZnRJdGVtQ29sb3J9fTtcIiBuYXZpLWl0ZW0tcG9zaXRpb249XCJsZWZ0XCIgIG9uY2xpY2s9IFwib25jbGlja2xlZnRpdGVtXCI+e3tsZWZ0SXRlbVRpdGxlfX08L3RleHQ+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJsZWZ0LWRlc1wiIHN0eWxlPVwiY29sb3I6e3tsZWZ0SXRlbUNvbG9yfX07XCIgaWY9e3tsZWZ0SXRlbURlc319Pnt7bGVmdEl0ZW1EZXN9fTwvdGV4dD5cclxuICAgICAgICA8aW1hZ2UgY2xhc3M9XCJsZWZ0LWltYWdlXCIgbmF2aS1pdGVtLXBvc2l0aW9uPVwibGVmdFwiIHNyYz17e2xlZnRJdGVtU3JjfX0gaWY9e3tsZWZ0SXRlbVNyY319IG9uY2xpY2s9XCJvbmNsaWNrbGVmdGl0ZW1cIj48L2ltYWdlPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiY2VudGVyLXRleHRcIiBzdHlsZT1cImNvbG9yOnt7dGl0bGVDb2xvcn19O1wiIG5hdmktaXRlbS1wb3NpdGlvbj1cImNlbnRlclwiPnt7dGl0bGV9fTwvdGV4dD5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlPlxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7IHRvcDogMDsgbGVmdDogMDsgcmlnaHQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDc1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5yaWdodC10ZXh0IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogMjRweDsgcmlnaHQ6IDMycHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IGZvbnQtc2l6ZTogMjhweDsgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gICAgLmxlZnQtdGV4dCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDIycHg7IGxlZnQ6IDgwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDsgZm9udC1zaXplOiAzMnB4OyBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgICAubGVmdC1kZXMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAyMnB4OyBsZWZ0OiA4MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMnB4OyBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgICAuY2VudGVyLXRleHQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAxNnB4OyBsZWZ0OiAxNzJweDsgcmlnaHQ6IDE3MnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAzOHB4O1xyXG4gICAgfVxyXG4gICAgLmxlZnQtaW1hZ2Uge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAyMHB4OyBsZWZ0OiAyOHB4O1xyXG4gICAgICAgIHdpZHRoOiA0OHB4OyBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB9XHJcbiAgICAucmlnaHQtaW1hZ2Uge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAyMHB4OyByaWdodDogMjhweDtcclxuICAgICAgICB3aWR0aDogNDhweDsgaGVpZ2h0OiA0OHB4O1xyXG4gICAgfVxyXG4gICAgLnJpZ2h0LW1hcmsge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IDE2cHg7IGJvdHRvbTogMzhweDtcclxuICAgICAgICB3aWR0aDogNDBweDsgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwZjRmOWU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7IHRleHQtYWxpZ246IGNlbnRlcjsgIGxpbmUtaGVpZ2h0OiA0MHB4OyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBjb2xvcjogI2ZmZjtcclxuICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBkYXRhUm9sZTogJ25hdmJhcicsXHJcbiAgICAgICAgICAgIC8v5a+86Iiq5p2h6IOM5pmv6ImyXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgLy/lr7zoiKrmnaHpq5jluqZcclxuICAgICAgICAgICAgaGVpZ2h0OiA4OCxcclxuICAgICAgICAgICAgLy/lr7zoiKrmnaHmoIfpophcclxuICAgICAgICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgICAgICAgIC8v5a+86Iiq5p2h5qCH6aKY6aKc6ImyXHJcbiAgICAgICAgICAgIHRpdGxlQ29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgICAgIC8v5Y+z5L6n5oyJ6ZKu5Zu+54mHXHJcbiAgICAgICAgICAgIHJpZ2h0SXRlbVNyYzogJycsXHJcbiAgICAgICAgICAgIC8v5Y+z5L6n5oyJ6ZKu5qCH6aKYXHJcbiAgICAgICAgICAgIHJpZ2h0SXRlbVRpdGxlOiAnJyxcclxuICAgICAgICAgICAgcmlnaHRJdGVtTWFyazogJycsXHJcbiAgICAgICAgICAgIC8v5Y+z5L6n5oyJ6ZKu5qCH6aKY6aKc6ImyXHJcbiAgICAgICAgICAgIHJpZ2h0SXRlbUNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgICAgICAvL+W3puS+p+aMiemSruWbvueJh1xyXG4gICAgICAgICAgICBsZWZ0SXRlbVNyYzogJycsXHJcbiAgICAgICAgICAgIC8v5bem5L6n5oyJ6ZKu5qCH6aKYXHJcbiAgICAgICAgICAgIGxlZnRJdGVtVGl0bGU6ICcnLFxyXG4gICAgICAgICAgICBsZWZ0SXRlbURlczogJycsXHJcbiAgICAgICAgICAgIC8v5bem5L6n5oyJ6ZKu6aKc6ImyXHJcbiAgICAgICAgICAgIGxlZnRJdGVtQ29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIG9uY2xpY2tyaWdodGl0ZW06IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRkaXNwYXRjaCgnbmF2aUJhci5yaWdodEl0ZW0uY2xpY2snLCB7fSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uY2xpY2tsZWZ0aXRlbTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGRpc3BhdGNoKCduYXZpQmFyLmxlZnRJdGVtLmNsaWNrJywge30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvbmF2cGFnZS9uYXZiYXIud2U/M2RmN2Y0YTYiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL25hdmJhci53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9uYXZiYXIud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9uYXZiYXIud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvbmF2YmFyJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL25hdnBhZ2UvbmF2YmFyLndlXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDE0IDIxIDIyIDIzIDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJjb250YWluZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJuYXZiYXJcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJuYXZiYXJcIlxuICAgICAgXSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwiZGF0YVJvbGVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmRhdGFSb2xlfSxcbiAgICAgICAgXCJoZWlnaHRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmhlaWdodH0sXG4gICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5iYWNrZ3JvdW5kQ29sb3J9LFxuICAgICAgICBcInRpdGxlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aXRsZX0sXG4gICAgICAgIFwibGVmdEl0ZW1EZXNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtRGVzfSxcbiAgICAgICAgXCJ0aXRsZUNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aXRsZUNvbG9yfSxcbiAgICAgICAgXCJsZWZ0SXRlbVNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGVmdEl0ZW1TcmN9LFxuICAgICAgICBcImxlZnRJdGVtVGl0bGVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtVGl0bGV9LFxuICAgICAgICBcImxlZnRJdGVtQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtQ29sb3J9LFxuICAgICAgICBcInJpZ2h0SXRlbVNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmlnaHRJdGVtU3JjfSxcbiAgICAgICAgXCJyaWdodEl0ZW1UaXRsZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmlnaHRJdGVtVGl0bGV9LFxuICAgICAgICBcInJpZ2h0SXRlbUNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodEl0ZW1Db2xvcn0sXG4gICAgICAgIFwicmlnaHRJdGVtTWFya1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmlnaHRJdGVtTWFya31cbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcIndyYXBwZXJcIlxuICAgICAgXSxcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcImJvcmRlclRvcENvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5ib3JkZXJCb3R0b21Db2xvcn0sXG4gICAgICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmJvcmRlckJvdHRvbVdpZHRofSxcbiAgICAgICAgXCJib3JkZXJUb3BTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgICAgIFwibWFyZ2luVG9wXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5tYXJnaW5Ub3B9XG4gICAgICB9LFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJjb250ZW50XCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vc3JjL2NvbXBvbmVudHMvbmF2cGFnZS9uYXZwYWdlLndlXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDE0IDIxIDIyIDIzIDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwibmF2YmFyXCI6IHtcbiAgICBcInpJbmRleFwiOiAxMFxuICB9LFxuICBcIndyYXBwZXJcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wXCI6IDAsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwiYm90dG9tXCI6IDAsXG4gICAgXCJ6SW5kZXhcIjogOCxcbiAgICBcIndpZHRoXCI6IDc1MFxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9zcmMvY29tcG9uZW50cy9uYXZwYWdlL25hdnBhZ2Uud2Vcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMTQgMjEgMjIgMjMgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYiLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPG5hdmJhciBjbGFzcz1cIm5hdmJhclwiIGRhdGEtcm9sZT17e2RhdGFSb2xlfX0gaGVpZ2h0PXt7aGVpZ2h0fX0gYmFja2dyb3VuZC1jb2xvcj17e2JhY2tncm91bmRDb2xvcn19IHRpdGxlPXt7dGl0bGV9fSAgbGVmdC1pdGVtLWRlcz1cInt7bGVmdEl0ZW1EZXN9fVwiIHRpdGxlLWNvbG9yPXt7dGl0bGVDb2xvcn19IGxlZnQtaXRlbS1zcmM9e3tsZWZ0SXRlbVNyY319IGxlZnQtaXRlbS10aXRsZT17e2xlZnRJdGVtVGl0bGV9fSBsZWZ0LWl0ZW0tY29sb3I9e3tsZWZ0SXRlbUNvbG9yfX0gcmlnaHQtaXRlbS1zcmM9e3tyaWdodEl0ZW1TcmN9fSByaWdodC1pdGVtLXRpdGxlPXt7cmlnaHRJdGVtVGl0bGV9fSByaWdodC1pdGVtLWNvbG9yPXt7cmlnaHRJdGVtQ29sb3J9fSByaWdodC1pdGVtLW1hcms9XCJ7e3JpZ2h0SXRlbU1hcmt9fVwiPjwvbmF2YmFyPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCIgc3R5bGU9XCJib3JkZXItdG9wLWNvbG9yOiB7e2JvcmRlckJvdHRvbUNvbG9yfX07IGJvcmRlci10b3Atd2lkdGg6e3tib3JkZXJCb3R0b21XaWR0aH19OyBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDsgbWFyZ2luLXRvcDp7e21hcmdpblRvcH19XCI+XHJcbiAgICAgICAgICAgIDxjb250ZW50PjwvY29udGVudD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlPlxyXG4gICAgLm5hdmJhciB7IHotaW5kZXg6IDEwOyB9XHJcbiAgICAud3JhcHBlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7IHotaW5kZXg6IDg7XHJcbiAgICAgICAgd2lkdGg6IDc1MHB4O1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIHJlcXVpcmUoJy4vbmF2YmFyLndlJylcclxuICAgIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGF0YVJvbGU6ICduYXZiYXInLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgICAgIGhlaWdodDogODgsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aDogMCxcclxuICAgICAgICAgICAgYm9yZGVyQm90dG9tQ29sb3I6ICcjZDhkOGQ4JyxcclxuICAgICAgICAgICAgdGl0bGVDb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgcmlnaHRJdGVtU3JjOiAnJyxcclxuICAgICAgICAgICAgcmlnaHRJdGVtVGl0bGU6ICcnLFxyXG4gICAgICAgICAgICByaWdodEl0ZW1Db2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgcmlnaHRJdGVtTWFyazogJycsXHJcbiAgICAgICAgICAgIGxlZnRJdGVtU3JjOiAnJyxcclxuICAgICAgICAgICAgbGVmdEl0ZW1UaXRsZTogJycsXHJcbiAgICAgICAgICAgIGxlZnRJdGVtRGVzOiAnJyxcclxuICAgICAgICAgICAgbGVmdEl0ZW1Db2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVhdGVkICgpIHtcclxuICAgICAgICAgICAgLy8gaU9TIOWktOmDqG5hdnBhZ2UgdWnmuLLmn5PkuI5INSBBbmRyb2lk5LiN5LiA6Ie0XHJcbiAgICAgICAgICAgIGlmKHRoaXMuJGdldENvbmZpZygpLmVudi5wbGF0Zm9ybSA9PT0gJ2lPUycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFyZ2luVG9wID0gMFxyXG4gICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmdpblRvcCA9IHRoaXMuaGVpZ2h0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL25hdnBhZ2UvbmF2cGFnZS53ZT80ODU4MjE4NCIsInJlcXVpcmUoXCIuL25hdmJhci53ZVwiKVxudmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9uYXZwYWdlLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL25hdnBhZ2Uud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9uYXZwYWdlLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L25hdnBhZ2UnLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvbmF2cGFnZS9uYXZwYWdlLndlXG4vLyBtb2R1bGUgaWQgPSAxNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAyMSAyMiAyMyAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJuYXZwYWdlXCIsXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImNvbnRhaW5lclwiXG4gIF0sXG4gIFwiYXR0clwiOiB7XG4gICAgXCJsZWZ0SXRlbVNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubmF2LmJhY2t9LFxuICAgIFwidGl0bGVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm5hdi50aXRsZX0sXG4gICAgXCJ0aXRsZUNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5uYXYuY29sb3J9LFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm5hdi5ib3JkZXJCb3R0b21XaWR0aH0sXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm5hdi5iYWNrZ3JvdW5kQ29sb3J9XG4gIH0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImRpdmVyXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcIndyYXBwZXJcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwibGlzdC1pdGVtLXJvd1wiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwicm93XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInJvdy1sYWJlbFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIue8tOi0ueWfjuW4glwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJyb3ctcmlnaHRcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwicm93LXJpZ2h0LXNlbGVjdGVkLXZhbHVlXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy52YWx1ZS5jaXR5fVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJyb3ctcmlnaHQtaWNvblwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnVpLnJpZ2h0X2Fycm93fVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImxpc3QtaXRlbS1yb3dcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInJvd1wiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJyb3ctbGFiZWxcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLnvLTotLnljZXkvY1cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwicm93LXJpZ2h0XCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInJvdy1yaWdodC1zZWxlY3RlZC12YWx1ZVwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudmFsdWUuZGVwYXJ0bWVudH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwicm93LXJpZ2h0LWljb25cIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy51aS5yaWdodF9hcnJvd31cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJsaXN0LWl0ZW0tcm93XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJyb3ctZmxleC1zdGFydFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJyb3ctbGFiZWxcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLnvLTotLnljZXlj7dcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJyb3ctaW5wdXRcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICBcInBsYWNlaG9sZGVyXCI6IFwi6K+36L6T5YWl57y06LS55Y2V5Y+3XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJsaXN0LWl0ZW0tcm93XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJyb3ctZmxleC1zdGFydFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJsYXN0XCI6IFwidHJ1ZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJyb3ctbGFiZWxcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLnvLTotLnph5Hpop1cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJyb3ctaW5wdXRcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJpbnB1dFwiOiBcIm9uQW1vdW50SW5wdXRcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICBcInBsYWNlaG9sZGVyXCI6IFwi6K+36L6T5YWl57y06LS56YeR6aKdXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImFncmVlbWVudFwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJhZ3JlZW1lbnQtdGV4dFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIumYheivu+W5tuWQjOaEj1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiYWdyZWVtZW50LWxpbmtcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCLnu5/nu5/ku5jlhYXlgLznvLTotLnljY/orq5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiY2VudGVyXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImJ1dHRvbi1wcmltYXJ5XCIsXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBcInN1Ym1pdFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJzdGF0dXNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmJ0blByaW1hcnlTdGF0dXN9LFxuICAgICAgICAgICAgXCJ0ZXh0XCI6IFwi5LiL5LiA5q2lXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImhlbHBcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiaGVscC10ZXh0XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiMeOAgeWIsOi0puaXtumXtOS4gOiIrOS4ujPkuKrlt6XkvZzml6Xku6XlhoXvvIzlj4zkvJHml6Xlj4roioLlgYfml6Xpobrlu7ZcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImhlbHAtdGV4dFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIjLjgIHkuIDkuKrotKbmiLfmr4/mnIjmnIDlpJrlj6/mj5DkuqQ256yU57y06LS56K6i5Y2V77yI5oyH5rC06LS544CB55S16LS544CB54eD5rCU6LS56K6i5Y2V5oC75pWw77yJ77yM5Y2V56yUL+S4uei/que8tOi0uemHkemineS4iumZkOS4ujIwMDDlhYNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImhlbHAtdGV4dFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIjPjgIHkuLrpgb/lhY3kuI3lv4XopoHnmoTpurvng6blkozmjZ/lpLHvvIzor7fmgqjlnKjnvLTotLnotKbljZXigJzmnIDlkI7ku5jmrL7ml6XmnJ/igJ3kuYvliY035Liq5bel5L2c5pel6L+b6KGM57y06LS544CC6YC+5pyf6LSm5Y2V77yI5bey5Lqn55Sf5rue57qz6YeR77yJ5bCG5peg5rOV5a6M5oiQ5q2j5bi457y06LS577yM6K+36Iez5ZCE57G757y06LS56JCl5Lia572R5Yqe55CGXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3NyYy92aWV3cy9wYXltZW50LWVsZWN0cmljaXR5LndlXG4vLyBtb2R1bGUgaWQgPSAyMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAzMSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImNvbnRhaW5lclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJkaXZlclwiOiB7XG4gICAgXCJoZWlnaHRcIjogMjAsXG4gICAgXCJ3aWR0aFwiOiA3NTAsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjJmMmYyXCJcbiAgfSxcbiAgXCJyb3ctbGFiZWxcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogNDIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IDEwLFxuICAgIFwiZm9udFNpemVcIjogMzYsXG4gICAgXCJjb2xvclwiOiBcIiMzMzMzMzNcIlxuICB9LFxuICBcInJvdy1yaWdodFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJyb3ctcmlnaHQtc2VsZWN0ZWQtdmFsdWVcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogMjUsXG4gICAgXCJmb250U2l6ZVwiOiAzMixcbiAgICBcImNvbG9yXCI6IFwiIzk5OTk5OVwiXG4gIH0sXG4gIFwicm93LXJpZ2h0LWljb25cIjoge1xuICAgIFwid2lkdGhcIjogNDAsXG4gICAgXCJoZWlnaHRcIjogNDBcbiAgfSxcbiAgXCJyb3ctZmxleC1zdGFydFwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImZsZXgtc3RhcnRcIlxuICB9LFxuICBcInJvdy1pbnB1dFwiOiB7XG4gICAgXCJ3aWR0aFwiOiA0NTAsXG4gICAgXCJoZWlnaHRcIjogNjAsXG4gICAgXCJmb250U2l6ZVwiOiAzMixcbiAgICBcImNvbG9yXCI6IFwiIzMzMzMzM1wiXG4gIH0sXG4gIFwiYWdyZWVtZW50XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogNjAsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogMzBcbiAgfSxcbiAgXCJhZ3JlZW1lbnQtdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiAyNixcbiAgICBcImNvbG9yXCI6IFwiIzRkNGQ0ZFwiXG4gIH0sXG4gIFwiYWdyZWVtZW50LWxpbmtcIjoge1xuICAgIFwiZm9udFNpemVcIjogMjYsXG4gICAgXCJjb2xvclwiOiBcIiMyNjgwZWRcIlxuICB9LFxuICBcIndyYXBwZXJcIjoge1xuICAgIFwid2lkdGhcIjogNzUwLFxuICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogMSxcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiI2RiZGJkYlwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogMSxcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI2RiZGJkYlwiXG4gIH0sXG4gIFwiY2VudGVyXCI6IHtcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImhlbHBcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiAzMCxcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDMwLFxuICAgIFwibWFyZ2luVG9wXCI6IDMwXG4gIH0sXG4gIFwiaGVscC10ZXh0XCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiAyMCxcbiAgICBcImNvbG9yXCI6IFwiIzk5OTk5OVwiLFxuICAgIFwiZm9udFNpemVcIjogMjQsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDQwXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3NyYy92aWV3cy9wYXltZW50LWVsZWN0cmljaXR5LndlXG4vLyBtb2R1bGUgaWQgPSAyMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAzMSIsIjx0ZW1wbGF0ZT5cclxuICAgIDxuYXZwYWdlIGNsYXNzPVwiY29udGFpbmVyXCJcclxuICAgICAgICAgICAgIGxlZnQtaXRlbS1zcmM9XCJ7e25hdi5iYWNrfX1cIlxyXG4gICAgICAgICAgICAgdGl0bGU9XCJ7e25hdi50aXRsZX19XCJcclxuICAgICAgICAgICAgIHRpdGxlLWNvbG9yPVwie3tuYXYuY29sb3J9fVwiXHJcbiAgICAgICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoPVwie3tuYXYuYm9yZGVyQm90dG9tV2lkdGh9fVwiXHJcbiAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yPVwie3tuYXYuYmFja2dyb3VuZENvbG9yfX1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGl2ZXJcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8bGlzdC1pdGVtLXJvdyBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJyb3ctbGFiZWxcIj7nvLTotLnln47luII8L3RleHQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJyb3ctcmlnaHQtc2VsZWN0ZWQtdmFsdWVcIj57e3ZhbHVlLmNpdHl9fTwvdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8aW1hZ2UgY2xhc3M9XCJyb3ctcmlnaHQtaWNvblwiIHNyYz1cInt7dWkucmlnaHRfYXJyb3d9fVwiPjwvaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saXN0LWl0ZW0tcm93PlxyXG4gICAgICAgICAgICA8bGlzdC1pdGVtLXJvdyBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJyb3ctbGFiZWxcIj7nvLTotLnljZXkvY08L3RleHQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJyb3ctcmlnaHQtc2VsZWN0ZWQtdmFsdWVcIj57e3ZhbHVlLmRlcGFydG1lbnR9fTwvdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8aW1hZ2UgY2xhc3M9XCJyb3ctcmlnaHQtaWNvblwiIHNyYz1cInt7dWkucmlnaHRfYXJyb3d9fVwiPjwvaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saXN0LWl0ZW0tcm93PlxyXG4gICAgICAgICAgICA8bGlzdC1pdGVtLXJvdyBjbGFzcz1cInJvdy1mbGV4LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cInJvdy1sYWJlbFwiPue8tOi0ueWNleWPtzwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInJvdy1pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXnvLTotLnljZXlj7dcIiB2YWx1ZT1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvbGlzdC1pdGVtLXJvdz5cclxuICAgICAgICAgICAgPGxpc3QtaXRlbS1yb3cgY2xhc3M9XCJyb3ctZmxleC1zdGFydFwiIGxhc3Q9XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cInJvdy1sYWJlbFwiPue8tOi0uemHkeminTwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInJvdy1pbnB1dFwiIG9uaW5wdXQ9XCJvbkFtb3VudElucHV0XCIgIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXnvLTotLnph5Hpop1cIiB2YWx1ZT1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvbGlzdC1pdGVtLXJvdz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWdyZWVtZW50XCI+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiYWdyZWVtZW50LXRleHRcIj7pmIXor7vlubblkIzmhI88L3RleHQ+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiYWdyZWVtZW50LWxpbmtcIj7nu5/nu5/ku5jlhYXlgLznvLTotLnljY/orq48L3RleHQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uLXByaW1hcnkgb25jbGljaz1cInN1Ym1pdFwiIHN0YXR1cz1cInt7YnRuUHJpbWFyeVN0YXR1c319XCIgdGV4dD1cIuS4i+S4gOatpVwiPjwvYnV0dG9uLXByaW1hcnk+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImhlbHBcIj5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJoZWxwLXRleHRcIj4x44CB5Yiw6LSm5pe26Ze05LiA6Iis5Li6M+S4quW3peS9nOaXpeS7peWGhe+8jOWPjOS8keaXpeWPiuiKguWBh+aXpemhuuW7tjwvdGV4dD5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJoZWxwLXRleHRcIj4y44CB5LiA5Liq6LSm5oi35q+P5pyI5pyA5aSa5Y+v5o+Q5LqkNueslOe8tOi0ueiuouWNle+8iOaMh+awtOi0ueOAgeeUtei0ueOAgeeHg+awlOi0ueiuouWNleaAu+aVsO+8ie+8jOWNleeslC/kuLnov6rnvLTotLnph5Hpop3kuIrpmZDkuLoyMDAw5YWDPC90ZXh0PlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImhlbHAtdGV4dFwiPjPjgIHkuLrpgb/lhY3kuI3lv4XopoHnmoTpurvng6blkozmjZ/lpLHvvIzor7fmgqjlnKjnvLTotLnotKbljZXigJzmnIDlkI7ku5jmrL7ml6XmnJ/igJ3kuYvliY035Liq5bel5L2c5pel6L+b6KGM57y06LS544CC6YC+5pyf6LSm5Y2V77yI5bey5Lqn55Sf5rue57qz6YeR77yJ5bCG5peg5rOV5a6M5oiQ5q2j5bi457y06LS577yM6K+36Iez5ZCE57G757y06LS56JCl5Lia572R5Yqe55CGPC90ZXh0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXZwYWdlPlxyXG48L3RlbXBsYXRlPlxyXG48c3R5bGU+XHJcbiAgICAuY29udGFpbmVyIHsgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxyXG4gICAgLmRpdmVyIHtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7IHdpZHRoOiA3NTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gICAgfVxyXG5cclxuICAgIC5yb3ctbGFiZWwge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNDJweDsgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNnB4OyBjb2xvcjogIzMzMztcclxuICAgIH1cclxuICAgIC5yb3ctcmlnaHQge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5yb3ctcmlnaHQtc2VsZWN0ZWQtdmFsdWUge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7IGNvbG9yOiAjOTk5O1xyXG4gICAgfVxyXG4gICAgLnJvdy1yaWdodC1pY29uIHsgd2lkdGg6IDQwcHg7IGhlaWdodDogNDBweDsgfVxyXG5cclxuICAgIC5yb3ctZmxleC1zdGFydCB7IGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxyXG4gICAgLnJvdy1pbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDQ1MHB4OyBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMnB4OyBjb2xvcjogIzMzMztcclxuICAgIH1cclxuXHJcbiAgICAuYWdyZWVtZW50IHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4OyBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLmFncmVlbWVudC10ZXh0IHsgZm9udC1zaXplOiAyNnB4OyBjb2xvcjogIzRkNGQ0ZDsgfVxyXG4gICAgLmFncmVlbWVudC1saW5rIHsgZm9udC1zaXplOiAyNnB4OyBjb2xvcjogIzI2ODBlZDsgfVxyXG5cclxuXHJcbiAgICAud3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IDc1MHB4O1xyXG4gICAgICAgIGJvcmRlci10b3Atd2lkdGg6IDFweDsgYm9yZGVyLXRvcC1jb2xvcjogI2RiZGJkYjtcclxuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7IGJvcmRlci1ib3R0b20tY29sb3I6ICNkYmRiZGI7XHJcbiAgICB9XHJcbiAgICAuY2VudGVyIHsgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxyXG4gICAgLmhlbHB7IG1hcmdpbi1sZWZ0OiAzMHB4OyBtYXJnaW4tcmlnaHQ6IDMwcHg7IG1hcmdpbi10b3A6IDMwcHg7IH1cclxuICAgIC5oZWxwLXRleHQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICM5OTk7IGZvbnQtc2l6ZTogMjRweDsgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbW1vbi9jb25maWcnXHJcbiAgICBpbXBvcnQgKiBhcyBtZXRob2RzIGZyb20gJy4uL2NvbW1vbi9tZXRob2RzJ1xyXG4gICAgY29uc3QgbmF2aWdhdG9yID0gcmVxdWlyZSgnQHdlZXgtbW9kdWxlL25hdmlnYXRvcicpXHJcbiAgICByZXF1aXJlKCcuLi9jb21wb25lbnRzL25hdnBhZ2UvbmF2cGFnZS53ZScpXHJcbiAgICByZXF1aXJlKCcuLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24tcHJpbWFyeS53ZScpXHJcbiAgICByZXF1aXJlKCcuLi9jb21wb25lbnRzL2xpc3QtaXRlbS9saXN0LWl0ZW0tcm93LndlJylcclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIG5hdjoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfnlLXotLnnvLTnurMnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjNGQ0ZDRkJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICBiYWNrOiBjb25maWcuaWNvbi5iYWNrXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVpOiB7XHJcbiAgICAgICAgICAgICAgICByaWdodF9hcnJvdzogY29uZmlnLmljb24ucmlnaHRfYXJyb3dcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYnRuUHJpbWFyeVN0YXR1czogJ2Rpc2FibGVkJyxcclxuICAgICAgICAgICAgdmFsdWU6IHtcclxuICAgICAgICAgICAgICAgIGNpdHk6ICfmna3lt57luIInLFxyXG4gICAgICAgICAgICAgICAgZGVwYXJ0bWVudDogJycsXHJcbiAgICAgICAgICAgICAgICBvcmRlck5vOiAnJyxcclxuICAgICAgICAgICAgICAgIGFtb3VudDogJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlYXRlZCAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJG9uKCduYXZpQmFyLmxlZnRJdGVtLmNsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAnYW5pbWF0ZWQnOiAndHJ1ZScsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucG9wKHBhcmFtcywgZnVuY3Rpb24gKCkge30pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuJG9uKCdmb3JtQ2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5QcmltYXJ5U3RhdHVzID0gKHRoaXMudmFsdWUuYW1vdW50KSA/XHJcbiAgICAgICAgICAgICAgICAgICAgJ2VuYWJsZWQnOiAnZGlzYWJsZWQnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAgICAgb25BbW91bnRJbnB1dCAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZS5hbW91bnQgPSBlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRkaXNwYXRjaCgnZm9ybUNoYW5nZScpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Ym1pdCAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnZhbHVlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgbWV0aG9kcylcclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aWV3cy9wYXltZW50LWVsZWN0cmljaXR5LndlPzVmZDVmMmUyIiwidmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9idXR0b24tcHJpbWFyeS53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9idXR0b24tcHJpbWFyeS53ZVwiKVxudmFyIF9fd2VleF9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL2J1dHRvbi1wcmltYXJ5LndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L2J1dHRvbi1wcmltYXJ5JywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24tcHJpbWFyeS53ZVxuLy8gbW9kdWxlIGlkID0gMjE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMzEgMzIgMzMgMzQgMzUiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL2xpc3QtaXRlbS1yb3cud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vbGlzdC1pdGVtLXJvdy53ZVwiKVxudmFyIF9fd2VleF9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL2xpc3QtaXRlbS1yb3cud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvbGlzdC1pdGVtLXJvdycsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9saXN0LWl0ZW0vbGlzdC1pdGVtLXJvdy53ZVxuLy8gbW9kdWxlIGlkID0gMjE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMzEgMzIgMzMgMzUiXSwic291cmNlUm9vdCI6IiJ9