"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWhereUniqueInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    email: zod_1.z.string().optional(),
})
    .strict();
exports.UserWhereUniqueInputObjectSchema = Schema;
