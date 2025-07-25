"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.triggerPopup = exports.testLink = exports.testRequiredField = exports.toastFactory = exports.linkFactory = exports.iconFactory = exports.inputFactory = exports.buttonFactory = void 0;
// Factories for creating UI components in a Playwright testing environment
var buttonFactory_1 = require("./factories/buttonFactory");
Object.defineProperty(exports, "buttonFactory", { enumerable: true, get: function () { return buttonFactory_1.buttonFactory; } });
var inputFactory_1 = require("./factories/inputFactory");
Object.defineProperty(exports, "inputFactory", { enumerable: true, get: function () { return inputFactory_1.inputFactory; } });
var iconFactory_1 = require("./factories/iconFactory");
Object.defineProperty(exports, "iconFactory", { enumerable: true, get: function () { return iconFactory_1.iconFactory; } });
var linkFactory_1 = require("./factories/linkFactory");
Object.defineProperty(exports, "linkFactory", { enumerable: true, get: function () { return linkFactory_1.linkFactory; } });
var toastFactory_1 = require("./factories/toastFactory");
Object.defineProperty(exports, "toastFactory", { enumerable: true, get: function () { return toastFactory_1.toastFactory; } });
// Types for defining the structure of UI components
__exportStar(require("./types"), exports);
// Helpers for testing specific UI functionalities
var testRequiredField_1 = require("./helpers/testRequiredField");
Object.defineProperty(exports, "testRequiredField", { enumerable: true, get: function () { return testRequiredField_1.testRequiredField; } });
var testLink_1 = require("./helpers/testLink");
Object.defineProperty(exports, "testLink", { enumerable: true, get: function () { return testLink_1.testLink; } });
var triggerPopUp_1 = require("./helpers/triggerPopUp");
Object.defineProperty(exports, "triggerPopup", { enumerable: true, get: function () { return triggerPopUp_1.triggerPopup; } });
