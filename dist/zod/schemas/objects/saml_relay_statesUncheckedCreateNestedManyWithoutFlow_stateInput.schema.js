"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saml_relay_statesUncheckedCreateNestedManyWithoutFlow_stateInputObjectSchema = void 0;
const zod_1 = require("zod");
const saml_relay_statesCreateWithoutFlow_stateInput_schema_1 = require("./saml_relay_statesCreateWithoutFlow_stateInput.schema");
const saml_relay_statesUncheckedCreateWithoutFlow_stateInput_schema_1 = require("./saml_relay_statesUncheckedCreateWithoutFlow_stateInput.schema");
const saml_relay_statesCreateOrConnectWithoutFlow_stateInput_schema_1 = require("./saml_relay_statesCreateOrConnectWithoutFlow_stateInput.schema");
const saml_relay_statesCreateManyFlow_stateInputEnvelope_schema_1 = require("./saml_relay_statesCreateManyFlow_stateInputEnvelope.schema");
const saml_relay_statesWhereUniqueInput_schema_1 = require("./saml_relay_statesWhereUniqueInput.schema");
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
    createMany: zod_1.z
        .lazy(() => saml_relay_statesCreateManyFlow_stateInputEnvelope_schema_1.saml_relay_statesCreateManyFlow_stateInputEnvelopeObjectSchema)
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => saml_relay_statesWhereUniqueInput_schema_1.saml_relay_statesWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => saml_relay_statesWhereUniqueInput_schema_1.saml_relay_statesWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.saml_relay_statesUncheckedCreateNestedManyWithoutFlow_stateInputObjectSchema = Schema;
