"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.salesUpdateManyWithWhereWithoutStoresInputObjectSchema = void 0;
const zod_1 = require("zod");
const salesScalarWhereInput_schema_1 = require("./salesScalarWhereInput.schema");
const salesUpdateManyMutationInput_schema_1 = require("./salesUpdateManyMutationInput.schema");
const salesUncheckedUpdateManyWithoutSalesInput_schema_1 = require("./salesUncheckedUpdateManyWithoutSalesInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => salesScalarWhereInput_schema_1.salesScalarWhereInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => salesUpdateManyMutationInput_schema_1.salesUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => salesUncheckedUpdateManyWithoutSalesInput_schema_1.salesUncheckedUpdateManyWithoutSalesInputObjectSchema),
    ]),
})
    .strict();
exports.salesUpdateManyWithWhereWithoutStoresInputObjectSchema = Schema;
