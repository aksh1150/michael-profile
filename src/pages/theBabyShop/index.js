import React, { useState } from "react"
import {
  LinkButton,
  Header,
  ImageEnlarge,
  NextPrevBtn,
} from "../../Components/molecules"
import {
  BaseLink,
  Heading,
  HighlightedQuotes,
  BulletSection,
  Quote,
  Section,
  PopUp,
} from "../../Components/atoms"
import { Layout } from "../../Components/organisms"
import { Container, Row, Col } from "react-bootstrap"
import "./index.scss"

const TheBabyShop = () => {
  return (
    <Layout
      pagename="The baby shop"
      className="overflowHidden uxDesign globalStyle"
    >
      <Section background="White" inner heroSection>
        <Header />
        <Container>
          <Row>
            <Col lg={12}>
              <img
                src={require("../../static/images/theBabyShop/banner.png")}
                alt="Hero Image"
                className="HeroImage  d-md-block d-none"
              />
              <img
                src={require("../../static/images/theBabyShop/banner.png")}
                alt="Hero Image"
                className="HeroImage  d-md-none d-block"
              />
            </Col>
          </Row>
        </Container>
      </Section>

      <Section background="White" inner>
        <Container>
          <Row>
            <Col lg={3} md={10} className="mt-5">
              <Heading type="h1" inner colour="black" className="mb-4">
                the babyshop.com
              </Heading>
              <BulletSection bold inline>
                Time:
              </BulletSection>
              <BulletSection inline>6 months (2014)</BulletSection>
              <br />
              <BulletSection bold inline>
                Role:
              </BulletSection>
              <BulletSection inline>
                Product Designer/Art Director
              </BulletSection>
              <br />
              <BulletSection bold inline>
                Platform:
              </BulletSection>
              <BulletSection inline>Native app and desktop</BulletSection>
              <br />
              <BulletSection bold inline>
                Deliverables:
              </BulletSection>
              <BulletSection inline>
                Rebranding, social media promotion, direct mailing, UI and UX
                across platforms
              </BulletSection>
              <br />
              <BulletSection bold inline>
                Type:
              </BulletSection>
              <BulletSection inline>Professional</BulletSection>
            </Col>
            <Col lg={9} md={10} className="pl-6 mt-5">
              <Heading type="h2" inner colour="baby" italic>
                Introduction
              </Heading>
              <BulletSection className="mt-4">
                thebabyshop.com first started as a high-end clothing boutique
                for children. The company eventually adapted to a new product
                line with a customer need pivot. I am tasked to integrate the
                best UI and UX practices on the redesign of the website, mobile
                site, and all corporate promotional graphics that align with the
                new business relaunch.
              </BulletSection>
              <Heading
                type="h2"
                inner
                italic
                colour="baby"
                className="mt-5 mb-4"
              >
                The Constraints
              </Heading>
              <BulletSection bold inline>
                Technical:
              </BulletSection>
              <BulletSection inline>
                Back-end CMS editing capability limits the freedom of how UI
                elements can be laid out.
              </BulletSection>
              <br />
              <BulletSection bold inline>
                Socio-cultural:
              </BulletSection>
              <BulletSection inline>
                Safety is the primary concern for children's products. Parents
                prefer to buy from a store where they can examine the quality
                first hand.
              </BulletSection>
              <br />
              <BulletSection bold inline>
                Time:
              </BulletSection>
              <BulletSection inline>
                Daily or weekly design sprints.
              </BulletSection>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col lg={12} md={12} className="pr-5 mt-5">
              <Heading type="h1" inner colour="h1baby">
                1.
                <br /> Empathize
              </Heading>
            </Col>
            <Col lg={6} md={10} className="pr-5">
              <Heading type="h2" inner italic colour="baby">
                Internal
              </Heading>
              <Heading type="h3" inner colour="dark" className="mt-4">
                The high-end brand lacks marketing support. Mid-ranged brands
                only offered a 10-20% discount off retail price.
              </Heading>
              <BulletSection className="mt-4">
                With the small margin, they need to rethink their business model
                and try for the mainstream consumer market. The company saw the
                need to expand its offerings.
              </BulletSection>
            </Col>

            <Col lg={6} md={10} className="pr-5">
              <Heading type="h2" inner italic colour="baby">
                External
              </Heading>
              <Heading type="h3" inner colour="dark" className="mt-4">
                Shoppers enjoy the shopping experience of going into a luxury
                brand store. It was hard to imitate that same experience online.
              </Heading>
              <BulletSection className="mt-4">
                The current niche for the business is offering European brands
                not sold in malls to justify shopper’s need to shop for
                exclusiveness over safety and convenience.
              </BulletSection>
            </Col>

            <Col lg={12} md={12} className="pr-5 mt-5">
              <HighlightedQuotes
                colour="dark"
                className="text-center pr-5 pl-5"
              >
                “Shoppers will have the confidence that they are buying premium
                products when they are buying from us.”
              </HighlightedQuotes>
              <BulletSection italic className="text-center">
                Company Vision Statement
              </BulletSection>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col lg={9} md={10} className="mt-5">
              <Heading type="h1" inner colour="h1baby">
                2.
                <br /> Problem Discovery
              </Heading>
              <Heading type="h3" inner colour="dark" className="mt-4">
                The brand has gained success from celebrity-endorsed marketing
                campaigns and press exposure. But it's now fizzling out...
              </Heading>
              <BulletSection className="mt-4">
                In the beginning, I oversaw the packaging and weekly site
                graphic updates. As the company faces diminishing interest from
                its pre-launch marketing efforts, the company realized they need
                a complete overhaul of its offerings to draw in more customers.
              </BulletSection>
            </Col>

            <Col lg={6} md={10}>
              <Row>
                <Col lg={12} className="blueBox">
                  <Heading type="h2" inner italic colour="baby">
                    Hypothesis:
                  </Heading>
                  <HighlightedQuotes className="grey mt-4">
                    Changing from selling luxury children apparel into selling a
                    wide selection of premium brand children products will
                    improve our current customers’ need to shop quality goods
                    but with a lot more varieties.
                  </HighlightedQuotes>
                </Col>
              </Row>
            </Col>
            <Col lg={6} md={10}>
              <Row>
                <Col lg={12} className="lightBlueBox">
                  <Heading
                    type="h2"
                    inner
                    italic
                    colour="h1baby"
                    className="mt-5"
                  >
                    The “Customer Need Pivot”
                  </Heading>
                  <Heading type="h3" inner colour="baby" className="mt-4">
                    A step into mainstream essential goods.
                  </Heading>
                  <BulletSection className="mt-4 h1baby">
                    The company entered in a state of Customer Need Pivot. They
                    need more conversion and more market share in the youth
                    product sector. So the site has undergone a total facelift.
                  </BulletSection>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col lg={9} md={10} className="mt-5">
              <Heading type="h1" inner colour="h1baby">
                3.
                <br /> Ideate
              </Heading>
            </Col>

            <Col lg={6} md={10}>
              <BulletSection className="mt-4">
                Since the founders of the company aspire to build the next
                Taobao, the team took reference to how their site’s information
                architecture.
              </BulletSection>
            </Col>
            <Col lg={12} md={10}>
              <img
                src={require("../../static/images/theBabyShop/Taobao.png")}
                alt="Hero Image"
                className="HeroImage  d-md-block d-none"
              />
            </Col>

            <Col lg={6} md={10}>
              <BulletSection italic className="mt-4">
                China’s biggest e-commerce: site Taobao Landing Page.
              </BulletSection>
            </Col>
            <Col lg={6} md={10}>
              <BulletSection italic className="mt-4">
                All the possible categories of each section are presented
                through a slide-out menu.
              </BulletSection>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col lg={9} md={10} className="mt-5">
              <Heading type="h1" inner colour="h1baby">
                4.
                <br /> Build
              </Heading>
            </Col>

            <Col lg={12} md={12} className="background">
              <Row>
                <Col lg={6} md={10}>
                  <Heading type="h2" inner italic colour="baby">
                    One week sprint - Landing Page Catagorization
                  </Heading>
                  <BulletSection className="mt-4">
                    <b>User Story:</b> As a new customer, I want to explore the
                    categories at a glance so that I know if it sells the brand
                    and the type of product I need to buy.
                  </BulletSection>
                  <BulletSection className="mt-4">
                    <b>Spirational finding:</b> We took reference to how
                    products are categorized on Taoboa’s landing page.
                  </BulletSection>
                </Col>
              </Row>
              <div className="img1"></div>
              <Col lg={6} md={10}>
                <div className="img2">
                  <BulletSection className="mt-5 ml-4 innerWidth">
                    <b>Main Nav:</b> <br />
                    Sectioned by age
                  </BulletSection>
                  <BulletSection className="mt-4 ml-4 innerWidth">
                    <b>Dropdown:</b> <br />
                    3-column menu; product types, brands, featured sale in this
                    age group
                  </BulletSection>
                </div>
              </Col>
            </Col>
            <Col lg={6} md={10} className="mt-5 mb-5">
              <BulletSection className="mt-4">
                <b>Outcome:</b> A new customer can view the list of categories
                and brands just with one click. This layout allows for easy
                content management internally as well. The overall landing page
                is divided into sections that support similar graphic elements
                and content input fields. With this UI structure, the layout
                stays consistent even when an update was done by the
                merchandising team with no coding knowledge. This is crucial as
                there were over 2,000 products in the database, and by
                standardizing the graphical elements by sections, the design
                team can focus on other promotional material for the brand.
              </BulletSection>
            </Col>
            <Col lg={6} md={10} className="mt-5 mb-4">
              <div className="img3">
                <BulletSection className="mt-4 ml-4 innerWidth">
                  Notice how both banners have the same design components.
                  Merchandising team will simply upload or edit on the three
                  components: Header, body, and image inside the CMS.
                </BulletSection>
              </div>
              <div className="img4"></div>
            </Col>

            <Col lg={8} md={10} className="mt-5">
              <Heading type="h2" inner italic colour="baby">
                Enhancing Conversion Rate
              </Heading>
              <Heading type="h3" inner colour="dark" className="mt-4">
                Keeping existing customers happy
              </Heading>
            </Col>
            <Col lg={6} md={10}>
              <BulletSection>
                <b>Challenge:</b> Returning shoppers came to know
                thebabyshop.com as a luxury children's apparel site.{" "}
                <b>
                  <i>
                    How do I offer the same luxury shopping experience without
                    the luxury goods?
                  </i>
                </b>
              </BulletSection>
            </Col>
            <Col lg={6} md={10}>
              <BulletSection>
                <b>Solution:</b> The team wants to keep our existing clients, of
                course. The company has been selling bespoke gift hamper to
                corporate clients use them as a gift for their employee turned
                new parents. It gave us the insight that this can become a
                stand-alone service for this customer segment.
              </BulletSection>
            </Col>
            <Col lg={12}>
              <img
                src={require("../../static/images/theBabyShop/screencap2.png")}
                alt="Screencap2"
                className="img-fluid"
              />
            </Col>
            <Col lg={6} md={10}>
              <BulletSection>
                <b>Execution:</b> I supervised the photoshoot of a series of
                gift hampers, gave it a luxurious backdrop with a European
                flair. The product offers a side-by-side comparison of the
                genders at a different price point. It was a happy marriage
                between our gifting customer and essential goods customer.{" "}
              </BulletSection>
            </Col>

            <Col lg={12} md={12} className="background">
              <Row>
                <Col lg={6} md={10} className="mt-5">
                  <Heading type="h2" inner italic colour="baby">
                    Enhancing Shopping Experience
                  </Heading>
                  <BulletSection className="mt-4">
                    <b>User Story:</b> As a customer looking for a specific
                    item, I want to find it by category then the brand so that I
                    can see the price, delivery time, and return policy without
                    searching for it.
                  </BulletSection>
                  <BulletSection className="mt-4">
                    <b>Challenge:</b> With such an extensive selection of
                    product offerings, I spent lots of time with the
                    merchandising team to determine the sort and filter fields.
                    A very tedious task, some product has many specifications a
                    drop-down style menu for filter/sort will annoy any return
                    customer.
                  </BulletSection>
                </Col>
              </Row>
              <div className="img5"></div>
            </Col>
            <Col lg={6} md={10} className="mt-5">
              <BulletSection className="mt-5">
                <b>Outcome:</b> The contents of the sort and filter functions
                are layouts in rows. Adhering to one of Nielsen's heuristics
                principles: “Match between system and the real world”, making
                information appear naturally and logically. It entices the
                shopper to add the item to the cart when they feel like they are
                informed. Every action is achievable by click without scrolling
                on the desktop.
              </BulletSection>
            </Col>

            <Col lg={8} md={10} className="mt-5">
              <Heading type="h2" inner italic colour="baby">
                Multi-platform Adaptation
              </Heading>
              <Heading type="h3" inner colour="dark" className="mt-4">
                Mobile Version
              </Heading>
            </Col>
            <Col lg={12}>
              <img
                src={require("../../static/images/theBabyShop/mobile.png")}
                alt="Screencap2"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </Section>

      <Section background="White" inner>
        <Container>
          <Row>
            {/* <Col lg={12}>
              <img
                src={require("../../static/images/theBabyShop/baby.png")}
                alt="The baby shop"
                className="d-md-block d-none"
              />
            </Col> */}

            <Col sm={12} className="border-top t-mt-87">
              <Row className="t-mt-100 t-mb-100">
                <Col lg={3} md={3}>
                  <NextPrevBtn>
                    <BaseLink InnerLink link="/uxCaseStudy">
                      Herrd
                    </BaseLink>
                  </NextPrevBtn>
                </Col>
                <Col lg={6} md={6} />
                <Col lg={3} md={3}>
                  {/* <NextPrevBtn rightArrow>
                         <BaseLink
                            InnerLink
                            link="/theBabyShop"
                          >
                            The Baby Shop
                        </BaseLink>
                      </NextPrevBtn> */}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Section>
    </Layout>
  )
}
export default TheBabyShop
