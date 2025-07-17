"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.credit_accountsUpsertWithoutCredit_transactionsInputObjectSchema = void 0;
const zod_1 = require("zod");
const credit_accountsUpdateWithoutCredit_transactionsInput_schema_1 = require("./credit_accountsUpdateWithoutCredit_transactionsInput.schema");
const credit_accountsUncheckedUpdateWithoutCredit_transactionsInput_schema_1 = require("./credit_accountsUncheckedUpdateWithoutCredit_transactionsInput.schema");
const credit_accountsCreateWithoutCredit_transactionsInput_schema_1 = require("./credit_accountsCreateWithoutCredit_transactionsInput.schema");
const credit_accountsUncheckedCreateWithoutCredit_transactionsInput_schema_1 = require("./credit_accountsUncheckedCreateWithoutCredit_transactionsInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => credit_accountsUpdateWithoutCredit_transactionsInput_schema_1.credit_accountsUpdateWithoutCredit_transactionsInputObjectSchema),
        zod_1.z.lazy(() => credit_accountsUncheckedUpdateWithoutCredit_transactionsInput_schema_1.credit_accountsUncheckedUpdateWithoutCredit_transactionsInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => credit_accountsCreateWithoutCredit_transactionsInput_schema_1.credit_accountsCreateWithoutCredit_transactionsInputObjectSchema),
        zod_1.z.lazy(() => credit_accountsUncheckedCreateWithoutCredit_transactionsInput_schema_1.credit_accountsUncheckedCreateWithoutCredit_transactionsInputObjectSchema),
    ]),
})
    .strict();
exports.credit_accountsUpsertWithoutCredit_transactionsInputObjectSchema = Schema;
