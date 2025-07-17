"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.salesUpdateWithWhereUniqueWithoutStoresInputObjectSchema = void 0;
const zod_1 = require("zod");
const salesWhereUniqueInput_schema_1 = require("./salesWhereUniqueInput.schema");
const salesUpdateWithoutStoresInput_schema_1 = require("./salesUpdateWithoutStoresInput.schema");
const salesUncheckedUpdateWithoutStoresInput_schema_1 = require("./salesUncheckedUpdateWithoutStoresInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => salesWhereUniqueInput_schema_1.salesWhereUniqueInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => salesUpdateWithoutStoresInput_schema_1.salesUpdateWithoutStoresInputObjectSchema),
        zod_1.z.lazy(() => salesUncheckedUpdateWithoutStoresInput_schema_1.salesUncheckedUpdateWithoutStoresInputObjectSchema),
    ]),
})
    .strict();
exports.salesUpdateWithWhereUniqueWithoutStoresInputObjectSchema = Schema;
