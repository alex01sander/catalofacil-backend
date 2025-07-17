"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersUncheckedCreateWithoutStoresInputObjectSchema = void 0;
const zod_1 = require("zod");
const NullableJsonNullValueInput_schema_1 = require("../enums/NullableJsonNullValueInput.schema");
const identitiesUncheckedCreateNestedManyWithoutUsersInput_schema_1 = require("./identitiesUncheckedCreateNestedManyWithoutUsersInput.schema");
const mfa_factorsUncheckedCreateNestedManyWithoutUsersInput_schema_1 = require("./mfa_factorsUncheckedCreateNestedManyWithoutUsersInput.schema");
const one_time_tokensUncheckedCreateNestedManyWithoutUsersInput_schema_1 = require("./one_time_tokensUncheckedCreateNestedManyWithoutUsersInput.schema");
const sessionsUncheckedCreateNestedManyWithoutUsersInput_schema_1 = require("./sessionsUncheckedCreateNestedManyWithoutUsersInput.schema");
const categoriesUncheckedCreateNestedManyWithoutUsersInput_schema_1 = require("./categoriesUncheckedCreateNestedManyWithoutUsersInput.schema");
const controller_adminsUncheckedCreateNestedOneWithoutUsersInput_schema_1 = require("./controller_adminsUncheckedCreateNestedOneWithoutUsersInput.schema");
const customersUncheckedCreateNestedManyWithoutUsersInput_schema_1 = require("./customersUncheckedCreateNestedManyWithoutUsersInput.schema");
const domain_ownersUncheckedCreateNestedManyWithoutUsersInput_schema_1 = require("./domain_ownersUncheckedCreateNestedManyWithoutUsersInput.schema");
const ordersUncheckedCreateNestedManyWithoutUsersInput_schema_1 = require("./ordersUncheckedCreateNestedManyWithoutUsersInput.schema");
const productsUncheckedCreateNestedManyWithoutUsersInput_schema_1 = require("./productsUncheckedCreateNestedManyWithoutUsersInput.schema");
const profilesUncheckedCreateNestedOneWithoutUsersInput_schema_1 = require("./profilesUncheckedCreateNestedOneWithoutUsersInput.schema");
const store_settingsUncheckedCreateNestedOneWithoutUsersInput_schema_1 = require("./store_settingsUncheckedCreateNestedOneWithoutUsersInput.schema");
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
        .lazy(() => identitiesUncheckedCreateNestedManyWithoutUsersInput_schema_1.identitiesUncheckedCreateNestedManyWithoutUsersInputObjectSchema)
        .optional(),
    mfa_factors: zod_1.z
        .lazy(() => mfa_factorsUncheckedCreateNestedManyWithoutUsersInput_schema_1.mfa_factorsUncheckedCreateNestedManyWithoutUsersInputObjectSchema)
        .optional(),
    one_time_tokens: zod_1.z
        .lazy(() => one_time_tokensUncheckedCreateNestedManyWithoutUsersInput_schema_1.one_time_tokensUncheckedCreateNestedManyWithoutUsersInputObjectSchema)
        .optional(),
    sessions: zod_1.z
        .lazy(() => sessionsUncheckedCreateNestedManyWithoutUsersInput_schema_1.sessionsUncheckedCreateNestedManyWithoutUsersInputObjectSchema)
        .optional(),
    categories: zod_1.z
        .lazy(() => categoriesUncheckedCreateNestedManyWithoutUsersInput_schema_1.categoriesUncheckedCreateNestedManyWithoutUsersInputObjectSchema)
        .optional(),
    controller_admins: zod_1.z
        .lazy(() => controller_adminsUncheckedCreateNestedOneWithoutUsersInput_schema_1.controller_adminsUncheckedCreateNestedOneWithoutUsersInputObjectSchema)
        .optional(),
    customers: zod_1.z
        .lazy(() => customersUncheckedCreateNestedManyWithoutUsersInput_schema_1.customersUncheckedCreateNestedManyWithoutUsersInputObjectSchema)
        .optional(),
    domain_owners: zod_1.z
        .lazy(() => domain_ownersUncheckedCreateNestedManyWithoutUsersInput_schema_1.domain_ownersUncheckedCreateNestedManyWithoutUsersInputObjectSchema)
        .optional(),
    orders: zod_1.z
        .lazy(() => ordersUncheckedCreateNestedManyWithoutUsersInput_schema_1.ordersUncheckedCreateNestedManyWithoutUsersInputObjectSchema)
        .optional(),
    products: zod_1.z
        .lazy(() => productsUncheckedCreateNestedManyWithoutUsersInput_schema_1.productsUncheckedCreateNestedManyWithoutUsersInputObjectSchema)
        .optional(),
    profiles: zod_1.z
        .lazy(() => profilesUncheckedCreateNestedOneWithoutUsersInput_schema_1.profilesUncheckedCreateNestedOneWithoutUsersInputObjectSchema)
        .optional(),
    store_settings: zod_1.z
        .lazy(() => store_settingsUncheckedCreateNestedOneWithoutUsersInput_schema_1.store_settingsUncheckedCreateNestedOneWithoutUsersInputObjectSchema)
        .optional(),
})
    .strict();
exports.usersUncheckedCreateWithoutStoresInputObjectSchema = Schema;
