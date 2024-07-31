"use strict";
(() => {
var exports = {};
exports.id = 3748;
exports.ids = [3748];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 8304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/credentials"
const credentials_namespaceObject = require("next-auth/providers/credentials");
var credentials_default = /*#__PURE__*/__webpack_require__.n(credentials_namespaceObject);
// EXTERNAL MODULE: external "jsonwebtoken"
var external_jsonwebtoken_ = __webpack_require__(9344);
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_);
;// CONCATENATED MODULE: external "nookies"
const external_nookies_namespaceObject = require("nookies");
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js




const nextAuthOptions = (req, res)=>{
    return {
        session: {
            strategy: "jwt",
            maxAge: 60 * 60 * 24 * 14
        },
        jwt: {
            maxAge: 60 * 60 * 24 * 14,
            secret: "farichildFun@09072023",
            async encode ({ secret, token }) {
                return external_jsonwebtoken_default().sign(token, secret);
            },
            async decode ({ secret, token }) {
                return external_jsonwebtoken_default().verify(token, secret);
            }
        },
        providers: [
            credentials_default()({
                id: "nextjs-mainlogin-form",
                name: "Sign in",
                credentials: {
                    email: {
                        label: "Email",
                        type: "email",
                        placeholder: "example@example.com"
                    },
                    password: {
                        label: "Password",
                        type: "password"
                    }
                },
                secret: "farichildFun@09072023",
                async authorize (credentials) {
                    const formData = new FormData();
                    try {
                        formData.append("email", credentials.username);
                        formData.append("password", credentials.password);
                        const loginRes = await fetch(`${{"path":"https://demoadmin.mwrweb.com/","api":"https://demoadmin.mwrweb.com/api/","jwt_secret":"UOUkeFnqauTf3qw0Hy6pv1JQq572l82gRBgnNbemPEjV2bTG2Bg0A3avm1svL9gs"}.api}login`, {
                            method: "POST",
                            body: formData
                        });
                        const loginData = await loginRes.json();
                        if (loginData.status == false) {
                            formData.append("email", "");
                            formData.append("password", "");
                            nookies.destroy(null, "access_token");
                            return false;
                        } else {
                            const access_token = loginData.data.access_token;
                            const userData = loginData.data.user_info;
                            const user = {
                                id: userData.id,
                                f_name: userData.name,
                                l_name: userData.last_name,
                                email: userData.email,
                                bcId: userData.bigcommerce_customer_id,
                                access_token: access_token
                            };
                            (0,external_nookies_namespaceObject.setCookie)({
                                res
                            }, "access_token", access_token, {
                                maxAge: 5 * 24 * 60 * 60,
                                httpOnly: true,
                                path: "/"
                            });
                            formData.append("email", "");
                            formData.append("password", "");
                            return {
                                user: user
                            };
                        }
                    } catch (err) {
                        formData.append("email", "");
                        formData.append("password", "");
                        return false;
                    }
                }
            })
        ],
        callbacks: {
            async jwt ({ token, user }) {
                return {
                    ...token,
                    ...user
                };
            },
            async session ({ session, user, token }) {
                return {
                    ...token,
                    ...user
                };
            },
            authorized: ({ token })=>!!token
        },
        pages: {
            signIn: "/login",
            signOut: "/logout",
            error: "/auth/error"
        }
    };
};
const NextAuthFN = (req, res)=>{
    return external_next_auth_default()(req, res, nextAuthOptions(req, res));
};
/* harmony default export */ const _nextauth_ = (NextAuthFN);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8304));
module.exports = __webpack_exports__;

})();