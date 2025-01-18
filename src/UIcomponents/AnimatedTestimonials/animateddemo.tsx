import { Button } from "../../ui/button"; // Replace with your button component or styling
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Spectrum UI is a game-changer! Its components are so well-designed and customizable that it made our app look polished and professional in no time.",
    name: "Ananya Gupta",
    designation: "Frontend Engineer, NovaTech",
    src: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb",
  },
  {
    quote:
      "I love the simplicity and minimalism of Spectrum UI. The components are intuitive and fit seamlessly into our existing projects.",
    name: "Sophia Allen",
    designation: "UI/UX Designer, Creatify",
    src: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb",
  },
  {
    quote:
      "As a junior developer, Spectrum UI has been a lifesaver. The documentation is straightforward, and the components work flawlessly with Tailwind CSS.",
    name: "Ethan Rodriguez",
    designation: "Software Engineer, CodeWorks",
    src: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb",
  },
  {
    quote:
      "The integration with Shadcn made it super easy to customize the components. Spectrum UI is now a must-have in our tech stack.",
    name: "Priya Sharma",
    designation: "Full Stack Developer, Innovate Labs",
    src: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb",
  },
];

const AnimatedTestimonialsDemo: React.FC = () => {
  const [active, setActive] = useState(testimonials[0]);

  const handlePrev = () => {
    const currentIndex = testimonials.indexOf(active);
    const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    setActive(testimonials[prevIndex]);
  };

  const handleNext = () => {
    const currentIndex = testimonials.indexOf(active);
    const nextIndex = (currentIndex + 1) % testimonials.length;
    setActive(testimonials[nextIndex]);
  };

  const isActive = (index: number) => testimonials[index] === active;

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
      {/* Image Section */}
      <div className="relative h-80 w-full">
        <AnimatePresence>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{
                opacity: 0,
                scale: 0.9,
                z: -100,
                rotateY: randomRotateY(),
              }}
              animate={{
                opacity: isActive(index) ? 1 : 0.7,
                scale: isActive(index) ? 1 : 0.95,
                z: isActive(index) ? 0 : -100,
                rotate: isActive(index) ? 0 : randomRotateY(),
                zIndex: isActive(index) ? 999 : testimonials.length + 2 - index,
                y: isActive(index) ? [0, -80, 0] : 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                z: 100,
                rotateY: randomRotateY(),
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              className="absolute inset-0 origin-bottom"
            >
              <img
                src={testimonial.src}
                alt={testimonial.name}
                draggable={false}
                className="rounded-3xl h-full w-full object-cover object-center"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active.name}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold dark:text-white text-black">
              {active.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              {active.designation}
            </p>
            <motion.p className="text-lg text-gray-500 mt-8 dark:text-neutral-300">
              {active.quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
        </div>
        <div className="flex gap-6 pt-5">
          <Button className="h-8 rounded" onClick={handlePrev}>
            <ArrowLeft />
          </Button>
          <Button className="h-8 rounded " onClick={handleNext}>
            <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTestimonialsDemo;
