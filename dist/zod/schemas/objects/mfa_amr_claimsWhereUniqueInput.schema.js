"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_amr_claimsWhereUniqueInputObjectSchema = void 0;
const zod_1 = require("zod");
const mfa_amr_claimsSession_idAuthentication_methodCompoundUniqueInput_schema_1 = require("./mfa_amr_claimsSession_idAuthentication_methodCompoundUniqueInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    session_id_authentication_method: zod_1.z
        .lazy(() => mfa_amr_claimsSession_idAuthentication_methodCompoundUniqueInput_schema_1.mfa_amr_claimsSession_idAuthentication_methodCompoundUniqueInputObjectSchema)
        .optional(),
})
    .strict();
exports.mfa_amr_claimsWhereUniqueInputObjectSchema = Schema;
