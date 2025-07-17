"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstancesMinAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.literal(true).optional(),
    uuid: zod_1.z.literal(true).optional(),
    raw_base_config: zod_1.z.literal(true).optional(),
    created_at: zod_1.z.literal(true).optional(),
    updated_at: zod_1.z.literal(true).optional(),
})
    .strict();
exports.InstancesMinAggregateInputObjectSchema = Schema;
