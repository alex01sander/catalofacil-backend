"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller_adminsOrderByWithAggregationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const controller_adminsCountOrderByAggregateInput_schema_1 = require("./controller_adminsCountOrderByAggregateInput.schema");
const controller_adminsMaxOrderByAggregateInput_schema_1 = require("./controller_adminsMaxOrderByAggregateInput.schema");
const controller_adminsMinOrderByAggregateInput_schema_1 = require("./controller_adminsMinOrderByAggregateInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    user_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    email: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    created_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    updated_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    _count: zod_1.z
        .lazy(() => controller_adminsCountOrderByAggregateInput_schema_1.controller_adminsCountOrderByAggregateInputObjectSchema)
        .optional(),
    _max: zod_1.z
        .lazy(() => controller_adminsMaxOrderByAggregateInput_schema_1.controller_adminsMaxOrderByAggregateInputObjectSchema)
        .optional(),
    _min: zod_1.z
        .lazy(() => controller_adminsMinOrderByAggregateInput_schema_1.controller_adminsMinOrderByAggregateInputObjectSchema)
        .optional(),
})
    .strict();
exports.controller_adminsOrderByWithAggregationInputObjectSchema = Schema;
