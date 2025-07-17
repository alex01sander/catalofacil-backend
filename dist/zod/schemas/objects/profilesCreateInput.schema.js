"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profilesCreateInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersCreateNestedOneWithoutProfilesInput_schema_1 = require("./usersCreateNestedOneWithoutProfilesInput.schema");
const Schema = zod_1.z
    .object({
    email: zod_1.z.string(),
    full_name: zod_1.z.string().optional().nullable(),
    created_at: zod_1.z.coerce.date().optional().nullable(),
    updated_at: zod_1.z.coerce.date().optional().nullable(),
    users: zod_1.z.lazy(() => usersCreateNestedOneWithoutProfilesInput_schema_1.usersCreateNestedOneWithoutProfilesInputObjectSchema),
})
    .strict();
exports.profilesCreateInputObjectSchema = Schema;
