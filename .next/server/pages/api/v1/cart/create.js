"use strict";
(() => {
var exports = {};
exports.id = 3666;
exports.ids = [3666];
exports.modules = {

/***/ 6889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utils_request_post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6234);

async function handler(req, res) {
    const defaultMessage = {
        status: false,
        message: "Unauthorized."
    };
    if (req.method === "POST") {
        if (req.body.length > 0) {
            const customer_id = req.body[0].customer_id;
            const nx_cart_id = req.body[0].nx_cart_id;
            let channel_id = req.body[0].channel_id;
            const products = req.body[1].products;
            if (typeof channel_id == "undefined" && channel_id == null) {
                channel_id = 1;
            }
            if (products.length > 0) {
                const line_items = [];
                products.map((ls)=>{
                    if (typeof ls.option != "undefined") {
                        line_items.push({
                            "quantity": ls.quantity,
                            "product_id": ls.product_id,
                            "option_selections": JSON.parse(ls.option)
                        });
                    } else {
                        line_items.push({
                            "quantity": ls.quantity,
                            "product_id": ls.product_id
                        });
                    }
                });
                if (nx_cart_id === 0) {
                    //Create a Cart
                    const cartData = {
                        "channel_id": channel_id,
                        "customer_id": customer_id,
                        "line_items": line_items
                    };
                    const createCart = await (0,_utils_request_post__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("v3/carts", JSON.stringify(cartData));
                    const resCart = await createCart.json();
                    res.status(200).json(resCart);
                } else {
                    //Add Cart Line Items
                    const updateCartData = {
                        "line_items": line_items
                    };
                    const createCart = await (0,_utils_request_post__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(`v3/carts/${nx_cart_id}/items`, JSON.stringify(updateCartData));
                    const resCart = await createCart.json();
                    res.status(200).json(resCart);
                }
            } else {
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

/***/ 6234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ FetchPost)
/* harmony export */ });
async function FetchPost(apiUrl, data) {
    let url = {"store_url":"https://fairchild-air-force-base-store-1.mybigcommerce.com/","store_url_ecommerce":"https://ecommerce-1517983.mybigcommerce.com/","api_url":"https://api.bigcommerce.com/stores/suzeuussqe/","store_hash":"suzeuussqe","token":"b4rd5x5aimj4zwv6arra5bdle8qoi8w","client_id":"pysegvp5x9ttzevnat59h6ean0hmvy3","client_secret":"9ceed2d8e7edc11e7a2e53e6f72e9f48d88c50f5a11771d8fc0a83fefc7b438b","channel_ecommerce":1517983}.api_url + apiUrl;
    let options = {
        method: "POST",
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
var __webpack_exports__ = (__webpack_exec__(6889));
module.exports = __webpack_exports__;

})();