"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersUncheckedUpdateWithoutMfa_factorsInputObjectSchema = void 0;
const zod_1 = require("zod");
const NullableStringFieldUpdateOperationsInput_schema_1 = require("./NullableStringFieldUpdateOperationsInput.schema");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const NullableDateTimeFieldUpdateOperationsInput_schema_1 = require("./NullableDateTimeFieldUpdateOperationsInput.schema");
const NullableJsonNullValueInput_schema_1 = require("../enums/NullableJsonNullValueInput.schema");
const NullableBoolFieldUpdateOperationsInput_schema_1 = require("./NullableBoolFieldUpdateOperationsInput.schema");
const NullableIntFieldUpdateOperationsInput_schema_1 = require("./NullableIntFieldUpdateOperationsInput.schema");
const BoolFieldUpdateOperationsInput_schema_1 = require("./BoolFieldUpdateOperationsInput.schema");
const identitiesUncheckedUpdateManyWithoutUsersNestedInput_schema_1 = require("./identitiesUncheckedUpdateManyWithoutUsersNestedInput.schema");
const one_time_tokensUncheckedUpdateManyWithoutUsersNestedInput_schema_1 = require("./one_time_tokensUncheckedUpdateManyWithoutUsersNestedInput.schema");
const sessionsUncheckedUpdateManyWithoutUsersNestedInput_schema_1 = require("./sessionsUncheckedUpdateManyWithoutUsersNestedInput.schema");
const categoriesUncheckedUpdateManyWithoutUsersNestedInput_schema_1 = require("./categoriesUncheckedUpdateManyWithoutUsersNestedInput.schema");
const controller_adminsUncheckedUpdateOneWithoutUsersNestedInput_schema_1 = require("./controller_adminsUncheckedUpdateOneWithoutUsersNestedInput.schema");
const customersUncheckedUpdateManyWithoutUsersNestedInput_schema_1 = require("./customersUncheckedUpdateManyWithoutUsersNestedInput.schema");
const domain_ownersUncheckedUpdateManyWithoutUsersNestedInput_schema_1 = require("./domain_ownersUncheckedUpdateManyWithoutUsersNestedInput.schema");
const ordersUncheckedUpdateManyWithoutUsersNestedInput_schema_1 = require("./ordersUncheckedUpdateManyWithoutUsersNestedInput.schema");
const productsUncheckedUpdateManyWithoutUsersNestedInput_schema_1 = require("./productsUncheckedUpdateManyWithoutUsersNestedInput.schema");
const profilesUncheckedUpdateOneWithoutUsersNestedInput_schema_1 = require("./profilesUncheckedUpdateOneWithoutUsersNestedInput.schema");
const store_settingsUncheckedUpdateOneWithoutUsersNestedInput_schema_1 = require("./store_settingsUncheckedUpdateOneWithoutUsersNestedInput.schema");
const storesUncheckedUpdateManyWithoutUsersNestedInput_schema_1 = require("./storesUncheckedUpdateManyWithoutUsersNestedInput.schema");
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
        .lazy(() => identitiesUncheckedUpdateManyWithoutUsersNestedInput_schema_1.identitiesUncheckedUpdateManyWithoutUsersNestedInputObjectSchema)
        .optional(),
    one_time_tokens: zod_1.z
        .lazy(() => one_time_tokensUncheckedUpdateManyWithoutUsersNestedInput_schema_1.one_time_tokensUncheckedUpdateManyWithoutUsersNestedInputObjectSchema)
        .optional(),
    sessions: zod_1.z
        .lazy(() => sessionsUncheckedUpdateManyWithoutUsersNestedInput_schema_1.sessionsUncheckedUpdateManyWithoutUsersNestedInputObjectSchema)
        .optional(),
    categories: zod_1.z
        .lazy(() => categoriesUncheckedUpdateManyWithoutUsersNestedInput_schema_1.categoriesUncheckedUpdateManyWithoutUsersNestedInputObjectSchema)
        .optional(),
    controller_admins: zod_1.z
        .lazy(() => controller_adminsUncheckedUpdateOneWithoutUsersNestedInput_schema_1.controller_adminsUncheckedUpdateOneWithoutUsersNestedInputObjectSchema)
        .optional(),
    customers: zod_1.z
        .lazy(() => customersUncheckedUpdateManyWithoutUsersNestedInput_schema_1.customersUncheckedUpdateManyWithoutUsersNestedInputObjectSchema)
        .optional(),
    domain_owners: zod_1.z
        .lazy(() => domain_ownersUncheckedUpdateManyWithoutUsersNestedInput_schema_1.domain_ownersUncheckedUpdateManyWithoutUsersNestedInputObjectSchema)
        .optional(),
    orders: zod_1.z
        .lazy(() => ordersUncheckedUpdateManyWithoutUsersNestedInput_schema_1.ordersUncheckedUpdateManyWithoutUsersNestedInputObjectSchema)
        .optional(),
    products: zod_1.z
        .lazy(() => productsUncheckedUpdateManyWithoutUsersNestedInput_schema_1.productsUncheckedUpdateManyWithoutUsersNestedInputObjectSchema)
        .optional(),
    profiles: zod_1.z
        .lazy(() => profilesUncheckedUpdateOneWithoutUsersNestedInput_schema_1.profilesUncheckedUpdateOneWithoutUsersNestedInputObjectSchema)
        .optional(),
    store_settings: zod_1.z
        .lazy(() => store_settingsUncheckedUpdateOneWithoutUsersNestedInput_schema_1.store_settingsUncheckedUpdateOneWithoutUsersNestedInputObjectSchema)
        .optional(),
    stores: zod_1.z
        .lazy(() => storesUncheckedUpdateManyWithoutUsersNestedInput_schema_1.storesUncheckedUpdateManyWithoutUsersNestedInputObjectSchema)
        .optional(),
})
    .strict();
exports.usersUncheckedUpdateWithoutMfa_factorsInputObjectSchema = Schema;
