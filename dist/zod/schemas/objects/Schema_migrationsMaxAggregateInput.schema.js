"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schema_migrationsMaxAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    version: zod_1.z.literal(true).optional(),
})
    .strict();
exports.Schema_migrationsMaxAggregateInputObjectSchema = Schema;
