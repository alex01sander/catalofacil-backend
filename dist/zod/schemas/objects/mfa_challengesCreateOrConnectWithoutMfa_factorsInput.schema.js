"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_challengesCreateOrConnectWithoutMfa_factorsInputObjectSchema = void 0;
const zod_1 = require("zod");
const mfa_challengesWhereUniqueInput_schema_1 = require("./mfa_challengesWhereUniqueInput.schema");
const mfa_challengesCreateWithoutMfa_factorsInput_schema_1 = require("./mfa_challengesCreateWithoutMfa_factorsInput.schema");
const mfa_challengesUncheckedCreateWithoutMfa_factorsInput_schema_1 = require("./mfa_challengesUncheckedCreateWithoutMfa_factorsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => mfa_challengesWhereUniqueInput_schema_1.mfa_challengesWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => mfa_challengesCreateWithoutMfa_factorsInput_schema_1.mfa_challengesCreateWithoutMfa_factorsInputObjectSchema),
        zod_1.z.lazy(() => mfa_challengesUncheckedCreateWithoutMfa_factorsInput_schema_1.mfa_challengesUncheckedCreateWithoutMfa_factorsInputObjectSchema),
    ]),
})
    .strict();
exports.mfa_challengesCreateOrConnectWithoutMfa_factorsInputObjectSchema = Schema;
