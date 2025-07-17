"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstancesScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.InstancesScalarFieldEnumSchema = zod_1.z.enum([
    'id',
    'uuid',
    'raw_base_config',
    'created_at',
    'updated_at',
]);
