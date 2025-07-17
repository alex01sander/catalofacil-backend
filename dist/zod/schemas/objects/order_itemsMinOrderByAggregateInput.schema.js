"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.order_itemsMinOrderByAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    order_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    product_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    quantity: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    unit_price: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    total_price: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    created_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
})
    .strict();
exports.order_itemsMinOrderByAggregateInputObjectSchema = Schema;
