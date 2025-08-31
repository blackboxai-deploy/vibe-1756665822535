"use client";

import { useState } from "react";
import { Module, modules, searchModules, getModulesByCategory } from "@/lib/modules";
import { ModuleCard } from "./ModuleCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

interface ModuleSelectorProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ModuleSelector({ open, onOpenChange }: ModuleSelectorProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"all" | Module["category"]>("all");

  const handleModuleClick = (module: Module) => {
    console.log(`Navigating to ${module.title}:`, module.path);
    // In a real app, you would navigate to the module path
    onOpenChange(false);
  };

  const getFilteredModules = () => {
    let filteredModules = modules;

    if (searchQuery) {
      filteredModules = searchModules(searchQuery);
    }

    if (selectedCategory !== "all") {
      filteredModules = filteredModules.filter(module => module.category === selectedCategory);
    }

    return filteredModules;
  };

  const filteredModules = getFilteredModules();
  const managementModules = getModulesByCategory("management");
  const analyticsModules = getModulesByCategory("analytics");
  const systemModules = getModulesByCategory("system");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl">Admin Modules</DialogTitle>
          <DialogDescription>
            Select a module to access specific administrative functions
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex gap-4">
            <Input
              placeholder="Search modules..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <div className="flex gap-2">
              <Badge 
                variant={selectedCategory === "all" ? "default" : "secondary"}
                className="cursor-pointer"
                onClick={() => setSelectedCategory("all")}
              >
                All ({modules.length})
              </Badge>
              <Badge 
                variant={selectedCategory === "management" ? "default" : "secondary"}
                className="cursor-pointer"
                onClick={() => setSelectedCategory("management")}
              >
                Management ({managementModules.length})
              </Badge>
              <Badge 
                variant={selectedCategory === "analytics" ? "default" : "secondary"}
                className="cursor-pointer"
                onClick={() => setSelectedCategory("analytics")}
              >
                Analytics ({analyticsModules.length})
              </Badge>
              <Badge 
                variant={selectedCategory === "system" ? "default" : "secondary"}
                className="cursor-pointer"
                onClick={() => setSelectedCategory("system")}
              >
                System ({systemModules.length})
              </Badge>
            </div>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {searchQuery || selectedCategory !== "all" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredModules.map((module) => (
                  <ModuleCard
                    key={module.id}
                    module={module}
                    onClick={handleModuleClick}
                  />
                ))}
              </div>
            ) : (
              <Tabs defaultValue="management" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="management">Management</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                  <TabsTrigger value="system">System</TabsTrigger>
                </TabsList>
                
                <TabsContent value="management" className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {managementModules.map((module) => (
                      <ModuleCard
                        key={module.id}
                        module={module}
                        onClick={handleModuleClick}
                      />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="analytics" className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {analyticsModules.map((module) => (
                      <ModuleCard
                        key={module.id}
                        module={module}
                        onClick={handleModuleClick}
                      />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="system" className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {systemModules.map((module) => (
                      <ModuleCard
                        key={module.id}
                        module={module}
                        onClick={handleModuleClick}
                      />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            )}

            {filteredModules.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                No modules found matching your search criteria.
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}