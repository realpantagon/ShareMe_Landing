import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="bg-gradient-to-br from-[#0D0C0F] via-[#1a1820] to-[#0D0C0F] relative">
      {/* Fixed Product Name Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            <span className="bg-gradient-to-r from-[#DA3761] to-[#FF4B7A] bg-clip-text text-transparent">
              ShareMe
            </span>
          </h2>
        </div> */}
      </div>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-[#0D0C0F] via-[#1a1820] to-[#0D0C0F] flex items-center justify-center relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#DA3761] to-[#A02A4A] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[#DA3761] to-[#A02A4A] rounded-full blur-3xl"></div>
        </div>
        
        {/* Main content */}
        <div className="relative z-10 text-center px-8 pt-20">
          {/* Logo */}
          <div className="mb-12">
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black tracking-tighter">
              <span className="bg-gradient-to-r from-[#DA3761] via-[#FF4B7A] to-[#DA3761] bg-clip-text text-transparent animate-pulse">
                SHARE
              </span>
            </h1>
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black tracking-tighter -mt-4 lg:-mt-8">
              <span className="bg-gradient-to-r from-[#DA3761] via-[#FF4B7A] to-[#DA3761] bg-clip-text text-transparent animate-pulse">
                ME
              </span>
            </h1>
          </div>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            Experience seamless sharing like never before
          </p>
          
          {/* Call to action */}
          <div className="mt-12 space-y-4">
            <button className="bg-gradient-to-r from-[#DA3761] to-[#A02A4A] hover:from-[#FF4B7A] hover:to-[#DA3761] text-white font-semibold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-[#DA3761]/25">
              Get Started
            </button>
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="w-2 h-2 bg-[#DA3761] rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-[#DA3761] rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-2 h-2 bg-[#DA3761] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="min-h-screen bg-gradient-to-br from-[#1a1820] via-[#2a2535] to-[#1a1820] py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 pt-16">
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-[#DA3761] to-[#FF4B7A] bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the powerful features that make sharing effortless and secure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#DA3761] to-[#FF4B7A] rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-gray-300">Share files instantly with our optimized transfer technology</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#DA3761] to-[#FF4B7A] rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Secure Sharing</h3>
              <p className="text-gray-300">End-to-end encryption keeps your files safe and private</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#DA3761] to-[#FF4B7A] rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cross Platform</h3>
              <p className="text-gray-300">Works seamlessly across all devices and platforms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Product Section */}
      <section className="min-h-screen bg-gradient-to-br from-[#0D0C0F] via-[#1a1820] to-[#0D0C0F] py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 pt-16">
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-[#DA3761] to-[#FF4B7A] bg-clip-text text-transparent">
                Our Product
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of file sharing with our innovative platform
            </p>
          </div>
          
          {/* 16:9 Product Showcase */}
          <div className="max-w-6xl mx-auto">
            <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden shadow-2xl shadow-black/20" style={{aspectRatio: '16/9'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#DA3761]/20 to-[#FF4B7A]/20"></div>
              <div className="relative z-10 h-full flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-[#DA3761] to-[#FF4B7A] rounded-full flex items-center justify-center mb-8 mx-auto">
                    <span className="text-5xl">📸</span>
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-4">ShareMe Platform</h3>
                  <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                    A revolutionary sharing platform that combines speed, security, and simplicity in one beautiful interface
                  </p>
                  <button className="bg-gradient-to-r from-[#DA3761] to-[#A02A4A] hover:from-[#FF4B7A] hover:to-[#DA3761] text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
                    Try Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6">
            {/* Brand */}
            <div className="flex-1 sm:flex-none">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                <span className="bg-gradient-to-r from-[#DA3761] to-[#FF4B7A] bg-clip-text text-transparent">
                  Adappt
                </span>
              </h3>
              <div className="mt-1 sm:mt-2">
                {/* <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">รวบรวมคอนเทนต์รองเติอีกแล้ว</p>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed hidden sm:block">วิธีให้โซเชียลมีเดียแบร์ลิงก์ข้อมูลและโยนยูอาร์แอลอกพานุหาร์</p> */}
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="text-left sm:text-right flex-shrink-0"> 
              <h4 className="text-white font-semibold text-sm sm:text-base mb-1">Email</h4>
              <p className="text-gray-300 text-xs sm:text-sm break-all sm:break-normal">service@adappts.com</p>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-4 pt-4 border-t border-gray-800/30">
            <p className="text-center text-white text-xs sm:text-sm">
              © 2025 ShareMe by Adappt Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DA3761] to-transparent"></div>
    </div>
  )
}

export default App
