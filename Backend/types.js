const zod = require("zod");

let createSchema = zod.object({
  name: zod.string(),
  description: zod.string(),
  interests: zod.string(),
  linkedin: zod.string(),
  twitter: zod.string(),
});

let updateSchema = zod.object({
  id: zod.string(),
  name: zod.string().optional(),
  description: zod.string().optional(),
  interests: zod.string().optional(),
  linkedin: zod.string().optional(),
  twitter: zod.string().optional(),
});

let deleteSchema = zod.object({
  id: zod.string(),
});

module.exports = {
  createSchema,
  updateSchema,
  deleteSchema,
};
