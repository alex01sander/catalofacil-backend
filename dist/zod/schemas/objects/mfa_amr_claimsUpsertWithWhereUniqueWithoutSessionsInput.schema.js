"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_amr_claimsUpsertWithWhereUniqueWithoutSessionsInputObjectSchema = void 0;
const zod_1 = require("zod");
const mfa_amr_claimsWhereUniqueInput_schema_1 = require("./mfa_amr_claimsWhereUniqueInput.schema");
const mfa_amr_claimsUpdateWithoutSessionsInput_schema_1 = require("./mfa_amr_claimsUpdateWithoutSessionsInput.schema");
const mfa_amr_claimsUncheckedUpdateWithoutSessionsInput_schema_1 = require("./mfa_amr_claimsUncheckedUpdateWithoutSessionsInput.schema");
const mfa_amr_claimsCreateWithoutSessionsInput_schema_1 = require("./mfa_amr_claimsCreateWithoutSessionsInput.schema");
const mfa_amr_claimsUncheckedCreateWithoutSessionsInput_schema_1 = require("./mfa_amr_claimsUncheckedCreateWithoutSessionsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => mfa_amr_claimsWhereUniqueInput_schema_1.mfa_amr_claimsWhereUniqueInputObjectSchema),
    update: zod_1.z.union([
        zod_1.z.lazy(() => mfa_amr_claimsUpdateWithoutSessionsInput_schema_1.mfa_amr_claimsUpdateWithoutSessionsInputObjectSchema),
        zod_1.z.lazy(() => mfa_amr_claimsUncheckedUpdateWithoutSessionsInput_schema_1.mfa_amr_claimsUncheckedUpdateWithoutSessionsInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => mfa_amr_claimsCreateWithoutSessionsInput_schema_1.mfa_amr_claimsCreateWithoutSessionsInputObjectSchema),
        zod_1.z.lazy(() => mfa_amr_claimsUncheckedCreateWithoutSessionsInput_schema_1.mfa_amr_claimsUncheckedCreateWithoutSessionsInputObjectSchema),
    ]),
})
    .strict();
exports.mfa_amr_claimsUpsertWithWhereUniqueWithoutSessionsInputObjectSchema = Schema;
