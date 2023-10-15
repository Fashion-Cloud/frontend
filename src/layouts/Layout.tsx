import React from 'react';

export default function Layout({
  children,
  isWhiteBg = false,
}: {
  children: React.ReactNode;
  hasMargin?: boolean;
  isWhiteBg?: boolean;
}): JSX.Element {
  return (
    <>
      <header className="bg-white tablet:flex justify-center"></header>
      <div
        className={`flex flex-1 flex-col ${
          isWhiteBg ? 'bg-white' : 'bg-white'
        } `}
      >
        <main className="relative flex flex-1 flex-col">{children}</main>
      </div>
      <footer className="flex justify-center"></footer>
    </>
  );
}
