"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.credit_accountsCustomer_phoneUser_idCompoundUniqueInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    customer_phone: zod_1.z.string(),
    user_id: zod_1.z.string(),
})
    .strict();
exports.credit_accountsCustomer_phoneUser_idCompoundUniqueInputObjectSchema = Schema;
