"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateWithoutDomainInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    title: zod_1.z.string(),
    description: zod_1.z.string(),
    price: zod_1.z.number(),
    imageUrl: zod_1.z.string(),
    createdAt: zod_1.z.coerce.date().optional(),
})
    .strict();
exports.ProductCreateWithoutDomainInputObjectSchema = Schema;
