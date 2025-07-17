"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.one_time_tokensUpsertWithWhereUniqueWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const one_time_tokensWhereUniqueInput_schema_1 = require("./one_time_tokensWhereUniqueInput.schema");
const one_time_tokensUpdateWithoutUsersInput_schema_1 = require("./one_time_tokensUpdateWithoutUsersInput.schema");
const one_time_tokensUncheckedUpdateWithoutUsersInput_schema_1 = require("./one_time_tokensUncheckedUpdateWithoutUsersInput.schema");
const one_time_tokensCreateWithoutUsersInput_schema_1 = require("./one_time_tokensCreateWithoutUsersInput.schema");
const one_time_tokensUncheckedCreateWithoutUsersInput_schema_1 = require("./one_time_tokensUncheckedCreateWithoutUsersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => one_time_tokensWhereUniqueInput_schema_1.one_time_tokensWhereUniqueInputObjectSchema),
    update: zod_1.z.union([
        zod_1.z.lazy(() => one_time_tokensUpdateWithoutUsersInput_schema_1.one_time_tokensUpdateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => one_time_tokensUncheckedUpdateWithoutUsersInput_schema_1.one_time_tokensUncheckedUpdateWithoutUsersInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => one_time_tokensCreateWithoutUsersInput_schema_1.one_time_tokensCreateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => one_time_tokensUncheckedCreateWithoutUsersInput_schema_1.one_time_tokensUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
})
    .strict();
exports.one_time_tokensUpsertWithWhereUniqueWithoutUsersInputObjectSchema = Schema;
