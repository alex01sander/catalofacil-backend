"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersCreateOrConnectWithoutOrder_itemsInputObjectSchema = void 0;
const zod_1 = require("zod");
const ordersWhereUniqueInput_schema_1 = require("./ordersWhereUniqueInput.schema");
const ordersCreateWithoutOrder_itemsInput_schema_1 = require("./ordersCreateWithoutOrder_itemsInput.schema");
const ordersUncheckedCreateWithoutOrder_itemsInput_schema_1 = require("./ordersUncheckedCreateWithoutOrder_itemsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => ordersWhereUniqueInput_schema_1.ordersWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => ordersCreateWithoutOrder_itemsInput_schema_1.ordersCreateWithoutOrder_itemsInputObjectSchema),
        zod_1.z.lazy(() => ordersUncheckedCreateWithoutOrder_itemsInput_schema_1.ordersUncheckedCreateWithoutOrder_itemsInputObjectSchema),
    ]),
})
    .strict();
exports.ordersCreateOrConnectWithoutOrder_itemsInputObjectSchema = Schema;
