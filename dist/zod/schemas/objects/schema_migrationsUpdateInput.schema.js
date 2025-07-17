"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema_migrationsUpdateInputObjectSchema = void 0;
const zod_1 = require("zod");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const Schema = zod_1.z
    .object({
    version: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.schema_migrationsUpdateInputObjectSchema = Schema;
