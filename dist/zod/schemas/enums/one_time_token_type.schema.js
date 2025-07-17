"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.one_time_token_typeSchema = void 0;
const zod_1 = require("zod");
exports.one_time_token_typeSchema = zod_1.z.enum([
    'confirmation_token',
    'reauthentication_token',
    'recovery_token',
    'email_change_token_new',
    'email_change_token_current',
    'phone_change_token',
]);
