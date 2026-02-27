'use client';
import React, { useState, useRef, ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        message: '',
    });

    const formRef = useRef<HTMLFormElement | null>(null);

    const [loading, setLoading] = useState<boolean>(false);
    const [status, setStatus] = useState<'success' | 'error' | ''>('');

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formRef.current) return;

        setLoading(true);
        setStatus('');

        try {
            const result = await emailjs.sendForm(
                'service_4lw2nxi',
                'template_65mtah7',
                formRef.current,
                'g_HUD6J-n_pR3Ly-9'
            );

            console.log(result.text);
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            alert('Message sent successfully!');
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
            alert('Failed to send message. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-24 bg-brand-dark text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-widest uppercase">
                    CONTACT
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold tracking-wide">
                            Have a project in mind?
                        </h3>

                        <p className="text-gray-300 leading-relaxed text-lg">
                            Tell me about your idea, your team, or your upcoming production.
                        </p>

                        <div className="pt-8 space-y-4">
                            <div className="flex items-center space-x-4">
                                <span className="text-2xl">📩</span>
                                <a
                                    href="mailto:q4dline.info@gmail.com"
                                    className="text-xl hover:text-white/80 transition-colors"
                                >
                                    christiancamilocajiaochacon@gmail.com
                                </a>
                            </div>

                            <div className="flex items-center space-x-4">
                                <span className="text-2xl">📍</span>
                                <span className="text-xl text-gray-300">
                                    Based in Colombia — working with clients worldwide
                                </span>
                            </div>
                        </div>

                    </div>

                    {/* Contact Form */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", justifyContent: "center", alignItems: "center" }}>
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                        >
                            <div >
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-400 mb-2 tracking-wide"
                                >
                                    NAME
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    style={{ borderRadius: '1rem', margin: '0.5rem', width: '55vw', height: '1.5rem' }}
                                    className="w-full bg-brand-black border border-[#7042f861] rounded-xl p-3 text-white focus:outline-none focus:border-[#7042f8] transition-colors shadow-[0_0_10px_#7042f820]"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div >
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-400 mb-2 tracking-wide"
                                >
                                    EMAIL
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    style={{ borderRadius: '1rem', margin: '0.5rem', width: '55vw', height: '1.5rem' }}
                                    className="w-full bg-brand-black border border-[#7042f861] rounded-xl p-3 text-white focus:outline-none focus:border-[#7042f8] transition-colors shadow-[0_0_10px_#7042f820]"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div >
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-400 mb-2 tracking-wide"
                                >
                                    MESSAGE
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    style={{ borderRadius: '1rem', margin: '0.5rem', width: '55vw', height: '15rem' }}
                                    className="w-full bg-brand-black border border-[#7042f861] rounded-xl p-3 text-white focus:outline-none focus:border-[#7042f8] transition-colors shadow-[0_0_10px_#7042f820]"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                style={{ borderRadius: '1rem', margin: '0.5rem', width: '55vw', height: '3rem', backgroundColor: "#7042f8", color: "white" }}
                                className="w-full  text-black font-bold py-4 rounded-xl  transition-colors tracking-widest uppercase disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div >
                © {new Date().getFullYear()} Christian CAJIAO. All rights reserved.
            </div>
        </section >
    );
};

export default Contact;
