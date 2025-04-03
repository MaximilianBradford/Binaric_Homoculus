import React from 'react';
import './globals.css';

const FrontPage = () => {
  const sections = [
    { 
      title: 'Origins & History', 
      content: 'Explore the ancient beginnings and historical evolution through the ages.',
      icon: '🏛️'
    },
    { 
      title: 'Core Principles', 
      content: 'Understand the fundamental concepts that form the foundation of this knowledge.',
      icon: '✧'
    },
    { 
      title: 'Demo', 
      content: 'Discover how these timeless principles apply to contemporary challenges.',
      icon: '⚙️'
    },
  ];

  return (
    <div className="min-h-screen">
      <header className="page-header">
  <nav className="main-nav">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/origins-&-history">History</a></li>
      <li><a href="/core-principles">Neural Networks</a></li>
      <li><a href="/demo">Demo</a></li>
      <li><a href="/sources">Sources</a></li>
    </ul>
  </nav>
</header>

      <main className="container ">
        {/* Hero Section */}
        <section className="ornate-border my-12 text-center content-center">
          <h1>The Binaric Homoculus</h1>
          <p className="text-xl mb-6">Unveiling the hidden knowledge of how computer can be made Man</p>
          <p>Thinking is not only the right of humans</p>
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