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

	var __weex_template__ = __webpack_require__(61)
	var __weex_style__ = __webpack_require__(62)
	var __weex_script__ = __webpack_require__(63)
	
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

/***/ 47:
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

/***/ 61:
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

/***/ 62:
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

/***/ 63:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWRiMDEyZWQ3NjI2ZThiNjU1ZGU/ODkxOCoqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9maWx0ZXJiYXIvZmlsdGVyYmFyLndlP2I2YzciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb25maWcuanM/YzE4MyoqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZmlsdGVyYmFyL2ZpbHRlcmJhci53ZT9lN2Q1Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ZpbHRlcmJhci9maWx0ZXJiYXIud2U/ZTQ3MCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9maWx0ZXJiYXIvZmlsdGVyYmFyLndlP2QxMmMiXSwibmFtZXMiOlsiYXNzZXRzUm9vdCIsImljb24iLCJ2Iiwic2NyaXB0SG9zdCIsImh0bWxJbmRleCIsInNjcmlwdFJvb3QiLCJhcGlSb290IiwiYW5kcm9pZEFzc2V0c1Jvb3QiLCJtYXAiLCJtYXBfbGlmZSIsIm5vdGljZSIsInNjYW4iLCJjb2RlIiwidHJhbnNhY3Rpb25fcmVjb3JkIiwic2VhcmNoIiwiYmFjayIsInJpZ2h0X2Fycm93Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUM7O0FBRUQsMkY7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0EsS0FBTUEsYUFBYSxtREFBbkI7O0FBRUEsVUFBU0MsSUFBVCxDQUFjQyxDQUFkLEVBQWlCO0FBQ2IsWUFBT0YsYUFBYSxPQUFiLEdBQXVCRSxDQUE5QjtBQUNIO21CQUNjO0FBQ1g7QUFDQUMsaUJBQVksMkNBRkQ7QUFHWDtBQUNBQyxnQkFBVyxzREFKQTtBQUtYO0FBQ0FDLGlCQUFZLFFBTkQ7QUFPWDtBQUNBTCxpQkFBWUEsVUFSRDtBQVNYO0FBQ0FNLGNBQVMsa0RBVkU7QUFXWDtBQUNBQyx3QkFBbUIsd0JBWlI7QUFhWE47QUFDSU8sY0FBS1AsS0FBSyxZQUFMLENBRFQ7QUFFSVEsbUJBQVVSLEtBQUssaUJBQUwsQ0FGZDtBQUdJUyxpQkFBUVQsS0FBSyxlQUFMLENBSFo7QUFJSVUsZUFBTVYsS0FBSyxhQUFMLENBSlY7QUFLSVcsZUFBTVgsS0FBSyxhQUFMLENBTFY7QUFNSVksNkJBQW9CWixLQUFLLDJCQUFMLENBTnhCO0FBT0lhLGlCQUFRYixLQUFLLGVBQUwsQ0FQWjtBQVFJYyxlQUFNZCxLQUFLLGFBQUwsQ0FSVjtBQVNJZSxzQkFBYWYsS0FBSyxvQkFBTDtBQVRqQix5Q0FVWUEsS0FBSyxvQkFBTCxDQVZaLG9DQVdZQSxLQUFLLGVBQUwsQ0FYWix5Q0FZaUJBLEtBQUssb0JBQUwsQ0FaakIsa0NBYVVBLEtBQUssYUFBTCxDQWJWLHVDQWNlQSxLQUFLLGtCQUFMLENBZGYsc0NBZWNBLEtBQUssaUJBQUwsQ0FmZCxrQ0FnQlVBLEtBQUssYUFBTCxDQWhCVixxQ0FpQmFBLEtBQUssZ0JBQUwsQ0FqQmIsZ0RBa0J3QkEsS0FBSywyQkFBTCxDQWxCeEI7QUFiVyxFOzs7Ozs7O0FDTmY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW1DLGtCQUFrQjtBQUNyRDtBQUNBLFFBQU87QUFDUDtBQUNBLHFDQUFvQztBQUNwQyxRQUFPO0FBQ1A7QUFDQSwrQkFBOEI7QUFDOUIsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHFDQUFvQywwRUFBMEU7QUFDOUc7QUFDQSxtQ0FBa0M7QUFDbEM7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7O0FDSEE7Ozs7Ozs7MkJBRUE7O29CQUlBOzBCQUNBO3dCQUNBOztpREFJQTtBQUhBO0FBTkE7QUFVQTs7QUFDQTs7K0RBQ0E7NERBQ0E7QUFDQTtBQUNBOzZCQUNBO2lDQUNBO3FCQUNBO29DQUNBO0FBQ0E7QUFDQTs7OytDQUVBO2dDQUNBO29EQUNBO3dEQUNBO0FBQ0E7MkJBQ0E7OEJBQ0E7O3dCQUVBO3VCQUdBO0FBSkE7QUFNQTtBQWRBO0FBeEJBIiwiZmlsZSI6ImNvbXBvbmVudHNcXGZpbHRlcmJhclxcZmlsdGVyYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNWRiMDEyZWQ3NjI2ZThiNjU1ZGUiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL2ZpbHRlcmJhci53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9maWx0ZXJiYXIud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9maWx0ZXJiYXIud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvYzNiY2JkMjYyYjU0MDAwYjkyMjZhYjA4ODU2ODYzMzcnLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuX193ZWV4X2Jvb3RzdHJhcF9fKCdAd2VleC1jb21wb25lbnQvYzNiY2JkMjYyYjU0MDAwYjkyMjZhYjA4ODU2ODYzMzcnLHVuZGVmaW5lZCx1bmRlZmluZWQpXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9maWx0ZXJiYXIvZmlsdGVyYmFyLndlP2VudHJ5PXRydWVcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiLy8gY29uc3QgYXNzZXRzVVJMID0gJ2ZpbGU6Ly8vc2RjYXJkL2ltZy8nXHJcbmNvbnN0IGFzc2V0c1Jvb3QgPSAnaHR0cHM6Ly9rb29vZmx5LmdpdGh1Yi5pby9rb3N0YW5kLXR0Zi90dGYvYXNzZXRzLydcclxuXHJcbmZ1bmN0aW9uIGljb24odikge1xyXG4gICAgcmV0dXJuIGFzc2V0c1Jvb3QgKyAnaWNvbi8nICsgdlxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIC8vIHdlZXjohJrmnKxob3N0XHJcbiAgICBzY3JpcHRIb3N0OiAnaHR0cHM6Ly9rb29vZmx5LmdpdGh1Yi5pby9rb3N0YW5kLXR0Zi90dGYnLFxyXG4gICAgLy8gSFRNTCBpbmRleFxyXG4gICAgaHRtbEluZGV4OiAnaHR0cHM6Ly9rb29vZmx5LmdpdGh1Yi5pby9rb3N0YW5kLXR0Zi90dGYvaW5kZXguaHRtbCcsXHJcbiAgICAvLyB3ZWV46ISa5pys5qC555uu5b2VXHJcbiAgICBzY3JpcHRSb290OiAnLzEwMDEvJyxcclxuICAgIC8vIOWbvueJh+etiemdmeaAgei1hOa6kOagueebruW9lVxyXG4gICAgYXNzZXRzUm9vdDogYXNzZXRzUm9vdCxcclxuICAgIC8vIHJlc2V0ZnVsIEFQSeacjeWKoeaguei3r+W+hFxyXG4gICAgYXBpUm9vdDogJ2h0dHBzOi8va29vb2ZseS5naXRodWIuaW8va29zdGFuZC10dGYvdHRmL2FwaS92MScsXHJcbiAgICAvLyBhbmRyb2lkIOacrOWcsOmdmeaAgei1hOa6kOi3r+W+hFxyXG4gICAgYW5kcm9pZEFzc2V0c1Jvb3Q6ICdmaWxlOi8vL3NkY2FyZC9hc3NldHMvJyxcclxuICAgIGljb246IHtcclxuICAgICAgICBtYXA6IGljb24oJ21hcEAyeC5wbmcnKSxcclxuICAgICAgICBtYXBfbGlmZTogaWNvbignbWFwX2xpZmVAMngucG5nJyksXHJcbiAgICAgICAgbm90aWNlOiBpY29uKCdub3RpY2VAMngucG5nJyksXHJcbiAgICAgICAgc2NhbjogaWNvbignc2NhbkAyeC5wbmcnKSxcclxuICAgICAgICBjb2RlOiBpY29uKCdjb2RlQDJ4LnBuZycpLFxyXG4gICAgICAgIHRyYW5zYWN0aW9uX3JlY29yZDogaWNvbigndHJhbnNhY3Rpb25fcmVjb3JkQDJ4LnBuZycpLFxyXG4gICAgICAgIHNlYXJjaDogaWNvbignc2VhcmNoQDJ4LnBuZycpLFxyXG4gICAgICAgIGJhY2s6IGljb24oJ2JhY2tAMngucG5nJyksXHJcbiAgICAgICAgcmlnaHRfYXJyb3c6IGljb24oJ3JpZ2h0X2Fycm93QDJ4LnBuZycpLFxyXG4gICAgICAgIHNlYXJjaDogaWNvbignc2VhcmNoX3Nob3BAMngucG5nJyksXHJcbiAgICAgICAgYXJvdW5kOiBpY29uKCdhcm91bmRAMngucG5nJyksXHJcbiAgICAgICAgc2VhcmNoX3Bhc3M6IGljb24oJ3NlYXJjaF9wYXNzQDJ4LnBuZycpLFxyXG4gICAgICAgIHN0YXI6IGljb24oJ3N0YXJAMngucG5nJyksXHJcbiAgICAgICAgaGFsZl9zdGFyOiBpY29uKCdoYWxmX3N0YXJAMngucG5nJyksXHJcbiAgICAgICAgZHJvcGRvd246IGljb24oJ2Ryb3Bkb3duQDJ4LnBuZycpLFxyXG4gICAgICAgIHRpY2s6IGljb24oJ3RpY2tAMngucG5nJyksXHJcbiAgICAgICAgY29sbGVjdDogaWNvbignY29sbGVjdEAyeC5wbmcnKSxcclxuICAgICAgICBjb2xsZWN0X3Vuc2VsZWN0ZWQ6IGljb24oJ2NvbGxlY3QtdW5zZWxlY3RlZEAyeC5wbmcnKVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9jb25maWcuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcIm1lcmNoYW50LWZpbHRlclwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcIml0ZW1cIlxuICAgICAgXSxcbiAgICAgIFwicmVwZWF0XCI6IHtcbiAgICAgICAgXCJleHByZXNzaW9uXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pdGVtc30sXG4gICAgICAgIFwidmFsdWVcIjogXCJpdGVtXCJcbiAgICAgIH0sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24gKCRldmVudCkge3RoaXMub25jbGljayh0aGlzLml0ZW0sdGhpcy4kaW5kZXgsJGV2ZW50KX1cbiAgICAgIH0sXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJ3aWR0aFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaXRlbVdpZHRofVxuICAgICAgfSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gWydpdGVtLXRleHQnLCAnaXRlbS10ZXh0LScgKyAodGhpcy5pdGVtLmFjdGl2ZT8nYWN0aXZlJzonbm9ybWFsJyldfSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaXRlbS50ZXh0fVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJpdGVtLWltYWdlXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudWkuZHJvcGRvd259XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9zcmMvY29tcG9uZW50cy9maWx0ZXJiYXIvZmlsdGVyYmFyLndlXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDYgMjUgMjgiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJtZXJjaGFudC1maWx0ZXJcIjoge1xuICAgIFwiekluZGV4XCI6IDk4LFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImhlaWdodFwiOiA4MCxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI2RiZGJkYlwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogMVxuICB9LFxuICBcIml0ZW1cIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImhlaWdodFwiOiA2MCxcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiAxLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwiI2NjY2NjY1wiLFxuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiAxLFxuICAgIFwiYm9yZGVyUmlnaHRDb2xvclwiOiBcIiNjY2NjY2NcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogLTFcbiAgfSxcbiAgXCJpdGVtLXRleHRcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogNixcbiAgICBcImZvbnRTaXplXCI6IDI4XG4gIH0sXG4gIFwiaXRlbS10ZXh0LW5vcm1hbFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM0ZDRkNGRcIlxuICB9LFxuICBcIml0ZW0tdGV4dC1hY3RpdmVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmY2MTBiXCJcbiAgfSxcbiAgXCJpdGVtLWltYWdlXCI6IHtcbiAgICBcIndpZHRoXCI6IDIxLFxuICAgIFwiaGVpZ2h0XCI6IDIxXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3NyYy9jb21wb25lbnRzL2ZpbHRlcmJhci9maWx0ZXJiYXIud2Vcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gNiAyNSAyOCIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJtZXJjaGFudC1maWx0ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiIHJlcGVhdD1cInt7aXRlbSBpbiBpdGVtc319XCIgb25jbGljaz1cIm9uY2xpY2soaXRlbSwgJGluZGV4KVwiIHN0eWxlPVwid2lkdGg6IHt7aXRlbVdpZHRofX1cIj5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJpdGVtLXRleHQgaXRlbS10ZXh0LXt7aXRlbS5hY3RpdmUgPyAnYWN0aXZlJyA6ICdub3JtYWwnfX1cIj57e2l0ZW0udGV4dH19PC90ZXh0PlxyXG4gICAgICAgICAgICA8aW1hZ2UgY2xhc3M9XCJpdGVtLWltYWdlXCIgc3JjPVwie3t1aS5kcm9wZG93bn19XCI+PC9pbWFnZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c3R5bGUgc2NvcGVkPlxyXG4gICAgLm1lcmNoYW50LWZpbHRlciB7XHJcbiAgICAgICAgei1pbmRleDogOTg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdzsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2RiZGJkYjsgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xyXG4gICAgfVxyXG4gICAgLml0ZW0ge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBib3JkZXItbGVmdC13aWR0aDogMXB4OyBib3JkZXItbGVmdC1jb2xvcjogI2NjYztcclxuICAgICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDsgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjY2NjO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xyXG4gICAgfVxyXG4gICAgLml0ZW0tdGV4dCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgfVxyXG4gICAgLml0ZW0tdGV4dC1ub3JtYWwgeyBjb2xvcjogIzRkNGQ0ZDsgfVxyXG4gICAgLml0ZW0tdGV4dC1hY3RpdmUgeyBjb2xvcjogI2ZmNjEwYjsgfVxyXG4gICAgLml0ZW0taW1hZ2UgeyB3aWR0aDogMjFweDsgaGVpZ2h0OiAyMXB4OyB9XHJcbjwvc3R5bGU+XHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uL2NvbW1vbi9jb25maWcnXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgZGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtcclxuLy8gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ+WFqOWfjicsIG9wdGlvbnM6IFt7dGV4dDogJzUwMG0nLCBhY3RpdmU6IGZhbHNlfV0sIGFjdGl2ZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVJbmRleDogJycsXHJcbiAgICAgICAgICAgICAgICBpdGVtV2lkdGg6ICcnLFxyXG4gICAgICAgICAgICAgICAgdWk6IHtcclxuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bjogY29uZmlnLmljb24uZHJvcGRvd25cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlYXRlZCAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJG9uKCdmaWx0ZXJiYXIuaXRlbS5zZWxlY3QuYnJpZGdlJywgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW3RoaXMuYWN0aXZlSW5kZXhdLnRleHQgPSBlLmRldGFpbC50ZXh0XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWFkeSAoKSB7XHJcbiAgICAgICAgICAgIGxldCBsZW5ndGggPSB0aGlzLml0ZW1zLmxlbmd0aFxyXG4gICAgICAgICAgICBpZiAobGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1XaWR0aCA9IDc1MiAvIGxlbmd0aFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIG9uY2xpY2sgKGl0ZW0sIGksIGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBpXHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goKHYsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdi5hY3RpdmUgJiYgaW5kZXggIT09IGkgJiYgKHYuYWN0aXZlID0gZmFsc2UpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLml0ZW1zKVxyXG4gICAgICAgICAgICAgICAgdGhpcy4kZGlzcGF0Y2goJ2ZpbHRlcmJhci5pdGVtLmNsaWNrJywge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBpLFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW06IGl0ZW1cclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9maWx0ZXJiYXIvZmlsdGVyYmFyLndlPzRjZTg4Yzk2Il0sInNvdXJjZVJvb3QiOiIifQ==