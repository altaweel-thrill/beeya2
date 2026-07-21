import "./globals.css";

export const metadata = {
  title: "Beeya | الروابط الرسمية",
  description: "TikTok وInstagram والموقع والتواصل الرسمي مع Beeya.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
