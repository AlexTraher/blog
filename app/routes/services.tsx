import { MetaFunction } from "@remix-run/node";
import HighlightBlock from "~/components/HighlightBlock";
import HightlightLink from "~/components/HighlightLink";
import List from "~/components/List";
import Paragraph from "~/components/Paragraph";
import Section from "~/components/Section";

export default function Services() {
  return (
    <>
      <Section header="Refresh & Rebuild" headerId="RefreshAndRebuild">
        <Section.Column className="flex-[100%] md:flex-[50%] order-1 !border-b-0 md:order-0">
          <Paragraph>Our Refresh & Rebuild service includes...</Paragraph>
          <List>
            <List.Item>Assessment of your current website, and how it's been built.</List.Item>
            <List.Item>Full Review & Audit (see details further down this page).</List.Item>
            <List.Item>Recommendations about anything we think needs changing based on the findings of the audit.</List.Item>
            <List.Item>Dicussion about anything you would like changed.</List.Item>
            <List.Item>Full rebuild, either using a lightweight CMS (or with a fully bespoke, customisable build if this is your preference).</List.Item>
            <List.Item>Iterative process to ensure you get the perfect results.</List.Item>
          </List>
        </Section.Column>
        <Section.Column className="flex-[100%] md:flex-[50%] order-0 border-b-white border-b-2 md:border-b-0 md:order-1">
        <Paragraph>
          Do you have a website for your business that might be underperforming?
        </Paragraph>
        <Paragraph>
          Was your site built a while ago, has hasn't be changed much since?
        </Paragraph>
        <Paragraph>
          Worry your customers watch a loading spinner when trying to visit your site?
        </Paragraph>
        <Paragraph>
          Then simply message us about our Refresh & Rebuild package - we're glad to be of help any way we can!
        </Paragraph>
        </Section.Column>
        <Section.Column className="flex-[100%] order-2 mb-8">
          <HighlightBlock header="Pricing">
            <Paragraph textSize="lg">From: £50 per hour</Paragraph>
            <Paragraph>
              Pricing is based mainly on complexity of your website - how many pages it includes, the length of those pages and the functionality required
            </Paragraph>
            <Paragraph>
              Send us an <HightlightLink href="mailto:hello@gait.dev">email</HightlightLink> with a link to your website and we can either provide a more accurate quote or organise a call to discuss further
            </Paragraph>
          </HighlightBlock>
        </Section.Column>
      </Section>
      <Section header="Audit & Review" headerPosition="right" headerId="AuditAndReview">
        <Section.Column className="flex-[100%] md:flex-[50%]">
          <Paragraph>
            Having a website quality assured by an external body provides the confidence that your potential clients are interacting with the site 
            in the way you intended them to. 
            It also provides you with the confidence that your site doesn't have some pesky bug it in, or even the slightest spelling mistake.
          </Paragraph>

          <Paragraph>
            If you feel a review could benefit your site, then send us a message at{" "}
            <HightlightLink href="mailto:hello@gait.dev">hello@gait.dev</HightlightLink> - we're glad to help in any way we can!
          </Paragraph>
        </Section.Column>
        <Section.Column className="flex-[100%] md:flex-[50%]">
          <Paragraph>Our Audit & Review service includes...</Paragraph>
          <List>
            <List.Item>Assessment and Quality Assurance (QA) of current website.</List.Item>
            <List.Item>We will check for:
              <List tabDepth={1}>
                <List.Item>Unexpected or confusing directions in user-flow.</List.Item>
                <List.Item>Accessibility concerns.</List.Item>
                <List.Item>Broken links.</List.Item>
                <List.Item>Information inconsistencies.</List.Item>
                <List.Item>CSS / styling / layout inconsistencies or errors, checked across multiple devices.</List.Item>
                <List.Item>Navigation inconsistencies.</List.Item>
                <List.Item>Grammar mistakes.</List.Item>
                <List.Item>Spelling mistakes.</List.Item>
              </List>
            </List.Item>
            <List.Item>We will also:
              <List tabDepth={1}>
                <List.Item>Review your SEO score using lighthouse</List.Item>
                <List.Item>Review the performance of your website</List.Item>

              </List>
            </List.Item>
          </List>

          <Paragraph>...and anything else you'd like us to concentrate on - we're flexible and can prioritise what means most to you.</Paragraph>

        
        </Section.Column>
        <Section.Column className="flex-[100%]">
          <HighlightBlock header="Pricing">
            <Paragraph textSize="lg">From: £100 per page with advisories</Paragraph>
            <Paragraph>
              Pricing is based how how many pages we find with issues, and, to a lesser extent, how many issues we find. 
              We charge £100 per page that contains an advisory, and if we find over 10 on the same page, we charge another £5 per issue (from the 11th onwards).
            </Paragraph>
            <Paragraph>
              Because we charge based on the issues we find - if there's no issues - there's no fee!
            </Paragraph>
            <Paragraph>
              We understand that businesses are regularly in situations where a budget is needed, and therefore we are also flexible and very happy to work to a budget that suits you.
              We will simply do the QA until we reach the budget, and report back to you the findings, along which what pages and any user flows that were assessed.
            </Paragraph>
            <Paragraph textSize="sm">
              Disclaimer - We reserve the right to determine what falls under the term 'issue' (this is just so we're covered).
              Exact duplicates of the same issue, that can reasonably be assumed will be solved by the same fix, will be considered to be 1 issue.
            </Paragraph>
          </HighlightBlock>
        </Section.Column>
      </Section>
    </>
  );
}

export const meta: MetaFunction = () => {
  return { title: "Gait Software | Services" };
};
