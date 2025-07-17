"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.order_itemsOrderByRelationAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const Schema = zod_1.z
    .object({
    _count: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
})
    .strict();
exports.order_itemsOrderByRelationAggregateInputObjectSchema = Schema;
