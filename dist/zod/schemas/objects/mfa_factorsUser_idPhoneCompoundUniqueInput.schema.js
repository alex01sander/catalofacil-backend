"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_factorsUser_idPhoneCompoundUniqueInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    user_id: zod_1.z.string(),
    phone: zod_1.z.string(),
})
    .strict();
exports.mfa_factorsUser_idPhoneCompoundUniqueInputObjectSchema = Schema;
