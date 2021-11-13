"use strict";
exports.id = 341;
exports.ids = [341];
exports.modules = {

/***/ 341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ LandingLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(930);
;// CONCATENATED MODULE: ./src/sections/header/logo.tsx



function Logo(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
            fontSize: "lg",
            fontWeight: "bold",
            color: "teal",
            children: "fullstackpathways"
        })
    }));
};

;// CONCATENATED MODULE: ./src/sections/header/NavBar.tsx




const NavBar = (props)=>{
    const [isOpen, setIsOpen] = external_react_default().useState(false);
    const toggle = ()=>setIsOpen(!isOpen)
    ;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavBarContainer, {
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Logo, {
                w: "220px",
                color: [
                    "white",
                    "white",
                    "primary.500",
                    "primary.500"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MenuToggle, {
                toggle: toggle,
                isOpen: isOpen
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MenuLinks, {
                isOpen: isOpen
            })
        ]
    }));
};
const CloseIcon = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "24",
        viewBox: "0 0 18 18",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: "Close"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "white",
                d: "M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
            })
        ]
    })
;
const MenuIcon = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "24px",
        viewBox: "0 0 20 20",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "white",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: "Menu"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
            })
        ]
    })
;
const MenuToggle = ({ toggle , isOpen  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        display: {
            base: "block",
            md: "none"
        },
        onClick: toggle,
        children: isOpen ? /*#__PURE__*/ jsx_runtime_.jsx(CloseIcon, {
        }) : /*#__PURE__*/ jsx_runtime_.jsx(MenuIcon, {
        })
    }));
};
const MenuItem = ({ children , isLast , to ="/" , ...rest })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
        href: to,
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
            display: "block",
            ...rest,
            children: children
        })
    }));
};
const MenuLinks = ({ isOpen  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        display: {
            base: isOpen ? "block" : "none",
            md: "block"
        },
        flexBasis: {
            base: "100%",
            md: "auto"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
            spacing: 8,
            align: "center",
            justify: [
                "center",
                "space-between",
                "flex-end",
                "flex-end"
            ],
            direction: [
                "column",
                "row",
                "row",
                "row"
            ],
            pt: [
                4,
                4,
                0,
                0
            ],
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(MenuItem, {
                    to: "/",
                    isLast: false,
                    children: "How It works"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(MenuItem, {
                    to: "/pathways",
                    isLast: false,
                    children: "Pathways"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(MenuItem, {
                    to: "/tutors",
                    isLast: false,
                    children: "Tutors"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(MenuItem, {
                    to: "/signup",
                    isLast: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                        size: "sm",
                        rounded: "md",
                        colorScheme: "teal",
                        children: "Create Account"
                    })
                })
            ]
        })
    }));
};
const NavBarContainer = ({ children , ...props })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
        as: "nav",
        align: "center",
        justify: "space-between",
        wrap: "wrap",
        w: "100%",
        mb: 8,
        p: 8,
        bg: [
            "primary.500",
            "primary.500",
            "transparent",
            "transparent"
        ],
        color: [
            "teal",
            "teal",
            "primary.700",
            "primary.700"
        ],
        ...props,
        children: children
    }));
};
/* harmony default export */ const header_NavBar = (NavBar);

;// CONCATENATED MODULE: ./src/layouts/LandingLayout.js




function LandingLayout(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        direction: "column",
        align: "center",
        maxW: {
            xl: "1200px"
        },
        m: "0 auto",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header_NavBar, {
            }),
            props.children
        ]
    }));
};


/***/ })

};
;