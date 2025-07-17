"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.salesOrderByWithRelationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const storesOrderByWithRelationInput_schema_1 = require("./storesOrderByWithRelationInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    user_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    product_name: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    quantity: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    unit_price: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    total_price: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    sale_date: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    status: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    created_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    updated_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    store_id: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    stores: zod_1.z.lazy(() => storesOrderByWithRelationInput_schema_1.storesOrderByWithRelationInputObjectSchema).optional(),
})
    .strict();
exports.salesOrderByWithRelationInputObjectSchema = Schema;
