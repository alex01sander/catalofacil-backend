"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesUpdateWithWhereUniqueWithoutStoresInputObjectSchema = void 0;
const zod_1 = require("zod");
const categoriesWhereUniqueInput_schema_1 = require("./categoriesWhereUniqueInput.schema");
const categoriesUpdateWithoutStoresInput_schema_1 = require("./categoriesUpdateWithoutStoresInput.schema");
const categoriesUncheckedUpdateWithoutStoresInput_schema_1 = require("./categoriesUncheckedUpdateWithoutStoresInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => categoriesWhereUniqueInput_schema_1.categoriesWhereUniqueInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => categoriesUpdateWithoutStoresInput_schema_1.categoriesUpdateWithoutStoresInputObjectSchema),
        zod_1.z.lazy(() => categoriesUncheckedUpdateWithoutStoresInput_schema_1.categoriesUncheckedUpdateWithoutStoresInputObjectSchema),
    ]),
})
    .strict();
exports.categoriesUpdateWithWhereUniqueWithoutStoresInputObjectSchema = Schema;
