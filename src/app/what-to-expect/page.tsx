export const metadata = {
  title: 'What to Expect | Eyepro',
  description: 'From the moment you walk in, you will begin to experience the difference in care. Learn what a visit to Eyepro looks like.',
};

export default function WhatToExpectPage() {
  return (
    <div className="py-12">
      <div className="container-narrow">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">What to Expect</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            From the moment you walk in, you will begin to experience the difference in care.
          </p>
        </div>

        <div className="space-y-6">

          <div className="bg-white border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Your Welcome</h2>
            <div className="text-slate-600 leading-relaxed space-y-4">
              <p>
                Our front desk is not a checkpoint. It is the beginning of your experience with us.
                Our staff greets every patient by name, takes time to answer questions before you
                even sit down, and makes sure you feel at home before your appointment begins.
              </p>
              <p>
                The waiting area is the kind of place where neighbors run into neighbors and
                strangers become new friends. Hospitality is a gift we wish to give to every person
                who walks through our door, even if they are just stopping by to say hello and talk
                about the weather.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Your Examination</h2>
            <div className="text-slate-600 leading-relaxed space-y-4">
              <p>
                When you are called back, our technician will begin the primary pre-exam
                diagnostics: the autorefractor, the tonometer (affectionately known as the air puff
                test), and the Topcon Maestro 2 for retinal imaging and a health report of the
                macula.
              </p>
              <p>
                Your doctor will then invite you into the exam room for the comprehensive
                examination. We make sure your doctor has time to listen before anything else. We
                want to know how your eyes have been, what concerns you, and what your life looks
                like day to day.
              </p>
              <p>
                The exam itself is thorough and unhurried. Our advanced imaging technology gives our
                doctors a complete picture of your eye health, and we walk you through everything we
                find in plain language so you leave knowing more about your eyes than when you came
                in.
              </p>
            </div>
          </div>

          <div className="bg-white border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">A Few Practical Notes</h2>
            <p className="text-slate-600 leading-relaxed">
              Most appointments take between 30 and 45 minutes. We recommend arriving a few minutes
              early for your first visit so we can get you set up comfortably.
            </p>
          </div>

          <div className="bg-gradient-to-r from-eyepro-blue to-slate-700 rounded-xl p-8 text-white text-center">
            <p className="text-2xl font-semibold">Come as you are.</p>
          </div>

        </div>
      </div>
    </div>
  );
}
