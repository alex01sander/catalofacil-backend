"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.one_time_tokensUpdateManyWithWhereWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const one_time_tokensScalarWhereInput_schema_1 = require("./one_time_tokensScalarWhereInput.schema");
const one_time_tokensUpdateManyMutationInput_schema_1 = require("./one_time_tokensUpdateManyMutationInput.schema");
const one_time_tokensUncheckedUpdateManyWithoutOne_time_tokensInput_schema_1 = require("./one_time_tokensUncheckedUpdateManyWithoutOne_time_tokensInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => one_time_tokensScalarWhereInput_schema_1.one_time_tokensScalarWhereInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => one_time_tokensUpdateManyMutationInput_schema_1.one_time_tokensUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => one_time_tokensUncheckedUpdateManyWithoutOne_time_tokensInput_schema_1.one_time_tokensUncheckedUpdateManyWithoutOne_time_tokensInputObjectSchema),
    ]),
})
    .strict();
exports.one_time_tokensUpdateManyWithWhereWithoutUsersInputObjectSchema = Schema;
