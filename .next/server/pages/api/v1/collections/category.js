"use strict";
(() => {
var exports = {};
exports.id = 5507;
exports.ids = [5507];
exports.modules = {

/***/ 2258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4910);

async function handler(req, res) {
    const { id } = req.body;
    const finalId = id?.split(",");
    var innerQuery = "";
    finalId?.length > 0 && finalId?.map((ls, i)=>{
        innerQuery += `
        item_${i} : category(entityId: ${ls}) {
          entityId
          name
          path
          defaultImage {
            urlOriginal
          }
          description
          seo{
            pageTitle
            metaDescription
          }
          products(first:8) {
            edges {
              node {
                entityId
                name
                sku
                path
                defaultImage {
                  url(width: 300, height: 300)
                }
                prices {
                  basePrice {
                    currencyCode
                    value
                  }
                  priceRange {
                    min {
                      currencyCode
                      value
                    }
                    max {
                      currencyCode
                      value
                    }
                  }
                  salePrice {
                    currencyCode
                    value
                  }
                  retailPrice {
                    currencyCode
                    value
                  }
                  saved {
                    currencyCode
                    value
                  }
                }
              }
            }
          }
        }
      `;
    });
    try {
        //get token
        const store_token = await (0,_config__WEBPACK_IMPORTED_MODULE_0__.get_token)();
        const get_query = `
        query LookUpgetproducts {
          site { ${innerQuery} }
        }
      `;
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
var __webpack_exports__ = __webpack_require__.X(0, [4910], () => (__webpack_exec__(2258)));
module.exports = __webpack_exports__;

})();