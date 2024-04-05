import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next';
import React, { ReactNode } from 'react';

export const metadata: Metadata = {
  title: "VISCON - Online Meeting Platform",
  description: "VISCON is an online meeting platform that allows you to connect with your team and clients from anywhere in the world.",
  icons: {
    icon: "/icons/logo.svg",
  }
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
  )
}

export default RootLayout
