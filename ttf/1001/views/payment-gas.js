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

	var __weex_template__ = __webpack_require__(217)
	var __weex_style__ = __webpack_require__(218)
	var __weex_script__ = __webpack_require__(219)
	
	__weex_define__('@weex-component/bf06d09c30f62fc9592d052fa9f7a08c', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})
	
	__weex_bootstrap__('@weex-component/bf06d09c30f62fc9592d052fa9f7a08c',undefined,undefined)

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
/* 212 */,
/* 213 */,
/* 214 */,
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


/***/ },
/* 217 */
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
/* 218 */
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
/* 219 */
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
	            title: '燃气缴费',
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


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTZlY2Q1YzViMGFjZjE5MzZkYmI/YzBlMCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BheW1lbnQtZ2FzLndlPzRmZDAiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcz9lNmNhKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcz84MGU0KioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcz85MDA3KioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzP2VjZTIqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanM/NzdhYSoqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanM/MWI2MioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcz9jZTAwKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcz9kNTNlKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcz9hNmRhKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzPzQxMTYqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanM/MGRhMyoqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcz8yNGM4KioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanM/YmQxZioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzPzcwNTEqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcz85MzVkKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcz9hYjQ0KioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzPzQ5YTQqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzPzFlODYqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzPzVjMGMqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcz9mNWJjKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanM/ZmNlYSoqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcz9kODUwKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcz82OTQ2KioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcz81Y2Y5KioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzPzQ4ZWEqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzPzQ1ZDMqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcz82MTk5KioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzPzYyYTcqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzP2Y2NWYqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qcz85ZmQ0KioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcz8yYTZjKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzPzdiNmMqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanM/ZThjZCoqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanM/NzU5OCoqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzP2E1ZmIqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzP2QwZDIqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanM/YjVjMCoqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vbWV0aG9kcy5qcz8zZDkyKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb25maWcuanM/YzE4MyoqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi1wcmltYXJ5LndlPzc2MDgqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLXByaW1hcnkud2U/OWUyYSoqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24tcHJpbWFyeS53ZT9iMTE2KiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9saXN0LWl0ZW0vbGlzdC1pdGVtLXJvdy53ZT9mMDlkKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGlzdC1pdGVtL2xpc3QtaXRlbS1yb3cud2U/NTRhZSoqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xpc3QtaXRlbS9saXN0LWl0ZW0tcm93LndlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25hdnBhZ2UvbmF2YmFyLndlP2I1NTEqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2cGFnZS9uYXZiYXIud2U/NTA4YSoqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZwYWdlL25hdmJhci53ZT82NTM5KioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2cGFnZS9uYXZiYXIud2U/OWMxMioqKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25hdnBhZ2UvbmF2cGFnZS53ZT8yZjI2KioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2cGFnZS9uYXZwYWdlLndlPzBmZmIqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZwYWdlL25hdnBhZ2Uud2U/ZmY0YioqKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25hdnBhZ2UvbmF2cGFnZS53ZT84MDI2KioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLXByaW1hcnkud2U/NWFiOCoiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGlzdC1pdGVtL2xpc3QtaXRlbS1yb3cud2U/N2ZjMSoiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BheW1lbnQtZ2FzLndlPzY4OGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BheW1lbnQtZ2FzLndlPzU1OTciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BheW1lbnQtZ2FzLndlIl0sIm5hbWVzIjpbImdldEJhc2VVUkwiLCJkZXRlY3Rpb24iLCJyb3V0ZSIsInJvdXRlVG9VcmwiLCJyb3V0ZU5hbWUiLCJwYXJhbXMiLCJ0ZXN0Iiwic3BsaXQiLCJyIiwiY29tcGlsZVVybCIsImNvbnNvbGUiLCJsb2ciLCJ1cmwiLCJqb2luIiwiY2FsbCIsIndpbmRvdyIsIm9wZW4iLCJvIiwidGhlbiIsIiRvcGVuVVJMIiwiZmFpbENhbGxiYWNrIiwibmFtZSIsInJlc3VsdCIsIiRnZXRDb25maWciLCJidW5kbGVVcmwiLCJpbmRleE9mIiwic3RyIiwic3Vic3RyIiwicCIsImZvckVhY2giLCJ2IiwidGVtcCIsImRlY29kZVVSSSIsInJlYWxIZWlnaHQiLCJoZWlnaHQiLCJ3IiwiZW52IiwiZGV2aWNlV2lkdGgiLCJoIiwiZGV2aWNlSGVpZ2h0IiwiYXNzZXRzUm9vdCIsImljb24iLCJzY3JpcHRIb3N0IiwiaHRtbEluZGV4Iiwic2NyaXB0Um9vdCIsImFwaVJvb3QiLCJhbmRyb2lkQXNzZXRzUm9vdCIsIm1hcCIsIm1hcF9saWZlIiwibm90aWNlIiwic2NhbiIsImNvZGUiLCJ0cmFuc2FjdGlvbl9yZWNvcmQiLCJzZWFyY2giLCJiYWNrIiwicmlnaHRfYXJyb3ciLCJhcm91bmQiLCJzZWFyY2hfcGFzcyIsInN0YXIiLCJoYWxmX3N0YXIiLCJkcm9wZG93biIsInRpY2siLCJjb2xsZWN0IiwiY29sbGVjdF91bnNlbGVjdGVkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsRUFBQzs7QUFFRCwyRjs7Ozs7Ozs7Ozs7OztBQ2pCQSxtQkFBa0IsdUQ7Ozs7OztBQ0FsQjtBQUNBLHdEOzs7Ozs7QUNEQTtBQUNBOztBQUVBLDJDQUEwQyxnQ0FBb0MsRTs7Ozs7O0FDSDlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBbUU7QUFDbkU7QUFDQSxzRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQSxnQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0Esb0NBQW1DLDZCQUE2QjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDL1BBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDb0JBOzs7Ozs7S0FDQTs7Ozs7O3lCQUNBO3FCQUNBO3FCQUNBO3FCQUNBOzs7O29CQUlBO29CQUNBOzhCQUNBO2dDQUNBO3lDQUVBO0FBTkE7O2dEQVNBO0FBRkE7MkJBR0E7O21CQUVBO3lCQUNBO3NCQUNBO3FCQUdBO0FBTkE7QUFaQTs7QUFtQkE7O3dEQUNBOzs2QkFHQTtBQUZBO2dEQUdBO0FBQ0E7NENBQ0E7a0RBQ0EscUJBQ0E7QUFDQTtBQUNBOzs7a0RBRUE7bUNBQ0E7NEJBQ0E7QUFDQTttQ0FDQTs4QkFDQTtBQUNBO0FBUEEsUUFRQTtBQXhDQSIsImZpbGUiOiJ2aWV3c1xccGF5bWVudC1nYXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5NmVjZDVjNWIwYWNmMTkzNmRiYiIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vcGF5bWVudC1nYXMud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vcGF5bWVudC1nYXMud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9wYXltZW50LWdhcy53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC9iZjA2ZDA5YzMwZjYyZmM5NTkyZDA1MmZhOWY3YTA4YycsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5fX3dlZXhfYm9vdHN0cmFwX18oJ0B3ZWV4LWNvbXBvbmVudC9iZjA2ZDA5YzMwZjYyZmM5NTkyZDA1MmZhOWY3YTA4YycsdW5kZWZpbmVkLHVuZGVmaW5lZClcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3cy9wYXltZW50LWdhcy53ZT9lbnRyeT10cnVlXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMzIiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM3IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCAkYXNzaWduICA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHZhciBBID0ge31cbiAgICAsIEIgPSB7fVxuICAgICwgUyA9IFN5bWJvbCgpXG4gICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgYUxlbiAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpbmRleCA9IDFcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmZcbiAgICAsIGlzRW51bSAgICAgPSBwSUUuZjtcbiAgd2hpbGUoYUxlbiA+IGluZGV4KXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pXG4gICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNyIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJ2YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b0lPYmplY3QgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwga2V5O1xuICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiaW1wb3J0IHsgZ2V0QmFzZVVSTCB9IGZyb20gJy4vYXBpJ1xyXG5pbXBvcnQgKiBhcyBkZXRlY3Rpb24gZnJvbSAnLi9kZXRlY3Rpb24nXHJcbmltcG9ydCByb3V0ZSBmcm9tICcuL3JvdXRlJ1xyXG4vKipcclxuICog6Lev55Sx6L2s6ZO+5o6lXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSByb3V0ZU5hbWVcclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByb3V0ZVRvVXJsIChyb3V0ZU5hbWUpIHtcclxuICAgIHZhciBwYXJhbXMgPSAnJ1xyXG4gICAgaWYgKC9cXD8vLnRlc3Qocm91dGVOYW1lKSkge1xyXG4gICAgICAgIHBhcmFtcyA9IHJvdXRlTmFtZS5zcGxpdCgnPycpWzFdXHJcbiAgICAgICAgcm91dGVOYW1lID0gcm91dGVOYW1lLnNwbGl0KCc/JylbMF1cclxuICAgIH1cclxuICAgIGxldCByID0gcm91dGVbcm91dGVOYW1lXVxyXG4gICAgbGV0IGNvbXBpbGVVcmxcclxuICAgIGlmICghcikge1xyXG4gICAgICAgIC8vIFRPRE8g6Lez6L2s5Yiw6ZSZ6K+v6aG1XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yOiDot6/nlLHkuI3lrZjlnKjvvIzor7flnKhyb3V0ZXIuanPkuK3phY3nva7lr7nlupTnmoTot6/nlLEnKVxyXG4gICAgfVxyXG4gICAgY29tcGlsZVVybCA9IHIudXJsID8gci51cmwgOiAndmlld3MvJyArIHJvdXRlTmFtZS5zcGxpdCgnXycpLmpvaW4oJy0nKVxyXG4gICAgbGV0IHVybCA9IGdldEJhc2VVUkwuY2FsbCh0aGlzLCB0cnVlKSArIGNvbXBpbGVVcmwgKyAnLmpzJ1xyXG4gICAgLy8g5YWB6K645re75Yqg5Y+C5pWwIOS+i+WmgiBtZXJjaGFudF9hcm91bmQ/YT0xJmI9MiDlpITnkIbop4TliJnlkozmtY/op4jlmajnmoRxdWVyeXN0cmluZ+S4gOiHtFxyXG4gICAgaWYgKHBhcmFtcykge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwgKyAnJicgKyBwYXJhbXNcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwgKyAnPycgKyBwYXJhbXNcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXJsXHJcbn1cclxuLyoqXHJcbiAqIOaJk+W8gOaWsOmhtemdolxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcm91dGVOYW1lIC0g6Lev55Sx5ZCN56ewIOaJgOaciei3r+eUseWQjeensOWcqHJvdXRlLmpz5LitXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvIC0g546w5Zyo5Y+q5pyJ6Lev55Sx5omT5byA5aSx6LSl5aSE55CG5pa55rOV77yM5Lul5ZCO5Y+v5Lul5re75Yqg5YW25LuW5aSE55CGXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG8uZmFpbENhbGxiYWNrIC0g6Lev55Sx5omT5byA5aSx6LSl5aSE55CGY2FsbGJhY2tcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvcGVuIChyb3V0ZU5hbWUsIG8pIHtcclxuICAgIGxldCByID0gcm91dGVbcm91dGVOYW1lXVxyXG4gICAgbGV0IHVybCA9IHJvdXRlVG9VcmwuY2FsbCh0aGlzLCByb3V0ZU5hbWUpXHJcbiAgICBpZiAoci5kZXRlY3Rpb24pIHtcclxuICAgICAgICBkZXRlY3Rpb25bci5kZXRlY3Rpb25dKHtcclxuICAgICAgICAgICAgcm91dGVOYW1lOiByb3V0ZU5hbWUsXHJcbiAgICAgICAgICAgIHVybDogdXJsXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJG9wZW5VUkwodXJsKVxyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgdHlwZW9mIG8uZmFpbENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvLmZhaWxDYWxsYmFjay5jYWxsKHRoaXMsIHJvdXRlTmFtZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuJG9wZW5VUkwodXJsKVxyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiDop6PmnpDot6/nlLHlj4LmlbBcclxuICog5L6L5aaC77yabWVyY2hhbnRfYXJvdW5kP2E9MSZiPTIg6aG16Z2iXHJcbiAqICAgICAg6LCD55SocGFyYW1zKCnmlrnms5Ug6L+U5Zue5YC85Li677yaIHthOjEsIGI6Mn1cclxuICogICAgICDosIPnlKhwYXJhbXMoJ2EnKeaWueazlSDov5Tlm57lgLzkuLrvvJogMVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW25hbWVdIOWPr+mAieWPguaVsFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3VybF0g5Y+v6YCJ5Y+C5pWwIOm7mOiupOS4umJ1bmRsZVVybFxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfG9iamVjdH1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJhbXMgKG5hbWUsIHVybCl7XHJcbiAgICBsZXQgcmVzdWx0ID0ge31cclxuICAgIGlmICghdXJsKSB7XHJcbiAgICAgICAgdXJsID0gdGhpcy4kZ2V0Q29uZmlnKCkuYnVuZGxlVXJsXHJcbiAgICB9XHJcbiAgICBpZiAodXJsLmluZGV4T2YoXCI/XCIpICE9PSAtMSkge1xyXG4gICAgICAgIGxldCBzdHIgPSB1cmwuc3Vic3RyKHVybC5pbmRleE9mKFwiP1wiKSArIDEpXHJcbiAgICAgICAgbGV0IHAgPSBzdHIuc3BsaXQoXCImXCIpXHJcbiAgICAgICAgcC5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdGVtcCA9IHYuc3BsaXQoXCI9XCIpXHJcbiAgICAgICAgICAgIHJlc3VsdFt0ZW1wWzBdXSA9IGRlY29kZVVSSSh0ZW1wWzFdKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgaWYgKHJlc3VsdFtuYW1lXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0W25hbWVdXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnXHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9XHJcbn1cclxuLy8g6I635Y+W55yf5a6e6auY5bqm77yM55Sx5LqOd2VleOmXrumimOacquiDvemAgumFjeaJgOacieacuuWei+OAglxyXG5leHBvcnQgZnVuY3Rpb24gcmVhbEhlaWdodCAoaGVpZ2h0KSB7XHJcbiAgICBsZXQgdyA9IHRoaXMuJGdldENvbmZpZygpLmVudi5kZXZpY2VXaWR0aFxyXG4gICAgbGV0IGggPSB0aGlzLiRnZXRDb25maWcoKS5lbnYuZGV2aWNlSGVpZ2h0XHJcbiAgICAvLyAxMzMyXHJcbiAgICByZXR1cm4gdyAvIDc1MCAqIGhlaWdodFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9tZXRob2RzLmpzIiwiLy8gY29uc3QgYXNzZXRzVVJMID0gJ2ZpbGU6Ly8vc2RjYXJkL2ltZy8nXHJcbmNvbnN0IGFzc2V0c1Jvb3QgPSAnaHR0cHM6Ly9rb29vZmx5LmdpdGh1Yi5pby9rb3N0YW5kLXR0Zi90dGYvYXNzZXRzLydcclxuXHJcbmZ1bmN0aW9uIGljb24odikge1xyXG4gICAgcmV0dXJuIGFzc2V0c1Jvb3QgKyAnaWNvbi8nICsgdlxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIC8vIHdlZXjohJrmnKxob3N0XHJcbiAgICBzY3JpcHRIb3N0OiAnaHR0cHM6Ly9rb29vZmx5LmdpdGh1Yi5pby9rb3N0YW5kLXR0Zi90dGYnLFxyXG4gICAgLy8gSFRNTCBpbmRleFxyXG4gICAgaHRtbEluZGV4OiAnaHR0cHM6Ly9rb29vZmx5LmdpdGh1Yi5pby9rb3N0YW5kLXR0Zi90dGYvaW5kZXguaHRtbCcsXHJcbiAgICAvLyB3ZWV46ISa5pys5qC555uu5b2VXHJcbiAgICBzY3JpcHRSb290OiAnLzEwMDEvJyxcclxuICAgIC8vIOWbvueJh+etiemdmeaAgei1hOa6kOagueebruW9lVxyXG4gICAgYXNzZXRzUm9vdDogYXNzZXRzUm9vdCxcclxuICAgIC8vIHJlc2V0ZnVsIEFQSeacjeWKoeaguei3r+W+hFxyXG4gICAgYXBpUm9vdDogJ2h0dHBzOi8va29vb2ZseS5naXRodWIuaW8va29zdGFuZC10dGYvdHRmL2FwaS92MScsXHJcbiAgICAvLyBhbmRyb2lkIOacrOWcsOmdmeaAgei1hOa6kOi3r+W+hFxyXG4gICAgYW5kcm9pZEFzc2V0c1Jvb3Q6ICdmaWxlOi8vL3NkY2FyZC9hc3NldHMvJyxcclxuICAgIGljb246IHtcclxuICAgICAgICBtYXA6IGljb24oJ21hcEAyeC5wbmcnKSxcclxuICAgICAgICBtYXBfbGlmZTogaWNvbignbWFwX2xpZmVAMngucG5nJyksXHJcbiAgICAgICAgbm90aWNlOiBpY29uKCdub3RpY2VAMngucG5nJyksXHJcbiAgICAgICAgc2NhbjogaWNvbignc2NhbkAyeC5wbmcnKSxcclxuICAgICAgICBjb2RlOiBpY29uKCdjb2RlQDJ4LnBuZycpLFxyXG4gICAgICAgIHRyYW5zYWN0aW9uX3JlY29yZDogaWNvbigndHJhbnNhY3Rpb25fcmVjb3JkQDJ4LnBuZycpLFxyXG4gICAgICAgIHNlYXJjaDogaWNvbignc2VhcmNoQDJ4LnBuZycpLFxyXG4gICAgICAgIGJhY2s6IGljb24oJ2JhY2tAMngucG5nJyksXHJcbiAgICAgICAgcmlnaHRfYXJyb3c6IGljb24oJ3JpZ2h0X2Fycm93QDJ4LnBuZycpLFxyXG4gICAgICAgIHNlYXJjaDogaWNvbignc2VhcmNoX3Nob3BAMngucG5nJyksXHJcbiAgICAgICAgYXJvdW5kOiBpY29uKCdhcm91bmRAMngucG5nJyksXHJcbiAgICAgICAgc2VhcmNoX3Bhc3M6IGljb24oJ3NlYXJjaF9wYXNzQDJ4LnBuZycpLFxyXG4gICAgICAgIHN0YXI6IGljb24oJ3N0YXJAMngucG5nJyksXHJcbiAgICAgICAgaGFsZl9zdGFyOiBpY29uKCdoYWxmX3N0YXJAMngucG5nJyksXHJcbiAgICAgICAgZHJvcGRvd246IGljb24oJ2Ryb3Bkb3duQDJ4LnBuZycpLFxyXG4gICAgICAgIHRpY2s6IGljb24oJ3RpY2tAMngucG5nJyksXHJcbiAgICAgICAgY29sbGVjdDogaWNvbignY29sbGVjdEAyeC5wbmcnKSxcclxuICAgICAgICBjb2xsZWN0X3Vuc2VsZWN0ZWQ6IGljb24oJ2NvbGxlY3QtdW5zZWxlY3RlZEAyeC5wbmcnKVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9jb25maWcuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gWydidG4tcHJpbWFyeScsICdidG4tJyArICh0aGlzLnN0YXR1cyldfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImJ0bi1wcmltYXJ5LXR4dFwiXG4gICAgICBdLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGV4dH1cbiAgICAgIH1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24tcHJpbWFyeS53ZVxuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSA0IDMxIDMyIDMzIDM0IDM1IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiYnRuLXByaW1hcnlcIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcIndpZHRoXCI6IDY4NixcbiAgICBcImhlaWdodFwiOiA5MCxcbiAgICBcImZvbnRTaXplXCI6IDQyLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogNlxuICB9LFxuICBcImJ0bi1wcmltYXJ5LXR4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiA0MixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiYnRuLWRpc2FibGVkXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNjY2NjY2NcIlxuICB9LFxuICBcImJ0bi1lbmFibGVkXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMzYjhhZWFcIlxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9zcmMvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLXByaW1hcnkud2Vcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gNCAzMSAzMiAzMyAzNCAzNSIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJidG4tcHJpbWFyeSBidG4te3tzdGF0dXN9fVwiPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiYnRuLXByaW1hcnktdHh0XCI+e3t0ZXh0fX08L3RleHQ+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAgIC5idG4tcHJpbWFyeSB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDY4NnB4OyBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MnB4OyBjb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICB9XHJcbiAgICAuYnRuLXByaW1hcnktdHh0IHsgZm9udC1zaXplOiA0MnB4OyBjb2xvcjogI2ZmZjsgfVxyXG5cclxuICAgIC5idG4tZGlzYWJsZWR7IGJhY2tncm91bmQtY29sb3I6ICNjY2M7IH1cclxuICAgIC5idG4tZW5hYmxlZHsgYmFja2dyb3VuZC1jb2xvcjogIzNiOGFlYTsgfVxyXG48L3N0eWxlPlxyXG48c2NyaXB0PlxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIGRhdGEgKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ+ehriDlrponLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnZGlzYWJsZWQnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24tcHJpbWFyeS53ZT8wNTZhY2ZjZCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwibGlzdC1pdGVtXCJcbiAgXSxcbiAgXCJzdHlsZVwiOiB7XG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYm9yZGVyQm90dG9tV2lkdGh9XG4gIH0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImNvbnRlbnRcIlxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vc3JjL2NvbXBvbmVudHMvbGlzdC1pdGVtL2xpc3QtaXRlbS1yb3cud2Vcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMTAgMzEgMzIgMzMgMzUiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJsaXN0LWl0ZW1cIjoge1xuICAgIFwiZmxleFdyYXBcIjogXCJ3cmFwXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIndpZHRoXCI6IDcyNixcbiAgICBcImhlaWdodFwiOiAxMTAsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IDI0LFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDIwLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjZGJkYmRiXCIsXG4gICAgXCJib3JkZXJCb3R0b21TdHlsZVwiOiBcInNvbGlkXCJcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vc3JjL2NvbXBvbmVudHMvbGlzdC1pdGVtL2xpc3QtaXRlbS1yb3cud2Vcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMTAgMzEgMzIgMzMgMzUiLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwibGlzdC1pdGVtXCIgc3R5bGU9XCJib3JkZXItYm90dG9tLXdpZHRoOiB7e2JvcmRlckJvdHRvbVdpZHRofX1cIj5cclxuICAgICAgICA8Y29udGVudD48L2NvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAgIC5saXN0LWl0ZW0ge1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDsgZmxleC1kaXJlY3Rpb246IHJvdzsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiA3MjZweDsgaGVpZ2h0OiAxMTBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjRweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNkYmRiZGI7IGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG48c2NyaXB0PlxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIGRhdGEgKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbGFzdDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aDogMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVhdGVkICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGFzdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib3JkZXJCb3R0b21XaWR0aCA9IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvbGlzdC1pdGVtL2xpc3QtaXRlbS1yb3cud2U/MjZiMjU4NzEiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImNvbnRhaW5lclwiXG4gIF0sXG4gIFwic3R5bGVcIjoge1xuICAgIFwiaGVpZ2h0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5oZWlnaHR9LFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5iYWNrZ3JvdW5kQ29sb3J9XG4gIH0sXG4gIFwiYXR0clwiOiB7XG4gICAgXCJkYXRhUm9sZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuZGF0YVJvbGV9XG4gIH0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJyaWdodC10ZXh0XCJcbiAgICAgIF0sXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmlnaHRJdGVtQ29sb3J9XG4gICAgICB9LFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJuYXZpSXRlbVBvc2l0aW9uXCI6IFwicmlnaHRcIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmlnaHRJdGVtVGl0bGV9XG4gICAgICB9LFxuICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICF0aGlzLnJpZ2h0SXRlbVNyY30sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJvbmNsaWNrcmlnaHRpdGVtXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwicmlnaHQtaW1hZ2VcIlxuICAgICAgXSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwibmF2aUl0ZW1Qb3NpdGlvblwiOiBcInJpZ2h0XCIsXG4gICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodEl0ZW1TcmN9XG4gICAgICB9LFxuICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmlnaHRJdGVtU3JjfSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcIm9uY2xpY2tyaWdodGl0ZW1cIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInJpZ2h0LW1hcmtcIlxuICAgICAgXSxcbiAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJpZ2h0SXRlbU1hcmt9LFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwib25jbGlja3JpZ2h0aXRlbVwiXG4gICAgICB9LFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmlnaHRJdGVtTWFya31cbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJsZWZ0LXRleHRcIlxuICAgICAgXSxcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcImNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sZWZ0SXRlbUNvbG9yfVxuICAgICAgfSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwibmF2aUl0ZW1Qb3NpdGlvblwiOiBcImxlZnRcIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGVmdEl0ZW1UaXRsZX1cbiAgICAgIH0sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJvbmNsaWNrbGVmdGl0ZW1cIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImxlZnQtZGVzXCJcbiAgICAgIF0sXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGVmdEl0ZW1Db2xvcn1cbiAgICAgIH0sXG4gICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sZWZ0SXRlbURlc30sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sZWZ0SXRlbURlc31cbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwibGVmdC1pbWFnZVwiXG4gICAgICBdLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJuYXZpSXRlbVBvc2l0aW9uXCI6IFwibGVmdFwiLFxuICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGVmdEl0ZW1TcmN9XG4gICAgICB9LFxuICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGVmdEl0ZW1TcmN9LFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwib25jbGlja2xlZnRpdGVtXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJjZW50ZXItdGV4dFwiXG4gICAgICBdLFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdGxlQ29sb3J9XG4gICAgICB9LFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJuYXZpSXRlbVBvc2l0aW9uXCI6IFwiY2VudGVyXCIsXG4gICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdGxlfVxuICAgICAgfVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vc3JjL2NvbXBvbmVudHMvbmF2cGFnZS9uYXZiYXIud2Vcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMgMTQgMjEgMjIgMjMgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJjb250YWluZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgIFwidG9wXCI6IDAsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwid2lkdGhcIjogNzUwXG4gIH0sXG4gIFwicmlnaHQtdGV4dFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJib3R0b21cIjogMjQsXG4gICAgXCJyaWdodFwiOiAzMixcbiAgICBcInRleHRBbGlnblwiOiBcInJpZ2h0XCIsXG4gICAgXCJmb250U2l6ZVwiOiAyOCxcbiAgICBcImZvbnRGYW1pbHlcIjogXCInT3BlbiBTYW5zJywgc2Fucy1zZXJpZlwiXG4gIH0sXG4gIFwibGVmdC10ZXh0XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImJvdHRvbVwiOiAyMixcbiAgICBcImxlZnRcIjogODAsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJsZWZ0XCIsXG4gICAgXCJmb250U2l6ZVwiOiAzMixcbiAgICBcImZvbnRGYW1pbHlcIjogXCInT3BlbiBTYW5zJywgc2Fucy1zZXJpZlwiXG4gIH0sXG4gIFwibGVmdC1kZXNcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiYm90dG9tXCI6IDIyLFxuICAgIFwibGVmdFwiOiA4MCxcbiAgICBcInRleHRBbGlnblwiOiBcImxlZnRcIixcbiAgICBcImZvbnRTaXplXCI6IDMyLFxuICAgIFwiZm9udEZhbWlseVwiOiBcIidPcGVuIFNhbnMnLCBzYW5zLXNlcmlmXCJcbiAgfSxcbiAgXCJjZW50ZXItdGV4dFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJib3R0b21cIjogMTYsXG4gICAgXCJsZWZ0XCI6IDE3MixcbiAgICBcInJpZ2h0XCI6IDE3MixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiZm9udFNpemVcIjogMzhcbiAgfSxcbiAgXCJsZWZ0LWltYWdlXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImJvdHRvbVwiOiAyMCxcbiAgICBcImxlZnRcIjogMjgsXG4gICAgXCJ3aWR0aFwiOiA0OCxcbiAgICBcImhlaWdodFwiOiA0OFxuICB9LFxuICBcInJpZ2h0LWltYWdlXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImJvdHRvbVwiOiAyMCxcbiAgICBcInJpZ2h0XCI6IDI4LFxuICAgIFwid2lkdGhcIjogNDgsXG4gICAgXCJoZWlnaHRcIjogNDhcbiAgfSxcbiAgXCJyaWdodC1tYXJrXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInJpZ2h0XCI6IDE2LFxuICAgIFwiYm90dG9tXCI6IDM4LFxuICAgIFwid2lkdGhcIjogNDAsXG4gICAgXCJoZWlnaHRcIjogNDAsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMGY0ZjllXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogMjAsXG4gICAgXCJmb250U2l6ZVwiOiAyNCxcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwibGluZUhlaWdodFwiOiA0MCxcbiAgICBcInZlcnRpY2FsQWxpZ25cIjogXCJtaWRkbGVcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwib3BhY2l0eVwiOiAwLjlcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vc3JjL2NvbXBvbmVudHMvbmF2cGFnZS9uYXZiYXIud2Vcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMgMTQgMjEgMjIgMjMgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYiLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgc3R5bGU9XCJoZWlnaHQ6e3toZWlnaHR9fTsgYmFja2dyb3VuZC1jb2xvcjp7e2JhY2tncm91bmRDb2xvcn19O1wiIGRhdGEtcm9sZT17e2RhdGFSb2xlfX0+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJyaWdodC10ZXh0XCIgc3R5bGU9XCJjb2xvcjp7e3JpZ2h0SXRlbUNvbG9yfX07XCIgbmF2aS1pdGVtLXBvc2l0aW9uPVwicmlnaHRcIiBpZj17eyFyaWdodEl0ZW1TcmN9fSBvbmNsaWNrID0gXCJvbmNsaWNrcmlnaHRpdGVtXCI+e3tyaWdodEl0ZW1UaXRsZX19PC90ZXh0PlxyXG4gICAgICAgIDxpbWFnZSBjbGFzcz1cInJpZ2h0LWltYWdlXCIgbmF2aS1pdGVtLXBvc2l0aW9uPVwicmlnaHRcIiBzcmM9e3tyaWdodEl0ZW1TcmN9fSBpZj17e3JpZ2h0SXRlbVNyY319IG9uY2xpY2s9XCJvbmNsaWNrcmlnaHRpdGVtXCI+PC9pbWFnZT5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInJpZ2h0LW1hcmtcIiBpZj1cInt7cmlnaHRJdGVtTWFya319XCIgb25jbGljaz1cIm9uY2xpY2tyaWdodGl0ZW1cIj57e3JpZ2h0SXRlbU1hcmt9fTwvdGV4dD5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cImxlZnQtdGV4dFwiIHN0eWxlPVwiY29sb3I6e3tsZWZ0SXRlbUNvbG9yfX07XCIgbmF2aS1pdGVtLXBvc2l0aW9uPVwibGVmdFwiICBvbmNsaWNrPSBcIm9uY2xpY2tsZWZ0aXRlbVwiPnt7bGVmdEl0ZW1UaXRsZX19PC90ZXh0PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwibGVmdC1kZXNcIiBzdHlsZT1cImNvbG9yOnt7bGVmdEl0ZW1Db2xvcn19O1wiIGlmPXt7bGVmdEl0ZW1EZXN9fT57e2xlZnRJdGVtRGVzfX08L3RleHQ+XHJcbiAgICAgICAgPGltYWdlIGNsYXNzPVwibGVmdC1pbWFnZVwiIG5hdmktaXRlbS1wb3NpdGlvbj1cImxlZnRcIiBzcmM9e3tsZWZ0SXRlbVNyY319IGlmPXt7bGVmdEl0ZW1TcmN9fSBvbmNsaWNrPVwib25jbGlja2xlZnRpdGVtXCI+PC9pbWFnZT5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cImNlbnRlci10ZXh0XCIgc3R5bGU9XCJjb2xvcjp7e3RpdGxlQ29sb3J9fTtcIiBuYXZpLWl0ZW0tcG9zaXRpb249XCJjZW50ZXJcIj57e3RpdGxlfX08L3RleHQ+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZT5cclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkOyB0b3A6IDA7IGxlZnQ6IDA7IHJpZ2h0OiAwO1xyXG4gICAgICAgIHdpZHRoOiA3NTBweDtcclxuICAgIH1cclxuXHJcbiAgICAucmlnaHQtdGV4dCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDI0cHg7IHJpZ2h0OiAzMnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0OyBmb250LXNpemU6IDI4cHg7IGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuICAgIC5sZWZ0LXRleHQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAyMnB4OyBsZWZ0OiA4MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7IGZvbnQtc2l6ZTogMzJweDsgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gICAgLmxlZnQtZGVzIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogMjJweDsgbGVmdDogODBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDsgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gICAgLmNlbnRlci10ZXh0IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogMTZweDsgbGVmdDogMTcycHg7IHJpZ2h0OiAxNzJweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IGZvbnQtc2l6ZTogMzhweDtcclxuICAgIH1cclxuICAgIC5sZWZ0LWltYWdlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogMjBweDsgbGVmdDogMjhweDtcclxuICAgICAgICB3aWR0aDogNDhweDsgaGVpZ2h0OiA0OHB4O1xyXG4gICAgfVxyXG4gICAgLnJpZ2h0LWltYWdlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogMjBweDsgcmlnaHQ6IDI4cHg7XHJcbiAgICAgICAgd2lkdGg6IDQ4cHg7IGhlaWdodDogNDhweDtcclxuICAgIH1cclxuICAgIC5yaWdodC1tYXJrIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHJpZ2h0OiAxNnB4OyBib3R0b206IDM4cHg7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7IGhlaWdodDogNDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGY0ZjllO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7ICBsaW5lLWhlaWdodDogNDBweDsgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGF0YVJvbGU6ICduYXZiYXInLFxyXG4gICAgICAgICAgICAvL+WvvOiIquadoeiDjOaZr+iJslxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgICAgIC8v5a+86Iiq5p2h6auY5bqmXHJcbiAgICAgICAgICAgIGhlaWdodDogODgsXHJcbiAgICAgICAgICAgIC8v5a+86Iiq5p2h5qCH6aKYXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgICAgICAvL+WvvOiIquadoeagh+mimOminOiJslxyXG4gICAgICAgICAgICB0aXRsZUNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgICAgICAvL+WPs+S+p+aMiemSruWbvueJh1xyXG4gICAgICAgICAgICByaWdodEl0ZW1TcmM6ICcnLFxyXG4gICAgICAgICAgICAvL+WPs+S+p+aMiemSruagh+mimFxyXG4gICAgICAgICAgICByaWdodEl0ZW1UaXRsZTogJycsXHJcbiAgICAgICAgICAgIHJpZ2h0SXRlbU1hcms6ICcnLFxyXG4gICAgICAgICAgICAvL+WPs+S+p+aMiemSruagh+mimOminOiJslxyXG4gICAgICAgICAgICByaWdodEl0ZW1Db2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgLy/lt6bkvqfmjInpkq7lm77niYdcclxuICAgICAgICAgICAgbGVmdEl0ZW1TcmM6ICcnLFxyXG4gICAgICAgICAgICAvL+W3puS+p+aMiemSruagh+mimFxyXG4gICAgICAgICAgICBsZWZ0SXRlbVRpdGxlOiAnJyxcclxuICAgICAgICAgICAgbGVmdEl0ZW1EZXM6ICcnLFxyXG4gICAgICAgICAgICAvL+W3puS+p+aMiemSruminOiJslxyXG4gICAgICAgICAgICBsZWZ0SXRlbUNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBvbmNsaWNrcmlnaHRpdGVtOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZGlzcGF0Y2goJ25hdmlCYXIucmlnaHRJdGVtLmNsaWNrJywge30pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbmNsaWNrbGVmdGl0ZW06IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRkaXNwYXRjaCgnbmF2aUJhci5sZWZ0SXRlbS5jbGljaycsIHt9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL25hdnBhZ2UvbmF2YmFyLndlPzNkZjdmNGE2IiwidmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9uYXZiYXIud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vbmF2YmFyLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vbmF2YmFyLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L25hdmJhcicsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9uYXZwYWdlL25hdmJhci53ZVxuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAxNCAyMSAyMiAyMyAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiY29udGFpbmVyXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwibmF2YmFyXCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwibmF2YmFyXCJcbiAgICAgIF0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcImRhdGFSb2xlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5kYXRhUm9sZX0sXG4gICAgICAgIFwiaGVpZ2h0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5oZWlnaHR9LFxuICAgICAgICBcImJhY2tncm91bmRDb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYmFja2dyb3VuZENvbG9yfSxcbiAgICAgICAgXCJ0aXRsZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGV9LFxuICAgICAgICBcImxlZnRJdGVtRGVzXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sZWZ0SXRlbURlc30sXG4gICAgICAgIFwidGl0bGVDb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGVDb2xvcn0sXG4gICAgICAgIFwibGVmdEl0ZW1TcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtU3JjfSxcbiAgICAgICAgXCJsZWZ0SXRlbVRpdGxlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sZWZ0SXRlbVRpdGxlfSxcbiAgICAgICAgXCJsZWZ0SXRlbUNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sZWZ0SXRlbUNvbG9yfSxcbiAgICAgICAgXCJyaWdodEl0ZW1TcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJpZ2h0SXRlbVNyY30sXG4gICAgICAgIFwicmlnaHRJdGVtVGl0bGVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJpZ2h0SXRlbVRpdGxlfSxcbiAgICAgICAgXCJyaWdodEl0ZW1Db2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmlnaHRJdGVtQ29sb3J9LFxuICAgICAgICBcInJpZ2h0SXRlbU1hcmtcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJpZ2h0SXRlbU1hcmt9XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJ3cmFwcGVyXCJcbiAgICAgIF0sXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJib3JkZXJUb3BDb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYm9yZGVyQm90dG9tQ29sb3J9LFxuICAgICAgICBcImJvcmRlclRvcFdpZHRoXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5ib3JkZXJCb3R0b21XaWR0aH0sXG4gICAgICAgIFwiYm9yZGVyVG9wU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgICAgICBcIm1hcmdpblRvcFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubWFyZ2luVG9wfVxuICAgICAgfSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiY29udGVudFwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3NyYy9jb21wb25lbnRzL25hdnBhZ2UvbmF2cGFnZS53ZVxuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAxNCAyMSAyMiAyMyAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIm5hdmJhclwiOiB7XG4gICAgXCJ6SW5kZXhcIjogMTBcbiAgfSxcbiAgXCJ3cmFwcGVyXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcFwiOiAwLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcImJvdHRvbVwiOiAwLFxuICAgIFwiekluZGV4XCI6IDgsXG4gICAgXCJ3aWR0aFwiOiA3NTBcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vc3JjL2NvbXBvbmVudHMvbmF2cGFnZS9uYXZwYWdlLndlXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDE0IDIxIDIyIDIzIDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxuYXZiYXIgY2xhc3M9XCJuYXZiYXJcIiBkYXRhLXJvbGU9e3tkYXRhUm9sZX19IGhlaWdodD17e2hlaWdodH19IGJhY2tncm91bmQtY29sb3I9e3tiYWNrZ3JvdW5kQ29sb3J9fSB0aXRsZT17e3RpdGxlfX0gIGxlZnQtaXRlbS1kZXM9XCJ7e2xlZnRJdGVtRGVzfX1cIiB0aXRsZS1jb2xvcj17e3RpdGxlQ29sb3J9fSBsZWZ0LWl0ZW0tc3JjPXt7bGVmdEl0ZW1TcmN9fSBsZWZ0LWl0ZW0tdGl0bGU9e3tsZWZ0SXRlbVRpdGxlfX0gbGVmdC1pdGVtLWNvbG9yPXt7bGVmdEl0ZW1Db2xvcn19IHJpZ2h0LWl0ZW0tc3JjPXt7cmlnaHRJdGVtU3JjfX0gcmlnaHQtaXRlbS10aXRsZT17e3JpZ2h0SXRlbVRpdGxlfX0gcmlnaHQtaXRlbS1jb2xvcj17e3JpZ2h0SXRlbUNvbG9yfX0gcmlnaHQtaXRlbS1tYXJrPVwie3tyaWdodEl0ZW1NYXJrfX1cIj48L25hdmJhcj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiIHN0eWxlPVwiYm9yZGVyLXRvcC1jb2xvcjoge3tib3JkZXJCb3R0b21Db2xvcn19OyBib3JkZXItdG9wLXdpZHRoOnt7Ym9yZGVyQm90dG9tV2lkdGh9fTsgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7IG1hcmdpbi10b3A6e3ttYXJnaW5Ub3B9fVwiPlxyXG4gICAgICAgICAgICA8Y29udGVudD48L2NvbnRlbnQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZT5cclxuICAgIC5uYXZiYXIgeyB6LWluZGV4OiAxMDsgfVxyXG4gICAgLndyYXBwZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyByaWdodDogMDsgYm90dG9tOiAwOyB6LWluZGV4OiA4O1xyXG4gICAgICAgIHdpZHRoOiA3NTBweDtcclxuICAgIH1cclxuPC9zdHlsZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICByZXF1aXJlKCcuL25hdmJhci53ZScpXHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGRhdGFSb2xlOiAnbmF2YmFyJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDg4LFxyXG4gICAgICAgICAgICB0aXRsZTogXCJcIixcclxuICAgICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGg6IDAsXHJcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbUNvbG9yOiAnI2Q4ZDhkOCcsXHJcbiAgICAgICAgICAgIHRpdGxlQ29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgICAgIHJpZ2h0SXRlbVNyYzogJycsXHJcbiAgICAgICAgICAgIHJpZ2h0SXRlbVRpdGxlOiAnJyxcclxuICAgICAgICAgICAgcmlnaHRJdGVtQ29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgICAgIHJpZ2h0SXRlbU1hcms6ICcnLFxyXG4gICAgICAgICAgICBsZWZ0SXRlbVNyYzogJycsXHJcbiAgICAgICAgICAgIGxlZnRJdGVtVGl0bGU6ICcnLFxyXG4gICAgICAgICAgICBsZWZ0SXRlbURlczogJycsXHJcbiAgICAgICAgICAgIGxlZnRJdGVtQ29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgICAgIG1hcmdpblRvcDogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlYXRlZCAoKSB7XHJcbiAgICAgICAgICAgIC8vIGlPUyDlpLTpg6huYXZwYWdlIHVp5riy5p+T5LiOSDUgQW5kcm9pZOS4jeS4gOiHtFxyXG4gICAgICAgICAgICBpZih0aGlzLiRnZXRDb25maWcoKS5lbnYucGxhdGZvcm0gPT09ICdpT1MnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmdpblRvcCA9IDBcclxuICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJnaW5Ub3AgPSB0aGlzLmhlaWdodFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9uYXZwYWdlL25hdnBhZ2Uud2U/NDg1ODIxODQiLCJyZXF1aXJlKFwiLi9uYXZiYXIud2VcIilcbnZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vbmF2cGFnZS53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9uYXZwYWdlLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vbmF2cGFnZS53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC9uYXZwYWdlJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL25hdnBhZ2UvbmF2cGFnZS53ZVxuLy8gbW9kdWxlIGlkID0gMTQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMjEgMjIgMjMgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL2J1dHRvbi1wcmltYXJ5LndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL2J1dHRvbi1wcmltYXJ5LndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vYnV0dG9uLXByaW1hcnkud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvYnV0dG9uLXByaW1hcnknLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi1wcmltYXJ5LndlXG4vLyBtb2R1bGUgaWQgPSAyMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAzMSAzMiAzMyAzNCAzNSIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vbGlzdC1pdGVtLXJvdy53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9saXN0LWl0ZW0tcm93LndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vbGlzdC1pdGVtLXJvdy53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC9saXN0LWl0ZW0tcm93JywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2xpc3QtaXRlbS9saXN0LWl0ZW0tcm93LndlXG4vLyBtb2R1bGUgaWQgPSAyMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAzMSAzMiAzMyAzNSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJuYXZwYWdlXCIsXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImNvbnRhaW5lclwiXG4gIF0sXG4gIFwiYXR0clwiOiB7XG4gICAgXCJsZWZ0SXRlbVNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubmF2LmJhY2t9LFxuICAgIFwidGl0bGVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm5hdi50aXRsZX0sXG4gICAgXCJ0aXRsZUNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5uYXYuY29sb3J9LFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm5hdi5ib3JkZXJCb3R0b21XaWR0aH0sXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm5hdi5iYWNrZ3JvdW5kQ29sb3J9XG4gIH0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImRpdmVyXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcIndyYXBwZXJcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwibGlzdC1pdGVtLXJvd1wiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwicm93XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInJvdy1sYWJlbFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIue8tOi0ueWfjuW4glwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJyb3ctcmlnaHRcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwicm93LXJpZ2h0LXNlbGVjdGVkLXZhbHVlXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy52YWx1ZS5jaXR5fVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJyb3ctcmlnaHQtaWNvblwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnVpLnJpZ2h0X2Fycm93fVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImxpc3QtaXRlbS1yb3dcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInJvd1wiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJyb3ctbGFiZWxcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLnvLTotLnljZXkvY1cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwicm93LXJpZ2h0XCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInJvdy1yaWdodC1zZWxlY3RlZC12YWx1ZVwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudmFsdWUuZGVwYXJ0bWVudH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwicm93LXJpZ2h0LWljb25cIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy51aS5yaWdodF9hcnJvd31cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJsaXN0LWl0ZW0tcm93XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJyb3ctZmxleC1zdGFydFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJyb3ctbGFiZWxcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLnvLTotLnljZXlj7dcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJyb3ctaW5wdXRcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICBcInBsYWNlaG9sZGVyXCI6IFwi6K+36L6T5YWl57y06LS55Y2V5Y+3XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJsaXN0LWl0ZW0tcm93XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJyb3ctZmxleC1zdGFydFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJsYXN0XCI6IFwidHJ1ZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJyb3ctbGFiZWxcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLnvLTotLnph5Hpop1cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJyb3ctaW5wdXRcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJpbnB1dFwiOiBcIm9uQW1vdW50SW5wdXRcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICBcInBsYWNlaG9sZGVyXCI6IFwi6K+36L6T5YWl57y06LS56YeR6aKdXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImFncmVlbWVudFwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJhZ3JlZW1lbnQtdGV4dFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIumYheivu+W5tuWQjOaEj1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiYWdyZWVtZW50LWxpbmtcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCLnu5/nu5/ku5jlhYXlgLznvLTotLnljY/orq5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiY2VudGVyXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImJ1dHRvbi1wcmltYXJ5XCIsXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBcInN1Ym1pdFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJzdGF0dXNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmJ0blByaW1hcnlTdGF0dXN9LFxuICAgICAgICAgICAgXCJ0ZXh0XCI6IFwi5LiL5LiA5q2lXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImhlbHBcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiaGVscC10ZXh0XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiMeOAgeWIsOi0puaXtumXtOS4gOiIrOS4ujPkuKrlt6XkvZzml6Xku6XlhoXvvIzlj4zkvJHml6Xlj4roioLlgYfml6Xpobrlu7ZcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImhlbHAtdGV4dFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIjLjgIHkuIDkuKrotKbmiLfmr4/mnIjmnIDlpJrlj6/mj5DkuqQ256yU57y06LS56K6i5Y2V77yI5oyH5rC06LS544CB55S16LS544CB54eD5rCU6LS56K6i5Y2V5oC75pWw77yJ77yM5Y2V56yUL+S4uei/que8tOi0uemHkemineS4iumZkOS4ujIwMDDlhYNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImhlbHAtdGV4dFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIjPjgIHkuLrpgb/lhY3kuI3lv4XopoHnmoTpurvng6blkozmjZ/lpLHvvIzor7fmgqjlnKjnvLTotLnotKbljZXigJzmnIDlkI7ku5jmrL7ml6XmnJ/igJ3kuYvliY035Liq5bel5L2c5pel6L+b6KGM57y06LS544CC6YC+5pyf6LSm5Y2V77yI5bey5Lqn55Sf5rue57qz6YeR77yJ5bCG5peg5rOV5a6M5oiQ5q2j5bi457y06LS577yM6K+36Iez5ZCE57G757y06LS56JCl5Lia572R5Yqe55CGXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3NyYy92aWV3cy9wYXltZW50LWdhcy53ZVxuLy8gbW9kdWxlIGlkID0gMjE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMzIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJjb250YWluZXJcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiZGl2ZXJcIjoge1xuICAgIFwiaGVpZ2h0XCI6IDIwLFxuICAgIFwid2lkdGhcIjogNzUwLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2YyZjJmMlwiXG4gIH0sXG4gIFwicm93LWxhYmVsXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDQyLFxuICAgIFwibWFyZ2luTGVmdFwiOiAxMCxcbiAgICBcImZvbnRTaXplXCI6IDM2LFxuICAgIFwiY29sb3JcIjogXCIjMzMzMzMzXCJcbiAgfSxcbiAgXCJyb3ctcmlnaHRcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwicm93LXJpZ2h0LXNlbGVjdGVkLXZhbHVlXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDI1LFxuICAgIFwiZm9udFNpemVcIjogMzIsXG4gICAgXCJjb2xvclwiOiBcIiM5OTk5OTlcIlxuICB9LFxuICBcInJvdy1yaWdodC1pY29uXCI6IHtcbiAgICBcIndpZHRoXCI6IDQwLFxuICAgIFwiaGVpZ2h0XCI6IDQwXG4gIH0sXG4gIFwicm93LWZsZXgtc3RhcnRcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LXN0YXJ0XCJcbiAgfSxcbiAgXCJyb3ctaW5wdXRcIjoge1xuICAgIFwid2lkdGhcIjogNDUwLFxuICAgIFwiaGVpZ2h0XCI6IDYwLFxuICAgIFwiZm9udFNpemVcIjogMzIsXG4gICAgXCJjb2xvclwiOiBcIiMzMzMzMzNcIlxuICB9LFxuICBcImFncmVlbWVudFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwibWFyZ2luVG9wXCI6IDYwLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IDMwXG4gIH0sXG4gIFwiYWdyZWVtZW50LXRleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogMjYsXG4gICAgXCJjb2xvclwiOiBcIiM0ZDRkNGRcIlxuICB9LFxuICBcImFncmVlbWVudC1saW5rXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IDI2LFxuICAgIFwiY29sb3JcIjogXCIjMjY4MGVkXCJcbiAgfSxcbiAgXCJ3cmFwcGVyXCI6IHtcbiAgICBcIndpZHRoXCI6IDc1MCxcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IDEsXG4gICAgXCJib3JkZXJUb3BDb2xvclwiOiBcIiNkYmRiZGJcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IDEsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNkYmRiZGJcIlxuICB9LFxuICBcImNlbnRlclwiOiB7XG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJoZWxwXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogMzAsXG4gICAgXCJtYXJnaW5SaWdodFwiOiAzMCxcbiAgICBcIm1hcmdpblRvcFwiOiAzMFxuICB9LFxuICBcImhlbHAtdGV4dFwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogMjAsXG4gICAgXCJjb2xvclwiOiBcIiM5OTk5OTlcIixcbiAgICBcImZvbnRTaXplXCI6IDI0LFxuICAgIFwibGluZUhlaWdodFwiOiA0MFxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9zcmMvdmlld3MvcGF5bWVudC1nYXMud2Vcbi8vIG1vZHVsZSBpZCA9IDIxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDMyIiwiPHRlbXBsYXRlPlxyXG4gICAgPG5hdnBhZ2UgY2xhc3M9XCJjb250YWluZXJcIlxyXG4gICAgICAgICAgICAgbGVmdC1pdGVtLXNyYz1cInt7bmF2LmJhY2t9fVwiXHJcbiAgICAgICAgICAgICB0aXRsZT1cInt7bmF2LnRpdGxlfX1cIlxyXG4gICAgICAgICAgICAgdGl0bGUtY29sb3I9XCJ7e25hdi5jb2xvcn19XCJcclxuICAgICAgICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg9XCJ7e25hdi5ib3JkZXJCb3R0b21XaWR0aH19XCJcclxuICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I9XCJ7e25hdi5iYWNrZ3JvdW5kQ29sb3J9fVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkaXZlclwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxsaXN0LWl0ZW0tcm93IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cInJvdy1sYWJlbFwiPue8tOi0ueWfjuW4gjwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3ctcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cInJvdy1yaWdodC1zZWxlY3RlZC12YWx1ZVwiPnt7dmFsdWUuY2l0eX19PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWFnZSBjbGFzcz1cInJvdy1yaWdodC1pY29uXCIgc3JjPVwie3t1aS5yaWdodF9hcnJvd319XCI+PC9pbWFnZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpc3QtaXRlbS1yb3c+XHJcbiAgICAgICAgICAgIDxsaXN0LWl0ZW0tcm93IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cInJvdy1sYWJlbFwiPue8tOi0ueWNleS9jTwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3ctcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cInJvdy1yaWdodC1zZWxlY3RlZC12YWx1ZVwiPnt7dmFsdWUuZGVwYXJ0bWVudH19PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWFnZSBjbGFzcz1cInJvdy1yaWdodC1pY29uXCIgc3JjPVwie3t1aS5yaWdodF9hcnJvd319XCI+PC9pbWFnZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpc3QtaXRlbS1yb3c+XHJcbiAgICAgICAgICAgIDxsaXN0LWl0ZW0tcm93IGNsYXNzPVwicm93LWZsZXgtc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicm93LWxhYmVsXCI+57y06LS55Y2V5Y+3PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicm93LWlucHV0XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpee8tOi0ueWNleWPt1wiIHZhbHVlPVwiXCIgLz5cclxuICAgICAgICAgICAgPC9saXN0LWl0ZW0tcm93PlxyXG4gICAgICAgICAgICA8bGlzdC1pdGVtLXJvdyBjbGFzcz1cInJvdy1mbGV4LXN0YXJ0XCIgbGFzdD1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicm93LWxhYmVsXCI+57y06LS56YeR6aKdPC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicm93LWlucHV0XCIgb25pbnB1dD1cIm9uQW1vdW50SW5wdXRcIiAgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpee8tOi0uemHkeminVwiIHZhbHVlPVwiXCIgLz5cclxuICAgICAgICAgICAgPC9saXN0LWl0ZW0tcm93PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhZ3JlZW1lbnRcIj5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJhZ3JlZW1lbnQtdGV4dFwiPumYheivu+W5tuWQjOaEjzwvdGV4dD5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJhZ3JlZW1lbnQtbGlua1wiPue7n+e7n+S7mOWFheWAvOe8tOi0ueWNj+iurjwvdGV4dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24tcHJpbWFyeSBvbmNsaWNrPVwic3VibWl0XCIgc3RhdHVzPVwie3tidG5QcmltYXJ5U3RhdHVzfX1cIiB0ZXh0PVwi5LiL5LiA5q2lXCI+PC9idXR0b24tcHJpbWFyeT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVscFwiPlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImhlbHAtdGV4dFwiPjHjgIHliLDotKbml7bpl7TkuIDoiKzkuLoz5Liq5bel5L2c5pel5Lul5YaF77yM5Y+M5LyR5pel5Y+K6IqC5YGH5pel6aG65bu2PC90ZXh0PlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImhlbHAtdGV4dFwiPjLjgIHkuIDkuKrotKbmiLfmr4/mnIjmnIDlpJrlj6/mj5DkuqQ256yU57y06LS56K6i5Y2V77yI5oyH5rC06LS544CB55S16LS544CB54eD5rCU6LS56K6i5Y2V5oC75pWw77yJ77yM5Y2V56yUL+S4uei/que8tOi0uemHkemineS4iumZkOS4ujIwMDDlhYM8L3RleHQ+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiaGVscC10ZXh0XCI+M+OAgeS4uumBv+WFjeS4jeW/heimgeeahOm6u+eDpuWSjOaNn+Wkse+8jOivt+aCqOWcqOe8tOi0uei0puWNleKAnOacgOWQjuS7mOasvuaXpeacn+KAneS5i+WJjTfkuKrlt6XkvZzml6Xov5vooYznvLTotLnjgILpgL7mnJ/otKbljZXvvIjlt7LkuqfnlJ/mu57nurPph5HvvInlsIbml6Dms5XlrozmiJDmraPluLjnvLTotLnvvIzor7foh7PlkITnsbvnvLTotLnokKXkuJrnvZHlip7nkIY8L3RleHQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L25hdnBhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcbjxzdHlsZT5cclxuICAgIC5jb250YWluZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XHJcbiAgICAuZGl2ZXIge1xyXG4gICAgICAgIGhlaWdodDogMjBweDsgd2lkdGg6IDc1MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICB9XHJcblxyXG4gICAgLnJvdy1sYWJlbCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MnB4OyBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDM2cHg7IGNvbG9yOiAjMzMzO1xyXG4gICAgfVxyXG4gICAgLnJvdy1yaWdodCB7IGZsZXgtZGlyZWN0aW9uOiByb3c7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cclxuICAgIC5yb3ctcmlnaHQtc2VsZWN0ZWQtdmFsdWUge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7IGNvbG9yOiAjOTk5O1xyXG4gICAgfVxyXG4gICAgLnJvdy1yaWdodC1pY29uIHsgd2lkdGg6IDQwcHg7IGhlaWdodDogNDBweDsgfVxyXG5cclxuICAgIC5yb3ctZmxleC1zdGFydCB7IGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxyXG4gICAgLnJvdy1pbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDQ1MHB4OyBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMnB4OyBjb2xvcjogIzMzMztcclxuICAgIH1cclxuXHJcbiAgICAuYWdyZWVtZW50IHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4OyBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLmFncmVlbWVudC10ZXh0IHsgZm9udC1zaXplOiAyNnB4OyBjb2xvcjogIzRkNGQ0ZDsgfVxyXG4gICAgLmFncmVlbWVudC1saW5rIHsgZm9udC1zaXplOiAyNnB4OyBjb2xvcjogIzI2ODBlZDsgfVxyXG5cclxuXHJcbiAgICAud3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IDc1MHB4O1xyXG4gICAgICAgIGJvcmRlci10b3Atd2lkdGg6IDFweDsgYm9yZGVyLXRvcC1jb2xvcjogI2RiZGJkYjtcclxuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7IGJvcmRlci1ib3R0b20tY29sb3I6ICNkYmRiZGI7XHJcbiAgICB9XHJcbiAgICAuY2VudGVyIHsgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxyXG4gICAgLmhlbHB7IG1hcmdpbi1sZWZ0OiAzMHB4OyBtYXJnaW4tcmlnaHQ6IDMwcHg7IG1hcmdpbi10b3A6IDMwcHg7IH1cclxuICAgIC5oZWxwLXRleHQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICM5OTk7IGZvbnQtc2l6ZTogMjRweDsgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbW1vbi9jb25maWcnXHJcbiAgICBpbXBvcnQgKiBhcyBtZXRob2RzIGZyb20gJy4uL2NvbW1vbi9tZXRob2RzJ1xyXG4gICAgY29uc3QgbmF2aWdhdG9yID0gcmVxdWlyZSgnQHdlZXgtbW9kdWxlL25hdmlnYXRvcicpXHJcbiAgICByZXF1aXJlKCcuLi9jb21wb25lbnRzL25hdnBhZ2UvbmF2cGFnZS53ZScpXHJcbiAgICByZXF1aXJlKCcuLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24tcHJpbWFyeS53ZScpXHJcbiAgICByZXF1aXJlKCcuLi9jb21wb25lbnRzL2xpc3QtaXRlbS9saXN0LWl0ZW0tcm93LndlJylcclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIG5hdjoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfnh4PmsJTnvLTotLknLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjNGQ0ZDRkJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICBiYWNrOiBjb25maWcuaWNvbi5iYWNrXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVpOiB7XHJcbiAgICAgICAgICAgICAgICByaWdodF9hcnJvdzogY29uZmlnLmljb24ucmlnaHRfYXJyb3dcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYnRuUHJpbWFyeVN0YXR1czogJ2Rpc2FibGVkJyxcclxuICAgICAgICAgICAgdmFsdWU6IHtcclxuICAgICAgICAgICAgICAgIGNpdHk6ICfmna3lt57luIInLFxyXG4gICAgICAgICAgICAgICAgZGVwYXJ0bWVudDogJycsXHJcbiAgICAgICAgICAgICAgICBvcmRlck5vOiAnJyxcclxuICAgICAgICAgICAgICAgIGFtb3VudDogJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlYXRlZCAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJG9uKCduYXZpQmFyLmxlZnRJdGVtLmNsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAnYW5pbWF0ZWQnOiAndHJ1ZScsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucG9wKHBhcmFtcywgZnVuY3Rpb24gKCkge30pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuJG9uKCdmb3JtQ2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5QcmltYXJ5U3RhdHVzID0gKHRoaXMudmFsdWUuYW1vdW50KSA/XHJcbiAgICAgICAgICAgICAgICAgICAgJ2VuYWJsZWQnOiAnZGlzYWJsZWQnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAgICAgb25BbW91bnRJbnB1dCAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZS5hbW91bnQgPSBlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRkaXNwYXRjaCgnZm9ybUNoYW5nZScpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Ym1pdCAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnZhbHVlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgbWV0aG9kcylcclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aWV3cy9wYXltZW50LWdhcy53ZT8wZmZkYmY2YyJdLCJzb3VyY2VSb290IjoiIn0=