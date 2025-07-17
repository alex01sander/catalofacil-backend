"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.salesCreateInputObjectSchema = void 0;
const zod_1 = require("zod");
const storesCreateNestedOneWithoutSalesInput_schema_1 = require("./storesCreateNestedOneWithoutSalesInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    user_id: zod_1.z.string(),
    product_name: zod_1.z.string(),
    quantity: zod_1.z.number().optional(),
    unit_price: zod_1.z.number(),
    total_price: zod_1.z.number(),
    sale_date: zod_1.z.coerce.date(),
    status: zod_1.z.string().optional(),
    created_at: zod_1.z.coerce.date().optional(),
    updated_at: zod_1.z.coerce.date().optional(),
    stores: zod_1.z
        .lazy(() => storesCreateNestedOneWithoutSalesInput_schema_1.storesCreateNestedOneWithoutSalesInputObjectSchema)
        .optional(),
})
    .strict();
exports.salesCreateInputObjectSchema = Schema;
