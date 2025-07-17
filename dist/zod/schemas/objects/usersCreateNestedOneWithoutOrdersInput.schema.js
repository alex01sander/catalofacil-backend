"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersCreateNestedOneWithoutOrdersInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersCreateWithoutOrdersInput_schema_1 = require("./usersCreateWithoutOrdersInput.schema");
const usersUncheckedCreateWithoutOrdersInput_schema_1 = require("./usersUncheckedCreateWithoutOrdersInput.schema");
const usersCreateOrConnectWithoutOrdersInput_schema_1 = require("./usersCreateOrConnectWithoutOrdersInput.schema");
const usersWhereUniqueInput_schema_1 = require("./usersWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => usersCreateWithoutOrdersInput_schema_1.usersCreateWithoutOrdersInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedCreateWithoutOrdersInput_schema_1.usersUncheckedCreateWithoutOrdersInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => usersCreateOrConnectWithoutOrdersInput_schema_1.usersCreateOrConnectWithoutOrdersInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => usersWhereUniqueInput_schema_1.usersWhereUniqueInputObjectSchema).optional(),
})
    .strict();
exports.usersCreateNestedOneWithoutOrdersInputObjectSchema = Schema;
