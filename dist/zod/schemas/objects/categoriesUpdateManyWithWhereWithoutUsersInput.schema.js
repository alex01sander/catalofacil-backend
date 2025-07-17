"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesUpdateManyWithWhereWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const categoriesScalarWhereInput_schema_1 = require("./categoriesScalarWhereInput.schema");
const categoriesUpdateManyMutationInput_schema_1 = require("./categoriesUpdateManyMutationInput.schema");
const categoriesUncheckedUpdateManyWithoutCategoriesInput_schema_1 = require("./categoriesUncheckedUpdateManyWithoutCategoriesInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => categoriesScalarWhereInput_schema_1.categoriesScalarWhereInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => categoriesUpdateManyMutationInput_schema_1.categoriesUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => categoriesUncheckedUpdateManyWithoutCategoriesInput_schema_1.categoriesUncheckedUpdateManyWithoutCategoriesInputObjectSchema),
    ]),
})
    .strict();
exports.categoriesUpdateManyWithWhereWithoutUsersInputObjectSchema = Schema;
