"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sso_domainsUpdateManyWithWhereWithoutSso_providersInputObjectSchema = void 0;
const zod_1 = require("zod");
const sso_domainsScalarWhereInput_schema_1 = require("./sso_domainsScalarWhereInput.schema");
const sso_domainsUpdateManyMutationInput_schema_1 = require("./sso_domainsUpdateManyMutationInput.schema");
const sso_domainsUncheckedUpdateManyWithoutSso_domainsInput_schema_1 = require("./sso_domainsUncheckedUpdateManyWithoutSso_domainsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => sso_domainsScalarWhereInput_schema_1.sso_domainsScalarWhereInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => sso_domainsUpdateManyMutationInput_schema_1.sso_domainsUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => sso_domainsUncheckedUpdateManyWithoutSso_domainsInput_schema_1.sso_domainsUncheckedUpdateManyWithoutSso_domainsInputObjectSchema),
    ]),
})
    .strict();
exports.sso_domainsUpdateManyWithWhereWithoutSso_providersInputObjectSchema = Schema;
