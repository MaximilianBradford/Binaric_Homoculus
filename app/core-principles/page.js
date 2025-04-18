import React from 'react';
import Link from 'next/link';

const NeuralNetworkPage = () => {
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
                <h1>Neural Networks</h1>
                <p className="text-xl mb-4">The transference of thinking from man to machine</p>
            </section>

            {/* Section 1 - Neural Network Structure */}
            <div className="gothic-card content-center">
                <div className='divider my-2' />
                <h2>Neural Network Structure</h2>
                <div className='divider my-2' />
                
                <div className='content-row'>
                    <div className="image-container">
                        <img
                            src="https://miro.medium.com/v2/resize:fit:645/1*NWJOrzrrp3VVxoMxDXSkSg.png"
                            alt="Neural Network Structure"
                            className="neural-image"
                        />
                    </div>
                    <div className="content-text">
                        <h3 className="gothic-icon mb-1">Neurons</h3>
                        <p>
                            Neurons are the basic units of a neural network. A single neuron is a function that takes a series of inputs 
                            then outputs a value. The basic type of neuron, a perceptron, uses a simple step function and outputs either one or zero
                            depending on the inputs. This allows for the network to adapt to given data by changing the input of the function until
                            the desired result can be reached.
                        </p>
                    </div>
                </div>
                
                <div className="divider my-2"/>
                
                <div className='content-row'>
                    <div className="content-text">
                        <h3 className="gothic-icon mb-1">Network Layers</h3>
                        <p>
                            Neural networks consist of multiple layers of neurons that process information sequentially.
                            There are 3 main layers, the input, hidden and output layers. The input layer takes in the raw data which is then
                            processed through the hidden layers before arriving at the output layers. Each layer transforms the data, extracting increasingly complex features as information flows
                            through the network. 
                        </p>
                    </div>
                    <div className="image-container">
                        <img
                            src="https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/cdp/cf/ul/g/3a/b8/ICLH_Diagram_Batch_01_03-DeepNeuralNetwork.png"
                            alt="Neural Network Layers"
                            className="neural-image"
                        />
                    </div>
                </div>
                
                <div className="content-section">
                    <h3 className="gothic-icon mb-1">Weights and Biases</h3>
                    <p>
                        Neural networks cannot simply process data by dark arts, or so they say. In order for a neural network to 
                        be able to learn, it needs to be able to judge the data it receives. Weights are applied to inputs and determine 
                        how likely an input is to fire a neuron. Biases act as threshold adjustments for each neuron - Biases are applied to the neurons themselves, and act as a measure of how 
                        likely a neuron is to fire regardless of input. In order to learn the most optimal path for any given data, both weights and biases are adjusted over 
                        a series of trials called epochs to determine the most optimal solution.
                    </p>
                </div>
            </div>

            {/* Additional Section - How Neural Networks Learn */}
            <div className="gothic-card content-center" style={{ marginTop: '1.5rem' }}>
                <h2>How Neural Networks Learn</h2>
                <div className='divider my-2'/>
                
                <div className='content-section'>
                    <h3 className="gothic-icon mb-1">Activation Function</h3>
                    <p>
                        Activation functions are the most fundamental part of how a neural network learns. By changing the weights and biases, neurons
                        produce different outputs which cascade into new inputs for the next layer of neurons. This allows for the system to produce
                        different outputs from different inputs, due to the non-linear nature of the system.
                    </p>
                    <p>
                        There are a variety of functions used for this purpose like the sigmoid function. Sigmoid neurons use this function to 
                        return values from 0 to 1, preventing small differences in output from causing large changes to the system.
                    </p>
                    <div className="image-container">
                        <img
                            src="https://nishantmunjal.com/wp-content/uploads/2024/07/activation-fun.webp"
                            alt="Sigmoid Neurons"
                            className="neural-image"
                        />
                    </div>
                </div>
                
                <div className='divider my-2'/>
                
                <div className='content-section'>
                    <h3 className="gothic-icon mb-1">Training and Training Data</h3>
                    <p>
                        Neural network training requires precision and careful preparation of data. The available dataset is divided into two parts: 
                        a comprehensive set of training data, which contains examples for the network to learn from, and test data used to evaluate 
                        the network&apos;s performance. The training process runs for a predetermined number of iterations called epochs. During each epoch, 
                        the network processes the training data through its current structure with specific weights and biases. After processing, 
                        it evaluates its performance against the test data and calculates the error. The network then adjusts its weights and biases 
                        before initiating another epoch. This cycle continues until the designated number of epochs is reached, gradually refining 
                        the network&apos;s accuracy.
                    </p>
                    <div className="image-container">
                        <img
                            src="https://i.makeagif.com/media/7-23-2019/q3ItDm.gif"
                            alt="Gradient Descent"
                            className="neural-image"
                        />
                    </div>
                </div>
                
                <div className='divider my-2'/>
                
                <div className='content-section'>
                    <h3 className="gothic-icon mb-1">Error and adjustments</h3>
                    <p>
                        In order to allow for meaningful change during training, neural networks use two important mechanisms: 
                        Gradient Descent and Backpropagation. Gradient Descent is a function whose purpose is to minimize error 
                        within the system. It works through a series of calculations designed to find the weights and biases 
                        that minimize the total error, making the system more accurate. 
                    </p>
                    <p>
                        Backpropagation is used to dynamically update weights and biases from epoch to epoch. It works by 
                        iterating backwards through each layer of the neural network, first computing the outputs of neurons, 
                        then determining the error, and finally adjusting the neurons to minimize the calculated error. This 
                        process repeats for each epoch, gradually reducing the error until either the predetermined number of 
                        epochs is complete or the system reaches an acceptable level of accuracy. This is how neural networks 
                        create a dynamic and adaptable system inspired by the human brain.
                    </p>
                    <figure className="image-figure">
                        <div className="image-container">
                            <img
                                src="https://miro.medium.com/v2/resize:fit:956/1*hUd744hDEEGx0-ypWGhrkw.gif"
                                alt="Gradient Descent"
                                className="neural-image"
                            />
                        </div>
                        <figcaption className="image-caption">3D Representation of Gradient Descent</figcaption>
                    </figure>
                </div>
                
                <div className='divider my-2'/>
                
                <div className='content-section'>
                    <h3 className="gothic-icon mb-1">Challenges to Learning</h3>
                    <p>
                        Neural Networks can be extremely adaptive and useful tools, but also very wasteful if not properly managed. This occurs when a neural network has reached a maximum point of learning and cannot
                        progress beyond that point regardless of computation. The network is overtraining or &apos;Overfitting&apos;. At this point the network is not learning about the data to be processed but overanalyzing the
                        training data. This can cripple the network, as it becomes too &apos;familiar&apos; with the training data. Instead of learning patterns, it begins to focus on noise and irrelevant flucations in the training data.
                        Signs of overfitting are the accuracy percent plateauing, increases in cost to learn, and 100% accuracy with the training set while the validation percent drops. 
                    </p>
                    <div className="image-container">
                        <img
                            src="https://www.jeremyjordan.me/content/images/2017/07/Screen-Shot-2017-07-25-at-3.55.30-PM.png"
                            alt="Overfitting Visualization"
                            className="neural-image"
                        />
                    </div>
                    <p> 
                        Overfitting can be combatted with a variety of &apos;Regularization&apos; techniques that prevent this. The simplest way
                        to do this is to simply increase the data for the network, but that is only feasible up to a certain point. A more effective solution is
                        &apos;Weight Decay&apos; or L2 regularization, where the equations that comprise the network are altered to prefer smaller weights, provided they still minimize the overall cost
                        of computation. There is also L1 regularization, which is similar to weight decay but decreases the weights in a more intentional manner to better make small changes to
                        the network, even altering weights to precisely 0. Drop-out Regularization deactivates a certain amount of neurons each training iteration
                        to average out the learning of the system. The final method is Data Augmentation, which is altering the available data in a small way which would force the network to learn how to process it,
                        which can artificially increase the amount of data to train the network on.
                    </p>
                    <div className="image-container">
                        <img
                            src="https://production-media.paperswithcode.com/methods/Screen_Shot_2020-05-23_at_6.19.24_PM.png"
                            alt="Drop-out Regularization"
                            className="neural-image"
                        />
                    </div>
                </div>
            </div>
            
            {/* Types of Neural Networks section */}
            <div className="gothic-card content-center" style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                <h2>Types of Neural Networks</h2>
                <div className='divider my-2'/>
                
                <div className='content-row'>
                    <div className="content-text">
                        <h3 className="gothic-icon mb-1">Feedforward</h3>
                        <p>
                            Feedforward neural networks are one of the most common and easy to understand. Feedforward neural networks always feed information forward.
                            The input and output are entirely independent of each other and feedback loops are impossible. This architecture excels at pattern 
                            recognition tasks and classification problems where historical context isn&apos;t needed.
                        </p>
                    </div>
                    <div className="image-container">
                        <img
                            src="https://miro.medium.com/v2/resize:fit:1400/1*3fA77_mLNiJTSgZFhYnU0Q.png"
                            alt="Feedforward Neural Network"
                            className="neural-image"
                        />
                    </div>
                </div>
                
                <div className='divider my-2'/>
                
                <div className='content-row'>
                    <div className="content-text">
                        <h3 className="gothic-icon mb-1">Recurrent</h3>
                        <p>
                            Recurrent neural networks are a type of network where the output is fed back into the network to process sequential data. 
                            These networks contain loops that allow information to persist, creating a form of memory. They are used for applications 
                            such as handwriting recognition, natural language processing, and time series prediction.
                        </p>
                    </div>
                    <div className="image-container">
                        <img
                            src="https://miro.medium.com/v2/resize:fit:375/1*chs1MCz2rCK4_dFRLnUEIg.png"
                            alt="Recurrent Neural Network"
                            className="neural-image"
                        />
                    </div>
                </div>
                
                <div className='divider my-2'/>
                
                <div className='content-row'>
                    <div className="content-text">
                        <h3 className="gothic-icon mb-1">Convolutional</h3>
                        <p>
                            Convolutional Neural Networks (CNNs) are specialized for processing grid-like data such as images. 
                            They use mathematical operations called convolutions to extract features from input data. CNNs automatically 
                            learn spatial hierarchies of features through multiple layers that mimic how the visual cortex processes images. 
                            They&apos;re predominantly used in computer vision tasks like image recognition, object detection, and facial recognition.
                        </p>
                    </div>
                    <div className="image-container">
                        <img
                            src="https://miro.medium.com/v2/resize:fit:1400/1*vkQ0hXDaQv57sALXAJquxA.jpeg"
                            alt="Convolutional Neural Network"
                            className="neural-image"
                        />
                    </div>
                </div>
            </div>
            
            {/* Transition to Demo */}
            <div className="gothic-card content-center demo-card" style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                <div className="divider"></div>
                
                <div className="content-center">
                    <h2>Neural Networks in Action</h2>
                    <p className="demo-text">
                        Now that you understand the theoretical foundations of neural networks, you can witness these principles
                        applied in practice. Our interactive demonstration allows you to observe a neural network&apos;s learning process
                        in real-time, providing insight into how these digital minds evolve and adapt.
                    </p>
                    <div className="button">
                        <Link href="/demo">Explore the Demo →</Link>
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

export default NeuralNetworkPage;