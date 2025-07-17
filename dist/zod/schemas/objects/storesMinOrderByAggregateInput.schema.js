"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storesMinOrderByAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    slug: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    domain: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    user_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    description: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    logo_url: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    banner_url: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    whatsapp_number: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    instagram_url: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    theme_color: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    created_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    updated_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
})
    .strict();
exports.storesMinOrderByAggregateInputObjectSchema = Schema;
