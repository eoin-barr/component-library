var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
export var Navbar = function (props) {
    var children = props.children, style = props.style, rest = __rest(props, ["children", "style"]);
    var updatedStyle = style || {};
    updatedStyle.display = 'flex';
    updatedStyle.flexDirection = 'row';
    updatedStyle.justifyContent = 'space-between';
    updatedStyle.alignItems = 'center';
    updatedStyle.padding = '0 20px';
    updatedStyle.borderRadius = '0.5rem';
    updatedStyle.width = '100%';
    updatedStyle.boxShadow =
        '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);';
    updatedStyle.position = 'sticky';
    updatedStyle.margin = '0 auto';
    updatedStyle.top = '0';
    updatedStyle.backgroundColor = 'hsla(0,0%,100%,.1)';
    updatedStyle.backdropFilter = 'blur(12px) brightness(1) saturate(1.5)';
    updatedStyle.maxWidth = '720px';
    return (React.createElement("div", __assign({ style: updatedStyle }, rest), children));
};
//# sourceMappingURL=navbar.js.map