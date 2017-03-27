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

	var __weex_template__ = __webpack_require__(96)
	var __weex_style__ = __webpack_require__(97)
	var __weex_script__ = __webpack_require__(98)
	
	__weex_define__('@weex-component/ffb9df9ea61dbb7175acf36553bdee62', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})
	
	__weex_bootstrap__('@weex-component/ffb9df9ea61dbb7175acf36553bdee62',undefined,undefined)

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

/***/ 96:
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

/***/ 97:
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

/***/ 98:
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


/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWRiMDEyZWQ3NjI2ZThiNjU1ZGU/ODkxOCoqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlYXJjaGJhci9zZWFyY2hiYXItaGlzdG9yeS53ZT9hNGVmIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29uZmlnLmpzP2MxODMqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWFyY2hiYXIvc2VhcmNoYmFyLWhpc3Rvcnkud2U/NTg2NSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWFyY2hiYXIvc2VhcmNoYmFyLWhpc3Rvcnkud2U/ZDQxMCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWFyY2hiYXIvc2VhcmNoYmFyLWhpc3Rvcnkud2UiXSwibmFtZXMiOlsiYXNzZXRzUm9vdCIsImljb24iLCJ2Iiwic2NyaXB0SG9zdCIsImh0bWxJbmRleCIsInNjcmlwdFJvb3QiLCJhcGlSb290IiwiYW5kcm9pZEFzc2V0c1Jvb3QiLCJtYXAiLCJtYXBfbGlmZSIsIm5vdGljZSIsInNjYW4iLCJjb2RlIiwidHJhbnNhY3Rpb25fcmVjb3JkIiwic2VhcmNoIiwiYmFjayIsInJpZ2h0X2Fycm93Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUM7O0FBRUQsMkY7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0EsS0FBTUEsYUFBYSxtREFBbkI7O0FBRUEsVUFBU0MsSUFBVCxDQUFjQyxDQUFkLEVBQWlCO0FBQ2IsWUFBT0YsYUFBYSxPQUFiLEdBQXVCRSxDQUE5QjtBQUNIO21CQUNjO0FBQ1g7QUFDQUMsaUJBQVksMkNBRkQ7QUFHWDtBQUNBQyxnQkFBVyxzREFKQTtBQUtYO0FBQ0FDLGlCQUFZLFFBTkQ7QUFPWDtBQUNBTCxpQkFBWUEsVUFSRDtBQVNYO0FBQ0FNLGNBQVMsa0RBVkU7QUFXWDtBQUNBQyx3QkFBbUIsd0JBWlI7QUFhWE47QUFDSU8sY0FBS1AsS0FBSyxZQUFMLENBRFQ7QUFFSVEsbUJBQVVSLEtBQUssaUJBQUwsQ0FGZDtBQUdJUyxpQkFBUVQsS0FBSyxlQUFMLENBSFo7QUFJSVUsZUFBTVYsS0FBSyxhQUFMLENBSlY7QUFLSVcsZUFBTVgsS0FBSyxhQUFMLENBTFY7QUFNSVksNkJBQW9CWixLQUFLLDJCQUFMLENBTnhCO0FBT0lhLGlCQUFRYixLQUFLLGVBQUwsQ0FQWjtBQVFJYyxlQUFNZCxLQUFLLGFBQUwsQ0FSVjtBQVNJZSxzQkFBYWYsS0FBSyxvQkFBTDtBQVRqQix5Q0FVWUEsS0FBSyxvQkFBTCxDQVZaLG9DQVdZQSxLQUFLLGVBQUwsQ0FYWix5Q0FZaUJBLEtBQUssb0JBQUwsQ0FaakIsa0NBYVVBLEtBQUssYUFBTCxDQWJWLHVDQWNlQSxLQUFLLGtCQUFMLENBZGYsc0NBZWNBLEtBQUssaUJBQUwsQ0FmZCxrQ0FnQlVBLEtBQUssYUFBTCxDQWhCVixxQ0FpQmFBLEtBQUssZ0JBQUwsQ0FqQmIsZ0RBa0J3QkEsS0FBSywyQkFBTCxDQWxCeEI7QUFiVyxFOzs7Ozs7O0FDTmY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0EseUNBQXdDO0FBQ3hDLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFvQztBQUNwQztBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDN0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7OztBQ1BBOzs7Ozs7OzJCQUVBOzs7NkNBSUE7QUFGQTtvQkFHQSxTQUNBLGtCQUdBO0FBUkE7QUFTQTs7O29DQUVBO3lCQUNBO21EQUNBO0FBQ0E7MkRBRUEsQ0FDQTsrQkFDQTttREFDQTtBQUVBO0FBWEE7QUFaQSIsImZpbGUiOiJjb21wb25lbnRzXFxzZWFyY2hiYXJcXHNlYXJjaGJhci1oaXN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNWRiMDEyZWQ3NjI2ZThiNjU1ZGUiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3NlYXJjaGJhci1oaXN0b3J5LndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3NlYXJjaGJhci1oaXN0b3J5LndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vc2VhcmNoYmFyLWhpc3Rvcnkud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvZmZiOWRmOWVhNjFkYmI3MTc1YWNmMzY1NTNiZGVlNjInLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuX193ZWV4X2Jvb3RzdHJhcF9fKCdAd2VleC1jb21wb25lbnQvZmZiOWRmOWVhNjFkYmI3MTc1YWNmMzY1NTNiZGVlNjInLHVuZGVmaW5lZCx1bmRlZmluZWQpXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9zZWFyY2hiYXIvc2VhcmNoYmFyLWhpc3Rvcnkud2U/ZW50cnk9dHJ1ZVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDE3IiwiLy8gY29uc3QgYXNzZXRzVVJMID0gJ2ZpbGU6Ly8vc2RjYXJkL2ltZy8nXHJcbmNvbnN0IGFzc2V0c1Jvb3QgPSAnaHR0cHM6Ly9rb29vZmx5LmdpdGh1Yi5pby9rb3N0YW5kLXR0Zi90dGYvYXNzZXRzLydcclxuXHJcbmZ1bmN0aW9uIGljb24odikge1xyXG4gICAgcmV0dXJuIGFzc2V0c1Jvb3QgKyAnaWNvbi8nICsgdlxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIC8vIHdlZXjohJrmnKxob3N0XHJcbiAgICBzY3JpcHRIb3N0OiAnaHR0cHM6Ly9rb29vZmx5LmdpdGh1Yi5pby9rb3N0YW5kLXR0Zi90dGYnLFxyXG4gICAgLy8gSFRNTCBpbmRleFxyXG4gICAgaHRtbEluZGV4OiAnaHR0cHM6Ly9rb29vZmx5LmdpdGh1Yi5pby9rb3N0YW5kLXR0Zi90dGYvaW5kZXguaHRtbCcsXHJcbiAgICAvLyB3ZWV46ISa5pys5qC555uu5b2VXHJcbiAgICBzY3JpcHRSb290OiAnLzEwMDEvJyxcclxuICAgIC8vIOWbvueJh+etiemdmeaAgei1hOa6kOagueebruW9lVxyXG4gICAgYXNzZXRzUm9vdDogYXNzZXRzUm9vdCxcclxuICAgIC8vIHJlc2V0ZnVsIEFQSeacjeWKoeaguei3r+W+hFxyXG4gICAgYXBpUm9vdDogJ2h0dHBzOi8va29vb2ZseS5naXRodWIuaW8va29zdGFuZC10dGYvdHRmL2FwaS92MScsXHJcbiAgICAvLyBhbmRyb2lkIOacrOWcsOmdmeaAgei1hOa6kOi3r+W+hFxyXG4gICAgYW5kcm9pZEFzc2V0c1Jvb3Q6ICdmaWxlOi8vL3NkY2FyZC9hc3NldHMvJyxcclxuICAgIGljb246IHtcclxuICAgICAgICBtYXA6IGljb24oJ21hcEAyeC5wbmcnKSxcclxuICAgICAgICBtYXBfbGlmZTogaWNvbignbWFwX2xpZmVAMngucG5nJyksXHJcbiAgICAgICAgbm90aWNlOiBpY29uKCdub3RpY2VAMngucG5nJyksXHJcbiAgICAgICAgc2NhbjogaWNvbignc2NhbkAyeC5wbmcnKSxcclxuICAgICAgICBjb2RlOiBpY29uKCdjb2RlQDJ4LnBuZycpLFxyXG4gICAgICAgIHRyYW5zYWN0aW9uX3JlY29yZDogaWNvbigndHJhbnNhY3Rpb25fcmVjb3JkQDJ4LnBuZycpLFxyXG4gICAgICAgIHNlYXJjaDogaWNvbignc2VhcmNoQDJ4LnBuZycpLFxyXG4gICAgICAgIGJhY2s6IGljb24oJ2JhY2tAMngucG5nJyksXHJcbiAgICAgICAgcmlnaHRfYXJyb3c6IGljb24oJ3JpZ2h0X2Fycm93QDJ4LnBuZycpLFxyXG4gICAgICAgIHNlYXJjaDogaWNvbignc2VhcmNoX3Nob3BAMngucG5nJyksXHJcbiAgICAgICAgYXJvdW5kOiBpY29uKCdhcm91bmRAMngucG5nJyksXHJcbiAgICAgICAgc2VhcmNoX3Bhc3M6IGljb24oJ3NlYXJjaF9wYXNzQDJ4LnBuZycpLFxyXG4gICAgICAgIHN0YXI6IGljb24oJ3N0YXJAMngucG5nJyksXHJcbiAgICAgICAgaGFsZl9zdGFyOiBpY29uKCdoYWxmX3N0YXJAMngucG5nJyksXHJcbiAgICAgICAgZHJvcGRvd246IGljb24oJ2Ryb3Bkb3duQDJ4LnBuZycpLFxyXG4gICAgICAgIHRpY2s6IGljb24oJ3RpY2tAMngucG5nJyksXHJcbiAgICAgICAgY29sbGVjdDogaWNvbignY29sbGVjdEAyeC5wbmcnKSxcclxuICAgICAgICBjb2xsZWN0X3Vuc2VsZWN0ZWQ6IGljb24oJ2NvbGxlY3QtdW5zZWxlY3RlZEAyeC5wbmcnKVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9jb25maWcuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcInNlYXJjaGJhci1oaXN0b3J5XCJcbiAgXSxcbiAgXCJldmVudHNcIjoge1xuICAgIFwiY2xpY2tcIjogXCJoaWRlXCJcbiAgfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwic2VhcmNoYmFyLWhpc3RvcnktcGFuZWxcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwic2VhcmNoYmFyLWhpc3RvcnktdGl0bGVcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCLmkJzntKLljoblj7JcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwic2VhcmNoYmFyLWhpc3RvcnktbGlzdFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcInJlcGVhdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaXRlbXN9LFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24gKCRldmVudCkge3RoaXMuc2VhcmNoKHRoaXMudGV4dCwkZXZlbnQpfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInNlYXJjaGJhci1oaXN0b3J5LWxpc3QtaWNvblwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnVpLmljb259XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwic2VhcmNoYmFyLWhpc3RvcnktbGlzdC10ZXh0XCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50ZXh0fVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJzZWFyY2hiYXItaGlzdG9yeS1jbGVhclwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJzZWFyY2hiYXItaGlzdG9yeS1jbGVhci10ZXh0XCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJjbGVhclNlYXJjaEhpc3RvcnlcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLmuIXpmaTogYrlpKnorrDlvZVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9zcmMvY29tcG9uZW50cy9zZWFyY2hiYXIvc2VhcmNoYmFyLWhpc3Rvcnkud2Vcbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMTcgMjQiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJzZWFyY2hiYXItaGlzdG9yeVwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJ0b3BcIjogODgsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwiYm90dG9tXCI6IDAsXG4gICAgXCJ6SW5kZXhcIjogOTksXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjJmMmYyXCJcbiAgfSxcbiAgXCJzZWFyY2hiYXItaGlzdG9yeS1wYW5lbFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJzZWFyY2hiYXItaGlzdG9yeS10aXRsZVwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IDM1LFxuICAgIFwibWFyZ2luVG9wXCI6IDI3LFxuICAgIFwibWFyZ2luQm90dG9tXCI6IDEwLFxuICAgIFwiZm9udFNpemVcIjogMjQsXG4gICAgXCJjb2xvclwiOiBcIiNiZmJmYmZcIlxuICB9LFxuICBcInNlYXJjaGJhci1oaXN0b3J5LWxpc3RcIjoge1xuICAgIFwiZmxleFdyYXBcIjogXCJ3cmFwXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImZsZXgtc3RhcnRcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIndpZHRoXCI6IDcxNSxcbiAgICBcImhlaWdodFwiOiA4OCxcbiAgICBcIm1hcmdpbkxlZnRcIjogMzUsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMjAsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiAxLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjZGJkYmRiXCIsXG4gICAgXCJib3JkZXJCb3R0b21TdHlsZVwiOiBcInNvbGlkXCJcbiAgfSxcbiAgXCJzZWFyY2hiYXItaGlzdG9yeS1saXN0LWljb25cIjoge1xuICAgIFwid2lkdGhcIjogMjcsXG4gICAgXCJoZWlnaHRcIjogMjcsXG4gICAgXCJtYXJnaW5SaWdodFwiOiAxNVxuICB9LFxuICBcInNlYXJjaGJhci1oaXN0b3J5LWxpc3QtdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiAyNCxcbiAgICBcImNvbG9yXCI6IFwiIzRkNGQ0ZFwiXG4gIH0sXG4gIFwic2VhcmNoYmFyLWhpc3RvcnktY2xlYXJcIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImhlaWdodFwiOiA4OFxuICB9LFxuICBcInNlYXJjaGJhci1oaXN0b3J5LWNsZWFyLXRleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogMjgsXG4gICAgXCJjb2xvclwiOiBcIiM4MDgwODBcIlxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9zcmMvY29tcG9uZW50cy9zZWFyY2hiYXIvc2VhcmNoYmFyLWhpc3Rvcnkud2Vcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMTcgMjQiLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2VhcmNoYmFyLWhpc3RvcnlcIiBvbmNsaWNrPVwiaGlkZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2hiYXItaGlzdG9yeS1wYW5lbFwiPlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cInNlYXJjaGJhci1oaXN0b3J5LXRpdGxlXCI+5pCc57Si5Y6G5Y+yPC90ZXh0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoYmFyLWhpc3RvcnktbGlzdFwiIHJlcGVhdD1cInt7aXRlbXN9fVwiIG9uY2xpY2s9XCJzZWFyY2godGV4dClcIj5cclxuICAgICAgICAgICAgICAgIDxpbWFnZSBjbGFzcz1cInNlYXJjaGJhci1oaXN0b3J5LWxpc3QtaWNvblwiIHNyYz1cInt7dWkuaWNvbn19XCI+PC9pbWFnZT5cclxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwic2VhcmNoYmFyLWhpc3RvcnktbGlzdC10ZXh0XCI+e3t0ZXh0fX08L3RleHQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoYmFyLWhpc3RvcnktY2xlYXJcIj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwic2VhcmNoYmFyLWhpc3RvcnktY2xlYXItdGV4dFwiIG9uY2xpY2s9XCJjbGVhclNlYXJjaEhpc3RvcnlcIj7muIXpmaTogYrlpKnorrDlvZU8L3RleHQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAgIC5zZWFyY2hiYXItaGlzdG9yeSB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkOyB0b3A6IDg4cHg7IGxlZnQ6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7IHotaW5kZXg6IDk5O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoYmFyLWhpc3RvcnktcGFuZWwgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XHJcbiAgICAuc2VhcmNoYmFyLWhpc3RvcnktdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzNXB4OyBtYXJnaW4tdG9wOiAyN3B4OyBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDsgY29sb3I6ICNiZmJmYmY7XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoYmFyLWhpc3RvcnktbGlzdCB7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwOyBmbGV4LWRpcmVjdGlvbjogcm93OyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDcxNXB4OyBoZWlnaHQ6IDg4cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDM1cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7IGJvcmRlci1ib3R0b20tY29sb3I6ICNkYmRiZGI7IGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG4gICAgfVxyXG4gICAgLnNlYXJjaGJhci1oaXN0b3J5LWxpc3QtaWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDI3cHg7IGhlaWdodDogMjdweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoYmFyLWhpc3RvcnktbGlzdC10ZXh0IHsgZm9udC1zaXplOiAyNHB4OyBjb2xvcjogIzRkNGQ0ZDsgfVxyXG4gICAgLnNlYXJjaGJhci1oaXN0b3J5LWNsZWFyIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDg4cHg7XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoYmFyLWhpc3RvcnktY2xlYXItdGV4dCB7IGZvbnQtc2l6ZTogMjhweDsgY29sb3I6ICM4MDgwODA7IH1cclxuPC9zdHlsZT5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vY29tbW9uL2NvbmZpZydcclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBkYXRhICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHVpOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogY29uZmlnLmljb24uc2VhcmNoX3Bhc3NcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ+WNjua2puS4h+WuticgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICflj6/ojo7onJzlhL8nIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBzZWFyY2ggKHYpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHYpXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRkaXNwYXRjaCgnc2VyY2hiYXJIaXN0b3J5SGlkZScsIHt9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjbGVhclNlYXJjaEhpc3RvcnkgKCkge1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaGlkZSAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRkaXNwYXRjaCgnc2VyY2hiYXJIaXN0b3J5SGlkZScsIHt9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9zZWFyY2hiYXIvc2VhcmNoYmFyLWhpc3Rvcnkud2U/MDZhOGRiN2QiXSwic291cmNlUm9vdCI6IiJ9