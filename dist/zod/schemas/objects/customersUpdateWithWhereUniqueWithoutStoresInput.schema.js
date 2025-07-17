"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customersUpdateWithWhereUniqueWithoutStoresInputObjectSchema = void 0;
const zod_1 = require("zod");
const customersWhereUniqueInput_schema_1 = require("./customersWhereUniqueInput.schema");
const customersUpdateWithoutStoresInput_schema_1 = require("./customersUpdateWithoutStoresInput.schema");
const customersUncheckedUpdateWithoutStoresInput_schema_1 = require("./customersUncheckedUpdateWithoutStoresInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => customersWhereUniqueInput_schema_1.customersWhereUniqueInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => customersUpdateWithoutStoresInput_schema_1.customersUpdateWithoutStoresInputObjectSchema),
        zod_1.z.lazy(() => customersUncheckedUpdateWithoutStoresInput_schema_1.customersUncheckedUpdateWithoutStoresInputObjectSchema),
    ]),
})
    .strict();
exports.customersUpdateWithWhereUniqueWithoutStoresInputObjectSchema = Schema;
