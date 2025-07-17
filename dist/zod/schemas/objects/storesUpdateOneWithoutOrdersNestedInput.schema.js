"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storesUpdateOneWithoutOrdersNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const storesCreateWithoutOrdersInput_schema_1 = require("./storesCreateWithoutOrdersInput.schema");
const storesUncheckedCreateWithoutOrdersInput_schema_1 = require("./storesUncheckedCreateWithoutOrdersInput.schema");
const storesCreateOrConnectWithoutOrdersInput_schema_1 = require("./storesCreateOrConnectWithoutOrdersInput.schema");
const storesUpsertWithoutOrdersInput_schema_1 = require("./storesUpsertWithoutOrdersInput.schema");
const storesWhereUniqueInput_schema_1 = require("./storesWhereUniqueInput.schema");
const storesUpdateWithoutOrdersInput_schema_1 = require("./storesUpdateWithoutOrdersInput.schema");
const storesUncheckedUpdateWithoutOrdersInput_schema_1 = require("./storesUncheckedUpdateWithoutOrdersInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => storesCreateWithoutOrdersInput_schema_1.storesCreateWithoutOrdersInputObjectSchema),
        zod_1.z.lazy(() => storesUncheckedCreateWithoutOrdersInput_schema_1.storesUncheckedCreateWithoutOrdersInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => storesCreateOrConnectWithoutOrdersInput_schema_1.storesCreateOrConnectWithoutOrdersInputObjectSchema)
        .optional(),
    upsert: zod_1.z.lazy(() => storesUpsertWithoutOrdersInput_schema_1.storesUpsertWithoutOrdersInputObjectSchema).optional(),
    disconnect: zod_1.z.boolean().optional(),
    delete: zod_1.z.boolean().optional(),
    connect: zod_1.z.lazy(() => storesWhereUniqueInput_schema_1.storesWhereUniqueInputObjectSchema).optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => storesUpdateWithoutOrdersInput_schema_1.storesUpdateWithoutOrdersInputObjectSchema),
        zod_1.z.lazy(() => storesUncheckedUpdateWithoutOrdersInput_schema_1.storesUncheckedUpdateWithoutOrdersInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.storesUpdateOneWithoutOrdersNestedInputObjectSchema = Schema;
