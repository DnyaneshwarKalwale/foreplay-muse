import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Eye, Search, Filter, Download, Play, Image, FileText, Activity } from "lucide-react";
import { useState } from "react";

const Spyder = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const mockCompetitors = [
    {
      domain: "nike.com",
      activeAds: 156,
      totalSpend: "$2.4M",
      topPlatforms: ["Facebook", "Instagram", "TikTok"],
      latestAd: {
        title: "Just Do It - Summer Collection",
        format: "Video",
        platform: "Facebook",
        status: "Active",
        performance: "High"
      }
    },
    {
      domain: "adidas.com", 
      activeAds: 89,
      totalSpend: "$1.8M",
      topPlatforms: ["Instagram", "YouTube", "TikTok"],
      latestAd: {
        title: "Impossible is Nothing",
        format: "Carousel",
        platform: "Instagram", 
        status: "Active",
        performance: "Medium"
      }
    },
    {
      domain: "underarmour.com",
      activeAds: 43,
      totalSpend: "$980K",
      topPlatforms: ["Facebook", "Instagram"],
      latestAd: {
        title: "We Will - Fitness Gear",
        format: "Single Image",
        platform: "Facebook",
        status: "Active", 
        performance: "High"
      }
    }
  ];

  const apiFeatures = [
    { icon: Eye, title: "Real-time Monitoring", description: "Track competitor ads as they go live" },
    { icon: Activity, title: "Creative Velocity", description: "Analyze how fast competitors test new creatives" },
    { icon: FileText, title: "Auto Transcription", description: "Get text from video and audio ads automatically" },
    { icon: Filter, title: "Advanced Filtering", description: "Filter by domain, platform, format, and more" }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <section className="pt-20 pb-12">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-6 shadow-glow">
              <Eye className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-marketing bg-clip-text text-transparent">
              Spyder API
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Access comprehensive competitor advertising data including videos, images, creative velocity, transcription, and active status.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="pb-12">
        <div className="container">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Search Competitors
              </CardTitle>
              <CardDescription>
                Enter a domain to start spying on their advertising strategy
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Input
                  placeholder="Enter competitor domain (e.g., nike.com)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1"
                />
                <Button className="bg-gradient-primary shadow-glow">
                  <Search className="h-4 w-4 mr-2" />
                  Spy Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* API Features */}
      <section className="pb-12">
        <div className="container">
          <h2 className="text-2xl font-bold text-center mb-8">Spyder API Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {apiFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <feature.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mock Results */}
      <section className="pb-16">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">Competitor Intelligence Dashboard</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {mockCompetitors.map((competitor, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{competitor.domain}</CardTitle>
                    <Badge variant="secondary">{competitor.activeAds} active ads</Badge>
                  </div>
                  <CardDescription>
                    Total Estimated Spend: <span className="font-semibold text-primary">{competitor.totalSpend}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Top Platforms:</p>
                    <div className="flex gap-2">
                      {competitor.topPlatforms.map((platform) => (
                        <Badge key={platform} variant="outline">{platform}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <p className="text-sm font-medium mb-2">Latest Ad:</p>
                    <p className="text-sm font-semibold">{competitor.latestAd.title}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="secondary">{competitor.latestAd.format}</Badge>
                      <Badge variant="outline">{competitor.latestAd.platform}</Badge>
                      <Badge 
                        variant={competitor.latestAd.performance === "High" ? "default" : "secondary"}
                        className={competitor.latestAd.performance === "High" ? "bg-gradient-primary" : ""}
                      >
                        {competitor.latestAd.performance}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Eye className="h-4 w-4 mr-2" />
                      View All
                    </Button>
                    <Button size="sm" className="flex-1 bg-gradient-primary">
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* API Documentation CTA */}
      <section className="pb-16">
        <div className="container">
          <Card className="bg-gradient-primary border-0 shadow-elegant text-primary-foreground">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-4">Ready to Integrate Spyder API?</CardTitle>
              <CardDescription className="text-primary-foreground/90">
                Get comprehensive competitor advertising data with our easy-to-use REST API
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="secondary" size="lg" className="bg-white/20 border-white/30 hover:bg-white/30">
                View API Documentation
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Spyder;