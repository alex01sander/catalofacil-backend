"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersSumOrderByAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const Schema = zod_1.z
    .object({
    email_change_confirm_status: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
})
    .strict();
exports.usersSumOrderByAggregateInputObjectSchema = Schema;
