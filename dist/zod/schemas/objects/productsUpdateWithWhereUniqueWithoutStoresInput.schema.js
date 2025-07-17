"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsUpdateWithWhereUniqueWithoutStoresInputObjectSchema = void 0;
const zod_1 = require("zod");
const productsWhereUniqueInput_schema_1 = require("./productsWhereUniqueInput.schema");
const productsUpdateWithoutStoresInput_schema_1 = require("./productsUpdateWithoutStoresInput.schema");
const productsUncheckedUpdateWithoutStoresInput_schema_1 = require("./productsUncheckedUpdateWithoutStoresInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => productsWhereUniqueInput_schema_1.productsWhereUniqueInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => productsUpdateWithoutStoresInput_schema_1.productsUpdateWithoutStoresInputObjectSchema),
        zod_1.z.lazy(() => productsUncheckedUpdateWithoutStoresInput_schema_1.productsUncheckedUpdateWithoutStoresInputObjectSchema),
    ]),
})
    .strict();
exports.productsUpdateWithWhereUniqueWithoutStoresInputObjectSchema = Schema;
