import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Target, TrendingUp, AlertCircle } from "lucide-react";

interface SuggestedAction {
  id: string;
  type: "reminder" | "suggestion" | "focus" | "urgent";
  title: string;
  description: string;
  actionText: string;
  priority: "high" | "medium" | "low";
}

interface SuggestedActionsProps {
  actions: SuggestedAction[];
}

export function SuggestedActions({ actions }: SuggestedActionsProps) {
  const getActionIcon = (type: SuggestedAction["type"]) => {
    switch (type) {
      case "reminder":
        return <Clock className="h-4 w-4" />;
      case "suggestion":
        return <TrendingUp className="h-4 w-4" />;
      case "focus":
        return <Target className="h-4 w-4" />;
      case "urgent":
        return <AlertCircle className="h-4 w-4" />;
    }
  };

  const getActionStyle = (type: SuggestedAction["type"], priority: SuggestedAction["priority"]) => {
    if (priority === "high") {
      return "border-l-4 border-l-danger bg-danger-soft";
    }
    
    switch (type) {
      case "reminder":
        return "border-l-4 border-l-warning bg-warning-soft";
      case "suggestion":
        return "border-l-4 border-l-chart-1 bg-primary-soft";
      case "focus":
        return "border-l-4 border-l-accent bg-accent-soft";
      case "urgent":
        return "border-l-4 border-l-danger bg-danger-soft";
    }
  };

  const getPriorityBadge = (priority: SuggestedAction["priority"]) => {
    switch (priority) {
      case "high":
        return <Badge variant="destructive">High Priority</Badge>;
      case "medium":
        return <Badge className="bg-warning text-warning-foreground">Medium</Badge>;
      case "low":
        return <Badge variant="secondary">Low</Badge>;
    }
  };

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-2xl">🚀</span>
        <h2 className="text-xl font-semibold text-foreground">
          Suggested Actions
        </h2>
      </div>
      
      <div className="space-y-4">
        {actions.map((action) => (
          <div 
            key={action.id} 
            className={`p-4 rounded-lg ${getActionStyle(action.type, action.priority)}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-surface/50">
                  {getActionIcon(action.type)}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-medium text-foreground">
                      {action.title}
                    </h4>
                    {getPriorityBadge(action.priority)}
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    {action.description}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-surface hover:bg-muted"
                  >
                    {action.actionText}
                    <ArrowRight className="h-3 w-3 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}