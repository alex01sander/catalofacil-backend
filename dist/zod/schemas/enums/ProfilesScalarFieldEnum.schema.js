"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilesScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.ProfilesScalarFieldEnumSchema = zod_1.z.enum([
    'id',
    'email',
    'full_name',
    'created_at',
    'updated_at',
]);
