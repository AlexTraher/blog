import { MetaFunction } from "@remix-run/node";
import { FC, ReactElement } from "react";
import BorderContent from "~/components/BorderContent";
import HighlightBlock from "~/components/HighlightBlock";
import HightlightLink from "~/components/HighlightLink";
import Paragraph from "~/components/Paragraph";
import Section from "~/components/Section";

export default function Talks() {
  return (
    <>
      <Section header="Conference Talks">
        <Section.Column className="w-[100%] text-center" border={false}>
            <Paragraph padding="sm">
              At GAIT we love sharing our knowledge, and Alex regularly talks at conferences and meetups. 
              
            </Paragraph>
            <Paragraph padding="sm">
              You can find links to recorded talks and slides below
            </Paragraph>
        </Section.Column>
        <Section.Column className="w-[100%] text-center" border={false}>
          {TALKS.map((talk, i) => <Talk {...talk} key={i} />)}
        </Section.Column>
      </Section>
    </>
  );
}

interface ITalk {
  title: string,
  description: string,
  Slides: ReactElement<any, any>,
  talkLink?: string,
}

const Talk: FC<ITalk> = ({ title, Slides, talkLink, description }) => (
  <Section.Column border={false}>
    <BorderContent>
      <h2 className="text-lg">
        {talkLink ? <HightlightLink href={talkLink}>{title}</HightlightLink> : title}
      </h2>
      <Section className="justify-center">
        <Section.Column className="flex-1" border={false}>
          <p>{description}</p>
        </Section.Column>
        <Section.Column className="items-center flex-1">
          {Slides}
        </Section.Column>
      </Section>
    </BorderContent>
  </Section.Column>
)

export const meta: MetaFunction = () => {
  return { title: "Gait Software | Talks" };
};


const TALKS: ITalk[] = [
  {
    title: "Lessons Learned from Enterprise Micro-Frontends",
    Slides: <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTK2hTqTcr4JkFjBZ4fa3v1m73vO0ZFL1BLgCIc_BEmvHc3nwSjc1YSkheuIoDpug/embed?start=false&loop=false&delayms=60000" allowFullScreen={true}></iframe>,
    talkLink: "https://youtu.be/8033GWqjiB0?t=6093",
    description: "Alex talks about the lessons learned from trying to implement micro-frontends in the enterprise and recommends an approach for a step by step migration plan."
  },
  {
    title: "I'm Not a Proper Developer Because...",
    Slides: <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSWgBR6jkHIN_yqpqEKb0H6r_lhI2DTmoTRe-iVvx9kLLB71JTEcyopoF6dmx_YEQLOHO4vM-mxWTpt/embed?start=false&loop=false&delayms=3000" allowFullScreen={true}></iframe>,
    description: "Alex talks about impostor syndrome, how he has struggled with it and how we can lean on other research in psycology to help us better tackle feeling like an impostor."
  },
  {
    title: "Assembling The Enterprise With Micro-Frontends",
    Slides: <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSf0T06efzR8jOLPiGz7Tyah2ZGrPNTjdjgC4Oc3OCXiNcRE1JvbSFTa6ZBPBWTag/embed?start=false&loop=false&delayms=60000" allowFullScreen={true} className="min-w-[150px]"></iframe>,
    talkLink: "",
    description: "Alex talks about how IG have supported independent teams by introducing micro-frontends into their web platform."
  },

]