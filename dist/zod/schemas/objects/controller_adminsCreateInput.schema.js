"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller_adminsCreateInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersCreateNestedOneWithoutController_adminsInput_schema_1 = require("./usersCreateNestedOneWithoutController_adminsInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    email: zod_1.z.string(),
    created_at: zod_1.z.coerce.date().optional(),
    updated_at: zod_1.z.coerce.date().optional(),
    users: zod_1.z.lazy(() => usersCreateNestedOneWithoutController_adminsInput_schema_1.usersCreateNestedOneWithoutController_adminsInputObjectSchema),
})
    .strict();
exports.controller_adminsCreateInputObjectSchema = Schema;
