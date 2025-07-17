"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enumcode_challenge_methodFieldUpdateOperationsInputObjectSchema = void 0;
const zod_1 = require("zod");
const code_challenge_method_schema_1 = require("../enums/code_challenge_method.schema");
const Schema = zod_1.z
    .object({
    set: zod_1.z.lazy(() => code_challenge_method_schema_1.code_challenge_methodSchema).optional(),
})
    .strict();
exports.Enumcode_challenge_methodFieldUpdateOperationsInputObjectSchema = Schema;
