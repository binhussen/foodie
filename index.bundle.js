"use strict";
(self["webpackChunkcapstone"] = self["webpackChunkcapstone"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/body-bg.svg */ "./images/body-bg.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/logo.svg */ "./images/logo.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/popUp-bg.svg */ "./images/popUp-bg.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/** @format */\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  font-size: calc(15px + 0.390625vw);\r\n\r\n  /* font-family: 'Cookie', cursive; */\r\n  font-family: 'Dosis', sans-serif;\r\n}\r\n\r\nbody {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nheader.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  border: 1px solid hsl(35, 100%, 98%);\r\n  background-color: #ffecd1;\r\n  border-radius: 0 0 10px 15px;\r\n  padding: 16px 15px;\r\n  margin-bottom: 24px;\r\n}\r\n\r\n.nav-links {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  padding: 0 15px;\r\n}\r\n\r\n.hamburger {\r\n  display: none;\r\n}\r\n\r\n.logo-container {\r\n  width: 150px;\r\n  height: auto;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") center no-repeat;\r\n}\r\n\r\n.container {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.nav-links li {\r\n  margin-right: 20px;\r\n}\r\n\r\n.nav-links li a {\r\n  color: #000;\r\n}\r\n\r\n.nav-links li:nth-of-type(1) a {\r\n  font-weight: bold;\r\n  text-decoration: underline;\r\n}\r\n\r\n.cards-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));\r\n  column-gap: 20px;\r\n  row-gap: 30px;\r\n}\r\n\r\n.cards-container > * {\r\n  /* border: 1px solid red; */\r\n  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;\r\n  border-radius: 20px;\r\n}\r\n\r\n.img-container {\r\n  width: 100%;\r\n}\r\n\r\n.img-container img {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 20px 20px 0 0;\r\n}\r\n\r\n.card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #fff;\r\n}\r\n\r\n.card .content {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 10px 15px;\r\n}\r\n\r\n.card .name {\r\n  color: hsl(35, 100%, 47%);\r\n}\r\n\r\n.card .like-btn {\r\n  cursor: pointer;\r\n  color: #000;\r\n}\r\n\r\n.card .pressed {\r\n  color: #f00;\r\n}\r\n\r\n.card .like-container {\r\n  width: auto;\r\n  align-self: flex-end;\r\n  font-size: 0.7rem;\r\n  margin-right: 15px;\r\n}\r\n\r\n.card button {\r\n  align-items: center;\r\n  background-color: rgb(251, 146, 0.5);\r\n  border: 1px solid rgb(251, 146, 0.1);\r\n  box-shadow: rgb(251, 146, 0.02) 0 1px 3px 0;\r\n  box-sizing: border-box;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  display: inline-flex;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  justify-content: center;\r\n  line-height: 1.25;\r\n  min-height: 3rem;\r\n  padding: calc(0.575rem - 1px) calc(1.1rem - 1px);\r\n  position: relative;\r\n  text-decoration: none;\r\n  transition: all 250ms;\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  touch-action: manipulation;\r\n  vertical-align: baseline;\r\n  width: 40%;\r\n  margin: 20px auto;\r\n  border-radius: 50px;\r\n}\r\n\r\n.comment-container button {\r\n  width: auto;\r\n  padding: 8px 10px;\r\n}\r\n\r\n.card button:hover,\r\n.card button:focus {\r\n  border-color: rgb(251, 146, 0.15);\r\n  box-shadow: rgb(251, 146, 0.1) 0 2px 10px;\r\n}\r\n\r\n.card button:hover {\r\n  transform: translateY(-1px);\r\n}\r\n\r\n.card button:active {\r\n  background-color: hsl(35, 99%, 47%);\r\n  border-color: rgb(251, 146, 0.15);\r\n  box-shadow: rgb(251, 146, 0.06) 0 2px 4px;\r\n  color: rgba(255, 255, 255, 0.65);\r\n  transform: translateY(0);\r\n}\r\n\r\n.comment-pop-up {\r\n  border-radius: 10px;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 90%;\r\n  height: 90%;\r\n  overflow-y: scroll;\r\n  display: none;\r\n  padding: 2rem 0;\r\n  background-color: #ffecd1;\r\n  color: hsl(0, 0%, 10%);\r\n  z-index: 100;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n}\r\n\r\n.show-pop-up {\r\n  display: block;\r\n}\r\n\r\n.comment-pop-up .item-img {\r\n  width: 300px;\r\n  margin: 0 auto 10px auto;\r\n  border-radius: 10px;\r\n  height: 300px;\r\n}\r\n\r\n.comment-pop-up img {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 10px;\r\n}\r\n\r\n.comment-pop-up .add-comment-btn {\r\n  width: 50%;\r\n}\r\n\r\n.comment-pop-up .close-btn {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 15px;\r\n  font-size: 1.3rem;\r\n  font-weight: bold;\r\n  color: hsl(35, 100%, 35%);\r\n}\r\n\r\n.pop-up-heading {\r\n  text-align: center;\r\n}\r\n\r\n.pop-up-description {\r\n  width: 80%;\r\n  margin: 10px auto;\r\n  line-height: 1.6;\r\n}\r\n\r\n.comment-container {\r\n  width: 80%;\r\n  margin: 10px auto;\r\n}\r\n\r\n.comment-heading {\r\n  font-weight: bold;\r\n  margin: 10px 0;\r\n}\r\n\r\n.comment-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 50%;\r\n}\r\n\r\n.comment-container input,\r\ntextarea {\r\n  padding: 7px 10px;\r\n  margin-bottom: 10px;\r\n  background-color: hsl(35, 100%, 95%);\r\n  border: none;\r\n  transition: 0.2s ease-in;\r\n  outline: none;\r\n  border-radius: 10px 10px 0 10px;\r\n}\r\n\r\n.footer {\r\n  background-color: #ffecd1;\r\n  border-radius: 15px 15px 0 0;\r\n  padding: 10px 15px;\r\n  margin-top: 50px;\r\n  text-align: center;\r\n}\r\n\r\n@media screen and (max-width: 766px) {\r\n  .pop-up-description {\r\n    width: 90%;\r\n  }\r\n\r\n  .comment-form {\r\n    width: 100%;\r\n  }\r\n\r\n  .comment-pop-up .close-btn {\r\n    top: 20px;\r\n    right: 20px;\r\n  }\r\n\r\n  .comment-pop-up .item-img {\r\n    margin-top: 30px;\r\n  }\r\n\r\n  .logo-container {\r\n    width: 64px;\r\n    height: 16px;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") center no-repeat;\r\n  }\r\n\r\n  .logo-container.active {\r\n    visibility: hidden;\r\n    transition: 0s;\r\n  }\r\n\r\n  .nav-links {\r\n    display: none;\r\n    position: fixed;\r\n    justify-content: flex-start;\r\n    align-items: flex-start;\r\n    margin-left: 0;\r\n    flex-direction: column;\r\n    top: 0;\r\n    width: 90%;\r\n    height: 100%;\r\n    transition: 0.5s ease-in-out;\r\n    z-index: 1;\r\n  }\r\n\r\n  .nav-links.active {\r\n    display: flex;\r\n    left: 0;\r\n    background: #eebaa8;\r\n  }\r\n\r\n  .nav-item {\r\n    padding: 0.625rem 0.75rem;\r\n  }\r\n\r\n  .nav-links.active .nav-item {\r\n    font-weight: 700;\r\n    line-height: 44px;\r\n    color: #fff5e1;\r\n    border-bottom: 1px solid #6f6c6b;\r\n    padding: 1rem;\r\n    margin: 0 1.5rem;\r\n  }\r\n\r\n  .hamburger {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 4px;\r\n    position: absolute;\r\n    cursor: pointer;\r\n    background-color: transparent;\r\n    border: none;\r\n    right: 3rem;\r\n    transform: translateY(-50%);\r\n    z-index: 1;\r\n  }\r\n\r\n  .bar {\r\n    width: 1rem;\r\n    border: 1px solid #acb7c3;\r\n    transition: 0.6s ease;\r\n  }\r\n\r\n  .hamburger.active .bar:nth-of-type(1) {\r\n    transform: translateY(6.3px) rotate(45deg);\r\n  }\r\n\r\n  .hamburger.active .bar:nth-of-type(2) {\r\n    opacity: 0;\r\n  }\r\n\r\n  .hamburger.active .bar:nth-of-type(3) {\r\n    transform: translateY(-6.3px) rotate(-45deg);\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["/** @format */\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  font-size: calc(15px + 0.390625vw);\r\n\r\n  /* font-family: 'Cookie', cursive; */\r\n  font-family: 'Dosis', sans-serif;\r\n}\r\n\r\nbody {\r\n  background-image: url(../images/body-bg.svg);\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nheader.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  border: 1px solid hsl(35, 100%, 98%);\r\n  background-color: #ffecd1;\r\n  border-radius: 0 0 10px 15px;\r\n  padding: 16px 15px;\r\n  margin-bottom: 24px;\r\n}\r\n\r\n.nav-links {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  padding: 0 15px;\r\n}\r\n\r\n.hamburger {\r\n  display: none;\r\n}\r\n\r\n.logo-container {\r\n  width: 150px;\r\n  height: auto;\r\n  background: url(../images/logo.svg) center no-repeat;\r\n}\r\n\r\n.container {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.nav-links li {\r\n  margin-right: 20px;\r\n}\r\n\r\n.nav-links li a {\r\n  color: #000;\r\n}\r\n\r\n.nav-links li:nth-of-type(1) a {\r\n  font-weight: bold;\r\n  text-decoration: underline;\r\n}\r\n\r\n.cards-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));\r\n  column-gap: 20px;\r\n  row-gap: 30px;\r\n}\r\n\r\n.cards-container > * {\r\n  /* border: 1px solid red; */\r\n  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;\r\n  border-radius: 20px;\r\n}\r\n\r\n.img-container {\r\n  width: 100%;\r\n}\r\n\r\n.img-container img {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 20px 20px 0 0;\r\n}\r\n\r\n.card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #fff;\r\n}\r\n\r\n.card .content {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 10px 15px;\r\n}\r\n\r\n.card .name {\r\n  color: hsl(35, 100%, 47%);\r\n}\r\n\r\n.card .like-btn {\r\n  cursor: pointer;\r\n  color: #000;\r\n}\r\n\r\n.card .pressed {\r\n  color: #f00;\r\n}\r\n\r\n.card .like-container {\r\n  width: auto;\r\n  align-self: flex-end;\r\n  font-size: 0.7rem;\r\n  margin-right: 15px;\r\n}\r\n\r\n.card button {\r\n  align-items: center;\r\n  background-color: rgb(251, 146, 0.5);\r\n  border: 1px solid rgb(251, 146, 0.1);\r\n  box-shadow: rgb(251, 146, 0.02) 0 1px 3px 0;\r\n  box-sizing: border-box;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  display: inline-flex;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  justify-content: center;\r\n  line-height: 1.25;\r\n  min-height: 3rem;\r\n  padding: calc(0.575rem - 1px) calc(1.1rem - 1px);\r\n  position: relative;\r\n  text-decoration: none;\r\n  transition: all 250ms;\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  touch-action: manipulation;\r\n  vertical-align: baseline;\r\n  width: 40%;\r\n  margin: 20px auto;\r\n  border-radius: 50px;\r\n}\r\n\r\n.comment-container button {\r\n  width: auto;\r\n  padding: 8px 10px;\r\n}\r\n\r\n.card button:hover,\r\n.card button:focus {\r\n  border-color: rgb(251, 146, 0.15);\r\n  box-shadow: rgb(251, 146, 0.1) 0 2px 10px;\r\n}\r\n\r\n.card button:hover {\r\n  transform: translateY(-1px);\r\n}\r\n\r\n.card button:active {\r\n  background-color: hsl(35, 99%, 47%);\r\n  border-color: rgb(251, 146, 0.15);\r\n  box-shadow: rgb(251, 146, 0.06) 0 2px 4px;\r\n  color: rgba(255, 255, 255, 0.65);\r\n  transform: translateY(0);\r\n}\r\n\r\n.comment-pop-up {\r\n  border-radius: 10px;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 90%;\r\n  height: 90%;\r\n  overflow-y: scroll;\r\n  display: none;\r\n  padding: 2rem 0;\r\n  background-color: #ffecd1;\r\n  color: hsl(0, 0%, 10%);\r\n  z-index: 100;\r\n  background-image: url(../images/popUp-bg.svg);\r\n}\r\n\r\n.show-pop-up {\r\n  display: block;\r\n}\r\n\r\n.comment-pop-up .item-img {\r\n  width: 300px;\r\n  margin: 0 auto 10px auto;\r\n  border-radius: 10px;\r\n  height: 300px;\r\n}\r\n\r\n.comment-pop-up img {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 10px;\r\n}\r\n\r\n.comment-pop-up .add-comment-btn {\r\n  width: 50%;\r\n}\r\n\r\n.comment-pop-up .close-btn {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 15px;\r\n  font-size: 1.3rem;\r\n  font-weight: bold;\r\n  color: hsl(35, 100%, 35%);\r\n}\r\n\r\n.pop-up-heading {\r\n  text-align: center;\r\n}\r\n\r\n.pop-up-description {\r\n  width: 80%;\r\n  margin: 10px auto;\r\n  line-height: 1.6;\r\n}\r\n\r\n.comment-container {\r\n  width: 80%;\r\n  margin: 10px auto;\r\n}\r\n\r\n.comment-heading {\r\n  font-weight: bold;\r\n  margin: 10px 0;\r\n}\r\n\r\n.comment-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 50%;\r\n}\r\n\r\n.comment-container input,\r\ntextarea {\r\n  padding: 7px 10px;\r\n  margin-bottom: 10px;\r\n  background-color: hsl(35, 100%, 95%);\r\n  border: none;\r\n  transition: 0.2s ease-in;\r\n  outline: none;\r\n  border-radius: 10px 10px 0 10px;\r\n}\r\n\r\n.footer {\r\n  background-color: #ffecd1;\r\n  border-radius: 15px 15px 0 0;\r\n  padding: 10px 15px;\r\n  margin-top: 50px;\r\n  text-align: center;\r\n}\r\n\r\n@media screen and (max-width: 766px) {\r\n  .pop-up-description {\r\n    width: 90%;\r\n  }\r\n\r\n  .comment-form {\r\n    width: 100%;\r\n  }\r\n\r\n  .comment-pop-up .close-btn {\r\n    top: 20px;\r\n    right: 20px;\r\n  }\r\n\r\n  .comment-pop-up .item-img {\r\n    margin-top: 30px;\r\n  }\r\n\r\n  .logo-container {\r\n    width: 64px;\r\n    height: 16px;\r\n    background: url(../images/logo.svg) center no-repeat;\r\n  }\r\n\r\n  .logo-container.active {\r\n    visibility: hidden;\r\n    transition: 0s;\r\n  }\r\n\r\n  .nav-links {\r\n    display: none;\r\n    position: fixed;\r\n    justify-content: flex-start;\r\n    align-items: flex-start;\r\n    margin-left: 0;\r\n    flex-direction: column;\r\n    top: 0;\r\n    width: 90%;\r\n    height: 100%;\r\n    transition: 0.5s ease-in-out;\r\n    z-index: 1;\r\n  }\r\n\r\n  .nav-links.active {\r\n    display: flex;\r\n    left: 0;\r\n    background: #eebaa8;\r\n  }\r\n\r\n  .nav-item {\r\n    padding: 0.625rem 0.75rem;\r\n  }\r\n\r\n  .nav-links.active .nav-item {\r\n    font-weight: 700;\r\n    line-height: 44px;\r\n    color: #fff5e1;\r\n    border-bottom: 1px solid #6f6c6b;\r\n    padding: 1rem;\r\n    margin: 0 1.5rem;\r\n  }\r\n\r\n  .hamburger {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 4px;\r\n    position: absolute;\r\n    cursor: pointer;\r\n    background-color: transparent;\r\n    border: none;\r\n    right: 3rem;\r\n    transform: translateY(-50%);\r\n    z-index: 1;\r\n  }\r\n\r\n  .bar {\r\n    width: 1rem;\r\n    border: 1px solid #acb7c3;\r\n    transition: 0.6s ease;\r\n  }\r\n\r\n  .hamburger.active .bar:nth-of-type(1) {\r\n    transform: translateY(6.3px) rotate(45deg);\r\n  }\r\n\r\n  .hamburger.active .bar:nth-of-type(2) {\r\n    opacity: 0;\r\n  }\r\n\r\n  .hamburger.active .bar:nth-of-type(3) {\r\n    transform: translateY(-6.3px) rotate(-45deg);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _js_display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/display.js */ "./src/js/display.js");
/* harmony import */ var _js_likes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/likes.js */ "./src/js/likes.js");
/* harmony import */ var _js_meals_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/meals.js */ "./src/js/meals.js");
/** @format */






