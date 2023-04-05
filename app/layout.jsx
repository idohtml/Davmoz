import Navbar from "./Navbar";
import "./globals.css";

export const metadata = {
  title: "Davmoz | IoT research engineer",
  description:
    "Welcome. My name is David and this is my personal page where i upload my projects, configurations and other items related to development. More about me here.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
