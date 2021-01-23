import React, { useState } from "react"
import { LinkButton, Header, ImageEnlarge } from "../../Components/molecules"
import {
  BaseLink,
  Heading,
  HighlightedQuotes,
  BulletSection,
  Quote,
  Section,
} from "../../Components/atoms"
import { Layout } from "../../Components/organisms"
import { Container, Row, Col } from "react-bootstrap"
import "./index.scss"

const CaseStudies = () => {
  const [displayControls, setDisplayControls] = useState(false)
  const handleClick = () => {
    setDisplayControls(true)
  }
  return (
    <Layout
      pagename="Home - Michelle Profile"
      className="overflowHidden uxDesign globalStyle"
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
            <Col lg={3} md={10}>
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
            <Col lg={9} md={10} className="pl-6 mt-2">
              <Heading type="h2" inner colour="primary" italic>
                Introduction
              </Heading>
              <BulletSection className="mt-33">
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
              <Heading type="h2" inner italic colour="primary" className="mt-5">
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

        <Container id="discovery">
          <Row className="wrap">
            <Col xs={12} className="tex-center">
              <Row>
                <Col sm={3} xs={12}>
                  <LinkButton InnerLink active link="#discovery" internal>
                    Discovery
                  </LinkButton>
                </Col>
                <Col sm={3} xs={12}>
                  <LinkButton InnerLink link="#define" internal>
                    Define
                  </LinkButton>
                </Col>
                <Col sm={3} xs={12}>
                  <LinkButton InnerLink link="#develop" internal>
                    Develop
                  </LinkButton>
                </Col>
                <Col sm={3} xs={12}>
                  <LinkButton InnerLink link="#deliver">
                    Deliver
                  </LinkButton>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col lg={6} md={10} className="pr-5">
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
            <Col lg={3} md={6}>
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
            <Col
              lg={3}
              md={6}
              style={{ paddingLeft: "15px", paddingRight: "5px" }}
            >
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
            <Col lg={6} md={10} className="pr-5">
              <Heading type="h2" inner colour="primary" italic>
                Identifying the Scope-
                <br /> Landscape Mapping
              </Heading>
              <BulletSection>
                What is this group of stakeholders currently thinking and doing?
                <br />
                What do the stakeholders want to achieve?
                <br />
                What might be their future behavior?
              </BulletSection>
              <BulletSection bold large className="mt-5">
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

            <Col lg={6} md={10}>
              <Row>
                <Col lg={3} className="d-lg-block d-md-none d-none">
                  <img
                    src={require("../../static/images/herrd/IMG_stakeholder.svg")}
                    alt="stakeholder"
                    className="svgWidth "
                  />
                </Col>
                <Col sm={9} className="d-lg-block d-md-none d-none">
                  <HighlightedQuotes>Stakeholders:</HighlightedQuotes>

                  <BulletSection>
                    Students
                    <br />
                    Parents
                    <br />
                    Caregivers
                  </BulletSection>
                </Col>
              </Row>

              <BulletSection bold large>
                Goal
              </BulletSection>
              <BulletSection>
                Victims affected by bullying to feel empowered in tackling
                bullying from the key features of the app.
              </BulletSection>
              <BulletSection bold large className="mt-ipad">
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
            <Col lg={6} md={10} className="pr-5">
              <Heading type="h2" inner colour="primary" italic>
                Secondary Research:
                <br /> Competitive Analysis
              </Heading>
              <BulletSection>
                I looked at the government and competitor apps' current
                offerings.
              </BulletSection>
              <Heading type="h3" inner colour="dark" className="mt-ipad">
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
            <Col lg={6} md={10}>
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
            <Col lg={6} md={10} className="pr-5 mt-ipad">
              <Heading type="h2" inner colour="primary" italic>
                Primary Research: <br />
                Investigation interviews
              </Heading>
              <BulletSection>
                To collect qualitative and quantitative data. I will focus on
                learning what the user does, thinks, needs, and wants.
              </BulletSection>
              <Heading
                type="h3"
                inner
                colour="dark"
                className="d-lg-block d-md-none d-none"
              >
                Interviewee Criteria:
              </Heading>
              <BulletSection className="d-lg-block d-md-none d-none">
                Parents with in-school children
              </BulletSection>
            </Col>
            <Col lg={6} md={10}>
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
              <Heading
                type="h3"
                inner
                colour="dark"
                className="d-lg-none d-md-block mt-ipad"
              >
                Interviewee Criteria:
              </Heading>
              <BulletSection className="d-lg-none d-md-block">
                Parents with in-school children
              </BulletSection>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col lg={6} md={12}>
              <ImageEnlarge
                src={require("../../static/images/herrd/IMG_quote_1.jpg")}
                alt="Quote 1"
                className="mx-auto d-block"
              />
              <img
                src={require("../../static/images/herrd/IMG_interview_legend.png")}
                alt="color"
                style={{ marginTop: "50px", width: "85%" }}
                className="d-lg-block d-md-none d-none"
              />
            </Col>
            <Col lg={6} md={12}>
              <ImageEnlarge
                src={require("../../static/images/herrd/IMG_quote_2.jpg")}
                alt="Quote 2"
                className="mx-auto d-block"
              />
              <img
                src={require("../../static/images/herrd/IMG_interview_legend.png")}
                alt="color"
                style={{ marginTop: "50px", width: "85%" }}
                className="d-lg-none d-md-block"
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
            <Col lg={6} md={10} className="pr-5">
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

            <Col lg={6} md={10}>
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
            </Col>
            <Col lg={6} md={10}>
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

        <Container id="define">
          <Row className="wrap">
            <Col xs={12} className="tex-center">
              <Row>
                <Col sm={3} xs={12}>
                  <LinkButton InnerLink link="#discovery" internal>
                    Discovery
                  </LinkButton>
                </Col>
                <Col sm={3} xs={12}>
                  <LinkButton InnerLink active link="#define" internal>
                    Define
                  </LinkButton>
                </Col>
                <Col sm={3} xs={12}>
                  <LinkButton InnerLink link="#develop" internal>
                    Develop
                  </LinkButton>
                </Col>
                <Col sm={3} xs={12}>
                  <LinkButton InnerLink link="#deliver">
                    Deliver
                  </LinkButton>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col lg={3} md={10}>
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
            <Col lg={9} md={10}>
              <Row>
                <Col lg={2} md={1} className="mt-5 noMargin">
                  <Quote />
                </Col>
                <Col lg={8} md={8}>
                  <HighlightedQuotes className="mt-10">
                    How might we educate parents on how to identify the signs of
                    bullying, so they have the confidence to tackle bullying,
                    with the support of a counselor in a safe space?
                  </HighlightedQuotes>
                </Col>
                <Col lg={2} md={1} className="mt-200">
                  <Quote />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col lg={12} md={12}>
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
            <Col lg={4} md={10}>
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
            <Col lg={4} md={10}>
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
            <Col lg={4} md={10}>
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
            <Col lg={3} md={10}>
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
            <Col lg={9} md={12} className="pl-5">
              <ImageEnlarge
                src={require("../../static/images/herrd/Persona_1.jpg")}
                alt="Persona 1"
              />
            </Col>
            <Col lg={3} md={10}>
              <BulletSection>
                Secondary Persona, Lulu, is a mom, that has gone through the
                agony of her son as a victim of bullying. She advocates the
                importance of prevention and wants to share her past experience.
              </BulletSection>
            </Col>
            <Col lg={9} md={12} className="pl-5">
              <ImageEnlarge
                src={require("../../static/images/herrd/Persona_2.jpg")}
                alt="Persona 2"
              />
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col lg={6} md={10} className="pr-5">
              <Heading type="h2" inner colour="primary" italic>
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
            <Col lg={1} className="d-lg-block d-md-none d-none"></Col>
            <Col sm={2} className="text-center d-lg-block d-md-none d-none">
              <img
                src={require("../../static/images/herrd/Pain_Reliever.svg")}
                alt="Pain Reliever"
                className="mx-auto d-block"
              />
              <HighlightedQuotes>Pain</HighlightedQuotes>
            </Col>
            <Col sm={2} className="text-center d-lg-block d-md-none d-none">
              <img
                src={require("../../static/images/herrd/goal.png")}
                alt="Pain Reliever"
                className="mx-auto d-block goal"
              />
              <HighlightedQuotes>Goal</HighlightedQuotes>
            </Col>
            <Col lg={1} className="d-lg-block d-md-none d-none"></Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col sm={12}>
              <ImageEnlarge
                src={require("../../static/images/herrd/IMG_ExperienceMap.jpg")}
                alt="Don William"
                className="d-lg-block d-md-none d-none"
              />
              <ImageEnlarge
                src={require("../../static/images/herrd/Experience_Map_tablet.jpg")}
                alt="Don William"
                className="d-lg-none d-md-block"
              />
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col lg={4} md={10} className="pr-5">
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
            <Col lg={8} md={12} className="pl-5">
              <Heading type="h3" inner colour="dark">
                Chosen Key Features
              </Heading>
              <Row>
                <Col lg={4} md={6}>
                  <img
                    src={require("../../static/images/herrd/Product_Services.svg")}
                    alt="Product Services"
                  />
                  <HighlightedQuotes>
                    Product & <br />
                    Services
                  </HighlightedQuotes>
                  <BulletSection>
                    Step-by-step bullying sign identification guide
                  </BulletSection>
                </Col>

                <Col lg={4} md={6}>
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

                <Col lg={4} md={6}>
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
              </Row>
            </Col>
            <Col lg={6} md={10}>
              <Heading type="h2" italic inner colour="primary">
                Up Next...
              </Heading>
              <BulletSection>
                The Develop stage is where I will begin to ideate the features
                and how I can relieve the pains and the task to be done by the
                user.
              </BulletSection>
            </Col>
          </Row>
        </Container>

        <Container id="develop">
          <Row className="wrap">
            <Col xs={12} className="tex-center">
              <Row>
                <Col sm={3} xs={12}>
                  <LinkButton InnerLink link="#discovery" internal>
                    Discovery
                  </LinkButton>
                </Col>
                <Col sm={3} xs={12}>
                  <LinkButton InnerLink link="#define" internal>
                    Define
                  </LinkButton>
                </Col>
                <Col sm={3} xs={12}>
                  <LinkButton InnerLink active link="#develop" internal>
                    Develop
                  </LinkButton>
                </Col>
                <Col sm={3} xs={12}>
                  <LinkButton InnerLink link="#deliver">
                    Deliver
                  </LinkButton>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col lg={6} md={10} className="pr-5">
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
            <Col lg={6} className="pl-6 mt-10 d-lg-block d-md-none d-none">
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
            <Col lg={12}>
              <ImageEnlarge
                src={require("../../static/images/herrd/IMG_task_flow_diagram.jpg")}
                alt="Don William"
              />
            </Col>
            <Col sm={12}>
              <Row>
                <Col lg={8} md={10}>
                  <Heading type="h3" inner colour="dark">
                    Task Flow Diagram
                  </Heading>
                  <BulletSection>
                    My prototype was built from the elelements I have mapped out
                    here. It provided a clear visualization of the user and the
                    system interaction within the chosen User Stories.
                  </BulletSection>
                </Col>
                <Col lg={6} md={10}>
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

        <Container id="deliver">
          <Row className="wrap">
            <Col xs={12} className="tex-center">
              <Row>
                <Col sm={3} xs={12}>
                  <LinkButton InnerLink link="#discovery" internal>
                    Discovery
                  </LinkButton>
                </Col>
                <Col sm={3} xs={12}>
                  <LinkButton InnerLink link="#define" internal>
                    Define
                  </LinkButton>
                </Col>
                <Col sm={3} xs={12}>
                  <LinkButton InnerLink link="#develop" internal>
                    Develop
                  </LinkButton>
                </Col>
                <Col sm={3} xs={12}>
                  <LinkButton InnerLink active link="#deliver">
                    Deliver
                  </LinkButton>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col lg={3} md={10} className="pr-0">
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
            <Col lg={9} md={10}>
              <Row>
                <Col lg={6} md={12}>
                  <ImageEnlarge
                    src={require("../../static/images/herrd/Core1&2.png")}
                    alt="Core 1 2"
                  />
                </Col>
                <Col lg={6} md={12}>
                  <ImageEnlarge
                    src={require("../../static/images/herrd/Core3&4.png")}
                    alt="Core 3 4"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col lg={3} md={10} className="pr-0">
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
            <Col lg={9} md={12}>
              <ImageEnlarge
                src={require("../../static/images/herrd/Concept_sketch.jpg")}
                alt="Concept Sketch"
              />
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col lg={6} md={10}>
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
            <Col lg={6} md={10}>
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
            <HighlightedQuotes className="d-md-block d-lg-none">
              Step-by-Step Guide(Sign no.7)
            </HighlightedQuotes>
            <Col lg={6} md={10}>
              <ImageEnlarge
                src={require("../../static/images/herrd/Mid-fi_1.jpg")}
                alt="Mid fi"
              />
            </Col>
            <Col lg={6} md={10}>
              <HighlightedQuotes className="d-lg-block d-md-none d-none">
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

            <Col lg={6} md={10}>
              <HighlightedQuotes className="mt-5 mt-ipad2 d-lg-none d-md-block">
                Bullying Sign Identified Result
              </HighlightedQuotes>
              <ImageEnlarge
                src={require("../../static/images/herrd/Mid-fi_2.jpg")}
                alt="Mid fi 2"
              />
            </Col>
            <Col lg={6} md={10}>
              <HighlightedQuotes className="mt-5 d-lg-block d-md-none d-none">
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

            <Col lg={6} md={10}>
              <HighlightedQuotes className="d-md-block d-lg-none">
                Main Menu
              </HighlightedQuotes>
              <ImageEnlarge
                src={require("../../static/images/herrd/Mid-fi_3.jpg")}
                alt="Mid fi 3"
              />
            </Col>
            <Col lg={6} md={10}>
              <HighlightedQuotes className="d-lg-block d-md-none d-none">
                Main Menu
              </HighlightedQuotes>
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
            <Col lg={6} md={10} className="pr-5">
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
            <Col lg={6} md={10}>
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
            <Col lg={12} md={10}>
              <Row className="justify-content-md-center">
                <Col lg={1} md={1} className="mt-5 noMargin">
                  <Quote />
                </Col>
                <Col lg={7} md={10}>
                  <HighlightedQuotes className="mt-10">
                    How might we educate parents on how to identify the signs of
                    bullying,{" "}
                    <span>
                      so they have the confidence to tackle bullying, with the
                      support of a counselor in a safe space?
                    </span>
                  </HighlightedQuotes>
                </Col>
                <Col lg={1} md={1} className="mt-200 mt-201">
                  <Quote />
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col lg={1} md={1} className="mt-5 noMargin">
                  <Quote />
                </Col>
                <Col lg={7} md={10}>
                  <HighlightedQuotes className="mt-10">
                    How might we educate parents on how to identify the signs of
                    bullying with a clear action plan, meanwhile, find support
                    from other parents and consolidate the resources in one
                    space.
                  </HighlightedQuotes>
                </Col>
                <Col lg={1} md={1} className="mt-200 mt-201">
                  <Quote />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col lg={4} md={10} className="pr-6">
              <Heading type="h2" inner italic colour="primary">
                Inspiration Findings
              </Heading>
              <img
                src={require("../../static/images/herrd/Herrd.png")}
                alt="Herrd"
                className="mt-7"
              />
              <BulletSection italic className="mt-9">
                Playing off on the similarity in sound. The concept of Herd = a
                group. Heard = being heard.
              </BulletSection>
            </Col>
            <Col lg={8} md={12}>
              <img
                src={require("../../static/images/herrd/BrandColor.jpg")}
                alt="Herrd"
                className="mt-7 img-fluid"
              />
              <BulletSection italic className="mt-4">
                Brand colors derived from images that convey my brand
                objectives.
                <br /> A link to the moodboard can be found{" "}
                <BaseLink InnerLink>here.</BaseLink>
              </BulletSection>
            </Col>
            <Col lg={8} md={12}>
              <img
                src={require("../../static/images/herrd/Logo_UI_Color.jpg")}
                alt="Herrd"
                className="img-fluid"
              />
            </Col>
            <Col lg={4} md={10} className="mt-7 pl-7">
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
            <Col lg={4} md={10} className="pr-6 mt-4">
              <Heading type="h3" inner colour="dark">
                Key Graphic Elements
              </Heading>
              <BulletSection>
                I got my inspiration to use illustration as the key graphical
                component for the 10-Signs-of-Bullying screens. The use of
                illustrations will put less racial and age associations.
              </BulletSection>
            </Col>
            <Col lg={8} md={12} className="mt-4">
              <img
                src={require("../../static/images/herrd/illustrations.svg")}
                alt="illustrations"
              />
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col lg={5} md={10} className="d-lg-block d-md-none d-none">
              <iframe
                width="442"
                height="900"
                src="https://invis.io/53XRYLBXWM8"
                frameborder="0"
                allowfullscreen
                tabIndex="0"
                data-embed="true"
              ></iframe>
              <BulletSection italic className="text-center">
                Test out the invision prototype
              </BulletSection>
            </Col>
            <Col lg={7}>
              <Row>
                <Col lg={12}>
                  <Heading type="h2" inner italic colour="primary">
                    Hi-fi Prototype
                  </Heading>
                  <BulletSection>
                    With all the elements established, I began to put all the
                    pieces together for my hi-fi prototype. In reference to my
                    persona, Don will play the role of a returning user, logging
                    back from her last visit, and continue on with identifying
                    the bullying signs her son is exhibiting. Once completed,
                    she will generate an action plan that will guide her closer
                    to helping her child.
                  </BulletSection>
                  <Col
                    lg={5}
                    md={12}
                    className="d-lg-none d-md-block text-center"
                  >
                    <iframe
                      width="442"
                      height="900"
                      src="https://invis.io/53XRYLBXWM8"
                      frameborder="0"
                      allowfullscreen
                      tabIndex="0"
                      data-embed="true"
                    ></iframe>
                    <BulletSection italic className="text-center">
                      Test out the invision prototype
                    </BulletSection>
                  </Col>
                  <video
                    width="100%"
                    height="430px"
                    controls={displayControls}
                    className="mt-7"
                    onClick={handleClick}
                  >
                    <source
                      src={require("../../static/video/video.mp4")}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <BulletSection italic className="mt-4">
                    Click to play a demo of the main task flow.
                  </BulletSection>
                </Col>
              </Row>
            </Col>
            <Col lg={5} className="d-lg-block d-md-none d-none">
              <img
                src={require("../../static/images/herrd/ipad.png")}
                alt="ipad"
              />
              <BulletSection italic className="mt-4 text-center">
                UI design on ipad.
              </BulletSection>
            </Col>
            <Col lg={7} md={10}>
              <Heading type="h3" inner colour="dark">
                Multi-platform Adaptation
              </Heading>
              <BulletSection>
                As a busy mom of three, Don is constantly distracted and pulled
                from many directions. Herrd needs to adapt to Don’s lifestyle.
                With an ipad, Don can have the flexibility to use Herrd for when
                she really want to focus on her action plan and reading up on
                more resources shared by other parents.
              </BulletSection>
              <Col md={12} className="d-md-block d-lg-none">
                <img
                  src={require("../../static/images/herrd/ipad.png")}
                  alt="ipad"
                />
                <BulletSection italic className="mt-4 text-center">
                  UI design on ipad.
                </BulletSection>
              </Col>
              <Heading type="h2" inner italic colour="primary" className="mt-7">
                Marketing Site
              </Heading>
              <BulletSection>
                A marketing site will introduce Herrd's value proposition to
                desperate parents with it’s vision to eradicate bullying through
                learning, support, and guidance. It needs to showcase the key
                features to its target audience as it is possibly the first
                channel someone would learn about the app before downloading.
              </BulletSection>
              <BulletSection>
                I will be using this as an MVP to collect metric such as; number
                of download. A subscribe function is also incorporated for a
                user like my secondary persona Lulu, who is interested in
                contributing to the peer support resources to start creating a
                community.
              </BulletSection>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col lg={9} md={12} className="mt-4">
              <img
                src={require("../../static/images/herrd/MarketingSite.gif")}
                alt="Marketing site"
                height="520"
                className="img-fluid"
              />
              <BulletSection className="mt-4" italic>
                Desktop version
              </BulletSection>
            </Col>
            <Col lg={3} md={12} className="pl-5">
              <img
                src={require("../../static/images/herrd/marketing_mobile.gif")}
                alt="Marketing site"
                height="540"
              />
              <BulletSection className="mt-4" italic>
                Mobile version
              </BulletSection>
            </Col>
            <Col lg={8} md={10}>
              <Heading type="h2" inner italic colour="primary">
                Design Impact
              </Heading>
              <BulletSection>
                I would like to see the act of bullying eradicated through
                early-on education. Herrd will help raise awareness for the
                issue. With enough interest, government will delegate more
                funding to prevention and education in other sectors. Most
                importantly, parents will feel confident from the knowledge they
                gained to tackle bullying with their children.
              </BulletSection>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col lg={8} md={10}>
              <Heading type="h1" colour="spaceship" inner>
                Key Learning
              </Heading>
              {/* <Heading type="h3" colour="dark" inner>
                Key Project Learnings
              </Heading> */}
              <BulletSection>
                Developing an unbiased and problem-orientated problem space was
                very hard. Bullying is an issue I am very passionate about so I
                had to keep reminding myself not to assume every parent cared
                about it as well at the Discovery Stage. I relied on qualitative
                and quantitative data to support my assumptions.
              </BulletSection>
              <BulletSection>
                While conducting investigation interviews, I learned that I
                would get a much more insightful result if I can delegate the
                task of note-taking to one other person. This way, I can better
                observe the interviewees' emotions and body language to really
                empathize with them.
              </BulletSection>
              <BulletSection>
                Furthermore, I am designing for the user, not myself. What was
                intuitive to me in the UI and UX design was not always the case
                for my users. The importance of information hierarchy is
                crucial; users will benefit from being shown only the relevant
                content in one digestible piece at a time. Giving back the user
                the control of how information comes to them improves
                engagement.
              </BulletSection>
              <BulletSection>
                On a final note, it became so apparent to me that, I can only
                build a holistic user-centered experience by build, test, learn
                and repeat.
              </BulletSection>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row className="justify-content-md-center mt-7 text-center">
            <Col lg={8} md={10}>
              <BulletSection large>
                Interested in learning more about this casestudy? Or tell me
                what you don’t like about it? I am all ears. Get in touch with
                me.
              </BulletSection>
            </Col>
          </Row>
        </Container>
      </Section>
    </Layout>
  )
}
export default CaseStudies
