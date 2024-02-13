import { Divider } from "@mui/material";
import "./RightSideFooter.css";

const RightSideFooter = () => {
    return (
      <footer className="reddit_clone-section_right_footer">
        <div className="reddit_clone-section_right_footer_First_Row">
          <a href="https://www.redditinc.com/policies/user-agreement">
            User Agreement
          </a>
          <a href="https://www.redditinc.com/policies/content-policy">
            Content Policy
          </a>
          <a href="https://www.reddit.com/policies/privacy-policy">
            Privacy Policy
          </a>
          <a href="https://www.redditinc.com/policies/moderator-code-of-conduct">
            Modern Code of conduct
          </a>
        </div>
         <Divider variant="center"></Divider>
        <div className="reddit_clone-section_right_footer_First_Row">
          <a
            href="https://en.wikipedia.org/wiki/English_Wikipedia"
            rel="noopener noreferrer"
          >
            English
          </a>
          <a
            href="https://en.wikipedia.org/wiki/Deutsch"
            rel="noopener noreferrer"
          >
            Deutsch
          </a>
          <a
            href="https://en.wikipedia.org/wiki/French_language"
            rel="noopener noreferrer"
          >
            Francais
          </a>
  
          <a
            href="https://en.wikipedia.org/wiki/Italian_language"
            rel="noopener noreferrer"
          >
            Italiano
          </a>
          <a
            href="https://en.wikipedia.org/wiki/Espa%C3%B1ol"
            rel="noopener noreferrer"
          >
            Espanol
          </a>
          <a
            href="https://en.wikipedia.org/wiki/Portuguese_language"
            rel="noopener noreferrer"
          >
            Portuges
          </a>
        </div>
        <Divider variant="center"></Divider>
        <p className="reddit_clone-section_right_footer_p">
          Reddit,Inc &copy 2023 All rights reserved
        </p>
      </footer>
    );
  };
 
  export default RightSideFooter ;
  