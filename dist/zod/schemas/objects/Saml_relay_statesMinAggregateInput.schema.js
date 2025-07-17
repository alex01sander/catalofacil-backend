"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Saml_relay_statesMinAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.literal(true).optional(),
    sso_provider_id: zod_1.z.literal(true).optional(),
    request_id: zod_1.z.literal(true).optional(),
    for_email: zod_1.z.literal(true).optional(),
    redirect_to: zod_1.z.literal(true).optional(),
    created_at: zod_1.z.literal(true).optional(),
    updated_at: zod_1.z.literal(true).optional(),
    flow_state_id: zod_1.z.literal(true).optional(),
})
    .strict();
exports.Saml_relay_statesMinAggregateInputObjectSchema = Schema;
