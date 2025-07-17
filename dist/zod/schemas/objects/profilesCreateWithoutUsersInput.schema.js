"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profilesCreateWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    email: zod_1.z.string(),
    full_name: zod_1.z.string().optional().nullable(),
    created_at: zod_1.z.coerce.date().optional().nullable(),
    updated_at: zod_1.z.coerce.date().optional().nullable(),
})
    .strict();
exports.profilesCreateWithoutUsersInputObjectSchema = Schema;
