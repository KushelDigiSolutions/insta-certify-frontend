exports.id = 2027;
exports.ids = [2027];
exports.modules = {

/***/ 2971:
/***/ ((module) => {

// Exports
module.exports = {
	"divRow": "classesList_divRow__GWzhJ",
	"d-flex": "classesList_d-flex__5uRYQ",
	"d-flex-between": "classesList_d-flex-between__3rEIa",
	"eleLazyLoad": "classesList_eleLazyLoad__b33Wu",
	"placeHolderShimmer": "classesList_placeHolderShimmer__3u8YS",
	"page_top_banner": "classesList_page_top_banner__oFhcH",
	"banner_heading": "classesList_banner_heading__ooZL4",
	"banner_image": "classesList_banner_image__P2Ylq",
	"categoryList": "classesList_categoryList__N3tsl",
	"is_active": "classesList_is_active__1eRbF",
	"pageHead": "classesList_pageHead__qk_fz",
	"parent": "classesList_parent__bh33v",
	"left": "classesList_left__Pbz6g",
	"right": "classesList_right__c0alv",
	"classesList": "classesList_classesList__Lek4Q",
	"classsGrid": "classesList_classsGrid__NKLiQ",
	"figureContainer": "classesList_figureContainer__pKTtA",
	"contentBody": "classesList_contentBody___LWZ6",
	"dateTime": "classesList_dateTime__TpHPA",
	"instructor": "classesList_instructor__cxTLH",
	"title": "classesList_title__usoXg",
	"total": "classesList_total__mnxm9",
	"loadMore": "classesList_loadMore__RVUMV",
	"buttonLoadMore": "classesList_buttonLoadMore__uRi_S",
	"notEvent": "classesList_notEvent__egADJ"
};


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