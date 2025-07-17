"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.credit_transactionsCreateManyCredit_accountsInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const credit_transactionsCreateManyCredit_accountsInput_schema_1 = require("./credit_transactionsCreateManyCredit_accountsInput.schema");
const Schema = zod_1.z
    .object({
    data: zod_1.z.union([
        zod_1.z.lazy(() => credit_transactionsCreateManyCredit_accountsInput_schema_1.credit_transactionsCreateManyCredit_accountsInputObjectSchema),
        zod_1.z
            .lazy(() => credit_transactionsCreateManyCredit_accountsInput_schema_1.credit_transactionsCreateManyCredit_accountsInputObjectSchema)
            .array(),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
})
    .strict();
exports.credit_transactionsCreateManyCredit_accountsInputEnvelopeObjectSchema = Schema;
