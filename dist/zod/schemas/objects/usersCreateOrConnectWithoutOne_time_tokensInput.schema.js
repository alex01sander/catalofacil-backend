"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersCreateOrConnectWithoutOne_time_tokensInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersWhereUniqueInput_schema_1 = require("./usersWhereUniqueInput.schema");
const usersCreateWithoutOne_time_tokensInput_schema_1 = require("./usersCreateWithoutOne_time_tokensInput.schema");
const usersUncheckedCreateWithoutOne_time_tokensInput_schema_1 = require("./usersUncheckedCreateWithoutOne_time_tokensInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => usersWhereUniqueInput_schema_1.usersWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => usersCreateWithoutOne_time_tokensInput_schema_1.usersCreateWithoutOne_time_tokensInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedCreateWithoutOne_time_tokensInput_schema_1.usersUncheckedCreateWithoutOne_time_tokensInputObjectSchema),
    ]),
})
    .strict();
exports.usersCreateOrConnectWithoutOne_time_tokensInputObjectSchema = Schema;
