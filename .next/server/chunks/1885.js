exports.id = 1885;
exports.ids = [1885];
exports.modules = {

/***/ 3884:
/***/ ((module) => {

// Exports
module.exports = {
	"divRow": "shoppings-product-slider_divRow__XAqrK",
	"d-flex": "shoppings-product-slider_d-flex__VqOyE",
	"d-flex-between": "shoppings-product-slider_d-flex-between__U3Lbq",
	"eleLazyLoad": "shoppings-product-slider_eleLazyLoad__0X9if",
	"placeHolderShimmer": "shoppings-product-slider_placeHolderShimmer__bMc8z",
	"categoryLayout": "shoppings-product-slider_categoryLayout__YGO5N",
	"categoryHead": "shoppings-product-slider_categoryHead__o7h_A",
	"content": "shoppings-product-slider_content__c0WQ4",
	"rentalCardGrids": "shoppings-product-slider_rentalCardGrids__sXMxO",
	"rentalCardGridsFlex": "shoppings-product-slider_rentalCardGridsFlex__zKnmi",
	"customerArrow": "shoppings-product-slider_customerArrow__7PduM",
	"arrowButton": "shoppings-product-slider_arrowButton__nxXaE",
	"similarProduct": "shoppings-product-slider_similarProduct__KoGSK",
	"homePage": "shoppings-product-slider_homePage__5PrFG"
};


/***/ }),

/***/ 1885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ShoppingProductSlider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_css_shoppings_product_slider_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3884);
/* harmony import */ var _pages_css_shoppings_product_slider_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_pages_css_shoppings_product_slider_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8278);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1598);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8851);




//Slider css files




var settingsSliders = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1201,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 321,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
function ShoppingProductSlider(props) {
    const sliderRef_1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    if (props?.items?.length > 0) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `${(_pages_css_shoppings_product_slider_module_scss__WEBPACK_IMPORTED_MODULE_7___default().categoryLayout)} ${props.dataClass == "similarProduct" ? (_pages_css_shoppings_product_slider_module_scss__WEBPACK_IMPORTED_MODULE_7___default().similarProduct) : ""}`,
            role: "article",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_pages_css_shoppings_product_slider_module_scss__WEBPACK_IMPORTED_MODULE_7___default().categoryHead),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_pages_css_shoppings_product_slider_module_scss__WEBPACK_IMPORTED_MODULE_7___default().content),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                    children: [
                                        props.title,
                                        props.link != "false" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: props.link,
                                            children: "View All"
                                        }) : ""
                                    ]
                                })
                            }),
                            props?.items?.length > 4 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_pages_css_shoppings_product_slider_module_scss__WEBPACK_IMPORTED_MODULE_7___default().customerArrow),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: (_pages_css_shoppings_product_slider_module_scss__WEBPACK_IMPORTED_MODULE_7___default().arrowButton),
                                        onClick: ()=>sliderRef_1?.current?.slickPrev(),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M15.6991 7.41L14.2891 6L8.28906 12L14.2891 18L15.6991 16.59L11.1191 12L15.6991 7.41Z",
                                                    fill: "#3F4254"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M15.6991 7.41L14.2891 6L8.28906 12L14.2891 18L15.6991 16.59L11.1191 12L15.6991 7.41Z",
                                                    fill: "black",
                                                    fillOpacity: "0.2"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: (_pages_css_shoppings_product_slider_module_scss__WEBPACK_IMPORTED_MODULE_7___default().arrowButton),
                                        onClick: ()=>sliderRef_1?.current?.slickNext(),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M9.69906 6L8.28906 7.41L12.8691 12L8.28906 16.59L9.69906 18L15.6991 12L9.69906 6Z",
                                                    fill: "#3F4254"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M9.69906 6L8.28906 7.41L12.8691 12L8.28906 16.59L9.69906 18L15.6991 12L9.69906 6Z",
                                                    fill: "black",
                                                    fillOpacity: "0.2"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }) : ""
                        ]
                    }),
                    props?.items?.length > 4 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_3___default()), {
                        ...settingsSliders,
                        className: (_pages_css_shoppings_product_slider_module_scss__WEBPACK_IMPORTED_MODULE_7___default().rentalCardGrids),
                        ref: sliderRef_1,
                        children: props?.items?.map((ls, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_cards__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                items: ls.node,
                                parentPage: "slider"
                            }, i))
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${(_pages_css_shoppings_product_slider_module_scss__WEBPACK_IMPORTED_MODULE_7___default().rentalCardGrids)} ${(_pages_css_shoppings_product_slider_module_scss__WEBPACK_IMPORTED_MODULE_7___default().rentalCardGridsFlex)}`,
                        ref: sliderRef_1,
                        children: props?.items?.map((ls, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_cards__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                items: ls.node,
                                parentPage: "slider"
                            }, i))
                    })
                ]
            })
        });
    } else {
        return "";
    }
}


/***/ })

};
;