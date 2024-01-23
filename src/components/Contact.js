import axios from "axios";
const Contact = () => {
    const styles = [{ "--i": 1}, { "--i": 2},{"--i": 3},{"--i": 5}, {"--i": 6}, {"--i": 7}, {"--i": 9}, {"--i": 11}]
    function collectData(e){
        e.preventDefault();
        const fullName = document.getElementById("fullName");
        const subject = document.getElementById("subject");
        const mobileNum = document.getElementById("mobileNum");
        const email = document.getElementById("email");
        const message = document.getElementById("message");
        if(message.value === null | email.value === null){
            window.alert("You did not enter your email and / or message! Fill in the required fields!")
        } else{
           axios.post("https://portfolioweb-3jcv.onrender.com/contact", {
            fullName: fullName.value,
            email: email.value,
            message: message.value,
            subject: subject.value,
            mobileNum: mobileNum.value
        }, {withCredentials:true})
        .then((response) => {
           if(response.status === 200){
            window.alert("Email send successful"  + response.data)
            window.location.href="http://kaczorbalazs.netlify.app"
           } 
        }).catch((error)=> {
            console.error(error);
            window.alert(error);
            console.log(error.status);    
        });
          }
        }  
 
 return(
        <section class="contact" id="contact">    
        <h2 class="heading">Contact <span>Me!</span>   
             <span class="animate scroll" style={styles[0]} ></span>
        </h2>         
        
        <form action="" method="POST" class="form" onSubmit={collectData} >
            <div class="input-box">
                <div class="input-field">
                   <input type="text" placeholder="Full Name" id="fullName" required></input>
                   <span class="focus"></span> 
                </div>
                <div class="input-field">
                    <input type="text" placeholder="Email..."  id="email" required></input>
                    <span class="focus"></span> 
                 </div>
                  <span class="animate scroll" style={styles[2]}></span> 
            </div>
            <div class="input-box">
                <div class="input-field">
                   <input type="text" placeholder="Mobile number" id="mobileNum"></input>
                   <span class="focus"></span> 
                </div>
                <div class="input-field">
                    <input type="text" id="subject" placeholder="Email subject" required></input>
                    <span class="focus"></span> 
                 </div>
                  <span class="animate scroll" style={styles[3]}></span> 
            </div>
            <div class="textarea-field">
                <textarea name="" id="message" cols="30" rows="10" placeholder="Your message..."></textarea>
                <span class="focus"></span>
                 <span class="animate scroll" style={styles[5]}></span>  
            </div>
            <div class="btn-box">
                <button type="submit" class="btn" id="submit" >Submit</button >
               <span class="animate scroll" style={styles[6]}></span>
            </div>
        </form>
    </section>
 )
}
export default Contact;