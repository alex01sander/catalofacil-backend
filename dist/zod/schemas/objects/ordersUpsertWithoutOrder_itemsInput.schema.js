"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersUpsertWithoutOrder_itemsInputObjectSchema = void 0;
const zod_1 = require("zod");
const ordersUpdateWithoutOrder_itemsInput_schema_1 = require("./ordersUpdateWithoutOrder_itemsInput.schema");
const ordersUncheckedUpdateWithoutOrder_itemsInput_schema_1 = require("./ordersUncheckedUpdateWithoutOrder_itemsInput.schema");
const ordersCreateWithoutOrder_itemsInput_schema_1 = require("./ordersCreateWithoutOrder_itemsInput.schema");
const ordersUncheckedCreateWithoutOrder_itemsInput_schema_1 = require("./ordersUncheckedCreateWithoutOrder_itemsInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => ordersUpdateWithoutOrder_itemsInput_schema_1.ordersUpdateWithoutOrder_itemsInputObjectSchema),
        zod_1.z.lazy(() => ordersUncheckedUpdateWithoutOrder_itemsInput_schema_1.ordersUncheckedUpdateWithoutOrder_itemsInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => ordersCreateWithoutOrder_itemsInput_schema_1.ordersCreateWithoutOrder_itemsInputObjectSchema),
        zod_1.z.lazy(() => ordersUncheckedCreateWithoutOrder_itemsInput_schema_1.ordersUncheckedCreateWithoutOrder_itemsInputObjectSchema),
    ]),
})
    .strict();
exports.ordersUpsertWithoutOrder_itemsInputObjectSchema = Schema;
