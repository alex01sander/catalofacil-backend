"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_factorsUncheckedUpdateManyInputObjectSchema = void 0;
const zod_1 = require("zod");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const NullableStringFieldUpdateOperationsInput_schema_1 = require("./NullableStringFieldUpdateOperationsInput.schema");
const factor_type_schema_1 = require("../enums/factor_type.schema");
const Enumfactor_typeFieldUpdateOperationsInput_schema_1 = require("./Enumfactor_typeFieldUpdateOperationsInput.schema");
const factor_status_schema_1 = require("../enums/factor_status.schema");
const Enumfactor_statusFieldUpdateOperationsInput_schema_1 = require("./Enumfactor_statusFieldUpdateOperationsInput.schema");
const DateTimeFieldUpdateOperationsInput_schema_1 = require("./DateTimeFieldUpdateOperationsInput.schema");
const NullableDateTimeFieldUpdateOperationsInput_schema_1 = require("./NullableDateTimeFieldUpdateOperationsInput.schema");
const NullableJsonNullValueInput_schema_1 = require("../enums/NullableJsonNullValueInput.schema");
const literalSchema = zod_1.z.union([zod_1.z.string(), zod_1.z.number(), zod_1.z.boolean()]);
const jsonSchema = zod_1.z.lazy(() => zod_1.z.union([
    literalSchema,
    zod_1.z.array(jsonSchema.nullable()),
    zod_1.z.record(jsonSchema.nullable()),
]));
const Schema = zod_1.z
    .object({
    id: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    user_id: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    friendly_name: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    factor_type: zod_1.z
        .union([
        zod_1.z.lazy(() => factor_type_schema_1.factor_typeSchema),
        zod_1.z.lazy(() => Enumfactor_typeFieldUpdateOperationsInput_schema_1.Enumfactor_typeFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    status: zod_1.z
        .union([
        zod_1.z.lazy(() => factor_status_schema_1.factor_statusSchema),
        zod_1.z.lazy(() => Enumfactor_statusFieldUpdateOperationsInput_schema_1.Enumfactor_statusFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    created_at: zod_1.z
        .union([
        zod_1.z.coerce.date(),
        zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    updated_at: zod_1.z
        .union([
        zod_1.z.coerce.date(),
        zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    secret: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
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
    last_challenged_at: zod_1.z
        .union([
        zod_1.z.coerce.date(),
        zod_1.z.lazy(() => NullableDateTimeFieldUpdateOperationsInput_schema_1.NullableDateTimeFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    web_authn_credential: zod_1.z
        .union([zod_1.z.lazy(() => NullableJsonNullValueInput_schema_1.NullableJsonNullValueInputSchema), jsonSchema])
        .optional(),
    web_authn_aaguid: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
})
    .strict();
exports.mfa_factorsUncheckedUpdateManyInputObjectSchema = Schema;
