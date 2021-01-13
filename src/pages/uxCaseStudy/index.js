import React from "react"
import {
  LinkButton,
  Header,
  HeroImage,
  FlexBox,
} from "../../Components/molecules"
import {
  BaseLink,
  Heading,
  HighlightedQuotes,
  BulletSection,
  Quote,
  Section,
  Flex,
} from "../../Components/atoms"
import { Layout } from "../../Components/organisms"
import { Container, Row, Col } from "react-bootstrap"
import "./index.scss"

const CaseStudies = () => {
  return (
    <Layout pagename="Home - Michelle Profile" className="overflowHidden">
      <Section background="White" inner heroSection>
        <Header />
        <img
          src={require("../../static/images/herrd/IMG_Hero_image.jpg")}
          alt="Hero Image"
          className="HeroImage"
        />
      </Section>
      <Section background="White" inner>
        <Container>
          <Flex>
            <FlexBox width="flex-300">
              <Heading type="h1" inner colour="spaceship">
                Herrd
              </Heading>
              <BulletSection bold inline>
                Time:
              </BulletSection>
              <BulletSection inline>10 weeks (Spring of 2020)</BulletSection>
              <br />
              <BulletSection bold inline>
                Role:
              </BulletSection>
              <BulletSection inline>Product Designer</BulletSection>
              <br />
              <BulletSection bold inline>
                Platform:
              </BulletSection>
              <BulletSection inline>iOS</BulletSection>
              <br />
              <BulletSection bold inline>
                Deliverables:
              </BulletSection>
              <BulletSection inline>
                Human interface guidelines app design prototype, responsive
                marketing site, and adaptative iPad UI
              </BulletSection>
              <br />
              <BulletSection bold inline>
                Type:
              </BulletSection>
              <BulletSection inline>Academic</BulletSection>
            </FlexBox>
            <FlexBox width="flex-800">
              <Heading type="h2" inner colour="primary" italic>
                Introduction
              </Heading>
              <BulletSection>
                One evening last year, as I watched the evening news, I watched
                in disbelief at a report of a 14 yr-old boy stabbed and killed
                by his bully. To make the matter more disheartening, his mom had
                witnessed it as it happens. I turned to my husband, sitting next
                to me at the time, and asked, “Can you imagine yourself going
                through that?” This sentiment has stuck with me since. Being a
                mom and a minority living in Canada, I am increasingly concerned
                about the issue of bullying. As a society, we can do more.
              </BulletSection>
              <BulletSection>
                Join me in my journey of building Herrd, an app that advocates
                anti-bullying for parents through education and peer support.
              </BulletSection>
              <Heading type="h2" inner colour="primary">
                The Constraints
              </Heading>
              <BulletSection bold inline>
                Technical:
              </BulletSection>
              <BulletSection inline>
                I am responsible for the entirety of the project, so the outcome
                depends heavily on my understanding of the Design Thinking
                Principles and UX common practices.
              </BulletSection>
              <br />
              <BulletSection bold inline>
                Socio-cultural:
              </BulletSection>
              <BulletSection inline>
                Society doesn’t see bullying as a pressing issue.
              </BulletSection>
            </FlexBox>
          </Flex>
        </Container>

        <Container>
          <Flex className="wrap">
            <FlexBox width="flex-900" className="tex-center">
              <hr />
              <LinkButton InnerLink>Discovery</LinkButton>

              <LinkButton InnerLink>Discovery</LinkButton>

              <LinkButton InnerLink>Discovery</LinkButton>

              <LinkButton InnerLink>Discovery</LinkButton>
            </FlexBox>
          </Flex>
        </Container>

        <Container>
          <Flex>
            <FlexBox width="flex-540">
              <Heading type="h1" inner colour="spaceship">
                1. DISCOVERY
              </Heading>
              <Heading type="h2" inner italic colour="primary">
                Problem Space
              </Heading>
              <Heading type="h3" inner colour="dark">
                The issue of bullying is very much prevailing in our society,
                and it is causing physical and mental harm.
              </Heading>
            </FlexBox>
            <FlexBox width="flex-270">
              <img
                src={require("../../static/images/herrd/IMG_47percent.svg")}
                alt="47%"
                width="200px"
                className="svgWidth"
              />
              <HighlightedQuotes>
                of Canadians found their children is a victim of bullying
              </HighlightedQuotes>
              <BulletSection italic>Source: CBC news</BulletSection>
            </FlexBox>
            <FlexBox width="flex-270">
              <img
                src={require("../../static/images/herrd/IMG_9th.svg")}
                alt="9th"
                width="200px"
                className="svgWidth"
              />
              <HighlightedQuotes>
                rated ninth of bullying in the 13-yr-olds category out of 35
                countries
              </HighlightedQuotes>
              <BulletSection italic>
                Source: Canadian Council on Learning — Bullying in Canada: How
                intimidation affects learning
              </BulletSection>
            </FlexBox>
          </Flex>
        </Container>
      </Section>
    </Layout>
  )
}

export default CaseStudies
