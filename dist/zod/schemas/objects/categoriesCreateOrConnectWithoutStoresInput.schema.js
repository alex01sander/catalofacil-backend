"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesCreateOrConnectWithoutStoresInputObjectSchema = void 0;
const zod_1 = require("zod");
const categoriesWhereUniqueInput_schema_1 = require("./categoriesWhereUniqueInput.schema");
const categoriesCreateWithoutStoresInput_schema_1 = require("./categoriesCreateWithoutStoresInput.schema");
const categoriesUncheckedCreateWithoutStoresInput_schema_1 = require("./categoriesUncheckedCreateWithoutStoresInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => categoriesWhereUniqueInput_schema_1.categoriesWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => categoriesCreateWithoutStoresInput_schema_1.categoriesCreateWithoutStoresInputObjectSchema),
        zod_1.z.lazy(() => categoriesUncheckedCreateWithoutStoresInput_schema_1.categoriesUncheckedCreateWithoutStoresInputObjectSchema),
    ]),
})
    .strict();
exports.categoriesCreateOrConnectWithoutStoresInputObjectSchema = Schema;
