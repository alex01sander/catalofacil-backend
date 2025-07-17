"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Saml_relay_statesListRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const saml_relay_statesWhereInput_schema_1 = require("./saml_relay_statesWhereInput.schema");
const Schema = zod_1.z
    .object({
    every: zod_1.z.lazy(() => saml_relay_statesWhereInput_schema_1.saml_relay_statesWhereInputObjectSchema).optional(),
    some: zod_1.z.lazy(() => saml_relay_statesWhereInput_schema_1.saml_relay_statesWhereInputObjectSchema).optional(),
    none: zod_1.z.lazy(() => saml_relay_statesWhereInput_schema_1.saml_relay_statesWhereInputObjectSchema).optional(),
})
    .strict();
exports.Saml_relay_statesListRelationFilterObjectSchema = Schema;
