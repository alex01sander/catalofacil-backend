"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enumfactor_statusFieldUpdateOperationsInputObjectSchema = void 0;
const zod_1 = require("zod");
const factor_status_schema_1 = require("../enums/factor_status.schema");
const Schema = zod_1.z
    .object({
    set: zod_1.z.lazy(() => factor_status_schema_1.factor_statusSchema).optional(),
})
    .strict();
exports.Enumfactor_statusFieldUpdateOperationsInputObjectSchema = Schema;
