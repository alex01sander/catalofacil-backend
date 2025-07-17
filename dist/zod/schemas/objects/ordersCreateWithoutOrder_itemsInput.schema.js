"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersCreateWithoutOrder_itemsInputObjectSchema = void 0;
const zod_1 = require("zod");
const customersCreateNestedOneWithoutOrdersInput_schema_1 = require("./customersCreateNestedOneWithoutOrdersInput.schema");
const storesCreateNestedOneWithoutOrdersInput_schema_1 = require("./storesCreateNestedOneWithoutOrdersInput.schema");
const usersCreateNestedOneWithoutOrdersInput_schema_1 = require("./usersCreateNestedOneWithoutOrdersInput.schema");
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
    customers: zod_1.z
        .lazy(() => customersCreateNestedOneWithoutOrdersInput_schema_1.customersCreateNestedOneWithoutOrdersInputObjectSchema)
        .optional(),
    stores: zod_1.z
        .lazy(() => storesCreateNestedOneWithoutOrdersInput_schema_1.storesCreateNestedOneWithoutOrdersInputObjectSchema)
        .optional(),
    users: zod_1.z.lazy(() => usersCreateNestedOneWithoutOrdersInput_schema_1.usersCreateNestedOneWithoutOrdersInputObjectSchema),
})
    .strict();
exports.ordersCreateWithoutOrder_itemsInputObjectSchema = Schema;