const like = new _js_likes_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
const meal = new _js_meals_js__WEBPACK_IMPORTED_MODULE_3__["default"]();

window.onload = async () => {
  await (0,_js_display_js__WEBPACK_IMPORTED_MODULE_1__.loadDataFromAPI)();
  meal.countMeals();
};

document.addEventListener('click', (e) => {
  if (!e.target.matches('.like-btn')) {
    return;
  }
  if (e.target.matches('.like-btn')) {
    const likeBtns = document.querySelectorAll('.like-btn');
    likeBtns.forEach((btn, index) => {
      if (e.target === btn) {
        like.updateLikes(index);
      }
    });
  }
});

const humberger = document.querySelector('.hamburger');
humberger.addEventListener('click', () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-links');
  const logo = document.querySelector('.logo-container');
  hamburger.classList.toggle('active');
  nav.classList.toggle('active');
  logo.classList.toggle('active');
});


/***/ }),

/***/ "./src/js/comments.js":
/*!****************************!*\
  !*** ./src/js/comments.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Comment)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./src/js/config.js");
/** @format */



class Comment {
  getComments = async (mealID) => {
    const commentsResponse = await fetch(
      `${_config_js__WEBPACK_IMPORTED_MODULE_0__.INVOLVEMENT_URL}/comments?item_id=${mealID}`,
    );
    const comment = await commentsResponse.json();
    return comment;
  };

