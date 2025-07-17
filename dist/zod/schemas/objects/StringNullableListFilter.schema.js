"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringNullableListFilterObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    equals: zod_1.z.string().array().optional().nullable(),
    has: zod_1.z.string().optional().nullable(),
    hasEvery: zod_1.z.string().array().optional(),
    hasSome: zod_1.z.string().array().optional(),
    isEmpty: zod_1.z.boolean().optional(),
})
    .strict();
exports.StringNullableListFilterObjectSchema = Schema;
