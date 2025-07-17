"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionsCreateManyUsersInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const sessionsCreateManyUsersInput_schema_1 = require("./sessionsCreateManyUsersInput.schema");
const Schema = zod_1.z
    .object({
    data: zod_1.z.union([
        zod_1.z.lazy(() => sessionsCreateManyUsersInput_schema_1.sessionsCreateManyUsersInputObjectSchema),
        zod_1.z.lazy(() => sessionsCreateManyUsersInput_schema_1.sessionsCreateManyUsersInputObjectSchema).array(),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
})
    .strict();
exports.sessionsCreateManyUsersInputEnvelopeObjectSchema = Schema;
