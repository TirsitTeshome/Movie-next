

import "./globals.css";
import {Nunito} from "next/font/google";

const nunito = Nunito ({
  subsets: ['latin'],
  weight: ['300', '600', '800'],
})


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, backgroundColor: "#181818", color: "white", fontFamily: "Nunito, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
