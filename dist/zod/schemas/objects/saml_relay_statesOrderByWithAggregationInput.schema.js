"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saml_relay_statesOrderByWithAggregationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const saml_relay_statesCountOrderByAggregateInput_schema_1 = require("./saml_relay_statesCountOrderByAggregateInput.schema");
const saml_relay_statesMaxOrderByAggregateInput_schema_1 = require("./saml_relay_statesMaxOrderByAggregateInput.schema");
const saml_relay_statesMinOrderByAggregateInput_schema_1 = require("./saml_relay_statesMinOrderByAggregateInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    sso_provider_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    request_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    for_email: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    redirect_to: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    created_at: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    updated_at: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    flow_state_id: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    _count: zod_1.z
        .lazy(() => saml_relay_statesCountOrderByAggregateInput_schema_1.saml_relay_statesCountOrderByAggregateInputObjectSchema)
        .optional(),
    _max: zod_1.z
        .lazy(() => saml_relay_statesMaxOrderByAggregateInput_schema_1.saml_relay_statesMaxOrderByAggregateInputObjectSchema)
        .optional(),
    _min: zod_1.z
        .lazy(() => saml_relay_statesMinOrderByAggregateInput_schema_1.saml_relay_statesMinOrderByAggregateInputObjectSchema)
        .optional(),
})
    .strict();
exports.saml_relay_statesOrderByWithAggregationInputObjectSchema = Schema;
