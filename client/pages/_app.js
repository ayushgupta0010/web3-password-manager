import Head from "next/head";
import { PasswordManagerProvider } from "../context/PasswordManagementContext";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <link
        href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
        rel='stylesheet'
      />
      <title>Web3 Password Manager</title>
    </Head>
    <PasswordManagerProvider>
      <Component {...pageProps} />
    </PasswordManagerProvider>
  </>
);

export default MyApp;
