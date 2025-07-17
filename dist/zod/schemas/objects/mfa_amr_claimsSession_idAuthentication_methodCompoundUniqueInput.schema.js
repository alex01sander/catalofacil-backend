"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_amr_claimsSession_idAuthentication_methodCompoundUniqueInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    session_id: zod_1.z.string(),
    authentication_method: zod_1.z.string(),
})
    .strict();
exports.mfa_amr_claimsSession_idAuthentication_methodCompoundUniqueInputObjectSchema = Schema;
