"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.order_itemsUncheckedCreateNestedManyWithoutProductsInputObjectSchema = void 0;
const zod_1 = require("zod");
const order_itemsCreateWithoutProductsInput_schema_1 = require("./order_itemsCreateWithoutProductsInput.schema");
const order_itemsUncheckedCreateWithoutProductsInput_schema_1 = require("./order_itemsUncheckedCreateWithoutProductsInput.schema");
const order_itemsCreateOrConnectWithoutProductsInput_schema_1 = require("./order_itemsCreateOrConnectWithoutProductsInput.schema");
const order_itemsCreateManyProductsInputEnvelope_schema_1 = require("./order_itemsCreateManyProductsInputEnvelope.schema");
const order_itemsWhereUniqueInput_schema_1 = require("./order_itemsWhereUniqueInput.schema");
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
    createMany: zod_1.z
        .lazy(() => order_itemsCreateManyProductsInputEnvelope_schema_1.order_itemsCreateManyProductsInputEnvelopeObjectSchema)
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => order_itemsWhereUniqueInput_schema_1.order_itemsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => order_itemsWhereUniqueInput_schema_1.order_itemsWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.order_itemsUncheckedCreateNestedManyWithoutProductsInputObjectSchema = Schema;
