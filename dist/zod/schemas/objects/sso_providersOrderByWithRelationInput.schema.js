"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sso_providersOrderByWithRelationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const saml_providersOrderByRelationAggregateInput_schema_1 = require("./saml_providersOrderByRelationAggregateInput.schema");
const saml_relay_statesOrderByRelationAggregateInput_schema_1 = require("./saml_relay_statesOrderByRelationAggregateInput.schema");
const sso_domainsOrderByRelationAggregateInput_schema_1 = require("./sso_domainsOrderByRelationAggregateInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    resource_id: zod_1.z
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
    saml_providers: zod_1.z
        .lazy(() => saml_providersOrderByRelationAggregateInput_schema_1.saml_providersOrderByRelationAggregateInputObjectSchema)
        .optional(),
    saml_relay_states: zod_1.z
        .lazy(() => saml_relay_statesOrderByRelationAggregateInput_schema_1.saml_relay_statesOrderByRelationAggregateInputObjectSchema)
        .optional(),
    sso_domains: zod_1.z
        .lazy(() => sso_domainsOrderByRelationAggregateInput_schema_1.sso_domainsOrderByRelationAggregateInputObjectSchema)
        .optional(),
})
    .strict();
exports.sso_providersOrderByWithRelationInputObjectSchema = Schema;
