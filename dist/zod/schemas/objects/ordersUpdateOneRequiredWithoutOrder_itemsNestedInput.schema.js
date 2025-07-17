"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersUpdateOneRequiredWithoutOrder_itemsNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const ordersCreateWithoutOrder_itemsInput_schema_1 = require("./ordersCreateWithoutOrder_itemsInput.schema");
const ordersUncheckedCreateWithoutOrder_itemsInput_schema_1 = require("./ordersUncheckedCreateWithoutOrder_itemsInput.schema");
const ordersCreateOrConnectWithoutOrder_itemsInput_schema_1 = require("./ordersCreateOrConnectWithoutOrder_itemsInput.schema");
const ordersUpsertWithoutOrder_itemsInput_schema_1 = require("./ordersUpsertWithoutOrder_itemsInput.schema");
const ordersWhereUniqueInput_schema_1 = require("./ordersWhereUniqueInput.schema");
const ordersUpdateWithoutOrder_itemsInput_schema_1 = require("./ordersUpdateWithoutOrder_itemsInput.schema");
const ordersUncheckedUpdateWithoutOrder_itemsInput_schema_1 = require("./ordersUncheckedUpdateWithoutOrder_itemsInput.schema");
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
    upsert: zod_1.z
        .lazy(() => ordersUpsertWithoutOrder_itemsInput_schema_1.ordersUpsertWithoutOrder_itemsInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => ordersWhereUniqueInput_schema_1.ordersWhereUniqueInputObjectSchema).optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => ordersUpdateWithoutOrder_itemsInput_schema_1.ordersUpdateWithoutOrder_itemsInputObjectSchema),
        zod_1.z.lazy(() => ordersUncheckedUpdateWithoutOrder_itemsInput_schema_1.ordersUncheckedUpdateWithoutOrder_itemsInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.ordersUpdateOneRequiredWithoutOrder_itemsNestedInputObjectSchema = Schema;
