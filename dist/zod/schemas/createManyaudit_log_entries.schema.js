"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.audit_log_entriesCreateManySchema = void 0;
const zod_1 = require("zod");
const audit_log_entriesCreateManyInput_schema_1 = require("./objects/audit_log_entriesCreateManyInput.schema");
exports.audit_log_entriesCreateManySchema = zod_1.z.object({
    data: zod_1.z.union([
        audit_log_entriesCreateManyInput_schema_1.audit_log_entriesCreateManyInputObjectSchema,
        zod_1.z.array(audit_log_entriesCreateManyInput_schema_1.audit_log_entriesCreateManyInputObjectSchema),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
});
