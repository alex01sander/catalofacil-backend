"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customersUpsertWithWhereUniqueWithoutStoresInputObjectSchema = void 0;
const zod_1 = require("zod");
const customersWhereUniqueInput_schema_1 = require("./customersWhereUniqueInput.schema");
const customersUpdateWithoutStoresInput_schema_1 = require("./customersUpdateWithoutStoresInput.schema");
const customersUncheckedUpdateWithoutStoresInput_schema_1 = require("./customersUncheckedUpdateWithoutStoresInput.schema");
const customersCreateWithoutStoresInput_schema_1 = require("./customersCreateWithoutStoresInput.schema");
const customersUncheckedCreateWithoutStoresInput_schema_1 = require("./customersUncheckedCreateWithoutStoresInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => customersWhereUniqueInput_schema_1.customersWhereUniqueInputObjectSchema),
    update: zod_1.z.union([
        zod_1.z.lazy(() => customersUpdateWithoutStoresInput_schema_1.customersUpdateWithoutStoresInputObjectSchema),
        zod_1.z.lazy(() => customersUncheckedUpdateWithoutStoresInput_schema_1.customersUncheckedUpdateWithoutStoresInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => customersCreateWithoutStoresInput_schema_1.customersCreateWithoutStoresInputObjectSchema),
        zod_1.z.lazy(() => customersUncheckedCreateWithoutStoresInput_schema_1.customersUncheckedCreateWithoutStoresInputObjectSchema),
    ]),
})
    .strict();
exports.customersUpsertWithWhereUniqueWithoutStoresInputObjectSchema = Schema;
