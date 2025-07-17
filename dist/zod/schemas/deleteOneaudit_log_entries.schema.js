"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.audit_log_entriesDeleteOneSchema = void 0;
const zod_1 = require("zod");
const audit_log_entriesWhereUniqueInput_schema_1 = require("./objects/audit_log_entriesWhereUniqueInput.schema");
exports.audit_log_entriesDeleteOneSchema = zod_1.z.object({
    where: audit_log_entriesWhereUniqueInput_schema_1.audit_log_entriesWhereUniqueInputObjectSchema,
});
