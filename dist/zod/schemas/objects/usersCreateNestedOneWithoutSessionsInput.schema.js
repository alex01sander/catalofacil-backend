"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersCreateNestedOneWithoutSessionsInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersCreateWithoutSessionsInput_schema_1 = require("./usersCreateWithoutSessionsInput.schema");
const usersUncheckedCreateWithoutSessionsInput_schema_1 = require("./usersUncheckedCreateWithoutSessionsInput.schema");
const usersCreateOrConnectWithoutSessionsInput_schema_1 = require("./usersCreateOrConnectWithoutSessionsInput.schema");
const usersWhereUniqueInput_schema_1 = require("./usersWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => usersCreateWithoutSessionsInput_schema_1.usersCreateWithoutSessionsInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedCreateWithoutSessionsInput_schema_1.usersUncheckedCreateWithoutSessionsInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => usersCreateOrConnectWithoutSessionsInput_schema_1.usersCreateOrConnectWithoutSessionsInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => usersWhereUniqueInput_schema_1.usersWhereUniqueInputObjectSchema).optional(),
})
    .strict();
exports.usersCreateNestedOneWithoutSessionsInputObjectSchema = Schema;
