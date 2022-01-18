"use strict";
(() => {
var exports = {};
exports.id = 678;
exports.ids = [678];
exports.modules = {

/***/ 491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Employee),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(649);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(130);
;// CONCATENATED MODULE: external "@mui/material/styles"
const styles_namespaceObject = require("@mui/material/styles");
;// CONCATENATED MODULE: external "@mui/material/Table"
const Table_namespaceObject = require("@mui/material/Table");
var Table_default = /*#__PURE__*/__webpack_require__.n(Table_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/TableBody"
const TableBody_namespaceObject = require("@mui/material/TableBody");
var TableBody_default = /*#__PURE__*/__webpack_require__.n(TableBody_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/TableCell"
const TableCell_namespaceObject = require("@mui/material/TableCell");
var TableCell_default = /*#__PURE__*/__webpack_require__.n(TableCell_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/TableContainer"
const TableContainer_namespaceObject = require("@mui/material/TableContainer");
var TableContainer_default = /*#__PURE__*/__webpack_require__.n(TableContainer_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/TableHead"
const TableHead_namespaceObject = require("@mui/material/TableHead");
var TableHead_default = /*#__PURE__*/__webpack_require__.n(TableHead_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/TableRow"
const TableRow_namespaceObject = require("@mui/material/TableRow");
var TableRow_default = /*#__PURE__*/__webpack_require__.n(TableRow_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/LogoutRounded"
const LogoutRounded_namespaceObject = require("@mui/icons-material/LogoutRounded");
var LogoutRounded_default = /*#__PURE__*/__webpack_require__.n(LogoutRounded_namespaceObject);
;// CONCATENATED MODULE: ./pages/employee/index.js














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
function Employee(props) {
    const router = (0,router_.useRouter)();
    const { data: session  } = (0,react_.useSession)();
    const paperStyle = {
        padding: 20,
        height: '70vh',
        width: 380,
        margin: "20px auto",
        backgroundColor: '#333333'
    };
    console.log(session);
    const logout = async ()=>{
        try {
            router.push('/');
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
    const StyledTableCell = (0,styles_namespaceObject.styled)((TableCell_default()))(({ theme  })=>({
            [`&.${TableCell_namespaceObject.tableCellClasses.head}`]: {
                backgroundColor: '#333333',
                color: theme.palette.common.white
            },
            [`&.${TableCell_namespaceObject.tableCellClasses.body}`]: {
                fontSize: 14
            }
        })
    );
    const StyledTableRow = (0,styles_namespaceObject.styled)((TableRow_default()))(({ theme  })=>({
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover
            },
            // hide last border
            '&:last-child td, &:last-child th': {
                border: 0
            }
        })
    );
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "My Employees"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Paper, {
                    elevation: 10,
                    style: paperStyle,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                            align: "center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                    style: {
                                        color: 'white',
                                        fontFamily: 'cursive'
                                    },
                                    children: [
                                        "Employee ",
                                        session
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                                    onClick: logout,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((LogoutRounded_default()), {
                                        style: {
                                            color: '#662929'
                                        }
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((TableContainer_default()), {
                            component: core_.Paper,
                            style: {
                                maxHeight: 350
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Table_default()), {
                                sx: {
                                    backgroundColor: '#acacac'
                                },
                                "aria-label": "customized table",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableHead_default()), {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(StyledTableCell, {
                                                    children: "Employees"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(StyledTableCell, {
                                                    align: "left",
                                                    children: "Status"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableBody_default()), {
                                        children: props.data.map((obj)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledTableRow, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(StyledTableCell, {
                                                        component: "th",
                                                        scope: "row",
                                                        style: {
                                                            color: '#333333'
                                                        },
                                                        children: obj.first_name
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(StyledTableCell, {
                                                        align: "left",
                                                        style: {
                                                            color: obj.is_active ? 'green' : '#662929'
                                                        },
                                                        children: obj.is_active ? 'Active' : 'Inactive'
                                                    })
                                                ]
                                            }, obj.id)
                                        )
                                    })
                                ]
                            })
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
var __webpack_exports__ = (__webpack_exec__(491));
module.exports = __webpack_exports__;

})();