import React, { useState, useEffect } from 'react';
import { Users, Target, Zap, Shield, TrendingUp, Star, ArrowRight, Play, Check, Award, Briefcase, UserCheck } from 'lucide-react';

export default function HireHubLanding() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "AI-Powered Matching",
      description: "Revolutionary algorithm that matches candidates with perfect job opportunities using advanced machine learning."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast Hiring",
      description: "Reduce time-to-hire by 60% with automated screening, scheduling, and candidate ranking systems."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-level security with JWT authentication, encrypted data, and comprehensive audit trails."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Analytics Dashboard",
      description: "Real-time insights into hiring metrics, conversion rates, and recruitment performance analytics."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Talent Pipeline",
      description: "Build and maintain a continuous talent pipeline with automated candidate nurturing workflows."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Skill Assessments",
      description: "Custom skill tests with automated scoring to evaluate candidate competencies accurately."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Head of Talent, TechCorp",
      content: "HireHub transformed our recruitment process. We've reduced hiring time by 65% and improved candidate quality significantly.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "CEO, StartupX",
      content: "The AI matching is incredible. We found our perfect CTO within days, not months. Game-changing platform!",
      rating: 5
    },
    {
      name: "Lisa Johnson",
      role: "Recruitment Director, GlobalTech",
      content: "Best investment we've made. The analytics alone have revolutionized how we approach talent acquisition.",
      rating: 5
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Users" },
    { number: "95%", label: "Success Rate" },
    { number: "60%", label: "Faster Hiring" },
    { number: "500+", label: "Companies" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 bg-white/10 backdrop-blur-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                HireHub
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
              <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">Reviews</a>
              <a href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a>
              <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all">
                Sign In
              </button>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-6 py-2 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-40 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
                Revolutionize Your
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Recruitment Process
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                AI-powered platform that connects top talent with dream opportunities. 
                Streamline hiring, reduce costs, and find perfect matches faster than ever.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <button className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-2xl flex items-center space-x-2">
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group bg-white/10 hover:bg-white/20 backdrop-blur-lg px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center space-x-2 border border-white/20">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className={`text-center transition-all duration-1000 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/60 text-sm uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Dashboard Preview */}
            <div className="relative max-w-5xl mx-auto">
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 backdrop-blur-lg border border-white/10 shadow-2xl">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <UserCheck className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Candidate Dashboard</h3>
                        <p className="text-white/60">Real-time recruitment insights</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-4 rounded-lg border border-purple-400/20">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-purple-300 text-sm">Active Jobs</p>
                          <p className="text-2xl font-bold">247</p>
                        </div>
                        <TrendingUp className="w-8 h-8 text-purple-400" />
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-pink-500/20 to-pink-600/20 p-4 rounded-lg border border-pink-400/20">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-pink-300 text-sm">Applications</p>
                          <p className="text-2xl font-bold">1,829</p>
                        </div>
                        <Users className="w-8 h-8 text-pink-400" />
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-4 rounded-lg border border-blue-400/20">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-blue-300 text-sm">Matches</p>
                          <p className="text-2xl font-bold">156</p>
                        </div>
                        <Target className="w-8 h-8 text-blue-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-40 py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Powerful Features for Modern Recruitment
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Everything you need to transform your hiring process and build exceptional teams
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {React.cloneElement(feature.icon, { className: "w-8 h-8 text-white" })}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative z-40 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Loved by Industry Leaders
            </h2>
            <p className="text-xl text-white/70">See what our customers are saying</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-2xl md:text-3xl font-light mb-8 text-white/90 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-white">{testimonials[currentTestimonial].name}</div>
                  <div className="text-white/60">{testimonials[currentTestimonial].role}</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-purple-500' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-40 py-20 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Ready to Transform Your Hiring?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of companies that have revolutionized their recruitment process with HireHub
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-2xl flex items-center space-x-2">
              <span>Start Your Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-white/60 text-sm">No credit card required • 14-day free trial</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-40 bg-black/40 backdrop-blur-lg border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                HireHub
              </span>
            </div>
            <div className="flex space-x-6 text-white/60">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/60">
            <p>&copy; 2025 HireHub. All rights reserved. Built for the future of recruitment.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}