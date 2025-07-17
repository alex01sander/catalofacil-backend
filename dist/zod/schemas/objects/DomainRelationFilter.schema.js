"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const DomainWhereInput_schema_1 = require("./DomainWhereInput.schema");
const Schema = zod_1.z
    .object({
    is: zod_1.z
        .lazy(() => DomainWhereInput_schema_1.DomainWhereInputObjectSchema)
        .optional()
        .nullable(),
    isNot: zod_1.z
        .lazy(() => DomainWhereInput_schema_1.DomainWhereInputObjectSchema)
        .optional()
        .nullable(),
})
    .strict();
exports.DomainRelationFilterObjectSchema = Schema;
