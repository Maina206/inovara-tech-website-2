"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const services = [
  { name: "Frontend Development", href: "/services/frontend" },
  { name: "Backend Development", href: "/services/backend" },
  { name: "Artificial Intelligence", href: "/services/artificial-intelligence" },
  { name: "AI Training", href: "/services/ai-training" },
  { name: "Automation", href: "/services/automation" },
  { name: "System Integration", href: "/services/integration" },
  { name: "WordPress Development", href: "/services/wordpress" },
  { name: "SEO Services", href: "/services/seo" },
  { name: "Data Annotation", href: "/services/data-annotation" },
  { name: "Software Documentation", href: "/services/software-documentation" },
  { name: "Technical Writing", href: "/services/technical-writing" },
]

const resources = [
  { name: "Blog", href: "/resources/blog" },
  { name: "Case Studies", href: "/resources/case-studies" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-800/20 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">I</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Inovara
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList className="space-x-6">
                <NavigationMenuItem>
                  <Link href="/about" className="text-gray-300 hover:text-white transition-colors font-medium">
                    About
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-300 hover:text-white bg-transparent font-medium">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] gap-3 p-6 bg-gray-900 border border-gray-800">
                      <div className="grid grid-cols-2 gap-4">
                        {services.map((service) => (
                          <NavigationMenuLink key={service.href} asChild>
                            <Link
                              href={service.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 hover:text-white text-gray-300"
                            >
                              <div className="text-sm font-medium leading-none">{service.name}</div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-300 hover:text-white bg-transparent font-medium">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[200px] gap-3 p-4 bg-gray-900 border border-gray-800">
                      {resources.map((resource) => (
                        <NavigationMenuLink key={resource.href} asChild>
                          <Link
                            href={resource.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 hover:text-white text-gray-300"
                          >
                            <div className="text-sm font-medium leading-none">{resource.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button asChild size="sm" className="nav-button">
              <Link href="/get-quote">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-300 hover:text-white hover:bg-gray-800"
                  onClick={() => setIsOpen(true)}
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-gray-900 border-gray-800 text-white">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-white transition-colors py-2 text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>

                  <div className="space-y-2">
                    <div className="text-gray-400 font-medium py-2 text-lg">Services</div>
                    <div className="pl-4 space-y-1">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block text-gray-300 hover:text-white transition-colors py-2"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-gray-400 font-medium py-2 text-lg">Resources</div>
                    <div className="pl-4 space-y-1">
                      {resources.map((resource) => (
                        <Link
                          key={resource.href}
                          href={resource.href}
                          className="block text-gray-300 hover:text-white transition-colors py-2"
                          onClick={() => setIsOpen(false)}
                        >
                          {resource.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Button asChild size="lg" className="mt-6 w-full" onClick={() => setIsOpen(false)}>
                    <Link href="/get-quote">Get Quote</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
