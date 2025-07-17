"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit_accountsRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const credit_accountsWhereInput_schema_1 = require("./credit_accountsWhereInput.schema");
const Schema = zod_1.z
    .object({
    is: zod_1.z
        .lazy(() => credit_accountsWhereInput_schema_1.credit_accountsWhereInputObjectSchema)
        .optional()
        .nullable(),
    isNot: zod_1.z
        .lazy(() => credit_accountsWhereInput_schema_1.credit_accountsWhereInputObjectSchema)
        .optional()
        .nullable(),
})
    .strict();
exports.Credit_accountsRelationFilterObjectSchema = Schema;
