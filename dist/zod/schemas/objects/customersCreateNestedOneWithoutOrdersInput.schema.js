"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customersCreateNestedOneWithoutOrdersInputObjectSchema = void 0;
const zod_1 = require("zod");
const customersCreateWithoutOrdersInput_schema_1 = require("./customersCreateWithoutOrdersInput.schema");
const customersUncheckedCreateWithoutOrdersInput_schema_1 = require("./customersUncheckedCreateWithoutOrdersInput.schema");
const customersCreateOrConnectWithoutOrdersInput_schema_1 = require("./customersCreateOrConnectWithoutOrdersInput.schema");
const customersWhereUniqueInput_schema_1 = require("./customersWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => customersCreateWithoutOrdersInput_schema_1.customersCreateWithoutOrdersInputObjectSchema),
        zod_1.z.lazy(() => customersUncheckedCreateWithoutOrdersInput_schema_1.customersUncheckedCreateWithoutOrdersInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => customersCreateOrConnectWithoutOrdersInput_schema_1.customersCreateOrConnectWithoutOrdersInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => customersWhereUniqueInput_schema_1.customersWhereUniqueInputObjectSchema).optional(),
})
    .strict();
exports.customersCreateNestedOneWithoutOrdersInputObjectSchema = Schema;
