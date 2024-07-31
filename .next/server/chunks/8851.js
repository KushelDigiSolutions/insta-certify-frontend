exports.id = 8851;
exports.ids = [8851];
exports.modules = {

/***/ 2726:
/***/ ((module) => {

// Exports
module.exports = {
	"divRow": "shoppingCards_divRow__WykJG",
	"d-flex": "shoppingCards_d-flex__RzETi",
	"d-flex-between": "shoppingCards_d-flex-between__uQClV",
	"eleLazyLoad": "shoppingCards_eleLazyLoad___t1t9",
	"placeHolderShimmer": "shoppingCards_placeHolderShimmer__EwWcC",
	"shoppingCards": "shoppingCards_shoppingCards__LKtt3",
	"shoppingCard": "shoppingCards_shoppingCard__tiu_X",
	"imageContainer": "shoppingCards_imageContainer__wQmt7",
	"comingSoonImg": "shoppingCards_comingSoonImg__8k1Ty",
	"cardsBody": "shoppingCards_cardsBody___yl8a",
	"title": "shoppingCards_title__i_zKx",
	"info": "shoppingCards_info__kSFvO",
	"priceInfo": "shoppingCards_priceInfo___0Bf8",
	"price": "shoppingCards_price__l1_Ad",
	"priceSale": "shoppingCards_priceSale__YzYRI",
	"shoppingCardsSlider": "shoppingCards_shoppingCardsSlider___u3h0"
};


/***/ }),

/***/ 8851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ShoppingCards)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_css_shoppingCards_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2726);
/* harmony import */ var _pages_css_shoppingCards_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pages_css_shoppingCards_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);





function ShoppingCards(props) {
    const parentPage = props.parentPage;
    let shoppingCardsSlider = "";
    if (parentPage == "slider") {
        shoppingCardsSlider = (_pages_css_shoppingCards_module_scss__WEBPACK_IMPORTED_MODULE_4___default().shoppingCardsSlider);
    }
    if (props.items != null) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_pages_css_shoppingCards_module_scss__WEBPACK_IMPORTED_MODULE_4___default().shoppingCards) + " " + shoppingCardsSlider,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_pages_css_shoppingCards_module_scss__WEBPACK_IMPORTED_MODULE_4___default().shoppingCard),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_pages_css_shoppingCards_module_scss__WEBPACK_IMPORTED_MODULE_4___default().imageContainer),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/shopping" + props.items.path,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                className: `${(_pages_css_shoppingCards_module_scss__WEBPACK_IMPORTED_MODULE_4___default().card_image)} ${props.items?.defaultImage == null ? (_pages_css_shoppingCards_module_scss__WEBPACK_IMPORTED_MODULE_4___default().comingSoonImg) : ""}`,
                                src: props.items?.defaultImage == null ? "https://cdn11.bigcommerce.com/s-suzeuussqe/images/stencil/original/image-manager/coming-soon.png" : props.items?.defaultImage?.url,
                                width: "304",
                                height: "304",
                                alt: props.items?.defaultImage?.altText != null ? props.items?.defaultImage?.altText : props.items.name
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_pages_css_shoppingCards_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardsBody),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                className: (_pages_css_shoppingCards_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/shopping" + props.items.path,
                                    children: props.items.name
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_pages_css_shoppingCards_module_scss__WEBPACK_IMPORTED_MODULE_4___default().info),
                                children: props.items.sku
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_pages_css_shoppingCards_module_scss__WEBPACK_IMPORTED_MODULE_4___default().priceInfo),
                                children: props?.items?.prices?.salePrice == null ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: (_pages_css_shoppingCards_module_scss__WEBPACK_IMPORTED_MODULE_4___default().price),
                                    children: [
                                        "$",
                                        props?.items?.prices?.basePrice?.value.toFixed(2)
                                    ]
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: `${(_pages_css_shoppingCards_module_scss__WEBPACK_IMPORTED_MODULE_4___default().price)} ${(_pages_css_shoppingCards_module_scss__WEBPACK_IMPORTED_MODULE_4___default().priceSale)}`,
                                            children: [
                                                "$",
                                                props?.items?.prices?.basePrice?.value.toFixed(2)
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: (_pages_css_shoppingCards_module_scss__WEBPACK_IMPORTED_MODULE_4___default().price),
                                            children: [
                                                "$",
                                                props?.items?.prices?.salePrice?.value.toFixed(2)
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        });
    } else {
        "";
    }
}


/***/ })

};
;