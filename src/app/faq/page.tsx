"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Calendar, MapPin, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// --- Snappy Comic Animations ---
const comicSpring = { type: "spring" as const, stiffness: 400, damping: 15 };
const comicStagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const comicPop: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: comicSpring }
};

export default function FAQPage() {
  const faqs = [
    {
      q: "Is 10 minutes enough time?",
      a: "Yes! This is just enough time to get all your anger and frustrations out. You may also bring anything in that you would like to smash yourself (Can NOT smash: Old school Tube TV's, Refrigerators, or Microwaves), check out our Super Smash package."
    },
    {
      q: "Do I need to bring my own protective gear?",
      a: "You are more than welcome to bring your own protective gear, however, we offer aprons, gloves, head, and face gear. If you are bringing a child bring a helmet for them as the ones we have at the moment may be too large. All you need to bring is closed toed shoes (No Crocs), long sleeves, and a camera for photos! Protective gear is required to participate."
    },
    {
      q: "Can I bring my own items to break?",
      a: "Yes! You can bring as many of your own items to break as long as you stay within your designated time period. We hold the right to refuse any items that may pose a risk to the participant."
    },
    {
      q: "Can children participate?",
      a: "Yes! Anyone 5-17 years old must be accompanied by an adult. Please keep in mind that this is a dangerous activity, though."
    },
    {
      q: "Do I need a waiver?",
      a: (
        <>
          Yes! Waivers are required and will be provided at check-in. <br /><br />
          <a href="#" className="text-comic-blue underline hover:text-comic-red transition-colors">Click here to download it</a> if you would like to fill it out beforehand. <br /><br />
          Or you can go here to complete your waiver form online: <br />
          <a href="#" className="text-comic-blue underline hover:text-comic-red transition-colors">WaiverFile | Online Waiver Form Entry</a>
        </>
      )
    },
    {
      q: "Can I host parties at Super Smash KC?",
      a: "Yes! If you have any special requirements, please contact Super Smash KC to discuss. If not, please click \"Book Now\" and scroll to the bottom to find our availability!"
    }
  ];

  return (
    <div className="bg-comic-dark min-h-screen text-white font-sans selection:bg-comic-yellow selection:text-black overflow-hidden pt-24">
      
      {/* --- HERO SECTION --- */}
      <section className="py-20 md:py-32 relative bg-comic-blue border-b-8 border-black bg-halftone-black">
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <motion.div 
            initial="hidden" animate="visible" variants={comicStagger}
            className="text-center"
          >
            <motion.div variants={comicPop} className="flex justify-center mb-6">
              <div className="bg-comic-yellow p-4 rounded-full border-4 border-black shadow-comic-sm rotate-12">
                <HelpCircle className="w-16 h-16 text-black" strokeWidth={2.5} />
              </div>
            </motion.div>
            <motion.h1 variants={comicPop} className="text-6xl sm:text-7xl md:text-8xl font-bebas uppercase leading-[0.9] mb-8 text-white text-outline-black">
              Frequently Asked <span className="text-comic-yellow block">Questions</span>
            </motion.h1>
            
            <motion.div variants={comicPop} className="bg-white p-6 md:p-8 border-8 border-black shadow-comic-lg rotate-[-1deg] inline-block text-center max-w-3xl">
              <p className="text-xl md:text-2xl font-bold text-black uppercase leading-relaxed">
                Got questions? We've got answers. Everything you need to know before you step into the smash room.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- FAQ ACCORDION SECTION --- */}
      <section className="py-24 relative bg-comic-dark bg-halftone-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={comicSpring}>
            <Accordion type="single" collapsible className="w-full space-y-6">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-white border-4 border-black shadow-comic rounded-xl px-6 data-[state=open]:bg-comic-yellow transition-colors">
                  <AccordionTrigger className="text-2xl md:text-3xl font-bebas uppercase text-black hover:no-underline py-6 text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg font-bold text-black uppercase pb-6 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-32 relative bg-comic-red border-t-8 border-black bg-halftone-black flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={comicSpring}
          className="relative z-10 container mx-auto px-6 text-center max-w-4xl bg-white border-8 border-black shadow-comic-lg p-12 rounded-3xl rotate-[1deg]"
        >
          <h2 className="text-6xl md:text-8xl font-bebas uppercase leading-none text-white text-outline-black mb-8">
            Ready to <span className="text-comic-yellow">Smash?</span>
          </h2>
          
          <div className="text-2xl font-bold text-black uppercase mb-12 space-y-4">
            <p>Now that you know the rules, it's time to break some stuff.</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.button 
              whileHover={{ scale: 1.1, rotate: -2 }}
              whileTap={{ scale: 0.9, y: 4, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" }}
              className="px-8 py-6 bg-comic-yellow text-black font-bebas text-3xl md:text-4xl tracking-wider uppercase rounded-xl border-4 border-black shadow-comic flex items-center justify-center gap-3"
            >
              <Calendar className="w-8 h-8" strokeWidth={3} /> Book Your Session
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.9, y: 4, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" }}
              className="px-8 py-6 bg-comic-blue text-white font-bebas text-3xl md:text-4xl tracking-wider uppercase rounded-xl border-4 border-black shadow-comic flex items-center justify-center gap-3"
            >
              <MapPin className="w-8 h-8" strokeWidth={3} /> Get Directions
            </motion.button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}