"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.salesWhereInputObjectSchema = void 0;
const zod_1 = require("zod");
const UuidFilter_schema_1 = require("./UuidFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const IntFilter_schema_1 = require("./IntFilter.schema");
const DecimalFilter_schema_1 = require("./DecimalFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const UuidNullableFilter_schema_1 = require("./UuidNullableFilter.schema");
const StoresRelationFilter_schema_1 = require("./StoresRelationFilter.schema");
const storesWhereInput_schema_1 = require("./storesWhereInput.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.salesWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.salesWhereInputObjectSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.salesWhereInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.salesWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.salesWhereInputObjectSchema).array(),
    ])
        .optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => UuidFilter_schema_1.UuidFilterObjectSchema), zod_1.z.string()]).optional(),
    user_id: zod_1.z
        .union([zod_1.z.lazy(() => UuidFilter_schema_1.UuidFilterObjectSchema), zod_1.z.string()])
        .optional(),
    product_name: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
    quantity: zod_1.z
        .union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema), zod_1.z.number()])
        .optional(),
    unit_price: zod_1.z
        .union([zod_1.z.lazy(() => DecimalFilter_schema_1.DecimalFilterObjectSchema), zod_1.z.number()])
        .optional(),
    total_price: zod_1.z
        .union([zod_1.z.lazy(() => DecimalFilter_schema_1.DecimalFilterObjectSchema), zod_1.z.number()])
        .optional(),
    sale_date: zod_1.z
        .union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema), zod_1.z.coerce.date()])
        .optional(),
    status: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
    created_at: zod_1.z
        .union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema), zod_1.z.coerce.date()])
        .optional(),
    updated_at: zod_1.z
        .union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema), zod_1.z.coerce.date()])
        .optional(),
    store_id: zod_1.z
        .union([zod_1.z.lazy(() => UuidNullableFilter_schema_1.UuidNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    stores: zod_1.z
        .union([
        zod_1.z.lazy(() => StoresRelationFilter_schema_1.StoresRelationFilterObjectSchema),
        zod_1.z.lazy(() => storesWhereInput_schema_1.storesWhereInputObjectSchema),
    ])
        .optional()
        .nullable(),
})
    .strict();
exports.salesWhereInputObjectSchema = Schema;
