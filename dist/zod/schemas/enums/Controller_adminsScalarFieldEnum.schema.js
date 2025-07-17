"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller_adminsScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Controller_adminsScalarFieldEnumSchema = zod_1.z.enum([
    'id',
    'user_id',
    'email',
    'created_at',
    'updated_at',
]);
