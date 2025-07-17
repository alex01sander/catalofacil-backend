"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.one_time_tokensCreateManyUsersInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const one_time_tokensCreateManyUsersInput_schema_1 = require("./one_time_tokensCreateManyUsersInput.schema");
const Schema = zod_1.z
    .object({
    data: zod_1.z.union([
        zod_1.z.lazy(() => one_time_tokensCreateManyUsersInput_schema_1.one_time_tokensCreateManyUsersInputObjectSchema),
        zod_1.z.lazy(() => one_time_tokensCreateManyUsersInput_schema_1.one_time_tokensCreateManyUsersInputObjectSchema).array(),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
})
    .strict();
exports.one_time_tokensCreateManyUsersInputEnvelopeObjectSchema = Schema;
