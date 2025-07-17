"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instancesUncheckedCreateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string(),
    uuid: zod_1.z.string().optional().nullable(),
    raw_base_config: zod_1.z.string().optional().nullable(),
    created_at: zod_1.z.coerce.date().optional().nullable(),
    updated_at: zod_1.z.coerce.date().optional().nullable(),
})
    .strict();
exports.instancesUncheckedCreateInputObjectSchema = Schema;
