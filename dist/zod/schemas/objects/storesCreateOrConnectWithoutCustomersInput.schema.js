"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storesCreateOrConnectWithoutCustomersInputObjectSchema = void 0;
const zod_1 = require("zod");
const storesWhereUniqueInput_schema_1 = require("./storesWhereUniqueInput.schema");
const storesCreateWithoutCustomersInput_schema_1 = require("./storesCreateWithoutCustomersInput.schema");
const storesUncheckedCreateWithoutCustomersInput_schema_1 = require("./storesUncheckedCreateWithoutCustomersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => storesWhereUniqueInput_schema_1.storesWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => storesCreateWithoutCustomersInput_schema_1.storesCreateWithoutCustomersInputObjectSchema),
        zod_1.z.lazy(() => storesUncheckedCreateWithoutCustomersInput_schema_1.storesUncheckedCreateWithoutCustomersInputObjectSchema),
    ]),
})
    .strict();
exports.storesCreateOrConnectWithoutCustomersInputObjectSchema = Schema;
