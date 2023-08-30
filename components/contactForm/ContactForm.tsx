'use client';

import { useForm } from 'react-hook-form';
import { TFormData } from '@/types';
import { sendEmail } from '@/utils';

export const ContactForm = () => {
    const { register, handleSubmit } = useForm<TFormData>();

    function onSubmit(data: TFormData) {
        sendEmail(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
                <label htmlFor="name" className="mb-3 block text-base font-medium text-black">
                    Full Name
                </label>
                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full  border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                    {...register('name', { required: true })}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="mb-3 block text-base font-medium text-black">
                    Email Address
                </label>
                <input
                    type="email"
                    placeholder="example@domain.com"
                    className="w-full border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                    {...register('email', { required: true })}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="message" className="mb-3 block text-base font-medium text-black">
                    Message
                </label>
                <textarea
                    rows={4}
                    placeholder="Type your message"
                    className="w-full resize-none border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                    {...register('message', { required: true })}
                ></textarea>
            </div>
            <div>
                <button className="hover:shadow-form  bg-teal-700 py-3 px-8 text-base font-semibold text-white outline-none">Submit</button>
            </div>
        </form>
    );
};
