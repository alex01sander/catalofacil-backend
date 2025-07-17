"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.one_time_tokensCreateManyUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const one_time_token_type_schema_1 = require("../enums/one_time_token_type.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string(),
    token_type: zod_1.z.lazy(() => one_time_token_type_schema_1.one_time_token_typeSchema),
    token_hash: zod_1.z.string(),
    relates_to: zod_1.z.string(),
    created_at: zod_1.z.coerce.date().optional(),
    updated_at: zod_1.z.coerce.date().optional(),
})
    .strict();
exports.one_time_tokensCreateManyUsersInputObjectSchema = Schema;
