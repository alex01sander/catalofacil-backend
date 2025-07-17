"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersCountOrderByAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    store_owner_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    customer_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    customer_name: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    customer_email: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    customer_phone: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    total_amount: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    status: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    created_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    updated_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    store_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
})
    .strict();
exports.ordersCountOrderByAggregateInputObjectSchema = Schema;
