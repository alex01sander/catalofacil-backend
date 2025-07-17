"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enumfactor_typeFieldUpdateOperationsInputObjectSchema = void 0;
const zod_1 = require("zod");
const factor_type_schema_1 = require("../enums/factor_type.schema");
const Schema = zod_1.z
    .object({
    set: zod_1.z.lazy(() => factor_type_schema_1.factor_typeSchema).optional(),
})
    .strict();
exports.Enumfactor_typeFieldUpdateOperationsInputObjectSchema = Schema;
