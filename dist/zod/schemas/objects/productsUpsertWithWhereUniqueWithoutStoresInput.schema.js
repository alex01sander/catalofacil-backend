"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsUpsertWithWhereUniqueWithoutStoresInputObjectSchema = void 0;
const zod_1 = require("zod");
const productsWhereUniqueInput_schema_1 = require("./productsWhereUniqueInput.schema");
const productsUpdateWithoutStoresInput_schema_1 = require("./productsUpdateWithoutStoresInput.schema");
const productsUncheckedUpdateWithoutStoresInput_schema_1 = require("./productsUncheckedUpdateWithoutStoresInput.schema");
const productsCreateWithoutStoresInput_schema_1 = require("./productsCreateWithoutStoresInput.schema");
const productsUncheckedCreateWithoutStoresInput_schema_1 = require("./productsUncheckedCreateWithoutStoresInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => productsWhereUniqueInput_schema_1.productsWhereUniqueInputObjectSchema),
    update: zod_1.z.union([
        zod_1.z.lazy(() => productsUpdateWithoutStoresInput_schema_1.productsUpdateWithoutStoresInputObjectSchema),
        zod_1.z.lazy(() => productsUncheckedUpdateWithoutStoresInput_schema_1.productsUncheckedUpdateWithoutStoresInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => productsCreateWithoutStoresInput_schema_1.productsCreateWithoutStoresInputObjectSchema),
        zod_1.z.lazy(() => productsUncheckedCreateWithoutStoresInput_schema_1.productsUncheckedCreateWithoutStoresInputObjectSchema),
    ]),
})
    .strict();
exports.productsUpsertWithWhereUniqueWithoutStoresInputObjectSchema = Schema;
