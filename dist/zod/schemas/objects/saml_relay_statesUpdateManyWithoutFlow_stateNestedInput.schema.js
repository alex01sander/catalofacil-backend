"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saml_relay_statesUpdateManyWithoutFlow_stateNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const saml_relay_statesCreateWithoutFlow_stateInput_schema_1 = require("./saml_relay_statesCreateWithoutFlow_stateInput.schema");
const saml_relay_statesUncheckedCreateWithoutFlow_stateInput_schema_1 = require("./saml_relay_statesUncheckedCreateWithoutFlow_stateInput.schema");
const saml_relay_statesCreateOrConnectWithoutFlow_stateInput_schema_1 = require("./saml_relay_statesCreateOrConnectWithoutFlow_stateInput.schema");
const saml_relay_statesUpsertWithWhereUniqueWithoutFlow_stateInput_schema_1 = require("./saml_relay_statesUpsertWithWhereUniqueWithoutFlow_stateInput.schema");
const saml_relay_statesCreateManyFlow_stateInputEnvelope_schema_1 = require("./saml_relay_statesCreateManyFlow_stateInputEnvelope.schema");
const saml_relay_statesWhereUniqueInput_schema_1 = require("./saml_relay_statesWhereUniqueInput.schema");
const saml_relay_statesUpdateWithWhereUniqueWithoutFlow_stateInput_schema_1 = require("./saml_relay_statesUpdateWithWhereUniqueWithoutFlow_stateInput.schema");
const saml_relay_statesUpdateManyWithWhereWithoutFlow_stateInput_schema_1 = require("./saml_relay_statesUpdateManyWithWhereWithoutFlow_stateInput.schema");
const saml_relay_statesScalarWhereInput_schema_1 = require("./saml_relay_statesScalarWhereInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => saml_relay_statesCreateWithoutFlow_stateInput_schema_1.saml_relay_statesCreateWithoutFlow_stateInputObjectSchema),
        zod_1.z
            .lazy(() => saml_relay_statesCreateWithoutFlow_stateInput_schema_1.saml_relay_statesCreateWithoutFlow_stateInputObjectSchema)
            .array(),
        zod_1.z.lazy(() => saml_relay_statesUncheckedCreateWithoutFlow_stateInput_schema_1.saml_relay_statesUncheckedCreateWithoutFlow_stateInputObjectSchema),
        zod_1.z
            .lazy(() => saml_relay_statesUncheckedCreateWithoutFlow_stateInput_schema_1.saml_relay_statesUncheckedCreateWithoutFlow_stateInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => saml_relay_statesCreateOrConnectWithoutFlow_stateInput_schema_1.saml_relay_statesCreateOrConnectWithoutFlow_stateInputObjectSchema),
        zod_1.z
            .lazy(() => saml_relay_statesCreateOrConnectWithoutFlow_stateInput_schema_1.saml_relay_statesCreateOrConnectWithoutFlow_stateInputObjectSchema)
            .array(),
    ])
        .optional(),
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(() => saml_relay_statesUpsertWithWhereUniqueWithoutFlow_stateInput_schema_1.saml_relay_statesUpsertWithWhereUniqueWithoutFlow_stateInputObjectSchema),
        zod_1.z
            .lazy(() => saml_relay_statesUpsertWithWhereUniqueWithoutFlow_stateInput_schema_1.saml_relay_statesUpsertWithWhereUniqueWithoutFlow_stateInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => saml_relay_statesCreateManyFlow_stateInputEnvelope_schema_1.saml_relay_statesCreateManyFlow_stateInputEnvelopeObjectSchema)
        .optional(),
    set: zod_1.z
        .union([
        zod_1.z.lazy(() => saml_relay_statesWhereUniqueInput_schema_1.saml_relay_statesWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => saml_relay_statesWhereUniqueInput_schema_1.saml_relay_statesWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    disconnect: zod_1.z
        .union([
        zod_1.z.lazy(() => saml_relay_statesWhereUniqueInput_schema_1.saml_relay_statesWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => saml_relay_statesWhereUniqueInput_schema_1.saml_relay_statesWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    delete: zod_1.z
        .union([
        zod_1.z.lazy(() => saml_relay_statesWhereUniqueInput_schema_1.saml_relay_statesWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => saml_relay_statesWhereUniqueInput_schema_1.saml_relay_statesWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => saml_relay_statesWhereUniqueInput_schema_1.saml_relay_statesWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => saml_relay_statesWhereUniqueInput_schema_1.saml_relay_statesWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => saml_relay_statesUpdateWithWhereUniqueWithoutFlow_stateInput_schema_1.saml_relay_statesUpdateWithWhereUniqueWithoutFlow_stateInputObjectSchema),
        zod_1.z
            .lazy(() => saml_relay_statesUpdateWithWhereUniqueWithoutFlow_stateInput_schema_1.saml_relay_statesUpdateWithWhereUniqueWithoutFlow_stateInputObjectSchema)
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(() => saml_relay_statesUpdateManyWithWhereWithoutFlow_stateInput_schema_1.saml_relay_statesUpdateManyWithWhereWithoutFlow_stateInputObjectSchema),
        zod_1.z
            .lazy(() => saml_relay_statesUpdateManyWithWhereWithoutFlow_stateInput_schema_1.saml_relay_statesUpdateManyWithWhereWithoutFlow_stateInputObjectSchema)
            .array(),
    ])
        .optional(),
    deleteMany: zod_1.z
        .union([
        zod_1.z.lazy(() => saml_relay_statesScalarWhereInput_schema_1.saml_relay_statesScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => saml_relay_statesScalarWhereInput_schema_1.saml_relay_statesScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.saml_relay_statesUpdateManyWithoutFlow_stateNestedInputObjectSchema = Schema;
