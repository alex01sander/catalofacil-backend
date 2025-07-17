"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sso_domainsUpdateWithWhereUniqueWithoutSso_providersInputObjectSchema = void 0;
const zod_1 = require("zod");
const sso_domainsWhereUniqueInput_schema_1 = require("./sso_domainsWhereUniqueInput.schema");
const sso_domainsUpdateWithoutSso_providersInput_schema_1 = require("./sso_domainsUpdateWithoutSso_providersInput.schema");
const sso_domainsUncheckedUpdateWithoutSso_providersInput_schema_1 = require("./sso_domainsUncheckedUpdateWithoutSso_providersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => sso_domainsWhereUniqueInput_schema_1.sso_domainsWhereUniqueInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => sso_domainsUpdateWithoutSso_providersInput_schema_1.sso_domainsUpdateWithoutSso_providersInputObjectSchema),
        zod_1.z.lazy(() => sso_domainsUncheckedUpdateWithoutSso_providersInput_schema_1.sso_domainsUncheckedUpdateWithoutSso_providersInputObjectSchema),
    ]),
})
    .strict();
exports.sso_domainsUpdateWithWhereUniqueWithoutSso_providersInputObjectSchema = Schema;
