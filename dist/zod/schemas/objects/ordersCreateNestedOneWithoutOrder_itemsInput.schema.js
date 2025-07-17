"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersCreateNestedOneWithoutOrder_itemsInputObjectSchema = void 0;
const zod_1 = require("zod");
const ordersCreateWithoutOrder_itemsInput_schema_1 = require("./ordersCreateWithoutOrder_itemsInput.schema");
const ordersUncheckedCreateWithoutOrder_itemsInput_schema_1 = require("./ordersUncheckedCreateWithoutOrder_itemsInput.schema");
const ordersCreateOrConnectWithoutOrder_itemsInput_schema_1 = require("./ordersCreateOrConnectWithoutOrder_itemsInput.schema");
const ordersWhereUniqueInput_schema_1 = require("./ordersWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => ordersCreateWithoutOrder_itemsInput_schema_1.ordersCreateWithoutOrder_itemsInputObjectSchema),
        zod_1.z.lazy(() => ordersUncheckedCreateWithoutOrder_itemsInput_schema_1.ordersUncheckedCreateWithoutOrder_itemsInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => ordersCreateOrConnectWithoutOrder_itemsInput_schema_1.ordersCreateOrConnectWithoutOrder_itemsInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => ordersWhereUniqueInput_schema_1.ordersWhereUniqueInputObjectSchema).optional(),
})
    .strict();
exports.ordersCreateNestedOneWithoutOrder_itemsInputObjectSchema = Schema;
