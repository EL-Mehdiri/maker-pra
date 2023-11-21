import React from 'react'

const Price = () => {
    return (
        <section className='container px-[95px]'>
            <div className='text-center mb-[72px]'>
                <div className='headingThree pb-[24px]'>Our pricing plans</div>
                <div className='text-therd paragraph'>We only make money when our creators make money. Our plans are always <br /> affordable, and it&apos;s completely free to get started.</div>
            </div>

            <div className='grid grid-cols-2 gap-[36px] items-center'>
                <div className='py-[49px] relative px-[38px] bg-secondary rounded-[8px]'>
                    <svg className='absolute -top-5' xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2318 28.7027H44.4318C45.0895 28.7027 45.6227 28.1673 45.6227 27.5068V1.19595C45.6227 0.535443 45.0895 0 44.4318 0H18.2318C17.5741 0 17.0409 0.535443 17.0409 1.19595V27.5068C17.0409 28.1673 17.5741 28.7027 18.2318 28.7027ZM43.2409 26.3108H19.4227V2.39189H43.2409V26.3108Z" fill="#3EE9E5" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.56471e-05 29.7696C0.0109695 38.4389 7.01575 45.459 15.6485 45.4524C19.7997 45.4493 23.7793 43.7886 26.7102 40.8363C29.6411 37.884 31.2827 33.8826 31.2732 29.7138C31.2535 21.0445 24.2416 14.0315 15.6089 14.0469C6.97612 14.0623 -0.0109182 21.1003 2.56471e-05 29.7696ZM3.38968 24.6706C5.4422 19.6912 10.282 16.4459 15.6485 16.4507C22.943 16.4638 28.8587 22.3885 28.8914 29.7138C28.9107 35.1029 25.6922 39.972 20.7394 42.0466C15.7865 44.1213 10.0766 42.9921 6.27679 39.1865C2.47699 35.381 1.33715 29.65 3.38968 24.6706Z" fill="#3EE9E5" />
                    </svg>
                    <div className='mb-[19px] headingFour'>Dip your toe</div>
                    <div className='text-therd paragraph'>Just getting started? No problem at all! Our free plan <br /> will take you a long way.</div>
                    <div className='mt-[24px] mb-[19px] headingTwo'>Free</div>
                    <ul className='space-y-[12px] text-white paragraph'>
                        <li className='flex gap-[15px] items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none">
                                <path d="M10.3187 0.768005L11.6813 2.23196L4.55393 8.86614L0.318665 4.92396L1.68132 3.46L4.55299 6.13398L10.3187 0.768005Z" fill="#3EE9E5" />
                            </svg>
                            Unlimited products
                        </li>
                        <li className='flex gap-[15px] items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none">
                                <path d="M10.3187 0.768005L11.6813 2.23196L4.55393 8.86614L0.318665 4.92396L1.68132 3.46L4.55299 6.13398L10.3187 0.768005Z" fill="#3EE9E5" />
                            </svg>
                            Basic analytics
                        </li>
                        <li className='flex gap-[15px] items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none">
                                <path d="M10.3187 0.768005L11.6813 2.23196L4.55393 8.86614L0.318665 4.92396L1.68132 3.46L4.55299 6.13398L10.3187 0.768005Z" fill="#3EE9E5" />
                            </svg>
                            Limited marketplace exposure
                        </li>
                        <li className='flex gap-[15px] items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none">
                                <path d="M10.3187 0.768005L11.6813 2.23196L4.55393 8.86614L0.318665 4.92396L1.68132 3.46L4.55299 6.13398L10.3187 0.768005Z" fill="#3EE9E5" />
                            </svg>
                            10% fee per transaction
                        </li>
                    </ul>
                </div>
                <div className='py-[61px] relative px-[38px] bg-colorprimary rounded-[8px]'>
                    <svg className='absolute -top-9' xmlns="http://www.w3.org/2000/svg" width="51" height="65" viewBox="0 0 51 65" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.38037 64.9185H48.7961C49.1622 64.9185 49.5133 64.7726 49.7722 64.5129C50.0311 64.2532 50.1765 63.901 50.1765 63.5337V1.38478C50.1765 0.619987 49.5585 0 48.7961 0H1.38037C0.618014 0 0 0.619987 0 1.38478V63.5337C0 64.2985 0.618014 64.9185 1.38037 64.9185ZM47.4158 62.1489H2.76074V2.76956H47.4158V62.1489Z" fill="#093F68" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.46322 58.0529H37.382C37.8438 58.0505 38.2738 57.8166 38.5277 57.4297C38.7834 57.0498 38.835 56.5676 38.6658 56.1419L24.1995 20.6777C23.9877 20.1606 23.4868 19.8219 22.9295 19.8191C22.3672 19.8163 21.8594 20.1559 21.6458 20.6777L7.19328 56.1419C7.01994 56.5654 7.06645 57.0475 7.31751 57.4297C7.57148 57.8166 8.00146 58.0505 8.46322 58.0529ZM35.3667 55.2833H10.52L22.9433 24.8182L35.3667 55.2833Z" fill="#093F68" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4632 30.659H40.5584C41.3207 30.659 41.9388 30.0391 41.9388 29.2743V8.61336C41.9388 7.84856 41.3207 7.22858 40.5584 7.22858H15.4632C14.7009 7.22858 14.0828 7.84856 14.0828 8.61336V29.2743C14.0828 30.0391 14.7009 30.659 15.4632 30.659ZM39.178 27.8895H16.8988L16.8436 9.99814H39.178V27.8895Z" fill="#093F68" />
                    </svg>
                    <div className='mb-[19px] !text-black headingFour'>Dive right in</div>
                    <div className='text-therd paragraph'>Ready for the big time? Our paid plan will help you <br /> take your business to the next level.</div>
                    <div className='mt-[24px] mb-[19px] headingTwo !text-black'>$25.00/ month</div>
                    <ul className='space-y-[12px] text-black paragraph '>
                        <li className='flex gap-[15px] items-center '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none">
                                <path d="M10.3187 0.768005L11.6813 2.23196L4.55394 8.86614L0.318672 4.92396L1.68133 3.46L4.553 6.13398L10.3187 0.768005Z" fill="#093F68" />
                            </svg>
                            Custom domain
                        </li>
                        <li className='flex gap-[15px] items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none">
                                <path d="M10.3187 0.768005L11.6813 2.23196L4.55394 8.86614L0.318672 4.92396L1.68133 3.46L4.553 6.13398L10.3187 0.768005Z" fill="#093F68" />
                            </svg>
                            Advanced analytics and reports
                        </li>
                        <li className='flex gap-[15px] items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none">
                                <path d="M10.3187 0.768005L11.6813 2.23196L4.55394 8.86614L0.318672 4.92396L1.68133 3.46L4.553 6.13398L10.3187 0.768005Z" fill="#093F68" />
                            </svg>
                            High marketplace visibility
                        </li>
                        <li className='flex gap-[15px] items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none">
                                <path d="M10.3187 0.768005L11.6813 2.23196L4.55394 8.86614L0.318672 4.92396L1.68133 3.46L4.553 6.13398L10.3187 0.768005Z" fill="#093F68" />
                            </svg>
                            5% fee per transaction
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Price