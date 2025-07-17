"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_factorsCreateManyUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const factor_type_schema_1 = require("../enums/factor_type.schema");
const factor_status_schema_1 = require("../enums/factor_status.schema");
const NullableJsonNullValueInput_schema_1 = require("../enums/NullableJsonNullValueInput.schema");
const literalSchema = zod_1.z.union([zod_1.z.string(), zod_1.z.number(), zod_1.z.boolean()]);
const jsonSchema = zod_1.z.lazy(() => zod_1.z.union([
    literalSchema,
    zod_1.z.array(jsonSchema.nullable()),
    zod_1.z.record(jsonSchema.nullable()),
]));
const Schema = zod_1.z
    .object({
    id: zod_1.z.string(),
    friendly_name: zod_1.z.string().optional().nullable(),
    factor_type: zod_1.z.lazy(() => factor_type_schema_1.factor_typeSchema),
    status: zod_1.z.lazy(() => factor_status_schema_1.factor_statusSchema),
    created_at: zod_1.z.coerce.date(),
    updated_at: zod_1.z.coerce.date(),
    secret: zod_1.z.string().optional().nullable(),
    phone: zod_1.z.string().optional().nullable(),
    last_challenged_at: zod_1.z.coerce.date().optional().nullable(),
    web_authn_credential: zod_1.z
        .union([zod_1.z.lazy(() => NullableJsonNullValueInput_schema_1.NullableJsonNullValueInputSchema), jsonSchema])
        .optional(),
    web_authn_aaguid: zod_1.z.string().optional().nullable(),
})
    .strict();
exports.mfa_factorsCreateManyUsersInputObjectSchema = Schema;
