"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refresh_tokensCreateOrConnectWithoutSessionsInputObjectSchema = void 0;
const zod_1 = require("zod");
const refresh_tokensWhereUniqueInput_schema_1 = require("./refresh_tokensWhereUniqueInput.schema");
const refresh_tokensCreateWithoutSessionsInput_schema_1 = require("./refresh_tokensCreateWithoutSessionsInput.schema");
const refresh_tokensUncheckedCreateWithoutSessionsInput_schema_1 = require("./refresh_tokensUncheckedCreateWithoutSessionsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => refresh_tokensWhereUniqueInput_schema_1.refresh_tokensWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => refresh_tokensCreateWithoutSessionsInput_schema_1.refresh_tokensCreateWithoutSessionsInputObjectSchema),
        zod_1.z.lazy(() => refresh_tokensUncheckedCreateWithoutSessionsInput_schema_1.refresh_tokensUncheckedCreateWithoutSessionsInputObjectSchema),
    ]),
})
    .strict();
exports.refresh_tokensCreateOrConnectWithoutSessionsInputObjectSchema = Schema;
