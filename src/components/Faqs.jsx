import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../components/ui/accordion";

const Faqs = () => {
  const faqs = [
    {
      question: "HOW DO I SUBMIT A TUTORIAL?",
      answer:
        "Click the 'Add New' button on the Tutorials page. Paste a valid YouTube URL, select a category, and add a keyword. Our system will handle the rest!",
    },
    {
      question: "IS LEARNSTACK FREE TO USE?",
      answer:
        "Absolutely. LearnStack is a community-driven platform built for developers to share and discover high-quality learning resources without paywalls.",
    },
    {
      question: "WHAT TECH STACKS ARE COVERED?",
      answer:
        "We focus on Full Stack development, including Django, JavaScript, TailwindCSS, and specialized categories like AI and DevOps.",
    },
    {
      question: "HOW DOES THE BOOKMARK SYSTEM WORK?",
      answer:
        "When you're logged in, click the bookmark icon on any tutorial card. It will be saved to 'Your Vault' for quick access later.",
    },
  ];

  return (
    <>
      <section className="min-h-screen pt-32 pb-20 px-6 font-mono" id="faqs">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <div className="bg-foreground w-fit mx-auto text-white px-4 py-2 mb-4 rotate-[-2deg] shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] border-2 border-foreground">
              <span className="font-foreground uppercase tracking-widest text-sm">
                Frequently asked Questions
              </span>
            </div>
          </div>

          {/* Accordion Logic */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-4 border-foreground bg-white px-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              >
                <AccordionTrigger className="text-xl font-black uppercase text-left hover:no-underline hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg font-medium pb-6 text-foreground/80 leading-relaxed border-t-2 border-dashed border-foreground pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact Support CTA */}
        </div>
      </section>
    </>
  );
};

export default Faqs;
