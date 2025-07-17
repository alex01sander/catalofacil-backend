"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_factorsWhereUniqueInputObjectSchema = void 0;
const zod_1 = require("zod");
const mfa_factorsUser_idPhoneCompoundUniqueInput_schema_1 = require("./mfa_factorsUser_idPhoneCompoundUniqueInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    last_challenged_at: zod_1.z.coerce.date().optional(),
    user_id_phone: zod_1.z
        .lazy(() => mfa_factorsUser_idPhoneCompoundUniqueInput_schema_1.mfa_factorsUser_idPhoneCompoundUniqueInputObjectSchema)
        .optional(),
})
    .strict();
exports.mfa_factorsWhereUniqueInputObjectSchema = Schema;
