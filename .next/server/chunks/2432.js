exports.id = 2432;
exports.ids = [2432];
exports.modules = {

/***/ 8044:
/***/ ((module) => {

// Exports
module.exports = {
	"divRow": "equipmentRentalCards_divRow__dPFHc",
	"d-flex": "equipmentRentalCards_d-flex__w6x1E",
	"d-flex-between": "equipmentRentalCards_d-flex-between__7eCMr",
	"eleLazyLoad": "equipmentRentalCards_eleLazyLoad__oyt5v",
	"placeHolderShimmer": "equipmentRentalCards_placeHolderShimmer__hGL7w",
	"equRentalCards": "equipmentRentalCards_equRentalCards__hTyT3",
	"equRentalCard": "equipmentRentalCards_equRentalCard__Q4hLw",
	"imageContainer": "equipmentRentalCards_imageContainer__objw4",
	"cardsBody": "equipmentRentalCards_cardsBody__2feUE",
	"title": "equipmentRentalCards_title__fThTr",
	"location": "equipmentRentalCards_location__M5Per",
	"date": "equipmentRentalCards_date__tc8DY",
	"price": "equipmentRentalCards_price__y9ZHl",
	"equipmentCardsSlider": "equipmentRentalCards_equipmentCardsSlider__21hq4"
};


/***/ }),

/***/ 2432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ EquipmentRentalCards)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_css_equipmentRentalCards_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8044);
/* harmony import */ var _pages_css_equipmentRentalCards_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pages_css_equipmentRentalCards_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);





function EquipmentRentalCards(props) {
    const parentPage = props.parentPage;
    let equipmentCardsSlider = "";
    if (parentPage == "slider") {
        equipmentCardsSlider = (_pages_css_equipmentRentalCards_module_scss__WEBPACK_IMPORTED_MODULE_4___default().equipmentCardsSlider);
    }
    const product = props?.item;
    const imagePath = props?.imagePath;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_pages_css_equipmentRentalCards_module_scss__WEBPACK_IMPORTED_MODULE_4___default().equRentalCards) + " " + equipmentCardsSlider,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_pages_css_equipmentRentalCards_module_scss__WEBPACK_IMPORTED_MODULE_4___default().equRentalCard),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_pages_css_equipmentRentalCards_module_scss__WEBPACK_IMPORTED_MODULE_4___default().imageContainer),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: `/equipment-rental/${product?.slug}`,
                        children: product?.images?.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                            className: (_pages_css_equipmentRentalCards_module_scss__WEBPACK_IMPORTED_MODULE_4___default().banner_image),
                            src: imagePath + "/" + product?.images[0],
                            width: "100",
                            height: "304",
                            layout: "responsive",
                            objectFit: "cover",
                            alt: product?.title
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                            className: (_pages_css_equipmentRentalCards_module_scss__WEBPACK_IMPORTED_MODULE_4___default().banner_image),
                            src: "https://cdn11.bigcommerce.com/s-suzeuussqe/images/stencil/original/image-manager/coming-soon.png",
                            width: "100",
                            height: "304",
                            layout: "responsive",
                            objectFit: "cover",
                            alt: product?.title
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_pages_css_equipmentRentalCards_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardsBody),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            className: (_pages_css_equipmentRentalCards_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: `/equipment-rental/${product?.slug}`,
                                children: product?.title
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_pages_css_equipmentRentalCards_module_scss__WEBPACK_IMPORTED_MODULE_4___default().location),
                            children: product?.store_address
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: (_pages_css_equipmentRentalCards_module_scss__WEBPACK_IMPORTED_MODULE_4___default().price),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    children: [
                                        "$",
                                        product?.price?.toFixed(2)
                                    ]
                                }),
                                " /1 Day"
                            ]
                        })
                    ]
                })
            ]
        })
    });
}


/***/ })

};
;