"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesUpdateOneWithoutProductsNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const categoriesCreateWithoutProductsInput_schema_1 = require("./categoriesCreateWithoutProductsInput.schema");
const categoriesUncheckedCreateWithoutProductsInput_schema_1 = require("./categoriesUncheckedCreateWithoutProductsInput.schema");
const categoriesCreateOrConnectWithoutProductsInput_schema_1 = require("./categoriesCreateOrConnectWithoutProductsInput.schema");
const categoriesUpsertWithoutProductsInput_schema_1 = require("./categoriesUpsertWithoutProductsInput.schema");
const categoriesWhereUniqueInput_schema_1 = require("./categoriesWhereUniqueInput.schema");
const categoriesUpdateWithoutProductsInput_schema_1 = require("./categoriesUpdateWithoutProductsInput.schema");
const categoriesUncheckedUpdateWithoutProductsInput_schema_1 = require("./categoriesUncheckedUpdateWithoutProductsInput.schema");
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
    upsert: zod_1.z
        .lazy(() => categoriesUpsertWithoutProductsInput_schema_1.categoriesUpsertWithoutProductsInputObjectSchema)
        .optional(),
    disconnect: zod_1.z.boolean().optional(),
    delete: zod_1.z.boolean().optional(),
    connect: zod_1.z.lazy(() => categoriesWhereUniqueInput_schema_1.categoriesWhereUniqueInputObjectSchema).optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => categoriesUpdateWithoutProductsInput_schema_1.categoriesUpdateWithoutProductsInputObjectSchema),
        zod_1.z.lazy(() => categoriesUncheckedUpdateWithoutProductsInput_schema_1.categoriesUncheckedUpdateWithoutProductsInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.categoriesUpdateOneWithoutProductsNestedInputObjectSchema = Schema;
