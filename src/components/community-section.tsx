"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const communityPosts = [
  {
    id: 1,
    author: "GamerPro2024",
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9ed60c73-74ff-4676-a205-f3b5b7fc1bd2.png",
    content: "Just watched your Elden Ring speedrun - absolutely INSANE! That boss skip at 1:45:23 was legendary! 🔥",
    timestamp: "2h ago",
    likes: 234,
    replies: 18
  },
  {
    id: 2, 
    author: "IndieGameLover",
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f76be7cc-0cc6-40f4-a94a-52346421bb9d.png",
    content: "Please do more indie game reviews! Your Pizza Tower video got me into that game and I'm obsessed now 🍕",
    timestamp: "5h ago",
    likes: 189,
    replies: 12
  },
  {
    id: 3,
    author: "FPSMaster",
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ff62a760-8986-4441-a16e-3d8fa38478ba.png",
    content: "That Valorant clutch was unreal! Can you do a tutorial on crosshair placement? Your aim is god-tier 🎯",
    timestamp: "1d ago", 
    likes: 456,
    replies: 34
  }
];

const upcomingStreams = [
  {
    game: "Cyberpunk 2077",
    time: "Tonight 8 PM EST",
    thumbnail: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a384cf36-12da-4b49-9689-3d9e2490ca38.png",
    viewers: "2.1K waiting"
  },
  {
    game: "Hollow Knight",
    time: "Tomorrow 6 PM EST", 
    thumbnail: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/93a93ae3-9143-4408-8a4d-6f7980e7f819.png",
    viewers: "1.8K waiting"
  }
];

export default function CommunitySection() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-gaming">
          Community Hub
        </h2>
        <p className="text-gray-400 text-lg">
          Connect with fellow gamers and stay updated on upcoming streams
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded mx-auto mt-4"></div>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Community Comments */}
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Latest Comments</h3>
            <p className="text-gray-400">What the community is saying</p>
          </div>
          
          <div className="space-y-6">
            {communityPosts.map((post) => (
              <Card key={post.id} className="bg-gray-900/40 border-gray-800 hover:border-purple-500/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <img
                        src={post.avatar}
                        alt={post.author}
                        className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 object-cover"
                      />
                    </div>
                    
                    {/* Comment Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold text-white">{post.author}</span>
                        <Badge variant="secondary" className="text-xs bg-purple-900/50 text-purple-300 border-purple-700">
                          Verified Fan
                        </Badge>
                        <span className="text-gray-500 text-sm">{post.timestamp}</span>
                      </div>
                      
                      <p className="text-gray-300 mb-3 leading-relaxed">
                        {post.content}
                      </p>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <button className="flex items-center gap-1 hover:text-pink-400 transition-colors">
                          ❤️ {post.likes}
                        </button>
                        <button className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                          💬 {post.replies}
                        </button>
                        <button className="hover:text-purple-400 transition-colors">
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300">
              View All Comments
            </Button>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="space-y-8">
          {/* Upcoming Streams */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Upcoming Streams</h3>
            <div className="space-y-4">
              {upcomingStreams.map((stream, index) => (
                <Card key={index} className="bg-gray-900/40 border-gray-800 hover:border-purple-500/30 transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-4">
                    <div className="flex gap-3">
                      <img
                        src={stream.thumbnail}
                        alt={stream.game}
                        className="w-16 h-12 rounded object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-white text-sm mb-1 group-hover:text-purple-400 transition-colors">
                          {stream.game}
                        </h4>
                        <p className="text-xs text-gray-400 mb-1">{stream.time}</p>
                        <p className="text-xs text-green-400">{stream.viewers}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Button className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white transition-all duration-300">
              🔴 Join Live Stream
            </Button>
          </div>
          
          {/* Discord Community */}
          <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-3">🎮</div>
              <h3 className="text-xl font-bold text-white mb-2">Join Our Discord</h3>
              <p className="text-gray-300 text-sm mb-4">
                Connect with 15K+ gamers, get early access to videos, and join our gaming sessions!
              </p>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white transition-all duration-300">
                Join Discord Server
              </Button>
            </CardContent>
          </Card>
          
          {/* Newsletter */}
          <Card className="bg-gray-900/40 border-gray-800">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="text-lg font-bold text-white mb-2">Gaming Newsletter</h3>
              <p className="text-gray-400 text-sm mb-4">
                Get weekly gaming news and exclusive content updates
              </p>
              <Button variant="outline" className="w-full border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300">
                Subscribe
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}