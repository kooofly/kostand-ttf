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

	var __weex_template__ = __webpack_require__(185)
	var __weex_style__ = __webpack_require__(186)
	var __weex_script__ = __webpack_require__(187)
	
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
/* 59 */
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
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _assign = __webpack_require__(8);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _config = __webpack_require__(47);
	
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
/* 185 */
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
/* 186 */
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
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _assign = __webpack_require__(8);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _weexNat = __webpack_require__(188);
	
	var _weexNat2 = _interopRequireDefault(_weexNat);
	
	var _config = __webpack_require__(47);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _methods = __webpack_require__(45);
	
	var methods = _interopRequireWildcard(_methods);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(149);
	__webpack_require__(213);
	
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
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Nat = {};
	
	if (typeof __weex_define__ === 'function') {
		var camera = __webpack_require__(189);
		var communication = __webpack_require__(190);
		var geolocation = __webpack_require__(192);
		var media = __webpack_require__(193);
		var modal = __webpack_require__(197);
		var recorder = __webpack_require__(198);
		var network = __webpack_require__(199);
		var sensor = __webpack_require__(202);
		var device = __webpack_require__(205);
		var navigator = __webpack_require__(212);
	
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
/* 189 */
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
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _utils = __webpack_require__(191);
	
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
/* 191 */
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
/* 192 */
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
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _audio = __webpack_require__(194);
	
	var _audio2 = _interopRequireDefault(_audio);
	
	var _image = __webpack_require__(195);
	
	var _image2 = _interopRequireDefault(_image);
	
	var _video = __webpack_require__(196);
	
	var _video2 = _interopRequireDefault(_video);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
		audio: _audio2.default,
		image: _image2.default,
		video: _video2.default
	};

/***/ },
/* 194 */
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
/* 195 */
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
/* 196 */
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
/* 197 */
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
/* 198 */
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
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _stream = __webpack_require__(200);
	
	var _stream2 = _interopRequireDefault(_stream);
	
	var _transfer = __webpack_require__(201);
	
	var _transfer2 = _interopRequireDefault(_transfer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import websocket from './websocket'
	// import info from './info'
	
	module.exports = {
		stream: _stream2.default,
		transfer: _transfer2.default
	};

/***/ },
/* 200 */
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
/* 201 */
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
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _accelerometer = __webpack_require__(203);
	
	var _accelerometer2 = _interopRequireDefault(_accelerometer);
	
	var _compass = __webpack_require__(204);
	
	var _compass2 = _interopRequireDefault(_compass);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
		accelerometer: _accelerometer2.default,
		compass: _compass2.default
	};

