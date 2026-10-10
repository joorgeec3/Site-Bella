import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ArrowRight, ArrowLeft, Calendar, Clock, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SERVICES, STUDIO_INFO } from '../data/siteData';
import { BookingFormData } from '../types';
import { OriaPetalIcon } from './PetalShape';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTreatment?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialTreatment,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    treatment: initialTreatment || SERVICES[0].title,
    experienceGoal: 'Relaxation & Reset',
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
      if (step < 3) {
        setStep((s) => (s + 1) as 2 | 3);
      }
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((s) => (s - 1) as 1 | 2);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(3)) {
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#ffd9a8', '#dddcb0', '#f2f0e5', '#a05623'],
        });
      } catch {
        // gracefully handle if confetti blocked
      }
    }
  };

  const resetAndClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setIsSubmitted(false);
      setErrors({});
    }, 400);
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
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-[#160c09]/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-[#261511] text-[#f2f0e5] border border-[#543923]/40 rounded-3xl p-6 sm:p-10 shadow-2xl z-10 overflow-hidden my-8"
          >
            {/* Top decorative badge & close button */}
            <div className="flex items-center justify-between pb-6 border-b border-[#543923]/40">
              <div className="flex items-center gap-2.5">
                <OriaPetalIcon size={18} color="#dddcb0" />
                <span className="font-serif-editorial text-2xl tracking-tight text-[#f2f0e5]">
                  oria
                </span>
                <span className="text-xs uppercase tracking-widest text-[#dddcb0]/80 px-2 py-0.5 rounded-full border border-[#dddcb0]/30 ml-2">
                  Session Booking
                </span>
              </div>
              <button
                onClick={resetAndClose}
                className="w-10 h-10 rounded-full border border-[#543923]/60 flex items-center justify-center text-[#f2f0e5]/70 hover:text-[#f2f0e5] hover:bg-[#543923]/30 transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Step progress indicator */}
            {!isSubmitted && (
              <div className="pt-6 pb-4">
                <div className="flex items-center justify-between mb-3 text-xs tracking-wider uppercase text-[#dddcb0]/80">
                  <span className={step >= 1 ? 'text-[#ffd9a8] font-medium' : 'opacity-40'}>
                    01. Personal Info
                  </span>
                  <span className={step >= 2 ? 'text-[#ffd9a8] font-medium' : 'opacity-40'}>
                    02. Interests
                  </span>
                  <span className={step >= 3 ? 'text-[#ffd9a8] font-medium' : 'opacity-40'}>
                    03. Date & Time
                  </span>
                </div>
                {/* Progress bar */}
                <div className="h-1 bg-[#1a0e0c] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#dddcb0] to-[#ffd9a8]"
                    initial={false}
                    animate={{ width: `${(step / 3) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            )}

            {/* Modal Body */}
            <div className="mt-4">
              {isSubmitted ? (
                /* Success screen */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#dddcb0]/15 border border-[#dddcb0]/40 flex items-center justify-center text-[#dddcb0] mb-5">
                    <Check size={28} />
                  </div>
                  <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#f2f0e5] mb-3">
                    Your appointment request is sent
                  </h3>
                  <p className="font-sans-ui text-sm sm:text-base text-[#f2f0e5]/80 max-w-md mx-auto leading-relaxed mb-6">
                    Thank you, <span className="text-[#ffd9a8] font-medium">{formData.firstName}</span>!
                    Our concierge at {STUDIO_INFO.address.split(',')[0]} will contact you at{' '}
                    <span className="text-[#ffd9a8]">{formData.email}</span> to confirm your time slot on{' '}
                    <span className="text-[#ffd9a8] font-medium">{formData.date}</span> at{' '}
                    <span className="text-[#ffd9a8] font-medium">{formData.time}</span>.
                  </p>
                  <button
                    onClick={resetAndClose}
                    className="px-8 py-3.5 rounded-full bg-[#f2f0e5] text-[#261511] font-medium text-sm tracking-wide hover:bg-[#ffd9a8] transition-colors"
                  >
                    Done
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* STEP 1: Personal Info */}
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="space-y-4"
                    >
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
                            className="w-full px-4 py-3 rounded-xl bg-[#1d100d] border border-[#543923]/50 text-[#f2f0e5] text-sm focus:outline-none focus:border-[#ffd9a8] transition-colors"
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
                            className="w-full px-4 py-3 rounded-xl bg-[#1d100d] border border-[#543923]/50 text-[#f2f0e5] text-sm focus:outline-none focus:border-[#ffd9a8] transition-colors"
                          />
                          {errors.lastName && (
                            <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#dddcb0]/80 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="elena@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#1d100d] border border-[#543923]/50 text-[#f2f0e5] text-sm focus:outline-none focus:border-[#ffd9a8] transition-colors"
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
                          className="w-full px-4 py-3 rounded-xl bg-[#1d100d] border border-[#543923]/50 text-[#f2f0e5] text-sm focus:outline-none focus:border-[#ffd9a8] transition-colors"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2: Interests */}
                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="space-y-5"
                    >
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
                                  : 'border-[#543923]/40 bg-[#1d100d] text-[#f2f0e5]/70 hover:border-[#543923]'
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
                                  : 'bg-[#1d100d] text-[#f2f0e5]/70 border-[#543923]/40 hover:border-[#543923]'
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
                          onChange={(e) => setFormData({ ...formData, tellUsMore: e.target.value })}
                          placeholder="Any specific focus area, sensitive skin requirements, or event deadline?"
                          className="w-full px-4 py-3 rounded-xl bg-[#1d100d] border border-[#543923]/50 text-[#f2f0e5] text-sm focus:outline-none focus:border-[#ffd9a8] transition-colors"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3: Date & Time */}
                  {step === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="space-y-5"
                    >
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
                            className="w-full px-4 py-3 rounded-xl bg-[#1d100d] border border-[#543923]/50 text-[#f2f0e5] text-sm focus:outline-none focus:border-[#ffd9a8] transition-colors"
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
                                    : 'bg-[#1d100d] text-[#f2f0e5]/70 border-[#543923]/40 hover:border-[#543923]'
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
                          Notes or Special Requests (Optional)
                        </label>
                        <textarea
                          rows={2}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Let us know if you're coming with a friend or celebrating an occasion."
                          className="w-full px-4 py-3 rounded-xl bg-[#1d100d] border border-[#543923]/50 text-[#f2f0e5] text-sm focus:outline-none focus:border-[#ffd9a8] transition-colors"
                        />
                      </div>

                      {/* Summary pill */}
                      <div className="p-3.5 rounded-xl bg-[#1a0e0c] border border-[#543923]/40 text-xs text-[#f2f0e5]/80 flex items-center justify-between">
                        <div>
                          <span className="text-[#dddcb0] font-medium">{formData.treatment}</span> ·{' '}
                          <span>{formData.date}</span> at <span>{formData.time}</span>
                        </div>
                        <span className="text-[#ffd9a8] flex items-center gap-1">
                          <Sparkles size={12} /> Studio Visit
                        </span>
                      </div>
                    </motion.div>
                  )}

                  {/* Actions buttons */}
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
                        Next Step <ArrowRight size={14} />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#ffd9a8] text-[#261511] font-semibold text-xs tracking-wider uppercase hover:bg-[#f2f0e5] transition-colors shadow-lg"
                      >
                        Confirm Booking <Check size={14} />
                      </button>
                    )}
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
