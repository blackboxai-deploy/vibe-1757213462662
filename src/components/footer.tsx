"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const socialLinks = [
  {
    name: "YouTube",
    icon: "📺",
    url: "#",
    color: "hover:text-red-400",
    followers: "2.4M"
  },
  {
    name: "Twitch", 
    icon: "🟣",
    url: "#",
    color: "hover:text-purple-400",
    followers: "890K"
  },
  {
    name: "Discord",
    icon: "💬",
    url: "#", 
    color: "hover:text-indigo-400",
    followers: "15K"
  },
  {
    name: "Twitter",
    icon: "🐦",
    url: "#",
    color: "hover:text-blue-400", 
    followers: "1.2M"
  },
  {
    name: "Instagram",
    icon: "📸",
    url: "#",
    color: "hover:text-pink-400",
    followers: "750K"
  },
  {
    name: "TikTok",
    icon: "📱",
    url: "#",
    color: "hover:text-white",
    followers: "1.8M"
  }
];

const quickLinks = [
  "About", "Contact", "Privacy Policy", "Terms of Service", "Merch Store", "Sponsorships"
];

const gamingSetup = [
  { item: "GPU", spec: "RTX 4090" },
  { item: "CPU", spec: "i9-13900K" },
  { item: "RAM", spec: "32GB DDR5" },
  { item: "Monitor", spec: "240Hz OLED" }
];

export default function Footer() {
  return (
    <footer className="bg-gray-950/80 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Channel Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold font-gaming bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                GameVortex
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Your ultimate destination for epic gaming content, reviews, tutorials, and live streams. Join our community of passionate gamers!
              </p>
            </div>
            
            <div className="space-y-3 text-sm text-gray-400">
              <div>📧 business@gamevortex.com</div>
              <div>📍 Los Angeles, CA</div>
              <div>🎬 Upload Schedule: Tue & Fri</div>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold text-white mb-6">Follow Us</h4>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-900/30 hover:bg-gray-800/50 transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{social.icon}</span>
                    <span className={`text-gray-300 group-${social.color} transition-colors`}>
                      {social.name}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">{social.followers}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gaming Setup */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold text-white mb-6">Gaming Setup</h4>
            <Card className="bg-gray-900/30 border-gray-800">
              <CardContent className="p-4">
                <div className="space-y-3">
                  {gamingSetup.map((item, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">{item.item}:</span>
                      <span className="text-white font-semibold">{item.spec}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full mt-4 border-purple-500/30 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 text-xs"
                >
                  View Full Setup
                </Button>
              </CardContent>
            </Card>
            
            <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/20">
              <div className="text-center">
                <div className="text-2xl mb-1">🎮</div>
                <div className="text-sm text-purple-300">Currently Playing</div>
                <div className="text-white font-semibold text-sm">Baldur's Gate 3</div>
              </div>
            </div>
          </div>
          
          {/* Quick Links & Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 mb-8">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm py-1"
                >
                  {link}
                </a>
              ))}
            </div>
            
            {/* Newsletter Signup */}
            <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/30">
              <CardContent className="p-4">
                <h5 className="font-bold text-white mb-2 text-sm">Gaming Newsletter</h5>
                <p className="text-xs text-gray-400 mb-3">
                  Get exclusive updates and early access to new content
                </p>
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded focus:border-purple-500 focus:outline-none text-white"
                  />
                  <Button 
                    size="sm" 
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white text-xs transition-all duration-300"
                  >
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500">
              © 2024 GameVortex. All rights reserved. Made with ❤️ for gamers worldwide.
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>🌟 Verified Creator</span>
              <span>🔒 Safe Content</span>
              <span>⚡ 4K Gaming</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}