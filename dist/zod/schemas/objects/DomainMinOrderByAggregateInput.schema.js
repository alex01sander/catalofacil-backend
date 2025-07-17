"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainMinOrderByAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    slug: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    userId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
})
    .strict();
exports.DomainMinOrderByAggregateInputObjectSchema = Schema;
