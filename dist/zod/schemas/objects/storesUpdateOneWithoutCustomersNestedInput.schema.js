"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storesUpdateOneWithoutCustomersNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const storesCreateWithoutCustomersInput_schema_1 = require("./storesCreateWithoutCustomersInput.schema");
const storesUncheckedCreateWithoutCustomersInput_schema_1 = require("./storesUncheckedCreateWithoutCustomersInput.schema");
const storesCreateOrConnectWithoutCustomersInput_schema_1 = require("./storesCreateOrConnectWithoutCustomersInput.schema");
const storesUpsertWithoutCustomersInput_schema_1 = require("./storesUpsertWithoutCustomersInput.schema");
const storesWhereUniqueInput_schema_1 = require("./storesWhereUniqueInput.schema");
const storesUpdateWithoutCustomersInput_schema_1 = require("./storesUpdateWithoutCustomersInput.schema");
const storesUncheckedUpdateWithoutCustomersInput_schema_1 = require("./storesUncheckedUpdateWithoutCustomersInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => storesCreateWithoutCustomersInput_schema_1.storesCreateWithoutCustomersInputObjectSchema),
        zod_1.z.lazy(() => storesUncheckedCreateWithoutCustomersInput_schema_1.storesUncheckedCreateWithoutCustomersInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => storesCreateOrConnectWithoutCustomersInput_schema_1.storesCreateOrConnectWithoutCustomersInputObjectSchema)
        .optional(),
    upsert: zod_1.z
        .lazy(() => storesUpsertWithoutCustomersInput_schema_1.storesUpsertWithoutCustomersInputObjectSchema)
        .optional(),
    disconnect: zod_1.z.boolean().optional(),
    delete: zod_1.z.boolean().optional(),
    connect: zod_1.z.lazy(() => storesWhereUniqueInput_schema_1.storesWhereUniqueInputObjectSchema).optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => storesUpdateWithoutCustomersInput_schema_1.storesUpdateWithoutCustomersInputObjectSchema),
        zod_1.z.lazy(() => storesUncheckedUpdateWithoutCustomersInput_schema_1.storesUncheckedUpdateWithoutCustomersInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.storesUpdateOneWithoutCustomersNestedInputObjectSchema = Schema;
