(() => {
var exports = {};
exports.id = 4261;
exports.ids = [4261];
exports.modules = {

/***/ 8091:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Frentals_absolutePagePath_private_next_pages_2Frentals_js_preferredRegion_middlewareConfig_e30_3D_),
  getServerSideProps: () => (/* binding */ next_route_loaderpage_2Frentals_absolutePagePath_private_next_pages_2Frentals_js_preferredRegion_middlewareConfig_e30_3D_getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/rentals.js
var rentals_namespaceObject = {};
__webpack_require__.r(rentals_namespaceObject);
__webpack_require__.d(rentals_namespaceObject, {
  "default": () => (RentalsLists),
  getServerSideProps: () => (getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./pages/css/rentalList.module.scss
var rentalList_module = __webpack_require__(3425);
var rentalList_module_default = /*#__PURE__*/__webpack_require__.n(rentalList_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/common/Head/head.js
var head = __webpack_require__(9680);
// EXTERNAL MODULE: ./utils/common/global-header-footer.js
var global_header_footer = __webpack_require__(4312);
// EXTERNAL MODULE: ./components/common/SearchRental/SearchRental.js + 1 modules
var SearchRental = __webpack_require__(3347);
;// CONCATENATED MODULE: ./components/common/svg/rentals/camping.js



function RentalCamping() {
    return /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
        src: "/images/camping.png",
        alt: "camping",
        width: 50,
        height: 50
    });
}

// EXTERNAL MODULE: ./components/common/Rentals/cards.js
var cards = __webpack_require__(5460);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick.css
var slick = __webpack_require__(8278);
// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick-theme.css
var slick_theme = __webpack_require__(1598);
;// CONCATENATED MODULE: ./components/common/Rentals/product-slider.js





//Slider css files



var settingsSliders = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
};
function RentalProductSlider(props) {
    const sliderRef_1 = useRef(null);
    const imagePath = props?.imagePath;
    const sections = props?.section;
    return /*#__PURE__*/ _jsx("div", {
        className: style.categoryLayoutFull,
        children: /*#__PURE__*/ _jsxs("div", {
            className: "container",
            children: [
                /*#__PURE__*/ _jsxs("div", {
                    className: style.categoryHead,
                    children: [
                        /*#__PURE__*/ _jsxs("div", {
                            className: style.content,
                            children: [
                                /*#__PURE__*/ _jsx("h2", {
                                    children: sections?.name
                                }),
                                /*#__PURE__*/ _jsxs("p", {
                                    children: [
                                        sections?.title,
                                        sections?.link != "" ? /*#__PURE__*/ _jsx(Link, {
                                            href: "/rentals/" + sections?.link,
                                            children: "View All"
                                        }) : ""
                                    ]
                                })
                            ]
                        }),
                        sections?.items?.length > 3 ? /*#__PURE__*/ _jsxs("div", {
                            className: style.customerArrow,
                            children: [
                                /*#__PURE__*/ _jsx("button", {
                                    className: style.arrowButton,
                                    onClick: ()=>sliderRef_1?.current?.slickPrev(),
                                    children: /*#__PURE__*/ _jsxs("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        children: [
                                            /*#__PURE__*/ _jsx("path", {
                                                d: "M15.6991 7.41L14.2891 6L8.28906 12L14.2891 18L15.6991 16.59L11.1191 12L15.6991 7.41Z",
                                                fill: "#3F4254"
                                            }),
                                            /*#__PURE__*/ _jsx("path", {
                                                d: "M15.6991 7.41L14.2891 6L8.28906 12L14.2891 18L15.6991 16.59L11.1191 12L15.6991 7.41Z",
                                                fill: "black",
                                                fillOpacity: "0.2"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ _jsx("button", {
                                    className: style.arrowButton,
                                    onClick: ()=>sliderRef_1?.current?.slickNext(),
                                    children: /*#__PURE__*/ _jsxs("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        children: [
                                            /*#__PURE__*/ _jsx("path", {
                                                d: "M9.69906 6L8.28906 7.41L12.8691 12L8.28906 16.59L9.69906 18L15.6991 12L9.69906 6Z",
                                                fill: "#3F4254"
                                            }),
                                            /*#__PURE__*/ _jsx("path", {
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
                sections?.items?.length > 3 ? /*#__PURE__*/ _jsx(Slider, {
                    ...settingsSliders,
                    className: style.rentalCardGrids,
                    ref: sliderRef_1,
                    children: sections?.items?.map((ls)=>/*#__PURE__*/ _jsx(RentalCards, {
                            parentPage: "slider",
                            item: ls,
                            imagePath: imagePath
                        }, ls))
                }) : /*#__PURE__*/ _jsx("div", {
                    className: style.rentalCardGrids,
                    children: sections?.items?.map((ls)=>/*#__PURE__*/ _jsx(RentalCards, {
                            item: ls,
                            imagePath: imagePath
                        }, ls))
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./pages/rentals.js










var rentals_settingsSliders = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
};
function RentalsLists(pageProp) {
    const category_all = pageProp?.category_all;
    const imagePath = pageProp?.page_content?.data?.image_path;
    const section_1 = pageProp?.page_content?.data?.listing_first;
    const section_2 = pageProp?.page_content?.data?.listing_second;
    const section_3 = pageProp?.page_content?.data?.listing_third;
    const section_4 = pageProp?.page_content?.data?.listing_fourth;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "page_rental_list",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(head/* default */.Z, {
                title: "All Rental",
                description: "All Rental",
                image: null
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (rentalList_module_default()).page_top_banner,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (rentalList_module_default()).banner_heading,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                    children: "Find the Perfect Spot for Your Next Adventure"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    children: "Campsites, RV Parks, Pavilions and more..."
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(SearchRental/* default */.Z, {})
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        className: (rentalList_module_default()).banner_image,
                        src: "https://cdn11.bigcommerce.com/s-suzeuussqe/images/stencil/original/image-manager/rentals-banner-2103.png",
                        width: "100",
                        height: "304",
                        layout: "responsive",
                        objectFit: "cover",
                        alt: "Event List"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (rentalList_module_default()).categoryList,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                            children: "Catalog"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("ul", {
                            children: category_all?.map((ls, i)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/rentals/" + ls.slug,
                                        children: ls.name
                                    })
                                }, ls.id))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (rentalList_module_default()).categoryLayoutOne,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (rentalList_module_default()).categoryHead,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(RentalCamping, {}),
                                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                    children: section_1?.name
                                })
                            ]
                        }),
                        section_1?.items?.length > 0 ? /*#__PURE__*/ jsx_runtime.jsx("ul", {
                            children: section_1?.items?.map((ls, i)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/rental/" + ls.slug,
                                        children: ls.images?.length > 0 ? /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                            className: (rentalList_module_default()).banner_image,
                                            src: imagePath + "/" + ls.images[0],
                                            width: "100",
                                            height: "304",
                                            layout: "responsive",
                                            objectFit: "cover",
                                            alt: ls.title
                                        }) : /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                            className: (rentalList_module_default()).banner_image,
                                            src: "https://cdn11.bigcommerce.com/s-suzeuussqe/images/stencil/original/image-manager/coming-soon.png",
                                            width: "100",
                                            height: "304",
                                            layout: "responsive",
                                            objectFit: "cover",
                                            alt: ls.title
                                        })
                                    })
                                }, i))
                        }) : "",
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: (rentalList_module_default()).categoryOneAction,
                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/rentals/" + section_1?.link,
                                children: "Explore Camping"
                            })
                        })
                    ]
                })
            })
        ]
    });
}
async function getServerSideProps(context) {
    const globalSettings = await (0,global_header_footer/* default */.Z)();
    //category_all
    const categorysFetch = await fetch({"path":"https://demoadmin.mwrweb.com/","api":"https://demoadmin.mwrweb.com/api/","jwt_secret":"UOUkeFnqauTf3qw0Hy6pv1JQq572l82gRBgnNbemPEjV2bTG2Bg0A3avm1svL9gs"}.api + "get-lodging-category");
    const resultCategorys = await categorysFetch.json();
    const dataFetch = await fetch({"path":"https://demoadmin.mwrweb.com/","api":"https://demoadmin.mwrweb.com/api/","jwt_secret":"UOUkeFnqauTf3qw0Hy6pv1JQq572l82gRBgnNbemPEjV2bTG2Bg0A3avm1svL9gs"}.api + "get-lodging-home");
    const results = await dataFetch.json();
    const page_content = {
        data: results
    };
    return {
        props: {
            category_all: resultCategorys,
            page_content: page_content,
            navbar: globalSettings?.header,
            footer: globalSettings?.footer
        }
    };
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Frentals&absolutePagePath=private-next-pages%2Frentals.js&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Frentals_absolutePagePath_private_next_pages_2Frentals_js_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(rentals_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(rentals_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(rentals_namespaceObject, "getStaticPaths")
        const next_route_loaderpage_2Frentals_absolutePagePath_private_next_pages_2Frentals_js_preferredRegion_middlewareConfig_e30_3D_getServerSideProps = (0,helpers/* hoist */.l)(rentals_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(rentals_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(rentals_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(rentals_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(rentals_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(rentals_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(rentals_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(rentals_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/rentals","pathname":"/rentals","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: rentals_namespaceObject })
        
        
    

/***/ }),

/***/ 1598:
/***/ (() => {



/***/ }),

/***/ 8278:
/***/ (() => {



/***/ }),

/***/ 2245:
/***/ ((module) => {

"use strict";
module.exports = require("moment");

/***/ }),

/***/ 3076:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 8392:
/***/ ((module) => {

"use strict";
module.exports = require("react-element-popper/animations/transition");

/***/ }),

/***/ 9863:
/***/ ((module) => {

"use strict";
module.exports = require("react-multi-date-picker");

/***/ }),

/***/ 2827:
/***/ ((module) => {

"use strict";
module.exports = require("react-search-autocomplete");

/***/ }),

/***/ 8096:
/***/ ((module) => {

"use strict";
module.exports = require("react-slick");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7812,1664,2636,5675,9680,3154,2935,9440], () => (__webpack_exec__(8091)));
module.exports = __webpack_exports__;

})();