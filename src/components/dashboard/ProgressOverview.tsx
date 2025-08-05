import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ObjectiveProgress {
  id: string;
  title: string;
  progress: number;
  status: "completed" | "on-track" | "at-risk" | "not-started";
}

interface ProgressOverviewProps {
  objectives: ObjectiveProgress[];
}

export function ProgressOverview({ objectives }: ProgressOverviewProps) {
  const getStatusColor = (status: ObjectiveProgress["status"]) => {
    switch (status) {
      case "completed":
        return "bg-success text-success-foreground";
      case "on-track":
        return "bg-chart-1 text-white";
      case "at-risk":
        return "bg-warning text-warning-foreground";
      case "not-started":
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusLabel = (status: ObjectiveProgress["status"]) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "on-track":
        return "On Track";
      case "at-risk":
        return "At Risk";
      case "not-started":
        return "Not Started";
    }
  };

  const overallProgress = Math.round(
    objectives.reduce((acc, obj) => acc + obj.progress, 0) / objectives.length
  );

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-2xl">📊</span>
        <h2 className="text-xl font-semibold text-foreground">
          Progress Overview
        </h2>
      </div>
      
      {/* Overall Progress Circle */}
      <div className="flex items-center justify-center mb-8">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="hsl(var(--progress-bg))"
              strokeWidth="8"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="8"
              strokeDasharray={`${overallProgress * 2.51} 251`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{overallProgress}%</div>
              <div className="text-xs text-muted-foreground">Overall</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Objectives List */}
      <div className="space-y-3">
        {objectives.map((objective) => (
          <div key={objective.id} className="flex items-center justify-between p-3 rounded-lg bg-card-soft">
            <div className="flex-1">
              <h4 className="font-medium text-foreground text-sm mb-1">
                {objective.title}
              </h4>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-progress-bg rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${objective.progress}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-foreground w-10 text-right">
                  {objective.progress}%
                </span>
              </div>
            </div>
            <Badge className={`ml-3 ${getStatusColor(objective.status)}`}>
              {getStatusLabel(objective.status)}
            </Badge>
          </div>
        ))}
      </div>
    </Card>
  );
}