  addComment = async (name, comment, id) => {
    const postCommentUrl = `${_config_js__WEBPACK_IMPORTED_MODULE_0__.INVOLVEMENT_URL}/comments`;
    await fetch(postCommentUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id,
        username: name,
        comment,
      }),
    });
  };

  countComments = async () => {
    const amount = document.querySelector('.comments-amount');
    const comments = document.querySelectorAll('.comments');
    amount.textContent = `(${comments.length ?? 0})`;
  };
}


/***/ }),

/***/ "./src/js/config.js":
/*!**************************!*\
  !*** ./src/js/config.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASEAPI_URL": () => (/* binding */ BASEAPI_URL),
/* harmony export */   "INVOLVEMENT_URL": () => (/* binding */ INVOLVEMENT_URL)
/* harmony export */ });
/** @format */

const BASEAPI_URL = 'https://www.themealdb.com/api/json/v1/1';
const INVOLVEMENT_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sAxQtNP5nzOV9l3P6DO3';


/***/ }),

/***/ "./src/js/display.js":
/*!***************************!*\
  !*** ./src/js/display.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayCards": () => (/* binding */ displayCards),
/* harmony export */   "displayPopup": () => (/* binding */ displayPopup),
/* harmony export */   "loadDataFromAPI": () => (/* binding */ loadDataFromAPI)
/* harmony export */ });
/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments.js */ "./src/js/comments.js");
/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likes.js */ "./src/js/likes.js");
/* harmony import */ var _meals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meals.js */ "./src/js/meals.js");
/** @format */





const comment = new _comments_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
const like = new _likes_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
const meal = new _meals_js__WEBPACK_IMPORTED_MODULE_2__["default"]();

