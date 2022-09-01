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
___CSS_LOADER_EXPORT___.push([module.id, "/** @format */\r\n\r\n* {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n\tfont-size: calc(15px + 0.390625vw);\r\n\r\n\t/* font-family: 'Cookie', cursive; */\r\n\tfont-family: 'Dosis', sans-serif;\r\n}\r\n\r\nbody {\r\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\nul {\r\n\tlist-style: none;\r\n}\r\n\r\na {\r\n\ttext-decoration: none;\r\n}\r\n\r\nheader.header {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tborder: 1px solid hsl(35, 100%, 98%);\r\n\tbackground-color: #ffecd1;\r\n\tborder-radius: 0 0 10px 15px;\r\n\tpadding: 16px 15px;\r\n\tmargin-bottom: 24px;\r\n}\r\n\r\n.nav-links {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n\tpadding: 0 15px;\r\n}\r\n\r\n.hamburger {\r\n\tdisplay: none;\r\n}\r\n\r\n.logo-container {\r\n\twidth: 150px;\r\n\theight: 35px;\r\n\tbackground: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") center no-repeat;\r\n}\r\n\r\n.container {\r\n\twidth: 80%;\r\n\tmargin: 0 auto;\r\n}\r\n\r\n.nav-links li {\r\n\tmargin-right: 20px;\r\n}\r\n\r\n.nav-links li a {\r\n\tcolor: #000;\r\n}\r\n\r\n.nav-links li:nth-of-type(1) a {\r\n\tfont-weight: bold;\r\n\ttext-decoration: underline;\r\n}\r\n\r\n.cards-container {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(auto-fill, minmax(310px, 1fr));\r\n\tcolumn-gap: 20px;\r\n\trow-gap: 30px;\r\n}\r\n\r\n.cards-container > * {\r\n\t/* border: 1px solid red; */\r\n\tbox-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;\r\n\tborder-radius: 20px;\r\n}\r\n\r\n.img-container {\r\n\twidth: 100%;\r\n}\r\n\r\n.img-container img {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tborder-radius: 20px 20px 0 0;\r\n}\r\n\r\n.card {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tbackground-color: #fff;\r\n}\r\n\r\n.card .content {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tpadding: 10px 15px;\r\n}\r\n\r\n.card .name {\r\n\tcolor: hsl(35, 100%, 47%);\r\n}\r\n\r\n.card .like-btn {\r\n\tcursor: pointer;\r\n\tcolor: #000;\r\n}\r\n\r\n.card .pressed {\r\n\tcolor: #f00;\r\n}\r\n\r\n.card .like-container {\r\n\twidth: auto;\r\n\talign-self: flex-end;\r\n\tfont-size: 0.7rem;\r\n\tmargin-right: 15px;\r\n}\r\n\r\n.card button {\r\n\talign-items: center;\r\n\tbackground-color: rgb(251, 146, 0.5);\r\n\tborder: 1px solid rgb(251, 146, 0.1);\r\n\tbox-shadow: rgb(251, 146, 0.02) 0 1px 3px 0;\r\n\tbox-sizing: border-box;\r\n\tcolor: #fff;\r\n\tcursor: pointer;\r\n\tdisplay: inline-flex;\r\n\tfont-size: 16px;\r\n\tfont-weight: 600;\r\n\tjustify-content: center;\r\n\tline-height: 1.25;\r\n\tmin-height: 3rem;\r\n\tpadding: calc(0.575rem - 1px) calc(1.1rem - 1px);\r\n\tposition: relative;\r\n\ttext-decoration: none;\r\n\ttransition: all 250ms;\r\n\tuser-select: none;\r\n\t-webkit-user-select: none;\r\n\ttouch-action: manipulation;\r\n\tvertical-align: baseline;\r\n\twidth: 40%;\r\n\tmargin: 20px auto;\r\n\tborder-radius: 50px;\r\n}\r\n\r\n.comment-container button {\r\n\twidth: auto;\r\n\tpadding: 8px 10px;\r\n}\r\n\r\n.card button:hover,\r\n.card button:focus {\r\n\tborder-color: rgb(251, 146, 0.15);\r\n\tbox-shadow: rgb(251, 146, 0.1) 0 2px 10px;\r\n}\r\n\r\n.card button:hover {\r\n\ttransform: translateY(-1px);\r\n}\r\n\r\n.card button:active {\r\n\tbackground-color: hsl(35, 99%, 47%);\r\n\tborder-color: rgb(251, 146, 0.15);\r\n\tbox-shadow: rgb(251, 146, 0.06) 0 2px 4px;\r\n\tcolor: rgba(255, 255, 255, 0.65);\r\n\ttransform: translateY(0);\r\n}\r\n\r\n.comment-pop-up {\r\n\tborder-radius: 10px;\r\n\tposition: fixed;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%, -50%);\r\n\twidth: 90%;\r\n\theight: 90%;\r\n\toverflow-y: scroll;\r\n\tdisplay: none;\r\n\tpadding: 2rem 0;\r\n\tbackground-color: #ffecd1;\r\n\tcolor: hsl(0, 0%, 10%);\r\n\tz-index: 100;\r\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n}\r\n\r\n.show-pop-up {\r\n\tdisplay: block;\r\n}\r\n\r\n.comment-pop-up .item-img {\r\n\twidth: 300px;\r\n\tmargin: 0 auto 10px auto;\r\n\tborder-radius: 10px;\r\n\theight: 300px;\r\n}\r\n\r\n.comment-pop-up img {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tborder-radius: 10px;\r\n}\r\n\r\n.comment-pop-up .add-comment-btn {\r\n\twidth: 50%;\r\n}\r\n\r\n.comment-pop-up .close-btn {\r\n\tposition: absolute;\r\n\ttop: 10px;\r\n\tright: 15px;\r\n\tfont-size: 1.3rem;\r\n\tfont-weight: bold;\r\n\tcolor: hsl(35, 100%, 35%);\r\n}\r\n\r\n.pop-up-heading {\r\n\ttext-align: center;\r\n}\r\n\r\n.pop-up-description {\r\n\twidth: 80%;\r\n\tmargin: 10px auto;\r\n\tline-height: 1.6;\r\n}\r\n\r\n.comment-container {\r\n\twidth: 80%;\r\n\tmargin: 10px auto;\r\n}\r\n\r\n.comment-heading {\r\n\tfont-weight: bold;\r\n\tmargin: 10px 0;\r\n}\r\n\r\n.comment-form {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\twidth: 50%;\r\n}\r\n\r\n.comment-container input,\r\ntextarea {\r\n\tpadding: 7px 10px;\r\n\tmargin-bottom: 10px;\r\n\tbackground-color: hsl(35, 100%, 95%);\r\n\tborder: none;\r\n\ttransition: 0.2s ease-in;\r\n\toutline: none;\r\n\tborder-radius: 10px 10px 0 10px;\r\n}\r\n\r\ninput:focus,\r\ntextarea:focus {\r\n\tborder-bottom: 1px solid #dc3545;\r\n\toutline: none;\r\n}\r\n\r\ninput:valid,\r\ntextarea:valid {\r\n\tborder-bottom: 1px solid #3ac47d;\r\n}\r\n\r\n.footer {\r\n\tbackground-color: #ffecd1;\r\n\tborder-radius: 15px 15px 0 0;\r\n\tpadding: 10px 15px;\r\n\tmargin-top: 50px;\r\n\ttext-align: center;\r\n}\r\n\r\n@media screen and (max-width: 766px) {\r\n\theader.header {\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\t.pop-up-description {\r\n\t\twidth: 90%;\r\n\t}\r\n\r\n\t.comment-form {\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\t.comment-pop-up .close-btn {\r\n\t\ttop: 20px;\r\n\t\tright: 20px;\r\n\t}\r\n\r\n\t.comment-pop-up .item-img {\r\n\t\tmargin-top: 30px;\r\n\t}\r\n\r\n\t.logo-container {\r\n\t\twidth: 100px;\r\n\t\theight: 25px;\r\n\t\tbackground: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") center no-repeat;\r\n\t}\r\n\r\n\t.logo-container.active {\r\n\t\tvisibility: hidden;\r\n\t\ttransition: 0s;\r\n\t}\r\n\r\n\t.nav-links {\r\n\t\tdisplay: none;\r\n\t\tposition: fixed;\r\n\t\tjustify-content: flex-start;\r\n\t\talign-items: flex-start;\r\n\t\tmargin-left: 0;\r\n\t\tflex-direction: column;\r\n\t\ttop: 0;\r\n\t\twidth: 90%;\r\n\t\theight: 100%;\r\n\t\ttransition: 0.5s ease-in-out;\r\n\t\tz-index: 1;\r\n\t}\r\n\r\n\t.nav-links.active {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tpadding-top: 50px;\r\n\t\twidth: 100%;\r\n\t\tleft: 0;\r\n\t\tbackground: #eebaa8;\r\n\t}\r\n\r\n\t.nav-item {\r\n\t\tpadding: 0.625rem 0.75rem;\r\n\t}\r\n\r\n\t.nav-links.active .nav-item {\r\n\t\tfont-weight: 700;\r\n\t\tline-height: 44px;\r\n\t\tcolor: #fff5e1;\r\n\t\tpadding: 1rem;\r\n\t\tmargin: 0 1.5rem;\r\n\t}\r\n\r\n\t.hamburger {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tgap: 4px;\r\n\t\tposition: absolute;\r\n\t\tcursor: pointer;\r\n\t\tbackground-color: transparent;\r\n\t\tborder: none;\r\n\t\tright: 3rem;\r\n\t\ttransform: translateY(-50%);\r\n\t\tz-index: 1;\r\n\t}\r\n\r\n\t.bar {\r\n\t\twidth: 1rem;\r\n\t\tborder: 1px solid #acb7c3;\r\n\t\ttransition: 0.6s ease;\r\n\t}\r\n\r\n\t.hamburger.active .bar:nth-of-type(1) {\r\n\t\ttransform: translateY(6.3px) rotate(45deg);\r\n\t}\r\n\r\n\t.hamburger.active .bar:nth-of-type(2) {\r\n\t\topacity: 0;\r\n\t}\r\n\r\n\t.hamburger.active .bar:nth-of-type(3) {\r\n\t\ttransform: translateY(-6.3px) rotate(-45deg);\r\n\t}\r\n\r\n\t.footer {\r\n\t\twidth: 100%;\r\n\t}\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["/** @format */\r\n\r\n* {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n\tfont-size: calc(15px + 0.390625vw);\r\n\r\n\t/* font-family: 'Cookie', cursive; */\r\n\tfont-family: 'Dosis', sans-serif;\r\n}\r\n\r\nbody {\r\n\tbackground-image: url(../images/body-bg.svg);\r\n}\r\n\r\nul {\r\n\tlist-style: none;\r\n}\r\n\r\na {\r\n\ttext-decoration: none;\r\n}\r\n\r\nheader.header {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tborder: 1px solid hsl(35, 100%, 98%);\r\n\tbackground-color: #ffecd1;\r\n\tborder-radius: 0 0 10px 15px;\r\n\tpadding: 16px 15px;\r\n\tmargin-bottom: 24px;\r\n}\r\n\r\n.nav-links {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n\tpadding: 0 15px;\r\n}\r\n\r\n.hamburger {\r\n\tdisplay: none;\r\n}\r\n\r\n.logo-container {\r\n\twidth: 150px;\r\n\theight: 35px;\r\n\tbackground: url(../images/logo.svg) center no-repeat;\r\n}\r\n\r\n.container {\r\n\twidth: 80%;\r\n\tmargin: 0 auto;\r\n}\r\n\r\n.nav-links li {\r\n\tmargin-right: 20px;\r\n}\r\n\r\n.nav-links li a {\r\n\tcolor: #000;\r\n}\r\n\r\n.nav-links li:nth-of-type(1) a {\r\n\tfont-weight: bold;\r\n\ttext-decoration: underline;\r\n}\r\n\r\n.cards-container {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(auto-fill, minmax(310px, 1fr));\r\n\tcolumn-gap: 20px;\r\n\trow-gap: 30px;\r\n}\r\n\r\n.cards-container > * {\r\n\t/* border: 1px solid red; */\r\n\tbox-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;\r\n\tborder-radius: 20px;\r\n}\r\n\r\n.img-container {\r\n\twidth: 100%;\r\n}\r\n\r\n.img-container img {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tborder-radius: 20px 20px 0 0;\r\n}\r\n\r\n.card {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tbackground-color: #fff;\r\n}\r\n\r\n.card .content {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tpadding: 10px 15px;\r\n}\r\n\r\n.card .name {\r\n\tcolor: hsl(35, 100%, 47%);\r\n}\r\n\r\n.card .like-btn {\r\n\tcursor: pointer;\r\n\tcolor: #000;\r\n}\r\n\r\n.card .pressed {\r\n\tcolor: #f00;\r\n}\r\n\r\n.card .like-container {\r\n\twidth: auto;\r\n\talign-self: flex-end;\r\n\tfont-size: 0.7rem;\r\n\tmargin-right: 15px;\r\n}\r\n\r\n.card button {\r\n\talign-items: center;\r\n\tbackground-color: rgb(251, 146, 0.5);\r\n\tborder: 1px solid rgb(251, 146, 0.1);\r\n\tbox-shadow: rgb(251, 146, 0.02) 0 1px 3px 0;\r\n\tbox-sizing: border-box;\r\n\tcolor: #fff;\r\n\tcursor: pointer;\r\n\tdisplay: inline-flex;\r\n\tfont-size: 16px;\r\n\tfont-weight: 600;\r\n\tjustify-content: center;\r\n\tline-height: 1.25;\r\n\tmin-height: 3rem;\r\n\tpadding: calc(0.575rem - 1px) calc(1.1rem - 1px);\r\n\tposition: relative;\r\n\ttext-decoration: none;\r\n\ttransition: all 250ms;\r\n\tuser-select: none;\r\n\t-webkit-user-select: none;\r\n\ttouch-action: manipulation;\r\n\tvertical-align: baseline;\r\n\twidth: 40%;\r\n\tmargin: 20px auto;\r\n\tborder-radius: 50px;\r\n}\r\n\r\n.comment-container button {\r\n\twidth: auto;\r\n\tpadding: 8px 10px;\r\n}\r\n\r\n.card button:hover,\r\n.card button:focus {\r\n\tborder-color: rgb(251, 146, 0.15);\r\n\tbox-shadow: rgb(251, 146, 0.1) 0 2px 10px;\r\n}\r\n\r\n.card button:hover {\r\n\ttransform: translateY(-1px);\r\n}\r\n\r\n.card button:active {\r\n\tbackground-color: hsl(35, 99%, 47%);\r\n\tborder-color: rgb(251, 146, 0.15);\r\n\tbox-shadow: rgb(251, 146, 0.06) 0 2px 4px;\r\n\tcolor: rgba(255, 255, 255, 0.65);\r\n\ttransform: translateY(0);\r\n}\r\n\r\n.comment-pop-up {\r\n\tborder-radius: 10px;\r\n\tposition: fixed;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%, -50%);\r\n\twidth: 90%;\r\n\theight: 90%;\r\n\toverflow-y: scroll;\r\n\tdisplay: none;\r\n\tpadding: 2rem 0;\r\n\tbackground-color: #ffecd1;\r\n\tcolor: hsl(0, 0%, 10%);\r\n\tz-index: 100;\r\n\tbackground-image: url(../images/popUp-bg.svg);\r\n}\r\n\r\n.show-pop-up {\r\n\tdisplay: block;\r\n}\r\n\r\n.comment-pop-up .item-img {\r\n\twidth: 300px;\r\n\tmargin: 0 auto 10px auto;\r\n\tborder-radius: 10px;\r\n\theight: 300px;\r\n}\r\n\r\n.comment-pop-up img {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tborder-radius: 10px;\r\n}\r\n\r\n.comment-pop-up .add-comment-btn {\r\n\twidth: 50%;\r\n}\r\n\r\n.comment-pop-up .close-btn {\r\n\tposition: absolute;\r\n\ttop: 10px;\r\n\tright: 15px;\r\n\tfont-size: 1.3rem;\r\n\tfont-weight: bold;\r\n\tcolor: hsl(35, 100%, 35%);\r\n}\r\n\r\n.pop-up-heading {\r\n\ttext-align: center;\r\n}\r\n\r\n.pop-up-description {\r\n\twidth: 80%;\r\n\tmargin: 10px auto;\r\n\tline-height: 1.6;\r\n}\r\n\r\n.comment-container {\r\n\twidth: 80%;\r\n\tmargin: 10px auto;\r\n}\r\n\r\n.comment-heading {\r\n\tfont-weight: bold;\r\n\tmargin: 10px 0;\r\n}\r\n\r\n.comment-form {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\twidth: 50%;\r\n}\r\n\r\n.comment-container input,\r\ntextarea {\r\n\tpadding: 7px 10px;\r\n\tmargin-bottom: 10px;\r\n\tbackground-color: hsl(35, 100%, 95%);\r\n\tborder: none;\r\n\ttransition: 0.2s ease-in;\r\n\toutline: none;\r\n\tborder-radius: 10px 10px 0 10px;\r\n}\r\n\r\ninput:focus,\r\ntextarea:focus {\r\n\tborder-bottom: 1px solid #dc3545;\r\n\toutline: none;\r\n}\r\n\r\ninput:valid,\r\ntextarea:valid {\r\n\tborder-bottom: 1px solid #3ac47d;\r\n}\r\n\r\n.footer {\r\n\tbackground-color: #ffecd1;\r\n\tborder-radius: 15px 15px 0 0;\r\n\tpadding: 10px 15px;\r\n\tmargin-top: 50px;\r\n\ttext-align: center;\r\n}\r\n\r\n@media screen and (max-width: 766px) {\r\n\theader.header {\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\t.pop-up-description {\r\n\t\twidth: 90%;\r\n\t}\r\n\r\n\t.comment-form {\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\t.comment-pop-up .close-btn {\r\n\t\ttop: 20px;\r\n\t\tright: 20px;\r\n\t}\r\n\r\n\t.comment-pop-up .item-img {\r\n\t\tmargin-top: 30px;\r\n\t}\r\n\r\n\t.logo-container {\r\n\t\twidth: 100px;\r\n\t\theight: 25px;\r\n\t\tbackground: url(../images/logo.svg) center no-repeat;\r\n\t}\r\n\r\n\t.logo-container.active {\r\n\t\tvisibility: hidden;\r\n\t\ttransition: 0s;\r\n\t}\r\n\r\n\t.nav-links {\r\n\t\tdisplay: none;\r\n\t\tposition: fixed;\r\n\t\tjustify-content: flex-start;\r\n\t\talign-items: flex-start;\r\n\t\tmargin-left: 0;\r\n\t\tflex-direction: column;\r\n\t\ttop: 0;\r\n\t\twidth: 90%;\r\n\t\theight: 100%;\r\n\t\ttransition: 0.5s ease-in-out;\r\n\t\tz-index: 1;\r\n\t}\r\n\r\n\t.nav-links.active {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tpadding-top: 50px;\r\n\t\twidth: 100%;\r\n\t\tleft: 0;\r\n\t\tbackground: #eebaa8;\r\n\t}\r\n\r\n\t.nav-item {\r\n\t\tpadding: 0.625rem 0.75rem;\r\n\t}\r\n\r\n\t.nav-links.active .nav-item {\r\n\t\tfont-weight: 700;\r\n\t\tline-height: 44px;\r\n\t\tcolor: #fff5e1;\r\n\t\tpadding: 1rem;\r\n\t\tmargin: 0 1.5rem;\r\n\t}\r\n\r\n\t.hamburger {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tgap: 4px;\r\n\t\tposition: absolute;\r\n\t\tcursor: pointer;\r\n\t\tbackground-color: transparent;\r\n\t\tborder: none;\r\n\t\tright: 3rem;\r\n\t\ttransform: translateY(-50%);\r\n\t\tz-index: 1;\r\n\t}\r\n\r\n\t.bar {\r\n\t\twidth: 1rem;\r\n\t\tborder: 1px solid #acb7c3;\r\n\t\ttransition: 0.6s ease;\r\n\t}\r\n\r\n\t.hamburger.active .bar:nth-of-type(1) {\r\n\t\ttransform: translateY(6.3px) rotate(45deg);\r\n\t}\r\n\r\n\t.hamburger.active .bar:nth-of-type(2) {\r\n\t\topacity: 0;\r\n\t}\r\n\r\n\t.hamburger.active .bar:nth-of-type(3) {\r\n\t\ttransform: translateY(-6.3px) rotate(-45deg);\r\n\t}\r\n\r\n\t.footer {\r\n\t\twidth: 100%;\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
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
  <form class="comment-form">
      <div class="comment-heading">
        Add a comment
      </div>
      <input class="commenter-name" type="text" placeholder="Your name" required>
      <textarea class="comment" name="comment" id="" cols="30" rows="10" placeholder="Your insights" required></textarea>
      <button type="submit" class="add-comment-btn">Comment</button>
    </form>
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
    if (commenterName.value !== '' && commentText.value !== '') {
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
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZ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NkIsaUJBQWlCO0FBQzlDLEtBQUs7QUFDTDs7QUFFQTtBQUNBLHVDQUF1Qyx1REFBZSxDQUFDO0FBQ3ZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakNBOztBQUUwQzs7QUFFM0I7QUFDZjtBQUNBLG9DQUFvQyxtREFBVyxDQUFDO0FBQ2hELFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixhQUFhO0FBQzFDOztBQUVBO0FBQ0Esb0NBQW9DLG1EQUFXLENBQUMsZ0JBQWdCLE9BQU87QUFDdkU7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXBzdG9uZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS8uL3NyYy9qcy9jb21tZW50cy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS8uL3NyYy9qcy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUvLi9zcmMvanMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS8uL3NyYy9qcy9saWtlcy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS8uL3NyYy9qcy9tZWFscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2JvZHktYmcuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2xvZ28uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3BvcFVwLWJnLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqIEBmb3JtYXQgKi9cXHJcXG5cXHJcXG4qIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG5cXHRmb250LXNpemU6IGNhbGMoMTVweCArIDAuMzkwNjI1dncpO1xcclxcblxcclxcblxcdC8qIGZvbnQtZmFtaWx5OiAnQ29va2llJywgY3Vyc2l2ZTsgKi9cXHJcXG5cXHRmb250LWZhbWlseTogJ0Rvc2lzJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyLmhlYWRlciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBoc2woMzUsIDEwMCUsIDk4JSk7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZWNkMTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxNXB4O1xcclxcblxcdHBhZGRpbmc6IDE2cHggMTVweDtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmtzIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG5cXHRwYWRkaW5nOiAwIDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5oYW1idXJnZXIge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5sb2dvLWNvbnRhaW5lciB7XFxyXFxuXFx0d2lkdGg6IDE1MHB4O1xcclxcblxcdGhlaWdodDogMzVweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGNlbnRlciBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcblxcdHdpZHRoOiA4MCU7XFxyXFxuXFx0bWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlua3MgbGkge1xcclxcblxcdG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rcyBsaSBhIHtcXHJcXG5cXHRjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rcyBsaTpudGgtb2YtdHlwZSgxKSBhIHtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRzLWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMTBweCwgMWZyKSk7XFxyXFxuXFx0Y29sdW1uLWdhcDogMjBweDtcXHJcXG5cXHRyb3ctZ2FwOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZHMtY29udGFpbmVyID4gKiB7XFxyXFxuXFx0LyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcclxcblxcdGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMCAzcHggOHB4O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbWctY29udGFpbmVyIHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmltZy1jb250YWluZXIgaW1nIHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCAuY29udGVudCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0cGFkZGluZzogMTBweCAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCAubmFtZSB7XFxyXFxuXFx0Y29sb3I6IGhzbCgzNSwgMTAwJSwgNDclKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgLmxpa2UtYnRuIHtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0Y29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIC5wcmVzc2VkIHtcXHJcXG5cXHRjb2xvcjogI2YwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgLmxpa2UtY29udGFpbmVyIHtcXHJcXG5cXHR3aWR0aDogYXV0bztcXHJcXG5cXHRhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG5cXHRmb250LXNpemU6IDAuN3JlbTtcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIGJ1dHRvbiB7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUxLCAxNDYsIDAuNSk7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiKDI1MSwgMTQ2LCAwLjEpO1xcclxcblxcdGJveC1zaGFkb3c6IHJnYigyNTEsIDE0NiwgMC4wMikgMCAxcHggM3B4IDA7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHRjb2xvcjogI2ZmZjtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0ZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcclxcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuMjU7XFxyXFxuXFx0bWluLWhlaWdodDogM3JlbTtcXHJcXG5cXHRwYWRkaW5nOiBjYWxjKDAuNTc1cmVtIC0gMXB4KSBjYWxjKDEuMXJlbSAtIDFweCk7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMjUwbXM7XFxyXFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG5cXHR0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxuXFx0d2lkdGg6IDQwJTtcXHJcXG5cXHRtYXJnaW46IDIwcHggYXV0bztcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1jb250YWluZXIgYnV0dG9uIHtcXHJcXG5cXHR3aWR0aDogYXV0bztcXHJcXG5cXHRwYWRkaW5nOiA4cHggMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgYnV0dG9uOmhvdmVyLFxcclxcbi5jYXJkIGJ1dHRvbjpmb2N1cyB7XFxyXFxuXFx0Ym9yZGVyLWNvbG9yOiByZ2IoMjUxLCAxNDYsIDAuMTUpO1xcclxcblxcdGJveC1zaGFkb3c6IHJnYigyNTEsIDE0NiwgMC4xKSAwIDJweCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCBidXR0b246aG92ZXIge1xcclxcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgYnV0dG9uOmFjdGl2ZSB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaHNsKDM1LCA5OSUsIDQ3JSk7XFxyXFxuXFx0Ym9yZGVyLWNvbG9yOiByZ2IoMjUxLCAxNDYsIDAuMTUpO1xcclxcblxcdGJveC1zaGFkb3c6IHJnYigyNTEsIDE0NiwgMC4wNikgMCAycHggNHB4O1xcclxcblxcdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjUpO1xcclxcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtcG9wLXVwIHtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcblxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHR0b3A6IDUwJTtcXHJcXG5cXHRsZWZ0OiA1MCU7XFxyXFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuXFx0d2lkdGg6IDkwJTtcXHJcXG5cXHRoZWlnaHQ6IDkwJTtcXHJcXG5cXHRvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHRwYWRkaW5nOiAycmVtIDA7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZWNkMTtcXHJcXG5cXHRjb2xvcjogaHNsKDAsIDAlLCAxMCUpO1xcclxcblxcdHotaW5kZXg6IDEwMDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1wb3AtdXAge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1wb3AtdXAgLml0ZW0taW1nIHtcXHJcXG5cXHR3aWR0aDogMzAwcHg7XFxyXFxuXFx0bWFyZ2luOiAwIGF1dG8gMTBweCBhdXRvO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuXFx0aGVpZ2h0OiAzMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtcG9wLXVwIGltZyB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXBvcC11cCAuYWRkLWNvbW1lbnQtYnRuIHtcXHJcXG5cXHR3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1wb3AtdXAgLmNsb3NlLWJ0biB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHRvcDogMTBweDtcXHJcXG5cXHRyaWdodDogMTVweDtcXHJcXG5cXHRmb250LXNpemU6IDEuM3JlbTtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHRjb2xvcjogaHNsKDM1LCAxMDAlLCAzNSUpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wLXVwLWhlYWRpbmcge1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcC11cC1kZXNjcmlwdGlvbiB7XFxyXFxuXFx0d2lkdGg6IDgwJTtcXHJcXG5cXHRtYXJnaW46IDEwcHggYXV0bztcXHJcXG5cXHRsaW5lLWhlaWdodDogMS42O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1jb250YWluZXIge1xcclxcblxcdHdpZHRoOiA4MCU7XFxyXFxuXFx0bWFyZ2luOiAxMHB4IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWhlYWRpbmcge1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcdG1hcmdpbjogMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1mb3JtIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0d2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtY29udGFpbmVyIGlucHV0LFxcclxcbnRleHRhcmVhIHtcXHJcXG5cXHRwYWRkaW5nOiA3cHggMTBweDtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IGhzbCgzNSwgMTAwJSwgOTUlKTtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0dHJhbnNpdGlvbjogMC4ycyBlYXNlLWluO1xcclxcblxcdG91dGxpbmU6IG5vbmU7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Zm9jdXMsXFxyXFxudGV4dGFyZWE6Zm9jdXMge1xcclxcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGMzNTQ1O1xcclxcblxcdG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmlucHV0OnZhbGlkLFxcclxcbnRleHRhcmVhOnZhbGlkIHtcXHJcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgIzNhYzQ3ZDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZWNkMTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAwO1xcclxcblxcdHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG5cXHRtYXJnaW4tdG9wOiA1MHB4O1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY2cHgpIHtcXHJcXG5cXHRoZWFkZXIuaGVhZGVyIHtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LnBvcC11cC1kZXNjcmlwdGlvbiB7XFxyXFxuXFx0XFx0d2lkdGg6IDkwJTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmNvbW1lbnQtZm9ybSB7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5jb21tZW50LXBvcC11cCAuY2xvc2UtYnRuIHtcXHJcXG5cXHRcXHR0b3A6IDIwcHg7XFxyXFxuXFx0XFx0cmlnaHQ6IDIwcHg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5jb21tZW50LXBvcC11cCAuaXRlbS1pbWcge1xcclxcblxcdFxcdG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5sb2dvLWNvbnRhaW5lciB7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMHB4O1xcclxcblxcdFxcdGhlaWdodDogMjVweDtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGNlbnRlciBuby1yZXBlYXQ7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5sb2dvLWNvbnRhaW5lci5hY3RpdmUge1xcclxcblxcdFxcdHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG5cXHRcXHR0cmFuc2l0aW9uOiAwcztcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Lm5hdi1saW5rcyB7XFxyXFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHRcXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcblxcdFxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcblxcdFxcdG1hcmdpbi1sZWZ0OiAwO1xcclxcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdHdpZHRoOiA5MCU7XFxyXFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdFxcdHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuXFx0XFx0ei1pbmRleDogMTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Lm5hdi1saW5rcy5hY3RpdmUge1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRwYWRkaW5nLXRvcDogNTBweDtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRsZWZ0OiAwO1xcclxcblxcdFxcdGJhY2tncm91bmQ6ICNlZWJhYTg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5uYXYtaXRlbSB7XFxyXFxuXFx0XFx0cGFkZGluZzogMC42MjVyZW0gMC43NXJlbTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Lm5hdi1saW5rcy5hY3RpdmUgLm5hdi1pdGVtIHtcXHJcXG5cXHRcXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdFxcdGxpbmUtaGVpZ2h0OiA0NHB4O1xcclxcblxcdFxcdGNvbG9yOiAjZmZmNWUxO1xcclxcblxcdFxcdHBhZGRpbmc6IDFyZW07XFxyXFxuXFx0XFx0bWFyZ2luOiAwIDEuNXJlbTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmhhbWJ1cmdlciB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdGdhcDogNHB4O1xcclxcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuXFx0XFx0Ym9yZGVyOiBub25lO1xcclxcblxcdFxcdHJpZ2h0OiAzcmVtO1xcclxcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG5cXHRcXHR6LWluZGV4OiAxO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuYmFyIHtcXHJcXG5cXHRcXHR3aWR0aDogMXJlbTtcXHJcXG5cXHRcXHRib3JkZXI6IDFweCBzb2xpZCAjYWNiN2MzO1xcclxcblxcdFxcdHRyYW5zaXRpb246IDAuNnMgZWFzZTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmhhbWJ1cmdlci5hY3RpdmUgLmJhcjpudGgtb2YtdHlwZSgxKSB7XFxyXFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDYuM3B4KSByb3RhdGUoNDVkZWcpO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuaGFtYnVyZ2VyLmFjdGl2ZSAuYmFyOm50aC1vZi10eXBlKDIpIHtcXHJcXG5cXHRcXHRvcGFjaXR5OiAwO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuaGFtYnVyZ2VyLmFjdGl2ZSAuYmFyOm50aC1vZi10eXBlKDMpIHtcXHJcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTYuM3B4KSByb3RhdGUoLTQ1ZGVnKTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmZvb3RlciB7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxhQUFhOztBQUViO0NBQ0MsU0FBUztDQUNULFVBQVU7Q0FDVixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxrQ0FBa0M7O0NBRWxDLG9DQUFvQztDQUNwQyxnQ0FBZ0M7QUFDakM7O0FBRUE7Q0FDQyx5REFBNEM7QUFDN0M7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLG1CQUFtQjtDQUNuQixvQ0FBb0M7Q0FDcEMseUJBQXlCO0NBQ3pCLDRCQUE0QjtDQUM1QixrQkFBa0I7Q0FDbEIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLDJCQUEyQjtDQUMzQixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFlBQVk7Q0FDWixvRUFBb0Q7QUFDckQ7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsY0FBYztBQUNmOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw0REFBNEQ7Q0FDNUQsZ0JBQWdCO0NBQ2hCLGFBQWE7QUFDZDs7QUFFQTtDQUNDLDJCQUEyQjtDQUMzQix5Q0FBeUM7Q0FDekMsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0Ms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ZUFBZTtFQUNmLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixNQUFNO0VBQ04sVUFBVTtFQUNWLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsVUFBVTtDQUNYOztDQUVBO0VBQ0MsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLE9BQU87RUFDUCxtQkFBbUI7Q0FDcEI7O0NBRUE7RUFDQyx5QkFBeUI7Q0FDMUI7O0NBRUE7RUFDQyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCO0NBQ2pCOztDQUVBO0VBQ0MsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsVUFBVTtDQUNYOztDQUVBO0VBQ0MsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixxQkFBcUI7Q0FDdEI7O0NBRUE7RUFDQywwQ0FBMEM7Q0FDM0M7O0NBRUE7RUFDQyxVQUFVO0NBQ1g7O0NBRUE7RUFDQyw0Q0FBNEM7Q0FDN0M7O0NBRUE7RUFDQyxXQUFXO0NBQ1o7QUFDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiogQGZvcm1hdCAqL1xcclxcblxcclxcbioge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcblxcdGZvbnQtc2l6ZTogY2FsYygxNXB4ICsgMC4zOTA2MjV2dyk7XFxyXFxuXFxyXFxuXFx0LyogZm9udC1mYW1pbHk6ICdDb29raWUnLCBjdXJzaXZlOyAqL1xcclxcblxcdGZvbnQtZmFtaWx5OiAnRG9zaXMnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1hZ2VzL2JvZHktYmcuc3ZnKTtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyLmhlYWRlciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBoc2woMzUsIDEwMCUsIDk4JSk7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZWNkMTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxNXB4O1xcclxcblxcdHBhZGRpbmc6IDE2cHggMTVweDtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmtzIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG5cXHRwYWRkaW5nOiAwIDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5oYW1idXJnZXIge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5sb2dvLWNvbnRhaW5lciB7XFxyXFxuXFx0d2lkdGg6IDE1MHB4O1xcclxcblxcdGhlaWdodDogMzVweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB1cmwoLi4vaW1hZ2VzL2xvZ28uc3ZnKSBjZW50ZXIgbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG5cXHR3aWR0aDogODAlO1xcclxcblxcdG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmtzIGxpIHtcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlua3MgbGkgYSB7XFxyXFxuXFx0Y29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlua3MgbGk6bnRoLW9mLXR5cGUoMSkgYSB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkcy1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzEwcHgsIDFmcikpO1xcclxcblxcdGNvbHVtbi1nYXA6IDIwcHg7XFxyXFxuXFx0cm93LWdhcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRzLWNvbnRhaW5lciA+ICoge1xcclxcblxcdC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXHJcXG5cXHRib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDAgM3B4IDhweDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLWNvbnRhaW5lciB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5pbWctY29udGFpbmVyIGltZyB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgLmNvbnRlbnQge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgLm5hbWUge1xcclxcblxcdGNvbG9yOiBoc2woMzUsIDEwMCUsIDQ3JSk7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIC5saWtlLWJ0biB7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCAucHJlc3NlZCB7XFxyXFxuXFx0Y29sb3I6ICNmMDA7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIC5saWtlLWNvbnRhaW5lciB7XFxyXFxuXFx0d2lkdGg6IGF1dG87XFxyXFxuXFx0YWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuXFx0Zm9udC1zaXplOiAwLjdyZW07XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCBidXR0b24ge1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MSwgMTQ2LCAwLjUpO1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTEsIDE0NiwgMC4xKTtcXHJcXG5cXHRib3gtc2hhZG93OiByZ2IoMjUxLCAxNDYsIDAuMDIpIDAgMXB4IDNweCAwO1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFx0Y29sb3I6ICNmZmY7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcblxcdGZvbnQtc2l6ZTogMTZweDtcXHJcXG5cXHRmb250LXdlaWdodDogNjAwO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjI1O1xcclxcblxcdG1pbi1oZWlnaHQ6IDNyZW07XFxyXFxuXFx0cGFkZGluZzogY2FsYygwLjU3NXJlbSAtIDFweCkgY2FsYygxLjFyZW0gLSAxcHgpO1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDI1MG1zO1xcclxcblxcdHVzZXItc2VsZWN0OiBub25lO1xcclxcblxcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFx0dG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcblxcdHdpZHRoOiA0MCU7XFxyXFxuXFx0bWFyZ2luOiAyMHB4IGF1dG87XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtY29udGFpbmVyIGJ1dHRvbiB7XFxyXFxuXFx0d2lkdGg6IGF1dG87XFxyXFxuXFx0cGFkZGluZzogOHB4IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIGJ1dHRvbjpob3ZlcixcXHJcXG4uY2FyZCBidXR0b246Zm9jdXMge1xcclxcblxcdGJvcmRlci1jb2xvcjogcmdiKDI1MSwgMTQ2LCAwLjE1KTtcXHJcXG5cXHRib3gtc2hhZG93OiByZ2IoMjUxLCAxNDYsIDAuMSkgMCAycHggMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIGJ1dHRvbjphY3RpdmUge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IGhzbCgzNSwgOTklLCA0NyUpO1xcclxcblxcdGJvcmRlci1jb2xvcjogcmdiKDI1MSwgMTQ2LCAwLjE1KTtcXHJcXG5cXHRib3gtc2hhZG93OiByZ2IoMjUxLCAxNDYsIDAuMDYpIDAgMnB4IDRweDtcXHJcXG5cXHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY1KTtcXHJcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXBvcC11cCB7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXHJcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0dG9wOiA1MCU7XFxyXFxuXFx0bGVmdDogNTAlO1xcclxcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcblxcdHdpZHRoOiA5MCU7XFxyXFxuXFx0aGVpZ2h0OiA5MCU7XFxyXFxuXFx0b3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0cGFkZGluZzogMnJlbSAwO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmVjZDE7XFxyXFxuXFx0Y29sb3I6IGhzbCgwLCAwJSwgMTAlKTtcXHJcXG5cXHR6LWluZGV4OiAxMDA7XFxyXFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy9wb3BVcC1iZy5zdmcpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1wb3AtdXAge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1wb3AtdXAgLml0ZW0taW1nIHtcXHJcXG5cXHR3aWR0aDogMzAwcHg7XFxyXFxuXFx0bWFyZ2luOiAwIGF1dG8gMTBweCBhdXRvO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuXFx0aGVpZ2h0OiAzMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtcG9wLXVwIGltZyB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXBvcC11cCAuYWRkLWNvbW1lbnQtYnRuIHtcXHJcXG5cXHR3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1wb3AtdXAgLmNsb3NlLWJ0biB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHRvcDogMTBweDtcXHJcXG5cXHRyaWdodDogMTVweDtcXHJcXG5cXHRmb250LXNpemU6IDEuM3JlbTtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHRjb2xvcjogaHNsKDM1LCAxMDAlLCAzNSUpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wLXVwLWhlYWRpbmcge1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcC11cC1kZXNjcmlwdGlvbiB7XFxyXFxuXFx0d2lkdGg6IDgwJTtcXHJcXG5cXHRtYXJnaW46IDEwcHggYXV0bztcXHJcXG5cXHRsaW5lLWhlaWdodDogMS42O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1jb250YWluZXIge1xcclxcblxcdHdpZHRoOiA4MCU7XFxyXFxuXFx0bWFyZ2luOiAxMHB4IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWhlYWRpbmcge1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcdG1hcmdpbjogMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1mb3JtIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0d2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtY29udGFpbmVyIGlucHV0LFxcclxcbnRleHRhcmVhIHtcXHJcXG5cXHRwYWRkaW5nOiA3cHggMTBweDtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IGhzbCgzNSwgMTAwJSwgOTUlKTtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0dHJhbnNpdGlvbjogMC4ycyBlYXNlLWluO1xcclxcblxcdG91dGxpbmU6IG5vbmU7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Zm9jdXMsXFxyXFxudGV4dGFyZWE6Zm9jdXMge1xcclxcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGMzNTQ1O1xcclxcblxcdG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmlucHV0OnZhbGlkLFxcclxcbnRleHRhcmVhOnZhbGlkIHtcXHJcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgIzNhYzQ3ZDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZWNkMTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAwO1xcclxcblxcdHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG5cXHRtYXJnaW4tdG9wOiA1MHB4O1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY2cHgpIHtcXHJcXG5cXHRoZWFkZXIuaGVhZGVyIHtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LnBvcC11cC1kZXNjcmlwdGlvbiB7XFxyXFxuXFx0XFx0d2lkdGg6IDkwJTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmNvbW1lbnQtZm9ybSB7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5jb21tZW50LXBvcC11cCAuY2xvc2UtYnRuIHtcXHJcXG5cXHRcXHR0b3A6IDIwcHg7XFxyXFxuXFx0XFx0cmlnaHQ6IDIwcHg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5jb21tZW50LXBvcC11cCAuaXRlbS1pbWcge1xcclxcblxcdFxcdG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5sb2dvLWNvbnRhaW5lciB7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMHB4O1xcclxcblxcdFxcdGhlaWdodDogMjVweDtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kOiB1cmwoLi4vaW1hZ2VzL2xvZ28uc3ZnKSBjZW50ZXIgbm8tcmVwZWF0O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQubG9nby1jb250YWluZXIuYWN0aXZlIHtcXHJcXG5cXHRcXHR2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuXFx0XFx0dHJhbnNpdGlvbjogMHM7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5uYXYtbGlua3Mge1xcclxcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0XFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG5cXHRcXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG5cXHRcXHRtYXJnaW4tbGVmdDogMDtcXHJcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdHRvcDogMDtcXHJcXG5cXHRcXHR3aWR0aDogOTAlO1xcclxcblxcdFxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRcXHR0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xcclxcblxcdFxcdHotaW5kZXg6IDE7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5uYXYtbGlua3MuYWN0aXZlIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0cGFkZGluZy10b3A6IDUwcHg7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kOiAjZWViYWE4O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQubmF2LWl0ZW0ge1xcclxcblxcdFxcdHBhZGRpbmc6IDAuNjI1cmVtIDAuNzVyZW07XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5uYXYtbGlua3MuYWN0aXZlIC5uYXYtaXRlbSB7XFxyXFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRcXHRsaW5lLWhlaWdodDogNDRweDtcXHJcXG5cXHRcXHRjb2xvcjogI2ZmZjVlMTtcXHJcXG5cXHRcXHRwYWRkaW5nOiAxcmVtO1xcclxcblxcdFxcdG1hcmdpbjogMCAxLjVyZW07XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5oYW1idXJnZXIge1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRnYXA6IDRweDtcXHJcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcblxcdFxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRcXHRyaWdodDogM3JlbTtcXHJcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuXFx0XFx0ei1pbmRleDogMTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmJhciB7XFxyXFxuXFx0XFx0d2lkdGg6IDFyZW07XFxyXFxuXFx0XFx0Ym9yZGVyOiAxcHggc29saWQgI2FjYjdjMztcXHJcXG5cXHRcXHR0cmFuc2l0aW9uOiAwLjZzIGVhc2U7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5oYW1idXJnZXIuYWN0aXZlIC5iYXI6bnRoLW9mLXR5cGUoMSkge1xcclxcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSg2LjNweCkgcm90YXRlKDQ1ZGVnKTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmhhbWJ1cmdlci5hY3RpdmUgLmJhcjpudGgtb2YtdHlwZSgyKSB7XFxyXFxuXFx0XFx0b3BhY2l0eTogMDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmhhbWJ1cmdlci5hY3RpdmUgLmJhcjpudGgtb2YtdHlwZSgzKSB7XFxyXFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02LjNweCkgcm90YXRlKC00NWRlZyk7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5mb290ZXIge1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyoqIEBmb3JtYXQgKi9cblxuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgbG9hZERhdGFGcm9tQVBJIH0gZnJvbSAnLi9qcy9kaXNwbGF5LmpzJztcbmltcG9ydCBMaWtlIGZyb20gJy4vanMvbGlrZXMuanMnO1xuaW1wb3J0IE1lYWwgZnJvbSAnLi9qcy9tZWFscy5qcyc7XG5cbmNvbnN0IGxpa2UgPSBuZXcgTGlrZSgpO1xuY29uc3QgbWVhbCA9IG5ldyBNZWFsKCk7XG5cbndpbmRvdy5vbmxvYWQgPSBhc3luYyAoKSA9PiB7XG4gIGF3YWl0IGxvYWREYXRhRnJvbUFQSSgpO1xuICBtZWFsLmNvdW50TWVhbHMoKTtcbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKCFlLnRhcmdldC5tYXRjaGVzKCcubGlrZS1idG4nKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoZS50YXJnZXQubWF0Y2hlcygnLmxpa2UtYnRuJykpIHtcbiAgICBjb25zdCBsaWtlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlLWJ0bicpO1xuICAgIGxpa2VCdG5zLmZvckVhY2goKGJ0biwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gYnRuKSB7XG4gICAgICAgIGxpa2UudXBkYXRlTGlrZXMoaW5kZXgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59KTtcblxuY29uc3QgaHVtYmVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlcicpO1xuaHVtYmVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyJyk7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtbGlua3MnKTtcbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvLWNvbnRhaW5lcicpO1xuICBoYW1idXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gIG5hdi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgbG9nby5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbn0pO1xuIiwiLyoqIEBmb3JtYXQgKi9cblxuaW1wb3J0IHsgSU5WT0xWRU1FTlRfVVJMIH0gZnJvbSAnLi9jb25maWcuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tZW50IHtcbiAgZ2V0Q29tbWVudHMgPSBhc3luYyAobWVhbElEKSA9PiB7XG4gICAgY29uc3QgY29tbWVudHNSZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYCR7SU5WT0xWRU1FTlRfVVJMfS9jb21tZW50cz9pdGVtX2lkPSR7bWVhbElEfWAsXG4gICAgKTtcbiAgICBjb25zdCBjb21tZW50ID0gYXdhaXQgY29tbWVudHNSZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGNvbW1lbnQ7XG4gIH07XG5cbiAgYWRkQ29tbWVudCA9IGFzeW5jIChuYW1lLCBjb21tZW50LCBpZCkgPT4ge1xuICAgIGNvbnN0IHBvc3RDb21tZW50VXJsID0gYCR7SU5WT0xWRU1FTlRfVVJMfS9jb21tZW50c2A7XG4gICAgYXdhaXQgZmV0Y2gocG9zdENvbW1lbnRVcmwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgaXRlbV9pZDogaWQsXG4gICAgICAgIHVzZXJuYW1lOiBuYW1lLFxuICAgICAgICBjb21tZW50LFxuICAgICAgfSksXG4gICAgfSk7XG4gIH07XG5cbiAgY291bnRDb21tZW50cyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBhbW91bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHMtYW1vdW50Jyk7XG4gICAgY29uc3QgY29tbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudHMnKTtcbiAgICBhbW91bnQudGV4dENvbnRlbnQgPSBgKCR7Y29tbWVudHMubGVuZ3RoID8/IDB9KWA7XG4gIH07XG59XG4iLCIvKiogQGZvcm1hdCAqL1xuXG5leHBvcnQgY29uc3QgQkFTRUFQSV9VUkwgPSAnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xJztcbmV4cG9ydCBjb25zdCBJTlZPTFZFTUVOVF9VUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvc0F4UXROUDVuek9WOWwzUDZETzMnO1xuIiwiLyoqIEBmb3JtYXQgKi9cblxuaW1wb3J0IENvbW1lbnQgZnJvbSAnLi9jb21tZW50cy5qcyc7XG5pbXBvcnQgTGlrZSBmcm9tICcuL2xpa2VzLmpzJztcbmltcG9ydCBNZWFsIGZyb20gJy4vbWVhbHMuanMnO1xuXG5jb25zdCBjb21tZW50ID0gbmV3IENvbW1lbnQoKTtcbmNvbnN0IGxpa2UgPSBuZXcgTGlrZSgpO1xuY29uc3QgbWVhbCA9IG5ldyBNZWFsKCk7XG5cbmV4cG9ydCBjb25zdCBkaXNwbGF5UG9wdXAgPSBhc3luYyAobWVhbElEKSA9PiB7XG4gIGNvbnN0IG1lYWxEZXRhaWwgPSBhd2FpdCBtZWFsLmdldE1lYWxEZXRhaWxzKG1lYWxJRCk7XG4gIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgY29tbWVudC5nZXRDb21tZW50cyhtZWFsSUQpO1xuICBsZXQgaHRtbCA9IGA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXggY2xvc2UtYnRuXCI+PC9pPlxuICA8ZGl2IGNsYXNzPVwiaXRlbS1pbWdcIj5cbiAgICA8aW1nIHNyYz1cIiR7bWVhbERldGFpbC5zdHJNZWFsVGh1bWJ9XCIgYWx0PVwiXCI+XG4gIDwvZGl2PlxuICA8aDIgY2xhc3M9XCJwb3AtdXAtaGVhZGluZ1wiPiR7bWVhbERldGFpbC5zdHJNZWFsfTwvaDI+XG4gIDxkaXYgY2xhc3M9XCJwb3AtdXAtZGVzY3JpcHRpb25cIj5cbiAgJHttZWFsRGV0YWlsLnN0ckluc3RydWN0aW9uc31cbiAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbW1lbnQtY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbW1lbnQtaGVhZGluZ1wiPlxuICAgICAgQ29tbWVudHMgPHNwYW4gY2xhc3M9XCJjb21tZW50cy1hbW91bnRcIj48L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbW1lbnQtbGlzdFwiPlxuICAgIGA7XG4gIGlmIChjb21tZW50cy5sZW5ndGggPiAwKSB7XG4gICAgY29tbWVudHMuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgICAgaHRtbCArPSBgPGRpdiBjbGFzcz1cImNvbW1lbnRzXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImNvbW1lbnQtZGF0ZVwiPiR7Y29tbWVudC5jcmVhdGlvbl9kYXRlfTwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiY29tbWVudC1kZXNjcml0cGlvblwiPiR7Y29tbWVudC51c2VybmFtZX06ICR7Y29tbWVudC5jb21tZW50fTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICBgO1xuICAgIH0pO1xuICB9XG4gIGh0bWwgKz0gYDwvZGl2PlxuICA8Zm9ybSBjbGFzcz1cImNvbW1lbnQtZm9ybVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnQtaGVhZGluZ1wiPlxuICAgICAgICBBZGQgYSBjb21tZW50XG4gICAgICA8L2Rpdj5cbiAgICAgIDxpbnB1dCBjbGFzcz1cImNvbW1lbnRlci1uYW1lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiIHJlcXVpcmVkPlxuICAgICAgPHRleHRhcmVhIGNsYXNzPVwiY29tbWVudFwiIG5hbWU9XCJjb21tZW50XCIgaWQ9XCJcIiBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIiBwbGFjZWhvbGRlcj1cIllvdXIgaW5zaWdodHNcIiByZXF1aXJlZD48L3RleHRhcmVhPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJhZGQtY29tbWVudC1idG5cIj5Db21tZW50PC9idXR0b24+XG4gICAgPC9mb3JtPlxuICA8L2Rpdj5gO1xuXG4gIGNvbnN0IHBvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtcG9wLXVwJyk7XG4gIHBvcFVwLmlubmVySFRNTCA9IGh0bWw7XG4gIHBvcFVwLmNsYXNzTGlzdC5hZGQoJ3Nob3ctcG9wLXVwJyk7XG5cbiAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnRuJyk7XG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHBvcFVwLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3ctcG9wLXVwJyk7XG4gIH0pO1xuXG4gIGNvbnN0IGNvbW1lbnRlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudGVyLW5hbWUnKTtcbiAgY29uc3QgY29tbWVudFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudCcpO1xuICBjb25zdCBjb21tZW50QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1jb21tZW50LWJ0bicpO1xuICBjb25zdCBjb21tZW50bGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWxpc3QnKTtcbiAgY29tbWVudEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoY29tbWVudGVyTmFtZS52YWx1ZSAhPT0gJycgJiYgY29tbWVudFRleHQudmFsdWUgIT09ICcnKSB7XG4gICAgICBjb21tZW50XG4gICAgICAgIC5hZGRDb21tZW50KGNvbW1lbnRlck5hbWUudmFsdWUsIGNvbW1lbnRUZXh0LnZhbHVlLCBtZWFsSUQpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICBjb21tZW50bGlzdC5pbm5lckhUTUwgKz0gYDxkaXYgY2xhc3M9XCJjb21tZW50c1wiPjxzcGFuIGNsYXNzPVwiY29tbWVudC1kYXRlXCI+JHtuZXcgRGF0ZSgpXG4gICAgICAgICAgICAudG9JU09TdHJpbmcoKVxuICAgICAgICAgICAgLnNsaWNlKDAsIDEwKX08L3NwYW4+PHNwYW4gY2xhc3M9XCJjb21tZW50LWRlc2NyaXRwaW9uXCI+JHtcbiAgICAgICAgICAgIGNvbW1lbnRlck5hbWUudmFsdWVcbiAgICAgICAgICB9OiAke2NvbW1lbnRUZXh0LnZhbHVlfTwvc3Bhbj48L2Rpdj5gO1xuICAgICAgICAgIGNvbW1lbnQuY291bnRDb21tZW50cygpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGRpc3BsYXlDYXJkcyA9IChtZWFsLCBsaWtlc09iaikgPT4ge1xuICBjb25zdCBodG1sID0gYDxkaXYgY2xhc3M9XCJjYXJkXCIgIGRhdGEtaWQgPSBcIiR7bWVhbC5pZE1lYWx9XCI+XG4gICAgPGRpdiBjbGFzcz1cImltZy1jb250YWluZXJcIj5cbiAgICAgICAgPGltZyBzcmM9XCIke21lYWwuc3RyTWVhbFRodW1ifVwiIGFsdD1cIlwiPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPiR7bWVhbC5zdHJNZWFsfTwvZGl2PlxuICAgICAgPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLWhlYXJ0IGxpa2UtYnRuXCI+PC9pPlxuICAgIDwvZGl2PlxuICAgIDxzcGFuIGNsYXNzPVwibGlrZS1jb250YWluZXJcIj48c3BhbiBjbGFzcz1cImxpa2VzXCI+JHtsaWtlc09iai5saWtlc308L3NwYW4+IGxpa2VzPC9zcGFuPlxuICAgIDxidXR0b24gY2xhc3M9XCJjb21tZW50LWJ0blwiIGlkPVwiJHttZWFsLmlkTWVhbH1cIj5SZWNpcGU8L2J1dHRvbj5cbiAgICA8ZGl2IGNsYXNzPVwiY29tbWVudC1wb3AtdXBcIj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+YDtcbiAgY29uc3QgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcy1jb250YWluZXInKTtcbiAgY2FyZENvbnRhaW5lci5pbm5lckhUTUwgKz0gaHRtbDtcblxuICBjb25zdCBjb21tZW50YnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1lbnQtYnRuJyk7XG4gIGNvbW1lbnRidG4uZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0SUQgPSBidG4uZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgZGlzcGxheVBvcHVwKHRhcmdldElEKS50aGVuKCgpID0+IGNvbW1lbnQuY291bnRDb21tZW50cygpKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZERhdGFGcm9tQVBJID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBtZWFscyA9IGF3YWl0IG1lYWwuZ2V0TWVhbHMoKTtcbiAgY29uc3QgbGlrZXMgPSBhd2FpdCBsaWtlLmdldExpa2VzKCk7XG4gIG1lYWxzLmZvckVhY2goKG1lYWwsIGluZGV4KSA9PiB7XG4gICAgZGlzcGxheUNhcmRzKG1lYWwsIGxpa2VzW2luZGV4XSk7XG4gIH0pO1xufTtcbiIsIi8qKiBAZm9ybWF0ICovXG5cbmltcG9ydCB7IElOVk9MVkVNRU5UX1VSTCB9IGZyb20gJy4vY29uZmlnLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlrZSB7XG4gIGNyZWF0ZUxpa2UgPSBhc3luYyAobWVhbElEKSA9PiB7XG4gICAgYXdhaXQgZmV0Y2goYCR7SU5WT0xWRU1FTlRfVVJMfS9saWtlcy9gLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGl0ZW1faWQ6IG1lYWxJRCB9KSxcbiAgICB9KTtcbiAgfTtcblxuICBnZXRMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZUdldCA9IGF3YWl0IGZldGNoKGAke0lOVk9MVkVNRU5UX1VSTH0vbGlrZXMvYCk7XG4gICAgY29uc3QgbGlrZXMgPSBhd2FpdCByZXNwb25zZUdldC5qc29uKCk7XG4gICAgcmV0dXJuIGxpa2VzO1xuICB9O1xuXG4gIHVwZGF0ZUxpa2VzID0gYXN5bmMgKGluZGV4KSA9PiB7XG4gICAgY29uc3QgbGlrZXNBbW91bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZXMnKVtpbmRleF07XG4gICAgY29uc3QgaGVhcnRJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhLWhlYXJ0JylbaW5kZXhdO1xuICAgIGhlYXJ0SWNvbi5jbGFzc0xpc3QgPSAnZmEtc29saWQgZmEtaGVhcnQgbGlrZS1idG4gcHJlc3NlZCc7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBoZWFydEljb24uY2xhc3NMaXN0ID0gJ2ZhLXJlZ3VsYXIgZmEtaGVhcnQgbGlrZS1idG4nO1xuICAgIH0sIDEyMCk7XG4gICAgbGlrZXNBbW91bnQudGV4dENvbnRlbnQgPSBwYXJzZUludChsaWtlc0Ftb3VudC50ZXh0Q29udGVudCwgMTApICsgMTtcbiAgICBsZXQgbGlrZXNPYmogPSAoYXdhaXQgdGhpcy5nZXRMaWtlcygpKVtpbmRleF07XG4gICAgYXdhaXQgdGhpcy5jcmVhdGVMaWtlKGxpa2VzT2JqLml0ZW1faWQpO1xuICAgIGxpa2VzT2JqID0gKGF3YWl0IHRoaXMuZ2V0TGlrZXMoKSlbaW5kZXhdO1xuICB9O1xufVxuIiwiLyoqIEBmb3JtYXQgKi9cblxuaW1wb3J0IHsgQkFTRUFQSV9VUkwgfSBmcm9tICcuL2NvbmZpZy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lYWwge1xuICBnZXRNZWFscyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0JBU0VBUElfVVJMfS9maWx0ZXIucGhwP2E9Q2FuYWRpYW5gKTtcbiAgICBjb25zdCB7IG1lYWxzIH0gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIG1lYWxzO1xuICB9O1xuXG4gIGNvdW50TWVhbHMgPSAoKSA9PiB7XG4gICAgY29uc3QgYW1vdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW0tYW1vdW50Jyk7XG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpO1xuICAgIGFtb3VudC50ZXh0Q29udGVudCA9IGAoJHtpdGVtcy5sZW5ndGh9KWA7XG4gIH07XG5cbiAgZ2V0TWVhbERldGFpbHMgPSBhc3luYyAobWVhbElEKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtCQVNFQVBJX1VSTH0vbG9va3VwLnBocD9pPSR7bWVhbElEfWApO1xuICAgIGNvbnN0IG1lYWxEZXRhaWwgPSAoYXdhaXQgcmVzcG9uc2UuanNvbigpKS5tZWFsc1swXTtcbiAgICByZXR1cm4gbWVhbERldGFpbDtcbiAgfTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==