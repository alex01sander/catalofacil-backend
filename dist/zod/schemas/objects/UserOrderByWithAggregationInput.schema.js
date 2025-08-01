"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrderByWithAggregationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const UserCountOrderByAggregateInput_schema_1 = require("./UserCountOrderByAggregateInput.schema");
const UserMaxOrderByAggregateInput_schema_1 = require("./UserMaxOrderByAggregateInput.schema");
const UserMinOrderByAggregateInput_schema_1 = require("./UserMinOrderByAggregateInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    email: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    password: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    _count: zod_1.z.lazy(() => UserCountOrderByAggregateInput_schema_1.UserCountOrderByAggregateInputObjectSchema).optional(),
    _max: zod_1.z.lazy(() => UserMaxOrderByAggregateInput_schema_1.UserMaxOrderByAggregateInputObjectSchema).optional(),
    _min: zod_1.z.lazy(() => UserMinOrderByAggregateInput_schema_1.UserMinOrderByAggregateInputObjectSchema).optional(),
})
    .strict();
exports.UserOrderByWithAggregationInputObjectSchema = Schema;
