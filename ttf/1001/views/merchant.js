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

	var __weex_template__ = __webpack_require__(161)
	var __weex_style__ = __webpack_require__(162)
	var __weex_script__ = __webpack_require__(163)
	
	__weex_define__('@weex-component/9f4c04645d76f6086377b9ddf1f90399', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})
	
	__weex_bootstrap__('@weex-component/9f4c04645d76f6086377b9ddf1f90399',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "address-select"
	  ],
	  "style": {
	    "visibility": function () {return this.visibility}
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "address-select-bg"
	      ],
	      "events": {
	        "click": "hide"
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "address-select-list"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "address-select-list-row"
	          ],
	          "events": {
	            "click": function ($event) {this.setPosition('杭州',$event)}
	          },
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "杭州"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "address-select-list-row"
	          ],
	          "events": {
	            "click": function ($event) {this.setPosition('丽水',$event)}
	          },
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "丽水"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "address-select-list-row"
	          ],
	          "events": {
	            "click": function ($event) {this.setPosition('绍兴',$event)}
	          },
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "绍兴"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "address-select-list-row"
	          ],
	          "events": {
	            "click": function ($event) {this.setPosition('湖州',$event)}
	          },
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "湖州"
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "address-select": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "width": 750
	  },
	  "address-select-bg": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "width": 750,
	    "opacity": 0.5,
	    "backgroundColor": "#666666"
	  },
	  "address-select-list": {
	    "position": "absolute",
	    "top": 88,
	    "left": 0,
	    "width": 750,
	    "backgroundColor": "#ffffff"
	  },
	  "address-select-list-row": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "height": 80,
	    "marginLeft": 20,
	    "marginRight": 20,
	    "marginBottom": -1,
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "borderBottomColor": "#cccccc",
	    "borderBottomWidth": 1,
	    "borderBottomStyle": "solid"
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    data: function data() {
	        return {
	            visibility: 'hidden'
	        };
	    },
	    methods: {
	        setPosition: function setPosition(v) {
	            this.$dispatch('setPosition', v);
	        },
	        hide: function hide() {
	            this.$dispatch('addressSelectHide', {});
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(5)
	var __weex_style__ = __webpack_require__(6)
	var __weex_script__ = __webpack_require__(7)
	
	__weex_define__('@weex-component/app-list-item', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "app-list-item"
	  ],
	  "style": {
	    "width": function () {return this.width},
	    "borderBottomWidth": function () {return this.borderWidth},
	    "height": function () {return this.height}
	  },
	  "events": {
	    "click": function ($event) {this.open(this.url,$event)}
	  },
	  "children": [
	    {
	      "type": "image",
	      "classList": [
	        "icon"
	      ],
	      "attr": {
	        "src": function () {return this.icon}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "attr": {
	        "value": function () {return this.text}
	      }
	    }
	  ]
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = {
	  "app-list-item": {
	    "justifyContent": "center",
	    "alignItems": "center",
	    "marginTop": -1,
	    "backgroundColor": "#ffffff",
	    "borderBottomColor": "#f2f2f2",
	    "borderBottomStyle": "solid"
	  },
	  "icon": {
	    "width": 80,
	    "height": 80
	  },
	  "text": {
	    "fontSize": 26,
	    "color": "#666666"
	  }
	}

/***/ },
/* 7 */
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
	            width: 187.5,
	            height: 170,
	            borderWidth: 0,
	            icon: '',
	            text: '',
	            url: ''
	        };
	    },
	    methods: (0, _assign2.default)({}, methods)
	};}
	/* generated by weex-loader */


