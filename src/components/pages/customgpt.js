import React from 'react';
import '../../App.css';
import '../Informative.css'
import { Button3 } from '../Button3';

function Customgpt() {
  return (
    <div className="project-page">
      <div className="project-image-card">
        <img src="/images/customgpt.jpg" alt="customgpt" />
        <img src="/images/customgpt2.jpg" alt="customgpt2" />
      </div>

      <div className="project-description">
        <h2>Custom LLM with chatGPT</h2>
        <p>
          ChatGPT, the most famous generative AI at this time, served as inspiration for this project. We used custom data and tailored prompting techniques to develop a custom GPT model specifically for our purposes.
        </p>
        <p>
          In this project, we used ChatGPT to predict the stocking trends of a company and recommend optimal order quantities. The model is trained on foundational data, which we cleaned and inputted, ensuring accurate and reliable predictions for managing inventory effectively.
        </p>
        <p>
          The results have been quite mesmerizing. ChatGPT was able to accurately predict all the test data simply by analyzing the training set. This project highlights the effectiveness of prompting techniques and demonstrates a deep understanding of how a large language model (LLM) can be utilized for predictive tasks.
        </p>
        <div className='button-container'>
          <Button3 buttonStyle='btn--primary' buttonSize='btn--large'>
            Back to Projects
          </Button3>
        </div>
      </div>
    </div>
  );
}

export default Customgpt;