import "../App.css";

function About() {
  return (
    <div className="container about container-true">
      <h2 className="title">About</h2>
      <div className="line" />
      <div className="scroll-v">
        <p>
          Louise recently graduated from Vanderbilt University, where she
          studied Computer Science & Psychology. She enjoys building at the
          intersection of engineering and design.
        </p>
        <p>
          Outside of work, I’m usually cooking, hiking, playing videogames, or
          watching movies. I’m currently exploring full-time roles while
          traveling.
        </p>
        <div style={{ height: "30px" }} />
      </div>
    </div>
  );
}

export default About;
