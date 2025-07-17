"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.audit_log_entriesWhereUniqueInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
})
    .strict();
exports.audit_log_entriesWhereUniqueInputObjectSchema = Schema;
