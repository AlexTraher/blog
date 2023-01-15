import HighlightBlock from "~/components/HighlightBlock";
import Section from "~/components/Section";

export default function About() {
  return (
    <>
      <Section header="Development">
        <Section.Column className="order-last md:order-first flex-[100%] md:flex-[50%] first:xs:border-b-0 first:sm:border-b-0">
          <p className="my-4">
            Alex has a range of experience but his specialism is in web development. 
            He has over 5 years experience in the development space, with his latest role being Technical Specialist at a leading financial service firm. 
            He is a conference speaker and open source contributor.
          </p>
          <HighlightBlock>
            <p className="my-4">
              If Alex sounds like he has the skillset you're looking for to drive your project forward, 
              or help get a piece of work done to a high standard, then send us an email! 
            </p>
            <p className="my-4">
              Alex also offers his skills as a consultant if you're looking to upskill your team!
            </p>
          </HighlightBlock>
        </Section.Column>
        <Section.Column className="flex-[50%] justify-center items-center flex-col text-center border-b-2 border-b-white md:border-b-0">
          <img className="rounded-lg w-[300px]" src="./assets/alex.png" alt="headshot of Alex - our lead developer"></img>
          <p>Our Lead Developer Alex is who you'll be mainly liaising with if you chose to have a website refresh & rebuild.</p>
          <div className="flex justify-around w-[50%]">
            <a href="https://twitter.com/alextraher"><div className="bg-twitter-light bg-no-repeat dark:bg-twitter-dark w-12 h-12 opacity-80 hover:opacity-100 bg-center"></div></a>
            <a href="https://github.com/alextraher"><div className="bg-github-light bg-no-repeat dark:bg-github-dark w-12 h-12 opacity-80 hover:opacity-100 bg-center"></div></a>
          </div>
        </Section.Column>
      </Section>
      <Section header="Quality Assurance" headerPosition="right">
        <Section.Column className="flex-[100%] md:flex-[50%] justify-center items-center text-center">
          <img className="rounded-lg w-[300px]" src="./assets/alex.png" alt="headshot of Gemma - our head of QA and COO"></img>
          <p>Our Lead QA and UX developer Gemma is who you'll be mainly liaising with if you chose to have a website review.</p>

        </Section.Column>
        <Section.Column className="flex-[100%] md:flex-[50%]">
          <p >
            Gemma has a passion and keen eye for spotting user-based issues and inconsistencies, and is constantly finding them though-out the internet! 
            She therefore very much enjoys helping puts these to rights. 
            
            
            
          </p>
          <p className="my-4">
            Gemma has 5 years experience in software engineering, so she knows exactly what kind of app and web issues to look out for and how to perfect user journeys.
          </p>
        </Section.Column>
      </Section>
    </>
  );
}
