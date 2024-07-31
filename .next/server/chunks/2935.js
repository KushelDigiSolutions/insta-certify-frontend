"use strict";
exports.id = 2935;
exports.ids = [2935];
exports.modules = {

/***/ 943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ GlobalSearch)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function GlobalSearch() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M28.7078 27.2928L22.449 21.0353C24.2631 18.8574 25.1676 16.064 24.9746 13.2362C24.7815 10.4084 23.5057 7.76385 21.4125 5.85275C19.3193 3.94164 16.5698 2.9111 13.7362 2.9755C10.9025 3.0399 8.20274 4.19429 6.19851 6.19851C4.19429 8.20274 3.0399 10.9025 2.9755 13.7362C2.9111 16.5698 3.94164 19.3193 5.85275 21.4125C7.76385 23.5057 10.4084 24.7815 13.2362 24.9746C16.064 25.1676 18.8574 24.2631 21.0353 22.449L27.2928 28.7078C27.3857 28.8007 27.496 28.8744 27.6174 28.9247C27.7388 28.975 27.8689 29.0008 28.0003 29.0008C28.1317 29.0008 28.2618 28.975 28.3832 28.9247C28.5046 28.8744 28.6149 28.8007 28.7078 28.7078C28.8007 28.6149 28.8744 28.5046 28.9247 28.3832C28.975 28.2618 29.0008 28.1317 29.0008 28.0003C29.0008 27.8689 28.975 27.7388 28.9247 27.6174C28.8744 27.496 28.8007 27.3857 28.7078 27.2928ZM5.00029 14.0003C5.00029 12.2203 5.52813 10.4802 6.51706 9.00015C7.50599 7.52011 8.9116 6.36656 10.5561 5.68537C12.2007 5.00418 14.0103 4.82595 15.7561 5.17322C17.5019 5.52048 19.1056 6.37765 20.3642 7.63632C21.6229 8.895 22.4801 10.4986 22.8274 12.2445C23.1746 13.9903 22.9964 15.7999 22.3152 17.4444C21.634 19.089 20.4805 20.4946 19.0004 21.4835C17.5204 22.4724 15.7803 23.0003 14.0003 23.0003C11.6141 22.9976 9.3265 22.0486 7.63925 20.3613C5.95199 18.6741 5.00293 16.3864 5.00029 14.0003Z",
            fill: "#F3F6F8"
        })
    });
}


/***/ }),

/***/ 5243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useBodyOutsideClick = (ref, callback)=>{
    const handleClick = (e)=>{
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        document.addEventListener("click", handleClick);
        return ()=>{
            document.removeEventListener("click", handleClick);
        };
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useBodyOutsideClick);


/***/ })

};
;