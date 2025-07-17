"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saml_providersUpdateWithWhereUniqueWithoutSso_providersInputObjectSchema = void 0;
const zod_1 = require("zod");
const saml_providersWhereUniqueInput_schema_1 = require("./saml_providersWhereUniqueInput.schema");
const saml_providersUpdateWithoutSso_providersInput_schema_1 = require("./saml_providersUpdateWithoutSso_providersInput.schema");
const saml_providersUncheckedUpdateWithoutSso_providersInput_schema_1 = require("./saml_providersUncheckedUpdateWithoutSso_providersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => saml_providersWhereUniqueInput_schema_1.saml_providersWhereUniqueInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => saml_providersUpdateWithoutSso_providersInput_schema_1.saml_providersUpdateWithoutSso_providersInputObjectSchema),
        zod_1.z.lazy(() => saml_providersUncheckedUpdateWithoutSso_providersInput_schema_1.saml_providersUncheckedUpdateWithoutSso_providersInputObjectSchema),
    ]),
})
    .strict();
exports.saml_providersUpdateWithWhereUniqueWithoutSso_providersInputObjectSchema = Schema;
