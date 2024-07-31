"use strict";
(() => {
var exports = {};
exports.id = 4174;
exports.ids = [4174];
exports.modules = {

/***/ 6180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fcontent_2F_5Bslug_5D_absolutePagePath_private_next_pages_2Fcontent_2F_5Bslug_5D_js_preferredRegion_middlewareConfig_e30_3D_),
  getServerSideProps: () => (/* binding */ next_route_loaderpage_2Fcontent_2F_5Bslug_5D_absolutePagePath_private_next_pages_2Fcontent_2F_5Bslug_5D_js_preferredRegion_middlewareConfig_e30_3D_getServerSideProps),
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

// NAMESPACE OBJECT: ./pages/content/[slug].js
var _slug_namespaceObject = {};
__webpack_require__.r(_slug_namespaceObject);
__webpack_require__.d(_slug_namespaceObject, {
  "default": () => (ContentDetails),
  getServerSideProps: () => (getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/common/Head/head.js
var head = __webpack_require__(9680);
;// CONCATENATED MODULE: ./pages/content/[slug].js




function ContentDetails(pageProp) {
    const pageBuilder = pageProp?.page_content?.page;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(head/* default */.Z, {
                title: pageBuilder?.seo_title,
                description: pageBuilder?.seo_description,
                image: false
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                role: "article",
                dangerouslySetInnerHTML: {
                    __html: pageProp?.page_content?.page?.html
                }
            })
        ]
    });
}
async function getServerSideProps(context) {
    const urlSlug = context.params.slug;
    if (urlSlug != "") {
        try {
            const contentFetch = await fetch({"path":"https://demoadmin.mwrweb.com/","api":"https://demoadmin.mwrweb.com/api/","jwt_secret":"UOUkeFnqauTf3qw0Hy6pv1JQq572l82gRBgnNbemPEjV2bTG2Bg0A3avm1svL9gs"}.api + "pages?slug=/" + urlSlug);
            const contentDetial = await contentFetch.json();
            if (contentDetial.page == null) {
                return {
                    props: {
                        page_content: false,
                        navbar: false,
                        footer: false
                    },
                    notFound: true
                };
            } else {
                const headerData = {
                    settings: contentDetial?.header,
                    navigation: contentDetial?.navigation
                };
                return {
                    props: {
                        page_content: contentDetial,
                        navbar: headerData,
                        footer: contentDetial?.footer
                    }
                };
            }
        } catch (err) {
            return {
                props: {
                    page_content: false,
                    navbar: false,
                    footer: false
                },
                notFound: true
            };
        }
    } else {
        return {
            props: {
                page_content: false,
                navbar: false,
                footer: false
            },
            notFound: true
        };
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fcontent%2F%5Bslug%5D&absolutePagePath=private-next-pages%2Fcontent%2F%5Bslug%5D.js&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fcontent_2F_5Bslug_5D_absolutePagePath_private_next_pages_2Fcontent_2F_5Bslug_5D_js_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(_slug_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(_slug_namespaceObject, "getStaticPaths")
        const next_route_loaderpage_2Fcontent_2F_5Bslug_5D_absolutePagePath_private_next_pages_2Fcontent_2F_5Bslug_5D_js_preferredRegion_middlewareConfig_e30_3D_getServerSideProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(_slug_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(_slug_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/content/[slug]","pathname":"/content/[slug]","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: _slug_namespaceObject })
        
        
    

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

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

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7812,1664,9680], () => (__webpack_exec__(6180)));
module.exports = __webpack_exports__;

})();