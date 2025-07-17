"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.order_itemsUpdateManyWithoutProductsNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const order_itemsCreateWithoutProductsInput_schema_1 = require("./order_itemsCreateWithoutProductsInput.schema");
const order_itemsUncheckedCreateWithoutProductsInput_schema_1 = require("./order_itemsUncheckedCreateWithoutProductsInput.schema");
const order_itemsCreateOrConnectWithoutProductsInput_schema_1 = require("./order_itemsCreateOrConnectWithoutProductsInput.schema");
const order_itemsUpsertWithWhereUniqueWithoutProductsInput_schema_1 = require("./order_itemsUpsertWithWhereUniqueWithoutProductsInput.schema");
const order_itemsCreateManyProductsInputEnvelope_schema_1 = require("./order_itemsCreateManyProductsInputEnvelope.schema");
const order_itemsWhereUniqueInput_schema_1 = require("./order_itemsWhereUniqueInput.schema");
const order_itemsUpdateWithWhereUniqueWithoutProductsInput_schema_1 = require("./order_itemsUpdateWithWhereUniqueWithoutProductsInput.schema");
const order_itemsUpdateManyWithWhereWithoutProductsInput_schema_1 = require("./order_itemsUpdateManyWithWhereWithoutProductsInput.schema");
const order_itemsScalarWhereInput_schema_1 = require("./order_itemsScalarWhereInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => order_itemsCreateWithoutProductsInput_schema_1.order_itemsCreateWithoutProductsInputObjectSchema),
        zod_1.z
            .lazy(() => order_itemsCreateWithoutProductsInput_schema_1.order_itemsCreateWithoutProductsInputObjectSchema)
            .array(),
        zod_1.z.lazy(() => order_itemsUncheckedCreateWithoutProductsInput_schema_1.order_itemsUncheckedCreateWithoutProductsInputObjectSchema),
        zod_1.z
            .lazy(() => order_itemsUncheckedCreateWithoutProductsInput_schema_1.order_itemsUncheckedCreateWithoutProductsInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => order_itemsCreateOrConnectWithoutProductsInput_schema_1.order_itemsCreateOrConnectWithoutProductsInputObjectSchema),
        zod_1.z
            .lazy(() => order_itemsCreateOrConnectWithoutProductsInput_schema_1.order_itemsCreateOrConnectWithoutProductsInputObjectSchema)
            .array(),
    ])
        .optional(),
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(() => order_itemsUpsertWithWhereUniqueWithoutProductsInput_schema_1.order_itemsUpsertWithWhereUniqueWithoutProductsInputObjectSchema),
        zod_1.z
            .lazy(() => order_itemsUpsertWithWhereUniqueWithoutProductsInput_schema_1.order_itemsUpsertWithWhereUniqueWithoutProductsInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => order_itemsCreateManyProductsInputEnvelope_schema_1.order_itemsCreateManyProductsInputEnvelopeObjectSchema)
        .optional(),
    set: zod_1.z
        .union([
        zod_1.z.lazy(() => order_itemsWhereUniqueInput_schema_1.order_itemsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => order_itemsWhereUniqueInput_schema_1.order_itemsWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    disconnect: zod_1.z
        .union([
        zod_1.z.lazy(() => order_itemsWhereUniqueInput_schema_1.order_itemsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => order_itemsWhereUniqueInput_schema_1.order_itemsWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    delete: zod_1.z
        .union([
        zod_1.z.lazy(() => order_itemsWhereUniqueInput_schema_1.order_itemsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => order_itemsWhereUniqueInput_schema_1.order_itemsWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => order_itemsWhereUniqueInput_schema_1.order_itemsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => order_itemsWhereUniqueInput_schema_1.order_itemsWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => order_itemsUpdateWithWhereUniqueWithoutProductsInput_schema_1.order_itemsUpdateWithWhereUniqueWithoutProductsInputObjectSchema),
        zod_1.z
            .lazy(() => order_itemsUpdateWithWhereUniqueWithoutProductsInput_schema_1.order_itemsUpdateWithWhereUniqueWithoutProductsInputObjectSchema)
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(() => order_itemsUpdateManyWithWhereWithoutProductsInput_schema_1.order_itemsUpdateManyWithWhereWithoutProductsInputObjectSchema),
        zod_1.z
            .lazy(() => order_itemsUpdateManyWithWhereWithoutProductsInput_schema_1.order_itemsUpdateManyWithWhereWithoutProductsInputObjectSchema)
            .array(),
    ])
        .optional(),
    deleteMany: zod_1.z
        .union([
        zod_1.z.lazy(() => order_itemsScalarWhereInput_schema_1.order_itemsScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => order_itemsScalarWhereInput_schema_1.order_itemsScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.order_itemsUpdateManyWithoutProductsNestedInputObjectSchema = Schema;
