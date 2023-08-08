'use client'

import React from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed'


export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Testimonials</h2>
            <p className="text-xl text-gray-400">
              What our clients are saying about us.
            </p>

            {/* Grid for tweets */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
              <div className="p-4">
                <TwitterTweetEmbed tweetId={"1648104277938778115"} />
              </div>
              <div className="p-4">
                <TwitterTweetEmbed tweetId={"1658618032649027584"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}








