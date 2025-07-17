"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flow_stateUpsertWithoutSaml_relay_statesInputObjectSchema = void 0;
const zod_1 = require("zod");
const flow_stateUpdateWithoutSaml_relay_statesInput_schema_1 = require("./flow_stateUpdateWithoutSaml_relay_statesInput.schema");
const flow_stateUncheckedUpdateWithoutSaml_relay_statesInput_schema_1 = require("./flow_stateUncheckedUpdateWithoutSaml_relay_statesInput.schema");
const flow_stateCreateWithoutSaml_relay_statesInput_schema_1 = require("./flow_stateCreateWithoutSaml_relay_statesInput.schema");
const flow_stateUncheckedCreateWithoutSaml_relay_statesInput_schema_1 = require("./flow_stateUncheckedCreateWithoutSaml_relay_statesInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => flow_stateUpdateWithoutSaml_relay_statesInput_schema_1.flow_stateUpdateWithoutSaml_relay_statesInputObjectSchema),
        zod_1.z.lazy(() => flow_stateUncheckedUpdateWithoutSaml_relay_statesInput_schema_1.flow_stateUncheckedUpdateWithoutSaml_relay_statesInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => flow_stateCreateWithoutSaml_relay_statesInput_schema_1.flow_stateCreateWithoutSaml_relay_statesInputObjectSchema),
        zod_1.z.lazy(() => flow_stateUncheckedCreateWithoutSaml_relay_statesInput_schema_1.flow_stateUncheckedCreateWithoutSaml_relay_statesInputObjectSchema),
    ]),
})
    .strict();
exports.flow_stateUpsertWithoutSaml_relay_statesInputObjectSchema = Schema;
