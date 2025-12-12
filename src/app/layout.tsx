import "./globals.css";
import { ComfortaaFont } from "@/shared/fonts/comfortaa.font";
import MainProvider from "@/shared/providers/main-provider";

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
        <MainProvider>
          {children}
        </MainProvider>
      </body>
    </html>
  );
}
