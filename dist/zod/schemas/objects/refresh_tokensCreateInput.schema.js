"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refresh_tokensCreateInputObjectSchema = void 0;
const zod_1 = require("zod");
const sessionsCreateNestedOneWithoutRefresh_tokensInput_schema_1 = require("./sessionsCreateNestedOneWithoutRefresh_tokensInput.schema");
const Schema = zod_1.z
    .object({
    instance_id: zod_1.z.string().optional().nullable(),
    id: zod_1.z.bigint().optional(),
    token: zod_1.z.string().optional().nullable(),
    user_id: zod_1.z.string().optional().nullable(),
    revoked: zod_1.z.boolean().optional().nullable(),
    created_at: zod_1.z.coerce.date().optional().nullable(),
    updated_at: zod_1.z.coerce.date().optional().nullable(),
    parent: zod_1.z.string().optional().nullable(),
    sessions: zod_1.z
        .lazy(() => sessionsCreateNestedOneWithoutRefresh_tokensInput_schema_1.sessionsCreateNestedOneWithoutRefresh_tokensInputObjectSchema)
        .optional(),
})
    .strict();
exports.refresh_tokensCreateInputObjectSchema = Schema;
