const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-center items-center flex-wrap gap-5">
      {/* <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div> */}

      <div className="flex justify-center items-center gap-3 h-full">
        <div className="social-icon">
          <a
            href="https://github.com/Sicknostalgia"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://www.artstation.com/jether"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img
              src="/assets/artstationwhite.svg"
              alt="twitter"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://www.youtube.com/@sicknostalgia9934"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img
              src="/assets/youtubewhite.svg"
              alt="instagram"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
      </div>

      <p className="text-white-500">
        {/* © 2024 Adrian Hajdin. All rights reserved. */}
      </p>
    </footer>
  );
};

export default Footer;
