"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.order_itemsUpdateManyWithoutOrdersNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const order_itemsCreateWithoutOrdersInput_schema_1 = require("./order_itemsCreateWithoutOrdersInput.schema");
const order_itemsUncheckedCreateWithoutOrdersInput_schema_1 = require("./order_itemsUncheckedCreateWithoutOrdersInput.schema");
const order_itemsCreateOrConnectWithoutOrdersInput_schema_1 = require("./order_itemsCreateOrConnectWithoutOrdersInput.schema");
const order_itemsUpsertWithWhereUniqueWithoutOrdersInput_schema_1 = require("./order_itemsUpsertWithWhereUniqueWithoutOrdersInput.schema");
const order_itemsCreateManyOrdersInputEnvelope_schema_1 = require("./order_itemsCreateManyOrdersInputEnvelope.schema");
const order_itemsWhereUniqueInput_schema_1 = require("./order_itemsWhereUniqueInput.schema");
const order_itemsUpdateWithWhereUniqueWithoutOrdersInput_schema_1 = require("./order_itemsUpdateWithWhereUniqueWithoutOrdersInput.schema");
const order_itemsUpdateManyWithWhereWithoutOrdersInput_schema_1 = require("./order_itemsUpdateManyWithWhereWithoutOrdersInput.schema");
const order_itemsScalarWhereInput_schema_1 = require("./order_itemsScalarWhereInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => order_itemsCreateWithoutOrdersInput_schema_1.order_itemsCreateWithoutOrdersInputObjectSchema),
        zod_1.z.lazy(() => order_itemsCreateWithoutOrdersInput_schema_1.order_itemsCreateWithoutOrdersInputObjectSchema).array(),
        zod_1.z.lazy(() => order_itemsUncheckedCreateWithoutOrdersInput_schema_1.order_itemsUncheckedCreateWithoutOrdersInputObjectSchema),
        zod_1.z
            .lazy(() => order_itemsUncheckedCreateWithoutOrdersInput_schema_1.order_itemsUncheckedCreateWithoutOrdersInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => order_itemsCreateOrConnectWithoutOrdersInput_schema_1.order_itemsCreateOrConnectWithoutOrdersInputObjectSchema),
        zod_1.z
            .lazy(() => order_itemsCreateOrConnectWithoutOrdersInput_schema_1.order_itemsCreateOrConnectWithoutOrdersInputObjectSchema)
            .array(),
    ])
        .optional(),
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(() => order_itemsUpsertWithWhereUniqueWithoutOrdersInput_schema_1.order_itemsUpsertWithWhereUniqueWithoutOrdersInputObjectSchema),
        zod_1.z
            .lazy(() => order_itemsUpsertWithWhereUniqueWithoutOrdersInput_schema_1.order_itemsUpsertWithWhereUniqueWithoutOrdersInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => order_itemsCreateManyOrdersInputEnvelope_schema_1.order_itemsCreateManyOrdersInputEnvelopeObjectSchema)
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
        zod_1.z.lazy(() => order_itemsUpdateWithWhereUniqueWithoutOrdersInput_schema_1.order_itemsUpdateWithWhereUniqueWithoutOrdersInputObjectSchema),
        zod_1.z
            .lazy(() => order_itemsUpdateWithWhereUniqueWithoutOrdersInput_schema_1.order_itemsUpdateWithWhereUniqueWithoutOrdersInputObjectSchema)
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(() => order_itemsUpdateManyWithWhereWithoutOrdersInput_schema_1.order_itemsUpdateManyWithWhereWithoutOrdersInputObjectSchema),
        zod_1.z
            .lazy(() => order_itemsUpdateManyWithWhereWithoutOrdersInput_schema_1.order_itemsUpdateManyWithWhereWithoutOrdersInputObjectSchema)
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
exports.order_itemsUpdateManyWithoutOrdersNestedInputObjectSchema = Schema;
