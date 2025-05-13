import TQProvider from "@/lib/provider/TQprovider";
import "./globals.css";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <TQProvider>
          <Header />
          <div className="p-4">{children}</div>
        </TQProvider>
      </body>
    </html>
  );
}
