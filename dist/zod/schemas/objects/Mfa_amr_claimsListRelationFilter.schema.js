"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mfa_amr_claimsListRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const mfa_amr_claimsWhereInput_schema_1 = require("./mfa_amr_claimsWhereInput.schema");
const Schema = zod_1.z
    .object({
    every: zod_1.z.lazy(() => mfa_amr_claimsWhereInput_schema_1.mfa_amr_claimsWhereInputObjectSchema).optional(),
    some: zod_1.z.lazy(() => mfa_amr_claimsWhereInput_schema_1.mfa_amr_claimsWhereInputObjectSchema).optional(),
    none: zod_1.z.lazy(() => mfa_amr_claimsWhereInput_schema_1.mfa_amr_claimsWhereInputObjectSchema).optional(),
})
    .strict();
exports.Mfa_amr_claimsListRelationFilterObjectSchema = Schema;
