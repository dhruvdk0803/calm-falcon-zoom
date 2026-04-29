"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import FloatingComics from "@/components/FloatingComics";

// --- Snappy Comic Animations ---
const comicSpring = { type: "spring" as const, stiffness: 400, damping: 15 };
const comicStagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const comicPop: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -2 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: comicSpring }
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-comic-dark min-h-screen text-white font-sans selection:bg-comic-yellow selection:text-black overflow-hidden pt-24">
      
      {/* --- HERO SECTION --- */}
      <section className="py-20 relative bg-comic-blue border-b-8 border-black bg-halftone-black overflow-hidden">
        <FloatingComics />
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <motion.div 
            initial="hidden" animate="visible" variants={comicStagger}
            className="text-center"
          >
            <motion.div variants={comicPop} className="flex justify-center mb-6">
              <div className="bg-white p-4 rounded-full border-4 border-black shadow-comic-sm rotate-[-5deg]">
                <ShieldCheck className="w-16 h-16 text-comic-blue" strokeWidth={2.5} />
              </div>
            </motion.div>
            <motion.h1 variants={comicPop} className="text-6xl sm:text-7xl md:text-8xl font-bebas uppercase leading-[0.9] mb-6 text-white text-outline-black">
              Privacy <span className="text-comic-yellow">Policy</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="py-24 relative bg-comic-dark bg-halftone-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={comicSpring}
            className="bg-white border-8 border-black shadow-comic-lg rounded-2xl p-8 md:p-12 text-black"
          >
            
            <div className="space-y-10">
              {/* Section */}
              <div>
                <h2 className="text-4xl font-bebas uppercase text-comic-red mb-4 tracking-wide">Who we are</h2>
                <p className="text-lg font-bold text-gray-800 leading-relaxed">
                  Our website address is: <a href="https://www.supersmashkc.com/" className="text-comic-blue hover:text-comic-red underline">https://www.supersmashkc.com/</a>
                </p>
              </div>

              {/* Section */}
              <div>
                <h2 className="text-4xl font-bebas uppercase text-comic-red mb-4 tracking-wide">Comments</h2>
                <p className="text-lg font-bold text-gray-800 leading-relaxed mb-4">
                  When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.
                </p>
                <p className="text-lg font-bold text-gray-800 leading-relaxed">
                  An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: <a href="https://automattic.com/privacy/" target="_blank" rel="noreferrer" className="text-comic-blue hover:text-comic-red underline">https://automattic.com/privacy/</a>. After approval of your comment, your profile picture is visible to the public in the context of your comment.
                </p>
              </div>

              {/* Section */}
              <div>
                <h2 className="text-4xl font-bebas uppercase text-comic-red mb-4 tracking-wide">Media</h2>
                <p className="text-lg font-bold text-gray-800 leading-relaxed">
                  If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
                </p>
              </div>

              {/* Section */}
              <div>
                <h2 className="text-4xl font-bebas uppercase text-comic-red mb-4 tracking-wide">Cookies</h2>
                <p className="text-lg font-bold text-gray-800 leading-relaxed mb-4">
                  If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.
                </p>
                <p className="text-lg font-bold text-gray-800 leading-relaxed mb-4">
                  If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.
                </p>
                <p className="text-lg font-bold text-gray-800 leading-relaxed mb-4">
                  When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.
                </p>
                <p className="text-lg font-bold text-gray-800 leading-relaxed">
                  If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.
                </p>
              </div>

              {/* Section */}
              <div>
                <h2 className="text-4xl font-bebas uppercase text-comic-red mb-4 tracking-wide">Embedded content from other websites</h2>
                <p className="text-lg font-bold text-gray-800 leading-relaxed mb-4">
                  Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.
                </p>
                <p className="text-lg font-bold text-gray-800 leading-relaxed">
                  These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.
                </p>
              </div>

              {/* Section */}
              <div>
                <h2 className="text-4xl font-bebas uppercase text-comic-red mb-4 tracking-wide">Who we share your data with</h2>
                <p className="text-lg font-bold text-gray-800 leading-relaxed">
                  If you request a password reset, your IP address will be included in the reset email.
                </p>
              </div>

              {/* Section */}
              <div>
                <h2 className="text-4xl font-bebas uppercase text-comic-red mb-4 tracking-wide">How long we retain your data</h2>
                <p className="text-lg font-bold text-gray-800 leading-relaxed mb-4">
                  If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.
                </p>
                <p className="text-lg font-bold text-gray-800 leading-relaxed">
                  For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.
                </p>
              </div>

              {/* Section */}
              <div>
                <h2 className="text-4xl font-bebas uppercase text-comic-red mb-4 tracking-wide">What rights you have over your data</h2>
                <p className="text-lg font-bold text-gray-800 leading-relaxed">
                  If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
                </p>
              </div>

              {/* Section */}
              <div>
                <h2 className="text-4xl font-bebas uppercase text-comic-red mb-4 tracking-wide">Where your data is sent</h2>
                <p className="text-lg font-bold text-gray-800 leading-relaxed">
                  Visitor comments may be checked through an automated spam detection service.
                </p>
              </div>

              {/* Section */}
              <div className="bg-gray-100 p-6 border-4 border-black rounded-xl shadow-comic-sm">
                <h2 className="text-4xl font-bebas uppercase text-comic-blue mb-6 tracking-wide">SMS Communications & Opt-In</h2>
                
                <h3 className="text-2xl font-bebas uppercase text-black mb-3">Verbal SMS Opt-In</h3>
                <p className="text-lg font-bold text-gray-800 leading-relaxed mb-4">
                  Super Smash KC collects verbal consent from customers to receive SMS communications. Customers may opt in during an in-person visit or over the phone. When registering a customer for the first time, staff asks if the customer would like to receive SMS-based billing notifications, appointment reminders, dispatch notifications, and job completion surveys.
                </p>
                <p className="text-lg font-bold text-gray-800 leading-relaxed mb-4">
                  Mobile Opt in, SMS Consent, and phone numbers collected for SMS communication purposes will not be shared with any third party or affiliates for marketing purposes.
                </p>
                <p className="text-lg font-bold text-gray-800 leading-relaxed mb-8">
                  Customers are informed that message and data rates may apply, message frequency may vary, and they may text HELP for assistance or STOP to unsubscribe at any time, after which no further messages will be sent. Customers are also informed that their information will not be shared with third parties.
                </p>

                <h3 className="text-2xl font-bebas uppercase text-black mb-3">Website / Online SMS Opt-In</h3>
                <p className="text-lg font-bold text-gray-800 leading-relaxed mb-4">
                  By submitting a form on our website and opting in to receive text messages, you consent to receive SMS messages from Super Smash KC at the number provided, including messages sent by an autodialer. Consent is not a condition of purchase. Message and data rates may apply. Message frequency varies.
                </p>
                <p className="text-lg font-bold text-gray-800 leading-relaxed">
                  You may unsubscribe at any time by replying STOP or using the unsubscribe link (where available). Reply HELP for assistance. Customer information will not be shared with third parties.
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}