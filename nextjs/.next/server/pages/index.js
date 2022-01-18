"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/LockOutlined */ \"@material-ui/icons/LockOutlined\");\n/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nasync function getServerSideProps() {\n    try {\n        const res = await fetch(`http://localhost:3001`, {\n            method: 'GET'\n        });\n        const data = await res.json();\n        if (!data) return {\n            notFound: true\n        };\n        return {\n            props: {\n                data\n            }\n        };\n    } catch (e) {\n        console.log(e);\n        const error = true;\n        return {\n            props: {\n                error\n            }\n        };\n    }\n}\nfunction Home(props) {\n    const { 0: username , 1: setUsername  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    if (props.error) {\n        router.replace('/employees/error');\n    }\n    const usernameCheck = async ()=>{\n        try {\n            const usernameIdentity = props.data.map((obj)=>obj.first_name === username\n            );\n            if (usernameIdentity.includes(true)) {\n                const userData = {\n                    username: username\n                };\n                const res = await fetch(`http://localhost:3001/`, {\n                    method: 'POST',\n                    headers: {\n                        Accept: 'application/json',\n                        'Content-Type': 'application/json'\n                    },\n                    body: JSON.stringify(userData)\n                });\n                const data = await res.json();\n                router.push('/employee');\n            } else {\n                console.log('User doesn\\' t exist!');\n            }\n        } catch (e) {\n            console.log(e);\n            const error = true;\n            return {\n                props: {\n                    error\n                }\n            };\n        }\n    };\n    const paperStyle = {\n        padding: 20,\n        height: '70vh',\n        width: 380,\n        margin: \"20px auto\"\n    };\n    const avatarStyle = {\n        backgroundColor: '#662929'\n    };\n    const btnstyle = {\n        margin: '20px 0',\n        backgroundColor: '#662929'\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\johnd\\\\OneDrive\\\\Υπολογιστής\\\\MyEmployeesApp\\\\nextjs\\\\pages\\\\index.js\",\n                    lineNumber: 79,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\johnd\\\\OneDrive\\\\Υπολογιστής\\\\MyEmployeesApp\\\\nextjs\\\\pages\\\\index.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: \"My Employees\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\johnd\\\\OneDrive\\\\Υπολογιστής\\\\MyEmployeesApp\\\\nextjs\\\\pages\\\\index.js\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\johnd\\\\OneDrive\\\\Υπολογιστής\\\\MyEmployeesApp\\\\nextjs\\\\pages\\\\index.js\",\n                    lineNumber: 83,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Paper, {\n                    elevation: 10,\n                    style: paperStyle,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\johnd\\\\OneDrive\\\\Υπολογιστής\\\\MyEmployeesApp\\\\nextjs\\\\pages\\\\index.js\",\n                        lineNumber: 84,\n                        columnNumber: 11\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                            align: \"center\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\johnd\\\\OneDrive\\\\Υπολογιστής\\\\MyEmployeesApp\\\\nextjs\\\\pages\\\\index.js\",\n                                lineNumber: 85,\n                                columnNumber: 15\n                            },\n                            __self: this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Avatar, {\n                                    style: avatarStyle,\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\johnd\\\\OneDrive\\\\Υπολογιστής\\\\MyEmployeesApp\\\\nextjs\\\\pages\\\\index.js\",\n                                        lineNumber: 86,\n                                        columnNumber: 19\n                                    },\n                                    __self: this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\johnd\\\\OneDrive\\\\Υπολογιστής\\\\MyEmployeesApp\\\\nextjs\\\\pages\\\\index.js\",\n                                            lineNumber: 86,\n                                            columnNumber: 47\n                                        },\n                                        __self: this\n                                    })\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                                    style: {\n                                        color: '#662929',\n                                        fontFamily: 'cursive'\n                                    },\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\johnd\\\\OneDrive\\\\Υπολογιστής\\\\MyEmployeesApp\\\\nextjs\\\\pages\\\\index.js\",\n                                        lineNumber: 87,\n                                        columnNumber: 19\n                                    },\n                                    __self: this,\n                                    children: \"Sign In\"\n                                })\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.TextField, {\n                            label: \"Username\",\n                            placeholder: \"Enter username\",\n                            fullWidth: true,\n                            onChange: (event)=>setUsername(event.target.value)\n                            ,\n                            required: true,\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\johnd\\\\OneDrive\\\\Υπολογιστής\\\\MyEmployeesApp\\\\nextjs\\\\pages\\\\index.js\",\n                                lineNumber: 89,\n                                columnNumber: 15\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.TextField, {\n                            label: \"Password\",\n                            placeholder: \"Enter password\",\n                            type: \"password\",\n                            fullWidth: true,\n                            required: true,\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\johnd\\\\OneDrive\\\\Υπολογιστής\\\\MyEmployeesApp\\\\nextjs\\\\pages\\\\index.js\",\n                                lineNumber: 90,\n                                columnNumber: 15\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                            type: \"submit\",\n                            color: \"primary\",\n                            variant: \"contained\",\n                            style: btnstyle,\n                            fullWidth: true,\n                            onClick: usernameCheck,\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\johnd\\\\OneDrive\\\\Υπολογιστής\\\\MyEmployeesApp\\\\nextjs\\\\pages\\\\index.js\",\n                                lineNumber: 91,\n                                columnNumber: 15\n                            },\n                            __self: this,\n                            children: \"Sign in\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                            align: \"center\",\n                            color: \"textSecondary\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\johnd\\\\OneDrive\\\\Υπολογιστής\\\\MyEmployeesApp\\\\nextjs\\\\pages\\\\index.js\",\n                                lineNumber: 92,\n                                columnNumber: 15\n                            },\n                            __self: this,\n                            children: \"or\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                            type: \"submit\",\n                            variant: \"contained\",\n                            style: {\n                                margin: '20px 0',\n                                color: '#662929',\n                                backgroundColor: 'white'\n                            },\n                            onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signIn)()\n                            ,\n                            fullWidth: true,\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\johnd\\\\OneDrive\\\\Υπολογιστής\\\\MyEmployeesApp\\\\nextjs\\\\pages\\\\index.js\",\n                                lineNumber: 93,\n                                columnNumber: 15\n                            },\n                            __self: this,\n                            children: \"Google\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                            align: \"center\",\n                            marginTop: 13,\n                            style: {\n                                color: '#662929',\n                                fontFamily: 'cursive'\n                            },\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\johnd\\\\OneDrive\\\\Υπολογιστής\\\\MyEmployeesApp\\\\nextjs\\\\pages\\\\index.js\",\n                                lineNumber: 94,\n                                columnNumber: 15\n                            },\n                            __self: this,\n                            children: [\n                                \" Do you have an account?\",\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Link, {\n                                    href: \"/signup\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\johnd\\\\OneDrive\\\\Υπολογιστής\\\\MyEmployeesApp\\\\nextjs\\\\pages\\\\index.js\",\n                                        lineNumber: 95,\n                                        columnNumber: 20\n                                    },\n                                    __self: this,\n                                    children: \"Sign Up\"\n                                })\n                            ]\n                        })\n                    ]\n                })\n            })\n        ]\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzRCQUFDSyxRQUFROzs7Ozs7Ozs2RkFDMUYzRCxxREFBTTs0QkFBQzRELElBQUksRUFBQyxDQUFROzRCQUFDVixLQUFLLEVBQUMsQ0FBUzs0QkFBQ1csT0FBTyxFQUFDLENBQVc7NEJBQUNkLEtBQUssRUFBRU4sUUFBUTs0QkFBRWEsU0FBUzs0QkFBQ1EsT0FBTyxFQUFFekMsYUFBYTs7Ozs7OztzQ0FBRSxDQUFPOzs2RkFDbkhwQix5REFBVTs0QkFBQytDLEtBQUssRUFBQyxDQUFROzRCQUFDRSxLQUFLLEVBQUMsQ0FBZTs7Ozs7OztzQ0FBQyxDQUFFOzs2RkFDbERsRCxxREFBTTs0QkFBQzRELElBQUksRUFBQyxDQUFROzRCQUFDQyxPQUFPLEVBQUMsQ0FBVzs0QkFBQ2QsS0FBSyxFQUFFLENBQUNUO2dDQUFBQSxNQUFNLEVBQUMsQ0FBUTtnQ0FBQ1ksS0FBSyxFQUFDLENBQVM7Z0NBQUNWLGVBQWUsRUFBQyxDQUFPOzRCQUFBLENBQUM7NEJBQUVzQixPQUFPLE1BQVFyRSx1REFBTTs7NEJBQUk2RCxTQUFTOzs7Ozs7O3NDQUFDLENBQU07OzhGQUNwSnJELHlEQUFVOzRCQUFDK0MsS0FBSyxFQUFDLENBQVE7NEJBQUNlLFNBQVMsRUFBRSxFQUFFOzRCQUFFaEIsS0FBSyxFQUFFLENBQUNHO2dDQUFBQSxLQUFLLEVBQUMsQ0FBUztnQ0FBQ0MsVUFBVSxFQUFFLENBQVM7NEJBQUEsQ0FBQzs7Ozs7Ozs7Z0NBQUUsQ0FDckY7cUdBQUNqRCxtREFBSTtvQ0FBQzhELElBQUksRUFBQyxDQUFTOzs7Ozs7OzhDQUFFLENBRXZCOzs7Ozs7Ozs7QUFNbEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215ZW1wbG95ZWVzYXBwLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IHNpZ25Jbiwgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuaW1wb3J0IHsgR3JpZCxQYXBlciwgQXZhdGFyLCBUZXh0RmllbGQsIEJ1dHRvbiwgVHlwb2dyYXBoeSwgTGluayB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IExvY2tPdXRsaW5lZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xvY2tPdXRsaW5lZCc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxYCwge21ldGhvZDogJ0dFVCd9KTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgaWYoIWRhdGEpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBub3RGb3VuZDogdHJ1ZSxcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOntcclxuICAgICAgICBkYXRhLFxyXG4gICAgICB9LFxyXG4gICAgfX1jYXRjaChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgY29uc3QgZXJyb3IgPSB0cnVlXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHByb3BzOntcclxuICAgICAgICAgICAgZXJyb3IsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpe1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBpZihwcm9wcy5lcnJvcil7XHJcbiAgICByb3V0ZXIucmVwbGFjZSgnL2VtcGxveWVlcy9lcnJvcicpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdXNlcm5hbWVDaGVjayA9ICBhc3luYyAoKSA9PntcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVzZXJuYW1lSWRlbnRpdHkgPSBwcm9wcy5kYXRhLm1hcCgob2JqKSA9PiBvYmouZmlyc3RfbmFtZSA9PT0gdXNlcm5hbWUpO1xyXG4gICAgICBpZiAodXNlcm5hbWVJZGVudGl0eS5pbmNsdWRlcyh0cnVlKSkge1xyXG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0ge1xyXG4gICAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvYCwge1xyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKSxcclxuICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICByb3V0ZXIucHVzaCgnL2VtcGxveWVlJyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1VzZXIgZG9lc25cXCcgdCBleGlzdCEnKTtcclxuICAgICAgfVxyXG4gICAgfWNhdGNoKGUpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgY29uc3QgZXJyb3IgPSB0cnVlXHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwcm9wczp7XHJcbiAgICAgICAgICAgICAgZXJyb3IsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHBhcGVyU3R5bGU9e3BhZGRpbmcgOjIwLGhlaWdodDonNzB2aCcsd2lkdGg6MzgwLCBtYXJnaW46XCIyMHB4IGF1dG9cIn07XHJcbiAgY29uc3QgYXZhdGFyU3R5bGU9e2JhY2tncm91bmRDb2xvcjonIzY2MjkyOSd9O1xyXG4gIGNvbnN0IGJ0bnN0eWxlPXttYXJnaW46JzIwcHggMCcsYmFja2dyb3VuZENvbG9yOicjNjYyOTI5J307XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPk15IEVtcGxveWVlczwvdGl0bGU+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXsxMH0gc3R5bGU9e3BhcGVyU3R5bGV9PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGFsaWduPSdjZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICA8QXZhdGFyIHN0eWxlPXthdmF0YXJTdHlsZX0+PExvY2tPdXRsaW5lZEljb24vPjwvQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3tjb2xvcjonIzY2MjkyOScsZm9udEZhbWlseTogJ2N1cnNpdmUnfX0+U2lnbiBJbjwvaDI+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGQgbGFiZWw9J1VzZXJuYW1lJyBwbGFjZWhvbGRlcj0nRW50ZXIgdXNlcm5hbWUnIGZ1bGxXaWR0aCBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0VXNlcm5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKX0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGQgbGFiZWw9J1Bhc3N3b3JkJyBwbGFjZWhvbGRlcj0nRW50ZXIgcGFzc3dvcmQnIHR5cGU9J3Bhc3N3b3JkJyBmdWxsV2lkdGggcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT0nc3VibWl0JyBjb2xvcj0ncHJpbWFyeScgdmFyaWFudD1cImNvbnRhaW5lZFwiIHN0eWxlPXtidG5zdHlsZX0gZnVsbFdpZHRoIG9uQ2xpY2s9e3VzZXJuYW1lQ2hlY2t9PlNpZ24gaW48L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBhbGlnbj0nY2VudGVyJyBjb2xvcj0ndGV4dFNlY29uZGFyeSc+b3I8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPSdzdWJtaXQnIHZhcmlhbnQ9XCJjb250YWluZWRcIiBzdHlsZT17e21hcmdpbjonMjBweCAwJyxjb2xvcjonIzY2MjkyOScsYmFja2dyb3VuZENvbG9yOid3aGl0ZSd9fSBvbkNsaWNrPXsoKSA9PiBzaWduSW4oKX0gZnVsbFdpZHRoPkdvb2dsZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGFsaWduPSdjZW50ZXInIG1hcmdpblRvcD17MTN9IHN0eWxlPXt7Y29sb3I6JyM2NjI5MjknLGZvbnRGYW1pbHk6ICdjdXJzaXZlJ319PiBEbyB5b3UgaGF2ZSBhbiBhY2NvdW50P1xyXG4gICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTaWduIFVwIFxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8Lz5cclxuICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkhlYWQiLCJzaWduSW4iLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsIkdyaWQiLCJQYXBlciIsIkF2YXRhciIsIlRleHRGaWVsZCIsIkJ1dHRvbiIsIlR5cG9ncmFwaHkiLCJMaW5rIiwiTG9ja091dGxpbmVkSWNvbiIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiZGF0YSIsImpzb24iLCJub3RGb3VuZCIsInByb3BzIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIkhvbWUiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicm91dGVyIiwicmVwbGFjZSIsInVzZXJuYW1lQ2hlY2siLCJ1c2VybmFtZUlkZW50aXR5IiwibWFwIiwib2JqIiwiZmlyc3RfbmFtZSIsImluY2x1ZGVzIiwidXNlckRhdGEiLCJoZWFkZXJzIiwiQWNjZXB0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwdXNoIiwicGFwZXJTdHlsZSIsInBhZGRpbmciLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbiIsImF2YXRhclN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiYnRuc3R5bGUiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImVsZXZhdGlvbiIsInN0eWxlIiwiYWxpZ24iLCJoMiIsImNvbG9yIiwiZm9udEZhbWlseSIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJmdWxsV2lkdGgiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJyZXF1aXJlZCIsInR5cGUiLCJ2YXJpYW50Iiwib25DbGljayIsIm1hcmdpblRvcCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/icons/LockOutlined":
/*!**************************************************!*\
  !*** external "@material-ui/icons/LockOutlined" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/LockOutlined");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();