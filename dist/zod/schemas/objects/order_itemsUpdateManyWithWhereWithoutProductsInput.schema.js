"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.order_itemsUpdateManyWithWhereWithoutProductsInputObjectSchema = void 0;
const zod_1 = require("zod");
const order_itemsScalarWhereInput_schema_1 = require("./order_itemsScalarWhereInput.schema");
const order_itemsUpdateManyMutationInput_schema_1 = require("./order_itemsUpdateManyMutationInput.schema");
const order_itemsUncheckedUpdateManyWithoutOrder_itemsInput_schema_1 = require("./order_itemsUncheckedUpdateManyWithoutOrder_itemsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => order_itemsScalarWhereInput_schema_1.order_itemsScalarWhereInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => order_itemsUpdateManyMutationInput_schema_1.order_itemsUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => order_itemsUncheckedUpdateManyWithoutOrder_itemsInput_schema_1.order_itemsUncheckedUpdateManyWithoutOrder_itemsInputObjectSchema),
    ]),
})
    .strict();
exports.order_itemsUpdateManyWithWhereWithoutProductsInputObjectSchema = Schema;
