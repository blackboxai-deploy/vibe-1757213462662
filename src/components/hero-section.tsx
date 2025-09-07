"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bd79e5a9-e3b2-46f2-8729-44bd3664d8dc.png')`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-slate-900/80 to-pink-900/90" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 md:py-32">
        <div className="text-center">
          {/* Channel Logo/Avatar */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full border-4 border-purple-500 overflow-hidden bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/acf89106-2682-4b0b-acf5-f8da2d8ddea5.png" 
                alt="GameVortex Channel Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Channel Name */}
          <h1 className="text-5xl md:text-7xl font-bold font-gaming mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              GameVortex
            </span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Epic Gaming Content • Reviews • Tutorials • Live Streams
          </p>
          
          {/* Stats & Subscribe */}
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-8">
            <div className="flex gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-white">2.4M</div>
                <div className="text-sm text-gray-400">Subscribers</div>
              </div>
              <div className="w-px h-12 bg-gray-600"></div>
              <div>
                <div className="text-2xl font-bold text-white">847</div>
                <div className="text-sm text-gray-400">Videos</div>
              </div>
              <div className="w-px h-12 bg-gray-600"></div>
              <div>
                <div className="text-2xl font-bold text-white">156M</div>
                <div className="text-sm text-gray-400">Total Views</div>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🔔 Subscribe
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300"
            >
              🎮 Join Discord
            </Button>
          </div>
          
          {/* Upload Schedule Badge */}
          <div className="mt-8">
            <Badge variant="secondary" className="bg-purple-900/50 text-purple-300 border border-purple-500/30 px-4 py-2 text-sm">
              📅 New videos every Tuesday & Friday
            </Badge>
          </div>
        </div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-purple-500 rounded-full animate-ping opacity-50"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-pink-500 rounded-full animate-pulse opacity-30"></div>
      <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-blue-500 rounded-full animate-bounce opacity-40"></div>
    </section>
  );
}