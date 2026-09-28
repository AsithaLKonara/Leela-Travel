"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Compass, Shield, User as UserIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";

type AuthState = "login" | "register" | "forgot_password";

export default function AuthPage() {
  const [authState, setAuthState] = useState<AuthState>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementation will wire this up to NextAuth in a subsequent phase
    console.log("Submitting:", { authState, email, password, name });
  };

  return (
    <div className="min-h-screen bg-obsidian text-leela-white flex selection:bg-sea-mist/20 rounded-none font-sans">
      
      {/* LEFT COLUMN: Cinematic Imagery & Typography */}
      <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-end p-16">
        <Image
          src="/images/hero/sigiriya.jpeg"
          alt="Leela Travel Journey"
          fill
          priority
          className="object-cover object-center filter opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
        
        <div className="relative z-10 flex flex-col gap-6 max-w-xl">
          <div className="h-[2px] w-12 bg-sea-mist" />
          <h1 className="text-5xl font-bold tracking-tight text-white leading-tight">
            Unlock Your <br /> Ceylon Journey
          </h1>
          <p className="text-leela-white/70 text-lg max-w-md font-sans">
            Curated access to Sri Lanka's most exclusive boutique sanctuaries, high-altitude tea trails, and untouched coastlines.
          </p>
        </div>
      </div>

      {/* RIGHT COLUMN: Dynamic Auth Forms */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-16 lg:p-24 relative">
        <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-sm text-leela-white/60 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" /> Return to Home
        </Link>
        
        <div className="w-full max-w-md flex flex-col gap-8">
          
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold tracking-tight">
              {authState === "login" && "Welcome Back."}
              {authState === "register" && "Join Leela Travel."}
              {authState === "forgot_password" && "Reset Password."}
            </h2>
            <p className="text-leela-white/60 text-sm font-sans">
              {authState === "login" && "Enter your credentials to access your personalized itineraries."}
              {authState === "register" && "Create an account to save properties and plan journeys."}
              {authState === "forgot_password" && "Enter your email to receive recovery instructions."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {authState === "register" && (
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-leela-white/50 font-semibold">
                  Full Name
                </label>
                <div className="relative">
                  <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-leela-white/30" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-leela-white/5 border border-leela-white/10 text-white rounded-none pl-12 pr-4 py-4 focus:outline-none focus:border-sea-mist transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>
            )}

            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-leela-white/50 font-semibold">
                Email Address
              </label>
              <div className="relative">
                <Compass className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-leela-white/30" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-leela-white/5 border border-leela-white/10 text-white rounded-none pl-12 pr-4 py-4 focus:outline-none focus:border-sea-mist transition-colors"
                  placeholder="admin@leelatravel.com"
                />
              </div>
            </div>

            {authState !== "forgot_password" && (
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-leela-white/50 font-semibold">
                  Password
                </label>
                <div className="relative">
                  <Shield className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-leela-white/30" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full bg-leela-white/5 border border-leela-white/10 text-white rounded-none pl-12 pr-4 py-4 focus:outline-none focus:border-sea-mist transition-colors"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            )}

            <div className="pt-4">
              <Button type="submit" variant="primary" className="w-full justify-between group">
                {authState === "login" && "Sign In"}
                {authState === "register" && "Create Account"}
                {authState === "forgot_password" && "Send Reset Link"}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </form>

          {/* Dynamic Toggles */}
          <div className="flex flex-col gap-3 pt-6 border-t border-white/10 text-sm">
            {authState === "login" && (
              <>
                <button
                  type="button"
                  onClick={() => setAuthState("register")}
                  className="text-left text-leela-white/60 hover:text-white transition-colors"
                >
                  New to Leela? <span className="text-sea-mist font-medium">Create an account</span>
                </button>
                <button
                  type="button"
                  onClick={() => setAuthState("forgot_password")}
                  className="text-left text-leela-white/60 hover:text-white transition-colors"
                >
                  Lost access? <span className="text-white hover:underline">Reset password</span>
                </button>
              </>
            )}
            {authState === "register" && (
              <button
                type="button"
                onClick={() => setAuthState("login")}
                className="text-left text-leela-white/60 hover:text-white transition-colors"
              >
                Already a member? <span className="text-sea-mist font-medium">Sign in here</span>
              </button>
            )}
            {authState === "forgot_password" && (
              <button
                type="button"
                onClick={() => setAuthState("login")}
                className="text-left text-leela-white/60 hover:text-white transition-colors"
              >
                Remembered your password? <span className="text-sea-mist font-medium">Return to sign in</span>
              </button>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
}
