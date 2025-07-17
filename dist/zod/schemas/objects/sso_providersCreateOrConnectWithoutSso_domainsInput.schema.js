"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sso_providersCreateOrConnectWithoutSso_domainsInputObjectSchema = void 0;
const zod_1 = require("zod");
const sso_providersWhereUniqueInput_schema_1 = require("./sso_providersWhereUniqueInput.schema");
const sso_providersCreateWithoutSso_domainsInput_schema_1 = require("./sso_providersCreateWithoutSso_domainsInput.schema");
const sso_providersUncheckedCreateWithoutSso_domainsInput_schema_1 = require("./sso_providersUncheckedCreateWithoutSso_domainsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => sso_providersWhereUniqueInput_schema_1.sso_providersWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => sso_providersCreateWithoutSso_domainsInput_schema_1.sso_providersCreateWithoutSso_domainsInputObjectSchema),
        zod_1.z.lazy(() => sso_providersUncheckedCreateWithoutSso_domainsInput_schema_1.sso_providersUncheckedCreateWithoutSso_domainsInputObjectSchema),
    ]),
})
    .strict();
exports.sso_providersCreateOrConnectWithoutSso_domainsInputObjectSchema = Schema;
