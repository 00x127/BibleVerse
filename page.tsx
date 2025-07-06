"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, ArrowLeft } from "lucide-react"

interface BibleVerse {
  verse: string
  reference: string
  explanation: string
}

export default function JesusBibleApp() {
  const [currentVerse, setCurrentVerse] = useState<BibleVerse | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [totalVerses, setTotalVerses] = useState(0)
  const [lastFetchTime, setLastFetchTime] = useState<string>("")

  useEffect(() => {
    fetchVerse()

    const interval = setInterval(() => {
      fetchVerse()
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  const fetchVerse = async () => {
    try {
      const response = await fetch("/api/verses")
      const data = await response.json()

      if (!currentVerse || data.verse.reference !== currentVerse.reference) {
        setCurrentVerse(data.verse)
        setLastFetchTime(new Date().toISOString())
      }

      setTotalVerses(data.totalVerses)
      setIsLoading(false)
    } catch (error) {
      console.error("Failed to fetch verse:", error)
      setIsLoading(false)
    }
  }

  const handleVerseClick = () => {
    setShowExplanation(true)
  }

  const handleBackClick = () => {
    setShowExplanation(false)
  }

  const handleDiscordClick = () => {
    window.open("https://discord.com/users/996887365895340072", "_blank")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f172a]">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0f172a]">
      {/* background */}
      <div className="absolute inset-0">
        {/* gradient*/}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]"></div>

        {/* gradient but real*/}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 via-transparent to-slate-800/10"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-slate-700/5 to-slate-900/15"></div>

        {/* lighting*/}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-slate-700/8 via-slate-600/4 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[300px] bg-gradient-radial from-slate-600/5 via-slate-500/2 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[250px] bg-gradient-radial from-slate-800/6 via-slate-700/3 to-transparent rounded-full blur-3xl"></div>

        {/* particles*/}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(150)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full animate-float-gentle ${
                i % 5 === 0
                  ? "bg-slate-400/35"
                  : i % 5 === 1
                    ? "bg-slate-300/25"
                    : i % 5 === 2
                      ? "bg-slate-500/30"
                      : i % 5 === 3
                        ? "bg-slate-400/20"
                        : "bg-slate-600/25"
              }`}
              style={{
                width: `${Math.random() * 4 + 0.5}px`,
                height: `${Math.random() * 4 + 0.5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 30}s`,
                animationDuration: `${20 + Math.random() * 40}s`,
              }}
            />
          ))}

          {/* particles */}
          {[...Array(120)].map((_, i) => (
            <div
              key={`static-${i}`}
              className={`absolute rounded-full ${
                i % 4 === 0
                  ? "bg-slate-400/12"
                  : i % 4 === 1
                    ? "bg-slate-300/10"
                    : i % 4 === 2
                      ? "bg-slate-500/15"
                      : "bg-slate-600/8"
              }`}
              style={{
                width: `${Math.random() * 3 + 0.5}px`,
                height: `${Math.random() * 3 + 0.5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.1,
              }}
            />
          ))}
        </div>

        {/* grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(148, 163, 184, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148, 163, 184, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        ></div>

        {/* lighting */}
        <div className="absolute top-0 left-0 w-full h-60 bg-gradient-to-b from-slate-700/8 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-slate-800/6 to-transparent"></div>
        <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-slate-700/4 to-transparent"></div>
        <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-slate-700/4 to-transparent"></div>
      </div>

      {/* main */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        <div className="max-w-2xl mx-auto text-center">
          {!showExplanation ? (
            <div className="space-y-8">
              {/* header */}
              <div className="mb-12">
                <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl text-slate-300">✞</span>
                </div>
                <h1 className="text-xl font-light text-slate-200 tracking-wide">Daily Verse</h1>
                <p className="text-sm text-slate-400 mt-2">Get a different bible verse everyday</p>
              </div>

              {/* Verse Card */}
              <Card
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 cursor-pointer transition-all duration-300 hover:bg-slate-800/40 hover:scale-[1.02] hover:border-slate-600/60 hover:shadow-xl group"
                onClick={handleVerseClick}
              >
                <CardContent className="p-8">
                  {currentVerse && (
                    <>
                      <blockquote className="text-lg md:text-xl font-light text-slate-100 leading-relaxed mb-6 italic">
                        "{currentVerse.verse}"
                      </blockquote>
                      <cite className="text-slate-300 font-medium text-lg">— {currentVerse.reference}</cite>
                    </>
                  )}
                  <div className="mt-6 text-slate-500 text-sm group-hover:text-slate-400 transition-colors">
                    Click to explore the meaning →
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="animate-slide-in">
              <Card className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50">
                <CardContent className="p-8">
                  <Button
                    variant="ghost"
                    onClick={handleBackClick}
                    className="mb-6 text-slate-400 hover:text-slate-200 hover:bg-slate-700/50"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to verse
                  </Button>

                  {currentVerse && (
                    <>
                      <div className="mb-8">
                        <h2 className="text-slate-300 font-medium mb-4 text-lg">{currentVerse.reference}</h2>
                        <blockquote className="text-slate-100 italic mb-6 border-l-4 border-slate-500 pl-4 text-left">
                          "{currentVerse.verse}"
                        </blockquote>
                      </div>

                      <div className="text-left">
                        <h3 className="text-slate-200 font-semibold mb-4 text-lg">Biblical Explanation</h3>
                        <p className="text-slate-300 leading-relaxed">{currentVerse.explanation}</p>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>

      {/* footer */}
      <footer className="absolute bottom-4 left-0 right-0 text-center z-10">
        <p className="text-slate-500 text-sm flex items-center justify-center gap-1">
          Made with <Heart className="w-4 h-4 text-red-400 fill-current" /> by{" "}
          <button
            onClick={handleDiscordClick}
            className="text-slate-400 hover:text-slate-300 transition-colors underline"
          >
            0x127
          </button>
        </p>
      </footer>
    </div>
  )
}
