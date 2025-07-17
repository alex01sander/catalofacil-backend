"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schema_migrationsCountAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    version: zod_1.z.literal(true).optional(),
    _all: zod_1.z.literal(true).optional(),
})
    .strict();
exports.Schema_migrationsCountAggregateInputObjectSchema = Schema;
