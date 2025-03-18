import { FunctionComponent } from 'react'

import classNames from 'classnames'

import { ContentSection } from '..'

interface CodyTestimonialsProps {
    isLight?: boolean
}

const TESTIMONIALS = [
    {
        profileImage: '/cody/testimonial-profile-image1.png',
        name: 'Joe Previte',
        username: '@jsjoeio',
        url: 'https://twitter.com/jsjoeio',

        comment: (
            <>
                I've started using Cody this week and dude, absolute gamechanger especially with me onboarding to
                Haskell at my new job literally just gave me the answer, explained it will and it just fixed my error.
            </>
        ),
    },
    {
        profileImage: '/cody/testimonial-profile-image2.png',
        name: 'Joshua Coetzer',
        username: 'VS Code marketplace review',
        comment: (
            <>
                Absolutely loved using Cody in VSCode for the last few months. It's been a game-changer for me. The way
                it summarises code blocks and fills in gaps in log statements, error messages, and code comments is
                incredibly smart.
            </>
        ),
    },
    {
        profileImage: '/cody/testimonial-profile-image3.png',
        name: 'Reza Shabani',
        username: '@truerezashabani',
        url: 'https://twitter.com/truerezashabani',
        comment: (
            <>
                Recently I’ve been super impressed with Cody, and am using it constantly. It’s especially good at
                answering questions about large repos.
            </>
        ),
    },
]

export const CodyTestimonials: FunctionComponent<CodyTestimonialsProps> = ({ isLight = false }) => (
    <ContentSection parentClassName="!py-0" className="w-full py-16 pb-24 md:pb-8 md:pt-24 ">
        <div
            className={classNames(
                'flex w-full flex-col items-stretch justify-between gap-x-0 gap-y-[30px] md:flex-row md:gap-x-[30px] md:py-6',
                { 'pt-6': !isLight }
            )}
        >
            {TESTIMONIALS.map(testimonial => (
                <div
                    key={testimonial.name}
                    className="w-full flex-1 rounded-[10px] border border-gray-200 bg-white p-5 md:min-h-[278px] md:items-start"
                >
                    <div className="mb-4 flex items-center">
                        <img className="mr-[10px] h-10 w-10" src={testimonial.profileImage} alt={testimonial.name} />
                        <div>
                            <p className="m-0 mb-[-5px] text-base font-normal leading-6 tracking-[-0.25px] text-violet-500">
                                {testimonial.name}
                            </p>
                            <div className="text-sm font-normal leading-[19.88px]">
                                {testimonial.url ? (
                                    <a
                                        className={classNames('text-sm', {
                                            'text-gray-500': !isLight,
                                            'text-[#343A4D]': isLight,
                                        })}
                                        href="https://twitter.com/jsjoeio"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {testimonial.username}
                                    </a>
                                ) : (
                                    <span
                                        className={classNames('text-sm', {
                                            'text-gray-500': !isLight,
                                            'text-[#343A4D]': isLight,
                                        })}
                                    >
                                        {testimonial.username}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div
                        className={classNames('text-lg font-normal leading-[27px] tracking-[-0.25px]', {
                            'text-gray-700': !isLight,
                            'text-[#0F111A]': isLight,
                        })}
                    >
                        <p className="m-0 p-0">{testimonial.comment}</p>
                    </div>
                </div>
            ))}
        </div>
    </ContentSection>
)
