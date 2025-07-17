"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit_transactionsScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Credit_transactionsScalarFieldEnumSchema = zod_1.z.enum([
    'id',
    'credit_account_id',
    'user_id',
    'type',
    'amount',
    'description',
    'date',
    'created_at',
]);
