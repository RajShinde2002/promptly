import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import favicon from "@public/assets/images/logo.svg"

export const metadata = {
  title: "Promptly",
  description: "Discover & Share AI Prompts",
  icons: {icon:"@public/assets/images/logo.svg"}
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;