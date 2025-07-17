"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cash_flowScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Cash_flowScalarFieldEnumSchema = zod_1.z.enum([
    'id',
    'user_id',
    'store_id',
    'type',
    'category',
    'description',
    'amount',
    'date',
    'payment_method',
    'created_at',
    'updated_at',
]);
