"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateManyWithWhereWithoutDomainInputObjectSchema = void 0;
const zod_1 = require("zod");
const ProductScalarWhereInput_schema_1 = require("./ProductScalarWhereInput.schema");
const ProductUpdateManyMutationInput_schema_1 = require("./ProductUpdateManyMutationInput.schema");
const ProductUncheckedUpdateManyWithoutProductsInput_schema_1 = require("./ProductUncheckedUpdateManyWithoutProductsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => ProductScalarWhereInput_schema_1.ProductScalarWhereInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => ProductUpdateManyMutationInput_schema_1.ProductUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => ProductUncheckedUpdateManyWithoutProductsInput_schema_1.ProductUncheckedUpdateManyWithoutProductsInputObjectSchema),
    ]),
})
    .strict();
exports.ProductUpdateManyWithWhereWithoutDomainInputObjectSchema = Schema;
