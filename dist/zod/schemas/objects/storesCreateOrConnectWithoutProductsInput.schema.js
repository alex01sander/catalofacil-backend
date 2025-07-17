"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storesCreateOrConnectWithoutProductsInputObjectSchema = void 0;
const zod_1 = require("zod");
const storesWhereUniqueInput_schema_1 = require("./storesWhereUniqueInput.schema");
const storesCreateWithoutProductsInput_schema_1 = require("./storesCreateWithoutProductsInput.schema");
const storesUncheckedCreateWithoutProductsInput_schema_1 = require("./storesUncheckedCreateWithoutProductsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => storesWhereUniqueInput_schema_1.storesWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => storesCreateWithoutProductsInput_schema_1.storesCreateWithoutProductsInputObjectSchema),
        zod_1.z.lazy(() => storesUncheckedCreateWithoutProductsInput_schema_1.storesUncheckedCreateWithoutProductsInputObjectSchema),
    ]),
})
    .strict();
exports.storesCreateOrConnectWithoutProductsInputObjectSchema = Schema;
