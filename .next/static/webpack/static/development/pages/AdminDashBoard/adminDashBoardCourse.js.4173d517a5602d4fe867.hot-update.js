webpackHotUpdate("static/development/pages/AdminDashBoard/adminDashBoardCourse.js",{

/***/ "./Component/NavBar/LoginMenuNavbar.js":
/*!*********************************************!*\
  !*** ./Component/NavBar/LoginMenuNavbar.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hook_GlobalHook__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hook/GlobalHook */ "./hook/GlobalHook.js");
/* harmony import */ var _hook_custom_hook_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hook/custom-hook.js */ "./hook/custom-hook.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");





function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n min-width:300px;\n max-width:300px;\n min-height:350px;\n max-height:350px;\n display:flex;\n flex-direction:column;\n justify-content:flex-start;\nalign-items:center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_12__["default"].div(_templateObject());

function Auth(props) {
  var GlobalHook = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_hook_GlobalHook__WEBPACK_IMPORTED_MODULE_8__["GlobalContext"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      getErr = _useState2[0],
      setErr = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      modal = _useState4[0],
      setmodal = _useState4[1];

  function toggle() {
    setmodal(!modal);
  }

  var _useInput = Object(_hook_custom_hook_js__WEBPACK_IMPORTED_MODULE_9__["default"])({
    Username: "",
    email: "",
    password: ""
  }),
      inputs = _useInput.inputs,
      handleInputChange = _useInput.handleInputChange;

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (localStorage.getItem("globalToken")) {
      var token = localStorage.getItem("globalToken");
      var user = JSON.parse(localStorage.getItem("globalUser"));
      GlobalHook.setglobalToken(token);
      GlobalHook.setglobalUser(user);
      var currentTime = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()() / 1000;
      var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_6___default()(token);

      if (decoded.exp < currentTime) {
        handleLogoutSubmit();
        next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push({
          pathname: '/'
        });
      }
    }
  }, []);

  var handleLoginSubmit = function handleLoginSubmit(evt) {
    evt.preventDefault();
    var userData = {
      email: inputs.email,
      password: inputs.password
    };
    LoginFN(userData);
  };

  function LoginFN(userData) {
    axios__WEBPACK_IMPORTED_MODULE_10___default.a.post("/api/user/login", userData).then(function (res) {
      var _res$data = res.data,
          token = _res$data.token,
          user = _res$data.user;
      props.setisUserDropDownOpen(false);
      GlobalHook.setglobalToken(token);
      GlobalHook.setglobalToken(user);
      localStorage.setItem("globalToken", token);
      localStorage.setItem("globalUser", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(user));
    }).catch(function (err) {
      setmodal(true);
    });
  } ///////


  var handleLogoutSubmit = function handleLogoutSubmit(evt) {
    localStorage.removeItem("globalToken");
    localStorage.removeItem("globalUser");
    GlobalHook.setglobalUser({});
    GlobalHook.setglobalToken();
    props.setisUserDropDownOpen(false);
  };

  if (modal) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
      isOpen: modal,
      toggle: toggle
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ModalHeader"], {
      toggle: toggle
    }, "Opps!"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ModalBody"], null, "Email Or Password incorrect"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ModalFooter"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      color: "red",
      onClick: toggle
    }, "Ok"))));
  } //######################### For Login User Here ##########################


  if (!GlobalHook.getglobalToken) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Form"], {
      className: "text-center  p-5"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: "h4 mb-4"
    }, "Sign in"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
      type: "email",
      name: "email",
      id: "email",
      className: "form-control mb-4",
      placeholder: "E-mail",
      onChange: handleInputChange
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
      type: "password",
      name: "password",
      id: "password",
      className: "form-control mb-4",
      placeholder: "Password",
      onChange: handleInputChange
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "d-flex justify-content-around"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      href: "/ForgetPage/forgetpage"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      className: "text-primary",
      href: "/ForgetPage/forgetpage"
    }, "Forget password?"))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      className: "btn btn-info btn-block my-4",
      color: "primary",
      onClick: handleLoginSubmit
    }, "Sign in"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, "Not a member?"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      href: "/SignUp/signup"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      className: "text-primary"
    }, "Register"))));
  } //######################### For Login Admin Here ##########################
  else {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, "Hello:", GlobalHook.getglobalUser.Username), GlobalHook.getglobalUser.role == "admin" ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        color: "warning",
        href: "/AdminDashBoard/adminDashBoardShop"
      }, "Admin page") : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, "User"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        color: "red",
        onClick: function onClick() {
          return handleLogoutSubmit();
        }
      }, "LogOut")));
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Auth);

/***/ })

})
//# sourceMappingURL=adminDashBoardCourse.js.4173d517a5602d4fe867.hot-update.js.map