const HeroPage = () => {
  return (
  	<div className="relative bg-[url('/graph-paper.svg')] text-accent bg-repeat bg-[length:50px_50px] flex flex-col items-center justify-center bg-primary">
      <div className="absolute inset-0 bg-white/80"></div>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-black ring-1 ring-black/10 hover:ring-black/20">
              Announcing our latest designs.&nbsp;
              <a href="#services" className="font-semibold text-accent-light">
                <span aria-hidden="true" className="absolute inset-0"></span>Read more&nbsp;
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
						<h1 className="font-semibold tracking-tight text-balance text-black text-4xl leading-tight md:text-7xl md:leading-[1.1]">
							Here to <span className="text-accent underline font-bold">design</span> <span className="">your</span> online business
						</h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#services" className="rounded-md bg-accent px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-accent-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Contact us</a>
              <a
                href="#services"
                className="relative text-sm/6 font-semibold text-black group"
              >
                Learn more <span aria-hidden="true">→</span>
                <span
                  className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full"
                ></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroPage