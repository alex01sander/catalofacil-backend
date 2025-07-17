"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.one_time_tokensUpdateWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const one_time_token_type_schema_1 = require("../enums/one_time_token_type.schema");
const Enumone_time_token_typeFieldUpdateOperationsInput_schema_1 = require("./Enumone_time_token_typeFieldUpdateOperationsInput.schema");
const DateTimeFieldUpdateOperationsInput_schema_1 = require("./DateTimeFieldUpdateOperationsInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    token_type: zod_1.z
        .union([
        zod_1.z.lazy(() => one_time_token_type_schema_1.one_time_token_typeSchema),
        zod_1.z.lazy(() => Enumone_time_token_typeFieldUpdateOperationsInput_schema_1.Enumone_time_token_typeFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    token_hash: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    relates_to: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    created_at: zod_1.z
        .union([
        zod_1.z.coerce.date(),
        zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    updated_at: zod_1.z
        .union([
        zod_1.z.coerce.date(),
        zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.one_time_tokensUpdateWithoutUsersInputObjectSchema = Schema;
