"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.code_challenge_methodSchema = void 0;
const zod_1 = require("zod");
exports.code_challenge_methodSchema = zod_1.z.enum(['s256', 'plain']);
