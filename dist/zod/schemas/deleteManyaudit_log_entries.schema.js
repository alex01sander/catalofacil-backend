"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.audit_log_entriesDeleteManySchema = void 0;
const zod_1 = require("zod");
const audit_log_entriesWhereInput_schema_1 = require("./objects/audit_log_entriesWhereInput.schema");
exports.audit_log_entriesDeleteManySchema = zod_1.z.object({
    where: audit_log_entriesWhereInput_schema_1.audit_log_entriesWhereInputObjectSchema.optional(),
});
