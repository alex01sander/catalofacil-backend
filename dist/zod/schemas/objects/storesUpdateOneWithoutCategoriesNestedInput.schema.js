"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storesUpdateOneWithoutCategoriesNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const storesCreateWithoutCategoriesInput_schema_1 = require("./storesCreateWithoutCategoriesInput.schema");
const storesUncheckedCreateWithoutCategoriesInput_schema_1 = require("./storesUncheckedCreateWithoutCategoriesInput.schema");
const storesCreateOrConnectWithoutCategoriesInput_schema_1 = require("./storesCreateOrConnectWithoutCategoriesInput.schema");
const storesUpsertWithoutCategoriesInput_schema_1 = require("./storesUpsertWithoutCategoriesInput.schema");
const storesWhereUniqueInput_schema_1 = require("./storesWhereUniqueInput.schema");
const storesUpdateWithoutCategoriesInput_schema_1 = require("./storesUpdateWithoutCategoriesInput.schema");
const storesUncheckedUpdateWithoutCategoriesInput_schema_1 = require("./storesUncheckedUpdateWithoutCategoriesInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => storesCreateWithoutCategoriesInput_schema_1.storesCreateWithoutCategoriesInputObjectSchema),
        zod_1.z.lazy(() => storesUncheckedCreateWithoutCategoriesInput_schema_1.storesUncheckedCreateWithoutCategoriesInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => storesCreateOrConnectWithoutCategoriesInput_schema_1.storesCreateOrConnectWithoutCategoriesInputObjectSchema)
        .optional(),
    upsert: zod_1.z
        .lazy(() => storesUpsertWithoutCategoriesInput_schema_1.storesUpsertWithoutCategoriesInputObjectSchema)
        .optional(),
    disconnect: zod_1.z.boolean().optional(),
    delete: zod_1.z.boolean().optional(),
    connect: zod_1.z.lazy(() => storesWhereUniqueInput_schema_1.storesWhereUniqueInputObjectSchema).optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => storesUpdateWithoutCategoriesInput_schema_1.storesUpdateWithoutCategoriesInputObjectSchema),
        zod_1.z.lazy(() => storesUncheckedUpdateWithoutCategoriesInput_schema_1.storesUncheckedUpdateWithoutCategoriesInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.storesUpdateOneWithoutCategoriesNestedInputObjectSchema = Schema;
