"use strict";

var _react = _interopRequireDefault(require("react"));

var _system = require("@mui/system");

var _material = require("@mui/material");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  /* Add any additional styles for the main content area */\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  flex: 0 0 200px; /* Adjust the width of the sidebar as needed */\n  position: sticky;\n  top: 0;\n  height: 100vh; /* Adjust the height of the sidebar as needed */\n  background-color: #f2f2f2;\n  padding: 16px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = (0, _system.styled)(_material.Box)(_templateObject());
var Sidebar = (0, _system.styled)(_material.Box)(_templateObject2());
var Content = (0, _system.styled)(_material.Box)(_templateObject3());