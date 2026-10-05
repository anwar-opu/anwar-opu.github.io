import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import audioBook from "../../Assets/Projects/smartAudio.png";
import chatify from "../../Assets/Projects/chatify.png";
import amazon_clone_img from "../../Assets/Projects/amazon_clone_img.png";
import princePrediction from "../../Assets/Projects/PricePrediction.png";
import alexaClone from "../../Assets/Projects/alexa_clone.jpg";
import snakeGame from "../../Assets/Projects/snakeGame.png";
import spamClassifier from "../../Assets/Projects/spam_classifier_demo.png";
import movieRecommender from "../../Assets/Projects/movie_recommender_demo.png";
import catsVsdogs from "../../Assets/Projects/cats_vs_dogs.jpeg";
import heroKidz from "../../Assets/Projects/heroKidz.png";
import zapShift from "../../Assets/Projects/zapShift.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* ==================== HERO KIDZ ==================== */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={heroKidz}
              isBlog={false}
              title="Hero Kidz"
              description="A full-stack educational toy e-commerce platform with authentication, product management, shopping cart, checkout, order management, and email invoice functionality."
              ghLink="https://github.com/anwar-opu/hero-kidz"
              demoLink="https://hero-kidz-theta-three.vercel.app/"
              techStack={[
                "Next.js",
                "React",
                "Tailwind CSS",
                "DaisyUI",
                "MongoDB",
                "NextAuth",
                "Resend",
              ]}
            />
          </Col>

          {/* ==================== ZAP SHIFT ==================== */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zapShift}
              isBlog={false}
              title="Zap Shift"
              description="A parcel delivery platform with separate User, Admin, and Rider roles. Users can request parcel delivery and make payments, admins assign riders, and riders complete deliveries."
              clientLink="https://github.com/anwar-opu/zap-shift-client"
              serverLink="https://github.com/anwar-opu/zap-shift-server"
              techStack={[
                "React",
                "JavaScript",
                "Tailwind CSS",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Stripe",
              ]}
            />
          </Col>

          {/* ==================== SMS / EMAIL SPAM CLASSIFIER ==================== */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spamClassifier}
              isBlog={false}
              title="SMS/Email Spam Classifier"
              description="A Streamlit web app that classifies SMS or Email messages as Spam or Not Spam using NLP and a machine learning model."
              ghLink="https://github.com/anwar-opu/Email_Or_SMS_Spam_Classifier"
              demoLink="https://sms-or-email-classifier.streamlit.app/"
              techStack={[
                "Python",
                "NLP",
                "Machine Learning",
                "Scikit-learn",
                "Streamlit",
              ]}
            />
          </Col>

          {/* ==================== MOVIE RECOMMENDER ==================== */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieRecommender}
              isBlog={false}
              title="Movie Recommender System"
              description="A content-based movie recommender system that suggests similar movies using TMDB API for posters. Built with Python, Streamlit, and scikit-learn."
              ghLink="https://github.com/anwar-opu/Movie_Recommender_App"
              techStack={[
                "Python",
                "Machine Learning",
                "Scikit-learn",
                "TMDB API",
                "Streamlit",
              ]}
            />
          </Col>

          {/* ==================== CATS VS DOGS ==================== */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={catsVsdogs}
              isBlog={false}
              title="Cats vs Dogs Classification"
              description="A Deep Learning project comparing CNN architectures with and without Transfer Learning and Data Augmentation."
              ghLink="https://github.com/anwar-opu/cats_vs_dog_classification"
              techStack={[
                "Python",
                "TensorFlow",
                "Keras",
                "CNN",
                "Transfer Learning",
                "Data Augmentation",
              ]}
            />
          </Col>

          {/* ==================== E-COMMERCE WEBSITE ==================== */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="E-Commerce Website"
              description="An e-commerce website built with JavaScript, HTML, CSS, Node.js, Express, and MongoDB. Users can view products, add products to their cart, and manage their accounts."
              ghLink="https://github.com/anwar-opu/online_shop"
              techStack={[
                "HTML5",
                "CSS3",
                "JavaScript",
                "Node.js",
                "Express.js",
                "MongoDB",
              ]}
            />
          </Col>

          {/* ==================== ALEXA VIRTUAL ASSISTANT ==================== */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alexaClone}
              isBlog={false}
              title="Alexa-like Python Virtual Assistant"
              description="A Python-based virtual assistant that responds to voice commands to tell the time, date, play music, search Wikipedia, tell jokes, and perform web searches."
              ghLink="https://github.com/anwar-opu/Virtual-Assistant"
              techStack={[
                "Python",
                "Speech Recognition",
                "Text-to-Speech",
                "Wikipedia API",
              ]}
            />
          </Col>

          {/* ==================== SNAKE GAME ==================== */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snakeGame}
              isBlog={false}
              title="Classic Snake Game"
              description="A classic arcade game built in Python where the player controls a snake to eat food and grow while avoiding collisions with the walls and its own body."
              ghLink="https://github.com/anwar-opu/Snake_Game"
              techStack={["Python", "Pygame", "Game Development"]}
            />
          </Col>

          {/* ==================== SMART AUDIO BOOK ==================== */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={audioBook}
              isBlog={false}
              title="Smart Audio Book"
              description="A Python application that converts text from PDF documents into spoken words using text-to-speech technology. It uses PyPDF2 for text extraction and pyttsx3 for speech synthesis."
              ghLink="https://github.com/anwar-opu/Smart-Audio-Book"
              techStack={["Python", "PyPDF2", "pyttsx3", "Text-to-Speech"]}
            />
          </Col>

          {/* ==================== IPHONE PRICE PREDICTION ==================== */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={princePrediction}
              isBlog={false}
              title="iPhone Price Prediction"
              description="A machine learning project that uses Linear Regression to predict iPhone prices based on their version. The model is trained using historical data."
              ghLink="https://github.com/anwar-opu/predict-iphone-price"
              techStack={[
                "Python",
                "Machine Learning",
                "Linear Regression",
                "Pandas",
                "Scikit-learn",
              ]}
            />
          </Col>

          {/* ==================== AMAZON CLONE ==================== */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazon_clone_img}
              isBlog={false}
              title="Amazon Clone"
              description="A static clone of the Amazon website built entirely with HTML and CSS. It replicates the layout, header, product listings, and footer with a responsive design."
              ghLink="https://github.com/anwar-opu/amazon_clone"
              demoLink="https://anwar-opu.github.io/amazon_clone/"
              techStack={["HTML5", "CSS3", "Responsive Design"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
