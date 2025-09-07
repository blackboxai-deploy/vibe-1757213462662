"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function FeaturedVideo() {
  const featuredVideo = {
    title: "The Most INSANE Gaming Moments of 2024!",
    description: "Get ready for an epic compilation of the most incredible gaming moments from this year! From impossible clutches to mind-blowing glitches, this video has everything that made 2024 unforgettable in gaming.",
    thumbnail: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6e501ed7-6ea1-4995-b5cc-c3e181d04427.png",
    duration: "24:31",
    views: "1.2M",
    likes: "87K",
    uploadedAgo: "3 days ago"
  };

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-gaming">
          Featured Video
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded mx-auto"></div>
      </div>
      
      <Card className="bg-gray-900/30 border-gray-800 overflow-hidden">
        <CardContent className="p-0">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Video Preview */}
            <div className="relative group cursor-pointer">
              <img
                src={featuredVideo.thumbnail}
                alt={featuredVideo.title}
                className="w-full h-full min-h-[300px] lg:min-h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Duration Badge */}
              <Badge 
                variant="secondary" 
                className="absolute top-4 right-4 bg-black/80 text-white border-none px-3 py-1 text-sm"
              >
                {featuredVideo.duration}
              </Badge>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 shadow-2xl group-hover:bg-red-700">
                  <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                </div>
              </div>
              
              {/* New Badge */}
              <Badge className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-none px-3 py-1 text-sm animate-pulse">
                🔥 TRENDING
              </Badge>
            </div>
            
            {/* Video Info */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                    {featuredVideo.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {featuredVideo.description}
                  </p>
                </div>
                
                {/* Stats */}
                <div className="flex flex-wrap gap-6 text-sm text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400">👁️</span>
                    <span className="text-white font-semibold">{featuredVideo.views}</span>
                    <span>views</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-pink-400">❤️</span>
                    <span className="text-white font-semibold">{featuredVideo.likes}</span>
                    <span>likes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">📅</span>
                    <span>{featuredVideo.uploadedAgo}</span>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    ▶️ Watch Now
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
                  >
                    📝 Add to Playlist
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}