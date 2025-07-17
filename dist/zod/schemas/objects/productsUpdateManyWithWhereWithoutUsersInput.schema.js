"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsUpdateManyWithWhereWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const productsScalarWhereInput_schema_1 = require("./productsScalarWhereInput.schema");
const productsUpdateManyMutationInput_schema_1 = require("./productsUpdateManyMutationInput.schema");
const productsUncheckedUpdateManyWithoutProductsInput_schema_1 = require("./productsUncheckedUpdateManyWithoutProductsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => productsScalarWhereInput_schema_1.productsScalarWhereInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => productsUpdateManyMutationInput_schema_1.productsUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => productsUncheckedUpdateManyWithoutProductsInput_schema_1.productsUncheckedUpdateManyWithoutProductsInputObjectSchema),
    ]),
})
    .strict();
exports.productsUpdateManyWithWhereWithoutUsersInputObjectSchema = Schema;
