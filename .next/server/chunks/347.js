exports.id = 347;
exports.ids = [347];
exports.modules = {

/***/ 1040:
/***/ ((module) => {

// Exports
module.exports = {
	"divRow": "account_divRow__pO6AW",
	"d-flex": "account_d-flex__f3tWw",
	"d-flex-between": "account_d-flex-between__auzeR",
	"eleLazyLoad": "account_eleLazyLoad__VtLLO",
	"orderList": "account_orderList__i6_xT",
	"orderListUL": "account_orderListUL__AeTlx",
	"accountProduct": "account_accountProduct__whSVt",
	"productFigure": "account_productFigure__RCIfp",
	"productFigureLoad": "account_productFigureLoad__WfS1T",
	"placeHolderShimmer": "account_placeHolderShimmer__C5LwK",
	"accountNavigation": "account_accountNavigation__0HNF1",
	"isActive": "account_isActive__qHlMD",
	"pageAccountBG": "account_pageAccountBG__uGeBc",
	"pageAccount": "account_pageAccount__4Fhuq",
	"accountContainer": "account_accountContainer__FLs7O",
	"pageHead": "account_pageHead__MCUhQ",
	"profilePhoto": "account_profilePhoto__VFlEY",
	"uploadedImg": "account_uploadedImg__uxBBo",
	"formMessge": "account_formMessge__XbOJf",
	"formBuilder": "account_formBuilder__yP5yI",
	"formGroup": "account_formGroup__YQmTy",
	"formControl": "account_formControl__jCmqq",
	"formAction": "account_formAction__LmRy1",
	"buttonCancel": "account_buttonCancel__j_5iD",
	"buttonSubmit": "account_buttonSubmit__8BOel",
	"addressBook": "account_addressBook__OAfdQ",
	"addressBookList": "account_addressBookList__ctYwp",
	"edit": "account_edit__nxxPB",
	"delete": "account_delete__8MPG1",
	"addressBookNew": "account_addressBookNew__IrLjq",
	"accountListItem": "account_accountListItem__bV5fC",
	"productBody": "account_productBody__NY5zd",
	"bodyContent": "account_bodyContent__c3IsO",
	"orderDates": "account_orderDates__K8iBg",
	"dates": "account_dates__3f04T",
	"label": "account_label___zzSB",
	"date": "account_date___GybF",
	"bodyAction": "account_bodyAction__wEOtN",
	"orderStatus": "account_orderStatus__8YVbK",
	"orderQrCode": "account_orderQrCode__kdI8t",
	"noOrder": "account_noOrder__vrv_D"
};


/***/ }),

/***/ 347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_account_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1040);
/* harmony import */ var _css_account_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_account_module_scss__WEBPACK_IMPORTED_MODULE_3__);




function Navigation(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_css_account_module_scss__WEBPACK_IMPORTED_MODULE_3___default().accountNavigation),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: props.isActive == "1" ? (_css_account_module_scss__WEBPACK_IMPORTED_MODULE_3___default().isActive) : "",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/account/order",
                            children: "Orders"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: props.isActive == "2" ? (_css_account_module_scss__WEBPACK_IMPORTED_MODULE_3___default().isActive) : "",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/account/address-book",
                            children: "Addresses"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: props.isActive == "3" ? (_css_account_module_scss__WEBPACK_IMPORTED_MODULE_3___default().isActive) : "",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/account/account-details",
                            children: "Account Settings"
                        })
                    })
                ]
            })
        })
    });
}


/***/ })

};
;