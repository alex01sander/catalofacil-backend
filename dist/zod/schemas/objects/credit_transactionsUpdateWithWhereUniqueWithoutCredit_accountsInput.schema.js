"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.credit_transactionsUpdateWithWhereUniqueWithoutCredit_accountsInputObjectSchema = void 0;
const zod_1 = require("zod");
const credit_transactionsWhereUniqueInput_schema_1 = require("./credit_transactionsWhereUniqueInput.schema");
const credit_transactionsUpdateWithoutCredit_accountsInput_schema_1 = require("./credit_transactionsUpdateWithoutCredit_accountsInput.schema");
const credit_transactionsUncheckedUpdateWithoutCredit_accountsInput_schema_1 = require("./credit_transactionsUncheckedUpdateWithoutCredit_accountsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => credit_transactionsWhereUniqueInput_schema_1.credit_transactionsWhereUniqueInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => credit_transactionsUpdateWithoutCredit_accountsInput_schema_1.credit_transactionsUpdateWithoutCredit_accountsInputObjectSchema),
        zod_1.z.lazy(() => credit_transactionsUncheckedUpdateWithoutCredit_accountsInput_schema_1.credit_transactionsUncheckedUpdateWithoutCredit_accountsInputObjectSchema),
    ]),
})
    .strict();
exports.credit_transactionsUpdateWithWhereUniqueWithoutCredit_accountsInputObjectSchema = Schema;
