"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionsScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.SessionsScalarFieldEnumSchema = zod_1.z.enum([
    'id',
    'user_id',
    'created_at',
    'updated_at',
    'factor_id',
    'aal',
    'not_after',
    'refreshed_at',
    'user_agent',
    'ip',
    'tag',
]);
