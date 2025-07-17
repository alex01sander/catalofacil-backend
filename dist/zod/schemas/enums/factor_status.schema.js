"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factor_statusSchema = void 0;
const zod_1 = require("zod");
exports.factor_statusSchema = zod_1.z.enum(['unverified', 'verified']);
