import Section from "~/components/Section";
import ShrinkableLogo from "~/components/ShrinkableLogo";

export default function Index() {
  return (
    <>
    <ShrinkableLogo />
    <h2 className="my-4 text-center text-xl text-gait-green-dark dark:text-gait-blue">For a faster, more user-focused experience</h2>
    <section className="flex px-4 my-8 justify-center gap-2 md:mr-[25%]">
      <div className=" p-2 md:ml-[-30px] md:pl-[80px] md:bg-white flex items-center">
        <span className="block w-[100px] h-[100px] md:w-[50px] md:h-[50px] bg-contain bg-no-repeat bg-gauge-light dark:bg-gauge-dark"></span>
      </div>
      <p>
        We take slow websites, that were built a while ago on what would now be considered old tech, and turn them into new, fast, responsive sites that are set up for the future. 
        If you would like this for your website, then our 'Refresh & Rebuild' package is for you.
      </p>
    </section>
    <section className="flex px-4 my-8 gap-2 md:ml-[25%]">
      <p className="text-right">
        We also assess current websites, and review them for any and all user-experience based issues. 
        If you would like such a review for your business's website, then ask us about our 'Audit & Review' package. 
        And the best part - if we don't find anything of concern, then there's no fee!
      </p>
      <div className=" p-2 md:mr-[-30px] md:pr-[80px] md:bg-white flex items-center justify-start">
        <span className="block w-[100px] h-[100px] md:w-[50px] md:h-[50px] bg-contain bg-no-repeat bg-user-light dark:bg-user-dark"></span>
      </div>
    </section>
    <section>
      <p className="text-lg text-center">
        Unsure which would be best for your website needs?&nbsp;
        Just reach out to us for a free assessment and recommendation
      </p>
    </section>
    </>
    );
}
