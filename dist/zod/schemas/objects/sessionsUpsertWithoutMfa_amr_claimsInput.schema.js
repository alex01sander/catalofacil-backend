"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionsUpsertWithoutMfa_amr_claimsInputObjectSchema = void 0;
const zod_1 = require("zod");
const sessionsUpdateWithoutMfa_amr_claimsInput_schema_1 = require("./sessionsUpdateWithoutMfa_amr_claimsInput.schema");
const sessionsUncheckedUpdateWithoutMfa_amr_claimsInput_schema_1 = require("./sessionsUncheckedUpdateWithoutMfa_amr_claimsInput.schema");
const sessionsCreateWithoutMfa_amr_claimsInput_schema_1 = require("./sessionsCreateWithoutMfa_amr_claimsInput.schema");
const sessionsUncheckedCreateWithoutMfa_amr_claimsInput_schema_1 = require("./sessionsUncheckedCreateWithoutMfa_amr_claimsInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => sessionsUpdateWithoutMfa_amr_claimsInput_schema_1.sessionsUpdateWithoutMfa_amr_claimsInputObjectSchema),
        zod_1.z.lazy(() => sessionsUncheckedUpdateWithoutMfa_amr_claimsInput_schema_1.sessionsUncheckedUpdateWithoutMfa_amr_claimsInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => sessionsCreateWithoutMfa_amr_claimsInput_schema_1.sessionsCreateWithoutMfa_amr_claimsInputObjectSchema),
        zod_1.z.lazy(() => sessionsUncheckedCreateWithoutMfa_amr_claimsInput_schema_1.sessionsUncheckedCreateWithoutMfa_amr_claimsInputObjectSchema),
    ]),
})
    .strict();
exports.sessionsUpsertWithoutMfa_amr_claimsInputObjectSchema = Schema;
