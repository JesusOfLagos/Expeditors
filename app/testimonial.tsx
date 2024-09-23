import React, { useState } from 'react'
import { motion } from 'framer-motion'



import image1 from '../public/s1.png'
import image2 from '../public/s2.png'
import image3 from '../public/s3.png'
import image4 from '../public/s4.png'
import image5 from '../public/s5.png'
import image6 from '../public/s6.png'




interface Testimonial {
  id?: number
  name?: string
  company?: string
  quote?: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    // name: "Alice Johnson",
    // company: "TechCorp",
    // quote: "Filer has revolutionized our file management. It's secure, fast, and incredibly easy to use!",
    image: image1.src
  },
  {
    id: 2,
    // name: "Bob Smith",
    // company: "DataDrive",
    // quote: "The decentralized nature of Filer gives us peace of mind. Our data has never been safer.",
    image: image2.src
  },
  {
    id: 3,
    // name: "Carol White",
    // company: "CloudSolutions",
    // quote: "Filer's interface is intuitive and the performance is outstanding. It's a game-changer!",
    image: image3.src
  },
  {
    id: 4,
    // name: "Eva Green",
    // company: "InnovateTech",
    // quote: "Filer's customer support is top-notch. They're always there when we need them.",
    image: image4.src
  },
  {
    id: 5,
    // name: "Frank Lee",
    // company: "GlobalData",
    // quote: "The scalability of Filer is impressive. It grows with our business seamlessly.",
    image: image5.src
  },
  {
    id: 6,
    // name: "Grace Taylor",
    // company: "FutureSoft",
    // quote: "Filer's encryption standards are unparalleled. It's the most secure solution we've used.",
    image: image6.src
  }
]

const HexagonalTestimonial: React.FC<{ testimonial: Testimonial; onClick: () => void }> = ({ testimonial, onClick }) => (
  <motion.div
    className="hexagon cursor-pointer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    <img src={testimonial.image} alt={testimonial.name} className="hexagon-image" />
    <div className="hexagon-content">
      <h3 className="text-lg font-semibold">{testimonial.name}</h3>
      <p className="text-sm">{testimonial.company}</p>
    </div>
  </motion.div>
)

export default function TestimonialGallery() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null)

  return (
    <div className="p-8 bg-[#045b2E] min-h-screen">
      <h2 className="text-3xl font-bold text-center text-white mb-12">What Our Users Say</h2>
      <div className="hexagon-grid">
        {testimonials.map((testimonial) => (
          <HexagonalTestimonial
            key={testimonial.id}
            testimonial={testimonial}
            onClick={() => setSelectedTestimonial(testimonial)}
          />
        ))}
      </div>
      {selectedTestimonial && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4"
          onClick={() => setSelectedTestimonial(null)}
        >
          <div className="bg-white rounded-lg p-8 max-w-2xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedTestimonial.image}
              alt={selectedTestimonial.name}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-center mb-2">{selectedTestimonial.name}</h3>
            <p className="text-gray-600 text-center mb-4">{selectedTestimonial.company}</p>
            <p className="text-lg text-center italic">&quot;{selectedTestimonial.quote}&quot;</p>
          </div>
        </motion.div>
      )}
      <style jsx>{`
        .hexagon-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          grid-gap: 15px;
          padding: 20px;
          justify-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }
        .hexagon {
          width: 150px;
          height: 173.21px;
          background-color: #4a5568;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
        }
        .hexagon-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }
        .hexagon:hover .hexagon-image {
          opacity: 0.3;
        }
        .hexagon-content {
          position: absolute;
          text-align: center;
          color: white;
          padding: 10px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .hexagon:hover .hexagon-content {
          opacity: 1;
        }
      `}</style>
    </div>
  )
}
