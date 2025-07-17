"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storesCreateNestedOneWithoutCategoriesInputObjectSchema = void 0;
const zod_1 = require("zod");
const storesCreateWithoutCategoriesInput_schema_1 = require("./storesCreateWithoutCategoriesInput.schema");
const storesUncheckedCreateWithoutCategoriesInput_schema_1 = require("./storesUncheckedCreateWithoutCategoriesInput.schema");
const storesCreateOrConnectWithoutCategoriesInput_schema_1 = require("./storesCreateOrConnectWithoutCategoriesInput.schema");
const storesWhereUniqueInput_schema_1 = require("./storesWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => storesCreateWithoutCategoriesInput_schema_1.storesCreateWithoutCategoriesInputObjectSchema),
        zod_1.z.lazy(() => storesUncheckedCreateWithoutCategoriesInput_schema_1.storesUncheckedCreateWithoutCategoriesInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => storesCreateOrConnectWithoutCategoriesInput_schema_1.storesCreateOrConnectWithoutCategoriesInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => storesWhereUniqueInput_schema_1.storesWhereUniqueInputObjectSchema).optional(),
})
    .strict();
exports.storesCreateNestedOneWithoutCategoriesInputObjectSchema = Schema;
