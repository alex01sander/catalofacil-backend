"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.credit_transactionsUpsertWithWhereUniqueWithoutCredit_accountsInputObjectSchema = void 0;
const zod_1 = require("zod");
const credit_transactionsWhereUniqueInput_schema_1 = require("./credit_transactionsWhereUniqueInput.schema");
const credit_transactionsUpdateWithoutCredit_accountsInput_schema_1 = require("./credit_transactionsUpdateWithoutCredit_accountsInput.schema");
const credit_transactionsUncheckedUpdateWithoutCredit_accountsInput_schema_1 = require("./credit_transactionsUncheckedUpdateWithoutCredit_accountsInput.schema");
const credit_transactionsCreateWithoutCredit_accountsInput_schema_1 = require("./credit_transactionsCreateWithoutCredit_accountsInput.schema");
const credit_transactionsUncheckedCreateWithoutCredit_accountsInput_schema_1 = require("./credit_transactionsUncheckedCreateWithoutCredit_accountsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => credit_transactionsWhereUniqueInput_schema_1.credit_transactionsWhereUniqueInputObjectSchema),
    update: zod_1.z.union([
        zod_1.z.lazy(() => credit_transactionsUpdateWithoutCredit_accountsInput_schema_1.credit_transactionsUpdateWithoutCredit_accountsInputObjectSchema),
        zod_1.z.lazy(() => credit_transactionsUncheckedUpdateWithoutCredit_accountsInput_schema_1.credit_transactionsUncheckedUpdateWithoutCredit_accountsInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => credit_transactionsCreateWithoutCredit_accountsInput_schema_1.credit_transactionsCreateWithoutCredit_accountsInputObjectSchema),
        zod_1.z.lazy(() => credit_transactionsUncheckedCreateWithoutCredit_accountsInput_schema_1.credit_transactionsUncheckedCreateWithoutCredit_accountsInputObjectSchema),
    ]),
})
    .strict();
exports.credit_transactionsUpsertWithWhereUniqueWithoutCredit_accountsInputObjectSchema = Schema;