const displayPopup = async (mealID) => {
  const mealDetail = await meal.getMealDetails(mealID);
  const comments = await comment.getComments(mealID);
  let html = `<i class="fa-solid fa-x close-btn"></i>
  <div class="item-img">
    <img src="${mealDetail.strMealThumb}" alt="">
  </div>
  <h2 class="pop-up-heading">${mealDetail.strMeal}</h2>
  <div class="pop-up-description">
  ${mealDetail.strInstructions}
  </div>
    <div class="comment-container">
    <div class="comment-heading">
      Comments <span class="comments-amount"></span>
    </div>
    <div class="comment-list">
    `;
  if (comments.length > 0) {
    comments.forEach((comment) => {
      html += `<div class="comments">
      <span class="comment-date">${comment.creation_date}</span>
      <span class="comment-descritpion">${comment.username}: ${comment.comment}</span>
    </div>
    `;
    });
  }
  html += `</div>
  <div class="comment-form">
      <div class="comment-heading">
        Add a comment
      </div>
      <input class="commenter-name" type="text" placeholder="Your name">
      <textarea class="comment" name="comment" id="" cols="30" rows="10" placeholder="Your insights"></textarea>
      <button class="add-comment-btn">Comment</button>
    </div>
  </div>`;

  const popUp = document.querySelector('.comment-pop-up');
  popUp.innerHTML = html;
  popUp.classList.add('show-pop-up');

  const closeBtn = document.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => {
    popUp.classList.remove('show-pop-up');
  });

  const commenterName = document.querySelector('.commenter-name');
  const commentText = document.querySelector('.comment');
  const commentBtn = document.querySelector('.add-comment-btn');
  const commentlist = document.querySelector('.comment-list');
  commentBtn.addEventListener('click', () => {
    comment
      .addComment(commenterName.value, commentText.value, mealID)
      .then(() => {
        commentlist.innerHTML += `<div class="comments"><span class="comment-date">${new Date()
          .toISOString()
          .slice(0, 10)}</span><span class="comment-descritpion">${
          commenterName.value
        }: ${commentText.value}</span></div>`;

        comment.countComments();
      });
  });
};

const displayCards = (meal, likesObj) => {
  const html = `<div class="card"  data-id = "${meal.idMeal}">
    <div class="img-container">
        <img src="${meal.strMealThumb}" alt="">
    </div>
    <div class="content">
      <div class="name">${meal.strMeal}</div>
      <i class="fa-regular fa-heart like-btn"></i>
    </div>
    <span class="like-container"><span class="likes">${likesObj.likes}</span> likes</span>
    <button class="comment-btn" id="${meal.idMeal}">Recipe</button>
    <div class="comment-pop-up">
    </div>
  </div>`;
  const cardContainer = document.querySelector('.cards-container');
  cardContainer.innerHTML += html;

  const commentbtn = document.querySelectorAll('.comment-btn');
  commentbtn.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const targetID = btn.getAttribute('id');
      displayPopup(targetID).then(() => comment.countComments());
    });
  });
};

const loadDataFromAPI = async () => {
  const meals = await meal.getMeals();
  const likes = await like.getLikes();
  meals.forEach((meal, index) => {
    displayCards(meal, likes[index]);
  });
};


/***/ }),

/***/ "./src/js/likes.js":
/*!*************************!*\
  !*** ./src/js/likes.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Like)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./src/js/config.js");
/** @format */



