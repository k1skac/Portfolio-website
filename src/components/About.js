import facepic from "../assets/profilePicResize.jpg"
const About = (styles) => {
  
    return (
        <section class="about" id="about">
        <h2 class="heading">About <span>me</span>
         <span class="animate scroll" style={styles.style[0]}></span> 
        </h2>
        <div class="about-img">
            <img id="facepic" src={facepic} alt="Itt vagyok"/>
            <span class="circle-spin"></span>
            <span class="animate scroll" style={styles.style[1]}></span> 
        </div>
        <div class="about-content">
            <h3>Backend developer
                 <span class="animate scroll" style={styles.style[2]}></span> 
                </h3>
            <p>I'm Balázs Kaczor, a Java backend developer learning the basics of frontend and web development. 
                I like programming, I like constant challenges, I like working in a team and I really like expanding my knowledge. 
                I used to work as a teacher, I owe a lot to that job (cooperation, advocacy, tension management, motivation, etc.).
                But now I'm starting a new phase in my life and I want to make an even bigger impact. 
                 <span class="animate scroll" style={styles.style[3]}></span> 
                </p>
        </div>
        <div class="btn-box" id="read">
            <a href="#home" class="btn">Read more</a>
             <span class="animate scroll" style={styles.style[4]}></span> 
        </div>
    </section>
    )
}
export default About;