import React from 'react'
import { useState } from 'react';
import { motion } from "framer-motion";
import { AiOutlineMessage, AiOutlineClose } from "react-icons/ai";


const responses = {
  "What services do you offer?": "We offer software resale services for various licenses.",
  "How can I contact support?": "You can contact us through the contact form on our website or email support@softsell.com.",
  "What is your refund policy?": "We offer a 30-day money-back guarantee on all purchases.",
};


const fallbackResponse = "I'm sorry, I didn't understand that. Please try another question.";


const Chat = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (input.trim() !== "") {
      const userMessage = { sender: "user", text: input };
      const botResponse = {
        sender: "bot",
        text: responses[input] || fallbackResponse,
      };

      setMessages([...messages, userMessage, botResponse]);
      setInput("");
    }
  };

  const handleQuestionSelect = (question) => {
    const userMessage = { sender: "user", text: question };
    const botResponse = {
      sender: "bot",
      text: responses[question] || fallbackResponse,
    };
    setMessages([...messages, userMessage, botResponse]);
  };

  const predefinedQuestions = Object.keys(responses);

  return (
    <div>
      <div className="fixed bottom-4 right-4 z-50">
      <button
          onClick={toggleChat}
          className="bg-[#007BFF] dark:bg-[#BB86FC]  text-[#FFFFFF] dark:text-[#121212] p-3 rounded-full shadow-lg focus:outline-none"
        >
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMessage size={24} />}
        </button>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white dark:bg-gray-800 w-[300px]  sm:w-[350px] h-[400px] p-4 shadow-lg rounded-lg flex flex-col font-[Poppins]"
          >
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Chat with us</h2>

            <div className="mb-2">
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Select a question:</h3>
              <div className="flex flex-wrap gap-2">
                {predefinedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuestionSelect(question)}
                    className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-2 py-1 rounded mb-1"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto mb-2 space-y-2">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 rounded ${msg.sender === "user"
                      ? "bg-blue-500 text-white self-end"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                    }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 p-2 border border-gray-300 dark:border-gray-700 rounded"
              />
              <button
                onClick={handleSend}
                className="bg-[#007BFF] dark:bg-[#BB86FC]  text-[#FFFFFF] dark:text-[#121212] px-3 py-1 rounded-lg"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Chat
