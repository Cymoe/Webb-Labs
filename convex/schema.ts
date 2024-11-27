import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  orders: defineTable({
    customer: v.string(),
    projectName: v.string(),
    amount: v.number(),
    status: v.string(),
    createdAt: v.number(),
  }),
  agents: defineTable({
    name: v.string(),
    type: v.string(),
    efficiency: v.number(),
    status: v.string(),
    lastUpdated: v.number(),
  }),
  users: defineTable({
    name: v.string(),
    email: v.string(),
    company: v.string(),
    useCase: v.string(),
    createdAt: v.number(),
  }),
});
