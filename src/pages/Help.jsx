import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Search, Chat, Book, VideoLibrary, Launch, Email, Phone } from "@mui/icons-material";

export default function Help() {
  const helpCategories = [
    {
      title: "Getting Started",
      description: "Learn the basics of using the dashboard",
      icon: Book,
      articles: ["Dashboard Overview", "Creating Your First Project", "User Management", "Settings Guide"]
    },
    {
      title: "Video Tutorials",
      description: "Watch step-by-step video guides",
      icon: VideoLibrary,
      articles: ["Dashboard Walkthrough", "Client Management", "Application Deployment", "Troubleshooting"]
    },
    {
      title: "API Documentation",
      description: "Technical documentation for developers",
      icon: Chat,
      articles: ["API Reference", "Authentication", "Rate Limits", "SDKs & Libraries"]
    }
  ];

  const faqs = [
    {
      question: "How do I add a new client?",
      answer: "Navigate to the Client section and click the 'Add Client' button. Fill in the required information and save."
    },
    {
      question: "How can I deploy a new application?",
      answer: "Go to the Application tab and click 'Deploy New App'. Follow the deployment wizard to configure your application settings."
    },
    {
      question: "What should I do if my application is down?",
      answer: "Check the Application status in the dashboard. If the issue persists, contact our support team immediately."
    },
    {
      question: "How do I reset my password?",
      answer: "Click on your profile avatar and select 'Account Settings'. You can change your password in the security section."
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Help Center
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Find answers to your questions, explore documentation, and get the support you need
        </p>
      </div>

      {/* Search */}
      <Card className="border-border/50 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Search for help articles, guides, or FAQs..." 
              className="pl-12 h-12 text-base bg-background/50 border-border/50"
            />
          </div>
        </CardContent>
      </Card>

      {/* Help Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {helpCategories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <Card 
              key={index}
              className="relative overflow-hidden border-border/50 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group cursor-pointer"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary/20 to-primary-glow/10 flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-2">
                {category.articles.map((article, articleIndex) => (
                  <div 
                    key={articleIndex}
                    className="flex items-center justify-between p-2 rounded-md hover:bg-muted/30 transition-colors group/item"
                  >
                    <span className="text-sm font-medium">{article}</span>
                    <Launch className="h-3 w-3 text-muted-foreground opacity-0 group-hover/item:opacity-100 transition-opacity" />
                  </div>
                ))}
              </CardContent>
              
              {/* Gradient overlay */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full"></div>
            </Card>
          );
        })}
      </div>

      {/* FAQ Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <Card 
                key={index}
                className="border-border/50 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Contact Support</h2>
          
          <Card className="border-border/50 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>
                Can't find what you're looking for? Send us a message and we'll help you out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/20">
                  <Email className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Email Support</p>
                    <p className="text-sm text-muted-foreground">support@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/20">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Phone Support</p>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-border/50 space-y-3">
                <Input placeholder="Your Name" className="bg-background/50" />
                <Input placeholder="Email Address" className="bg-background/50" />
                <Textarea 
                  placeholder="Describe your issue or question..." 
                  className="bg-background/50 min-h-[100px]"
                />
                <Button className="w-full bg-gradient-to-r from-primary to-primary-glow hover:from-primary-dark hover:to-primary shadow-lg shadow-primary/25">
                  Send Message
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Status and Updates */}
      <Card className="border-border/50 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl">System Status</CardTitle>
          <CardDescription>Current status of our services and recent updates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div>
                <p className="font-medium">API Status</p>
                <p className="text-sm text-muted-foreground">Operational</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div>
                <p className="font-medium">Dashboard</p>
                <p className="text-sm text-muted-foreground">Operational</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div>
                <p className="font-medium">Database</p>
                <p className="text-sm text-muted-foreground">Operational</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}