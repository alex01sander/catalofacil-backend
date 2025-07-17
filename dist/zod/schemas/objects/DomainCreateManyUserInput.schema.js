"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainCreateManyUserInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    slug: zod_1.z.string(),
    createdAt: zod_1.z.coerce.date().optional(),
})
    .strict();
exports.DomainCreateManyUserInputObjectSchema = Schema;
