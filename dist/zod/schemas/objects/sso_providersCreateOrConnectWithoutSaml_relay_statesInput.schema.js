"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sso_providersCreateOrConnectWithoutSaml_relay_statesInputObjectSchema = void 0;
const zod_1 = require("zod");
const sso_providersWhereUniqueInput_schema_1 = require("./sso_providersWhereUniqueInput.schema");
const sso_providersCreateWithoutSaml_relay_statesInput_schema_1 = require("./sso_providersCreateWithoutSaml_relay_statesInput.schema");
const sso_providersUncheckedCreateWithoutSaml_relay_statesInput_schema_1 = require("./sso_providersUncheckedCreateWithoutSaml_relay_statesInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => sso_providersWhereUniqueInput_schema_1.sso_providersWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => sso_providersCreateWithoutSaml_relay_statesInput_schema_1.sso_providersCreateWithoutSaml_relay_statesInputObjectSchema),
        zod_1.z.lazy(() => sso_providersUncheckedCreateWithoutSaml_relay_statesInput_schema_1.sso_providersUncheckedCreateWithoutSaml_relay_statesInputObjectSchema),
    ]),
})
    .strict();
exports.sso_providersCreateOrConnectWithoutSaml_relay_statesInputObjectSchema = Schema;
