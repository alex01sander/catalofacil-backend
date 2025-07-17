"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refresh_tokensUpdateWithWhereUniqueWithoutSessionsInputObjectSchema = void 0;
const zod_1 = require("zod");
const refresh_tokensWhereUniqueInput_schema_1 = require("./refresh_tokensWhereUniqueInput.schema");
const refresh_tokensUpdateWithoutSessionsInput_schema_1 = require("./refresh_tokensUpdateWithoutSessionsInput.schema");
const refresh_tokensUncheckedUpdateWithoutSessionsInput_schema_1 = require("./refresh_tokensUncheckedUpdateWithoutSessionsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => refresh_tokensWhereUniqueInput_schema_1.refresh_tokensWhereUniqueInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => refresh_tokensUpdateWithoutSessionsInput_schema_1.refresh_tokensUpdateWithoutSessionsInputObjectSchema),
        zod_1.z.lazy(() => refresh_tokensUncheckedUpdateWithoutSessionsInput_schema_1.refresh_tokensUncheckedUpdateWithoutSessionsInputObjectSchema),
    ]),
})
    .strict();
exports.refresh_tokensUpdateWithWhereUniqueWithoutSessionsInputObjectSchema = Schema;
