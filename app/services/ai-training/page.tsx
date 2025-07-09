import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Brain, Database, Target, BarChart3, Cpu, Zap, Terminal } from "lucide-react"
import Link from "next/link"

export default function AITrainingPage() {
  const benefits = [
    "Achieve 95%+ model accuracy with high-quality training data",
    "Reduce model training time by 60% with optimized pipelines",
    "Lower operational costs through efficient resource utilization",
    "Ensure ethical AI with bias detection and mitigation",
    "Scale AI models to handle millions of predictions per day",
    "Maintain model performance with continuous monitoring",
    "Accelerate time-to-market for AI-powered products",
    "Comply with AI governance and regulatory requirements",
  ]

  const trainingServices = [
    {
      title: "Custom Model Development",
      description: "Build AI models tailored to your specific business requirements",
      icon: Brain,
      features: [
        "Model Architecture Design",
        "Training Pipeline Setup",
        "Hyperparameter Tuning",
        "Performance Optimization",
      ],
    },
    {
      title: "Data Preparation & Engineering",
      description: "Transform raw data into high-quality training datasets",
      icon: Database,
      features: ["Data Cleaning", "Feature Engineering", "Data Augmentation", "Quality Validation"],
    },
    {
      title: "Model Fine-tuning",
      description: "Optimize pre-trained models for your specific use cases",
      icon: Target,
      features: ["Transfer Learning", "Domain Adaptation", "Few-shot Learning", "Model Compression"],
    },
    {
      title: "MLOps & Deployment",
      description: "Deploy and monitor AI models in production environments",
      icon: Cpu,
      features: ["Model Deployment", "A/B Testing", "Performance Monitoring", "Automated Retraining"],
    },
  ]

  const modelTypes = [
    "Computer Vision Models",
    "Natural Language Processing",
    "Recommendation Systems",
    "Predictive Analytics",
    "Time Series Forecasting",
    "Anomaly Detection",
    "Classification Models",
    "Regression Models",
    "Clustering Algorithms",
    "Reinforcement Learning",
    "Generative AI Models",
    "Multi-modal AI Systems",
  ]

  const technologies = [
    "TensorFlow & PyTorch",
    "Hugging Face Transformers",
    "Scikit-learn & XGBoost",
    "CUDA & GPU Computing",
    "Docker & Kubernetes",
    "MLflow & Weights & Biases",
    "Apache Airflow",
    "AWS SageMaker",
    "Google Cloud AI",
    "Azure Machine Learning",
    "ONNX & TensorRT",
    "Custom Training Frameworks",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 font-mono">
            <Terminal className="w-3 h-3 mr-1" />
            AI_MODEL_TRAINING
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              AI Model Training
            </span>
            <br />
            <span className="text-white">& Development</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
            Build powerful, accurate AI models that solve real business problems. From data preparation to deployment,
            we create custom machine learning solutions that deliver measurable results and competitive advantages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 tech-glow"
            >
              <Link href="/get-quote">
                Train Your AI Model <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8 py-3 bg-transparent"
            >
              <Link href="/resources/case-studies">View AI Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* AI Training Stats */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">AI Training Excellence</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI models deliver superior performance with industry-leading accuracy and efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Target className="h-8 w-8 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">95%+</div>
              <p className="text-gray-400">Model Accuracy</p>
            </div>
            <div className="p-6 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Zap className="h-8 w-8 text-green-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">60%</div>
              <p className="text-gray-400">Faster Training</p>
            </div>
            <div className="p-6 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <BarChart3 className="h-8 w-8 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">10M+</div>
              <p className="text-gray-400">Predictions/Day</p>
            </div>
            <div className="p-6 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Cpu className="h-8 w-8 text-orange-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <p className="text-gray-400">Models Deployed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Services */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">AI Training Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end AI model development from concept to production deployment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {trainingServices.map((service, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 backdrop-blur-xl border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                      <CardDescription className="text-gray-400">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-gradient-to-r from-green-600 to-teal-600 text-white border-0 font-mono">
                <Terminal className="w-3 h-3 mr-1" />
                SUCCESS_STORY
              </Badge>
              <h2 className="text-3xl font-bold text-white mb-6">Medical Imaging AI Model</h2>
              <p className="text-lg text-gray-300 mb-6">
                We developed a computer vision model for medical imaging that achieved 97% accuracy in detecting
                anomalies, reducing diagnosis time by 80% and improving patient outcomes.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1" />
                  <div>
                    <span className="font-medium text-white">Data Collection:</span>
                    <p className="text-gray-400 text-sm">
                      Curated and annotated 100,000+ medical images with expert validation
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1" />
                  <div>
                    <span className="font-medium text-white">Model Architecture:</span>
                    <p className="text-gray-400 text-sm">
                      Custom CNN architecture optimized for medical imaging analysis
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1" />
                  <div>
                    <span className="font-medium text-white">Training Pipeline:</span>
                    <p className="text-gray-400 text-sm">
                      Implemented distributed training with GPU clusters for faster convergence
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1" />
                  <div>
                    <span className="font-medium text-white">Validation & Testing:</span>
                    <p className="text-gray-400 text-sm">
                      Rigorous testing with independent datasets and clinical validation
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-xl p-6 rounded-lg border border-slate-700/50">
                <h3 className="font-semibold text-white mb-4">Model Performance:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      97%
                    </div>
                    <div className="text-sm text-gray-400">Detection Accuracy</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      80%
                    </div>
                    <div className="text-sm text-gray-400">Faster Diagnosis</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-lg border border-slate-700/50">
                <h3 className="text-xl font-semibold text-white mb-6">AI Model Types We Train</h3>
                <div className="grid grid-cols-2 gap-4">
                  {modelTypes.map((model, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors"
                    >
                      <Brain className="h-4 w-4 text-blue-400" />
                      <span className="text-sm text-gray-300">{model}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-xl p-6 rounded-lg border border-slate-700/50">
                <h4 className="font-medium text-white mb-4">Training Technologies</h4>
                <div className="grid grid-cols-2 gap-2">
                  {technologies.map((tech, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Process */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our AI Training Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Systematic approach to building high-performance AI models
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center bg-slate-800/50 backdrop-blur-xl border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-blue-400" />
                </div>
                <CardTitle className="text-lg text-white">Data Preparation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm">
                  Collect, clean, and prepare high-quality training datasets with proper validation and augmentation.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-slate-800/50 backdrop-blur-xl border-slate-700/50 hover:border-green-500/50 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-green-400" />
                </div>
                <CardTitle className="text-lg text-white">Model Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm">
                  Design optimal model architecture and select appropriate algorithms for your specific use case.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-slate-800/50 backdrop-blur-xl border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-purple-400" />
                </div>
                <CardTitle className="text-lg text-white">Training & Tuning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm">
                  Train models with optimized hyperparameters and implement advanced techniques for best performance.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-slate-800/50 backdrop-blur-xl border-slate-700/50 hover:border-orange-500/50 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="h-8 w-8 text-orange-400" />
                </div>
                <CardTitle className="text-lg text-white">Deployment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm">
                  Deploy models to production with monitoring, scaling, and continuous improvement capabilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Professional AI Model Training Matters</h2>
            <p className="text-xl text-gray-300">
              Expert AI training delivers models that perform reliably in real-world conditions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-slate-800/30 backdrop-blur-xl rounded-lg border border-slate-700/30 hover:border-blue-500/30 transition-all duration-300"
              >
                <CheckCircle className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl rounded-2xl p-12 border border-blue-500/20">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your AI Model?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create custom AI models that solve your specific business challenges and deliver measurable results.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 tech-glow"
            >
              <Link href="/get-quote">
                Start Your AI Training Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
