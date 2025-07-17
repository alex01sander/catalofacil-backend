"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller_adminsRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const controller_adminsWhereInput_schema_1 = require("./controller_adminsWhereInput.schema");
const Schema = zod_1.z
    .object({
    is: zod_1.z
        .lazy(() => controller_adminsWhereInput_schema_1.controller_adminsWhereInputObjectSchema)
        .optional()
        .nullable(),
    isNot: zod_1.z
        .lazy(() => controller_adminsWhereInput_schema_1.controller_adminsWhereInputObjectSchema)
        .optional()
        .nullable(),
})
    .strict();
exports.Controller_adminsRelationFilterObjectSchema = Schema;
