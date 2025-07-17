"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionsUpdateOneWithoutRefresh_tokensNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const sessionsCreateWithoutRefresh_tokensInput_schema_1 = require("./sessionsCreateWithoutRefresh_tokensInput.schema");
const sessionsUncheckedCreateWithoutRefresh_tokensInput_schema_1 = require("./sessionsUncheckedCreateWithoutRefresh_tokensInput.schema");
const sessionsCreateOrConnectWithoutRefresh_tokensInput_schema_1 = require("./sessionsCreateOrConnectWithoutRefresh_tokensInput.schema");
const sessionsUpsertWithoutRefresh_tokensInput_schema_1 = require("./sessionsUpsertWithoutRefresh_tokensInput.schema");
const sessionsWhereUniqueInput_schema_1 = require("./sessionsWhereUniqueInput.schema");
const sessionsUpdateWithoutRefresh_tokensInput_schema_1 = require("./sessionsUpdateWithoutRefresh_tokensInput.schema");
const sessionsUncheckedUpdateWithoutRefresh_tokensInput_schema_1 = require("./sessionsUncheckedUpdateWithoutRefresh_tokensInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => sessionsCreateWithoutRefresh_tokensInput_schema_1.sessionsCreateWithoutRefresh_tokensInputObjectSchema),
        zod_1.z.lazy(() => sessionsUncheckedCreateWithoutRefresh_tokensInput_schema_1.sessionsUncheckedCreateWithoutRefresh_tokensInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => sessionsCreateOrConnectWithoutRefresh_tokensInput_schema_1.sessionsCreateOrConnectWithoutRefresh_tokensInputObjectSchema)
        .optional(),
    upsert: zod_1.z
        .lazy(() => sessionsUpsertWithoutRefresh_tokensInput_schema_1.sessionsUpsertWithoutRefresh_tokensInputObjectSchema)
        .optional(),
    disconnect: zod_1.z.boolean().optional(),
    delete: zod_1.z.boolean().optional(),
    connect: zod_1.z.lazy(() => sessionsWhereUniqueInput_schema_1.sessionsWhereUniqueInputObjectSchema).optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => sessionsUpdateWithoutRefresh_tokensInput_schema_1.sessionsUpdateWithoutRefresh_tokensInputObjectSchema),
        zod_1.z.lazy(() => sessionsUncheckedUpdateWithoutRefresh_tokensInput_schema_1.sessionsUncheckedUpdateWithoutRefresh_tokensInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.sessionsUpdateOneWithoutRefresh_tokensNestedInputObjectSchema = Schema;
