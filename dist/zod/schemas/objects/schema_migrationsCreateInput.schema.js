"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema_migrationsCreateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    version: zod_1.z.string(),
})
    .strict();
exports.schema_migrationsCreateInputObjectSchema = Schema;
