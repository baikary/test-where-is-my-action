import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Sparkles, Shield, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold">{'{{SITE_TYPE}}'}</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" size="sm">Features</Button>
            <Button variant="ghost" size="sm">About</Button>
            <Button variant="ghost" size="sm">Contact</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            Welcome to {'{{SITE_TYPE}}'}
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Hello, {'{{FULL_NAME}}'}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Your personalized {'{{SITE_TYPE}}'} experience awaits. 
            Discover what makes this template special.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>

        <Separator className="my-16" />

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-4">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-2">
                <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-lg">Lightning Fast</CardTitle>
              <CardDescription>
                Optimized performance for the best {'{{SITE_TYPE}}'} experience
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-4">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mb-2">
                <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-lg">Secure & Reliable</CardTitle>
              <CardDescription>
                Enterprise-grade security for your peace of mind
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-4">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mb-2">
                <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <CardTitle className="text-lg">Beautiful Design</CardTitle>
              <CardDescription>
                Crafted specifically for {'{{FULL_NAME}}'} with modern aesthetics
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Separator className="my-16" />

        {/* CTA Section */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">
            Ready to get started?
          </h2>
          <p className="text-muted-foreground mb-6">
            Join thousands of users who trust {'{{SITE_TYPE}}'} for their needs.
          </p>
          <Button size="lg" className="gap-2">
            Start Your Journey
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            © 2024 {'{{SITE_TYPE}}'}. Built with ❤️ for {'{{FULL_NAME}}'}
          </div>
        </div>
      </footer>
    </div>
  )
}
