"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Saml_relay_statesScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Saml_relay_statesScalarFieldEnumSchema = zod_1.z.enum([
    'id',
    'sso_provider_id',
    'request_id',
    'for_email',
    'redirect_to',
    'created_at',
    'updated_at',
    'flow_state_id',
]);