/***/ },
/* 203 */
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
/* 204 */
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
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _base = __webpack_require__(206);
	
	var _base2 = _interopRequireDefault(_base);
	
	var _battery = __webpack_require__(207);
	
	var _battery2 = _interopRequireDefault(_battery);
	
	var _network = __webpack_require__(208);
	
	var _network2 = _interopRequireDefault(_network);
	
	var _screen = __webpack_require__(209);
	
	var _screen2 = _interopRequireDefault(_screen);
	
	var _vibration = __webpack_require__(210);
	
	var _vibration2 = _interopRequireDefault(_vibration);
	
	var _volume = __webpack_require__(211);
	
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
/* 206 */
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
/* 207 */
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
/* 208 */
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
/* 209 */
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
/* 210 */
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
/* 211 */
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
/* 212 */
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
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(59)
	var __weex_script__ = __webpack_require__(60)
	
	__weex_define__('@weex-component/detail', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	})


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWRiMDEyZWQ3NjI2ZThiNjU1ZGU/ODkxOCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9ub3RpY2VzLWRldGFpbC53ZT82NGQzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanM/ZTZjYSoqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzPzgwZTQqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcz85MDA3KioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcz9lY2UyKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcz83N2FhKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanM/MWI2MioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanM/Y2UwMCoqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzP2Q1M2UqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcz9hNmRhKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcz80MTE2KioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcz8wZGEzKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcz8yNGM4KioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzP2JkMWYqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanM/NzA1MSoqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcz85MzVkKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanM/YWI0NCoqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanM/NDlhNCoqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzPzFlODYqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcz81YzBjKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzP2Y1YmMqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanM/ZmNlYSoqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanM/ZDg1MCoqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzPzY5NDYqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcz81Y2Y5KioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcz80OGVhKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanM/NDVkMyoqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcz82MTk5KioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcz82MmE3KioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanM/ZjY1ZioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qcz85ZmQ0KioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanM/MmE2YyoqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanM/N2I2YyoqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanM/ZThjZCoqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzPzc1OTgqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanM/YTVmYioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzP2QwZDIqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzP2I1YzAqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9tZXRob2RzLmpzPzNkOTIqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9hcGkuanM/YzNiNSoqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbmZpZy5qcz9jMTgzKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kZXRlY3Rpb24uanM/OGZiNCoqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3JvdXRlLmpzPzc2ZmQqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGV0YWlsL2RldGFpbC53ZT9hOTRjKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZXRhaWwvZGV0YWlsLndlPzdhYjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2cGFnZS9uYXZiYXIud2U/YjU1MSoqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2cGFnZS9uYXZiYXIud2U/NTA4YSoqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2cGFnZS9uYXZiYXIud2U/NjUzOSoqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZwYWdlL25hdmJhci53ZT85YzEyKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25hdnBhZ2UvbmF2cGFnZS53ZT8yZjI2KioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25hdnBhZ2UvbmF2cGFnZS53ZT8wZmZiKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25hdnBhZ2UvbmF2cGFnZS53ZT9mZjRiKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25hdnBhZ2UvbmF2cGFnZS53ZT84MDI2KioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL25vdGljZXMtZGV0YWlsLndlP2I1ZjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL25vdGljZXMtZGV0YWlsLndlPzRmMDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL25vdGljZXMtZGV0YWlsLndlIiwid2VicGFjazovLy8uL34vd2VleC1uYXQvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vd2VleC1uYXQvbGliL2NhbWVyYS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtbmF0L2xpYi9jb21tdW5pY2F0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vd2VleC1uYXQvbGliL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vd2VleC1uYXQvbGliL2dlb2xvY2F0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vd2VleC1uYXQvbGliL21lZGlhL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vd2VleC1uYXQvbGliL21lZGlhL2F1ZGlvL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vd2VleC1uYXQvbGliL21lZGlhL2ltYWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vd2VleC1uYXQvbGliL21lZGlhL3ZpZGVvL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vd2VleC1uYXQvbGliL21vZGFsL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vd2VleC1uYXQvbGliL3JlY29yZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vd2VleC1uYXQvbGliL25ldHdvcmsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LW5hdC9saWIvbmV0d29yay9zdHJlYW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LW5hdC9saWIvbmV0d29yay90cmFuc2Zlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtbmF0L2xpYi9zZW5zb3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LW5hdC9saWIvc2Vuc29yL2FjY2VsZXJvbWV0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LW5hdC9saWIvc2Vuc29yL2NvbXBhc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LW5hdC9saWIvZGV2aWNlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vd2VleC1uYXQvbGliL2RldmljZS9iYXNlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vd2VleC1uYXQvbGliL2RldmljZS9iYXR0ZXJ5L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vd2VleC1uYXQvbGliL2RldmljZS9uZXR3b3JrL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vd2VleC1uYXQvbGliL2RldmljZS9zY3JlZW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LW5hdC9saWIvZGV2aWNlL3ZpYnJhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtbmF0L2xpYi9kZXZpY2Uvdm9sdW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vd2VleC1uYXQvbGliL25hdmlnYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZXRhaWwvZGV0YWlsLndlP2YxMTIiXSwibmFtZXMiOlsicm91dGVUb1VybCIsIm9wZW4iLCJwYXJhbXMiLCJyZWFsSGVpZ2h0IiwiZGV0ZWN0aW9uIiwicm91dGVOYW1lIiwidGVzdCIsInNwbGl0IiwiciIsImNvbXBpbGVVcmwiLCJjb25zb2xlIiwibG9nIiwidXJsIiwiam9pbiIsImNhbGwiLCJ3aW5kb3ciLCJvIiwidGhlbiIsIiRvcGVuVVJMIiwiZmFpbENhbGxiYWNrIiwibmFtZSIsInJlc3VsdCIsIiRnZXRDb25maWciLCJidW5kbGVVcmwiLCJpbmRleE9mIiwic3RyIiwic3Vic3RyIiwicCIsImZvckVhY2giLCJ0ZW1wIiwidiIsImRlY29kZVVSSSIsImhlaWdodCIsInciLCJlbnYiLCJkZXZpY2VXaWR0aCIsImgiLCJkZXZpY2VIZWlnaHQiLCJmZXRjaCIsInNpZ25pbiIsImZldGNoVGFiQmFyIiwiYWRhcHRlclRhYkJhciIsImZldGNoQXBwcyIsImZldGNoTm90aWNlcyIsImZldGNoQmFubmVycyIsImZldGNoTWVyY2hhbnRDYXRlZ29yeSIsImZldGNoTWVyY2hhbnRMaXN0IiwiZ2V0QmFzZVVSTCIsInN0cmVhbSIsIl9fd2VleF9kZWZpbmVfXyIsIl9fd2VleF9yZXF1aXJlX18iLCJhcGlSb290IiwicGF0aCIsIm9wdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiT2JqZWN0IiwiYXNzaWduIiwibWV0aG9kcyIsInR5cGUiLCJyZXNwb25zZSIsInN0YXR1cyIsImRhdGEiLCJ0YWJJdGVtcyIsImluZGV4Iiwic2VsZWN0ZWRDb2xvciIsImJhc2VVUkwiLCJ0YWJJdGVtIiwiaSIsInNyYyIsImltYWdlIiwiYXNzZXRzUm9vdCIsInNlbGVjdGVkSW1hZ2UiLCJ2aXNpYmlsaXR5IiwiaWNvbiIsInRpdGxlQ29sb3IiLCJpc05hdiIsIm5hdGl2ZUJhc2UiLCJpc0FuZHJvaWRBc3NldHMiLCJpc2lPU0Fzc2V0cyIsInN1YnN0cmluZyIsImxhc3RJbmRleE9mIiwiaG9zdCIsInNjcmlwdEhvc3QiLCJtYXRjaGVzIiwiZXhlYyIsImxlbmd0aCIsImh0bWxJbmRleCIsInNjcmlwdFJvb3QiLCJhbmRyb2lkQXNzZXRzUm9vdCIsIm1hcCIsIm1hcF9saWZlIiwibm90aWNlIiwic2NhbiIsImNvZGUiLCJ0cmFuc2FjdGlvbl9yZWNvcmQiLCJzZWFyY2giLCJiYWNrIiwicmlnaHRfYXJyb3ciLCJzdG9yYWdlIiwibG9naW5Nb2R1bGUiLCJnZXRJdGVtIiwiZSIsInRvTG9naW4iLCJhcHBzIiwidGl0bGUiLCJsaWZlIiwibWVyY2hhbnQiLCJtZXJjaGFudF9jb2xsZWN0aW9uIiwibWVyY2hhbnRfbmVhcmJ5IiwibWVyY2hhbnRfYXJvdW5kIiwibWVyY2hhbnRfaW50cm9kdWN0aW9uIiwibW9yZSIsIm5vdGljZXMiLCJub3RpY2VzX2RldGFpbCIsInBheW1lbnRfcGhvbmUiLCJwYXltZW50X3BldHJvbGV1bSIsInBheW1lbnRfd2F0ZXIiLCJwYXltZW50X2VsZWN0cmljaXR5IiwicGF5bWVudF9nYXMiLCJkYXNoYm9hcmQiLCJkYXNoYm9hcmRfcmVjaGFyZ2UiLCJkYXNoYm9hcmRfdHJhbnNmZXIiLCJkYXNoYm9hcmRfYmFua19jYXJkIiwiZGFzaGJvYXJkX3RyYWRpbmdfcmVjb3JkcyIsImRhc2hib2FyZF9wYXNzd29yZCIsImRhc2hib2FyZF9jZXJ0aWZpY2F0ZSIsInN1bXBheV9jYXJkIiwic3VtcGF5X2NhcmRfYmFsYW5jZSIsInN1bXBheV9jYXJkX3Bhc3N3b3JkIiwic3VtcGF5X2NhcmRfZGV0YWlsIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsRUFBQzs7QUFFRCwyRjs7Ozs7Ozs7Ozs7OztBQ2pCQSxtQkFBa0IsdUQ7Ozs7OztBQ0FsQjtBQUNBLHdEOzs7Ozs7QUNEQTtBQUNBOztBQUVBLDJDQUEwQyxnQ0FBb0MsRTs7Ozs7O0FDSDlFO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0EsRzs7Ozs7O0FDNUJBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDL0VBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ3BCQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUN6RUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEdBQUU7QUFDRjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ3RKQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUN6RUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEdBQUU7QUFDRjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQzdJQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNyRkE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDbEJBOztBQUVBLHFHQUFvRyxtQkFBbUIsRUFBRSxtQkFBbUIsOEhBQThIOztBQUUxUTs7QUFFQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQSxHOzs7Ozs7QUN0SEE7O0FBRUEscUdBQW9HLG1CQUFtQixFQUFFLG1CQUFtQiw4SEFBOEg7O0FBRTFROztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBOEI7QUFDOUI7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSixJQUFHO0FBQ0gsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKLElBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSixJQUFHO0FBQ0gsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKLElBQUc7QUFDSCxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0osSUFBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNuSUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBLEc7Ozs7OztBQ2pDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEdBQUU7QUFDRjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEdBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUMvQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEdBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEdBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEdBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEdBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ3ROQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEVBQUMiLCJmaWxlIjoidmlld3NcXG5vdGljZXMtZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNWRiMDEyZWQ3NjI2ZThiNjU1ZGUiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL25vdGljZXMtZGV0YWlsLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL25vdGljZXMtZGV0YWlsLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vbm90aWNlcy1kZXRhaWwud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvNjRmODE4MjM3YzA1YjAwMDU2MjcwZmUxMzQzMzRmODMnLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuX193ZWV4X2Jvb3RzdHJhcF9fKCdAd2VleC1jb21wb25lbnQvNjRmODE4MjM3YzA1YjAwMDU2MjcwZmUxMzQzMzRmODMnLHVuZGVmaW5lZCx1bmRlZmluZWQpXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3Mvbm90aWNlcy1kZXRhaWwud2U/ZW50cnk9dHJ1ZVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDMwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzciLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7YXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJyl9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzciLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBrZXksIG93biwgb3V0O1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgICBpZih0aGlzIGluc3RhbmNlb2YgQyl7XG4gICAgICAgICAgc3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEM7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmKElTX1BST1RPKXtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZih0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKWhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJ2YXIgZFAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgJGFzc2lnbiAgPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICB2YXIgQSA9IHt9XG4gICAgLCBCID0ge31cbiAgICAsIFMgPSBTeW1ib2woKVxuICAgICwgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uKGspeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUICAgICA9IHRvT2JqZWN0KHRhcmdldClcbiAgICAsIGFMZW4gID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgaW5kZXggPSAxXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mXG4gICAgLCBpc0VudW0gICAgID0gcElFLmY7XG4gIHdoaWxlKGFMZW4gPiBpbmRleCl7XG4gICAgdmFyIFMgICAgICA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKVxuICAgICAgLCBrZXlzICAgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGogICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGopaWYoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSlUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzciLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwidmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpXG4gICwgdWlkICAgID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsImltcG9ydCB7IGdldEJhc2VVUkwgfSBmcm9tICcuL2FwaSdcclxuaW1wb3J0ICogYXMgZGV0ZWN0aW9uIGZyb20gJy4vZGV0ZWN0aW9uJ1xyXG5pbXBvcnQgcm91dGUgZnJvbSAnLi9yb3V0ZSdcclxuLyoqXHJcbiAqIOi3r+eUsei9rOmTvuaOpVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcm91dGVOYW1lXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcm91dGVUb1VybCAocm91dGVOYW1lKSB7XHJcbiAgICB2YXIgcGFyYW1zID0gJydcclxuICAgIGlmICgvXFw/Ly50ZXN0KHJvdXRlTmFtZSkpIHtcclxuICAgICAgICBwYXJhbXMgPSByb3V0ZU5hbWUuc3BsaXQoJz8nKVsxXVxyXG4gICAgICAgIHJvdXRlTmFtZSA9IHJvdXRlTmFtZS5zcGxpdCgnPycpWzBdXHJcbiAgICB9XHJcbiAgICBsZXQgciA9IHJvdXRlW3JvdXRlTmFtZV1cclxuICAgIGxldCBjb21waWxlVXJsXHJcbiAgICBpZiAoIXIpIHtcclxuICAgICAgICAvLyBUT0RPIOi3s+i9rOWIsOmUmeivr+mhtVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcjog6Lev55Sx5LiN5a2Y5Zyo77yM6K+35Zyocm91dGVyLmpz5Lit6YWN572u5a+55bqU55qE6Lev55SxJylcclxuICAgIH1cclxuICAgIGNvbXBpbGVVcmwgPSByLnVybCA/IHIudXJsIDogJ3ZpZXdzLycgKyByb3V0ZU5hbWUuc3BsaXQoJ18nKS5qb2luKCctJylcclxuICAgIGxldCB1cmwgPSBnZXRCYXNlVVJMLmNhbGwodGhpcywgdHJ1ZSkgKyBjb21waWxlVXJsICsgJy5qcydcclxuICAgIC8vIOWFgeiuuOa3u+WKoOWPguaVsCDkvovlpoIgbWVyY2hhbnRfYXJvdW5kP2E9MSZiPTIg5aSE55CG6KeE5YiZ5ZKM5rWP6KeI5Zmo55qEcXVlcnlzdHJpbmfkuIDoh7RcclxuICAgIGlmIChwYXJhbXMpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgdXJsID0gdXJsICsgJyYnICsgcGFyYW1zXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdXJsID0gdXJsICsgJz8nICsgcGFyYW1zXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVybFxyXG59XHJcbi8qKlxyXG4gKiDmiZPlvIDmlrDpobXpnaJcclxuICogQHBhcmFtIHtzdHJpbmd9IHJvdXRlTmFtZSAtIOi3r+eUseWQjeensCDmiYDmnInot6/nlLHlkI3np7DlnKhyb3V0ZS5qc+S4rVxyXG4gKiBAcGFyYW0ge29iamVjdH0gbyAtIOeOsOWcqOWPquaciei3r+eUseaJk+W8gOWksei0peWkhOeQhuaWueazle+8jOS7peWQjuWPr+S7pea3u+WKoOWFtuS7luWkhOeQhlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvLmZhaWxDYWxsYmFjayAtIOi3r+eUseaJk+W8gOWksei0peWkhOeQhmNhbGxiYWNrXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gb3BlbiAocm91dGVOYW1lLCBvKSB7XHJcbiAgICBsZXQgciA9IHJvdXRlW3JvdXRlTmFtZV1cclxuICAgIGxldCB1cmwgPSByb3V0ZVRvVXJsLmNhbGwodGhpcywgcm91dGVOYW1lKVxyXG4gICAgaWYgKHIuZGV0ZWN0aW9uKSB7XHJcbiAgICAgICAgZGV0ZWN0aW9uW3IuZGV0ZWN0aW9uXSh7XHJcbiAgICAgICAgICAgIHJvdXRlTmFtZTogcm91dGVOYW1lLFxyXG4gICAgICAgICAgICB1cmw6IHVybFxyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRvcGVuVVJMKHVybClcclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIHR5cGVvZiBvLmZhaWxDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgby5mYWlsQ2FsbGJhY2suY2FsbCh0aGlzLCByb3V0ZU5hbWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLiRvcGVuVVJMKHVybClcclxuICAgIH1cclxufVxyXG4vKipcclxuICog6Kej5p6Q6Lev55Sx5Y+C5pWwXHJcbiAqIOS+i+Wmgu+8mm1lcmNoYW50X2Fyb3VuZD9hPTEmYj0yIOmhtemdolxyXG4gKiAgICAgIOiwg+eUqHBhcmFtcygp5pa55rOVIOi/lOWbnuWAvOS4uu+8miB7YToxLCBiOjJ9XHJcbiAqICAgICAg6LCD55SocGFyYW1zKCdhJynmlrnms5Ug6L+U5Zue5YC85Li677yaIDFcclxuICogQHBhcmFtIHtzdHJpbmd9IFtuYW1lXSDlj6/pgInlj4LmlbBcclxuICogQHBhcmFtIHtzdHJpbmd9IFt1cmxdIOWPr+mAieWPguaVsCDpu5jorqTkuLpidW5kbGVVcmxcclxuICogQHJldHVybnMge3N0cmluZ3xvYmplY3R9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1zIChuYW1lLCB1cmwpe1xyXG4gICAgbGV0IHJlc3VsdCA9IHt9XHJcbiAgICBpZiAoIXVybCkge1xyXG4gICAgICAgIHVybCA9IHRoaXMuJGdldENvbmZpZygpLmJ1bmRsZVVybFxyXG4gICAgfVxyXG4gICAgaWYgKHVybC5pbmRleE9mKFwiP1wiKSAhPT0gLTEpIHtcclxuICAgICAgICBsZXQgc3RyID0gdXJsLnN1YnN0cih1cmwuaW5kZXhPZihcIj9cIikgKyAxKVxyXG4gICAgICAgIGxldCBwID0gc3RyLnNwbGl0KFwiJlwiKVxyXG4gICAgICAgIHAuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICAgICAgbGV0IHRlbXAgPSB2LnNwbGl0KFwiPVwiKVxyXG4gICAgICAgICAgICByZXN1bHRbdGVtcFswXV0gPSBkZWNvZGVVUkkodGVtcFsxXSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIGlmIChyZXN1bHRbbmFtZV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFtuYW1lXVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJ1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgfVxyXG59XHJcbi8vIOiOt+WPluecn+WunumrmOW6pu+8jOeUseS6jndlZXjpl67popjmnKrog73pgILphY3miYDmnInmnLrlnovjgIJcclxuZXhwb3J0IGZ1bmN0aW9uIHJlYWxIZWlnaHQgKGhlaWdodCkge1xyXG4gICAgbGV0IHcgPSB0aGlzLiRnZXRDb25maWcoKS5lbnYuZGV2aWNlV2lkdGhcclxuICAgIGxldCBoID0gdGhpcy4kZ2V0Q29uZmlnKCkuZW52LmRldmljZUhlaWdodFxyXG4gICAgLy8gMTMzMlxyXG4gICAgcmV0dXJuIHcgLyA3NTAgKiBoZWlnaHRcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vbWV0aG9kcy5qcyIsImltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnXHJcbnZhciBzdHJlYW1cclxuX193ZWV4X2RlZmluZV9fKCdAd2VleC10ZW1wL2FwaScsIGZ1bmN0aW9uIChfX3dlZXhfcmVxdWlyZV9fKSB7XHJcbiAgICBzdHJlYW0gPSBfX3dlZXhfcmVxdWlyZV9fKCdAd2VleC1tb2R1bGUvc3RyZWFtJylcclxufSk7XHJcblxyXG4vLyDmlbDmja7lnLDlnYBcclxuY29uc3QgYXBpUm9vdCA9IGNvbmZpZy5hcGlSb290XHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaCAocGF0aCwgb3B0KSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHN0cmVhbS5mZXRjaChPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAgICAgbWV0aG9kczogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogL2h0dHA6XFwvXFwvfGh0dHBzOlxcL1xcLy8udGVzdChwYXRoKSA/IHBhdGggOiBgJHthcGlSb290fS8ke3BhdGh9Lmpzb25gLFxyXG4gICAgICAgICAgICB0eXBlOiAnanNvbidcclxuICAgICAgICB9LCBvcHQpLCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IClcclxuICAgIH0sICgpID0+IHt9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2lnbmluICgpIHtcclxuICAgIHJldHVybiBmZXRjaCgnc2lnbmluJywge1xyXG4gICAgICAgIG1ldGhvZHM6ICdQT1NUJ1xyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoVGFiQmFyICgpIHtcclxuICAgIHJldHVybiBmZXRjaCgndGFiLWJhcicpXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGFkYXB0ZXJUYWJCYXIodGFiSXRlbXMsIGluZGV4LCBzZWxlY3RlZENvbG9yKSB7XHJcbiAgICBjb25zdCBiYXNlVVJMID0gZ2V0QmFzZVVSTC5jYWxsKHRoaXMpXHJcbiAgICB0YWJJdGVtcy5mb3JFYWNoKCh0YWJJdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgdGFiSXRlbS5zcmMgPSBiYXNlVVJMICvjgIB0YWJJdGVtLnNyYztcclxuICAgICAgICB0YWJJdGVtLmltYWdlID0gY29uZmlnLmFzc2V0c1Jvb3QgK+OAgHRhYkl0ZW0uaW1hZ2U7XHJcbiAgICAgICAgdGFiSXRlbS5zZWxlY3RlZEltYWdlID0gY29uZmlnLmFzc2V0c1Jvb3QgK+OAgHRhYkl0ZW0uc2VsZWN0ZWRJbWFnZVxyXG4gICAgICAgIGlmIChpbmRleCA9PSBpKSB7XHJcbiAgICAgICAgICAgIHRhYkl0ZW0udmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xyXG4gICAgICAgICAgICB0YWJJdGVtLmljb24gPSB0YWJJdGVtLnNlbGVjdGVkSW1hZ2U7XHJcbiAgICAgICAgICAgIHRhYkl0ZW0udGl0bGVDb2xvciA9IHNlbGVjdGVkQ29sb3I7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGFiSXRlbS52aXNpYmlsaXR5ID0gJ2hpZGRlbidcclxuICAgICAgICAgICAgdGFiSXRlbS5pY29uID0gdGFiSXRlbS5pbWFnZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxuICAgIHJldHVybiB0YWJJdGVtc1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hBcHBzICgpIHtcclxuICAgIHJldHVybiBmZXRjaCgnYXBwcycpXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoTm90aWNlcyAoKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goJ25vdGljZXMnKVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEJhbm5lcnMgKCkge1xyXG4gICAgcmV0dXJuIGZldGNoKCdiYW5uZXJzJylcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hNZXJjaGFudENhdGVnb3J5ICgpIHtcclxuICAgIHJldHVybiBmZXRjaCgnbWVyY2hhbnQtY2F0ZWdvcnknKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hNZXJjaGFudExpc3QgKCkge1xyXG4gICAgcmV0dXJuIGZldGNoKCdtZXJjaGFudC1saXN0JylcclxufVxyXG5cclxuXHJcbi8vIGFwcCBqc2J1bmRsZSDpnZnmgIHotYTmupDlnLDlnYBcclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJhc2VVUkwgKGlzTmF2KSB7XHJcbiAgICB2YXIgYnVuZGxlVXJsXHJcblxyXG4gICAgaWYgKHR5cGVvZiB0aGlzLiRnZXRDb25maWcgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICBidW5kbGVVcmwgPSB0aGlzLiRnZXRDb25maWcoKS5idW5kbGVVcmxcclxuICAgIH1cclxuICAgIHZhciBuYXRpdmVCYXNlO1xyXG4gICAgdmFyIGlzQW5kcm9pZEFzc2V0cyA9IGJ1bmRsZVVybC5pbmRleE9mKCdmaWxlOi8vYXNzZXRzLycpID49IDA7XHJcblxyXG4gICAgdmFyIGlzaU9TQXNzZXRzID0gYnVuZGxlVXJsLmluZGV4T2YoJ2ZpbGU6Ly8vJykgPj0gMCAmJiBidW5kbGVVcmwuaW5kZXhPZignV2VleERlbW8uYXBwJykgPiAwO1xyXG4gICAgaWYgKGlzQW5kcm9pZEFzc2V0cykge1xyXG4gICAgICAgIG5hdGl2ZUJhc2UgPSAnZmlsZTovL2Fzc2V0cy9kaXN0Lyc7XHJcbiAgICB9IGVsc2UgaWYgKGlzaU9TQXNzZXRzKSB7XHJcbiAgICAgICAgbmF0aXZlQmFzZSA9IGJ1bmRsZVVybC5zdWJzdHJpbmcoMCwgYnVuZGxlVXJsLmxhc3RJbmRleE9mKCcvJykgKyAxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIGhvc3QgPSBjb25maWcuc2NyaXB0SG9zdDtcclxuICAgICAgICB2YXIgbWF0Y2hlcyA9IC9cXC9cXC8oW15cXC9dKz8pXFwvLy5leGVjKGJ1bmRsZVVybCk7XHJcblxyXG4gICAgICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID49IDIpIHtcclxuICAgICAgICAgICAgaG9zdCA9IG1hdGNoZXNbMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5q2k5aSE6ZyA5rOo5oSP5LiA5LiLLHRhYmJhciDnlKjnmoTnm7TmjqXmmK9qc2J1bmRsZSDnmoTot6/lvoQs5L2G5pivbmF2aWdhdG9y5piv55u05o6l6Lez6L2s5Yiw5paw6aG16Z2i5LiK55qELlxyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBuYXRpdmVCYXNlID0gaXNOYXYgPyBjb25maWcuaHRtbEluZGV4ICsgJz9wYWdlPScgKyBjb25maWcuc2NyaXB0Um9vdCA6IGNvbmZpZy5zY3JpcHRIb3N0ICsgY29uZmlnLnNjcmlwdFJvb3Q7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmF0aXZlQmFzZSA9IGNvbmZpZy5zY3JpcHRIb3N0ICsgY29uZmlnLnNjcmlwdFJvb3Q7XHJcbiAgICAgICAgICAgIC8vIG5hdGl2ZUJhc2UgPSAnaHR0cDovLycgKyBob3N0ICsgdGVzdFJvb3REaXIgKyAnL2Rpc3QvJztcclxuICAgICAgICAgICAgLy8gbmF0aXZlQmFzZSA9ICdodHRwOi8vJyArIGhvc3QgKyAnL2Rpc3QvJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmF0aXZlQmFzZTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vYXBpLmpzIiwiLy8gY29uc3QgYXNzZXRzVVJMID0gJ2ZpbGU6Ly8vc2RjYXJkL2ltZy8nXHJcbmNvbnN0IGFzc2V0c1Jvb3QgPSAnaHR0cHM6Ly9rb29vZmx5LmdpdGh1Yi5pby9rb3N0YW5kLXR0Zi90dGYvYXNzZXRzLydcclxuXHJcbmZ1bmN0aW9uIGljb24odikge1xyXG4gICAgcmV0dXJuIGFzc2V0c1Jvb3QgKyAnaWNvbi8nICsgdlxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIC8vIHdlZXjohJrmnKxob3N0XHJcbiAgICBzY3JpcHRIb3N0OiAnaHR0cHM6Ly9rb29vZmx5LmdpdGh1Yi5pby9rb3N0YW5kLXR0Zi90dGYnLFxyXG4gICAgLy8gSFRNTCBpbmRleFxyXG4gICAgaHRtbEluZGV4OiAnaHR0cHM6Ly9rb29vZmx5LmdpdGh1Yi5pby9rb3N0YW5kLXR0Zi90dGYvaW5kZXguaHRtbCcsXHJcbiAgICAvLyB3ZWV46ISa5pys5qC555uu5b2VXHJcbiAgICBzY3JpcHRSb290OiAnLzEwMDEvJyxcclxuICAgIC8vIOWbvueJh+etiemdmeaAgei1hOa6kOagueebruW9lVxyXG4gICAgYXNzZXRzUm9vdDogYXNzZXRzUm9vdCxcclxuICAgIC8vIHJlc2V0ZnVsIEFQSeacjeWKoeaguei3r+W+hFxyXG4gICAgYXBpUm9vdDogJ2h0dHBzOi8va29vb2ZseS5naXRodWIuaW8va29zdGFuZC10dGYvdHRmL2FwaS92MScsXHJcbiAgICAvLyBhbmRyb2lkIOacrOWcsOmdmeaAgei1hOa6kOi3r+W+hFxyXG4gICAgYW5kcm9pZEFzc2V0c1Jvb3Q6ICdmaWxlOi8vL3NkY2FyZC9hc3NldHMvJyxcclxuICAgIGljb246IHtcclxuICAgICAgICBtYXA6IGljb24oJ21hcEAyeC5wbmcnKSxcclxuICAgICAgICBtYXBfbGlmZTogaWNvbignbWFwX2xpZmVAMngucG5nJyksXHJcbiAgICAgICAgbm90aWNlOiBpY29uKCdub3RpY2VAMngucG5nJyksXHJcbiAgICAgICAgc2NhbjogaWNvbignc2NhbkAyeC5wbmcnKSxcclxuICAgICAgICBjb2RlOiBpY29uKCdjb2RlQDJ4LnBuZycpLFxyXG4gICAgICAgIHRyYW5zYWN0aW9uX3JlY29yZDogaWNvbigndHJhbnNhY3Rpb25fcmVjb3JkQDJ4LnBuZycpLFxyXG4gICAgICAgIHNlYXJjaDogaWNvbignc2VhcmNoQDJ4LnBuZycpLFxyXG4gICAgICAgIGJhY2s6IGljb24oJ2JhY2tAMngucG5nJyksXHJcbiAgICAgICAgcmlnaHRfYXJyb3c6IGljb24oJ3JpZ2h0X2Fycm93QDJ4LnBuZycpLFxyXG4gICAgICAgIHNlYXJjaDogaWNvbignc2VhcmNoX3Nob3BAMngucG5nJyksXHJcbiAgICAgICAgYXJvdW5kOiBpY29uKCdhcm91bmRAMngucG5nJyksXHJcbiAgICAgICAgc2VhcmNoX3Bhc3M6IGljb24oJ3NlYXJjaF9wYXNzQDJ4LnBuZycpLFxyXG4gICAgICAgIHN0YXI6IGljb24oJ3N0YXJAMngucG5nJyksXHJcbiAgICAgICAgaGFsZl9zdGFyOiBpY29uKCdoYWxmX3N0YXJAMngucG5nJyksXHJcbiAgICAgICAgZHJvcGRvd246IGljb24oJ2Ryb3Bkb3duQDJ4LnBuZycpLFxyXG4gICAgICAgIHRpY2s6IGljb24oJ3RpY2tAMngucG5nJyksXHJcbiAgICAgICAgY29sbGVjdDogaWNvbignY29sbGVjdEAyeC5wbmcnKSxcclxuICAgICAgICBjb2xsZWN0X3Vuc2VsZWN0ZWQ6IGljb24oJ2NvbGxlY3QtdW5zZWxlY3RlZEAyeC5wbmcnKVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9jb25maWcuanMiLCJpbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJ1xyXG5sZXQgc3RvcmFnZVxyXG5sZXQgbG9naW5Nb2R1bGVcclxuX193ZWV4X2RlZmluZV9fKCdAd2VleC10ZW1wL2RldGVjdGlvbicsIGZ1bmN0aW9uIChfX3dlZXhfcmVxdWlyZV9fKSB7XHJcbiAgICBzdG9yYWdlID0gX193ZWV4X3JlcXVpcmVfXygnQHdlZXgtbW9kdWxlL3N0b3JhZ2UnKVxyXG4gICAgbG9naW5Nb2R1bGUgPSBfX3dlZXhfcmVxdWlyZV9fKCdAd2VleC1tb2R1bGUvbG9naW5Nb2R1bGUnKVxyXG4gICAgLy8gdGVzdE1vZHVsZS5vcGVuVVJMMVxyXG59KTtcclxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25pbiAocikge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBzdG9yYWdlLmdldEl0ZW0oJ3VzZXInLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5yZXN1bHQgIT09ICdmYWlsZWQnKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGUuZGF0YSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdCgpXHJcbiAgICAgICAgICAgICAgICAvLyDot7PovazliLDnmbvlvZXpobXpnaJcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2dpbiByZWZlcjonLCByLnVybClcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAnb2JqZWN0JyAmJiBsb2dpbk1vZHVsZSAmJiBsb2dpbk1vZHVsZS50b0xvZ2luKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9naW5Nb2R1bGUudG9Mb2dpbignbG9naW4nLCByLnVybClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9kZXRlY3Rpb24uanMiLCIvKlxyXG4qIOWRveWQjeinhOWIme+8mlxyXG4qIGFwcHMgPT4gdmlld3MvYXBwcy5qc1xyXG4qIGFjY291bnRfdHJhZGluZ19yZWNvcmRzID0+IHZpZXdzL2FjY291bnQtdHJhZGluZy1yZWNvcmRzLmpzXHJcbiogYWJjX2RlZl96enogPT4gdmlld3MvYWJjLWRlZi16enouanNcclxuKiDlvLrliLbov5nmoLfop6PmnpAg5pyJ5Yip5LqO5ZG95ZCN55qE6KeE6IyD5LiO57uf5LiA77yM56ym5ZCI5q2k6KeE6IyD55qE5YmN5o+Q5LiLIHVybCDlrZfmrrXlj6/ku6XnnIHnlaVcclxuKiDlr7nlupTnmoTop6PmnpDmlrnms5XvvJptZXRob2RzLmpzIG9wZW4oKVxyXG4qICovXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGluZGV4OiB7IHVybDogJ3dlZXgtYm9vdHN0cmFwJyB9LFxyXG4gICAgYXBwczogeyB0aXRsZTogJ+eyvumAiScgfSxcclxuICAgIGxpZmU6IHsgdGl0bGU6ICfnlJ/mtLsnIH0sXHJcblxyXG5cclxuXHJcbiAgICBtZXJjaGFudDogeyB0aXRsZTogJ+WVhuaIt+afpeivoicsIGljb246ICdtZXJjaGFudCcgfSxcclxuICAgIG1lcmNoYW50X2NvbGxlY3Rpb246IHsgdGl0bGU6ICfllYbmiLfmlLbol48nIH0sXHJcbiAgICBtZXJjaGFudF9uZWFyYnk6IHsgdGl0bGU6ICfpmYTov5HllYbmiLcnIH0sXHJcbiAgICBtZXJjaGFudF9hcm91bmQ6IHsgdGl0bGU6ICflkajovrnllYbmiLcnIH0sXHJcbiAgICBtZXJjaGFudF9pbnRyb2R1Y3Rpb246IHsgdGl0bGU6ICfnroDku4snIH0sXHJcblxyXG4gICAgbW9yZTogeyB0aXRsZTogJ+abtOWkmicsIGljb246ICdtb3JlJyB9LFxyXG5cclxuICAgIG5vdGljZXM6IHsgdGl0bGU6ICflhazlkYonIH0sXHJcbiAgICBub3RpY2VzX2RldGFpbDogeyB0aXRsZTogJ+WFrOWRiuivpuaDhScgfSxcclxuICAgIHNpZ25pbjogeyB0aXRsZTogJ+eZu+W9lScgfSxcclxuXHJcbiAgICBwYXltZW50X3Bob25lOiB7IHRpdGxlOiAn5omL5py65YWF5YC8JywgZGV0ZWN0aW9uOiAnc2lnbmluJyB9LFxyXG4gICAgcGF5bWVudF9wZXRyb2xldW06IHsgdGl0bGU6ICfliqDmsrnljaHlhYXlgLwnIH0sXHJcbiAgICBwYXltZW50X3dhdGVyOiB7IHRpdGxlOiAn5rC06LS557y057qzJyB9LFxyXG4gICAgcGF5bWVudF9lbGVjdHJpY2l0eTogeyB0aXRsZTogJ+eUtei0uee8tOe6sycgfSxcclxuICAgIHBheW1lbnRfZ2FzOiB7IHRpdGxlOiAn54eD5rCU57y06LS5JyB9LFxyXG5cclxuICAgIGRhc2hib2FyZDogeyB0aXRsZTogJ+aIkeeahOi0puaItycsIGRldGVjdGlvbjogJ3NpZ25pbicgfSxcclxuICAgIGRhc2hib2FyZF9yZWNoYXJnZTogeyB0aXRsZTogJ+i0puaIt+WFheWAvCcgfSxcclxuICAgIGRhc2hib2FyZF90cmFuc2ZlcjogeyB0aXRsZTogJ+i0puaIt+i9rOi0picgfSxcclxuICAgIGRhc2hib2FyZF9iYW5rX2NhcmQ6IHsgdGl0bGU6ICfpk7booYzljaEnIH0sXHJcbiAgICBkYXNoYm9hcmRfdHJhZGluZ19yZWNvcmRzOiB7IHRpdGxlOiAn5Lqk5piT6K6w5b2VJyB9LFxyXG4gICAgZGFzaGJvYXJkX3Bhc3N3b3JkOiB7IHRpdGxlOiAn5a+G56CB566h55CGJyB9LFxyXG4gICAgZGFzaGJvYXJkX2NlcnRpZmljYXRlOiB7IHRpdGxlOiAn6K+B5Lmm566h55CGJyB9LFxyXG5cclxuICAgIHN1bXBheV9jYXJkOiB7IHRpdGxlOiAn5ZWG55uf5Y2hJyB9LFxyXG4gICAgc3VtcGF5X2NhcmRfYmFsYW5jZTogeyB0aXRsZTogJ+WNoeS9memineafpeivoicgfSxcclxuICAgIHN1bXBheV9jYXJkX3Bhc3N3b3JkOiB7IHRpdGxlOiAn5Y2h5a+G56CB5L+u5pS5JyB9LFxyXG4gICAgc3VtcGF5X2NhcmRfZGV0YWlsOiB7IHRpdGxlOiAn5Y2h5piO57uG5p+l6K+iJyB9LFxyXG5cclxuICAgIHRlc3Q6IHsgdGl0bGU6ICfkuLTml7bmtYvor5XpobXpnaInIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vcm91dGUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwid2ViXCIsXG4gIFwiYXR0clwiOiB7XG4gICAgXCJyZWZcIjogXCJ3ZWJ2aWV3XCIsXG4gICAgXCI6c3JjXCI6IFwidXJsXCIsXG4gICAgXCJAcGFnZXN0YXJ0XCI6IFwic3RhcnRcIixcbiAgICBcIkBwYWdlZmluaXNoXCI6IFwiZmluaXNoXCIsXG4gICAgXCJAZXJyb3JcIjogXCJlcnJvclwiXG4gIH0sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcIndlYnZpZXdcIlxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9zcmMvY29tcG9uZW50cy9kZXRhaWwvZGV0YWlsLndlXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDUgMzAiLCI8dGVtcGxhdGU+XHJcbiAgICA8d2ViIHJlZj1cIndlYnZpZXdcIiA6c3JjPVwidXJsXCIgY2xhc3M9XCJ3ZWJ2aWV3XCIgQHBhZ2VzdGFydD1cInN0YXJ0XCIgQHBhZ2VmaW5pc2g9XCJmaW5pc2hcIiBAZXJyb3I9XCJlcnJvclwiPjwvd2ViPlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IGNvbmZpZyBmcm9tICcuLi8uLi9jb21tb24vY29uZmlnJ1xyXG4gICAgaW1wb3J0ICogYXMgbWV0aG9kcyBmcm9tICcuLi8uLi9jb21tb24vbWV0aG9kcydcclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIG5hdjoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmtojmga/or6bmg4UnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjNGQ0ZDRkJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICAgICAgbGVmdEl0ZW1TcmM6IGNvbmZpZy5pY29uLmJhY2ssXHJcbiAgICAgICAgICAgICAgICByaWdodEl0ZW1NYXJrOiA1LFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGg6IDFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZWQgKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBhcmFtcygnaWQnKSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IE9iamVjdC5hc3NpZ24oe1xyXG5cclxuICAgICAgICB9LCBtZXRob2RzKVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZGV0YWlsL2RldGFpbC53ZT9kNDlhYWQ5MCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiY29udGFpbmVyXCJcbiAgXSxcbiAgXCJzdHlsZVwiOiB7XG4gICAgXCJoZWlnaHRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmhlaWdodH0sXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmJhY2tncm91bmRDb2xvcn1cbiAgfSxcbiAgXCJhdHRyXCI6IHtcbiAgICBcImRhdGFSb2xlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5kYXRhUm9sZX1cbiAgfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInJpZ2h0LXRleHRcIlxuICAgICAgXSxcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcImNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodEl0ZW1Db2xvcn1cbiAgICAgIH0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcIm5hdmlJdGVtUG9zaXRpb25cIjogXCJyaWdodFwiLFxuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodEl0ZW1UaXRsZX1cbiAgICAgIH0sXG4gICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gIXRoaXMucmlnaHRJdGVtU3JjfSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcIm9uY2xpY2tyaWdodGl0ZW1cIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJyaWdodC1pbWFnZVwiXG4gICAgICBdLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJuYXZpSXRlbVBvc2l0aW9uXCI6IFwicmlnaHRcIixcbiAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJpZ2h0SXRlbVNyY31cbiAgICAgIH0sXG4gICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodEl0ZW1TcmN9LFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwib25jbGlja3JpZ2h0aXRlbVwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwicmlnaHQtbWFya1wiXG4gICAgICBdLFxuICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmlnaHRJdGVtTWFya30sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJvbmNsaWNrcmlnaHRpdGVtXCJcbiAgICAgIH0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodEl0ZW1NYXJrfVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImxlZnQtdGV4dFwiXG4gICAgICBdLFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtQ29sb3J9XG4gICAgICB9LFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJuYXZpSXRlbVBvc2l0aW9uXCI6IFwibGVmdFwiLFxuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sZWZ0SXRlbVRpdGxlfVxuICAgICAgfSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcIm9uY2xpY2tsZWZ0aXRlbVwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwibGVmdC1kZXNcIlxuICAgICAgXSxcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcImNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sZWZ0SXRlbUNvbG9yfVxuICAgICAgfSxcbiAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtRGVzfSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtRGVzfVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJsZWZ0LWltYWdlXCJcbiAgICAgIF0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcIm5hdmlJdGVtUG9zaXRpb25cIjogXCJsZWZ0XCIsXG4gICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sZWZ0SXRlbVNyY31cbiAgICAgIH0sXG4gICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sZWZ0SXRlbVNyY30sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJvbmNsaWNrbGVmdGl0ZW1cIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImNlbnRlci10ZXh0XCJcbiAgICAgIF0sXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGVDb2xvcn1cbiAgICAgIH0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcIm5hdmlJdGVtUG9zaXRpb25cIjogXCJjZW50ZXJcIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGV9XG4gICAgICB9XG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9zcmMvY29tcG9uZW50cy9uYXZwYWdlL25hdmJhci53ZVxuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyAxNCAyMSAyMiAyMyAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImNvbnRhaW5lclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJ3aWR0aFwiOiA3NTBcbiAgfSxcbiAgXCJyaWdodC10ZXh0XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImJvdHRvbVwiOiAyNCxcbiAgICBcInJpZ2h0XCI6IDMyLFxuICAgIFwidGV4dEFsaWduXCI6IFwicmlnaHRcIixcbiAgICBcImZvbnRTaXplXCI6IDI4LFxuICAgIFwiZm9udEZhbWlseVwiOiBcIidPcGVuIFNhbnMnLCBzYW5zLXNlcmlmXCJcbiAgfSxcbiAgXCJsZWZ0LXRleHRcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiYm90dG9tXCI6IDIyLFxuICAgIFwibGVmdFwiOiA4MCxcbiAgICBcInRleHRBbGlnblwiOiBcImxlZnRcIixcbiAgICBcImZvbnRTaXplXCI6IDMyLFxuICAgIFwiZm9udEZhbWlseVwiOiBcIidPcGVuIFNhbnMnLCBzYW5zLXNlcmlmXCJcbiAgfSxcbiAgXCJsZWZ0LWRlc1wiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJib3R0b21cIjogMjIsXG4gICAgXCJsZWZ0XCI6IDgwLFxuICAgIFwidGV4dEFsaWduXCI6IFwibGVmdFwiLFxuICAgIFwiZm9udFNpemVcIjogMzIsXG4gICAgXCJmb250RmFtaWx5XCI6IFwiJ09wZW4gU2FucycsIHNhbnMtc2VyaWZcIlxuICB9LFxuICBcImNlbnRlci10ZXh0XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImJvdHRvbVwiOiAxNixcbiAgICBcImxlZnRcIjogMTcyLFxuICAgIFwicmlnaHRcIjogMTcyLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmb250U2l6ZVwiOiAzOFxuICB9LFxuICBcImxlZnQtaW1hZ2VcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiYm90dG9tXCI6IDIwLFxuICAgIFwibGVmdFwiOiAyOCxcbiAgICBcIndpZHRoXCI6IDQ4LFxuICAgIFwiaGVpZ2h0XCI6IDQ4XG4gIH0sXG4gIFwicmlnaHQtaW1hZ2VcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiYm90dG9tXCI6IDIwLFxuICAgIFwicmlnaHRcIjogMjgsXG4gICAgXCJ3aWR0aFwiOiA0OCxcbiAgICBcImhlaWdodFwiOiA0OFxuICB9LFxuICBcInJpZ2h0LW1hcmtcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwicmlnaHRcIjogMTYsXG4gICAgXCJib3R0b21cIjogMzgsXG4gICAgXCJ3aWR0aFwiOiA0MCxcbiAgICBcImhlaWdodFwiOiA0MCxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwZjRmOWVcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiAyMCxcbiAgICBcImZvbnRTaXplXCI6IDI0LFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDQwLFxuICAgIFwidmVydGljYWxBbGlnblwiOiBcIm1pZGRsZVwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJvcGFjaXR5XCI6IDAuOVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9zcmMvY29tcG9uZW50cy9uYXZwYWdlL25hdmJhci53ZVxuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyAxNCAyMSAyMiAyMyAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBzdHlsZT1cImhlaWdodDp7e2hlaWdodH19OyBiYWNrZ3JvdW5kLWNvbG9yOnt7YmFja2dyb3VuZENvbG9yfX07XCIgZGF0YS1yb2xlPXt7ZGF0YVJvbGV9fT5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInJpZ2h0LXRleHRcIiBzdHlsZT1cImNvbG9yOnt7cmlnaHRJdGVtQ29sb3J9fTtcIiBuYXZpLWl0ZW0tcG9zaXRpb249XCJyaWdodFwiIGlmPXt7IXJpZ2h0SXRlbVNyY319IG9uY2xpY2sgPSBcIm9uY2xpY2tyaWdodGl0ZW1cIj57e3JpZ2h0SXRlbVRpdGxlfX08L3RleHQ+XHJcbiAgICAgICAgPGltYWdlIGNsYXNzPVwicmlnaHQtaW1hZ2VcIiBuYXZpLWl0ZW0tcG9zaXRpb249XCJyaWdodFwiIHNyYz17e3JpZ2h0SXRlbVNyY319IGlmPXt7cmlnaHRJdGVtU3JjfX0gb25jbGljaz1cIm9uY2xpY2tyaWdodGl0ZW1cIj48L2ltYWdlPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwicmlnaHQtbWFya1wiIGlmPVwie3tyaWdodEl0ZW1NYXJrfX1cIiBvbmNsaWNrPVwib25jbGlja3JpZ2h0aXRlbVwiPnt7cmlnaHRJdGVtTWFya319PC90ZXh0PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwibGVmdC10ZXh0XCIgc3R5bGU9XCJjb2xvcjp7e2xlZnRJdGVtQ29sb3J9fTtcIiBuYXZpLWl0ZW0tcG9zaXRpb249XCJsZWZ0XCIgIG9uY2xpY2s9IFwib25jbGlja2xlZnRpdGVtXCI+e3tsZWZ0SXRlbVRpdGxlfX08L3RleHQ+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJsZWZ0LWRlc1wiIHN0eWxlPVwiY29sb3I6e3tsZWZ0SXRlbUNvbG9yfX07XCIgaWY9e3tsZWZ0SXRlbURlc319Pnt7bGVmdEl0ZW1EZXN9fTwvdGV4dD5cclxuICAgICAgICA8aW1hZ2UgY2xhc3M9XCJsZWZ0LWltYWdlXCIgbmF2aS1pdGVtLXBvc2l0aW9uPVwibGVmdFwiIHNyYz17e2xlZnRJdGVtU3JjfX0gaWY9e3tsZWZ0SXRlbVNyY319IG9uY2xpY2s9XCJvbmNsaWNrbGVmdGl0ZW1cIj48L2ltYWdlPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiY2VudGVyLXRleHRcIiBzdHlsZT1cImNvbG9yOnt7dGl0bGVDb2xvcn19O1wiIG5hdmktaXRlbS1wb3NpdGlvbj1cImNlbnRlclwiPnt7dGl0bGV9fTwvdGV4dD5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlPlxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7IHRvcDogMDsgbGVmdDogMDsgcmlnaHQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDc1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5yaWdodC10ZXh0IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogMjRweDsgcmlnaHQ6IDMycHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IGZvbnQtc2l6ZTogMjhweDsgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gICAgLmxlZnQtdGV4dCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDIycHg7IGxlZnQ6IDgwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDsgZm9udC1zaXplOiAzMnB4OyBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgICAubGVmdC1kZXMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAyMnB4OyBsZWZ0OiA4MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMnB4OyBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgICAuY2VudGVyLXRleHQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAxNnB4OyBsZWZ0OiAxNzJweDsgcmlnaHQ6IDE3MnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAzOHB4O1xyXG4gICAgfVxyXG4gICAgLmxlZnQtaW1hZ2Uge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAyMHB4OyBsZWZ0OiAyOHB4O1xyXG4gICAgICAgIHdpZHRoOiA0OHB4OyBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB9XHJcbiAgICAucmlnaHQtaW1hZ2Uge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAyMHB4OyByaWdodDogMjhweDtcclxuICAgICAgICB3aWR0aDogNDhweDsgaGVpZ2h0OiA0OHB4O1xyXG4gICAgfVxyXG4gICAgLnJpZ2h0LW1hcmsge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IDE2cHg7IGJvdHRvbTogMzhweDtcclxuICAgICAgICB3aWR0aDogNDBweDsgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwZjRmOWU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7IHRleHQtYWxpZ246IGNlbnRlcjsgIGxpbmUtaGVpZ2h0OiA0MHB4OyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBjb2xvcjogI2ZmZjtcclxuICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBkYXRhUm9sZTogJ25hdmJhcicsXHJcbiAgICAgICAgICAgIC8v5a+86Iiq5p2h6IOM5pmv6ImyXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgLy/lr7zoiKrmnaHpq5jluqZcclxuICAgICAgICAgICAgaGVpZ2h0OiA4OCxcclxuICAgICAgICAgICAgLy/lr7zoiKrmnaHmoIfpophcclxuICAgICAgICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgICAgICAgIC8v5a+86Iiq5p2h5qCH6aKY6aKc6ImyXHJcbiAgICAgICAgICAgIHRpdGxlQ29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgICAgIC8v5Y+z5L6n5oyJ6ZKu5Zu+54mHXHJcbiAgICAgICAgICAgIHJpZ2h0SXRlbVNyYzogJycsXHJcbiAgICAgICAgICAgIC8v5Y+z5L6n5oyJ6ZKu5qCH6aKYXHJcbiAgICAgICAgICAgIHJpZ2h0SXRlbVRpdGxlOiAnJyxcclxuICAgICAgICAgICAgcmlnaHRJdGVtTWFyazogJycsXHJcbiAgICAgICAgICAgIC8v5Y+z5L6n5oyJ6ZKu5qCH6aKY6aKc6ImyXHJcbiAgICAgICAgICAgIHJpZ2h0SXRlbUNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgICAgICAvL+W3puS+p+aMiemSruWbvueJh1xyXG4gICAgICAgICAgICBsZWZ0SXRlbVNyYzogJycsXHJcbiAgICAgICAgICAgIC8v5bem5L6n5oyJ6ZKu5qCH6aKYXHJcbiAgICAgICAgICAgIGxlZnRJdGVtVGl0bGU6ICcnLFxyXG4gICAgICAgICAgICBsZWZ0SXRlbURlczogJycsXHJcbiAgICAgICAgICAgIC8v5bem5L6n5oyJ6ZKu6aKc6ImyXHJcbiAgICAgICAgICAgIGxlZnRJdGVtQ29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIG9uY2xpY2tyaWdodGl0ZW06IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRkaXNwYXRjaCgnbmF2aUJhci5yaWdodEl0ZW0uY2xpY2snLCB7fSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uY2xpY2tsZWZ0aXRlbTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGRpc3BhdGNoKCduYXZpQmFyLmxlZnRJdGVtLmNsaWNrJywge30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvbmF2cGFnZS9uYXZiYXIud2U/M2RmN2Y0YTYiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL25hdmJhci53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9uYXZiYXIud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9uYXZiYXIud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvbmF2YmFyJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL25hdnBhZ2UvbmF2YmFyLndlXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDE0IDIxIDIyIDIzIDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJjb250YWluZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJuYXZiYXJcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJuYXZiYXJcIlxuICAgICAgXSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwiZGF0YVJvbGVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmRhdGFSb2xlfSxcbiAgICAgICAgXCJoZWlnaHRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmhlaWdodH0sXG4gICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5iYWNrZ3JvdW5kQ29sb3J9LFxuICAgICAgICBcInRpdGxlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aXRsZX0sXG4gICAgICAgIFwibGVmdEl0ZW1EZXNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtRGVzfSxcbiAgICAgICAgXCJ0aXRsZUNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aXRsZUNvbG9yfSxcbiAgICAgICAgXCJsZWZ0SXRlbVNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGVmdEl0ZW1TcmN9LFxuICAgICAgICBcImxlZnRJdGVtVGl0bGVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtVGl0bGV9LFxuICAgICAgICBcImxlZnRJdGVtQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtQ29sb3J9LFxuICAgICAgICBcInJpZ2h0SXRlbVNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmlnaHRJdGVtU3JjfSxcbiAgICAgICAgXCJyaWdodEl0ZW1UaXRsZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmlnaHRJdGVtVGl0bGV9LFxuICAgICAgICBcInJpZ2h0SXRlbUNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodEl0ZW1Db2xvcn0sXG4gICAgICAgIFwicmlnaHRJdGVtTWFya1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmlnaHRJdGVtTWFya31cbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcIndyYXBwZXJcIlxuICAgICAgXSxcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcImJvcmRlclRvcENvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5ib3JkZXJCb3R0b21Db2xvcn0sXG4gICAgICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmJvcmRlckJvdHRvbVdpZHRofSxcbiAgICAgICAgXCJib3JkZXJUb3BTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgICAgIFwibWFyZ2luVG9wXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5tYXJnaW5Ub3B9XG4gICAgICB9LFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJjb250ZW50XCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vc3JjL2NvbXBvbmVudHMvbmF2cGFnZS9uYXZwYWdlLndlXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDE0IDIxIDIyIDIzIDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwibmF2YmFyXCI6IHtcbiAgICBcInpJbmRleFwiOiAxMFxuICB9LFxuICBcIndyYXBwZXJcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wXCI6IDAsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwiYm90dG9tXCI6IDAsXG4gICAgXCJ6SW5kZXhcIjogOCxcbiAgICBcIndpZHRoXCI6IDc1MFxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9zcmMvY29tcG9uZW50cy9uYXZwYWdlL25hdnBhZ2Uud2Vcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMTQgMjEgMjIgMjMgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYiLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPG5hdmJhciBjbGFzcz1cIm5hdmJhclwiIGRhdGEtcm9sZT17e2RhdGFSb2xlfX0gaGVpZ2h0PXt7aGVpZ2h0fX0gYmFja2dyb3VuZC1jb2xvcj17e2JhY2tncm91bmRDb2xvcn19IHRpdGxlPXt7dGl0bGV9fSAgbGVmdC1pdGVtLWRlcz1cInt7bGVmdEl0ZW1EZXN9fVwiIHRpdGxlLWNvbG9yPXt7dGl0bGVDb2xvcn19IGxlZnQtaXRlbS1zcmM9e3tsZWZ0SXRlbVNyY319IGxlZnQtaXRlbS10aXRsZT17e2xlZnRJdGVtVGl0bGV9fSBsZWZ0LWl0ZW0tY29sb3I9e3tsZWZ0SXRlbUNvbG9yfX0gcmlnaHQtaXRlbS1zcmM9e3tyaWdodEl0ZW1TcmN9fSByaWdodC1pdGVtLXRpdGxlPXt7cmlnaHRJdGVtVGl0bGV9fSByaWdodC1pdGVtLWNvbG9yPXt7cmlnaHRJdGVtQ29sb3J9fSByaWdodC1pdGVtLW1hcms9XCJ7e3JpZ2h0SXRlbU1hcmt9fVwiPjwvbmF2YmFyPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCIgc3R5bGU9XCJib3JkZXItdG9wLWNvbG9yOiB7e2JvcmRlckJvdHRvbUNvbG9yfX07IGJvcmRlci10b3Atd2lkdGg6e3tib3JkZXJCb3R0b21XaWR0aH19OyBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDsgbWFyZ2luLXRvcDp7e21hcmdpblRvcH19XCI+XHJcbiAgICAgICAgICAgIDxjb250ZW50PjwvY29udGVudD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlPlxyXG4gICAgLm5hdmJhciB7IHotaW5kZXg6IDEwOyB9XHJcbiAgICAud3JhcHBlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7IHotaW5kZXg6IDg7XHJcbiAgICAgICAgd2lkdGg6IDc1MHB4O1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIHJlcXVpcmUoJy4vbmF2YmFyLndlJylcclxuICAgIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGF0YVJvbGU6ICduYXZiYXInLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgICAgIGhlaWdodDogODgsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aDogMCxcclxuICAgICAgICAgICAgYm9yZGVyQm90dG9tQ29sb3I6ICcjZDhkOGQ4JyxcclxuICAgICAgICAgICAgdGl0bGVDb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgcmlnaHRJdGVtU3JjOiAnJyxcclxuICAgICAgICAgICAgcmlnaHRJdGVtVGl0bGU6ICcnLFxyXG4gICAgICAgICAgICByaWdodEl0ZW1Db2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgcmlnaHRJdGVtTWFyazogJycsXHJcbiAgICAgICAgICAgIGxlZnRJdGVtU3JjOiAnJyxcclxuICAgICAgICAgICAgbGVmdEl0ZW1UaXRsZTogJycsXHJcbiAgICAgICAgICAgIGxlZnRJdGVtRGVzOiAnJyxcclxuICAgICAgICAgICAgbGVmdEl0ZW1Db2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVhdGVkICgpIHtcclxuICAgICAgICAgICAgLy8gaU9TIOWktOmDqG5hdnBhZ2UgdWnmuLLmn5PkuI5INSBBbmRyb2lk5LiN5LiA6Ie0XHJcbiAgICAgICAgICAgIGlmKHRoaXMuJGdldENvbmZpZygpLmVudi5wbGF0Zm9ybSA9PT0gJ2lPUycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFyZ2luVG9wID0gMFxyXG4gICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmdpblRvcCA9IHRoaXMuaGVpZ2h0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL25hdnBhZ2UvbmF2cGFnZS53ZT80ODU4MjE4NCIsInJlcXVpcmUoXCIuL25hdmJhci53ZVwiKVxudmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9uYXZwYWdlLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL25hdnBhZ2Uud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9uYXZwYWdlLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L25hdnBhZ2UnLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvbmF2cGFnZS9uYXZwYWdlLndlXG4vLyBtb2R1bGUgaWQgPSAxNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAyMSAyMiAyMyAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJuYXZwYWdlXCIsXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImNvbnRhaW5lclwiXG4gIF0sXG4gIFwiYXR0clwiOiB7XG4gICAgXCJsZWZ0SXRlbVNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubmF2LmxlZnRJdGVtU3JjfSxcbiAgICBcInRpdGxlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5uYXYudGl0bGV9LFxuICAgIFwicmlnaHRJdGVtVGl0bGVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm5hdi5yaWdodEl0ZW1UaXRsZX0sXG4gICAgXCJ0aXRsZUNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5uYXYuY29sb3J9LFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm5hdi5ib3JkZXJCb3R0b21XaWR0aH0sXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm5hdi5iYWNrZ3JvdW5kQ29sb3J9XG4gIH0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcIndlYlwiLFxuICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudXJsfSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJ3ZWJ2aWV3XCJcbiAgICAgIF0sXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJoZWlnaHRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLndlYnZpZXdIZWlnaHR9XG4gICAgICB9LFxuICAgICAgXCJpZFwiOiBcIndlYnZpZXdcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy51cmx9XG4gICAgICB9LFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImVycm9yXCI6IFwicGFnZWVycm9yXCIsXG4gICAgICAgIFwicGFnZXN0YXJ0XCI6IFwicGFnZXN0YXJ0XCIsXG4gICAgICAgIFwicGFnZWZpbmlzaFwiOiBcInBhZ2VmaW5pc2hcIlxuICAgICAgfVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vc3JjL3ZpZXdzL25vdGljZXMtZGV0YWlsLndlXG4vLyBtb2R1bGUgaWQgPSAxODVcbi8vIG1vZHVsZSBjaHVua3MgPSAzMCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImNvbnRhaW5lclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjJmMmYyXCJcbiAgfSxcbiAgXCJ3ZWJ2aWV3XCI6IHtcbiAgICBcIndpZHRoXCI6IDcyMCxcbiAgICBcIm1hcmdpbkxlZnRcIjogMTUsXG4gICAgXCJtYXJnaW5Ub3BcIjogMTUsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogNCxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9zcmMvdmlld3Mvbm90aWNlcy1kZXRhaWwud2Vcbi8vIG1vZHVsZSBpZCA9IDE4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDMwIiwiPHRlbXBsYXRlPlxyXG4gICAgPG5hdnBhZ2UgY2xhc3M9XCJjb250YWluZXJcIlxyXG4gICAgICAgICAgICAgbGVmdC1pdGVtLXNyYz1cInt7bmF2LmxlZnRJdGVtU3JjfX1cIlxyXG4gICAgICAgICAgICAgdGl0bGU9XCJ7e25hdi50aXRsZX19XCJcclxuICAgICAgICAgICAgIHJpZ2h0LWl0ZW0tdGl0bGU9XCJ7e25hdi5yaWdodEl0ZW1UaXRsZX19XCJcclxuICAgICAgICAgICAgIHRpdGxlLWNvbG9yPVwie3tuYXYuY29sb3J9fVwiXHJcbiAgICAgICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoPVwie3tuYXYuYm9yZGVyQm90dG9tV2lkdGh9fVwiXHJcbiAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yPVwie3tuYXYuYmFja2dyb3VuZENvbG9yfX1cIj5cclxuXHJcbiAgICAgICAgPHdlYiBpZj1cInt7dXJsfX1cIiBjbGFzcz1cIndlYnZpZXdcIiBzdHlsZT1cImhlaWdodDoge3t3ZWJ2aWV3SGVpZ2h0fX1cIiBpZD1cIndlYnZpZXdcIiBzcmM9XCJ7e3VybH19XCIgY2xhc3M9XCJ3ZWJ2aWV3XCIgb25lcnJvcj1cInBhZ2VlcnJvclwiIG9ucGFnZXN0YXJ0PVwicGFnZXN0YXJ0XCIgb25wYWdlZmluaXNoPVwicGFnZWZpbmlzaFwiPjwvd2ViPlxyXG5cclxuICAgIDwvbmF2cGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuPHN0eWxlPlxyXG4gICAgLmNvbnRhaW5lciB7IGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7IH1cclxuICAgIC53ZWJ2aWV3IHtcclxuICAgICAgICB3aWR0aDogNzIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7IG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgTmF0IGZyb20gJ3dlZXgtbmF0J1xyXG4gICAgaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb21tb24vY29uZmlnJ1xyXG4gICAgaW1wb3J0ICogYXMgbWV0aG9kcyBmcm9tICcuLi9jb21tb24vbWV0aG9kcydcclxuICAgIHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvbmF2cGFnZS9uYXZwYWdlLndlJylcclxuICAgIHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvZGV0YWlsL2RldGFpbC53ZScpXHJcblxyXG4gICAgY29uc3QgbW9kYWwgPSByZXF1aXJlKCdAd2VleC1tb2R1bGUvbW9kYWwnKVxyXG4gICAgY29uc3QgbmF2aWdhdG9yID0gcmVxdWlyZSgnQHdlZXgtbW9kdWxlL25hdmlnYXRvcicpXHJcbiAgICBjb25zdCB3ZWJ2aWV3ID0gcmVxdWlyZSgnQHdlZXgtbW9kdWxlL3dlYnZpZXcnKVxyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIG5hdjoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmtojmga/or6bmg4UnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjNGQ0ZDRkJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICAgICAgbGVmdEl0ZW1TcmM6IGNvbmZpZy5pY29uLmJhY2ssXHJcbiAgICAgICAgICAgICAgICByaWdodEl0ZW1NYXJrOiA1LFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGg6IDEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHdlYnZpZXdIZWlnaHQ6IDExMDAsXHJcbiAgICAgICAgICAgIHVybDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZWQgKCkge1xyXG4gICAgICAgICAgICB0aGlzLnVybCA9IGNvbmZpZy5zY3JpcHRSb290ICsgJ2h0bWwvZGV0YWlsLmh0bWw/aWQ9JyArIHRoaXMucGFyYW1zKCdpZCcpXHJcblxyXG4gICAgICAgICAgICAvKmNvbnNvbGUubG9nKCdOYXQnLCBOYXQpXHJcbiAgICAgICAgICAgIHRoaXMud2Vidmlld0hlaWdodCA9IDE0MDlcclxuICAgICAgICAgICAgTmF0LnNjcmVlbi5pbmZvKChlcnIsIHJldCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMud2Vidmlld0hlaWdodCA9IHRoaXMuJGdldENvbmZpZygpLmVudi5kZXZpY2VIZWlnaHQgLSB0aGlzLnJlYWxIZWlnaHQoODggKyAzMCkgKiByZXQuc2NhbGU7XHJcbiAgICAgICAgICAgICAgICBtb2RhbC5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogcmV0LnNjYWxlICsgJywnICsgdGhpcy5yZWFsSGVpZ2h0KDg4ICsgMzApICogcmV0LnNjYWxlICsgJywgd2ViOiAnICsgdGhpcy53ZWJ2aWV3SGVpZ2h0XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXQnLCByZXQsIHRoaXMucmVhbEhlaWdodCg4OCArIDMwKSAqIHJldC5zY2FsZSlcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGxldCBiID0gdGhpcy4kZ2V0Q29uZmlnKCkuZW52LmRldmljZVdpZHRoIC8gNzUwXHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiRnZXRDb25maWcoKS5lbnYpKi9cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuJG9uKCduYXZpQmFyLmxlZnRJdGVtLmNsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAnYW5pbWF0ZWQnOiAndHJ1ZScsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucG9wKHBhcmFtcywgZnVuY3Rpb24gKCkge30pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAgICAgcGFnZWZpbmlzaCAoZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBhZ2VzdGFydCAoZSkge1xyXG4gICAgICAgICAgICAgICAgLyptb2RhbC5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3BhZ2VzdGFydCdcclxuICAgICAgICAgICAgICAgIH0pOyovXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwYWdlZXJyb3IgKGUpIHtcclxuICAgICAgICAgICAgICAgIG1vZGFsLmFsZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnZXJyb3InXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBtZXRob2RzKVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZpZXdzL25vdGljZXMtZGV0YWlsLndlP2FkMzMyNjlhIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTmF0ID0ge307XG5cbmlmICh0eXBlb2YgX193ZWV4X2RlZmluZV9fID09PSAnZnVuY3Rpb24nKSB7XG5cdHZhciBjYW1lcmEgPSByZXF1aXJlKCcuL2NhbWVyYScpO1xuXHR2YXIgY29tbXVuaWNhdGlvbiA9IHJlcXVpcmUoJy4vY29tbXVuaWNhdGlvbicpO1xuXHR2YXIgZ2VvbG9jYXRpb24gPSByZXF1aXJlKCcuL2dlb2xvY2F0aW9uJyk7XG5cdHZhciBtZWRpYSA9IHJlcXVpcmUoJy4vbWVkaWEnKTtcblx0dmFyIG1vZGFsID0gcmVxdWlyZSgnLi9tb2RhbCcpO1xuXHR2YXIgcmVjb3JkZXIgPSByZXF1aXJlKCcuL3JlY29yZGVyJyk7XG5cdHZhciBuZXR3b3JrID0gcmVxdWlyZSgnLi9uZXR3b3JrJyk7XG5cdHZhciBzZW5zb3IgPSByZXF1aXJlKCcuL3NlbnNvcicpO1xuXHR2YXIgZGV2aWNlID0gcmVxdWlyZSgnLi9kZXZpY2UnKTtcblx0dmFyIG5hdmlnYXRvciA9IHJlcXVpcmUoJy4vbmF2aWdhdG9yJyk7XG5cblx0Ly8gY2FtZXJhXG5cdGlmIChjYW1lcmEpIHtcblx0XHROYXQuY2FtZXJhID0gY2FtZXJhO1xuXHR9XG5cblx0Ly8gY29tbXVuaWNhdGlvblxuXHRpZiAoY29tbXVuaWNhdGlvbikge1xuXHRcdE5hdC5jYWxsID0gY29tbXVuaWNhdGlvbi5jYWxsO1xuXHRcdE5hdC5zbXMgPSBjb21tdW5pY2F0aW9uLnNtcztcblx0XHROYXQubWFpbCA9IGNvbW11bmljYXRpb24ubWFpbDtcblx0fVxuXG5cdC8vIGdlb2xvY2F0aW9uXG5cdGlmIChnZW9sb2NhdGlvbikge1xuXHRcdE5hdC5nZW9sb2NhdGlvbiA9IGdlb2xvY2F0aW9uO1xuXHR9XG5cblx0Ly8gbWVkaWFcblx0aWYgKG1lZGlhKSB7XG5cdFx0TmF0LmF1ZGlvID0gbWVkaWEuYXVkaW87XG5cdFx0TmF0LmltYWdlID0gbWVkaWEuaW1hZ2U7XG5cdFx0TmF0LnZpZGVvID0gbWVkaWEudmlkZW87XG5cdH1cblxuXHQvLyByZWNvcmRlclxuXHRpZiAocmVjb3JkZXIpIHtcblx0XHROYXQucmVjb3JkZXIgPSByZWNvcmRlcjtcblx0fVxuXG5cdC8vIG1vZGFsXG5cdGlmIChtb2RhbCkge1xuXHRcdE5hdC5hbGVydCA9IG1vZGFsLmFsZXJ0O1xuXHRcdE5hdC5jb25maXJtID0gbW9kYWwuY29uZmlybTtcblx0XHROYXQucHJvbXB0ID0gbW9kYWwucHJvbXB0O1xuXHRcdE5hdC50b2FzdCA9IG1vZGFsLnRvYXN0O1xuXHR9XG5cblx0Ly8gbmV0d29ya1xuXHRpZiAobmV0d29yaykge1xuXHRcdE5hdC5mZXRjaCA9IG5ldHdvcmsuc3RyZWFtLmZldGNoO1xuXHRcdE5hdC5kb3dubG9hZCA9IG5ldHdvcmsudHJhbnNmZXIuZG93bmxvYWQ7XG5cdFx0TmF0LnVwbG9hZCA9IG5ldHdvcmsudHJhbnNmZXIudXBsb2FkO1xuXHRcdE5hdC53ZWJzb2NrZXQgPSBuZXR3b3JrLndlYnNvY2tldDtcblx0fVxuXG5cdC8vIHNlbnNvclxuXHRpZiAoc2Vuc29yKSB7XG5cdFx0TmF0LmFjY2VsZXJvbWV0ZXIgPSBzZW5zb3IuYWNjZWxlcm9tZXRlcjtcblx0XHROYXQuY29tcGFzcyA9IHNlbnNvci5jb21wYXNzO1xuXHR9XG5cblx0Ly8gZGV2aWNlXG5cdGlmIChkZXZpY2UpIHtcblx0XHROYXQuZGV2aWNlID0gZGV2aWNlLmJhc2U7XG5cdFx0TmF0LmJhdHRlcnkgPSBkZXZpY2UuYmF0dGVyeTtcblx0XHROYXQubmV0d29yayA9IGRldmljZS5uZXR3b3JrO1xuXHRcdE5hdC5zY3JlZW4gPSBkZXZpY2Uuc2NyZWVuO1xuXHRcdE5hdC52aWJyYXRlID0gZGV2aWNlLnZpYnJhdGlvbi52aWJyYXRlO1xuXHRcdE5hdC52b2x1bWUgPSBkZXZpY2Uudm9sdW1lO1xuXHR9XG5cblx0Ly8gbmF2aWdhdG9yXG5cdGlmIChuYXZpZ2F0b3IpIHtcblx0XHROYXQubmF2aWdhdG9yID0gbmF2aWdhdG9yO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTmF0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LW5hdC9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDMwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY2FtZXJhID0gdm9pZCAwO1xuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LXRlbXAveCcsIGZ1bmN0aW9uIChfX3dlZXhfcmVxdWlyZV9fKSB7XG5cdGNhbWVyYSA9IF9fd2VleF9yZXF1aXJlX18oJ0B3ZWV4LW1vZHVsZS9uYXQvY2FtZXJhJyk7XG59KTtcblxuLy8gbGF1bmNoXG5cbnZhciBsYXVuY2ggPSBmdW5jdGlvbiBsYXVuY2gob3B0cykge1xuXHRjYW1lcmEubGF1bmNoKCk7XG59O1xuXG4vLyBjYXB0dXJlSW1hZ2UgKHNuYXApXG5cbnZhciBjYXB0dXJlSW1hZ2UgPSBmdW5jdGlvbiBjYXB0dXJlSW1hZ2Uob3B0cywgY2IpIHtcblx0b3B0cyA9IG9wdHMgfHwge307XG5cblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRjYW1lcmEuY2FwdHVyZUltYWdlKHtcblx0XHRcdHdpZHRoOiBvcHRzLndpZHRoIHx8IG51bGwsXG5cdFx0XHRoZWlnaHQ6IG9wdHMuaGVpZ2h0IHx8IG51bGxcblx0XHR9LCBmdW5jdGlvbiAocmV0KSB7XG5cdFx0XHRyZXQgPSByZXQgfHwge307XG5cblx0XHRcdGlmIChyZXQuZXJyb3IpIHtcblx0XHRcdFx0cmVqZWN0KHJldC5lcnJvcik7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHJldC5lcnJvciwgbnVsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXNvbHZlKHJldCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKG51bGwsIHJldCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuLy8gY2FwdHVyZVZpZGVvIChyZWNvcmQpXG5cbnZhciBjYXB0dXJlVmlkZW8gPSBmdW5jdGlvbiBjYXB0dXJlVmlkZW8ob3B0cywgY2IpIHtcblx0b3B0cyA9IG9wdHMgfHwge307XG5cblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRjYW1lcmEuY2FwdHVyZVZpZGVvKHtcblx0XHRcdHdpZHRoOiBvcHRzLndpZHRoIHx8IG51bGwsXG5cdFx0XHRoZWlnaHQ6IG9wdHMuaGVpZ2h0IHx8IG51bGxcblx0XHR9LCBmdW5jdGlvbiAocmV0KSB7XG5cdFx0XHRyZXQgPSByZXQgfHwge307XG5cblx0XHRcdGlmIChyZXQuZXJyb3IpIHtcblx0XHRcdFx0cmVqZWN0KHJldC5lcnJvcik7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHJldC5lcnJvciwgbnVsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXNvbHZlKHJldCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKG51bGwsIHJldCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGxhdW5jaDogbGF1bmNoLFxuXHRjYXB0dXJlSW1hZ2U6IGNhcHR1cmVJbWFnZSxcblx0Y2FwdHVyZVZpZGVvOiBjYXB0dXJlVmlkZW9cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbmF0L2xpYi9jYW1lcmEvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDMwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxudmFyIF91dGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlscyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBjb21tdW5pY2F0aW9uID0gdm9pZCAwO1xuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LXRlbXAveCcsIGZ1bmN0aW9uIChfX3dlZXhfcmVxdWlyZV9fKSB7XG5cdGNvbW11bmljYXRpb24gPSBfX3dlZXhfcmVxdWlyZV9fKCdAd2VleC1tb2R1bGUvbmF0L2NvbW11bmljYXRpb24nKTtcbn0pO1xuXG4vLyBjYWxsXG5cbnZhciBjYWxsID0gZnVuY3Rpb24gY2FsbCh0bywgY2IpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRpZiAoIXRvKSB7XG5cdFx0XHRyZWplY3Qoe1xuXHRcdFx0XHRjb2RlOiAxMDEwNDAsXG5cdFx0XHRcdG1lc3NhZ2U6ICdDQUxMX01JU1NJTkdfQVJHVU1FTlQnXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybjtcblx0XHR9IGVsc2UgaWYgKCFfdXRpbHMyLmRlZmF1bHQuaXNQaG9uZSh0bykpIHtcblx0XHRcdHJlamVjdCh7XG5cdFx0XHRcdGNvZGU6IDEwMTA1MCxcblx0XHRcdFx0bWVzc2FnZTogJ0NBTExfSU5WQUxJRF9BUkdVTUVOVCcsXG5cdFx0XHRcdGRldGFpbHM6ICdJbnZhbGlkIHBob25lIG51bWJlcjogJyArIHRvXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb21tdW5pY2F0aW9uLmNhbGwodG8sIGZ1bmN0aW9uIChyZXQpIHtcblx0XHRcdHJldCA9IHJldCB8fCB7fTtcblxuXHRcdFx0aWYgKHJldC5lcnJvcikge1xuXHRcdFx0XHRyZWplY3QocmV0LmVycm9yKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IocmV0LmVycm9yLCBudWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IobnVsbCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuLy8gc21zXG5cbnZhciBzbXMgPSBmdW5jdGlvbiBzbXModG8sIHRleHQsIGNiKSB7XG5cdHRleHQgPSB0ZXh0IHx8ICcnO1xuXG5cdGlmICh0eXBlb2YgdGV4dCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGNiID0gdGV4dDtcblx0XHR0ZXh0ID0gJyc7XG5cdH1cblxuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdGlmICghdG8pIHtcblx0XHRcdHJlamVjdCh7XG5cdFx0XHRcdGNvZGU6IDEwMjA0MCxcblx0XHRcdFx0bWVzc2FnZTogJ1NNU19NSVNTSU5HX0FSR1VNRU5UJ1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiB0byA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHRvID0gW3RvXTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRvLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoIV91dGlsczIuZGVmYXVsdC5pc1Bob25lKHRvW2ldKSkge1xuXHRcdFx0XHRyZWplY3Qoe1xuXHRcdFx0XHRcdGNvZGU6IDEwMjA1MCxcblx0XHRcdFx0XHRtZXNzYWdlOiAnU01TX0lOVkFMSURfQVJHVU1FTlQnXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29tbXVuaWNhdGlvbi5zbXModG8sIHRleHQsIGZ1bmN0aW9uIChyZXQpIHtcblx0XHRcdHJldCA9IHJldCB8fCB7fTtcblxuXHRcdFx0aWYgKHJldC5lcnJvcikge1xuXHRcdFx0XHRyZWplY3QocmV0LmVycm9yKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IocmV0LmVycm9yLCBudWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IobnVsbCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuLy8gbWFpbFxuXG52YXIgbWFpbCA9IGZ1bmN0aW9uIG1haWwodG8sIG9wdHMsIGNiKSB7XG5cdG9wdHMgPSBvcHRzIHx8IHt9O1xuXG5cdGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGNiID0gb3B0cztcblx0XHRvcHRzID0ge307XG5cdH1cblxuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdGlmICghdG8pIHtcblx0XHRcdHJlamVjdCh7XG5cdFx0XHRcdGNvZGU6IDEwMzA0MCxcblx0XHRcdFx0bWVzc2FnZTogJ01BSUxfTUlTU0lOR19BUkdVTUVOVCdcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlb2YgdG8gPT09ICdzdHJpbmcnKSB7XG5cdFx0XHR0byA9IFt0b107XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0by5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKCFfdXRpbHMyLmRlZmF1bHQuaXNFbWFpbCh0b1tpXSkpIHtcblx0XHRcdFx0cmVqZWN0KHtcblx0XHRcdFx0XHRjb2RlOiAxMDMwNTAsXG5cdFx0XHRcdFx0bWVzc2FnZTogJ01BSUxfSU5WQUxJRF9BUkdVTUVOVCcsXG5cdFx0XHRcdFx0ZGV0YWlsczogJ0ludmFsaWQgZW1haWxsIGFkZHJlc3M6ICcgKyB0b1tpXVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbW11bmljYXRpb24ubWFpbCh0bywge1xuXHRcdFx0c3ViamVjdDogb3B0cy5zdWJqZWN0IHx8ICcnLFxuXHRcdFx0Ym9keTogb3B0cy5ib2R5IHx8ICcnLFxuXHRcdFx0YXR0YWNobWVudHM6IG9wdHMuYXR0YWNobWVudHMgfHwgbnVsbFxuXHRcdH0sIGZ1bmN0aW9uIChyZXQpIHtcblx0XHRcdHJldCA9IHJldCB8fCB7fTtcblxuXHRcdFx0aWYgKHJldC5lcnJvcikge1xuXHRcdFx0XHRyZWplY3QocmV0LmVycm9yKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IocmV0LmVycm9yLCBudWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IobnVsbCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGNhbGw6IGNhbGwsXG5cdHNtczogc21zLFxuXHRtYWlsOiBtYWlsXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LW5hdC9saWIvY29tbXVuaWNhdGlvbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMzAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc0ZuID0gZnVuY3Rpb24gaXNGbihmbikge1xuXHRyZXR1cm4gdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nO1xufTtcblxudmFyIGlzUGhvbmUgPSBmdW5jdGlvbiBpc1Bob25lKHN0cikge1xuXHRpZiAodHlwZW9mIHN0ciA9PT0gJ251bWJlcicpIHtcblx0XHRzdHIgPSBzdHIudG9TdHJpbmcoKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiAhIXN0ci5tYXRjaCgvXlxcKz9bXFxkXFwtXFwjXFwqXFwuXFwoXFwpXSskLyk7XG59O1xuXG52YXIgaXNFbWFpbCA9IGZ1bmN0aW9uIGlzRW1haWwoc3RyKSB7XG5cdGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiAhIXN0ci5tYXRjaCgvXihcXHcpKyhbXFwuXFwtXFxfXVxcdyspKkAoXFx3KSsoKFtcXC5cXC1cXF9dXFx3KykrKSQvKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRpc0ZuOiBpc0ZuLFxuXHRpc1Bob25lOiBpc1Bob25lLFxuXHRpc0VtYWlsOiBpc0VtYWlsXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LW5hdC9saWIvdXRpbHMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDMwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZ2VvbG9jYXRpb24gPSB2b2lkIDA7XG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtdGVtcC94JywgZnVuY3Rpb24gKF9fd2VleF9yZXF1aXJlX18pIHtcblx0Z2VvbG9jYXRpb24gPSBfX3dlZXhfcmVxdWlyZV9fKCdAd2VleC1tb2R1bGUvbmF0L2dlb2xvY2F0aW9uJyk7XG59KTtcblxuLy8gZ2V0XG52YXIgZ2V0ID0gZnVuY3Rpb24gZ2V0KG9wdHMsIGNiKSB7XG5cdGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGNiID0gb3B0cztcblx0XHRvcHRzID0ge307XG5cdH1cblxuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdGdlb2xvY2F0aW9uLmdldChmdW5jdGlvbiAocmV0KSB7XG5cdFx0XHRyZXQgPSByZXQgfHwge307XG5cblx0XHRcdGlmIChyZXQuZXJyb3IpIHtcblx0XHRcdFx0cmVqZWN0KHJldC5lcnJvcik7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHJldC5lcnJvciwgbnVsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXNvbHZlKHJldCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKG51bGwsIHJldCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuLy8gd2F0Y2hcblxudmFyIHdhdGNoID0gZnVuY3Rpb24gd2F0Y2gob3B0cywgY2IpIHtcblx0aWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0Y2IgPSBvcHRzO1xuXHRcdG9wdHMgPSB7fTtcblx0fVxuXG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0Z2VvbG9jYXRpb24ud2F0Y2goe1xuXHRcdFx0bWF4aW11bUFnZTogb3B0cy5tYXhpbXVtQWdlIHx8IDAsXG5cdFx0XHR0aW1lb3V0OiBvcHRzLnRpbWVvdXQgfHwgMTAwMDAsXG5cdFx0XHRtb2RlbDogb3B0cy5tb2RlbCB8fCAnaGlnaEFjY3VyYWN5J1xuXHRcdH0sIGZ1bmN0aW9uIChyZXQpIHtcblx0XHRcdHJldCA9IHJldCB8fCB7fTtcblxuXHRcdFx0aWYgKHJldC5lcnJvcikge1xuXHRcdFx0XHRyZWplY3QocmV0LmVycm9yKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IocmV0LmVycm9yLCBudWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc29sdmUocmV0KTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IobnVsbCwgcmV0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59O1xuXG4vLyBjbGVhciB3YXRjaFxuXG52YXIgY2xlYXJXYXRjaCA9IGZ1bmN0aW9uIGNsZWFyV2F0Y2goY2IpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRnZW9sb2NhdGlvbi5jbGVhcldhdGNoKGZ1bmN0aW9uIChyZXQpIHtcblx0XHRcdHJldCA9IHJldCB8fCB7fTtcblxuXHRcdFx0aWYgKHJldC5lcnJvcikge1xuXHRcdFx0XHRyZWplY3QocmV0LmVycm9yKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IocmV0LmVycm9yLCBudWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc29sdmUocmV0KTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IobnVsbCwgcmV0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0Z2V0OiBnZXQsXG5cdHdhdGNoOiB3YXRjaCxcblx0Y2xlYXJXYXRjaDogY2xlYXJXYXRjaFxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1uYXQvbGliL2dlb2xvY2F0aW9uL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAzMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9hdWRpbyA9IHJlcXVpcmUoJy4vYXVkaW8nKTtcblxudmFyIF9hdWRpbzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hdWRpbyk7XG5cbnZhciBfaW1hZ2UgPSByZXF1aXJlKCcuL2ltYWdlJyk7XG5cbnZhciBfaW1hZ2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW1hZ2UpO1xuXG52YXIgX3ZpZGVvID0gcmVxdWlyZSgnLi92aWRlbycpO1xuXG52YXIgX3ZpZGVvMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZpZGVvKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGF1ZGlvOiBfYXVkaW8yLmRlZmF1bHQsXG5cdGltYWdlOiBfaW1hZ2UyLmRlZmF1bHQsXG5cdHZpZGVvOiBfdmlkZW8yLmRlZmF1bHRcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbmF0L2xpYi9tZWRpYS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMzAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBhdWRpbyA9IHZvaWQgMDtcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC10ZW1wL3gnLCBmdW5jdGlvbiAoX193ZWV4X3JlcXVpcmVfXykge1xuXHRhdWRpbyA9IF9fd2VleF9yZXF1aXJlX18oJ0B3ZWV4LW1vZHVsZS9uYXQvbWVkaWEvYXVkaW8nKTtcbn0pO1xuXG4vLyBwbGF5XG52YXIgcGxheSA9IGZ1bmN0aW9uIHBsYXkocGF0aCwgY2IpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRpZiAoIXBhdGgpIHtcblx0XHRcdHJlamVjdCh7XG5cdFx0XHRcdGNvZGU6IDExMDA0MCxcblx0XHRcdFx0bWVzc2FnZTogJ01FRElBX01JU1NJTkdfQVJHVU1FTlQnXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRhdWRpby5wbGF5KHBhdGgsIGZ1bmN0aW9uIChyZXQpIHtcblx0XHRcdHJldCA9IHJldCB8fCB7fTtcblxuXHRcdFx0aWYgKHJldC5lcnJvcikge1xuXHRcdFx0XHRyZWplY3QocmV0LmVycm9yKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IocmV0LmVycm9yLCBudWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IobnVsbCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuLy8gcGF1c2VcblxudmFyIHBhdXNlID0gZnVuY3Rpb24gcGF1c2UoY2IpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRhdWRpby5wYXVzZShmdW5jdGlvbiAocmV0KSB7XG5cdFx0XHRyZXQgPSByZXQgfHwge307XG5cblx0XHRcdGlmIChyZXQuZXJyb3IpIHtcblx0XHRcdFx0cmVqZWN0KHJldC5lcnJvcik7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHJldC5lcnJvciwgbnVsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKG51bGwpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbi8vIHN0b3BcblxudmFyIHN0b3AgPSBmdW5jdGlvbiBzdG9wKGNiKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0YXVkaW8uc3RvcChmdW5jdGlvbiAocmV0KSB7XG5cdFx0XHRyZXQgPSByZXQgfHwge307XG5cblx0XHRcdGlmIChyZXQuZXJyb3IpIHtcblx0XHRcdFx0cmVqZWN0KHJldC5lcnJvcik7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHJldC5lcnJvciwgbnVsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKG51bGwpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRwbGF5OiBwbGF5LFxuXHRwYXVzZTogcGF1c2UsXG5cdHN0b3A6IHN0b3Bcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbmF0L2xpYi9tZWRpYS9hdWRpby9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMzAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbWFnZSA9IHZvaWQgMDtcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC10ZW1wL3gnLCBmdW5jdGlvbiAoX193ZWV4X3JlcXVpcmVfXykge1xuXHRpbWFnZSA9IF9fd2VleF9yZXF1aXJlX18oJ0B3ZWV4LW1vZHVsZS9uYXQvbWVkaWEvaW1hZ2UnKTtcbn0pO1xuXG4vLyBwaWNrXG52YXIgcGljayA9IGZ1bmN0aW9uIHBpY2sob3B0cywgY2IpIHtcblx0b3B0cyA9IG9wdHMgfHwge307XG5cblx0aWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0Y2IgPSBvcHRzO1xuXHRcdG9wdHMgPSB7fTtcblx0fVxuXG5cdG9wdHMubGltaXQgPSBvcHRzLmxpbWl0IHx8IDE7XG5cdG9wdHMucXVhbGl0eSA9IG9wdHMucXVhbGl0eSAmJiBvcHRzLnF1YWxpdHkgPCAxMDAgPyBwYXJzZUludChvcHRzLnF1YWxpdHkpIDogMTAwO1xuXG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0aW1hZ2UucGljayh7XG5cdFx0XHRsaW1pdDogb3B0cy5saW1pdCxcblx0XHRcdHF1YWxpdHk6IG9wdHMucXVhbGl0eSxcblx0XHRcdHdpZHRoOiBvcHRzLndpZHRoIHx8IG51bGwsXG5cdFx0XHRoZWlnaHQ6IG9wdHMuaGVpZ2h0IHx8IG51bGxcblx0XHR9LCBmdW5jdGlvbiAocmV0KSB7XG5cdFx0XHRyZXQgPSByZXQgfHwge307XG5cblx0XHRcdGlmIChyZXQuZXJyb3IpIHtcblx0XHRcdFx0cmVqZWN0KHJldC5lcnJvcik7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHJldC5lcnJvciwgbnVsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXNvbHZlKHJldCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKG51bGwsIHJldCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuLy8gcHJldmlld1xuXG52YXIgcHJldmlldyA9IGZ1bmN0aW9uIHByZXZpZXcoZmlsZXMsIG9wdHMsIGNiKSB7XG5cdG9wdHMgPSBvcHRzIHx8IHt9O1xuXG5cdGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGNiID0gb3B0cztcblx0XHRvcHRzID0ge307XG5cdH1cblxuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdGlmICghZmlsZXMpIHtcblx0XHRcdHJlamVjdCh7XG5cdFx0XHRcdGNvZGU6IDExMDA0MCxcblx0XHRcdFx0bWVzc2FnZTogJ01FRElBX01JU1NJTkdfQVJHVU1FTlQnXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mIGZpbGVzID09PSAnc3RyaW5nJykge1xuXHRcdFx0ZmlsZXMgPSBbZmlsZXNdO1xuXHRcdH1cblxuXHRcdC8vIHN0eWxlXG5cdFx0aWYgKFsnZG90cycsICdsYWJlbCcsICdub25lJ10uaW5kZXhPZihvcHRzLnN0eWxlKSA8IDApIHtcblx0XHRcdG9wdHMuc3R5bGUgPSAnZG90cyc7XG5cdFx0fVxuXG5cdFx0aWYgKG9wdHMuc3R5bGUgPT09ICdkb3RzJykge1xuXHRcdFx0aWYgKGZpbGVzLmxlbmd0aCA+IDkpIHtcblx0XHRcdFx0b3B0cy5zdHlsZSA9ICdsYWJlbCc7XG5cdFx0XHR9IGVsc2UgaWYgKGZpbGVzLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRvcHRzLnN0eWxlID0gJ25vbmUnO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGltYWdlLnByZXZpZXcoZmlsZXMsIHtcblx0XHRcdGN1cnJlbnQ6IG9wdHMuY3VycmVudCxcblx0XHRcdHN0eWxlOiBvcHRzLnN0eWxlXG5cdFx0fSwgZnVuY3Rpb24gKHJldCkge1xuXHRcdFx0cmV0ID0gcmV0IHx8IHt9O1xuXG5cdFx0XHRpZiAocmV0LmVycm9yKSB7XG5cdFx0XHRcdHJlamVjdChyZXQuZXJyb3IpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihyZXQuZXJyb3IsIG51bGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihudWxsKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59O1xuXG4vLyBpbmZvXG5cbnZhciBpbmZvID0gZnVuY3Rpb24gaW5mbyhwYXRoLCBjYikge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdGlmICghcGF0aCkge1xuXHRcdFx0cmVqZWN0KHtcblx0XHRcdFx0Y29kZTogMTEwMDQwLFxuXHRcdFx0XHRtZXNzYWdlOiAnTUVESUFfTUlTU0lOR19BUkdVTUVOVCdcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGltYWdlLmluZm8ocGF0aCwgZnVuY3Rpb24gKHJldCkge1xuXHRcdFx0cmV0ID0gcmV0IHx8IHt9O1xuXG5cdFx0XHRpZiAocmV0LmVycm9yKSB7XG5cdFx0XHRcdHJlamVjdChyZXQuZXJyb3IpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihyZXQuZXJyb3IsIG51bGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzb2x2ZShyZXQpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihudWxsLCByZXQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbi8vIGV4aWZcblxudmFyIGV4aWYgPSBmdW5jdGlvbiBleGlmKHBhdGgsIGNiKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0aWYgKCFwYXRoKSB7XG5cdFx0XHRyZWplY3Qoe1xuXHRcdFx0XHRjb2RlOiAxMTAwNDAsXG5cdFx0XHRcdG1lc3NhZ2U6ICdNRURJQV9NSVNTSU5HX0FSR1VNRU5UJ1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aW1hZ2UuZXhpZihwYXRoLCBmdW5jdGlvbiAocmV0KSB7XG5cdFx0XHRyZXQgPSByZXQgfHwge307XG5cblx0XHRcdGlmIChyZXQuZXJyb3IpIHtcblx0XHRcdFx0cmVqZWN0KHJldC5lcnJvcik7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHJldC5lcnJvciwgbnVsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXNvbHZlKHJldCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKG51bGwsIHJldCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHBpY2s6IHBpY2ssXG5cdHByZXZpZXc6IHByZXZpZXcsXG5cdGluZm86IGluZm8sXG5cdGV4aWY6IGV4aWZcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbmF0L2xpYi9tZWRpYS9pbWFnZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMzAiLCIndXNlIHN0cmljdCc7XG5cbnZhciB2aWRlbyA9IHZvaWQgMDtcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC10ZW1wL3gnLCBmdW5jdGlvbiAoX193ZWV4X3JlcXVpcmVfXykge1xuXHR2aWRlbyA9IF9fd2VleF9yZXF1aXJlX18oJ0B3ZWV4LW1vZHVsZS9uYXQvbWVkaWEvdmlkZW8nKTtcbn0pO1xuXG4vLyBwbGF5XG52YXIgcGxheSA9IGZ1bmN0aW9uIHBsYXkocGF0aCwgY2IpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRpZiAoIXBhdGgpIHtcblx0XHRcdHJlamVjdCh7XG5cdFx0XHRcdGNvZGU6IDExMDA0MCxcblx0XHRcdFx0bWVzc2FnZTogJ01FRElBX01JU1NJTkdfQVJHVU1FTlQnXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2aWRlby5wbGF5KHBhdGgsIGZ1bmN0aW9uIChyZXQpIHtcblx0XHRcdHJldCA9IHJldCB8fCB7fTtcblxuXHRcdFx0aWYgKHJldC5lcnJvcikge1xuXHRcdFx0XHRyZWplY3QocmV0LmVycm9yKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IocmV0LmVycm9yLCBudWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IobnVsbCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuLy8gcGF1c2VcblxudmFyIHBhdXNlID0gZnVuY3Rpb24gcGF1c2UoY2IpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHR2aWRlby5wYXVzZShmdW5jdGlvbiAocmV0KSB7XG5cdFx0XHRyZXQgPSByZXQgfHwge307XG5cblx0XHRcdGlmIChyZXQuZXJyb3IpIHtcblx0XHRcdFx0cmVqZWN0KHJldC5lcnJvcik7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHJldC5lcnJvciwgbnVsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKG51bGwpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbi8vIHN0b3BcblxudmFyIHN0b3AgPSBmdW5jdGlvbiBzdG9wKGNiKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0dmlkZW8uc3RvcChmdW5jdGlvbiAocmV0KSB7XG5cdFx0XHRyZXQgPSByZXQgfHwge307XG5cblx0XHRcdGlmIChyZXQuZXJyb3IpIHtcblx0XHRcdFx0cmVqZWN0KHJldC5lcnJvcik7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHJldC5lcnJvciwgbnVsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKG51bGwpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRwbGF5OiBwbGF5LFxuXHRwYXVzZTogcGF1c2UsXG5cdHN0b3A6IHN0b3Bcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbmF0L2xpYi9tZWRpYS92aWRlby9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMzAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBtb2RhbCA9IHZvaWQgMDtcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC10ZW1wL3gnLCBmdW5jdGlvbiAoX193ZWV4X3JlcXVpcmVfXykge1xuXHRtb2RhbCA9IF9fd2VleF9yZXF1aXJlX18oJ0B3ZWV4LW1vZHVsZS9uYXQvbW9kYWwnKTtcbn0pO1xuXG4vLyBhbGVydFxuXG52YXIgYWxlcnQgPSBmdW5jdGlvbiBhbGVydChvcHRzLCBjYikge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdGlmICh0eXBlb2Ygb3B0cyA9PT0gJ3N0cmluZycpIHtcblx0XHRcdG9wdHMgPSB7XG5cdFx0XHRcdG1lc3NhZ2U6IG9wdHNcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0b3B0cyA9IG9wdHMgfHwge307XG5cblx0XHRtb2RhbC5hbGVydCh7XG5cdFx0XHR0aXRsZTogb3B0cy50aXRsZSB8fCAnJyxcblx0XHRcdG1lc3NhZ2U6IG9wdHMubWVzc2FnZSB8fCAnJyxcblx0XHRcdG9rQnV0dG9uOiBvcHRzLm9rQnV0dG9uIHx8ICdPSydcblx0XHR9LCBmdW5jdGlvbiAocmV0KSB7XG5cdFx0XHRyZXQgPSByZXQgfHwge307XG5cblx0XHRcdGlmIChyZXQuZXJyb3IpIHtcblx0XHRcdFx0cmVqZWN0KHJldC5lcnJvcik7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHJldC5lcnJvciwgbnVsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKG51bGwpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbi8vIGNvbmZpcm1cblxudmFyIGNvbmZpcm0gPSBmdW5jdGlvbiBjb25maXJtKG9wdHMsIGNiKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0aWYgKHR5cGVvZiBvcHRzID09PSAnc3RyaW5nJykge1xuXHRcdFx0b3B0cyA9IHtcblx0XHRcdFx0bWVzc2FnZTogb3B0c1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRvcHRzID0gb3B0cyB8fCB7fTtcblxuXHRcdG1vZGFsLmNvbmZpcm0oe1xuXHRcdFx0dGl0bGU6IG9wdHMudGl0bGUgfHwgJycsXG5cdFx0XHRtZXNzYWdlOiBvcHRzLm1lc3NhZ2UgfHwgJycsXG5cdFx0XHRva0J1dHRvbjogb3B0cy5va0J1dHRvbiB8fCAnT0snLFxuXHRcdFx0Y2FuY2VsQnV0dG9uOiBvcHRzLmNhbmNlbEJ1dHRvbiB8fCAnQ2FuY2VsJ1xuXHRcdH0sIGZ1bmN0aW9uIChyZXQpIHtcblx0XHRcdHJldCA9IHJldCB8fCB7fTtcblxuXHRcdFx0aWYgKHJldC5lcnJvcikge1xuXHRcdFx0XHRyZWplY3QocmV0LmVycm9yKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IocmV0LmVycm9yLCBudWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc29sdmUocmV0KTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IobnVsbCwgcmV0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59O1xuXG4vLyBwcm9tcHRcblxudmFyIHByb21wdCA9IGZ1bmN0aW9uIHByb21wdChvcHRzLCBjYikge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdGlmICh0eXBlb2Ygb3B0cyA9PT0gJ3N0cmluZycpIHtcblx0XHRcdG9wdHMgPSB7XG5cdFx0XHRcdG1lc3NhZ2U6IG9wdHNcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0b3B0cyA9IG9wdHMgfHwge307XG5cblx0XHRtb2RhbC5wcm9tcHQoe1xuXHRcdFx0dGl0bGU6IG9wdHMudGl0bGUgfHwgJycsXG5cdFx0XHRtZXNzYWdlOiBvcHRzLm1lc3NhZ2UgfHwgJycsXG5cdFx0XHR0ZXh0OiBvcHRzLnRleHQgfHwgJycsXG5cdFx0XHRva0J1dHRvbjogb3B0cy5va0J1dHRvbiB8fCAnT0snLFxuXHRcdFx0Y2FuY2VsQnV0dG9uOiBvcHRzLmNhbmNlbEJ1dHRvbiB8fCAnQ2FuY2VsJ1xuXHRcdH0sIGZ1bmN0aW9uIChyZXQpIHtcblx0XHRcdHJldCA9IHJldCB8fCB7fTtcblxuXHRcdFx0aWYgKHJldC5lcnJvcikge1xuXHRcdFx0XHRyZWplY3QocmV0LmVycm9yKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IocmV0LmVycm9yLCBudWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc29sdmUocmV0KTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IobnVsbCwgcmV0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59O1xuXG4vLyB0b2FzdFxuXG52YXIgdG9hc3QgPSBmdW5jdGlvbiB0b2FzdChvcHRzLCBjYikge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdGlmICh0eXBlb2Ygb3B0cyA9PT0gJ3N0cmluZycpIHtcblx0XHRcdG9wdHMgPSB7XG5cdFx0XHRcdG1lc3NhZ2U6IG9wdHNcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0b3B0cyA9IG9wdHMgfHwge307XG5cblx0XHQvLyBwb3NpdGlvblxuXHRcdGlmIChbJ3RvcCcsICdtaWRkbGUnLCAnYm90dG9tJ10uaW5kZXhPZihvcHRzLnBvc2l0aW9uKSA8IDApIHtcblx0XHRcdG9wdHMucG9zaXRpb24gPSAnYm90dG9tJztcblx0XHR9XG5cblx0XHRtb2RhbC50b2FzdCh7XG5cdFx0XHRtZXNzYWdlOiBvcHRzLm1lc3NhZ2UgfHwgJycsXG5cdFx0XHRkdXJhdGlvbjogb3B0cy5kdXJhdGlvbiB8fCAzMDAwLFxuXHRcdFx0cG9zaXRpb246IG9wdHMucG9zaXRpb25cblx0XHR9LCBmdW5jdGlvbiAocmV0KSB7XG5cdFx0XHRyZXQgPSByZXQgfHwge307XG5cblx0XHRcdGlmIChyZXQuZXJyb3IpIHtcblx0XHRcdFx0cmVqZWN0KHJldC5lcnJvcik7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHJldC5lcnJvciwgbnVsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKG51bGwpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRhbGVydDogYWxlcnQsXG5cdGNvbmZpcm06IGNvbmZpcm0sXG5cdHByb21wdDogcHJvbXB0LFxuXHR0b2FzdDogdG9hc3Rcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbmF0L2xpYi9tb2RhbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMzAiLCIndXNlIHN0cmljdCc7XG5cbnZhciByZWNvcmRlciA9IHZvaWQgMDtcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC10ZW1wL3gnLCBmdW5jdGlvbiAoX193ZWV4X3JlcXVpcmVfXykge1xuXHRyZWNvcmRlciA9IF9fd2VleF9yZXF1aXJlX18oJ0B3ZWV4LW1vZHVsZS9uYXQvcmVjb3JkZXInKTtcbn0pO1xuXG4vLyBzdGFydFxudmFyIHN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQob3B0cywgY2IpIHtcblx0b3B0cyA9IG9wdHMgfHwge307XG5cblx0aWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0Y2IgPSBvcHRzO1xuXHRcdG9wdHMgPSB7fTtcblx0fVxuXG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0Ly8gY2hhbm5lbFxuXHRcdGlmIChbJ3N0ZXJlbycsICdtb25vJ10uaW5kZXhPZihvcHRzLmNoYW5uZWwpIDwgMCkge1xuXHRcdFx0b3B0cy5jaGFubmVsID0gJ3N0ZXJlbyc7XG5cdFx0fVxuXG5cdFx0Ly8gcXVhbGl0eVxuXHRcdGlmIChbJ2xvdycsICdzdGFuZGFyZCcsICdoaWdoJ10uaW5kZXhPZihvcHRzLnF1YWxpdHkpIDwgMCkge1xuXHRcdFx0b3B0cy5xdWFsaXR5ID0gJ3N0YW5kYXJkJztcblx0XHR9XG5cblx0XHRyZWNvcmRlci5zdGFydCh7XG5cdFx0XHRjaGFubmVsOiBvcHRzLmNoYW5uZWwsXG5cdFx0XHRxdWFsaXR5OiBvcHRzLnF1YWxpdHlcblx0XHR9LCBmdW5jdGlvbiAocmV0KSB7XG5cdFx0XHRyZXQgPSByZXQgfHwge307XG5cblx0XHRcdGlmIChyZXQuZXJyb3IpIHtcblx0XHRcdFx0cmVqZWN0KHJldC5lcnJvcik7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHJldC5lcnJvciwgbnVsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKG51bGwpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbi8vIHBhdXNlXG5cbnZhciBwYXVzZSA9IGZ1bmN0aW9uIHBhdXNlKGNiKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0cmVjb3JkZXIucGF1c2UoZnVuY3Rpb24gKHJldCkge1xuXHRcdFx0cmV0ID0gcmV0IHx8IHt9O1xuXG5cdFx0XHRpZiAocmV0LmVycm9yKSB7XG5cdFx0XHRcdHJlamVjdChyZXQuZXJyb3IpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihyZXQuZXJyb3IsIG51bGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihudWxsKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59O1xuXG4vLyBzdG9wXG5cbnZhciBzdG9wID0gZnVuY3Rpb24gc3RvcChjYikge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdHJlY29yZGVyLnN0b3AoZnVuY3Rpb24gKHJldCkge1xuXHRcdFx0cmV0ID0gcmV0IHx8IHt9O1xuXG5cdFx0XHRpZiAocmV0LmVycm9yKSB7XG5cdFx0XHRcdHJlamVjdChyZXQuZXJyb3IpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihyZXQuZXJyb3IsIG51bGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzb2x2ZShyZXQpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihudWxsLCByZXQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRzdGFydDogc3RhcnQsXG5cdHBhdXNlOiBwYXVzZSxcblx0c3RvcDogc3RvcFxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1uYXQvbGliL3JlY29yZGVyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxOThcbi8vIG1vZHVsZSBjaHVua3MgPSAzMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9zdHJlYW0gPSByZXF1aXJlKCcuL3N0cmVhbScpO1xuXG52YXIgX3N0cmVhbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHJlYW0pO1xuXG52YXIgX3RyYW5zZmVyID0gcmVxdWlyZSgnLi90cmFuc2ZlcicpO1xuXG52YXIgX3RyYW5zZmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZmVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gaW1wb3J0IHdlYnNvY2tldCBmcm9tICcuL3dlYnNvY2tldCdcbi8vIGltcG9ydCBpbmZvIGZyb20gJy4vaW5mbydcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHN0cmVhbTogX3N0cmVhbTIuZGVmYXVsdCxcblx0dHJhbnNmZXI6IF90cmFuc2ZlcjIuZGVmYXVsdFxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1uYXQvbGliL25ldHdvcmsvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDMwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBzdHJlYW0gPSB2b2lkIDA7XG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtdGVtcC94JywgZnVuY3Rpb24gKF9fd2VleF9yZXF1aXJlX18pIHtcblx0c3RyZWFtID0gX193ZWV4X3JlcXVpcmVfXygnQHdlZXgtbW9kdWxlL25hdC9uZXR3b3JrL3N0cmVhbScpO1xufSk7XG5cbi8vIGZldGNoXG5cbnZhciBmZXRjaCA9IGZ1bmN0aW9uIGZldGNoKHVybCwgb3B0cywgY2IpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRpZiAoIXVybCkge1xuXHRcdFx0cmVqZWN0KHtcblx0XHRcdFx0Y29kZTogMTUxMDQwLFxuXHRcdFx0XHRtZXNzYWdlOiAnRkVUQ0hfTUlTU0lOR19BUkdVTUVOVCdcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICgodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodXJsKSkgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRjYiA9IG9wdHM7XG5cdFx0XHRvcHRzID0gdXJsO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIG9wdHMgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGNiID0gb3B0cztcblx0XHRcdG9wdHMgPSB7XG5cdFx0XHRcdHVybDogdXJsXG5cdFx0XHR9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRvcHRzID0gb3B0cyB8fCB7fTtcblx0XHRcdG9wdHMudXJsID0gdXJsO1xuXHRcdH1cblxuXHRcdC8vIGhlYWRlcnNcblx0XHRvcHRzLmhlYWRlcnMgPSBvcHRzLmhlYWRlcnMgfHwge307XG5cblx0XHRpZiAob3B0cy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSAmJiAvYXBwbGljYXRpb25cXC9qc29uLy50ZXN0KG9wdHMuaGVhZGVyc1snQ29udGVudC1UeXBlJ10pKSB7XG5cdFx0XHRvcHRzLnR5cGUgPSAnanNvbic7XG5cdFx0fVxuXG5cdFx0Ly8gbWV0aG9kXG5cdFx0b3B0cy5tZXRob2QgPSBvcHRzLm1ldGhvZCA/IG9wdHMubWV0aG9kLnRvVXBwZXJDYXNlKCkgOiAnR0VUJztcblxuXHRcdGlmIChbJ0dFVCcsICdQT1NUJywgJ1BVVCcsICdQQVRDSCcsICdERUxFVEUnLCAnSEVBRCddLmluZGV4T2Yob3B0cy5tZXRob2QpIDwgMCkge1xuXHRcdFx0cmVqZWN0KHtcblx0XHRcdFx0Y29kZTogMTUxMDUwLFxuXHRcdFx0XHRtZXNzYWdlOiAnRkVUQ0hfSU5WQUxJRF9BUkdVTUVOVCcsXG5cdFx0XHRcdGRldGFpbHM6ICdVbnN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZCdcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIHR5cGVcblx0XHRvcHRzLnR5cGUgPSBvcHRzLnR5cGUgPyBvcHRzLnR5cGUudG9Mb3dlckNhc2UoKSA6ICdqc29uJztcblxuXHRcdGlmIChbJ2pzb24nLCAnanNvbnAnLCAndGV4dCddLmluZGV4T2Yob3B0cy50eXBlKSA8IDApIHtcblx0XHRcdHJlamVjdCh7XG5cdFx0XHRcdGNvZGU6IDE1MTA1MCxcblx0XHRcdFx0bWVzc2FnZTogJ0ZFVENIX0lOVkFMSURfQVJHVU1FTlQnLFxuXHRcdFx0XHRkZXRhaWxzOiAnVW5zdXBwb3J0ZWQgcmVxdWVzdCB0eXBlJ1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gYm9keVxuXHRcdGlmIChfdHlwZW9mKG9wdHMuYm9keSkgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRpZiAob3B0cy50eXBlID09PSAnanNvbicgJiYgb3B0cy5tZXRob2QgIT09ICdHRVQnKSB7XG5cdFx0XHRcdG9wdHMuYm9keSA9IEpTT04uc3RyaW5naWZ5KG9wdHMuYm9keSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZWplY3Qoe1xuXHRcdFx0XHRcdGNvZGU6IDE1MTA1MCxcblx0XHRcdFx0XHRtZXNzYWdlOiAnRkVUQ0hfSU5WQUxJRF9BUkdVTUVOVCcsXG5cdFx0XHRcdFx0ZGV0YWlsczogJ1JlcXVlc3QgYm9keSBtdXN0IGJlIGEgc3RyaW5nJ1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHN0cmVhbS5mZXRjaCh7XG5cdFx0XHRtZXRob2Q6IG9wdHMubWV0aG9kLFxuXHRcdFx0dXJsOiBvcHRzLnVybCxcblx0XHRcdGhlYWRlcnM6IG9wdHMuaGVhZGVycyxcblx0XHRcdHR5cGU6IG9wdHMudHlwZSxcblx0XHRcdGJvZHk6IG9wdHMuYm9keVxuXHRcdH0sIGZ1bmN0aW9uIChyZXQpIHtcblx0XHRcdHJldCA9IHJldCB8fCB7fTtcblxuXHRcdFx0aWYgKHJldC5lcnJvcikge1xuXHRcdFx0XHRyZWplY3QocmV0LmVycm9yKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IocmV0LmVycm9yLCBudWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChyZXQub2sgJiYgdHlwZW9mIHJldC5kYXRhID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdHN3aXRjaCAob3B0cy50eXBlKSB7XG5cdFx0XHRcdFx0XHRjYXNlICdqc29uJzpcblx0XHRcdFx0XHRcdFx0cmV0LmRhdGEgPSBKU09OLnBhcnNlKHJldC5kYXRhKTtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRcdGNhc2UgJ2pzb25wJzpcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHZhciBtYXRjaGVkID0gcmV0LmRhdGEubWF0Y2goL15cXHMqPy4qXFwoKC4qKVxcKVxccyo/JC8pO1xuXHRcdFx0XHRcdFx0XHRcdGlmIChtYXRjaGVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXQuZGF0YSA9IEpTT04ucGFyc2UobWF0Y2hlZFsxXSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJlc29sdmUocmV0KTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IobnVsbCwgcmV0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0ZmV0Y2g6IGZldGNoXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LW5hdC9saWIvbmV0d29yay9zdHJlYW0vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDIwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDMwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciB0cmFuc2ZlciA9IHZvaWQgMDtcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC10ZW1wL3gnLCBmdW5jdGlvbiAoX193ZWV4X3JlcXVpcmVfXykge1xuXHR0cmFuc2ZlciA9IF9fd2VleF9yZXF1aXJlX18oJ0B3ZWV4LW1vZHVsZS9uYXQvbmV0d29yay90cmFuc2ZlcicpO1xufSk7XG5cbi8vIGRvd25sb2FkXG5cbnZhciBkb3dubG9hZCA9IGZ1bmN0aW9uIGRvd25sb2FkKHVybCwgb3B0cywgaG9va3MsIGNiKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0aWYgKCF1cmwpIHtcblx0XHRcdHJlamVjdCh7XG5cdFx0XHRcdGNvZGU6IDE1MTA0MCxcblx0XHRcdFx0bWVzc2FnZTogJ0RPV05MT0FEX01JU1NJTkdfQVJHVU1FTlQnXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mIG9wdHMgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGNiID0gb3B0cztcblx0XHR9IGVsc2UgaWYgKCh0eXBlb2Ygb3B0cyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob3B0cykpID09PSAnb2JqZWN0Jykge1xuXHRcdFx0aWYgKHR5cGVvZiBob29rcyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRjYiA9IGhvb2tzO1xuXHRcdFx0fVxuXHRcdFx0Ly8gdG9kb1xuXHRcdFx0aWYgKHR5cGVvZiBvcHRzLm9uUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0aG9va3MgPSBvcHRzO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICgodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodXJsKSkgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRvcHRzID0gdXJsO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRvcHRzID0gb3B0cyB8fCB7fTtcblx0XHRcdG9wdHMudXJsID0gdXJsO1xuXHRcdH1cblxuXHRcdC8vIGhvb2tzXG5cdFx0aG9va3MgPSBob29rcyB8fCB7fTtcblxuXHRcdHRyYW5zZmVyLmRvd25sb2FkKHtcblx0XHRcdHVybDogb3B0cy51cmwsXG5cdFx0XHRoZWFkZXJzOiBvcHRzLmhlYWRlcnMgfHwge30sXG5cdFx0XHR0YXJnZXQ6IG9wdHMudGFyZ2V0XG5cdFx0fSwgZnVuY3Rpb24gKHJldCkge1xuXHRcdFx0cmV0ID0gcmV0IHx8IHt9O1xuXG5cdFx0XHRpZiAocmV0LmVycm9yKSB7XG5cdFx0XHRcdHJlamVjdChyZXQuZXJyb3IpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihyZXQuZXJyb3IsIG51bGwpO1xuXHRcdFx0fSBlbHNlIGlmIChyZXQucHJvZ3Jlc3MpIHtcblx0XHRcdFx0aWYgKHR5cGVvZiBob29rcy5vblByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0aG9va3Mub25Qcm9ncmVzcyhyZXQucHJvZ3Jlc3MpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXNvbHZlKHJldCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKG51bGwsIHJldCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuLy8gdXBsb2FkXG5cbnZhciB1cGxvYWQgPSBmdW5jdGlvbiB1cGxvYWQodXJsLCBvcHRzLCBob29rcywgY2IpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRpZiAoIXVybCkge1xuXHRcdFx0cmVqZWN0KHtcblx0XHRcdFx0Y29kZTogMTUxMDQwLFxuXHRcdFx0XHRtZXNzYWdlOiAnVVBMT0FEX01JU1NJTkdfQVJHVU1FTlQnXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mIG9wdHMgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGNiID0gb3B0cztcblx0XHR9IGVsc2UgaWYgKCh0eXBlb2Ygb3B0cyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob3B0cykpID09PSAnb2JqZWN0Jykge1xuXHRcdFx0aWYgKHR5cGVvZiBob29rcyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRjYiA9IGhvb2tzO1xuXHRcdFx0fVxuXHRcdFx0Ly8gdG9kb1xuXHRcdFx0aWYgKHR5cGVvZiBvcHRzLm9uUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0aG9va3MgPSBvcHRzO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICgodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodXJsKSkgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRvcHRzID0gdXJsO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRvcHRzID0gb3B0cyB8fCB7fTtcblx0XHRcdG9wdHMudXJsID0gdXJsO1xuXHRcdH1cblxuXHRcdC8vIGhvb2tzXG5cdFx0aG9va3MgPSBob29rcyB8fCB7fTtcblxuXHRcdC8vIHBhdGhcblx0XHRpZiAoIW9wdHMucGF0aCkge1xuXHRcdFx0cmVqZWN0KHtcblx0XHRcdFx0Y29kZTogMTUxMDQwLFxuXHRcdFx0XHRtZXNzYWdlOiAnVVBMT0FEX01JU1NJTkdfQVJHVU1FTlQnXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBtZXRob2Rcblx0XHRvcHRzLm1ldGhvZCA9IG9wdHMubWV0aG9kID8gb3B0cy5tZXRob2QudG9VcHBlckNhc2UoKSA6ICdQT1NUJztcblxuXHRcdGlmIChbJ1BPU1QnLCAnUFVUJywgJ1BBVENIJ10uaW5kZXhPZihvcHRzLm1ldGhvZCkgPCAwKSB7XG5cdFx0XHRyZWplY3Qoe1xuXHRcdFx0XHRjb2RlOiAxNTEwNTAsXG5cdFx0XHRcdG1lc3NhZ2U6ICdVUExPQURfSU5WQUxJRF9BUkdVTUVOVCcsXG5cdFx0XHRcdGRldGFpbHM6ICdVbnN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZCdcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRyYW5zZmVyLnVwbG9hZCh7XG5cdFx0XHR1cmw6IG9wdHMudXJsLFxuXHRcdFx0bWV0aG9kOiBvcHRzLm1ldGhvZCxcblx0XHRcdHBhdGg6IG9wdHMucGF0aCxcblx0XHRcdG5hbWU6IG9wdHMubmFtZSxcblx0XHRcdGhlYWRlcnM6IG9wdHMuaGVhZGVycyB8fCB7fSxcblx0XHRcdGZvcm1EYXRhOiBvcHRzLmZvcm1EYXRhIHx8IHt9LFxuXHRcdFx0bWltZVR5cGU6IG9wdHMubWltZVR5cGVcblx0XHR9LCBmdW5jdGlvbiAocmV0KSB7XG5cdFx0XHRyZXQgPSByZXQgfHwge307XG5cblx0XHRcdGlmIChyZXQuZXJyb3IpIHtcblx0XHRcdFx0cmVqZWN0KHJldC5lcnJvcik7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHJldC5lcnJvciwgbnVsbCk7XG5cdFx0XHR9IGVsc2UgaWYgKHJldC5wcm9ncmVzcykge1xuXHRcdFx0XHRpZiAodHlwZW9mIGhvb2tzLm9uUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRob29rcy5vblByb2dyZXNzKHJldC5wcm9ncmVzcyk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc29sdmUocmV0KTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IobnVsbCwgcmV0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0ZG93bmxvYWQ6IGRvd25sb2FkLFxuXHR1cGxvYWQ6IHVwbG9hZFxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1uYXQvbGliL25ldHdvcmsvdHJhbnNmZXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDIwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDMwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2FjY2VsZXJvbWV0ZXIgPSByZXF1aXJlKCcuL2FjY2VsZXJvbWV0ZXInKTtcblxudmFyIF9hY2NlbGVyb21ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FjY2VsZXJvbWV0ZXIpO1xuXG52YXIgX2NvbXBhc3MgPSByZXF1aXJlKCcuL2NvbXBhc3MnKTtcblxudmFyIF9jb21wYXNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBhc3MpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0YWNjZWxlcm9tZXRlcjogX2FjY2VsZXJvbWV0ZXIyLmRlZmF1bHQsXG5cdGNvbXBhc3M6IF9jb21wYXNzMi5kZWZhdWx0XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LW5hdC9saWIvc2Vuc29yL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAzMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFjY2VsZXJvbWV0ZXIgPSB2b2lkIDA7XG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtdGVtcC94JywgZnVuY3Rpb24gKF9fd2VleF9yZXF1aXJlX18pIHtcblx0YWNjZWxlcm9tZXRlciA9IF9fd2VleF9yZXF1aXJlX18oJ0B3ZWV4LW1vZHVsZS9uYXQvc2Vuc29yL2FjY2VsZXJvbWV0ZXInKTtcbn0pO1xuXG4vLyBnZXRcbnZhciBnZXQgPSBmdW5jdGlvbiBnZXQob3B0cywgY2IpIHtcblx0aWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0Y2IgPSBvcHRzO1xuXHRcdG9wdHMgPSB7fTtcblx0fVxuXG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0YWNjZWxlcm9tZXRlci5nZXQoZnVuY3Rpb24gKHJldCkge1xuXHRcdFx0cmV0ID0gcmV0IHx8IHt9O1xuXG5cdFx0XHRpZiAocmV0LmVycm9yKSB7XG5cdFx0XHRcdHJlamVjdChyZXQuZXJyb3IpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihyZXQuZXJyb3IsIG51bGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzb2x2ZShyZXQpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihudWxsLCByZXQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbi8vIHdhdGNoXG5cbnZhciB3YXRjaCA9IGZ1bmN0aW9uIHdhdGNoKG9wdHMsIGNiKSB7XG5cdGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGNiID0gb3B0cztcblx0XHRvcHRzID0ge307XG5cdH1cblxuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdGFjY2VsZXJvbWV0ZXIud2F0Y2goe1xuXHRcdFx0aW50ZXJ2YWw6IG9wdHMuaW50ZXJ2YWwgfHwgMTAwXG5cdFx0fSwgZnVuY3Rpb24gKHJldCkge1xuXHRcdFx0cmV0ID0gcmV0IHx8IHt9O1xuXG5cdFx0XHRpZiAocmV0LmVycm9yKSB7XG5cdFx0XHRcdHJlamVjdChyZXQuZXJyb3IpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihyZXQuZXJyb3IsIG51bGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzb2x2ZShyZXQpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihudWxsLCByZXQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbi8vIGNsZWFyIHdhdGNoXG5cbnZhciBjbGVhcldhdGNoID0gZnVuY3Rpb24gY2xlYXJXYXRjaChjYikge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdGFjY2VsZXJvbWV0ZXIuY2xlYXJXYXRjaChmdW5jdGlvbiAocmV0KSB7XG5cdFx0XHRyZXQgPSByZXQgfHwge307XG5cblx0XHRcdGlmIChyZXQuZXJyb3IpIHtcblx0XHRcdFx0cmVqZWN0KHJldC5lcnJvcik7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHJldC5lcnJvciwgbnVsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXNvbHZlKHJldCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKG51bGwsIHJldCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGdldDogZ2V0LFxuXHR3YXRjaDogd2F0Y2gsXG5cdGNsZWFyV2F0Y2g6IGNsZWFyV2F0Y2hcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbmF0L2xpYi9zZW5zb3IvYWNjZWxlcm9tZXRlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMzAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb21wYXNzID0gdm9pZCAwO1xuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LXRlbXAveCcsIGZ1bmN0aW9uIChfX3dlZXhfcmVxdWlyZV9fKSB7XG5cdGNvbXBhc3MgPSBfX3dlZXhfcmVxdWlyZV9fKCdAd2VleC1tb2R1bGUvbmF0L3NlbnNvci9jb21wYXNzJyk7XG59KTtcblxuLy8gZ2V0XG52YXIgZ2V0ID0gZnVuY3Rpb24gZ2V0KG9wdHMsIGNiKSB7XG5cdGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGNiID0gb3B0cztcblx0XHRvcHRzID0ge307XG5cdH1cblxuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdGNvbXBhc3MuZ2V0KGZ1bmN0aW9uIChyZXQpIHtcblx0XHRcdHJldCA9IHJldCB8fCB7fTtcblxuXHRcdFx0aWYgKHJldC5lcnJvcikge1xuXHRcdFx0XHRyZWplY3QocmV0LmVycm9yKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IocmV0LmVycm9yLCBudWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc29sdmUocmV0KTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IobnVsbCwgcmV0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59O1xuXG4vLyB3YXRjaFxuXG52YXIgd2F0Y2ggPSBmdW5jdGlvbiB3YXRjaChvcHRzLCBjYikge1xuXHRpZiAodHlwZW9mIG9wdHMgPT09ICdmdW5jdGlvbicpIHtcblx0XHRjYiA9IG9wdHM7XG5cdFx0b3B0cyA9IHt9O1xuXHR9XG5cblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRjb21wYXNzLndhdGNoKHtcblx0XHRcdGludGVydmFsOiBvcHRzLmludGVydmFsIHx8IDEwMFxuXHRcdH0sIGZ1bmN0aW9uIChyZXQpIHtcblx0XHRcdHJldCA9IHJldCB8fCB7fTtcblxuXHRcdFx0aWYgKHJldC5lcnJvcikge1xuXHRcdFx0XHRyZWplY3QocmV0LmVycm9yKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IocmV0LmVycm9yLCBudWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc29sdmUocmV0KTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IobnVsbCwgcmV0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59O1xuXG4vLyBjbGVhciB3YXRjaFxuXG52YXIgY2xlYXJXYXRjaCA9IGZ1bmN0aW9uIGNsZWFyV2F0Y2goY2IpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRjb21wYXNzLmNsZWFyV2F0Y2goZnVuY3Rpb24gKHJldCkge1xuXHRcdFx0cmV0ID0gcmV0IHx8IHt9O1xuXG5cdFx0XHRpZiAocmV0LmVycm9yKSB7XG5cdFx0XHRcdHJlamVjdChyZXQuZXJyb3IpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihyZXQuZXJyb3IsIG51bGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzb2x2ZShyZXQpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihudWxsLCByZXQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRnZXQ6IGdldCxcblx0d2F0Y2g6IHdhdGNoLFxuXHRjbGVhcldhdGNoOiBjbGVhcldhdGNoXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LW5hdC9saWIvc2Vuc29yL2NvbXBhc3MvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDIwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDMwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Jhc2UgPSByZXF1aXJlKCcuL2Jhc2UnKTtcblxudmFyIF9iYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Jhc2UpO1xuXG52YXIgX2JhdHRlcnkgPSByZXF1aXJlKCcuL2JhdHRlcnknKTtcblxudmFyIF9iYXR0ZXJ5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2JhdHRlcnkpO1xuXG52YXIgX25ldHdvcmsgPSByZXF1aXJlKCcuL25ldHdvcmsnKTtcblxudmFyIF9uZXR3b3JrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX25ldHdvcmspO1xuXG52YXIgX3NjcmVlbiA9IHJlcXVpcmUoJy4vc2NyZWVuJyk7XG5cbnZhciBfc2NyZWVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NjcmVlbik7XG5cbnZhciBfdmlicmF0aW9uID0gcmVxdWlyZSgnLi92aWJyYXRpb24nKTtcblxudmFyIF92aWJyYXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmlicmF0aW9uKTtcblxudmFyIF92b2x1bWUgPSByZXF1aXJlKCcuL3ZvbHVtZScpO1xuXG52YXIgX3ZvbHVtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92b2x1bWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0YmFzZTogX2Jhc2UyLmRlZmF1bHQsXG5cdGJhdHRlcnk6IF9iYXR0ZXJ5Mi5kZWZhdWx0LFxuXHRuZXR3b3JrOiBfbmV0d29yazIuZGVmYXVsdCxcblx0c2NyZWVuOiBfc2NyZWVuMi5kZWZhdWx0LFxuXHR2aWJyYXRpb246IF92aWJyYXRpb24yLmRlZmF1bHQsXG5cdHZvbHVtZTogX3ZvbHVtZTIuZGVmYXVsdFxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1uYXQvbGliL2RldmljZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMzAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBkZXZpY2UgPSB2b2lkIDA7XG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtdGVtcC94JywgZnVuY3Rpb24gKF9fd2VleF9yZXF1aXJlX18pIHtcblx0ZGV2aWNlID0gX193ZWV4X3JlcXVpcmVfXygnQHdlZXgtbW9kdWxlL25hdC9kZXZpY2UvYmFzZScpO1xufSk7XG5cbi8vIGluZm9cblxudmFyIGluZm8gPSBmdW5jdGlvbiBpbmZvKGNiKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0ZGV2aWNlLmluZm8oZnVuY3Rpb24gKHJldCkge1xuXHRcdFx0cmV0ID0gcmV0IHx8IHt9O1xuXG5cdFx0XHRpZiAocmV0LmVycm9yKSB7XG5cdFx0XHRcdHJlamVjdChyZXQuZXJyb3IpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihyZXQuZXJyb3IsIG51bGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzb2x2ZShyZXQpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihudWxsLCByZXQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRpbmZvOiBpbmZvXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LW5hdC9saWIvZGV2aWNlL2Jhc2UvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDIwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDMwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmF0dGVyeSA9IHZvaWQgMDtcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC10ZW1wL3gnLCBmdW5jdGlvbiAoX193ZWV4X3JlcXVpcmVfXykge1xuXHRiYXR0ZXJ5ID0gX193ZWV4X3JlcXVpcmVfXygnQHdlZXgtbW9kdWxlL25hdC9kZXZpY2UvYmF0dGVyeScpO1xufSk7XG5cbi8vIHN0YXR1c1xuXG52YXIgc3RhdHVzID0gZnVuY3Rpb24gc3RhdHVzKGNiKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0YmF0dGVyeS5zdGF0dXMoZnVuY3Rpb24gKHJldCkge1xuXHRcdFx0cmV0ID0gcmV0IHx8IHt9O1xuXG5cdFx0XHRpZiAocmV0LmVycm9yKSB7XG5cdFx0XHRcdHJlamVjdChyZXQuZXJyb3IpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihyZXQuZXJyb3IsIG51bGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzb2x2ZShyZXQpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihudWxsLCByZXQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRzdGF0dXM6IHN0YXR1c1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1uYXQvbGliL2RldmljZS9iYXR0ZXJ5L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAzMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIG5ldHdvcmsgPSB2b2lkIDA7XG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtdGVtcC94JywgZnVuY3Rpb24gKF9fd2VleF9yZXF1aXJlX18pIHtcblx0bmV0d29yayA9IF9fd2VleF9yZXF1aXJlX18oJ0B3ZWV4LW1vZHVsZS9uYXQvZGV2aWNlL25ldHdvcmsnKTtcbn0pO1xuXG4vLyBzdGF0dXNcblxudmFyIHN0YXR1cyA9IGZ1bmN0aW9uIHN0YXR1cyhjYikge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdG5ldHdvcmsuc3RhdHVzKGZ1bmN0aW9uIChyZXQpIHtcblx0XHRcdHJldCA9IHJldCB8fCB7fTtcblxuXHRcdFx0aWYgKHJldC5lcnJvcikge1xuXHRcdFx0XHRyZWplY3QocmV0LmVycm9yKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IocmV0LmVycm9yLCBudWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc29sdmUocmV0KTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IobnVsbCwgcmV0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0c3RhdHVzOiBzdGF0dXNcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbmF0L2xpYi9kZXZpY2UvbmV0d29yay9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMzAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBzY3JlZW4gPSB2b2lkIDA7XG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtdGVtcC94JywgZnVuY3Rpb24gKF9fd2VleF9yZXF1aXJlX18pIHtcblx0c2NyZWVuID0gX193ZWV4X3JlcXVpcmVfXygnQHdlZXgtbW9kdWxlL25hdC9kZXZpY2Uvc2NyZWVuJyk7XG59KTtcblxuLy8gYnJpZ2h0bmVzc1xuXG52YXIgYnJpZ2h0bmVzcyA9IHtcblx0Z2V0OiBmdW5jdGlvbiBnZXQoY2IpIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdFx0c2NyZWVuLmdldEJyaWdodG5lc3MoZnVuY3Rpb24gKHJldCkge1xuXHRcdFx0XHRyZXQgPSByZXQgfHwge307XG5cblx0XHRcdFx0aWYgKHJldC5lcnJvcikge1xuXHRcdFx0XHRcdHJlamVjdChyZXQuZXJyb3IpO1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHJldC5lcnJvciwgbnVsbCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVzb2x2ZShyZXQpO1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKG51bGwsIHJldCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9LFxuXG5cdHNldDogZnVuY3Rpb24gc2V0KGJyaWdodG5lc3MsIGNiKSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRcdHNjcmVlbi5zZXRCcmlnaHRuZXNzKGJyaWdodG5lc3MsIGZ1bmN0aW9uIChyZXQpIHtcblx0XHRcdFx0cmV0ID0gcmV0IHx8IHt9O1xuXG5cdFx0XHRcdGlmIChyZXQuZXJyb3IpIHtcblx0XHRcdFx0XHRyZWplY3QocmV0LmVycm9yKTtcblx0XHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihyZXQuZXJyb3IsIG51bGwpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJlc29sdmUocmV0KTtcblx0XHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihudWxsLCByZXQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxufTtcblxuLy8gb3JpZW50YXRpb25cblxudmFyIG9yaWVudGF0aW9uID0ge1xuXHRzdGF0dXM6IGZ1bmN0aW9uIHN0YXR1cyhjYikge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHRzY3JlZW4uZ2V0T3JpZW50YXRpb24oZnVuY3Rpb24gKHJldCkge1xuXHRcdFx0XHRyZXQgPSByZXQgfHwge307XG5cblx0XHRcdFx0aWYgKHJldC5lcnJvcikge1xuXHRcdFx0XHRcdHJlamVjdChyZXQuZXJyb3IpO1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHJldC5lcnJvciwgbnVsbCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVzb2x2ZShyZXQpO1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKG51bGwsIHJldCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9LFxuXG5cdGxvY2s6IGZ1bmN0aW9uIGxvY2sob3JpZW50YXRpb24sIGNiKSB7XG5cdFx0aWYgKHR5cGVvZiBvcmllbnRhdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Y2IgPSBvcmllbnRhdGlvbjtcblx0XHRcdG9yaWVudGF0aW9uID0ge307XG5cdFx0fVxuXG5cdFx0Ly8gb3JpZW50YXRpb25cblx0XHRpZiAoWydwb3J0cmFpdC1wcmltYXJ5JywgJ3BvcnRyYWl0LXNlY29uZGFyeScsICdsYW5kc2NhcGUtcHJpbWFyeScsICdsYW5kc2NhcGUtc2Vjb25kYXJ5JywgJ3BvcnRyYWl0JywgLy8gZWl0aGVyIHBvcnRyYWl0LXByaW1hcnkgb3IgcG9ydHJhaXQtc2Vjb25kYXJ5LlxuXHRcdCdsYW5kc2NhcGUnLCAvLyBlaXRoZXIgbGFuZHNjYXBlLXByaW1hcnkgb3IgbGFuZHNjYXBlLXNlY29uZGFyeS5cblx0XHQnYW55JyAvLyBBbGwgb3JpZW50YXRpb25zIGFyZSBzdXBwb3J0ZWQgKHVubG9ja2VkIG9yaWVudGF0aW9uKVxuXHRcdF0uaW5kZXhPZihvcmllbnRhdGlvbikgPCAwKSB7XG5cdFx0XHRvcmllbnRhdGlvbiA9ICdhbnknO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHRzY3JlZW4ubG9ja09yaWVudGF0aW9uKG9yaWVudGF0aW9uLCBmdW5jdGlvbiAocmV0KSB7XG5cdFx0XHRcdHJldCA9IHJldCB8fCB7fTtcblxuXHRcdFx0XHRpZiAocmV0LmVycm9yKSB7XG5cdFx0XHRcdFx0cmVqZWN0KHJldC5lcnJvcik7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IocmV0LmVycm9yLCBudWxsKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXNvbHZlKHJldCk7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IobnVsbCwgcmV0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0sXG5cblx0dW5sb2NrOiBmdW5jdGlvbiB1bmxvY2soY2IpIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdFx0c2NyZWVuLnVubG9ja09yaWVudGF0aW9uKGZ1bmN0aW9uIChyZXQpIHtcblx0XHRcdFx0cmV0ID0gcmV0IHx8IHt9O1xuXG5cdFx0XHRcdGlmIChyZXQuZXJyb3IpIHtcblx0XHRcdFx0XHRyZWplY3QocmV0LmVycm9yKTtcblx0XHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihyZXQuZXJyb3IsIG51bGwpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJlc29sdmUocmV0KTtcblx0XHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihudWxsLCByZXQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxufTtcblxuLy8gaW5mb1xuXG52YXIgaW5mbyA9IGZ1bmN0aW9uIGluZm8oY2IpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRzY3JlZW4uaW5mbyhmdW5jdGlvbiAocmV0KSB7XG5cdFx0XHRyZXQgPSByZXQgfHwge307XG5cblx0XHRcdGlmIChyZXQuZXJyb3IpIHtcblx0XHRcdFx0cmVqZWN0KHJldC5lcnJvcik7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHJldC5lcnJvciwgbnVsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXNvbHZlKHJldCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKG51bGwsIHJldCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGJyaWdodG5lc3M6IGJyaWdodG5lc3MsXG5cdG9yaWVudGF0aW9uOiBvcmllbnRhdGlvbixcblx0aW5mbzogaW5mb1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1uYXQvbGliL2RldmljZS9zY3JlZW4vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDIwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDMwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdmlicmF0aW9uID0gdm9pZCAwO1xuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LXRlbXAveCcsIGZ1bmN0aW9uIChfX3dlZXhfcmVxdWlyZV9fKSB7XG5cdHZpYnJhdGlvbiA9IF9fd2VleF9yZXF1aXJlX18oJ0B3ZWV4LW1vZHVsZS9uYXQvZGV2aWNlL3ZpYnJhdGlvbicpO1xufSk7XG5cbi8vIHZpYnJhdGVcblxudmFyIHZpYnJhdGUgPSBmdW5jdGlvbiB2aWJyYXRlKHRpbWUsIGNiKSB7XG5cdGlmICh0eXBlb2YgdGltZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGNiID0gdGltZTtcblx0XHR0aW1lID0ge307XG5cdH1cblxuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdHZpYnJhdGlvbi52aWJyYXRlKHRpbWUgfHwgNTAwLCBmdW5jdGlvbiAocmV0KSB7XG5cdFx0XHRyZXQgPSByZXQgfHwge307XG5cblx0XHRcdGlmIChyZXQuZXJyb3IpIHtcblx0XHRcdFx0cmVqZWN0KHJldC5lcnJvcik7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHJldC5lcnJvciwgbnVsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXNvbHZlKHJldCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKG51bGwsIHJldCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHZpYnJhdGU6IHZpYnJhdGVcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbmF0L2xpYi9kZXZpY2UvdmlicmF0aW9uL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAzMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHZvbHVtZSA9IHZvaWQgMDtcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC10ZW1wL3gnLCBmdW5jdGlvbiAoX193ZWV4X3JlcXVpcmVfXykge1xuXHR2b2x1bWUgPSBfX3dlZXhfcmVxdWlyZV9fKCdAd2VleC1tb2R1bGUvbmF0L2RldmljZS92b2x1bWUnKTtcbn0pO1xuXG4vLyBnZXRcblxudmFyIGdldCA9IGZ1bmN0aW9uIGdldChjYikge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdHZvbHVtZS5nZXQoZnVuY3Rpb24gKHJldCkge1xuXHRcdFx0cmV0ID0gcmV0IHx8IHt9O1xuXG5cdFx0XHRpZiAocmV0LmVycm9yKSB7XG5cdFx0XHRcdHJlamVjdChyZXQuZXJyb3IpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihyZXQuZXJyb3IsIG51bGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzb2x2ZShyZXQpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihudWxsLCByZXQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbi8vIHNldFxuXG52YXIgc2V0ID0gZnVuY3Rpb24gc2V0KHZvbCwgY2IpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHR2b2x1bWUuc2V0KHZvbCwgZnVuY3Rpb24gKHJldCkge1xuXHRcdFx0cmV0ID0gcmV0IHx8IHt9O1xuXG5cdFx0XHRpZiAocmV0LmVycm9yKSB7XG5cdFx0XHRcdHJlamVjdChyZXQuZXJyb3IpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihyZXQuZXJyb3IsIG51bGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzb2x2ZShyZXQpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihudWxsLCByZXQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRnZXQ6IGdldCxcblx0c2V0OiBzZXRcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbmF0L2xpYi9kZXZpY2Uvdm9sdW1lL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAzMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIG5hdmlnYXRvciA9IHZvaWQgMDtcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC10ZW1wL3gnLCBmdW5jdGlvbiAoX193ZWV4X3JlcXVpcmVfXykge1xuXHRuYXZpZ2F0b3IgPSBfX3dlZXhfcmVxdWlyZV9fKCdAd2VleC1tb2R1bGUvbmF0L25hdmlnYXRvcicpO1xufSk7XG5cbi8vIHB1c2hcblxudmFyIHB1c2ggPSBmdW5jdGlvbiBwdXNoKG9wdHMsIGNiKSB7XG5cdG9wdHMgPSBvcHRzIHx8IHt9O1xuXG5cdGlmICh0eXBlb2Ygb3B0cyA9PT0gJ3N0cmluZycpIHtcblx0XHRvcHRzID0ge1xuXHRcdFx0dXJsOiBvcHRzXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0bmF2aWdhdG9yLnB1c2gob3B0cywgZnVuY3Rpb24gKHJldCkge1xuXHRcdFx0cmV0ID0gcmV0IHx8IHt9O1xuXG5cdFx0XHRpZiAocmV0LmVycm9yKSB7XG5cdFx0XHRcdHJlamVjdChyZXQuZXJyb3IpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihyZXQuZXJyb3IsIG51bGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzb2x2ZShyZXQpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihudWxsLCByZXQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbi8vIHBvcFxudmFyIHBvcCA9IGZ1bmN0aW9uIHBvcChvcHRzLCBjYikge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdG5hdmlnYXRvci5wb3Aob3B0cywgZnVuY3Rpb24gKHJldCkge1xuXHRcdFx0cmV0ID0gcmV0IHx8IHt9O1xuXG5cdFx0XHRpZiAocmV0LmVycm9yKSB7XG5cdFx0XHRcdHJlamVjdChyZXQuZXJyb3IpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihyZXQuZXJyb3IsIG51bGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzb2x2ZShyZXQpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihudWxsLCByZXQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbi8vIHNldFRpdGxlXG52YXIgc2V0VGl0bGUgPSBmdW5jdGlvbiBzZXRUaXRsZShvcHRzLCBjYikge1xuXHRvcHRzID0gb3B0cyB8fCB7fTtcblxuXHRpZiAodHlwZW9mIG9wdHMgPT09ICdzdHJpbmcnKSB7XG5cdFx0b3B0cyA9IHtcblx0XHRcdHRpdGxlOiBvcHRzXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0bmF2aWdhdG9yLnNldFRpdGxlKG9wdHMsIGZ1bmN0aW9uIChyZXQpIHtcblx0XHRcdHJldCA9IHJldCB8fCB7fTtcblxuXHRcdFx0aWYgKHJldC5lcnJvcikge1xuXHRcdFx0XHRyZWplY3QocmV0LmVycm9yKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IocmV0LmVycm9yLCBudWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc29sdmUocmV0KTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IobnVsbCwgcmV0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59O1xuXG4vLyBzZXRDb2xvclxudmFyIHNldENvbG9yID0gZnVuY3Rpb24gc2V0Q29sb3Iob3B0cywgY2IpIHtcblx0b3B0cyA9IG9wdHMgfHwge307XG5cblx0aWYgKHR5cGVvZiBvcHRzID09PSAnc3RyaW5nJykge1xuXHRcdG9wdHMgPSB7XG5cdFx0XHRjb2xvcjogb3B0c1xuXHRcdH07XG5cdH1cblxuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdG5hdmlnYXRvci5zZXRDb2xvcihvcHRzLCBmdW5jdGlvbiAocmV0KSB7XG5cdFx0XHRyZXQgPSByZXQgfHwge307XG5cblx0XHRcdGlmIChyZXQuZXJyb3IpIHtcblx0XHRcdFx0cmVqZWN0KHJldC5lcnJvcik7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHJldC5lcnJvciwgbnVsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXNvbHZlKHJldCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKG51bGwsIHJldCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuLy8gc2V0QmFja2dyb3VuZENvbG9yXG52YXIgc2V0QmFja2dyb3VuZENvbG9yID0gZnVuY3Rpb24gc2V0QmFja2dyb3VuZENvbG9yKG9wdHMsIGNiKSB7XG5cdG9wdHMgPSBvcHRzIHx8IHt9O1xuXG5cdGlmICh0eXBlb2Ygb3B0cyA9PT0gJ3N0cmluZycpIHtcblx0XHRvcHRzID0ge1xuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBvcHRzXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0bmF2aWdhdG9yLnNldEJhY2tncm91bmRDb2xvcihvcHRzLCBmdW5jdGlvbiAocmV0KSB7XG5cdFx0XHRyZXQgPSByZXQgfHwge307XG5cblx0XHRcdGlmIChyZXQuZXJyb3IpIHtcblx0XHRcdFx0cmVqZWN0KHJldC5lcnJvcik7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHJldC5lcnJvciwgbnVsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXNvbHZlKHJldCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKG51bGwsIHJldCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuLy8gc2V0Rm9udFNpemVcbnZhciBzZXRGb250U2l6ZSA9IGZ1bmN0aW9uIHNldEZvbnRTaXplKG9wdHMsIGNiKSB7XG5cdG9wdHMgPSBvcHRzIHx8IHt9O1xuXG5cdGlmICh0eXBlb2Ygb3B0cyA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIG9wdHMgPT09ICdudW1iZXInKSB7XG5cdFx0b3B0cyA9IHtcblx0XHRcdGZvbnRTaXplOiBvcHRzXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0bmF2aWdhdG9yLnNldEZvbnRTaXplKG9wdHMsIGZ1bmN0aW9uIChyZXQpIHtcblx0XHRcdHJldCA9IHJldCB8fCB7fTtcblxuXHRcdFx0aWYgKHJldC5lcnJvcikge1xuXHRcdFx0XHRyZWplY3QocmV0LmVycm9yKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IocmV0LmVycm9yLCBudWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc29sdmUocmV0KTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IobnVsbCwgcmV0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59O1xuXG4vLyBpbml0XG52YXIgaW5pdCA9IGZ1bmN0aW9uIGluaXQob3B0cywgY2IpIHtcblx0b3B0cyA9IG9wdHMgfHwge307XG5cblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRuYXZpZ2F0b3IuaW5pdChvcHRzLCBmdW5jdGlvbiAocmV0KSB7XG5cdFx0XHRyZXQgPSByZXQgfHwge307XG5cblx0XHRcdGlmIChyZXQuZXJyb3IpIHtcblx0XHRcdFx0cmVqZWN0KHJldC5lcnJvcik7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHJldC5lcnJvciwgbnVsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXNvbHZlKHJldCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKG51bGwsIHJldCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuLy8gaGlkZVxudmFyIGhpZGUgPSBmdW5jdGlvbiBoaWRlKGNiKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0bmF2aWdhdG9yLmhpZGUoZnVuY3Rpb24gKHJldCkge1xuXHRcdFx0cmV0ID0gcmV0IHx8IHt9O1xuXG5cdFx0XHRpZiAocmV0LmVycm9yKSB7XG5cdFx0XHRcdHJlamVjdChyZXQuZXJyb3IpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihyZXQuZXJyb3IsIG51bGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzb2x2ZShyZXQpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihudWxsLCByZXQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbi8vIHNob3dcbnZhciBzaG93ID0gZnVuY3Rpb24gc2hvdyhjYikge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdG5hdmlnYXRvci5zaG93KGZ1bmN0aW9uIChyZXQpIHtcblx0XHRcdHJldCA9IHJldCB8fCB7fTtcblxuXHRcdFx0aWYgKHJldC5lcnJvcikge1xuXHRcdFx0XHRyZWplY3QocmV0LmVycm9yKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IocmV0LmVycm9yLCBudWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc29sdmUocmV0KTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IobnVsbCwgcmV0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0cHVzaDogcHVzaCxcblx0cG9wOiBwb3AsXG5cdHNldFRpdGxlOiBzZXRUaXRsZSxcblx0c2V0Q29sb3I6IHNldENvbG9yLFxuXHRzZXRCYWNrZ3JvdW5kQ29sb3I6IHNldEJhY2tncm91bmRDb2xvcixcblx0c2V0Rm9udFNpemU6IHNldEZvbnRTaXplLFxuXHRpbml0OiBpbml0LFxuXHRoaWRlOiBoaWRlLFxuXHRzaG93OiBzaG93XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LW5hdC9saWIvbmF2aWdhdG9yL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAzMCIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vZGV0YWlsLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vZGV0YWlsLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L2RldGFpbCcsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9kZXRhaWwvZGV0YWlsLndlXG4vLyBtb2R1bGUgaWQgPSAyMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAzMCJdLCJzb3VyY2VSb290IjoiIn0=