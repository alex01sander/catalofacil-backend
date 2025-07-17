"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.audit_log_entriesUncheckedCreateInputObjectSchema = void 0;
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
    payload: zod_1.z
        .union([zod_1.z.lazy(() => NullableJsonNullValueInput_schema_1.NullableJsonNullValueInputSchema), jsonSchema])
        .optional(),
    created_at: zod_1.z.coerce.date().optional().nullable(),
    ip_address: zod_1.z.string().optional(),
})
    .strict();
exports.audit_log_entriesUncheckedCreateInputObjectSchema = Schema;
