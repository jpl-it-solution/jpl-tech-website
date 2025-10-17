import React from 'react';

const Testimonials: React.FC = () => {
  // Example testimonials based on your PDF [cite: 95]
  const reviews = [
    {
      name: 'Maitry',
      feedback: 'Working with JPL was a game-changer for our business. Their professionalism and technical expertise are unmatched.',
      rating: 5,
    },
    {
      name: 'Nikhil',
      feedback: 'The final product exceeded all our expectations. The team was responsive, and the project was delivered on time.',
      rating: 5,
    },
  ];

  return (
    <section>
          </section>
      // <div className="container mx-auto px-6 py-20">
      //   <div className="text-center mb-12">
      //     <h2 className="text-3xl md:text-4xl font-bold text-gray-800">What Our Clients Say</h2>
      //     <p className="text-gray-600 mt-4">We are proud to have earned the trust of amazing clients.</p>
      //   </div>
      //   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      //     {reviews.map((review, index) => (
      //       <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-200">
      //         <p className="text-gray-600 italic mb-4">"{review.feedback}"</p>
      //         <div className="font-semibold text-gray-800">- {review.name}</div>
      //         {/* Star ratings could be implemented here [cite: 96] */}
      //       </div>
      //     ))}
      //   </div>
      // </div>

  );
};

export default Testimonials;