import './globals.css';

export const metadata = {
  title: 'Speak Live Go — Practice English. Speak with confidence.',
  description:
    'Talk to real people worldwide, take AI-scored IELTS speaking mocks and chat with an AI tutor that corrects you in your own language. Free to start.',
  icons: { icon: '/logo.png' },
  openGraph: {
    title: 'Speak Live Go',
    description:
      'Live English speaking practice + AI Coach (IELTS mock, AI tutor).',
    images: ['/logo.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
