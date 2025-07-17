"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store_settingsMinOrderByAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    user_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    store_name: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    store_description: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    mobile_logo: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    desktop_banner: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    mobile_banner_color: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    mobile_banner_image: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    created_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    updated_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    store_subtitle: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    instagram_url: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    whatsapp_number: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
})
    .strict();
exports.store_settingsMinOrderByAggregateInputObjectSchema = Schema;
