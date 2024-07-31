"use strict";
exports.id = 7376;
exports.ids = [7376];
exports.modules = {

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


/***/ }),

/***/ 9993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ RequireAuthentication)
/* harmony export */ });
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);

async function RequireAuthentication(context, cb) {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)(context);
    if (!session) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            },
            props: {}
        };
    }
    return cb(session);
}


/***/ })

};
;