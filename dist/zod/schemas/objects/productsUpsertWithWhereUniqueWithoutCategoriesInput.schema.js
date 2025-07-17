"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsUpsertWithWhereUniqueWithoutCategoriesInputObjectSchema = void 0;
const zod_1 = require("zod");
const productsWhereUniqueInput_schema_1 = require("./productsWhereUniqueInput.schema");
const productsUpdateWithoutCategoriesInput_schema_1 = require("./productsUpdateWithoutCategoriesInput.schema");
const productsUncheckedUpdateWithoutCategoriesInput_schema_1 = require("./productsUncheckedUpdateWithoutCategoriesInput.schema");
const productsCreateWithoutCategoriesInput_schema_1 = require("./productsCreateWithoutCategoriesInput.schema");
const productsUncheckedCreateWithoutCategoriesInput_schema_1 = require("./productsUncheckedCreateWithoutCategoriesInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => productsWhereUniqueInput_schema_1.productsWhereUniqueInputObjectSchema),
    update: zod_1.z.union([
        zod_1.z.lazy(() => productsUpdateWithoutCategoriesInput_schema_1.productsUpdateWithoutCategoriesInputObjectSchema),
        zod_1.z.lazy(() => productsUncheckedUpdateWithoutCategoriesInput_schema_1.productsUncheckedUpdateWithoutCategoriesInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => productsCreateWithoutCategoriesInput_schema_1.productsCreateWithoutCategoriesInputObjectSchema),
        zod_1.z.lazy(() => productsUncheckedCreateWithoutCategoriesInput_schema_1.productsUncheckedCreateWithoutCategoriesInputObjectSchema),
    ]),
})
    .strict();
exports.productsUpsertWithWhereUniqueWithoutCategoriesInputObjectSchema = Schema;
