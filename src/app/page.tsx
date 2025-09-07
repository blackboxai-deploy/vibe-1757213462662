"use client";

import HeroSection from "@/components/hero-section";
import FeaturedVideo from "@/components/featured-video";
import VideoCard from "@/components/video-card";
import GamingCategories from "@/components/gaming-categories";
import ChannelStats from "@/components/channel-stats";
import CommunitySection from "@/components/community-section";
import Footer from "@/components/footer";

// Mock data for recent uploads
const recentVideos = [
  {
    id: "1",
    title: "INSANE 1v5 CLUTCH in Valorant Ranked!",
    thumbnail: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cddbdc7a-5fa6-461d-912d-3f55c333ed88.png",
    duration: "12:45",
    views: "245K",
    uploadedAgo: "2 days ago"
  },
  {
    id: "2", 
    title: "Building the ULTIMATE Gaming Setup 2024",
    thumbnail: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d01e838f-59bd-4711-a224-589b63909f4c.png",
    duration: "18:32",
    views: "189K",
    uploadedAgo: "4 days ago"
  },
  {
    id: "3",
    title: "Cyberpunk 2077 Hidden Secrets You MISSED!",
    thumbnail: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/76de9702-0a19-4b33-b0b0-d71303c7d20c.png",
    duration: "15:21",
    views: "312K", 
    uploadedAgo: "1 week ago"
  },
  {
    id: "4",
    title: "Speedrunning Elden Ring in Under 3 Hours",
    thumbnail: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b15a719d-539b-466b-9578-110d804a3787.png",
    duration: "2:58:14",
    views: "567K",
    uploadedAgo: "1 week ago"
  },
  {
    id: "5",
    title: "Indie Game Gems You Need to Play NOW!",
    thumbnail: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a572cfd6-9a8e-45d2-9354-28d0ae933702.png",
    duration: "22:17",
    views: "198K",
    uploadedAgo: "2 weeks ago"
  },
  {
    id: "6",
    title: "Reacting to My First Gaming Video (CRINGE)",
    thumbnail: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d9e56b28-b00d-442c-955e-a3cc9634ff36.png",
    duration: "16:42",
    views: "423K",
    uploadedAgo: "2 weeks ago"
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Channel Stats */}
      <ChannelStats />
      
      {/* Featured Video */}
      <FeaturedVideo />
      
      {/* Recent Uploads */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-gaming">
            Recent Uploads
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </section>
      
      {/* Gaming Categories */}
      <GamingCategories />
      
      {/* Community Section */}
      <CommunitySection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}