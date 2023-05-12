"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
const index_js_1 = __importDefault(require("./index.js"));
describe('countDecodings()', () => {
    test('should return 3', () => {
        expect((0, index_js_1.default)('111')).toBe(3);
    });
    test('should return 2', () => {
        expect((0, index_js_1.default)('12')).toBe(2);
    });
    test('should return 0', () => {
        expect((0, index_js_1.default)('01')).toBe(0);
    });
    test('should return 1', () => {
        expect((0, index_js_1.default)('27')).toBe(1);
    });
    test('should return 0', () => {
        expect((0, index_js_1.default)('0')).toBe(0);
    });
    test('should return 3', () => {
        expect((0, index_js_1.default)('111')).toBe(3);
    });
});
