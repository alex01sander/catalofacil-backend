"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_challengesCreateManyMfa_factorsInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const mfa_challengesCreateManyMfa_factorsInput_schema_1 = require("./mfa_challengesCreateManyMfa_factorsInput.schema");
const Schema = zod_1.z
    .object({
    data: zod_1.z.union([
        zod_1.z.lazy(() => mfa_challengesCreateManyMfa_factorsInput_schema_1.mfa_challengesCreateManyMfa_factorsInputObjectSchema),
        zod_1.z
            .lazy(() => mfa_challengesCreateManyMfa_factorsInput_schema_1.mfa_challengesCreateManyMfa_factorsInputObjectSchema)
            .array(),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
})
    .strict();
exports.mfa_challengesCreateManyMfa_factorsInputEnvelopeObjectSchema = Schema;
