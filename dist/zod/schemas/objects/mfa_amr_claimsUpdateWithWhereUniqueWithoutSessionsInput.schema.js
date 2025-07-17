"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_amr_claimsUpdateWithWhereUniqueWithoutSessionsInputObjectSchema = void 0;
const zod_1 = require("zod");
const mfa_amr_claimsWhereUniqueInput_schema_1 = require("./mfa_amr_claimsWhereUniqueInput.schema");
const mfa_amr_claimsUpdateWithoutSessionsInput_schema_1 = require("./mfa_amr_claimsUpdateWithoutSessionsInput.schema");
const mfa_amr_claimsUncheckedUpdateWithoutSessionsInput_schema_1 = require("./mfa_amr_claimsUncheckedUpdateWithoutSessionsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => mfa_amr_claimsWhereUniqueInput_schema_1.mfa_amr_claimsWhereUniqueInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => mfa_amr_claimsUpdateWithoutSessionsInput_schema_1.mfa_amr_claimsUpdateWithoutSessionsInputObjectSchema),
        zod_1.z.lazy(() => mfa_amr_claimsUncheckedUpdateWithoutSessionsInput_schema_1.mfa_amr_claimsUncheckedUpdateWithoutSessionsInputObjectSchema),
    ]),
})
    .strict();
exports.mfa_amr_claimsUpdateWithWhereUniqueWithoutSessionsInputObjectSchema = Schema;
