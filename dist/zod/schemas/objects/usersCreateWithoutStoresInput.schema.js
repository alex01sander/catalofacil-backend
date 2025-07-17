"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersCreateWithoutStoresInputObjectSchema = void 0;
const zod_1 = require("zod");
const NullableJsonNullValueInput_schema_1 = require("../enums/NullableJsonNullValueInput.schema");
const identitiesCreateNestedManyWithoutUsersInput_schema_1 = require("./identitiesCreateNestedManyWithoutUsersInput.schema");
const mfa_factorsCreateNestedManyWithoutUsersInput_schema_1 = require("./mfa_factorsCreateNestedManyWithoutUsersInput.schema");
const one_time_tokensCreateNestedManyWithoutUsersInput_schema_1 = require("./one_time_tokensCreateNestedManyWithoutUsersInput.schema");
const sessionsCreateNestedManyWithoutUsersInput_schema_1 = require("./sessionsCreateNestedManyWithoutUsersInput.schema");
const categoriesCreateNestedManyWithoutUsersInput_schema_1 = require("./categoriesCreateNestedManyWithoutUsersInput.schema");
const controller_adminsCreateNestedOneWithoutUsersInput_schema_1 = require("./controller_adminsCreateNestedOneWithoutUsersInput.schema");
const customersCreateNestedManyWithoutUsersInput_schema_1 = require("./customersCreateNestedManyWithoutUsersInput.schema");
const domain_ownersCreateNestedManyWithoutUsersInput_schema_1 = require("./domain_ownersCreateNestedManyWithoutUsersInput.schema");
const ordersCreateNestedManyWithoutUsersInput_schema_1 = require("./ordersCreateNestedManyWithoutUsersInput.schema");
const productsCreateNestedManyWithoutUsersInput_schema_1 = require("./productsCreateNestedManyWithoutUsersInput.schema");
const profilesCreateNestedOneWithoutUsersInput_schema_1 = require("./profilesCreateNestedOneWithoutUsersInput.schema");
const store_settingsCreateNestedOneWithoutUsersInput_schema_1 = require("./store_settingsCreateNestedOneWithoutUsersInput.schema");
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
    identities: zod_1.z
        .lazy(() => identitiesCreateNestedManyWithoutUsersInput_schema_1.identitiesCreateNestedManyWithoutUsersInputObjectSchema)
        .optional(),
    mfa_factors: zod_1.z
        .lazy(() => mfa_factorsCreateNestedManyWithoutUsersInput_schema_1.mfa_factorsCreateNestedManyWithoutUsersInputObjectSchema)
        .optional(),
    one_time_tokens: zod_1.z
        .lazy(() => one_time_tokensCreateNestedManyWithoutUsersInput_schema_1.one_time_tokensCreateNestedManyWithoutUsersInputObjectSchema)
        .optional(),
    sessions: zod_1.z
        .lazy(() => sessionsCreateNestedManyWithoutUsersInput_schema_1.sessionsCreateNestedManyWithoutUsersInputObjectSchema)
        .optional(),
    categories: zod_1.z
        .lazy(() => categoriesCreateNestedManyWithoutUsersInput_schema_1.categoriesCreateNestedManyWithoutUsersInputObjectSchema)
        .optional(),
    controller_admins: zod_1.z
        .lazy(() => controller_adminsCreateNestedOneWithoutUsersInput_schema_1.controller_adminsCreateNestedOneWithoutUsersInputObjectSchema)
        .optional(),
    customers: zod_1.z
        .lazy(() => customersCreateNestedManyWithoutUsersInput_schema_1.customersCreateNestedManyWithoutUsersInputObjectSchema)
        .optional(),
    domain_owners: zod_1.z
        .lazy(() => domain_ownersCreateNestedManyWithoutUsersInput_schema_1.domain_ownersCreateNestedManyWithoutUsersInputObjectSchema)
        .optional(),
    orders: zod_1.z
        .lazy(() => ordersCreateNestedManyWithoutUsersInput_schema_1.ordersCreateNestedManyWithoutUsersInputObjectSchema)
        .optional(),
    products: zod_1.z
        .lazy(() => productsCreateNestedManyWithoutUsersInput_schema_1.productsCreateNestedManyWithoutUsersInputObjectSchema)
        .optional(),
    profiles: zod_1.z
        .lazy(() => profilesCreateNestedOneWithoutUsersInput_schema_1.profilesCreateNestedOneWithoutUsersInputObjectSchema)
        .optional(),
    store_settings: zod_1.z
        .lazy(() => store_settingsCreateNestedOneWithoutUsersInput_schema_1.store_settingsCreateNestedOneWithoutUsersInputObjectSchema)
        .optional(),
})
    .strict();
exports.usersCreateWithoutStoresInputObjectSchema = Schema;
