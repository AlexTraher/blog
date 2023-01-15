import HighlightBlock from "~/components/HighlightBlock";
import Section from "~/components/Section";
import ShrinkableLogo from "~/components/ShrinkableLogo";

export default function Index() {
  return (
    <>
      <ShrinkableLogo />
      <h2 className="my-4 text-center text-xl text-gait-green-dark dark:text-gait-blue">For a faster, more user-focused experience</h2>
      <section className="flex px-4 my-8 justify-center gap-2 md:mr-[25%]">
        <div className=" p-2 md:ml-[-30px] md:pl-[80px] md:bg-white md:dark:bg-gait-blue-mid flex items-center">
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
        <div className=" p-2 md:mr-[-30px] md:pr-[80px] md:bg-white md:dark:bg-gait-blue-mid flex items-center justify-start">
          <span className="block w-[100px] h-[100px] md:w-[50px] md:h-[50px] bg-contain bg-no-repeat bg-user-light dark:bg-user-dark"></span>
        </div>
      </section>
    
      <Section>
        <Section.Column className="flex-[100%] md:flex-[50%]">
          <HighlightBlock header="Refresh & Rebuild" className="h-full">
            <p className="my-4">
              Our passion at GAIT are responsive, performant websites.
            </p>
            <p className="my-4">
              In 2021 Google updated their search engine algorithm, making responsivity a more important consideration for SEO.
              We can help improve your website's load time but shifting unecessary weight, 
              and other factors that contribute to it's overall SEO score.
            </p>
            <p className="my-4">
              Most of the time this can take the from of a rebuild - we can produce a fresh website,
              keeping all of your branding and the functionality you love, but built with a modern, lightweight CMS, ensuring perforance and your users' experience are top priority.
            </p>
            <p className="my-4 text-lg text-center">
              Ensure your website meets to today's standards, so it's ready to stand out against the busy crowd for years to come,
              by having it re-built with us at GAIT.
            </p>
          </HighlightBlock>
        </Section.Column>
        <Section.Column className="flex-[100%] md:flex-[50%] justify-items-stretch">
          <HighlightBlock header="Audit & Review" className="h-full">
            <p className="my-4">
              Our other passion and expertise at GAIT is User-Experience (or “UX”).
              We work with businesses to review their websites, 
              and check for anything unexpected that might damge clients confidence in the business.
            </p>
            <p className="my-4">
              We review the user-flow, and assess for any UX imperfections / deficiences, 
              and report on how to improve these. We also check for bugs, errors, broken links,
              SEO score and anything that can be done to lean-up your current website. 
            </p>
            <p className="my-4">
              After presenting the findings, you can either choose to have us do the edits, 
              or you can simply pass the report to your current developers.
            </p>
            <p className="my-4 text-lg text-center">
              Perfect your website from within, so it stills thrives against today's ever-growing competition, 
              by having it reviewed by us at GAIT.
            </p>

          </HighlightBlock>

        </Section.Column>
      </Section>
      <section className="h-64 flex flex-col justify-center">
        <p className="text-lg text-center">
          Unsure which would be best for your website needs?&nbsp;
          Just reach out to us for a free assessment and recommendation
        </p>
      </section>
    </>
    );
}
