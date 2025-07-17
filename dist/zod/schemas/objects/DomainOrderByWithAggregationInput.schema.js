"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainOrderByWithAggregationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const DomainCountOrderByAggregateInput_schema_1 = require("./DomainCountOrderByAggregateInput.schema");
const DomainMaxOrderByAggregateInput_schema_1 = require("./DomainMaxOrderByAggregateInput.schema");
const DomainMinOrderByAggregateInput_schema_1 = require("./DomainMinOrderByAggregateInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    slug: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    userId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    _count: zod_1.z
        .lazy(() => DomainCountOrderByAggregateInput_schema_1.DomainCountOrderByAggregateInputObjectSchema)
        .optional(),
    _max: zod_1.z.lazy(() => DomainMaxOrderByAggregateInput_schema_1.DomainMaxOrderByAggregateInputObjectSchema).optional(),
    _min: zod_1.z.lazy(() => DomainMinOrderByAggregateInput_schema_1.DomainMinOrderByAggregateInputObjectSchema).optional(),
})
    .strict();
exports.DomainOrderByWithAggregationInputObjectSchema = Schema;
