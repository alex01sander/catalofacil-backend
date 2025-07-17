"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.salesUpsertWithWhereUniqueWithoutStoresInputObjectSchema = void 0;
const zod_1 = require("zod");
const salesWhereUniqueInput_schema_1 = require("./salesWhereUniqueInput.schema");
const salesUpdateWithoutStoresInput_schema_1 = require("./salesUpdateWithoutStoresInput.schema");
const salesUncheckedUpdateWithoutStoresInput_schema_1 = require("./salesUncheckedUpdateWithoutStoresInput.schema");
const salesCreateWithoutStoresInput_schema_1 = require("./salesCreateWithoutStoresInput.schema");
const salesUncheckedCreateWithoutStoresInput_schema_1 = require("./salesUncheckedCreateWithoutStoresInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => salesWhereUniqueInput_schema_1.salesWhereUniqueInputObjectSchema),
    update: zod_1.z.union([
        zod_1.z.lazy(() => salesUpdateWithoutStoresInput_schema_1.salesUpdateWithoutStoresInputObjectSchema),
        zod_1.z.lazy(() => salesUncheckedUpdateWithoutStoresInput_schema_1.salesUncheckedUpdateWithoutStoresInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => salesCreateWithoutStoresInput_schema_1.salesCreateWithoutStoresInputObjectSchema),
        zod_1.z.lazy(() => salesUncheckedCreateWithoutStoresInput_schema_1.salesUncheckedCreateWithoutStoresInputObjectSchema),
    ]),
})
    .strict();
exports.salesUpsertWithWhereUniqueWithoutStoresInputObjectSchema = Schema;
