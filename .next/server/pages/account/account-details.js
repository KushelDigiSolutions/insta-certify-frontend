"use strict";
(() => {
var exports = {};
exports.id = 7663;
exports.ids = [7663];
exports.modules = {

/***/ 4319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Faccount_2Faccount_details_absolutePagePath_private_next_pages_2Faccount_2Faccount_details_js_preferredRegion_middlewareConfig_e30_3D_),
  getServerSideProps: () => (/* binding */ next_route_loaderpage_2Faccount_2Faccount_details_absolutePagePath_private_next_pages_2Faccount_2Faccount_details_js_preferredRegion_middlewareConfig_e30_3D_getServerSideProps),
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

// NAMESPACE OBJECT: ./pages/account/account-details.js
var account_details_namespaceObject = {};
__webpack_require__.r(account_details_namespaceObject);
__webpack_require__.d(account_details_namespaceObject, {
  "default": () => (AccountDetails),
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
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__(2947);
var external_jquery_default = /*#__PURE__*/__webpack_require__.n(external_jquery_);
// EXTERNAL MODULE: ./utils/common/number-only.js
var number_only = __webpack_require__(7734);
// EXTERNAL MODULE: ./pages/account/navigation.js
var navigation = __webpack_require__(347);
// EXTERNAL MODULE: ./utils/common/global-header-footer.js
var global_header_footer = __webpack_require__(4312);
;// CONCATENATED MODULE: ./pages/account/account-details.js










function AccountDetails(props) {
    const [pageLoad, setPageLoad] = (0,external_react_.useState)(false);
    const [formSubmit, setFormSubmit] = (0,external_react_.useState)(false);
    const [message, setMessage] = (0,external_react_.useState)("");
    const [profileImageShow, setProfileImageShow] = (0,external_react_.useState)("");
    const [profileImage, setProfileImage] = (0,external_react_.useState)("");
    const [profileImageFile, setProfileImageFile] = (0,external_react_.useState)([]);
    const [firstName, setFirstName] = (0,external_react_.useState)("");
    const [lastName, setLastName] = (0,external_react_.useState)("");
    const [company, setCompany] = (0,external_react_.useState)("");
    const [phoneNumber, setPhoneNumber] = (0,external_react_.useState)("");
    const [emailAddress, setEmailAddress] = (0,external_react_.useState)("");
    const [password, setPassword] = (0,external_react_.useState)("");
    const [confirmPassword, setConfirmPassword] = (0,external_react_.useState)("");
    const [currentPassword, setCurrentPassword] = (0,external_react_.useState)("");
    const userData = props?.page_content?.user;
    (0,number_only/* default */.Z)();
    const getuserData = async ()=>{
        setPageLoad(true);
        try {
            const getUserData = await fetch(`${{"path":"https://demoadmin.mwrweb.com/","api":"https://demoadmin.mwrweb.com/api/","jwt_secret":"UOUkeFnqauTf3qw0Hy6pv1JQq572l82gRBgnNbemPEjV2bTG2Bg0A3avm1svL9gs"}.api}user-profile`, {
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + userData.access_token,
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });
            const getUserRes = await getUserData.json();
            if (getUserRes.status == true) {
                const obj = getUserRes.data;
                setFirstName(obj.name);
                setLastName(obj.last_name);
                setEmailAddress(obj.email);
                if (typeof obj.avatar != null) {
                    setProfileImageShow(obj.avatar);
                }
                if (typeof obj.company != null) {
                    setCompany(obj.company);
                }
                if (typeof obj.mobile_number != null) {
                    setPhoneNumber(obj.mobile_number);
                }
                setPageLoad(false);
            } else {
                window.location.href = "/logout";
            }
        } catch (error) {
            setMessage("Something went wrong.");
            setPageLoad(false);
        }
    };
    (0,external_react_.useEffect)(()=>{
        const files = external_jquery_default()("#profileImage");
        function getFileData() {
            var input = document.getElementById("profileImage");
            var children = "";
            setProfileImageFile(external_jquery_default()("#profileImage")[0].files[0]);
            console.log(external_jquery_default()("#profileImage")[0].files[0]);
            for(var i = 0; i < input.files.length; ++i){
                console.log("input.files");
                children += '<img src="' + window.URL.createObjectURL(input.files[i]) + '" alt="' + input.files.item(i).name + '" title="' + input.files.item(i).name + '" />';
            }
            external_jquery_default()(".uploadedImg").html(children);
        }
        files.change(function() {
            const maxAllowedSize = 10 * 1024 * 1024;
            const fileValue = external_jquery_default()(this).val();
            if (fileValue != "") {
                const idxDot = fileValue.lastIndexOf(".") + 1;
                const extFile = fileValue.substr(idxDot, fileValue.length).toLowerCase();
                if (extFile == "jpg" || extFile == "jpeg" || extFile == "png") {
                    const imageSize = external_jquery_default()(this).prop("files")[0]?.size;
                    const fileName = external_jquery_default()(this).prop("files")[0]?.name;
                    if (imageSize <= maxAllowedSize) {
                        getFileData();
                    } else {
                        fileList.html("");
                        files.val("");
                        alert("Too big of a file. Uploads must be under 3 MB in size.");
                        return false;
                    }
                } else {
                    fileList.html("");
                    files.val("");
                    alert("Only images & documents files are allowed!");
                    return false;
                }
            } else {
                fileList.html("");
                files.val("");
            }
        });
        getuserData();
    }, []);
    const updateData = async ()=>{
        setPageLoad(true);
        const formData = {
            name: firstName,
            last_name: lastName,
            email: emailAddress,
            company: company,
            phone_number: phoneNumber,
            password: password,
            password_confirmation: confirmPassword,
            current_password: currentPassword
        };
        const updateFormData = await fetch(`${{"path":"https://demoadmin.mwrweb.com/","api":"https://demoadmin.mwrweb.com/api/","jwt_secret":"UOUkeFnqauTf3qw0Hy6pv1JQq572l82gRBgnNbemPEjV2bTG2Bg0A3avm1svL9gs"}.api}profile-update`, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Authorization": "Bearer " + userData.access_token,
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });
        const updateRes = await updateFormData.json();
        console.log("updateRes");
        console.log(updateRes);
        if (updateRes.status == true) {
            setMessage(updateRes.message);
        } else {
            setMessage(updateRes.message);
        }
        setPageLoad(false);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (firstName == "") {
            setMessage("First Name field cannot be blank.");
            setFormSubmit(false);
        } else if (lastName == "") {
            setMessage("Last Name field cannot be blank.");
            setFormSubmit(false);
        } else if (emailAddress == "") {
            setMessage("You must enter a valid email.");
            setFormSubmit(false);
        } else if (password != "" && password.length < 8) {
            setMessage("The password must be at least 8 characters.");
            setFormSubmit(false);
            return false;
        } else if (password != "" && password.search(/[a-z]/i) < 0) {
            setMessage("Your password must contain at least one letter.");
            setFormSubmit(false);
            return false;
        } else if (password != "" && password.search(/[0-9]/) < 0) {
            setMessage("Your password must contain at least one letter.");
            setFormSubmit(false);
            return false;
        } else if (password != confirmPassword) {
            setMessage("Password and confirm password does not match.");
            setFormSubmit(false);
        } else if (password != "" && confirmPassword != "" && currentPassword == "") {
            setMessage("Please enter the current password.");
            setFormSubmit(false);
        } else {
            setMessage("");
            setFormSubmit(true);
            updateData();
        }
    };
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: (account_module_default()).pageAccountBG,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (account_module_default()).pageAccount,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("title", {
                            children: "Account Details"
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
                            children: "Account settings"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(navigation["default"], {
                            isActive: "3"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: (account_module_default()).accountContainer,
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: (account_module_default()).formBuilder,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                    method: "POST",
                                    onSubmit: handleSubmit,
                                    encType: "multipart/form-data",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: (account_module_default()).profilePhoto,
                                            style: {
                                                display: "none"
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                htmlFor: "profileImage",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                        width: "33",
                                                        height: "32",
                                                        viewBox: "0 0 33 32",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                            d: "M16.4987 8C17.9654 8 19.1654 9.2 19.1654 10.6667C19.1654 12.1333 17.9654 13.3333 16.4987 13.3333C15.032 13.3333 13.832 12.1333 13.832 10.6667C13.832 9.2 15.032 8 16.4987 8ZM16.4987 21.3333C20.0987 21.3333 24.232 23.0533 24.4987 24H8.4987C8.80536 23.04 12.912 21.3333 16.4987 21.3333ZM16.4987 5.33333C13.552 5.33333 11.1654 7.72 11.1654 10.6667C11.1654 13.6133 13.552 16 16.4987 16C19.4454 16 21.832 13.6133 21.832 10.6667C21.832 7.72 19.4454 5.33333 16.4987 5.33333ZM16.4987 18.6667C12.9387 18.6667 5.83203 20.4533 5.83203 24V26.6667H27.1654V24C27.1654 20.4533 20.0587 18.6667 16.4987 18.6667Z",
                                                            fill: "#3595F6"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                        children: "Add A Profile Image"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        children: "Drag and drop or choose a file to upload"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                        type: "file",
                                                        name: "profileImage",
                                                        id: "profileImage",
                                                        value: profileImage,
                                                        accept: "image/jpeg,image/gif,image/png",
                                                        onChange: (e)=>setProfileImage(e.target.value)
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: (account_module_default()).uploadedImg + " uploadedImg",
                                                        children: profileImageShow != "" ? /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: profileImageShow,
                                                            alt: "Img"
                                                        }) : ""
                                                    })
                                                ]
                                            })
                                        }),
                                        message != "" ? /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: (account_module_default()).formMessge,
                                            children: message
                                        }) : "",
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: (account_module_default()).formGroup,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: (account_module_default()).formControl,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                            children: [
                                                                "First Name ",
                                                                /*#__PURE__*/ jsx_runtime.jsx("small", {
                                                                    children: "*"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                            type: "text",
                                                            name: "firstName",
                                                            value: firstName,
                                                            onChange: (e)=>setFirstName(e.target.value),
                                                            maxLength: "30"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: (account_module_default()).formControl,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                            children: [
                                                                "Last Name ",
                                                                /*#__PURE__*/ jsx_runtime.jsx("small", {
                                                                    children: "*"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                            type: "text",
                                                            name: "lastName",
                                                            value: lastName,
                                                            onChange: (e)=>setLastName(e.target.value),
                                                            maxLength: "30"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: (account_module_default()).formGroup,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: (account_module_default()).formControl,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                            children: "Company"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                            type: "text",
                                                            name: "company",
                                                            value: company,
                                                            onChange: (e)=>setCompany(e.target.value),
                                                            maxLength: "30"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: (account_module_default()).formControl,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                            children: "Phone Number"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                            type: "text",
                                                            maxLength: "13",
                                                            className: "numberOnly",
                                                            name: "phoneNumber",
                                                            value: phoneNumber,
                                                            onChange: (e)=>setPhoneNumber(e.target.value)
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: (account_module_default()).formGroup,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: (account_module_default()).formControl,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                            children: [
                                                                "Email Address ",
                                                                /*#__PURE__*/ jsx_runtime.jsx("small", {
                                                                    children: "*"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                            type: "text",
                                                            name: "emailAddress",
                                                            value: emailAddress,
                                                            onChange: (e)=>setEmailAddress(e.target.value),
                                                            maxLength: "50"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: (account_module_default()).formControl,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                            children: "Password"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                            type: "text",
                                                            name: "password",
                                                            value: password,
                                                            onChange: (e)=>setPassword(e.target.value),
                                                            maxLength: "20"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: (account_module_default()).formGroup,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: (account_module_default()).formControl,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                            children: "Confirm Password"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                            type: "text",
                                                            name: "confirmPassword",
                                                            value: confirmPassword,
                                                            onChange: (e)=>setConfirmPassword(e.target.value),
                                                            maxLength: "20"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: (account_module_default()).formControl,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                            children: "Current Password"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                            type: "text",
                                                            name: "currentPassword",
                                                            value: currentPassword,
                                                            onChange: (e)=>setCurrentPassword(e.target.value),
                                                            maxLength: "20"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: (account_module_default()).formAction,
                                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                type: "submit",
                                                className: (account_module_default()).buttonSubmit,
                                                children: "Update Details"
                                            })
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
        return {
            props: {
                page_content: {
                    user: session.user
                },
                navbar: globalSettings?.header,
                footer: globalSettings?.footer
            }
        };
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Faccount%2Faccount-details&absolutePagePath=private-next-pages%2Faccount%2Faccount-details.js&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Faccount_2Faccount_details_absolutePagePath_private_next_pages_2Faccount_2Faccount_details_js_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(account_details_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(account_details_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(account_details_namespaceObject, "getStaticPaths")
        const next_route_loaderpage_2Faccount_2Faccount_details_absolutePagePath_private_next_pages_2Faccount_2Faccount_details_js_preferredRegion_middlewareConfig_e30_3D_getServerSideProps = (0,helpers/* hoist */.l)(account_details_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(account_details_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(account_details_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(account_details_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(account_details_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(account_details_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(account_details_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(account_details_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/account/account-details","pathname":"/account/account-details","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: account_details_namespaceObject })
        
        
    

/***/ }),

/***/ 7734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ NumberOnly)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2947);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function NumberOnly() {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".numberOnly").bind("copy paste", function(e) {
            e.preventDefault();
        });
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".numberOnly").on("keypress", function(event) {
            var theEvent = event;
            // Handle paste
            if (theEvent.type === "paste") {
                key = event.clipboardData.getData("text/plain");
            } else {
                // Handle key press
                var key = theEvent.keyCode || theEvent.which;
                key = String.fromCharCode(key);
            }
            var regex = /[0-9]|\./;
            if (!regex.test(key)) {
                theEvent.returnValue = false;
                if (theEvent.preventDefault) theEvent.preventDefault();
            }
        });
    }, []);
}


/***/ }),

/***/ 2947:
/***/ ((module) => {

module.exports = require("jquery");

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
var __webpack_exports__ = __webpack_require__.X(0, [7812,1664,347,7376], () => (__webpack_exec__(4319)));
module.exports = __webpack_exports__;

})();