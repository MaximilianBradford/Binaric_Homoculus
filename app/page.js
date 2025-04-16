import React from 'react';
import './globals.css';
import Link from 'next/link';

const FrontPage = () => {
  const sections = [
    { 
      title: 'Origins & History', 
      content: 'Explore the evolution of neural networks in the 20th century.',
      icon: '🏛️'
    },
    { 
      title: 'Core Principles', 
      content: 'Understand the fundamental concepts that form the foundation of neural networks.',
      icon: '✧'
    },
    { 
      title: 'Demo', 
      content: 'Download the demo to see how to implement a neural network yourself.',
      icon: '⚙️'
    },
  ];

  return (
    <div className="min-h-screen">
      <header className="page-header">
  <nav className="main-nav">
    <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/origins-&-history">History</Link></li>
      <li><Link href="/core-principles">Neural Networks</Link></li>
      <li><Link href="/demo">Demo</Link></li>
      <li><Link href="/sources">Sources</Link></li>
    </ul>
  </nav>
</header>

      <main className="container ">
        {/* Hero Section */}
        <section className="ornate-border my-12 text-center content-center">
          <h1>The Binaric Homoculus</h1>
          <p className="text-xl mb-6">Unveiling the Hidden Knowledge of how Computer can be made to Think</p>
          {/* <div className="divider" /> */}
        </section>

        {/* Introduction */}
        <section className="my-12">
          <div className="gothic-card">
            <h2>Illuminating the Digital Consciousness</h2>
            <p>With the advent of LLMs and the use of ai in many sectors, it might tickle our non-binaric brains sense of curiosity about these technologies. How does ai work, and how did these systems come to be?</p>
            <p>This website endeavors to inform the fascinating and interesting results of our desire to replicate our own intelligence in machines, a binaric homoculus.</p>
          </div>
        </section>

        {/* Key Information Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          {sections.map((section) => (
            <div key={section.title} className="gothic-card content-center">
              <h3><span className="gothic-icon">{section.icon}</span>{section.title}</h3>
              <p>{section.content}</p>
              <a href={`/${section.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm uppercase tracking-widest">Explore →</a>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t border-[var(--color-gold)] mt-12 py-6">
        <div className="container text-center">
          <p className="text-[var(--color-stone)]">© {new Date().getFullYear()} The Binaric Homoculus Institute</p>
        </div>
      </footer>
    </div>
  );
};

export default FrontPage;