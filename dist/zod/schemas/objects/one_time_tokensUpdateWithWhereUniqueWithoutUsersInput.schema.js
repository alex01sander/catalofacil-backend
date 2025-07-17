"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.one_time_tokensUpdateWithWhereUniqueWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const one_time_tokensWhereUniqueInput_schema_1 = require("./one_time_tokensWhereUniqueInput.schema");
const one_time_tokensUpdateWithoutUsersInput_schema_1 = require("./one_time_tokensUpdateWithoutUsersInput.schema");
const one_time_tokensUncheckedUpdateWithoutUsersInput_schema_1 = require("./one_time_tokensUncheckedUpdateWithoutUsersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => one_time_tokensWhereUniqueInput_schema_1.one_time_tokensWhereUniqueInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => one_time_tokensUpdateWithoutUsersInput_schema_1.one_time_tokensUpdateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => one_time_tokensUncheckedUpdateWithoutUsersInput_schema_1.one_time_tokensUncheckedUpdateWithoutUsersInputObjectSchema),
    ]),
})
    .strict();
exports.one_time_tokensUpdateWithWhereUniqueWithoutUsersInputObjectSchema = Schema;
