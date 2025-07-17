"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesCreateNestedOneWithoutProductsInputObjectSchema = void 0;
const zod_1 = require("zod");
const categoriesCreateWithoutProductsInput_schema_1 = require("./categoriesCreateWithoutProductsInput.schema");
const categoriesUncheckedCreateWithoutProductsInput_schema_1 = require("./categoriesUncheckedCreateWithoutProductsInput.schema");
const categoriesCreateOrConnectWithoutProductsInput_schema_1 = require("./categoriesCreateOrConnectWithoutProductsInput.schema");
const categoriesWhereUniqueInput_schema_1 = require("./categoriesWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => categoriesCreateWithoutProductsInput_schema_1.categoriesCreateWithoutProductsInputObjectSchema),
        zod_1.z.lazy(() => categoriesUncheckedCreateWithoutProductsInput_schema_1.categoriesUncheckedCreateWithoutProductsInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => categoriesCreateOrConnectWithoutProductsInput_schema_1.categoriesCreateOrConnectWithoutProductsInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => categoriesWhereUniqueInput_schema_1.categoriesWhereUniqueInputObjectSchema).optional(),
})
    .strict();
exports.categoriesCreateNestedOneWithoutProductsInputObjectSchema = Schema;
