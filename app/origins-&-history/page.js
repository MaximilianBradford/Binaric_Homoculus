import React from 'react';
import Link from 'next/link';
import styles from './history.module.css';

const HistoryPage = () => {
    // Historical events in chronological order
    const historyTimeline = [
        {
            year: "1943",
            title: "McCulloch-Pitts Neuron Model",
            description: "Warren McCulloch and Walter Pitts published their groundbreaking paper describing a logical calculus of neural networks, creating the first mathematical model of a neural network.",
            key: "neural-model"
        },
        {
            year: "1957",
            title: "Frank Rosenblatt's Perceptron",
            description: "Frank Rosenblatt publishes a paper on 'perceptrons', a revolutionary way to allow for machines to learn.",
            key: "perceptron"
        },
        {
            year: "1960",
            title: "The First Use of Neural Network like Systems",
            description: "Benard Widrow and Marcian Hoff of Standford made 2 neural network models, ADALINE and MADALINE. ADALINE could recognize binary patterns so it could predict the next bit in a sequence from a stream over a phoneline. MADALINE was used to create an adaptive filter that would cancel out echoes on phone lines.",
            key: "neural-start"
        },
        {
            year: "1969",
            title: "The Start of the AI winter",
            description: "The paper 'Perceptrons', published by Marvin Minksy, was a skeptical analysis of the limits of perceptrons, which preceded a general freeze on neural development that would last years.",
            key: "neural-winter"
        },
        {
            year: "1985",
            title: "Boltzmann Machines",
            description: "The paper 'A learning Algorithm for Boltzmann Machines', introducing the first stochastic (based on probability distribution) model for a learning network.",
            key: "bolztmann-machines"
        },
        {
            year: "1986",
            title: "Introduction of Backpropagation",
            description: "Backpropagation isa technique intitally reasearched in the 1960s by mutliple researchers. It was implemented to run on computers by Seppo Linnainmaa in 1970, and intially proposed in 1974 for use in neural networks by Paul Werbose. Its use becomes popular due to the paper 'Learning representations by back-propogating errors', written by David Rumelhart, Geoffrey Hinton, and Ronald Williams",
            key: "backpropagation"
        },
        {
            year: "1990",
            title: "Second Neural Network Winter",
            description: "Despite the promise it held, backpropagation also had a variety of errors that would interfere with a neural networks ability to learn. The development of Support Vector Machines, a mathemtically superior way to train a two layer neural net, took over.",
            key: "neural-winter-2"
        },
        {
            year: "2006",
            title: "Dawn of Deep Learning",
            description: "The paper 'A fast learning algorithm for deep belief nets' by Hinton, Simon Osindero, and Yee-Whye Teh recaptured interest in neural networks. The paper proposed that neural networks could be trained well if the intial weights were initialized cleverly instead of randomly, as had been the norm.",
            key: "deep-learning"
        },
        {
            year: "2012",
            title: "ImageNet Competition",
            description: "The ImageNet Large Scale Visual Recognition Challenge in 2012 was the moment when the potential of neural networks was realized. The winning team, comprised of Geoffrey Hinton, Alex Krizhevsky and Ilya Sutskever, used a combination of old and newly developed deep learning tactics to win the competition by mile. Their neural network finished the competition with an error rate of 15.3% as opposed to second place with an error rate of 26.2%.",
            key: "imagenet-competition"
        },
        {
            year: "2020-????",
            title: "Modern Innovations",
            description: "Neural Networks continue to be a large part of computer science, and modern day life. From voice and image recognition to the creation of LLMs (Large Language Models) neural networks are now a part of daily life for a large part of the population and continue to improve, for better or for worse.",
            key: "modern-day"
        },
    ];

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

            <section className="ornate-border my-12 content-center">
                <h1>Origins & History</h1>
                <p className="text-xl mb-6">The intellectual journey of neural networks through decades of research and innovation</p>
            </section>

            <div className="gothic-card content-center">
                <div className={styles.historyContainer}>
                    <p className={styles.introduction}>
                        The concept of the Binaric Homunculus represents a convergence of multiple intellectual traditions spanning decades of computational theory, neuroscience, and artificial intelligence research. This timeline traces the key developments that led to our current understanding.
                    </p>

                    <div className={styles.timeline}>
                        {historyTimeline.map((event) => (
                            <div key={event.key} className={styles.timelineEvent}>
                                <div className={styles.timelineMarker}>
                                    <div className={styles.timelineYear}>{event.year}</div>
                                    <div className={styles.timelineDot}></div>
                                </div>
                                <div className={styles.timelineContent}>
                                    <h3 className="gothic-icon">{event.title}</h3>
                                    <p>{event.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                
                    <div className="divider"></div>
                
                    <div className="content-center">
                        <h2>A Neural Nebula</h2>
                        <p>
                            The history of this field continues to evolve as new research and applications emerge. Despite being around for such a short time, neural networks are being woven into the fabric of our daily life. As such, it is integral for anyone to learn how they work at the most fundamental levels.
                        </p>
                        <div className="button">
                            <Link href="/core-principles">Learn More About Neural Networks →</Link>
                        </div>
                    </div>
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

export default HistoryPage;