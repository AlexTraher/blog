import { MetaFunction } from "@remix-run/node";
import HighlightBlock from "~/components/HighlightBlock";
import HightlightLink from "~/components/HighlightLink";
import Paragraph from "~/components/Paragraph";
import Section from "~/components/Section";

export default function Expertise() {
  return (
    <>
      <Section header="Development">
        <Section.Column className="order-last md:order-first flex-[100%] md:flex-[50%] first:xs:border-b-0 first:sm:border-b-0">
          <Paragraph>
            Alex has a range of experience but his specialism is in web development. 
            He has just under a decade of experience, with his latest role being Technical Specialist at a leading financial services firm. 
            He is also conference speaker and open source contributor.
          </Paragraph>
          <HighlightBlock>
            <Paragraph>
              If Alex sounds like he has the skillset you're looking for to drive your project forward, 
              or help get a piece of work done to a high standard, then <HightlightLink href="mailto:hello@gait.dev">send us an email</HightlightLink>!
            </Paragraph>
            <Paragraph>
              Alex also offers his skills as a consultant if you're looking to upskill your team!
            </Paragraph>
          </HighlightBlock>
        </Section.Column>
        <Section.Column className="flex-[50%] justify-center items-center flex-col text-center border-b-2 border-b-white md:border-b-0">
          <img className="rounded-lg w-[300px]" src="./assets/alex.png" alt="headshot of Alex - our lead developer"></img>
          <Paragraph>Our Lead Developer Alex is who you'll be mainly liaising with if you chose to have a website refresh & rebuild.</Paragraph>
          <div className="flex justify-around w-[50%]">
            <a href="https://twitter.com/alextraher" aria-label="link to Alex's twitter"><div className="bg-twitter-light bg-no-repeat dark:bg-twitter-dark w-12 h-12 opacity-80 hover:opacity-100 bg-center"></div></a>
            <a href="https://github.com/alextraher" aria-label="link to Alex's github"><div className="bg-github-light bg-no-repeat dark:bg-github-dark w-12 h-12 opacity-80 hover:opacity-100 bg-center"></div></a>
          </div>
        </Section.Column>
      </Section>
      <Section header="Quality Assurance" headerPosition="right">
        <Section.Column className="flex-[100%] md:flex-[50%] justify-center items-center text-center">
          <img className="rounded-lg w-[300px]" src="./assets/gemma.png" alt="headshot of Gemma - our head of QA and COO"></img>
          <Paragraph>Our Lead QA and UX developer Gemma is who you'll be mainly liaising with if you chose to have a website audit & review.</Paragraph>

        </Section.Column>
        <Section.Column className="flex-[100%] md:flex-[50%]">
          <Paragraph>
            Gemma has over 5 years experience in software engineering, across multiple disiplines including data engineering, web development, UX and user research.
            
          </Paragraph>
          <Paragraph>
            Gemma is an expert at routing out issues and inconsistencies, and is constantly finding them through-out the internet!
            Her keen eye, along with her UX and web development background will ensure your business has a site that customers love using and have full confidence in.
          </Paragraph>
         
        </Section.Column>
      </Section>
    </>
  );
}

export const meta: MetaFunction = () => {
  return { title: "Gait Software | Expertise" };
};
