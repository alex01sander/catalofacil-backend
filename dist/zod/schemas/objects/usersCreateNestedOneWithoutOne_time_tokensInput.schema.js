"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersCreateNestedOneWithoutOne_time_tokensInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersCreateWithoutOne_time_tokensInput_schema_1 = require("./usersCreateWithoutOne_time_tokensInput.schema");
const usersUncheckedCreateWithoutOne_time_tokensInput_schema_1 = require("./usersUncheckedCreateWithoutOne_time_tokensInput.schema");
const usersCreateOrConnectWithoutOne_time_tokensInput_schema_1 = require("./usersCreateOrConnectWithoutOne_time_tokensInput.schema");
const usersWhereUniqueInput_schema_1 = require("./usersWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => usersCreateWithoutOne_time_tokensInput_schema_1.usersCreateWithoutOne_time_tokensInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedCreateWithoutOne_time_tokensInput_schema_1.usersUncheckedCreateWithoutOne_time_tokensInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => usersCreateOrConnectWithoutOne_time_tokensInput_schema_1.usersCreateOrConnectWithoutOne_time_tokensInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => usersWhereUniqueInput_schema_1.usersWhereUniqueInputObjectSchema).optional(),
})
    .strict();
exports.usersCreateNestedOneWithoutOne_time_tokensInputObjectSchema = Schema;
