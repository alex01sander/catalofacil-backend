"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_costsScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Product_costsScalarFieldEnumSchema = zod_1.z.enum([
    'id',
    'user_id',
    'store_id',
    'product_name',
    'cost_price',
    'desired_margin',
    'suggested_price',
    'created_at',
    'updated_at',
]);
