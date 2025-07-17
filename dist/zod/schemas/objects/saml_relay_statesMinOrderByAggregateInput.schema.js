"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saml_relay_statesMinOrderByAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    sso_provider_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    request_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    for_email: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    redirect_to: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    created_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    updated_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    flow_state_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
})
    .strict();
exports.saml_relay_statesMinOrderByAggregateInputObjectSchema = Schema;
