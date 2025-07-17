"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.audit_log_entriesUpsertSchema = void 0;
const zod_1 = require("zod");
const audit_log_entriesWhereUniqueInput_schema_1 = require("./objects/audit_log_entriesWhereUniqueInput.schema");
const audit_log_entriesCreateInput_schema_1 = require("./objects/audit_log_entriesCreateInput.schema");
const audit_log_entriesUncheckedCreateInput_schema_1 = require("./objects/audit_log_entriesUncheckedCreateInput.schema");
const audit_log_entriesUpdateInput_schema_1 = require("./objects/audit_log_entriesUpdateInput.schema");
const audit_log_entriesUncheckedUpdateInput_schema_1 = require("./objects/audit_log_entriesUncheckedUpdateInput.schema");
exports.audit_log_entriesUpsertSchema = zod_1.z.object({
    where: audit_log_entriesWhereUniqueInput_schema_1.audit_log_entriesWhereUniqueInputObjectSchema,
    create: zod_1.z.union([
        audit_log_entriesCreateInput_schema_1.audit_log_entriesCreateInputObjectSchema,
        audit_log_entriesUncheckedCreateInput_schema_1.audit_log_entriesUncheckedCreateInputObjectSchema,
    ]),
    update: zod_1.z.union([
        audit_log_entriesUpdateInput_schema_1.audit_log_entriesUpdateInputObjectSchema,
        audit_log_entriesUncheckedUpdateInput_schema_1.audit_log_entriesUncheckedUpdateInputObjectSchema,
    ]),
});
