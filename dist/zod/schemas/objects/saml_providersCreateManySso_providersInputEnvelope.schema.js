"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saml_providersCreateManySso_providersInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const saml_providersCreateManySso_providersInput_schema_1 = require("./saml_providersCreateManySso_providersInput.schema");
const Schema = zod_1.z
    .object({
    data: zod_1.z.union([
        zod_1.z.lazy(() => saml_providersCreateManySso_providersInput_schema_1.saml_providersCreateManySso_providersInputObjectSchema),
        zod_1.z
            .lazy(() => saml_providersCreateManySso_providersInput_schema_1.saml_providersCreateManySso_providersInputObjectSchema)
            .array(),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
})
    .strict();
exports.saml_providersCreateManySso_providersInputEnvelopeObjectSchema = Schema;
