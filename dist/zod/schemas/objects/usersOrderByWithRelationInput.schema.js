"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersOrderByWithRelationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const identitiesOrderByRelationAggregateInput_schema_1 = require("./identitiesOrderByRelationAggregateInput.schema");
const mfa_factorsOrderByRelationAggregateInput_schema_1 = require("./mfa_factorsOrderByRelationAggregateInput.schema");
const one_time_tokensOrderByRelationAggregateInput_schema_1 = require("./one_time_tokensOrderByRelationAggregateInput.schema");
const sessionsOrderByRelationAggregateInput_schema_1 = require("./sessionsOrderByRelationAggregateInput.schema");
const categoriesOrderByRelationAggregateInput_schema_1 = require("./categoriesOrderByRelationAggregateInput.schema");
const controller_adminsOrderByWithRelationInput_schema_1 = require("./controller_adminsOrderByWithRelationInput.schema");
const customersOrderByRelationAggregateInput_schema_1 = require("./customersOrderByRelationAggregateInput.schema");
const domain_ownersOrderByRelationAggregateInput_schema_1 = require("./domain_ownersOrderByRelationAggregateInput.schema");
const ordersOrderByRelationAggregateInput_schema_1 = require("./ordersOrderByRelationAggregateInput.schema");
const productsOrderByRelationAggregateInput_schema_1 = require("./productsOrderByRelationAggregateInput.schema");
const profilesOrderByWithRelationInput_schema_1 = require("./profilesOrderByWithRelationInput.schema");
const store_settingsOrderByWithRelationInput_schema_1 = require("./store_settingsOrderByWithRelationInput.schema");
const storesOrderByRelationAggregateInput_schema_1 = require("./storesOrderByRelationAggregateInput.schema");
const Schema = zod_1.z
    .object({
    instance_id: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    aud: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    role: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    email: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    encrypted_password: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    email_confirmed_at: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    invited_at: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    confirmation_token: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    confirmation_sent_at: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    recovery_token: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    recovery_sent_at: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    email_change_token_new: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    email_change: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    email_change_sent_at: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    last_sign_in_at: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    raw_app_meta_data: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    raw_user_meta_data: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    is_super_admin: zod_1.z
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
    phone: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    phone_confirmed_at: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    phone_change: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    phone_change_token: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    phone_change_sent_at: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    confirmed_at: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    email_change_token_current: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    email_change_confirm_status: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    banned_until: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    reauthentication_token: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    reauthentication_sent_at: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    is_sso_user: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    deleted_at: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    is_anonymous: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    identities: zod_1.z
        .lazy(() => identitiesOrderByRelationAggregateInput_schema_1.identitiesOrderByRelationAggregateInputObjectSchema)
        .optional(),
    mfa_factors: zod_1.z
        .lazy(() => mfa_factorsOrderByRelationAggregateInput_schema_1.mfa_factorsOrderByRelationAggregateInputObjectSchema)
        .optional(),
    one_time_tokens: zod_1.z
        .lazy(() => one_time_tokensOrderByRelationAggregateInput_schema_1.one_time_tokensOrderByRelationAggregateInputObjectSchema)
        .optional(),
    sessions: zod_1.z
        .lazy(() => sessionsOrderByRelationAggregateInput_schema_1.sessionsOrderByRelationAggregateInputObjectSchema)
        .optional(),
    categories: zod_1.z
        .lazy(() => categoriesOrderByRelationAggregateInput_schema_1.categoriesOrderByRelationAggregateInputObjectSchema)
        .optional(),
    controller_admins: zod_1.z
        .lazy(() => controller_adminsOrderByWithRelationInput_schema_1.controller_adminsOrderByWithRelationInputObjectSchema)
        .optional(),
    customers: zod_1.z
        .lazy(() => customersOrderByRelationAggregateInput_schema_1.customersOrderByRelationAggregateInputObjectSchema)
        .optional(),
    domain_owners: zod_1.z
        .lazy(() => domain_ownersOrderByRelationAggregateInput_schema_1.domain_ownersOrderByRelationAggregateInputObjectSchema)
        .optional(),
    orders: zod_1.z
        .lazy(() => ordersOrderByRelationAggregateInput_schema_1.ordersOrderByRelationAggregateInputObjectSchema)
        .optional(),
    products: zod_1.z
        .lazy(() => productsOrderByRelationAggregateInput_schema_1.productsOrderByRelationAggregateInputObjectSchema)
        .optional(),
    profiles: zod_1.z
        .lazy(() => profilesOrderByWithRelationInput_schema_1.profilesOrderByWithRelationInputObjectSchema)
        .optional(),
    store_settings: zod_1.z
        .lazy(() => store_settingsOrderByWithRelationInput_schema_1.store_settingsOrderByWithRelationInputObjectSchema)
        .optional(),
    stores: zod_1.z
        .lazy(() => storesOrderByRelationAggregateInput_schema_1.storesOrderByRelationAggregateInputObjectSchema)
        .optional(),
})
    .strict();
exports.usersOrderByWithRelationInputObjectSchema = Schema;
