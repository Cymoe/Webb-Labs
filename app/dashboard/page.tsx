'use client'

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useInitializeTestData } from "./actions";
import { useEffect } from "react";

export default function Dashboard() {
  const orders = useQuery(api.orders.list) || [];
  const agents = useQuery(api.agents.getActive) || [];
  const recentOrders = orders.slice(0, 3);
  const initTestData = useInitializeTestData();

  useEffect(() => {
    // Only populate if no orders exist
    if (orders && orders.length === 0) {
      initTestData();
    }
  }, [orders, initTestData]);

  const totalRevenue = orders?.reduce((sum, order) => sum + order.amount, 0) || 0;

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-100">
      {/* Top Navigation */}
      <nav className="border-b border-zinc-800/50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-bold text-white">Webb Labs</h1>
            <button className="text-indigo-400 hover:text-indigo-300 text-sm font-bold py-1 px-3 hover:border-indigo-700/50 transition-colors">
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-400 mb-1">Active Orders</h3>
            <p className="text-2xl font-bold text-white">{orders.length}</p>
          </div>
          <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-400 mb-1">Total Revenue</h3>
            <p className="text-2xl font-bold text-white">${totalRevenue.toLocaleString()}</p>
          </div>
          <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-400 mb-1">Active Agents</h3>
            <p className="text-2xl font-bold text-white">{agents.length}</p>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-white">Recent Orders</h2>
            <button className="text-sm text-gray-400 hover:text-gray-300">View all →</button>
          </div>
          <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-lg">
            {recentOrders.map((order) => (
              <div key={order._id} className="px-4 py-3 border-b border-zinc-700/50 last:border-b-0">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-white">{order.projectName}</p>
                    <p className="text-xs text-gray-400">{order.customer}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-white">${order.amount.toLocaleString()}</p>
                    <p className={`text-xs ${
                      order.status === 'completed' ? 'text-green-400' :
                      order.status === 'in_progress' ? 'text-indigo-400' :
                      'text-yellow-400'
                    }`}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Agents */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-white">Active Agents</h2>
            <button className="text-sm text-gray-400 hover:text-gray-300">Manage →</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {agents.map((agent) => (
              <div key={agent._id} className="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-sm font-medium text-white">{agent.name}</h3>
                    <p className="text-xs text-gray-400">Efficiency: {agent.efficiency}%</p>
                  </div>
                  <div className="px-2 py-1 bg-green-500/10 border border-green-500/20 rounded">
                    <span className="text-xs font-medium text-green-400">{agent.status}</span>
                  </div>
                </div>
                <div className="h-1 bg-zinc-700 rounded">
                  <div
                    className="h-1 bg-indigo-500 rounded"
                    style={{ width: `${agent.efficiency}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
