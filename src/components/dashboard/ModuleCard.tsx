"use client";

import { Module } from "@/lib/modules";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ModuleCardProps {
  module: Module;
  onClick: (module: Module) => void;
}

export function ModuleCard({ module, onClick }: ModuleCardProps) {
  return (
    <Card 
      className="cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105 group"
      onClick={() => onClick(module)}
    >
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between">
          <div className={`w-12 h-12 rounded-lg ${module.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
            <div className="w-6 h-6 bg-white rounded-sm opacity-90"></div>
          </div>
          <Badge variant="secondary" className="text-xs">
            {module.category}
          </Badge>
        </div>
        
        <div className="space-y-1">
          <CardTitle className="text-lg group-hover:text-primary transition-colors">
            {module.title}
          </CardTitle>
          <CardDescription className="text-sm leading-relaxed">
            {module.description}
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
}