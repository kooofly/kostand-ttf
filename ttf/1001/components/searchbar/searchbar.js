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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(91)
	var __weex_style__ = __webpack_require__(92)
	var __weex_script__ = __webpack_require__(93)
	
	__weex_define__('@weex-component/f30cdf3d1c04881788f05641cdfad28f', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})
	
	__weex_bootstrap__('@weex-component/f30cdf3d1c04881788f05641cdfad28f',undefined,undefined)

/***/ },

/***/ 49:
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

/***/ 91:
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

/***/ 92:
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

/***/ 93:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _config = __webpack_require__(49);
	
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


/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTZlY2Q1YzViMGFjZjE5MzZkYmI/YzBlMCoqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VhcmNoYmFyL3NlYXJjaGJhci53ZT9kOTdjIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29uZmlnLmpzP2MxODMqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlYXJjaGJhci9zZWFyY2hiYXIud2U/MjA4ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWFyY2hiYXIvc2VhcmNoYmFyLndlP2Q4NTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VhcmNoYmFyL3NlYXJjaGJhci53ZSJdLCJuYW1lcyI6WyJhc3NldHNSb290IiwiaWNvbiIsInYiLCJzY3JpcHRIb3N0IiwiaHRtbEluZGV4Iiwic2NyaXB0Um9vdCIsImFwaVJvb3QiLCJhbmRyb2lkQXNzZXRzUm9vdCIsIm1hcCIsIm1hcF9saWZlIiwibm90aWNlIiwic2NhbiIsImNvZGUiLCJ0cmFuc2FjdGlvbl9yZWNvcmQiLCJzZWFyY2giLCJiYWNrIiwicmlnaHRfYXJyb3ciLCJhcm91bmQiLCJzZWFyY2hfcGFzcyIsInN0YXIiLCJoYWxmX3N0YXIiLCJkcm9wZG93biIsInRpY2siLCJjb2xsZWN0IiwiY29sbGVjdF91bnNlbGVjdGVkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUM7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O0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7QUNWQTs7Ozs7Ozs7MkNBSUE7OzBCQUVBOztpQkFFQTs7Z0JBRUE7O3FCQUVBOzt1QkFFQTs7eUJBRUE7O3lCQUVBOztzQkFFQTs7d0JBRUE7O3dCQUNBO3NCQUNBO2dCQUNBO3FCQUVBO0FBekJBOzsrQ0EyQkE7MERBQ0E7QUFDQTs7d0RBQ0E7dURBQ0E7QUFDQTtzREFDQTtzREFDQTtBQUNBO3NDQUNBOzRCQUNBOzZCQUNBO3NCQUNBO29CQUNBO3NCQUNBO0FBQ0E7QUFDQTsrQ0FDQTsrQkFDQTtBQUNBOytDQUNBOytCQUNBO0FBQ0E7aUNBQ0E7MEJBQ0E7a0JBQ0E7QUFFQTtBQTVCQTtBQTNCQSIsImZpbGUiOiJjb21wb25lbnRzXFxzZWFyY2hiYXJcXHNlYXJjaGJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDk2ZWNkNWM1YjBhY2YxOTM2ZGJiIiwidmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9zZWFyY2hiYXIud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vc2VhcmNoYmFyLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vc2VhcmNoYmFyLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L2YzMGNkZjNkMWMwNDg4MTc4OGYwNTY0MWNkZmFkMjhmJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cbl9fd2VleF9ib290c3RyYXBfXygnQHdlZXgtY29tcG9uZW50L2YzMGNkZjNkMWMwNDg4MTc4OGYwNTY0MWNkZmFkMjhmJyx1bmRlZmluZWQsdW5kZWZpbmVkKVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvc2VhcmNoYmFyL3NlYXJjaGJhci53ZT9lbnRyeT10cnVlXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMTYiLCIvLyBjb25zdCBhc3NldHNVUkwgPSAnZmlsZTovLy9zZGNhcmQvaW1nLydcclxuY29uc3QgYXNzZXRzUm9vdCA9ICdodHRwczovL2tvb29mbHkuZ2l0aHViLmlvL2tvc3RhbmQtdHRmL3R0Zi9hc3NldHMvJ1xyXG5cclxuZnVuY3Rpb24gaWNvbih2KSB7XHJcbiAgICByZXR1cm4gYXNzZXRzUm9vdCArICdpY29uLycgKyB2XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgLy8gd2VleOiEmuacrGhvc3RcclxuICAgIHNjcmlwdEhvc3Q6ICdodHRwczovL2tvb29mbHkuZ2l0aHViLmlvL2tvc3RhbmQtdHRmL3R0ZicsXHJcbiAgICAvLyBIVE1MIGluZGV4XHJcbiAgICBodG1sSW5kZXg6ICdodHRwczovL2tvb29mbHkuZ2l0aHViLmlvL2tvc3RhbmQtdHRmL3R0Zi9pbmRleC5odG1sJyxcclxuICAgIC8vIHdlZXjohJrmnKzmoLnnm67lvZVcclxuICAgIHNjcmlwdFJvb3Q6ICcvMTAwMS8nLFxyXG4gICAgLy8g5Zu+54mH562J6Z2Z5oCB6LWE5rqQ5qC555uu5b2VXHJcbiAgICBhc3NldHNSb290OiBhc3NldHNSb290LFxyXG4gICAgLy8gcmVzZXRmdWwgQVBJ5pyN5Yqh5qC56Lev5b6EXHJcbiAgICBhcGlSb290OiAnaHR0cHM6Ly9rb29vZmx5LmdpdGh1Yi5pby9rb3N0YW5kLXR0Zi90dGYvYXBpL3YxJyxcclxuICAgIC8vIGFuZHJvaWQg5pys5Zyw6Z2Z5oCB6LWE5rqQ6Lev5b6EXHJcbiAgICBhbmRyb2lkQXNzZXRzUm9vdDogJ2ZpbGU6Ly8vc2RjYXJkL2Fzc2V0cy8nLFxyXG4gICAgaWNvbjoge1xyXG4gICAgICAgIG1hcDogaWNvbignbWFwQDJ4LnBuZycpLFxyXG4gICAgICAgIG1hcF9saWZlOiBpY29uKCdtYXBfbGlmZUAyeC5wbmcnKSxcclxuICAgICAgICBub3RpY2U6IGljb24oJ25vdGljZUAyeC5wbmcnKSxcclxuICAgICAgICBzY2FuOiBpY29uKCdzY2FuQDJ4LnBuZycpLFxyXG4gICAgICAgIGNvZGU6IGljb24oJ2NvZGVAMngucG5nJyksXHJcbiAgICAgICAgdHJhbnNhY3Rpb25fcmVjb3JkOiBpY29uKCd0cmFuc2FjdGlvbl9yZWNvcmRAMngucG5nJyksXHJcbiAgICAgICAgc2VhcmNoOiBpY29uKCdzZWFyY2hAMngucG5nJyksXHJcbiAgICAgICAgYmFjazogaWNvbignYmFja0AyeC5wbmcnKSxcclxuICAgICAgICByaWdodF9hcnJvdzogaWNvbigncmlnaHRfYXJyb3dAMngucG5nJyksXHJcbiAgICAgICAgc2VhcmNoOiBpY29uKCdzZWFyY2hfc2hvcEAyeC5wbmcnKSxcclxuICAgICAgICBhcm91bmQ6IGljb24oJ2Fyb3VuZEAyeC5wbmcnKSxcclxuICAgICAgICBzZWFyY2hfcGFzczogaWNvbignc2VhcmNoX3Bhc3NAMngucG5nJyksXHJcbiAgICAgICAgc3RhcjogaWNvbignc3RhckAyeC5wbmcnKSxcclxuICAgICAgICBoYWxmX3N0YXI6IGljb24oJ2hhbGZfc3RhckAyeC5wbmcnKSxcclxuICAgICAgICBkcm9wZG93bjogaWNvbignZHJvcGRvd25AMngucG5nJyksXHJcbiAgICAgICAgdGljazogaWNvbigndGlja0AyeC5wbmcnKSxcclxuICAgICAgICBjb2xsZWN0OiBpY29uKCdjb2xsZWN0QDJ4LnBuZycpLFxyXG4gICAgICAgIGNvbGxlY3RfdW5zZWxlY3RlZDogaWNvbignY29sbGVjdC11bnNlbGVjdGVkQDJ4LnBuZycpXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2NvbmZpZy5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwic2VhcmNoYmFyXCJcbiAgXSxcbiAgXCJzdHlsZVwiOiB7XG4gICAgXCJoZWlnaHRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmhlaWdodH0sXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmJhY2tncm91bmRDb2xvcn1cbiAgfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiaXRlbVwiLFxuICAgICAgICBcIml0ZW0tbGVmdFwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwibGVmdC1pbWFnZVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtU3JjfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGVmdEl0ZW1TcmN9LFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogXCJvbmNsaWNrbGVmdGl0ZW1cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImxlZnQtdGV4dFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgIFwiY29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtQ29sb3J9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sZWZ0SXRlbVRpdGxlfSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IFwib25jbGlja2xlZnRpdGVtXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sZWZ0SXRlbVRpdGxlfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiaXRlbVwiLFxuICAgICAgICBcInNlYXJjaC13cmFwcGVyXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJzZWFyY2gtaWNvblwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnNlYXJjaEljb259XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgICAgICBcImlkXCI6IFwic2VhcmNoXCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJzZWFyY2gtd3JhcHBlci1pbnB1dFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IFwib25JbnB1dENsaWNrXCIsXG4gICAgICAgICAgICBcImlucHV0XCI6IFwib25pbnB1dFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucGxhY2Vob2xkZXJ9LFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudmFsdWV9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwic2VhcmNoLWNsZWFuXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy52aXNpYmlsaXR5fVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBcImNsZWFuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiw5dcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiaXRlbVwiLFxuICAgICAgICBcIml0ZW0tcmlnaHRcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwicmlnaHQtdGV4dFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgIFwiY29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJpZ2h0SXRlbUNvbG9yfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmlnaHRJdGVtVGl0bGV9LFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogXCJvbmNsaWNrcmlnaHRpdGVtXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodEl0ZW1UaXRsZX1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwicmlnaHQtaW1hZ2VcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodEl0ZW1TcmN9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodEl0ZW1TcmN9LFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogXCJvbmNsaWNrcmlnaHRpdGVtXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3NyYy9jb21wb25lbnRzL3NlYXJjaGJhci9zZWFyY2hiYXIud2Vcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMTYgMjQiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJzZWFyY2hiYXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiAxLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjZDhkOGQ4XCJcbiAgfSxcbiAgXCJzZWFyY2gtaWNvblwiOiB7XG4gICAgXCJ3aWR0aFwiOiA0OCxcbiAgICBcImhlaWdodFwiOiA0OFxuICB9LFxuICBcInNlYXJjaC1jbGVhblwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJyaWdodFwiOiAxMCxcbiAgICBcImJvdHRvbVwiOiAxMCxcbiAgICBcIndpZHRoXCI6IDQwLFxuICAgIFwiaGVpZ2h0XCI6IDQwLFxuICAgIFwiZm9udFNpemVcIjogMzYsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDQwLFxuICAgIFwiY29sb3JcIjogXCIjOTk5OTk5XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIml0ZW1cIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiaXRlbS1sZWZ0XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiAyMFxuICB9LFxuICBcIml0ZW0tcmlnaHRcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogMjBcbiAgfSxcbiAgXCJsZWZ0LWltYWdlXCI6IHtcbiAgICBcIndpZHRoXCI6IDQ4LFxuICAgIFwiaGVpZ2h0XCI6IDQ4XG4gIH0sXG4gIFwicmlnaHQtaW1hZ2VcIjoge1xuICAgIFwid2lkdGhcIjogNDgsXG4gICAgXCJoZWlnaHRcIjogNDhcbiAgfSxcbiAgXCJyaWdodC10ZXh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IDMyLFxuICAgIFwiZm9udEZhbWlseVwiOiBcIidPcGVuIFNhbnMnLCBzYW5zLXNlcmlmXCJcbiAgfSxcbiAgXCJsZWZ0LXRleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogMzIsXG4gICAgXCJmb250RmFtaWx5XCI6IFwiJ09wZW4gU2FucycsIHNhbnMtc2VyaWZcIlxuICB9LFxuICBcInNlYXJjaC13cmFwcGVyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcIndpZHRoXCI6IDQ1MCxcbiAgICBcImhlaWdodFwiOiA2MCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDYsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZWJlYmViXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogNlxuICB9LFxuICBcInNlYXJjaC13cmFwcGVyLWlucHV0XCI6IHtcbiAgICBcIndpZHRoXCI6IDM4MCxcbiAgICBcImhlaWdodFwiOiA0OCxcbiAgICBcIm1hcmdpbkxlZnRcIjogMTAsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZWJlYmViXCIsXG4gICAgXCJjb2xvclwiOiBcIiMxYTFhMWFcIixcbiAgICBcImZvbnRTaXplXCI6IDMyXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3NyYy9jb21wb25lbnRzL3NlYXJjaGJhci9zZWFyY2hiYXIud2Vcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMTYgMjQiLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2VhcmNoYmFyXCIgc3R5bGU9XCJoZWlnaHQ6e3toZWlnaHR9fTsgYmFja2dyb3VuZC1jb2xvcjp7e2JhY2tncm91bmRDb2xvcn19O1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtIGl0ZW0tbGVmdFwiPlxyXG4gICAgICAgICAgICA8aW1hZ2UgY2xhc3M9XCJsZWZ0LWltYWdlXCIgc3JjPXt7bGVmdEl0ZW1TcmN9fSBpZj17e2xlZnRJdGVtU3JjfX0gb25jbGljaz1cIm9uY2xpY2tsZWZ0aXRlbVwiPjwvaW1hZ2U+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwibGVmdC10ZXh0XCIgc3R5bGU9XCJjb2xvcjp7e2xlZnRJdGVtQ29sb3J9fTtcIiBpZj17e2xlZnRJdGVtVGl0bGV9fSBvbmNsaWNrPSBcIm9uY2xpY2tsZWZ0aXRlbVwiPnt7bGVmdEl0ZW1UaXRsZX19PC90ZXh0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtIHNlYXJjaC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxpbWFnZSBjbGFzcz1cInNlYXJjaC1pY29uXCIgc3JjPVwie3tzZWFyY2hJY29ufX1cIj48L2ltYWdlPlxyXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJzZWFyY2hcIiBjbGFzcz1cInNlYXJjaC13cmFwcGVyLWlucHV0XCIgb25jbGljaz1cIm9uSW5wdXRDbGlja1wiIG9uaW5wdXQ9XCJvbmlucHV0XCIgcGxhY2Vob2xkZXI9XCJ7e3BsYWNlaG9sZGVyfX1cIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwie3t2YWx1ZX19XCIvPlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cInNlYXJjaC1jbGVhblwiIHN0eWxlPVwidmlzaWJpbGl0eToge3t2aXNpYmlsaXR5fX1cIiBvbmNsaWNrPVwiY2xlYW5cIj7DlzwvdGV4dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbSBpdGVtLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicmlnaHQtdGV4dFwiIHN0eWxlPVwiY29sb3I6e3tyaWdodEl0ZW1Db2xvcn19O1wiIGlmPXt7cmlnaHRJdGVtVGl0bGV9fSBvbmNsaWNrPVwib25jbGlja3JpZ2h0aXRlbVwiPnt7cmlnaHRJdGVtVGl0bGV9fTwvdGV4dD5cclxuICAgICAgICAgICAgPGltYWdlIGNsYXNzPVwicmlnaHQtaW1hZ2VcIiBzcmM9e3tyaWdodEl0ZW1TcmN9fSBpZj17e3JpZ2h0SXRlbVNyY319IG9uY2xpY2s9XCJvbmNsaWNrcmlnaHRpdGVtXCI+PC9pbWFnZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c3R5bGUgc2NvcGVkPlxyXG4gICAgLnNlYXJjaGJhciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdzsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDsgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2Q4ZDhkODtcclxuICAgIH1cclxuICAgIC5zZWFyY2gtaWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDQ4cHg7IGhlaWdodDogNDhweDtcclxuICAgIH1cclxuICAgIC5zZWFyY2gtY2xlYW4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IDEwcHg7IGJvdHRvbTogMTBweDtcclxuICAgICAgICB3aWR0aDogNDBweDsgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDsgbGluZS1oZWlnaHQ6IDQwOyBjb2xvcjogIzk5OTsgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLml0ZW0geyBhbGlnbi1pdGVtczogY2VudGVyOyB9XHJcbiAgICAuaXRlbS1sZWZ0IHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuaXRlbS1yaWdodCB7IG1hcmdpbi1yaWdodDogMjBweDsgfVxyXG4gICAgLmxlZnQtaW1hZ2UgeyB3aWR0aDogNDhweDsgaGVpZ2h0OiA0OHB4OyB9XHJcbiAgICAucmlnaHQtaW1hZ2UgeyB3aWR0aDogNDhweDsgaGVpZ2h0OiA0OHB4OyB9XHJcbiAgICAucmlnaHQtdGV4dCB7IGZvbnQtc2l6ZTogMzJweDsgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmOyB9XHJcbiAgICAubGVmdC10ZXh0IHsgZm9udC1zaXplOiAzMnB4OyBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7IH1cclxuICAgIC5zZWFyY2gtd3JhcHBlciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICB3aWR0aDogNDUwcHg7ICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA2cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoLXdyYXBwZXItaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiAzODBweDsgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XHJcbiAgICAgICAgY29sb3I6ICMxYTFhMWE7IGZvbnQtc2l6ZTogMzJweDtcclxuICAgIH1cclxuPC9zdHlsZT5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vY29tbW9uL2NvbmZpZydcclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHNlYXJjaEljb246IGNvbmZpZy5pY29uLnNlYXJjaCxcclxuICAgICAgICAgICAgLy/lr7zoiKrmnaHog4zmma/oibJcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgICAgICAvL+WvvOiIquadoemrmOW6plxyXG4gICAgICAgICAgICBoZWlnaHQ6IDg4LFxyXG4gICAgICAgICAgICAvL+WvvOiIquadoeagh+mimFxyXG4gICAgICAgICAgICB0aXRsZTogXCJcIixcclxuICAgICAgICAgICAgLy/lr7zoiKrmnaHmoIfpopjpopzoibJcclxuICAgICAgICAgICAgdGl0bGVDb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgLy/lj7PkvqfmjInpkq7lm77niYdcclxuICAgICAgICAgICAgcmlnaHRJdGVtU3JjOiAnJyxcclxuICAgICAgICAgICAgLy/lj7PkvqfmjInpkq7moIfpophcclxuICAgICAgICAgICAgcmlnaHRJdGVtVGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAvL+WPs+S+p+aMiemSruagh+mimOminOiJslxyXG4gICAgICAgICAgICByaWdodEl0ZW1Db2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgLy/lt6bkvqfmjInpkq7lm77niYdcclxuICAgICAgICAgICAgbGVmdEl0ZW1TcmM6ICcnLFxyXG4gICAgICAgICAgICAvL+W3puS+p+aMiemSruagh+mimFxyXG4gICAgICAgICAgICBsZWZ0SXRlbVRpdGxlOiAnJyxcclxuICAgICAgICAgICAgLy/lt6bkvqfmjInpkq7popzoibJcclxuICAgICAgICAgICAgbGVmdEl0ZW1Db2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICfovpPlhaXllYbmiLflkI3jgIHlnLDlnYAnLFxyXG4gICAgICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIG9uSW5wdXRDbGljayAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRkaXNwYXRjaCgnbmF2aUJhci5zZWFyY2guaW5wdXQuY2xpY2snLCB7fSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uY2xpY2tyaWdodGl0ZW06IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRkaXNwYXRjaCgnbmF2aUJhci5yaWdodEl0ZW0uY2xpY2snLCB7fSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uY2xpY2tsZWZ0aXRlbTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGRpc3BhdGNoKCduYXZpQmFyLmxlZnRJdGVtLmNsaWNrJywge30pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbmlucHV0IChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dDbGVhbkJ0bigpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZUNsZWFuQnRuKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2hvd0NsZWFuQnRuICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBoaWRlQ2xlYW5CdG4gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmlsaXR5ID0gJ2hpZGRlbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2xlYW4gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9ICcnXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVDbGVhbkJ0bigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3NlYXJjaGJhci9zZWFyY2hiYXIud2U/NjE5ODg4MzYiXSwic291cmNlUm9vdCI6IiJ9