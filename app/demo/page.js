'use client'
import React from 'react';
import Link from 'next/link';

const DemoPage = () => {
  return (
    <div className="container">
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
      
      <section className="ornate-border my-8 content-center">
        <h1>ASL Translation Demo</h1>
        <p className="text-xl mb-4">Experience neural networks translating sign language</p>
      </section>

      <div className="gothic-card content-center">
        <h2>American Sign Language Translator</h2>
        <div className='divider my-2'/>
        
        <div className="content-section-vertical">
          <p>
            This demo showcases a practical application of neural networks: an American Sign Language (ASL) 
            translator that can identify hand gestures and convert them to English text. The system uses 
            neural network principles to recognize patterns in hand positions and movements.
          </p>
          
          <div className="image-container-full">
            <img
              src="/images/Picture1.png"
              alt="ASL Alphabet Examples"
              className="neural-image"
            />
          </div>
          
          <h3 className="gothic-icon mb-1">Features</h3>
          <ul className="feature-list">
            <li>Real-time identification of ASL hand signs</li>
            <li>Translation of ASL gestures to English text</li>
            <li>Interactive spelling game to practice ASL</li>
          </ul>
        </div>
      </div>

      <div className="gothic-card content-center" style={{ marginTop: '1.5rem' }}>
        <h2>Try the Demo</h2>
        <div className='divider my-2'/>
        
        <div className="content-center">
          <p>
            The ASL translation demo is available through our GitHub repository. Click the button 
            below to access the demo and learn how to spell words using American Sign Language.
          </p>
          
          <a 
            href="https://github.com/MaximilianBradford/SLNeuralNetwork" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="github-button"
          >
            Access ASL Translation Demo →
          </a>
        </div>
      </div>
      
      <footer className="border-t border-[var(--color-gold)] mt-12 py-6">
        <div className="container text-center">
          <p className="text-[var(--color-stone)]">© {new Date().getFullYear()} The Binaric Homoculus Institute</p>
        </div>
      </footer>
    </div>
  );
};

export default DemoPage;