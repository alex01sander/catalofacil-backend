"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customersUpdateManyWithWhereWithoutStoresInputObjectSchema = void 0;
const zod_1 = require("zod");
const customersScalarWhereInput_schema_1 = require("./customersScalarWhereInput.schema");
const customersUpdateManyMutationInput_schema_1 = require("./customersUpdateManyMutationInput.schema");
const customersUncheckedUpdateManyWithoutCustomersInput_schema_1 = require("./customersUncheckedUpdateManyWithoutCustomersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => customersScalarWhereInput_schema_1.customersScalarWhereInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => customersUpdateManyMutationInput_schema_1.customersUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => customersUncheckedUpdateManyWithoutCustomersInput_schema_1.customersUncheckedUpdateManyWithoutCustomersInputObjectSchema),
    ]),
})
    .strict();
exports.customersUpdateManyWithWhereWithoutStoresInputObjectSchema = Schema;
