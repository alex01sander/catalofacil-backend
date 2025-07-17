"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enumone_time_token_typeFieldUpdateOperationsInputObjectSchema = void 0;
const zod_1 = require("zod");
const one_time_token_type_schema_1 = require("../enums/one_time_token_type.schema");
const Schema = zod_1.z
    .object({
    set: zod_1.z.lazy(() => one_time_token_type_schema_1.one_time_token_typeSchema).optional(),
})
    .strict();
exports.Enumone_time_token_typeFieldUpdateOperationsInputObjectSchema = Schema;
