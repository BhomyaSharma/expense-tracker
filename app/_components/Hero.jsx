"use client";
import React from 'react'
import Image from "next/image";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LandingPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-pink-600 text-white text-center py-20">
        <h1 className="text-4xl font-extrabold">Track Your Expenses Effortlessly</h1>
        <p className="mt-4 text-lg">Stay in control of your finances with our intuitive expense tracker.</p>
        <button className="mt-6 bg-white text-pink-600 px-6 py-3 rounded-lg font-bold hover:bg-pink-200">
          Get Started
        </button>
      </section>
      {/* newww  */}

      <section
        className="relative bg-[url(https://img.freepik.com/premium-vector/flat-design-abstract-aesthetic-pink-background-web-banner-card-template_633581-13.jpg?w=1800)] bg-cover bg-center bg-no-repeat"
      >
        <div
          className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div>

        <div
          className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
              Manage Your Expense
              <strong className="block font-extrabold text-rose-500"> Spend Wise </strong>
            </h1>

            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
              Start Creating Your Budget and save ton of money
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

       
      </section>
      <div className="flex justify-center my-10">
        <DotLottieReact
          src="https://lottie.host/b42dd679-d19b-4b73-91cd-6e16f1529a32/DlJjvX3ePM.lottie"
          loop
          autoplay
          className="w-[800px] h-[800px]"
        />
      </div>


      {/* Additional Image */}
      <div className="flex justify-center mt-10">
        <Image
          src={'/dash.jpg'}
          alt="another dashboard"
          width={1200}
          height={800}
          className="rounded-xl border-2 shadow-lg"
        />
      </div>

      {/* Features Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-pink-600">Features</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          <FeatureCard
            title="Real-time Tracking"
            description="Log expenses instantly and monitor in real-time."
          />
          <FeatureCard
            title="Detailed Reports"
            description="Visualize your spending with charts and reports."
          />
          <FeatureCard
            title="Secure and Private"
            description="Your data is encrypted and protected."
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-pink-50 py-16">
        <h2 className="text-3xl font-bold text-center text-pink-600">How It Works</h2>
        <div className="mt-10 flex flex-col md:flex-row justify-center gap-12 px-8">
          <StepCard
            step="1"
            title="Sign Up"
            description="Create an account in just a few seconds."
          />
          <StepCard
            step="2"
            title="Add Expenses"
            description="Log your expenses and categorize them."
          />
          <StepCard
            step="3"
            title="Analyze Spending"
            description="Get insights and stay on top of your budget."
          />
        </div>
      </section>

      {/* Screenshots Section */}
      {/* <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-pink-600">Screenshots</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
          <Screenshot image="screenshot1.png" />
          <Screenshot image="screenshot2.png" />
          <Screenshot image="screenshot3.png" />
        </div>
      </section> */}

      {/* Testimonials Section */}
      <section className="bg-pink-600 text-white py-16">
        <h2 className="text-3xl font-bold text-center">What Users Say</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-6 px-8">
          <Testimonial
            name="John Doe"
            text="This app has transformed how I track expenses!"
          />
          <Testimonial
            name="Jane Smith"
            text="Easy to use and incredibly helpful for budgeting."
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-pink-600">Pricing</h2>
        <div className="mt-8 flex flex-col md:flex-row justify-center gap-12 px-8">
          <PricingPlan
            plan="Free"
            price="$0"
            features={['Track expenses', 'Basic reports']}
          />
          <PricingPlan
            plan="Pro"
            price="$9.99/month"
            features={['Advanced reports', 'Priority support']}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-pink-50">
        <h2 className="text-3xl font-bold text-center text-pink-600">FAQ</h2>
        <div className="mt-8 px-8 space-y-4">
          <FAQItem question="Is the app free to use?" answer="Yes, we have a free plan for basic features." />
          <FAQItem question="How secure is my data?" answer="We use advanced encryption to protect your data." />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; 2024 Expense Tracker. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-pink-400 hover:underline mx-2">Privacy Policy</a>
          <a href="#" className="text-pink-400 hover:underline mx-2">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
    <h3 className="font-bold text-lg text-pink-600">{title}</h3>
    <p className="mt-2 text-gray-700">{description}</p>
  </div>
);

const StepCard = ({ step, title, description }) => (
  <div className="text-center">
    <div className="text-pink-600 text-4xl font-bold">{step}</div>
    <h3 className="mt-4 text-xl font-bold text-gray-800">{title}</h3>
    <p className="mt-2 text-gray-700">{description}</p>
  </div>
);

const Screenshot = ({ image }) => (
  <img src={image} alt="Screenshot" className="rounded-lg shadow-lg" />
);

const Testimonial = ({ name, text }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <p className="italic text-gray-700">"{text}"</p>
    <p className="mt-4 font-bold text-pink-600">- {name}</p>
  </div>
);

const PricingPlan = ({ plan, price, features }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
    <h3 className="text-xl font-bold text-pink-600">{plan}</h3>
    <div className="text-2xl font-extrabold mt-4">{price}</div>
    <ul className="mt-4 space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="text-gray-700">{feature}</li>
      ))}
    </ul>
  </div>
);

const FAQItem = ({ question, answer }) => (
  <div>
    <h3 className="font-bold text-gray-800">{question}</h3>
    <p className="mt-1 text-gray-700">{answer}</p>
  </div>
);

export default LandingPage;
