"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersUpsertWithoutOne_time_tokensInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersUpdateWithoutOne_time_tokensInput_schema_1 = require("./usersUpdateWithoutOne_time_tokensInput.schema");
const usersUncheckedUpdateWithoutOne_time_tokensInput_schema_1 = require("./usersUncheckedUpdateWithoutOne_time_tokensInput.schema");
const usersCreateWithoutOne_time_tokensInput_schema_1 = require("./usersCreateWithoutOne_time_tokensInput.schema");
const usersUncheckedCreateWithoutOne_time_tokensInput_schema_1 = require("./usersUncheckedCreateWithoutOne_time_tokensInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => usersUpdateWithoutOne_time_tokensInput_schema_1.usersUpdateWithoutOne_time_tokensInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedUpdateWithoutOne_time_tokensInput_schema_1.usersUncheckedUpdateWithoutOne_time_tokensInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => usersCreateWithoutOne_time_tokensInput_schema_1.usersCreateWithoutOne_time_tokensInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedCreateWithoutOne_time_tokensInput_schema_1.usersUncheckedCreateWithoutOne_time_tokensInputObjectSchema),
    ]),
})
    .strict();
exports.usersUpsertWithoutOne_time_tokensInputObjectSchema = Schema;
