import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <title>Rick and Morty Karakterleri</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
