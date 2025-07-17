"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const ordersWhereInput_schema_1 = require("./ordersWhereInput.schema");
const Schema = zod_1.z
    .object({
    is: zod_1.z
        .lazy(() => ordersWhereInput_schema_1.ordersWhereInputObjectSchema)
        .optional()
        .nullable(),
    isNot: zod_1.z
        .lazy(() => ordersWhereInput_schema_1.ordersWhereInputObjectSchema)
        .optional()
        .nullable(),
})
    .strict();
exports.OrdersRelationFilterObjectSchema = Schema;
