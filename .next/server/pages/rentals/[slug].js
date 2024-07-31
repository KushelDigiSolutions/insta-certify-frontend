"use strict";
(() => {
var exports = {};
exports.id = 8271;
exports.ids = [8271];
exports.modules = {

/***/ 9114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Frentals_2F_5Bslug_5D_absolutePagePath_private_next_pages_2Frentals_2F_5Bslug_5D_js_preferredRegion_middlewareConfig_e30_3D_),
  getServerSideProps: () => (/* binding */ next_route_loaderpage_2Frentals_2F_5Bslug_5D_absolutePagePath_private_next_pages_2Frentals_2F_5Bslug_5D_js_preferredRegion_middlewareConfig_e30_3D_getServerSideProps),
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

// NAMESPACE OBJECT: ./pages/rentals/[slug].js
var _slug_namespaceObject = {};
__webpack_require__.r(_slug_namespaceObject);
__webpack_require__.d(_slug_namespaceObject, {
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
// EXTERNAL MODULE: ./components/common/Head/head.js
var head = __webpack_require__(9680);
// EXTERNAL MODULE: ./utils/common/global-header-footer.js
var global_header_footer = __webpack_require__(4312);
// EXTERNAL MODULE: ./components/common/SearchRental/SearchRental.js + 1 modules
var SearchRental = __webpack_require__(3347);
// EXTERNAL MODULE: ./components/common/Rentals/cards.js
var cards = __webpack_require__(5460);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./pages/rentals/[slug].js










function RentalsLists(pageProp) {
    const router = (0,router_.useRouter)();
    const { slug } = router.query;
    let lodgingCategory = [];
    const category_all = pageProp.page_content?.data?.categories;
    const media_url = pageProp.page_content?.data?.media_url;
    const lodgingTotal = pageProp.page_content?.data?.count;
    const lodgingListTemp = pageProp.page_content?.data?.lodging;
    const [lodgingList, setClassesList] = (0,external_react_.useState)(lodgingListTemp);
    const [isLoadmoreButton, setIsLoadmoreButton] = (0,external_react_.useState)(true);
    const [loadMoreStatus, setLoadMoreStatus] = (0,external_react_.useState)(false);
    const [pageRecode, setPageRecode] = (0,external_react_.useState)(18);
    const [pageOffset, setPageOffset] = (0,external_react_.useState)(18);
    if (category_all.length > 0) {
        category_all.map((ls)=>{
            if (ls.slug == slug) {
                lodgingCategory = ls;
            }
        });
    }
    const loadMore = async ()=>{
        setLoadMoreStatus(true);
        setPageOffset(pageOffset + pageRecode);
        let endpoint = `${slug}?filter=desc&limit=${pageRecode}&offset=${pageOffset}`;
        // if(pageOffset > lodgingTotal){ console.log('DONE') }
        const reqFetch = await fetch({"path":"https://demoadmin.mwrweb.com/","api":"https://demoadmin.mwrweb.com/api/","jwt_secret":"UOUkeFnqauTf3qw0Hy6pv1JQq572l82gRBgnNbemPEjV2bTG2Bg0A3avm1svL9gs"}.api + "get-lodging/" + endpoint);
        const lodging = await reqFetch.json();
        console.log("lodging Click");
        console.log(lodging);
        lodgingListTemp.push(...lodging.lodging);
        setClassesList(lodgingListTemp);
        if (lodging.lodging.length != pageRecode) {
            setIsLoadmoreButton(false);
            setPageOffset(lodgingTotal);
        }
        setLoadMoreStatus(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: `page_rental_list ${(rentalList_module_default()).pageRentalMain}`,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(head/* default */.Z, {
                title: lodgingCategory?.seo_title,
                description: lodgingCategory?.seo_description,
                image: lodgingCategory?.image
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
                className: (rentalList_module_default()).pageHead,
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (rentalList_module_default()).parent,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: (rentalList_module_default()).left,
                                children: /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                    children: lodgingCategory?.name
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: (rentalList_module_default()).right,
                                children: lodgingTotal > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                    children: [
                                        "Viewing 1 - ",
                                        lodgingList?.length,
                                        " of ",
                                        lodgingTotal,
                                        " products"
                                    ]
                                }) : ""
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (rentalList_module_default()).categoryLayoutFull,
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: lodgingList?.length > 0 ? /*#__PURE__*/ jsx_runtime.jsx("ul", {
                        className: (rentalList_module_default()).rentalCardGrids,
                        children: lodgingList?.map((ls, index)=>/*#__PURE__*/ jsx_runtime.jsx(cards/* default */.Z, {
                                item: ls,
                                imagePath: media_url
                            }, ls))
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                        className: (rentalList_module_default()).notEvent,
                        children: [
                            "There are no lodging in ",
                            lodgingCategory?.name?.toLowerCase(),
                            " category."
                        ]
                    })
                })
            }),
            isLoadmoreButton && lodgingTotal > pageRecode ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (rentalList_module_default()).loadMore,
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                        className: (rentalList_module_default()).buttonLoadMore,
                        onClick: ()=>{
                            loadMore();
                        },
                        children: "LOAD MORE"
                    })
                })
            }) : ""
        ]
    });
}
async function getServerSideProps(context) {
    const urlSlug = context?.params?.slug;
    const globalSettings = await (0,global_header_footer/* default */.Z)();
    if (urlSlug != "") {
        //check filter start
        let filterStr = "?filter=desc&limit=18&offset=0";
        const filter = context?.query?.filter;
        if (typeof filter != "undefined") {
            filterStr = "?filter=" + filter;
        }
        //check filter end
        const dataFetch = await fetch({"path":"https://demoadmin.mwrweb.com/","api":"https://demoadmin.mwrweb.com/api/","jwt_secret":"UOUkeFnqauTf3qw0Hy6pv1JQq572l82gRBgnNbemPEjV2bTG2Bg0A3avm1svL9gs"}.api + "get-lodging/" + urlSlug + filterStr);
        const results = await dataFetch.json();
        const page_content = {
            data: results
        };
        return {
            props: {
                page_content: page_content,
                navbar: globalSettings?.header,
                footer: globalSettings?.footer
            }
        };
    } else {
        return {
            props: {
                page_content: false,
                navbar: globalSettings?.header,
                footer: globalSettings?.footer
            },
            notFound: true
        };
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Frentals%2F%5Bslug%5D&absolutePagePath=private-next-pages%2Frentals%2F%5Bslug%5D.js&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Frentals_2F_5Bslug_5D_absolutePagePath_private_next_pages_2Frentals_2F_5Bslug_5D_js_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(_slug_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(_slug_namespaceObject, "getStaticPaths")
        const next_route_loaderpage_2Frentals_2F_5Bslug_5D_absolutePagePath_private_next_pages_2Frentals_2F_5Bslug_5D_js_preferredRegion_middlewareConfig_e30_3D_getServerSideProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(_slug_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(_slug_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/rentals/[slug]","pathname":"/rentals/[slug]","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: _slug_namespaceObject })
        
        
    

/***/ }),

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8392:
/***/ ((module) => {

module.exports = require("react-element-popper/animations/transition");

/***/ }),

/***/ 9863:
/***/ ((module) => {

module.exports = require("react-multi-date-picker");

/***/ }),

/***/ 2827:
/***/ ((module) => {

module.exports = require("react-search-autocomplete");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7812,1664,2636,5675,9680,3154,2935,9440], () => (__webpack_exec__(9114)));
module.exports = __webpack_exports__;

})();