"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saml_providersUpdateManyWithWhereWithoutSso_providersInputObjectSchema = void 0;
const zod_1 = require("zod");
const saml_providersScalarWhereInput_schema_1 = require("./saml_providersScalarWhereInput.schema");
const saml_providersUpdateManyMutationInput_schema_1 = require("./saml_providersUpdateManyMutationInput.schema");
const saml_providersUncheckedUpdateManyWithoutSaml_providersInput_schema_1 = require("./saml_providersUncheckedUpdateManyWithoutSaml_providersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => saml_providersScalarWhereInput_schema_1.saml_providersScalarWhereInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => saml_providersUpdateManyMutationInput_schema_1.saml_providersUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => saml_providersUncheckedUpdateManyWithoutSaml_providersInput_schema_1.saml_providersUncheckedUpdateManyWithoutSaml_providersInputObjectSchema),
    ]),
})
    .strict();
exports.saml_providersUpdateManyWithWhereWithoutSso_providersInputObjectSchema = Schema;
