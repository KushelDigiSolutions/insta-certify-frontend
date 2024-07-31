(() => {
var exports = {};
exports.id = 2197;
exports.ids = [2197];
exports.modules = {

/***/ 5983:
/***/ ((module) => {

// Exports
module.exports = {
	"divRow": "__404_divRow__Z7heb",
	"d-flex": "__404_d-flex__DZji5",
	"d-flex-between": "__404_d-flex-between__eRn6V",
	"eleLazyLoad": "__404_eleLazyLoad__0k1CN",
	"placeHolderShimmer": "__404_placeHolderShimmer__eo2ho",
	"page_404": "__404_page_404__hmudb",
	"icon_404": "__404_icon_404__FZWIh",
	"round": "__404_round__fMmrK",
	"blur": "__404_blur__PGYkL",
	"content": "__404_content__qdTwV",
	"error_show": "__404_error_show__b_V_c",
	"buttonGoHome": "__404_buttonGoHome__A2AQE"
};


/***/ }),

/***/ 6814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2F404_absolutePagePath_private_next_pages_2F404_js_preferredRegion_middlewareConfig_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderpage_2F404_absolutePagePath_private_next_pages_2F404_js_preferredRegion_middlewareConfig_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/404.js
var _404_namespaceObject = {};
__webpack_require__.r(_404_namespaceObject);
__webpack_require__.d(_404_namespaceObject, {
  "default": () => (NotFound),
  getStaticProps: () => (getStaticProps)
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
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./pages/css/404.module.scss
var _404_module = __webpack_require__(5983);
var _404_module_default = /*#__PURE__*/__webpack_require__.n(_404_module);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./utils/common/global-header-footer.js
var global_header_footer = __webpack_require__(4312);
;// CONCATENATED MODULE: ./pages/404.js






function NotFound() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "container",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "We've lost this page"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: "Sorry, the page you are looking for doesn't exist or has been moved."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (_404_module_default()).page_404,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (_404_module_default()).icon_404,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: (_404_module_default()).round
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: (_404_module_default()).blur
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (_404_module_default()).content,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: (_404_module_default()).error_show,
                                children: "404 error"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                children: "We've lost this page"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                children: "Sorry, the page you are looking for doesn't exist or has been moved."
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                className: (_404_module_default()).buttonGoHome,
                                href: "/",
                                children: "Go to Home"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
async function getStaticProps(context) {
    const globalSettings = await (0,global_header_footer/* default */.Z)();
    return {
        props: {
            page_content: null,
            navbar: globalSettings?.header,
            footer: globalSettings?.footer
        }
    };
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2F404&absolutePagePath=private-next-pages%2F404.js&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2F404_absolutePagePath_private_next_pages_2F404_js_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(_404_namespaceObject, "default"));

        // Re-export methods.
        const next_route_loaderpage_2F404_absolutePagePath_private_next_pages_2F404_js_preferredRegion_middlewareConfig_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(_404_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(_404_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(_404_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(_404_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(_404_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(_404_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_404_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(_404_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(_404_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_404_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/404","pathname":"/404","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: _404_namespaceObject })
        
        
    

/***/ }),

/***/ 4312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ GlobalHeaderFooter)
/* harmony export */ });
async function GlobalHeaderFooter(context, cb) {
    try {
        const contentFetch = await fetch({"path":"https://demoadmin.mwrweb.com/","api":"https://demoadmin.mwrweb.com/api/","jwt_secret":"UOUkeFnqauTf3qw0Hy6pv1JQq572l82gRBgnNbemPEjV2bTG2Bg0A3avm1svL9gs"}.api + "homepage");
        const contentDetial = await contentFetch.json();
        const data = {
            header: {
                settings: contentDetial?.header,
                navigation: contentDetial?.navigation
            },
            footer: contentDetial?.footer
        };
        return data;
    } catch (error) {
        const data = {
            header: false,
            footer: false
        };
        return data;
    }
}


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

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

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

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7812,1664], () => (__webpack_exec__(6814)));
module.exports = __webpack_exports__;

})();