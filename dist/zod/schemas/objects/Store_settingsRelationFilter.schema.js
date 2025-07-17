"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store_settingsRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const store_settingsWhereInput_schema_1 = require("./store_settingsWhereInput.schema");
const Schema = zod_1.z
    .object({
    is: zod_1.z
        .lazy(() => store_settingsWhereInput_schema_1.store_settingsWhereInputObjectSchema)
        .optional()
        .nullable(),
    isNot: zod_1.z
        .lazy(() => store_settingsWhereInput_schema_1.store_settingsWhereInputObjectSchema)
        .optional()
        .nullable(),
})
    .strict();
exports.Store_settingsRelationFilterObjectSchema = Schema;
