import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from '@/store/provider';
import { SocketProvider } from '../context/SocketContext';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '말랑연구소',
  description: 'Generated by Next.js',
  icons: {
    icon: '/icon.ico',
  },
};

// <Check> 컴포넌트를 동적으로 로드
const Check = dynamic(() => import('../components/common/Check'), {
  ssr: false, // 서버측에는 렌더링하지 않음
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    // redux 적용
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="%PUBLIC_URL%/icon.ico" />
      </head>
      <body className="text-black">
        <Providers>
          {/* <Check /> */}
          <SocketProvider>{children}</SocketProvider>
        </Providers>
      </body>
    </html>
  );
}
