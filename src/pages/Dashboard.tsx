import { FeatureCard } from "@/components/ui/feature-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Search, FolderOpen, Zap, Target, TrendingUp, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Spyder API",
      description: "Access competitor advertising data including videos, images, creative velocity, transcription, and active status.",
      icon: Eye,
      features: ["Competitor Analysis", "Creative Velocity", "Auto Transcription", "Active Status"],
      buttonText: "Explore Spyder",
      onAction: () => navigate("/spyder")
    },
    {
      title: "Discovery API", 
      description: "Query the largest social advertising database of over 100 million ads by domain, keywords, and product categories.",
      icon: Search,
      features: ["100M+ Ads", "Keyword Search", "Domain Analysis", "Product Categories"],
      buttonText: "Start Discovery",
      onAction: () => navigate("/discovery")
    },
    {
      title: "Swipe File API",
      description: "Access the ads saved within your Foreplay account and query for ads based on folders, boards, and tags.",
      icon: FolderOpen,
      features: ["Saved Ads", "Folder Organization", "Board Management", "Tag Filtering"],
      buttonText: "View Swipe File",
      onAction: () => navigate("/swipe-file")
    }
  ];

  const stats = [
    { label: "Total Ads", value: "100M+", icon: Target },
    { label: "Active Campaigns", value: "2.5M", icon: TrendingUp },
    { label: "API Calls Today", value: "45,231", icon: BarChart3 }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-marketing opacity-5"></div>
        <div className="container relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-marketing bg-clip-text text-transparent">
              Foreplay API Platform
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Access the world's largest advertising intelligence database through our powerful APIs. 
              Discover winning ads, spy on competitors, and organize your creative inspiration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary shadow-glow hover:shadow-elegant transition-all duration-300">
                <Zap className="h-5 w-5 mr-2" />
                Get API Access
              </Button>
              <Button size="lg" variant="outline">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-card">
                <CardContent className="pt-6">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Three Powerful APIs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the right API for your advertising intelligence needs. Each API provides unique capabilities for different use cases.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card/30">
        <div className="container">
          <Card className="border-0 shadow-elegant bg-gradient-primary">
            <CardHeader className="text-center text-primary-foreground">
              <CardTitle className="text-3xl font-bold mb-4">Ready to Get Started?</CardTitle>
              <CardDescription className="text-primary-foreground/90 text-lg">
                Join thousands of marketers using Foreplay APIs to discover winning ads and spy on competitors.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button size="lg" variant="secondary" className="bg-white/20 text-primary-foreground border-white/30 hover:bg-white/30">
                Start Free Trial
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;