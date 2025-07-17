"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Saml_providersListRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const saml_providersWhereInput_schema_1 = require("./saml_providersWhereInput.schema");
const Schema = zod_1.z
    .object({
    every: zod_1.z.lazy(() => saml_providersWhereInput_schema_1.saml_providersWhereInputObjectSchema).optional(),
    some: zod_1.z.lazy(() => saml_providersWhereInput_schema_1.saml_providersWhereInputObjectSchema).optional(),
    none: zod_1.z.lazy(() => saml_providersWhereInput_schema_1.saml_providersWhereInputObjectSchema).optional(),
})
    .strict();
exports.Saml_providersListRelationFilterObjectSchema = Schema;
