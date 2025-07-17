"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.credit_accountsWhereUniqueInputObjectSchema = void 0;
const zod_1 = require("zod");
const credit_accountsCustomer_phoneUser_idCompoundUniqueInput_schema_1 = require("./credit_accountsCustomer_phoneUser_idCompoundUniqueInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    customer_phone_user_id: zod_1.z
        .lazy(() => credit_accountsCustomer_phoneUser_idCompoundUniqueInput_schema_1.credit_accountsCustomer_phoneUser_idCompoundUniqueInputObjectSchema)
        .optional(),
})
    .strict();
exports.credit_accountsWhereUniqueInputObjectSchema = Schema;
