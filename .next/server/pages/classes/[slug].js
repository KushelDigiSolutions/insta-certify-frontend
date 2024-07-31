"use strict";
(() => {
var exports = {};
exports.id = 79;
exports.ids = [79];
exports.modules = {

/***/ 7741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fclasses_2F_5Bslug_5D_absolutePagePath_private_next_pages_2Fclasses_2F_5Bslug_5D_js_preferredRegion_middlewareConfig_e30_3D_),
  getServerSideProps: () => (/* binding */ next_route_loaderpage_2Fclasses_2F_5Bslug_5D_absolutePagePath_private_next_pages_2Fclasses_2F_5Bslug_5D_js_preferredRegion_middlewareConfig_e30_3D_getServerSideProps),
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

// NAMESPACE OBJECT: ./pages/classes/[slug].js
var _slug_namespaceObject = {};
__webpack_require__.r(_slug_namespaceObject);
__webpack_require__.d(_slug_namespaceObject, {
  "default": () => (ClassesLists),
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
// EXTERNAL MODULE: ./pages/css/classesList.module.scss
var classesList_module = __webpack_require__(2971);
var classesList_module_default = /*#__PURE__*/__webpack_require__.n(classesList_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/common/Head/head.js
var head = __webpack_require__(9680);
// EXTERNAL MODULE: ./utils/common/global-header-footer.js
var global_header_footer = __webpack_require__(4312);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2245);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
;// CONCATENATED MODULE: ./components/common/svg/global/clock.js


function GlobalClock() {
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M7.9987 1.33337C4.33203 1.33337 1.33203 4.33337 1.33203 8.00004C1.33203 11.6667 4.33203 14.6667 7.9987 14.6667C11.6654 14.6667 14.6654 11.6667 14.6654 8.00004C14.6654 4.33337 11.6654 1.33337 7.9987 1.33337ZM7.9987 13.3334C5.0587 13.3334 2.66536 10.94 2.66536 8.00004C2.66536 5.06004 5.0587 2.66671 7.9987 2.66671C10.9387 2.66671 13.332 5.06004 13.332 8.00004C13.332 10.94 10.9387 13.3334 7.9987 13.3334ZM8.33203 4.66671H7.33203V8.66671L10.7987 10.8L11.332 9.93337L8.33203 8.13337V4.66671Z",
            fill: "#181C32"
        })
    });
}

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./pages/classes/[slug].js










