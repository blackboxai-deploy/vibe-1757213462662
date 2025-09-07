"use client";

import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    icon: "👥",
    value: "2.4M",
    label: "Subscribers",
    growth: "+12.5%",
    gradient: "from-red-500 to-pink-500"
  },
  {
    icon: "📺", 
    value: "847",
    label: "Videos",
    growth: "+23",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    icon: "👁️",
    value: "156M",
    label: "Total Views", 
    growth: "+2.8M",
    gradient: "from-green-500 to-teal-500"
  },
  {
    icon: "⏱️",
    value: "4.2K",
    label: "Watch Hours",
    growth: "+890",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: "❤️",
    value: "98.7%",
    label: "Like Ratio",
    growth: "+0.3%",
    gradient: "from-pink-500 to-red-500"
  },
  {
    icon: "🌍",
    value: "186",
    label: "Countries",
    growth: "+12",
    gradient: "from-purple-500 to-indigo-500"
  }
];

export default function ChannelStats() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-gaming">
          Channel Analytics
        </h2>
        <p className="text-gray-400 text-lg">
          Real-time statistics and growth metrics
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {stats.map((stat, index) => (
          <Card 
            key={index}
            className="bg-gray-900/40 border-gray-800 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group cursor-pointer"
          >
            <CardContent className="p-6 text-center">
              {/* Icon with Gradient Background */}
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.gradient} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {stat.icon}
              </div>
              
              {/* Main Value */}
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 font-gaming">
                {stat.value}
              </div>
              
              {/* Label */}
              <div className="text-sm text-gray-400 mb-2">
                {stat.label}
              </div>
              
              {/* Growth Indicator */}
              <div className="text-xs text-green-400 font-semibold">
                ↗️ {stat.growth}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Additional Stats Row */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-gray-900/30 border-gray-800 hover:border-purple-500/30 transition-all duration-300">
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-4xl mb-2">🎮</div>
              <div className="text-xl font-bold text-white mb-1">42</div>
              <div className="text-sm text-gray-400 mb-2">Games Played</div>
              <div className="text-xs text-blue-400">This Month</div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-900/30 border-gray-800 hover:border-purple-500/30 transition-all duration-300">
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-4xl mb-2">🏆</div>
              <div className="text-xl font-bold text-white mb-1">127</div>
              <div className="text-sm text-gray-400 mb-2">Achievements</div>
              <div className="text-xs text-yellow-400">Unlocked</div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-900/30 border-gray-800 hover:border-purple-500/30 transition-all duration-300">
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-4xl mb-2">⚡</div>
              <div className="text-xl font-bold text-white mb-1">8.9</div>
              <div className="text-sm text-gray-400 mb-2">Avg Rating</div>
              <div className="text-xs text-purple-400">User Score</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}