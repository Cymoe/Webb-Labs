import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("agents").order("desc").take(100);
  },
});

export const getActive = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("agents")
      .filter((q) => q.eq(q.field("status"), "active"))
      .order("desc")
      .take(100);
  },
});

export const create = mutation({
  args: {
    name: v.string(),
    type: v.string(),
    efficiency: v.number(),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("agents", {
      ...args,
      lastUpdated: Date.now(),
    });
  },
});

export const updateEfficiency = mutation({
  args: {
    id: v.id("agents"),
    efficiency: v.number(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      efficiency: args.efficiency,
      lastUpdated: Date.now(),
    });
  },
});
