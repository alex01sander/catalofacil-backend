"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.one_time_tokensUser_idToken_typeCompoundUniqueInputObjectSchema = void 0;
const zod_1 = require("zod");
const one_time_token_type_schema_1 = require("../enums/one_time_token_type.schema");
const Schema = zod_1.z
    .object({
    user_id: zod_1.z.string(),
    token_type: zod_1.z.lazy(() => one_time_token_type_schema_1.one_time_token_typeSchema),
})
    .strict();
exports.one_time_tokensUser_idToken_typeCompoundUniqueInputObjectSchema = Schema;
