"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sso_providersCreateNestedOneWithoutSso_domainsInputObjectSchema = void 0;
const zod_1 = require("zod");
const sso_providersCreateWithoutSso_domainsInput_schema_1 = require("./sso_providersCreateWithoutSso_domainsInput.schema");
const sso_providersUncheckedCreateWithoutSso_domainsInput_schema_1 = require("./sso_providersUncheckedCreateWithoutSso_domainsInput.schema");
const sso_providersCreateOrConnectWithoutSso_domainsInput_schema_1 = require("./sso_providersCreateOrConnectWithoutSso_domainsInput.schema");
const sso_providersWhereUniqueInput_schema_1 = require("./sso_providersWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => sso_providersCreateWithoutSso_domainsInput_schema_1.sso_providersCreateWithoutSso_domainsInputObjectSchema),
        zod_1.z.lazy(() => sso_providersUncheckedCreateWithoutSso_domainsInput_schema_1.sso_providersUncheckedCreateWithoutSso_domainsInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => sso_providersCreateOrConnectWithoutSso_domainsInput_schema_1.sso_providersCreateOrConnectWithoutSso_domainsInputObjectSchema)
        .optional(),
    connect: zod_1.z
        .lazy(() => sso_providersWhereUniqueInput_schema_1.sso_providersWhereUniqueInputObjectSchema)
        .optional(),
})
    .strict();
exports.sso_providersCreateNestedOneWithoutSso_domainsInputObjectSchema = Schema;
