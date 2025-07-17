"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionsCreateNestedOneWithoutMfa_amr_claimsInputObjectSchema = void 0;
const zod_1 = require("zod");
const sessionsCreateWithoutMfa_amr_claimsInput_schema_1 = require("./sessionsCreateWithoutMfa_amr_claimsInput.schema");
const sessionsUncheckedCreateWithoutMfa_amr_claimsInput_schema_1 = require("./sessionsUncheckedCreateWithoutMfa_amr_claimsInput.schema");
const sessionsCreateOrConnectWithoutMfa_amr_claimsInput_schema_1 = require("./sessionsCreateOrConnectWithoutMfa_amr_claimsInput.schema");
const sessionsWhereUniqueInput_schema_1 = require("./sessionsWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => sessionsCreateWithoutMfa_amr_claimsInput_schema_1.sessionsCreateWithoutMfa_amr_claimsInputObjectSchema),
        zod_1.z.lazy(() => sessionsUncheckedCreateWithoutMfa_amr_claimsInput_schema_1.sessionsUncheckedCreateWithoutMfa_amr_claimsInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => sessionsCreateOrConnectWithoutMfa_amr_claimsInput_schema_1.sessionsCreateOrConnectWithoutMfa_amr_claimsInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => sessionsWhereUniqueInput_schema_1.sessionsWhereUniqueInputObjectSchema).optional(),
})
    .strict();
exports.sessionsCreateNestedOneWithoutMfa_amr_claimsInputObjectSchema = Schema;
