"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mfa_factorsRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const mfa_factorsWhereInput_schema_1 = require("./mfa_factorsWhereInput.schema");
const Schema = zod_1.z
    .object({
    is: zod_1.z
        .lazy(() => mfa_factorsWhereInput_schema_1.mfa_factorsWhereInputObjectSchema)
        .optional()
        .nullable(),
    isNot: zod_1.z
        .lazy(() => mfa_factorsWhereInput_schema_1.mfa_factorsWhereInputObjectSchema)
        .optional()
        .nullable(),
})
    .strict();
exports.Mfa_factorsRelationFilterObjectSchema = Schema;
