"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsUpdateimagesInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    set: zod_1.z.string().array().optional(),
    push: zod_1.z.union([zod_1.z.string(), zod_1.z.string().array()]).optional(),
})
    .strict();
exports.productsUpdateimagesInputObjectSchema = Schema;
