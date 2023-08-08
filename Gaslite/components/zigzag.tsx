import Image from 'next/image'

import FeatImage01 from '@/public/images/wide audit process.png'
import FeatImage02 from '@/public/images/wide work tg.png'
import FeatImage03 from '@/public/images/wide money.png'

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-pink-600 bg-pink-200 rounded-full mb-4">gas bad</div>
            <h1 className="h2 mb-4">FAQ</h1>
            <p className="text-xl text-gray-400">Frequently Asked Questions.</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width={500} height={405} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-pink-600 mb-2">gas bad</div>
                  <h3 className="h3 mb-3">What is the gas audit process?</h3>
                  <p className="text-xl text-gray-400 mb-4"> We start by discussing your project goals and defining the scope of the audit. Once the audit starts we open github issues with permalinks to your contract and suggest explicit changes to your codebase. Throughout the process we keep an open line of communication with your team to discuss our recommendations. At the end of the audit we provide a summary report with our findings.  </p>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width={500} height={405} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-pink-600 mb-2">gas bad.</div>
                  <h3 className="h3 mb-3">What kind of projects do you work with?</h3>
                  <p className="text-xl text-gray-400 mb-4">We work with a variety of EVM compatible projects including: tokens, NFTs, DeFI, Marketplaces, etc. We welcome projects on L1s and L2s. We will not work with projects we suspect are scams or otherwise detrimental to the community.</p>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03} width={500} height={405} alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-pink-600 mb-2">gas bad.</div>
                  <h3 className="h3 mb-3">How do you structure pricing?</h3>
                  <p className="text-xl text-gray-400 mb-4">For most of our clients we use a flat fee structure. We look at the lines of code, complexity of code, and the timeline for completion to provide our price quotes. For larger projects we offer results-based pricing structures. </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
