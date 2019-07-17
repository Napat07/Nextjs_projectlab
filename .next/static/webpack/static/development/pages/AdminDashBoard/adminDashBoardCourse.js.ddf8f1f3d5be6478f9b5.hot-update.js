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
    class: "container"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    class: "row"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    class: "col-sm-6"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    class: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    class: "input-group date",
    id: "datetimepicker1"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "text",
    class: "form-control"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    class: "input-group-addon"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    class: "glyphicon glyphicon-calendar"
  }))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("script", {
    type: "text/javascript"
  }, "$(function () ", $('#datetimepicker1').datetimepicker(), ");"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("style", null, "\n        html, body { \n          font-family: arial, sans-serif;\n          font-size: 15px;\n        }\n        \n        \n        * {\n          box-sizing: border-box;\n        }\n        \n        *:before {\n          box-sizing: border-box;\n        }\n        \n        *:after {\n          box-sizing: border-box;\n        }\n        \n        $min-width: 320px;\n        $number-of-days: 7;\n        $column-width: percentage(1/$number-of-days);\n        \n        .container {\n          max-width: 1000px;\n          margin-left: auto;\n          margin-right: auto;\n          padding-bottom: 1em;\n        }\n        \n        .row:before {\n          display: table;\n          content: \" \";\n        }\n        \n        .grid-calendar {\n          min-width: $min-width;\n          .row {\n            \n            margin: 0;\n            \n          }\n          \n          .calendar-week .grid-cell {\n            background-color: #f6f6f6;\n            border: 1px solid #fff;\n          }\n        \n          .calendar-week-header .grid-cell > div > div {\n            padding-bottom: 10px;\n            height: auto;\n          }\n          \n          .grid-cell {\n            display: inline-block;\n            float: left;\n            min-height: 1px;\n            padding: 0;\n            position: relative;\n            width: $column-width;\n        \n            &.previous-month {\n              color: #a6a6a6;\n            }\n            \n            &.next-month {\n              background-color: #e1e1e1;\n            }\n            \n            > div {\n              display: flex;\n              justify-content: center;\n              width: 100%;\n        \n              > div {\n                height: 0;\n                padding: 50% 0;\n              }\n            }\n          }\n        }\n        \n        \n        \n        \n      "))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
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
//# sourceMappingURL=adminDashBoardCourse.js.ddf8f1f3d5be6478f9b5.hot-update.js.map