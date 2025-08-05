import { Card } from "@/components/ui/card";

interface WelcomeBannerProps {
  userName: string;
  stats: {
    totalObjectives: number;
    completedKeyResults: number;
    totalKeyResults: number;
    daysLeft: number;
  };
}

export function WelcomeBanner({ userName, stats }: WelcomeBannerProps) {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-border-soft p-8 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {getGreeting()}, {userName} 👋
          </h1>
          <p className="text-muted-foreground text-lg">
            Here's your OKR progress at a glance
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">
              {stats.totalObjectives}
            </div>
            <div className="text-sm text-muted-foreground">
              Total Objectives
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-success mb-1">
              {stats.completedKeyResults} / {stats.totalKeyResults}
            </div>
            <div className="text-sm text-muted-foreground">
              Key Results Completed
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-accent mb-1">
              {stats.daysLeft}
            </div>
            <div className="text-sm text-muted-foreground">
              Days Left in Cycle
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}