"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersUpdateManyWithWhereWithoutCustomersInputObjectSchema = void 0;
const zod_1 = require("zod");
const ordersScalarWhereInput_schema_1 = require("./ordersScalarWhereInput.schema");
const ordersUpdateManyMutationInput_schema_1 = require("./ordersUpdateManyMutationInput.schema");
const ordersUncheckedUpdateManyWithoutOrdersInput_schema_1 = require("./ordersUncheckedUpdateManyWithoutOrdersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => ordersScalarWhereInput_schema_1.ordersScalarWhereInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => ordersUpdateManyMutationInput_schema_1.ordersUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => ordersUncheckedUpdateManyWithoutOrdersInput_schema_1.ordersUncheckedUpdateManyWithoutOrdersInputObjectSchema),
    ]),
})
    .strict();
exports.ordersUpdateManyWithWhereWithoutCustomersInputObjectSchema = Schema;
