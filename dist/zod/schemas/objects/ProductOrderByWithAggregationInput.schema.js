"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOrderByWithAggregationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const ProductCountOrderByAggregateInput_schema_1 = require("./ProductCountOrderByAggregateInput.schema");
const ProductAvgOrderByAggregateInput_schema_1 = require("./ProductAvgOrderByAggregateInput.schema");
const ProductMaxOrderByAggregateInput_schema_1 = require("./ProductMaxOrderByAggregateInput.schema");
const ProductMinOrderByAggregateInput_schema_1 = require("./ProductMinOrderByAggregateInput.schema");
const ProductSumOrderByAggregateInput_schema_1 = require("./ProductSumOrderByAggregateInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    title: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    description: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    price: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    imageUrl: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    domainId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    _count: zod_1.z
        .lazy(() => ProductCountOrderByAggregateInput_schema_1.ProductCountOrderByAggregateInputObjectSchema)
        .optional(),
    _avg: zod_1.z.lazy(() => ProductAvgOrderByAggregateInput_schema_1.ProductAvgOrderByAggregateInputObjectSchema).optional(),
    _max: zod_1.z.lazy(() => ProductMaxOrderByAggregateInput_schema_1.ProductMaxOrderByAggregateInputObjectSchema).optional(),
    _min: zod_1.z.lazy(() => ProductMinOrderByAggregateInput_schema_1.ProductMinOrderByAggregateInputObjectSchema).optional(),
    _sum: zod_1.z.lazy(() => ProductSumOrderByAggregateInput_schema_1.ProductSumOrderByAggregateInputObjectSchema).optional(),
})
    .strict();
exports.ProductOrderByWithAggregationInputObjectSchema = Schema;
