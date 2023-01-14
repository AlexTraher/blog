import Section from "~/components/Section";

export default function Services() {
  return (
    <>
      <Section header="Refresh & Rebuild">
        <Section.Column col={12} mdCol={6}>
          <ul className="list-disc list-inside text-lg">
            <li>Assessment of current website, and how it's been built.</li>
            <li>Full Review & Audit (see details further down this page).</li>
            <li>Recommendations about anything we think needs changing based on the findings of the audit</li>
            <li>Dicussion about anything you would like changed.</li>
            <li>Full rebuild, either using a lightweight CMS (or with a fully bespoke, customisable build if this is your preference).</li>
            <li>Full joint review and feedback</li>
            <li>Any final adjustments</li>
          </ul>
        </Section.Column>
        <Section.Column col={12} mdCol={6}>
          Some more content in here
        </Section.Column>
      </Section>
    </>
  );
}
