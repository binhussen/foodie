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
___CSS_LOADER_EXPORT___.push([module.id, "/** @format */\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  font-size: calc(15px + 0.390625vw);\r\n\r\n  /* font-family: 'Cookie', cursive; */\r\n  font-family: 'Dosis', sans-serif;\r\n}\r\n\r\nbody {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nheader.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border: 1px solid hsl(35, 100%, 98%);\r\n  background-color: #ffecd1;\r\n  border-radius: 0 0 10px 15px;\r\n  padding: 16px 15px;\r\n  margin-bottom: 24px;\r\n}\r\n\r\n.nav-links {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  padding: 0 15px;\r\n}\r\n\r\n.hamburger {\r\n  display: none;\r\n}\r\n\r\n.logo-container {\r\n  width: 150px;\r\n  height: auto;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") center no-repeat;\r\n}\r\n\r\n.container {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.nav-links li {\r\n  margin-right: 20px;\r\n}\r\n\r\n.nav-links li a {\r\n  color: #000;\r\n}\r\n\r\n.nav-links li:nth-of-type(1) a {\r\n  font-weight: bold;\r\n  text-decoration: underline;\r\n}\r\n\r\n.cards-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));\r\n  column-gap: 20px;\r\n  row-gap: 30px;\r\n}\r\n\r\n.cards-container > * {\r\n  /* border: 1px solid red; */\r\n  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;\r\n  border-radius: 20px;\r\n}\r\n\r\n.img-container {\r\n  width: 100%;\r\n}\r\n\r\n.img-container img {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 20px 20px 0 0;\r\n}\r\n\r\n.card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #fff;\r\n}\r\n\r\n.card .content {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 10px 15px;\r\n}\r\n\r\n.card .name {\r\n  color: hsl(35, 100%, 47%);\r\n}\r\n\r\n.card .like-btn {\r\n  cursor: pointer;\r\n  color: #000;\r\n}\r\n\r\n.card .pressed {\r\n  color: #f00;\r\n}\r\n\r\n.card .like-container {\r\n  width: auto;\r\n  align-self: flex-end;\r\n  font-size: 0.7rem;\r\n  margin-right: 15px;\r\n}\r\n\r\n.card button {\r\n  align-items: center;\r\n  background-color: rgb(251, 146, 0.5);\r\n  border: 1px solid rgb(251, 146, 0.1);\r\n  box-shadow: rgb(251, 146, 0.02) 0 1px 3px 0;\r\n  box-sizing: border-box;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  display: inline-flex;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  justify-content: center;\r\n  line-height: 1.25;\r\n  min-height: 3rem;\r\n  padding: calc(0.575rem - 1px) calc(1.1rem - 1px);\r\n  position: relative;\r\n  text-decoration: none;\r\n  transition: all 250ms;\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  touch-action: manipulation;\r\n  vertical-align: baseline;\r\n  width: 40%;\r\n  margin: 20px auto;\r\n  border-radius: 50px;\r\n}\r\n\r\n.comment-container button {\r\n  width: auto;\r\n  padding: 8px 10px;\r\n}\r\n\r\n.card button:hover,\r\n.card button:focus {\r\n  border-color: rgb(251, 146, 0.15);\r\n  box-shadow: rgb(251, 146, 0.1) 0 2px 10px;\r\n}\r\n\r\n.card button:hover {\r\n  transform: translateY(-1px);\r\n}\r\n\r\n.card button:active {\r\n  background-color: hsl(35, 99%, 47%);\r\n  border-color: rgb(251, 146, 0.15);\r\n  box-shadow: rgb(251, 146, 0.06) 0 2px 4px;\r\n  color: rgba(255, 255, 255, 0.65);\r\n  transform: translateY(0);\r\n}\r\n\r\n.comment-pop-up {\r\n  border-radius: 10px;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 90%;\r\n  height: 90%;\r\n  overflow-y: scroll;\r\n  display: none;\r\n  padding: 2rem 0;\r\n  background-color: #ffecd1;\r\n  color: hsl(0, 0%, 10%);\r\n  z-index: 100;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n}\r\n\r\n.show-pop-up {\r\n  display: block;\r\n}\r\n\r\n.comment-pop-up .item-img {\r\n  width: 300px;\r\n  margin: 0 auto 10px auto;\r\n  border-radius: 10px;\r\n  height: 300px;\r\n}\r\n\r\n.comment-pop-up img {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 10px;\r\n}\r\n\r\n.comment-pop-up .add-comment-btn {\r\n  width: 50%;\r\n}\r\n\r\n.comment-pop-up .close-btn {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 15px;\r\n  font-size: 1.3rem;\r\n  font-weight: bold;\r\n  color: hsl(35, 100%, 35%);\r\n}\r\n\r\n.pop-up-heading {\r\n  text-align: center;\r\n}\r\n\r\n.pop-up-description {\r\n  width: 80%;\r\n  margin: 10px auto;\r\n  line-height: 1.6;\r\n}\r\n\r\n.comment-container {\r\n  width: 80%;\r\n  margin: 10px auto;\r\n}\r\n\r\n.comment-heading {\r\n  font-weight: bold;\r\n  margin: 10px 0;\r\n}\r\n\r\n.comment-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 50%;\r\n}\r\n\r\n.comment-container input,\r\ntextarea {\r\n  padding: 7px 10px;\r\n  margin-bottom: 10px;\r\n  background-color: hsl(35, 100%, 95%);\r\n  border: none;\r\n  transition: 0.2s ease-in;\r\n  outline: none;\r\n  border-radius: 10px 10px 0 10px;\r\n}\r\n\r\n.footer {\r\n  background-color: #ffecd1;\r\n  border-radius: 15px 15px 0 0;\r\n  padding: 10px 15px;\r\n  margin-top: 50px;\r\n  text-align: center;\r\n}\r\n\r\n@media screen and (max-width: 766px) {\r\n  header.header {\r\n    width: 100%;\r\n  }\r\n  .pop-up-description {\r\n    width: 90%;\r\n  }\r\n\r\n  .comment-form {\r\n    width: 100%;\r\n  }\r\n\r\n  .comment-pop-up .close-btn {\r\n    top: 20px;\r\n    right: 20px;\r\n  }\r\n\r\n  .comment-pop-up .item-img {\r\n    margin-top: 30px;\r\n  }\r\n\r\n  .logo-container {\r\n    width: 100px;\r\n    height: 25px;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") center no-repeat;\r\n  }\r\n\r\n  .logo-container.active {\r\n    visibility: hidden;\r\n    transition: 0s;\r\n  }\r\n\r\n  .nav-links {\r\n    display: none;\r\n    position: fixed;\r\n    justify-content: flex-start;\r\n    align-items: flex-start;\r\n    margin-left: 0;\r\n    flex-direction: column;\r\n    top: 0;\r\n    width: 90%;\r\n    height: 100%;\r\n    transition: 0.5s ease-in-out;\r\n    z-index: 1;\r\n  }\r\n\r\n  .nav-links.active {\r\n    display: flex;\r\n    align-items: center;\r\n    padding-top: 50px;\r\n    width: 100%;\r\n    left: 0;\r\n    background: #eebaa8;\r\n  }\r\n\r\n  .nav-item {\r\n    padding: 0.625rem 0.75rem;\r\n  }\r\n\r\n  .nav-links.active .nav-item {\r\n    font-weight: 700;\r\n    line-height: 44px;\r\n    color: #fff5e1;\r\n    padding: 1rem;\r\n    margin: 0 1.5rem;\r\n  }\r\n\r\n  .hamburger {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 4px;\r\n    position: absolute;\r\n    cursor: pointer;\r\n    background-color: transparent;\r\n    border: none;\r\n    right: 3rem;\r\n    transform: translateY(-50%);\r\n    z-index: 1;\r\n  }\r\n\r\n  .bar {\r\n    width: 1rem;\r\n    border: 1px solid #acb7c3;\r\n    transition: 0.6s ease;\r\n  }\r\n\r\n  .hamburger.active .bar:nth-of-type(1) {\r\n    transform: translateY(6.3px) rotate(45deg);\r\n  }\r\n\r\n  .hamburger.active .bar:nth-of-type(2) {\r\n    opacity: 0;\r\n  }\r\n\r\n  .hamburger.active .bar:nth-of-type(3) {\r\n    transform: translateY(-6.3px) rotate(-45deg);\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["/** @format */\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  font-size: calc(15px + 0.390625vw);\r\n\r\n  /* font-family: 'Cookie', cursive; */\r\n  font-family: 'Dosis', sans-serif;\r\n}\r\n\r\nbody {\r\n  background-image: url(../images/body-bg.svg);\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nheader.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border: 1px solid hsl(35, 100%, 98%);\r\n  background-color: #ffecd1;\r\n  border-radius: 0 0 10px 15px;\r\n  padding: 16px 15px;\r\n  margin-bottom: 24px;\r\n}\r\n\r\n.nav-links {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  padding: 0 15px;\r\n}\r\n\r\n.hamburger {\r\n  display: none;\r\n}\r\n\r\n.logo-container {\r\n  width: 150px;\r\n  height: auto;\r\n  background: url(../images/logo.svg) center no-repeat;\r\n}\r\n\r\n.container {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.nav-links li {\r\n  margin-right: 20px;\r\n}\r\n\r\n.nav-links li a {\r\n  color: #000;\r\n}\r\n\r\n.nav-links li:nth-of-type(1) a {\r\n  font-weight: bold;\r\n  text-decoration: underline;\r\n}\r\n\r\n.cards-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));\r\n  column-gap: 20px;\r\n  row-gap: 30px;\r\n}\r\n\r\n.cards-container > * {\r\n  /* border: 1px solid red; */\r\n  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;\r\n  border-radius: 20px;\r\n}\r\n\r\n.img-container {\r\n  width: 100%;\r\n}\r\n\r\n.img-container img {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 20px 20px 0 0;\r\n}\r\n\r\n.card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #fff;\r\n}\r\n\r\n.card .content {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 10px 15px;\r\n}\r\n\r\n.card .name {\r\n  color: hsl(35, 100%, 47%);\r\n}\r\n\r\n.card .like-btn {\r\n  cursor: pointer;\r\n  color: #000;\r\n}\r\n\r\n.card .pressed {\r\n  color: #f00;\r\n}\r\n\r\n.card .like-container {\r\n  width: auto;\r\n  align-self: flex-end;\r\n  font-size: 0.7rem;\r\n  margin-right: 15px;\r\n}\r\n\r\n.card button {\r\n  align-items: center;\r\n  background-color: rgb(251, 146, 0.5);\r\n  border: 1px solid rgb(251, 146, 0.1);\r\n  box-shadow: rgb(251, 146, 0.02) 0 1px 3px 0;\r\n  box-sizing: border-box;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  display: inline-flex;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  justify-content: center;\r\n  line-height: 1.25;\r\n  min-height: 3rem;\r\n  padding: calc(0.575rem - 1px) calc(1.1rem - 1px);\r\n  position: relative;\r\n  text-decoration: none;\r\n  transition: all 250ms;\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  touch-action: manipulation;\r\n  vertical-align: baseline;\r\n  width: 40%;\r\n  margin: 20px auto;\r\n  border-radius: 50px;\r\n}\r\n\r\n.comment-container button {\r\n  width: auto;\r\n  padding: 8px 10px;\r\n}\r\n\r\n.card button:hover,\r\n.card button:focus {\r\n  border-color: rgb(251, 146, 0.15);\r\n  box-shadow: rgb(251, 146, 0.1) 0 2px 10px;\r\n}\r\n\r\n.card button:hover {\r\n  transform: translateY(-1px);\r\n}\r\n\r\n.card button:active {\r\n  background-color: hsl(35, 99%, 47%);\r\n  border-color: rgb(251, 146, 0.15);\r\n  box-shadow: rgb(251, 146, 0.06) 0 2px 4px;\r\n  color: rgba(255, 255, 255, 0.65);\r\n  transform: translateY(0);\r\n}\r\n\r\n.comment-pop-up {\r\n  border-radius: 10px;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 90%;\r\n  height: 90%;\r\n  overflow-y: scroll;\r\n  display: none;\r\n  padding: 2rem 0;\r\n  background-color: #ffecd1;\r\n  color: hsl(0, 0%, 10%);\r\n  z-index: 100;\r\n  background-image: url(../images/popUp-bg.svg);\r\n}\r\n\r\n.show-pop-up {\r\n  display: block;\r\n}\r\n\r\n.comment-pop-up .item-img {\r\n  width: 300px;\r\n  margin: 0 auto 10px auto;\r\n  border-radius: 10px;\r\n  height: 300px;\r\n}\r\n\r\n.comment-pop-up img {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 10px;\r\n}\r\n\r\n.comment-pop-up .add-comment-btn {\r\n  width: 50%;\r\n}\r\n\r\n.comment-pop-up .close-btn {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 15px;\r\n  font-size: 1.3rem;\r\n  font-weight: bold;\r\n  color: hsl(35, 100%, 35%);\r\n}\r\n\r\n.pop-up-heading {\r\n  text-align: center;\r\n}\r\n\r\n.pop-up-description {\r\n  width: 80%;\r\n  margin: 10px auto;\r\n  line-height: 1.6;\r\n}\r\n\r\n.comment-container {\r\n  width: 80%;\r\n  margin: 10px auto;\r\n}\r\n\r\n.comment-heading {\r\n  font-weight: bold;\r\n  margin: 10px 0;\r\n}\r\n\r\n.comment-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 50%;\r\n}\r\n\r\n.comment-container input,\r\ntextarea {\r\n  padding: 7px 10px;\r\n  margin-bottom: 10px;\r\n  background-color: hsl(35, 100%, 95%);\r\n  border: none;\r\n  transition: 0.2s ease-in;\r\n  outline: none;\r\n  border-radius: 10px 10px 0 10px;\r\n}\r\n\r\n.footer {\r\n  background-color: #ffecd1;\r\n  border-radius: 15px 15px 0 0;\r\n  padding: 10px 15px;\r\n  margin-top: 50px;\r\n  text-align: center;\r\n}\r\n\r\n@media screen and (max-width: 766px) {\r\n  header.header {\r\n    width: 100%;\r\n  }\r\n  .pop-up-description {\r\n    width: 90%;\r\n  }\r\n\r\n  .comment-form {\r\n    width: 100%;\r\n  }\r\n\r\n  .comment-pop-up .close-btn {\r\n    top: 20px;\r\n    right: 20px;\r\n  }\r\n\r\n  .comment-pop-up .item-img {\r\n    margin-top: 30px;\r\n  }\r\n\r\n  .logo-container {\r\n    width: 100px;\r\n    height: 25px;\r\n    background: url(../images/logo.svg) center no-repeat;\r\n  }\r\n\r\n  .logo-container.active {\r\n    visibility: hidden;\r\n    transition: 0s;\r\n  }\r\n\r\n  .nav-links {\r\n    display: none;\r\n    position: fixed;\r\n    justify-content: flex-start;\r\n    align-items: flex-start;\r\n    margin-left: 0;\r\n    flex-direction: column;\r\n    top: 0;\r\n    width: 90%;\r\n    height: 100%;\r\n    transition: 0.5s ease-in-out;\r\n    z-index: 1;\r\n  }\r\n\r\n  .nav-links.active {\r\n    display: flex;\r\n    align-items: center;\r\n    padding-top: 50px;\r\n    width: 100%;\r\n    left: 0;\r\n    background: #eebaa8;\r\n  }\r\n\r\n  .nav-item {\r\n    padding: 0.625rem 0.75rem;\r\n  }\r\n\r\n  .nav-links.active .nav-item {\r\n    font-weight: 700;\r\n    line-height: 44px;\r\n    color: #fff5e1;\r\n    padding: 1rem;\r\n    margin: 0 1.5rem;\r\n  }\r\n\r\n  .hamburger {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 4px;\r\n    position: absolute;\r\n    cursor: pointer;\r\n    background-color: transparent;\r\n    border: none;\r\n    right: 3rem;\r\n    transform: translateY(-50%);\r\n    z-index: 1;\r\n  }\r\n\r\n  .bar {\r\n    width: 1rem;\r\n    border: 1px solid #acb7c3;\r\n    transition: 0.6s ease;\r\n  }\r\n\r\n  .hamburger.active .bar:nth-of-type(1) {\r\n    transform: translateY(6.3px) rotate(45deg);\r\n  }\r\n\r\n  .hamburger.active .bar:nth-of-type(2) {\r\n    opacity: 0;\r\n  }\r\n\r\n  .hamburger.active .bar:nth-of-type(3) {\r\n    transform: translateY(-6.3px) rotate(-45deg);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUss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QTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDMEM7QUFDMUM7QUFDZTtBQUNmO0FBQ0Esb0NBQW9DLG1EQUFXLENBQUM7QUFDaEQsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixhQUFhO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxtREFBVyxDQUFDLGdCQUFnQixPQUFPO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2Fwc3RvbmUvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUvLi9zcmMvanMvY29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUvLi9zcmMvanMvY29uZmlnLmpzIiwid2VicGFjazovL2NhcHN0b25lLy4vc3JjL2pzL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUvLi9zcmMvanMvbGlrZXMuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUvLi9zcmMvanMvbWVhbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9ib2R5LWJnLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9sb2dvLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9wb3BVcC1iZy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qKiBAZm9ybWF0ICovXFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBmb250LXNpemU6IGNhbGMoMTVweCArIDAuMzkwNjI1dncpO1xcclxcblxcclxcbiAgLyogZm9udC1mYW1pbHk6ICdDb29raWUnLCBjdXJzaXZlOyAqL1xcclxcbiAgZm9udC1mYW1pbHk6ICdEb3NpcycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlci5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBoc2woMzUsIDEwMCUsIDk4JSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlY2QxO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTVweDtcXHJcXG4gIHBhZGRpbmc6IDE2cHggMTVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlua3Mge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIHBhZGRpbmc6IDAgMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhhbWJ1cmdlciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBjZW50ZXIgbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rcyBsaSB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlua3MgbGkgYSB7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rcyBsaTpudGgtb2YtdHlwZSgxKSBhIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkcy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMxMHB4LCAxZnIpKTtcXHJcXG4gIGNvbHVtbi1nYXA6IDIwcHg7XFxyXFxuICByb3ctZ2FwOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZHMtY29udGFpbmVyID4gKiB7XFxyXFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDAgM3B4IDhweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbWctY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLWNvbnRhaW5lciBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIC5jb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIC5uYW1lIHtcXHJcXG4gIGNvbG9yOiBoc2woMzUsIDEwMCUsIDQ3JSk7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIC5saWtlLWJ0biB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgLnByZXNzZWQge1xcclxcbiAgY29sb3I6ICNmMDA7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIC5saWtlLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgZm9udC1zaXplOiAwLjdyZW07XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIGJ1dHRvbiB7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MSwgMTQ2LCAwLjUpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1MSwgMTQ2LCAwLjEpO1xcclxcbiAgYm94LXNoYWRvdzogcmdiKDI1MSwgMTQ2LCAwLjAyKSAwIDFweCAzcHggMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxyXFxuICBtaW4taGVpZ2h0OiAzcmVtO1xcclxcbiAgcGFkZGluZzogY2FsYygwLjU3NXJlbSAtIDFweCkgY2FsYygxLjFyZW0gLSAxcHgpO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1jb250YWluZXIgYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgcGFkZGluZzogOHB4IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIGJ1dHRvbjpob3ZlcixcXHJcXG4uY2FyZCBidXR0b246Zm9jdXMge1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjUxLCAxNDYsIDAuMTUpO1xcclxcbiAgYm94LXNoYWRvdzogcmdiKDI1MSwgMTQ2LCAwLjEpIDAgMnB4IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIGJ1dHRvbjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIGJ1dHRvbjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDM1LCA5OSUsIDQ3JSk7XFxyXFxuICBib3JkZXItY29sb3I6IHJnYigyNTEsIDE0NiwgMC4xNSk7XFxyXFxuICBib3gtc2hhZG93OiByZ2IoMjUxLCAxNDYsIDAuMDYpIDAgMnB4IDRweDtcXHJcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjUpO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1wb3AtdXAge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgaGVpZ2h0OiA5MCU7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcGFkZGluZzogMnJlbSAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWNkMTtcXHJcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwJSk7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1wb3AtdXAge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXBvcC11cCAuaXRlbS1pbWcge1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG8gMTBweCBhdXRvO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGhlaWdodDogMzAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXBvcC11cCBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1wb3AtdXAgLmFkZC1jb21tZW50LWJ0biB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1wb3AtdXAgLmNsb3NlLWJ0biB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDEwcHg7XFxyXFxuICByaWdodDogMTVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogaHNsKDM1LCAxMDAlLCAzNSUpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wLXVwLWhlYWRpbmcge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wLXVwLWRlc2NyaXB0aW9uIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXJnaW46IDEwcHggYXV0bztcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWhlYWRpbmcge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWNvbnRhaW5lciBpbnB1dCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBwYWRkaW5nOiA3cHggMTBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMzUsIDEwMCUsIDk1JSk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW47XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlY2QxO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDAgMDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2NnB4KSB7XFxyXFxuICBoZWFkZXIuaGVhZGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuICAucG9wLXVwLWRlc2NyaXB0aW9uIHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50LWZvcm0ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50LXBvcC11cCAuY2xvc2UtYnRuIHtcXHJcXG4gICAgdG9wOiAyMHB4O1xcclxcbiAgICByaWdodDogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50LXBvcC11cCAuaXRlbS1pbWcge1xcclxcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxvZ28tY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgY2VudGVyIG5vLXJlcGVhdDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sb2dvLWNvbnRhaW5lci5hY3RpdmUge1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIHRyYW5zaXRpb246IDBzO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1saW5rcyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1saW5rcy5hY3RpdmUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNlZWJhYTg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LWl0ZW0ge1xcclxcbiAgICBwYWRkaW5nOiAwLjYyNXJlbSAwLjc1cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1saW5rcy5hY3RpdmUgLm5hdi1pdGVtIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDQ0cHg7XFxyXFxuICAgIGNvbG9yOiAjZmZmNWUxO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBtYXJnaW46IDAgMS41cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhhbWJ1cmdlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogNHB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcmlnaHQ6IDNyZW07XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5iYXIge1xcclxcbiAgICB3aWR0aDogMXJlbTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FjYjdjMztcXHJcXG4gICAgdHJhbnNpdGlvbjogMC42cyBlYXNlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhhbWJ1cmdlci5hY3RpdmUgLmJhcjpudGgtb2YtdHlwZSgxKSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg2LjNweCkgcm90YXRlKDQ1ZGVnKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oYW1idXJnZXIuYWN0aXZlIC5iYXI6bnRoLW9mLXR5cGUoMikge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhhbWJ1cmdlci5hY3RpdmUgLmJhcjpudGgtb2YtdHlwZSgzKSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNi4zcHgpIHJvdGF0ZSgtNDVkZWcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxhQUFhOztBQUViO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQ0FBa0M7O0VBRWxDLG9DQUFvQztFQUNwQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSx5REFBNEM7QUFDOUM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEMseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixvRUFBb0Q7QUFDdEQ7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNERBQTREO0VBQzVELGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IseUNBQXlDO0VBQ3pDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLG9DQUFvQztFQUNwQywyQ0FBMkM7RUFDM0Msc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0RBQWdEO0VBQ2hELGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsaUNBQWlDO0VBQ2pDLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxpQ0FBaUM7RUFDakMseUNBQXlDO0VBQ3pDLGdDQUFnQztFQUNoQyx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1oseURBQTZDO0FBQy9DOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtBQUNaOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsU0FBUztJQUNULFdBQVc7RUFDYjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osb0VBQW9EO0VBQ3REOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixNQUFNO0lBQ04sVUFBVTtJQUNWLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLE9BQU87SUFDUCxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsVUFBVTtFQUNaOztFQUVBO0lBQ0UsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSwwQ0FBMEM7RUFDNUM7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSw0Q0FBNEM7RUFDOUM7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiogQGZvcm1hdCAqL1xcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgZm9udC1zaXplOiBjYWxjKDE1cHggKyAwLjM5MDYyNXZ3KTtcXHJcXG5cXHJcXG4gIC8qIGZvbnQtZmFtaWx5OiAnQ29va2llJywgY3Vyc2l2ZTsgKi9cXHJcXG4gIGZvbnQtZmFtaWx5OiAnRG9zaXMnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvYm9keS1iZy5zdmcpO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyLmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGhzbCgzNSwgMTAwJSwgOTglKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmVjZDE7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxNXB4O1xcclxcbiAgcGFkZGluZzogMTZweCAxNXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgcGFkZGluZzogMCAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGFtYnVyZ2VyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5sb2dvLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTUwcHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vaW1hZ2VzL2xvZ28uc3ZnKSBjZW50ZXIgbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rcyBsaSB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlua3MgbGkgYSB7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rcyBsaTpudGgtb2YtdHlwZSgxKSBhIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkcy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMxMHB4LCAxZnIpKTtcXHJcXG4gIGNvbHVtbi1nYXA6IDIwcHg7XFxyXFxuICByb3ctZ2FwOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZHMtY29udGFpbmVyID4gKiB7XFxyXFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDAgM3B4IDhweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbWctY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLWNvbnRhaW5lciBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIC5jb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIC5uYW1lIHtcXHJcXG4gIGNvbG9yOiBoc2woMzUsIDEwMCUsIDQ3JSk7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIC5saWtlLWJ0biB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgLnByZXNzZWQge1xcclxcbiAgY29sb3I6ICNmMDA7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIC5saWtlLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgZm9udC1zaXplOiAwLjdyZW07XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIGJ1dHRvbiB7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MSwgMTQ2LCAwLjUpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1MSwgMTQ2LCAwLjEpO1xcclxcbiAgYm94LXNoYWRvdzogcmdiKDI1MSwgMTQ2LCAwLjAyKSAwIDFweCAzcHggMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxyXFxuICBtaW4taGVpZ2h0OiAzcmVtO1xcclxcbiAgcGFkZGluZzogY2FsYygwLjU3NXJlbSAtIDFweCkgY2FsYygxLjFyZW0gLSAxcHgpO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1jb250YWluZXIgYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgcGFkZGluZzogOHB4IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIGJ1dHRvbjpob3ZlcixcXHJcXG4uY2FyZCBidXR0b246Zm9jdXMge1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjUxLCAxNDYsIDAuMTUpO1xcclxcbiAgYm94LXNoYWRvdzogcmdiKDI1MSwgMTQ2LCAwLjEpIDAgMnB4IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIGJ1dHRvbjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIGJ1dHRvbjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDM1LCA5OSUsIDQ3JSk7XFxyXFxuICBib3JkZXItY29sb3I6IHJnYigyNTEsIDE0NiwgMC4xNSk7XFxyXFxuICBib3gtc2hhZG93OiByZ2IoMjUxLCAxNDYsIDAuMDYpIDAgMnB4IDRweDtcXHJcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjUpO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1wb3AtdXAge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgaGVpZ2h0OiA5MCU7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcGFkZGluZzogMnJlbSAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWNkMTtcXHJcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwJSk7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1hZ2VzL3BvcFVwLWJnLnN2Zyk7XFxyXFxufVxcclxcblxcclxcbi5zaG93LXBvcC11cCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtcG9wLXVwIC5pdGVtLWltZyB7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0byAxMHB4IGF1dG87XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgaGVpZ2h0OiAzMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtcG9wLXVwIGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXBvcC11cCAuYWRkLWNvbW1lbnQtYnRuIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXBvcC11cCAuY2xvc2UtYnRuIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMTBweDtcXHJcXG4gIHJpZ2h0OiAxNXB4O1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiBoc2woMzUsIDEwMCUsIDM1JSk7XFxyXFxufVxcclxcblxcclxcbi5wb3AtdXAtaGVhZGluZyB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3AtdXAtZGVzY3JpcHRpb24ge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXJnaW46IDEwcHggYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtaGVhZGluZyB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIG1hcmdpbjogMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtY29udGFpbmVyIGlucHV0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIHBhZGRpbmc6IDdweCAxMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgzNSwgMTAwJSwgOTUlKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbjtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmVjZDE7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAwO1xcclxcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcclxcbiAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY2cHgpIHtcXHJcXG4gIGhlYWRlci5oZWFkZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG4gIC5wb3AtdXAtZGVzY3JpcHRpb24ge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnQtZm9ybSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnQtcG9wLXVwIC5jbG9zZS1idG4ge1xcclxcbiAgICB0b3A6IDIwcHg7XFxyXFxuICAgIHJpZ2h0OiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnQtcG9wLXVwIC5pdGVtLWltZyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubG9nby1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKC4uL2ltYWdlcy9sb2dvLnN2ZykgY2VudGVyIG5vLXJlcGVhdDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sb2dvLWNvbnRhaW5lci5hY3RpdmUge1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIHRyYW5zaXRpb246IDBzO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1saW5rcyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1saW5rcy5hY3RpdmUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNlZWJhYTg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LWl0ZW0ge1xcclxcbiAgICBwYWRkaW5nOiAwLjYyNXJlbSAwLjc1cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1saW5rcy5hY3RpdmUgLm5hdi1pdGVtIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDQ0cHg7XFxyXFxuICAgIGNvbG9yOiAjZmZmNWUxO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBtYXJnaW46IDAgMS41cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhhbWJ1cmdlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogNHB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcmlnaHQ6IDNyZW07XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5iYXIge1xcclxcbiAgICB3aWR0aDogMXJlbTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FjYjdjMztcXHJcXG4gICAgdHJhbnNpdGlvbjogMC42cyBlYXNlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhhbWJ1cmdlci5hY3RpdmUgLmJhcjpudGgtb2YtdHlwZSgxKSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg2LjNweCkgcm90YXRlKDQ1ZGVnKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oYW1idXJnZXIuYWN0aXZlIC5iYXI6bnRoLW9mLXR5cGUoMikge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhhbWJ1cmdlci5hY3RpdmUgLmJhcjpudGgtb2YtdHlwZSgzKSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNi4zcHgpIHJvdGF0ZSgtNDVkZWcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgeyBsb2FkRGF0YUZyb21BUEkgfSBmcm9tICcuL2pzL2Rpc3BsYXkuanMnO1xyXG5pbXBvcnQgTGlrZSBmcm9tICcuL2pzL2xpa2VzLmpzJztcclxuaW1wb3J0IE1lYWwgZnJvbSAnLi9qcy9tZWFscy5qcyc7XHJcblxyXG5jb25zdCBsaWtlID0gbmV3IExpa2UoKTtcclxuY29uc3QgbWVhbCA9IG5ldyBNZWFsKCk7XHJcblxyXG53aW5kb3cub25sb2FkID0gYXN5bmMgKCkgPT4ge1xyXG4gIGF3YWl0IGxvYWREYXRhRnJvbUFQSSgpO1xyXG4gIG1lYWwuY291bnRNZWFscygpO1xyXG59O1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGlmICghZS50YXJnZXQubWF0Y2hlcygnLmxpa2UtYnRuJykpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJy5saWtlLWJ0bicpKSB7XHJcbiAgICBjb25zdCBsaWtlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlLWJ0bicpO1xyXG4gICAgbGlrZUJ0bnMuZm9yRWFjaCgoYnRuLCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoZS50YXJnZXQgPT09IGJ0bikge1xyXG4gICAgICAgIGxpa2UudXBkYXRlTGlrZXMoaW5kZXgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3QgaHVtYmVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlcicpO1xyXG5odW1iZXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlcicpO1xyXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtbGlua3MnKTtcclxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ28tY29udGFpbmVyJyk7XHJcbiAgaGFtYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gIG5hdi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICBsb2dvLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG59KTtcclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IElOVk9MVkVNRU5UX1VSTCB9IGZyb20gJy4vY29uZmlnLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1lbnQge1xyXG4gIGdldENvbW1lbnRzID0gYXN5bmMgKG1lYWxJRCkgPT4ge1xyXG4gICAgY29uc3QgY29tbWVudHNSZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgJHtJTlZPTFZFTUVOVF9VUkx9L2NvbW1lbnRzP2l0ZW1faWQ9JHttZWFsSUR9YCxcclxuICAgICk7XHJcbiAgICBjb25zdCBjb21tZW50ID0gYXdhaXQgY29tbWVudHNSZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gY29tbWVudDtcclxuICB9O1xyXG5cclxuICBhZGRDb21tZW50ID0gYXN5bmMgKG5hbWUsIGNvbW1lbnQsIGlkKSA9PiB7XHJcbiAgICBjb25zdCBwb3N0Q29tbWVudFVybCA9IGAke0lOVk9MVkVNRU5UX1VSTH0vY29tbWVudHNgO1xyXG4gICAgYXdhaXQgZmV0Y2gocG9zdENvbW1lbnRVcmwsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgaXRlbV9pZDogaWQsXHJcbiAgICAgICAgdXNlcm5hbWU6IG5hbWUsXHJcbiAgICAgICAgY29tbWVudCxcclxuICAgICAgfSksXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb3VudENvbW1lbnRzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgYW1vdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzLWFtb3VudCcpO1xyXG4gICAgY29uc3QgY29tbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudHMnKTtcclxuICAgIGFtb3VudC50ZXh0Q29udGVudCA9IGAoJHtjb21tZW50cy5sZW5ndGggPz8gMH0pYDtcclxuICB9O1xyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5leHBvcnQgY29uc3QgQkFTRUFQSV9VUkwgPSAnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xJztcclxuZXhwb3J0IGNvbnN0IElOVk9MVkVNRU5UX1VSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9zQXhRdE5QNW56T1Y5bDNQNkRPMyc7XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgQ29tbWVudCBmcm9tICcuL2NvbW1lbnRzLmpzJztcclxuaW1wb3J0IExpa2UgZnJvbSAnLi9saWtlcy5qcyc7XHJcbmltcG9ydCBNZWFsIGZyb20gJy4vbWVhbHMuanMnO1xyXG5cclxuY29uc3QgY29tbWVudCA9IG5ldyBDb21tZW50KCk7XHJcbmNvbnN0IGxpa2UgPSBuZXcgTGlrZSgpO1xyXG5jb25zdCBtZWFsID0gbmV3IE1lYWwoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBkaXNwbGF5UG9wdXAgPSBhc3luYyAobWVhbElEKSA9PiB7XHJcbiAgY29uc3QgbWVhbERldGFpbCA9IGF3YWl0IG1lYWwuZ2V0TWVhbERldGFpbHMobWVhbElEKTtcclxuICBjb25zdCBjb21tZW50cyA9IGF3YWl0IGNvbW1lbnQuZ2V0Q29tbWVudHMobWVhbElEKTtcclxuICBsZXQgaHRtbCA9IGA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXggY2xvc2UtYnRuXCI+PC9pPlxyXG4gIDxkaXYgY2xhc3M9XCJpdGVtLWltZ1wiPlxyXG4gICAgPGltZyBzcmM9XCIke21lYWxEZXRhaWwuc3RyTWVhbFRodW1ifVwiIGFsdD1cIlwiPlxyXG4gIDwvZGl2PlxyXG4gIDxoMiBjbGFzcz1cInBvcC11cC1oZWFkaW5nXCI+JHttZWFsRGV0YWlsLnN0ck1lYWx9PC9oMj5cclxuICA8ZGl2IGNsYXNzPVwicG9wLXVwLWRlc2NyaXB0aW9uXCI+XHJcbiAgJHttZWFsRGV0YWlsLnN0ckluc3RydWN0aW9uc31cclxuICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LWNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbW1lbnQtaGVhZGluZ1wiPlxyXG4gICAgICBDb21tZW50cyA8c3BhbiBjbGFzcz1cImNvbW1lbnRzLWFtb3VudFwiPjwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbW1lbnQtbGlzdFwiPlxyXG4gICAgYDtcclxuICBpZiAoY29tbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgY29tbWVudHMuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xyXG4gICAgICBodG1sICs9IGA8ZGl2IGNsYXNzPVwiY29tbWVudHNcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJjb21tZW50LWRhdGVcIj4ke2NvbW1lbnQuY3JlYXRpb25fZGF0ZX08L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiY29tbWVudC1kZXNjcml0cGlvblwiPiR7Y29tbWVudC51c2VybmFtZX06ICR7Y29tbWVudC5jb21tZW50fTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICAgIH0pO1xyXG4gIH1cclxuICBodG1sICs9IGA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiY29tbWVudC1mb3JtXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LWhlYWRpbmdcIj5cclxuICAgICAgICBBZGQgYSBjb21tZW50XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJjb21tZW50ZXItbmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIj5cclxuICAgICAgPHRleHRhcmVhIGNsYXNzPVwiY29tbWVudFwiIG5hbWU9XCJjb21tZW50XCIgaWQ9XCJcIiBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIiBwbGFjZWhvbGRlcj1cIllvdXIgaW5zaWdodHNcIj48L3RleHRhcmVhPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYWRkLWNvbW1lbnQtYnRuXCI+Q29tbWVudDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+YDtcclxuXHJcbiAgY29uc3QgcG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1wb3AtdXAnKTtcclxuICBwb3BVcC5pbm5lckhUTUwgPSBodG1sO1xyXG4gIHBvcFVwLmNsYXNzTGlzdC5hZGQoJ3Nob3ctcG9wLXVwJyk7XHJcblxyXG4gIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWJ0bicpO1xyXG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcG9wVXAuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdy1wb3AtdXAnKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgY29tbWVudGVyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50ZXItbmFtZScpO1xyXG4gIGNvbnN0IGNvbW1lbnRUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQnKTtcclxuICBjb25zdCBjb21tZW50QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1jb21tZW50LWJ0bicpO1xyXG4gIGNvbnN0IGNvbW1lbnRsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtbGlzdCcpO1xyXG4gIGNvbW1lbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb21tZW50XHJcbiAgICAgIC5hZGRDb21tZW50KGNvbW1lbnRlck5hbWUudmFsdWUsIGNvbW1lbnRUZXh0LnZhbHVlLCBtZWFsSUQpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBjb21tZW50bGlzdC5pbm5lckhUTUwgKz0gYDxkaXYgY2xhc3M9XCJjb21tZW50c1wiPjxzcGFuIGNsYXNzPVwiY29tbWVudC1kYXRlXCI+JHtuZXcgRGF0ZSgpXHJcbiAgICAgICAgICAudG9JU09TdHJpbmcoKVxyXG4gICAgICAgICAgLnNsaWNlKDAsIDEwKX08L3NwYW4+PHNwYW4gY2xhc3M9XCJjb21tZW50LWRlc2NyaXRwaW9uXCI+JHtcclxuICAgICAgICAgIGNvbW1lbnRlck5hbWUudmFsdWVcclxuICAgICAgICB9OiAke2NvbW1lbnRUZXh0LnZhbHVlfTwvc3Bhbj48L2Rpdj5gO1xyXG5cclxuICAgICAgICBjb21tZW50LmNvdW50Q29tbWVudHMoKTtcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGlzcGxheUNhcmRzID0gKG1lYWwsIGxpa2VzT2JqKSA9PiB7XHJcbiAgY29uc3QgaHRtbCA9IGA8ZGl2IGNsYXNzPVwiY2FyZFwiICBkYXRhLWlkID0gXCIke21lYWwuaWRNZWFsfVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImltZy1jb250YWluZXJcIj5cclxuICAgICAgICA8aW1nIHNyYz1cIiR7bWVhbC5zdHJNZWFsVGh1bWJ9XCIgYWx0PVwiXCI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+JHttZWFsLnN0ck1lYWx9PC9kaXY+XHJcbiAgICAgIDxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1oZWFydCBsaWtlLWJ0blwiPjwvaT5cclxuICAgIDwvZGl2PlxyXG4gICAgPHNwYW4gY2xhc3M9XCJsaWtlLWNvbnRhaW5lclwiPjxzcGFuIGNsYXNzPVwibGlrZXNcIj4ke2xpa2VzT2JqLmxpa2VzfTwvc3Bhbj4gbGlrZXM8L3NwYW4+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiY29tbWVudC1idG5cIiBpZD1cIiR7bWVhbC5pZE1lYWx9XCI+UmVjaXBlPC9idXR0b24+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29tbWVudC1wb3AtdXBcIj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PmA7XHJcbiAgY29uc3QgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcy1jb250YWluZXInKTtcclxuICBjYXJkQ29udGFpbmVyLmlubmVySFRNTCArPSBodG1sO1xyXG5cclxuICBjb25zdCBjb21tZW50YnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1lbnQtYnRuJyk7XHJcbiAgY29tbWVudGJ0bi5mb3JFYWNoKChidG4pID0+IHtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgdGFyZ2V0SUQgPSBidG4uZ2V0QXR0cmlidXRlKCdpZCcpO1xyXG4gICAgICBkaXNwbGF5UG9wdXAodGFyZ2V0SUQpLnRoZW4oKCkgPT4gY29tbWVudC5jb3VudENvbW1lbnRzKCkpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZERhdGFGcm9tQVBJID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IG1lYWxzID0gYXdhaXQgbWVhbC5nZXRNZWFscygpO1xyXG4gIGNvbnN0IGxpa2VzID0gYXdhaXQgbGlrZS5nZXRMaWtlcygpO1xyXG4gIG1lYWxzLmZvckVhY2goKG1lYWwsIGluZGV4KSA9PiB7XHJcbiAgICBkaXNwbGF5Q2FyZHMobWVhbCwgbGlrZXNbaW5kZXhdKTtcclxuICB9KTtcclxufTtcclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IElOVk9MVkVNRU5UX1VSTCB9IGZyb20gJy4vY29uZmlnLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpa2Uge1xyXG4gIGNyZWF0ZUxpa2UgPSBhc3luYyAobWVhbElEKSA9PiB7XHJcbiAgICBhd2FpdCBmZXRjaChgJHtJTlZPTFZFTUVOVF9VUkx9L2xpa2VzL2AsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGl0ZW1faWQ6IG1lYWxJRCB9KSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGdldExpa2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2VHZXQgPSBhd2FpdCBmZXRjaChgJHtJTlZPTFZFTUVOVF9VUkx9L2xpa2VzL2ApO1xyXG4gICAgY29uc3QgbGlrZXMgPSBhd2FpdCByZXNwb25zZUdldC5qc29uKCk7XHJcbiAgICByZXR1cm4gbGlrZXM7XHJcbiAgfTtcclxuXHJcbiAgdXBkYXRlTGlrZXMgPSBhc3luYyAoaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IGxpa2VzQW1vdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpa2VzJylbaW5kZXhdO1xyXG4gICAgY29uc3QgaGVhcnRJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhLWhlYXJ0JylbaW5kZXhdO1xyXG4gICAgaGVhcnRJY29uLmNsYXNzTGlzdCA9ICdmYS1zb2xpZCBmYS1oZWFydCBsaWtlLWJ0biBwcmVzc2VkJztcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBoZWFydEljb24uY2xhc3NMaXN0ID0gJ2ZhLXJlZ3VsYXIgZmEtaGVhcnQgbGlrZS1idG4nO1xyXG4gICAgfSwgMTIwKTtcclxuICAgIGxpa2VzQW1vdW50LnRleHRDb250ZW50ID0gcGFyc2VJbnQobGlrZXNBbW91bnQudGV4dENvbnRlbnQsIDEwKSArIDE7XHJcbiAgICBsZXQgbGlrZXNPYmogPSAoYXdhaXQgdGhpcy5nZXRMaWtlcygpKVtpbmRleF07XHJcbiAgICBhd2FpdCB0aGlzLmNyZWF0ZUxpa2UobGlrZXNPYmouaXRlbV9pZCk7XHJcbiAgICBsaWtlc09iaiA9IChhd2FpdCB0aGlzLmdldExpa2VzKCkpW2luZGV4XTtcclxuICB9O1xyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBCQVNFQVBJX1VSTCB9IGZyb20gJy4vY29uZmlnLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lYWwge1xyXG4gIGdldE1lYWxzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtCQVNFQVBJX1VSTH0vZmlsdGVyLnBocD9hPUNhbmFkaWFuYCk7XHJcbiAgICBjb25zdCB7IG1lYWxzIH0gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gbWVhbHM7XHJcbiAgfTtcclxuXHJcbiAgY291bnRNZWFscyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGFtb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLWFtb3VudCcpO1xyXG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpO1xyXG4gICAgYW1vdW50LnRleHRDb250ZW50ID0gYCgke2l0ZW1zLmxlbmd0aH0pYDtcclxuICB9O1xyXG5cclxuICBnZXRNZWFsRGV0YWlscyA9IGFzeW5jIChtZWFsSUQpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QkFTRUFQSV9VUkx9L2xvb2t1cC5waHA/aT0ke21lYWxJRH1gKTtcclxuICAgIGNvbnN0IG1lYWxEZXRhaWwgPSAoYXdhaXQgcmVzcG9uc2UuanNvbigpKS5tZWFsc1swXTtcclxuICAgIHJldHVybiBtZWFsRGV0YWlsO1xyXG4gIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9