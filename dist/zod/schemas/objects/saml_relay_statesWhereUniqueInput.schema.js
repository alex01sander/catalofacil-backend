"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saml_relay_statesWhereUniqueInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
})
    .strict();
exports.saml_relay_statesWhereUniqueInputObjectSchema = Schema;
