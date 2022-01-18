"use strict";
(() => {
var exports = {};
exports.id = 616;
exports.ids = [616];
exports.modules = {

/***/ 266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Signup)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74);
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_5__);






function Signup() {
    const paperStyle = {
        padding: 20,
        height: '70vh',
        width: 380,
        margin: "20px auto"
    };
    const avatarStyle = {
        backgroundColor: '#662929'
    };
    const btnstyle = {
        margin: '20px 0',
        backgroundColor: '#662929'
    };
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { 0: username , 1: setUsername  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: password1 , 1: setPassword1  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: password2 , 1: setPassword2  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const addUser = async ()=>{
        try {
            if (password1 === password2) {
                const userData = {
                    username: username,
                    password: password1
                };
                const res = await fetch(`http://localhost:3001/signup` || 0, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                });
                const data = await res.json();
                router.push('/employee');
            } else {
                console.log('User doesn\' t exist!');
            }
        } catch (e) {
            console.log(e);
            const error = true;
            return {
                props: {
                    error
                }
            };
        }
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "My Employees"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Paper, {
                    elevation: 10,
                    style: paperStyle,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                            align: "center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Avatar, {
                                    style: avatarStyle,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    style: {
                                        color: '#662929',
                                        fontFamily: 'cursive'
                                    },
                                    children: "Sign up"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.TextField, {
                            label: "Username",
                            placeholder: "Enter username",
                            fullWidth: true,
                            onChange: (event)=>setUsername(event.target.value)
                            ,
                            required: true
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.TextField, {
                            label: "Password",
                            placeholder: "Enter password",
                            type: "password",
                            fullWidth: true,
                            onChange: (event)=>setPassword1(event.target.value)
                            ,
                            required: true
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.TextField, {
                            label: "Confirm Password",
                            placeholder: "Enter password",
                            type: "password",
                            fullWidth: true,
                            onChange: (event)=>setPassword2(event.target.value)
                            ,
                            required: true
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
                            type: "submit",
                            color: "primary",
                            variant: "contained",
                            style: btnstyle,
                            fullWidth: true,
                            onClick: addUser,
                            children: "Sign up"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                            align: "center",
                            color: "textSecondary",
                            children: "or"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
                            type: "submit",
                            variant: "contained",
                            style: {
                                margin: '20px 0',
                                color: '#662929',
                                backgroundColor: 'white'
                            },
                            fullWidth: true,
                            children: "Google"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                            align: "center",
                            marginTop: 6,
                            style: {
                                color: '#662929',
                                fontFamily: 'cursive'
                            },
                            children: [
                                " Do you have an account?",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Link, {
                                    href: "/",
                                    children: "Sign in"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
};


/***/ }),

/***/ 130:
/***/ ((module) => {

module.exports = require("@material-ui/core");

/***/ }),

/***/ 74:
/***/ ((module) => {

module.exports = require("@material-ui/icons/LockOutlined");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(266));
module.exports = __webpack_exports__;

})();