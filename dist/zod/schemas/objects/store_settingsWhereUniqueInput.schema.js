"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store_settingsWhereUniqueInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    user_id: zod_1.z.string().optional(),
})
    .strict();
exports.store_settingsWhereUniqueInputObjectSchema = Schema;
