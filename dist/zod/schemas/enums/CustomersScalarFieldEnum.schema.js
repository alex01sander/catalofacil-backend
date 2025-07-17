"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.CustomersScalarFieldEnumSchema = zod_1.z.enum([
    'id',
    'store_owner_id',
    'name',
    'email',
    'phone',
    'address',
    'created_at',
    'store_id',
]);
