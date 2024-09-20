import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SessionWrapper from "./components/sessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get me A Chai - Fund your projects",
  description: "This website is a crowdfunding for Creators ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <SessionWrapper>
          <NavBar />
          <div
            className="min-h-[85vh]  bg-[#000000]
          bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white"
          >
            {children}
          </div>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
