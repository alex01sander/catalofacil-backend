"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCountAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.literal(true).optional(),
    title: zod_1.z.literal(true).optional(),
    description: zod_1.z.literal(true).optional(),
    price: zod_1.z.literal(true).optional(),
    imageUrl: zod_1.z.literal(true).optional(),
    domainId: zod_1.z.literal(true).optional(),
    createdAt: zod_1.z.literal(true).optional(),
    _all: zod_1.z.literal(true).optional(),
})
    .strict();
exports.ProductCountAggregateInputObjectSchema = Schema;
