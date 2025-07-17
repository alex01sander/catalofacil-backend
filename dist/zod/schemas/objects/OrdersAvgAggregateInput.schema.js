"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersAvgAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    total_amount: zod_1.z.literal(true).optional(),
})
    .strict();
exports.OrdersAvgAggregateInputObjectSchema = Schema;
