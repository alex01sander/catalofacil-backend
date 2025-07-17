"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flow_stateRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const flow_stateWhereInput_schema_1 = require("./flow_stateWhereInput.schema");
const Schema = zod_1.z
    .object({
    is: zod_1.z
        .lazy(() => flow_stateWhereInput_schema_1.flow_stateWhereInputObjectSchema)
        .optional()
        .nullable(),
    isNot: zod_1.z
        .lazy(() => flow_stateWhereInput_schema_1.flow_stateWhereInputObjectSchema)
        .optional()
        .nullable(),
})
    .strict();
exports.Flow_stateRelationFilterObjectSchema = Schema;
