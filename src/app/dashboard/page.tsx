"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Users, TrendingUp, ShoppingCart, Activity, Search, Bell, Settings } from "lucide-react";
import Link from "next/link";

const chartData = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 5000 },
  { name: "Apr", value: 4800 },
  { name: "May", value: 7000 },
  { name: "Jun", value: 6500 },
];

const recentActivity = [
  { user: "Alice Johnson", action: "Created new project", time: "2 min ago", initials: "AJ" },
  { user: "Bob Smith", action: "Updated settings", time: "15 min ago", initials: "BS" },
  { user: "Carol White", action: "Uploaded files", time: "1 hr ago", initials: "CW" },
  { user: "David Brown", action: "Joined the team", time: "3 hr ago", initials: "DB" },
];

const stats = [
  { title: "Total Users", value: "12,345", change: "+12%", icon: Users, color: "text-blue-600" },
  { title: "Revenue", value: "$48,295", change: "+8.2%", icon: TrendingUp, color: "text-green-600" },
  { title: "Orders", value: "1,429", change: "+3.1%", icon: ShoppingCart, color: "text-purple-600" },
  { title: "Active Now", value: "573", change: "+19%", icon: Activity, color: "text-orange-600" },
];

export default function DashboardPage() {
  const [search, setSearch] = useState("");

  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      // Replace with actual Supabase query:
      // const { data } = await supabase.from("users").select("*");
      // return data;
      return recentActivity;
    },
  });

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r flex flex-col">
        <div className="p-6 border-b">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="font-semibold">My App</span>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {["Dashboard", "Analytics", "Users", "Settings"].map((item) => (
            <button
              key={item}
              className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                item === "Dashboard"
                  ? "bg-slate-100 font-medium text-slate-900"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t">
          <Button variant="ghost" className="w-full justify-start gap-2" size="sm" asChild>
            <Link href="/">← Back to Home</Link>
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <main className="ml-64 p-8">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
            <p className="text-slate-500 text-sm">Welcome back, here's what's happening.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search..."
                className="pl-9 w-64"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Button variant="ghost" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-500">{stat.title}</span>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </div>
                <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-xs text-green-600 mt-1">{stat.change} from last month</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts & Activity */}
        <div className="grid grid-cols-3 gap-6">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Revenue Overview</CardTitle>
              <CardDescription>Monthly revenue for the past 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#0f172a" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest team actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {isLoading
                  ? Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="flex items-center gap-3 animate-pulse">
                        <div className="w-8 h-8 rounded-full bg-slate-200" />
                        <div className="flex-1 space-y-1">
                          <div className="h-3 bg-slate-200 rounded w-3/4" />
                          <div className="h-2 bg-slate-100 rounded w-1/2" />
                        </div>
                      </div>
                    ))
                  : (users ?? recentActivity).map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="text-xs">{item.initials}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-slate-900 truncate">{item.user}</p>
                          <p className="text-xs text-slate-500">{item.action}</p>
                        </div>
                        <Badge variant="outline" className="text-xs shrink-0">{item.time}</Badge>
                      </div>
                    ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs section */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Data Explorer</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="users">Users</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-4">
                <p className="text-sm text-slate-600">
                  Connect your Supabase database to populate this dashboard with real data.
                  Update <code className="bg-slate-100 px-1 rounded text-xs">src/lib/supabase.ts</code> and
                  use <code className="bg-slate-100 px-1 rounded text-xs">useQuery</code> hooks to fetch from your tables.
                </p>
              </TabsContent>
              <TabsContent value="users" className="mt-4">
                <p className="text-sm text-slate-600">User management will appear here.</p>
              </TabsContent>
              <TabsContent value="settings" className="mt-4">
                <p className="text-sm text-slate-600">Application settings will appear here.</p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
