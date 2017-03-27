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

	var __weex_template__ = __webpack_require__(90)
	var __weex_style__ = __webpack_require__(91)
	var __weex_script__ = __webpack_require__(92)
	
	__weex_define__('@weex-component/0d527eb4367ca567143983bcbb942bf8', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})
	
	__weex_bootstrap__('@weex-component/0d527eb4367ca567143983bcbb942bf8',undefined,undefined)

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

/***/ 90:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "panel"
	  ],
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "panel-title"
	      ],
	      "attr": {
	        "value": function () {return this.title}
	      }
	    },
	    {
	      "type": "content"
	    }
	  ]
	}

/***/ },

/***/ 91:
/***/ function(module, exports) {

	module.exports = {
	  "panel": {
	    "flexWrap": "wrap",
	    "flexDirection": "row",
	    "width": 750,
	    "borderTopWidth": 1,
	    "borderTopStyle": "solid",
	    "borderTopColor": "#dbdbdb",
	    "borderBottomWidth": 1,
	    "borderBottomStyle": "solid",
	    "borderBottomColor": "#dbdbdb",
	    "backgroundColor": "#ffffff"
	  },
	  "panel-title": {
	    "marginLeft": 32,
	    "marginTop": 35,
	    "fontSize": 32,
	    "color": "#1a1a1a"
	  }
	}

/***/ },

/***/ 92:
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
	            title: '',
	            itemHeight: 170,
	            itemBorderWidth: 1,
	            assetsRoot: _config2.default.assetsRoot,
	            items: []
	        };
	    }
	};}
	/* generated by weex-loader */


