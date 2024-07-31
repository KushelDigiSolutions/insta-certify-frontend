exports.id = 2703;
exports.ids = [2703];
exports.modules = {

/***/ 8972:
/***/ ((module) => {

// Exports
module.exports = {
	"divRow": "equipment-rental_divRow__9qm8i",
	"d-flex": "equipment-rental_d-flex__h9Luk",
	"d-flex-between": "equipment-rental_d-flex-between__3HTzP",
	"eleLazyLoad": "equipment-rental_eleLazyLoad__Py1t6",
	"placeHolderShimmer": "equipment-rental_placeHolderShimmer__rjXIp",
	"page_top_banner": "equipment-rental_page_top_banner__IuHqI",
	"banner_heading": "equipment-rental_banner_heading__tmVkU",
	"banner_image": "equipment-rental_banner_image__4_PCh",
	"categoryList": "equipment-rental_categoryList__jvXNC",
	"is_active": "equipment-rental_is_active__JpMMB",
	"loadMore": "equipment-rental_loadMore__oVBTi",
	"buttonLoadMore": "equipment-rental_buttonLoadMore__BBxfs",
	"categoryLayout": "equipment-rental_categoryLayout__4T_Hg",
	"cardGrids": "equipment-rental_cardGrids__P3clk",
	"noData": "equipment-rental_noData__PfYsT"
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