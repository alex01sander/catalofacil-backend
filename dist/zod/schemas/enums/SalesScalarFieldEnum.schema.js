"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.SalesScalarFieldEnumSchema = zod_1.z.enum([
    'id',
    'user_id',
    'product_name',
    'quantity',
    'unit_price',
    'total_price',
    'sale_date',
    'status',
    'created_at',
    'updated_at',
    'store_id',
]);
