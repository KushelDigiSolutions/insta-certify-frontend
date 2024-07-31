"use strict";
(() => {
var exports = {};
exports.id = 3448;
exports.ids = [3448];
exports.modules = {

/***/ 6345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utils_request_put__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5884);

async function handler(req, res) {
    const defaultMessage = {
        status: false,
        message: "Unauthorized."
    };
    if (req.method === "POST") {
        if (req.body.id > 0) {
            try {
                const createAddress = await (0,_utils_request_put__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(`v3/customers/addresses`, JSON.stringify([
                    req.body
                ]));
                const resAddress = await createAddress.json();
                res.status(200).json(resAddress);
            } catch (error) {
                res.status(200).json(defaultMessage);
            }
        } else {
            res.status(200).json(defaultMessage);
        }
    } else {
        res.status(200).json(defaultMessage);
    }
}


/***/ }),

/***/ 5884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ FetchPut)
/* harmony export */ });
async function FetchPut(apiUrl, data) {
    let url = {"store_url":"https://fairchild-air-force-base-store-1.mybigcommerce.com/","store_url_ecommerce":"https://ecommerce-1517983.mybigcommerce.com/","api_url":"https://api.bigcommerce.com/stores/suzeuussqe/","store_hash":"suzeuussqe","token":"b4rd5x5aimj4zwv6arra5bdle8qoi8w","client_id":"pysegvp5x9ttzevnat59h6ean0hmvy3","client_secret":"9ceed2d8e7edc11e7a2e53e6f72e9f48d88c50f5a11771d8fc0a83fefc7b438b","channel_ecommerce":1517983}.api_url + apiUrl;
    let options = {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-Auth-Token": {"store_url":"https://fairchild-air-force-base-store-1.mybigcommerce.com/","store_url_ecommerce":"https://ecommerce-1517983.mybigcommerce.com/","api_url":"https://api.bigcommerce.com/stores/suzeuussqe/","store_hash":"suzeuussqe","token":"b4rd5x5aimj4zwv6arra5bdle8qoi8w","client_id":"pysegvp5x9ttzevnat59h6ean0hmvy3","client_secret":"9ceed2d8e7edc11e7a2e53e6f72e9f48d88c50f5a11771d8fc0a83fefc7b438b","channel_ecommerce":1517983}.token
        },
        body: data
    };
    const postData = await fetch(url, options);
    return postData;
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6345));
module.exports = __webpack_exports__;

})();