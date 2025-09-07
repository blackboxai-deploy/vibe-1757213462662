"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const gamingCategories = [
  {
    id: "fps",
    title: "FPS Games",
    description: "Intense first-person shooter action",
    thumbnail: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7be67166-d593-4a95-8cd5-16919662b50d.png",
    videoCount: 124,
    gradient: "from-red-600 to-orange-500",
    icon: "🎯"
  },
  {
    id: "rpg", 
    title: "RPG Adventures",
    description: "Epic role-playing game journeys",
    thumbnail: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0c413375-395a-46f8-a7fe-7aa392dd9490.png",
    videoCount: 89,
    gradient: "from-purple-600 to-blue-500",
    icon: "⚔️"
  },
  {
    id: "indie",
    title: "Indie Gems",
    description: "Hidden treasures from indie developers",
    thumbnail: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0e5d9f26-65e0-4446-a40d-f8a35cbffc70.png",
    videoCount: 67,
    gradient: "from-pink-600 to-purple-500",
    icon: "💎"
  },
  {
    id: "horror",
    title: "Horror Games",
    description: "Spine-chilling horror experiences",
    thumbnail: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3259dc9d-6c44-4f2d-a8c8-6212a241aa9f.png",
    videoCount: 45,
    gradient: "from-gray-800 to-red-900",
    icon: "👻"
  },
  {
    id: "racing",
    title: "Racing Games", 
    description: "High-speed racing and car content",
    thumbnail: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1e57f67c-c74b-4cc6-be93-0a7830bb98ba.png",
    videoCount: 38,
    gradient: "from-yellow-500 to-red-500",
    icon: "🏎️"
  },
  {
    id: "strategy",
    title: "Strategy Games",
    description: "Tactical gameplay and big brain moves",
    thumbnail: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/48a2f8b7-d90c-4256-8d1c-a25ff01bdb7a.png",
    videoCount: 52,
    gradient: "from-green-600 to-blue-600",
    icon: "🧠"
  }
];

export default function GamingCategories() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-gaming">
          Gaming Categories
        </h2>
        <p className="text-gray-400 text-lg mb-6">
          Explore our content organized by your favorite game genres
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {gamingCategories.map((category) => (
          <Card 
            key={category.id}
            className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer group overflow-hidden"
          >
            <CardContent className="p-0">
              {/* Category Image */}
              <div className="relative overflow-hidden">
                <img
                  src={category.thumbnail}
                  alt={category.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-300`} />
                
                {/* Category Icon */}
                <div className="absolute top-4 left-4 text-3xl filter drop-shadow-lg">
                  {category.icon}
                </div>
                
                {/* Video Count Badge */}
                <Badge 
                  variant="secondary" 
                  className="absolute top-4 right-4 bg-black/80 text-white border-none px-3 py-1"
                >
                  {category.videoCount} videos
                </Badge>
              </div>
              
              {/* Category Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {category.description}
                </p>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-purple-500/30 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 group-hover:border-purple-400"
                >
                  Explore {category.title}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* View All Categories Button */}
      <div className="text-center mt-12">
        <Button 
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          View All Categories
        </Button>
      </div>
    </section>
  );
}