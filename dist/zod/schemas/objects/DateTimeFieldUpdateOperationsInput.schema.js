"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeFieldUpdateOperationsInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    set: zod_1.z.coerce.date().optional(),
})
    .strict();
exports.DateTimeFieldUpdateOperationsInputObjectSchema = Schema;
