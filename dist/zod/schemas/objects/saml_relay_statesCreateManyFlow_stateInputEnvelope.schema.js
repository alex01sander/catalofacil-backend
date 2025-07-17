"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saml_relay_statesCreateManyFlow_stateInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const saml_relay_statesCreateManyFlow_stateInput_schema_1 = require("./saml_relay_statesCreateManyFlow_stateInput.schema");
const Schema = zod_1.z
    .object({
    data: zod_1.z.union([
        zod_1.z.lazy(() => saml_relay_statesCreateManyFlow_stateInput_schema_1.saml_relay_statesCreateManyFlow_stateInputObjectSchema),
        zod_1.z
            .lazy(() => saml_relay_statesCreateManyFlow_stateInput_schema_1.saml_relay_statesCreateManyFlow_stateInputObjectSchema)
            .array(),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
})
    .strict();
exports.saml_relay_statesCreateManyFlow_stateInputEnvelopeObjectSchema = Schema;
