"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.credit_transactionsCreateOrConnectWithoutCredit_accountsInputObjectSchema = void 0;
const zod_1 = require("zod");
const credit_transactionsWhereUniqueInput_schema_1 = require("./credit_transactionsWhereUniqueInput.schema");
const credit_transactionsCreateWithoutCredit_accountsInput_schema_1 = require("./credit_transactionsCreateWithoutCredit_accountsInput.schema");
const credit_transactionsUncheckedCreateWithoutCredit_accountsInput_schema_1 = require("./credit_transactionsUncheckedCreateWithoutCredit_accountsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => credit_transactionsWhereUniqueInput_schema_1.credit_transactionsWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => credit_transactionsCreateWithoutCredit_accountsInput_schema_1.credit_transactionsCreateWithoutCredit_accountsInputObjectSchema),
        zod_1.z.lazy(() => credit_transactionsUncheckedCreateWithoutCredit_accountsInput_schema_1.credit_transactionsUncheckedCreateWithoutCredit_accountsInputObjectSchema),
    ]),
})
    .strict();
exports.credit_transactionsCreateOrConnectWithoutCredit_accountsInputObjectSchema = Schema;
