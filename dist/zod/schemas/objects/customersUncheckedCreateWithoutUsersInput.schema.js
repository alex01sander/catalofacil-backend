"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customersUncheckedCreateWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const ordersUncheckedCreateNestedManyWithoutCustomersInput_schema_1 = require("./ordersUncheckedCreateNestedManyWithoutCustomersInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    name: zod_1.z.string(),
    email: zod_1.z.string().optional().nullable(),
    phone: zod_1.z.string().optional().nullable(),
    address: zod_1.z.string().optional().nullable(),
    created_at: zod_1.z.coerce.date().optional().nullable(),
    store_id: zod_1.z.string().optional().nullable(),
    orders: zod_1.z
        .lazy(() => ordersUncheckedCreateNestedManyWithoutCustomersInput_schema_1.ordersUncheckedCreateNestedManyWithoutCustomersInputObjectSchema)
        .optional(),
})
    .strict();
exports.customersUncheckedCreateWithoutUsersInputObjectSchema = Schema;
