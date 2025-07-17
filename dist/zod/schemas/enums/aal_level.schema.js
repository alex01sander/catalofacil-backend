"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aal_levelSchema = void 0;
const zod_1 = require("zod");
exports.aal_levelSchema = zod_1.z.enum(['aal1', 'aal2', 'aal3']);
