"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factor_typeSchema = void 0;
const zod_1 = require("zod");
exports.factor_typeSchema = zod_1.z.enum(['totp', 'webauthn', 'phone']);
