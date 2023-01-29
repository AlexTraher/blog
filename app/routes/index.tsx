import { MetaFunction } from "@remix-run/node";
import Border from "~/components/BorderContent";
import HighlightBlock from "~/components/HighlightBlock";
import HightlightLink from "~/components/HighlightLink";
import Paragraph from "~/components/Paragraph";
import Section from "~/components/Section";
import ShrinkableLogo from "~/components/ShrinkableLogo";

export default function Index() {
  return (
    <>
        <ShrinkableLogo />
        <h2 className="my-4 text-center text-xl text-gait-green-deep dark:text-gait-blue sm:pb-16 sm:pt-16">
          For a faster, more user-focused experience
        </h2>
      <section className="flex px-4 my-8 justify-center gap-2 md:mr-[25%]">
        <div className=" p-2 md:ml-[-3rem] md:pl-[80px] md:min-w-[227px] md:bg-gait-off-white md:dark:bg-gait-off-black flex items-center justify-end">
          <span className="block w-[100px] h-[100px] md:w-[50px] md:h-[50px]  bg-contain bg-no-repeat bg-gauge-light dark:bg-gauge-dark"></span>
        </div>
        <Paragraph>
          We take slow websites, and turn them into new, fast, responsive sites that are set up for the future. 
          If you would like this for your website, then our <HightlightLink href="/services">'Refresh & Rebuild'</HightlightLink> package is for you.
        </Paragraph>
      </section>
      
      <section className="flex px-4 my-8 gap-2 md:ml-[25%]">
        <Paragraph align="right">
          We'll also assess current websites, reviewing them for any and all user-experience issues. 
          If you would like such a review for your business's website, then ask us about our <HightlightLink href="/services#AuditAndReview">'Audit & Review'</HightlightLink> package. 
          And the best part - if we don't find anything of concern, then there's no fee!
        </Paragraph>
        <div className=" p-2 md:mr-[-3rem] md:pr-[80px] md:min-w-[227px]  md:bg-gait-off-white md:dark:bg-gait-off-black flex items-center justify-start">
          <span className="block w-[100px] h-[100px] md:w-[50px] md:h-[50px] bg-contain bg-no-repeat bg-user-light dark:bg-user-dark"></span>
        </div>
      </section>
    
      <Section>
        <Section.Column className="flex-[100%] md:flex-[50%]">
          <HighlightBlock header="Refresh & Rebuild" className="h-full flex flex-col justify-around" align="center">
            <Paragraph>
              Our passion at GAIT is responsive, performant websites.
            </Paragraph>
            <Paragraph>
              In 2021 Google updated their search engine algorithm, making performance an important consideration for SEO.
              We can help improve your website's load time by shifting unecessary weight, 
              and other factors that contribute to it's overall SEO score.
            </Paragraph>
            <Paragraph>
              We normally suggest a rebuild - a new, fresh website - maintaining all the functionality you love, but with the benefit of being fast for all your customers.
            </Paragraph>
            <Border>
              <Paragraph align="center" textSize="lg">
                Ensure your website meets today's standards, so it's ready to stand out against the busy crowd for years to come,
                by having it re-built with us at GAIT.
              </Paragraph>
            </Border>
          </HighlightBlock>
        </Section.Column>
        <Section.Column className="flex-[100%] md:flex-[50%] justify-items-stretch">
          <HighlightBlock header="Audit & Review" className="h-full flex flex-col justify-around" align="center">
            <Paragraph>
              At GAIT we love User-Experience (or “UX”).
              We work with businesses to review their websites, 
              checking for anything unexpected that might damge clients confidence in the business.
            </Paragraph>
            <Paragraph>
              We'll asses the user-flow, identifying any UX imperfections / deficiences, 
              and suggest how to improve these. We also check for bugs, errors and broken links.
              In addition we'll analyse your SEO score and website performance to make sure your customers find your site fast and easily.
            </Paragraph>
            <Paragraph>
              After presenting the findings, you can either choose to have us do the edits, 
              or you can simply pass the report to your current developers.
            </Paragraph>
            <Border>
              <Paragraph align="center" textSize="lg">
                Perfect your website from within, so it thrives against today's ever-growing competition, 
                by having it reviewed by us at GAIT.
              </Paragraph>
            </Border>
          </HighlightBlock>

        </Section.Column>
      </Section>
      <section className="h-64 flex flex-col justify-center">
        <Paragraph align="center" textSize="lg">
          Unsure which would be best for your site's needs?<br/>
          Just <HightlightLink href="mailto:hello@gait.dev">reach out to us</HightlightLink> for a complimentary assessment and recommendation
        </Paragraph>
      </section>
    </>
    );
}

export const meta: MetaFunction = () => {
  return { title: "Gait Software | Home" };
};
