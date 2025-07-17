"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Audit_log_entriesScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Audit_log_entriesScalarFieldEnumSchema = zod_1.z.enum([
    'instance_id',
    'id',
    'payload',
    'created_at',
    'ip_address',
]);
