import { MetaFunction } from "@remix-run/node";
import { useNavigate } from "react-router-dom";
import Border from "~/components/BorderContent";
import Button from "~/components/Button";
import HighlightBlock from "~/components/HighlightBlock";
import HightlightLink from "~/components/HighlightLink";
import Paragraph from "~/components/Paragraph";
import Section from "~/components/Section";
import ShrinkableLogo from "~/components/ShrinkableLogo";

export default function Index() {
  const navigate = useNavigate();

  return (
    <>
      <ShrinkableLogo />
      <section className="flex justify-center gap-8 my-16 flex-col sm:flex-row px-4">
        <Button
          className="min-h-[60px]"
          onClick={() => navigate("/services")}
          icon={() => <span className="block w-[25px] h-[25px] bg-contain bg-no-repeat bg-gauge-light dark:bg-gauge-dark bg-center"></span>}>
            Technical Expertise
        </Button>
        <Button
          className="min-h-[60px]"
          onClick={() => navigate("/services#AuditAndReview")}
          icon={() => <span className="block w-[25px] h-[25px] bg-contain bg-no-repeat bg-user-light dark:bg-user-dark bg-center"></span>}>
            QA & User Experience
        </Button>
      </section>
      <section className="flex bg-gait-green-shallow dark:bg-gait-blue-shallow mt-[100px] mx-[-2rem] justify-center items-center">
        <h2 className="text-xl text-gait-green-deep dark:text-gait-blue bg-gait-paper dark:bg-gait-paper-dark py-4 px-4 sm:px-8 md:px-16">
          Striving for a better web
        </h2>
      </section>
      <div className="flex flex-col items-center my-16">
        <section className="flex px-4 my-8 justify-center gap-2 bg-gait-off-white dark:bg-gait-off-black items-center border-r-8 border-gait-green-shallow dark:border-gait-blue-shallow md:ml-16 lg:ml-32 max-w-[1200px]">
          <span className="hidden md:block w-[75px] h-[75px] bg-contain bg-no-repeat bg-gauge-light dark:bg-gauge-dark bg-center"></span>
          <Paragraph>
            We take slow websites, and turn them into new, fast, responsive sites that are set up for the future. 
            If you would like this for your website, then our <HightlightLink href="/services">'Refresh & Rebuild'</HightlightLink> package is for you.
          </Paragraph>
        </section>
        
        <section className="flex px-4 my-8 justify-center gap-2 bg-gait-off-white dark:bg-gait-off-black items-center border-l-8 border-gait-green-shallow dark:border-gait-blue-shallow md:mr-16 lg:mr-32 max-w-[1200px]">

          <Paragraph>
            We take slow websites, and turn them into new, fast, responsive sites that are set up for the future. 
            If you would like this for your website, then our <HightlightLink href="/services">'Refresh & Rebuild'</HightlightLink> package is for you.
          </Paragraph>
          <span className="hidden md:block w-[75px] h-[75px] bg-contain bg-no-repeat bg-user-light dark:bg-user-dark bg-center"></span>
        </section>
      </div>
    
      {/* <Section>
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
      </Section> */}

      <section className="h-64 flex flex-col justify-center gap-10 items-center my-16">
        <div className="bg-gait-i-light dark:bg-gait-i-dark w-[50px] h-[75px] bg-contain bg-no-repeat bg-center flex-none"></div>
        <Paragraph align="center" textSize="lg">
          Unsure which would be best for your site's needs?<br/>
          Just <HightlightLink href="mailto:hello@gait.dev">reach out to us</HightlightLink> for a complimentary assessment and recommendation
        </Paragraph>
        <div className="hidden md:block bg-gait-i-light dark:bg-gait-i-dark w-[50px] h-[75px] bg-contain bg-no-repeat bg-center flex-none"></div>
      </section>
    </>
    );
}

export const meta: MetaFunction = () => {
  return { title: "Gait Software | Home" };
};
