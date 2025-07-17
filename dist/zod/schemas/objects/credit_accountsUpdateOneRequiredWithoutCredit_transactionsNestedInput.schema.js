"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.credit_accountsUpdateOneRequiredWithoutCredit_transactionsNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const credit_accountsCreateWithoutCredit_transactionsInput_schema_1 = require("./credit_accountsCreateWithoutCredit_transactionsInput.schema");
const credit_accountsUncheckedCreateWithoutCredit_transactionsInput_schema_1 = require("./credit_accountsUncheckedCreateWithoutCredit_transactionsInput.schema");
const credit_accountsCreateOrConnectWithoutCredit_transactionsInput_schema_1 = require("./credit_accountsCreateOrConnectWithoutCredit_transactionsInput.schema");
const credit_accountsUpsertWithoutCredit_transactionsInput_schema_1 = require("./credit_accountsUpsertWithoutCredit_transactionsInput.schema");
const credit_accountsWhereUniqueInput_schema_1 = require("./credit_accountsWhereUniqueInput.schema");
const credit_accountsUpdateWithoutCredit_transactionsInput_schema_1 = require("./credit_accountsUpdateWithoutCredit_transactionsInput.schema");
const credit_accountsUncheckedUpdateWithoutCredit_transactionsInput_schema_1 = require("./credit_accountsUncheckedUpdateWithoutCredit_transactionsInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => credit_accountsCreateWithoutCredit_transactionsInput_schema_1.credit_accountsCreateWithoutCredit_transactionsInputObjectSchema),
        zod_1.z.lazy(() => credit_accountsUncheckedCreateWithoutCredit_transactionsInput_schema_1.credit_accountsUncheckedCreateWithoutCredit_transactionsInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => credit_accountsCreateOrConnectWithoutCredit_transactionsInput_schema_1.credit_accountsCreateOrConnectWithoutCredit_transactionsInputObjectSchema)
        .optional(),
    upsert: zod_1.z
        .lazy(() => credit_accountsUpsertWithoutCredit_transactionsInput_schema_1.credit_accountsUpsertWithoutCredit_transactionsInputObjectSchema)
        .optional(),
    connect: zod_1.z
        .lazy(() => credit_accountsWhereUniqueInput_schema_1.credit_accountsWhereUniqueInputObjectSchema)
        .optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => credit_accountsUpdateWithoutCredit_transactionsInput_schema_1.credit_accountsUpdateWithoutCredit_transactionsInputObjectSchema),
        zod_1.z.lazy(() => credit_accountsUncheckedUpdateWithoutCredit_transactionsInput_schema_1.credit_accountsUncheckedUpdateWithoutCredit_transactionsInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.credit_accountsUpdateOneRequiredWithoutCredit_transactionsNestedInputObjectSchema = Schema;
