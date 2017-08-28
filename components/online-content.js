const colors = {
  black: '#181e1e',
  white: '#f6f6f6',
  blueGrey: '#a0a9bb',
  funBlue: '#7f8ed1',
  selectionGreen: '#47ff90',
};

const OnlineContent = () => {
  const MOBILE = /Mobile|Android/.test(navigator.userAgent);
  console.log(`window.dispatchEvent(new Event('offline'))`);
  
  return (<div className="page">
    <div className="offlineHeader">
      <h1>
        You must go offline to view this essay.
      </h1>
      <br />
      <h2>
        { MOBILE ? 'Enable Airplane Mode.' : 'Disconnect to continue'}
      </h2>
    </div>

    <style jsx>{`
      .page {
        min-height: 100vh;
        padding: 2px;
        line-height: 1.5;
        background-color: ${colors.blueGrey};
      }
      .offlineHeader {
        margin: auto;
        min-width: 310px;
        width: 80%;
        max-width: 600px;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif,"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: calc(2.5em + 4.2vmin);
        line-height: 130%;
        color: ${colors.white};
        font-weight: 700;
        padding: 50px 0 10px;
        animation: 300ms ease-out 0s 1 fadeIn;
      }
      h1 {
        display: inline;
        background-color: ${colors.black};
        font-size: 100%;
      }
      h2 {
        display: inline;
        background-color: ${colors.black};
        font-size: 25px;
        margin: 0;
        padding: 0;
        line-height: 170%;
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        background-color: ${colors.black};
        margin: 0;
        padding: 0;
      }
      ::selection {
        background: ${colors.selectionGreen};
      }
      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 100;
        }
      }
      @keyframes fadeInAndRise {
        0% {
          color: white;
          transform: translateY(2%);
        }
        100% {
          color: black;
          transform: translateY(0);
        }
      }
    `}</style>
    </div>
  )
};

export default OnlineContent;
