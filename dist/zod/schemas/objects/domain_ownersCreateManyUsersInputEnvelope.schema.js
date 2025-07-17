"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.domain_ownersCreateManyUsersInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const domain_ownersCreateManyUsersInput_schema_1 = require("./domain_ownersCreateManyUsersInput.schema");
const Schema = zod_1.z
    .object({
    data: zod_1.z.union([
        zod_1.z.lazy(() => domain_ownersCreateManyUsersInput_schema_1.domain_ownersCreateManyUsersInputObjectSchema),
        zod_1.z.lazy(() => domain_ownersCreateManyUsersInput_schema_1.domain_ownersCreateManyUsersInputObjectSchema).array(),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
})
    .strict();
exports.domain_ownersCreateManyUsersInputEnvelopeObjectSchema = Schema;
