"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_factorsCreateOrConnectWithoutMfa_challengesInputObjectSchema = void 0;
const zod_1 = require("zod");
const mfa_factorsWhereUniqueInput_schema_1 = require("./mfa_factorsWhereUniqueInput.schema");
const mfa_factorsCreateWithoutMfa_challengesInput_schema_1 = require("./mfa_factorsCreateWithoutMfa_challengesInput.schema");
const mfa_factorsUncheckedCreateWithoutMfa_challengesInput_schema_1 = require("./mfa_factorsUncheckedCreateWithoutMfa_challengesInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => mfa_factorsWhereUniqueInput_schema_1.mfa_factorsWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => mfa_factorsCreateWithoutMfa_challengesInput_schema_1.mfa_factorsCreateWithoutMfa_challengesInputObjectSchema),
        zod_1.z.lazy(() => mfa_factorsUncheckedCreateWithoutMfa_challengesInput_schema_1.mfa_factorsUncheckedCreateWithoutMfa_challengesInputObjectSchema),
    ]),
})
    .strict();
exports.mfa_factorsCreateOrConnectWithoutMfa_challengesInputObjectSchema = Schema;
