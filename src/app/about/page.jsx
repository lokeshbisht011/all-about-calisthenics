import React from 'react';

const AboutPage = () => {
  return (
    <div className="pt-5 bg-white text-black min-h-screen">
      <h1 className="text-5xl text-center capitalize">About</h1>
      <div className="border border-white border-opacity-30 mx-7 mt-5"></div>
      <h1 className="mx-80 mt-5 pb-5 text-2xl font-light text-center md:mx-7 md:text-lg">
        <b>
          Welcome to All About Calisthenics, your ultimate resource for all things related to bodyweight fitness and calisthenics.
          <br /><br />
          Our mission is to inspire and empower individuals to achieve their fitness goals through calisthenics,
          a form of exercise that uses minimal equipment and relies on bodyweight resistance.
          Whether you're a beginner looking to get started or an advanced practitioner seeking new challenges, we've got you covered.
          <br /><br />
          At All About Calisthenics, we believe that fitness is not just about physical strength, but also about mental resilience and discipline.
          Through our informative articles, expert tips, and inspiring stories, we aim to educate, motivate,
          and support our community in their fitness journey.
          <br /><br />
          Join us as we explore the world of calisthenics and discover the amazing things your body can achieve. Let's move, grow, and inspire together.
        </b>
      </h1>
    </div>
  );
};

export default AboutPage;
