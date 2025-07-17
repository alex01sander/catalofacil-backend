"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refresh_tokensUpdateManyWithWhereWithoutSessionsInputObjectSchema = void 0;
const zod_1 = require("zod");
const refresh_tokensScalarWhereInput_schema_1 = require("./refresh_tokensScalarWhereInput.schema");
const refresh_tokensUpdateManyMutationInput_schema_1 = require("./refresh_tokensUpdateManyMutationInput.schema");
const refresh_tokensUncheckedUpdateManyWithoutRefresh_tokensInput_schema_1 = require("./refresh_tokensUncheckedUpdateManyWithoutRefresh_tokensInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => refresh_tokensScalarWhereInput_schema_1.refresh_tokensScalarWhereInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => refresh_tokensUpdateManyMutationInput_schema_1.refresh_tokensUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => refresh_tokensUncheckedUpdateManyWithoutRefresh_tokensInput_schema_1.refresh_tokensUncheckedUpdateManyWithoutRefresh_tokensInputObjectSchema),
    ]),
})
    .strict();
exports.refresh_tokensUpdateManyWithWhereWithoutSessionsInputObjectSchema = Schema;
