
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-huriky-blue/30 to-huriky-black">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400">
            Find answers to common questions about HurikyNetwork's VPN services.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <FaqItem 
              question="What is VLESS and how is it different from other VPN protocols?"
              answer="VLESS is a lightweight and efficient tunneling protocol designed to overcome the limitations of traditional VPN protocols. It provides better performance, lower latency, and enhanced security while being more difficult to detect and block compared to conventional VPN solutions."
            />
            
            <FaqItem 
              question="Does HurikyNetwork keep logs of my browsing activity?"
              answer="No. HurikyNetwork maintains a strict zero-logging policy. We do not track, store, or monitor your online activities, connection timestamps, or IP addresses. Your privacy is our top priority."
            />
            
            <FaqItem 
              question="How many devices can I connect simultaneously?"
              answer="The number of simultaneous connections depends on your subscription plan. Basic allows 5 connections, Premium allows 10 connections, and Enterprise offers unlimited connections across all your devices."
            />
            
            <FaqItem 
              question="Will using HurikyNetwork slow down my internet connection?"
              answer="Unlike traditional VPNs that may significantly reduce your speed, HurikyNetwork's VLESS protocol is designed for minimal performance impact. With our 10 Gbps network infrastructure, many users actually experience improved speeds due to our traffic optimization and reduction of ISP throttling."
            />
            
            <FaqItem 
              question="Is HurikyNetwork compatible with streaming services?"
              answer="Yes. HurikyNetwork is optimized to work seamlessly with major streaming platforms, allowing you to access geo-restricted content without buffering issues. Our specialized streaming servers ensure high-definition playback."
            />
            
            <FaqItem 
              question="How do I set up HurikyNetwork on my devices?"
              answer="Once you subscribe to HurikyNetwork, you'll receive access to our easy-to-use applications for Windows, macOS, Linux, iOS, and Android. Our setup wizards guide you through a simple installation process that takes less than 2 minutes. For advanced users, we also provide detailed configuration guides for manual setup on routers and other devices."
            />
          </Accordion>
        </div>
      </div>
    </section>
  );
};

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  return (
    <AccordionItem value={question} className="border border-gray-800 rounded-lg bg-huriky-darkgray/30 overflow-hidden">
      <AccordionTrigger className="px-6 py-4 hover:bg-huriky-darkgray/50 transition-colors">
        {question}
      </AccordionTrigger>
      <AccordionContent className="px-6 pb-4 pt-2 text-gray-400">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};

export default FAQ;
