import TQProvider from "@/lib/provider/TQprovider";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <TQProvider>{children}</TQProvider>
      </body>
    </html>
  );
}
