import DoraState from "@/src/Context";
import DoraHead from "@/src/layout/DoraHead";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <DoraState>
      <DoraHead />
      <Component {...pageProps} />
    </DoraState>
  );
}
