import { Hero } from "@/components/hero/Hero";
import TimelineAbout from "@/components/timeline/TimelineAbout";
import BoxReveal from "@/components/ui/box-reveal";
import Button from "@/components/Link";
import { TestimonialsBlock } from "@/blocks/TestimonialsBlock";

export const metadata = {
	title: "About",
};

export default function AboutPage() {
	return (
		<>
			<Hero fullHeight title="About Me" img="/img/200925148-0.jpg">
				<div>
					<BoxReveal boxColor="bg-secondary-500" duration={0.1} delay={0.2}>
						<p className="mb-5 text-2xl dark:text-gray-300">
							I'm a passionate full-stack developer with a keen eye for design and a drive for
							creating exceptional digital experiences.
						</p>
					</BoxReveal>
					<BoxReveal boxColor="bg-primary-500" duration={0.5} delay={0.2}>
						<p className="text-xl dark:text-gray-300">
							With years of experience in web development and design, I combine technical expertise
							with creative problem-solving to deliver innovative solutions.
						</p>
					</BoxReveal>
					<BoxReveal boxColor="bg-primary-500" duration={0.6} delay={0.3}>
						<div>
							<Button
								href="https://www.linkedin.com/in/ehsanp/"
								target="_blank"
								className="mt-3"
								text="Reach me on LinkedIn."
							/>
							<Button href="/cv" className="mt-3" text="Resume" />
						</div>
					</BoxReveal>
				</div>
			</Hero>
			<TimelineAbout />
			<TestimonialsBlock showAll />
			<section className="py-10 md:py-20">
				<div className="container mx-auto flex flex-col items-center md:flex-row">
					<h2 className="mb-6 font-basement text-2xl md:mb-0 md:w-1/2 md:text-3xl lg:text-6xl">
						<BoxReveal boxColor="bg-primary-500" duration={0.5}>
							{" "}
							Background{" "}
						</BoxReveal>
					</h2>
					<div className="md:w-1/2">
						My journey as a self-taught professional has equipped me with a profound understanding
						of software development, design, and multimedia. With a relentless drive for excellence,
						I have honed my expertise in delivering robust software architectures, seamless user
						experiences, and visually captivating designs. With a diverse skill set, I excel in
						various web development stacks, anchored by a robust command of WordPress and Laravel
						for backend excellence.
						<br />
						<br />
						My proficiency extends seamlessly to front-end mastery with Javascript and HTML/CSS.
						Beyond web development, I possess a profound comprehension of user interface design,
						intricacies of logo and identity creation, and the intricacies of search engine
						optimization.
						<br />
						<br />
						My extensive expertise also spans multimedia and mobile development, as I consistently
						seek novel ideas and methodologies to elevate my skills and enrich the user experience.
					</div>
				</div>
			</section>
			<section className="bg-color-1 clip bg-offwhite py-10 dark:bg-neutral-800 md:py-20">
				<div className="container mx-auto flex flex-col items-center md:flex-row">
					<div className="md:w-1/2">
						<div>
							<ul className="text-base leading-relaxed">
								<li className="pb-1">
									<p>
										<strong className="text-secondary-500">Iterative Excellence:</strong> Code
										and art thrive through iterative processes. I embrace trial, error, and rapid
										iteration to create solutions that transcend boundaries.
									</p>
								</li>
								<li className="pb-1">
									<p>
										<strong className="text-secondary-500">Architects of Inclusivity:</strong>{" "}
										Developers shape a virtual landscape where inclusivity and user-centric design
										prevail. My goal is to create online spaces where every user feels a sense of
										belonging.
									</p>
								</li>
								<li className="pb-1">
									<p>
										<strong className="text-secondary-500">Humility in Design:</strong> Ego has
										no place in design. I approach work humbly, embracing failure to pave the way
										for rapid success.
									</p>
								</li>
								<li className="pb-1">
									<p>
										<strong className="text-secondary-500">Problem Definition:</strong>{" "}
										Effective design starts with clear problem definition. Understanding
										challenges leads to purposeful solutions.
									</p>
								</li>
								<li className="pb-1">
									<p>
										<strong className="text-secondary-500">Diverse Solutions:</strong> No single
										solution fits all. I explore creative possibilities to address unique contexts
										and demands.
									</p>
								</li>
								<li>
									<p>
										<strong className="text-secondary-500">User-Centric Empathy:</strong> Guided
										by empathy, I design from a user-centric perspective, ensuring solutions
										resonate and provide value.
									</p>
								</li>
								<li>
									<p>
										<strong className="text-secondary-500">Ethics and Impact:</strong> I
										prioritize privacy, security, and ethics, contributing to a digital landscape
										of integrity.
									</p>
								</li>
							</ul>
						</div>
					</div>
					<h2 className="mb-6 font-basement text-2xl md:mb-0 md:w-1/2 md:text-3xl lg:text-6xl">
						<BoxReveal boxColor="bg-secondary-500 leading-12 w-full" duration={0.5} width="100%">
							<div className="w-full text-right">Philosophy</div>
						</BoxReveal>
					</h2>
				</div>
			</section>
			<section className="bg-color-10 py-10 md:py-20">
				<div className="container mx-auto flex flex-col items-center md:flex-row">
					<h2 className="mb-6 font-basement text-2xl md:mb-0 md:w-1/2 md:text-3xl lg:text-6xl">
						<BoxReveal boxColor="bg-primary-500" duration={0.5}>
							Motivators{" "}
						</BoxReveal>
					</h2>
					<div className="text-base leading-relaxed md:w-1/2">
						<div>
							<ul>
								<li className="pb-1">
									<p>
										Tackling <strong className="text-primary-500">complex</strong> problems.
									</p>
								</li>
								<li className="pb-1">
									<p>
										Empowering colleagues to contribute
										<strong className="text-secondary-500"> meaningful</strong> insights.
									</p>
								</li>
								<li className="pb-1">
									<p>
										Constructing cohesive and{" "}
										<strong className="text-purple-500">scalable software</strong>
										architectures.
									</p>
								</li>
								<li className="pb-1">
									<p>
										Optimizing workflows.{" "}
										<strong className="text-[#d74f08]">Sharing expertise</strong>.
									</p>
								</li>
								<li className="pb-1">
									<p>
										Establishing <strong className="text-teal-500">credibility</strong> and
										reliability.
									</p>
								</li>
								<li>
									<p>
										Code is not just functional; it molds
										<strong className="text-lime-500">digital environments</strong>, driving
										innovation.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section className="bg-color-1 py-10 md:py-20">
				<div className="container mx-auto items-center">
					<div className="flex flex-col items-center text-base leading-relaxed">
						<img src="/img/tea.png" alt="Time for Tea" className="clip" />
						<h2 className="my-6 font-basement text-2xl md:text-3xl lg:text-6xl">
							<BoxReveal boxColor="bg-primary-500" duration={0.5}>
								It's Always Time for Tea
							</BoxReveal>
						</h2>
						<div className="text-center md:w-1/2">
							It's always time for tea" reflects the value of creating space for connection and
							thoughtful collaboration. In tech, it serves as a reminder to pause, reflect, and
							engage with others meaningfully. This mindset fosters creativity, inclusivity, and
							innovative problem-solving, demonstrating that the best ideas emerge when teams feel
							supported and empowered to share their perspectives.
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
