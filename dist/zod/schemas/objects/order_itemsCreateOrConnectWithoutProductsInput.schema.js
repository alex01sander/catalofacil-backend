"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.order_itemsCreateOrConnectWithoutProductsInputObjectSchema = void 0;
const zod_1 = require("zod");
const order_itemsWhereUniqueInput_schema_1 = require("./order_itemsWhereUniqueInput.schema");
const order_itemsCreateWithoutProductsInput_schema_1 = require("./order_itemsCreateWithoutProductsInput.schema");
const order_itemsUncheckedCreateWithoutProductsInput_schema_1 = require("./order_itemsUncheckedCreateWithoutProductsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => order_itemsWhereUniqueInput_schema_1.order_itemsWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => order_itemsCreateWithoutProductsInput_schema_1.order_itemsCreateWithoutProductsInputObjectSchema),
        zod_1.z.lazy(() => order_itemsUncheckedCreateWithoutProductsInput_schema_1.order_itemsUncheckedCreateWithoutProductsInputObjectSchema),
    ]),
})
    .strict();
exports.order_itemsCreateOrConnectWithoutProductsInputObjectSchema = Schema;
