"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersSumAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    email_change_confirm_status: zod_1.z.literal(true).optional(),
})
    .strict();
exports.UsersSumAggregateInputObjectSchema = Schema;
