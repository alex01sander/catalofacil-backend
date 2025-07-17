"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order_itemsScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Order_itemsScalarFieldEnumSchema = zod_1.z.enum([
    'id',
    'order_id',
    'product_id',
    'quantity',
    'unit_price',
    'total_price',
    'created_at',
]);
