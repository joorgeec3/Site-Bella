import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Calendar, Check, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SERVICES, STUDIO_INFO } from '../data/siteData';
import { BookingFormData } from '../types';
import { OriaPetalIcon } from '../components/PetalShape';

export const ContactPage: React.FC = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    treatment: SERVICES[0].title,
    experienceGoal: 'Deep Relaxation',
    tellUsMore: '',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    time: '14:30',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};
    if (currentStep === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    } else if (currentStep === 2) {
      if (!formData.treatment) newErrors.treatment = 'Please select a treatment';
    } else if (currentStep === 3) {
      if (!formData.date) newErrors.date = 'Please pick a preferred date';
      if (!formData.time) newErrors.time = 'Please pick a preferred time';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      if (step < 3) setStep((s) => (s + 1) as 2 | 3);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep((s) => (s - 1) as 1 | 2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(3)) {
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#ffd9a8', '#dddcb0', '#f2f0e5', '#a05623'],
        });
      } catch {
        // gracefully handle
      }
    }
  };

  const timeSlots = ['10:00', '11:30', '13:00', '14:30', '16:00', '17:30', '19:00'];
  const experienceGoals = [
    'Deep Relaxation',
    'Natural Definition',
    'Long-Lasting Wear',
    'Smooth & Glowing Skin',
    'Custom Reset',
  ];

  return (
    <div className="w-full bg-[#261511] text-[#f2f0e5] pt-24 sm:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-sans-ui tracking-wider text-[#dddcb0]/80 block mb-3">
            (Get in Touch)
          </span>
          <h1 className="font-serif-editorial text-5xl sm:text-7xl md:text-8xl text-[#f2f0e5] tracking-tight leading-tight">
            Contact Us
          </h1>
          <p className="font-sans-ui text-sm sm:text-base text-[#f2f0e5]/75 mt-4 max-w-xl mx-auto leading-relaxed">
            Reserve your session below with our 3-step concierge booking or visit our studio in
            the heart of Amsterdam.
          </p>
        </div>

        {/* 2-Column Grid: Left Booking Form, Right Studio Info & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: 3-Step Interactive Form */}
          <div className="lg:col-span-7 bg-[#1e100d] border border-[#543923]/40 rounded-3xl p-6 sm:p-10 shadow-2xl">
            {/* Step Indicator */}
            {!isSubmitted && (
              <div className="mb-8">
                <div className="flex items-center justify-between text-xs tracking-wider uppercase text-[#dddcb0]/80 mb-3">
                  <span className={step >= 1 ? 'text-[#ffd9a8] font-medium' : 'opacity-40'}>
                    01. Personal Info
                  </span>
                  <span className={step >= 2 ? 'text-[#ffd9a8] font-medium' : 'opacity-40'}>
                    02. Interests
                  </span>
                  <span className={step >= 3 ? 'text-[#ffd9a8] font-medium' : 'opacity-40'}>
                    03. Details
                  </span>
                </div>
                <div className="h-1 bg-[#261511] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#dddcb0] to-[#ffd9a8]"
                    initial={false}
                    animate={{ width: `${(step / 3) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            )}

            {isSubmitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#dddcb0]/15 border border-[#dddcb0]/40 flex items-center justify-center text-[#dddcb0] mb-5">
                  <Check size={28} />
                </div>
                <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#f2f0e5] mb-3">
                  Appointment Request Received
                </h3>
                <p className="font-sans-ui text-sm text-[#f2f0e5]/80 max-w-md mx-auto leading-relaxed mb-8">
                  Thank you, <span className="text-[#ffd9a8] font-medium">{formData.firstName}</span>! We
                  have logged your appointment for{' '}
                  <span className="text-[#ffd9a8]">{formData.treatment}</span> on{' '}
                  <span className="text-[#ffd9a8] font-medium">{formData.date}</span> at{' '}
                  <span className="text-[#ffd9a8] font-medium">{formData.time}</span>. Our concierge
                  will reach out to you shortly via{' '}
                  <span className="text-[#ffd9a8]">{formData.email}</span>.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setStep(1);
                  }}
                  className="px-8 py-3 rounded-full bg-[#f2f0e5] text-[#261511] font-medium text-xs tracking-wider uppercase hover:bg-[#ffd9a8] transition-colors"
                >
                  Book another session
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* STEP 1 */}
                {step === 1 && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <h3 className="font-serif-editorial text-2xl text-[#f2f0e5] mb-2">
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#dddcb0]/80 mb-1.5">
                          First Name *
                        </label>
                        <input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) =>
                            setFormData({ ...formData, firstName: e.target.value })
                          }
                          placeholder="Elena"
                          className="w-full px-4 py-3 rounded-xl bg-[#261511] border border-[#543923]/50 text-[#f2f0e5] text-sm focus:outline-none focus:border-[#ffd9a8] transition-colors"
                        />
                        {errors.firstName && (
                          <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#dddcb0]/80 mb-1.5">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) =>
                            setFormData({ ...formData, lastName: e.target.value })
                          }
                          placeholder="Laurent"
                          className="w-full px-4 py-3 rounded-xl bg-[#261511] border border-[#543923]/50 text-[#f2f0e5] text-sm focus:outline-none focus:border-[#ffd9a8] transition-colors"
                        />
                        {errors.lastName && (
                          <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#dddcb0]/80 mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elena@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#261511] border border-[#543923]/50 text-[#f2f0e5] text-sm focus:outline-none focus:border-[#ffd9a8] transition-colors"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#dddcb0]/80 mb-1.5">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+31 6 12345678"
                        className="w-full px-4 py-3 rounded-xl bg-[#261511] border border-[#543923]/50 text-[#f2f0e5] text-sm focus:outline-none focus:border-[#ffd9a8] transition-colors"
                      />
                    </div>
                  </div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <div className="space-y-5 animate-in fade-in duration-200">
                    <h3 className="font-serif-editorial text-2xl text-[#f2f0e5] mb-2">
                      Your Interests
                    </h3>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#dddcb0]/80 mb-2">
                        Treatment Interest *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {SERVICES.map((s) => (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, treatment: s.title })}
                            className={`p-3.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                              formData.treatment === s.title
                                ? 'border-[#ffd9a8] bg-[#ffd9a8]/10 text-[#f2f0e5]'
                                : 'border-[#543923]/40 bg-[#261511] text-[#f2f0e5]/70 hover:border-[#543923]'
                            }`}
                          >
                            <span className="font-serif-editorial text-lg">{s.title}</span>
                            <span className="text-xs text-[#dddcb0]/80">{s.startingPrice}</span>
                          </button>
                        ))}
                      </div>
                      {errors.treatment && (
                        <p className="text-red-400 text-xs mt-1">{errors.treatment}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#dddcb0]/80 mb-2">
                        Experience Goal
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {experienceGoals.map((goal) => (
                          <button
                            key={goal}
                            type="button"
                            onClick={() => setFormData({ ...formData, experienceGoal: goal })}
                            className={`px-3 py-1.5 rounded-full text-xs transition-colors border ${
                              formData.experienceGoal === goal
                                ? 'bg-[#ffd9a8] text-[#261511] border-[#ffd9a8] font-medium'
                                : 'bg-[#261511] text-[#f2f0e5]/70 border-[#543923]/40 hover:border-[#543923]'
                            }`}
                          >
                            {goal}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#dddcb0]/80 mb-1.5">
                        Tell Us More (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={formData.tellUsMore}
                        onChange={(e) =>
                          setFormData({ ...formData, tellUsMore: e.target.value })
                        }
                        placeholder="Skin sensitivities, preferred technician, or occasion?"
                        className="w-full px-4 py-3 rounded-xl bg-[#261511] border border-[#543923]/50 text-[#f2f0e5] text-sm focus:outline-none focus:border-[#ffd9a8] transition-colors"
                      />
                    </div>
                  </div>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <div className="space-y-5 animate-in fade-in duration-200">
                    <h3 className="font-serif-editorial text-2xl text-[#f2f0e5] mb-2">
                      Additional Details
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#dddcb0]/80 mb-1.5 flex items-center gap-1.5">
                          <Calendar size={13} /> Preferred Date *
                        </label>
                        <input
                          type="date"
                          value={formData.date}
                          min={new Date().toISOString().split('T')[0]}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#261511] border border-[#543923]/50 text-[#f2f0e5] text-sm focus:outline-none focus:border-[#ffd9a8] transition-colors"
                        />
                        {errors.date && (
                          <p className="text-red-400 text-xs mt-1">{errors.date}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#dddcb0]/80 mb-1.5 flex items-center gap-1.5">
                          <Clock size={13} /> Preferred Time *
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {timeSlots.map((time) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => setFormData({ ...formData, time })}
                              className={`py-2 px-1 text-center rounded-lg text-xs font-medium border transition-colors ${
                                formData.time === time
                                  ? 'bg-[#ffd9a8] text-[#261511] border-[#ffd9a8]'
                                  : 'bg-[#261511] text-[#f2f0e5]/70 border-[#543923]/40 hover:border-[#543923]'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                        {errors.time && (
                          <p className="text-red-400 text-xs mt-1">{errors.time}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#dddcb0]/80 mb-1.5">
                        Message (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Any notes or special requests for your session."
                        className="w-full px-4 py-3 rounded-xl bg-[#261511] border border-[#543923]/50 text-[#f2f0e5] text-sm focus:outline-none focus:border-[#ffd9a8] transition-colors"
                      />
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="mt-8 pt-4 border-t border-[#543923]/40 flex items-center justify-between">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#f2f0e5]/70 hover:text-[#f2f0e5] transition-colors px-3 py-2"
                    >
                      <ArrowLeft size={14} /> Back
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#f2f0e5] text-[#261511] font-medium text-xs tracking-wider uppercase hover:bg-[#ffd9a8] transition-colors"
                    >
                      Next <ArrowRight size={14} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#ffd9a8] text-[#261511] font-semibold text-xs tracking-wider uppercase hover:bg-[#f2f0e5] transition-colors shadow-lg"
                    >
                      Submit Booking <Check size={14} />
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Studio Information & Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#1e100d] border border-[#543923]/40 rounded-3xl p-6 sm:p-8 space-y-6">
              <h3 className="font-serif-editorial text-3xl text-[#f2f0e5]">Studio Sanctuary</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#ffd9a8] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[#dddcb0]/80 mb-0.5">
                      Address
                    </span>
                    <p className="font-sans-ui text-sm text-[#f2f0e5] leading-relaxed">
                      {STUDIO_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-[#ffd9a8] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[#dddcb0]/80 mb-0.5">
                      Telephone
                    </span>
                    <p className="font-sans-ui text-sm text-[#f2f0e5]">{STUDIO_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-[#ffd9a8] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[#dddcb0]/80 mb-0.5">
                      Direct Email
                    </span>
                    <p className="font-sans-ui text-sm text-[#f2f0e5]">{STUDIO_INFO.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-[#ffd9a8] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[#dddcb0]/80 mb-0.5">
                      Hours
                    </span>
                    <p className="font-sans-ui text-sm text-[#f2f0e5]">
                      {STUDIO_INFO.hoursWeekday}
                    </p>
                    <p className="font-sans-ui text-sm text-[#f2f0e5]/60">
                      {STUDIO_INFO.hoursSunday}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-3xl overflow-hidden border border-[#543923]/40 min-h-[300px] shadow-xl">
              <iframe
                title="Oria Studio Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.148118043697!2d4.873212876935293!3d52.36768394747754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c25220c82f%3A0xb3bf8ee0d0f4d385!2sRozengracht%20207%2C%201016%20LZ%20Amsterdam%2C%20Netherlands!5e0!3m2!1sen!2sus!4v1718000000000!5m2!1sen!2sus"
                className="w-full h-full min-h-[300px] border-0 grayscale contrast-125 opacity-85"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
