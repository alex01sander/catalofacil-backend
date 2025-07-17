"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_factorsCreateNestedOneWithoutMfa_challengesInputObjectSchema = void 0;
const zod_1 = require("zod");
const mfa_factorsCreateWithoutMfa_challengesInput_schema_1 = require("./mfa_factorsCreateWithoutMfa_challengesInput.schema");
const mfa_factorsUncheckedCreateWithoutMfa_challengesInput_schema_1 = require("./mfa_factorsUncheckedCreateWithoutMfa_challengesInput.schema");
const mfa_factorsCreateOrConnectWithoutMfa_challengesInput_schema_1 = require("./mfa_factorsCreateOrConnectWithoutMfa_challengesInput.schema");
const mfa_factorsWhereUniqueInput_schema_1 = require("./mfa_factorsWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => mfa_factorsCreateWithoutMfa_challengesInput_schema_1.mfa_factorsCreateWithoutMfa_challengesInputObjectSchema),
        zod_1.z.lazy(() => mfa_factorsUncheckedCreateWithoutMfa_challengesInput_schema_1.mfa_factorsUncheckedCreateWithoutMfa_challengesInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => mfa_factorsCreateOrConnectWithoutMfa_challengesInput_schema_1.mfa_factorsCreateOrConnectWithoutMfa_challengesInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => mfa_factorsWhereUniqueInput_schema_1.mfa_factorsWhereUniqueInputObjectSchema).optional(),
})
    .strict();
exports.mfa_factorsCreateNestedOneWithoutMfa_challengesInputObjectSchema = Schema;
