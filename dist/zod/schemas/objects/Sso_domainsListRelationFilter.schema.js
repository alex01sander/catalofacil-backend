"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sso_domainsListRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const sso_domainsWhereInput_schema_1 = require("./sso_domainsWhereInput.schema");
const Schema = zod_1.z
    .object({
    every: zod_1.z.lazy(() => sso_domainsWhereInput_schema_1.sso_domainsWhereInputObjectSchema).optional(),
    some: zod_1.z.lazy(() => sso_domainsWhereInput_schema_1.sso_domainsWhereInputObjectSchema).optional(),
    none: zod_1.z.lazy(() => sso_domainsWhereInput_schema_1.sso_domainsWhereInputObjectSchema).optional(),
})
    .strict();
exports.Sso_domainsListRelationFilterObjectSchema = Schema;
