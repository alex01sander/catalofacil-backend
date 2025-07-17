"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainUpdateWithWhereUniqueWithoutUserInputObjectSchema = void 0;
const zod_1 = require("zod");
const DomainWhereUniqueInput_schema_1 = require("./DomainWhereUniqueInput.schema");
const DomainUpdateWithoutUserInput_schema_1 = require("./DomainUpdateWithoutUserInput.schema");
const DomainUncheckedUpdateWithoutUserInput_schema_1 = require("./DomainUncheckedUpdateWithoutUserInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => DomainWhereUniqueInput_schema_1.DomainWhereUniqueInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => DomainUpdateWithoutUserInput_schema_1.DomainUpdateWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => DomainUncheckedUpdateWithoutUserInput_schema_1.DomainUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
})
    .strict();
exports.DomainUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
