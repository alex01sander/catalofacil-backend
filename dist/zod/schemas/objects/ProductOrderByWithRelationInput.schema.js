"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOrderByWithRelationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const DomainOrderByWithRelationInput_schema_1 = require("./DomainOrderByWithRelationInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    title: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    description: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    price: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    imageUrl: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    domainId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    domain: zod_1.z.lazy(() => DomainOrderByWithRelationInput_schema_1.DomainOrderByWithRelationInputObjectSchema).optional(),
})
    .strict();
exports.ProductOrderByWithRelationInputObjectSchema = Schema;
