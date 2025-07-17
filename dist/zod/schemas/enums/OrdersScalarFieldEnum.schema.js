"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.OrdersScalarFieldEnumSchema = zod_1.z.enum([
    'id',
    'store_owner_id',
    'customer_id',
    'customer_name',
    'customer_email',
    'customer_phone',
    'total_amount',
    'status',
    'created_at',
    'updated_at',
    'store_id',
]);
