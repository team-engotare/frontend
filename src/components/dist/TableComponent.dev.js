"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 10px;\n  color: #fff;\n  cursor: pointer;\n  border: 2px solid transparent; /* Set an initial transparent border */\n  &:hover {\n    background-color: #fff;\n    color: #333;\n  }\n  &.active {\n    background-color: #fff;\n    color: #333;\n    border-color: #333; /* Set the border color to the same color as the text */\n    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);\n    border-radius: 5px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NavItem = styled('div')(_templateObject());