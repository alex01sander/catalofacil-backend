"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainOrderByWithRelationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const UserOrderByWithRelationInput_schema_1 = require("./UserOrderByWithRelationInput.schema");
const ProductOrderByRelationAggregateInput_schema_1 = require("./ProductOrderByRelationAggregateInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    slug: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    userId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    user: zod_1.z.lazy(() => UserOrderByWithRelationInput_schema_1.UserOrderByWithRelationInputObjectSchema).optional(),
    products: zod_1.z
        .lazy(() => ProductOrderByRelationAggregateInput_schema_1.ProductOrderByRelationAggregateInputObjectSchema)
        .optional(),
})
    .strict();
exports.DomainOrderByWithRelationInputObjectSchema = Schema;
