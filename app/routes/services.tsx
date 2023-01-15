import HighlightBlock from "~/components/HighlightBlock";
import Section from "~/components/Section";

export default function Services() {
  return (
    <>
      <Section header="Refresh & Rebuild">
        <Section.Column className="flex-[100%] md:flex-[50%]">
          <ul className="list-disc list-inside">
            <li>Assessment of current website, and how it's been built.</li>
            <li>Full Review & Audit (see details further down this page).</li>
            <li>Recommendations about anything we think needs changing based on the findings of the audit</li>
            <li>Dicussion about anything you would like changed.</li>
            <li>Full rebuild, either using a lightweight CMS (or with a fully bespoke, customisable build if this is your preference).</li>
            <li>Full joint review and feedback</li>
            <li>Any final adjustments</li>
          </ul>
        </Section.Column>
        <Section.Column className="flex-[100%] md:flex-[50%]">
        <p className="my-4">
          Do you have a website for your business that you feel might be underperforming?
        </p>
        <p className="my-4">
          Was your site built a while ago, has hasn't be changed much since?
        </p>
        <p className="my-4">
          Do you think it might be a bit slow by today's standards, and think that might be impacting the traffic to your site?
        </p>
        <p className="my-4">
          Then simply message us about our Refresh & Rebuild package - we're glad to be of help any way we can!
        </p>
        </Section.Column>
        <Section.Column className="flex-[100%]">
          <HighlightBlock header="Pricing">
            <p className="text-lg my-4">From: £_</p>
            <p className="my-4">
              Pricing is based mainly on the size (desired) website - how many pages it includes, and the length of those pages.
            </p>
            <p className="my-4">
              Shoot us an email with a link to your website and we can either provide a more accurate quote or organise a call to discuss further
            </p>
          </HighlightBlock>
        </Section.Column>
      </Section>
      <Section header="Audit & Review" headerPosition="right">
        <Section.Column className="flex-[100%] md:flex-[50%]">
          <p className="my-4">
            Having a website quality assured by an external body provides the confidence that your potential clients are interacting with the site 
            in the way you intended them to. 
            It also provides you with the confidence that your site doesn't have some pesky bug it in, or even the slightest spelling mistake.
          </p>

          <p className="my-4">
            If you feel a review could benefit your site, then send us a message at{" "}
            <a className="hover:underline underline-offset-2" href="mailto:hello@gait.dev">hello@gait.dev</a> - we're glad to help in any way we can!
          </p>
        </Section.Column>
        <Section.Column className="flex-[100%] md:flex-[50%]">
          <ul className="list-disc list-inside text-lg">
          
            <li>Assessment and QA (Quality Assurance) of current website.</li>
            <li>Check for:
              <ul className="list-disc list-inside ml-8">
                <li>Unexpected or confusing directions in user-flow</li>
                <li>Accessibility concerns</li>
                <li>Broken links</li>
                <li>Information inconsistencies</li>
                <li>CSS / styling / layout inconsistencies or errors, checked across multiple devices</li>
                <li>Navigation inconsistencies</li>
                <li>Grammar mistakes</li>
                <li>Spelling mistakes</li>
              </ul>
            </li>
            <li>Review of SEO score using lighthouse</li>
          </ul>

          <p className="my-4">...and anything else you'd like us to concentrate on - we're flexible and can prioritise what means most to you.</p>

        
        </Section.Column>
        <Section.Column className="flex-[100%]">
          <HighlightBlock header="Pricing">
            <p className="my-4">From: £100 per page with advisories</p>
            <p className="my-4">
              Pricing is based how how many pages we find with issues, and, to a lesser extent, how many issues we find. 
              We charge £100 per page that contains an advisory, and if we find over 10 on the same page, we charge another £5 per issue (from the 11th onwards). If we find no issues then there's no fee!
            </p>
            <p className="my-4">
              We understand that businesses are regularly in situations where a budget is needed, and therefore we are also flexible and very happy to work to a budget that suits you.
              We will simply do the QA until we reach the budget, and report back to you the findings, along which what pages and any user flows that were assessed.
            </p>
            <h4>
              Disclaimers:
            </h4>
            <p>
              We reserve the right to determine what falls under the term 'issue' (this is just so we're covered!)
              Exact duplicates of the same issue, that can reasonably be assumed will be solved by the same fix, we count as 1 issue.
            </p>
          </HighlightBlock>
        </Section.Column>
      </Section>
    </>
  );
}
