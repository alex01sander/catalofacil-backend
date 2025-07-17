"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sso_domainsCreateManyInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string(),
    sso_provider_id: zod_1.z.string(),
    domain: zod_1.z.string(),
    created_at: zod_1.z.coerce.date().optional().nullable(),
    updated_at: zod_1.z.coerce.date().optional().nullable(),
})
    .strict();
exports.sso_domainsCreateManyInputObjectSchema = Schema;
