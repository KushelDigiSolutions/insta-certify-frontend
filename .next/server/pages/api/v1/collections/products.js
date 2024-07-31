"use strict";
(() => {
var exports = {};
exports.id = 4620;
exports.ids = [4620];
exports.modules = {

/***/ 7506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4910);

async function handler(req, res) {
    const per_page_recode = 9;
    const { route, sort, page } = req.body;
    let page_after = "";
    if (typeof page != "undefined") {
        page_after = `, after:"${page}"`;
    }
    try {
        //sortBy
        ////A_TO_Z
        ////BEST_REVIEWED
        ////BEST_SELLING
        ////DEFAULT
        ////FEATURED
        ////HIGHEST_PRICE
        ////BEST_REVIEWED
        ////LOWEST_PRICE
        ////NEWEST
        ////Z_TO_A
        //get token
        const store_token = await (0,_config__WEBPACK_IMPORTED_MODULE_0__.get_token)();
        const get_query = `query LookUpUrl {
        site {
          route(path: "/${route}/") {
            node {
              ... on Category {
                name
                description
                defaultImage{ urlOriginal }
                seo{
                  pageTitle
                  metaDescription
                }
                products(sortBy:${sort.toUpperCase()}, first:${per_page_recode} ${page_after}){
                  collectionInfo{ totalItems }
                  pageInfo{
                    hasNextPage
                    hasPreviousPage
                    startCursor
                    endCursor
                  }
                  edges{
                    node{
                      entityId
                      sku
                      path
                      name
                      availabilityV2{
                        status
                        description
                      }
                      prices{
                        priceRange{ min { currencyCode value } max { currencyCode value } }
                        basePrice{ currencyCode value }
                        salePrice{ currencyCode value }
                      }
                      defaultImage{
                       url(width:300, height:300)
                        altText
                        isDefault 
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }`;
        const end_point = {"store_url":"https://fairchild-air-force-base-store-1.mybigcommerce.com/","store_url_ecommerce":"https://ecommerce-1517983.mybigcommerce.com/","api_url":"https://api.bigcommerce.com/stores/suzeuussqe/","store_hash":"suzeuussqe","token":"b4rd5x5aimj4zwv6arra5bdle8qoi8w","client_id":"pysegvp5x9ttzevnat59h6ean0hmvy3","client_secret":"9ceed2d8e7edc11e7a2e53e6f72e9f48d88c50f5a11771d8fc0a83fefc7b438b","channel_ecommerce":1517983}.store_url_ecommerce + "graphql";
        var options = {
            "method": "POST",
            "headers": {
                "Authorization": `Bearer ${store_token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                query: get_query,
                variables: {}
            })
        };
        const getData = await fetch(end_point, options).then((response)=>response.json());
        res.status(200).json(getData);
    } catch (error) {
        res.status(404).json(error);
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4910], () => (__webpack_exec__(7506)));
module.exports = __webpack_exports__;

})();