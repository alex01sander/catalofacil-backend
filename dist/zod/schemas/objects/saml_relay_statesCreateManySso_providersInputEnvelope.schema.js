"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saml_relay_statesCreateManySso_providersInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const saml_relay_statesCreateManySso_providersInput_schema_1 = require("./saml_relay_statesCreateManySso_providersInput.schema");
const Schema = zod_1.z
    .object({
    data: zod_1.z.union([
        zod_1.z.lazy(() => saml_relay_statesCreateManySso_providersInput_schema_1.saml_relay_statesCreateManySso_providersInputObjectSchema),
        zod_1.z
            .lazy(() => saml_relay_statesCreateManySso_providersInput_schema_1.saml_relay_statesCreateManySso_providersInputObjectSchema)
            .array(),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
})
    .strict();
exports.saml_relay_statesCreateManySso_providersInputEnvelopeObjectSchema = Schema;
