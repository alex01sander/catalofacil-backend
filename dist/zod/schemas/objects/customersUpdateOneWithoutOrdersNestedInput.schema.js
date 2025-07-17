"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customersUpdateOneWithoutOrdersNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const customersCreateWithoutOrdersInput_schema_1 = require("./customersCreateWithoutOrdersInput.schema");
const customersUncheckedCreateWithoutOrdersInput_schema_1 = require("./customersUncheckedCreateWithoutOrdersInput.schema");
const customersCreateOrConnectWithoutOrdersInput_schema_1 = require("./customersCreateOrConnectWithoutOrdersInput.schema");
const customersUpsertWithoutOrdersInput_schema_1 = require("./customersUpsertWithoutOrdersInput.schema");
const customersWhereUniqueInput_schema_1 = require("./customersWhereUniqueInput.schema");
const customersUpdateWithoutOrdersInput_schema_1 = require("./customersUpdateWithoutOrdersInput.schema");
const customersUncheckedUpdateWithoutOrdersInput_schema_1 = require("./customersUncheckedUpdateWithoutOrdersInput.schema");
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
    upsert: zod_1.z
        .lazy(() => customersUpsertWithoutOrdersInput_schema_1.customersUpsertWithoutOrdersInputObjectSchema)
        .optional(),
    disconnect: zod_1.z.boolean().optional(),
    delete: zod_1.z.boolean().optional(),
    connect: zod_1.z.lazy(() => customersWhereUniqueInput_schema_1.customersWhereUniqueInputObjectSchema).optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => customersUpdateWithoutOrdersInput_schema_1.customersUpdateWithoutOrdersInputObjectSchema),
        zod_1.z.lazy(() => customersUncheckedUpdateWithoutOrdersInput_schema_1.customersUncheckedUpdateWithoutOrdersInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.customersUpdateOneWithoutOrdersNestedInputObjectSchema = Schema;
