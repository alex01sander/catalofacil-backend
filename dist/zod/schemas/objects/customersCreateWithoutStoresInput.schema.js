"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customersCreateWithoutStoresInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersCreateNestedOneWithoutCustomersInput_schema_1 = require("./usersCreateNestedOneWithoutCustomersInput.schema");
const ordersCreateNestedManyWithoutCustomersInput_schema_1 = require("./ordersCreateNestedManyWithoutCustomersInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    name: zod_1.z.string(),
    email: zod_1.z.string().optional().nullable(),
    phone: zod_1.z.string().optional().nullable(),
    address: zod_1.z.string().optional().nullable(),
    created_at: zod_1.z.coerce.date().optional().nullable(),
    users: zod_1.z.lazy(() => usersCreateNestedOneWithoutCustomersInput_schema_1.usersCreateNestedOneWithoutCustomersInputObjectSchema),
    orders: zod_1.z
        .lazy(() => ordersCreateNestedManyWithoutCustomersInput_schema_1.ordersCreateNestedManyWithoutCustomersInputObjectSchema)
        .optional(),
})
    .strict();
exports.customersCreateWithoutStoresInputObjectSchema = Schema;
