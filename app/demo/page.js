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
        <h1>Neural Network Visualization</h1>
        <p className="text-xl mb-4">Observe a neural network learning to recreate an image</p>
      </section>

      {/* Full-width demo section */}
      <div className="gothic-card content-center">
        <h2>Interactive Demo</h2>
        <div className='divider'/>
        
        <p>
          Below is an interactive demo from ConvNetJS that demonstrates how neural networks perform complex tasks like image reconstruction. In this example, the neural network has been set up to take the x,y coordinates of each point in the image as input and learn to predict the corresponding RGB color values. As training progresses, you can watch the network gradually improve its ability to recreate the target image. This visualization shows how neural networks can learn patterns from spatial data through incremental optimization.
        </p>
      </div>
      
      {/* Dedicated full-width iframe container with background */}
      <div className="my-4" style={{ 
        border: 'var(--border-ornate)',
        boxShadow: 'var(--shadow-ornate)',
        height: '800px',
        overflow: 'hidden',
        borderRadius: '4px',
        backgroundColor: 'var(--color-dark)',
        padding: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <iframe 
          src="https://cs.stanford.edu/people/karpathy/convnetjs/demo/image_regression.html" 
          width="98%" 
          height="98%" 
          frameBorder="0"
          title="Neural Network Image Regression Demo"
          style={{ 
            overflow: 'hidden',
            backgroundColor: '#fff',
            boxShadow: 'var(--shadow-ornate)'
          }}
        />
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