// app/portfolio/page.tsx
import LayoutWithHeroBackground from '@/components/layout/LayoutWithHeroBackground';
import { Card } from '@/components/ui/Card';

export default function Portfolio() {
  return (
    <LayoutWithHeroBackground>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our diverse portfolio of successful projects and innovative solutions
              that have helped businesses transform and grow.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample Portfolio Items */}
            <Card className="p-6">
              <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Project Image</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Analytics Platform</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive analytics solution using machine learning to provide
                predictive insights for business intelligence.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  AI/ML
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  Analytics
                </span>
              </div>
            </Card>

            <Card className="p-6">
              <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Project Image</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cloud Migration Service</h3>
              <p className="text-gray-600 mb-4">
                Complete cloud infrastructure migration and optimization for enterprise
                clients, improving scalability and reducing costs.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                  Cloud
                </span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                  Migration
                </span>
              </div>
            </Card>

            <Card className="p-6">
              <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Project Image</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mobile Banking App</h3>
              <p className="text-gray-600 mb-4">
                Secure and user-friendly mobile banking application with advanced
                features and real-time transaction capabilities.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                  Mobile
                </span>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                  Security
                </span>
              </div>
            </Card>

            <Card className="p-6">
              <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Project Image</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">E-commerce Platform</h3>
              <p className="text-gray-600 mb-4">
                Scalable e-commerce solution with integrated payment systems,
                inventory management, and customer analytics.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                  E-commerce
                </span>
                <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">
                  Web
                </span>
              </div>
            </Card>

            <Card className="p-6">
              <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Project Image</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">IoT Smart Home System</h3>
              <p className="text-gray-600 mb-4">
                Smart home automation system with IoT integration, providing seamless
                control over home devices and energy management.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm">
                  IoT
                </span>
                <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">
                  Automation
                </span>
              </div>
            </Card>

            <Card className="p-6">
              <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Project Image</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Healthcare Management System</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive healthcare management platform with patient records,
                appointment scheduling, and telemedicine capabilities.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">
                  Healthcare
                </span>
                <span className="px-3 py-1 bg-rose-100 text-rose-800 rounded-full text-sm">
                  Management
                </span>
              </div>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let&apos;s collaborate to bring your ideas to life with our expertise and innovation.
            </p>
            <div className="flex justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </LayoutWithHeroBackground>
  );
}
