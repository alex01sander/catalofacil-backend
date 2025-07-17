"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.credit_transactionsCreateInputObjectSchema = void 0;
const zod_1 = require("zod");
const credit_accountsCreateNestedOneWithoutCredit_transactionsInput_schema_1 = require("./credit_accountsCreateNestedOneWithoutCredit_transactionsInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    user_id: zod_1.z.string(),
    type: zod_1.z.string(),
    amount: zod_1.z.number(),
    description: zod_1.z.string().optional().nullable(),
    date: zod_1.z.coerce.date().optional(),
    created_at: zod_1.z.coerce.date().optional(),
    credit_accounts: zod_1.z.lazy(() => credit_accountsCreateNestedOneWithoutCredit_transactionsInput_schema_1.credit_accountsCreateNestedOneWithoutCredit_transactionsInputObjectSchema),
})
    .strict();
exports.credit_transactionsCreateInputObjectSchema = Schema;
