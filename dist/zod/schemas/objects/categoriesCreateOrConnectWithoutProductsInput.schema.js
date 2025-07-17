"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesCreateOrConnectWithoutProductsInputObjectSchema = void 0;
const zod_1 = require("zod");
const categoriesWhereUniqueInput_schema_1 = require("./categoriesWhereUniqueInput.schema");
const categoriesCreateWithoutProductsInput_schema_1 = require("./categoriesCreateWithoutProductsInput.schema");
const categoriesUncheckedCreateWithoutProductsInput_schema_1 = require("./categoriesUncheckedCreateWithoutProductsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => categoriesWhereUniqueInput_schema_1.categoriesWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => categoriesCreateWithoutProductsInput_schema_1.categoriesCreateWithoutProductsInputObjectSchema),
        zod_1.z.lazy(() => categoriesUncheckedCreateWithoutProductsInput_schema_1.categoriesUncheckedCreateWithoutProductsInputObjectSchema),
    ]),
})
    .strict();
exports.categoriesCreateOrConnectWithoutProductsInputObjectSchema = Schema;
