"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.order_itemsUpdateWithWhereUniqueWithoutProductsInputObjectSchema = void 0;
const zod_1 = require("zod");
const order_itemsWhereUniqueInput_schema_1 = require("./order_itemsWhereUniqueInput.schema");
const order_itemsUpdateWithoutProductsInput_schema_1 = require("./order_itemsUpdateWithoutProductsInput.schema");
const order_itemsUncheckedUpdateWithoutProductsInput_schema_1 = require("./order_itemsUncheckedUpdateWithoutProductsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => order_itemsWhereUniqueInput_schema_1.order_itemsWhereUniqueInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => order_itemsUpdateWithoutProductsInput_schema_1.order_itemsUpdateWithoutProductsInputObjectSchema),
        zod_1.z.lazy(() => order_itemsUncheckedUpdateWithoutProductsInput_schema_1.order_itemsUncheckedUpdateWithoutProductsInputObjectSchema),
    ]),
})
    .strict();
exports.order_itemsUpdateWithWhereUniqueWithoutProductsInputObjectSchema = Schema;
