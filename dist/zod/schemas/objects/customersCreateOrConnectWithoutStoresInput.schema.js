"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customersCreateOrConnectWithoutStoresInputObjectSchema = void 0;
const zod_1 = require("zod");
const customersWhereUniqueInput_schema_1 = require("./customersWhereUniqueInput.schema");
const customersCreateWithoutStoresInput_schema_1 = require("./customersCreateWithoutStoresInput.schema");
const customersUncheckedCreateWithoutStoresInput_schema_1 = require("./customersUncheckedCreateWithoutStoresInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => customersWhereUniqueInput_schema_1.customersWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => customersCreateWithoutStoresInput_schema_1.customersCreateWithoutStoresInputObjectSchema),
        zod_1.z.lazy(() => customersUncheckedCreateWithoutStoresInput_schema_1.customersUncheckedCreateWithoutStoresInputObjectSchema),
    ]),
})
    .strict();
exports.customersCreateOrConnectWithoutStoresInputObjectSchema = Schema;
