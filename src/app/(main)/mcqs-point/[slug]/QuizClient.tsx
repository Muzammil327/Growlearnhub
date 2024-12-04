'use client'

import CardQuizWithoutLink from '@/src/components/card/CardQuiz/CardQuizWithoutLink';
import SubHeader from '@/src/components/layout/header/subheader/page';
import React from 'react';

interface QuizOption {
    text: string;
    isCorrect: boolean;
}

interface Quiz {
    id: number;
    question: string;
    explanation: string;
    tags: string;
    createdAt: string;
    options: QuizOption[];
}

interface QuizClientProps {
    quizData: Quiz;
}

const QuizClient: React.FC<QuizClientProps> = ({ quizData }) => {
    const { question, explanation, options, tags } = quizData;

    const description = explanation ? explanation.replace(/<\/?[^>]+(>|$)/g, "") : options.map((option) => option.text).join(", ");
    const keywords = (() => {
        if (Array.isArray(tags)) {
            // If tags is already an array, return it directly
            return tags;
        } else if (typeof tags === "string") {
            // If tags is a string, split it into an array
            return tags.split(",").map(tag => tag.trim());
        } else {
            // Fallback for undefined/null or invalid formats
            return [];
        }
    })();


    const option = quizData.options.map(option => option.text);
    const correctOption = quizData.options.find(option => option.isCorrect)?.text || "";


    return (
        <div>
            <SubHeader title={question} />
            <section className='grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto'>
                <div className='col-span-2'>
                    <CardQuizWithoutLink title={question} correctOption={correctOption} option={option} keywords={keywords} description={description} />
                </div>
                <div>
                </div>
            </section>
        </div>
    );
};

export default QuizClient;
