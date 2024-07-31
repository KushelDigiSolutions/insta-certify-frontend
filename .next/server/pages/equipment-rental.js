"use strict";
(() => {
var exports = {};
exports.id = 397;
exports.ids = [397];
exports.modules = {

/***/ 8735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fequipment_rental_absolutePagePath_private_next_pages_2Fequipment_rental_js_preferredRegion_middlewareConfig_e30_3D_),
  getServerSideProps: () => (/* binding */ next_route_loaderpage_2Fequipment_rental_absolutePagePath_private_next_pages_2Fequipment_rental_js_preferredRegion_middlewareConfig_e30_3D_getServerSideProps),
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

// NAMESPACE OBJECT: ./pages/equipment-rental.js
var equipment_rental_namespaceObject = {};
__webpack_require__.r(equipment_rental_namespaceObject);
__webpack_require__.d(equipment_rental_namespaceObject, {
  "default": () => (EquipmentRental),
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
// EXTERNAL MODULE: ./pages/css/equipment-rental.module.scss
var equipment_rental_module = __webpack_require__(8972);
var equipment_rental_module_default = /*#__PURE__*/__webpack_require__.n(equipment_rental_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/common/Head/head.js
var head = __webpack_require__(9680);
// EXTERNAL MODULE: ./utils/common/global-header-footer.js
var global_header_footer = __webpack_require__(4312);
;// CONCATENATED MODULE: ./pages/equipment-rental.js







function EquipmentRental(pageProp) {
    const banner = pageProp?.page_content?.banner?.banner[0];
    const category = pageProp?.page_content?.category;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "page_shopping_list",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(head/* default */.Z, {
                title: banner[0]?.title,
                description: "equipment-rental",
                image: null
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (equipment_rental_module_default()).page_top_banner,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: (equipment_rental_module_default()).banner_heading,
                            children: /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                children: banner?.title
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        className: (equipment_rental_module_default()).banner_image,
                        src: banner?.image_path,
                        width: "100",
                        height: "304",
                        layout: "responsive",
                        objectFit: "cover",
                        alt: banner?.title
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (equipment_rental_module_default()).categoryList,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                            children: "PRODUCT CATALOG"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("ul", {
                            children: category?.length > 0 && category?.map((ls, i)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/equipment-rentals/" + ls.slug,
                                        children: ls.name
                                    })
                                }, i))
                        })
                    ]
                })
            })
        ]
    });
}
async function getServerSideProps(context) {
    const globalSettings = await (0,global_header_footer/* default */.Z)();
    try {
        //banner
        const reqBannerFetch = await fetch({"path":"https://demoadmin.mwrweb.com/","api":"https://demoadmin.mwrweb.com/api/","jwt_secret":"UOUkeFnqauTf3qw0Hy6pv1JQq572l82gRBgnNbemPEjV2bTG2Bg0A3avm1svL9gs"}.api + "get-equipment-home");
        const reqBannerDetial = await reqBannerFetch.json();
        //categorys
        const reqFetch = await fetch({"path":"https://demoadmin.mwrweb.com/","api":"https://demoadmin.mwrweb.com/api/","jwt_secret":"UOUkeFnqauTf3qw0Hy6pv1JQq572l82gRBgnNbemPEjV2bTG2Bg0A3avm1svL9gs"}.api + "get-equipment-category");
        const reqDetial = await reqFetch.json();
        const data = {
            banner: reqBannerDetial,
            category: reqDetial
        };
        return {
            props: {
                page_content: data,
                navbar: globalSettings?.header,
                footer: globalSettings?.footer
            }
        };
    } catch (error) {
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

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fequipment-rental&absolutePagePath=private-next-pages%2Fequipment-rental.js&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fequipment_rental_absolutePagePath_private_next_pages_2Fequipment_rental_js_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(equipment_rental_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(equipment_rental_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(equipment_rental_namespaceObject, "getStaticPaths")
        const next_route_loaderpage_2Fequipment_rental_absolutePagePath_private_next_pages_2Fequipment_rental_js_preferredRegion_middlewareConfig_e30_3D_getServerSideProps = (0,helpers/* hoist */.l)(equipment_rental_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(equipment_rental_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(equipment_rental_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(equipment_rental_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(equipment_rental_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(equipment_rental_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(equipment_rental_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(equipment_rental_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/equipment-rental","pathname":"/equipment-rental","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: equipment_rental_namespaceObject })
        
        
    

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

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7812,1664,2636,5675,9680,2703], () => (__webpack_exec__(8735)));
module.exports = __webpack_exports__;

})();