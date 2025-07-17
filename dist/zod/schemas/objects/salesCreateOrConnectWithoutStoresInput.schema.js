"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.salesCreateOrConnectWithoutStoresInputObjectSchema = void 0;
const zod_1 = require("zod");
const salesWhereUniqueInput_schema_1 = require("./salesWhereUniqueInput.schema");
const salesCreateWithoutStoresInput_schema_1 = require("./salesCreateWithoutStoresInput.schema");
const salesUncheckedCreateWithoutStoresInput_schema_1 = require("./salesUncheckedCreateWithoutStoresInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => salesWhereUniqueInput_schema_1.salesWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => salesCreateWithoutStoresInput_schema_1.salesCreateWithoutStoresInputObjectSchema),
        zod_1.z.lazy(() => salesUncheckedCreateWithoutStoresInput_schema_1.salesUncheckedCreateWithoutStoresInputObjectSchema),
    ]),
})
    .strict();
exports.salesCreateOrConnectWithoutStoresInputObjectSchema = Schema;
