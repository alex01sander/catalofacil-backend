"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sso_providersUpsertWithoutSso_domainsInputObjectSchema = void 0;
const zod_1 = require("zod");
const sso_providersUpdateWithoutSso_domainsInput_schema_1 = require("./sso_providersUpdateWithoutSso_domainsInput.schema");
const sso_providersUncheckedUpdateWithoutSso_domainsInput_schema_1 = require("./sso_providersUncheckedUpdateWithoutSso_domainsInput.schema");
const sso_providersCreateWithoutSso_domainsInput_schema_1 = require("./sso_providersCreateWithoutSso_domainsInput.schema");
const sso_providersUncheckedCreateWithoutSso_domainsInput_schema_1 = require("./sso_providersUncheckedCreateWithoutSso_domainsInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => sso_providersUpdateWithoutSso_domainsInput_schema_1.sso_providersUpdateWithoutSso_domainsInputObjectSchema),
        zod_1.z.lazy(() => sso_providersUncheckedUpdateWithoutSso_domainsInput_schema_1.sso_providersUncheckedUpdateWithoutSso_domainsInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => sso_providersCreateWithoutSso_domainsInput_schema_1.sso_providersCreateWithoutSso_domainsInputObjectSchema),
        zod_1.z.lazy(() => sso_providersUncheckedCreateWithoutSso_domainsInput_schema_1.sso_providersUncheckedCreateWithoutSso_domainsInputObjectSchema),
    ]),
})
    .strict();
exports.sso_providersUpsertWithoutSso_domainsInputObjectSchema = Schema;
