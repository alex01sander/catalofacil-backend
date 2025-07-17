"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionsCreateOrConnectWithoutRefresh_tokensInputObjectSchema = void 0;
const zod_1 = require("zod");
const sessionsWhereUniqueInput_schema_1 = require("./sessionsWhereUniqueInput.schema");
const sessionsCreateWithoutRefresh_tokensInput_schema_1 = require("./sessionsCreateWithoutRefresh_tokensInput.schema");
const sessionsUncheckedCreateWithoutRefresh_tokensInput_schema_1 = require("./sessionsUncheckedCreateWithoutRefresh_tokensInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => sessionsWhereUniqueInput_schema_1.sessionsWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => sessionsCreateWithoutRefresh_tokensInput_schema_1.sessionsCreateWithoutRefresh_tokensInputObjectSchema),
        zod_1.z.lazy(() => sessionsUncheckedCreateWithoutRefresh_tokensInput_schema_1.sessionsUncheckedCreateWithoutRefresh_tokensInputObjectSchema),
    ]),
})
    .strict();
exports.sessionsCreateOrConnectWithoutRefresh_tokensInputObjectSchema = Schema;
