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

	var __weex_template__ = __webpack_require__(64)
	var __weex_style__ = __webpack_require__(65)
	var __weex_script__ = __webpack_require__(66)
	
	__weex_define__('@weex-component/b74038669e097812024c47b775c4d95c', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})
	
	__weex_bootstrap__('@weex-component/b74038669e097812024c47b775c4d95c',undefined,undefined)

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

/***/ 64:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "style": {
	    "visibility": function () {return this.visibility}
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "merchant-filter-bg"
	      ],
	      "style": {
	        "visibility": function () {return this.visibility}
	      },
	      "events": {
	        "click": "hide"
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "merchant-filter-options"
	      ],
	      "style": {
	        "visibility": function () {return this.visibility}
	      },
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "merchant-filter-options-row"
	          ],
	          "repeat": {
	            "expression": function () {return this.options},
	            "value": "v"
	          },
	          "events": {
	            "click": function ($event) {this.selectOption(this.v,this.$index,$event)}
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": function () {return ['merchant-filter-options-text', 'merchant-filter-options-text-' + (this.v.active?'active':'normal')]},
	              "attr": {
	                "value": function () {return this.v.text}
	              }
	            },
	            {
	              "type": "image",
	              "shown": function () {return this.v.active},
	              "classList": [
	                "merchant-filter-options-image"
	              ],
	              "attr": {
	                "src": function () {return this.ui.select}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 65:
/***/ function(module, exports) {

	module.exports = {
	  "merchant-filter-bg": {
	    "position": "fixed",
	    "top": 88,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "zIndex": 90,
	    "width": 750,
	    "opacity": 0.5,
	    "backgroundColor": "#666666"
	  },
	  "merchant-filter-options": {
	    "position": "fixed",
	    "top": 168,
	    "left": 0,
	    "zIndex": 92,
	    "width": 750,
	    "backgroundColor": "#ffffff"
	  },
	  "merchant-filter-options-row": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "space-between",
	    "height": 88,
	    "marginLeft": 40,
	    "marginBottom": -1,
	    "paddingLeft": 20,
	    "borderBottomColor": "#cccccc",
	    "borderBottomWidth": 1,
	    "borderBottomStyle": "solid"
	  },
	  "merchant-filter-options-text": {
	    "fontSize": 24
	  },
	  "merchant-filter-options-text-normal": {
	    "color": "#666666"
	  },
	  "merchant-filter-options-text-active": {
	    "color": "#ff610b"
	  },
	  "merchant-filter-options-image": {
	    "width": 30,
	    "height": 21,
	    "marginRight": 35
	  }
	}

/***/ },

/***/ 66:
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
	            visibility: 'hidden',
	            options: [],
	            ui: {
	                select: _config2.default.icon.tick
	            }
	        };
	    },
	    created: function created() {
	        var _this = this;
	
	        this.$on('filterbar.item.click.bridge', function (e) {
	            _this.options = e.detail.item.options;
	            _this.visibility = 'visible';
	        });
	    },
	
	    methods: {
	        selectOption: function selectOption(v, i) {
	            this.options.forEach(function (v, index) {
	                v.active && index !== i && (v.active = false);
	            });
	            this.options[i].active = true;
	            this.visibility = 'hidden';
	            this.$dispatch('filterbar.item.select', v);
	        },
	        hide: function hide() {
	            this.visibility = 'hidden';
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWRiMDEyZWQ3NjI2ZThiNjU1ZGU/ODkxOCoqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZmlsdGVyYmFyL2ZpbHRlcmJhci1vcHRpb24ud2U/M2FhOCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbmZpZy5qcz9jMTgzKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZmlsdGVyYmFyL2ZpbHRlcmJhci1vcHRpb24ud2U/NzIxMCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9maWx0ZXJiYXIvZmlsdGVyYmFyLW9wdGlvbi53ZT9mN2Q0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ZpbHRlcmJhci9maWx0ZXJiYXItb3B0aW9uLndlPzgwYTEiXSwibmFtZXMiOlsiYXNzZXRzUm9vdCIsImljb24iLCJ2Iiwic2NyaXB0SG9zdCIsImh0bWxJbmRleCIsInNjcmlwdFJvb3QiLCJhcGlSb290IiwiYW5kcm9pZEFzc2V0c1Jvb3QiLCJtYXAiLCJtYXBfbGlmZSIsIm5vdGljZSIsInNjYW4iLCJjb2RlIiwidHJhbnNhY3Rpb25fcmVjb3JkIiwic2VhcmNoIiwiYmFjayIsInJpZ2h0X2Fycm93Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUM7O0FBRUQsMkY7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0EsS0FBTUEsYUFBYSxtREFBbkI7O0FBRUEsVUFBU0MsSUFBVCxDQUFjQyxDQUFkLEVBQWlCO0FBQ2IsWUFBT0YsYUFBYSxPQUFiLEdBQXVCRSxDQUE5QjtBQUNIO21CQUNjO0FBQ1g7QUFDQUMsaUJBQVksMkNBRkQ7QUFHWDtBQUNBQyxnQkFBVyxzREFKQTtBQUtYO0FBQ0FDLGlCQUFZLFFBTkQ7QUFPWDtBQUNBTCxpQkFBWUEsVUFSRDtBQVNYO0FBQ0FNLGNBQVMsa0RBVkU7QUFXWDtBQUNBQyx3QkFBbUIsd0JBWlI7QUFhWE47QUFDSU8sY0FBS1AsS0FBSyxZQUFMLENBRFQ7QUFFSVEsbUJBQVVSLEtBQUssaUJBQUwsQ0FGZDtBQUdJUyxpQkFBUVQsS0FBSyxlQUFMLENBSFo7QUFJSVUsZUFBTVYsS0FBSyxhQUFMLENBSlY7QUFLSVcsZUFBTVgsS0FBSyxhQUFMLENBTFY7QUFNSVksNkJBQW9CWixLQUFLLDJCQUFMLENBTnhCO0FBT0lhLGlCQUFRYixLQUFLLGVBQUwsQ0FQWjtBQVFJYyxlQUFNZCxLQUFLLGFBQUwsQ0FSVjtBQVNJZSxzQkFBYWYsS0FBSyxvQkFBTDtBQVRqQix5Q0FVWUEsS0FBSyxvQkFBTCxDQVZaLG9DQVdZQSxLQUFLLGVBQUwsQ0FYWix5Q0FZaUJBLEtBQUssb0JBQUwsQ0FaakIsa0NBYVVBLEtBQUssYUFBTCxDQWJWLHVDQWNlQSxLQUFLLGtCQUFMLENBZGYsc0NBZWNBLEtBQUssaUJBQUwsQ0FmZCxrQ0FnQlVBLEtBQUssYUFBTCxDQWhCVixxQ0FpQmFBLEtBQUssZ0JBQUwsQ0FqQmIsZ0RBa0J3QkEsS0FBSywyQkFBTCxDQWxCeEI7QUFiVyxFOzs7Ozs7O0FDTmY7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCO0FBQy9CLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFtQztBQUNuQyxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFtQztBQUNuQyxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBdUMsb0JBQW9CO0FBQzNEO0FBQ0EsWUFBVztBQUNYO0FBQ0EseUNBQXdDO0FBQ3hDLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSx5Q0FBd0MsNkdBQTZHO0FBQ3JKO0FBQ0EsdUNBQXNDO0FBQ3RDO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSxxQ0FBb0MscUJBQXFCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7QUNOQTs7Ozs7OzsyQkFFQTs7eUJBRUE7c0JBQ0E7OytDQUlBO0FBSEE7QUFIQTtBQU9BOztBQUNBOzs4REFDQTsyQ0FDQTtnQ0FDQTtBQUNBO0FBQ0E7OzttREFFQTtzREFDQTt3REFDQTtBQUNBO3NDQUNBOytCQUNBO3FEQUNBO0FBQ0E7K0JBQ0E7K0JBQ0E7QUFFQTtBQVpBO0FBaEJBIiwiZmlsZSI6ImNvbXBvbmVudHNcXGZpbHRlcmJhclxcZmlsdGVyYmFyLW9wdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDVkYjAxMmVkNzYyNmU4YjY1NWRlIiwidmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9maWx0ZXJiYXItb3B0aW9uLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL2ZpbHRlcmJhci1vcHRpb24ud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9maWx0ZXJiYXItb3B0aW9uLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L2I3NDAzODY2OWUwOTc4MTIwMjRjNDdiNzc1YzRkOTVjJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cbl9fd2VleF9ib290c3RyYXBfXygnQHdlZXgtY29tcG9uZW50L2I3NDAzODY2OWUwOTc4MTIwMjRjNDdiNzc1YzRkOTVjJyx1bmRlZmluZWQsdW5kZWZpbmVkKVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvZmlsdGVyYmFyL2ZpbHRlcmJhci1vcHRpb24ud2U/ZW50cnk9dHJ1ZVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCIvLyBjb25zdCBhc3NldHNVUkwgPSAnZmlsZTovLy9zZGNhcmQvaW1nLydcclxuY29uc3QgYXNzZXRzUm9vdCA9ICdodHRwczovL2tvb29mbHkuZ2l0aHViLmlvL2tvc3RhbmQtdHRmL3R0Zi9hc3NldHMvJ1xyXG5cclxuZnVuY3Rpb24gaWNvbih2KSB7XHJcbiAgICByZXR1cm4gYXNzZXRzUm9vdCArICdpY29uLycgKyB2XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgLy8gd2VleOiEmuacrGhvc3RcclxuICAgIHNjcmlwdEhvc3Q6ICdodHRwczovL2tvb29mbHkuZ2l0aHViLmlvL2tvc3RhbmQtdHRmL3R0ZicsXHJcbiAgICAvLyBIVE1MIGluZGV4XHJcbiAgICBodG1sSW5kZXg6ICdodHRwczovL2tvb29mbHkuZ2l0aHViLmlvL2tvc3RhbmQtdHRmL3R0Zi9pbmRleC5odG1sJyxcclxuICAgIC8vIHdlZXjohJrmnKzmoLnnm67lvZVcclxuICAgIHNjcmlwdFJvb3Q6ICcvMTAwMS8nLFxyXG4gICAgLy8g5Zu+54mH562J6Z2Z5oCB6LWE5rqQ5qC555uu5b2VXHJcbiAgICBhc3NldHNSb290OiBhc3NldHNSb290LFxyXG4gICAgLy8gcmVzZXRmdWwgQVBJ5pyN5Yqh5qC56Lev5b6EXHJcbiAgICBhcGlSb290OiAnaHR0cHM6Ly9rb29vZmx5LmdpdGh1Yi5pby9rb3N0YW5kLXR0Zi90dGYvYXBpL3YxJyxcclxuICAgIC8vIGFuZHJvaWQg5pys5Zyw6Z2Z5oCB6LWE5rqQ6Lev5b6EXHJcbiAgICBhbmRyb2lkQXNzZXRzUm9vdDogJ2ZpbGU6Ly8vc2RjYXJkL2Fzc2V0cy8nLFxyXG4gICAgaWNvbjoge1xyXG4gICAgICAgIG1hcDogaWNvbignbWFwQDJ4LnBuZycpLFxyXG4gICAgICAgIG1hcF9saWZlOiBpY29uKCdtYXBfbGlmZUAyeC5wbmcnKSxcclxuICAgICAgICBub3RpY2U6IGljb24oJ25vdGljZUAyeC5wbmcnKSxcclxuICAgICAgICBzY2FuOiBpY29uKCdzY2FuQDJ4LnBuZycpLFxyXG4gICAgICAgIGNvZGU6IGljb24oJ2NvZGVAMngucG5nJyksXHJcbiAgICAgICAgdHJhbnNhY3Rpb25fcmVjb3JkOiBpY29uKCd0cmFuc2FjdGlvbl9yZWNvcmRAMngucG5nJyksXHJcbiAgICAgICAgc2VhcmNoOiBpY29uKCdzZWFyY2hAMngucG5nJyksXHJcbiAgICAgICAgYmFjazogaWNvbignYmFja0AyeC5wbmcnKSxcclxuICAgICAgICByaWdodF9hcnJvdzogaWNvbigncmlnaHRfYXJyb3dAMngucG5nJyksXHJcbiAgICAgICAgc2VhcmNoOiBpY29uKCdzZWFyY2hfc2hvcEAyeC5wbmcnKSxcclxuICAgICAgICBhcm91bmQ6IGljb24oJ2Fyb3VuZEAyeC5wbmcnKSxcclxuICAgICAgICBzZWFyY2hfcGFzczogaWNvbignc2VhcmNoX3Bhc3NAMngucG5nJyksXHJcbiAgICAgICAgc3RhcjogaWNvbignc3RhckAyeC5wbmcnKSxcclxuICAgICAgICBoYWxmX3N0YXI6IGljb24oJ2hhbGZfc3RhckAyeC5wbmcnKSxcclxuICAgICAgICBkcm9wZG93bjogaWNvbignZHJvcGRvd25AMngucG5nJyksXHJcbiAgICAgICAgdGljazogaWNvbigndGlja0AyeC5wbmcnKSxcclxuICAgICAgICBjb2xsZWN0OiBpY29uKCdjb2xsZWN0QDJ4LnBuZycpLFxyXG4gICAgICAgIGNvbGxlY3RfdW5zZWxlY3RlZDogaWNvbignY29sbGVjdC11bnNlbGVjdGVkQDJ4LnBuZycpXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2NvbmZpZy5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJzdHlsZVwiOiB7XG4gICAgXCJ2aXNpYmlsaXR5XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy52aXNpYmlsaXR5fVxuICB9LFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJtZXJjaGFudC1maWx0ZXItYmdcIlxuICAgICAgXSxcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcInZpc2liaWxpdHlcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnZpc2liaWxpdHl9XG4gICAgICB9LFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwiaGlkZVwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJtZXJjaGFudC1maWx0ZXItb3B0aW9uc1wiXG4gICAgICBdLFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwidmlzaWJpbGl0eVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudmlzaWJpbGl0eX1cbiAgICAgIH0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwibWVyY2hhbnQtZmlsdGVyLW9wdGlvbnMtcm93XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwicmVwZWF0XCI6IHtcbiAgICAgICAgICAgIFwiZXhwcmVzc2lvblwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMub3B0aW9uc30sXG4gICAgICAgICAgICBcInZhbHVlXCI6IFwidlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uICgkZXZlbnQpIHt0aGlzLnNlbGVjdE9wdGlvbih0aGlzLnYsdGhpcy4kaW5kZXgsJGV2ZW50KX1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gWydtZXJjaGFudC1maWx0ZXItb3B0aW9ucy10ZXh0JywgJ21lcmNoYW50LWZpbHRlci1vcHRpb25zLXRleHQtJyArICh0aGlzLnYuYWN0aXZlPydhY3RpdmUnOidub3JtYWwnKV19LFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnYudGV4dH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudi5hY3RpdmV9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJtZXJjaGFudC1maWx0ZXItb3B0aW9ucy1pbWFnZVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnVpLnNlbGVjdH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vc3JjL2NvbXBvbmVudHMvZmlsdGVyYmFyL2ZpbHRlcmJhci1vcHRpb24ud2Vcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gNyAyNSAyOCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIm1lcmNoYW50LWZpbHRlci1iZ1wiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJ0b3BcIjogODgsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwiYm90dG9tXCI6IDAsXG4gICAgXCJ6SW5kZXhcIjogOTAsXG4gICAgXCJ3aWR0aFwiOiA3NTAsXG4gICAgXCJvcGFjaXR5XCI6IDAuNSxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM2NjY2NjZcIlxuICB9LFxuICBcIm1lcmNoYW50LWZpbHRlci1vcHRpb25zXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcInRvcFwiOiAxNjgsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJ6SW5kZXhcIjogOTIsXG4gICAgXCJ3aWR0aFwiOiA3NTAsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJtZXJjaGFudC1maWx0ZXItb3B0aW9ucy1yb3dcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJoZWlnaHRcIjogODgsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IDQwLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IC0xLFxuICAgIFwicGFkZGluZ0xlZnRcIjogMjAsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNjY2NjY2NcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IDEsXG4gICAgXCJib3JkZXJCb3R0b21TdHlsZVwiOiBcInNvbGlkXCJcbiAgfSxcbiAgXCJtZXJjaGFudC1maWx0ZXItb3B0aW9ucy10ZXh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IDI0XG4gIH0sXG4gIFwibWVyY2hhbnQtZmlsdGVyLW9wdGlvbnMtdGV4dC1ub3JtYWxcIjoge1xuICAgIFwiY29sb3JcIjogXCIjNjY2NjY2XCJcbiAgfSxcbiAgXCJtZXJjaGFudC1maWx0ZXItb3B0aW9ucy10ZXh0LWFjdGl2ZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZjYxMGJcIlxuICB9LFxuICBcIm1lcmNoYW50LWZpbHRlci1vcHRpb25zLWltYWdlXCI6IHtcbiAgICBcIndpZHRoXCI6IDMwLFxuICAgIFwiaGVpZ2h0XCI6IDIxLFxuICAgIFwibWFyZ2luUmlnaHRcIjogMzVcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vc3JjL2NvbXBvbmVudHMvZmlsdGVyYmFyL2ZpbHRlcmJhci1vcHRpb24ud2Vcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gNyAyNSAyOCIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgc3R5bGU9XCJ2aXNpYmlsaXR5OiB7e3Zpc2liaWxpdHl9fVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZXJjaGFudC1maWx0ZXItYmdcIiBzdHlsZT1cInZpc2liaWxpdHk6IHt7dmlzaWJpbGl0eX19XCIgb25jbGljaz1cImhpZGVcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVyY2hhbnQtZmlsdGVyLW9wdGlvbnNcIiBzdHlsZT1cInZpc2liaWxpdHk6IHt7dmlzaWJpbGl0eX19XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZXJjaGFudC1maWx0ZXItb3B0aW9ucy1yb3dcIiByZXBlYXQ9XCJ7e3YgaW4gb3B0aW9uc319XCIgb25jbGljaz1cInNlbGVjdE9wdGlvbih2LCAkaW5kZXgpXCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cIm1lcmNoYW50LWZpbHRlci1vcHRpb25zLXRleHQgbWVyY2hhbnQtZmlsdGVyLW9wdGlvbnMtdGV4dC17e3YuYWN0aXZlID8gJ2FjdGl2ZScgOiAnbm9ybWFsJ319XCI+e3t2LnRleHR9fTwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDxpbWFnZSBpZj1cInt7di5hY3RpdmV9fVwiIGNsYXNzPVwibWVyY2hhbnQtZmlsdGVyLW9wdGlvbnMtaW1hZ2VcIiBzcmM9XCJ7e3VpLnNlbGVjdH19XCI+PC9pbWFnZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAgIC5tZXJjaGFudC1maWx0ZXItYmcge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDsgdG9wOiA4OHB4OyBsZWZ0OiAwOyByaWdodDogMDsgYm90dG9tOiAwOyB6LWluZGV4OiA5MDtcclxuICAgICAgICB3aWR0aDogNzUwcHg7XHJcbiAgICAgICAgb3BhY2l0eTogLjU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjtcclxuICAgIH1cclxuICAgIC5tZXJjaGFudC1maWx0ZXItb3B0aW9ucyB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkOyB0b3A6IDE2OHB4OyBsZWZ0OiAwOyB6LWluZGV4OiA5MjtcclxuICAgICAgICB3aWR0aDogNzUwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIC5tZXJjaGFudC1maWx0ZXItb3B0aW9ucy1yb3cge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBoZWlnaHQ6IDg4cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7IG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNjY2M7IGJvcmRlci1ib3R0b20td2lkdGg6IDFweDsgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbiAgICB9XHJcbiAgICAubWVyY2hhbnQtZmlsdGVyLW9wdGlvbnMtdGV4dCB7IGZvbnQtc2l6ZTogMjRweDsgfVxyXG4gICAgLm1lcmNoYW50LWZpbHRlci1vcHRpb25zLXRleHQtbm9ybWFsIHsgY29sb3I6ICM2NjY7IH1cclxuICAgIC5tZXJjaGFudC1maWx0ZXItb3B0aW9ucy10ZXh0LWFjdGl2ZSB7IGNvbG9yOiAjZmY2MTBiO31cclxuICAgIC5tZXJjaGFudC1maWx0ZXItb3B0aW9ucy1pbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7IGhlaWdodDogMjFweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDM1cHg7XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uL2NvbW1vbi9jb25maWcnXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgZGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBbXSxcclxuICAgICAgICAgICAgICAgIHVpOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0OiBjb25maWcuaWNvbi50aWNrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZWQgKCkge1xyXG4gICAgICAgICAgICB0aGlzLiRvbignZmlsdGVyYmFyLml0ZW0uY2xpY2suYnJpZGdlJywgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBlLmRldGFpbC5pdGVtLm9wdGlvbnNcclxuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBzZWxlY3RPcHRpb24gKHYsIGkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKCh2LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHYuYWN0aXZlICYmIGluZGV4ICE9PSBpICYmICh2LmFjdGl2ZSA9IGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc1tpXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZGlzcGF0Y2goJ2ZpbHRlcmJhci5pdGVtLnNlbGVjdCcsIHYpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGhpZGUgKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmlsaXR5ID0gJ2hpZGRlbidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZmlsdGVyYmFyL2ZpbHRlcmJhci1vcHRpb24ud2U/NjgyN2Y3YjQiXSwic291cmNlUm9vdCI6IiJ9