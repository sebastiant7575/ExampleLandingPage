import Image from "next/image"

const ServicesPage = () => {
  return (      
    <div id="second" className="min-h-screen lg:max-h-screen flex flex-col items-center justify-center bg-accent text-white">
      <div className="px-12 pb-12 lg:pb-0 sm:mt-12 lg:mt-6">
          <p className="mx-auto mt-8 lg:mt-0 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            <span className="underline">Everything</span> you need to market your product
          </p>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div className="group relative lg:row-span-2 rounded-lg lg:rounded-l-4xl transition duration-300 ease-out transform-gpu hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute inset-px rounded-lg bg-primary lg:rounded-l-4xl"></div>
              <div className="relative flex h-[450px] lg:h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)] shadow-md">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0 group">
                  <p className="mt-2 text-xl font-medium tracking-tight text-black max-lg:text-center">Mobile friendly</p>
                  <p className="relative mt-2 max-w-lg text-sm/6 text-pretty text-gray-600 max-lg:text-center">
                    {`All our designs are incredibily responsive to screen sizes, whether you're viewing on the web or mobile, our sites look just right.`}
                    <span
                      className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full"
                    ></span>
                  </p>
                </div>
                <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 outline outline-white/20">
                    <Image
                      // src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                      src={'/iphone2.png'}
                      alt="Mobile friendly"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 lg:rounded-l-4xl"></div>
            </div>
            <div className="group relative max-lg:row-start-1 rounded-lg max-lg:rounded-t-4xl transition duration-300 ease-out transform-gpu hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute inset-px rounded-lg bg-primary max-lg:rounded-t-4xl"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10 group">
                  <p className="mt-2 text-xl font-medium tracking-tight text-black max-lg:text-center">Performance</p>
                  <p className="relative mt-2 max-w-lg text-sm/6 text-pretty text-gray-600 max-lg:text-center">
                    Our sites load FAST, so everyone can access and view your product instantly.
                    <span
                      className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full"
                    ></span>
                  </p>
                </div>
              <div className="flex flex-1 flex-col px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <div className="relative w-full max-w-full mt-6 max-lg:max-w-xs mx-auto">
                  <Image
                    src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-performance.png"
                    alt="Performance"
                    width={500} 
                    height={300}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-t-4xl"></div>
            </div>
              <div className="group relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2 rounded-lg transition duration-300 ease-out transform-gpu hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute inset-px rounded-lg bg-primary"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10 group">
                  <p className="mt-2 text-xl font-medium tracking-tight text-black max-lg:text-center">Maintenance & Hosting</p>
                  <p className="relative mt-2 max-w-lg text-sm/6 text-pretty text-gray-600 max-lg:text-center">
                    {`We can take care of hosting your site and maintenance, so everything "just works", and you can focus on growing your business. No worrying about SSL Certificates, downtime, or security.`}
                    <span
                      className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full"
                    ></span>
                  </p>
                </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <div className="w-full max-w-full max-lg:max-w-xs mx-auto">
                  <Image
                    src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-security.png"
                    alt="Maintenance & Hosting"
                    width={400} 
                    height={150}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15"></div>
            </div>
            <div className="group relative lg:row-span-2 rounded-lg max-lg:rounded-b-4xl lg:rounded-r-4xl transition duration-300 ease-out transform-gpu hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute inset-px rounded-lg bg-primary max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
              <div className="relative flex h-[450px] lg:h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0 group">
                  <p className="mt-2 text-xl font-medium tracking-tight text-black max-lg:text-center">Modern Designs</p>
                  <p className="relative mt-2 max-w-lg text-pretty text-sm/6 text-gray-600 max-lg:text-center">
                    {`We're always keeping up to date on the latest design trends - so your site looks sleek and stylish.`}
                    <span
                      className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full"
                    ></span>
                  </p>
                </div>
                <div className="relative min-h-120 w-full grow">
                  <div className="absolute top-10 right-10 bottom-[1px] left-10 overflow-hidden rounded-t-xl bg-gray-600/60 outline outline-white/10">
                    <Image
                      src="/moderndesign.jpeg"
                      alt="Modern design"
                      fill
                      className="size-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ServicesPage