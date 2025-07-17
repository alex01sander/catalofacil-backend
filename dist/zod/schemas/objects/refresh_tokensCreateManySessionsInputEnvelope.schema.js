"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refresh_tokensCreateManySessionsInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const refresh_tokensCreateManySessionsInput_schema_1 = require("./refresh_tokensCreateManySessionsInput.schema");
const Schema = zod_1.z
    .object({
    data: zod_1.z.union([
        zod_1.z.lazy(() => refresh_tokensCreateManySessionsInput_schema_1.refresh_tokensCreateManySessionsInputObjectSchema),
        zod_1.z.lazy(() => refresh_tokensCreateManySessionsInput_schema_1.refresh_tokensCreateManySessionsInputObjectSchema).array(),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
})
    .strict();
exports.refresh_tokensCreateManySessionsInputEnvelopeObjectSchema = Schema;
