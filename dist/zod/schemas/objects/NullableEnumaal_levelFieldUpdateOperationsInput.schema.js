"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableEnumaal_levelFieldUpdateOperationsInputObjectSchema = void 0;
const zod_1 = require("zod");
const aal_level_schema_1 = require("../enums/aal_level.schema");
const Schema = zod_1.z
    .object({
    set: zod_1.z
        .lazy(() => aal_level_schema_1.aal_levelSchema)
        .optional()
        .nullable(),
})
    .strict();
exports.NullableEnumaal_levelFieldUpdateOperationsInputObjectSchema = Schema;
