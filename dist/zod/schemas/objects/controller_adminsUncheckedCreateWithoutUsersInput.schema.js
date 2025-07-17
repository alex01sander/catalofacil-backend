"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller_adminsUncheckedCreateWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    email: zod_1.z.string(),
    created_at: zod_1.z.coerce.date().optional(),
    updated_at: zod_1.z.coerce.date().optional(),
})
    .strict();
exports.controller_adminsUncheckedCreateWithoutUsersInputObjectSchema = Schema;
