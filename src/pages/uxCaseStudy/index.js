import React from "react"
import {
  LinkButton,
  Header,
  HeroImage,
  FlexBox,
  ImageEnlarge,
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
              <LinkButton InnerLink active>
                Discovery
              </LinkButton>

              <LinkButton InnerLink>Define</LinkButton>

              <LinkButton InnerLink>Develop</LinkButton>

              <LinkButton InnerLink>Deliver</LinkButton>
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

        <Container>
          <Flex>
            <FlexBox width="flex-540">
              <Heading type="h2" inner colour="primary" italic>
                Identifying the Scope-
                <br /> Landscape Mapping
              </Heading>
              <BulletSection>
                What is this group of stakeholders currently thinking and doing?
              </BulletSection>
              <BulletSection>
                What do the stakeholders want to achieve?
              </BulletSection>
              <BulletSection>
                What might be their future behavior?
              </BulletSection>
              <BulletSection bold large>
                Assumptions
              </BulletSection>

              <ul>
                <li>
                  The current resources available for kids and parents focus on
                  responding after the fact, not prevention.
                </li>
                <li>
                  Parents are left to confront the issue on their own, often
                  relying solely on online research.
                </li>
                <li>
                  Due to the early exposure of digital devices, victims of
                  cyberbullying are becoming increasingly younger.
                </li>
                <li>
                  Despite occasional media coverage and government intervention
                  to raise awareness, society is not taking a proactive
                  approach.
                </li>
              </ul>
            </FlexBox>

            <FlexBox width="flex-540">
              <HighlightedQuotes>Stakeholders:</HighlightedQuotes>
              <img
                src={require("../../static/images/herrd/IMG_stakeholder.svg")}
                alt="stakeholder"
                width="200px"
                className="svgWidth "
              />
              <BulletSection className="inline-flex">
                Students
                <br />
                Parents
                <br />
                Caregivers
              </BulletSection>
              <BulletSection bold large>
                Goal
              </BulletSection>
              <BulletSection>
                Victims affected by bullying to feel empowered in tackling
                bullying from the key features of the app.
              </BulletSection>
              <BulletSection bold large>
                Hypothesis
              </BulletSection>
              <BulletSection>
                I believe bullying victims internalize their suffering because
                they think no one cares, and they feel alone and defenseless
                against their bully. I will know I am right when I see a
                significant number of downloads plus if the Ontario School Board
                will recommend this app download to all parents and school
                counselors. These will be the indications that users are finding
                help with the app.
              </BulletSection>
            </FlexBox>
          </Flex>
        </Container>

        <Container>
          <Flex>
            <FlexBox width="flex-540">
              <Heading type="h2" inner colour="primary" italic>
                Secondary Research:
                <br /> Competitive Analysis
              </Heading>
              <BulletSection>
                I looked at the government and competitor apps' current
                offerings.
              </BulletSection>
              <Heading type="h3" inner colour="dark">
                High-level Findings
              </Heading>
              <BulletSection>
                By comparing their features, I have found that:
              </BulletSection>

              <ol>
                <li>There is currently no app designed for Canadians.</li>
                <li>
                  The main functions of these apps are on reporting bullying
                  incidents and not on prevention and education.
                </li>
                <li>
                  The provincial resources' lack of interaction fails to make
                  the user feel a sense of accomplishment when tackling the
                  issue only makes them feel overwhelmed.
                </li>
              </ol>
            </FlexBox>
            <FlexBox width="flex-540">
              <HighlightedQuotes>The Pros & Cons</HighlightedQuotes>
              <BaseLink InnerLink>
                Click here for a detailed version of the Competitive Analysis
              </BaseLink>
              <ImageEnlarge
                src={require("../../static/images/herrd/IMG_ProCon.png")}
                alt="Competitive Analysis"
              />
            </FlexBox>
          </Flex>
        </Container>

        <Container>
          <Flex>
            <FlexBox width="flex-540">
              <Heading type="h2" inner colour="primary" italic>
                Primary Research: <br />
                Investigation interviews
              </Heading>
              <BulletSection>
                To collect qualitative and quantitative data. I will focus on
                learning what the user does, thinks, needs, and wants.
              </BulletSection>
              <Heading type="h3" inner colour="dark">
                Interviewee Criteria:
              </Heading>
              <BulletSection>Parents with in-school children</BulletSection>
            </FlexBox>
            <FlexBox width="flex-540">
              <Heading type="h3" inner colour="dark">
                Objectives:
              </Heading>
              <BulletSection>
                By asking these open-ended questions and observing their body
                languages and responses, I want to uncovered three things:
              </BulletSection>
              <ol>
                <li>
                  1. I want to know if bullying is a concern amongst their
                  household.
                </li>
                <li>
                  The parents’ current knowledge on bullying and their
                  definitions.
                </li>
                <li>
                  The likelihood of their children become a bullying victim.
                </li>
              </ol>
            </FlexBox>
          </Flex>
        </Container>

        <Container>
          <Flex>
            <FlexBox width="flex=540">
              <ImageEnlarge
                src={require("../../static/images/herrd/IMG_quote_1.jpg")}
                alt="Quote 1"
              />
              <img
                src={require("../../static/images/herrd/IMG_interview_legend.png")}
                alt="color"
                style={{ marginTop: "50px", width: "85%" }}
              />
            </FlexBox>
            <FlexBox width="flex=540">
              <ImageEnlarge
                src={require("../../static/images/herrd/IMG_quote_2.jpg")}
                alt="Quote 2"
              />
              <BulletSection italic className="mt-7">
                I planned on conducting user testing on the same group of
                participants. Assigning a color to each participant made
                locating a specific comment easier when I am doing a comparison
                between rounds of testings.
              </BulletSection>
            </FlexBox>
          </Flex>
        </Container>

        <Container>
          <Flex>
            <FlexBox width="flex-540">
              <Heading type="h3" inner colour="dark">
                Key Research Insights
              </Heading>
              <BulletSection>
                From my secondary research, I discovered 50% of the parents are
                beginning to normalize the problem due to the lack of knowledge
                in bullying classification. They begin to accept the inevitable
                likelihood of it happening to their children. This reality is
                very concerning.
              </BulletSection>
              <BulletSection>
                Based on these insights, I synthesized them into themes:
              </BulletSection>
            </FlexBox>

            <FlexBox width="flex-540">
              <Heading type="h3" inner colour="dark">
                Themes
              </Heading>
              <BulletSection>
                <b>Bullying Classification</b>-Parents have an ambiguous
                definition of what classify as bullying.
              </BulletSection>
              <BulletSection>
                <b>Guidance and Support</b>-Parents are overwhelmed by resources
                found through different channels and the lack of guided support.
              </BulletSection>
              <BulletSection>
                <b>Likelihood of Bullying</b>-Parents think bullying is common
                and will likely happen to their child at one point.
              </BulletSection>
              <Heading type="h2" inner italic colour="primary">
                Up Next...
              </Heading>
              <BulletSection>
                In the Define stage, I will further synthesis the data collected
                from my researches and insights, while leveraging the methods
                and artifacts I have used to identify the Pain Points,
                Motivations, and Behaviors of my users.
              </BulletSection>
            </FlexBox>
          </Flex>
        </Container>

        <Container>
          <Flex className="wrap">
            <FlexBox width="flex-900" className="tex-center">
              <hr />
              <LinkButton InnerLink>Discovery</LinkButton>

              <LinkButton InnerLink active>
                Define
              </LinkButton>

              <LinkButton InnerLink>Develop</LinkButton>

              <LinkButton InnerLink>Deliver</LinkButton>
            </FlexBox>
          </Flex>
        </Container>
      </Section>
    </Layout>
  )
}
export default CaseStudies
