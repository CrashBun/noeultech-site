export const metadata = {
  title: 'NoeulTech',
  description: '자동화 장비 설계·제작·납품 — 노을테크',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
