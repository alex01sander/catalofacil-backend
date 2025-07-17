"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mfa_factorsListRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const mfa_factorsWhereInput_schema_1 = require("./mfa_factorsWhereInput.schema");
const Schema = zod_1.z
    .object({
    every: zod_1.z.lazy(() => mfa_factorsWhereInput_schema_1.mfa_factorsWhereInputObjectSchema).optional(),
    some: zod_1.z.lazy(() => mfa_factorsWhereInput_schema_1.mfa_factorsWhereInputObjectSchema).optional(),
    none: zod_1.z.lazy(() => mfa_factorsWhereInput_schema_1.mfa_factorsWhereInputObjectSchema).optional(),
})
    .strict();
exports.Mfa_factorsListRelationFilterObjectSchema = Schema;
