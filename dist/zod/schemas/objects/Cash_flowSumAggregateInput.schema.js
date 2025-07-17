"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cash_flowSumAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    amount: zod_1.z.literal(true).optional(),
})
    .strict();
exports.Cash_flowSumAggregateInputObjectSchema = Schema;
