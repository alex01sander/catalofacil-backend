"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesAvgAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    quantity: zod_1.z.literal(true).optional(),
    unit_price: zod_1.z.literal(true).optional(),
    total_price: zod_1.z.literal(true).optional(),
})
    .strict();
exports.SalesAvgAggregateInputObjectSchema = Schema;
