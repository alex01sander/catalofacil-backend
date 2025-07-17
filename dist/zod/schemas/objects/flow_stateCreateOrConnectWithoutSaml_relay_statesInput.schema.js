"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flow_stateCreateOrConnectWithoutSaml_relay_statesInputObjectSchema = void 0;
const zod_1 = require("zod");
const flow_stateWhereUniqueInput_schema_1 = require("./flow_stateWhereUniqueInput.schema");
const flow_stateCreateWithoutSaml_relay_statesInput_schema_1 = require("./flow_stateCreateWithoutSaml_relay_statesInput.schema");
const flow_stateUncheckedCreateWithoutSaml_relay_statesInput_schema_1 = require("./flow_stateUncheckedCreateWithoutSaml_relay_statesInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => flow_stateWhereUniqueInput_schema_1.flow_stateWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => flow_stateCreateWithoutSaml_relay_statesInput_schema_1.flow_stateCreateWithoutSaml_relay_statesInputObjectSchema),
        zod_1.z.lazy(() => flow_stateUncheckedCreateWithoutSaml_relay_statesInput_schema_1.flow_stateUncheckedCreateWithoutSaml_relay_statesInputObjectSchema),
    ]),
})
    .strict();
exports.flow_stateCreateOrConnectWithoutSaml_relay_statesInputObjectSchema = Schema;
