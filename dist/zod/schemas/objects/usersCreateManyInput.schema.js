"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersCreateManyInputObjectSchema = void 0;
const zod_1 = require("zod");
const NullableJsonNullValueInput_schema_1 = require("../enums/NullableJsonNullValueInput.schema");
const literalSchema = zod_1.z.union([zod_1.z.string(), zod_1.z.number(), zod_1.z.boolean()]);
const jsonSchema = zod_1.z.lazy(() => zod_1.z.union([
    literalSchema,
    zod_1.z.array(jsonSchema.nullable()),
    zod_1.z.record(jsonSchema.nullable()),
]));
const Schema = zod_1.z
    .object({
    instance_id: zod_1.z.string().optional().nullable(),
    id: zod_1.z.string(),
    aud: zod_1.z.string().optional().nullable(),
    role: zod_1.z.string().optional().nullable(),
    email: zod_1.z.string().optional().nullable(),
    encrypted_password: zod_1.z.string().optional().nullable(),
    email_confirmed_at: zod_1.z.coerce.date().optional().nullable(),
    invited_at: zod_1.z.coerce.date().optional().nullable(),
    confirmation_token: zod_1.z.string().optional().nullable(),
    confirmation_sent_at: zod_1.z.coerce.date().optional().nullable(),
    recovery_token: zod_1.z.string().optional().nullable(),
    recovery_sent_at: zod_1.z.coerce.date().optional().nullable(),
    email_change_token_new: zod_1.z.string().optional().nullable(),
    email_change: zod_1.z.string().optional().nullable(),
    email_change_sent_at: zod_1.z.coerce.date().optional().nullable(),
    last_sign_in_at: zod_1.z.coerce.date().optional().nullable(),
    raw_app_meta_data: zod_1.z
        .union([zod_1.z.lazy(() => NullableJsonNullValueInput_schema_1.NullableJsonNullValueInputSchema), jsonSchema])
        .optional(),
    raw_user_meta_data: zod_1.z
        .union([zod_1.z.lazy(() => NullableJsonNullValueInput_schema_1.NullableJsonNullValueInputSchema), jsonSchema])
        .optional(),
    is_super_admin: zod_1.z.boolean().optional().nullable(),
    created_at: zod_1.z.coerce.date().optional().nullable(),
    updated_at: zod_1.z.coerce.date().optional().nullable(),
    phone: zod_1.z.string().optional().nullable(),
    phone_confirmed_at: zod_1.z.coerce.date().optional().nullable(),
    phone_change: zod_1.z.string().optional().nullable(),
    phone_change_token: zod_1.z.string().optional().nullable(),
    phone_change_sent_at: zod_1.z.coerce.date().optional().nullable(),
    confirmed_at: zod_1.z.coerce.date().optional().nullable(),
    email_change_token_current: zod_1.z.string().optional().nullable(),
    email_change_confirm_status: zod_1.z.number().optional().nullable(),
    banned_until: zod_1.z.coerce.date().optional().nullable(),
    reauthentication_token: zod_1.z.string().optional().nullable(),
    reauthentication_sent_at: zod_1.z.coerce.date().optional().nullable(),
    is_sso_user: zod_1.z.boolean().optional(),
    deleted_at: zod_1.z.coerce.date().optional().nullable(),
    is_anonymous: zod_1.z.boolean().optional(),
})
    .strict();
exports.usersCreateManyInputObjectSchema = Schema;
