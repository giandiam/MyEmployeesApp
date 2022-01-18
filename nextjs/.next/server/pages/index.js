"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74);
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_6__);







async function getServerSideProps() {
    try {
        const res = await fetch(`http://localhost:3001` || 0, {
            method: 'GET'
        });
        const data = await res.json();
        if (!data) return {
            notFound: true
        };
        return {
            props: {
                data
            }
        };
    } catch (e) {
        console.log(e);
        const error = true;
        return {
            props: {
                error
            }
        };
    }
}
function Home(props) {
    const { 0: username , 1: setUsername  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    if (props.error) {
        router.replace('/employees/error');
    }
    const usernameCheck = async ()=>{
        try {
            const usernameIdentity = props.data.map((obj)=>obj.first_name === username
            );
            if (usernameIdentity.includes(true)) {
                const userData = {
                    username: username
                };
                const res = await fetch(`http://localhost:3001/` || 0, {
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Paper, {
                    elevation: 10,
                    style: paperStyle,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                            align: "center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Avatar, {
                                    style: avatarStyle,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    style: {
                                        color: '#662929',
                                        fontFamily: 'cursive'
                                    },
                                    children: "Sign In"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.TextField, {
                            label: "Username",
                            placeholder: "Enter username",
                            fullWidth: true,
                            onChange: (event)=>setUsername(event.target.value)
                            ,
                            required: true
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.TextField, {
                            label: "Password",
                            placeholder: "Enter password",
                            type: "password",
                            fullWidth: true,
                            required: true
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Button, {
                            type: "submit",
                            color: "primary",
                            variant: "contained",
                            style: btnstyle,
                            fullWidth: true,
                            onClick: usernameCheck,
                            children: "Sign in"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                            align: "center",
                            color: "textSecondary",
                            children: "or"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Button, {
                            type: "submit",
                            variant: "contained",
                            style: {
                                margin: '20px 0',
                                color: '#662929',
                                backgroundColor: 'white'
                            },
                            onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signIn)()
                            ,
                            fullWidth: true,
                            children: "Google"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                            align: "center",
                            marginTop: 13,
                            style: {
                                color: '#662929',
                                fontFamily: 'cursive'
                            },
                            children: [
                                " Do you have an account?",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Link, {
                                    href: "/signup",
                                    children: "Sign Up"
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

/***/ 649:
/***/ ((module) => {

module.exports = require("next-auth/react");

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
var __webpack_exports__ = (__webpack_exec__(678));
module.exports = __webpack_exports__;

})();