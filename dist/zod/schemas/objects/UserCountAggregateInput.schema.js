"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCountAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.literal(true).optional(),
    email: zod_1.z.literal(true).optional(),
    password: zod_1.z.literal(true).optional(),
    createdAt: zod_1.z.literal(true).optional(),
    _all: zod_1.z.literal(true).optional(),
})
    .strict();
exports.UserCountAggregateInputObjectSchema = Schema;
