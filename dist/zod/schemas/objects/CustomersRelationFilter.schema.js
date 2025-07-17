"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const customersWhereInput_schema_1 = require("./customersWhereInput.schema");
const Schema = zod_1.z
    .object({
    is: zod_1.z
        .lazy(() => customersWhereInput_schema_1.customersWhereInputObjectSchema)
        .optional()
        .nullable(),
    isNot: zod_1.z
        .lazy(() => customersWhereInput_schema_1.customersWhereInputObjectSchema)
        .optional()
        .nullable(),
})
    .strict();
exports.CustomersRelationFilterObjectSchema = Schema;
