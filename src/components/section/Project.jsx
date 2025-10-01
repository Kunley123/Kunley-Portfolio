import { RevealOnScroll } from './../RevealOnScroll.jsx';


export const Project = () => {
    return <section id="project" className="min-h-screen flex items-center justify-center py-20">

        <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-cyan-300 bg-clip-text text-transparent text-center">Featured Projects</h2>
                <div className="grid grid-cold-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 2246,0.2)]">
                        <h3 className="text-xl font-bold mb-2">E-commerce Platform</h3>
                        <p className="text-gray mb-4">Commercial platform for selling of products</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["JavaScript", "HTML", "CSS"].map((tech, key) => {
                                return (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246,0.1)] transition-all cursor-pointer">
                                        {tech}
                                    </span>)
                            })}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 2246,0.2)]">
                        <h3 className="text-xl font-bold mb-2">E-commerce Platform</h3>
                        <p className="text-gray mb-4">Commercial platform for selling of products</p>
                        <div>
                            {["JavaScript", "HTML", "CSS"].map((tech, key) => {
                                return (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246,0.1)] transition-all cursor-pointer">
                                        {tech}
                                    </span>)
                            })}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>

}