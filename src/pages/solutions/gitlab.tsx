import { FunctionComponent } from 'react'

import { ContentSection, Layout } from '../../components'
import { LogoGrid } from '../../components/cody/LogoGrid'
import { ContactUsCta } from '../../components/cta/ContactUsCta'
import ReadCaseStudyLink from '../../components/ReadCaseStudyLink'
import { AutomationSection } from '../../components/solutions/AutomationSection'
import { IntroCard } from '../../components/solutions/IntroCard'
import { SearchDescriptionSection } from '../../components/solutions/SearchDescriptionSection'
import { SolutionExplanationSection } from '../../components/solutions/SolutionExplanationSection'

const explanationCardData = [
    {
        title: 'AI personalized to your code',
        description: 'Cody pulls from your entire GitLab codebase to explain and write contextually-aware code.',
        className: 'order-3 md:order-1',
    },
    {
        title: 'Generate code with chat and commands',
        description:
            'Ask Cody to generate code for you or use a pre-built command to quickly generate unit tests or documentation.',
        className: 'order-1 md:order-2',
    },
    {
        title: 'AI-assisted autocomplete',
        description: 'Cody autocompletes code in any programming language, configuration file, or documention.',
        className: 'order-2 md:order-3',
    },
]

const GitLab: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Code intelligence for GitLab',
            description:
                "Enhance your GitLab experience with Sourcegraph's Code intelligence platform. Try Cody for contextual code writing, command generation, and AI autocompletion. Get seamless integration, code search, personalized code insights, and automation for large-scale code changes. Perfect for developers looking to streamline their workflow and understand their codebase at any scale. Contact us for a demo or start an enterprise trial today.",
        }}
        className="overflow-hidden bg-gray-50"
    >
        <IntroCard
            title="Code intelligence for GitLab"
            description="Write and understand code in GitLab environments with native
                            Cody and Code Search integrations."
            mainImageUrl="/solutions/gitlab/enterprise-context.svg"
            contactButtonLabel="Book a demo"
            scaleMobileImage={true}
            alt="GitLab"
        />
        <div className="pt-16 pb-16">
            <LogoGrid mainLogo="sofi" />
        </div>

        <SolutionExplanationSection
            title="Write code faster with AI in your GitLab environment"
            explanationCardData={explanationCardData}
        />
        <SearchDescriptionSection
            title="Grok and understand your entire codebase"
            description="Search your entire GitLab codebase along with all other code hosts at any scale."
        />
        <TestimonialCard />
        <AutomationSection />
        <ContactUsCta
            buttonClassNames="!max-w-full"
            parentClassNames="mdi:!py-24 mdi:!px-0 !px-6 !py-8"
            className="px-14 py-16"
        />
    </Layout>
)

const TestimonialCard: FunctionComponent = () => (
    <ContentSection
        parentClassName="py-16 mdi:!px-20 !px-6"
        className="sg-bg-code-search-new-cta flex max-w-[1232px] flex-col justify-between rounded-3xl border border-gray-200 border-opacity-25"
    >
        <div className="flex flex-col py-16 px-6 md:px-20">
            <div className="flex w-full flex-col gap-[70px] mdi:w-[775px]">
                <img className="h-[54.91px] w-[171.471px]" src="/solutions/gitlab/qualtrics.svg" alt="Qualtrics" />
                <h5 className="!text-[35px] !text-white">
                    'We run our own GitLab instance within our own data centers, and Sourcegraph works seamlessly with
                    it. That made signing up for Cody easy.”
                </h5>
            </div>
            <div className="mt-6">
                <span className="text-[16px] font-normal leading-6 -tracking-[0.25px] text-white text-opacity-80">
                    Godwin Babu
                </span>
                <div className="flex flex-col justify-between gap-24 md:flex-row">
                    <span className="text-[14px] font-normal leading-[19.88px] text-white">
                        Sr. Manager and DevX Leader
                    </span>
                    <ReadCaseStudyLink
                        linkClassName="btn-link-dark btn-link-icon flex gap-2.5 font-semibold leading-[22.4px] text-white"
                        href="/case-studies/qualtrics-speeds-up-unit-tests-and-code-understanding-with-cody"
                    />
                </div>
            </div>
        </div>
    </ContentSection>
)

export default GitLab
