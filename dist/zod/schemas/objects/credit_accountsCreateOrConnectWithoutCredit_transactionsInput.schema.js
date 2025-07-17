"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.credit_accountsCreateOrConnectWithoutCredit_transactionsInputObjectSchema = void 0;
const zod_1 = require("zod");
const credit_accountsWhereUniqueInput_schema_1 = require("./credit_accountsWhereUniqueInput.schema");
const credit_accountsCreateWithoutCredit_transactionsInput_schema_1 = require("./credit_accountsCreateWithoutCredit_transactionsInput.schema");
const credit_accountsUncheckedCreateWithoutCredit_transactionsInput_schema_1 = require("./credit_accountsUncheckedCreateWithoutCredit_transactionsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => credit_accountsWhereUniqueInput_schema_1.credit_accountsWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => credit_accountsCreateWithoutCredit_transactionsInput_schema_1.credit_accountsCreateWithoutCredit_transactionsInputObjectSchema),
        zod_1.z.lazy(() => credit_accountsUncheckedCreateWithoutCredit_transactionsInput_schema_1.credit_accountsUncheckedCreateWithoutCredit_transactionsInputObjectSchema),
    ]),
})
    .strict();
exports.credit_accountsCreateOrConnectWithoutCredit_transactionsInputObjectSchema = Schema;
