import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const mutation = useMutation({
        mutationFn: async (data) => {
            return axios.post("/api/send-mail", {
                to: "atabeyaykutt@gmail.com",
                subject: "Personal Page'den Gelen Mesaj",
                text: `Ad: ${data.name}\nE-posta: ${data.email}\nMesaj: ${data.message}`
            });
        },
        onSuccess: () => {
            toast.success("Message sent successfully");
        },
        onError: () => {
            toast.error("Something went wrong");
        }
    });

    const onSubmit = (data) => {
        mutation.mutate(data);
    };

    const inputClasses = "w-full px-6 py-4 bg-black/50 border border-gray-800 rounded-2xl focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600 transition-all duration-300 placeholder-gray-600 text-lg";
    const labelClasses = "block text-gray-400 text-base font-medium mb-2";
    const errorClasses = "text-red-400/80 text-sm mt-2 animate-fadeIn";

    return (
        <section className="contact page-transition min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
            <div className="max-w-300 h-170 w-full flex justify-center align-center items-center backdrop-blur-lg bg-black/30 p-12 rounded-3xl border border-gray-800 shadow-2xl hover:border-gray-700 transition-all duration-500">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-gray-200 to-gray-400 text-transparent bg-clip-text">
                        Get In Touch
                    </h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-8">
                        <div className="space-y-6">
                            <div>
                                <label className={labelClasses}>
                                    Name
                                </label>
                                <input
                                    type="text"
                                    {...register("name", { required: "I need to know who you are :)" })}
                                    className={inputClasses}
                                    placeholder="Atabey AYKUT"
                                />
                                {errors.name &&
                                    <p className={errorClasses}>
                                        {errors.name.message}
                                    </p>
                                }
                            </div>

                            <div>
                                <label className={labelClasses}>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    {...register("email", {
                                        required: "I need your email",
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: "Please enter a valid email"
                                        }
                                    })}
                                    className={inputClasses}
                                    placeholder="atabeyaykutt@gmail.com"
                                />
                                {errors.email &&
                                    <p className={errorClasses}>
                                        {errors.email.message}
                                    </p>
                                }
                            </div>

                            <div>
                                <label className={labelClasses}>
                                    Message
                                </label>
                                <textarea
                                    {...register("message", {
                                        required: "Please enter your message",
                                        minLength: {
                                            value: 3,
                                            message: "Message is too short"
                                        }
                                    })}
                                    rows="6"
                                    className={`${inputClasses} resize-none`}
                                    placeholder="Your message here..."
                                />
                                {errors.message &&
                                    <p className={errorClasses}>
                                        {errors.message.message}
                                    </p>
                                }
                            </div>
                        </div>

                        <div className="flex justify-end pt-4">
                            <button
                                type="submit"
                                disabled={mutation.isPending}
                                className="px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 rounded-2xl font-medium hover:from-gray-900 hover:to-black transition-all duration-300 disabled:opacity-50 border border-gray-800 hover:border-gray-700 shadow-lg text-lg min-w-[160px]"
                            >
                                {mutation.isPending ? (
                                    <span className="flex items-center justify-center gap-3">
                                        <svg className="animate-spin h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </span>
                                ) : 'Send Message'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
