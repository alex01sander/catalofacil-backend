"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainCountAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.literal(true).optional(),
    slug: zod_1.z.literal(true).optional(),
    userId: zod_1.z.literal(true).optional(),
    createdAt: zod_1.z.literal(true).optional(),
    _all: zod_1.z.literal(true).optional(),
})
    .strict();
exports.DomainCountAggregateInputObjectSchema = Schema;
