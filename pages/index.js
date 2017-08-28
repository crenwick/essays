import Link from 'next/link'

const Index = () => (
  <div className="hero">
    <h1>Essays</h1>
    <div>
      <Link href="/post0"><p>Post0</p></Link>
    </div>
    <style jsx global>{`
      p {
        margin-top: 0;
        font-size: calc(10px + 4vw);
        text-align: left;
        font-family: 'ITC Avant Garde Pro XLt', "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
        border-bottom: solid 1px #fffcf9;
        text-indent: 0;
        line-height: 1.6;
        margin-bottom: 0;
        padding-bottom: 0;
      }
      p:last-of-type {
        padding-bottom: 5px;
      }
      .hero {
        box-sizing: border-box;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        width: 100vw;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: 2.1rem;
        background-color: #000;
        color: #fffcf9;
      }

      h1 {
        font-size: 24vw;
        letter-spacing: -.7rem;
        text-align: left;
        line-height: 0.5;
        margin-left: -0.4rem;
        margin-bottom: 50px;
      }
      @media (min-width: 500px) {
        h1 {
          font-size: 15vw;
          margin-bottom: 50px;
        }
        p {
          font-size: calc(10px + 1vw);
        }
      }

    `}</style>
    <style jsx global>{`
    * {
      margin: 0;
      padding: 0;
      font: inherit;
      text-decoration: inherit;
      box-sizing: border-box;
      border: none;
      color: inherit;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border-radius: 0;
    }
    *:focus {
      outline: 0; 
    }
    
    body {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
          -ms-flex-direction: column;
              flex-direction: column;
      background-color: #fffcf9; 
    }
    
    html {
      font-size: 62.5%;
      background-color: black;
    }
    
    body {
      font-size: calc(1.5em + 1vw);
      /* currently ems cause chrome bug misinterpreting rems on body element */
      line-height: 1.2;
      font-weight: normal;
      font-family: 'ITC Avant Garde Pro Bold', "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
      color: #000;
      }
    `}</style>
  </div>
);

export default Index;