/***/ },
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
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "searchbar"
	  ],
	  "style": {
	    "height": function () {return this.height},
	    "backgroundColor": function () {return this.backgroundColor}
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "item",
	        "item-left"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "left-image"
	          ],
	          "attr": {
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
	            "left-text"
	          ],
	          "style": {
	            "color": function () {return this.leftItemColor}
	          },
	          "shown": function () {return this.leftItemTitle},
	          "events": {
	            "click": "onclickleftitem"
	          },
	          "attr": {
	            "value": function () {return this.leftItemTitle}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "item",
	        "search-wrapper"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "search-icon"
	          ],
	          "attr": {
	            "src": function () {return this.searchIcon}
	          }
	        },
	        {
	          "type": "input",
	          "id": "search",
	          "classList": [
	            "search-wrapper-input"
	          ],
	          "events": {
	            "click": "onInputClick",
	            "input": "oninput"
	          },
	          "attr": {
	            "placeholder": function () {return this.placeholder},
	            "type": "text",
	            "value": function () {return this.value}
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "search-clean"
	          ],
	          "style": {
	            "visibility": function () {return this.visibility}
	          },
	          "events": {
	            "click": "clean"
	          },
	          "attr": {
	            "value": "×"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "item",
	        "item-right"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "right-text"
	          ],
	          "style": {
	            "color": function () {return this.rightItemColor}
	          },
	          "shown": function () {return this.rightItemTitle},
	          "events": {
	            "click": "onclickrightitem"
	          },
	          "attr": {
	            "value": function () {return this.rightItemTitle}
	          }
	        },
	        {
	          "type": "image",
	          "classList": [
	            "right-image"
	          ],
	          "attr": {
	            "src": function () {return this.rightItemSrc}
	          },
	          "shown": function () {return this.rightItemSrc},
	          "events": {
	            "click": "onclickrightitem"
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = {
	  "searchbar": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "space-between",
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#d8d8d8"
	  },
	  "search-icon": {
	    "width": 48,
	    "height": 48
	  },
	  "search-clean": {
	    "position": "absolute",
	    "right": 10,
	    "bottom": 10,
	    "width": 40,
	    "height": 40,
	    "fontSize": 36,
	    "lineHeight": 40,
	    "color": "#999999",
	    "textAlign": "center"
	  },
	  "item": {
	    "alignItems": "center"
	  },
	  "item-left": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "marginLeft": 20
	  },
	  "item-right": {
	    "marginRight": 20
	  },
	  "left-image": {
	    "width": 48,
	    "height": 48
	  },
	  "right-image": {
	    "width": 48,
	    "height": 48
	  },
	  "right-text": {
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "left-text": {
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "search-wrapper": {
	    "flexDirection": "row",
	    "width": 450,
	    "height": 60,
	    "paddingLeft": 6,
	    "backgroundColor": "#ebebeb",
	    "borderRadius": 6
	  },
	  "search-wrapper-input": {
	    "width": 380,
	    "height": 48,
	    "marginLeft": 10,
	    "backgroundColor": "#ebebeb",
	    "color": "#1a1a1a",
	    "fontSize": 32
	  }
	}

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _config = __webpack_require__(47);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: {
	        searchIcon: _config2.default.icon.search,
	
	        backgroundColor: 'black',
	
	        height: 88,
	
	        title: "",
	
	        titleColor: 'black',
	
	        rightItemSrc: '',
	
	        rightItemTitle: '',
	
	        rightItemColor: 'black',
	
	        leftItemSrc: '',
	
	        leftItemTitle: '',
	
	        leftItemColor: 'black',
	        placeholder: '输入商户名、地址',
	        value: '',
	        visibility: 'hidden'
	    },
	    methods: {
	        onInputClick: function onInputClick() {
	            this.$dispatch('naviBar.search.input.click', {});
	        },
	
	        onclickrightitem: function onclickrightitem(e) {
	            this.$dispatch('naviBar.rightItem.click', {});
	        },
	        onclickleftitem: function onclickleftitem(e) {
	            this.$dispatch('naviBar.leftItem.click', {});
	        },
	        oninput: function oninput(e) {
	            this.value = e.value;
	            if (this.value) {
	                this.showCleanBtn();
	            } else {
	                this.hideCleanBtn();
	            }
	        },
	        showCleanBtn: function showCleanBtn() {
	            this.visibility = 'visible';
	        },
	        hideCleanBtn: function hideCleanBtn() {
	            this.visibility = 'hidden';
	        },
	        clean: function clean() {
	            this.value = '';
	            this.hideCleanBtn();
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 96 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "searchbar-history"
	  ],
	  "events": {
	    "click": "hide"
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "searchbar-history-panel"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "searchbar-history-title"
	          ],
	          "attr": {
	            "value": "搜索历史"
	          }
	        },
	        {
	          "type": "div",
	          "classList": [
	            "searchbar-history-list"
	          ],
	          "repeat": function () {return this.items},
	          "events": {
	            "click": function ($event) {this.search(this.text,$event)}
	          },
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "searchbar-history-list-icon"
	              ],
	              "attr": {
	                "src": function () {return this.ui.icon}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "searchbar-history-list-text"
	              ],
	              "attr": {
	                "value": function () {return this.text}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "searchbar-history-clear"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "searchbar-history-clear-text"
	              ],
	              "events": {
	                "click": "clearSearchHistory"
	              },
	              "attr": {
	                "value": "清除聊天记录"
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = {
	  "searchbar-history": {
	    "position": "fixed",
	    "top": 88,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "zIndex": 99,
	    "backgroundColor": "#f2f2f2"
	  },
	  "searchbar-history-panel": {
	    "backgroundColor": "#ffffff"
	  },
	  "searchbar-history-title": {
	    "marginLeft": 35,
	    "marginTop": 27,
	    "marginBottom": 10,
	    "fontSize": 24,
	    "color": "#bfbfbf"
	  },
	  "searchbar-history-list": {
	    "flexWrap": "wrap",
	    "flexDirection": "row",
	    "justifyContent": "flex-start",
	    "alignItems": "center",
	    "width": 715,
	    "height": 88,
	    "marginLeft": 35,
	    "paddingRight": 20,
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#dbdbdb",
	    "borderBottomStyle": "solid"
	  },
	  "searchbar-history-list-icon": {
	    "width": 27,
	    "height": 27,
	    "marginRight": 15
	  },
	  "searchbar-history-list-text": {
	    "fontSize": 24,
	    "color": "#4d4d4d"
	  },
	  "searchbar-history-clear": {
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": 88
	  },
	  "searchbar-history-clear-text": {
	    "fontSize": 28,
	    "color": "#808080"
	  }
	}

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _config = __webpack_require__(47);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            ui: {
	                icon: _config2.default.icon.search_pass
	            },
	            items: [{ text: '华润万家' }, { text: '可莎蜜儿' }]
	        };
	    },
	
	    methods: {
	        search: function search(v) {
	            console.log(v);
	            this.$dispatch('serchbarHistoryHide', {});
	        },
	        clearSearchHistory: function clearSearchHistory() {},
	        hide: function hide() {
	            this.$dispatch('serchbarHistoryHide', {});
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
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
/* 161 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "children": [
	    {
	      "type": "searchbar",
	      "classList": [
	        "searchbar"
	      ],
	      "attr": {
	        "leftItemSrc": function () {return this.nav.leftItemSrc},
	        "leftItemTitle": function () {return this.nav.leftItemTitle},
	        "leftItemColor": function () {return this.nav.leftItemColor},
	        "titleColor": function () {return this.nav.color},
	        "rightItemSrc": function () {return this.nav.rightItemSrc},
	        "borderBottomWidth": function () {return this.nav.borderBottomWidth},
	        "backgroundColor": function () {return this.nav.backgroundColor}
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "wrapper"
	      ],
	      "children": [
	        {
	          "type": "list",
	          "classList": [
	            "list"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "refresh-placeholder"
	              ],
	              "style": {
	                "height": function () {return this.list.refreshingHeight}
	              }
	            },
	            {
	              "type": "refresh",
	              "classList": [
	                "refresh"
	              ],
	              "events": {
	                "refresh": "onrefresh",
	                "pullingdown": "onpullingdown"
	              },
	              "attr": {
	                "display": function () {return this.list.refreshing?'show':'hide'}
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "refresh-indicator"
	                  ],
	                  "attr": {
	                    "value": "刷新中 ..."
	                  }
	                }
	              ]
	            },
	            {
	              "type": "cell",
	              "append": "tree",
	              "classList": [
	                "merchant-cell"
	              ],
	              "repeat": function () {return this.list.data},
	              "events": {
	                "click": function ($event) {this.open('merchant_introduction?id='+this.id,$event)}
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "merchant-cell-logo"
	                  ],
	                  "attr": {
	                    "src": function () {return (this.assetsRoot) + (this.logo)}
	                  }
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "merchant-cell-info"
	                  ],
	                  "children": [
	                    {
	                      "type": "div",
	                      "classList": [
	                        "row-flex-start"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "classList": [
	                            "merchant-cell-title"
	                          ],
	                          "attr": {
	                            "value": function () {return this.title}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "row-flex-start"
	                      ],
	                      "children": [
	                        {
	                          "type": "image",
	                          "classList": [
	                            "merchant-cell-star"
	                          ],
	                          "repeat": {
	                            "expression": function () {return this.stars},
	                            "value": "v"
	                          },
	                          "attr": {
	                            "src": function () {return this.v.image}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "merchant-cell-address"
	                      ],
	                      "attr": {
	                        "value": function () {return this.address}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "merchant-cell-distance"
	                  ],
	                  "attr": {
	                    "value": function () {return this.distance}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "loading-placeholder"
	              ],
	              "style": {
	                "height": function () {return this.list.loadingHeight}
	              }
	            },
	            {
	              "type": "loading",
	              "classList": [
	                "loading"
	              ],
	              "events": {
	                "loading": "onloading"
	              },
	              "attr": {
	                "display": function () {return this.list.loading?'show':'hide'}
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "indicator"
	                  ],
	                  "attr": {
	                    "value": "拼命加载中 ..."
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "address-select",
	      "classList": [
	        "address-select"
	      ],
	      "attr": {
	        "visibility": function () {return this.searchbar.addressSelectVisiblility}
	      }
	    },
	    {
	      "type": "searchbar-history",
	      "style": {
	        "visibility": function () {return this.searchbar.historyVisibility}
	      }
	    }
	  ]
	}

/***/ },
/* 162 */
/***/ function(module, exports) {

	module.exports = {
	  "address-select": {
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "zIndex": 99,
	    "width": 750
	  },
	  "container": {
	    "backgroundColor": "#f2f2f2"
	  },
	  "wrapper": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "width": 750,
	    "marginTop": 88,
	    "backgroundColor": "#ffffff"
	  },
	  "searchbar": {
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "zIndex": 15,
	    "width": 750,
	    "backgroundColor": "#ffffff"
	  },
	  "refresh": {
	    "zIndex": 10,
	    "justifyContent": "center",
	    "alignItems": "center",
	    "width": 750,
	    "height": 80,
	    "backgroundColor": "#fafafa",
	    "color": "#999999"
	  },
	  "refresh-indicator": {
	    "marginBottom": 20
	  },
	  "refresh-placeholder": {
	    "zIndex": 0,
	    "width": 750
	  },
	  "loading": {
	    "zIndex": 10,
	    "justifyContent": "center",
	    "alignItems": "center",
	    "width": 750,
	    "height": 80,
	    "backgroundColor": "#fafafa",
	    "color": "#999999",
	    "opacity": 0.9
	  },
	  "loading-placeholder": {
	    "zIndex": 0,
	    "width": 750
	  },
	  "merchant-cell": {
	    "flexDirection": "row",
	    "justifyContent": "flex-start",
	    "alignItems": "center",
	    "width": 750,
	    "height": 170,
	    "borderBottomColor": "#dbdbdb",
	    "borderBottomWidth": 1
	  },
	  "merchant-cell-logo": {
	    "width": 160,
	    "height": 130,
	    "marginRight": 20
	  },
	  "merchant-cell-info": {
	    "flexDirection": "column"
	  },
	  "merchant-cell-title": {
	    "fontSize": 32,
	    "color": "#1a1a1a",
	    "marginBottom": 16
	  },
	  "merchant-cell-star": {
	    "width": 28,
	    "height": 28,
	    "marginRight": 3
	  },
	  "merchant-cell-address": {
	    "marginTop": 20,
	    "fontSize": 24,
	    "color": "#666666"
	  },
	  "merchant-cell-distance": {
	    "position": "absolute",
	    "right": 30,
	    "bottom": 20,
	    "fontSize": 24,
	    "color": "#1a1a1a"
	  },
	  "row-flex-start": {
	    "justifyContent": "flex-start",
	    "flexDirection": "row"
	  }
	}

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _assign = __webpack_require__(8);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _config = __webpack_require__(47);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _api = __webpack_require__(46);
	
	var api = _interopRequireWildcard(_api);
	
	var _methods = __webpack_require__(45);
	
	var methods = _interopRequireWildcard(_methods);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var animation = __weex_require__('@weex-module/animation');
	
	__webpack_require__(4);
	__webpack_require__(164);
	__webpack_require__(165);
	__webpack_require__(166);
	exports.default = {
	    data: {
	        nav: {
	            color: '#4d4d4d',
	            backgroundColor: '#fff',
	            borderBottomWidth: 1,
	            leftItemColor: '#3b8aea',
	            leftItemTitle: '杭州',
	            leftItemSrc: _config2.default.icon.map_life,
	            rightItemSrc: _config2.default.icon.around
	        },
	        searchbar: {
	            historyVisibility: 'hidden',
	            addressSelectVisiblility: 'hidden'
	        },
	        list: {
	            data: [],
	            refreshing: false,
	            loading: false,
	            refreshingHeight: 0,
	            loadingHeight: 0,
	            mock: 1
	        },
	        ui: {
	            star: _config2.default.icon.star,
	            half_star: _config2.default.icon.half_star
	        },
	        assetsRoot: _config2.default.assetsRoot
	    },
	    created: function created() {
	        var _this = this;
	
	        this.loadMerchantList().then(function (data) {
	            _this.list.data = data;
	        });
	        this.navbarInit();
	    },
	
	    methods: (0, _assign2.default)({
	        loadMerchantList: function loadMerchantList(adapter) {
	            var _this2 = this;
	
	            return api.fetchMerchantList().then(function (res) {
	                return typeof adapter !== 'function' ? _this2.formatMerchantList(res) : adapter(_this2.formatMerchantList(res));
	            });
	        },
	        onloading: function onloading() {
	            var _this3 = this;
	
	            this.list.loadingHeight = 80;
	            this.list.loading = true;
	            this.loadMerchantList().then(function (data) {
	                setTimeout(function () {
	                    data.forEach(function (v) {
	                        _this3.list.data.push(v);
	                    });
	                    _this3.list.loading = false;
	                    _this3.list.loadingHeight = 0;
	                }, 1000);
	            });
	        },
	        onrefresh: function onrefresh(event) {
	            var _this4 = this;
	
	            this.list.refreshingHeight = 80;
	            this.list.refreshing = true;
	            this.loadMerchantList(function (data) {
	                return _this4.__mockListData(data);
	            }).then(function (data) {
	                setTimeout(function () {
	                    _this4.list.data = data;
	                    _this4.list.refreshing = false;
	                    _this4.list.refreshingHeight = 0;
	                }, 1000);
	            });
	        },
	        __mockListData: function __mockListData(value) {
	            this.list.mock += '1';
	            var result = [];
	            var length = value.length;
	            for (var i = value.length; i > 0; i--) {
	                var r = Math.floor(Math.random() * length);
	                value[r].id = this.list.mock + i;
	                result.push(value[r]);
	                console.log(value[r].id);
	            }
	            return result;
	        },
	        formatMerchantList: function formatMerchantList(value) {
	            var _this5 = this;
	
	            value.forEach(function (v) {
	                v.stars = _this5.scoreToStar(v.score);
	            });
	            return value;
	        },
	        scoreToStar: function scoreToStar(score) {
	            var count = 0;
	            var stars = [];
	            var end = [];
	            if (score % 2) {
	                score--;
	                end.push({
	                    image: this.ui.half_star
	                });
	            }
	            for (var i = 0; i < score; i = i + 2) {
	                stars.push({
	                    image: this.ui.star
	                });
	                count++;
	            }
	            return stars.concat(end);
	        },
	        navbarInit: function navbarInit() {
	            this.searchHistoryInit();
	            this.addressSelectInit();
	            this.onclickleftitem();
	            this.onclickrightitem();
	        },
	        searchHistoryInit: function searchHistoryInit() {
	            var _this6 = this;
	
	            this.$on('naviBar.search.input.click', function (e) {
	                _this6.searchbar.historyVisibility = 'visible';
	            });
	            this.$on('serchbarHistoryHide', function (e) {
	                _this6.searchbar.historyVisibility = 'hidden';
	            });
	        },
	        onclickleftitem: function onclickleftitem() {
	            var _this7 = this;
	
	            this.$on('naviBar.leftItem.click', function (e) {
	                _this7.searchbar.addressSelectVisiblility = 'visible';
	            });
	        },
	        onclickrightitem: function onclickrightitem() {
	            var _this8 = this;
	
	            this.$on('naviBar.rightItem.click', function (e) {
	                _this8.open('merchant_nearby');
	            });
	        },
	        addressSelectInit: function addressSelectInit() {
	            var _this9 = this;
	
	            this.$on('setPosition', function (e) {
	                _this9.nav.leftItemTitle = e.detail;
	                _this9.searchbar.addressSelectVisiblility = 'hidden';
	            });
	            this.$on('addressSelectHide', function (e) {
	                _this9.searchbar.addressSelectVisiblility = 'hidden';
	            });
	        },
	        searchActive: function searchActive() {
	            this.searchAnimate(true);
	        },
	        searchCancel: function searchCancel() {
	            this.searchAnimate(false);
	            this.$el('search').fireEvent('blur');
	        },
	        search: function search() {},
	        searchAnimate: function searchAnimate(isIn) {
	            var left = this.$el('left');
	            var leftIcon = this.$el('leftIcon');
	            var search = this.$el('search');
	            var searchIcon = this.$el('search-icon');
	            var rightImage = this.$el('right-image');
	            var rightText = this.$el('right-text');
	
	            transition(left, isIn);
	            transition(leftIcon, isIn);
	            transition(search, isIn, {
	                width: isIn ? '600px' : '400px'
	            });
	            transition(searchIcon, isIn);
	            transition(rightImage, isIn, {
	                transform: isIn ? 'translate(80px, 0)' : 'translate(0, 0)'
	            });
	            transition(rightText, isIn, {
	                fontSize: isIn ? 24 : 20,
	                opacity: isIn ? 1 : 0,
	                transform: 'translate(0, 0)'
	            });
	
	            function transform(isIn) {
	                return isIn ? 'translate(-130px, 0)' : 'translate(0, 0)';
	            }
	            function transition(el, isIn, styles) {
	                animation.transition(el, {
	                    styles: (0, _assign2.default)({
	                        transform: transform(isIn)
	                    }, styles || {}),
	                    duration: 300,
	                    timingFunction: 'ease-in-out',
	                    delay: 0 });
	            }
	        }
	    }, methods)
	};}
	/* generated by weex-loader */


/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(93)
	var __weex_style__ = __webpack_require__(94)
	var __weex_script__ = __webpack_require__(95)
	
	__weex_define__('@weex-component/searchbar', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(96)
	var __weex_style__ = __webpack_require__(97)
	var __weex_script__ = __webpack_require__(98)
	
	__weex_define__('@weex-component/searchbar-history', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(1)
	var __weex_style__ = __webpack_require__(2)
	var __weex_script__ = __webpack_require__(3)
	
	__weex_define__('@weex-component/address-select', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWRiMDEyZWQ3NjI2ZThiNjU1ZGU/ODkxOCoqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9tZXJjaGFudC53ZT8xYTJiIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FkZHJlc3Mtc2VsZWN0L2FkZHJlc3Mtc2VsZWN0LndlPzk1YWIqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FkZHJlc3Mtc2VsZWN0L2FkZHJlc3Mtc2VsZWN0LndlPzM2ZmIqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FkZHJlc3Mtc2VsZWN0L2FkZHJlc3Mtc2VsZWN0LndlPzFmNWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwLWxpc3QvYXBwLWxpc3QtaXRlbS53ZT8xYjdmKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcHAtbGlzdC9hcHAtbGlzdC1pdGVtLndlP2M2ZGYqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcHAtbGlzdC9hcHAtbGlzdC1pdGVtLndlPzU5N2QqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcHAtbGlzdC9hcHAtbGlzdC1pdGVtLndlIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcz9lY2UyKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzPzc3YWEqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzPzFiNjIqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanM/Y2UwMCoqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanM/ZDUzZSoqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanM/YTZkYSoqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcz80MTE2KioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzPzBkYTMqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanM/MjRjOCoqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzP2JkMWYqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcz83MDUxKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanM/OTM1ZCoqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanM/YWI0NCoqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcz80OWE0KioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcz8xZTg2KioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcz9mNWJjKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanM/ZmNlYSoqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcz9kODUwKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcz82OTQ2KioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcz81Y2Y5KioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzPzQ4ZWEqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzPzQ1ZDMqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcz82MTk5KioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzPzYyYTcqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzP2Y2NWYqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qcz85ZmQ0KioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcz8yYTZjKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzPzdiNmMqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanM/ZThjZCoqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanM/NzU5OCoqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzP2E1ZmIqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzP2QwZDIqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanM/YjVjMCoqKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vbWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbmZpZy5qcz9jMTgzKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZGV0ZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vcm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VhcmNoYmFyL3NlYXJjaGJhci53ZT8yMDhlKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWFyY2hiYXIvc2VhcmNoYmFyLndlP2Q4NTIqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlYXJjaGJhci9zZWFyY2hiYXIud2U/NGVmMiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWFyY2hiYXIvc2VhcmNoYmFyLWhpc3Rvcnkud2U/NTg2NSoiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VhcmNoYmFyL3NlYXJjaGJhci1oaXN0b3J5LndlP2Q0MTAqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlYXJjaGJhci9zZWFyY2hiYXItaGlzdG9yeS53ZT8xMjk1Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9tZXJjaGFudC53ZT9iMDQzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9tZXJjaGFudC53ZT9mY2IxIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9tZXJjaGFudC53ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWFyY2hiYXIvc2VhcmNoYmFyLndlP2Y0ZTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VhcmNoYmFyL3NlYXJjaGJhci1oaXN0b3J5LndlP2NjYjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWRkcmVzcy1zZWxlY3QvYWRkcmVzcy1zZWxlY3Qud2U/OWEzZiJdLCJuYW1lcyI6WyJyb3V0ZVRvVXJsIiwib3BlbiIsInBhcmFtcyIsInJlYWxIZWlnaHQiLCJkZXRlY3Rpb24iLCJyb3V0ZU5hbWUiLCJ0ZXN0Iiwic3BsaXQiLCJyIiwiY29tcGlsZVVybCIsImNvbnNvbGUiLCJsb2ciLCJ1cmwiLCJqb2luIiwiY2FsbCIsIndpbmRvdyIsIm8iLCJ0aGVuIiwiJG9wZW5VUkwiLCJmYWlsQ2FsbGJhY2siLCJuYW1lIiwicmVzdWx0IiwiJGdldENvbmZpZyIsImJ1bmRsZVVybCIsImluZGV4T2YiLCJzdHIiLCJzdWJzdHIiLCJwIiwiZm9yRWFjaCIsInRlbXAiLCJ2IiwiZGVjb2RlVVJJIiwiaGVpZ2h0IiwidyIsImVudiIsImRldmljZVdpZHRoIiwiaCIsImRldmljZUhlaWdodCIsImZldGNoIiwic2lnbmluIiwiZmV0Y2hUYWJCYXIiLCJhZGFwdGVyVGFiQmFyIiwiZmV0Y2hBcHBzIiwiZmV0Y2hOb3RpY2VzIiwiZmV0Y2hCYW5uZXJzIiwiZmV0Y2hNZXJjaGFudENhdGVnb3J5IiwiZmV0Y2hNZXJjaGFudExpc3QiLCJnZXRCYXNlVVJMIiwic3RyZWFtIiwiX193ZWV4X2RlZmluZV9fIiwiX193ZWV4X3JlcXVpcmVfXyIsImFwaVJvb3QiLCJwYXRoIiwib3B0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJPYmplY3QiLCJhc3NpZ24iLCJtZXRob2RzIiwidHlwZSIsInJlc3BvbnNlIiwic3RhdHVzIiwiZGF0YSIsInRhYkl0ZW1zIiwiaW5kZXgiLCJzZWxlY3RlZENvbG9yIiwiYmFzZVVSTCIsInRhYkl0ZW0iLCJpIiwic3JjIiwiaW1hZ2UiLCJhc3NldHNSb290Iiwic2VsZWN0ZWRJbWFnZSIsInZpc2liaWxpdHkiLCJpY29uIiwidGl0bGVDb2xvciIsImlzTmF2IiwibmF0aXZlQmFzZSIsImlzQW5kcm9pZEFzc2V0cyIsImlzaU9TQXNzZXRzIiwic3Vic3RyaW5nIiwibGFzdEluZGV4T2YiLCJob3N0Iiwic2NyaXB0SG9zdCIsIm1hdGNoZXMiLCJleGVjIiwibGVuZ3RoIiwiaHRtbEluZGV4Iiwic2NyaXB0Um9vdCIsImFuZHJvaWRBc3NldHNSb290IiwibWFwIiwibWFwX2xpZmUiLCJub3RpY2UiLCJzY2FuIiwiY29kZSIsInRyYW5zYWN0aW9uX3JlY29yZCIsInNlYXJjaCIsImJhY2siLCJyaWdodF9hcnJvdyIsInN0b3JhZ2UiLCJsb2dpbk1vZHVsZSIsImdldEl0ZW0iLCJlIiwidG9Mb2dpbiIsImFwcHMiLCJ0aXRsZSIsImxpZmUiLCJtZXJjaGFudCIsIm1lcmNoYW50X2NvbGxlY3Rpb24iLCJtZXJjaGFudF9uZWFyYnkiLCJtZXJjaGFudF9hcm91bmQiLCJtZXJjaGFudF9pbnRyb2R1Y3Rpb24iLCJtb3JlIiwibm90aWNlcyIsIm5vdGljZXNfZGV0YWlsIiwicGF5bWVudF9waG9uZSIsInBheW1lbnRfcGV0cm9sZXVtIiwicGF5bWVudF93YXRlciIsInBheW1lbnRfZWxlY3RyaWNpdHkiLCJwYXltZW50X2dhcyIsImRhc2hib2FyZCIsImRhc2hib2FyZF9yZWNoYXJnZSIsImRhc2hib2FyZF90cmFuc2ZlciIsImRhc2hib2FyZF9iYW5rX2NhcmQiLCJkYXNoYm9hcmRfdHJhZGluZ19yZWNvcmRzIiwiZGFzaGJvYXJkX3Bhc3N3b3JkIiwiZGFzaGJvYXJkX2NlcnRpZmljYXRlIiwic3VtcGF5X2NhcmQiLCJzdW1wYXlfY2FyZF9iYWxhbmNlIiwic3VtcGF5X2NhcmRfcGFzc3dvcmQiLCJzdW1wYXlfY2FyZF9kZXRhaWwiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFDOztBQUVELDJGOzs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCO0FBQy9CLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXdDO0FBQ3hDLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF3QztBQUN4QyxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBd0M7QUFDeEMsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFtQztBQUNuQztBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxvQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDNU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ2lCQTs7Ozs7O0tBQ0E7Ozs7S0FDQTs7Ozs7O0FBSkEseUJBQ0E7O3FCQUlBO3FCQUNBO3FCQUNBO3FCQUNBOzs7O29CQUlBOzhCQUNBO2dDQUNBOzRCQUNBOzRCQUNBO2dEQUNBO2lEQUVBO0FBUkE7O2dDQVVBO3VDQUVBO0FBSEE7O21CQUtBO3lCQUNBO3NCQUNBOytCQUNBOzRCQUNBO21CQUVBO0FBUEE7O3lDQVNBOzhDQUVBO0FBSEE7c0NBS0E7QUEzQkE7O0FBZ0NBOztzREFDQTsrQkFDQTtBQUNBO2NBRUE7QUFDQTs7OztBQUVBOztnRUFDQTsySEFDQTtBQUNBO0FBQ0E7O0FBQ0E7O3VDQUNBO2lDQUNBOzBEQUNBO3dDQUNBOytDQUNBOytDQUNBO0FBQ0E7MkNBQ0E7aURBQ0E7b0JBQ0E7QUFDQTtBQUNBOztBQUNBOzswQ0FDQTtvQ0FDQTttREFDQTs4Q0FDQTtxQ0FDQTt3Q0FDQTt3Q0FDQTs4Q0FDQTtvREFDQTtvQkFDQTtBQUNBO0FBR0E7d0RBQ0E7K0JBQ0E7MEJBQ0E7Z0NBQ0E7b0RBQ0E7b0RBQ0E7Z0RBQ0E7bUNBQ0E7c0NBQ0E7QUFDQTtvQkFDQTtBQUNBOztBQUNBOzt3Q0FDQTtnREFDQTtBQUNBO29CQUNBO0FBQ0E7a0RBQ0E7eUJBQ0E7eUJBQ0E7dUJBQ0E7NEJBQ0E7QUFDQTs7b0NBR0E7QUFGQTtBQUdBO21EQUNBOztvQ0FHQTtBQUZBO0FBR0E7QUFDQTtpQ0FDQTtBQUNBOzJDQUNBO2tCQUNBO2tCQUNBO2tCQUNBO2tCQUNBO0FBQ0E7O0FBQ0E7O2lFQUNBO3NEQUNBO0FBQ0E7MERBQ0E7c0RBQ0E7QUFDQTtBQUNBOztBQUNBOzs2REFDQTs2REFDQTtBQUNBO0FBQ0E7O0FBQ0E7OzhEQUNBOzZCQUNBO0FBQ0E7QUFDQTs7QUFDQTs7a0RBQ0E7OENBQ0E7NkRBQ0E7QUFDQTt3REFDQTs2REFDQTtBQUNBO0FBRUE7K0NBQ0E7Z0NBQ0E7QUFDQTsrQ0FDQTtnQ0FDQTswQ0FDQTtBQUNBO21DQUVBLENBQ0E7cURBQ0E7aUNBQ0E7cUNBQ0E7bUNBQ0E7dUNBQ0E7dUNBQ0E7c0NBRUE7OzhCQUNBO2tDQUNBOzt5Q0FHQTtBQUZBO29DQUdBOzswREFHQTtBQUZBOzt1Q0FJQTtxQ0FDQTs0QkFHQTtBQUxBOztzQ0FNQTt3REFDQTtBQUNBO21EQUNBOzs7OENBR0E7QUFEQSxrQ0FFQTsrQkFDQTtxQ0FDQTs0QkFFQSxDQVBBO0FBUUE7QUFDQTtBQXRKQSxRQXVKQTtBQS9MQTs7Ozs7Ozs7QUNqSUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUM7Ozs7Ozs7QUNmRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsRUFBQzs7Ozs7OztBQ2ZEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFDIiwiZmlsZSI6InZpZXdzXFxtZXJjaGFudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDVkYjAxMmVkNzYyNmU4YjY1NWRlIiwidmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9tZXJjaGFudC53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9tZXJjaGFudC53ZVwiKVxudmFyIF9fd2VleF9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL21lcmNoYW50LndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50LzlmNGMwNDY0NWQ3NmY2MDg2Mzc3YjlkZGYxZjkwMzk5JywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cbl9fd2VleF9ib290c3RyYXBfXygnQHdlZXgtY29tcG9uZW50LzlmNGMwNDY0NWQ3NmY2MDg2Mzc3YjlkZGYxZjkwMzk5Jyx1bmRlZmluZWQsdW5kZWZpbmVkKVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL21lcmNoYW50LndlP2VudHJ5PXRydWVcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAyNCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiYWRkcmVzcy1zZWxlY3RcIlxuICBdLFxuICBcInN0eWxlXCI6IHtcbiAgICBcInZpc2liaWxpdHlcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnZpc2liaWxpdHl9XG4gIH0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImFkZHJlc3Mtc2VsZWN0LWJnXCJcbiAgICAgIF0sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJoaWRlXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImFkZHJlc3Mtc2VsZWN0LWxpc3RcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJhZGRyZXNzLXNlbGVjdC1saXN0LXJvd1wiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uICgkZXZlbnQpIHt0aGlzLnNldFBvc2l0aW9uKCfmna3lt54nLCRldmVudCl9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLmna3lt55cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJhZGRyZXNzLXNlbGVjdC1saXN0LXJvd1wiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uICgkZXZlbnQpIHt0aGlzLnNldFBvc2l0aW9uKCfkuL3msLQnLCRldmVudCl9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLkuL3msLRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJhZGRyZXNzLXNlbGVjdC1saXN0LXJvd1wiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uICgkZXZlbnQpIHt0aGlzLnNldFBvc2l0aW9uKCfnu43lhbQnLCRldmVudCl9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLnu43lhbRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJhZGRyZXNzLXNlbGVjdC1saXN0LXJvd1wiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uICgkZXZlbnQpIHt0aGlzLnNldFBvc2l0aW9uKCfmuZblt54nLCRldmVudCl9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLmuZblt55cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9zcmMvY29tcG9uZW50cy9hZGRyZXNzLXNlbGVjdC9hZGRyZXNzLXNlbGVjdC53ZVxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMjQiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJhZGRyZXNzLXNlbGVjdFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJib3R0b21cIjogMCxcbiAgICBcIndpZHRoXCI6IDc1MFxuICB9LFxuICBcImFkZHJlc3Mtc2VsZWN0LWJnXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcFwiOiAwLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcImJvdHRvbVwiOiAwLFxuICAgIFwid2lkdGhcIjogNzUwLFxuICAgIFwib3BhY2l0eVwiOiAwLjUsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjNjY2NjY2XCJcbiAgfSxcbiAgXCJhZGRyZXNzLXNlbGVjdC1saXN0XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcFwiOiA4OCxcbiAgICBcImxlZnRcIjogMCxcbiAgICBcIndpZHRoXCI6IDc1MCxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcImFkZHJlc3Mtc2VsZWN0LWxpc3Qtcm93XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImhlaWdodFwiOiA4MCxcbiAgICBcIm1hcmdpbkxlZnRcIjogMjAsXG4gICAgXCJtYXJnaW5SaWdodFwiOiAyMCxcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiAtMSxcbiAgICBcInBhZGRpbmdUb3BcIjogMjAsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDIwLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjY2NjY2NjXCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiAxLFxuICAgIFwiYm9yZGVyQm90dG9tU3R5bGVcIjogXCJzb2xpZFwiXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3NyYy9jb21wb25lbnRzL2FkZHJlc3Mtc2VsZWN0L2FkZHJlc3Mtc2VsZWN0LndlXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyNCIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJhZGRyZXNzLXNlbGVjdFwiIHN0eWxlPVwidmlzaWJpbGl0eTp7e3Zpc2liaWxpdHl9fVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhZGRyZXNzLXNlbGVjdC1iZ1wiIG9uY2xpY2s9XCJoaWRlXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFkZHJlc3Mtc2VsZWN0LWxpc3RcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZHJlc3Mtc2VsZWN0LWxpc3Qtcm93XCIgb25jbGljaz1cInNldFBvc2l0aW9uKCfmna3lt54nKVwiPlxyXG4gICAgICAgICAgICAgICAgPHRleHQ+5p2t5beePC90ZXh0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZHJlc3Mtc2VsZWN0LWxpc3Qtcm93XCIgb25jbGljaz1cInNldFBvc2l0aW9uKCfkuL3msLQnKVwiPlxyXG4gICAgICAgICAgICAgICAgPHRleHQ+5Li95rC0PC90ZXh0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZHJlc3Mtc2VsZWN0LWxpc3Qtcm93XCIgb25jbGljaz1cInNldFBvc2l0aW9uKCfnu43lhbQnKVwiPlxyXG4gICAgICAgICAgICAgICAgPHRleHQ+57uN5YW0PC90ZXh0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZHJlc3Mtc2VsZWN0LWxpc3Qtcm93XCIgb25jbGljaz1cInNldFBvc2l0aW9uKCfmuZblt54nKVwiPlxyXG4gICAgICAgICAgICAgICAgPHRleHQ+5rmW5beePC90ZXh0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c3R5bGUgc2NvcGVkPlxyXG4gICAgLmFkZHJlc3Mtc2VsZWN0IHsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7XHJcbiAgICAgICAgd2lkdGg6IDc1MHB4OyB9XHJcbiAgICAuYWRkcmVzcy1zZWxlY3QtYmcge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyByaWdodDogMDsgYm90dG9tOiAwO1xyXG4gICAgICAgIHdpZHRoOiA3NTBweDtcclxuICAgICAgICBvcGFjaXR5OiAuNTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O1xyXG4gICAgfVxyXG4gICAgLmFkZHJlc3Mtc2VsZWN0LWxpc3Qge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiA4OHB4OyBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiA3NTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgLmFkZHJlc3Mtc2VsZWN0LWxpc3Qtcm93IHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93OyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDsgbWFyZ2luLXJpZ2h0OiAyMHB4OyBtYXJnaW4tYm90dG9tOiAtMXB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4OyBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjY2NjOyBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7IGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG48c2NyaXB0PlxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgc2V0UG9zaXRpb24gKHYpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGRpc3BhdGNoKCdzZXRQb3NpdGlvbicsIHYpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGhpZGUgKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZGlzcGF0Y2goJ2FkZHJlc3NTZWxlY3RIaWRlJywge30pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2FkZHJlc3Mtc2VsZWN0L2FkZHJlc3Mtc2VsZWN0LndlPzc3YzJhMWI4IiwidmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9hcHAtbGlzdC1pdGVtLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL2FwcC1saXN0LWl0ZW0ud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9hcHAtbGlzdC1pdGVtLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L2FwcC1saXN0LWl0ZW0nLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvYXBwLWxpc3QvYXBwLWxpc3QtaXRlbS53ZVxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMTIgMjEgMjMgMjQiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImFwcC1saXN0LWl0ZW1cIlxuICBdLFxuICBcInN0eWxlXCI6IHtcbiAgICBcIndpZHRoXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy53aWR0aH0sXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYm9yZGVyV2lkdGh9LFxuICAgIFwiaGVpZ2h0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5oZWlnaHR9XG4gIH0sXG4gIFwiZXZlbnRzXCI6IHtcbiAgICBcImNsaWNrXCI6IGZ1bmN0aW9uICgkZXZlbnQpIHt0aGlzLm9wZW4odGhpcy51cmwsJGV2ZW50KX1cbiAgfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJpY29uXCJcbiAgICAgIF0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaWNvbn1cbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJ0ZXh0XCJcbiAgICAgIF0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50ZXh0fVxuICAgICAgfVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vc3JjL2NvbXBvbmVudHMvYXBwLWxpc3QvYXBwLWxpc3QtaXRlbS53ZVxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAxMiAyMSAyMyAyNCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImFwcC1saXN0LWl0ZW1cIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIm1hcmdpblRvcFwiOiAtMSxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI2YyZjJmMlwiLFxuICAgIFwiYm9yZGVyQm90dG9tU3R5bGVcIjogXCJzb2xpZFwiXG4gIH0sXG4gIFwiaWNvblwiOiB7XG4gICAgXCJ3aWR0aFwiOiA4MCxcbiAgICBcImhlaWdodFwiOiA4MFxuICB9LFxuICBcInRleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogMjYsXG4gICAgXCJjb2xvclwiOiBcIiM2NjY2NjZcIlxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9zcmMvY29tcG9uZW50cy9hcHAtbGlzdC9hcHAtbGlzdC1pdGVtLndlXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDEyIDIxIDIzIDI0IiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImFwcC1saXN0LWl0ZW1cIlxyXG4gICAgICAgICBzdHlsZT1cIndpZHRoOiB7e3dpZHRofX07IGJvcmRlci1ib3R0b20td2lkdGg6IHt7Ym9yZGVyV2lkdGh9fTsgaGVpZ2h0OiB7e2hlaWdodH19XCJcclxuICAgICAgICAgb25jbGljaz1cIm9wZW4odXJsKVwiXHJcbiAgICA+XHJcbiAgICAgICAgPGltYWdlIGNsYXNzPVwiaWNvblwiIHNyYz1cInt7aWNvbn19XCI+PC9pbWFnZT5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInRleHRcIj57e3RleHR9fTwvdGV4dD5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c3R5bGUgc2NvcGVkPlxyXG4gICAgLmFwcC1saXN0LWl0ZW0ge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZjJmMmYyOyBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDsgfVxyXG4gICAgLmljb24geyB3aWR0aDogODBweDsgaGVpZ2h0OiA4MHB4OyB9XHJcbiAgICAudGV4dCB7IGZvbnQtc2l6ZTogMjZweDsgY29sb3I6ICM2NjY7IH1cclxuPC9zdHlsZT5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCAqIGFzIG1ldGhvZHMgZnJvbSAnLi4vLi4vY29tbW9uL21ldGhvZHMnXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgZGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE4Ny41LFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNzAsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMCxcclxuICAgICAgICAgICAgICAgIGljb246ICcnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IE9iamVjdC5hc3NpZ24oe30sIG1ldGhvZHMpXHJcbiAgICB9XHJcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2FwcC1saXN0L2FwcC1saXN0LWl0ZW0ud2U/YjVhM2M5NjAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM3IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCAkYXNzaWduICA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHZhciBBID0ge31cbiAgICAsIEIgPSB7fVxuICAgICwgUyA9IFN5bWJvbCgpXG4gICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgYUxlbiAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpbmRleCA9IDFcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmZcbiAgICAsIGlzRW51bSAgICAgPSBwSUUuZjtcbiAgd2hpbGUoYUxlbiA+IGluZGV4KXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pXG4gICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNyIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJ2YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b0lPYmplY3QgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwga2V5O1xuICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA4IDkgMTIgMTggMjEgMjIgMjMgMjQgMjUgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDggOSAxMiAxOCAyMSAyMiAyMyAyNCAyNSAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgOCA5IDEyIDE4IDIxIDIyIDIzIDI0IDI1IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiaW1wb3J0IHsgZ2V0QmFzZVVSTCB9IGZyb20gJy4vYXBpJ1xyXG5pbXBvcnQgKiBhcyBkZXRlY3Rpb24gZnJvbSAnLi9kZXRlY3Rpb24nXHJcbmltcG9ydCByb3V0ZSBmcm9tICcuL3JvdXRlJ1xyXG4vKipcclxuICog6Lev55Sx6L2s6ZO+5o6lXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSByb3V0ZU5hbWVcclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByb3V0ZVRvVXJsIChyb3V0ZU5hbWUpIHtcclxuICAgIHZhciBwYXJhbXMgPSAnJ1xyXG4gICAgaWYgKC9cXD8vLnRlc3Qocm91dGVOYW1lKSkge1xyXG4gICAgICAgIHBhcmFtcyA9IHJvdXRlTmFtZS5zcGxpdCgnPycpWzFdXHJcbiAgICAgICAgcm91dGVOYW1lID0gcm91dGVOYW1lLnNwbGl0KCc/JylbMF1cclxuICAgIH1cclxuICAgIGxldCByID0gcm91dGVbcm91dGVOYW1lXVxyXG4gICAgbGV0IGNvbXBpbGVVcmxcclxuICAgIGlmICghcikge1xyXG4gICAgICAgIC8vIFRPRE8g6Lez6L2s5Yiw6ZSZ6K+v6aG1XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yOiDot6/nlLHkuI3lrZjlnKjvvIzor7flnKhyb3V0ZXIuanPkuK3phY3nva7lr7nlupTnmoTot6/nlLEnKVxyXG4gICAgfVxyXG4gICAgY29tcGlsZVVybCA9IHIudXJsID8gci51cmwgOiAndmlld3MvJyArIHJvdXRlTmFtZS5zcGxpdCgnXycpLmpvaW4oJy0nKVxyXG4gICAgbGV0IHVybCA9IGdldEJhc2VVUkwuY2FsbCh0aGlzLCB0cnVlKSArIGNvbXBpbGVVcmwgKyAnLmpzJ1xyXG4gICAgLy8g5YWB6K645re75Yqg5Y+C5pWwIOS+i+WmgiBtZXJjaGFudF9hcm91bmQ/YT0xJmI9MiDlpITnkIbop4TliJnlkozmtY/op4jlmajnmoRxdWVyeXN0cmluZ+S4gOiHtFxyXG4gICAgaWYgKHBhcmFtcykge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwgKyAnJicgKyBwYXJhbXNcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwgKyAnPycgKyBwYXJhbXNcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXJsXHJcbn1cclxuLyoqXHJcbiAqIOaJk+W8gOaWsOmhtemdolxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcm91dGVOYW1lIC0g6Lev55Sx5ZCN56ewIOaJgOaciei3r+eUseWQjeensOWcqHJvdXRlLmpz5LitXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvIC0g546w5Zyo5Y+q5pyJ6Lev55Sx5omT5byA5aSx6LSl5aSE55CG5pa55rOV77yM5Lul5ZCO5Y+v5Lul5re75Yqg5YW25LuW5aSE55CGXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG8uZmFpbENhbGxiYWNrIC0g6Lev55Sx5omT5byA5aSx6LSl5aSE55CGY2FsbGJhY2tcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvcGVuIChyb3V0ZU5hbWUsIG8pIHtcclxuICAgIGxldCByID0gcm91dGVbcm91dGVOYW1lXVxyXG4gICAgbGV0IHVybCA9IHJvdXRlVG9VcmwuY2FsbCh0aGlzLCByb3V0ZU5hbWUpXHJcbiAgICBpZiAoci5kZXRlY3Rpb24pIHtcclxuICAgICAgICBkZXRlY3Rpb25bci5kZXRlY3Rpb25dKHtcclxuICAgICAgICAgICAgcm91dGVOYW1lOiByb3V0ZU5hbWUsXHJcbiAgICAgICAgICAgIHVybDogdXJsXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJG9wZW5VUkwodXJsKVxyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgdHlwZW9mIG8uZmFpbENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvLmZhaWxDYWxsYmFjay5jYWxsKHRoaXMsIHJvdXRlTmFtZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuJG9wZW5VUkwodXJsKVxyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiDop6PmnpDot6/nlLHlj4LmlbBcclxuICog5L6L5aaC77yabWVyY2hhbnRfYXJvdW5kP2E9MSZiPTIg6aG16Z2iXHJcbiAqICAgICAg6LCD55SocGFyYW1zKCnmlrnms5Ug6L+U5Zue5YC85Li677yaIHthOjEsIGI6Mn1cclxuICogICAgICDosIPnlKhwYXJhbXMoJ2EnKeaWueazlSDov5Tlm57lgLzkuLrvvJogMVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW25hbWVdIOWPr+mAieWPguaVsFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3VybF0g5Y+v6YCJ5Y+C5pWwIOm7mOiupOS4umJ1bmRsZVVybFxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfG9iamVjdH1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJhbXMgKG5hbWUsIHVybCl7XHJcbiAgICBsZXQgcmVzdWx0ID0ge31cclxuICAgIGlmICghdXJsKSB7XHJcbiAgICAgICAgdXJsID0gdGhpcy4kZ2V0Q29uZmlnKCkuYnVuZGxlVXJsXHJcbiAgICB9XHJcbiAgICBpZiAodXJsLmluZGV4T2YoXCI/XCIpICE9PSAtMSkge1xyXG4gICAgICAgIGxldCBzdHIgPSB1cmwuc3Vic3RyKHVybC5pbmRleE9mKFwiP1wiKSArIDEpXHJcbiAgICAgICAgbGV0IHAgPSBzdHIuc3BsaXQoXCImXCIpXHJcbiAgICAgICAgcC5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdGVtcCA9IHYuc3BsaXQoXCI9XCIpXHJcbiAgICAgICAgICAgIHJlc3VsdFt0ZW1wWzBdXSA9IGRlY29kZVVSSSh0ZW1wWzFdKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgaWYgKHJlc3VsdFtuYW1lXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0W25hbWVdXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnXHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9XHJcbn1cclxuLy8g6I635Y+W55yf5a6e6auY5bqm77yM55Sx5LqOd2VleOmXrumimOacquiDvemAgumFjeaJgOacieacuuWei+OAglxyXG5leHBvcnQgZnVuY3Rpb24gcmVhbEhlaWdodCAoaGVpZ2h0KSB7XHJcbiAgICBsZXQgdyA9IHRoaXMuJGdldENvbmZpZygpLmVudi5kZXZpY2VXaWR0aFxyXG4gICAgbGV0IGggPSB0aGlzLiRnZXRDb25maWcoKS5lbnYuZGV2aWNlSGVpZ2h0XHJcbiAgICAvLyAxMzMyXHJcbiAgICByZXR1cm4gdyAvIDc1MCAqIGhlaWdodFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9tZXRob2RzLmpzIiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZydcclxudmFyIHN0cmVhbVxyXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LXRlbXAvYXBpJywgZnVuY3Rpb24gKF9fd2VleF9yZXF1aXJlX18pIHtcclxuICAgIHN0cmVhbSA9IF9fd2VleF9yZXF1aXJlX18oJ0B3ZWV4LW1vZHVsZS9zdHJlYW0nKVxyXG59KTtcclxuXHJcbi8vIOaVsOaNruWcsOWdgFxyXG5jb25zdCBhcGlSb290ID0gY29uZmlnLmFwaVJvb3RcclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoIChwYXRoLCBvcHQpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgc3RyZWFtLmZldGNoKE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICBtZXRob2RzOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiAvaHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvLy50ZXN0KHBhdGgpID8gcGF0aCA6IGAke2FwaVJvb3R9LyR7cGF0aH0uanNvbmAsXHJcbiAgICAgICAgICAgIHR5cGU6ICdqc29uJ1xyXG4gICAgICAgIH0sIG9wdCksIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChyZXNwb25zZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gKVxyXG4gICAgfSwgKCkgPT4ge30pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaWduaW4gKCkge1xyXG4gICAgcmV0dXJuIGZldGNoKCdzaWduaW4nLCB7XHJcbiAgICAgICAgbWV0aG9kczogJ1BPU1QnXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hUYWJCYXIgKCkge1xyXG4gICAgcmV0dXJuIGZldGNoKCd0YWItYmFyJylcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYWRhcHRlclRhYkJhcih0YWJJdGVtcywgaW5kZXgsIHNlbGVjdGVkQ29sb3IpIHtcclxuICAgIGNvbnN0IGJhc2VVUkwgPSBnZXRCYXNlVVJMLmNhbGwodGhpcylcclxuICAgIHRhYkl0ZW1zLmZvckVhY2goKHRhYkl0ZW0sIGkpID0+IHtcclxuICAgICAgICB0YWJJdGVtLnNyYyA9IGJhc2VVUkwgK+OAgHRhYkl0ZW0uc3JjO1xyXG4gICAgICAgIHRhYkl0ZW0uaW1hZ2UgPSBjb25maWcuYXNzZXRzUm9vdCAr44CAdGFiSXRlbS5pbWFnZTtcclxuICAgICAgICB0YWJJdGVtLnNlbGVjdGVkSW1hZ2UgPSBjb25maWcuYXNzZXRzUm9vdCAr44CAdGFiSXRlbS5zZWxlY3RlZEltYWdlXHJcbiAgICAgICAgaWYgKGluZGV4ID09IGkpIHtcclxuICAgICAgICAgICAgdGFiSXRlbS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXHJcbiAgICAgICAgICAgIHRhYkl0ZW0uaWNvbiA9IHRhYkl0ZW0uc2VsZWN0ZWRJbWFnZTtcclxuICAgICAgICAgICAgdGFiSXRlbS50aXRsZUNvbG9yID0gc2VsZWN0ZWRDb2xvcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0YWJJdGVtLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xyXG4gICAgICAgICAgICB0YWJJdGVtLmljb24gPSB0YWJJdGVtLmltYWdlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHRhYkl0ZW1zXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEFwcHMgKCkge1xyXG4gICAgcmV0dXJuIGZldGNoKCdhcHBzJylcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hOb3RpY2VzICgpIHtcclxuICAgIHJldHVybiBmZXRjaCgnbm90aWNlcycpXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQmFubmVycyAoKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goJ2Jhbm5lcnMnKVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaE1lcmNoYW50Q2F0ZWdvcnkgKCkge1xyXG4gICAgcmV0dXJuIGZldGNoKCdtZXJjaGFudC1jYXRlZ29yeScpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaE1lcmNoYW50TGlzdCAoKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goJ21lcmNoYW50LWxpc3QnKVxyXG59XHJcblxyXG5cclxuLy8gYXBwIGpzYnVuZGxlIOmdmeaAgei1hOa6kOWcsOWdgFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmFzZVVSTCAoaXNOYXYpIHtcclxuICAgIHZhciBidW5kbGVVcmxcclxuXHJcbiAgICBpZiAodHlwZW9mIHRoaXMuJGdldENvbmZpZyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIGJ1bmRsZVVybCA9IHRoaXMuJGdldENvbmZpZygpLmJ1bmRsZVVybFxyXG4gICAgfVxyXG4gICAgdmFyIG5hdGl2ZUJhc2U7XHJcbiAgICB2YXIgaXNBbmRyb2lkQXNzZXRzID0gYnVuZGxlVXJsLmluZGV4T2YoJ2ZpbGU6Ly9hc3NldHMvJykgPj0gMDtcclxuXHJcbiAgICB2YXIgaXNpT1NBc3NldHMgPSBidW5kbGVVcmwuaW5kZXhPZignZmlsZTovLy8nKSA+PSAwICYmIGJ1bmRsZVVybC5pbmRleE9mKCdXZWV4RGVtby5hcHAnKSA+IDA7XHJcbiAgICBpZiAoaXNBbmRyb2lkQXNzZXRzKSB7XHJcbiAgICAgICAgbmF0aXZlQmFzZSA9ICdmaWxlOi8vYXNzZXRzL2Rpc3QvJztcclxuICAgIH0gZWxzZSBpZiAoaXNpT1NBc3NldHMpIHtcclxuICAgICAgICBuYXRpdmVCYXNlID0gYnVuZGxlVXJsLnN1YnN0cmluZygwLCBidW5kbGVVcmwubGFzdEluZGV4T2YoJy8nKSArIDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgaG9zdCA9IGNvbmZpZy5zY3JpcHRIb3N0O1xyXG4gICAgICAgIHZhciBtYXRjaGVzID0gL1xcL1xcLyhbXlxcL10rPylcXC8vLmV4ZWMoYnVuZGxlVXJsKTtcclxuXHJcbiAgICAgICAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlcy5sZW5ndGggPj0gMikge1xyXG4gICAgICAgICAgICBob3N0ID0gbWF0Y2hlc1sxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/mraTlpITpnIDms6jmhI/kuIDkuIssdGFiYmFyIOeUqOeahOebtOaOpeaYr2pzYnVuZGxlIOeahOi3r+W+hCzkvYbmmK9uYXZpZ2F0b3LmmK/nm7TmjqXot7PovazliLDmlrDpobXpnaLkuIrnmoQuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIG5hdGl2ZUJhc2UgPSBpc05hdiA/IGNvbmZpZy5odG1sSW5kZXggKyAnP3BhZ2U9JyArIGNvbmZpZy5zY3JpcHRSb290IDogY29uZmlnLnNjcmlwdEhvc3QgKyBjb25maWcuc2NyaXB0Um9vdDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuYXRpdmVCYXNlID0gY29uZmlnLnNjcmlwdEhvc3QgKyBjb25maWcuc2NyaXB0Um9vdDtcclxuICAgICAgICAgICAgLy8gbmF0aXZlQmFzZSA9ICdodHRwOi8vJyArIGhvc3QgKyB0ZXN0Um9vdERpciArICcvZGlzdC8nO1xyXG4gICAgICAgICAgICAvLyBuYXRpdmVCYXNlID0gJ2h0dHA6Ly8nICsgaG9zdCArICcvZGlzdC8nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBuYXRpdmVCYXNlO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9hcGkuanMiLCIvLyBjb25zdCBhc3NldHNVUkwgPSAnZmlsZTovLy9zZGNhcmQvaW1nLydcclxuY29uc3QgYXNzZXRzUm9vdCA9ICdodHRwczovL2tvb29mbHkuZ2l0aHViLmlvL2tvc3RhbmQtdHRmL3R0Zi9hc3NldHMvJ1xyXG5cclxuZnVuY3Rpb24gaWNvbih2KSB7XHJcbiAgICByZXR1cm4gYXNzZXRzUm9vdCArICdpY29uLycgKyB2XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgLy8gd2VleOiEmuacrGhvc3RcclxuICAgIHNjcmlwdEhvc3Q6ICdodHRwczovL2tvb29mbHkuZ2l0aHViLmlvL2tvc3RhbmQtdHRmL3R0ZicsXHJcbiAgICAvLyBIVE1MIGluZGV4XHJcbiAgICBodG1sSW5kZXg6ICdodHRwczovL2tvb29mbHkuZ2l0aHViLmlvL2tvc3RhbmQtdHRmL3R0Zi9pbmRleC5odG1sJyxcclxuICAgIC8vIHdlZXjohJrmnKzmoLnnm67lvZVcclxuICAgIHNjcmlwdFJvb3Q6ICcvMTAwMS8nLFxyXG4gICAgLy8g5Zu+54mH562J6Z2Z5oCB6LWE5rqQ5qC555uu5b2VXHJcbiAgICBhc3NldHNSb290OiBhc3NldHNSb290LFxyXG4gICAgLy8gcmVzZXRmdWwgQVBJ5pyN5Yqh5qC56Lev5b6EXHJcbiAgICBhcGlSb290OiAnaHR0cHM6Ly9rb29vZmx5LmdpdGh1Yi5pby9rb3N0YW5kLXR0Zi90dGYvYXBpL3YxJyxcclxuICAgIC8vIGFuZHJvaWQg5pys5Zyw6Z2Z5oCB6LWE5rqQ6Lev5b6EXHJcbiAgICBhbmRyb2lkQXNzZXRzUm9vdDogJ2ZpbGU6Ly8vc2RjYXJkL2Fzc2V0cy8nLFxyXG4gICAgaWNvbjoge1xyXG4gICAgICAgIG1hcDogaWNvbignbWFwQDJ4LnBuZycpLFxyXG4gICAgICAgIG1hcF9saWZlOiBpY29uKCdtYXBfbGlmZUAyeC5wbmcnKSxcclxuICAgICAgICBub3RpY2U6IGljb24oJ25vdGljZUAyeC5wbmcnKSxcclxuICAgICAgICBzY2FuOiBpY29uKCdzY2FuQDJ4LnBuZycpLFxyXG4gICAgICAgIGNvZGU6IGljb24oJ2NvZGVAMngucG5nJyksXHJcbiAgICAgICAgdHJhbnNhY3Rpb25fcmVjb3JkOiBpY29uKCd0cmFuc2FjdGlvbl9yZWNvcmRAMngucG5nJyksXHJcbiAgICAgICAgc2VhcmNoOiBpY29uKCdzZWFyY2hAMngucG5nJyksXHJcbiAgICAgICAgYmFjazogaWNvbignYmFja0AyeC5wbmcnKSxcclxuICAgICAgICByaWdodF9hcnJvdzogaWNvbigncmlnaHRfYXJyb3dAMngucG5nJyksXHJcbiAgICAgICAgc2VhcmNoOiBpY29uKCdzZWFyY2hfc2hvcEAyeC5wbmcnKSxcclxuICAgICAgICBhcm91bmQ6IGljb24oJ2Fyb3VuZEAyeC5wbmcnKSxcclxuICAgICAgICBzZWFyY2hfcGFzczogaWNvbignc2VhcmNoX3Bhc3NAMngucG5nJyksXHJcbiAgICAgICAgc3RhcjogaWNvbignc3RhckAyeC5wbmcnKSxcclxuICAgICAgICBoYWxmX3N0YXI6IGljb24oJ2hhbGZfc3RhckAyeC5wbmcnKSxcclxuICAgICAgICBkcm9wZG93bjogaWNvbignZHJvcGRvd25AMngucG5nJyksXHJcbiAgICAgICAgdGljazogaWNvbigndGlja0AyeC5wbmcnKSxcclxuICAgICAgICBjb2xsZWN0OiBpY29uKCdjb2xsZWN0QDJ4LnBuZycpLFxyXG4gICAgICAgIGNvbGxlY3RfdW5zZWxlY3RlZDogaWNvbignY29sbGVjdC11bnNlbGVjdGVkQDJ4LnBuZycpXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2NvbmZpZy5qcyIsImltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnXHJcbmxldCBzdG9yYWdlXHJcbmxldCBsb2dpbk1vZHVsZVxyXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LXRlbXAvZGV0ZWN0aW9uJywgZnVuY3Rpb24gKF9fd2VleF9yZXF1aXJlX18pIHtcclxuICAgIHN0b3JhZ2UgPSBfX3dlZXhfcmVxdWlyZV9fKCdAd2VleC1tb2R1bGUvc3RvcmFnZScpXHJcbiAgICBsb2dpbk1vZHVsZSA9IF9fd2VleF9yZXF1aXJlX18oJ0B3ZWV4LW1vZHVsZS9sb2dpbk1vZHVsZScpXHJcbiAgICAvLyB0ZXN0TW9kdWxlLm9wZW5VUkwxXHJcbn0pO1xyXG5leHBvcnQgZnVuY3Rpb24gc2lnbmluIChyKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHN0b3JhZ2UuZ2V0SXRlbSgndXNlcicsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLnJlc3VsdCAhPT0gJ2ZhaWxlZCcpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoZS5kYXRhKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KClcclxuICAgICAgICAgICAgICAgIC8vIOi3s+i9rOWIsOeZu+W9lemhtemdolxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvZ2luIHJlZmVyOicsIHIudXJsKVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICdvYmplY3QnICYmIGxvZ2luTW9kdWxlICYmIGxvZ2luTW9kdWxlLnRvTG9naW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2dpbk1vZHVsZS50b0xvZ2luKCdsb2dpbicsIHIudXJsKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2RldGVjdGlvbi5qcyIsIi8qXHJcbiog5ZG95ZCN6KeE5YiZ77yaXHJcbiogYXBwcyA9PiB2aWV3cy9hcHBzLmpzXHJcbiogYWNjb3VudF90cmFkaW5nX3JlY29yZHMgPT4gdmlld3MvYWNjb3VudC10cmFkaW5nLXJlY29yZHMuanNcclxuKiBhYmNfZGVmX3p6eiA9PiB2aWV3cy9hYmMtZGVmLXp6ei5qc1xyXG4qIOW8uuWItui/meagt+ino+aekCDmnInliKnkuo7lkb3lkI3nmoTop4TojIPkuI7nu5/kuIDvvIznrKblkIjmraTop4TojIPnmoTliY3mj5DkuIsgdXJsIOWtl+auteWPr+S7peecgeeVpVxyXG4qIOWvueW6lOeahOino+aekOaWueazle+8mm1ldGhvZHMuanMgb3BlbigpXHJcbiogKi9cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgaW5kZXg6IHsgdXJsOiAnd2VleC1ib290c3RyYXAnIH0sXHJcbiAgICBhcHBzOiB7IHRpdGxlOiAn57K+6YCJJyB9LFxyXG4gICAgbGlmZTogeyB0aXRsZTogJ+eUn+a0uycgfSxcclxuXHJcblxyXG5cclxuICAgIG1lcmNoYW50OiB7IHRpdGxlOiAn5ZWG5oi35p+l6K+iJywgaWNvbjogJ21lcmNoYW50JyB9LFxyXG4gICAgbWVyY2hhbnRfY29sbGVjdGlvbjogeyB0aXRsZTogJ+WVhuaIt+aUtuiXjycgfSxcclxuICAgIG1lcmNoYW50X25lYXJieTogeyB0aXRsZTogJ+mZhOi/keWVhuaItycgfSxcclxuICAgIG1lcmNoYW50X2Fyb3VuZDogeyB0aXRsZTogJ+WRqOi+ueWVhuaItycgfSxcclxuICAgIG1lcmNoYW50X2ludHJvZHVjdGlvbjogeyB0aXRsZTogJ+eugOS7iycgfSxcclxuXHJcbiAgICBtb3JlOiB7IHRpdGxlOiAn5pu05aSaJywgaWNvbjogJ21vcmUnIH0sXHJcblxyXG4gICAgbm90aWNlczogeyB0aXRsZTogJ+WFrOWRiicgfSxcclxuICAgIG5vdGljZXNfZGV0YWlsOiB7IHRpdGxlOiAn5YWs5ZGK6K+m5oOFJyB9LFxyXG4gICAgc2lnbmluOiB7IHRpdGxlOiAn55m75b2VJyB9LFxyXG5cclxuICAgIHBheW1lbnRfcGhvbmU6IHsgdGl0bGU6ICfmiYvmnLrlhYXlgLwnLCBkZXRlY3Rpb246ICdzaWduaW4nIH0sXHJcbiAgICBwYXltZW50X3BldHJvbGV1bTogeyB0aXRsZTogJ+WKoOayueWNoeWFheWAvCcgfSxcclxuICAgIHBheW1lbnRfd2F0ZXI6IHsgdGl0bGU6ICfmsLTotLnnvLTnurMnIH0sXHJcbiAgICBwYXltZW50X2VsZWN0cmljaXR5OiB7IHRpdGxlOiAn55S16LS557y057qzJyB9LFxyXG4gICAgcGF5bWVudF9nYXM6IHsgdGl0bGU6ICfnh4PmsJTnvLTotLknIH0sXHJcblxyXG4gICAgZGFzaGJvYXJkOiB7IHRpdGxlOiAn5oiR55qE6LSm5oi3JywgZGV0ZWN0aW9uOiAnc2lnbmluJyB9LFxyXG4gICAgZGFzaGJvYXJkX3JlY2hhcmdlOiB7IHRpdGxlOiAn6LSm5oi35YWF5YC8JyB9LFxyXG4gICAgZGFzaGJvYXJkX3RyYW5zZmVyOiB7IHRpdGxlOiAn6LSm5oi36L2s6LSmJyB9LFxyXG4gICAgZGFzaGJvYXJkX2JhbmtfY2FyZDogeyB0aXRsZTogJ+mTtuihjOWNoScgfSxcclxuICAgIGRhc2hib2FyZF90cmFkaW5nX3JlY29yZHM6IHsgdGl0bGU6ICfkuqTmmJPorrDlvZUnIH0sXHJcbiAgICBkYXNoYm9hcmRfcGFzc3dvcmQ6IHsgdGl0bGU6ICflr4bnoIHnrqHnkIYnIH0sXHJcbiAgICBkYXNoYm9hcmRfY2VydGlmaWNhdGU6IHsgdGl0bGU6ICfor4HkuabnrqHnkIYnIH0sXHJcblxyXG4gICAgc3VtcGF5X2NhcmQ6IHsgdGl0bGU6ICfllYbnm5/ljaEnIH0sXHJcbiAgICBzdW1wYXlfY2FyZF9iYWxhbmNlOiB7IHRpdGxlOiAn5Y2h5L2Z6aKd5p+l6K+iJyB9LFxyXG4gICAgc3VtcGF5X2NhcmRfcGFzc3dvcmQ6IHsgdGl0bGU6ICfljaHlr4bnoIHkv67mlLknIH0sXHJcbiAgICBzdW1wYXlfY2FyZF9kZXRhaWw6IHsgdGl0bGU6ICfljaHmmI7nu4bmn6Xor6InIH0sXHJcblxyXG4gICAgdGVzdDogeyB0aXRsZTogJ+S4tOaXtua1i+ivlemhtemdoicgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9yb3V0ZS5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwic2VhcmNoYmFyXCJcbiAgXSxcbiAgXCJzdHlsZVwiOiB7XG4gICAgXCJoZWlnaHRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmhlaWdodH0sXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmJhY2tncm91bmRDb2xvcn1cbiAgfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiaXRlbVwiLFxuICAgICAgICBcIml0ZW0tbGVmdFwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwibGVmdC1pbWFnZVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtU3JjfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGVmdEl0ZW1TcmN9LFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogXCJvbmNsaWNrbGVmdGl0ZW1cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImxlZnQtdGV4dFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgIFwiY29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtQ29sb3J9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sZWZ0SXRlbVRpdGxlfSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IFwib25jbGlja2xlZnRpdGVtXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sZWZ0SXRlbVRpdGxlfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiaXRlbVwiLFxuICAgICAgICBcInNlYXJjaC13cmFwcGVyXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJzZWFyY2gtaWNvblwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnNlYXJjaEljb259XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgICAgICBcImlkXCI6IFwic2VhcmNoXCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJzZWFyY2gtd3JhcHBlci1pbnB1dFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IFwib25JbnB1dENsaWNrXCIsXG4gICAgICAgICAgICBcImlucHV0XCI6IFwib25pbnB1dFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucGxhY2Vob2xkZXJ9LFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudmFsdWV9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwic2VhcmNoLWNsZWFuXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy52aXNpYmlsaXR5fVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBcImNsZWFuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiw5dcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiaXRlbVwiLFxuICAgICAgICBcIml0ZW0tcmlnaHRcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwicmlnaHQtdGV4dFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgIFwiY29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJpZ2h0SXRlbUNvbG9yfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmlnaHRJdGVtVGl0bGV9LFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogXCJvbmNsaWNrcmlnaHRpdGVtXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodEl0ZW1UaXRsZX1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwicmlnaHQtaW1hZ2VcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodEl0ZW1TcmN9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodEl0ZW1TcmN9LFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogXCJvbmNsaWNrcmlnaHRpdGVtXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3NyYy9jb21wb25lbnRzL3NlYXJjaGJhci9zZWFyY2hiYXIud2Vcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMTYgMjQiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJzZWFyY2hiYXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiAxLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjZDhkOGQ4XCJcbiAgfSxcbiAgXCJzZWFyY2gtaWNvblwiOiB7XG4gICAgXCJ3aWR0aFwiOiA0OCxcbiAgICBcImhlaWdodFwiOiA0OFxuICB9LFxuICBcInNlYXJjaC1jbGVhblwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJyaWdodFwiOiAxMCxcbiAgICBcImJvdHRvbVwiOiAxMCxcbiAgICBcIndpZHRoXCI6IDQwLFxuICAgIFwiaGVpZ2h0XCI6IDQwLFxuICAgIFwiZm9udFNpemVcIjogMzYsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDQwLFxuICAgIFwiY29sb3JcIjogXCIjOTk5OTk5XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIml0ZW1cIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiaXRlbS1sZWZ0XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiAyMFxuICB9LFxuICBcIml0ZW0tcmlnaHRcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogMjBcbiAgfSxcbiAgXCJsZWZ0LWltYWdlXCI6IHtcbiAgICBcIndpZHRoXCI6IDQ4LFxuICAgIFwiaGVpZ2h0XCI6IDQ4XG4gIH0sXG4gIFwicmlnaHQtaW1hZ2VcIjoge1xuICAgIFwid2lkdGhcIjogNDgsXG4gICAgXCJoZWlnaHRcIjogNDhcbiAgfSxcbiAgXCJyaWdodC10ZXh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IDMyLFxuICAgIFwiZm9udEZhbWlseVwiOiBcIidPcGVuIFNhbnMnLCBzYW5zLXNlcmlmXCJcbiAgfSxcbiAgXCJsZWZ0LXRleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogMzIsXG4gICAgXCJmb250RmFtaWx5XCI6IFwiJ09wZW4gU2FucycsIHNhbnMtc2VyaWZcIlxuICB9LFxuICBcInNlYXJjaC13cmFwcGVyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcIndpZHRoXCI6IDQ1MCxcbiAgICBcImhlaWdodFwiOiA2MCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDYsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZWJlYmViXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogNlxuICB9LFxuICBcInNlYXJjaC13cmFwcGVyLWlucHV0XCI6IHtcbiAgICBcIndpZHRoXCI6IDM4MCxcbiAgICBcImhlaWdodFwiOiA0OCxcbiAgICBcIm1hcmdpbkxlZnRcIjogMTAsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZWJlYmViXCIsXG4gICAgXCJjb2xvclwiOiBcIiMxYTFhMWFcIixcbiAgICBcImZvbnRTaXplXCI6IDMyXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3NyYy9jb21wb25lbnRzL3NlYXJjaGJhci9zZWFyY2hiYXIud2Vcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMTYgMjQiLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2VhcmNoYmFyXCIgc3R5bGU9XCJoZWlnaHQ6e3toZWlnaHR9fTsgYmFja2dyb3VuZC1jb2xvcjp7e2JhY2tncm91bmRDb2xvcn19O1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtIGl0ZW0tbGVmdFwiPlxyXG4gICAgICAgICAgICA8aW1hZ2UgY2xhc3M9XCJsZWZ0LWltYWdlXCIgc3JjPXt7bGVmdEl0ZW1TcmN9fSBpZj17e2xlZnRJdGVtU3JjfX0gb25jbGljaz1cIm9uY2xpY2tsZWZ0aXRlbVwiPjwvaW1hZ2U+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwibGVmdC10ZXh0XCIgc3R5bGU9XCJjb2xvcjp7e2xlZnRJdGVtQ29sb3J9fTtcIiBpZj17e2xlZnRJdGVtVGl0bGV9fSBvbmNsaWNrPSBcIm9uY2xpY2tsZWZ0aXRlbVwiPnt7bGVmdEl0ZW1UaXRsZX19PC90ZXh0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtIHNlYXJjaC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxpbWFnZSBjbGFzcz1cInNlYXJjaC1pY29uXCIgc3JjPVwie3tzZWFyY2hJY29ufX1cIj48L2ltYWdlPlxyXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJzZWFyY2hcIiBjbGFzcz1cInNlYXJjaC13cmFwcGVyLWlucHV0XCIgb25jbGljaz1cIm9uSW5wdXRDbGlja1wiIG9uaW5wdXQ9XCJvbmlucHV0XCIgcGxhY2Vob2xkZXI9XCJ7e3BsYWNlaG9sZGVyfX1cIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwie3t2YWx1ZX19XCIvPlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cInNlYXJjaC1jbGVhblwiIHN0eWxlPVwidmlzaWJpbGl0eToge3t2aXNpYmlsaXR5fX1cIiBvbmNsaWNrPVwiY2xlYW5cIj7DlzwvdGV4dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbSBpdGVtLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicmlnaHQtdGV4dFwiIHN0eWxlPVwiY29sb3I6e3tyaWdodEl0ZW1Db2xvcn19O1wiIGlmPXt7cmlnaHRJdGVtVGl0bGV9fSBvbmNsaWNrPVwib25jbGlja3JpZ2h0aXRlbVwiPnt7cmlnaHRJdGVtVGl0bGV9fTwvdGV4dD5cclxuICAgICAgICAgICAgPGltYWdlIGNsYXNzPVwicmlnaHQtaW1hZ2VcIiBzcmM9e3tyaWdodEl0ZW1TcmN9fSBpZj17e3JpZ2h0SXRlbVNyY319IG9uY2xpY2s9XCJvbmNsaWNrcmlnaHRpdGVtXCI+PC9pbWFnZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c3R5bGUgc2NvcGVkPlxyXG4gICAgLnNlYXJjaGJhciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdzsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDsgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2Q4ZDhkODtcclxuICAgIH1cclxuICAgIC5zZWFyY2gtaWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDQ4cHg7IGhlaWdodDogNDhweDtcclxuICAgIH1cclxuICAgIC5zZWFyY2gtY2xlYW4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IDEwcHg7IGJvdHRvbTogMTBweDtcclxuICAgICAgICB3aWR0aDogNDBweDsgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDsgbGluZS1oZWlnaHQ6IDQwOyBjb2xvcjogIzk5OTsgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLml0ZW0geyBhbGlnbi1pdGVtczogY2VudGVyOyB9XHJcbiAgICAuaXRlbS1sZWZ0IHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuaXRlbS1yaWdodCB7IG1hcmdpbi1yaWdodDogMjBweDsgfVxyXG4gICAgLmxlZnQtaW1hZ2UgeyB3aWR0aDogNDhweDsgaGVpZ2h0OiA0OHB4OyB9XHJcbiAgICAucmlnaHQtaW1hZ2UgeyB3aWR0aDogNDhweDsgaGVpZ2h0OiA0OHB4OyB9XHJcbiAgICAucmlnaHQtdGV4dCB7IGZvbnQtc2l6ZTogMzJweDsgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmOyB9XHJcbiAgICAubGVmdC10ZXh0IHsgZm9udC1zaXplOiAzMnB4OyBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7IH1cclxuICAgIC5zZWFyY2gtd3JhcHBlciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICB3aWR0aDogNDUwcHg7ICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA2cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoLXdyYXBwZXItaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiAzODBweDsgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XHJcbiAgICAgICAgY29sb3I6ICMxYTFhMWE7IGZvbnQtc2l6ZTogMzJweDtcclxuICAgIH1cclxuPC9zdHlsZT5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vY29tbW9uL2NvbmZpZydcclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHNlYXJjaEljb246IGNvbmZpZy5pY29uLnNlYXJjaCxcclxuICAgICAgICAgICAgLy/lr7zoiKrmnaHog4zmma/oibJcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgICAgICAvL+WvvOiIquadoemrmOW6plxyXG4gICAgICAgICAgICBoZWlnaHQ6IDg4LFxyXG4gICAgICAgICAgICAvL+WvvOiIquadoeagh+mimFxyXG4gICAgICAgICAgICB0aXRsZTogXCJcIixcclxuICAgICAgICAgICAgLy/lr7zoiKrmnaHmoIfpopjpopzoibJcclxuICAgICAgICAgICAgdGl0bGVDb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgLy/lj7PkvqfmjInpkq7lm77niYdcclxuICAgICAgICAgICAgcmlnaHRJdGVtU3JjOiAnJyxcclxuICAgICAgICAgICAgLy/lj7PkvqfmjInpkq7moIfpophcclxuICAgICAgICAgICAgcmlnaHRJdGVtVGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAvL+WPs+S+p+aMiemSruagh+mimOminOiJslxyXG4gICAgICAgICAgICByaWdodEl0ZW1Db2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgLy/lt6bkvqfmjInpkq7lm77niYdcclxuICAgICAgICAgICAgbGVmdEl0ZW1TcmM6ICcnLFxyXG4gICAgICAgICAgICAvL+W3puS+p+aMiemSruagh+mimFxyXG4gICAgICAgICAgICBsZWZ0SXRlbVRpdGxlOiAnJyxcclxuICAgICAgICAgICAgLy/lt6bkvqfmjInpkq7popzoibJcclxuICAgICAgICAgICAgbGVmdEl0ZW1Db2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICfovpPlhaXllYbmiLflkI3jgIHlnLDlnYAnLFxyXG4gICAgICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIG9uSW5wdXRDbGljayAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRkaXNwYXRjaCgnbmF2aUJhci5zZWFyY2guaW5wdXQuY2xpY2snLCB7fSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uY2xpY2tyaWdodGl0ZW06IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRkaXNwYXRjaCgnbmF2aUJhci5yaWdodEl0ZW0uY2xpY2snLCB7fSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uY2xpY2tsZWZ0aXRlbTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGRpc3BhdGNoKCduYXZpQmFyLmxlZnRJdGVtLmNsaWNrJywge30pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbmlucHV0IChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dDbGVhbkJ0bigpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZUNsZWFuQnRuKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2hvd0NsZWFuQnRuICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBoaWRlQ2xlYW5CdG4gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmlsaXR5ID0gJ2hpZGRlbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2xlYW4gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9ICcnXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVDbGVhbkJ0bigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3NlYXJjaGJhci9zZWFyY2hiYXIud2U/NjE5ODg4MzYiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcInNlYXJjaGJhci1oaXN0b3J5XCJcbiAgXSxcbiAgXCJldmVudHNcIjoge1xuICAgIFwiY2xpY2tcIjogXCJoaWRlXCJcbiAgfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwic2VhcmNoYmFyLWhpc3RvcnktcGFuZWxcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwic2VhcmNoYmFyLWhpc3RvcnktdGl0bGVcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCLmkJzntKLljoblj7JcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwic2VhcmNoYmFyLWhpc3RvcnktbGlzdFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcInJlcGVhdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaXRlbXN9LFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24gKCRldmVudCkge3RoaXMuc2VhcmNoKHRoaXMudGV4dCwkZXZlbnQpfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInNlYXJjaGJhci1oaXN0b3J5LWxpc3QtaWNvblwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnVpLmljb259XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwic2VhcmNoYmFyLWhpc3RvcnktbGlzdC10ZXh0XCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50ZXh0fVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJzZWFyY2hiYXItaGlzdG9yeS1jbGVhclwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJzZWFyY2hiYXItaGlzdG9yeS1jbGVhci10ZXh0XCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJjbGVhclNlYXJjaEhpc3RvcnlcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLmuIXpmaTogYrlpKnorrDlvZVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9zcmMvY29tcG9uZW50cy9zZWFyY2hiYXIvc2VhcmNoYmFyLWhpc3Rvcnkud2Vcbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMTcgMjQiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJzZWFyY2hiYXItaGlzdG9yeVwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJ0b3BcIjogODgsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwiYm90dG9tXCI6IDAsXG4gICAgXCJ6SW5kZXhcIjogOTksXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjJmMmYyXCJcbiAgfSxcbiAgXCJzZWFyY2hiYXItaGlzdG9yeS1wYW5lbFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJzZWFyY2hiYXItaGlzdG9yeS10aXRsZVwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IDM1LFxuICAgIFwibWFyZ2luVG9wXCI6IDI3LFxuICAgIFwibWFyZ2luQm90dG9tXCI6IDEwLFxuICAgIFwiZm9udFNpemVcIjogMjQsXG4gICAgXCJjb2xvclwiOiBcIiNiZmJmYmZcIlxuICB9LFxuICBcInNlYXJjaGJhci1oaXN0b3J5LWxpc3RcIjoge1xuICAgIFwiZmxleFdyYXBcIjogXCJ3cmFwXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImZsZXgtc3RhcnRcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIndpZHRoXCI6IDcxNSxcbiAgICBcImhlaWdodFwiOiA4OCxcbiAgICBcIm1hcmdpbkxlZnRcIjogMzUsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMjAsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiAxLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjZGJkYmRiXCIsXG4gICAgXCJib3JkZXJCb3R0b21TdHlsZVwiOiBcInNvbGlkXCJcbiAgfSxcbiAgXCJzZWFyY2hiYXItaGlzdG9yeS1saXN0LWljb25cIjoge1xuICAgIFwid2lkdGhcIjogMjcsXG4gICAgXCJoZWlnaHRcIjogMjcsXG4gICAgXCJtYXJnaW5SaWdodFwiOiAxNVxuICB9LFxuICBcInNlYXJjaGJhci1oaXN0b3J5LWxpc3QtdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiAyNCxcbiAgICBcImNvbG9yXCI6IFwiIzRkNGQ0ZFwiXG4gIH0sXG4gIFwic2VhcmNoYmFyLWhpc3RvcnktY2xlYXJcIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImhlaWdodFwiOiA4OFxuICB9LFxuICBcInNlYXJjaGJhci1oaXN0b3J5LWNsZWFyLXRleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogMjgsXG4gICAgXCJjb2xvclwiOiBcIiM4MDgwODBcIlxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9zcmMvY29tcG9uZW50cy9zZWFyY2hiYXIvc2VhcmNoYmFyLWhpc3Rvcnkud2Vcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMTcgMjQiLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2VhcmNoYmFyLWhpc3RvcnlcIiBvbmNsaWNrPVwiaGlkZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2hiYXItaGlzdG9yeS1wYW5lbFwiPlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cInNlYXJjaGJhci1oaXN0b3J5LXRpdGxlXCI+5pCc57Si5Y6G5Y+yPC90ZXh0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoYmFyLWhpc3RvcnktbGlzdFwiIHJlcGVhdD1cInt7aXRlbXN9fVwiIG9uY2xpY2s9XCJzZWFyY2godGV4dClcIj5cclxuICAgICAgICAgICAgICAgIDxpbWFnZSBjbGFzcz1cInNlYXJjaGJhci1oaXN0b3J5LWxpc3QtaWNvblwiIHNyYz1cInt7dWkuaWNvbn19XCI+PC9pbWFnZT5cclxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwic2VhcmNoYmFyLWhpc3RvcnktbGlzdC10ZXh0XCI+e3t0ZXh0fX08L3RleHQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoYmFyLWhpc3RvcnktY2xlYXJcIj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwic2VhcmNoYmFyLWhpc3RvcnktY2xlYXItdGV4dFwiIG9uY2xpY2s9XCJjbGVhclNlYXJjaEhpc3RvcnlcIj7muIXpmaTogYrlpKnorrDlvZU8L3RleHQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAgIC5zZWFyY2hiYXItaGlzdG9yeSB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkOyB0b3A6IDg4cHg7IGxlZnQ6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7IHotaW5kZXg6IDk5O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoYmFyLWhpc3RvcnktcGFuZWwgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XHJcbiAgICAuc2VhcmNoYmFyLWhpc3RvcnktdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzNXB4OyBtYXJnaW4tdG9wOiAyN3B4OyBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDsgY29sb3I6ICNiZmJmYmY7XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoYmFyLWhpc3RvcnktbGlzdCB7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwOyBmbGV4LWRpcmVjdGlvbjogcm93OyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDcxNXB4OyBoZWlnaHQ6IDg4cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDM1cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7IGJvcmRlci1ib3R0b20tY29sb3I6ICNkYmRiZGI7IGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG4gICAgfVxyXG4gICAgLnNlYXJjaGJhci1oaXN0b3J5LWxpc3QtaWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDI3cHg7IGhlaWdodDogMjdweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoYmFyLWhpc3RvcnktbGlzdC10ZXh0IHsgZm9udC1zaXplOiAyNHB4OyBjb2xvcjogIzRkNGQ0ZDsgfVxyXG4gICAgLnNlYXJjaGJhci1oaXN0b3J5LWNsZWFyIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDg4cHg7XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoYmFyLWhpc3RvcnktY2xlYXItdGV4dCB7IGZvbnQtc2l6ZTogMjhweDsgY29sb3I6ICM4MDgwODA7IH1cclxuPC9zdHlsZT5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vY29tbW9uL2NvbmZpZydcclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBkYXRhICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHVpOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogY29uZmlnLmljb24uc2VhcmNoX3Bhc3NcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ+WNjua2puS4h+WuticgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICflj6/ojo7onJzlhL8nIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBzZWFyY2ggKHYpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHYpXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRkaXNwYXRjaCgnc2VyY2hiYXJIaXN0b3J5SGlkZScsIHt9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjbGVhclNlYXJjaEhpc3RvcnkgKCkge1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaGlkZSAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRkaXNwYXRjaCgnc2VyY2hiYXJIaXN0b3J5SGlkZScsIHt9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9zZWFyY2hiYXIvc2VhcmNoYmFyLWhpc3Rvcnkud2U/MDZhOGRiN2QiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImNvbnRhaW5lclwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInNlYXJjaGJhclwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInNlYXJjaGJhclwiXG4gICAgICBdLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJsZWZ0SXRlbVNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubmF2LmxlZnRJdGVtU3JjfSxcbiAgICAgICAgXCJsZWZ0SXRlbVRpdGxlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5uYXYubGVmdEl0ZW1UaXRsZX0sXG4gICAgICAgIFwibGVmdEl0ZW1Db2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubmF2LmxlZnRJdGVtQ29sb3J9LFxuICAgICAgICBcInRpdGxlQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm5hdi5jb2xvcn0sXG4gICAgICAgIFwicmlnaHRJdGVtU3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5uYXYucmlnaHRJdGVtU3JjfSxcbiAgICAgICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubmF2LmJvcmRlckJvdHRvbVdpZHRofSxcbiAgICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm5hdi5iYWNrZ3JvdW5kQ29sb3J9XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJ3cmFwcGVyXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImxpc3RcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImxpc3RcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJyZWZyZXNoLXBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxpc3QucmVmcmVzaGluZ0hlaWdodH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicmVmcmVzaFwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJyZWZyZXNoXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwicmVmcmVzaFwiOiBcIm9ucmVmcmVzaFwiLFxuICAgICAgICAgICAgICAgIFwicHVsbGluZ2Rvd25cIjogXCJvbnB1bGxpbmdkb3duXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcImRpc3BsYXlcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxpc3QucmVmcmVzaGluZz8nc2hvdyc6J2hpZGUnfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwicmVmcmVzaC1pbmRpY2F0b3JcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLliLfmlrDkuK0gLi4uXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImNlbGxcIixcbiAgICAgICAgICAgICAgXCJhcHBlbmRcIjogXCJ0cmVlXCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcIm1lcmNoYW50LWNlbGxcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJlcGVhdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGlzdC5kYXRhfSxcbiAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24gKCRldmVudCkge3RoaXMub3BlbignbWVyY2hhbnRfaW50cm9kdWN0aW9uP2lkPScrdGhpcy5pZCwkZXZlbnQpfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIm1lcmNoYW50LWNlbGwtbG9nb1wiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiAodGhpcy5hc3NldHNSb290KSArICh0aGlzLmxvZ28pfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwibWVyY2hhbnQtY2VsbC1pbmZvXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicm93LWZsZXgtc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWVyY2hhbnQtY2VsbC10aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJvdy1mbGV4LXN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZXJjaGFudC1jZWxsLXN0YXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlcGVhdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleHByZXNzaW9uXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5zdGFyc30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcInZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy52LmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWVyY2hhbnQtY2VsbC1hZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5hZGRyZXNzfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIm1lcmNoYW50LWNlbGwtZGlzdGFuY2VcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmRpc3RhbmNlfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImxvYWRpbmctcGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICBcImhlaWdodFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGlzdC5sb2FkaW5nSGVpZ2h0fVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJsb2FkaW5nXCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImxvYWRpbmdcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJsb2FkaW5nXCI6IFwib25sb2FkaW5nXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcImRpc3BsYXlcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxpc3QubG9hZGluZz8nc2hvdyc6J2hpZGUnfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiaW5kaWNhdG9yXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5ou85ZG95Yqg6L295LitIC4uLlwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJhZGRyZXNzLXNlbGVjdFwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImFkZHJlc3Mtc2VsZWN0XCJcbiAgICAgIF0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInZpc2liaWxpdHlcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnNlYXJjaGJhci5hZGRyZXNzU2VsZWN0VmlzaWJsaWxpdHl9XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJzZWFyY2hiYXItaGlzdG9yeVwiLFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwidmlzaWJpbGl0eVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuc2VhcmNoYmFyLmhpc3RvcnlWaXNpYmlsaXR5fVxuICAgICAgfVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vc3JjL3ZpZXdzL21lcmNoYW50LndlXG4vLyBtb2R1bGUgaWQgPSAxNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAyNCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImFkZHJlc3Mtc2VsZWN0XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcInRvcFwiOiAwLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcImJvdHRvbVwiOiAwLFxuICAgIFwiekluZGV4XCI6IDk5LFxuICAgIFwid2lkdGhcIjogNzUwXG4gIH0sXG4gIFwiY29udGFpbmVyXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmMmYyZjJcIlxuICB9LFxuICBcIndyYXBwZXJcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wXCI6IDAsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwiYm90dG9tXCI6IDAsXG4gICAgXCJ3aWR0aFwiOiA3NTAsXG4gICAgXCJtYXJnaW5Ub3BcIjogODgsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJzZWFyY2hiYXJcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgIFwidG9wXCI6IDAsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwiekluZGV4XCI6IDE1LFxuICAgIFwid2lkdGhcIjogNzUwLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwicmVmcmVzaFwiOiB7XG4gICAgXCJ6SW5kZXhcIjogMTAsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwid2lkdGhcIjogNzUwLFxuICAgIFwiaGVpZ2h0XCI6IDgwLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZhZmFmYVwiLFxuICAgIFwiY29sb3JcIjogXCIjOTk5OTk5XCJcbiAgfSxcbiAgXCJyZWZyZXNoLWluZGljYXRvclwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogMjBcbiAgfSxcbiAgXCJyZWZyZXNoLXBsYWNlaG9sZGVyXCI6IHtcbiAgICBcInpJbmRleFwiOiAwLFxuICAgIFwid2lkdGhcIjogNzUwXG4gIH0sXG4gIFwibG9hZGluZ1wiOiB7XG4gICAgXCJ6SW5kZXhcIjogMTAsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwid2lkdGhcIjogNzUwLFxuICAgIFwiaGVpZ2h0XCI6IDgwLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZhZmFmYVwiLFxuICAgIFwiY29sb3JcIjogXCIjOTk5OTk5XCIsXG4gICAgXCJvcGFjaXR5XCI6IDAuOVxuICB9LFxuICBcImxvYWRpbmctcGxhY2Vob2xkZXJcIjoge1xuICAgIFwiekluZGV4XCI6IDAsXG4gICAgXCJ3aWR0aFwiOiA3NTBcbiAgfSxcbiAgXCJtZXJjaGFudC1jZWxsXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1zdGFydFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwid2lkdGhcIjogNzUwLFxuICAgIFwiaGVpZ2h0XCI6IDE3MCxcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI2RiZGJkYlwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogMVxuICB9LFxuICBcIm1lcmNoYW50LWNlbGwtbG9nb1wiOiB7XG4gICAgXCJ3aWR0aFwiOiAxNjAsXG4gICAgXCJoZWlnaHRcIjogMTMwLFxuICAgIFwibWFyZ2luUmlnaHRcIjogMjBcbiAgfSxcbiAgXCJtZXJjaGFudC1jZWxsLWluZm9cIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwibWVyY2hhbnQtY2VsbC10aXRsZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiAzMixcbiAgICBcImNvbG9yXCI6IFwiIzFhMWExYVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IDE2XG4gIH0sXG4gIFwibWVyY2hhbnQtY2VsbC1zdGFyXCI6IHtcbiAgICBcIndpZHRoXCI6IDI4LFxuICAgIFwiaGVpZ2h0XCI6IDI4LFxuICAgIFwibWFyZ2luUmlnaHRcIjogM1xuICB9LFxuICBcIm1lcmNoYW50LWNlbGwtYWRkcmVzc1wiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogMjAsXG4gICAgXCJmb250U2l6ZVwiOiAyNCxcbiAgICBcImNvbG9yXCI6IFwiIzY2NjY2NlwiXG4gIH0sXG4gIFwibWVyY2hhbnQtY2VsbC1kaXN0YW5jZVwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJyaWdodFwiOiAzMCxcbiAgICBcImJvdHRvbVwiOiAyMCxcbiAgICBcImZvbnRTaXplXCI6IDI0LFxuICAgIFwiY29sb3JcIjogXCIjMWExYTFhXCJcbiAgfSxcbiAgXCJyb3ctZmxleC1zdGFydFwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImZsZXgtc3RhcnRcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIlxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9zcmMvdmlld3MvbWVyY2hhbnQud2Vcbi8vIG1vZHVsZSBpZCA9IDE2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDI0IiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxzZWFyY2hiYXIgY2xhc3M9XCJzZWFyY2hiYXJcIlxyXG4gICAgICAgIGxlZnQtaXRlbS1zcmM9XCJ7e25hdi5sZWZ0SXRlbVNyY319XCJcclxuICAgICAgICBsZWZ0LWl0ZW0tdGl0bGU9XCJ7e25hdi5sZWZ0SXRlbVRpdGxlfX1cIlxyXG4gICAgICAgIGxlZnQtaXRlbS1jb2xvcj1cInt7bmF2LmxlZnRJdGVtQ29sb3J9fVwiXHJcbiAgICAgICAgdGl0bGUtY29sb3I9XCJ7e25hdi5jb2xvcn19XCJcclxuICAgICAgICByaWdodC1pdGVtLXNyYz1cInt7bmF2LnJpZ2h0SXRlbVNyY319XCJcclxuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoPVwie3tuYXYuYm9yZGVyQm90dG9tV2lkdGh9fVwiXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcj1cInt7bmF2LmJhY2tncm91bmRDb2xvcn19XCI+PC9zZWFyY2hiYXI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGxpc3QgY2xhc3M9XCJsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVmcmVzaC1wbGFjZWhvbGRlclwiIHN0eWxlPVwiaGVpZ2h0OiB7e2xpc3QucmVmcmVzaGluZ0hlaWdodH19XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cmVmcmVzaCBjbGFzcz1cInJlZnJlc2hcIiBvbnJlZnJlc2g9XCJvbnJlZnJlc2hcIiBvbnB1bGxpbmdkb3duPVwib25wdWxsaW5nZG93blwiIGRpc3BsYXk9XCJ7e2xpc3QucmVmcmVzaGluZyA/ICdzaG93JyA6ICdoaWRlJ319XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJyZWZyZXNoLWluZGljYXRvclwiPuWIt+aWsOS4rSAuLi48L3RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L3JlZnJlc2g+XHJcbiAgICAgICAgICAgICAgICA8Y2VsbCBjbGFzcz1cIm1lcmNoYW50LWNlbGxcIiByZXBlYXQ9XCJ7e2xpc3QuZGF0YX19XCIgb25jbGljaz1cIm9wZW4oJ21lcmNoYW50X2ludHJvZHVjdGlvbj9pZD0nICsgaWQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltYWdlIGNsYXNzPVwibWVyY2hhbnQtY2VsbC1sb2dvXCIgc3JjPVwie3thc3NldHNSb290fX17e2xvZ299fVwiPjwvaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lcmNoYW50LWNlbGwtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93LWZsZXgtc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwibWVyY2hhbnQtY2VsbC10aXRsZVwiPnt7dGl0bGV9fTwvdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3ctZmxleC1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltYWdlIGNsYXNzPVwibWVyY2hhbnQtY2VsbC1zdGFyXCIgcmVwZWF0PVwie3t2IGluIHN0YXJzfX1cIiBzcmM9XCJ7e3YuaW1hZ2V9fVwiPjwvaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cIm1lcmNoYW50LWNlbGwtYWRkcmVzc1wiPnt7YWRkcmVzc319PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwibWVyY2hhbnQtY2VsbC1kaXN0YW5jZVwiPnt7ZGlzdGFuY2V9fTwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDwvY2VsbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nLXBsYWNlaG9sZGVyXCIgc3R5bGU9XCJoZWlnaHQ6IHt7bGlzdC5sb2FkaW5nSGVpZ2h0fX1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxsb2FkaW5nIGNsYXNzPVwibG9hZGluZ1wiIG9ubG9hZGluZz1cIm9ubG9hZGluZ1wiIGRpc3BsYXk9XCJ7e2xpc3QubG9hZGluZyA/ICdzaG93JyA6ICdoaWRlJ319XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJpbmRpY2F0b3JcIj7mi7zlkb3liqDovb3kuK0gLi4uPC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9sb2FkaW5nPlxyXG4gICAgICAgICAgICA8L2xpc3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGFkZHJlc3Mtc2VsZWN0IGNsYXNzPVwiYWRkcmVzcy1zZWxlY3RcIiB2aXNpYmlsaXR5PVwie3tzZWFyY2hiYXIuYWRkcmVzc1NlbGVjdFZpc2libGlsaXR5fX1cIj48L2FkZHJlc3Mtc2VsZWN0PlxyXG4gICAgICAgIDxzZWFyY2hiYXItaGlzdG9yeSBzdHlsZT1cInZpc2liaWxpdHk6IHt7c2VhcmNoYmFyLmhpc3RvcnlWaXNpYmlsaXR5fX1cIj48L3NlYXJjaGJhci1oaXN0b3J5PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGU+XHJcbiAgICAuYWRkcmVzcy1zZWxlY3Qge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDsgdG9wOiAwOyBsZWZ0OiAwOyByaWdodDogMDsgYm90dG9tOiAwOyB6LWluZGV4OiA5OTtcclxuICAgICAgICB3aWR0aDogNzUwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gICAgfVxyXG4gICAgLndyYXBwZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyByaWdodDogMDsgYm90dG9tOiAwO1xyXG4gICAgICAgIHdpZHRoOiA3NTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4OHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoYmFyIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7IHRvcDogMDsgbGVmdDogMDsgcmlnaHQ6IDA7IHotaW5kZXg6IDE1O1xyXG4gICAgICAgIHdpZHRoOiA3NTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgIC5yZWZyZXNoIHtcclxuICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogNzUwcHg7IGhlaWdodDogODBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgfVxyXG4gICAgLnJlZnJlc2gtaW5kaWNhdG9yIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLnJlZnJlc2gtcGxhY2Vob2xkZXIge1xyXG4gICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgICAgd2lkdGg6IDc1MHB4O1xyXG4gICAgfVxyXG4gICAgLmxvYWRpbmcge1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiA3NTBweDsgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgb3BhY2l0eTogLjk7XHJcbiAgICB9XHJcbiAgICAubG9hZGluZy1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICB3aWR0aDogNzUwcHg7XHJcbiAgICB9XHJcbiAgICAubWVyY2hhbnQtY2VsbCB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdzsganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiA3NTBweDsgaGVpZ2h0OiAxNzBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZGJkYmRiOyBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcbiAgICB9XHJcbiAgICAubWVyY2hhbnQtY2VsbC1sb2dvIHtcclxuICAgICAgICB3aWR0aDogMTYwcHg7IGhlaWdodDogMTMwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLm1lcmNoYW50LWNlbGwtaW5mbyB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB9XHJcbiAgICAubWVyY2hhbnQtY2VsbC10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMnB4OyBjb2xvcjogIzFhMWExYTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLm1lcmNoYW50LWNlbGwtc3RhciB7XHJcbiAgICAgICAgd2lkdGg6IDI4cHg7IGhlaWdodDogMjhweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgIH1cclxuICAgIC5tZXJjaGFudC1jZWxsLWFkZHJlc3Mge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4OyBjb2xvcjogIzY2NjtcclxuICAgIH1cclxuICAgIC5tZXJjaGFudC1jZWxsLWRpc3RhbmNlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHJpZ2h0OiAzMHB4OyBib3R0b206IDIwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4OyBjb2xvcjogIzFhMWExYTtcclxuICAgIH1cclxuICAgIC5yb3ctZmxleC1zdGFydCB7IGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxyXG5cclxuXHJcbjwvc3R5bGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgY29uc3QgYW5pbWF0aW9uID0gcmVxdWlyZSgnQHdlZXgtbW9kdWxlL2FuaW1hdGlvbicpXHJcbiAgICBpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbW1vbi9jb25maWcnXHJcbiAgICBpbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vY29tbW9uL2FwaSdcclxuICAgIGltcG9ydCAqIGFzIG1ldGhvZHMgZnJvbSAnLi4vY29tbW9uL21ldGhvZHMnXHJcbiAgICByZXF1aXJlKCcuLi9jb21wb25lbnRzL2FwcC1saXN0L2FwcC1saXN0LWl0ZW0ud2UnKVxyXG4gICAgcmVxdWlyZSgnLi4vY29tcG9uZW50cy9zZWFyY2hiYXIvc2VhcmNoYmFyLndlJylcclxuICAgIHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvc2VhcmNoYmFyL3NlYXJjaGJhci1oaXN0b3J5LndlJylcclxuICAgIHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvYWRkcmVzcy1zZWxlY3QvYWRkcmVzcy1zZWxlY3Qud2UnKVxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgbmF2OiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyM0ZDRkNGQnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aDogMSxcclxuICAgICAgICAgICAgICAgIGxlZnRJdGVtQ29sb3I6ICcjM2I4YWVhJyxcclxuICAgICAgICAgICAgICAgIGxlZnRJdGVtVGl0bGU6ICfmna3lt54nLFxyXG4gICAgICAgICAgICAgICAgbGVmdEl0ZW1TcmM6IGNvbmZpZy5pY29uLm1hcF9saWZlLFxyXG4gICAgICAgICAgICAgICAgcmlnaHRJdGVtU3JjOiBjb25maWcuaWNvbi5hcm91bmRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2VhcmNoYmFyOiB7XHJcbiAgICAgICAgICAgICAgICBoaXN0b3J5VmlzaWJpbGl0eTogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzU2VsZWN0VmlzaWJsaWxpdHk6ICdoaWRkZW4nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxpc3Q6IHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IFtdLFxyXG4gICAgICAgICAgICAgICAgcmVmcmVzaGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHJlZnJlc2hpbmdIZWlnaHQ6IDAsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nSGVpZ2h0OiAwLFxyXG4gICAgICAgICAgICAgICAgbW9jazogMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1aToge1xyXG4gICAgICAgICAgICAgICAgc3RhcjogY29uZmlnLmljb24uc3RhcixcclxuICAgICAgICAgICAgICAgIGhhbGZfc3RhcjogY29uZmlnLmljb24uaGFsZl9zdGFyXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFzc2V0c1Jvb3Q6IGNvbmZpZy5hc3NldHNSb290XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVhdGVkICgpIHtcclxuICAgICAgICAgICAgLyphcGkuZmV0Y2hNZXJjaGFudENhdGVnb3J5KCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBzID0gcmVzXHJcbiAgICAgICAgICAgIH0pKi9cclxuXHJcbiAgICAgICAgICAgIHRoaXMubG9hZE1lcmNoYW50TGlzdCgpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdC5kYXRhID0gZGF0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLm5hdmJhckluaXQoKVxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICBsb2FkTWVyY2hhbnRMaXN0IChhZGFwdGVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXBpLmZldGNoTWVyY2hhbnRMaXN0KCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIGFkYXB0ZXIgIT09ICdmdW5jdGlvbicgPyB0aGlzLmZvcm1hdE1lcmNoYW50TGlzdChyZXMpIDogYWRhcHRlcih0aGlzLmZvcm1hdE1lcmNoYW50TGlzdChyZXMpKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25sb2FkaW5nICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdC5sb2FkaW5nSGVpZ2h0ID0gODBcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdC5sb2FkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkTWVyY2hhbnRMaXN0KCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3QuZGF0YS5wdXNoKHYpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdC5sb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0LmxvYWRpbmdIZWlnaHQgPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9ucmVmcmVzaCAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdC5yZWZyZXNoaW5nSGVpZ2h0ID0gODBcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdC5yZWZyZXNoaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkTWVyY2hhbnRMaXN0KChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19tb2NrTGlzdERhdGEoZGF0YSlcclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0LmRhdGEgPSBkYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdC5yZWZyZXNoaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0LnJlZnJlc2hpbmdIZWlnaHQgPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIFRPRE8gREVMRVRFXHJcbiAgICAgICAgICAgIC8vIOS8qumAoOWIt+aWsOWIl+ihqFxyXG4gICAgICAgICAgICBfX21vY2tMaXN0RGF0YSAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdC5tb2NrICs9ICcxJ1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IFtdXHJcbiAgICAgICAgICAgICAgICBsZXQgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gdmFsdWUubGVuZ3RoOyBpID4gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVbcl0uaWQgPSB0aGlzLmxpc3QubW9jayArIGlcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh2YWx1ZVtyXSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZVtyXS5pZClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZm9ybWF0TWVyY2hhbnRMaXN0ICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2LnN0YXJzID0gdGhpcy5zY29yZVRvU3Rhcih2LnNjb3JlKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzY29yZVRvU3RhciAoc2NvcmUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IDBcclxuICAgICAgICAgICAgICAgIGxldCBzdGFycyA9IFtdXHJcbiAgICAgICAgICAgICAgICBsZXQgZW5kID0gW11cclxuICAgICAgICAgICAgICAgIGlmIChzY29yZSAlIDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzY29yZS0tXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogdGhpcy51aS5oYWxmX3N0YXJcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY29yZTsgaSA9IGkgKyAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiB0aGlzLnVpLnN0YXJcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50ICsrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhcnMuY29uY2F0KGVuZClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbmF2YmFySW5pdCAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaEhpc3RvcnlJbml0KClcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkcmVzc1NlbGVjdEluaXQoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5vbmNsaWNrbGVmdGl0ZW0oKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5vbmNsaWNrcmlnaHRpdGVtKClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2VhcmNoSGlzdG9yeUluaXQgKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kb24oJ25hdmlCYXIuc2VhcmNoLmlucHV0LmNsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hiYXIuaGlzdG9yeVZpc2liaWxpdHkgPSAndmlzaWJsZSdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kb24oJ3NlcmNoYmFySGlzdG9yeUhpZGUnLCBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaGJhci5oaXN0b3J5VmlzaWJpbGl0eSA9ICdoaWRkZW4nXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbmNsaWNrbGVmdGl0ZW0gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kb24oJ25hdmlCYXIubGVmdEl0ZW0uY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaGJhci5hZGRyZXNzU2VsZWN0VmlzaWJsaWxpdHkgPSAndmlzaWJsZSdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbmNsaWNrcmlnaHRpdGVtICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJG9uKCduYXZpQmFyLnJpZ2h0SXRlbS5jbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbignbWVyY2hhbnRfbmVhcmJ5JylcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhZGRyZXNzU2VsZWN0SW5pdCAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRvbignc2V0UG9zaXRpb24nLCBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdi5sZWZ0SXRlbVRpdGxlID0gZS5kZXRhaWxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaGJhci5hZGRyZXNzU2VsZWN0VmlzaWJsaWxpdHkgPSAnaGlkZGVuJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHRoaXMuJG9uKCdhZGRyZXNzU2VsZWN0SGlkZScsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoYmFyLmFkZHJlc3NTZWxlY3RWaXNpYmxpbGl0eSA9ICdoaWRkZW4nXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgc2VhcmNoQWN0aXZlICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoQW5pbWF0ZSh0cnVlKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZWFyY2hDYW5jZWwgKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hBbmltYXRlKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy4kZWwoJ3NlYXJjaCcpLmZpcmVFdmVudCgnYmx1cicpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlYXJjaCAoKSB7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZWFyY2hBbmltYXRlIChpc0luKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGVmdCA9IHRoaXMuJGVsKCdsZWZ0JylcclxuICAgICAgICAgICAgICAgIHZhciBsZWZ0SWNvbiA9IHRoaXMuJGVsKCdsZWZ0SWNvbicpXHJcbiAgICAgICAgICAgICAgICB2YXIgc2VhcmNoID0gdGhpcy4kZWwoJ3NlYXJjaCcpXHJcbiAgICAgICAgICAgICAgICB2YXIgc2VhcmNoSWNvbiA9IHRoaXMuJGVsKCdzZWFyY2gtaWNvbicpXHJcbiAgICAgICAgICAgICAgICB2YXIgcmlnaHRJbWFnZSA9IHRoaXMuJGVsKCdyaWdodC1pbWFnZScpXHJcbiAgICAgICAgICAgICAgICB2YXIgcmlnaHRUZXh0ID0gdGhpcy4kZWwoJ3JpZ2h0LXRleHQnKVxyXG5cclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24obGVmdCwgaXNJbilcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24obGVmdEljb24sIGlzSW4pXHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uKHNlYXJjaCwgaXNJbiwge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBpc0luID8gJzYwMHB4JyA6ICc0MDBweCcsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbihzZWFyY2hJY29uLCBpc0luKVxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbihyaWdodEltYWdlLCBpc0luLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBpc0luID8gJ3RyYW5zbGF0ZSg4MHB4LCAwKScgOiAndHJhbnNsYXRlKDAsIDApJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24ocmlnaHRUZXh0LCBpc0luLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IGlzSW4gPyAyNCA6IDIwLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IGlzSW4gPyAxIDogMCxcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMCwgMCknXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHRyYW5zZm9ybShpc0luKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzSW4gPyAndHJhbnNsYXRlKC0xMzBweCwgMCknIDogJ3RyYW5zbGF0ZSgwLCAwKSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHRyYW5zaXRpb24oZWwsIGlzSW4sIHN0eWxlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi50cmFuc2l0aW9uKGVsLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybShpc0luKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBzdHlsZXMgfHwge30pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwLCAvL21zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnZWFzZS1pbi1vdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMCAvL21zXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIG1ldGhvZHMpXHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlld3MvbWVyY2hhbnQud2U/Mzk4ZTMyMzgiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3NlYXJjaGJhci53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9zZWFyY2hiYXIud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9zZWFyY2hiYXIud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvc2VhcmNoYmFyJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL3NlYXJjaGJhci9zZWFyY2hiYXIud2Vcbi8vIG1vZHVsZSBpZCA9IDE2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDI0IiwidmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9zZWFyY2hiYXItaGlzdG9yeS53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9zZWFyY2hiYXItaGlzdG9yeS53ZVwiKVxudmFyIF9fd2VleF9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3NlYXJjaGJhci1oaXN0b3J5LndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L3NlYXJjaGJhci1oaXN0b3J5JywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL3NlYXJjaGJhci9zZWFyY2hiYXItaGlzdG9yeS53ZVxuLy8gbW9kdWxlIGlkID0gMTY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMjQiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL2FkZHJlc3Mtc2VsZWN0LndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL2FkZHJlc3Mtc2VsZWN0LndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vYWRkcmVzcy1zZWxlY3Qud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvYWRkcmVzcy1zZWxlY3QnLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvYWRkcmVzcy1zZWxlY3QvYWRkcmVzcy1zZWxlY3Qud2Vcbi8vIG1vZHVsZSBpZCA9IDE2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDI0Il0sInNvdXJjZVJvb3QiOiIifQ==