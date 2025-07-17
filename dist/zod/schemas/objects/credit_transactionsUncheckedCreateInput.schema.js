"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.credit_transactionsUncheckedCreateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    credit_account_id: zod_1.z.string(),
    user_id: zod_1.z.string(),
    type: zod_1.z.string(),
    amount: zod_1.z.number(),
    description: zod_1.z.string().optional().nullable(),
    date: zod_1.z.coerce.date().optional(),
    created_at: zod_1.z.coerce.date().optional(),
})
    .strict();
exports.credit_transactionsUncheckedCreateInputObjectSchema = Schema;
