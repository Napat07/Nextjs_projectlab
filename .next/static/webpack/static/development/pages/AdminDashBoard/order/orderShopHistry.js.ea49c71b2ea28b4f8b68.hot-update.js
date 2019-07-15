webpackHotUpdate("static\\development\\pages\\AdminDashBoard\\order\\orderShopHistry.js",{

/***/ "./pages/AdminDashBoard/order/orderShopHistry.js":
/*!*******************************************************!*\
  !*** ./pages/AdminDashBoard/order/orderShopHistry.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return orderShopHistry; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Component_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Component/form */ "./Component/form.js");
/* harmony import */ var _Component_head_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Component/head.js */ "./Component/head.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Component_DashBoard_HeaderTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Component/DashBoard/HeaderTitle */ "./Component/DashBoard/HeaderTitle.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");






function orderShopHistry() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Component_head_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Shop - Project Lab"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Component_form__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Component_DashBoard_HeaderTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    Name: "ORDER HISTRY - SHOP"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    style: {
      marginTop: "10px"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "\u0E2B\u0E21\u0E27\u0E14\u0E2B\u0E21\u0E39\u0E48"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    style: {
      marginLeft: "10px",
      marginTop: "20px"
    }
  }, "Shop"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"], {
    vertical: true,
    pills: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavLink"], {
    href: "/AdminDashBoard/adminDashBoardShop"
  }, "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavLink"], {
    href: "/AdminDashBoard/showItemShop"
  }, " \u0E41\u0E01\u0E49\u0E44\u0E02/\u0E41\u0E2A\u0E14\u0E07\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavLink"], {
    href: "/AdminDashBoard/order/orderShop",
    active: true
  }, " Order ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    style: {
      marginLeft: "10px"
    }
  }, "Course"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavLink"], {
    href: "/AdminDashBoard/adminDashBoardCourse"
  }, "\u0E40\u0E1E\u0E34\u0E48\u0E21 Course"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavLink"], {
    href: "/AdminDashBoard/showItemCourse"
  }, "\u0E41\u0E01\u0E49\u0E44\u0E02/\u0E41\u0E2A\u0E14\u0E07 Course"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavLink"], {
    href: "/AdminDashBoard/order/orderCourse"
  }, " Order ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    style: {
      marginLeft: "10px"
    }
  }, "USER PROFILE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavLink"], {
    href: "/AdminDashBoard/userProfile/userProfile"
  }, "\u0E41\u0E01\u0E49\u0E44\u0E02")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    style: {
      marginLeft: "10px"
    }
  }, "ADMIN CONSOLE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavLink"], {
    href: "/AdminDashBoard/adminConsole/adminConsole"
  }, "\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-10"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    style: {
      marginTop: "25px",
      marginLeft: "15px"
    }
  }, "SHOP ORDER HISTRY")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      backgroundColor: "powderblue",
      height: "4px",
      marginTop: "5px"
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginTop: "15px"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "CREATE DATE :"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    style: {
      marginLeft: "10px"
    }
  }, "01/01/2019")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "PAYMENT DATE :"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    style: {
      marginLeft: "10px"
    }
  }, "11/01/2019")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "INVOICE NO. :"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    style: {
      marginLeft: "10px"
    }
  }, "01/01/2019")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "CREATE DATE :"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    style: {
      marginLeft: "10px"
    }
  }, "01/01/2019")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "CREATE DATE :"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    style: {
      marginLeft: "10px"
    }
  }, "01/01/2019")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "CREATE DATE :"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    style: {
      marginLeft: "10px"
    }
  }, "01/01/2019"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    style: {
      marginLeft: "25px",
      marginTop: "50px"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Table"], {
    striped: true,
    bordered: true,
    className: "text-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    style: {
      backgroundColor: "Silver"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "ITEM CODE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Product Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Unit Price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Quantity"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Sub Total"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Discount"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "row"
  }, "MBM0001"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "SEVRVO MOTOR"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "1000 thb"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "1000 thb"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "-")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "row"
  }, "MBM0002"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "SEVRVO MOTOR"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "5000 thb"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "12"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "5000 thb"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "-")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], null)))))), ">"));
}

/***/ })

})
//# sourceMappingURL=orderShopHistry.js.ea49c71b2ea28b4f8b68.hot-update.js.map