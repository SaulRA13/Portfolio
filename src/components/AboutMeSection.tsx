import {  Code, HelpingHand, Users } from "lucide-react"

export const AboutMeSection = () => {
    return (
        <section id="about" className="py-24 p-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold md-12 text-center mb-10">
                    About <span className="text-primary"> Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
                    <div className="space-y-6 h-full">
                        <h3 className="text-2xl font-semibold">A Bit About My Background</h3>
                        <p className="text-muted-foreground">
                            I'm a Mexican developer with a strong background in backend development and databases, 
                            complemented by solid frontend skills. 
                            I've been working in the tech industry since 2019, starting my career in testing and technical support.
                            Throughout my professional career, I’ve also taken on freelance projects, developing systems for private companies 
                            and helping improve their overall IT departments and infrastructure.
                        </p>
                        <p className="text-muted-foreground">
                            Over the years, I’ve evolved into a versatile professional, 
                            and I currently work as a DevOps engineer at a German multinational company 
                            based in Yokohama, Japan.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Contact Me
                            </a>
                            <a href="/assets/CV_Saul.pdf" target="_blank" className="px-6 py-2 rounded-full border border-primary text-primary hover:primary/10 transition-colors duration-300">
                                Download CV
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 h-full">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Software development</h4>
                                    <p className="text-muted-foreground break-words">
                                        Backend, Databases, Frontend, DevOps, and more.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <HelpingHand className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Technical support</h4>
                                    <p className="text-muted-foreground">
                                        Troubleshoting and resolving technical issues, 
                                        experince in MES & FIS
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Users className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Communitation</h4>
                                    <p className="text-muted-foreground">
                                        I can effectively communicate with clients and team members 
                                        across different cultures.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}