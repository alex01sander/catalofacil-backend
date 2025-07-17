"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersUncheckedCreateWithoutStoresInputObjectSchema = void 0;
const zod_1 = require("zod");
const order_itemsUncheckedCreateNestedManyWithoutOrdersInput_schema_1 = require("./order_itemsUncheckedCreateNestedManyWithoutOrdersInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    store_owner_id: zod_1.z.string(),
    customer_id: zod_1.z.string().optional().nullable(),
    customer_name: zod_1.z.string(),
    customer_email: zod_1.z.string().optional().nullable(),
    customer_phone: zod_1.z.string().optional().nullable(),
    total_amount: zod_1.z.number().optional(),
    status: zod_1.z.string().optional().nullable(),
    created_at: zod_1.z.coerce.date().optional().nullable(),
    updated_at: zod_1.z.coerce.date().optional().nullable(),
    order_items: zod_1.z
        .lazy(() => order_itemsUncheckedCreateNestedManyWithoutOrdersInput_schema_1.order_itemsUncheckedCreateNestedManyWithoutOrdersInputObjectSchema)
        .optional(),
})
    .strict();
exports.ordersUncheckedCreateWithoutStoresInputObjectSchema = Schema;
