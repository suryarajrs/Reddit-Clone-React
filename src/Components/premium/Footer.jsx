
import "./Premium.css";

const Footer = () => {
    return (
      <footer className="reddit_clone-premium_footer">
        <div className="reddit_clone-premium_footer_container">
          <div className="reddit_clone-premium_footer_items">
            <a href="https://www.redditinc.com/"><p>About</p></a> 

            <a href="https://www.redditinc.com/careers"><p>Careers</p></a>
            <a href="https://www.redditinc.com/press"><p>Press</p></a>
            
          </div>
          <div style={{borderRight:"1px solid white",paddingRight:'50px'}} className="reddit_clone-premium_footer_items">
            <a href="https://www.redditinc.com/press"><p>Advertise</p></a>
            <a href="https://www.redditinc.com/blog"><p>Blog</p></a>
            <a href="https://www.redditinc.com/help"><p>Help</p></a>
          </div>
          <div style={{borderRight:"1px solid white",padding:'50px',}} className="reddit_clone-premium_footer_items">
            <a href=""><p style={{marginRight:'20px'}} >Reddit Premium</p></a>
          </div>
          <div className="reddit_clone-premium_footer_items">
            <a href="https://www.facebook.com/reddit/"><p>Facebook</p></a>
            <a href="https://twitter.com/reddit"><p>Twitter</p></a>
            <a href="https://www.instagram.com/reddit/"><p>Instagram</p></a>
          </div>
          
        </div>
      
        <div className="reddit_clone-premium_copyright">
          <a href="https://www.redditinc.com/policies/content-policy"><p>Content Policy</p></a>
          <a href="https://www.reddit.com/policies/privacy-policy"><p>Privacy Policy</p></a>
          <a href="https://www.redditinc.com/policies/user-agreement"><p>User Agreement</p></a>
          <a href="https://www.redditinc.com/policies/moderator-code-of-conduct"><p>Mod Policy</p></a>
          <a href=""><p style={{textDecorationLine:"none",cursor:'auto'}}>Reddit, Inc. © 2023. All rights reserved.</p></a>
        </div>
      </footer>
    );
  };
  export default Footer;