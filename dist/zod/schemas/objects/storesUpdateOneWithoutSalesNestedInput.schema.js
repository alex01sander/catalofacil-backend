"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storesUpdateOneWithoutSalesNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const storesCreateWithoutSalesInput_schema_1 = require("./storesCreateWithoutSalesInput.schema");
const storesUncheckedCreateWithoutSalesInput_schema_1 = require("./storesUncheckedCreateWithoutSalesInput.schema");
const storesCreateOrConnectWithoutSalesInput_schema_1 = require("./storesCreateOrConnectWithoutSalesInput.schema");
const storesUpsertWithoutSalesInput_schema_1 = require("./storesUpsertWithoutSalesInput.schema");
const storesWhereUniqueInput_schema_1 = require("./storesWhereUniqueInput.schema");
const storesUpdateWithoutSalesInput_schema_1 = require("./storesUpdateWithoutSalesInput.schema");
const storesUncheckedUpdateWithoutSalesInput_schema_1 = require("./storesUncheckedUpdateWithoutSalesInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => storesCreateWithoutSalesInput_schema_1.storesCreateWithoutSalesInputObjectSchema),
        zod_1.z.lazy(() => storesUncheckedCreateWithoutSalesInput_schema_1.storesUncheckedCreateWithoutSalesInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => storesCreateOrConnectWithoutSalesInput_schema_1.storesCreateOrConnectWithoutSalesInputObjectSchema)
        .optional(),
    upsert: zod_1.z.lazy(() => storesUpsertWithoutSalesInput_schema_1.storesUpsertWithoutSalesInputObjectSchema).optional(),
    disconnect: zod_1.z.boolean().optional(),
    delete: zod_1.z.boolean().optional(),
    connect: zod_1.z.lazy(() => storesWhereUniqueInput_schema_1.storesWhereUniqueInputObjectSchema).optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => storesUpdateWithoutSalesInput_schema_1.storesUpdateWithoutSalesInputObjectSchema),
        zod_1.z.lazy(() => storesUncheckedUpdateWithoutSalesInput_schema_1.storesUncheckedUpdateWithoutSalesInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.storesUpdateOneWithoutSalesNestedInputObjectSchema = Schema;
