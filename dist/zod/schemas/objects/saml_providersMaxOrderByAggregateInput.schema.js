"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saml_providersMaxOrderByAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    sso_provider_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    entity_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    metadata_xml: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    metadata_url: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    created_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    updated_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    name_id_format: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
})
    .strict();
exports.saml_providersMaxOrderByAggregateInputObjectSchema = Schema;
