"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mfa_challengesListRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const mfa_challengesWhereInput_schema_1 = require("./mfa_challengesWhereInput.schema");
const Schema = zod_1.z
    .object({
    every: zod_1.z.lazy(() => mfa_challengesWhereInput_schema_1.mfa_challengesWhereInputObjectSchema).optional(),
    some: zod_1.z.lazy(() => mfa_challengesWhereInput_schema_1.mfa_challengesWhereInputObjectSchema).optional(),
    none: zod_1.z.lazy(() => mfa_challengesWhereInput_schema_1.mfa_challengesWhereInputObjectSchema).optional(),
})
    .strict();
exports.Mfa_challengesListRelationFilterObjectSchema = Schema;
