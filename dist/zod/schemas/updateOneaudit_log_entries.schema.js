"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.audit_log_entriesUpdateOneSchema = void 0;
const zod_1 = require("zod");
const audit_log_entriesUpdateInput_schema_1 = require("./objects/audit_log_entriesUpdateInput.schema");
const audit_log_entriesUncheckedUpdateInput_schema_1 = require("./objects/audit_log_entriesUncheckedUpdateInput.schema");
const audit_log_entriesWhereUniqueInput_schema_1 = require("./objects/audit_log_entriesWhereUniqueInput.schema");
exports.audit_log_entriesUpdateOneSchema = zod_1.z.object({
    data: zod_1.z.union([
        audit_log_entriesUpdateInput_schema_1.audit_log_entriesUpdateInputObjectSchema,
        audit_log_entriesUncheckedUpdateInput_schema_1.audit_log_entriesUncheckedUpdateInputObjectSchema,
    ]),
    where: audit_log_entriesWhereUniqueInput_schema_1.audit_log_entriesWhereUniqueInputObjectSchema,
});
