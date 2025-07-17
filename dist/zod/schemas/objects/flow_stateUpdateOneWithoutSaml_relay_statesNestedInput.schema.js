"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flow_stateUpdateOneWithoutSaml_relay_statesNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const flow_stateCreateWithoutSaml_relay_statesInput_schema_1 = require("./flow_stateCreateWithoutSaml_relay_statesInput.schema");
const flow_stateUncheckedCreateWithoutSaml_relay_statesInput_schema_1 = require("./flow_stateUncheckedCreateWithoutSaml_relay_statesInput.schema");
const flow_stateCreateOrConnectWithoutSaml_relay_statesInput_schema_1 = require("./flow_stateCreateOrConnectWithoutSaml_relay_statesInput.schema");
const flow_stateUpsertWithoutSaml_relay_statesInput_schema_1 = require("./flow_stateUpsertWithoutSaml_relay_statesInput.schema");
const flow_stateWhereUniqueInput_schema_1 = require("./flow_stateWhereUniqueInput.schema");
const flow_stateUpdateWithoutSaml_relay_statesInput_schema_1 = require("./flow_stateUpdateWithoutSaml_relay_statesInput.schema");
const flow_stateUncheckedUpdateWithoutSaml_relay_statesInput_schema_1 = require("./flow_stateUncheckedUpdateWithoutSaml_relay_statesInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => flow_stateCreateWithoutSaml_relay_statesInput_schema_1.flow_stateCreateWithoutSaml_relay_statesInputObjectSchema),
        zod_1.z.lazy(() => flow_stateUncheckedCreateWithoutSaml_relay_statesInput_schema_1.flow_stateUncheckedCreateWithoutSaml_relay_statesInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => flow_stateCreateOrConnectWithoutSaml_relay_statesInput_schema_1.flow_stateCreateOrConnectWithoutSaml_relay_statesInputObjectSchema)
        .optional(),
    upsert: zod_1.z
        .lazy(() => flow_stateUpsertWithoutSaml_relay_statesInput_schema_1.flow_stateUpsertWithoutSaml_relay_statesInputObjectSchema)
        .optional(),
    disconnect: zod_1.z.boolean().optional(),
    delete: zod_1.z.boolean().optional(),
    connect: zod_1.z.lazy(() => flow_stateWhereUniqueInput_schema_1.flow_stateWhereUniqueInputObjectSchema).optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => flow_stateUpdateWithoutSaml_relay_statesInput_schema_1.flow_stateUpdateWithoutSaml_relay_statesInputObjectSchema),
        zod_1.z.lazy(() => flow_stateUncheckedUpdateWithoutSaml_relay_statesInput_schema_1.flow_stateUncheckedUpdateWithoutSaml_relay_statesInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.flow_stateUpdateOneWithoutSaml_relay_statesNestedInputObjectSchema = Schema;
