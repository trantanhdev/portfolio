import "bootstrap/dist/css/bootstrap.min.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
config.autoAddCss = false;
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <style jsx global>{`
        @font-face {
          font-family: "Roboto Mono";
          src: url("/fonts/RobotoMono-VariableFont_wght.ttf");
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
      `}</style>
      <style jsx global>{`
        @font-face {
          font-family: "VT323";
          src: url("/fonts/VT323-Regular.ttf");
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
      `}</style>
    </div>
  );
}

export default MyApp;