class Like {
  createLike = async (mealID) => {
    await fetch(`${_config_js__WEBPACK_IMPORTED_MODULE_0__.INVOLVEMENT_URL}/likes/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item_id: mealID }),
    });
  };

  getLikes = async () => {
    const responseGet = await fetch(`${_config_js__WEBPACK_IMPORTED_MODULE_0__.INVOLVEMENT_URL}/likes/`);
    const likes = await responseGet.json();
    return likes;
  };

  updateLikes = async (index) => {
    const likesAmount = document.querySelectorAll('.likes')[index];
    const heartIcon = document.querySelectorAll('.fa-heart')[index];
    heartIcon.classList = 'fa-solid fa-heart like-btn pressed';
    setTimeout(() => {
      heartIcon.classList = 'fa-regular fa-heart like-btn';
    }, 120);
    likesAmount.textContent = parseInt(likesAmount.textContent, 10) + 1;
    let likesObj = (await this.getLikes())[index];
    await this.createLike(likesObj.item_id);
    likesObj = (await this.getLikes())[index];
  };
}


/***/ }),

/***/ "./src/js/meals.js":
/*!*************************!*\
  !*** ./src/js/meals.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Meal)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./src/js/config.js");
/** @format */



class Meal {
  getMeals = async () => {
    const response = await fetch(`${_config_js__WEBPACK_IMPORTED_MODULE_0__.BASEAPI_URL}/filter.php?a=Canadian`);
    const { meals } = await response.json();
    return meals;
  };

  countMeals = () => {
    const amount = document.querySelector('.item-amount');
    const items = document.querySelectorAll('.card');
    amount.textContent = `(${items.length})`;
  };

  getMealDetails = async (mealID) => {
    const response = await fetch(`${_config_js__WEBPACK_IMPORTED_MODULE_0__.BASEAPI_URL}/lookup.php?i=${mealID}`);
    const mealDetail = (await response.json()).meals[0];
    return mealDetail;
  };
}


/***/ }),

/***/ "./images/body-bg.svg":
/*!****************************!*\
  !*** ./images/body-bg.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ae39c2ae11291e473633.svg";

/***/ }),

/***/ "./images/logo.svg":
/*!*************************!*\
  !*** ./images/logo.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3f7116b3ea338f7b130c.svg";

/***/ }),

/***/ "./images/popUp-bg.svg":
/*!*****************************!*\
  !*** ./images/popUp-bg.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5093d473542866b4dee7.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVks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QyxtREFBVyxDQUFDO0FBQ2hELFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsYUFBYTtBQUMxQztBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsbURBQVcsQ0FBQyxnQkFBZ0IsT0FBTztBQUN2RTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcHN0b25lLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NhcHN0b25lLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2NhcHN0b25lLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2NhcHN0b25lLy4vc3JjL2pzL2NvbW1lbnRzLmpzIiwid2VicGFjazovL2NhcHN0b25lLy4vc3JjL2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS8uL3NyYy9qcy9kaXNwbGF5LmpzIiwid2VicGFjazovL2NhcHN0b25lLy4vc3JjL2pzL2xpa2VzLmpzIiwid2VicGFjazovL2NhcHN0b25lLy4vc3JjL2pzL21lYWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvYm9keS1iZy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvbG9nby5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvcG9wVXAtYmcuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiogQGZvcm1hdCAqL1xcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgZm9udC1zaXplOiBjYWxjKDE1cHggKyAwLjM5MDYyNXZ3KTtcXHJcXG5cXHJcXG4gIC8qIGZvbnQtZmFtaWx5OiAnQ29va2llJywgY3Vyc2l2ZTsgKi9cXHJcXG4gIGZvbnQtZmFtaWx5OiAnRG9zaXMnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIuaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBoc2woMzUsIDEwMCUsIDk4JSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlY2QxO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTVweDtcXHJcXG4gIHBhZGRpbmc6IDE2cHggMTVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlua3Mge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIHBhZGRpbmc6IDAgMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhhbWJ1cmdlciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBjZW50ZXIgbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rcyBsaSB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlua3MgbGkgYSB7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rcyBsaTpudGgtb2YtdHlwZSgxKSBhIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkcy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMxMHB4LCAxZnIpKTtcXHJcXG4gIGNvbHVtbi1nYXA6IDIwcHg7XFxyXFxuICByb3ctZ2FwOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZHMtY29udGFpbmVyID4gKiB7XFxyXFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDAgM3B4IDhweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbWctY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLWNvbnRhaW5lciBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIC5jb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIC5uYW1lIHtcXHJcXG4gIGNvbG9yOiBoc2woMzUsIDEwMCUsIDQ3JSk7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIC5saWtlLWJ0biB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgLnByZXNzZWQge1xcclxcbiAgY29sb3I6ICNmMDA7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIC5saWtlLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgZm9udC1zaXplOiAwLjdyZW07XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIGJ1dHRvbiB7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MSwgMTQ2LCAwLjUpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1MSwgMTQ2LCAwLjEpO1xcclxcbiAgYm94LXNoYWRvdzogcmdiKDI1MSwgMTQ2LCAwLjAyKSAwIDFweCAzcHggMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxyXFxuICBtaW4taGVpZ2h0OiAzcmVtO1xcclxcbiAgcGFkZGluZzogY2FsYygwLjU3NXJlbSAtIDFweCkgY2FsYygxLjFyZW0gLSAxcHgpO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1jb250YWluZXIgYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgcGFkZGluZzogOHB4IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIGJ1dHRvbjpob3ZlcixcXHJcXG4uY2FyZCBidXR0b246Zm9jdXMge1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjUxLCAxNDYsIDAuMTUpO1xcclxcbiAgYm94LXNoYWRvdzogcmdiKDI1MSwgMTQ2LCAwLjEpIDAgMnB4IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIGJ1dHRvbjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIGJ1dHRvbjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDM1LCA5OSUsIDQ3JSk7XFxyXFxuICBib3JkZXItY29sb3I6IHJnYigyNTEsIDE0NiwgMC4xNSk7XFxyXFxuICBib3gtc2hhZG93OiByZ2IoMjUxLCAxNDYsIDAuMDYpIDAgMnB4IDRweDtcXHJcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjUpO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1wb3AtdXAge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgaGVpZ2h0OiA5MCU7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcGFkZGluZzogMnJlbSAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWNkMTtcXHJcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwJSk7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1wb3AtdXAge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXBvcC11cCAuaXRlbS1pbWcge1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG8gMTBweCBhdXRvO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGhlaWdodDogMzAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXBvcC11cCBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1wb3AtdXAgLmFkZC1jb21tZW50LWJ0biB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1wb3AtdXAgLmNsb3NlLWJ0biB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDEwcHg7XFxyXFxuICByaWdodDogMTVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogaHNsKDM1LCAxMDAlLCAzNSUpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wLXVwLWhlYWRpbmcge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wLXVwLWRlc2NyaXB0aW9uIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXJnaW46IDEwcHggYXV0bztcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWhlYWRpbmcge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWNvbnRhaW5lciBpbnB1dCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBwYWRkaW5nOiA3cHggMTBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMzUsIDEwMCUsIDk1JSk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW47XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlY2QxO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDAgMDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2NnB4KSB7XFxyXFxuICAucG9wLXVwLWRlc2NyaXB0aW9uIHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50LWZvcm0ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50LXBvcC11cCAuY2xvc2UtYnRuIHtcXHJcXG4gICAgdG9wOiAyMHB4O1xcclxcbiAgICByaWdodDogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50LXBvcC11cCAuaXRlbS1pbWcge1xcclxcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxvZ28tY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDY0cHg7XFxyXFxuICAgIGhlaWdodDogMTZweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBjZW50ZXIgbm8tcmVwZWF0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxvZ28tY29udGFpbmVyLmFjdGl2ZSB7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgdHJhbnNpdGlvbjogMHM7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LWxpbmtzIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LWxpbmtzLmFjdGl2ZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNlZWJhYTg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LWl0ZW0ge1xcclxcbiAgICBwYWRkaW5nOiAwLjYyNXJlbSAwLjc1cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1saW5rcy5hY3RpdmUgLm5hdi1pdGVtIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDQ0cHg7XFxyXFxuICAgIGNvbG9yOiAjZmZmNWUxO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzZmNmM2YjtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAwIDEuNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oYW1idXJnZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDRweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHJpZ2h0OiAzcmVtO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYmFyIHtcXHJcXG4gICAgd2lkdGg6IDFyZW07XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhY2I3YzM7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNnMgZWFzZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oYW1idXJnZXIuYWN0aXZlIC5iYXI6bnRoLW9mLXR5cGUoMSkge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNi4zcHgpIHJvdGF0ZSg0NWRlZyk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGFtYnVyZ2VyLmFjdGl2ZSAuYmFyOm50aC1vZi10eXBlKDIpIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oYW1idXJnZXIuYWN0aXZlIC5iYXI6bnRoLW9mLXR5cGUoMykge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTYuM3B4KSByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsYUFBYTs7QUFFYjtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0NBQWtDOztFQUVsQyxvQ0FBb0M7RUFDcEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UseURBQTRDO0FBQzlDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixvQ0FBb0M7RUFDcEMseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixvRUFBb0Q7QUFDdEQ7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNERBQTREO0VBQzVELGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IseUNB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ZCxzQkFBc0I7SUFDdEIsTUFBTTtJQUNOLFVBQVU7SUFDVixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGFBQWE7SUFDYixPQUFPO0lBQ1AsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osV0FBVztJQUNYLDJCQUEyQjtJQUMzQixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLDBDQUEwQztFQUM1Qzs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLDRDQUE0QztFQUM5QztBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKiBAZm9ybWF0ICovXFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBmb250LXNpemU6IGNhbGMoMTVweCArIDAuMzkwNjI1dncpO1xcclxcblxcclxcbiAgLyogZm9udC1mYW1pbHk6ICdDb29raWUnLCBjdXJzaXZlOyAqL1xcclxcbiAgZm9udC1mYW1pbHk6ICdEb3NpcycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy9ib2R5LWJnLnN2Zyk7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIuaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBoc2woMzUsIDEwMCUsIDk4JSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlY2QxO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTVweDtcXHJcXG4gIHBhZGRpbmc6IDE2cHggMTVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlua3Mge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIHBhZGRpbmc6IDAgMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhhbWJ1cmdlciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKC4uL2ltYWdlcy9sb2dvLnN2ZykgY2VudGVyIG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlua3MgbGkge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmtzIGxpIGEge1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlua3MgbGk6bnRoLW9mLXR5cGUoMSkgYSB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZHMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMTBweCwgMWZyKSk7XFxyXFxuICBjb2x1bW4tZ2FwOiAyMHB4O1xcclxcbiAgcm93LWdhcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRzLWNvbnRhaW5lciA+ICoge1xcclxcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwIDNweCA4cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmltZy1jb250YWluZXIgaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCAuY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCAubmFtZSB7XFxyXFxuICBjb2xvcjogaHNsKDM1LCAxMDAlLCA0NyUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCAubGlrZS1idG4ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIC5wcmVzc2VkIHtcXHJcXG4gIGNvbG9yOiAjZjAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCAubGlrZS1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCBidXR0b24ge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTEsIDE0NiwgMC41KTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTEsIDE0NiwgMC4xKTtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYigyNTEsIDE0NiwgMC4wMikgMCAxcHggM3B4IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcclxcbiAgbWluLWhlaWdodDogM3JlbTtcXHJcXG4gIHBhZGRpbmc6IGNhbGMoMC41NzVyZW0gLSAxcHgpIGNhbGMoMS4xcmVtIC0gMXB4KTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcztcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtY29udGFpbmVyIGJ1dHRvbiB7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDhweCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCBidXR0b246aG92ZXIsXFxyXFxuLmNhcmQgYnV0dG9uOmZvY3VzIHtcXHJcXG4gIGJvcmRlci1jb2xvcjogcmdiKDI1MSwgMTQ2LCAwLjE1KTtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYigyNTEsIDE0NiwgMC4xKSAwIDJweCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCBidXR0b246aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCBidXR0b246YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgzNSwgOTklLCA0NyUpO1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjUxLCAxNDYsIDAuMTUpO1xcclxcbiAgYm94LXNoYWRvdzogcmdiKDI1MSwgMTQ2LCAwLjA2KSAwIDJweCA0cHg7XFxyXFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY1KTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtcG9wLXVwIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogOTAlO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDJyZW0gMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmVjZDE7XFxyXFxuICBjb2xvcjogaHNsKDAsIDAlLCAxMCUpO1xcclxcbiAgei1pbmRleDogMTAwO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy9wb3BVcC1iZy5zdmcpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1wb3AtdXAge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXBvcC11cCAuaXRlbS1pbWcge1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG8gMTBweCBhdXRvO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGhlaWdodDogMzAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXBvcC11cCBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1wb3AtdXAgLmFkZC1jb21tZW50LWJ0biB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1wb3AtdXAgLmNsb3NlLWJ0biB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDEwcHg7XFxyXFxuICByaWdodDogMTVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogaHNsKDM1LCAxMDAlLCAzNSUpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wLXVwLWhlYWRpbmcge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wLXVwLWRlc2NyaXB0aW9uIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXJnaW46IDEwcHggYXV0bztcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWhlYWRpbmcge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWNvbnRhaW5lciBpbnB1dCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBwYWRkaW5nOiA3cHggMTBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMzUsIDEwMCUsIDk1JSk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW47XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlY2QxO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDAgMDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2NnB4KSB7XFxyXFxuICAucG9wLXVwLWRlc2NyaXB0aW9uIHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50LWZvcm0ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50LXBvcC11cCAuY2xvc2UtYnRuIHtcXHJcXG4gICAgdG9wOiAyMHB4O1xcclxcbiAgICByaWdodDogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50LXBvcC11cCAuaXRlbS1pbWcge1xcclxcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxvZ28tY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDY0cHg7XFxyXFxuICAgIGhlaWdodDogMTZweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKC4uL2ltYWdlcy9sb2dvLnN2ZykgY2VudGVyIG5vLXJlcGVhdDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sb2dvLWNvbnRhaW5lci5hY3RpdmUge1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIHRyYW5zaXRpb246IDBzO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1saW5rcyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1saW5rcy5hY3RpdmUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZWViYWE4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1pdGVtIHtcXHJcXG4gICAgcGFkZGluZzogMC42MjVyZW0gMC43NXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYtbGlua3MuYWN0aXZlIC5uYXYtaXRlbSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xcclxcbiAgICBjb2xvcjogI2ZmZjVlMTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2ZjZjNmI7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIG1hcmdpbjogMCAxLjVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGFtYnVyZ2VyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiA0cHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICByaWdodDogM3JlbTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJhciB7XFxyXFxuICAgIHdpZHRoOiAxcmVtO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYWNiN2MzO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjZzIGVhc2U7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGFtYnVyZ2VyLmFjdGl2ZSAuYmFyOm50aC1vZi10eXBlKDEpIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDYuM3B4KSByb3RhdGUoNDVkZWcpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhhbWJ1cmdlci5hY3RpdmUgLmJhcjpudGgtb2YtdHlwZSgyKSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGFtYnVyZ2VyLmFjdGl2ZSAuYmFyOm50aC1vZi10eXBlKDMpIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02LjNweCkgcm90YXRlKC00NWRlZyk7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XHJcbmltcG9ydCB7IGxvYWREYXRhRnJvbUFQSSB9IGZyb20gJy4vanMvZGlzcGxheS5qcyc7XHJcbmltcG9ydCBMaWtlIGZyb20gJy4vanMvbGlrZXMuanMnO1xyXG5pbXBvcnQgTWVhbCBmcm9tICcuL2pzL21lYWxzLmpzJztcclxuXHJcbmNvbnN0IGxpa2UgPSBuZXcgTGlrZSgpO1xyXG5jb25zdCBtZWFsID0gbmV3IE1lYWwoKTtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBhc3luYyAoKSA9PiB7XHJcbiAgYXdhaXQgbG9hZERhdGFGcm9tQVBJKCk7XHJcbiAgbWVhbC5jb3VudE1lYWxzKCk7XHJcbn07XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgaWYgKCFlLnRhcmdldC5tYXRjaGVzKCcubGlrZS1idG4nKSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZiAoZS50YXJnZXQubWF0Y2hlcygnLmxpa2UtYnRuJykpIHtcclxuICAgIGNvbnN0IGxpa2VCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpa2UtYnRuJyk7XHJcbiAgICBsaWtlQnRucy5mb3JFYWNoKChidG4sIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gYnRuKSB7XHJcbiAgICAgICAgbGlrZS51cGRhdGVMaWtlcyhpbmRleCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcblxyXG5jb25zdCBodW1iZXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyJyk7XHJcbmh1bWJlcmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyJyk7XHJcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1saW5rcycpO1xyXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nby1jb250YWluZXInKTtcclxuICBoYW1idXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgbmF2LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gIGxvZ28uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbn0pO1xyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgSU5WT0xWRU1FTlRfVVJMIH0gZnJvbSAnLi9jb25maWcuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbWVudCB7XHJcbiAgZ2V0Q29tbWVudHMgPSBhc3luYyAobWVhbElEKSA9PiB7XHJcbiAgICBjb25zdCBjb21tZW50c1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGAke0lOVk9MVkVNRU5UX1VSTH0vY29tbWVudHM/aXRlbV9pZD0ke21lYWxJRH1gLFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGNvbW1lbnQgPSBhd2FpdCBjb21tZW50c1Jlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiBjb21tZW50O1xyXG4gIH07XHJcblxyXG4gIGFkZENvbW1lbnQgPSBhc3luYyAobmFtZSwgY29tbWVudCwgaWQpID0+IHtcclxuICAgIGNvbnN0IHBvc3RDb21tZW50VXJsID0gYCR7SU5WT0xWRU1FTlRfVVJMfS9jb21tZW50c2A7XHJcbiAgICBhd2FpdCBmZXRjaChwb3N0Q29tbWVudFVybCwge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBpdGVtX2lkOiBpZCxcclxuICAgICAgICB1c2VybmFtZTogbmFtZSxcclxuICAgICAgICBjb21tZW50LFxyXG4gICAgICB9KSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvdW50Q29tbWVudHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBhbW91bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHMtYW1vdW50Jyk7XHJcbiAgICBjb25zdCBjb21tZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50cycpO1xyXG4gICAgYW1vdW50LnRleHRDb250ZW50ID0gYCgke2NvbW1lbnRzLmxlbmd0aCA/PyAwfSlgO1xyXG4gIH07XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmV4cG9ydCBjb25zdCBCQVNFQVBJX1VSTCA9ICdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEnO1xyXG5leHBvcnQgY29uc3QgSU5WT0xWRU1FTlRfVVJMID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL3NBeFF0TlA1bnpPVjlsM1A2RE8zJztcclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCBDb21tZW50IGZyb20gJy4vY29tbWVudHMuanMnO1xyXG5pbXBvcnQgTGlrZSBmcm9tICcuL2xpa2VzLmpzJztcclxuaW1wb3J0IE1lYWwgZnJvbSAnLi9tZWFscy5qcyc7XHJcblxyXG5jb25zdCBjb21tZW50ID0gbmV3IENvbW1lbnQoKTtcclxuY29uc3QgbGlrZSA9IG5ldyBMaWtlKCk7XHJcbmNvbnN0IG1lYWwgPSBuZXcgTWVhbCgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRpc3BsYXlQb3B1cCA9IGFzeW5jIChtZWFsSUQpID0+IHtcclxuICBjb25zdCBtZWFsRGV0YWlsID0gYXdhaXQgbWVhbC5nZXRNZWFsRGV0YWlscyhtZWFsSUQpO1xyXG4gIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgY29tbWVudC5nZXRDb21tZW50cyhtZWFsSUQpO1xyXG4gIGxldCBodG1sID0gYDxpIGNsYXNzPVwiZmEtc29saWQgZmEteCBjbG9zZS1idG5cIj48L2k+XHJcbiAgPGRpdiBjbGFzcz1cIml0ZW0taW1nXCI+XHJcbiAgICA8aW1nIHNyYz1cIiR7bWVhbERldGFpbC5zdHJNZWFsVGh1bWJ9XCIgYWx0PVwiXCI+XHJcbiAgPC9kaXY+XHJcbiAgPGgyIGNsYXNzPVwicG9wLXVwLWhlYWRpbmdcIj4ke21lYWxEZXRhaWwuc3RyTWVhbH08L2gyPlxyXG4gIDxkaXYgY2xhc3M9XCJwb3AtdXAtZGVzY3JpcHRpb25cIj5cclxuICAke21lYWxEZXRhaWwuc3RySW5zdHJ1Y3Rpb25zfVxyXG4gIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbW1lbnQtY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29tbWVudC1oZWFkaW5nXCI+XHJcbiAgICAgIENvbW1lbnRzIDxzcGFuIGNsYXNzPVwiY29tbWVudHMtYW1vdW50XCI+PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29tbWVudC1saXN0XCI+XHJcbiAgICBgO1xyXG4gIGlmIChjb21tZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICBjb21tZW50cy5mb3JFYWNoKChjb21tZW50KSA9PiB7XHJcbiAgICAgIGh0bWwgKz0gYDxkaXYgY2xhc3M9XCJjb21tZW50c1wiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImNvbW1lbnQtZGF0ZVwiPiR7Y29tbWVudC5jcmVhdGlvbl9kYXRlfTwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJjb21tZW50LWRlc2NyaXRwaW9uXCI+JHtjb21tZW50LnVzZXJuYW1lfTogJHtjb21tZW50LmNvbW1lbnR9PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGh0bWwgKz0gYDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJjb21tZW50LWZvcm1cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnQtaGVhZGluZ1wiPlxyXG4gICAgICAgIEFkZCBhIGNvbW1lbnRcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxpbnB1dCBjbGFzcz1cImNvbW1lbnRlci1uYW1lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiPlxyXG4gICAgICA8dGV4dGFyZWEgY2xhc3M9XCJjb21tZW50XCIgbmFtZT1cImNvbW1lbnRcIiBpZD1cIlwiIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiIHBsYWNlaG9sZGVyPVwiWW91ciBpbnNpZ2h0c1wiPjwvdGV4dGFyZWE+XHJcbiAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQtY29tbWVudC1idG5cIj5Db21tZW50PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5gO1xyXG5cclxuICBjb25zdCBwb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LXBvcC11cCcpO1xyXG4gIHBvcFVwLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgcG9wVXAuY2xhc3NMaXN0LmFkZCgnc2hvdy1wb3AtdXAnKTtcclxuXHJcbiAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnRuJyk7XHJcbiAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBwb3BVcC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93LXBvcC11cCcpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjb21tZW50ZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRlci1uYW1lJyk7XHJcbiAgY29uc3QgY29tbWVudFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudCcpO1xyXG4gIGNvbnN0IGNvbW1lbnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWNvbW1lbnQtYnRuJyk7XHJcbiAgY29uc3QgY29tbWVudGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1saXN0Jyk7XHJcbiAgY29tbWVudEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbW1lbnRcclxuICAgICAgLmFkZENvbW1lbnQoY29tbWVudGVyTmFtZS52YWx1ZSwgY29tbWVudFRleHQudmFsdWUsIG1lYWxJRClcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNvbW1lbnRsaXN0LmlubmVySFRNTCArPSBgPGRpdiBjbGFzcz1cImNvbW1lbnRzXCI+PHNwYW4gY2xhc3M9XCJjb21tZW50LWRhdGVcIj4ke25ldyBEYXRlKClcclxuICAgICAgICAgIC50b0lTT1N0cmluZygpXHJcbiAgICAgICAgICAuc2xpY2UoMCwgMTApfTwvc3Bhbj48c3BhbiBjbGFzcz1cImNvbW1lbnQtZGVzY3JpdHBpb25cIj4ke1xyXG4gICAgICAgICAgY29tbWVudGVyTmFtZS52YWx1ZVxyXG4gICAgICAgIH06ICR7Y29tbWVudFRleHQudmFsdWV9PC9zcGFuPjwvZGl2PmA7XHJcblxyXG4gICAgICAgIGNvbW1lbnQuY291bnRDb21tZW50cygpO1xyXG4gICAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkaXNwbGF5Q2FyZHMgPSAobWVhbCwgbGlrZXNPYmopID0+IHtcclxuICBjb25zdCBodG1sID0gYDxkaXYgY2xhc3M9XCJjYXJkXCIgIGRhdGEtaWQgPSBcIiR7bWVhbC5pZE1lYWx9XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaW1nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiJHttZWFsLnN0ck1lYWxUaHVtYn1cIiBhbHQ9XCJcIj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj4ke21lYWwuc3RyTWVhbH08L2Rpdj5cclxuICAgICAgPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLWhlYXJ0IGxpa2UtYnRuXCI+PC9pPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3BhbiBjbGFzcz1cImxpa2UtY29udGFpbmVyXCI+PHNwYW4gY2xhc3M9XCJsaWtlc1wiPiR7bGlrZXNPYmoubGlrZXN9PC9zcGFuPiBsaWtlczwvc3Bhbj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJjb21tZW50LWJ0blwiIGlkPVwiJHttZWFsLmlkTWVhbH1cIj5SZWNpcGU8L2J1dHRvbj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LXBvcC11cFwiPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+YDtcclxuICBjb25zdCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzLWNvbnRhaW5lcicpO1xyXG4gIGNhcmRDb250YWluZXIuaW5uZXJIVE1MICs9IGh0bWw7XHJcblxyXG4gIGNvbnN0IGNvbW1lbnRidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudC1idG4nKTtcclxuICBjb21tZW50YnRuLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCB0YXJnZXRJRCA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2lkJyk7XHJcbiAgICAgIGRpc3BsYXlQb3B1cCh0YXJnZXRJRCkudGhlbigoKSA9PiBjb21tZW50LmNvdW50Q29tbWVudHMoKSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkRGF0YUZyb21BUEkgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgbWVhbHMgPSBhd2FpdCBtZWFsLmdldE1lYWxzKCk7XHJcbiAgY29uc3QgbGlrZXMgPSBhd2FpdCBsaWtlLmdldExpa2VzKCk7XHJcbiAgbWVhbHMuZm9yRWFjaCgobWVhbCwgaW5kZXgpID0+IHtcclxuICAgIGRpc3BsYXlDYXJkcyhtZWFsLCBsaWtlc1tpbmRleF0pO1xyXG4gIH0pO1xyXG59O1xyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgSU5WT0xWRU1FTlRfVVJMIH0gZnJvbSAnLi9jb25maWcuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlrZSB7XHJcbiAgY3JlYXRlTGlrZSA9IGFzeW5jIChtZWFsSUQpID0+IHtcclxuICAgIGF3YWl0IGZldGNoKGAke0lOVk9MVkVNRU5UX1VSTH0vbGlrZXMvYCwge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaXRlbV9pZDogbWVhbElEIH0pLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgZ2V0TGlrZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZUdldCA9IGF3YWl0IGZldGNoKGAke0lOVk9MVkVNRU5UX1VSTH0vbGlrZXMvYCk7XHJcbiAgICBjb25zdCBsaWtlcyA9IGF3YWl0IHJlc3BvbnNlR2V0Lmpzb24oKTtcclxuICAgIHJldHVybiBsaWtlcztcclxuICB9O1xyXG5cclxuICB1cGRhdGVMaWtlcyA9IGFzeW5jIChpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgbGlrZXNBbW91bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZXMnKVtpbmRleF07XHJcbiAgICBjb25zdCBoZWFydEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmEtaGVhcnQnKVtpbmRleF07XHJcbiAgICBoZWFydEljb24uY2xhc3NMaXN0ID0gJ2ZhLXNvbGlkIGZhLWhlYXJ0IGxpa2UtYnRuIHByZXNzZWQnO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGhlYXJ0SWNvbi5jbGFzc0xpc3QgPSAnZmEtcmVndWxhciBmYS1oZWFydCBsaWtlLWJ0bic7XHJcbiAgICB9LCAxMjApO1xyXG4gICAgbGlrZXNBbW91bnQudGV4dENvbnRlbnQgPSBwYXJzZUludChsaWtlc0Ftb3VudC50ZXh0Q29udGVudCwgMTApICsgMTtcclxuICAgIGxldCBsaWtlc09iaiA9IChhd2FpdCB0aGlzLmdldExpa2VzKCkpW2luZGV4XTtcclxuICAgIGF3YWl0IHRoaXMuY3JlYXRlTGlrZShsaWtlc09iai5pdGVtX2lkKTtcclxuICAgIGxpa2VzT2JqID0gKGF3YWl0IHRoaXMuZ2V0TGlrZXMoKSlbaW5kZXhdO1xyXG4gIH07XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IEJBU0VBUElfVVJMIH0gZnJvbSAnLi9jb25maWcuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVhbCB7XHJcbiAgZ2V0TWVhbHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0JBU0VBUElfVVJMfS9maWx0ZXIucGhwP2E9Q2FuYWRpYW5gKTtcclxuICAgIGNvbnN0IHsgbWVhbHMgfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiBtZWFscztcclxuICB9O1xyXG5cclxuICBjb3VudE1lYWxzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYW1vdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW0tYW1vdW50Jyk7XHJcbiAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJyk7XHJcbiAgICBhbW91bnQudGV4dENvbnRlbnQgPSBgKCR7aXRlbXMubGVuZ3RofSlgO1xyXG4gIH07XHJcblxyXG4gIGdldE1lYWxEZXRhaWxzID0gYXN5bmMgKG1lYWxJRCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtCQVNFQVBJX1VSTH0vbG9va3VwLnBocD9pPSR7bWVhbElEfWApO1xyXG4gICAgY29uc3QgbWVhbERldGFpbCA9IChhd2FpdCByZXNwb25zZS5qc29uKCkpLm1lYWxzWzBdO1xyXG4gICAgcmV0dXJuIG1lYWxEZXRhaWw7XHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=