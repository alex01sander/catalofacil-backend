"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.audit_log_entriesCreateOneSchema = void 0;
const zod_1 = require("zod");
const audit_log_entriesCreateInput_schema_1 = require("./objects/audit_log_entriesCreateInput.schema");
const audit_log_entriesUncheckedCreateInput_schema_1 = require("./objects/audit_log_entriesUncheckedCreateInput.schema");
exports.audit_log_entriesCreateOneSchema = zod_1.z.object({
    data: zod_1.z.union([
        audit_log_entriesCreateInput_schema_1.audit_log_entriesCreateInputObjectSchema,
        audit_log_entriesUncheckedCreateInput_schema_1.audit_log_entriesUncheckedCreateInputObjectSchema,
    ]),
});
