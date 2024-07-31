"use strict";
(() => {
var exports = {};
exports.id = 5621;
exports.ids = [5621];
exports.modules = {

/***/ 5034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Faccount_2Forder_absolutePagePath_private_next_pages_2Faccount_2Forder_js_preferredRegion_middlewareConfig_e30_3D_),
  getServerSideProps: () => (/* binding */ next_route_loaderpage_2Faccount_2Forder_absolutePagePath_private_next_pages_2Faccount_2Forder_js_preferredRegion_middlewareConfig_e30_3D_getServerSideProps),
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

// NAMESPACE OBJECT: ./pages/account/order.js
var order_namespaceObject = {};
__webpack_require__.r(order_namespaceObject);
__webpack_require__.d(order_namespaceObject, {
  "default": () => (Order),
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
// EXTERNAL MODULE: ./utils/requireAuthentication.js
var requireAuthentication = __webpack_require__(9993);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./pages/css/account.module.scss
var account_module = __webpack_require__(1040);
var account_module_default = /*#__PURE__*/__webpack_require__.n(account_module);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2245);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__(2947);
var external_jquery_default = /*#__PURE__*/__webpack_require__.n(external_jquery_);
// EXTERNAL MODULE: ./pages/account/navigation.js
var navigation = __webpack_require__(347);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./utils/common/global-header-footer.js
var global_header_footer = __webpack_require__(4312);
;// CONCATENATED MODULE: ./pages/account/order.js











function Order(props) {
    const orderList = props?.page_content?.orderList;
    const [pageLoad, setPageLoad] = (0,external_react_.useState)(false);
    const [message, setMessage] = (0,external_react_.useState)("");
    console.log("orderList");
    console.log(orderList);
    const verfyUSer = async ()=>{
        setPageLoad(true);
        try {
            const bcType = props?.page_content?.user?.bcId;
            const access_token = props?.page_content?.user?.access_token;
            if (bcType > 0) {
                const verfyUser = await fetch({"api_url":"https://demo.mwrweb.com/api/v1/"}.api_url + "login/verify", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        bcType: bcType,
                        access_token: access_token
                    })
                });
                const verfyUserRes = await verfyUser.json();
                if (verfyUserRes?.status == true) {
                    fetch(verfyUserRes.verfy_url, {
                        mode: "no-cors",
                        credentials: "include"
                    }).then((response)=>response.json()).then((json)=>{
                        setPageLoad(false);
                    }).catch((error)=>{
                        setPageLoad(false);
                    });
                } else {
                    setPageLoad(false);
                }
            } else {
                setPageLoad(false);
            }
        } catch (error) {
            setMessage("Something went wrong");
            setPageLoad(false);
        }
    };
    const getProduct = async ()=>{
        if (typeof orderList != "undefined") {
            orderList.length > 0 && orderList.map(async (ls, i)=>{
                const getData = await fetch(`${{"api_url":"https://demo.mwrweb.com/api/v1/"}.api_url}orders/products`, {
                    method: "POST",
                    body: JSON.stringify({
                        id: ls.id
                    }),
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    }
                });
                const resData = await getData.json();
                if (resData.length > 0) {
                    resData.map((lss, i)=>{
                        const url_thumbnail = lss.image?.data[0]?.url_thumbnail;
                        if (typeof url_thumbnail != "undefined") {
                            external_jquery_default()(".productFigure-" + ls.id).html(`<img src="${url_thumbnail}" width="100" height="100" alt="Product Image" />`);
                        } else {
                            external_jquery_default()(".productFigure-" + ls.id).html(`<img src="https://cdn11.bigcommerce.com/s-suzeuussqe/images/stencil/original/image-manager/coming-soon.png" width="100" height="100" alt="Product Image" />`);
                        }
                    });
                }
            });
        } else if (orderList?.status == false) {
            setPageLoad(false);
        }
    };
    (0,external_react_.useEffect)(()=>{
        verfyUSer();
        if (orderList?.status != false) {
            getProduct();
        }
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: (account_module_default()).pageAccountBG,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (account_module_default()).addressBook,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("title", {
                            children: "Orders"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("meta", {
                            name: "description",
                            content: "We're the 92d Force Support Squadron, at Fairchild Air Force Base, delivering exceptional experiences to REFUEL Airmen, their families and the Fairchild community. Join the FUN!"
                        })
                    ]
                }),
                pageLoad == true ? /*#__PURE__*/ jsx_runtime.jsx("span", {
                    className: "loadingOverlay",
                    style: {
                        display: "block",
                        position: "fixed"
                    }
                }) : "",
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h1", {
                            className: (account_module_default()).pageHead,
                            children: "Orders"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(navigation["default"], {
                            isActive: "1"
                        }),
                        message != "" ? /*#__PURE__*/ jsx_runtime.jsx("span", {
                            className: (account_module_default()).formMessge,
                            children: message
                        }) : "",
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: (account_module_default()).accountContainer,
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: (account_module_default()).orderList,
                                children: typeof orderList != "undefined" && orderList?.length > 0 ? /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                    className: (account_module_default()).orderListUL,
                                    children: orderList?.map((ls, i)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: (account_module_default()).accountListItem,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: (account_module_default()).accountProduct,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: (account_module_default()).productFigure + " productFigure-" + ls.id,
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: (account_module_default()).productFigureLoad
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: (account_module_default()).productBody,
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: (account_module_default()).bodyContent,
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("h5", {
                                                                        children: [
                                                                            "Order #",
                                                                            ls.id
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                        children: [
                                                                            ls.items_total,
                                                                            " products totaling $",
                                                                            ls.total_inc_tax
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: (account_module_default()).orderDates,
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: (account_module_default()).dates,
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                        className: (account_module_default()).label,
                                                                                        children: "Order Placed "
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                        className: (account_module_default()).date,
                                                                                        children: external_moment_default()(ls.date_created).format("DD/MM/YYYY")
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: (account_module_default()).dates,
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                        className: (account_module_default()).label,
                                                                                        children: "Last Update"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                        className: (account_module_default()).date,
                                                                                        children: external_moment_default()(ls.date_modified).format("DD/MM/YYYY")
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: (account_module_default()).bodyAction,
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    className: (account_module_default()).orderStatus,
                                                                    children: ls.status
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }, i))
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: (account_module_default()).noOrder,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                            height: "32",
                                            viewBox: "0 0 32 32",
                                            width: "32",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("defs", {}),
                                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                    d: "M19,21H13a3,3,0,0,0-3,3v2h2V24a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1v2h2V24A3,3,0,0,0,19,21Z"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                    d: "M16,20a4,4,0,1,0-4-4A4,4,0,0,0,16,20Zm0-6a2,2,0,1,1-2,2A2,2,0,0,1,16,14Z"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                    d: "M25,5H22V4a2,2,0,0,0-2-2H12a2,2,0,0,0-2,2V5H7A2,2,0,0,0,5,7V28a2,2,0,0,0,2,2H25a2,2,0,0,0,2-2V7A2,2,0,0,0,25,5ZM12,4h8V8H12ZM25,28H7V7h3v3H22V7h3Z"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            children: "No upcoming orders"
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
}
async function getServerSideProps(context) {
    return (0,requireAuthentication/* default */.Z)(context, async (session)=>{
        const globalSettings = await (0,global_header_footer/* default */.Z)();
        try {
            const getData = await fetch(`${{"api_url":"https://demo.mwrweb.com/api/v1/"}.api_url}orders/get`, {
                method: "POST",
                body: JSON.stringify({
                    id: session.user.bcId
                }),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            });
            const resData = await getData.json();
            return {
                props: {
                    page_content: {
                        user: session.user,
                        orderList: resData
                    },
                    navbar: globalSettings?.header,
                    footer: globalSettings?.footer
                }
            };
        } catch (error) {
            return {
                props: {
                    page_content: {
                        user: session.user
                    },
                    navbar: globalSettings?.header,
                    footer: globalSettings?.footer
                }
            };
        }
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Faccount%2Forder&absolutePagePath=private-next-pages%2Faccount%2Forder.js&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Faccount_2Forder_absolutePagePath_private_next_pages_2Faccount_2Forder_js_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(order_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(order_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(order_namespaceObject, "getStaticPaths")
        const next_route_loaderpage_2Faccount_2Forder_absolutePagePath_private_next_pages_2Faccount_2Forder_js_preferredRegion_middlewareConfig_e30_3D_getServerSideProps = (0,helpers/* hoist */.l)(order_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(order_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(order_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(order_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(order_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(order_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(order_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(order_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/account/order","pathname":"/account/order","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: order_namespaceObject })
        
        
    

/***/ }),

/***/ 2947:
/***/ ((module) => {

module.exports = require("jquery");

/***/ }),

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7812,1664,2636,5675,347,7376], () => (__webpack_exec__(5034)));
module.exports = __webpack_exports__;

})();