"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateInputObjectSchema = void 0;
const zod_1 = require("zod");
const DomainCreateNestedOneWithoutProductsInput_schema_1 = require("./DomainCreateNestedOneWithoutProductsInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    title: zod_1.z.string(),
    description: zod_1.z.string(),
    price: zod_1.z.number(),
    imageUrl: zod_1.z.string(),
    createdAt: zod_1.z.coerce.date().optional(),
    domain: zod_1.z.lazy(() => DomainCreateNestedOneWithoutProductsInput_schema_1.DomainCreateNestedOneWithoutProductsInputObjectSchema),
})
    .strict();
exports.ProductCreateInputObjectSchema = Schema;
