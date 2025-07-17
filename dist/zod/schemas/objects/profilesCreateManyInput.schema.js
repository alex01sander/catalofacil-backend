"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profilesCreateManyInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string(),
    email: zod_1.z.string(),
    full_name: zod_1.z.string().optional().nullable(),
    created_at: zod_1.z.coerce.date().optional().nullable(),
    updated_at: zod_1.z.coerce.date().optional().nullable(),
})
    .strict();
exports.profilesCreateManyInputObjectSchema = Schema;
