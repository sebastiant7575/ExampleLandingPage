
export default function Home() {

  return (
    <div id="first" className="h-screen snap-y snap-mandatory">
      {/* First Page */}
      <div className="h-screen flex flex-col items-center justify-center snap-start bg-offwhite">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-black ring-1 ring-black/10 hover:ring-black/20">
                Announcing our latest business. <a href="#second" className="font-semibold text-indigo-400"><span aria-hidden="true" className="absolute inset-0"></span>Read more <span aria-hidden="true">&rarr;</span></a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-blacksm:text-7xl">Here to enrich your online business</h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.</p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="#third" className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Get started</a>
                <a href="#second" className="text-sm/6 font-semibold text-black">Learn more <span aria-hidden="true">→</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Second Page */}
      <div id="second" className="h-screen flex flex-col items-center justify-center snap-start bg-indigo text-offwhite">
        <h2 className="text-4xl font-bold">About</h2>
        <p className="mt-2">Scroll Down</p>
      </div>
      {/* Third Page */}
      <div id="third" className="h-screen flex flex-col items-center justify-center snap-start bg-offwhite text-black">
        <h2 className="text-4xl font-bold">Contact</h2>
        <p className="mt-2">Scroll Down</p>
      </div>
      {/* Fourth Page */}
      <div id="fourth" className="h-screen flex flex-col items-center justify-center snap-start bg-indigo text-offwhite">
        <h2 className="text-4xl font-bold">Footer</h2>
        <p className="mt-2">Scroll Up</p>
      </div>
      
    </div>
  );
}
