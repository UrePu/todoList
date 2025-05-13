import TQProvider from "@/lib/provider/TQprovider";
import "./globals.css";
import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "나의 투두 앱",
  description: "할 일을 쉽게 관리하는 웹 애플리케이션입니다.",
};

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
          <main className="p-4">{children}</main>
        </TQProvider>
      </body>
    </html>
  );
}
