"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionsListRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const sessionsWhereInput_schema_1 = require("./sessionsWhereInput.schema");
const Schema = zod_1.z
    .object({
    every: zod_1.z.lazy(() => sessionsWhereInput_schema_1.sessionsWhereInputObjectSchema).optional(),
    some: zod_1.z.lazy(() => sessionsWhereInput_schema_1.sessionsWhereInputObjectSchema).optional(),
    none: zod_1.z.lazy(() => sessionsWhereInput_schema_1.sessionsWhereInputObjectSchema).optional(),
})
    .strict();
exports.SessionsListRelationFilterObjectSchema = Schema;
