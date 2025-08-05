import { WelcomeBanner } from "@/components/dashboard/WelcomeBanner";
import { WeeklyFocus } from "@/components/dashboard/WeeklyFocus";
import { ProgressOverview } from "@/components/dashboard/ProgressOverview";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { SuggestedActions } from "@/components/dashboard/SuggestedActions";
import { TimelineStatus } from "@/components/dashboard/TimelineStatus";

const Index = () => {
  // Sample data - in a real app, this would come from your API/database
  const bannerStats = {
    totalObjectives: 4,
    completedKeyResults: 7,
    totalKeyResults: 12,
    daysLeft: 23,
  };

  const weeklyFocusKRs = [
    {
      id: "1",
      title: "Increase website conversion rate",
      progress: 65,
      target: "From 2.1% to 3.5%",
    },
    {
      id: "2", 
      title: "Grow LinkedIn followers",
      progress: 40,
      target: "From 1.2k to 2k followers",
    },
    {
      id: "3",
      title: "Launch new product feature",
      progress: 85,
      target: "Beta version ready",
    },
  ];

  const objectives = [
    {
      id: "1",
      title: "Drive Revenue Growth",
      progress: 75,
      status: "on-track" as const,
    },
    {
      id: "2", 
      title: "Improve Customer Experience",
      progress: 90,
      status: "completed" as const,
    },
    {
      id: "3",
      title: "Build Brand Awareness", 
      progress: 45,
      status: "at-risk" as const,
    },
    {
      id: "4",
      title: "Expand Team Capabilities",
      progress: 0,
      status: "not-started" as const,
    },
  ];

  const activities = [
    {
      id: "1",
      type: "update" as const,
      title: "Updated Key Result: Improve SEO",
      description: "Boosted organic traffic growth metrics",
      timestamp: "2 hours ago",
      progress: { from: 40, to: 55 },
    },
    {
      id: "2",
      type: "completion" as const,
      title: "Completed Objective: Launch new landing page",
      description: "Successfully deployed new homepage design",
      timestamp: "1 day ago",
    },
    {
      id: "3",
      type: "milestone" as const,
      title: "Reached milestone: 1000 active users",
      description: "User base growth exceeded expectations",
      timestamp: "3 days ago",
    },
    {
      id: "4",
      type: "update" as const,
      title: "Updated Key Result: Social media engagement",
      description: "Increased engagement rate across all platforms",
      timestamp: "1 week ago",
      progress: { from: 25, to: 35 },
    },
  ];

  const suggestedActions = [
    {
      id: "1",
      type: "reminder" as const,
      title: "Update your OKRs",
      description: "You haven't updated your progress in 5 days",
      actionText: "Update Progress",
      priority: "medium" as const,
    },
    {
      id: "2",
      type: "focus" as const,
      title: "Focus on LinkedIn followers KR",
      description: "This key result is behind schedule and needs attention",
      actionText: "View Details",
      priority: "high" as const,
    },
    {
      id: "3",
      type: "suggestion" as const,
      title: "Schedule weekly check-in",
      description: "Regular reviews help maintain momentum",
      actionText: "Schedule Meeting",
      priority: "low" as const,
    },
  ];

  const timelineData = {
    cycleTitle: "Q3 2025",
    timePassedPercent: 65,
    daysRemaining: 23,
    totalDays: 90,
    milestones: [
      {
        id: "1",
        title: "Mid-quarter review",
        date: "Aug 15",
        completed: true,
      },
      {
        id: "2",
        title: "Product launch deadline",
        date: "Aug 28",
        completed: false,
      },
      {
        id: "3",
        title: "End of quarter review",
        date: "Sep 30",
        completed: false,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Banner */}
        <WelcomeBanner userName="Sarah" stats={bannerStats} />
        
        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <WeeklyFocus keyResults={weeklyFocusKRs} />
            <ActivityFeed activities={activities} />
          </div>
          
          {/* Right Column */}
          <div className="space-y-8">
            <ProgressOverview objectives={objectives} />
            <SuggestedActions actions={suggestedActions} />
            <TimelineStatus {...timelineData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
