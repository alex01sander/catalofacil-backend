"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit_accountsScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Credit_accountsScalarFieldEnumSchema = zod_1.z.enum([
    'id',
    'user_id',
    'store_id',
    'customer_name',
    'customer_phone',
    'total_debt',
    'created_at',
    'updated_at',
    'status',
]);
