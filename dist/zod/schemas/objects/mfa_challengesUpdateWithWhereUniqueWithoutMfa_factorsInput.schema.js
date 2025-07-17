"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_challengesUpdateWithWhereUniqueWithoutMfa_factorsInputObjectSchema = void 0;
const zod_1 = require("zod");
const mfa_challengesWhereUniqueInput_schema_1 = require("./mfa_challengesWhereUniqueInput.schema");
const mfa_challengesUpdateWithoutMfa_factorsInput_schema_1 = require("./mfa_challengesUpdateWithoutMfa_factorsInput.schema");
const mfa_challengesUncheckedUpdateWithoutMfa_factorsInput_schema_1 = require("./mfa_challengesUncheckedUpdateWithoutMfa_factorsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => mfa_challengesWhereUniqueInput_schema_1.mfa_challengesWhereUniqueInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => mfa_challengesUpdateWithoutMfa_factorsInput_schema_1.mfa_challengesUpdateWithoutMfa_factorsInputObjectSchema),
        zod_1.z.lazy(() => mfa_challengesUncheckedUpdateWithoutMfa_factorsInput_schema_1.mfa_challengesUncheckedUpdateWithoutMfa_factorsInputObjectSchema),
    ]),
})
    .strict();
exports.mfa_challengesUpdateWithWhereUniqueWithoutMfa_factorsInputObjectSchema = Schema;
