exports.id = 3876;
exports.ids = [3876];
exports.modules = {

/***/ 2231:
/***/ ((module) => {

// Exports
module.exports = {
	"divRow": "eventList_divRow__IwsgW",
	"d-flex": "eventList_d-flex__BbXW5",
	"d-flex-between": "eventList_d-flex-between__n5_00",
	"eleLazyLoad": "eventList_eleLazyLoad__1J6zW",
	"placeHolderShimmer": "eventList_placeHolderShimmer__rlrOg",
	"page_top_banner": "eventList_page_top_banner__lVpth",
	"banner_heading": "eventList_banner_heading__0b0x9",
	"banner_image": "eventList_banner_image__t1JqI",
	"categoryList": "eventList_categoryList__HtwVZ",
	"card": "eventList_card__G7GNC",
	"figureContainer": "eventList_figureContainer__LtSDs",
	"cateTitle": "eventList_cateTitle__oQf60",
	"cateCount": "eventList_cateCount__sJ_Y4",
	"is_active": "eventList_is_active__lV6Qn",
	"eleEventList": "eventList_eleEventList__4OkVZ",
	"eleEventListTop": "eventList_eleEventListTop__g2Fp_",
	"event_head": "eventList_event_head__ZyYZN",
	"left": "eventList_left__PYI7R",
	"right": "eventList_right__x0cP1",
	"sortEvents": "eventList_sortEvents__u04iB",
	"filterEvents": "eventList_filterEvents__qmH5n",
	"popup_sort_filter": "eventList_popup_sort_filter__L1ZBS",
	"isActive": "eventList_isActive__uMVVi",
	"eventlistGrid": "eventList_eventlistGrid__R0bnz",
	"eventlist": "eventList_eventlist__dGINE",
	"parent": "eventList_parent__BmFam",
	"eventDateTime": "eventList_eventDateTime__ryk7d",
	"contentBody": "eventList_contentBody__eb95p",
	"eventTitle": "eventList_eventTitle__qEkVF",
	"eventType": "eventList_eventType__1uv70",
	"eventTypeList": "eventList_eventTypeList__RtpWy",
	"eventDesc": "eventList_eventDesc__5g03w",
	"eventAction": "eventList_eventAction__vh5v4",
	"price": "eventList_price__J_Hzl",
	"notEvent": "eventList_notEvent__uOwK6"
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