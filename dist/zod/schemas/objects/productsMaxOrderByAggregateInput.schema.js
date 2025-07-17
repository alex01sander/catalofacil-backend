"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsMaxOrderByAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    user_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    category_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    description: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    price: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    stock: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    is_active: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    image: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    created_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    updated_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    store_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
})
    .strict();
exports.productsMaxOrderByAggregateInputObjectSchema = Schema;
