import ShrinkableLogo from "~/components/ShrinkableLogo";

export default function Index() {
  return (
    <>
    <ShrinkableLogo />
      <section>
        <ul className="p-8 flex justify-center">
          <li className="mx-8 sm:mx-12"><a href="https://twitter.com/alextraher"><div className="bg-twitter-light bg-no-repeat dark:bg-twitter-dark w-16 h-16 opacity-80 hover:opacity-100 bg-center"></div></a></li>
          <li className="mx-8 sm:mx-12"><a href="https://github.com/alextraher"><div className="bg-github-light bg-no-repeat dark:bg-github-dark w-16 h-16 opacity-80 hover:opacity-100 bg-center"></div></a></li>
        </ul>
      </section>
      <section className="flex justify-center flex-col items-center h-full">
        <h2 className="text-xl">Coming soon...</h2>
        
      </section>
      <section className="h-[500px] bg-orange-600">
        
      </section>
      <section className="h-[500px] bg-red-600">
        
      </section>
    </>
    );
}
