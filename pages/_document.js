import Document, { Html, Head, Main, NextScript } from "next/document";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Kieran Muller</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Portfolio</Nav.Link>
                <Nav.Link href="/link">Link</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
