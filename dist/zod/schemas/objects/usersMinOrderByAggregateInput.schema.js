"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersMinOrderByAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const Schema = zod_1.z
    .object({
    instance_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    aud: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    role: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    email: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    encrypted_password: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    email_confirmed_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    invited_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    confirmation_token: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    confirmation_sent_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    recovery_token: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    recovery_sent_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    email_change_token_new: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    email_change: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    email_change_sent_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    last_sign_in_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    is_super_admin: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    created_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    updated_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    phone: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    phone_confirmed_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    phone_change: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    phone_change_token: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    phone_change_sent_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    confirmed_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    email_change_token_current: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    email_change_confirm_status: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    banned_until: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    reauthentication_token: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    reauthentication_sent_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    is_sso_user: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    deleted_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    is_anonymous: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
})
    .strict();
exports.usersMinOrderByAggregateInputObjectSchema = Schema;
