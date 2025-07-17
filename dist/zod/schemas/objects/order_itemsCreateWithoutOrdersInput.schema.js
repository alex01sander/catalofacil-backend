"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.order_itemsCreateWithoutOrdersInputObjectSchema = void 0;
const zod_1 = require("zod");
const productsCreateNestedOneWithoutOrder_itemsInput_schema_1 = require("./productsCreateNestedOneWithoutOrder_itemsInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    quantity: zod_1.z.number().optional(),
    unit_price: zod_1.z.number(),
    total_price: zod_1.z.number(),
    created_at: zod_1.z.coerce.date().optional().nullable(),
    products: zod_1.z.lazy(() => productsCreateNestedOneWithoutOrder_itemsInput_schema_1.productsCreateNestedOneWithoutOrder_itemsInputObjectSchema),
})
    .strict();
exports.order_itemsCreateWithoutOrdersInputObjectSchema = Schema;
