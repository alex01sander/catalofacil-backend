"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersUpdateOneRequiredWithoutOne_time_tokensNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersCreateWithoutOne_time_tokensInput_schema_1 = require("./usersCreateWithoutOne_time_tokensInput.schema");
const usersUncheckedCreateWithoutOne_time_tokensInput_schema_1 = require("./usersUncheckedCreateWithoutOne_time_tokensInput.schema");
const usersCreateOrConnectWithoutOne_time_tokensInput_schema_1 = require("./usersCreateOrConnectWithoutOne_time_tokensInput.schema");
const usersUpsertWithoutOne_time_tokensInput_schema_1 = require("./usersUpsertWithoutOne_time_tokensInput.schema");
const usersWhereUniqueInput_schema_1 = require("./usersWhereUniqueInput.schema");
const usersUpdateWithoutOne_time_tokensInput_schema_1 = require("./usersUpdateWithoutOne_time_tokensInput.schema");
const usersUncheckedUpdateWithoutOne_time_tokensInput_schema_1 = require("./usersUncheckedUpdateWithoutOne_time_tokensInput.schema");
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
    upsert: zod_1.z
        .lazy(() => usersUpsertWithoutOne_time_tokensInput_schema_1.usersUpsertWithoutOne_time_tokensInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => usersWhereUniqueInput_schema_1.usersWhereUniqueInputObjectSchema).optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => usersUpdateWithoutOne_time_tokensInput_schema_1.usersUpdateWithoutOne_time_tokensInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedUpdateWithoutOne_time_tokensInput_schema_1.usersUncheckedUpdateWithoutOne_time_tokensInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.usersUpdateOneRequiredWithoutOne_time_tokensNestedInputObjectSchema = Schema;
