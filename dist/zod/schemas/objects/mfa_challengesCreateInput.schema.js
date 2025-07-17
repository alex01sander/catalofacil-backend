"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_challengesCreateInputObjectSchema = void 0;
const zod_1 = require("zod");
const NullableJsonNullValueInput_schema_1 = require("../enums/NullableJsonNullValueInput.schema");
const mfa_factorsCreateNestedOneWithoutMfa_challengesInput_schema_1 = require("./mfa_factorsCreateNestedOneWithoutMfa_challengesInput.schema");
const literalSchema = zod_1.z.union([zod_1.z.string(), zod_1.z.number(), zod_1.z.boolean()]);
const jsonSchema = zod_1.z.lazy(() => zod_1.z.union([
    literalSchema,
    zod_1.z.array(jsonSchema.nullable()),
    zod_1.z.record(jsonSchema.nullable()),
]));
const Schema = zod_1.z
    .object({
    id: zod_1.z.string(),
    created_at: zod_1.z.coerce.date(),
    verified_at: zod_1.z.coerce.date().optional().nullable(),
    ip_address: zod_1.z.string(),
    otp_code: zod_1.z.string().optional().nullable(),
    web_authn_session_data: zod_1.z
        .union([zod_1.z.lazy(() => NullableJsonNullValueInput_schema_1.NullableJsonNullValueInputSchema), jsonSchema])
        .optional(),
    mfa_factors: zod_1.z.lazy(() => mfa_factorsCreateNestedOneWithoutMfa_challengesInput_schema_1.mfa_factorsCreateNestedOneWithoutMfa_challengesInputObjectSchema),
})
    .strict();
exports.mfa_challengesCreateInputObjectSchema = Schema;
