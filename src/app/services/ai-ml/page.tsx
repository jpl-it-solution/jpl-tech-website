'use client';
import React from 'react';
import Image from 'next/image';
import Divider from '@/components/ui/Divider';

const AIMLPage = () => {
  return (
    <section className="relative overflow-hidden my-16">
      <div className="absolute left-0 top-0 h-full w-full flex flex-col items-start justify-center opacity-80">
        <Image src="/images/Ellipse-2.png" alt="Background" width={500} height={500} className="max-h-[70vh]" />
        <Image src="/images/Ellipse-3.png" alt="Background" width={400} height={400} className="max-h-[70vh]" />
      </div>

      <div className="container px-6 mx-auto max-w-7xl md:px-12 lg:px-24 relative z-10">
        <Divider text="AI & Machine Learning" />

        <div className="text-center py-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Empowering Businesses with AI & Data Science</h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-10">
            We integrate AI-driven technologies to automate operations, enhance decision-making, and deliver intelligent solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              { title: 'Artificial Intelligence Solutions', description: 'Automate workflows and improve performance using AI-based systems.' },
              { title: 'Machine Learning Models', description: 'Build predictive models for analytics, forecasting, and optimization.' },
              { title: 'Natural Language Processing (NLP)', description: 'Chatbots, sentiment analysis, and virtual assistants powered by NLP.' },
              { title: 'Computer Vision', description: 'AI-based image and video analysis for real-world applications.' },
              { title: 'Generative AI Solutions', description: 'Create AI-powered text, image, and video content.' },
              { title: 'Data Analytics & Insights', description: 'Transform data into meaningful business intelligence.' },
            ].map((item, i) => (
              <div key={i} className="bg-[#151721] hover:bg-[#1B255E] p-6 rounded-2xl transition-all">
                <h5 className="text-2xl font-semibold mb-3 text-indigo-400">{item.title}</h5>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <a href="/contact-us" className="px-8 py-4 bg-indigo-500 text-white rounded-full font-semibold hover:bg-indigo-600 transition">
              Explore AI Solutions →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AIMLPage;
