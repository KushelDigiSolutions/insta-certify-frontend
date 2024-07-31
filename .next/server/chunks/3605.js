exports.id = 3605;
exports.ids = [3605];
exports.modules = {

/***/ 1384:
/***/ ((module) => {

// Exports
module.exports = {
	"divRow": "shoppings-collections_divRow__N9oAZ",
	"d-flex": "shoppings-collections_d-flex__n9B9o",
	"d-flex-between": "shoppings-collections_d-flex-between__slig2",
	"eleLazyLoad": "shoppings-collections_eleLazyLoad__K3Ova",
	"placeHolderShimmer": "shoppings-collections_placeHolderShimmer__gqs0A",
	"collections": "shoppings-collections_collections__JIipZ",
	"collectionsHead": "shoppings-collections_collectionsHead__SmmkZ",
	"collectionsMenu": "shoppings-collections_collectionsMenu__Z1EDo",
	"menuClose": "shoppings-collections_menuClose__RQ8WT",
	"isOpen": "shoppings-collections_isOpen___qw_o",
	"collLeavel_1": "shoppings-collections_collLeavel_1__yhSmj",
	"collLeavel_2": "shoppings-collections_collLeavel_2__qKRWQ",
	"iconDown": "shoppings-collections_iconDown__cCeFz",
	"collLeavel_3": "shoppings-collections_collLeavel_3__J5ekT"
};


/***/ }),

/***/ 6038:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ShoppingCollections)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_css_shoppings_collections_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1384);
/* harmony import */ var _pages_css_shoppings_collections_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_pages_css_shoppings_collections_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _svg_global_arrowDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4974);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2947);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _svg_global_close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6337);








function ShoppingCollections(props) {
    const [isOpen, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(".collLeavel_1 > li > a .iconDown").on("click", function() {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).toggleClass("is-active");
            jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parents("li").find(".collLeavel_2").toggleClass("is-active");
            return false;
        });
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(".collLeavel_2 > li > a .iconDown").on("click", function() {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).toggleClass("is-active");
            jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parents("li").find(".collLeavel_3").toggleClass("is-active");
            return false;
        });
    }, []);
    const closeMenu = ()=>{
        setOpen(!isOpen);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container",
        role: "article",
        "data-type": "menu",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_pages_css_shoppings_collections_module_scss__WEBPACK_IMPORTED_MODULE_6___default().collections),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_pages_css_shoppings_collections_module_scss__WEBPACK_IMPORTED_MODULE_6___default().collectionsHead) + " collectionsHead",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            children: props.title
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            onClick: ()=>setOpen(!isOpen),
                            children: [
                                "View All",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    height: "28px",
                                    viewBox: "0 0 32 32",
                                    width: "28px",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `${(_pages_css_shoppings_collections_module_scss__WEBPACK_IMPORTED_MODULE_6___default().collectionsMenu)} ${!isOpen ? (_pages_css_shoppings_collections_module_scss__WEBPACK_IMPORTED_MODULE_6___default().isOpen) : ""}`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: (_pages_css_shoppings_collections_module_scss__WEBPACK_IMPORTED_MODULE_6___default().menuClose),
                            onClick: ()=>closeMenu(),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_global_close__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            role: "menu",
                            className: `${(_pages_css_shoppings_collections_module_scss__WEBPACK_IMPORTED_MODULE_6___default().collLeavel_1) + " collLeavel_1"}`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "/shopping",
                                        children: "Home"
                                    })
                                }),
                                props.collections.length > 0 && props.collections.map((ls, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                href: "/shoppings" + ls.path,
                                                children: [
                                                    ls.name,
                                                    ls.children.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        className: (_pages_css_shoppings_collections_module_scss__WEBPACK_IMPORTED_MODULE_6___default().iconDown) + " iconDown",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_global_arrowDown__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                                                            " "
                                                        ]
                                                    }) : ""
                                                ]
                                            }),
                                            ls.children.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                className: (_pages_css_shoppings_collections_module_scss__WEBPACK_IMPORTED_MODULE_6___default().collLeavel_2) + " collLeavel_2",
                                                children: ls.children.length > 0 && ls.children.map((lss, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                href: "/shoppings" + lss.path,
                                                                children: [
                                                                    lss.name,
                                                                    lss.children.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                        className: (_pages_css_shoppings_collections_module_scss__WEBPACK_IMPORTED_MODULE_6___default().iconDown) + " iconDown",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_global_arrowDown__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                                                                            " "
                                                                        ]
                                                                    }) : ""
                                                                ]
                                                            }),
                                                            lss.children.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                className: (_pages_css_shoppings_collections_module_scss__WEBPACK_IMPORTED_MODULE_6___default().collLeavel_3) + " collLeavel_3",
                                                                children: lss.children.length > 0 && lss.children.map((lsss, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            href: "/shoppings" + lsss.path,
                                                                            children: lsss.name
                                                                        })
                                                                    }, lsss.entityId))
                                                            }) : ""
                                                        ]
                                                    }, lss.entityId))
                                            }) : ""
                                        ]
                                    }, ls.entityId))
                            ]
                        })
                    ]
                })
            ]
        })
    });
}


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


/***/ })

};
;