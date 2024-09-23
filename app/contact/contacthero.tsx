export const ContactHero: React.FC = () => {
    return (
        <div className="mb-32">
            <div className="flex justify-center">
                <p className="text-4xl p-4 font-semibold text-[#FF6801]">Get in touch with<span className="text-[#045B2E]"> Us</span></p>
            </div>
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 justify-center mx-4 lg:mx-16 my-6">
                {/* Visit Us Section */}
                <div style={{ backgroundColor: '#045B2E' }} className="w-full border border-[#303030] rounded-2xl">
                    <div className="p-4">
                        <p className="font-semibold text-2xl mb-4 text-white">Visit Us</p>
                        <div>
                            <p className="text-white">123 Accountability Ave,</p>
                            <p className="text-white">Suite 456, Transparency City,</p>
                            <p className="text-white">Accountability State, ZIP 12345.</p>
                        </div>
                    </div>
                </div>

                {/* Email Us Section */}
                <div style={{ backgroundColor: '#FF6801' }} className="w-full border border-[#303030] rounded-2xl">
                    <div className="p-4">
                        <p className="font-semibold text-2xl mb-4 text-white">Email Us</p>
                        <div>
                            <p className="text-white">superexpeditors@gmail.com</p>
                            <p className="text-white">superexpeditors@gmail.com</p>
                        </div>
                    </div>
                </div>
                
                {/* Call Us Section */}
                <div style={{ backgroundColor: '#303030' }} className="w-full border border-[#FF6801] rounded-2xl">
                    <div className="p-4">
                        <p className="font-semibold text-2xl mb-4 text-white">Call Us</p>
                        <div>
                            <p className="text-white">(+234) 9031133555</p>
                            <p className="text-white">(+234) 9031133555</p>
                        </div>
                    </div>
                </div>

                {/* Follow Us Section */}
                <div style={{ backgroundColor: '#FF6801' }} className="w-full border border-[#045B2E] rounded-2xl">
                    <div className="p-4">
                        <p className="font-semibold text-2xl mb-4 text-white">Follow Us</p>
                        <div>
                            <p className="text-white">Tiktok: <a href="https://tiktok.com/super.expeditors" className="underline">@super.expeditors</a></p>
                            <p className="text-white">LinkedIn:<a href="https://linkedin.com/company/superexpeditors" className="underline">@superexpeditors</a></p>
                            <p className="text-white">Instagram: <a href="https://instagram.com/superExpeditors" className="underline">@superexpeditors</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
