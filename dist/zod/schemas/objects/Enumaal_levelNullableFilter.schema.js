"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enumaal_levelNullableFilterObjectSchema = void 0;
const zod_1 = require("zod");
const aal_level_schema_1 = require("../enums/aal_level.schema");
const NestedEnumaal_levelNullableFilter_schema_1 = require("./NestedEnumaal_levelNullableFilter.schema");
const Schema = zod_1.z
    .object({
    equals: zod_1.z
        .lazy(() => aal_level_schema_1.aal_levelSchema)
        .optional()
        .nullable(),
    in: zod_1.z
        .union([
        zod_1.z.lazy(() => aal_level_schema_1.aal_levelSchema).array(),
        zod_1.z.lazy(() => aal_level_schema_1.aal_levelSchema),
    ])
        .optional()
        .nullable(),
    notIn: zod_1.z
        .union([
        zod_1.z.lazy(() => aal_level_schema_1.aal_levelSchema).array(),
        zod_1.z.lazy(() => aal_level_schema_1.aal_levelSchema),
    ])
        .optional()
        .nullable(),
    not: zod_1.z
        .union([
        zod_1.z.lazy(() => aal_level_schema_1.aal_levelSchema),
        zod_1.z.lazy(() => NestedEnumaal_levelNullableFilter_schema_1.NestedEnumaal_levelNullableFilterObjectSchema),
    ])
        .optional()
        .nullable(),
})
    .strict();
exports.Enumaal_levelNullableFilterObjectSchema = Schema;
