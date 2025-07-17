"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsCreateimagesInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    set: zod_1.z.string().array(),
})
    .strict();
exports.productsCreateimagesInputObjectSchema = Schema;
