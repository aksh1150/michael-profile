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
    <Layout
      pagename="Home - Michelle Profile"
      className="overflowHidden uxDesign"
    >
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
          <Row>
            <Col sm={3}>
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
            </Col>
            <Col sm={9} className="pl-6">
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
            </Col>
          </Row>
        </Container>

        <Container>
          <Row className="wrap">
            <Col xs={12} className="tex-center">
              <hr />
              <Row>
                <Col sm={3} xs={12}>
                  <LinkButton InnerLink active>
                    Discovery
                  </LinkButton>
                </Col>
                <Col sm={3} xs={12}>
                  <LinkButton InnerLink>Define</LinkButton>
                </Col>
                <Col sm={3} xs={12}>
                  <LinkButton InnerLink>Develop</LinkButton>
                </Col>
                <Col sm={3} xs={12}>
                  <LinkButton InnerLink>Deliver</LinkButton>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col sm={6} className="pr-5">
              <Heading type="h1" inner colour="spaceship">
                1.
                <br /> DISCOVERY
              </Heading>
              <Heading type="h2" inner italic colour="primary">
                Problem Space
              </Heading>
              <Heading type="h3" inner colour="dark">
                The issue of bullying is very much prevailing in our society,
                and it is causing physical and mental harm.
              </Heading>
            </Col>
            <Col sm={3}>
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
            </Col>
            <Col sm={3} style={{ paddingLeft: "5px", paddingRight: "5px" }}>
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
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col sm={6} className="pr-5">
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
            </Col>

            <Col sm={6}>
              <HighlightedQuotes>Stakeholders:</HighlightedQuotes>
              <img
                src={require("../../static/images/herrd/IMG_stakeholder.svg")}
                alt="stakeholder"
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
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col sm={6} className="pr-5">
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
            </Col>
            <Col sm={6}>
              <HighlightedQuotes>The Pros & Cons</HighlightedQuotes>
              <BaseLink InnerLink>
                Click here for a detailed version of the Competitive Analysis
              </BaseLink>
              <ImageEnlarge
                src={require("../../static/images/herrd/IMG_ProCon.png")}
                alt="Competitive Analysis"
              />
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col sm={6} className="pr-5">
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
            </Col>
            <Col sm={6}>
              <Heading type="h3" inner colour="dark">
                Objectives:
              </Heading>
              <BulletSection>
                By asking these open-ended questions and observing their body
                languages and responses, I want to uncovered three things:
              </BulletSection>
              <ol>
                <li>
                  I want to know if bullying is a concern amongst their
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
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col sm={6}>
              <ImageEnlarge
                src={require("../../static/images/herrd/IMG_quote_1.jpg")}
                alt="Quote 1"
              />
              <img
                src={require("../../static/images/herrd/IMG_interview_legend.png")}
                alt="color"
                style={{ marginTop: "50px", width: "85%" }}
              />
            </Col>
            <Col sm={6}>
              <ImageEnlarge
                src={require("../../static/images/herrd/IMG_quote_2.jpg")}
                alt="Quote 2"
              />
              <BulletSection italic className="mt-5">
                I planned on conducting user testing on the same group of
                participants. Assigning a color to each participant made
                locating a specific comment easier when I am doing a comparison
                between rounds of testings.
              </BulletSection>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col sm={6} className="pr-5">
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
            </Col>

            <Col sm={6}>
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
            </Col>
          </Row>
        </Container>

        <Container>
          <Row className="wrap">
            <Col xs={12} className="tex-center">
              <hr />
              <Row>
                <Col sm={3} xs={12}>
                  <LinkButton InnerLink>Discovery</LinkButton>
                </Col>
                <Col sm={3} xs={12}>
                  <LinkButton InnerLink active>
                    Define
                  </LinkButton>
                </Col>
                <Col sm={3} xs={12}>
                  <LinkButton InnerLink>Develop</LinkButton>
                </Col>
                <Col sm={3} xs={12}>
                  <LinkButton InnerLink>Deliver</LinkButton>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col sm={3}>
              <Heading type="h1" inner colour="spaceship">
                2.
                <br /> DEFINE
              </Heading>
              <Heading type="h3" inner colour="dark">
                The themes that I have uncovered translates into the How Might
                We Statement that will guide me to stay focus on the problem
                space.
              </Heading>
            </Col>
            <Col sm={1} className="mt-5">
              <Quote />
            </Col>
            <Col sm={7}>
              <HighlightedQuotes className="mt-10">
                How might we educate parents on how to identify the signs of
                bullying, so they have the confidence to tackle bullying, with
                the support of a counselor in a safe space?
              </HighlightedQuotes>
            </Col>
            <Col sm={1} className="mt-200">
              <Quote />
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col sm={12}>
              <Heading type="h2" inner italic colour="primary">
                Empathy Map
              </Heading>
              <BulletSection>
                I categorized the notes into 4 quadrants: says, thinks, feels,
                and does.
              </BulletSection>
              <ImageEnlarge
                src={require("../../static/images/herrd/IMG_Empathy_Map.jpg")}
                alt="Empathy map"
                className="mx-auto d-block"
              />
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col sm={4}>
              <Heading type="h3" inner colour="dark">
                Pain Points
              </Heading>
              <ul>
                <li>Unsure how to differentiate from child play to bullying</li>
                <li>
                  Overwhelmed by online resources, in need of a single
                  descriptive guided approach
                </li>
                <li>Bullying is inevitable</li>
              </ul>
            </Col>
            <Col sm={4}>
              <Heading type="h3" inner colour="dark">
                Motivations
              </Heading>
              <ul>
                <li>
                  Getting support from other parents who have gone through this
                  before
                </li>
                <li>Finding all extra resources in one consolidated space</li>
                <li>
                  Additional resources on the importance of early-on education
                  and preventions
                </li>
              </ul>
            </Col>
            <Col sm={4}>
              <Heading type="h3" inner colour="dark">
                Behaviors
              </Heading>
              <ul>
                <li>
                  Sometimes parents worried they are overreacting and wondered
                  if they should report to the school Question the child’s
                  credibility
                </li>
                <li>
                  Try to undermine the incident due to the stigma of being a
                  “snitch” and the integrity of the claim
                </li>
              </ul>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col sm={3}>
              <Heading type="h2" inner italic colour="primary">
                Personas
              </Heading>
              <Heading type="h3" inner colour="dark">
                What better ways to conceptualize my user’s pain than through
                the use of Personas?
              </Heading>
              <BulletSection>
                Primary Persona, Don, is a stay-at-home mom who suspects her son
                might be getting bullied in school, but she is not sure. She is
                feeling very anxious because her son doesn’t want to talk about
                it.
              </BulletSection>
            </Col>
            <Col sm={9} className="pl-5">
              <ImageEnlarge
                src={require("../../static/images/herrd/Persona_1.jpg")}
                alt="Persona 1"
              />
            </Col>
            <Col sm={3}>
              <BulletSection>
                Secondary Persona, Lulu, is a mom, that has gone through the
                agony of her son as a victim of bullying. She advocates the
                importance of prevention and wants to share her past experience.
              </BulletSection>
            </Col>
            <Col sm={9} className="pl-5">
              <ImageEnlarge
                src={require("../../static/images/herrd/Persona_2.jpg")}
                alt="Persona 2"
              />
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col sm={6} className="pr-5">
              <Heading type="h2" inner colour="primary">
                Opportunity Selection:
                <br /> Experience Map
              </Heading>
              <BulletSection>
                I need to visualise the channels and touchpoints Don might go
                through in the attempt to get help on bullying. The area of
                opportunity will be uncovered by pinpointing at which channel
                and touchpoint Don is experiencing most frustration.
              </BulletSection>
            </Col>
            <Col sm={1}></Col>
            <Col sm={2} className="text-center">
              <img
                src={require("../../static/images/herrd/Pain_Reliever.svg")}
                alt="Pain Reliever"
                className="mx-auto d-block"
              />
              <HighlightedQuotes>Pain</HighlightedQuotes>
            </Col>
            <Col sm={2} className="text-center">
              <img
                src={require("../../static/images/herrd/Pain.svg")}
                alt="Pain Reliever"
                className="mx-auto d-block"
              />
              <HighlightedQuotes>Goal</HighlightedQuotes>
            </Col>
            <Col sm={1}></Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col sm={12}>
              <ImageEnlarge
                src={require("../../static/images/herrd/IMG_ExperienceMap.jpg")}
                alt="Don William"
              />
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col sm={4} className="pr-5">
              <Heading type="h2" italic inner colour="primary">
                Opportunity Selection:
                <br /> Value Proposition Canvas
              </Heading>
              <BulletSection>
                I use the
                <BaseLink InnerLink> Value Proposition Canvas</BaseLink> to
                explore ways to alleviate my persona’s pains while ideatating on
                app features.
              </BulletSection>
              <BulletSection>
                I believe these features here, address to my stakeholder’s
                needs. They seemed to also to do the job in answering the
                <BaseLink InnerLink> How Might We Statement</BaseLink> I
                defined.
              </BulletSection>
            </Col>
            <Col sm={8} className="pl-5">
              <Heading type="h3" inner colour="dark">
                Chosen Key Features
              </Heading>
              <Row>
                <Col sm={4}>
                  <img
                    src={require("../../static/images/herrd/Product_Services.svg")}
                    alt="Product Services"
                  />
                  <HighlightedQuotes>Product & Services</HighlightedQuotes>
                  <BulletSection>
                    Step-by-step bullying sign identification guide
                  </BulletSection>
                </Col>

                <Col sm={4}>
                  <img
                    src={require("../../static/images/herrd/Pain_Reliever.svg")}
                    alt="Pain Reliever"
                  />
                  <HighlightedQuotes>
                    Pain
                    <br /> Reliever
                  </HighlightedQuotes>
                  <BulletSection>
                    Chat and connect with other parents
                  </BulletSection>
                </Col>

                <Col sm={4}>
                  <img
                    src={require("../../static/images/herrd/Gain_Creator.svg")}
                    alt="Gain Creator"
                  />
                  <HighlightedQuotes>
                    Gain <br />
                    Creator
                  </HighlightedQuotes>
                  <BulletSection>Live counselor support</BulletSection>
                </Col>

                <Col sm={12} className="pl-9">
                  <Heading type="h2" italic inner colour="primary">
                    Up Next...
                  </Heading>
                  <BulletSection>
                    The Develop stage is where I will begin to ideate the
                    features and how I can relieve the pains and the task to be
                    done by the user.
                  </BulletSection>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row className="wrap">
            <Col xs={12} className="tex-center">
              <hr />
              <Row>
                <Col sm={3} xs={12}>
                  <LinkButton InnerLink>Discovery</LinkButton>
                </Col>
                <Col sm={3} xs={12}>
                  <LinkButton InnerLink>Define</LinkButton>
                </Col>
                <Col sm={3} xs={12}>
                  <LinkButton InnerLink active>
                    Develop
                  </LinkButton>
                </Col>
                <Col sm={3} xs={12}>
                  <LinkButton InnerLink>Deliver</LinkButton>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col sm={6} className="pr-5">
              <Heading type="h1" inner colour="spaceship">
                3.
                <br /> DEVELOP
              </Heading>
              <Heading type="h2" inner italic colour="primary">
                Epic & User Stories Selection
              </Heading>
              <Heading type="h3" inner colour="dark">
                Epic
              </Heading>
              <BulletSection>
                Generating an action plan to get guided help in tackling
                bullying.
              </BulletSection>

              <Heading type="h3" inner colour="dark">
                Main Task Flow
              </Heading>
              <BulletSection>
                Upon completing the main task flow, Don could determine her
                son’s current condition, while generating a tailored action plan
                to guide her in tackling bullying.
              </BulletSection>

              <Heading type="h3" inner colour="dark">
                Supplementary Task Flow
              </Heading>
              <BulletSection>
                Supplementary task flow will enhance the user experience of a
                busy mom who is always multi-tasking.
              </BulletSection>
            </Col>
            <Col sm={6} className="pl-6 mt-10 ">
              <div className="shadowBox">
                <BulletSection>
                  As a Parents, I want to generate an action plan, so that I can
                  walk away knowing what to do.
                </BulletSection>
              </div>
              <div className="shadowBox">
                <BulletSection>
                  As a Parents, I want to keep my viewing history, so that I can
                  track my progress from the step-by-step guide.
                </BulletSection>
              </div>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col sm={12}>
              <ImageEnlarge
                src={require("../../static/images/herrd/IMG_task_flow_diagram.jpg")}
                alt="Don William"
              />
            </Col>
            <Col sm={12}>
              <Row>
                <Col sm={8}>
                  <Heading type="h3" inner colour="dark">
                    Task Flow Diagram
                  </Heading>
                  <BulletSection>
                    My prototype was built from the elelements I have mapped out
                    here. It provided a clear visualization of the user and the
                    system interaction within the chosen User Stories.
                  </BulletSection>
                </Col>
                <Col sm={6}></Col>
                <Col sm={6}>
                  <Heading type="h2" inner italic colour="primary">
                    Up Next...
                  </Heading>
                  <BulletSection>
                    In the Deliver stage, I will built, test, and iterate
                    rapidly to ensure the UI and UX will serve to address my
                    user’s needs. As well as other go-to-market components
                    needed leading up to the launch.
                  </BulletSection>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row className="wrap">
            <Col xs={12} className="tex-center">
              <hr />
              <Row>
                <Col sm={3} xs={12}>
                  <LinkButton InnerLink>Discovery</LinkButton>
                </Col>
                <Col sm={3} xs={12}>
                  <LinkButton InnerLink>Define</LinkButton>
                </Col>
                <Col sm={3} xs={12}>
                  <LinkButton InnerLink>Develop</LinkButton>
                </Col>
                <Col sm={3} xs={12}>
                  <LinkButton InnerLink active>
                    Deliver
                  </LinkButton>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col sm={3} className="pr-0">
              <Heading type="h1" inner colour="spaceship">
                4.
                <br /> DELIVER
              </Heading>
              <Heading type="h2" inner italic colour="primary">
                The Core Features
              </Heading>
              <BulletSection>
                The hurdles that Don goes through in her search for help
                comprises of 4 main psychological states that I translated into
                the 4 core features:
              </BulletSection>
              <BulletSection>
                With these features conceptualized, I began ideation by rapid
                sketching.
              </BulletSection>
            </Col>
            <Col sm={9}>
              <Row>
                <Col sm={6}>
                  <ImageEnlarge
                    src={require("../../static/images/herrd/Core1_2.svg")}
                    alt="Core 1 2"
                  />
                </Col>
                <Col sm={6}>
                  <ImageEnlarge
                    src={require("../../static/images/herrd/Core3_4.svg")}
                    alt="Core 3 4"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col sm={3} className="pr-0">
              <Heading type="h2" inner italic colour="primary">
                Ideation
              </Heading>
              <Heading type="h3" inner>
                Concept Sketches
              </Heading>
              <BulletSection>
                The purpose of these sketches is to explore ways of how a user
                will start on the 10 Signs of Bullying Guide. I ideated how
                imageries interact with navigational elements.
              </BulletSection>
              <BulletSection>
                From these sketches, and based on the dot voting result, I
                decided to let user explore the guide with one sign at a time,
                this way the user will feel a sense of accomplishment as she
                answers each identification to advance to the next.
              </BulletSection>
            </Col>
            <Col sm={9}>
              <ImageEnlarge
                src={require("../../static/images/herrd/Concept_sketch.jpg")}
                alt="Concept Sketch"
              />
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col sm={6}>
              <Heading type="h2" inner italic colour="primary">
                Usability Testing
              </Heading>
              <Heading type="h3" inner colour="dark">
                Mid-fi Prototype
              </Heading>
              <BulletSection>
                <b>Objective:</b> Testing overall usability of a returned user
                going through the task of identifying the signs of bullying and
                to generate an action plan at the end.
              </BulletSection>
            </Col>
            <Col sm={6}>
              <BulletSection className="mt-8">
                The mid-fi prototype went through 3 versions with two rounds of
                usability testing by 5 participants. Detailed session one
                testing result overview can be found{" "}
                <BaseLink InnerLink>here.</BaseLink>
              </BulletSection>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col sm={6}>
              <ImageEnlarge
                src={require("../../static/images/herrd/Mid-fi_1.jpg")}
                alt="Mid fi"
              />
            </Col>
            <Col sm={6}>
              <HighlightedQuotes>
                Step-by-Step Guide(Sign no.7)
              </HighlightedQuotes>
              <Heading type="h3" inner colour="dark">
                Navaigating the 10 Signs
              </Heading>
              <BulletSection className="mt-4">
                <b>Navigational Issue:</b>
                <br />
                80% of tester failed to notice the Yes/Skip/No buttons and try
                to advanced by clicking the side arrows and pagination dots.
              </BulletSection>
              <BulletSection>
                <b>Revisions:</b>
                <br />
                By understanding cognitively users digest information from top
                to bottom, on V3 I led the user to first read the sign
                description, and I removed the side arrows, which made them
                engage only with the 3 options on the bottom to advance.
              </BulletSection>
            </Col>

            <Col sm={6}>
              <ImageEnlarge
                src={require("../../static/images/herrd/Mid-fi_2.jpg")}
                alt="Mid fi 2"
              />
            </Col>
            <Col sm={6}>
              <HighlightedQuotes className="mt-5">
                Bullying Sign Identified Result
              </HighlightedQuotes>
              <Heading type="h3" inner colour="dark">
                Using the Action Plan
              </Heading>
              <BulletSection className="mt-4">
                <b>Information Architecture Issue:</b>
                <br /> All testers expressed the content on V2 is very hard to
                read.
              </BulletSection>
              <BulletSection>
                <b>Revisions:</b>
                <br /> By adding information hiearchy tester now can easily
                digest the content, furthermore, I planned on incorporating a
                checklist style interface to enhance user interaction and add a
                sense of accomplishment in the hi-fi prototype.
              </BulletSection>
            </Col>

            <Col sm={6}>
              <ImageEnlarge
                src={require("../../static/images/herrd/Mid-fi_3.jpg")}
                alt="Mid fi 3"
              />
            </Col>
            <Col sm={6}>
              <HighlightedQuotes>Main Menu</HighlightedQuotes>
              <Heading type="h3" inner colour="dark">
                Interacting the App’s Core Features
              </Heading>
              <BulletSection bold className="mt-4">
                Failure to meet user’s need, two issues were identified:
              </BulletSection>
              <ol>
                <li>
                  Some testers are confused about the profile picture and what
                  this section is for by the terminology used. Once explained
                  that it correlates with the chat feature, they showed concern
                  about the privacy issue.
                </li>
                <li>
                  Skepticism is expressed on the Find a Counselor function.
                  Testers are concern about delays in getting help when
                  counseling service is only available by schedule and its
                  effectiveness in a virtual setting.
                </li>
              </ol>
              <BulletSection bold className="mt-4">
                Revisions:
              </BulletSection>
              <ol>
                <li>
                  Improved terminology used to make it more intuitive, option to
                  hide profile in chat function added in hi-fi prototype.
                </li>
                <li>
                  Replacing Find a Counselor section with More Resource section
                  in hi-fi prototype to offer a more immediate help 24/7.
                  Content for the function will be generated and shared by other
                  parents.
                </li>
              </ol>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col sm={12}>
              <Heading type="h2" inner colour="primary">
                Customer-Need Pivot
              </Heading>
            </Col>
            <Col sm={6} className="pr-5">
              <label className="circle">
                <HighlightedQuotes>1</HighlightedQuotes>
              </label>
              <Heading type="h3" colour="dark">
                Removal of Virtual Counseling
              </Heading>
              <BulletSection>
                Counseling is inherently more effective in person, as testers
                point out for two reasons: kids are reluctant to talk about
                their feeling, and parents would want to monitor the video call,
                which might lead to a prolonged wait to seek out help.
              </BulletSection>
            </Col>
            <Col sm={6}>
              <label className="circle">
                <HighlightedQuotes>2</HighlightedQuotes>
              </label>
              <Heading type="h3" colour="dark">
                Desire for support from other parents
              </Heading>
              <BulletSection>
                Instead of support from a counselor, testers express having a
                chat function with other parents will provide better support.
                Parents who have gone through the issue of bullying in the past,
                are interested in sharing their experience.
              </BulletSection>
            </Col>
            <Col sm={12}>
              <Row className="justify-content-md-center">
                <Col sm={1} className="mt-5">
                  <Quote />
                </Col>
                <Col sm={7}>
                  <HighlightedQuotes className="mt-10">
                    How might we educate parents on how to identify the signs of
                    bullying,{" "}
                    <span>
                      so they have the confidence to tackle bullying, with the
                      support of a counselor in a safe space?
                    </span>
                  </HighlightedQuotes>
                </Col>
                <Col sm={1} className="mt-200">
                  <Quote />
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col sm={1} className="mt-5">
                  <Quote />
                </Col>
                <Col sm={7}>
                  <HighlightedQuotes className="mt-10">
                    How might we educate parents on how to identify the signs of
                    bullying with a clear action plan, meanwhile, find support
                    from other parents and consolidate the resources in one
                    space.
                  </HighlightedQuotes>
                </Col>
                <Col sm={1} className="mt-200">
                  <Quote />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col sm={4} className="pr-6">
              <Heading type="h2" inner italic colour="primary">
                Inspiration Findings
              </Heading>
              <img
                src={require("../../static/images/herrd/herrd.png")}
                alt="Herrd"
                className="mt-7"
              />
              <BulletSection italic className="mt-9">
                Playing off on the similarity in sound. The concept of Herd = a
                group. Heard = being heard.
              </BulletSection>
            </Col>
            <Col sm={8}>
              <img
                src={require("../../static/images/herrd/BrandColor.jpg")}
                alt="Herrd"
                className="mt-7"
              />
              <BulletSection italic className="mt-4">
                Brand colors derived from images that convey my brand
                objectives.
                <br /> A link to the moodboard can be found{" "}
                <BaseLink InnerLink>here.</BaseLink>
              </BulletSection>
            </Col>
            <Col sm={8}>
              <img
                src={require("../../static/images/herrd/Logo_UI_Color.jpg")}
                alt="Herrd"
              />
            </Col>
            <Col sm={4} className="mt-7 pl-7">
              <Heading type="h3" inner colour="dark">
                Logomark
              </Heading>
              <BulletSection>
                I focused on expressing the emotional and physical connection
                between parents and their children for the development of
                Herrd’s visual identity. The final logomark is gender-neutral,
                with lighthearted typography.
              </BulletSection>
            </Col>
            <Col sm={4} className="pr-6 mt-4">
              <Heading type="h3" inner colour="dark">
                Key Graphic Elements
              </Heading>
              <BulletSection>
                I got my inspiration to use illustration as the key graphical
                component for the 10-Signs-of-Bullying screens. The use of
                illustrations will put less racial and age associations.
              </BulletSection>
            </Col>
            <Col sm={8} className="mt-4">
              <img
                src={require("../../static/images/herrd/illustrations.svg")}
                alt="illustrations"
              />
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col sm={4}>
              <iframe
                width="442"
                height="935"
                src="//invis.io/53XRYLBXWM8"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </Col>
          </Row>
        </Container>
      </Section>
    </Layout>
  )
}
export default CaseStudies
