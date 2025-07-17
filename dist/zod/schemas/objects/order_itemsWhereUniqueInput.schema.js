"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.order_itemsWhereUniqueInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
})
    .strict();
exports.order_itemsWhereUniqueInputObjectSchema = Schema;
