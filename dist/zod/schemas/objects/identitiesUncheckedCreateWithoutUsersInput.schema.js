"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.identitiesUncheckedCreateWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const JsonNullValueInput_schema_1 = require("../enums/JsonNullValueInput.schema");
const literalSchema = zod_1.z.union([zod_1.z.string(), zod_1.z.number(), zod_1.z.boolean()]);
const jsonSchema = zod_1.z.lazy(() => zod_1.z.union([
    literalSchema,
    zod_1.z.array(jsonSchema.nullable()),
    zod_1.z.record(jsonSchema.nullable()),
]));
const Schema = zod_1.z
    .object({
    provider_id: zod_1.z.string(),
    identity_data: zod_1.z.union([
        zod_1.z.lazy(() => JsonNullValueInput_schema_1.JsonNullValueInputSchema),
        jsonSchema,
    ]),
    provider: zod_1.z.string(),
    last_sign_in_at: zod_1.z.coerce.date().optional().nullable(),
    created_at: zod_1.z.coerce.date().optional().nullable(),
    updated_at: zod_1.z.coerce.date().optional().nullable(),
    email: zod_1.z.string().optional().nullable(),
    id: zod_1.z.string().optional(),
})
    .strict();
exports.identitiesUncheckedCreateWithoutUsersInputObjectSchema = Schema;
