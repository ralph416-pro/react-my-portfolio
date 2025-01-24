import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import test1 from "../../Assets/Projects/1.png";
import test2 from "../../Assets/Projects/2.jpg";
import test3 from "../../Assets/Projects/3.jpg";
import test4 from "../../Assets/Projects/4.jpg";
import test5 from "../../Assets/Projects/5.jpg";
import test6 from "../../Assets/Projects/6.jpg";
import test7 from "../../Assets/Projects/7.jpg";
import test8 from "../../Assets/Projects/8.jpg";
import test9 from "../../Assets/Projects/9.jpg";
import test10 from "../../Assets/Projects/10.jpg";
import test11 from "../../Assets/Projects/11.jpg";
import test12 from "../../Assets/Projects/12.jpg";
import test13 from "../../Assets/Projects/13.jpg";
import test14 from "../../Assets/Projects/14.jpg";
import test15 from "../../Assets/Projects/15.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Previous <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on lastly.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={test2}
              isBlog={false}
              title="PrestaShop and Homeowners"
              description="The SFA Group is represented worldwide through its own subsidiaries or distributors with a complete range of grinders, pumps, lifting stations designed for homes, commercial buildings and boats. 
              I take part in this project and I played an important role in frontend."
              stack = "Stack: React, Angular JS"
              demoLink="https://www.sfa.ua/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={test3}
              isBlog={false}
              title="B2B eCommerce and Solution"
              description="Cartonomics.ai is a SaaS solution that allows brands to ensure that customers are able to purchase products through the customers preferred sales channel.
              The Where to Buy button built specifically for B2B eCommerce. I played an important role of Database design."
              stack="Stack: Wordpress, Mysql, Wp Engine"
              demoLink="http://cartonomics.ai/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={test4}
              isBlog={false}
              title="VMG Health and Bussiness"
              description="VMG Health supports a nationwide network of clients with over 70,000 engagements, exclusively in the healthcare industry. Our national client base ranges from large health systems to small practices and everything in between, including investors and private equity. I participated as a team manager and designed database architecture."
              stack=""
              demoLink="https://vmghealth.com/ "
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={test5}
              isBlog={false}
              title="Deep Tech and IT Solution"
              description="Deep Tech foster a culture of creativity and innovation, providing you with the opportunity to work on cutting-edge projects that make a real impact."
              stack="Stack: Wordpress, Mysql, PHP, Wp Engine"
              demoLink="https://deeptechinc.com/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={test6}
              isBlog={false}
              title="English Country Hotels and Free Service"
              description="This Hotels are paid by the hotels we use, but will always get the best rates possible for our clients."stack="Stack: Wordpress, Mysql, PHP, Wp Engine"
              demoLink="https://www.englishcountryhotels.co.uk/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={test7}
              isBlog={false}
              title="KMBS and Government"
              description="Довгострокові магістерські програми kmbs для власників компаній та управлінців C-level, які прагнуть набути спроможності створювати та управляти масштабними соціальними системами"
              demoLink="https://kmbs.ua/ua/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={test8}
              isBlog={false}
              title="Modular technology"
              description="The modular technology we use is based not only on high quality, but also on the solutions used in the buildings - it is with their participation that they can harmoniously harmonize with the environment. This is possible thanks to the appropriate materials (wood and glass), as well as ecological accessories - they really reduce the consumption of water and electricity."
              stack="Stack: Drupal, Bootstrap, PHP"
              demoLink="https://algeco.ua/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={test9}
              isBlog={false}
              title="Hello study and Service"
              description="Going on an exchange program is important not only for you to improve your language skills, but also to learn about new cultures, meet new people and, most importantly, yourself. Se você quer aprender inglês, temos os melhores destinos do mundo para tornar seu sonho realidade. A Hello Study te ajuda em todos os detalhes da sua viagem. Fazemos Tudo para o seu Intercâmbio."
              stack="Stack: Wordpress, PHP, Mysql"
              demoLink="https://www.hellostudy.com.br/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={test10}
              isBlog={false}
              title="Focus and Pocus"
              description="Focus Pocus uses the device camera and an algorithm that can be adjusted to the individual, for measuring and rewarding attention whilst learning. The ability for children to focus and sustain attention is crucial, especially when they are having to adapt to learning from home, with all its distractions. Focus Pocus uses the device camera and an algorithm that can be adjusted to the individual."
              stack="Stack: Vue.js, PHP"
              demoLink="https://focuspocus.ai/#/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={test11}
              isBlog={false}
              title="Bubby Cleaning and Five Star Cleaner"
              description="Bubby Cleaning is Five star perfect Cleaner which is serviced Highest-rated cleaners, Cost-effective pricing, Simple booking process."
              stack="Stack: Vue.js, PHP"
              demoLink="https://bubblycleaning.com/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={test12}
              isBlog={false}
              title="Insight and DTC"
              description="insight: is a retail data stack that helps you understand your customers and grow your business. Done right, done profitably."
              stack="Stack: React, Next.js"
              demoLink="https://insightplatform.ai/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={test13}
              isBlog={false}
              title="Stop Inefficient Marketing and AI-platform"
              description="The first AI-Based What-If platform for your marketing budget. Stop Inefficient Marketing. Save More. Earn More and Data Analysis."
              stack="Stack: React, Node"
              demoLink="https://funneloop.ai/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>your marketing budget.
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={test14}
              isBlog={false}
              title="Maya AI and Service"
              description="Ask Absolutely Anything of Maya. I am played important role in backend."
              stack="Stack: React, Next.js, ReactNative"
              demoLink="https://askmaya.ai/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={test15}
              isBlog={false}
              title="AI-Driven and Data-Driven"
              description="Discover how predictive analytics is revolutionizing industries by enabling data-driven decision-making and See how your company can turn the promise of AI into results."
              stack="Stack: React, Next.js, AI, ML."
              demoLink="https://applaudo.dev/en/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
