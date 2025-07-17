"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.identitiesCreateManyUsersInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const identitiesCreateManyUsersInput_schema_1 = require("./identitiesCreateManyUsersInput.schema");
const Schema = zod_1.z
    .object({
    data: zod_1.z.union([
        zod_1.z.lazy(() => identitiesCreateManyUsersInput_schema_1.identitiesCreateManyUsersInputObjectSchema),
        zod_1.z.lazy(() => identitiesCreateManyUsersInput_schema_1.identitiesCreateManyUsersInputObjectSchema).array(),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
})
    .strict();
exports.identitiesCreateManyUsersInputEnvelopeObjectSchema = Schema;
