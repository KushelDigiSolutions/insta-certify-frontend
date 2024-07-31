"use strict";
(() => {
var exports = {};
exports.id = 8634;
exports.ids = [8634];
exports.modules = {

/***/ 9404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utils_request_delete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9153);

async function handler(req, res) {
    const defaultMessage = {
        status: false,
        message: "Unauthorized."
    };
    if (req.method === "POST") {
        if (req.body.cart_id != "") {
            const cart_id = req.body.cart_id;
            const item_id = req.body.item_id;
            const total_item = req.body.total_item;
            if (total_item === 1) {
                await (0,_utils_request_delete__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("v3/carts/" + cart_id);
                res.status(200).json({
                    status: 404
                });
            } else {
                const deleteCartItems = await (0,_utils_request_delete__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("v3/carts/" + cart_id + "/items/" + item_id);
                const resCart = await deleteCartItems.json();
                res.status(200).json(resCart);
            }
        } else {
            res.status(200).json(defaultMessage);
        }
    } else {
        res.status(200).json(defaultMessage);
    }
}


/***/ }),

/***/ 9153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ FetchDelete)
/* harmony export */ });
async function FetchDelete(apiUrl, data) {
    let url = {"store_url":"https://fairchild-air-force-base-store-1.mybigcommerce.com/","store_url_ecommerce":"https://ecommerce-1517983.mybigcommerce.com/","api_url":"https://api.bigcommerce.com/stores/suzeuussqe/","store_hash":"suzeuussqe","token":"b4rd5x5aimj4zwv6arra5bdle8qoi8w","client_id":"pysegvp5x9ttzevnat59h6ean0hmvy3","client_secret":"9ceed2d8e7edc11e7a2e53e6f72e9f48d88c50f5a11771d8fc0a83fefc7b438b","channel_ecommerce":1517983}.api_url + apiUrl;
    let options = {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "X-Auth-Token": {"store_url":"https://fairchild-air-force-base-store-1.mybigcommerce.com/","store_url_ecommerce":"https://ecommerce-1517983.mybigcommerce.com/","api_url":"https://api.bigcommerce.com/stores/suzeuussqe/","store_hash":"suzeuussqe","token":"b4rd5x5aimj4zwv6arra5bdle8qoi8w","client_id":"pysegvp5x9ttzevnat59h6ean0hmvy3","client_secret":"9ceed2d8e7edc11e7a2e53e6f72e9f48d88c50f5a11771d8fc0a83fefc7b438b","channel_ecommerce":1517983}.token
        }
    };
    const deleteData = await fetch(url, options);
    return deleteData;
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9404));
module.exports = __webpack_exports__;

})();