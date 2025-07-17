"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersUpdateWithoutCustomersInputObjectSchema = void 0;
const zod_1 = require("zod");
const NullableStringFieldUpdateOperationsInput_schema_1 = require("./NullableStringFieldUpdateOperationsInput.schema");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const NullableDateTimeFieldUpdateOperationsInput_schema_1 = require("./NullableDateTimeFieldUpdateOperationsInput.schema");
const NullableJsonNullValueInput_schema_1 = require("../enums/NullableJsonNullValueInput.schema");
const NullableBoolFieldUpdateOperationsInput_schema_1 = require("./NullableBoolFieldUpdateOperationsInput.schema");
const NullableIntFieldUpdateOperationsInput_schema_1 = require("./NullableIntFieldUpdateOperationsInput.schema");
const BoolFieldUpdateOperationsInput_schema_1 = require("./BoolFieldUpdateOperationsInput.schema");
const identitiesUpdateManyWithoutUsersNestedInput_schema_1 = require("./identitiesUpdateManyWithoutUsersNestedInput.schema");
const mfa_factorsUpdateManyWithoutUsersNestedInput_schema_1 = require("./mfa_factorsUpdateManyWithoutUsersNestedInput.schema");
const one_time_tokensUpdateManyWithoutUsersNestedInput_schema_1 = require("./one_time_tokensUpdateManyWithoutUsersNestedInput.schema");
const sessionsUpdateManyWithoutUsersNestedInput_schema_1 = require("./sessionsUpdateManyWithoutUsersNestedInput.schema");
const categoriesUpdateManyWithoutUsersNestedInput_schema_1 = require("./categoriesUpdateManyWithoutUsersNestedInput.schema");
const controller_adminsUpdateOneWithoutUsersNestedInput_schema_1 = require("./controller_adminsUpdateOneWithoutUsersNestedInput.schema");
const domain_ownersUpdateManyWithoutUsersNestedInput_schema_1 = require("./domain_ownersUpdateManyWithoutUsersNestedInput.schema");
const ordersUpdateManyWithoutUsersNestedInput_schema_1 = require("./ordersUpdateManyWithoutUsersNestedInput.schema");
const productsUpdateManyWithoutUsersNestedInput_schema_1 = require("./productsUpdateManyWithoutUsersNestedInput.schema");
const profilesUpdateOneWithoutUsersNestedInput_schema_1 = require("./profilesUpdateOneWithoutUsersNestedInput.schema");
const store_settingsUpdateOneWithoutUsersNestedInput_schema_1 = require("./store_settingsUpdateOneWithoutUsersNestedInput.schema");
const storesUpdateManyWithoutUsersNestedInput_schema_1 = require("./storesUpdateManyWithoutUsersNestedInput.schema");
const literalSchema = zod_1.z.union([zod_1.z.string(), zod_1.z.number(), zod_1.z.boolean()]);
const jsonSchema = zod_1.z.lazy(() => zod_1.z.union([
    literalSchema,
    zod_1.z.array(jsonSchema.nullable()),
    zod_1.z.record(jsonSchema.nullable()),
]));
const Schema = zod_1.z
    .object({
    instance_id: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    id: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    aud: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    role: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    email: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    encrypted_password: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    email_confirmed_at: zod_1.z
        .union([
        zod_1.z.coerce.date(),
        zod_1.z.lazy(() => NullableDateTimeFieldUpdateOperationsInput_schema_1.NullableDateTimeFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    invited_at: zod_1.z
        .union([
        zod_1.z.coerce.date(),
        zod_1.z.lazy(() => NullableDateTimeFieldUpdateOperationsInput_schema_1.NullableDateTimeFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    confirmation_token: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    confirmation_sent_at: zod_1.z
        .union([
        zod_1.z.coerce.date(),
        zod_1.z.lazy(() => NullableDateTimeFieldUpdateOperationsInput_schema_1.NullableDateTimeFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    recovery_token: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    recovery_sent_at: zod_1.z
        .union([
        zod_1.z.coerce.date(),
        zod_1.z.lazy(() => NullableDateTimeFieldUpdateOperationsInput_schema_1.NullableDateTimeFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    email_change_token_new: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    email_change: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    email_change_sent_at: zod_1.z
        .union([
        zod_1.z.coerce.date(),
        zod_1.z.lazy(() => NullableDateTimeFieldUpdateOperationsInput_schema_1.NullableDateTimeFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    last_sign_in_at: zod_1.z
        .union([
        zod_1.z.coerce.date(),
        zod_1.z.lazy(() => NullableDateTimeFieldUpdateOperationsInput_schema_1.NullableDateTimeFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    raw_app_meta_data: zod_1.z
        .union([zod_1.z.lazy(() => NullableJsonNullValueInput_schema_1.NullableJsonNullValueInputSchema), jsonSchema])
        .optional(),
    raw_user_meta_data: zod_1.z
        .union([zod_1.z.lazy(() => NullableJsonNullValueInput_schema_1.NullableJsonNullValueInputSchema), jsonSchema])
        .optional(),
    is_super_admin: zod_1.z
        .union([
        zod_1.z.boolean(),
        zod_1.z.lazy(() => NullableBoolFieldUpdateOperationsInput_schema_1.NullableBoolFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    created_at: zod_1.z
        .union([
        zod_1.z.coerce.date(),
        zod_1.z.lazy(() => NullableDateTimeFieldUpdateOperationsInput_schema_1.NullableDateTimeFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    updated_at: zod_1.z
        .union([
        zod_1.z.coerce.date(),
        zod_1.z.lazy(() => NullableDateTimeFieldUpdateOperationsInput_schema_1.NullableDateTimeFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    phone: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    phone_confirmed_at: zod_1.z
        .union([
        zod_1.z.coerce.date(),
        zod_1.z.lazy(() => NullableDateTimeFieldUpdateOperationsInput_schema_1.NullableDateTimeFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    phone_change: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    phone_change_token: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    phone_change_sent_at: zod_1.z
        .union([
        zod_1.z.coerce.date(),
        zod_1.z.lazy(() => NullableDateTimeFieldUpdateOperationsInput_schema_1.NullableDateTimeFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    confirmed_at: zod_1.z
        .union([
        zod_1.z.coerce.date(),
        zod_1.z.lazy(() => NullableDateTimeFieldUpdateOperationsInput_schema_1.NullableDateTimeFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    email_change_token_current: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    email_change_confirm_status: zod_1.z
        .union([
        zod_1.z.number(),
        zod_1.z.lazy(() => NullableIntFieldUpdateOperationsInput_schema_1.NullableIntFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    banned_until: zod_1.z
        .union([
        zod_1.z.coerce.date(),
        zod_1.z.lazy(() => NullableDateTimeFieldUpdateOperationsInput_schema_1.NullableDateTimeFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    reauthentication_token: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    reauthentication_sent_at: zod_1.z
        .union([
        zod_1.z.coerce.date(),
        zod_1.z.lazy(() => NullableDateTimeFieldUpdateOperationsInput_schema_1.NullableDateTimeFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    is_sso_user: zod_1.z
        .union([
        zod_1.z.boolean(),
        zod_1.z.lazy(() => BoolFieldUpdateOperationsInput_schema_1.BoolFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    deleted_at: zod_1.z
        .union([
        zod_1.z.coerce.date(),
        zod_1.z.lazy(() => NullableDateTimeFieldUpdateOperationsInput_schema_1.NullableDateTimeFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    is_anonymous: zod_1.z
        .union([
        zod_1.z.boolean(),
        zod_1.z.lazy(() => BoolFieldUpdateOperationsInput_schema_1.BoolFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    identities: zod_1.z
        .lazy(() => identitiesUpdateManyWithoutUsersNestedInput_schema_1.identitiesUpdateManyWithoutUsersNestedInputObjectSchema)
        .optional(),
    mfa_factors: zod_1.z
        .lazy(() => mfa_factorsUpdateManyWithoutUsersNestedInput_schema_1.mfa_factorsUpdateManyWithoutUsersNestedInputObjectSchema)
        .optional(),
    one_time_tokens: zod_1.z
        .lazy(() => one_time_tokensUpdateManyWithoutUsersNestedInput_schema_1.one_time_tokensUpdateManyWithoutUsersNestedInputObjectSchema)
        .optional(),
    sessions: zod_1.z
        .lazy(() => sessionsUpdateManyWithoutUsersNestedInput_schema_1.sessionsUpdateManyWithoutUsersNestedInputObjectSchema)
        .optional(),
    categories: zod_1.z
        .lazy(() => categoriesUpdateManyWithoutUsersNestedInput_schema_1.categoriesUpdateManyWithoutUsersNestedInputObjectSchema)
        .optional(),
    controller_admins: zod_1.z
        .lazy(() => controller_adminsUpdateOneWithoutUsersNestedInput_schema_1.controller_adminsUpdateOneWithoutUsersNestedInputObjectSchema)
        .optional(),
    domain_owners: zod_1.z
        .lazy(() => domain_ownersUpdateManyWithoutUsersNestedInput_schema_1.domain_ownersUpdateManyWithoutUsersNestedInputObjectSchema)
        .optional(),
    orders: zod_1.z
        .lazy(() => ordersUpdateManyWithoutUsersNestedInput_schema_1.ordersUpdateManyWithoutUsersNestedInputObjectSchema)
        .optional(),
    products: zod_1.z
        .lazy(() => productsUpdateManyWithoutUsersNestedInput_schema_1.productsUpdateManyWithoutUsersNestedInputObjectSchema)
        .optional(),
    profiles: zod_1.z
        .lazy(() => profilesUpdateOneWithoutUsersNestedInput_schema_1.profilesUpdateOneWithoutUsersNestedInputObjectSchema)
        .optional(),
    store_settings: zod_1.z
        .lazy(() => store_settingsUpdateOneWithoutUsersNestedInput_schema_1.store_settingsUpdateOneWithoutUsersNestedInputObjectSchema)
        .optional(),
    stores: zod_1.z
        .lazy(() => storesUpdateManyWithoutUsersNestedInput_schema_1.storesUpdateManyWithoutUsersNestedInputObjectSchema)
        .optional(),
})
    .strict();
exports.usersUpdateWithoutCustomersInputObjectSchema = Schema;
