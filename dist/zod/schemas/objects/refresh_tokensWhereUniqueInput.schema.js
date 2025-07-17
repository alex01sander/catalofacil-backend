"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refresh_tokensWhereUniqueInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.bigint().optional(),
    token: zod_1.z.string().optional(),
})
    .strict();
exports.refresh_tokensWhereUniqueInputObjectSchema = Schema;
