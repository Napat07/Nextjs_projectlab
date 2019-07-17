webpackHotUpdate("static/development/pages/AdminDashBoard/adminDashBoardCourse.js",{

/***/ "./pages/AdminDashBoard/adminDashBoardCourse.js":
/*!******************************************************!*\
  !*** ./pages/AdminDashBoard/adminDashBoardCourse.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return adminDashBoardCourse; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Component_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Component/form */ "./Component/form.js");
/* harmony import */ var _Component_head_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Component/head.js */ "./Component/head.js");
/* harmony import */ var _hook_custom_hook_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hook/custom-hook.js */ "./hook/custom-hook.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ "./node_modules/react-quill/dist/quill.snow.css");
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");










var DynamicReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-quill */ "./node_modules/react-quill/lib/index.js", 7));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-quill */ "./node_modules/react-quill/lib/index.js")];
    },
    modules: ['react-quill']
  }
});

function adminDashBoardCourse() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      getcourseName = _useState2[0],
      setcourseName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      getcourseImage = _useState4[0],
      setcourseImage = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      getcourseActive = _useState6[0],
      setcourseActive = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
      getcourseDetail = _useState8[0],
      setcourseDetail = _useState8[1];

  function handleChangecourseName(inputName) {
    setcourseName(inputName.target.value);
    console.log(inputName.target.value);
  }

  function handleChangecourseImage(inputImage) {
    setcourseImage(inputImage.target.value);
    console.log(inputImage.target.value);
  }

  function handleChangecourseDetail(inputDetail) {
    setcourseDetail(inputDetail);
    console.log(inputDetail);
  }

  function handleSubmit() {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var inputs;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              inputs = {
                "courseName": getcourseName,
                "courseImage": getcourseImage,
                "courseActive": getcourseActive,
                "courseDetail": getcourseDetail
              };
              console.log(inputs);
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_7___default.a.post("/api/course", inputs).then(function (res) {
                console.log(res);
                alert("เพิ่มข้อมูลเรียบร้อยแล้ว");
              }).catch(function (err) {
                console.log(err);
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  function handleEvent() {
    return _handleEvent.apply(this, arguments);
  }

  function _handleEvent() {
    _handleEvent = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var txt, event;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              event = prompt("Please add event:", "Event");

              if (event == null || event == "") {
                alert("ไม่มีข้อมูล");
              } else {
                txt = event;
              }

              document.getElementById("demo").innerHTML = txt;

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _handleEvent.apply(this, arguments);
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      marginTop: '20px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Component_head_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Add Course - Project Lab"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Component_form__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Container"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
    sm: "2"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, "\u0E2B\u0E21\u0E27\u0E14\u0E2B\u0E21\u0E39\u0E48"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h4", {
    style: {
      marginLeft: "10px",
      marginTop: "20px"
    }
  }, "Shop"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Nav"], {
    vertical: true,
    pills: true
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["NavLink"], {
    href: "/AdminDashBoard/adminDashBoardShop"
  }, "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["NavLink"], {
    href: "/AdminDashBoard/showItemShop"
  }, " \u0E41\u0E01\u0E49\u0E44\u0E02/\u0E41\u0E2A\u0E14\u0E07\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32 "), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["NavLink"], {
    href: "/AdminDashBoard/order/orderShop"
  }, " Order ")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h4", {
    style: {
      marginLeft: "10px"
    }
  }, "Course"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["NavLink"], {
    href: "/AdminDashBoard/adminDashBoardCourse",
    active: true
  }, "\u0E40\u0E1E\u0E34\u0E48\u0E21 Course"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["NavLink"], {
    href: "/AdminDashBoard/showItemCourse"
  }, "\u0E41\u0E01\u0E49\u0E44\u0E02/\u0E41\u0E2A\u0E14\u0E07 Course"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["NavLink"], {
    href: "/AdminDashBoard/order/orderCourse"
  }, " Order ")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h4", {
    style: {
      marginLeft: "10px"
    }
  }, "USER PROFILE"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["NavLink"], {
    href: "/AdminDashBoard/userProfile/userProfile"
  }, "\u0E41\u0E01\u0E49\u0E44\u0E02")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h4", {
    style: {
      marginLeft: "10px"
    }
  }, "ADMIN CONSOLE"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["NavLink"], {
    href: "/AdminDashBoard/adminConsole/adminConsole"
  }, "\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25"))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Form"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", null, "Add Course"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
    row: true
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Label"], {
    for: "courseName",
    sm: 2
  }, "Course Name : "), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
    sm: 10
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Input"], {
    type: "text",
    name: "courseName",
    placeholder: "Name",
    value: getcourseName,
    onChange: handleChangecourseName
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
    row: true
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Label"], {
    for: "courseImage",
    sm: 2
  }, "Course Image : "), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
    sm: 10
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Input"], {
    type: "text",
    name: "courseImage",
    placeholder: "Image",
    value: getcourseImage,
    onChange: handleChangecourseImage
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
    row: true
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Label"], {
    for: "courseDetail",
    sm: 2
  }, "Text Editer : "), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
    sm: 10
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(DynamicReactQuill, {
    value: getcourseDetail,
    modules: adminDashBoardCourse.modules,
    formats: adminDashBoardCourse.formats,
    onChange: handleChangecourseDetail
  })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
    row: true
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Label"], {
    for: "courseImage",
    sm: 2
  }, "Calendar : "), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
    sm: 10
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    color: "info",
    onClick: handleEvent
  }, "add event "), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    id: "demo"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    class: "calendar"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    class: "top-image"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: "http://placekitten.com/g/300/150"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "July")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
    class: "days"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "Sun"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "Mon"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "Tues"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "Wed"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "Thurs"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "Fri"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "Sat")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
    class: "dates"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    class: "fade"
  }, "29"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    class: "fade"
  }, "30"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "1"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "2"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    class: "today"
  }, "3"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "4"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "5"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "6"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "7"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "8"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "9"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "10"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "11"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "12"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "13"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "14"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "15"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "16"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "17"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "18"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "19"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "20"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "21"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "22"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "23"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "24"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "25"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "26"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "27"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "28"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "29"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "30"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "31"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    class: "fade"
  }, "1"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    class: "fade"
  }, "2"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("style", null, "\n        html, body { \n          font-family: arial, sans-serif;\n          font-size: 15px;\n        }\n        \n        \n        .calendar {\n          margin: 50px auto;\n          width: 300px;\n          background: #fff;\n          box-shadow: 0 10px 20px -5px #333;\n          \n          .top-image {\n            position: relative;\n          \n            img { display: block; \n          }\n          \n          .days {\n            width: 100%;\n            overflow: hidden;\n            background: #333;\n            color: #fff;\n             \n          }\n          \n        li {\n          float: left;\n          display: block;\n          width: 14.2857%;\n          text-align: center;\n          list-style-type: none;\n        }\n          \n          .dates {\n            width: 100%;\n            overflow: hidden;\n            \n            li {\n              width: 14.25%;\n              padding-top: 4%;\n              padding-bottom: 7%;\n              height: 0;\n              diaplay: block;\n              float: left;\n              text-align: center;\n              position: relative;\n              \n              &.fade {\n                color: #ccc;\n              }\n              \n              &.today:before {\n                content: \"\";\n                position: absolute;\n                display: block;\n                border-radius: 50%;\n                border: 2px solid #AD9DC9;\n                height: 0;\n                padding-bottom: 50%;\n                width: 50%;\n                top: 11%;\n                left: 19.5%;\n              }\n            }\n          }\n        }\n      "))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
    check: true,
    row: true
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    type: "submit",
    color: "primary",
    onClick: handleSubmit
  }, "Submit"))))))));
}
adminDashBoardCourse.modules = {
  toolbar: [[{
    'size': ['small', false, 'large', 'huge']
  }], ['bold', 'italic', 'underline', 'strike'], [{
    'color': []
  }, {
    'background': []
  }], [{
    'list': 'ordered'
  }, {
    'list': 'bullet'
  }], ['link', 'image', 'video'], ['clean'], ['code-block']]
};
adminDashBoardCourse.formats = ['bold', 'italic', 'underline', 'strike', 'size', 'color', 'background', 'list', 'indent', 'link', 'image', 'video', 'clean', 'code-block'];

/***/ })

})
//# sourceMappingURL=adminDashBoardCourse.js.9b752e630e923d4f55cc.hot-update.js.map