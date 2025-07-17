"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storesCreateNestedOneWithoutOrdersInputObjectSchema = void 0;
const zod_1 = require("zod");
const storesCreateWithoutOrdersInput_schema_1 = require("./storesCreateWithoutOrdersInput.schema");
const storesUncheckedCreateWithoutOrdersInput_schema_1 = require("./storesUncheckedCreateWithoutOrdersInput.schema");
const storesCreateOrConnectWithoutOrdersInput_schema_1 = require("./storesCreateOrConnectWithoutOrdersInput.schema");
const storesWhereUniqueInput_schema_1 = require("./storesWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => storesCreateWithoutOrdersInput_schema_1.storesCreateWithoutOrdersInputObjectSchema),
        zod_1.z.lazy(() => storesUncheckedCreateWithoutOrdersInput_schema_1.storesUncheckedCreateWithoutOrdersInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => storesCreateOrConnectWithoutOrdersInput_schema_1.storesCreateOrConnectWithoutOrdersInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => storesWhereUniqueInput_schema_1.storesWhereUniqueInputObjectSchema).optional(),
})
    .strict();
exports.storesCreateNestedOneWithoutOrdersInputObjectSchema = Schema;
