"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionsRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const sessionsWhereInput_schema_1 = require("./sessionsWhereInput.schema");
const Schema = zod_1.z
    .object({
    is: zod_1.z
        .lazy(() => sessionsWhereInput_schema_1.sessionsWhereInputObjectSchema)
        .optional()
        .nullable(),
    isNot: zod_1.z
        .lazy(() => sessionsWhereInput_schema_1.sessionsWhereInputObjectSchema)
        .optional()
        .nullable(),
})
    .strict();
exports.SessionsRelationFilterObjectSchema = Schema;
