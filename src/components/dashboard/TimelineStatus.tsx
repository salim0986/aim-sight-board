import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Calendar, Clock } from "lucide-react";

interface TimelineStatusProps {
  cycleTitle: string;
  timePassedPercent: number;
  daysRemaining: number;
  totalDays: number;
  milestones?: {
    id: string;
    title: string;
    date: string;
    completed: boolean;
  }[];
}

export function TimelineStatus({ 
  cycleTitle, 
  timePassedPercent, 
  daysRemaining, 
  totalDays,
  milestones = []
}: TimelineStatusProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-2xl">📅</span>
        <h2 className="text-xl font-semibold text-foreground">
          OKR Cycle Timeline
        </h2>
      </div>
      
      {/* Cycle Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-foreground">{cycleTitle}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{Math.round(timePassedPercent)}% Time Passed</span>
          </div>
        </div>
        
        <Progress value={timePassedPercent} className="h-3 mb-3" />
        
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">
            {totalDays - daysRemaining} days completed
          </span>
          <span className="font-medium text-foreground">
            {daysRemaining} days remaining
          </span>
        </div>
      </div>
      
      {/* Milestones */}
      {milestones.length > 0 && (
        <div>
          <h4 className="font-medium text-foreground mb-4 flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Upcoming Milestones
          </h4>
          
          <div className="space-y-3">
            {milestones.map((milestone) => (
              <div 
                key={milestone.id}
                className={`flex items-center justify-between p-3 rounded-lg ${
                  milestone.completed 
                    ? 'bg-success-soft border border-success/20' 
                    : 'bg-card-soft border border-border-soft'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    milestone.completed ? 'bg-success' : 'bg-muted'
                  }`} />
                  <span className={`text-sm ${
                    milestone.completed 
                      ? 'text-success-foreground line-through' 
                      : 'text-foreground'
                  }`}>
                    {milestone.title}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {milestone.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
}