/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWRiMDEyZWQ3NjI2ZThiNjU1ZGU/ODkxOCoqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYW5lbC9wYW5lbC53ZT8zMjhjIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29uZmlnLmpzP2MxODMqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFuZWwvcGFuZWwud2U/MjlhOCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYW5lbC9wYW5lbC53ZT8xZjk3Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhbmVsL3BhbmVsLndlIl0sIm5hbWVzIjpbImFzc2V0c1Jvb3QiLCJpY29uIiwidiIsInNjcmlwdEhvc3QiLCJodG1sSW5kZXgiLCJzY3JpcHRSb290IiwiYXBpUm9vdCIsImFuZHJvaWRBc3NldHNSb290IiwibWFwIiwibWFwX2xpZmUiLCJub3RpY2UiLCJzY2FuIiwiY29kZSIsInRyYW5zYWN0aW9uX3JlY29yZCIsInNlYXJjaCIsImJhY2siLCJyaWdodF9hcnJvdyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFDOztBQUVELDJGOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBLEtBQU1BLGFBQWEsbURBQW5COztBQUVBLFVBQVNDLElBQVQsQ0FBY0MsQ0FBZCxFQUFpQjtBQUNiLFlBQU9GLGFBQWEsT0FBYixHQUF1QkUsQ0FBOUI7QUFDSDttQkFDYztBQUNYO0FBQ0FDLGlCQUFZLDJDQUZEO0FBR1g7QUFDQUMsZ0JBQVcsc0RBSkE7QUFLWDtBQUNBQyxpQkFBWSxRQU5EO0FBT1g7QUFDQUwsaUJBQVlBLFVBUkQ7QUFTWDtBQUNBTSxjQUFTLGtEQVZFO0FBV1g7QUFDQUMsd0JBQW1CLHdCQVpSO0FBYVhOO0FBQ0lPLGNBQUtQLEtBQUssWUFBTCxDQURUO0FBRUlRLG1CQUFVUixLQUFLLGlCQUFMLENBRmQ7QUFHSVMsaUJBQVFULEtBQUssZUFBTCxDQUhaO0FBSUlVLGVBQU1WLEtBQUssYUFBTCxDQUpWO0FBS0lXLGVBQU1YLEtBQUssYUFBTCxDQUxWO0FBTUlZLDZCQUFvQlosS0FBSywyQkFBTCxDQU54QjtBQU9JYSxpQkFBUWIsS0FBSyxlQUFMLENBUFo7QUFRSWMsZUFBTWQsS0FBSyxhQUFMLENBUlY7QUFTSWUsc0JBQWFmLEtBQUssb0JBQUw7QUFUakIseUNBVVlBLEtBQUssb0JBQUwsQ0FWWixvQ0FXWUEsS0FBSyxlQUFMLENBWFoseUNBWWlCQSxLQUFLLG9CQUFMLENBWmpCLGtDQWFVQSxLQUFLLGFBQUwsQ0FiVix1Q0FjZUEsS0FBSyxrQkFBTCxDQWRmLHNDQWVjQSxLQUFLLGlCQUFMLENBZmQsa0NBZ0JVQSxLQUFLLGFBQUwsQ0FoQlYscUNBaUJhQSxLQUFLLGdCQUFMLENBakJiLGdEQWtCd0JBLEtBQUssMkJBQUwsQ0FsQnhCO0FBYlcsRTs7Ozs7OztBQ05mO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUE4QjtBQUM5QjtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7QUNFQTs7Ozs7OzsyQkFFQTs7b0JBRUE7eUJBQ0E7OEJBQ0E7MENBQ0E7b0JBRUE7QUFOQTtBQU9BO0FBVEEiLCJmaWxlIjoiY29tcG9uZW50c1xccGFuZWxcXHBhbmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNWRiMDEyZWQ3NjI2ZThiNjU1ZGUiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3BhbmVsLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3BhbmVsLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1EOlxcXFxXb3Jrc3BhY2VcXFxcd2VleC10dGZcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUQ6XFxcXFdvcmtzcGFjZVxcXFx3ZWV4LXR0ZlxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9RDpcXFxcV29ya3NwYWNlXFxcXHdlZXgtdHRmXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vcGFuZWwud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvMGQ1MjdlYjQzNjdjYTU2NzE0Mzk4M2JjYmI5NDJiZjgnLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuX193ZWV4X2Jvb3RzdHJhcF9fKCdAd2VleC1jb21wb25lbnQvMGQ1MjdlYjQzNjdjYTU2NzE0Mzk4M2JjYmI5NDJiZjgnLHVuZGVmaW5lZCx1bmRlZmluZWQpXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9wYW5lbC9wYW5lbC53ZT9lbnRyeT10cnVlXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMTUiLCIvLyBjb25zdCBhc3NldHNVUkwgPSAnZmlsZTovLy9zZGNhcmQvaW1nLydcclxuY29uc3QgYXNzZXRzUm9vdCA9ICdodHRwczovL2tvb29mbHkuZ2l0aHViLmlvL2tvc3RhbmQtdHRmL3R0Zi9hc3NldHMvJ1xyXG5cclxuZnVuY3Rpb24gaWNvbih2KSB7XHJcbiAgICByZXR1cm4gYXNzZXRzUm9vdCArICdpY29uLycgKyB2XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgLy8gd2VleOiEmuacrGhvc3RcclxuICAgIHNjcmlwdEhvc3Q6ICdodHRwczovL2tvb29mbHkuZ2l0aHViLmlvL2tvc3RhbmQtdHRmL3R0ZicsXHJcbiAgICAvLyBIVE1MIGluZGV4XHJcbiAgICBodG1sSW5kZXg6ICdodHRwczovL2tvb29mbHkuZ2l0aHViLmlvL2tvc3RhbmQtdHRmL3R0Zi9pbmRleC5odG1sJyxcclxuICAgIC8vIHdlZXjohJrmnKzmoLnnm67lvZVcclxuICAgIHNjcmlwdFJvb3Q6ICcvMTAwMS8nLFxyXG4gICAgLy8g5Zu+54mH562J6Z2Z5oCB6LWE5rqQ5qC555uu5b2VXHJcbiAgICBhc3NldHNSb290OiBhc3NldHNSb290LFxyXG4gICAgLy8gcmVzZXRmdWwgQVBJ5pyN5Yqh5qC56Lev5b6EXHJcbiAgICBhcGlSb290OiAnaHR0cHM6Ly9rb29vZmx5LmdpdGh1Yi5pby9rb3N0YW5kLXR0Zi90dGYvYXBpL3YxJyxcclxuICAgIC8vIGFuZHJvaWQg5pys5Zyw6Z2Z5oCB6LWE5rqQ6Lev5b6EXHJcbiAgICBhbmRyb2lkQXNzZXRzUm9vdDogJ2ZpbGU6Ly8vc2RjYXJkL2Fzc2V0cy8nLFxyXG4gICAgaWNvbjoge1xyXG4gICAgICAgIG1hcDogaWNvbignbWFwQDJ4LnBuZycpLFxyXG4gICAgICAgIG1hcF9saWZlOiBpY29uKCdtYXBfbGlmZUAyeC5wbmcnKSxcclxuICAgICAgICBub3RpY2U6IGljb24oJ25vdGljZUAyeC5wbmcnKSxcclxuICAgICAgICBzY2FuOiBpY29uKCdzY2FuQDJ4LnBuZycpLFxyXG4gICAgICAgIGNvZGU6IGljb24oJ2NvZGVAMngucG5nJyksXHJcbiAgICAgICAgdHJhbnNhY3Rpb25fcmVjb3JkOiBpY29uKCd0cmFuc2FjdGlvbl9yZWNvcmRAMngucG5nJyksXHJcbiAgICAgICAgc2VhcmNoOiBpY29uKCdzZWFyY2hAMngucG5nJyksXHJcbiAgICAgICAgYmFjazogaWNvbignYmFja0AyeC5wbmcnKSxcclxuICAgICAgICByaWdodF9hcnJvdzogaWNvbigncmlnaHRfYXJyb3dAMngucG5nJyksXHJcbiAgICAgICAgc2VhcmNoOiBpY29uKCdzZWFyY2hfc2hvcEAyeC5wbmcnKSxcclxuICAgICAgICBhcm91bmQ6IGljb24oJ2Fyb3VuZEAyeC5wbmcnKSxcclxuICAgICAgICBzZWFyY2hfcGFzczogaWNvbignc2VhcmNoX3Bhc3NAMngucG5nJyksXHJcbiAgICAgICAgc3RhcjogaWNvbignc3RhckAyeC5wbmcnKSxcclxuICAgICAgICBoYWxmX3N0YXI6IGljb24oJ2hhbGZfc3RhckAyeC5wbmcnKSxcclxuICAgICAgICBkcm9wZG93bjogaWNvbignZHJvcGRvd25AMngucG5nJyksXHJcbiAgICAgICAgdGljazogaWNvbigndGlja0AyeC5wbmcnKSxcclxuICAgICAgICBjb2xsZWN0OiBpY29uKCdjb2xsZWN0QDJ4LnBuZycpLFxyXG4gICAgICAgIGNvbGxlY3RfdW5zZWxlY3RlZDogaWNvbignY29sbGVjdC11bnNlbGVjdGVkQDJ4LnBuZycpXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2NvbmZpZy5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwicGFuZWxcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwicGFuZWwtdGl0bGVcIlxuICAgICAgXSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdGxlfVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiY29udGVudFwiXG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9zcmMvY29tcG9uZW50cy9wYW5lbC9wYW5lbC53ZVxuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxNSAyMyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInBhbmVsXCI6IHtcbiAgICBcImZsZXhXcmFwXCI6IFwid3JhcFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwid2lkdGhcIjogNzUwLFxuICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogMSxcbiAgICBcImJvcmRlclRvcFN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiI2RiZGJkYlwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogMSxcbiAgICBcImJvcmRlckJvdHRvbVN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI2RiZGJkYlwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwicGFuZWwtdGl0bGVcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiAzMixcbiAgICBcIm1hcmdpblRvcFwiOiAzNSxcbiAgICBcImZvbnRTaXplXCI6IDMyLFxuICAgIFwiY29sb3JcIjogXCIjMWExYTFhXCJcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vc3JjL2NvbXBvbmVudHMvcGFuZWwvcGFuZWwud2Vcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMTUgMjMiLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwicGFuZWxcIj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInBhbmVsLXRpdGxlXCI+e3t0aXRsZX19PC90ZXh0PlxyXG4gICAgICAgIDxjb250ZW50PjwvY29udGVudD5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c3R5bGUgc2NvcGVkPlxyXG4gICAgLnBhbmVsIHtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7IGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgd2lkdGg6IDc1MHB4O1xyXG4gICAgICAgIGJvcmRlci10b3Atd2lkdGg6IDFweDsgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7IGJvcmRlci10b3AtY29sb3I6ICNkYmRiZGI7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4OyAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7IGJvcmRlci1ib3R0b20tY29sb3I6ICNkYmRiZGI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIC5wYW5lbC10aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMycHg7IG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMnB4OyBjb2xvcjogIzFhMWExYTtcclxuICAgIH1cclxuPC9zdHlsZT5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vY29tbW9uL2NvbmZpZydcclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgICAgICAgICBpdGVtSGVpZ2h0OiAxNzAsXHJcbiAgICAgICAgICAgICAgICBpdGVtQm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICBhc3NldHNSb290OiBjb25maWcuYXNzZXRzUm9vdCxcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9wYW5lbC9wYW5lbC53ZT8yNjJlZTcyOCJdLCJzb3VyY2VSb290IjoiIn0=