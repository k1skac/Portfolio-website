import homeImg from  "../assets/profilePicResize-removebg-preview.png";

const Home = (styles) =>{
    return (
        <section class="home show-animate" id="home">
        <div class="home-content">
          <h1>Hi, I'm <span>Balázs Kaczor</span>
             <span class="animate" style={styles.style[1]}></span>
          </h1>
          <div class="text-animated">
              <h3>Backend Developer and frontend novice</h3>
                 <span class="animate-logo" style={styles.style[2]}></span>     
          </div>
          <p>If you are in need of a backend developer or a beginner fullstack programmer who is just taking his first steps on the beautiful but sometimes bumpy road of programming, 
            please feel free to contact me. I'm happy to answer your questions and find beauty and challenge in every task!
             <span class="animate" style={styles.style[3]}></span>  
          </p>
         
          <div class="btn-box">
              <a href="#contact" class="btn">Hire me</a>
              <a href="#contact" class="btn">Talk to me!</a>
               <span class="animate" style={styles.style[4]}></span> 
          </div>
      </div>
      <div class="home-links">
          <a href="https://www.linkedin.com/in/bal%C3%A1zs-kaczor-907979285/"><i class="bx bxl-linkedin"></i></a>
          <a href="https://www.instagram.com/kaczor_balazs/"> <i class="bx bxl-instagram-alt"></i></a>
          <a href="https://github.com/k1skac"><i class="bx bxl-github"></i></a>
          <a href="https://www.hackerrank.com/profile/kiskac"><i class="bx bx-code-block"></i></a>
           <span class="animate" style={styles.style[5]}></span> 
      </div>
      <div class="home-imgHover">
          <img src={homeImg} alt="This is my face" class="profile"></img>
           <span class="animate home-img" style={styles.style[6]}></span> 
      </div>
      </section> 
    )
}
export default Home;