"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionsUpdateOneRequiredWithoutMfa_amr_claimsNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const sessionsCreateWithoutMfa_amr_claimsInput_schema_1 = require("./sessionsCreateWithoutMfa_amr_claimsInput.schema");
const sessionsUncheckedCreateWithoutMfa_amr_claimsInput_schema_1 = require("./sessionsUncheckedCreateWithoutMfa_amr_claimsInput.schema");
const sessionsCreateOrConnectWithoutMfa_amr_claimsInput_schema_1 = require("./sessionsCreateOrConnectWithoutMfa_amr_claimsInput.schema");
const sessionsUpsertWithoutMfa_amr_claimsInput_schema_1 = require("./sessionsUpsertWithoutMfa_amr_claimsInput.schema");
const sessionsWhereUniqueInput_schema_1 = require("./sessionsWhereUniqueInput.schema");
const sessionsUpdateWithoutMfa_amr_claimsInput_schema_1 = require("./sessionsUpdateWithoutMfa_amr_claimsInput.schema");
const sessionsUncheckedUpdateWithoutMfa_amr_claimsInput_schema_1 = require("./sessionsUncheckedUpdateWithoutMfa_amr_claimsInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => sessionsCreateWithoutMfa_amr_claimsInput_schema_1.sessionsCreateWithoutMfa_amr_claimsInputObjectSchema),
        zod_1.z.lazy(() => sessionsUncheckedCreateWithoutMfa_amr_claimsInput_schema_1.sessionsUncheckedCreateWithoutMfa_amr_claimsInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => sessionsCreateOrConnectWithoutMfa_amr_claimsInput_schema_1.sessionsCreateOrConnectWithoutMfa_amr_claimsInputObjectSchema)
        .optional(),
    upsert: zod_1.z
        .lazy(() => sessionsUpsertWithoutMfa_amr_claimsInput_schema_1.sessionsUpsertWithoutMfa_amr_claimsInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => sessionsWhereUniqueInput_schema_1.sessionsWhereUniqueInputObjectSchema).optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => sessionsUpdateWithoutMfa_amr_claimsInput_schema_1.sessionsUpdateWithoutMfa_amr_claimsInputObjectSchema),
        zod_1.z.lazy(() => sessionsUncheckedUpdateWithoutMfa_amr_claimsInput_schema_1.sessionsUncheckedUpdateWithoutMfa_amr_claimsInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.sessionsUpdateOneRequiredWithoutMfa_amr_claimsNestedInputObjectSchema = Schema;
