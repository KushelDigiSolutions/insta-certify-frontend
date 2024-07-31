"use strict";
(() => {
var exports = {};
exports.id = 765;
exports.ids = [765];
exports.modules = {

/***/ 2786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Flogout_absolutePagePath_private_next_pages_2Flogout_js_preferredRegion_middlewareConfig_e30_3D_),
  getServerSideProps: () => (/* binding */ next_route_loaderpage_2Flogout_absolutePagePath_private_next_pages_2Flogout_js_preferredRegion_middlewareConfig_e30_3D_getServerSideProps),
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

// NAMESPACE OBJECT: ./pages/logout.js
var logout_namespaceObject = {};
__webpack_require__.r(logout_namespaceObject);
__webpack_require__.d(logout_namespaceObject, {
  "default": () => (Logout),
  getServerSideProps: () => (getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: ./utils/requireAuthentication.js
var requireAuthentication = __webpack_require__(9993);
// EXTERNAL MODULE: ./utils/common/global-header-footer.js
var global_header_footer = __webpack_require__(4312);
;// CONCATENATED MODULE: ./pages/logout.js






function Logout(props) {
    const { access_token } = props?.page_content?.session?.user;
    const logout = async ()=>{
        if (typeof access_token != "undefined") {
            await fetch(`${{"path":"https://demoadmin.mwrweb.com/","api":"https://demoadmin.mwrweb.com/api/","jwt_secret":"UOUkeFnqauTf3qw0Hy6pv1JQq572l82gRBgnNbemPEjV2bTG2Bg0A3avm1svL9gs"}.api}logout`, {
                method: "POST",
                headers: new Headers({
                    Authorization: "Bearer " + access_token,
                    Accept: "application/json",
                    "Content-Type": "application/json"
                })
            });
        }
        setTimeout(()=>{
            fetch({"store_url":"https://fairchild-air-force-base-store-1.mybigcommerce.com/","store_url_ecommerce":"https://ecommerce-1517983.mybigcommerce.com/","api_url":"https://api.bigcommerce.com/stores/suzeuussqe/","store_hash":"suzeuussqe","token":"b4rd5x5aimj4zwv6arra5bdle8qoi8w","client_id":"pysegvp5x9ttzevnat59h6ean0hmvy3","client_secret":"9ceed2d8e7edc11e7a2e53e6f72e9f48d88c50f5a11771d8fc0a83fefc7b438b","channel_ecommerce":1517983}.store_url + "login.php?action=logout", {
                mode: "no-cors",
                credentials: "include"
            }).then((response)=>response.json()).then((json)=>{
                (0,react_.signOut)({
                    redirect: false
                });
                window.location.href = "/";
            }).catch((error)=>{
                (0,react_.signOut)({
                    redirect: false
                });
                window.location.href = "/";
            });
        }, 1500);
    //if(logoutRes?.status == true){}
    };
    (0,external_react_.useEffect)(()=>{
        logout();
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "logout Account"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: "Logout Account"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                style: {
                    height: "80vh"
                },
                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                    className: "loadingOverlay",
                    style: {
                        display: "block",
                        position: "fixed"
                    }
                })
            })
        ]
    });
}
async function getServerSideProps(context) {
    return (0,requireAuthentication/* default */.Z)(context, async (session)=>{
        const globalSettings = await (0,global_header_footer/* default */.Z)();
        return {
            props: {
                page_content: {
                    session
                },
                navbar: globalSettings?.header,
                footer: globalSettings?.footer
            }
        };
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Flogout&absolutePagePath=private-next-pages%2Flogout.js&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Flogout_absolutePagePath_private_next_pages_2Flogout_js_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(logout_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(logout_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(logout_namespaceObject, "getStaticPaths")
        const next_route_loaderpage_2Flogout_absolutePagePath_private_next_pages_2Flogout_js_preferredRegion_middlewareConfig_e30_3D_getServerSideProps = (0,helpers/* hoist */.l)(logout_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(logout_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(logout_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(logout_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(logout_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(logout_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(logout_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(logout_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/logout","pathname":"/logout","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: logout_namespaceObject })
        
        
    

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [7812,7376], () => (__webpack_exec__(2786)));
module.exports = __webpack_exports__;

})();