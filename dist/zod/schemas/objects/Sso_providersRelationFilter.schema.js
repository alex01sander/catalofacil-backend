"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sso_providersRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const sso_providersWhereInput_schema_1 = require("./sso_providersWhereInput.schema");
const Schema = zod_1.z
    .object({
    is: zod_1.z
        .lazy(() => sso_providersWhereInput_schema_1.sso_providersWhereInputObjectSchema)
        .optional()
        .nullable(),
    isNot: zod_1.z
        .lazy(() => sso_providersWhereInput_schema_1.sso_providersWhereInputObjectSchema)
        .optional()
        .nullable(),
})
    .strict();
exports.Sso_providersRelationFilterObjectSchema = Schema;
