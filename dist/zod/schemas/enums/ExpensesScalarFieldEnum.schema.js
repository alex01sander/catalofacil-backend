"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpensesScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.ExpensesScalarFieldEnumSchema = zod_1.z.enum([
    'id',
    'user_id',
    'store_id',
    'name',
    'category',
    'type',
    'amount',
    'due_date',
    'is_recurring',
    'recurring_frequency',
    'status',
    'paid_date',
    'created_at',
    'updated_at',
]);
