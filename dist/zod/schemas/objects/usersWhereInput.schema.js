"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersWhereInputObjectSchema = void 0;
const zod_1 = require("zod");
const UuidNullableFilter_schema_1 = require("./UuidNullableFilter.schema");
const UuidFilter_schema_1 = require("./UuidFilter.schema");
const StringNullableFilter_schema_1 = require("./StringNullableFilter.schema");
const DateTimeNullableFilter_schema_1 = require("./DateTimeNullableFilter.schema");
const JsonNullableFilter_schema_1 = require("./JsonNullableFilter.schema");
const BoolNullableFilter_schema_1 = require("./BoolNullableFilter.schema");
const IntNullableFilter_schema_1 = require("./IntNullableFilter.schema");
const BoolFilter_schema_1 = require("./BoolFilter.schema");
const IdentitiesListRelationFilter_schema_1 = require("./IdentitiesListRelationFilter.schema");
const Mfa_factorsListRelationFilter_schema_1 = require("./Mfa_factorsListRelationFilter.schema");
const One_time_tokensListRelationFilter_schema_1 = require("./One_time_tokensListRelationFilter.schema");
const SessionsListRelationFilter_schema_1 = require("./SessionsListRelationFilter.schema");
const CategoriesListRelationFilter_schema_1 = require("./CategoriesListRelationFilter.schema");
const Controller_adminsRelationFilter_schema_1 = require("./Controller_adminsRelationFilter.schema");
const controller_adminsWhereInput_schema_1 = require("./controller_adminsWhereInput.schema");
const CustomersListRelationFilter_schema_1 = require("./CustomersListRelationFilter.schema");
const Domain_ownersListRelationFilter_schema_1 = require("./Domain_ownersListRelationFilter.schema");
const OrdersListRelationFilter_schema_1 = require("./OrdersListRelationFilter.schema");
const ProductsListRelationFilter_schema_1 = require("./ProductsListRelationFilter.schema");
const ProfilesRelationFilter_schema_1 = require("./ProfilesRelationFilter.schema");
const profilesWhereInput_schema_1 = require("./profilesWhereInput.schema");
const Store_settingsRelationFilter_schema_1 = require("./Store_settingsRelationFilter.schema");
const store_settingsWhereInput_schema_1 = require("./store_settingsWhereInput.schema");
const StoresListRelationFilter_schema_1 = require("./StoresListRelationFilter.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.usersWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.usersWhereInputObjectSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.usersWhereInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.usersWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.usersWhereInputObjectSchema).array(),
    ])
        .optional(),
    instance_id: zod_1.z
        .union([zod_1.z.lazy(() => UuidNullableFilter_schema_1.UuidNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    id: zod_1.z.union([zod_1.z.lazy(() => UuidFilter_schema_1.UuidFilterObjectSchema), zod_1.z.string()]).optional(),
    aud: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    role: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    email: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    encrypted_password: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    email_confirmed_at: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeNullableFilter_schema_1.DateTimeNullableFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional()
        .nullable(),
    invited_at: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeNullableFilter_schema_1.DateTimeNullableFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional()
        .nullable(),
    confirmation_token: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    confirmation_sent_at: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeNullableFilter_schema_1.DateTimeNullableFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional()
        .nullable(),
    recovery_token: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    recovery_sent_at: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeNullableFilter_schema_1.DateTimeNullableFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional()
        .nullable(),
    email_change_token_new: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    email_change: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    email_change_sent_at: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeNullableFilter_schema_1.DateTimeNullableFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional()
        .nullable(),
    last_sign_in_at: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeNullableFilter_schema_1.DateTimeNullableFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional()
        .nullable(),
    raw_app_meta_data: zod_1.z.lazy(() => JsonNullableFilter_schema_1.JsonNullableFilterObjectSchema).optional(),
    raw_user_meta_data: zod_1.z.lazy(() => JsonNullableFilter_schema_1.JsonNullableFilterObjectSchema).optional(),
    is_super_admin: zod_1.z
        .union([zod_1.z.lazy(() => BoolNullableFilter_schema_1.BoolNullableFilterObjectSchema), zod_1.z.boolean()])
        .optional()
        .nullable(),
    created_at: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeNullableFilter_schema_1.DateTimeNullableFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional()
        .nullable(),
    updated_at: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeNullableFilter_schema_1.DateTimeNullableFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional()
        .nullable(),
    phone: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    phone_confirmed_at: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeNullableFilter_schema_1.DateTimeNullableFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional()
        .nullable(),
    phone_change: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    phone_change_token: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    phone_change_sent_at: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeNullableFilter_schema_1.DateTimeNullableFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional()
        .nullable(),
    confirmed_at: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeNullableFilter_schema_1.DateTimeNullableFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional()
        .nullable(),
    email_change_token_current: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    email_change_confirm_status: zod_1.z
        .union([zod_1.z.lazy(() => IntNullableFilter_schema_1.IntNullableFilterObjectSchema), zod_1.z.number()])
        .optional()
        .nullable(),
    banned_until: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeNullableFilter_schema_1.DateTimeNullableFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional()
        .nullable(),
    reauthentication_token: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    reauthentication_sent_at: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeNullableFilter_schema_1.DateTimeNullableFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional()
        .nullable(),
    is_sso_user: zod_1.z
        .union([zod_1.z.lazy(() => BoolFilter_schema_1.BoolFilterObjectSchema), zod_1.z.boolean()])
        .optional(),
    deleted_at: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeNullableFilter_schema_1.DateTimeNullableFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional()
        .nullable(),
    is_anonymous: zod_1.z
        .union([zod_1.z.lazy(() => BoolFilter_schema_1.BoolFilterObjectSchema), zod_1.z.boolean()])
        .optional(),
    identities: zod_1.z
        .lazy(() => IdentitiesListRelationFilter_schema_1.IdentitiesListRelationFilterObjectSchema)
        .optional(),
    mfa_factors: zod_1.z
        .lazy(() => Mfa_factorsListRelationFilter_schema_1.Mfa_factorsListRelationFilterObjectSchema)
        .optional(),
    one_time_tokens: zod_1.z
        .lazy(() => One_time_tokensListRelationFilter_schema_1.One_time_tokensListRelationFilterObjectSchema)
        .optional(),
    sessions: zod_1.z.lazy(() => SessionsListRelationFilter_schema_1.SessionsListRelationFilterObjectSchema).optional(),
    categories: zod_1.z
        .lazy(() => CategoriesListRelationFilter_schema_1.CategoriesListRelationFilterObjectSchema)
        .optional(),
    controller_admins: zod_1.z
        .union([
        zod_1.z.lazy(() => Controller_adminsRelationFilter_schema_1.Controller_adminsRelationFilterObjectSchema),
        zod_1.z.lazy(() => controller_adminsWhereInput_schema_1.controller_adminsWhereInputObjectSchema),
    ])
        .optional()
        .nullable(),
    customers: zod_1.z.lazy(() => CustomersListRelationFilter_schema_1.CustomersListRelationFilterObjectSchema).optional(),
    domain_owners: zod_1.z
        .lazy(() => Domain_ownersListRelationFilter_schema_1.Domain_ownersListRelationFilterObjectSchema)
        .optional(),
    orders: zod_1.z.lazy(() => OrdersListRelationFilter_schema_1.OrdersListRelationFilterObjectSchema).optional(),
    products: zod_1.z.lazy(() => ProductsListRelationFilter_schema_1.ProductsListRelationFilterObjectSchema).optional(),
    profiles: zod_1.z
        .union([
        zod_1.z.lazy(() => ProfilesRelationFilter_schema_1.ProfilesRelationFilterObjectSchema),
        zod_1.z.lazy(() => profilesWhereInput_schema_1.profilesWhereInputObjectSchema),
    ])
        .optional()
        .nullable(),
    store_settings: zod_1.z
        .union([
        zod_1.z.lazy(() => Store_settingsRelationFilter_schema_1.Store_settingsRelationFilterObjectSchema),
        zod_1.z.lazy(() => store_settingsWhereInput_schema_1.store_settingsWhereInputObjectSchema),
    ])
        .optional()
        .nullable(),
    stores: zod_1.z.lazy(() => StoresListRelationFilter_schema_1.StoresListRelationFilterObjectSchema).optional(),
})
    .strict();
exports.usersWhereInputObjectSchema = Schema;
