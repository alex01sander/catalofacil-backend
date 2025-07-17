"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsUpdateWithWhereUniqueWithoutCategoriesInputObjectSchema = void 0;
const zod_1 = require("zod");
const productsWhereUniqueInput_schema_1 = require("./productsWhereUniqueInput.schema");
const productsUpdateWithoutCategoriesInput_schema_1 = require("./productsUpdateWithoutCategoriesInput.schema");
const productsUncheckedUpdateWithoutCategoriesInput_schema_1 = require("./productsUncheckedUpdateWithoutCategoriesInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => productsWhereUniqueInput_schema_1.productsWhereUniqueInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => productsUpdateWithoutCategoriesInput_schema_1.productsUpdateWithoutCategoriesInputObjectSchema),
        zod_1.z.lazy(() => productsUncheckedUpdateWithoutCategoriesInput_schema_1.productsUncheckedUpdateWithoutCategoriesInputObjectSchema),
    ]),
})
    .strict();
exports.productsUpdateWithWhereUniqueWithoutCategoriesInputObjectSchema = Schema;
