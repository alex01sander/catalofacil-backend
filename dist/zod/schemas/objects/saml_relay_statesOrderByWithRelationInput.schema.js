"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saml_relay_statesOrderByWithRelationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const flow_stateOrderByWithRelationInput_schema_1 = require("./flow_stateOrderByWithRelationInput.schema");
const sso_providersOrderByWithRelationInput_schema_1 = require("./sso_providersOrderByWithRelationInput.schema");
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
    flow_state: zod_1.z
        .lazy(() => flow_stateOrderByWithRelationInput_schema_1.flow_stateOrderByWithRelationInputObjectSchema)
        .optional(),
    sso_providers: zod_1.z
        .lazy(() => sso_providersOrderByWithRelationInput_schema_1.sso_providersOrderByWithRelationInputObjectSchema)
        .optional(),
})
    .strict();
exports.saml_relay_statesOrderByWithRelationInputObjectSchema = Schema;
