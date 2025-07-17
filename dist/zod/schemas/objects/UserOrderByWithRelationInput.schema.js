"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrderByWithRelationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const DomainOrderByRelationAggregateInput_schema_1 = require("./DomainOrderByRelationAggregateInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    email: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    password: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    domains: zod_1.z
        .lazy(() => DomainOrderByRelationAggregateInput_schema_1.DomainOrderByRelationAggregateInputObjectSchema)
        .optional(),
})
    .strict();
exports.UserOrderByWithRelationInputObjectSchema = Schema;
