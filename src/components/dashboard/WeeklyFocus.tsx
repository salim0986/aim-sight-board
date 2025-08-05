import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Edit3 } from "lucide-react";

interface KeyResult {
  id: string;
  title: string;
  progress: number;
  target: string;
}

interface WeeklyFocusProps {
  keyResults: KeyResult[];
}

export function WeeklyFocus({ keyResults }: WeeklyFocusProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-2xl">🔥</span>
        <h2 className="text-xl font-semibold text-foreground">
          This Week's Focus
        </h2>
      </div>
      
      <div className="space-y-4">
        {keyResults.map((kr) => (
          <div key={kr.id} className="p-4 rounded-lg bg-card-soft border border-border-soft">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-medium text-foreground mb-1">
                  {kr.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Target: {kr.target}
                </p>
              </div>
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary-soft">
                <Edit3 className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium text-foreground">{kr.progress}%</span>
              </div>
              <Progress value={kr.progress} className="h-2" />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}