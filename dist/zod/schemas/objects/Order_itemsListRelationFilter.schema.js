"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order_itemsListRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const order_itemsWhereInput_schema_1 = require("./order_itemsWhereInput.schema");
const Schema = zod_1.z
    .object({
    every: zod_1.z.lazy(() => order_itemsWhereInput_schema_1.order_itemsWhereInputObjectSchema).optional(),
    some: zod_1.z.lazy(() => order_itemsWhereInput_schema_1.order_itemsWhereInputObjectSchema).optional(),
    none: zod_1.z.lazy(() => order_itemsWhereInput_schema_1.order_itemsWhereInputObjectSchema).optional(),
})
    .strict();
exports.Order_itemsListRelationFilterObjectSchema = Schema;
