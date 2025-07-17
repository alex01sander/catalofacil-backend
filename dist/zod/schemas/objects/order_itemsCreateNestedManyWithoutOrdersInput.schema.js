"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.order_itemsCreateNestedManyWithoutOrdersInputObjectSchema = void 0;
const zod_1 = require("zod");
const order_itemsCreateWithoutOrdersInput_schema_1 = require("./order_itemsCreateWithoutOrdersInput.schema");
const order_itemsUncheckedCreateWithoutOrdersInput_schema_1 = require("./order_itemsUncheckedCreateWithoutOrdersInput.schema");
const order_itemsCreateOrConnectWithoutOrdersInput_schema_1 = require("./order_itemsCreateOrConnectWithoutOrdersInput.schema");
const order_itemsCreateManyOrdersInputEnvelope_schema_1 = require("./order_itemsCreateManyOrdersInputEnvelope.schema");
const order_itemsWhereUniqueInput_schema_1 = require("./order_itemsWhereUniqueInput.schema");
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
    createMany: zod_1.z
        .lazy(() => order_itemsCreateManyOrdersInputEnvelope_schema_1.order_itemsCreateManyOrdersInputEnvelopeObjectSchema)
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => order_itemsWhereUniqueInput_schema_1.order_itemsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => order_itemsWhereUniqueInput_schema_1.order_itemsWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.order_itemsCreateNestedManyWithoutOrdersInputObjectSchema = Schema;
