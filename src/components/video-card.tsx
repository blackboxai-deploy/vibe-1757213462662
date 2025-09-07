"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  uploadedAgo: string;
}

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer group">
      <CardContent className="p-0">
        {/* Thumbnail Container */}
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          {/* Duration Badge */}
          <Badge 
            variant="secondary" 
            className="absolute bottom-2 right-2 bg-black/80 text-white border-none text-xs px-2 py-1"
          >
            {video.duration}
          </Badge>
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-lg">
              <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
            </div>
          </div>
        </div>
        
        {/* Video Info */}
        <div className="p-4">
          <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2 group-hover:text-purple-400 transition-colors duration-300">
            {video.title}
          </h3>
          
          <div className="flex justify-between items-center text-sm text-gray-400">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                👁️ {video.views}
              </span>
              <span className="text-gray-600">•</span>
              <span>{video.uploadedAgo}</span>
            </div>
          </div>
          
          {/* Progress bar (simulated watch progress) */}
          <div className="mt-3 w-full bg-gray-700 rounded-full h-1">
            <div 
              className="bg-purple-500 h-1 rounded-full transition-all duration-300 group-hover:bg-pink-500" 
              style={{ width: `${Math.random() * 60 + 10}%` }}
            ></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}