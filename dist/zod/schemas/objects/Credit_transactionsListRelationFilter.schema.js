"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit_transactionsListRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const credit_transactionsWhereInput_schema_1 = require("./credit_transactionsWhereInput.schema");
const Schema = zod_1.z
    .object({
    every: zod_1.z.lazy(() => credit_transactionsWhereInput_schema_1.credit_transactionsWhereInputObjectSchema).optional(),
    some: zod_1.z.lazy(() => credit_transactionsWhereInput_schema_1.credit_transactionsWhereInputObjectSchema).optional(),
    none: zod_1.z.lazy(() => credit_transactionsWhereInput_schema_1.credit_transactionsWhereInputObjectSchema).optional(),
})
    .strict();
exports.Credit_transactionsListRelationFilterObjectSchema = Schema;
