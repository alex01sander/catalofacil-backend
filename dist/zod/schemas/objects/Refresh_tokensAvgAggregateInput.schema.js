"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Refresh_tokensAvgAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.literal(true).optional(),
})
    .strict();
exports.Refresh_tokensAvgAggregateInputObjectSchema = Schema;
