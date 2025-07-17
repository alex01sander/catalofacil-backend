"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersListRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const ordersWhereInput_schema_1 = require("./ordersWhereInput.schema");
const Schema = zod_1.z
    .object({
    every: zod_1.z.lazy(() => ordersWhereInput_schema_1.ordersWhereInputObjectSchema).optional(),
    some: zod_1.z.lazy(() => ordersWhereInput_schema_1.ordersWhereInputObjectSchema).optional(),
    none: zod_1.z.lazy(() => ordersWhereInput_schema_1.ordersWhereInputObjectSchema).optional(),
})
    .strict();
exports.OrdersListRelationFilterObjectSchema = Schema;
