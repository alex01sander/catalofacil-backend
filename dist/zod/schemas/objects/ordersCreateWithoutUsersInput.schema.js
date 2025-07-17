"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersCreateWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const order_itemsCreateNestedManyWithoutOrdersInput_schema_1 = require("./order_itemsCreateNestedManyWithoutOrdersInput.schema");
const customersCreateNestedOneWithoutOrdersInput_schema_1 = require("./customersCreateNestedOneWithoutOrdersInput.schema");
const storesCreateNestedOneWithoutOrdersInput_schema_1 = require("./storesCreateNestedOneWithoutOrdersInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    customer_name: zod_1.z.string(),
    customer_email: zod_1.z.string().optional().nullable(),
    customer_phone: zod_1.z.string().optional().nullable(),
    total_amount: zod_1.z.number().optional(),
    status: zod_1.z.string().optional().nullable(),
    created_at: zod_1.z.coerce.date().optional().nullable(),
    updated_at: zod_1.z.coerce.date().optional().nullable(),
    order_items: zod_1.z
        .lazy(() => order_itemsCreateNestedManyWithoutOrdersInput_schema_1.order_itemsCreateNestedManyWithoutOrdersInputObjectSchema)
        .optional(),
    customers: zod_1.z
        .lazy(() => customersCreateNestedOneWithoutOrdersInput_schema_1.customersCreateNestedOneWithoutOrdersInputObjectSchema)
        .optional(),
    stores: zod_1.z
        .lazy(() => storesCreateNestedOneWithoutOrdersInput_schema_1.storesCreateNestedOneWithoutOrdersInputObjectSchema)
        .optional(),
})
    .strict();
exports.ordersCreateWithoutUsersInputObjectSchema = Schema;
