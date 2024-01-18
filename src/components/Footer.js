
const Footer = (styles) => {
return (
    <footer class="footer" id="footer">
        <div class="footer-text">
            <p>Copyright &copy; 2023 by kaczor_balazs | All rights reserved</p>
            <span class="animate scroll" style={styles.style[0]}></span>   
        </div>
        <div class="footer-icon">
            <a href="#home"><i class="bx bx-up-arrow-alt"></i></a>
           <span class="animate scroll" style={styles.style[2]}></span>   
        </div>
    </footer>
)
}
export default Footer;