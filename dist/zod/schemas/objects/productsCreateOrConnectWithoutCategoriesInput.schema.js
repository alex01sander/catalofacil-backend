"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsCreateOrConnectWithoutCategoriesInputObjectSchema = void 0;
const zod_1 = require("zod");
const productsWhereUniqueInput_schema_1 = require("./productsWhereUniqueInput.schema");
const productsCreateWithoutCategoriesInput_schema_1 = require("./productsCreateWithoutCategoriesInput.schema");
const productsUncheckedCreateWithoutCategoriesInput_schema_1 = require("./productsUncheckedCreateWithoutCategoriesInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => productsWhereUniqueInput_schema_1.productsWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => productsCreateWithoutCategoriesInput_schema_1.productsCreateWithoutCategoriesInputObjectSchema),
        zod_1.z.lazy(() => productsUncheckedCreateWithoutCategoriesInput_schema_1.productsUncheckedCreateWithoutCategoriesInputObjectSchema),
    ]),
})
    .strict();
exports.productsCreateOrConnectWithoutCategoriesInputObjectSchema = Schema;
