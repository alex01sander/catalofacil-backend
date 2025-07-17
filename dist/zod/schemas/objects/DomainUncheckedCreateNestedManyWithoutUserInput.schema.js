"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainUncheckedCreateNestedManyWithoutUserInputObjectSchema = void 0;
const zod_1 = require("zod");
const DomainCreateWithoutUserInput_schema_1 = require("./DomainCreateWithoutUserInput.schema");
const DomainUncheckedCreateWithoutUserInput_schema_1 = require("./DomainUncheckedCreateWithoutUserInput.schema");
const DomainCreateOrConnectWithoutUserInput_schema_1 = require("./DomainCreateOrConnectWithoutUserInput.schema");
const DomainCreateManyUserInputEnvelope_schema_1 = require("./DomainCreateManyUserInputEnvelope.schema");
const DomainWhereUniqueInput_schema_1 = require("./DomainWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => DomainCreateWithoutUserInput_schema_1.DomainCreateWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => DomainCreateWithoutUserInput_schema_1.DomainCreateWithoutUserInputObjectSchema).array(),
        zod_1.z.lazy(() => DomainUncheckedCreateWithoutUserInput_schema_1.DomainUncheckedCreateWithoutUserInputObjectSchema),
        zod_1.z
            .lazy(() => DomainUncheckedCreateWithoutUserInput_schema_1.DomainUncheckedCreateWithoutUserInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => DomainCreateOrConnectWithoutUserInput_schema_1.DomainCreateOrConnectWithoutUserInputObjectSchema),
        zod_1.z
            .lazy(() => DomainCreateOrConnectWithoutUserInput_schema_1.DomainCreateOrConnectWithoutUserInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => DomainCreateManyUserInputEnvelope_schema_1.DomainCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => DomainWhereUniqueInput_schema_1.DomainWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => DomainWhereUniqueInput_schema_1.DomainWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.DomainUncheckedCreateNestedManyWithoutUserInputObjectSchema = Schema;
