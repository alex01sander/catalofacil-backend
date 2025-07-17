"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.credit_transactionsUncheckedUpdateManyWithoutCredit_accountsNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const credit_transactionsCreateWithoutCredit_accountsInput_schema_1 = require("./credit_transactionsCreateWithoutCredit_accountsInput.schema");
const credit_transactionsUncheckedCreateWithoutCredit_accountsInput_schema_1 = require("./credit_transactionsUncheckedCreateWithoutCredit_accountsInput.schema");
const credit_transactionsCreateOrConnectWithoutCredit_accountsInput_schema_1 = require("./credit_transactionsCreateOrConnectWithoutCredit_accountsInput.schema");
const credit_transactionsUpsertWithWhereUniqueWithoutCredit_accountsInput_schema_1 = require("./credit_transactionsUpsertWithWhereUniqueWithoutCredit_accountsInput.schema");
const credit_transactionsCreateManyCredit_accountsInputEnvelope_schema_1 = require("./credit_transactionsCreateManyCredit_accountsInputEnvelope.schema");
const credit_transactionsWhereUniqueInput_schema_1 = require("./credit_transactionsWhereUniqueInput.schema");
const credit_transactionsUpdateWithWhereUniqueWithoutCredit_accountsInput_schema_1 = require("./credit_transactionsUpdateWithWhereUniqueWithoutCredit_accountsInput.schema");
const credit_transactionsUpdateManyWithWhereWithoutCredit_accountsInput_schema_1 = require("./credit_transactionsUpdateManyWithWhereWithoutCredit_accountsInput.schema");
const credit_transactionsScalarWhereInput_schema_1 = require("./credit_transactionsScalarWhereInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => credit_transactionsCreateWithoutCredit_accountsInput_schema_1.credit_transactionsCreateWithoutCredit_accountsInputObjectSchema),
        zod_1.z
            .lazy(() => credit_transactionsCreateWithoutCredit_accountsInput_schema_1.credit_transactionsCreateWithoutCredit_accountsInputObjectSchema)
            .array(),
        zod_1.z.lazy(() => credit_transactionsUncheckedCreateWithoutCredit_accountsInput_schema_1.credit_transactionsUncheckedCreateWithoutCredit_accountsInputObjectSchema),
        zod_1.z
            .lazy(() => credit_transactionsUncheckedCreateWithoutCredit_accountsInput_schema_1.credit_transactionsUncheckedCreateWithoutCredit_accountsInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => credit_transactionsCreateOrConnectWithoutCredit_accountsInput_schema_1.credit_transactionsCreateOrConnectWithoutCredit_accountsInputObjectSchema),
        zod_1.z
            .lazy(() => credit_transactionsCreateOrConnectWithoutCredit_accountsInput_schema_1.credit_transactionsCreateOrConnectWithoutCredit_accountsInputObjectSchema)
            .array(),
    ])
        .optional(),
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(() => credit_transactionsUpsertWithWhereUniqueWithoutCredit_accountsInput_schema_1.credit_transactionsUpsertWithWhereUniqueWithoutCredit_accountsInputObjectSchema),
        zod_1.z
            .lazy(() => credit_transactionsUpsertWithWhereUniqueWithoutCredit_accountsInput_schema_1.credit_transactionsUpsertWithWhereUniqueWithoutCredit_accountsInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => credit_transactionsCreateManyCredit_accountsInputEnvelope_schema_1.credit_transactionsCreateManyCredit_accountsInputEnvelopeObjectSchema)
        .optional(),
    set: zod_1.z
        .union([
        zod_1.z.lazy(() => credit_transactionsWhereUniqueInput_schema_1.credit_transactionsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => credit_transactionsWhereUniqueInput_schema_1.credit_transactionsWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    disconnect: zod_1.z
        .union([
        zod_1.z.lazy(() => credit_transactionsWhereUniqueInput_schema_1.credit_transactionsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => credit_transactionsWhereUniqueInput_schema_1.credit_transactionsWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    delete: zod_1.z
        .union([
        zod_1.z.lazy(() => credit_transactionsWhereUniqueInput_schema_1.credit_transactionsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => credit_transactionsWhereUniqueInput_schema_1.credit_transactionsWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => credit_transactionsWhereUniqueInput_schema_1.credit_transactionsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => credit_transactionsWhereUniqueInput_schema_1.credit_transactionsWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => credit_transactionsUpdateWithWhereUniqueWithoutCredit_accountsInput_schema_1.credit_transactionsUpdateWithWhereUniqueWithoutCredit_accountsInputObjectSchema),
        zod_1.z
            .lazy(() => credit_transactionsUpdateWithWhereUniqueWithoutCredit_accountsInput_schema_1.credit_transactionsUpdateWithWhereUniqueWithoutCredit_accountsInputObjectSchema)
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(() => credit_transactionsUpdateManyWithWhereWithoutCredit_accountsInput_schema_1.credit_transactionsUpdateManyWithWhereWithoutCredit_accountsInputObjectSchema),
        zod_1.z
            .lazy(() => credit_transactionsUpdateManyWithWhereWithoutCredit_accountsInput_schema_1.credit_transactionsUpdateManyWithWhereWithoutCredit_accountsInputObjectSchema)
            .array(),
    ])
        .optional(),
    deleteMany: zod_1.z
        .union([
        zod_1.z.lazy(() => credit_transactionsScalarWhereInput_schema_1.credit_transactionsScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => credit_transactionsScalarWhereInput_schema_1.credit_transactionsScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.credit_transactionsUncheckedUpdateManyWithoutCredit_accountsNestedInputObjectSchema = Schema;
