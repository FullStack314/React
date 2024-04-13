### React
> - Each part is an independent app
> - AI Assistant Job Flow Automator. 
> - Automate the customization of cover letters tailored to your resume and the unique requirements outlined in the job description extracted.

<div align="center">

<a href='https://www.hypech.com'>
<img src="./images/lib.png" alt="AI-Powered Cover Letter"></img></a>
<br></br>

[![python](https://img.shields.io/badge/Python-3.12-3776AB.svg?style=flat&logo=python&logoColor=white)](https://www.python.org)
[![jupyter](https://img.shields.io/badge/Jupyter-Lab-F37626.svg?style=flat&logo=Jupyter)](https://jupyterlab.readthedocs.io/en/stable)
[![tensorflow](https://img.shields.io/badge/TensorFlow-1.12-FF6F00.svg?style=flat&logo=tensorflow)](https://www.tensorflow.org)
[![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&logoColor=white)](https://github.com/pre-commit/pre-commit)
[![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)
[![pydocstyle](https://img.shields.io/badge/pydocstyle-enabled-AD4CD3)](http://www.pydocstyle.org/en/stable/)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![GitHub Release](https://img.shields.io/github/v/release/aiXpertLab/AI-Powered-Automatically-Customize-Cover-Letter)](https://github.com/aiXpertLab/AI-Powered-Automatically-Customize-Cover-Letter/releases)
[![GitHub Release Date](https://img.shields.io/github/release-date/aiXpertLab/AI-Powered-Automatically-Customize-Cover-Letter)](https://github.com/aixpertlab/)
 
[![Official Website](<https://img.shields.io/badge/-Visit%20the%20Official%20Website%20%E2%86%92-rgb(21,204,116)?style=for-the-badge>)](https://hypech.com)

[![jhc linkedin](https://img.shields.io/badge/Linkedin-aiXpert-5087B2.svg?style=flat&logo=Linkedin)](https://www.linkedin.com/in/aiXpert)
[![jhc twitter](https://img.shields.io/badge/Twitter-@aiXpertLab-00aced.svg?style=flat&logo=twitter)](https://twitter.com/aiXpertLab)
[![YouTube Channel Subscribers](https://img.shields.io/youtube/channel/subscribers/UCNcmE7uHam8jSLSa8CvMgQQ)](https://www.youtube.com/@aiXpertLab)
[![jhc fb](https://img.shields.io/badge/Facebook-aiXpertLab-5087B2.svg?style=flat&logo=facebook)](https://www.facebook.com/aiXpertLab/)
[![jhc gmail](https://img.shields.io/badge/Gmail-aiXpertLab@gmail.com-5087B2.svg?style=flat&logo=gmail)](https://gmail.com)

</div> 

The AI-powered solution enables customers to integrate their specialized knowledge with OpenAI models to automate the extraction of relevant information from websites of their interest, effectively training the AI to deliver tailored results as if it were trained on their unique dataset.

1. [Create a React App](#CreateReact)
2. [Powered by Python](#architecture)
3. [Intuitive User Interface](#architecture)

You will get Unlock Your Personalized AI Assistant Effortlessly: Scrape, Upload, and Go.

# 1. Create React

Create a React App in local webserver. 
``` 
npm create vite@latest part1 -- --template react 
cd part1
npm install     //install all the dependencies in web server
npm run dev     //run webserver locally
```
<img src="./images/vite.png" alt="AI-Powered Cover Letter"></img></a>
When you use a fragment (<>...</>), React does not add any extra elements to the DOM, resulting in cleaner HTML output without additional nesting. However, when you don't use a fragment and don't provide a parent element explicitly, React automatically adds a `<div>` wrapper around the elements to satisfy the requirement of having a single parent element.

So, in terms of the resulting HTML structure, the only difference is the presence or absence of the `<div>` wrapper. Both approaches are valid, but using a fragment can lead to cleaner JSX code and simpler HTML output in certain situations.

### 1.1 JSX
It seems like React components are returning HTML markup. However, this is not the case. The layout of React components is mostly written using JSX. Although JSX looks like HTML, we are dealing with a way to write JavaScript. Under the hood, **JSX returned by React components is compiled into JavaScript **.

The compilation is handled by Babel. Projects created with create-react-app or vite are configured to compile automatically. 

In practice, JSX is much like HTML with the distinction that with JSX you can easily embed dynamic content by writing appropriate JavaScript within curly braces. The idea of JSX is quite similar to many templating languages, such as Thymeleaf used along with Java Spring, which are used on servers.

Writing components with React is easy, and by combining components, even a more complex application can be kept fairly maintainable. Indeed, a core philosophy of React is composing applications from many specialized reusable components.

### 1.2 props: passing data to components
Do not render objects.

### 1.3 Component state, event handlers
`import { useState } from 'react':` This line imports the useState **hook** from the react library.
``` 
const App = (props) => {
  const {counter} = props
  return (
    <div>{counter}</div>
  )} 

export default App
```
refactor:
```
const App = (props) => {
  const counter = props.counter; // Accessing the 'counter' property directly
  return (
    <div>{counter}</div>
  );
};
```

# 2. Communicating with server
```
const addNote = (event) => {
  event.preventDefault()
  console.log('button clicked', event.target)
}
```
The event parameter is the event that triggers the call to the event handler function:

The event handler immediately calls the event.preventDefault() method, which prevents the default action of submitting a form. The default action would, among other things, cause the page to reload.



# Technology Stack

1. OpenAI Assistant ChatGPT
2. Python
3. Selenium WebDriver

Selenium will facilitate various tasks such as navigating between pages, completing forms (e.g., login credentials), clicking links, and scrolling down. Apart from data scraping, Selenium will be instrumental in automating the outlined steps to manage actions until accessing the pages for data extraction. We will extract job offers and job descriptions.

Utilizing ChatGPT, known for its professional assistance, and leveraging your own resume as a knowledge base, ChatGPT will generate tailored resumes.

Python serves as the intermediary connecting the website, ChatGPT, and your personal information. Tkinter GUI is employed to provide a user-friendly interface.

# Quick start

1. Python 3.12.2
2. Selenium & chromedriver installed (watch how in this one).
https://chromedriver.chromium.org/

## Requirements

- `python-dotenv`
- `openai`
- `selenium`

------------------Video Instruction---------------------

[Yourtube](https://youtu.be/TlnytEi2lD8?si=jfcDj2MZqBptziZc)

```bash
pip install -r requirements.txt
```
# Part1

# Contribution

https://www.linkedin.com/pulse/automate-your-job-search-personalized-cover-letters-powered-leo-reny-elbye

> [!WARNING]  
> **Website Scraping Policy**
> 
> This project utilizes web scraping techniques to gather data from various websites. It's important to note that not all websites allow scraping, and some may have strict policies against it.
>
> **Before using this project**
>
> Take the time to carefully read and understand the scraping policies of each website from which you intend to scrape data. These policies can usually be found in the website's terms of service or robots.txt file.
>
> **Comply with Policies** 
>
>Ensure that you comply with the scraping policies of each website. Violating these policies could lead to consequences such as account restrictions, IP bans, or legal action.

> [!NOTE] 
> **Disclaimer**
> 
>This project is provided for general-purpose use, and we do not take responsibility for any consequences resulting from the misuse of web scraping techniques. Users are solely responsible for ensuring compliance with website scraping policies and any associated risks.

