"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sso_domainsMinAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.literal(true).optional(),
    sso_provider_id: zod_1.z.literal(true).optional(),
    domain: zod_1.z.literal(true).optional(),
    created_at: zod_1.z.literal(true).optional(),
    updated_at: zod_1.z.literal(true).optional(),
})
    .strict();
exports.Sso_domainsMinAggregateInputObjectSchema = Schema;
