import React from 'react';
import Link from 'next/link';

const SourcesPage = () => {
  return (
            <div className="container">
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
      
      <section className="ornate-border my-8 content-center">
        <h1>Sources & References</h1>
        <p className="text-xl mb-4">Academic foundations supporting our exploration</p>
      </section>

      <div className="gothic-card content-center">
        <h2>Primary References</h2>
        <div className='divider my-2'/>
        
        <ul className="resource-list" style={{ listStyleType: 'none', paddingLeft: '1rem' }}>
          <li style={{ marginBottom: '1rem' }}>
            <span className="gothic-icon">✧</span> Karpathy, A. (n.d.). ConvNetJS: Deep Learning in Your Browser. Stanford University.
            <br />
            <a 
              href="https://cs.stanford.edu/people/karpathy/convnetjs/demo/classify2d.html" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}
            >
              https://cs.stanford.edu/people/karpathy/convnetjs/demo/classify2d.html
            </a>
          </li>
          
          <li style={{ marginBottom: '1rem' }}>
            <span className="gothic-icon">✧</span> Nielsen, M. A. (2015). Neural Networks and Deep Learning. Determination Press.
            <br />
            <a 
              href="http://neuralnetworksanddeeplearning.com/chap1.html" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}
            >
              http://neuralnetworksanddeeplearning.com/chap1.html
            </a>
          </li>
          
          <li>
            <span className="gothic-icon">✧</span> Skynet Today. (n.d.). A Brief History of Neural Networks and Deep Learning.
            <br />
            <a 
              href="https://www.skynettoday.com/overviews/neural-net-history" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}
            >
              https://www.skynettoday.com/overviews/neural-net-history
            </a>
          </li>
        </ul>
      </div>
      <footer className="border-t border-[var(--color-gold)] mt-12 py-6">
        <div className="container text-center">
          <p className="text-[var(--color-stone)]">© {new Date().getFullYear()} The Binaric Homoculus Institute</p>
        </div>
      </footer>
    </div>
  );
};

export default SourcesPage;