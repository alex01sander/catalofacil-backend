"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sso_providersUpsertWithoutSaml_providersInputObjectSchema = void 0;
const zod_1 = require("zod");
const sso_providersUpdateWithoutSaml_providersInput_schema_1 = require("./sso_providersUpdateWithoutSaml_providersInput.schema");
const sso_providersUncheckedUpdateWithoutSaml_providersInput_schema_1 = require("./sso_providersUncheckedUpdateWithoutSaml_providersInput.schema");
const sso_providersCreateWithoutSaml_providersInput_schema_1 = require("./sso_providersCreateWithoutSaml_providersInput.schema");
const sso_providersUncheckedCreateWithoutSaml_providersInput_schema_1 = require("./sso_providersUncheckedCreateWithoutSaml_providersInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => sso_providersUpdateWithoutSaml_providersInput_schema_1.sso_providersUpdateWithoutSaml_providersInputObjectSchema),
        zod_1.z.lazy(() => sso_providersUncheckedUpdateWithoutSaml_providersInput_schema_1.sso_providersUncheckedUpdateWithoutSaml_providersInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => sso_providersCreateWithoutSaml_providersInput_schema_1.sso_providersCreateWithoutSaml_providersInputObjectSchema),
        zod_1.z.lazy(() => sso_providersUncheckedCreateWithoutSaml_providersInput_schema_1.sso_providersUncheckedCreateWithoutSaml_providersInputObjectSchema),
    ]),
})
    .strict();
exports.sso_providersUpsertWithoutSaml_providersInputObjectSchema = Schema;
