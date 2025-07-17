"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainUncheckedCreateWithoutUserInputObjectSchema = void 0;
const zod_1 = require("zod");
const ProductUncheckedCreateNestedManyWithoutDomainInput_schema_1 = require("./ProductUncheckedCreateNestedManyWithoutDomainInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    slug: zod_1.z.string(),
    createdAt: zod_1.z.coerce.date().optional(),
    products: zod_1.z
        .lazy(() => ProductUncheckedCreateNestedManyWithoutDomainInput_schema_1.ProductUncheckedCreateNestedManyWithoutDomainInputObjectSchema)
        .optional(),
})
    .strict();
exports.DomainUncheckedCreateWithoutUserInputObjectSchema = Schema;
