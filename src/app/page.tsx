
export default function Home() {

  return (
    <div id="first" className="h-screen snap-y snap-mandatory">
      <div className="h-screen flex flex-col items-center justify-center snap-start bg-offwhite">
        <h2 className="text-4xl font-bold">Home</h2>
        <p className="mt-2">Scroll Down</p>
      </div>

      <div id="second" className="h-screen flex flex-col items-center justify-center snap-start bg-darkgreen text-offwhite">
        <h2 className="text-4xl font-bold">About</h2>
        <p className="mt-2">Scroll Down</p>
      </div>

      <div id="third" className="h-screen flex flex-col items-center justify-center snap-start bg-offwhite text-black">
        <h2 className="text-4xl font-bold">Contact</h2>
        <p className="mt-2">Scroll Down</p>
      </div>

      <div id="fourth" className="h-screen flex flex-col items-center justify-center snap-start bg-darkgreen text-offwhite">
        <h2 className="text-4xl font-bold">Footer</h2>
        <p className="mt-2">Scroll Up</p>
      </div>
    </div>
  );
}
