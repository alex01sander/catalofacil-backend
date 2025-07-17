"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainCreateWithoutUserInputObjectSchema = void 0;
const zod_1 = require("zod");
const ProductCreateNestedManyWithoutDomainInput_schema_1 = require("./ProductCreateNestedManyWithoutDomainInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    slug: zod_1.z.string(),
    createdAt: zod_1.z.coerce.date().optional(),
    products: zod_1.z
        .lazy(() => ProductCreateNestedManyWithoutDomainInput_schema_1.ProductCreateNestedManyWithoutDomainInputObjectSchema)
        .optional(),
})
    .strict();
exports.DomainCreateWithoutUserInputObjectSchema = Schema;
