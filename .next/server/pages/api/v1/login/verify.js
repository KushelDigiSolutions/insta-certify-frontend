"use strict";
(() => {
var exports = {};
exports.id = 5208;
exports.ids = [5208];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 5828:
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),

/***/ 5386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const jwt = __webpack_require__(9344);
const { v4: uuidv4 } = __webpack_require__(5828);
async function handler(req, res) {
    if (req.method === "POST" && req.body.bcType > 0) {
        let return_array = {
            "status": false,
            "message": "Authentication failed."
        };
        const customer_id = req.body.bcType;
        function getLoginUrl(customerId) {
            const dateCreated_eu = Math.round(new Date().getTime() / 1000);
            const payload = {
                "iss": {"store_url":"https://fairchild-air-force-base-store-1.mybigcommerce.com/","store_url_ecommerce":"https://ecommerce-1517983.mybigcommerce.com/","api_url":"https://api.bigcommerce.com/stores/suzeuussqe/","store_hash":"suzeuussqe","token":"b4rd5x5aimj4zwv6arra5bdle8qoi8w","client_id":"pysegvp5x9ttzevnat59h6ean0hmvy3","client_secret":"9ceed2d8e7edc11e7a2e53e6f72e9f48d88c50f5a11771d8fc0a83fefc7b438b","channel_ecommerce":1517983}.client_id,
                "iat": dateCreated_eu,
                "jti": uuidv4(),
                "operation": "customer_login",
                "store_hash": {"store_url":"https://fairchild-air-force-base-store-1.mybigcommerce.com/","store_url_ecommerce":"https://ecommerce-1517983.mybigcommerce.com/","api_url":"https://api.bigcommerce.com/stores/suzeuussqe/","store_hash":"suzeuussqe","token":"b4rd5x5aimj4zwv6arra5bdle8qoi8w","client_id":"pysegvp5x9ttzevnat59h6ean0hmvy3","client_secret":"9ceed2d8e7edc11e7a2e53e6f72e9f48d88c50f5a11771d8fc0a83fefc7b438b","channel_ecommerce":1517983}.store_hash,
                "customer_id": customerId,
                "redirect_to": {"store_url":"https://fairchild-air-force-base-store-1.mybigcommerce.com/","store_url_ecommerce":"https://ecommerce-1517983.mybigcommerce.com/","api_url":"https://api.bigcommerce.com/stores/suzeuussqe/","store_hash":"suzeuussqe","token":"b4rd5x5aimj4zwv6arra5bdle8qoi8w","client_id":"pysegvp5x9ttzevnat59h6ean0hmvy3","client_secret":"9ceed2d8e7edc11e7a2e53e6f72e9f48d88c50f5a11771d8fc0a83fefc7b438b","channel_ecommerce":1517983}.store_url + "checkout"
            };
            let token = jwt.sign(payload, {"store_url":"https://fairchild-air-force-base-store-1.mybigcommerce.com/","store_url_ecommerce":"https://ecommerce-1517983.mybigcommerce.com/","api_url":"https://api.bigcommerce.com/stores/suzeuussqe/","store_hash":"suzeuussqe","token":"b4rd5x5aimj4zwv6arra5bdle8qoi8w","client_id":"pysegvp5x9ttzevnat59h6ean0hmvy3","client_secret":"9ceed2d8e7edc11e7a2e53e6f72e9f48d88c50f5a11771d8fc0a83fefc7b438b","channel_ecommerce":1517983}.client_secret, {
                algorithm: "HS256"
            });
            return `${{"store_url":"https://fairchild-air-force-base-store-1.mybigcommerce.com/","store_url_ecommerce":"https://ecommerce-1517983.mybigcommerce.com/","api_url":"https://api.bigcommerce.com/stores/suzeuussqe/","store_hash":"suzeuussqe","token":"b4rd5x5aimj4zwv6arra5bdle8qoi8w","client_id":"pysegvp5x9ttzevnat59h6ean0hmvy3","client_secret":"9ceed2d8e7edc11e7a2e53e6f72e9f48d88c50f5a11771d8fc0a83fefc7b438b","channel_ecommerce":1517983}.store_url}login/token/${token}`;
        }
        ;
        //Customer login jwt
        const login_url = getLoginUrl(customer_id);
        return_array = {
            "status": true,
            "verfy_url": login_url
        };
        res.status(200).json(return_array);
    } else {
        res.status(404).json({
            "status": false,
            "verfy_url": null
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5386));
module.exports = __webpack_exports__;

})();