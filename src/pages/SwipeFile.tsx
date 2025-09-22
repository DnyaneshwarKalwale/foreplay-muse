import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FolderOpen, Search, Plus, Star, Tag, Grid, List, Filter, Share2, Download } from "lucide-react";
import { useState } from "react";

const SwipeFile = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  const mockFolders = [
    { name: "E-commerce Heroes", count: 45, color: "bg-blue-500" },
    { name: "SaaS Onboarding", count: 32, color: "bg-green-500" },
    { name: "Video Ads", count: 67, color: "bg-purple-500" },
    { name: "Holiday Campaigns", count: 28, color: "bg-red-500" },
    { name: "Mobile App Ads", count: 53, color: "bg-orange-500" },
    { name: "B2B Campaigns", count: 19, color: "bg-teal-500" }
  ];

  const mockBoards = [
    { name: "Q4 Campaign Ideas", ads: 23, collaborators: 4, lastUpdated: "2 days ago" },
    { name: "Competitor Analysis", ads: 56, collaborators: 2, lastUpdated: "1 week ago" },
    { name: "Video Inspiration", ads: 34, collaborators: 6, lastUpdated: "3 days ago" },
    { name: "Holiday Creatives", ads: 41, collaborators: 3, lastUpdated: "5 days ago" }
  ];

  const mockSavedAds = [
    {
      id: 1,
      title: "Shopify Store Builder",
      brand: "Shopify",
      platform: "Facebook",
      tags: ["E-commerce", "SaaS", "Tutorial"],
      savedDate: "2024-01-15",
      folder: "E-commerce Heroes",
      thumbnail: "🛍️"
    },
    {
      id: 2,
      title: "Slack Team Collaboration",
      brand: "Slack",
      platform: "LinkedIn",
      tags: ["B2B", "Productivity", "Teams"],
      savedDate: "2024-01-14",
      folder: "SaaS Onboarding",
      thumbnail: "💬"
    },
    {
      id: 3,
      title: "Airbnb Travel Experience",
      brand: "Airbnb",
      platform: "Instagram",
      tags: ["Travel", "Video", "Experience"],
      savedDate: "2024-01-13",
      folder: "Video Ads",
      thumbnail: "🏠"
    },
    {
      id: 4,
      title: "Netflix Original Series",
      brand: "Netflix",
      platform: "TikTok",
      tags: ["Entertainment", "Video", "Series"],
      savedDate: "2024-01-12",
      folder: "Video Ads",
      thumbnail: "🎬"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <section className="pt-20 pb-12">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-6 shadow-glow">
              <FolderOpen className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-marketing bg-clip-text text-transparent">
              Swipe File API
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Access the ads saved within your Foreplay account and query for ads based on folders, boards, and tags.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Actions */}
      <section className="pb-12">
        <div className="container">
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search your saved ads, folders, and tags..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}>
                    {viewMode === "grid" ? <List className="h-4 w-4" /> : <Grid className="h-4 w-4" />}
                  </Button>
                  <Button size="sm" className="bg-gradient-primary shadow-glow">
                    <Plus className="h-4 w-4 mr-2" />
                    New Folder
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16">
        <div className="container">
          <Tabs defaultValue="folders" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3">
              <TabsTrigger value="folders">Folders</TabsTrigger>
              <TabsTrigger value="boards">Boards</TabsTrigger>
              <TabsTrigger value="saved-ads">Saved Ads</TabsTrigger>
            </TabsList>

            <TabsContent value="folders" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Your Folders</h2>
                <Button variant="outline">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Folder
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockFolders.map((folder, index) => (
                  <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-lg ${folder.color} flex items-center justify-center`}>
                          <FolderOpen className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg">{folder.name}</CardTitle>
                          <CardDescription>{folder.count} ads</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          View
                        </Button>
                        <Button size="sm" className="flex-1 bg-gradient-primary">
                          <Share2 className="h-4 w-4 mr-1" />
                          Share
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="boards" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Collaboration Boards</h2>
                <Button variant="outline">
                  <Plus className="h-4 w-4 mr-2" />
                  New Board
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {mockBoards.map((board, index) => (
                  <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{board.name}</CardTitle>
                          <CardDescription>
                            {board.ads} ads • {board.collaborators} collaborators
                          </CardDescription>
                        </div>
                        <Badge variant="secondary">{board.lastUpdated}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          View Board
                        </Button>
                        <Button size="sm" className="flex-1 bg-gradient-primary">
                          <Share2 className="h-4 w-4 mr-1" />
                          Collaborate
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="saved-ads" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Recently Saved Ads</h2>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export All
                </Button>
              </div>

              <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-4"}>
                {mockSavedAds.map((ad) => (
                  <Card key={ad.id} className={`group hover:shadow-elegant transition-all duration-300 ${viewMode === "grid" ? "hover:-translate-y-1" : ""}`}>
                    <CardHeader className={viewMode === "list" ? "pb-3" : ""}>
                      <div className={`flex ${viewMode === "list" ? "items-center gap-4" : "items-start justify-between"}`}>
                        <div className={`${viewMode === "list" ? "flex items-center gap-3" : ""}`}>
                          <div className="text-4xl">{ad.thumbnail}</div>
                          <div className={viewMode === "list" ? "flex-1" : ""}>
                            <CardTitle className="text-lg line-clamp-1">{ad.title}</CardTitle>
                            <CardDescription>
                              {ad.brand} • {ad.platform}
                            </CardDescription>
                          </div>
                        </div>
                        {viewMode === "grid" && <Badge variant="outline">{ad.platform}</Badge>}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex flex-wrap gap-1">
                        {ad.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="text-sm text-muted-foreground">
                        Folder: <span className="font-medium">{ad.folder}</span>
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          View Ad
                        </Button>
                        <Button size="sm" className="flex-1 bg-gradient-primary">
                          <Star className="h-4 w-4 mr-1" />
                          Favorite
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* API Integration CTA */}
      <section className="pb-16">
        <div className="container">
          <Card className="bg-gradient-primary border-0 shadow-elegant text-primary-foreground">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-4">Access Your Swipe File via API</CardTitle>
              <CardDescription className="text-primary-foreground/90">
                Programmatically access your saved ads, folders, and boards through our REST API
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="bg-white/20 border-white/30 hover:bg-white/30">
                  View API Docs
                </Button>
                <Button variant="secondary" size="lg" className="bg-white/20 border-white/30 hover:bg-white/30">
                  Get Access Token
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default SwipeFile;