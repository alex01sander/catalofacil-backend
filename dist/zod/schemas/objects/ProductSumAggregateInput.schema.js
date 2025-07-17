"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSumAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    price: zod_1.z.literal(true).optional(),
})
    .strict();
exports.ProductSumAggregateInputObjectSchema = Schema;
