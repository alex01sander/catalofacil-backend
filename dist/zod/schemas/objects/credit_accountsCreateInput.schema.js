"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.credit_accountsCreateInputObjectSchema = void 0;
const zod_1 = require("zod");
const credit_transactionsCreateNestedManyWithoutCredit_accountsInput_schema_1 = require("./credit_transactionsCreateNestedManyWithoutCredit_accountsInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    user_id: zod_1.z.string(),
    store_id: zod_1.z.string().optional().nullable(),
    customer_name: zod_1.z.string(),
    customer_phone: zod_1.z.string().optional().nullable(),
    total_debt: zod_1.z.number().optional(),
    created_at: zod_1.z.coerce.date().optional(),
    updated_at: zod_1.z.coerce.date().optional(),
    status: zod_1.z.string().optional(),
    credit_transactions: zod_1.z
        .lazy(() => credit_transactionsCreateNestedManyWithoutCredit_accountsInput_schema_1.credit_transactionsCreateNestedManyWithoutCredit_accountsInputObjectSchema)
        .optional(),
})
    .strict();
exports.credit_accountsCreateInputObjectSchema = Schema;
