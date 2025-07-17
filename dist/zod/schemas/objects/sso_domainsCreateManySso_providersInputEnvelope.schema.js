"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sso_domainsCreateManySso_providersInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const sso_domainsCreateManySso_providersInput_schema_1 = require("./sso_domainsCreateManySso_providersInput.schema");
const Schema = zod_1.z
    .object({
    data: zod_1.z.union([
        zod_1.z.lazy(() => sso_domainsCreateManySso_providersInput_schema_1.sso_domainsCreateManySso_providersInputObjectSchema),
        zod_1.z
            .lazy(() => sso_domainsCreateManySso_providersInput_schema_1.sso_domainsCreateManySso_providersInputObjectSchema)
            .array(),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
})
    .strict();
exports.sso_domainsCreateManySso_providersInputEnvelopeObjectSchema = Schema;