function ClassesLists(pageProp) {
    const router = (0,router_.useRouter)();
    const { slug } = router.query;
    let classesCategory = [];
    const category_all = pageProp.page_content?.classes?.categories;
    const media_url = pageProp.page_content?.classes?.media_url;
    const classesTotal = pageProp.page_content?.classes?.count;
    const classesListTemp = pageProp.page_content?.classes?.vclasses;
    const [classesList, setClassesList] = (0,external_react_.useState)(classesListTemp);
    const [isLoadmoreButton, setIsLoadmoreButton] = (0,external_react_.useState)(true);
    const [loadMoreStatus, setLoadMoreStatus] = (0,external_react_.useState)(false);
    const [pageRecode, setPageRecode] = (0,external_react_.useState)(20);
    const [pageOffset, setPageOffset] = (0,external_react_.useState)(20);
    const topBanner = pageProp?.top_banner?.banners[0];
    const topBannerMediaUrl = pageProp?.top_banner?.media_url;
    if (category_all.length > 0) {
        category_all.map((ls)=>{
            if (ls.slug == slug) {
                classesCategory = ls;
            }
        });
    }
    const loadMore = async ()=>{
        setLoadMoreStatus(true);
        setPageOffset(pageOffset + pageRecode);
        let endpoint = `${slug}?filter=desc&limit=${pageRecode}&offset=${pageOffset}`;
        // if(pageOffset > classesTotal){ console.log('DONE') }
        const reqFetch = await fetch({"path":"https://demoadmin.mwrweb.com/","api":"https://demoadmin.mwrweb.com/api/","jwt_secret":"UOUkeFnqauTf3qw0Hy6pv1JQq572l82gRBgnNbemPEjV2bTG2Bg0A3avm1svL9gs"}.api + "get-vclasses/" + endpoint);
        const classes = await reqFetch.json();
        classesListTemp.push(...classes.vclasses);
        setClassesList(classesListTemp);
        if (classes.vclasses.length != pageRecode) {
            setIsLoadmoreButton(false);
            setPageOffset(classesTotal);
        }
        setLoadMoreStatus(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(head/* default */.Z, {
                title: classesCategory?.seo_title,
                description: classesCategory?.seo_description,
                image: classesCategory?.image
            }),
            loadMoreStatus,
            loadMoreStatus == true ? /*#__PURE__*/ jsx_runtime.jsx("span", {
                className: "loadingOverlay",
                style: {
                    position: "fixed",
                    display: "block"
                }
            }) : "",
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (classesList_module_default()).page_top_banner,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (classesList_module_default()).banner_heading,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                    children: classesCategory?.name
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    children: topBanner.sub_title
                                })
                            ]
                        })
                    }),
                    topBanner?.image == null ? /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        className: (classesList_module_default()).banner_image,
                        src: "/images/event-top-banner.png",
                        width: "100",
                        height: "304",
                        layout: "responsive",
                        objectFit: "cover",
                        alt: classesCategory?.name
                    }) : /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        className: (classesList_module_default()).banner_image,
                        src: topBannerMediaUrl + "/" + topBanner.image,
                        width: "100",
                        height: "304",
                        layout: "responsive",
                        objectFit: "cover",
                        alt: classesCategory?.name
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (classesList_module_default()).categoryList,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                            children: "Explore Inspiring Courses"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("ul", {
                            children: category_all?.map((ls, i)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                    className: classesCategory?.id == ls?.id ? (classesList_module_default()).card + " " + (classesList_module_default()).is_active : (classesList_module_default()).card,
                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "/classes/" + ls.slug,
                                        children: ls.name
                                    })
                                }, ls.id))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (classesList_module_default()).pageHead,
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (classesList_module_default()).parent,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: (classesList_module_default()).left,
                                children: /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                    children: classesCategory?.name
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: (classesList_module_default()).right,
                                children: classesTotal > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                    children: [
                                        "Viewing 1 - ",
                                        classesList?.length,
                                        " of ",
                                        classesTotal,
                                        " products"
                                    ]
                                }) : ""
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (classesList_module_default()).classesList,
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: classesList?.length > 0 ? /*#__PURE__*/ jsx_runtime.jsx("ul", {
                        className: (classesList_module_default()).classsGrid,
                        children: classesList?.map((ls, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: (classesList_module_default()).figureContainer,
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "/classe/" + ls?.slug,
                                            children: ls?.images.length > 0 ? /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                className: (classesList_module_default()).figure,
                                                src: media_url + "/" + ls?.images[0],
                                                width: "200",
                                                height: "212",
                                                alt: "ls.title",
                                                quality: 100
                                            }) : ""
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: (classesList_module_default()).contentBody,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: (classesList_module_default()).dateTime,
                                                children: [
                                                    ls.start_date != null ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                        children: [
                                                            external_moment_default()(ls.start_date).format("M/D/Y"),
                                                            " "
                                                        ]
                                                    }) : "",
                                                    ls.class_length != null ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx(GlobalClock, {}),
                                                            " ",
                                                            ls?.class_length
                                                        ]
                                                    }) : ""
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: (classesList_module_default()).instructor,
                                                children: ls?.instruct_name
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                className: (classesList_module_default()).title,
                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: "/classe/" + ls?.slug,
                                                    children: ls?.title
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                className: (classesList_module_default()).total,
                                                children: [
                                                    ls?.total_student,
                                                    " students"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }, ls?.id))
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                        className: (classesList_module_default()).notEvent,
                        children: [
                            "There are no classes in ",
                            classesCategory?.name?.toLowerCase(),
                            " category."
                        ]
                    })
                })
            }),
            isLoadmoreButton && classesTotal > pageRecode ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (classesList_module_default()).loadMore,
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                        className: (classesList_module_default()).buttonLoadMore,
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
    const urlSlug = context.params.slug;
    const globalSettings = await (0,global_header_footer/* default */.Z)();
    if (urlSlug != "") {
        //check filter start
        let filterStr = "?filter=desc&limit=20&offset=0";
        const filter = context?.query?.filter;
        if (typeof filter != "undefined") {
            filterStr = "?filter=" + filter;
        }
        //check filter end
        //banner
        const reqFetchBanner = await fetch({"path":"https://demoadmin.mwrweb.com/","api":"https://demoadmin.mwrweb.com/api/","jwt_secret":"UOUkeFnqauTf3qw0Hy6pv1JQq572l82gRBgnNbemPEjV2bTG2Bg0A3avm1svL9gs"}.api + "get-banners/vclasses");
        const resultBanner = await reqFetchBanner.json();
        const reqFetch = await fetch({"path":"https://demoadmin.mwrweb.com/","api":"https://demoadmin.mwrweb.com/api/","jwt_secret":"UOUkeFnqauTf3qw0Hy6pv1JQq572l82gRBgnNbemPEjV2bTG2Bg0A3avm1svL9gs"}.api + "get-vclasses/" + urlSlug + filterStr);
        const classes = await reqFetch.json();
        const page_content = {
            classes: classes
        };
        return {
            props: {
                top_banner: resultBanner,
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

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fclasses%2F%5Bslug%5D&absolutePagePath=private-next-pages%2Fclasses%2F%5Bslug%5D.js&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fclasses_2F_5Bslug_5D_absolutePagePath_private_next_pages_2Fclasses_2F_5Bslug_5D_js_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(_slug_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(_slug_namespaceObject, "getStaticPaths")
        const next_route_loaderpage_2Fclasses_2F_5Bslug_5D_absolutePagePath_private_next_pages_2Fclasses_2F_5Bslug_5D_js_preferredRegion_middlewareConfig_e30_3D_getServerSideProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(_slug_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(_slug_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/classes/[slug]","pathname":"/classes/[slug]","bundlePath":"","filename":""}}
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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7812,1664,2636,5675,9680,2027], () => (__webpack_exec__(7741)));
module.exports = __webpack_exports__;

})();