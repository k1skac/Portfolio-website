import logo from "./assets/logo-no-background.svg";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import Skillz from "./components/Skillz";
import Education from "./components/Education";
import Carousel from "./components/Carousel";
import { useEffect, useState } from "react";

function App() {
  const styles = [{ "--i": 1}, { "--i": 2},{"--i": 3},{"--i": 5}, {"--i": 6}, {"--i": 7}, {"--i": 9}, {"--i": 11}]
  const[scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const handleScroll = event => {
      setScrollTop(window.scrollY);
    };
  let sections = document.querySelectorAll("section");
  let navlinks = document.querySelectorAll("header nav a");
  let menuIcon = document.getElementById("menu-icon")
  let navbar = document.querySelector(".navbar");
  //this.shadowRoot.querySelector()  <--- another good solution
      menuIcon.onclick = () => {
      menuIcon.classList.toggle("bx-x");
      navbar.classList.toggle("active");
       }
      
    sections.forEach(section =>{
      let offset = section.offsetTop - 150;
      let height = section.offsetHeight;
      let id = section.getAttribute("id");
      if (scrollTop >= offset &&  scrollTop < offset + height){     
        navlinks.forEach(link => {
          link.classList.remove("active");
          document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
        });
        section.classList.add("show-animate");
      } else {
        section.classList.remove("show-animate");
      }
    });
      let header = document.querySelector(".header");
      header.classList.toggle("sticky", scrollTop > 100);
      menuIcon.classList.remove("bx-x");
      navbar.classList.remove("active");  
      let footer = document.getElementById("footer");
      footer.classList.toggle("show-animate", document.documentElement.clientHeight + scrollTop + 150 >= document.scrollingElement.scrollHeight); 
      window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    }, [scrollTop]);  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Navbar style={styles}/>
      </header>
        <Home style={styles}/>
        <About style={styles}/>
        <Carousel style={styles} />
        <Education style={styles}/>
        <Skillz style={styles}/>
        <Contact style={styles}/>
        <Footer style={styles}/>
    </div>
  );
}
export default App;
