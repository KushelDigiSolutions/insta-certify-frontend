"use strict";
(() => {
var exports = {};
exports.id = 6496;
exports.ids = [6496];
exports.modules = {

/***/ 8361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utils_request_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1653);

async function handler(req, res) {
    const defaultMessage = {
        status: false,
        message: "Unauthorized."
    };
    if (req.method === "POST") {
        const productObj = [];
        if (req.body.id != "") {
            const getData = await (0,_utils_request_get__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("v2/orders/" + req.body.id + "/products?include=image");
            const resData = await getData.json();
            if (resData.length > 0) {
                await Promise.all(resData.map(async (ls)=>{
                    const getProductImage = await (0,_utils_request_get__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("v3/catalog/products/" + ls.product_id + "/images?limit=250");
                    const resImgData = await getProductImage.json();
                    productObj.push({
                        "product": ls,
                        "image": resImgData
                    });
                }));
            }
            res.status(200).json(productObj);
        } else {
            res.status(200).json(defaultMessage);
        }
    } else {
        res.status(200).json(defaultMessage);
    }
}


/***/ }),

/***/ 1653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ FetchGet)
/* harmony export */ });
async function FetchGet(apiUrl) {
    let url = {"store_url":"https://fairchild-air-force-base-store-1.mybigcommerce.com/","store_url_ecommerce":"https://ecommerce-1517983.mybigcommerce.com/","api_url":"https://api.bigcommerce.com/stores/suzeuussqe/","store_hash":"suzeuussqe","token":"b4rd5x5aimj4zwv6arra5bdle8qoi8w","client_id":"pysegvp5x9ttzevnat59h6ean0hmvy3","client_secret":"9ceed2d8e7edc11e7a2e53e6f72e9f48d88c50f5a11771d8fc0a83fefc7b438b","channel_ecommerce":1517983}.api_url + apiUrl;
    let options = {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-Auth-Token": {"store_url":"https://fairchild-air-force-base-store-1.mybigcommerce.com/","store_url_ecommerce":"https://ecommerce-1517983.mybigcommerce.com/","api_url":"https://api.bigcommerce.com/stores/suzeuussqe/","store_hash":"suzeuussqe","token":"b4rd5x5aimj4zwv6arra5bdle8qoi8w","client_id":"pysegvp5x9ttzevnat59h6ean0hmvy3","client_secret":"9ceed2d8e7edc11e7a2e53e6f72e9f48d88c50f5a11771d8fc0a83fefc7b438b","channel_ecommerce":1517983}.token
        }
    };
    const getData = await fetch(url, options);
    return getData;
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8361));
module.exports = __webpack_exports__;

})();