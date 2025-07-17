"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.audit_log_entriesUpdateManySchema = void 0;
const zod_1 = require("zod");
const audit_log_entriesUpdateManyMutationInput_schema_1 = require("./objects/audit_log_entriesUpdateManyMutationInput.schema");
const audit_log_entriesWhereInput_schema_1 = require("./objects/audit_log_entriesWhereInput.schema");
exports.audit_log_entriesUpdateManySchema = zod_1.z.object({
    data: audit_log_entriesUpdateManyMutationInput_schema_1.audit_log_entriesUpdateManyMutationInputObjectSchema,
    where: audit_log_entriesWhereInput_schema_1.audit_log_entriesWhereInputObjectSchema.optional(),
});
