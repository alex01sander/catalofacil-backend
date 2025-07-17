"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sso_providersCreateNestedOneWithoutSaml_relay_statesInputObjectSchema = void 0;
const zod_1 = require("zod");
const sso_providersCreateWithoutSaml_relay_statesInput_schema_1 = require("./sso_providersCreateWithoutSaml_relay_statesInput.schema");
const sso_providersUncheckedCreateWithoutSaml_relay_statesInput_schema_1 = require("./sso_providersUncheckedCreateWithoutSaml_relay_statesInput.schema");
const sso_providersCreateOrConnectWithoutSaml_relay_statesInput_schema_1 = require("./sso_providersCreateOrConnectWithoutSaml_relay_statesInput.schema");
const sso_providersWhereUniqueInput_schema_1 = require("./sso_providersWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => sso_providersCreateWithoutSaml_relay_statesInput_schema_1.sso_providersCreateWithoutSaml_relay_statesInputObjectSchema),
        zod_1.z.lazy(() => sso_providersUncheckedCreateWithoutSaml_relay_statesInput_schema_1.sso_providersUncheckedCreateWithoutSaml_relay_statesInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => sso_providersCreateOrConnectWithoutSaml_relay_statesInput_schema_1.sso_providersCreateOrConnectWithoutSaml_relay_statesInputObjectSchema)
        .optional(),
    connect: zod_1.z
        .lazy(() => sso_providersWhereUniqueInput_schema_1.sso_providersWhereUniqueInputObjectSchema)
        .optional(),
})
    .strict();
exports.sso_providersCreateNestedOneWithoutSaml_relay_statesInputObjectSchema = Schema;
