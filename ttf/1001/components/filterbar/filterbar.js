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

	var __weex_template__ = __webpack_require__(58)
	var __weex_style__ = __webpack_require__(59)
	var __weex_script__ = __webpack_require__(60)
	
	__weex_define__('@weex-component/c3bcbd262b54000b9226ab0885686337', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})
	
	__weex_bootstrap__('@weex-component/c3bcbd262b54000b9226ab0885686337',undefined,undefined)

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

/***/ 58:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "merchant-filter"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "item"
	      ],
	      "repeat": {
	        "expression": function () {return this.items},
	        "value": "item"
	      },
	      "events": {
	        "click": function ($event) {this.onclick(this.item,this.$index,$event)}
	      },
	      "style": {
	        "width": function () {return this.itemWidth}
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": function () {return ['item-text', 'item-text-' + (this.item.active?'active':'normal')]},
	          "attr": {
	            "value": function () {return this.item.text}
	          }
	        },
	        {
	          "type": "image",
	          "classList": [
	            "item-image"
	          ],
	          "attr": {
	            "src": function () {return this.ui.dropdown}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 59:
/***/ function(module, exports) {

	module.exports = {
	  "merchant-filter": {
	    "zIndex": 98,
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "height": 80,
	    "backgroundColor": "#ffffff",
	    "borderBottomColor": "#dbdbdb",
	    "borderBottomWidth": 1
	  },
	  "item": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "height": 60,
	    "borderLeftWidth": 1,
	    "borderLeftColor": "#cccccc",
	    "borderRightWidth": 1,
	    "borderRightColor": "#cccccc",
	    "marginLeft": -1
	  },
	  "item-text": {
	    "marginRight": 6,
	    "fontSize": 28
	  },
	  "item-text-normal": {
	    "color": "#4d4d4d"
	  },
	  "item-text-active": {
	    "color": "#ff610b"
	  },
	  "item-image": {
	    "width": 21,
	    "height": 21
	  }
	}

/***/ },

/***/ 60:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _config = __webpack_require__(49);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            items: [],
	            activeIndex: '',
	            itemWidth: '',
	            ui: {
	                dropdown: _config2.default.icon.dropdown
	            }
	        };
	    },
	    created: function created() {
	        var _this = this;
	
	        this.$on('filterbar.item.select.bridge', function (e) {
	            _this.items[_this.activeIndex].text = e.detail.text;
	        });
	    },
	    ready: function ready() {
	        var length = this.items.length;
	        if (length) {
	            this.itemWidth = 752 / length;
	        }
	    },
	
	    methods: {
	        onclick: function onclick(item, i, e) {
	            this.activeIndex = i;
	            this.items.forEach(function (v, index) {
	                v.active && index !== i && (v.active = false);
	            });
	            item.active = true;
	            console.log(this.items);
	            this.$dispatch('filterbar.item.click', {
	                index: i,
	                item: item
	            });
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTZlY2Q1YzViMGFjZjE5MzZkYmI/YzBlMCoqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9maWx0ZXJiYXIvZmlsdGVyYmFyLndlP2I2YzciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb25maWcuanM/YzE4MyoqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9maWx0ZXJiYXIvZmlsdGVyYmFyLndlP2U3ZDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZmlsdGVyYmFyL2ZpbHRlcmJhci53ZT9lNDcwIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ZpbHRlcmJhci9maWx0ZXJiYXIud2U/ZDEyYyJdLCJuYW1lcyI6WyJhc3NldHNSb290IiwiaWNvbiIsInYiLCJzY3JpcHRIb3N0IiwiaHRtbEluZGV4Iiwic2NyaXB0Um9vdCIsImFwaVJvb3QiLCJhbmRyb2lkQXNzZXRzUm9vdCIsIm1hcCIsIm1hcF9saWZlIiwibm90aWNlIiwic2NhbiIsImNvZGUiLCJ0cmFuc2FjdGlvbl9yZWNvcmQiLCJzZWFyY2giLCJiYWNrIiwicmlnaHRfYXJyb3ciLCJhcm91bmQiLCJzZWFyY2hfcGFzcyIsInN0YXIiLCJoYWxmX3N0YXIiLCJkcm9wZG93biIsInRpY2siLCJjb2xsZWN0IiwiY29sbGVjdF91bnNlbGVjdGVkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUM7O0FBRUQsMkY7Ozs7Ozs7QUNqQkE7QUFDQSxPQUFNQSxhQUFhLG1EQUFuQjs7QUFFQSxVQUFTQyxJQUFULENBQWNDLENBQWQsRUFBaUI7QUFDYixZQUFPRixhQUFhLE9BQWIsR0FBdUJFLENBQTlCO0FBQ0g7QUFDRCxnQkFBZTtBQUNYO0FBQ0FDLGlCQUFZLDJDQUZEO0FBR1g7QUFDQUMsZ0JBQVcsc0RBSkE7QUFLWDtBQUNBQyxpQkFBWSxRQU5EO0FBT1g7QUFDQUwsaUJBQVlBLFVBUkQ7QUFTWDtBQUNBTSxjQUFTLGtEQVZFO0FBV1g7QUFDQUMsd0JBQW1CLHdCQVpSO0FBYVhOLFdBQU07QUFDRk8sY0FBS1AsS0FBSyxZQUFMLENBREg7QUFFRlEsbUJBQVVSLEtBQUssaUJBQUwsQ0FGUjtBQUdGUyxpQkFBUVQsS0FBSyxlQUFMLENBSE47QUFJRlUsZUFBTVYsS0FBSyxhQUFMLENBSko7QUFLRlcsZUFBTVgsS0FBSyxhQUFMLENBTEo7QUFNRlksNkJBQW9CWixLQUFLLDJCQUFMLENBTmxCO0FBT0ZhLGlCQUFRYixLQUFLLGVBQUwsQ0FQTjtBQVFGYyxlQUFNZCxLQUFLLGFBQUwsQ0FSSjtBQVNGZSxzQkFBYWYsS0FBSyxvQkFBTCxDQVRYO0FBVUZhLGlCQUFRYixLQUFLLG9CQUFMLENBVk47QUFXRmdCLGlCQUFRaEIsS0FBSyxlQUFMLENBWE47QUFZRmlCLHNCQUFhakIsS0FBSyxvQkFBTCxDQVpYO0FBYUZrQixlQUFNbEIsS0FBSyxhQUFMLENBYko7QUFjRm1CLG9CQUFXbkIsS0FBSyxrQkFBTCxDQWRUO0FBZUZvQixtQkFBVXBCLEtBQUssaUJBQUwsQ0FmUjtBQWdCRnFCLGVBQU1yQixLQUFLLGFBQUwsQ0FoQko7QUFpQkZzQixrQkFBU3RCLEtBQUssZ0JBQUwsQ0FqQlA7QUFrQkZ1Qiw2QkFBb0J2QixLQUFLLDJCQUFMO0FBbEJsQjtBQWJLLEVBQWYsQzs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFtQyxrQkFBa0I7QUFDckQ7QUFDQSxRQUFPO0FBQ1A7QUFDQSxxQ0FBb0M7QUFDcEMsUUFBTztBQUNQO0FBQ0EsK0JBQThCO0FBQzlCLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxxQ0FBb0MsMEVBQTBFO0FBQzlHO0FBQ0EsbUNBQWtDO0FBQ2xDO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7OztBQ0hBOzs7Ozs7OzJCQUVBOztvQkFJQTswQkFDQTt3QkFDQTs7aURBSUE7QUFIQTtBQU5BO0FBVUE7O0FBQ0E7OytEQUNBOzREQUNBO0FBQ0E7QUFDQTs2QkFDQTtpQ0FDQTtxQkFDQTtvQ0FDQTtBQUNBO0FBQ0E7OzsrQ0FFQTtnQ0FDQTtvREFDQTt3REFDQTtBQUNBOzJCQUNBOzhCQUNBOzt3QkFFQTt1QkFHQTtBQUpBO0FBTUE7QUFkQTtBQXhCQSIsImZpbGUiOiJjb21wb25lbnRzXFxmaWx0ZXJiYXJcXGZpbHRlcmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDk2ZWNkNWM1YjBhY2YxOTM2ZGJiIiwidmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9maWx0ZXJiYXIud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vZmlsdGVyYmFyLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vZmlsdGVyYmFyLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L2MzYmNiZDI2MmI1NDAwMGI5MjI2YWIwODg1Njg2MzM3JywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cbl9fd2VleF9ib290c3RyYXBfXygnQHdlZXgtY29tcG9uZW50L2MzYmNiZDI2MmI1NDAwMGI5MjI2YWIwODg1Njg2MzM3Jyx1bmRlZmluZWQsdW5kZWZpbmVkKVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvZmlsdGVyYmFyL2ZpbHRlcmJhci53ZT9lbnRyeT10cnVlXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsIi8vIGNvbnN0IGFzc2V0c1VSTCA9ICdmaWxlOi8vL3NkY2FyZC9pbWcvJ1xyXG5jb25zdCBhc3NldHNSb290ID0gJ2h0dHBzOi8va29vb2ZseS5naXRodWIuaW8va29zdGFuZC10dGYvdHRmL2Fzc2V0cy8nXHJcblxyXG5mdW5jdGlvbiBpY29uKHYpIHtcclxuICAgIHJldHVybiBhc3NldHNSb290ICsgJ2ljb24vJyArIHZcclxufVxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICAvLyB3ZWV46ISa5pysaG9zdFxyXG4gICAgc2NyaXB0SG9zdDogJ2h0dHBzOi8va29vb2ZseS5naXRodWIuaW8va29zdGFuZC10dGYvdHRmJyxcclxuICAgIC8vIEhUTUwgaW5kZXhcclxuICAgIGh0bWxJbmRleDogJ2h0dHBzOi8va29vb2ZseS5naXRodWIuaW8va29zdGFuZC10dGYvdHRmL2luZGV4Lmh0bWwnLFxyXG4gICAgLy8gd2VleOiEmuacrOagueebruW9lVxyXG4gICAgc2NyaXB0Um9vdDogJy8xMDAxLycsXHJcbiAgICAvLyDlm77niYfnrYnpnZnmgIHotYTmupDmoLnnm67lvZVcclxuICAgIGFzc2V0c1Jvb3Q6IGFzc2V0c1Jvb3QsXHJcbiAgICAvLyByZXNldGZ1bCBBUEnmnI3liqHmoLnot6/lvoRcclxuICAgIGFwaVJvb3Q6ICdodHRwczovL2tvb29mbHkuZ2l0aHViLmlvL2tvc3RhbmQtdHRmL3R0Zi9hcGkvdjEnLFxyXG4gICAgLy8gYW5kcm9pZCDmnKzlnLDpnZnmgIHotYTmupDot6/lvoRcclxuICAgIGFuZHJvaWRBc3NldHNSb290OiAnZmlsZTovLy9zZGNhcmQvYXNzZXRzLycsXHJcbiAgICBpY29uOiB7XHJcbiAgICAgICAgbWFwOiBpY29uKCdtYXBAMngucG5nJyksXHJcbiAgICAgICAgbWFwX2xpZmU6IGljb24oJ21hcF9saWZlQDJ4LnBuZycpLFxyXG4gICAgICAgIG5vdGljZTogaWNvbignbm90aWNlQDJ4LnBuZycpLFxyXG4gICAgICAgIHNjYW46IGljb24oJ3NjYW5AMngucG5nJyksXHJcbiAgICAgICAgY29kZTogaWNvbignY29kZUAyeC5wbmcnKSxcclxuICAgICAgICB0cmFuc2FjdGlvbl9yZWNvcmQ6IGljb24oJ3RyYW5zYWN0aW9uX3JlY29yZEAyeC5wbmcnKSxcclxuICAgICAgICBzZWFyY2g6IGljb24oJ3NlYXJjaEAyeC5wbmcnKSxcclxuICAgICAgICBiYWNrOiBpY29uKCdiYWNrQDJ4LnBuZycpLFxyXG4gICAgICAgIHJpZ2h0X2Fycm93OiBpY29uKCdyaWdodF9hcnJvd0AyeC5wbmcnKSxcclxuICAgICAgICBzZWFyY2g6IGljb24oJ3NlYXJjaF9zaG9wQDJ4LnBuZycpLFxyXG4gICAgICAgIGFyb3VuZDogaWNvbignYXJvdW5kQDJ4LnBuZycpLFxyXG4gICAgICAgIHNlYXJjaF9wYXNzOiBpY29uKCdzZWFyY2hfcGFzc0AyeC5wbmcnKSxcclxuICAgICAgICBzdGFyOiBpY29uKCdzdGFyQDJ4LnBuZycpLFxyXG4gICAgICAgIGhhbGZfc3RhcjogaWNvbignaGFsZl9zdGFyQDJ4LnBuZycpLFxyXG4gICAgICAgIGRyb3Bkb3duOiBpY29uKCdkcm9wZG93bkAyeC5wbmcnKSxcclxuICAgICAgICB0aWNrOiBpY29uKCd0aWNrQDJ4LnBuZycpLFxyXG4gICAgICAgIGNvbGxlY3Q6IGljb24oJ2NvbGxlY3RAMngucG5nJyksXHJcbiAgICAgICAgY29sbGVjdF91bnNlbGVjdGVkOiBpY29uKCdjb2xsZWN0LXVuc2VsZWN0ZWRAMngucG5nJylcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vY29uZmlnLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJtZXJjaGFudC1maWx0ZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJpdGVtXCJcbiAgICAgIF0sXG4gICAgICBcInJlcGVhdFwiOiB7XG4gICAgICAgIFwiZXhwcmVzc2lvblwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaXRlbXN9LFxuICAgICAgICBcInZhbHVlXCI6IFwiaXRlbVwiXG4gICAgICB9LFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uICgkZXZlbnQpIHt0aGlzLm9uY2xpY2sodGhpcy5pdGVtLHRoaXMuJGluZGV4LCRldmVudCl9XG4gICAgICB9LFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwid2lkdGhcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLml0ZW1XaWR0aH1cbiAgICAgIH0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFsnaXRlbS10ZXh0JywgJ2l0ZW0tdGV4dC0nICsgKHRoaXMuaXRlbS5hY3RpdmU/J2FjdGl2ZSc6J25vcm1hbCcpXX0sXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLml0ZW0udGV4dH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiaXRlbS1pbWFnZVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnVpLmRyb3Bkb3dufVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vc3JjL2NvbXBvbmVudHMvZmlsdGVyYmFyL2ZpbHRlcmJhci53ZVxuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSA2IDI1IDI4IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwibWVyY2hhbnQtZmlsdGVyXCI6IHtcbiAgICBcInpJbmRleFwiOiA5OCxcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJoZWlnaHRcIjogODAsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNkYmRiZGJcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IDFcbiAgfSxcbiAgXCJpdGVtXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJoZWlnaHRcIjogNjAsXG4gICAgXCJib3JkZXJMZWZ0V2lkdGhcIjogMSxcbiAgICBcImJvcmRlckxlZnRDb2xvclwiOiBcIiNjY2NjY2NcIixcbiAgICBcImJvcmRlclJpZ2h0V2lkdGhcIjogMSxcbiAgICBcImJvcmRlclJpZ2h0Q29sb3JcIjogXCIjY2NjY2NjXCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IC0xXG4gIH0sXG4gIFwiaXRlbS10ZXh0XCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDYsXG4gICAgXCJmb250U2l6ZVwiOiAyOFxuICB9LFxuICBcIml0ZW0tdGV4dC1ub3JtYWxcIjoge1xuICAgIFwiY29sb3JcIjogXCIjNGQ0ZDRkXCJcbiAgfSxcbiAgXCJpdGVtLXRleHQtYWN0aXZlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2ZmNjEwYlwiXG4gIH0sXG4gIFwiaXRlbS1pbWFnZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiAyMSxcbiAgICBcImhlaWdodFwiOiAyMVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9zcmMvY29tcG9uZW50cy9maWx0ZXJiYXIvZmlsdGVyYmFyLndlXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDYgMjUgMjgiLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWVyY2hhbnQtZmlsdGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIiByZXBlYXQ9XCJ7e2l0ZW0gaW4gaXRlbXN9fVwiIG9uY2xpY2s9XCJvbmNsaWNrKGl0ZW0sICRpbmRleClcIiBzdHlsZT1cIndpZHRoOiB7e2l0ZW1XaWR0aH19XCI+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiaXRlbS10ZXh0IGl0ZW0tdGV4dC17e2l0ZW0uYWN0aXZlID8gJ2FjdGl2ZScgOiAnbm9ybWFsJ319XCI+e3tpdGVtLnRleHR9fTwvdGV4dD5cclxuICAgICAgICAgICAgPGltYWdlIGNsYXNzPVwiaXRlbS1pbWFnZVwiIHNyYz1cInt7dWkuZHJvcGRvd259fVwiPjwvaW1hZ2U+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAgIC5tZXJjaGFudC1maWx0ZXIge1xyXG4gICAgICAgIHotaW5kZXg6IDk4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNkYmRiZGI7IGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxuICAgIH1cclxuICAgIC5pdGVtIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDFweDsgYm9yZGVyLWxlZnQtY29sb3I6ICNjY2M7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxcHg7IGJvcmRlci1yaWdodC1jb2xvcjogI2NjYztcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTFweDtcclxuICAgIH1cclxuICAgIC5pdGVtLXRleHQge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIH1cclxuICAgIC5pdGVtLXRleHQtbm9ybWFsIHsgY29sb3I6ICM0ZDRkNGQ7IH1cclxuICAgIC5pdGVtLXRleHQtYWN0aXZlIHsgY29sb3I6ICNmZjYxMGI7IH1cclxuICAgIC5pdGVtLWltYWdlIHsgd2lkdGg6IDIxcHg7IGhlaWdodDogMjFweDsgfVxyXG48L3N0eWxlPlxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IGNvbmZpZyBmcm9tICcuLi8uLi9jb21tb24vY29uZmlnJ1xyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXHJcbi8vICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICflhajln44nLCBvcHRpb25zOiBbe3RleHQ6ICc1MDBtJywgYWN0aXZlOiBmYWxzZX1dLCBhY3RpdmU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlSW5kZXg6ICcnLFxyXG4gICAgICAgICAgICAgICAgaXRlbVdpZHRoOiAnJyxcclxuICAgICAgICAgICAgICAgIHVpOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd246IGNvbmZpZy5pY29uLmRyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZWQgKCkge1xyXG4gICAgICAgICAgICB0aGlzLiRvbignZmlsdGVyYmFyLml0ZW0uc2VsZWN0LmJyaWRnZScsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc1t0aGlzLmFjdGl2ZUluZGV4XS50ZXh0ID0gZS5kZXRhaWwudGV4dFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVhZHkgKCkge1xyXG4gICAgICAgICAgICBsZXQgbGVuZ3RoID0gdGhpcy5pdGVtcy5sZW5ndGhcclxuICAgICAgICAgICAgaWYgKGxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtV2lkdGggPSA3NTIgLyBsZW5ndGhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBvbmNsaWNrIChpdGVtLCBpLCBlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gaVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKCh2LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHYuYWN0aXZlICYmIGluZGV4ICE9PSBpICYmICh2LmFjdGl2ZSA9IGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5pdGVtcylcclxuICAgICAgICAgICAgICAgIHRoaXMuJGRpc3BhdGNoKCdmaWx0ZXJiYXIuaXRlbS5jbGljaycsIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogaSxcclxuICAgICAgICAgICAgICAgICAgICBpdGVtOiBpdGVtXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZmlsdGVyYmFyL2ZpbHRlcmJhci53ZT80Y2U4OGM5NiJdLCJzb3VyY2VSb290IjoiIn0=