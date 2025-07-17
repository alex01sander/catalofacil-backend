"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_costsSumAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    cost_price: zod_1.z.literal(true).optional(),
    desired_margin: zod_1.z.literal(true).optional(),
    suggested_price: zod_1.z.literal(true).optional(),
})
    .strict();
exports.Product_costsSumAggregateInputObjectSchema = Schema;
