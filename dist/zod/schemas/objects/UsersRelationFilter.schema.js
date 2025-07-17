"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const usersWhereInput_schema_1 = require("./usersWhereInput.schema");
const Schema = zod_1.z
    .object({
    is: zod_1.z
        .lazy(() => usersWhereInput_schema_1.usersWhereInputObjectSchema)
        .optional()
        .nullable(),
    isNot: zod_1.z
        .lazy(() => usersWhereInput_schema_1.usersWhereInputObjectSchema)
        .optional()
        .nullable(),
})
    .strict();
exports.UsersRelationFilterObjectSchema = Schema;
