"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sso_domainsCreateInputObjectSchema = void 0;
const zod_1 = require("zod");
const sso_providersCreateNestedOneWithoutSso_domainsInput_schema_1 = require("./sso_providersCreateNestedOneWithoutSso_domainsInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string(),
    domain: zod_1.z.string(),
    created_at: zod_1.z.coerce.date().optional().nullable(),
    updated_at: zod_1.z.coerce.date().optional().nullable(),
    sso_providers: zod_1.z.lazy(() => sso_providersCreateNestedOneWithoutSso_domainsInput_schema_1.sso_providersCreateNestedOneWithoutSso_domainsInputObjectSchema),
})
    .strict();
exports.sso_domainsCreateInputObjectSchema = Schema;
