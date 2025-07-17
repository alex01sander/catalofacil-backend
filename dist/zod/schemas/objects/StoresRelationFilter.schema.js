"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoresRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const storesWhereInput_schema_1 = require("./storesWhereInput.schema");
const Schema = zod_1.z
    .object({
    is: zod_1.z
        .lazy(() => storesWhereInput_schema_1.storesWhereInputObjectSchema)
        .optional()
        .nullable(),
    isNot: zod_1.z
        .lazy(() => storesWhereInput_schema_1.storesWhereInputObjectSchema)
        .optional()
        .nullable(),
})
    .strict();
exports.StoresRelationFilterObjectSchema = Schema;
