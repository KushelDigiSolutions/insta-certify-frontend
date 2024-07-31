"use strict";
exports.id = 3154;
exports.ids = [3154];
exports.modules = {

/***/ 9524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ EventDetMinus)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function EventDetMinus() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "34",
        height: "35",
        viewBox: "0 0 34 35",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                x: "0.5",
                y: "1",
                width: "33",
                height: "33",
                rx: "5.5",
                fill: "#F3F6F8",
                stroke: "#E1E3EA"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M24.2853 16.2852V18.7137H9.71387V16.2852H24.2853Z",
                fill: "#7E8299"
            })
        ]
    });
}


/***/ }),

/***/ 1890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ EventDetPlus)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function EventDetPlus() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "34",
        height: "35",
        viewBox: "0 0 34 35",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                y: "0.5",
                width: "34",
                height: "34",
                rx: "6",
                fill: "#F3F6F8",
                stroke: "#E1E3EA"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M16.9318 24.2067V10.2148H19.7157V24.2067H16.9318ZM11.333 18.5976V15.8137H25.3249V18.5976H11.333Z",
                fill: "#7E8299"
            })
        ]
    });
}


/***/ }),

/***/ 4312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ GlobalHeaderFooter)
/* harmony export */ });
async function GlobalHeaderFooter(context, cb) {
    try {
        const contentFetch = await fetch({"path":"https://demoadmin.mwrweb.com/","api":"https://demoadmin.mwrweb.com/api/","jwt_secret":"UOUkeFnqauTf3qw0Hy6pv1JQq572l82gRBgnNbemPEjV2bTG2Bg0A3avm1svL9gs"}.api + "homepage");
        const contentDetial = await contentFetch.json();
        const data = {
            header: {
                settings: contentDetial?.header,
                navigation: contentDetial?.navigation
            },
            footer: contentDetial?.footer
        };
        return data;
    } catch (error) {
        const data = {
            header: false,
            footer: false
        };
        return data;
    }
}


/***/ })

};
;