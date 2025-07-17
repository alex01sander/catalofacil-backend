"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.credit_transactionsUpdateManyWithWhereWithoutCredit_accountsInputObjectSchema = void 0;
const zod_1 = require("zod");
const credit_transactionsScalarWhereInput_schema_1 = require("./credit_transactionsScalarWhereInput.schema");
const credit_transactionsUpdateManyMutationInput_schema_1 = require("./credit_transactionsUpdateManyMutationInput.schema");
const credit_transactionsUncheckedUpdateManyWithoutCredit_transactionsInput_schema_1 = require("./credit_transactionsUncheckedUpdateManyWithoutCredit_transactionsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => credit_transactionsScalarWhereInput_schema_1.credit_transactionsScalarWhereInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => credit_transactionsUpdateManyMutationInput_schema_1.credit_transactionsUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => credit_transactionsUncheckedUpdateManyWithoutCredit_transactionsInput_schema_1.credit_transactionsUncheckedUpdateManyWithoutCredit_transactionsInputObjectSchema),
    ]),
})
    .strict();
exports.credit_transactionsUpdateManyWithWhereWithoutCredit_accountsInputObjectSchema = Schema;
