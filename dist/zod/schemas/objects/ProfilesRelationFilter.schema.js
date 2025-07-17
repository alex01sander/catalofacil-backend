"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilesRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const profilesWhereInput_schema_1 = require("./profilesWhereInput.schema");
const Schema = zod_1.z
    .object({
    is: zod_1.z
        .lazy(() => profilesWhereInput_schema_1.profilesWhereInputObjectSchema)
        .optional()
        .nullable(),
    isNot: zod_1.z
        .lazy(() => profilesWhereInput_schema_1.profilesWhereInputObjectSchema)
        .optional()
        .nullable(),
})
    .strict();
exports.ProfilesRelationFilterObjectSchema = Schema;
