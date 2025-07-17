"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.product_costsSumOrderByAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const Schema = zod_1.z
    .object({
    cost_price: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    desired_margin: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    suggested_price: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
})
    .strict();
exports.product_costsSumOrderByAggregateInputObjectSchema = Schema;
