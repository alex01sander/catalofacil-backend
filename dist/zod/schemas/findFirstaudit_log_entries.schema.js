"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.audit_log_entriesFindFirstSchema = void 0;
const zod_1 = require("zod");
const audit_log_entriesOrderByWithRelationInput_schema_1 = require("./objects/audit_log_entriesOrderByWithRelationInput.schema");
const audit_log_entriesWhereInput_schema_1 = require("./objects/audit_log_entriesWhereInput.schema");
const audit_log_entriesWhereUniqueInput_schema_1 = require("./objects/audit_log_entriesWhereUniqueInput.schema");
const audit_log_entriesScalarFieldEnum_schema_1 = require("./enums/audit_log_entriesScalarFieldEnum.schema");
exports.audit_log_entriesFindFirstSchema = zod_1.z.object({
    orderBy: zod_1.z
        .union([
        audit_log_entriesOrderByWithRelationInput_schema_1.audit_log_entriesOrderByWithRelationInputObjectSchema,
        audit_log_entriesOrderByWithRelationInput_schema_1.audit_log_entriesOrderByWithRelationInputObjectSchema.array(),
    ])
        .optional(),
    where: audit_log_entriesWhereInput_schema_1.audit_log_entriesWhereInputObjectSchema.optional(),
    cursor: audit_log_entriesWhereUniqueInput_schema_1.audit_log_entriesWhereUniqueInputObjectSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.array(audit_log_entriesScalarFieldEnum_schema_1.audit_log_entriesScalarFieldEnumSchema).optional(),
});
