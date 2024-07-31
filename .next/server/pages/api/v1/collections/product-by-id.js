"use strict";
(() => {
var exports = {};
exports.id = 5442;
exports.ids = [5442];
exports.modules = {

/***/ 4404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4910);

async function handler(req, res) {
    const { id } = req.body;
    try {
        //get token
        const store_token = await (0,_config__WEBPACK_IMPORTED_MODULE_0__.get_token_default)();
        const get_query = `query productById {
        site {
          product(entityId:${id}) {
            entityId
            name
            sku
            path
            productOptions(first: 50) {
              edges {
                node {
                  entityId
                  displayName
                  isRequired
                  isVariantOption
                  __typename
                  ... on CheckboxOption {
                    checkedByDefault
                    label
                    checkedOptionValueEntityId
                    uncheckedOptionValueEntityId
                    entityId
                    displayName
                    isVariantOption
                    isRequired
                  }
                  ... on DateFieldOption {
                    defaultValue
                    earliest
                    latest
                    limitDateBy
                    entityId
                    displayName
                    isRequired
                  }
                  ... on FileUploadFieldOption {
                    maxFileSize
                    fileTypes
                    entityId
                    displayName
                    isRequired
                    isVariantOption
                    __typename
                  }
                  ... on MultiLineTextFieldOption {
                    newName: defaultValue
                    minLength
                    maxLength
                    maxLines
                    entityId
                    displayName
                    isRequired
                  }
                  ... on MultipleChoiceOption {
                    displayStyle
                    entityId
                    displayName
                    isRequired
                    isVariantOption
                    values(first: 50) {
                      edges {
                        node {
                          entityId
                          label
                          isDefault
                          isSelected
                          ... on SwatchOptionValue {
                            hexColors
                            imageUrl(width: 200)
                          }
                        }
                      }
                    }
                  }
                  ... on NumberFieldOption {
                    newNumber: defaultValue
                    lowest
                    highest
                    isIntegerOnly
                    limitNumberBy
                    entityId
                    displayName
                    isRequired
                    isVariantOption
                    __typename
                  }
                  ... on TextFieldOption {
                    newText: defaultValue
                    minLength
                    maxLength
                    entityId
                    displayName
                    isRequired
                    isVariantOption
                    __typename
                  }
                }
              }
            }
            description
            images {
              edges {
                node {
                  url960wide: url(width: 960)
                  altText
                  isDefault
                }
              }
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
            customFields {
              edges {
                node {
                  entityId
                  name
                  value
                }
              }
            }
            brand {
              name
            }
            relatedProducts {
              edges {
                node {
                  id
                  sku
                  path
                  name
                  defaultImage {
                    url(width: 300, height: 300)
                  }
                  prices {
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
                    basePrice {
                      currencyCode
                      value
                    }
                    salePrice {
                      currencyCode
                      value
                    }
                  }
                }
              }
            }
            seo {
              pageTitle
              metaDescription
            }
          }
        }
      }`;
        const end_point = {"store_url":"https://fairchild-air-force-base-store-1.mybigcommerce.com/","store_url_ecommerce":"https://ecommerce-1517983.mybigcommerce.com/","api_url":"https://api.bigcommerce.com/stores/suzeuussqe/","store_hash":"suzeuussqe","token":"b4rd5x5aimj4zwv6arra5bdle8qoi8w","client_id":"pysegvp5x9ttzevnat59h6ean0hmvy3","client_secret":"9ceed2d8e7edc11e7a2e53e6f72e9f48d88c50f5a11771d8fc0a83fefc7b438b","channel_ecommerce":1517983}.store_url + "graphql";
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
} // variants(first: 250) {
 //   pageInfo {
 //     startCursor
 //     endCursor
 //     hasNextPage
 //     hasPreviousPage
 //   }
 //   edges {
 //     node {
 //       sku
 //       isPurchasable
 //       inventory {
 //         isInStock
 //       }
 //       defaultImage {
 //         urlOriginal
 //       }
 //       prices {
 //         price {
 //           currencyCode
 //           value
 //         }
 //       }
 //     }
 //   }
 // }


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4910], () => (__webpack_exec__(4404)));
module.exports = __webpack_exports__;

})();