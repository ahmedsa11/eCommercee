import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import Layout from "../components/layout";
import "font-awesome/css/font-awesome.min.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import store from "../store";
import { Provider } from "react-redux";
import "/node_modules/swiper/modules/navigation/navigation.min.css";
import "/node_modules/swiper/swiper.min.css";
import "/node_modules/swiper/modules/scrollbar/scrollbar.min.css";
import "/node_modules/swiper/modules/pagination/pagination.min.css";
import { SSRProvider } from "react-bootstrap";
function MyApp({ Component, pageProps }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  if (!show) {
    return null;
  } else {
    return (
      <>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"
          />
        </Head>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossOrigin="anonymous"
        />
        <SSRProvider>
          <Provider store={store}>
            <Layout>
              <div className="content-wraper" style={{ flex: "auto" }}>
                <Component {...pageProps} />
              </div>
            </Layout>
          </Provider>
        </SSRProvider>
      </>
    );
  }
}

export default MyApp;
