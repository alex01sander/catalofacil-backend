"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_factorsUpsertWithoutMfa_challengesInputObjectSchema = void 0;
const zod_1 = require("zod");
const mfa_factorsUpdateWithoutMfa_challengesInput_schema_1 = require("./mfa_factorsUpdateWithoutMfa_challengesInput.schema");
const mfa_factorsUncheckedUpdateWithoutMfa_challengesInput_schema_1 = require("./mfa_factorsUncheckedUpdateWithoutMfa_challengesInput.schema");
const mfa_factorsCreateWithoutMfa_challengesInput_schema_1 = require("./mfa_factorsCreateWithoutMfa_challengesInput.schema");
const mfa_factorsUncheckedCreateWithoutMfa_challengesInput_schema_1 = require("./mfa_factorsUncheckedCreateWithoutMfa_challengesInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => mfa_factorsUpdateWithoutMfa_challengesInput_schema_1.mfa_factorsUpdateWithoutMfa_challengesInputObjectSchema),
        zod_1.z.lazy(() => mfa_factorsUncheckedUpdateWithoutMfa_challengesInput_schema_1.mfa_factorsUncheckedUpdateWithoutMfa_challengesInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => mfa_factorsCreateWithoutMfa_challengesInput_schema_1.mfa_factorsCreateWithoutMfa_challengesInputObjectSchema),
        zod_1.z.lazy(() => mfa_factorsUncheckedCreateWithoutMfa_challengesInput_schema_1.mfa_factorsUncheckedCreateWithoutMfa_challengesInputObjectSchema),
    ]),
})
    .strict();
exports.mfa_factorsUpsertWithoutMfa_challengesInputObjectSchema = Schema;
