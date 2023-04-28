import { LinksFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";
import Navigation from "./components/navigation";
import { useEffect, useState } from "react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];
export default function App() {
  const [daytime, setDaytime] = useState("");
  useEffect(() => {
    const date = new Date();
    const hours = date.getHours();

    if (hours > 5 && hours < 11) {
      setDaytime("backgroundmorning");
      console.log("morning");
    } else if (hours > 11 && hours < 15) {
      setDaytime("backgroundnoon");
      console.log("noon");
    } else if (hours > 15 && hours < 21) {
      setDaytime("backgroundnight");
      console.log("evening"); //
    } else {
      setDaytime("backgroundnoon"); //6-12
      console.log("night");
    }
  }, [daytime]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className={daytime}>
        <Navigation />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
