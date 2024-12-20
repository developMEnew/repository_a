
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  
  const [activeTab, setActiveTab] = useState('home');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <main className="flex-1 overflow-y-auto">
        {activeTab === 'home' && <HomeTab />}
        {activeTab === 'view' && <ViewTab />}
        {activeTab === 'manage' && <ManageTab />}
        {activeTab === 'profile' &&  <ProfileTab />}
        {activeTab === 'user' && <UserTab />}
      </main>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="fixed bottom-0 w-full max-w-md">
        <TabsList className="grid grid-cols-5 h-16 bg-background border-t">
          <TabsTrigger value="home" className="flex flex-col gap-1 data-[state=active]:text-primary">
            <Home className="h-5 w-5" />
            <span className="text-xs">Home</span>
          </TabsTrigger>
          <TabsTrigger 
            value="view" 
            className="flex flex-col gap-1 data-[state=active]:text-primary"
          >
            <Eye className="h-5 w-5" />
            <span className="text-xs">View</span>
          </TabsTrigger>
          <TabsTrigger 
            value="manage"
            className="flex flex-col gap-1 data-[state=active]:text-primary"
          >
            <ListChecks className="h-5 w-5" />
            <span className="text-xs">Manage</span>
          </TabsTrigger>
          <TabsTrigger 
            value="profile"
            className="flex flex-col gap-1 data-[state=active]:text-primary"
          >
            <User className="h-5 w-5" />
            <span className="text-xs">Profile</span>
          </TabsTrigger>
          <TabsTrigger 
            value="user"
            className="flex flex-col gap-1 data-[state=active]:text-primary"
          >
            <User className="h-5 w-5" />
            <span className="text-xs">User</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </main>
  );
}
