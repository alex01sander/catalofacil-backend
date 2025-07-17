"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saml_relay_statesUncheckedCreateWithoutSso_providersInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string(),
    request_id: zod_1.z.string(),
    for_email: zod_1.z.string().optional().nullable(),
    redirect_to: zod_1.z.string().optional().nullable(),
    created_at: zod_1.z.coerce.date().optional().nullable(),
    updated_at: zod_1.z.coerce.date().optional().nullable(),
    flow_state_id: zod_1.z.string().optional().nullable(),
})
    .strict();
exports.saml_relay_statesUncheckedCreateWithoutSso_providersInputObjectSchema = Schema;
