import {z} from "zod"

const ageSchema = z.number().min(18).max(100).int();
const userAge = 19;

const parseUserAge = ageSchema.parse(userAge);
console.log(parseUserAge)