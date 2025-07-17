"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storesUpdateOneWithoutProductsNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const storesCreateWithoutProductsInput_schema_1 = require("./storesCreateWithoutProductsInput.schema");
const storesUncheckedCreateWithoutProductsInput_schema_1 = require("./storesUncheckedCreateWithoutProductsInput.schema");
const storesCreateOrConnectWithoutProductsInput_schema_1 = require("./storesCreateOrConnectWithoutProductsInput.schema");
const storesUpsertWithoutProductsInput_schema_1 = require("./storesUpsertWithoutProductsInput.schema");
const storesWhereUniqueInput_schema_1 = require("./storesWhereUniqueInput.schema");
const storesUpdateWithoutProductsInput_schema_1 = require("./storesUpdateWithoutProductsInput.schema");
const storesUncheckedUpdateWithoutProductsInput_schema_1 = require("./storesUncheckedUpdateWithoutProductsInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => storesCreateWithoutProductsInput_schema_1.storesCreateWithoutProductsInputObjectSchema),
        zod_1.z.lazy(() => storesUncheckedCreateWithoutProductsInput_schema_1.storesUncheckedCreateWithoutProductsInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => storesCreateOrConnectWithoutProductsInput_schema_1.storesCreateOrConnectWithoutProductsInputObjectSchema)
        .optional(),
    upsert: zod_1.z
        .lazy(() => storesUpsertWithoutProductsInput_schema_1.storesUpsertWithoutProductsInputObjectSchema)
        .optional(),
    disconnect: zod_1.z.boolean().optional(),
    delete: zod_1.z.boolean().optional(),
    connect: zod_1.z.lazy(() => storesWhereUniqueInput_schema_1.storesWhereUniqueInputObjectSchema).optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => storesUpdateWithoutProductsInput_schema_1.storesUpdateWithoutProductsInputObjectSchema),
        zod_1.z.lazy(() => storesUncheckedUpdateWithoutProductsInput_schema_1.storesUncheckedUpdateWithoutProductsInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.storesUpdateOneWithoutProductsNestedInputObjectSchema = Schema;
