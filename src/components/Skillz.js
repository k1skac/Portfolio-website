
const Skillz = (styles) => {
 return (
    <section class="skills" id="skills">
        <h2 class="heading">My <span>Skills</span>
       <span class="animate scroll" style={styles.style[0]}></span> 
        </h2>
        <div class="skills-row">
            <div class="skills-column">
                <h3 class="title">Coding skills
                <span class="animate scroll" style={styles.style[1]}></span> 
                </h3>

                <div class="skills-box">
                    <div class="skills-content">
                        <div class="progress">
                            <h3>HTML <span>80%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>
                        <div class="progress">
                            <h3>CSS <span>68%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>
                        <div class="progress">
                            <h3>Javascript <span>76%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>
                        <div class="progress">
                            <h3>Java <span>90%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>
                    </div>
                  <span class="animate scroll" style={styles.style[2]}></span>    
            </div>
        </div>

        <div class="skills-column">
            <h3 class="title">Professional Skills
             <span class="animate scroll"style={styles.style[2]}></span> 
            </h3>

            <div class="skills-box">
                <div class="skills-content">
                    <div class="progress">
                        <h3>Web Design <span>77%</span></h3>
                        <div class="bar"><span></span></div>
                    </div>
                    <div class="progress">
                        <h3>SQL & Databases <span>70%</span></h3>
                        <div class="bar"><span></span></div>
                    </div>
                    <div class="progress">
                        <h3>JWT and security <span>85%</span></h3>
                        <div class="bar"><span></span></div>
                    </div>
                    <div class="progress">
                        <h3>Frontend (React & Angular) <span>62%</span></h3>
                        <div class="bar"><span></span></div>
                    </div>
                </div>
               <span class="animate scroll" style={styles.style[6]}></span>   
            </div>
        </div>
       </div>  
    </section>
 )
}
export default Skillz;