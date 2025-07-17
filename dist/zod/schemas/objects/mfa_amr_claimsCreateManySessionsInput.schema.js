"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_amr_claimsCreateManySessionsInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    created_at: zod_1.z.coerce.date(),
    updated_at: zod_1.z.coerce.date(),
    authentication_method: zod_1.z.string(),
    id: zod_1.z.string(),
})
    .strict();
exports.mfa_amr_claimsCreateManySessionsInputObjectSchema = Schema;
