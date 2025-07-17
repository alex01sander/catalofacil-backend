"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsOrderByWithAggregationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const productsCountOrderByAggregateInput_schema_1 = require("./productsCountOrderByAggregateInput.schema");
const productsAvgOrderByAggregateInput_schema_1 = require("./productsAvgOrderByAggregateInput.schema");
const productsMaxOrderByAggregateInput_schema_1 = require("./productsMaxOrderByAggregateInput.schema");
const productsMinOrderByAggregateInput_schema_1 = require("./productsMinOrderByAggregateInput.schema");
const productsSumOrderByAggregateInput_schema_1 = require("./productsSumOrderByAggregateInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    user_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    category_id: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    name: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    description: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    price: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    stock: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    is_active: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    image: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    images: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    created_at: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    updated_at: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    store_id: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    _count: zod_1.z
        .lazy(() => productsCountOrderByAggregateInput_schema_1.productsCountOrderByAggregateInputObjectSchema)
        .optional(),
    _avg: zod_1.z.lazy(() => productsAvgOrderByAggregateInput_schema_1.productsAvgOrderByAggregateInputObjectSchema).optional(),
    _max: zod_1.z.lazy(() => productsMaxOrderByAggregateInput_schema_1.productsMaxOrderByAggregateInputObjectSchema).optional(),
    _min: zod_1.z.lazy(() => productsMinOrderByAggregateInput_schema_1.productsMinOrderByAggregateInputObjectSchema).optional(),
    _sum: zod_1.z.lazy(() => productsSumOrderByAggregateInput_schema_1.productsSumOrderByAggregateInputObjectSchema).optional(),
})
    .strict();
exports.productsOrderByWithAggregationInputObjectSchema = Schema;
