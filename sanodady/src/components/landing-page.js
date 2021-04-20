import '../styles/landing-page.css';
import Face from './face';

const LandingPage = () => {

    var handleMouseMove = event => {
        var eye = document.querySelectorAll('.eye');
        eye.forEach(
          function (eye) {
            let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
            let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
            let radian = Math.atan2(event.pageX - x, event.pageY - y);
            let rot = (radian * (180 / Math.PI) * -1) + 270;
            eye.style.transform = "rotate(" + rot + "deg)";
          }
        )
      }
    

    return (
        <div className = "landing-page" onMouseMove={handleMouseMove}>
            <Face />
            <div className="fixed">
                <p id="top-message"><strong>HELLO, We Are The </strong></p>
                <p id="oasis">OASIS</p>
                <p id="bottom-message"><strong>Of Home Decor</strong></p>
            </div>

            <div className="button">
                <button className="welcome" onclick={(e) => { e.preventDefault(); window.location.href = '/home'}} style= {{border: 1}}>WELCOME</button>
            </div>

            <div className="refer">
                <ul>
                    <li>
                        <a href="https://www.facebook.com/"><img alt = "social-link" className="link" src="https://img.icons8.com/doodle/48/000000/facebook-new.png" /></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/"><img alt = "social-link" className="link" src="https://img.icons8.com/office/40/000000/instagram-new.png" /></a>
                    </li>
                    <li>
                        <a href="https://www.gmail.com/"><img alt = "social-link" className="link" src="https://img.icons8.com/dusk/64/000000/gmail-login.png" /></a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default LandingPage;