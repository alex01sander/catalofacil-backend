"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionsUpsertWithoutRefresh_tokensInputObjectSchema = void 0;
const zod_1 = require("zod");
const sessionsUpdateWithoutRefresh_tokensInput_schema_1 = require("./sessionsUpdateWithoutRefresh_tokensInput.schema");
const sessionsUncheckedUpdateWithoutRefresh_tokensInput_schema_1 = require("./sessionsUncheckedUpdateWithoutRefresh_tokensInput.schema");
const sessionsCreateWithoutRefresh_tokensInput_schema_1 = require("./sessionsCreateWithoutRefresh_tokensInput.schema");
const sessionsUncheckedCreateWithoutRefresh_tokensInput_schema_1 = require("./sessionsUncheckedCreateWithoutRefresh_tokensInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => sessionsUpdateWithoutRefresh_tokensInput_schema_1.sessionsUpdateWithoutRefresh_tokensInputObjectSchema),
        zod_1.z.lazy(() => sessionsUncheckedUpdateWithoutRefresh_tokensInput_schema_1.sessionsUncheckedUpdateWithoutRefresh_tokensInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => sessionsCreateWithoutRefresh_tokensInput_schema_1.sessionsCreateWithoutRefresh_tokensInputObjectSchema),
        zod_1.z.lazy(() => sessionsUncheckedCreateWithoutRefresh_tokensInput_schema_1.sessionsUncheckedCreateWithoutRefresh_tokensInputObjectSchema),
    ]),
})
    .strict();
exports.sessionsUpsertWithoutRefresh_tokensInputObjectSchema = Schema;
