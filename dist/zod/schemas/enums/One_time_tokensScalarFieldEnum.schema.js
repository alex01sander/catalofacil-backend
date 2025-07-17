"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.One_time_tokensScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.One_time_tokensScalarFieldEnumSchema = zod_1.z.enum([
    'id',
    'user_id',
    'token_type',
    'token_hash',
    'relates_to',
    'created_at',
    'updated_at',
]);
