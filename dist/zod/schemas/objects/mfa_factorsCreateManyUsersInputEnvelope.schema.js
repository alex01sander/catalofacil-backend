"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_factorsCreateManyUsersInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const mfa_factorsCreateManyUsersInput_schema_1 = require("./mfa_factorsCreateManyUsersInput.schema");
const Schema = zod_1.z
    .object({
    data: zod_1.z.union([
        zod_1.z.lazy(() => mfa_factorsCreateManyUsersInput_schema_1.mfa_factorsCreateManyUsersInputObjectSchema),
        zod_1.z.lazy(() => mfa_factorsCreateManyUsersInput_schema_1.mfa_factorsCreateManyUsersInputObjectSchema).array(),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
})
    .strict();
exports.mfa_factorsCreateManyUsersInputEnvelopeObjectSchema = Schema;
