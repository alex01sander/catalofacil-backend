"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flow_stateOrderByWithRelationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const saml_relay_statesOrderByRelationAggregateInput_schema_1 = require("./saml_relay_statesOrderByRelationAggregateInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    user_id: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    auth_code: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    code_challenge_method: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    code_challenge: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    provider_type: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    provider_access_token: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    provider_refresh_token: zod_1.z
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
    authentication_method: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    auth_code_issued_at: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    saml_relay_states: zod_1.z
        .lazy(() => saml_relay_statesOrderByRelationAggregateInput_schema_1.saml_relay_statesOrderByRelationAggregateInputObjectSchema)
        .optional(),
})
    .strict();
exports.flow_stateOrderByWithRelationInputObjectSchema = Schema;
