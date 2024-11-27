import { mutation } from "./_generated/server";

export const populateTestData = mutation({
  args: {},
  handler: async (ctx) => {
    // Add Orders
    const orders = [
      {
        customer: "TechCorp Inc.",
        projectName: "Enterprise AI Integration",
        amount: 12000,
        status: "in_progress",
        createdAt: Date.now() - 2 * 24 * 60 * 60 * 1000, // 2 days ago
      },
      {
        customer: "Innovation Labs",
        projectName: "Workflow Automation",
        amount: 8500,
        status: "completed",
        createdAt: Date.now() - 5 * 24 * 60 * 60 * 1000, // 5 days ago
      },
      {
        customer: "Future Systems",
        projectName: "Custom Agent Development",
        amount: 15000,
        status: "pending",
        createdAt: Date.now() - 1 * 24 * 60 * 60 * 1000, // 1 day ago
      },
      {
        customer: "DataFlow Solutions",
        projectName: "AI Pipeline Integration",
        amount: 9500,
        status: "in_progress",
        createdAt: Date.now() - 3 * 24 * 60 * 60 * 1000, // 3 days ago
      },
      {
        customer: "Quantum Industries",
        projectName: "Agent Network Setup",
        amount: 18000,
        status: "completed",
        createdAt: Date.now(),
      },
    ];

    for (const order of orders) {
      await ctx.db.insert("orders", order);
    }

    // Add Agents
    const agents = [
      {
        name: "Data Processing Agent",
        type: "processing",
        efficiency: 94,
        status: "active",
        lastUpdated: Date.now(),
      },
      {
        name: "Customer Service Agent",
        type: "support",
        efficiency: 88,
        status: "active",
        lastUpdated: Date.now(),
      },
      {
        name: "Analytics Agent",
        type: "analysis",
        efficiency: 92,
        status: "active",
        lastUpdated: Date.now(),
      },
      {
        name: "Integration Agent",
        type: "system",
        efficiency: 96,
        status: "active",
        lastUpdated: Date.now(),
      },
    ];

    for (const agent of agents) {
      await ctx.db.insert("agents", agent);
    }

    // Add Users
    const users = [
      {
        name: "John Smith",
        email: "john@techcorp.com",
        company: "TechCorp Inc.",
        useCase: "Enterprise-wide AI automation and integration",
        createdAt: Date.now(),
      },
      {
        name: "Sarah Johnson",
        email: "sarah@innovationlabs.com",
        company: "Innovation Labs",
        useCase: "Workflow optimization and process automation",
        createdAt: Date.now(),
      },
      {
        name: "Michael Chen",
        email: "michael@futuresystems.com",
        company: "Future Systems",
        useCase: "Custom AI agent development for specific business needs",
        createdAt: Date.now(),
      },
    ];

    for (const user of users) {
      await ctx.db.insert("users", user);
    }

    return "Test data populated successfully";
  },
});
