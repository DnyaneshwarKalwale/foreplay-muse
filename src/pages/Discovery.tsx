import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Star, PlayCircle, Heart, TrendingUp, Database, Globe } from "lucide-react";
import { useState } from "react";
import nikeAd from "@/assets/nike-ad.jpg";
import iphoneAd from "@/assets/iphone-ad.jpg";
import teslaAd from "@/assets/tesla-ad.jpg";
import spotifyAd from "@/assets/spotify-ad.jpg";

const Discovery = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const mockAds = [
    {
      id: 1,
      title: "Nike Air Max Revolution",
      brand: "Nike",
      platform: "Facebook",
      format: "Video",
      engagement: "42.5K",
      saves: "8.2K",
      domain: "nike.com",
      category: "Sports & Fitness",
      thumbnail: nikeAd,
      description: "Latest Air Max collection featuring revolutionary comfort technology"
    },
    {
      id: 2,
      title: "iPhone 15 Pro Launch",
      brand: "Apple",
      platform: "Instagram",
      format: "Carousel",
      engagement: "156K",
      saves: "23.1K", 
      domain: "apple.com",
      category: "Technology",
      thumbnail: iphoneAd,
      description: "Introducing the most advanced iPhone with titanium design"
    },
    {
      id: 3,
      title: "Tesla Model Y Adventure",
      brand: "Tesla",
      platform: "TikTok",
      format: "Video",
      engagement: "89.3K",
      saves: "12.7K",
      domain: "tesla.com", 
      category: "Automotive",
      thumbnail: teslaAd,
      description: "Experience the future of electric vehicles with Model Y"
    },
    {
      id: 4,
      title: "Spotify Premium Benefits",
      brand: "Spotify",
      platform: "YouTube",
      format: "Video",
      engagement: "67.8K",
      saves: "15.4K",
      domain: "spotify.com",
      category: "Entertainment",
      thumbnail: spotifyAd,
      description: "Unlimited music streaming with premium features"
    }
  ];

  const discoveryStats = [
    { label: "Total Ads Database", value: "100M+", icon: Database },
    { label: "Active Marketers", value: "30K+", icon: TrendingUp },
    { label: "Countries Covered", value: "195", icon: Globe }
  ];

  const platforms = ["Facebook", "Instagram", "TikTok", "YouTube", "LinkedIn", "Twitter"];
  const categories = ["Technology", "Sports & Fitness", "Fashion", "Automotive", "Entertainment", "Finance"];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <section className="pt-20 pb-12">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-6 shadow-glow">
              <Search className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-marketing bg-clip-text text-transparent">
              Discovery API
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Query the largest social advertising database of over 100 million ads by domain, keywords, product categories and more.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {discoveryStats.map((stat, index) => (
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

      {/* Search Interface */}
      <section className="pb-12">
        <div className="container">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Discover Winning Ads
              </CardTitle>
              <CardDescription>
                Search through 100+ million ads using keywords, domains, or categories
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <Input
                  placeholder="Search by keyword, brand, or domain..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1"
                />
                <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
                  <SelectTrigger className="w-full md:w-40">
                    <SelectValue placeholder="Platform" />
                  </SelectTrigger>
                  <SelectContent>
                    {platforms.map((platform) => (
                      <SelectItem key={platform} value={platform}>{platform}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full md:w-40">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button className="bg-gradient-primary shadow-glow">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Results Grid */}
      <section className="pb-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Trending Ads</h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Button variant="outline" size="sm">
                Sort by Performance
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockAds.map((ad) => (
              <Card key={ad.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="w-20 h-20 rounded-lg overflow-hidden mb-2">
                      <img 
                        src={ad.thumbnail} 
                        alt={ad.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Badge variant="outline">{ad.platform}</Badge>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{ad.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {ad.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Brand:</span>
                    <span className="font-medium">{ad.brand}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Category:</span>
                    <Badge variant="secondary" className="text-xs">{ad.category}</Badge>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4 text-red-500" />
                      {ad.engagement}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      {ad.saves}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <PlayCircle className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" className="flex-1 bg-gradient-primary">
                      <Heart className="h-4 w-4 mr-1" />
                      Save
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Results
            </Button>
          </div>
        </div>
      </section>

      {/* API Integration CTA */}
      <section className="pb-16">
        <div className="container">
          <Card className="bg-gradient-primary border-0 shadow-elegant text-primary-foreground">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-4">Integrate Discovery API</CardTitle>
              <CardDescription className="text-primary-foreground/90">
                Access our vast advertising database programmatically with simple REST API calls
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="bg-white/20 border-white/30 hover:bg-white/30">
                  API Documentation
                </Button>
                <Button variant="secondary" size="lg" className="bg-white/20 border-white/30 hover:bg-white/30">
                  Get API Key
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Discovery;