"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@shadcn/ui";
import { UserPlus, MessageCircle, MapPin, Bell } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Neighborhood Connect</h1>
        <div>
          <Button className="mr-2">Sign Up</Button>
          <Button variant="secondary">Login</Button>
        </div>
      </header>

      <main className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <section className="md:col-span-2">
            <Tabs>
              <TabsList>
                <TabsTrigger value="posts"><MessageCircle className="inline mr-1" /> Posts</TabsTrigger>
                <TabsTrigger value="events"><MapPin className="inline mr-1" /> Events</TabsTrigger>
                <TabsTrigger value="alerts"><Bell className="inline mr-1" /> Alerts</TabsTrigger>
              </TabsList>

              <TabsContent value="posts">
                <Card className="mb-4">
                  <CardContent>
                    <h2 className="font-semibold text-lg">Welcome Post</h2>
                    <p className="text-sm text-gray-600">Share your thoughts with the community!</p>
                    <Textarea placeholder="Write something..." className="my-4" />
                    <Button>Post</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent>
                    <h3 className="font-semibold">Jane Doe</h3>
                    <p className="text-gray-600">Looking for a good local plumber. Any recommendations?</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="events">
                <Card>
                  <CardContent>
                    <h3 className="font-semibold">Community BBQ</h3>
                    <p className="text-gray-600">Join us this Saturday at the park!</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="alerts">
                <Card>
                  <CardContent>
                    <h3 className="font-semibold">Water Outage Alert</h3>
                    <p className="text-red-600">The neighborhood will experience a water outage tomorrow from 9 AM to 1 PM.</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>

          <aside className="hidden md:block">
            <Card>
              <CardContent>
                <h2 className="font-semibold text-lg">New Members</h2>
                <div className="mt-4">
                  <p><UserPlus className="inline mr-2" /> John Smith joined!</p>
                  <p><UserPlus className="inline mr-2" /> Alice Brown joined!</p>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>

      <footer className="mt-6 text-center text-gray-600">
        <p>&copy; 2025 Neighborhood Connect. All rights reserved.</p>
      </footer>
    </div>
  );
}
