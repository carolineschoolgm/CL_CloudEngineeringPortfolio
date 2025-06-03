import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, Cloud, Database, Server, Shield } from "lucide-react"

export default function Portfolio() {
  const projects = [
    {
      title: "AWS Migration Project",
      description:
        "Migrated from Console as Code to Infrastructure as Code with AWS CDK TypeScript",
      link: "https://github.com/username/multi-cloud-terraform",
      github: "https://github.com/username/multi-cloud-terraform",
      icon: <Cloud className="w-5 h-5" />,
      tags: ["Terraform", "AWS", "Azure", "GCP", "CI/CD"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Kubernetes Monitoring Stack",
      description:
        "Complete observability solution using Prometheus, Grafana, and Jaeger for microservices monitoring in Kubernetes clusters.",
      link: "https://github.com/username/k8s-monitoring",
      github: "https://github.com/username/k8s-monitoring",
      icon: <Server className="w-5 h-5" />,
      tags: ["Kubernetes", "Prometheus", "Grafana", "Monitoring"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Serverless Data Pipeline",
      description:
        "Event-driven data processing pipeline using AWS Lambda, SQS, and DynamoDB for real-time analytics and reporting.",
      link: "https://github.com/username/serverless-pipeline",
      github: "https://github.com/username/serverless-pipeline",
      icon: <Database className="w-5 h-5" />,
      tags: ["AWS Lambda", "SQS", "DynamoDB", "Serverless"],
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Zero-Trust Security Framework",
      description:
        "Implementation of zero-trust architecture using HashiCorp Vault, Consul, and service mesh for secure microservices communication.",
      link: "https://github.com/username/zero-trust-framework",
      github: "https://github.com/username/zero-trust-framework",
      icon: <Shield className="w-5 h-5" />,
      tags: ["HashiCorp Vault", "Consul", "Security", "Service Mesh"],
      gradient: "from-orange-500 to-red-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header Section */}
      <header className="py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-8">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-30 scale-110"></div>
              <img
                src="/images/profile.jpg"
                alt="Profile picture"
                width={150}
                height={150}
                className="rounded-full mx-auto border-4 border-white shadow-xl relative z-10"
              />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
              Caroline Lozada
            </h1>
            <p className="text-xl text-gray-700 mb-6 max-w-2xl mx-auto">
           AWS Cloud Engineer with strong expirience in IaC,CICD, and cloud security specialized in building scaable and available Cloud Platforms. 
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                href="mailto:clozadaworkgm@gmail.com"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-105 transform"
              >
                clozadaworkgm@gmail.com
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href="https://www.linkedin.com/in/caroline-lozada-a50bb9303/"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-105 transform"
              >
                LinkedIn
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href="https://github.com/carolineschoolgm"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-105 transform"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Projects Section */}
      <main className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-12 text-center">
            Featured Projects
          </h2>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-white/70 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600"></div>

                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient} text-white shadow-lg`}>
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-800 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex space-x-2">
                    <Link
                      href={project.github}
                      className="p-2 text-gray-500 hover:text-white hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-900 rounded-lg transition-all duration-300 hover:scale-110 transform"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                    <Link
                      href={project.link}
                      className={`p-2 text-gray-500 hover:text-white hover:bg-gradient-to-r hover:${project.gradient} rounded-lg transition-all duration-300 hover:scale-110 transform`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed relative z-10">{project.description}</p>

                <div className="flex flex-wrap gap-2 relative z-10">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-blue-100 hover:to-purple-100 text-gray-700 text-sm rounded-full transition-all duration-300 hover:scale-105 transform cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/20 bg-gradient-to-r from-slate-50/50 to-blue-50/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Caroline Lozada. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}
