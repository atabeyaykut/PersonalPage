import { useMutation } from '@tanstack/react-query';
import React, { useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    useEffect(() => {
        emailjs.init('ZxUBtHayHz3J47JLw');
    }, []);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const mutation = useMutation({
        mutationFn: async (data) => {
            return emailjs.send(
                'service_feoziud',
                'template_3rhwd6e',
                {
                    from_name: data.from_name,
                    from_email: data.from_email,
                    message: data.message
                },
                'ZxUBtHayHz3J47JLw'
            );
        },
        onSuccess: () => {
            toast.success("Mesajınız başarıyla gönderildi!");
            reset();
        },
        onError: (error) => {
            console.error('EmailJS Error:', error);
            toast.error("Bir hata oluştu. Lütfen tekrar deneyin.");
        }
    });

    const onSubmit = (data) => {
        mutation.mutate(data);
    };

    const inputClasses = "w-full px-4 py-4 bg-black/50 border border-gray-800 rounded-2xl focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600 transition-all duration-300 placeholder-gray-600 text-lg";
    const labelClasses = "block text-gray-400 text-base font-medium mb-2";
    const errorClasses = "text-red-400/80 text-sm mt-2 animate-fadeIn";

    return (
        <section className="contact page-transition min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
            <div className="max-w-300 h-180 pt-8 w-full flex justify-center align-center items-center backdrop-blur-lg bg-black/30 p-12 rounded-3xl border border-gray-800 shadow-2xl hover:border-gray-700 transition-all duration-500">
                <div className="max-w-2xl min-w-md mx-auto">
                    <h2 className="text-5xl font-bold text-center mb-5 bg-gradient-to-r from-gray-200 to-gray-400 text-transparent bg-clip-text">
                        Get Contact With Me
                    </h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2">
                        <div className="space-y-4 w-full">
                            <div>
                                <label className={`${labelClasses}`}>
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="from_name"
                                    {...register("from_name", { required: "İsminizi girmeniz gerekiyor :)" })}
                                    className={`${inputClasses} `}
                                    placeholder="Atabey AYKUT"
                                />
                                {errors.from_name &&
                                    <p className={errorClasses}>
                                        {errors.from_name.message}
                                    </p>
                                }
                            </div>

                            <div>
                                <label className={labelClasses}>
                                    E-Mail
                                </label>
                                <input
                                    type="email"
                                    name="from_email"
                                    {...register("from_email", {
                                        required: "E-posta adresinizi girmeniz gerekiyor",
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: "Geçerli bir e-posta adresi girin"
                                        }
                                    })}
                                    className={inputClasses}
                                    placeholder="atabeyaykutt@gmail.com"
                                />
                                {errors.from_email &&
                                    <p className={errorClasses}>
                                        {errors.from_email.message}
                                    </p>
                                }
                            </div>

                            <div>
                                <label className={labelClasses}>
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    {...register("message", {
                                        required: "Mesajınızı girmeniz gerekiyor",
                                        minLength: {
                                            value: 3,
                                            message: "Mesaj çok kısa"
                                        }
                                    })}
                                    rows="6"
                                    className={`${inputClasses} resize-none`}
                                    placeholder="Mesajınız..."
                                />
                                {errors.message &&
                                    <p className={errorClasses}>
                                        {errors.message.message}
                                    </p>
                                }
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={mutation.isPending}
                            className="mt-6 w-full cursor-pointer bg-gradient-to-r from-gray-800 to-gray-900 text-white py-4 px-6 rounded-2xl font-semibold text-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {mutation.isPending ? 'Sending...' : 'Apply'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
