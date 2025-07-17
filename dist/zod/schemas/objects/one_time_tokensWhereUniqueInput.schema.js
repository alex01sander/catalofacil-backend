"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.one_time_tokensWhereUniqueInputObjectSchema = void 0;
const zod_1 = require("zod");
const one_time_tokensUser_idToken_typeCompoundUniqueInput_schema_1 = require("./one_time_tokensUser_idToken_typeCompoundUniqueInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    user_id_token_type: zod_1.z
        .lazy(() => one_time_tokensUser_idToken_typeCompoundUniqueInput_schema_1.one_time_tokensUser_idToken_typeCompoundUniqueInputObjectSchema)
        .optional(),
})
    .strict();
exports.one_time_tokensWhereUniqueInputObjectSchema = Schema;
