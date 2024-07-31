(() => {
var exports = {};
exports.id = 987;
exports.ids = [987];
exports.modules = {

/***/ 7442:
/***/ ((module) => {

// Exports
module.exports = {
	"divRow": "shoppings-lists_divRow__qfpCL",
	"d-flex": "shoppings-lists_d-flex__rGF7b",
	"d-flex-between": "shoppings-lists_d-flex-between__tgk5C",
	"eleLazyLoad": "shoppings-lists_eleLazyLoad__NtjBA",
	"placeHolderShimmer": "shoppings-lists_placeHolderShimmer__pXxC1",
	"page_top_banner": "shoppings-lists_page_top_banner__h0E_d",
	"banner_heading": "shoppings-lists_banner_heading__sRAyV",
	"banner_image": "shoppings-lists_banner_image__guh9J",
	"page_main_banner": "shoppings-lists_page_main_banner__rNe8e",
	"bannerImage": "shoppings-lists_bannerImage__VK7df",
	"heroBanner": "shoppings-lists_heroBanner__V3rsn",
	"parent": "shoppings-lists_parent__BRIZt",
	"loadMore": "shoppings-lists_loadMore__nXWIy",
	"buttonLoadMore": "shoppings-lists_buttonLoadMore__VGhkN",
	"categoryLayoutTwo": "shoppings-lists_categoryLayoutTwo__sGgHk",
	"content": "shoppings-lists_content___E7Kw",
	"linkImage": "shoppings-lists_linkImage__mQzlg",
	"categoryLayoutThree": "shoppings-lists_categoryLayoutThree__cmwOH"
};


/***/ }),

/***/ 1025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fshopping_absolutePagePath_private_next_pages_2Fshopping_js_preferredRegion_middlewareConfig_e30_3D_),
  getServerSideProps: () => (/* binding */ next_route_loaderpage_2Fshopping_absolutePagePath_private_next_pages_2Fshopping_js_preferredRegion_middlewareConfig_e30_3D_getServerSideProps),
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

// NAMESPACE OBJECT: ./pages/shopping.js
var shopping_namespaceObject = {};
__webpack_require__.r(shopping_namespaceObject);
__webpack_require__.d(shopping_namespaceObject, {
  "default": () => (ShoppingsLists),
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
// EXTERNAL MODULE: ./pages/css/shoppings-lists.module.scss
var shoppings_lists_module = __webpack_require__(7442);
var shoppings_lists_module_default = /*#__PURE__*/__webpack_require__.n(shoppings_lists_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/common/Head/head.js
var head = __webpack_require__(9680);
// EXTERNAL MODULE: ./utils/common/global-header-footer.js
var global_header_footer = __webpack_require__(4312);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick.css
var slick = __webpack_require__(8278);
// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick-theme.css
var slick_theme = __webpack_require__(1598);
// EXTERNAL MODULE: ./components/common/shopping/product-slider.js
var product_slider = __webpack_require__(1885);
// EXTERNAL MODULE: ./components/common/shopping/collections.js
var collections = __webpack_require__(6038);
;// CONCATENATED MODULE: ./pages/shopping.js







//Slider css files





var settingsMorePhotos = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
};
function ShoppingsLists(pageProp) {
    const product = pageProp.page_content.product;
    const customFields = product?.customFields;
    const [section1, SetSection1] = (0,external_react_.useState)(()=>{
        if (customFields?.edges?.length > 0) {
            customFields?.edges?.map(async (ls)=>{
                if (ls.node.name == "Section - 1") {
                    const reqFetchProduct = await fetch({"api_url":"https://demo.mwrweb.com/api/v1/"}.api_url + "collections/category", {
                        method: "POST",
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            "id": ls.node.value
                        })
                    });
                    const resultProduct = await reqFetchProduct.json();
                    SetSection1(resultProduct);
                }
            });
        }
    });
    const [section2, SetSection2] = (0,external_react_.useState)(()=>{
        if (customFields?.edges?.length > 0) {
            customFields?.edges?.map(async (ls)=>{
                if (ls.node.name == "Section - 2") {
                    const reqFetchProduct_2 = await fetch({"api_url":"https://demo.mwrweb.com/api/v1/"}.api_url + "collections/category", {
                        method: "POST",
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            "id": ls.node.value
                        })
                    });
                    const resultProduct_2 = await reqFetchProduct_2.json();
                    SetSection2(resultProduct_2);
                }
            });
        }
    });
    const [section3, SetSection3] = (0,external_react_.useState)(()=>{
        if (customFields?.edges?.length > 0) {
            customFields?.edges?.map(async (ls)=>{
                if (ls.node.name == "Section - 3") {
                    const reqFetchProduct_3 = await fetch({"api_url":"https://demo.mwrweb.com/api/v1/"}.api_url + "collections/category", {
                        method: "POST",
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            "id": ls.node.value
                        })
                    });
                    const resultProduct_3 = await reqFetchProduct_3.json();
                    SetSection3(resultProduct_3);
                }
            });
        }
    });
    const [section4, SetSection4] = (0,external_react_.useState)(()=>{
        if (customFields?.edges?.length > 0) {
            customFields?.edges?.map(async (ls)=>{
                if (ls.node.name == "Section - 4") {
                    const reqFetchProduct_4 = await fetch({"api_url":"https://demo.mwrweb.com/api/v1/"}.api_url + "collections/category", {
                        method: "POST",
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            "id": ls.node.value
                        })
                    });
                    const resultProduct_4 = await reqFetchProduct_4.json();
                    SetSection4(resultProduct_4);
                }
            });
        }
    });
    const [section5, SetSection5] = (0,external_react_.useState)(()=>{
        if (customFields?.edges?.length > 0) {
            customFields?.edges?.map(async (ls)=>{
                if (ls.node.name == "Section - 5") {
                    const reqFetchProduct_5 = await fetch({"api_url":"https://demo.mwrweb.com/api/v1/"}.api_url + "collections/category", {
                        method: "POST",
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            "id": ls.node.value
                        })
                    });
                    const resultProduct_5 = await reqFetchProduct_5.json();
                    SetSection5(resultProduct_5);
                }
            });
        }
    });
    const [section6, SetSection6] = (0,external_react_.useState)(()=>{
        if (customFields?.edges?.length > 0) {
            customFields?.edges?.map(async (ls)=>{
                if (ls.node.name == "Section - 6") {
                    const reqFetchProduct_6 = await fetch({"api_url":"https://demo.mwrweb.com/api/v1/"}.api_url + "collections/category", {
                        method: "POST",
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            "id": ls.node.value
                        })
                    });
                    const resultProduct_6 = await reqFetchProduct_6.json();
                    SetSection6(resultProduct_6);
                }
            });
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "page_shopping_list",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(head/* default */.Z, {
                title: product?.seo?.pageTitle == "" ? product?.name : product?.seo?.pageTitle,
                description: product?.seo?.metaDescription,
                image: null
            }),
            product?.images?.edges?.length > 0 ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (shoppings_lists_module_default()).page_main_banner,
                role: "article",
                children: /*#__PURE__*/ jsx_runtime.jsx((external_react_slick_default()), {
                    ...settingsMorePhotos,
                    children: product?.images?.edges?.map((ls, i)=>/*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                className: (shoppings_lists_module_default()).bannerImage,
                                src: ls?.node?.url960wide,
                                width: "1920",
                                height: "512",
                                alt: ls?.node?.altText,
                                quality: 100
                            }, i)
                        }))
                })
            }) : "",
            /*#__PURE__*/ jsx_runtime.jsx(collections/* default */.Z, {
                title: "ALL COLLECTIONS",
                collections: pageProp.page_content.collections
            }),
            typeof section1 != "undefined" ? /*#__PURE__*/ jsx_runtime.jsx(product_slider/* default */.Z, {
                title: section1?.data?.site?.item_0?.name,
                link: section1?.data?.site?.item_0?.seo?.pageTitle,
                items: section1?.data?.site?.item_0?.products?.edges,
                dataClass: "homePage"
            }) : /*#__PURE__*/ jsx_runtime.jsx("div", {
                style: {
                    minHeight: "300px",
                    width: "100%"
                },
                children: "\xa0"
            }),
            typeof section2 != "undefined" ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (shoppings_lists_module_default()).heroBanner,
                role: "article",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: (shoppings_lists_module_default()).parent,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                    children: section2?.data?.site?.item_0?.name
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    dangerouslySetInnerHTML: {
                                        __html: section2?.data?.site?.item_0?.description
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "" + section2?.data?.site?.item_0?.seo?.pageTitle,
                                    children: "SHOP NOW"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        className: (shoppings_lists_module_default()).bannerImage,
                        src: section2?.data?.site?.item_0?.defaultImage?.urlOriginal,
                        width: "1920",
                        height: "400",
                        alt: section2?.data?.site?.item_0?.name,
                        quality: 100
                    })
                ]
            }) : "",
            typeof section3 != "undefined" ? /*#__PURE__*/ jsx_runtime.jsx(product_slider/* default */.Z, {
                title: section3?.data?.site?.item_0?.name,
                link: section3?.data?.site?.item_0?.seo?.pageTitle,
                items: section3?.data?.site?.item_0?.products?.edges
            }) : /*#__PURE__*/ jsx_runtime.jsx("div", {
                style: {
                    minHeight: "300px",
                    width: "100%"
                },
                children: "\xa0"
            }),
            typeof section4 != "undefined" ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (shoppings_lists_module_default()).categoryLayoutTwo,
                role: "article",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        className: (shoppings_lists_module_default()).linkImage,
                                        href: "" + section4?.data?.site?.item_0?.seo?.pageTitle,
                                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                            className: (shoppings_lists_module_default()).bannerImage,
                                            src: section4?.data?.site?.item_0?.defaultImage?.urlOriginal,
                                            width: "1920",
                                            height: "400",
                                            alt: section4?.data?.site?.item_0?.name,
                                            quality: 100
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: (shoppings_lists_module_default()).content,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                children: section4?.data?.site?.item_0?.name
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                dangerouslySetInnerHTML: {
                                                    __html: section4?.data?.site?.item_0?.description
                                                }
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "" + section4?.data?.site?.item_0?.seo?.pageTitle,
                                                children: "SHOP NOW"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        className: (shoppings_lists_module_default()).linkImage,
                                        href: "" + section2?.data?.site?.item_1?.seo?.pageTitle,
                                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                            className: (shoppings_lists_module_default()).bannerImage,
                                            src: section4?.data?.site?.item_1?.defaultImage?.urlOriginal,
                                            width: "1920",
                                            height: "400",
                                            alt: section4?.data?.site?.item_1?.name,
                                            quality: 100
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: (shoppings_lists_module_default()).content,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                children: section4?.data?.site?.item_1?.name
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                dangerouslySetInnerHTML: {
                                                    __html: section4?.data?.site?.item_1?.description
                                                }
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "" + section4?.data?.site?.item_1?.seo?.pageTitle,
                                                children: "SHOP NOW"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            }) : "",
            typeof section5 != "undefined" ? /*#__PURE__*/ jsx_runtime.jsx(product_slider/* default */.Z, {
                title: section5?.data?.site?.item_0?.name,
                link: section5?.data?.site?.item_0?.seo?.pageTitle,
                items: section5?.data?.site?.item_0?.products?.edges
            }) : /*#__PURE__*/ jsx_runtime.jsx("div", {
                style: {
                    minHeight: "300px",
                    width: "100%"
                },
                children: "\xa0"
            }),
            typeof section6 != "undefined" ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (shoppings_lists_module_default()).categoryLayoutThree,
                role: "article",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        className: (shoppings_lists_module_default()).linkImage,
                                        href: "" + section6?.data?.site?.item_0?.seo?.pageTitle,
                                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                            className: (shoppings_lists_module_default()).bannerImage,
                                            src: section6?.data?.site?.item_0?.defaultImage?.urlOriginal,
                                            width: "1920",
                                            height: "400",
                                            alt: section6?.data?.site?.item_0?.name,
                                            quality: 100
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: (shoppings_lists_module_default()).content,
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "" + section6?.data?.site?.item_0?.seo?.pageTitle,
                                            children: section6?.data?.site?.item_0?.name
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        className: (shoppings_lists_module_default()).linkImage,
                                        href: "" + section6?.data?.site?.item_1?.seo?.pageTitle,
                                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                            className: (shoppings_lists_module_default()).bannerImage,
                                            src: section6?.data?.site?.item_1?.defaultImage?.urlOriginal,
                                            width: "1920",
                                            height: "400",
                                            alt: section6?.data?.site?.item_1?.name,
                                            quality: 100
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: (shoppings_lists_module_default()).content,
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "" + section6?.data?.site?.item_1?.seo?.pageTitle,
                                            children: section6?.data?.site?.item_1?.name
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        className: (shoppings_lists_module_default()).linkImage,
                                        href: "" + section6?.data?.site?.item_2?.seo?.pageTitle,
                                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                            className: (shoppings_lists_module_default()).bannerImage,
                                            src: section6?.data?.site?.item_2?.defaultImage?.urlOriginal,
                                            width: "1920",
                                            height: "400",
                                            alt: section6?.data?.site?.item_2?.name,
                                            quality: 100
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: (shoppings_lists_module_default()).content,
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "" + section6?.data?.site?.item_2?.seo?.pageTitle,
                                            children: section6?.data?.site?.item_2?.name
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            }) : ""
        ]
    });
}
async function getServerSideProps(context) {
    const globalSettings = await (0,global_header_footer/* default */.Z)();
    //Collections
    const reqFetchCollections = await fetch({"api_url":"https://demo.mwrweb.com/api/v1/"}.api_url + "collections/all");
    const resultCollections = await reqFetchCollections.json();
    //Collections
    const reqFetchProduct = await fetch({"api_url":"https://demo.mwrweb.com/api/v1/"}.api_url + "collections/product", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "route": "home-page-layout"
        })
    });
    const resultProduct = await reqFetchProduct.json();
    const page_content = {
        collections: resultCollections,
        product: resultProduct?.data?.site?.route?.node
    };
    return {
        props: {
            page_content: page_content,
            navbar: globalSettings?.header,
            footer: globalSettings?.footer
        }
    };
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fshopping&absolutePagePath=private-next-pages%2Fshopping.js&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fshopping_absolutePagePath_private_next_pages_2Fshopping_js_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(shopping_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(shopping_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(shopping_namespaceObject, "getStaticPaths")
        const next_route_loaderpage_2Fshopping_absolutePagePath_private_next_pages_2Fshopping_js_preferredRegion_middlewareConfig_e30_3D_getServerSideProps = (0,helpers/* hoist */.l)(shopping_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(shopping_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(shopping_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(shopping_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(shopping_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(shopping_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(shopping_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(shopping_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/shopping","pathname":"/shopping","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: shopping_namespaceObject })
        
        
    

/***/ }),

/***/ 1598:
/***/ (() => {



/***/ }),

/***/ 8278:
/***/ (() => {



/***/ }),

/***/ 2947:
/***/ ((module) => {

"use strict";
module.exports = require("jquery");

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
var __webpack_exports__ = __webpack_require__.X(0, [7812,1664,2636,5675,9680,6814,8851,1885,3605], () => (__webpack_exec__(1025)));
module.exports = __webpack_exports__;

})();