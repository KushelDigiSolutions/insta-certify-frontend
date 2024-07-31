"use strict";
exports.id = 4910;
exports.ids = [4910];
exports.modules = {

/***/ 4910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   get_currencies: () => (/* binding */ get_currencies),
/* harmony export */   get_token: () => (/* binding */ get_token),
/* harmony export */   get_token_default: () => (/* binding */ get_token_default)
/* harmony export */ });
const get_token_default = async ()=>{
    let date = new Date();
    date.setDate(date.getDate() + 7);
    const unix_timestamp = Math.floor(date.getTime() / 1000);
    var options = {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "x-auth-token": {"store_url":"https://fairchild-air-force-base-store-1.mybigcommerce.com/","store_url_ecommerce":"https://ecommerce-1517983.mybigcommerce.com/","api_url":"https://api.bigcommerce.com/stores/suzeuussqe/","store_hash":"suzeuussqe","token":"b4rd5x5aimj4zwv6arra5bdle8qoi8w","client_id":"pysegvp5x9ttzevnat59h6ean0hmvy3","client_secret":"9ceed2d8e7edc11e7a2e53e6f72e9f48d88c50f5a11771d8fc0a83fefc7b438b","channel_ecommerce":1517983}.token
        },
        body: JSON.stringify({
            channel_id: 1,
            expires_at: unix_timestamp
        }),
        json: true
    };
    const end_point = "https://api.bigcommerce.com/stores/" + {"store_url":"https://fairchild-air-force-base-store-1.mybigcommerce.com/","store_url_ecommerce":"https://ecommerce-1517983.mybigcommerce.com/","api_url":"https://api.bigcommerce.com/stores/suzeuussqe/","store_hash":"suzeuussqe","token":"b4rd5x5aimj4zwv6arra5bdle8qoi8w","client_id":"pysegvp5x9ttzevnat59h6ean0hmvy3","client_secret":"9ceed2d8e7edc11e7a2e53e6f72e9f48d88c50f5a11771d8fc0a83fefc7b438b","channel_ecommerce":1517983}.store_hash + "/v3/storefront/api-token";
    const token = await fetch(end_point, options).then((response)=>response.json());
    return token.data.token;
};
const get_token = async ()=>{
    let date = new Date();
    date.setDate(date.getDate() + 7);
    const unix_timestamp = Math.floor(date.getTime() / 1000);
    var options = {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "x-auth-token": {"store_url":"https://fairchild-air-force-base-store-1.mybigcommerce.com/","store_url_ecommerce":"https://ecommerce-1517983.mybigcommerce.com/","api_url":"https://api.bigcommerce.com/stores/suzeuussqe/","store_hash":"suzeuussqe","token":"b4rd5x5aimj4zwv6arra5bdle8qoi8w","client_id":"pysegvp5x9ttzevnat59h6ean0hmvy3","client_secret":"9ceed2d8e7edc11e7a2e53e6f72e9f48d88c50f5a11771d8fc0a83fefc7b438b","channel_ecommerce":1517983}.token
        },
        body: JSON.stringify({
            channel_id: {"store_url":"https://fairchild-air-force-base-store-1.mybigcommerce.com/","store_url_ecommerce":"https://ecommerce-1517983.mybigcommerce.com/","api_url":"https://api.bigcommerce.com/stores/suzeuussqe/","store_hash":"suzeuussqe","token":"b4rd5x5aimj4zwv6arra5bdle8qoi8w","client_id":"pysegvp5x9ttzevnat59h6ean0hmvy3","client_secret":"9ceed2d8e7edc11e7a2e53e6f72e9f48d88c50f5a11771d8fc0a83fefc7b438b","channel_ecommerce":1517983}.channel_ecommerce,
            expires_at: unix_timestamp
        }),
        json: true
    };
    const end_point = "https://api.bigcommerce.com/stores/" + {"store_url":"https://fairchild-air-force-base-store-1.mybigcommerce.com/","store_url_ecommerce":"https://ecommerce-1517983.mybigcommerce.com/","api_url":"https://api.bigcommerce.com/stores/suzeuussqe/","store_hash":"suzeuussqe","token":"b4rd5x5aimj4zwv6arra5bdle8qoi8w","client_id":"pysegvp5x9ttzevnat59h6ean0hmvy3","client_secret":"9ceed2d8e7edc11e7a2e53e6f72e9f48d88c50f5a11771d8fc0a83fefc7b438b","channel_ecommerce":1517983}.store_hash + "/v3/storefront/api-token";
    const token = await fetch(end_point, options).then((response)=>response.json());
    return token.data.token;
};
//get_currencies
const get_currencies = async (store, locale)=>{
    const end_point_cur = "https://api.bigcommerce.com/stores/" + {"store_url":"https://fairchild-air-force-base-store-1.mybigcommerce.com/","store_url_ecommerce":"https://ecommerce-1517983.mybigcommerce.com/","api_url":"https://api.bigcommerce.com/stores/suzeuussqe/","store_hash":"suzeuussqe","token":"b4rd5x5aimj4zwv6arra5bdle8qoi8w","client_id":"pysegvp5x9ttzevnat59h6ean0hmvy3","client_secret":"9ceed2d8e7edc11e7a2e53e6f72e9f48d88c50f5a11771d8fc0a83fefc7b438b","channel_ecommerce":1517983}.store_hash + "/v2/currencies";
    const options_cur = {
        "method": "GET",
        "headers": {
            "accept": "application/json",
            "Content-Type": "application/json",
            "x-auth-token": {"store_url":"https://fairchild-air-force-base-store-1.mybigcommerce.com/","store_url_ecommerce":"https://ecommerce-1517983.mybigcommerce.com/","api_url":"https://api.bigcommerce.com/stores/suzeuussqe/","store_hash":"suzeuussqe","token":"b4rd5x5aimj4zwv6arra5bdle8qoi8w","client_id":"pysegvp5x9ttzevnat59h6ean0hmvy3","client_secret":"9ceed2d8e7edc11e7a2e53e6f72e9f48d88c50f5a11771d8fc0a83fefc7b438b","channel_ecommerce":1517983}.token
        }
    };
    const cur_res = await fetch(end_point_cur, options_cur).then((response)=>response.json()).then((json)=>{
        return json;
    }).catch((error)=>{
        console.error(error);
    });
    let currency = [];
    for(let cs = 0; cs < cur_res.length; cs++){
        const cur_ele = cur_res[cs];
        const id = cur_ele["id"];
        const name = cur_ele["name"];
        const is_default = cur_ele["is_default"];
        const isdefault = cur_ele["is_default"] == true ? "y" : "n";
        const currency_code = cur_ele["currency_code"];
        const token = cur_ele["token"];
        const rate = cur_ele["currency_exchange_rate"];
        const in_currency_locale = name.split("@");
        if (in_currency_locale.length > 0) {
            const arr_currency_locale = in_currency_locale[1].split(",");
            if (arr_currency_locale.indexOf(locale) != "-1") {
                currency = {
                    "is_default": isdefault,
                    "id": id,
                    "currency_code": currency_code,
                    "token": token,
                    "rate": rate
                };
            }
        }
    }
    return currency;
};


/***/ })

};
;