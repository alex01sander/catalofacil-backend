"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sso_domainsCreateOrConnectWithoutSso_providersInputObjectSchema = void 0;
const zod_1 = require("zod");
const sso_domainsWhereUniqueInput_schema_1 = require("./sso_domainsWhereUniqueInput.schema");
const sso_domainsCreateWithoutSso_providersInput_schema_1 = require("./sso_domainsCreateWithoutSso_providersInput.schema");
const sso_domainsUncheckedCreateWithoutSso_providersInput_schema_1 = require("./sso_domainsUncheckedCreateWithoutSso_providersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => sso_domainsWhereUniqueInput_schema_1.sso_domainsWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => sso_domainsCreateWithoutSso_providersInput_schema_1.sso_domainsCreateWithoutSso_providersInputObjectSchema),
        zod_1.z.lazy(() => sso_domainsUncheckedCreateWithoutSso_providersInput_schema_1.sso_domainsUncheckedCreateWithoutSso_providersInputObjectSchema),
    ]),
})
    .strict();
exports.sso_domainsCreateOrConnectWithoutSso_providersInputObjectSchema = Schema;
