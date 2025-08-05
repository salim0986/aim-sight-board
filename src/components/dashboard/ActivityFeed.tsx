import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, TrendingUp, Target, Calendar } from "lucide-react";

interface Activity {
  id: string;
  type: "update" | "completion" | "milestone" | "reminder";
  title: string;
  description: string;
  timestamp: string;
  progress?: {
    from: number;
    to: number;
  };
}

interface ActivityFeedProps {
  activities: Activity[];
}

export function ActivityFeed({ activities }: ActivityFeedProps) {
  const getActivityIcon = (type: Activity["type"]) => {
    switch (type) {
      case "update":
        return <TrendingUp className="h-4 w-4 text-chart-1" />;
      case "completion":
        return <CheckCircle2 className="h-4 w-4 text-success" />;
      case "milestone":
        return <Target className="h-4 w-4 text-accent" />;
      case "reminder":
        return <Calendar className="h-4 w-4 text-warning" />;
    }
  };

  const getActivityBadge = (type: Activity["type"]) => {
    switch (type) {
      case "update":
        return <Badge variant="secondary" className="bg-chart-1/10 text-chart-1 border-chart-1/20">Update</Badge>;
      case "completion":
        return <Badge variant="secondary" className="bg-success/10 text-success border-success/20">Completed</Badge>;
      case "milestone":
        return <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">Milestone</Badge>;
      case "reminder":
        return <Badge variant="secondary" className="bg-warning/10 text-warning border-warning/20">Reminder</Badge>;
    }
  };

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-2xl">📝</span>
        <h2 className="text-xl font-semibold text-foreground">
          Recent Activity
        </h2>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={activity.id} className="flex gap-4">
            {/* Timeline */}
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-card-soft border-2 border-border">
                {getActivityIcon(activity.type)}
              </div>
              {index < activities.length - 1 && (
                <div className="w-px h-8 bg-border-soft mt-2"></div>
              )}
            </div>
            
            {/* Content */}
            <div className="flex-1 pb-4">
              <div className="flex items-center gap-2 mb-2">
                {getActivityBadge(activity.type)}
                <span className="text-xs text-muted-foreground">
                  {activity.timestamp}
                </span>
              </div>
              
              <h4 className="font-medium text-foreground mb-1">
                {activity.title}
              </h4>
              
              <p className="text-sm text-muted-foreground mb-2">
                {activity.description}
              </p>
              
              {activity.progress && (
                <div className="text-xs text-success">
                  Progress: {activity.progress.from}% → {activity.progress.to}%
                  <span className="text-muted-foreground ml-2">
                    (+{activity.progress.to - activity.progress.from}%)
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}