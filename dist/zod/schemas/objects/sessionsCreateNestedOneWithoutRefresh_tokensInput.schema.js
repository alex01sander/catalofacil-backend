"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionsCreateNestedOneWithoutRefresh_tokensInputObjectSchema = void 0;
const zod_1 = require("zod");
const sessionsCreateWithoutRefresh_tokensInput_schema_1 = require("./sessionsCreateWithoutRefresh_tokensInput.schema");
const sessionsUncheckedCreateWithoutRefresh_tokensInput_schema_1 = require("./sessionsUncheckedCreateWithoutRefresh_tokensInput.schema");
const sessionsCreateOrConnectWithoutRefresh_tokensInput_schema_1 = require("./sessionsCreateOrConnectWithoutRefresh_tokensInput.schema");
const sessionsWhereUniqueInput_schema_1 = require("./sessionsWhereUniqueInput.schema");
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
    connect: zod_1.z.lazy(() => sessionsWhereUniqueInput_schema_1.sessionsWhereUniqueInputObjectSchema).optional(),
})
    .strict();
exports.sessionsCreateNestedOneWithoutRefresh_tokensInputObjectSchema = Schema;
