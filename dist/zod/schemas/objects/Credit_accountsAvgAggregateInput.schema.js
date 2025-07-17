"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit_accountsAvgAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    total_debt: zod_1.z.literal(true).optional(),
})
    .strict();
exports.Credit_accountsAvgAggregateInputObjectSchema = Schema;
