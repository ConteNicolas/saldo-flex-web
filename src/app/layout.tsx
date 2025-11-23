import "./globals.css";
import { ComfortaaFont } from "@/shared/fonts/comfortaa.font";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ComfortaaFont.className} h-screen w-screen`}
      >
        {children}
      </body>
    </html>
  );
}
