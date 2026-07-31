/**
 * SERVICES CONTENT DATA
 * ------------------------------------------------------------
 * Single source of truth for the Services architecture:
 * 6 service groups, each with 4-9 categories.
 *
 * Edit this file to change any Services page copy — the group
 * and category page templates are thin wrappers that just pull
 * their content from here. Nothing in this file affects layout;
 * it is pure content.
 *
 * imageDir maps a group to its folder under:
 *   /assets/images/services/<imageDir>/
 * Category images are expected at:
 *   /assets/images/services/<imageDir>/<category-slug>.jpg
 * Until real images are added, cards fall back to a styled
 * icon placeholder automatically (see service-category-card.njk).
 * ------------------------------------------------------------
 */

const groups = [
  {
    slug: "ai-solutions",
    name: "AI Solutions",
    imageDir: "ai-solutions",
    navBlurb: "Custom AI, machine learning & computer vision systems.",
    metaTitle: "AI Solutions | Custom AI Development & Machine Learning — Sanestix",
    metaDescription: "Sanestix builds custom AI, machine learning, computer vision and AI integration solutions engineered for real business outcomes, not demos.",
    heroKicker: "AI Solutions",
    heroHeadline: "Intelligent systems, built around your data",
    heroDescription: "We design and ship custom AI — from bespoke models and machine learning pipelines to computer vision and AI-integrated workflows — engineered to solve a specific business problem, not to chase a trend.",
    overviewTitle: "AI that's built for your business, not a demo reel",
    overviewParagraphs: [
      "Most \"AI solutions\" are generic wrappers around a public API. Ours are built around your data, your workflows, and the decisions your team actually needs to make faster. We start with the outcome — fewer support tickets, faster underwriting, automated quality checks — and work backward to the model.",
      "Our AI Solutions practice covers the full stack: custom model development, applied machine learning, computer vision, and the integration work that connects AI into the tools your business already runs on. Every engagement includes a clear data audit before a single line of model code is written."
    ],
    benefits: [
      { title: "Built On Your Data", desc: "Models are trained and evaluated against your actual data and edge cases, not generic benchmarks." },
      { title: "Production-Grade From Day One", desc: "We design for latency, cost, and monitoring up front — not as an afterthought once a prototype breaks." },
      { title: "Explainable Outputs", desc: "Every model ships with a clear rationale for its predictions, so your team can trust and audit it." },
      { title: "Vendor-Neutral Architecture", desc: "We choose the right model provider or open-source stack for the job — never locked to one vendor." },
      { title: "Continuous Evaluation", desc: "Automated evaluation pipelines catch drift and accuracy regressions before they reach your users." },
      { title: "Security & Compliance First", desc: "Data handling, access controls, and retention are scoped against your compliance requirements from the start." }
    ],
    technologies: ["PyTorch", "TensorFlow", "scikit-learn", "OpenCV", "Hugging Face", "AWS SageMaker", "Vertex AI", "ONNX", "FastAPI", "Docker"],
    process: [
      { title: "Data & Problem Audit", desc: "We map your data sources, quality, and the exact decision the AI needs to improve." },
      { title: "Model Design & Prototyping", desc: "We prototype against real samples of your data to validate feasibility before committing to a build." },
      { title: "Build, Train & Evaluate", desc: "Full model development with rigorous evaluation against held-out data and business metrics." },
      { title: "Deploy & Monitor", desc: "Production deployment with monitoring, retraining triggers, and clear performance dashboards." }
    ],
    categories: [
      {
        slug: "custom-ai-development",
        name: "Custom AI Development",
        shortDesc: "Bespoke AI models and systems designed around your specific data and business problem.",
        metaTitle: "Custom AI Development Services — Sanestix",
        metaDescription: "Custom AI model development from data audit to production deployment — built around your business problem, not a generic template.",
        heroKicker: "AI Solutions / Custom AI Development",
        heroHeadline: "AI models designed around your problem, not a template",
        heroDescription: "We build bespoke AI systems from the ground up — custom architectures, training pipelines, and evaluation frameworks tailored to the exact decision your business needs to automate or improve.",
        introTitle: "Off-the-shelf AI rarely fits a real business problem",
        introParagraphs: [
          "Generic AI tools are trained for the average case. Your business isn't average — your product catalog, your customer language, your risk tolerance, and your edge cases are specific to you. Custom AI development starts from your data and your constraints, not a pre-trained model's assumptions.",
          "We work with your team to define success metrics upfront, then design, train, and validate a model built specifically to hit them — with full visibility into how and why it makes each prediction."
        ],
        whatWeBuild: [
          { title: "Custom Prediction Models", desc: "Classification, regression, and ranking models trained on your proprietary datasets." },
          { title: "Recommendation Engines", desc: "Personalized recommendation systems tuned to your catalog and customer behavior." },
          { title: "Anomaly & Fraud Detection", desc: "Models that flag unusual patterns in transactions, usage, or operational data in real time." },
          { title: "Decision Support Systems", desc: "AI-assisted tools that surface the right recommendation to a human at the right moment." }
        ],
        capabilities: [
          { title: "End-to-End Model Ownership", desc: "From data pipeline to trained model to deployed API — we own the full lifecycle." },
          { title: "Custom Architecture Design", desc: "We select or design the model architecture that fits your data shape and latency budget." },
          { title: "Rigorous Evaluation", desc: "Held-out test sets, cross-validation, and business-metric scoring before anything ships." },
          { title: "Explainability Built In", desc: "SHAP, LIME, or attention-based explanations so predictions are never a black box." },
          { title: "Scalable Training Pipelines", desc: "Reproducible, versioned training pipelines that make retraining a routine task." },
          { title: "Clear Documentation", desc: "Model cards and technical documentation your team can hand off or audit at any time." }
        ],
        useCases: [
          { title: "Demand & Inventory Forecasting", desc: "Predict stock needs by SKU and location to reduce overstock and stockouts." },
          { title: "Customer Churn Prediction", desc: "Identify at-risk accounts weeks before they cancel, with the reasons behind the risk score." },
          { title: "Dynamic Pricing Models", desc: "Price optimization models that respond to demand, competition, and inventory signals." },
          { title: "Risk & Credit Scoring", desc: "Custom scoring models built on your underwriting criteria and historical outcomes." }
        ],
        process: [
          { title: "Discovery & Data Audit", desc: "We assess data availability, quality, and labeling needs before scoping the model." },
          { title: "Prototype & Validate", desc: "A working prototype trained on a data sample to prove feasibility early." },
          { title: "Full Build & Training", desc: "Production training pipeline, hyperparameter tuning, and rigorous evaluation." },
          { title: "Deployment & Handover", desc: "Model served via API, monitored, and documented for your team." }
        ],
        technology: ["Python", "PyTorch", "scikit-learn", "XGBoost", "MLflow", "AWS SageMaker", "FastAPI", "PostgreSQL"],
        whySanestix: [
          { title: "We Ship Models, Not Notebooks", desc: "Every engagement ends in a production-deployed, monitored system — not a research artifact." },
          { title: "Business-Metric Obsessed", desc: "We optimize for the metric that matters to your P&L, not just accuracy on a leaderboard." },
          { title: "Transparent Process", desc: "You see the data audit, the evaluation results, and the model's reasoning at every stage." }
        ],
        faq: [
          { q: "How much data do we need to get started?", a: "It depends on the problem, but we can usually validate feasibility with a few thousand labeled examples. If you don't have labeled data yet, we'll help you scope a labeling plan as part of discovery." },
          { q: "What if our data is messy or incomplete?", a: "That's normal. Our data audit phase identifies gaps and quality issues up front, and we build the cleaning and feature engineering pipeline as part of the project." },
          { q: "Do you use pre-trained models or build from scratch?", a: "Usually a hybrid — we fine-tune strong pre-trained foundations where it makes sense and build custom architecture where your problem genuinely needs it. We never force a generic model onto a problem it wasn't designed for." },
          { q: "How do you measure if the model is actually working?", a: "We agree on business-relevant success metrics before training begins — not just accuracy, but the metric tied to revenue, cost, or risk — and report against them continuously post-launch." }
        ]
      },
      {
        slug: "machine-learning-solutions",
        name: "Machine Learning Solutions",
        shortDesc: "End-to-end ML pipelines that turn historical data into reliable, ongoing predictions.",
        metaTitle: "Machine Learning Solutions — Sanestix",
        metaDescription: "Production ML pipelines for forecasting, scoring, and prediction — built, trained, deployed, and monitored by the Sanestix AI team.",
        heroKicker: "AI Solutions / Machine Learning Solutions",
        heroHeadline: "Machine learning pipelines built to run in production, not just in a notebook",
        heroDescription: "We design end-to-end ML systems — data pipelines, feature engineering, training, and monitored deployment — so your predictions keep improving as your data grows.",
        introTitle: "The gap between a good model and a working system",
        introParagraphs: [
          "A model that scores well in a notebook is only half the work. The other half is the pipeline that feeds it fresh data, retrains it on schedule, monitors for drift, and serves predictions reliably at scale. That's where most ML projects stall.",
          "We build the full pipeline, not just the model — so your machine learning system keeps working long after the initial handover, with clear visibility into performance over time."
        ],
        whatWeBuild: [
          { title: "Forecasting Pipelines", desc: "Time-series models for demand, revenue, and operational forecasting with automated retraining." },
          { title: "Feature Engineering Systems", desc: "Reusable feature pipelines that turn raw operational data into model-ready signals." },
          { title: "Classification & Scoring Models", desc: "Lead scoring, quality scoring, and risk classification models tuned to your thresholds." },
          { title: "Model Monitoring Dashboards", desc: "Live dashboards tracking accuracy, drift, and data quality over time." }
        ],
        capabilities: [
          { title: "Automated Retraining", desc: "Scheduled or trigger-based retraining pipelines so models stay accurate as data shifts." },
          { title: "Drift Detection", desc: "Statistical monitoring that flags when incoming data no longer matches training assumptions." },
          { title: "Feature Store Design", desc: "Centralized, versioned feature pipelines shared across multiple models and teams." },
          { title: "A/B Model Evaluation", desc: "Safe rollout of new model versions with side-by-side performance comparison." },
          { title: "Scalable Serving", desc: "Low-latency prediction serving that scales with traffic without re-architecting later." },
          { title: "Cost-Aware Design", desc: "Training and inference costs are scoped and optimized as part of the architecture, not an afterthought." }
        ],
        useCases: [
          { title: "Sales Forecasting", desc: "Revenue and pipeline forecasts that update automatically as new deal data comes in." },
          { title: "Predictive Maintenance", desc: "Equipment failure prediction from sensor and maintenance log data." },
          { title: "Lead & Quality Scoring", desc: "Automated scoring that ranks leads or outputs by likelihood of a desired outcome." },
          { title: "Customer Lifetime Value Modeling", desc: "Predict long-term value per customer to guide acquisition and retention spend." }
        ],
        process: [
          { title: "Data Pipeline Assessment", desc: "We map existing data sources and design the pipeline needed to feed the model reliably." },
          { title: "Feature Engineering", desc: "We build and validate the features that give the model meaningful signal." },
          { title: "Model Training & Tuning", desc: "Iterative training with hyperparameter tuning against your business metric." },
          { title: "Deployment & Monitoring", desc: "Production serving with drift detection and automated retraining schedules." }
        ],
        technology: ["Python", "Pandas", "scikit-learn", "XGBoost", "Airflow", "MLflow", "AWS SageMaker", "BigQuery"],
        whySanestix: [
          { title: "Pipelines, Not One-Off Models", desc: "We build the infrastructure that keeps your ML system accurate long-term, not a single static model." },
          { title: "Monitoring Included By Default", desc: "Every ML deployment ships with drift and performance monitoring, not an optional add-on." },
          { title: "Practical Over Fancy", desc: "We reach for the simplest model that reliably hits your target metric — not the most complex one." }
        ],
        faq: [
          { q: "How often does the model need retraining?", a: "It depends on how fast your underlying data changes. We set up drift monitoring during the project and recommend a retraining cadence based on what the data actually shows." },
          { q: "Can this integrate with our existing data warehouse?", a: "Yes. We build directly against your existing warehouse or database wherever possible, rather than requiring a new data platform." },
          { q: "What happens if model performance degrades after launch?", a: "Our monitoring dashboards flag degradation early, and we include a defined retraining and support process so it's addressed before it affects your business." },
          { q: "Do we need a data science team in-house to maintain this?", a: "No. We design the retraining and monitoring pipeline to run with minimal manual intervention, and provide documentation so any technical team can maintain it." }
        ]
      },
      {
        slug: "computer-vision",
        name: "Computer Vision",
        shortDesc: "Image and video AI for detection, classification, quality control, and automated inspection.",
        metaTitle: "Computer Vision Development Services — Sanestix",
        metaDescription: "Custom computer vision systems for object detection, quality inspection, and video analytics — built and deployed by Sanestix.",
        heroKicker: "AI Solutions / Computer Vision",
        heroHeadline: "Vision systems that see what your process needs them to see",
        heroDescription: "We build custom computer vision models for detection, classification, and quality inspection — trained on your images, tuned for your camera setup and lighting conditions.",
        introTitle: "Computer vision that works in your real environment",
        introParagraphs: [
          "Vision models trained on stock datasets often fail the moment they meet your actual camera angle, lighting, or product variation. We train and validate directly on images from your environment, so accuracy holds up on the factory floor or storefront, not just in a demo.",
          "From single-object detection to multi-camera video analytics, we scope the model to the specific visual signal your business needs to act on."
        ],
        whatWeBuild: [
          { title: "Object Detection Systems", desc: "Real-time detection and localization of products, defects, or people in images and video." },
          { title: "Automated Quality Inspection", desc: "Vision models that flag defects on a production line faster and more consistently than manual checks." },
          { title: "Image Classification Pipelines", desc: "Automated tagging and categorization for large image libraries or product catalogs." },
          { title: "Video Analytics", desc: "Motion, occupancy, and behavior analytics from existing camera feeds." }
        ],
        capabilities: [
          { title: "Custom Dataset Curation", desc: "We help label and augment your image data to cover the variation your model needs to handle." },
          { title: "Edge & Cloud Deployment", desc: "Models optimized to run on edge devices or cameras, or scaled centrally in the cloud." },
          { title: "Real-Time Inference", desc: "Low-latency detection pipelines suitable for live video and production-line speeds." },
          { title: "Multi-Camera Support", desc: "Architectures that aggregate signal across multiple camera feeds reliably." },
          { title: "Lighting & Angle Robustness", desc: "Models validated against the actual lighting and camera positions of your environment." },
          { title: "Privacy-Conscious Design", desc: "Configurable blurring, on-device processing, and data retention controls where required." }
        ],
        useCases: [
          { title: "Manufacturing Defect Detection", desc: "Automated visual inspection that catches defects human inspectors miss at speed." },
          { title: "Retail Shelf Monitoring", desc: "Detect out-of-stock shelves and planogram compliance from store camera feeds." },
          { title: "Warehouse Safety Monitoring", desc: "Detect PPE compliance and restricted-zone breaches in real time." },
          { title: "Document & ID Verification", desc: "Automated extraction and verification of documents and identity images." }
        ],
        process: [
          { title: "Image Data Assessment", desc: "We review sample images or camera feeds to scope model feasibility and labeling needs." },
          { title: "Dataset Labeling & Curation", desc: "Structured labeling of representative images covering your real-world variation." },
          { title: "Model Training & Validation", desc: "Training against your data with accuracy validated on held-out real-world images." },
          { title: "Deployment to Edge or Cloud", desc: "Deployment tuned for your latency, cost, and hardware constraints." }
        ],
        technology: ["OpenCV", "PyTorch", "YOLO", "TensorRT", "ONNX Runtime", "AWS Panorama", "Roboflow", "NVIDIA Jetson"],
        whySanestix: [
          { title: "Trained On Your Environment", desc: "We validate against your actual cameras and lighting, not a generic benchmark dataset." },
          { title: "Real-Time Ready", desc: "We design for the latency your production line or live video feed actually requires." },
          { title: "Deployment Flexibility", desc: "Edge, on-premise, or cloud — we deploy where your infrastructure and privacy needs require." }
        ],
        faq: [
          { q: "Do you need our existing camera footage to start?", a: "Ideally yes — sample images or footage from your actual setup dramatically improve accuracy and shorten the project timeline." },
          { q: "Can this run on our existing cameras?", a: "In most cases, yes. We assess your camera resolution and placement during discovery and recommend adjustments only if genuinely needed." },
          { q: "How accurate can we expect the model to be?", a: "Accuracy depends on data quality and the specific detection task, but we set a target accuracy threshold with you upfront and validate against it before deployment." },
          { q: "Can the system run without sending video to the cloud?", a: "Yes, we support fully on-device (edge) inference for environments with privacy or connectivity constraints." }
        ]
      },
      {
        slug: "ai-integration-services",
        name: "AI Integration Services",
        shortDesc: "Embed AI capabilities directly into your existing software, CRM, and internal tools.",
        metaTitle: "AI Integration Services — Sanestix",
        metaDescription: "Integrate AI models and APIs into your existing software, CRM, and internal tools without a rebuild — by the Sanestix AI integration team.",
        heroKicker: "AI Solutions / AI Integration Services",
        heroHeadline: "AI that plugs into the tools you already run",
        heroDescription: "You don't need to rebuild your stack to get value from AI. We integrate models and intelligent automation directly into your existing CRM, internal tools, and workflows.",
        introTitle: "AI value shouldn't require a rebuild",
        introParagraphs: [
          "The fastest path to AI ROI is usually inside the systems you already use every day — your CRM, your support desk, your internal dashboards. AI Integration Services connects models and intelligent automation into that existing stack without disrupting how your team works.",
          "We handle the API design, authentication, data mapping, and error handling needed to make an AI feature feel like a native part of your existing software, not a bolted-on experiment."
        ],
        whatWeBuild: [
          { title: "CRM AI Add-Ons", desc: "AI scoring, summarization, and suggestion features embedded directly into your CRM." },
          { title: "Internal Tool AI Features", desc: "AI-assisted search, tagging, and drafting features added to internal dashboards and admin panels." },
          { title: "API-Based AI Middleware", desc: "Middleware layers that connect your existing systems to AI providers securely and reliably." },
          { title: "Workflow-Embedded AI", desc: "AI steps embedded directly inside existing approval, ticketing, or fulfillment workflows." }
        ],
        capabilities: [
          { title: "Seamless API Integration", desc: "Clean integration with your existing backend, avoiding disruptive architecture changes." },
          { title: "Secure Credential Handling", desc: "Proper secrets management and access scoping for every AI provider connected." },
          { title: "Fallback & Error Handling", desc: "Graceful fallbacks when an AI call fails or times out, so your core workflow never breaks." },
          { title: "Cost Monitoring", desc: "Usage tracking and rate limiting to keep AI API costs predictable." },
          { title: "Data Mapping & Transformation", desc: "Clean mapping between your existing data schema and what the AI model expects." },
          { title: "Change Management Support", desc: "Rollout support and documentation so your team adopts the new AI feature smoothly." }
        ],
        useCases: [
          { title: "CRM Lead Summarization", desc: "Auto-generated call and email summaries written directly into CRM records." },
          { title: "Support Ticket Triage", desc: "AI-based ticket categorization and priority scoring inside your existing helpdesk." },
          { title: "Internal Knowledge Search", desc: "AI-powered search across internal documents and tools your team already uses." },
          { title: "Automated Report Drafting", desc: "AI-drafted first versions of recurring internal reports, reviewed and approved by staff." }
        ],
        process: [
          { title: "System & API Audit", desc: "We review your existing tools and APIs to scope the cleanest integration path." },
          { title: "Integration Design", desc: "We design the data flow, authentication, and fallback behavior before building." },
          { title: "Build & Test", desc: "Integration is built and tested against your real data and edge cases." },
          { title: "Rollout & Support", desc: "Phased rollout with monitoring and a clear support plan post-launch." }
        ],
        technology: ["REST APIs", "GraphQL", "OpenAI API", "Anthropic API", "Zapier", "n8n", "Node.js", "Python"],
        whySanestix: [
          { title: "We Fit Into Your Stack", desc: "Integration is designed around your existing systems, not a reason to replace them." },
          { title: "Reliability First", desc: "Every integration ships with fallback handling so an AI outage never breaks your core workflow." },
          { title: "Clear Cost Visibility", desc: "You always know what an AI feature costs to run before and after it ships." }
        ],
        faq: [
          { q: "Will this require changes to our existing CRM or tools?", a: "In most cases, no rebuild is required. We integrate via existing APIs or lightweight extensions rather than replacing your current systems." },
          { q: "What happens if the AI provider has downtime?", a: "We build fallback handling into every integration so a third-party outage degrades gracefully rather than breaking your workflow." },
          { q: "Can you integrate with a system that doesn't have a public API?", a: "Often yes, depending on the system — we assess this during the system audit and recommend the most reliable integration path available." },
          { q: "How do you keep AI API costs under control?", a: "We build in usage monitoring, caching, and rate limiting from the start, and give you visibility into per-feature cost." }
        ]
      }
    ]
  },

  {
    slug: "generative-agentic-ai",
    name: "Generative & Agentic AI",
    imageDir: "generative-ai",
    navBlurb: "Generative AI, autonomous agents, LLM integration & RAG systems.",
    metaTitle: "Generative & Agentic AI Development — Sanestix",
    metaDescription: "Sanestix builds generative AI products, autonomous AI agents, LLM integrations, and RAG knowledge systems that plan, decide, and act.",
    heroKicker: "Generative & Agentic AI",
    heroHeadline: "Autonomous systems that plan, decide, and get work done",
    heroDescription: "We design and deploy generative AI products and agentic systems — from LLM-powered features to autonomous agents that execute multi-step tasks on your behalf.",
    overviewTitle: "Beyond chatbots: AI that takes action",
    overviewParagraphs: [
      "Generative AI has moved past single-turn chat. The real value today is in agentic systems — AI that plans a sequence of steps, calls the right tools, and completes a task end-to-end with appropriate human oversight. We build both the generative product layer and the agentic orchestration underneath it.",
      "Whether you need a generative content engine, a customer-facing AI agent, or a RAG system that grounds answers in your own knowledge base, we design for reliability and control just as much as capability."
    ],
    benefits: [
      { title: "Grounded, Not Hallucinated", desc: "Every deployment includes grounding techniques — RAG, tool-calling, and guardrails — to keep outputs accurate." },
      { title: "Human-in-the-Loop by Design", desc: "Agents are scoped with clear approval points for high-stakes actions, not full autonomy by default." },
      { title: "Model-Agnostic", desc: "We architect around your needs first, then choose the best-fit LLM provider — not the other way around." },
      { title: "Evaluation-Driven", desc: "Structured evaluation sets and automated testing before any generative feature reaches production." },
      { title: "Cost-Controlled", desc: "Prompt and architecture design that keeps token usage — and your bill — predictable at scale." },
      { title: "Secure by Default", desc: "Sensitive data handling, prompt injection defenses, and access controls built into every agent." }
    ],
    technologies: ["OpenAI API", "Anthropic API", "LangChain", "LlamaIndex", "Pinecone", "Weaviate", "Model Context Protocol", "Vector Databases"],
    process: [
      { title: "Use Case & Risk Scoping", desc: "We define the task, the required autonomy level, and where human review is non-negotiable." },
      { title: "Prototype & Evaluate", desc: "A working prototype is tested against real scenarios and edge cases before full build." },
      { title: "Build & Guardrail", desc: "Full implementation with grounding, guardrails, and monitoring built in from the start." },
      { title: "Deploy & Iterate", desc: "Production launch with ongoing prompt and performance tuning based on real usage." }
    ],
    categories: [
      {
        slug: "generative-ai-development",
        name: "Generative AI Development",
        shortDesc: "Custom generative AI products — from content engines to AI-assisted creative tools.",
        metaTitle: "Generative AI Development Services — Sanestix",
        metaDescription: "Custom generative AI products built on large language and diffusion models — content engines, creative tools, and AI-assisted workflows.",
        heroKicker: "Generative & Agentic AI / Generative AI Development",
        heroHeadline: "Generative AI products built around your content and brand voice",
        heroDescription: "We build custom generative AI features and products — text, image, and structured content generation — tuned to your brand voice and business rules.",
        introTitle: "Generic AI output doesn't sound like your business",
        introParagraphs: [
          "Off-the-shelf generative AI produces generic, one-size-fits-all output. Real generative AI products need brand voice consistency, factual grounding, and guardrails around what the system should never say. That's the layer we build.",
          "From prompt architecture to fine-tuning and evaluation, we treat generative AI as a product to be engineered, not a feature to be bolted on."
        ],
        whatWeBuild: [
          { title: "Content Generation Engines", desc: "Automated drafting of marketing copy, product descriptions, and reports in your brand voice." },
          { title: "AI-Assisted Creative Tools", desc: "Internal tools that help your team generate and iterate on creative assets faster." },
          { title: "Structured Data Generation", desc: "Generative systems that output structured, validated data — not just free text." },
          { title: "Personalized Content Systems", desc: "Generation pipelines that tailor output per customer segment or context." }
        ],
        capabilities: [
          { title: "Prompt Architecture", desc: "Structured, versioned prompt systems designed for consistency, not one-off prompt tinkering." },
          { title: "Brand Voice Tuning", desc: "Fine-tuning and few-shot design that keeps output consistent with your brand guidelines." },
          { title: "Output Validation", desc: "Structured output schemas and validation so generated content is reliably usable downstream." },
          { title: "Content Guardrails", desc: "Explicit rules for what the system must never generate, enforced at the architecture level." },
          { title: "Multi-Modal Generation", desc: "Text, image, and structured content generation combined where the use case calls for it." },
          { title: "Human Review Workflows", desc: "Review-and-approve pipelines for teams that want AI drafts with human sign-off." }
        ],
        useCases: [
          { title: "Marketing Copy Generation", desc: "First-draft ad copy, product descriptions, and email content generated at scale." },
          { title: "Report & Summary Drafting", desc: "Automated first drafts of recurring internal or client-facing reports." },
          { title: "Product Catalog Enrichment", desc: "Auto-generated product descriptions and tags for large or fast-changing catalogs." },
          { title: "Personalized Outreach Content", desc: "Generated outreach messages tailored per lead or customer segment." }
        ],
        process: [
          { title: "Voice & Guardrail Definition", desc: "We define your brand voice, tone rules, and hard content boundaries upfront." },
          { title: "Prompt & Pipeline Design", desc: "We architect the generation pipeline, including validation and fallback logic." },
          { title: "Evaluation & Tuning", desc: "Output is tested against real examples and refined against a defined quality bar." },
          { title: "Launch & Monitor", desc: "Production rollout with ongoing quality monitoring and prompt refinement." }
        ],
        technology: ["OpenAI API", "Anthropic API", "LangChain", "Stable Diffusion", "Python", "Node.js"],
        whySanestix: [
          { title: "Voice-Consistent by Design", desc: "We engineer for brand consistency, not just plausible-sounding output." },
          { title: "Structured, Not Just Chatty", desc: "Our generation pipelines produce validated, usable output — not just conversational text." },
          { title: "Guardrails From Day One", desc: "Content boundaries are part of the architecture, not a post-launch patch." }
        ],
        faq: [
          { q: "Can the AI match our specific brand voice?", a: "Yes. We use a combination of structured prompting, few-shot examples, and optional fine-tuning against your existing content to match your voice consistently." },
          { q: "How do you prevent off-brand or incorrect output?", a: "We build explicit content guardrails and validation rules into the pipeline, and recommend human review workflows for anything customer-facing at launch." },
          { q: "Can this generate more than just text?", a: "Yes, we support image and structured data generation alongside text where the use case calls for it." },
          { q: "How much manual review will our team need to do?", a: "That's a design choice we make together — some teams want full automation, others want a review-and-approve step. We build for whichever fits your risk tolerance." }
        ]
      },
      {
        slug: "ai-agents",
        name: "AI Agents",
        shortDesc: "Autonomous agents that plan, decide, and execute multi-step tasks on your behalf.",
        metaTitle: "AI Agent Development Services — Sanestix",
        metaDescription: "Custom autonomous AI agents that plan, call tools, and execute multi-step business tasks — built with clear guardrails and human oversight.",
        heroKicker: "Generative & Agentic AI / AI Agents",
        heroHeadline: "Autonomous agents that do the work, not just answer questions",
        heroDescription: "We design and build AI agents that plan a sequence of steps, call the right tools and systems, and complete real multi-step tasks — with the guardrails your business needs.",
        introTitle: "From answering questions to completing tasks",
        introParagraphs: [
          "A chatbot answers a question. An agent completes a task — checking a system, calling an API, making a decision, and following up — across multiple steps without a human driving every action. That shift is where the real automation value is.",
          "We design agentic systems with explicit scopes: what the agent can decide on its own, and where it must pause for human approval. Autonomy is a deliberate design choice, not a default."
        ],
        whatWeBuild: [
          { title: "Task-Automation Agents", desc: "Agents that execute defined multi-step workflows across your existing tools and systems." },
          { title: "Research & Retrieval Agents", desc: "Agents that gather, synthesize, and summarize information from multiple sources on demand." },
          { title: "Customer-Facing Agents", desc: "Agents that handle multi-turn customer requests end-to-end, escalating when needed." },
          { title: "Internal Ops Agents", desc: "Agents that monitor systems and trigger actions or alerts based on defined conditions." }
        ],
        capabilities: [
          { title: "Tool & Function Calling", desc: "Agents that reliably call your APIs, databases, and internal tools as part of a task." },
          { title: "Multi-Step Planning", desc: "Planning logic that breaks a goal into ordered steps and adapts when a step fails." },
          { title: "Human-in-the-Loop Checkpoints", desc: "Defined approval points for actions with financial, legal, or customer-facing risk." },
          { title: "Memory & Context Management", desc: "Persistent context across a task so the agent doesn't lose track mid-workflow." },
          { title: "Guardrails & Permissions", desc: "Explicit limits on what systems and actions each agent can access." },
          { title: "Observability & Logging", desc: "Full audit trails of every decision and tool call an agent makes." }
        ],
        useCases: [
          { title: "Automated Order Processing", desc: "An agent that validates, processes, and follows up on orders across multiple systems." },
          { title: "IT & Ops Incident Response", desc: "An agent that triages alerts, checks system status, and escalates or resolves automatically." },
          { title: "Research & Competitive Monitoring", desc: "An agent that continuously gathers and summarizes market or competitor information." },
          { title: "Multi-Step Customer Requests", desc: "An agent that handles requests like cancellations or changes across several backend systems." }
        ],
        process: [
          { title: "Task & Autonomy Scoping", desc: "We define exactly what the agent should do, and where a human must approve an action." },
          { title: "Tool & System Mapping", desc: "We map every tool, API, and system the agent needs access to, with least-privilege scoping." },
          { title: "Build & Test Scenarios", desc: "The agent is tested against real and adversarial scenarios before going live." },
          { title: "Launch With Oversight", desc: "Initial launch with close monitoring, expanding autonomy only as reliability is proven." }
        ],
        technology: ["LangChain", "LangGraph", "Model Context Protocol", "OpenAI API", "Anthropic API", "Python", "Redis"],
        whySanestix: [
          { title: "Autonomy Is a Design Choice", desc: "We scope exactly how much an agent can decide alone — never full autonomy by default." },
          { title: "Built for Auditability", desc: "Every agent decision and tool call is logged and reviewable." },
          { title: "Proven Before Expanded", desc: "We launch agents with tighter oversight and expand autonomy only once reliability is demonstrated." }
        ],
        faq: [
          { q: "Can an agent make irreversible decisions on its own?", a: "Only where you explicitly approve that scope. We default to human-in-the-loop checkpoints for any action with real financial, legal, or customer impact." },
          { q: "How do you prevent an agent from going off track?", a: "Through explicit tool permissions, step-by-step planning with validation, and observability that lets your team review every decision the agent makes." },
          { q: "What happens if a tool call fails mid-task?", a: "Agents are built with defined fallback and retry logic, and will escalate to a human rather than guessing when a step fails unexpectedly." },
          { q: "Can we start small and expand what the agent handles later?", a: "Yes — that's our recommended approach. We typically launch with a narrow, well-tested scope and expand autonomy incrementally as performance is proven." }
        ]
      },
      {
        slug: "llm-integration",
        name: "LLM Integration",
        shortDesc: "Integrate large language models into your products and workflows, reliably and securely.",
        metaTitle: "LLM Integration Services — Sanestix",
        metaDescription: "Reliable, secure integration of large language models into your existing products, tools, and workflows — by the Sanestix AI team.",
        heroKicker: "Generative & Agentic AI / LLM Integration",
        heroHeadline: "Large language models, integrated the right way",
        heroDescription: "We integrate LLMs into your products and internal tools with proper prompt engineering, cost controls, and security — turning a powerful model into a dependable feature.",
        introTitle: "The gap between calling an LLM and shipping an LLM feature",
        introParagraphs: [
          "Calling an LLM API is easy. Shipping a reliable, cost-controlled, secure LLM feature that behaves consistently for every user is the actual engineering challenge. That's the layer between the model and your product that we specialize in.",
          "We handle prompt architecture, output validation, rate limiting, fallback handling, and monitoring so your LLM feature performs predictably in production, not just in a demo."
        ],
        whatWeBuild: [
          { title: "In-Product AI Features", desc: "LLM-powered search, summarization, and assistance features embedded in your product." },
          { title: "Prompt Management Systems", desc: "Versioned, testable prompt pipelines your team can iterate on safely." },
          { title: "Structured Output Pipelines", desc: "LLM integrations that return validated, schema-conformant structured data." },
          { title: "Multi-Model Routing", desc: "Systems that route requests to the right model based on cost, latency, or capability needs." }
        ],
        capabilities: [
          { title: "Prompt Engineering & Versioning", desc: "Structured prompt libraries with version control and rollback capability." },
          { title: "Cost & Token Optimization", desc: "Architecture designed to minimize token usage without sacrificing output quality." },
          { title: "Security & Data Privacy", desc: "Proper handling of sensitive data sent to LLM providers, including redaction where needed." },
          { title: "Output Validation & Guardrails", desc: "Schema validation and content filters so outputs are safe and usable downstream." },
          { title: "Fallback & Retry Logic", desc: "Graceful degradation when a model call fails, times out, or returns low-confidence output." },
          { title: "Usage Analytics", desc: "Dashboards tracking cost, latency, and quality of every LLM-powered feature." }
        ],
        useCases: [
          { title: "In-App AI Assistant", desc: "An LLM-powered assistant embedded directly in your product's UI." },
          { title: "Document Summarization", desc: "Automatic summarization of long documents, contracts, or support threads." },
          { title: "Semantic Search", desc: "LLM-powered search that understands intent, not just keyword matches." },
          { title: "Automated Email & Ticket Drafting", desc: "First-draft responses generated from context, reviewed before sending." }
        ],
        process: [
          { title: "Use Case & Data Scoping", desc: "We define exactly what the LLM feature needs to do and what data it can access." },
          { title: "Prompt & Pipeline Design", desc: "We design the prompt architecture, validation rules, and fallback behavior." },
          { title: "Integration & Testing", desc: "The feature is integrated into your product and tested against real usage patterns." },
          { title: "Launch & Cost Monitoring", desc: "Production rollout with usage, cost, and quality monitoring in place." }
        ],
        technology: ["OpenAI API", "Anthropic API", "Google Gemini API", "LangChain", "Redis", "Node.js", "Python"],
        whySanestix: [
          { title: "Production Engineering, Not Just Prompting", desc: "We treat LLM integration as software engineering — with testing, monitoring, and versioning." },
          { title: "Cost-Conscious by Default", desc: "Every integration is designed with token and cost efficiency in mind from day one." },
          { title: "Provider Flexibility", desc: "We architect so you're never locked into a single LLM provider." }
        ],
        faq: [
          { q: "Which LLM provider do you recommend?", a: "It depends on your use case, budget, and data sensitivity. We evaluate providers against your specific requirements rather than defaulting to one vendor." },
          { q: "How do you keep our data safe when using an external LLM API?", a: "We scope exactly what data is sent, apply redaction where appropriate, and follow the data handling terms of your chosen provider — with stricter architectures available for sensitive data." },
          { q: "Can we switch LLM providers later without a rebuild?", a: "Yes, we design the integration layer to be provider-agnostic wherever practical, so switching models is a configuration change, not a rebuild." },
          { q: "How do you control unpredictable API costs?", a: "Through prompt optimization, caching, rate limiting, and usage dashboards that give you visibility before costs become a surprise." }
        ]
      },
      {
        slug: "rag-knowledge-systems",
        name: "RAG & Knowledge Systems",
        shortDesc: "Retrieval-augmented AI that grounds answers in your own documents and data.",
        metaTitle: "RAG & Knowledge Systems Development — Sanestix",
        metaDescription: "Retrieval-augmented generation systems that ground AI answers in your own documents, wikis, and data — built by the Sanestix AI team.",
        heroKicker: "Generative & Agentic AI / RAG & Knowledge Systems",
        heroHeadline: "AI answers grounded in your own documents, not the public internet",
        heroDescription: "We build retrieval-augmented generation (RAG) systems that pull from your internal documents, wikis, and databases — so answers are accurate, current, and sourced.",
        introTitle: "Stop AI from guessing when the answer already exists in your docs",
        introParagraphs: [
          "A generic LLM doesn't know your product manual, your internal policies, or last week's data. RAG systems close that gap by retrieving the most relevant passages from your own knowledge base and grounding the model's answer in them — with citations back to the source.",
          "We design the full retrieval pipeline: document ingestion, chunking, embeddings, vector search, and the generation layer that ties it all together — tuned so answers are accurate and traceable."
        ],
        whatWeBuild: [
          { title: "Internal Knowledge Assistants", desc: "AI assistants that answer employee questions grounded in your internal wikis and docs." },
          { title: "Customer Support Knowledge Bases", desc: "RAG-powered support tools that answer from your actual help center and product docs." },
          { title: "Document Q&A Systems", desc: "Systems that let users ask natural-language questions of large document sets like contracts or manuals." },
          { title: "Hybrid Search Platforms", desc: "Search that combines keyword precision with semantic understanding across your data." }
        ],
        capabilities: [
          { title: "Document Ingestion Pipelines", desc: "Automated ingestion and chunking of PDFs, wikis, spreadsheets, and databases." },
          { title: "Vector Search & Embeddings", desc: "High-quality embedding and retrieval tuned for accuracy on your specific content." },
          { title: "Source Citation", desc: "Every generated answer links back to the exact source passage it was grounded in." },
          { title: "Access-Controlled Retrieval", desc: "Retrieval respects your existing permissions, so users only see what they're allowed to." },
          { title: "Freshness & Sync", desc: "Automated re-indexing so the knowledge base stays current as source documents change." },
          { title: "Hallucination Reduction", desc: "Retrieval and prompt design specifically tuned to minimize unsupported claims." }
        ],
        useCases: [
          { title: "Employee Helpdesk Assistant", desc: "Instant, sourced answers to HR, IT, and policy questions from internal documents." },
          { title: "Customer Support Copilot", desc: "Support agents get AI-drafted answers grounded in your actual help center content." },
          { title: "Legal & Contract Q&A", desc: "Natural-language search across large contract or compliance document sets." },
          { title: "Product Documentation Search", desc: "Customers or staff get direct answers from technical documentation instead of searching manually." }
        ],
        process: [
          { title: "Knowledge Source Audit", desc: "We map your documents, wikis, and databases, and assess structure and access controls." },
          { title: "Ingestion & Indexing Design", desc: "We design the chunking, embedding, and indexing pipeline for your content types." },
          { title: "Retrieval & Prompt Tuning", desc: "We tune retrieval accuracy and grounding to minimize unsupported answers." },
          { title: "Launch & Freshness Automation", desc: "Production launch with automated re-indexing as your source documents change." }
        ],
        technology: ["LangChain", "LlamaIndex", "Pinecone", "Weaviate", "pgvector", "OpenAI API", "Anthropic API"],
        whySanestix: [
          { title: "Grounded Answers, With Sources", desc: "We design specifically to reduce hallucination and cite the source of every answer." },
          { title: "Respects Your Access Controls", desc: "Retrieval is built to honor existing document permissions, not bypass them." },
          { title: "Stays Current Automatically", desc: "Automated re-indexing keeps the system accurate as your documents change." }
        ],
        faq: [
          { q: "What kinds of documents can this work with?", a: "PDFs, wikis, spreadsheets, help center articles, databases, and most common document formats. We assess your specific sources during the knowledge audit." },
          { q: "How do you prevent the AI from making things up?", a: "Through careful retrieval tuning, grounding prompts that instruct the model to answer only from retrieved content, and citations that let users verify the source." },
          { q: "Can this respect our existing permission structure?", a: "Yes. We design retrieval to check user permissions before surfacing any document content, so access controls are never bypassed." },
          { q: "How often does the knowledge base need updating?", a: "We set up automated re-indexing so new or changed documents are reflected without manual intervention, on a schedule that matches how often your content changes." }
        ]
      }
    ]
  },

  {
    slug: "software-development",
    name: "Software Development",
    imageDir: "software-development",
    navBlurb: "Custom software, SaaS, MVPs, and legacy modernization.",
    metaTitle: "Custom Software Development Services — Sanestix",
    metaDescription: "Sanestix builds custom software, SaaS platforms, MVPs, and modernizes legacy applications — engineered around how your business actually operates.",
    heroKicker: "Software Development",
    heroHeadline: "Software built around how your business actually operates",
    heroDescription: "From custom internal tools to full SaaS platforms, MVPs, and legacy modernization — we build software that holds up under real usage, not just a demo.",
    overviewTitle: "Software that fits your workflow, not the other way around",
    overviewParagraphs: [
      "Off-the-shelf software forces your business to adapt to its workflow. Custom software should do the opposite. We design and build applications around your actual processes, data, and team — whether that's a brand-new SaaS product, an internal tool, or a legacy system that needs a careful rebuild.",
      "Every engagement starts with understanding how the software will actually be used day to day, then architecting for maintainability and scale from the first commit — not just for the demo."
    ],
    benefits: [
      { title: "Built To Scale", desc: "Architecture decisions are made with your 12-month growth trajectory in mind, not just launch day." },
      { title: "Maintainable Codebases", desc: "Clean, documented, tested code your team — or ours — can maintain long after launch." },
      { title: "Security by Design", desc: "Authentication, authorization, and data protection are architected in from the start." },
      { title: "Transparent Delivery", desc: "Clear milestones and regular demos, so you always know exactly where the project stands." },
      { title: "Full-Stack Ownership", desc: "Frontend, backend, database, and infrastructure — one team accountable for the whole system." },
      { title: "Post-Launch Support", desc: "Ongoing maintenance and feature development after go-live, not a one-and-done handoff." }
    ],
    technologies: ["Node.js", "React", "Next.js", "PostgreSQL", "TypeScript", "AWS", "Docker", "Stripe"],
    process: [
      { title: "Discovery & Scoping", desc: "We map your workflow, requirements, and constraints before writing a line of code." },
      { title: "Architecture & Design", desc: "System architecture, data model, and UI/UX design are agreed before development starts." },
      { title: "Iterative Development", desc: "Build in short sprints with regular demos, so you can steer the product as it takes shape." },
      { title: "Launch & Support", desc: "Deployment, monitoring, and an ongoing support plan tailored to your team's needs." }
    ],
    categories: [
      {
        slug: "custom-software-development",
        name: "Custom Software Development",
        shortDesc: "Bespoke internal tools and applications built around your exact workflow.",
        metaTitle: "Custom Software Development Services — Sanestix",
        metaDescription: "Custom internal tools and business applications built around your exact workflow, data, and team — designed and delivered by Sanestix.",
        heroKicker: "Software Development / Custom Software Development",
        heroHeadline: "Software designed around your workflow, not a generic template",
        heroDescription: "We build custom internal tools and business applications tailored to how your team actually works — replacing spreadsheets, email chains, and disconnected tools with one system.",
        introTitle: "When off-the-shelf software stops fitting",
        introParagraphs: [
          "Most businesses reach a point where generic software — spreadsheets, off-the-shelf tools bolted together, or a system that's 80% right — starts costing more in workarounds than a custom build would cost outright. Custom software development closes that gap.",
          "We design the application around your actual process: your data model, your approval flows, your reporting needs — not the lowest common denominator a generic tool was built for."
        ],
        whatWeBuild: [
          { title: "Internal Business Tools", desc: "Custom dashboards, approval systems, and operational tools tailored to your team." },
          { title: "Data Management Platforms", desc: "Systems that centralize and structure data currently scattered across spreadsheets and tools." },
          { title: "Workflow & Approval Systems", desc: "Custom applications that route tasks and approvals exactly the way your team operates." },
          { title: "Reporting & Analytics Dashboards", desc: "Purpose-built dashboards surfacing the metrics your team actually needs to see." }
        ],
        capabilities: [
          { title: "Requirements-Driven Design", desc: "We start from your actual workflow and data, not a generic feature template." },
          { title: "Role-Based Access Control", desc: "Permissions that match your organization's structure, from day one." },
          { title: "Custom Reporting", desc: "Reports and dashboards tailored to the metrics your business actually tracks." },
          { title: "Third-Party Integrations", desc: "Connections to the tools you already use — accounting, CRM, communication platforms." },
          { title: "Scalable Architecture", desc: "Systems designed to handle your growth in data volume and user count." },
          { title: "Ongoing Iteration", desc: "Post-launch feature development as your workflow and business evolve." }
        ],
        useCases: [
          { title: "Operations Management Tool", desc: "A custom system replacing spreadsheets for scheduling, inventory, or task tracking." },
          { title: "Client Onboarding Portal", desc: "A structured portal that replaces manual onboarding emails and document chasing." },
          { title: "Internal Approval Workflow", desc: "Automated routing and tracking for purchase, expense, or content approvals." },
          { title: "Custom CRM-Lite Tool", desc: "A lightweight, purpose-built alternative when a full CRM is more than you need." }
        ],
        process: [
          { title: "Workflow Discovery", desc: "We map your current process, pain points, and the data involved end-to-end." },
          { title: "System Design", desc: "We design the data model, user roles, and core workflows before development begins." },
          { title: "Iterative Build", desc: "Development in short cycles with regular reviews so you can adjust course early." },
          { title: "Launch & Training", desc: "Rollout with team training and a support plan for the weeks after go-live." }
        ],
        technology: ["Node.js", "React", "PostgreSQL", "TypeScript", "AWS", "Docker"],
        whySanestix: [
          { title: "Built Around Your Process", desc: "We design the system to match how your team actually works, not a generic template." },
          { title: "One Team, Full Ownership", desc: "Frontend, backend, and infrastructure delivered by one accountable team." },
          { title: "Support That Continues", desc: "We stay engaged after launch as your workflow and needs evolve." }
        ],
        faq: [
          { q: "How is this different from just buying off-the-shelf software?", a: "Off-the-shelf tools are built for the average business; custom software is built around your exact workflow and data, which usually eliminates the manual workarounds off-the-shelf tools require." },
          { q: "How long does a custom build typically take?", a: "It depends heavily on scope, but most internal tools launch in 4-10 weeks. We give you a concrete timeline after the discovery phase." },
          { q: "Can you integrate with the tools we already use?", a: "Yes, integrating with your existing accounting, CRM, or communication tools is a standard part of custom software projects." },
          { q: "What happens after launch if we need changes?", a: "We offer ongoing support and feature development plans so the system keeps evolving with your business rather than becoming outdated." }
        ]
      },
      {
        slug: "saas-development",
        name: "SaaS Development",
        shortDesc: "Multi-tenant SaaS platforms built for subscription billing, scale, and growth.",
        metaTitle: "SaaS Development Services — Sanestix",
        metaDescription: "End-to-end SaaS platform development — multi-tenant architecture, subscription billing, and scalable infrastructure — built by Sanestix.",
        heroKicker: "Software Development / SaaS Development",
        heroHeadline: "SaaS platforms engineered for multi-tenancy and growth from day one",
        heroDescription: "We design and build SaaS products with proper multi-tenant architecture, subscription billing, and the infrastructure needed to scale past your first hundred customers.",
        introTitle: "SaaS architecture decisions that are expensive to get wrong later",
        introParagraphs: [
          "Multi-tenancy, billing, and data isolation are the decisions that are cheap to get right at the start and expensive to retrofit later. We architect your SaaS platform with these fundamentals in place from the first sprint, not as a painful migration eighteen months in.",
          "Whether you're building a new SaaS product or replatforming an existing one, we bring the same discipline: clean tenant isolation, reliable billing, and infrastructure that scales predictably."
        ],
        whatWeBuild: [
          { title: "Multi-Tenant SaaS Platforms", desc: "Core platform architecture with proper tenant isolation and data security." },
          { title: "Subscription Billing Systems", desc: "Billing integration with plans, usage-based pricing, and dunning management." },
          { title: "Admin & Customer Dashboards", desc: "Full-featured dashboards for both your team and your customers." },
          { title: "API & Webhook Infrastructure", desc: "Public APIs and webhook systems that let customers integrate with your platform." }
        ],
        capabilities: [
          { title: "Multi-Tenant Architecture", desc: "Proper data isolation between customers, whether shared-database or isolated-per-tenant." },
          { title: "Subscription & Usage Billing", desc: "Stripe or equivalent billing integration supporting plans, seats, and usage metering." },
          { title: "Role-Based Permissions", desc: "Team and organization-level permission structures built for B2B SaaS." },
          { title: "Scalable Infrastructure", desc: "Cloud infrastructure designed to scale horizontally as your customer base grows." },
          { title: "Onboarding & Activation Flows", desc: "Self-serve onboarding designed to get new customers to value quickly." },
          { title: "Analytics & Usage Tracking", desc: "Built-in tracking for the product metrics that matter to your growth." }
        ],
        useCases: [
          { title: "New SaaS Product Build", desc: "Full-stack build of a new B2B or B2C SaaS product from architecture to launch." },
          { title: "Legacy-to-SaaS Migration", desc: "Converting a single-tenant application into a scalable multi-tenant SaaS platform." },
          { title: "Billing System Overhaul", desc: "Replacing manual or fragile billing processes with a proper subscription system." },
          { title: "Partner & API Platform", desc: "Building the API layer that lets customers and partners integrate with your product." }
        ],
        process: [
          { title: "Product & Architecture Scoping", desc: "We define the tenant model, billing structure, and core architecture upfront." },
          { title: "Core Platform Build", desc: "We build the foundational platform — auth, tenancy, billing — before feature work." },
          { title: "Feature Development", desc: "Iterative build of product features with regular demos and stakeholder feedback." },
          { title: "Launch & Scale Support", desc: "Production launch with infrastructure monitoring as your customer base grows." }
        ],
        technology: ["Node.js", "Next.js", "PostgreSQL", "Stripe", "AWS", "Redis", "Docker", "Kubernetes"],
        whySanestix: [
          { title: "Multi-Tenancy Done Right", desc: "We architect tenant isolation properly from the start, avoiding costly retrofits." },
          { title: "Billing That Just Works", desc: "Subscription and usage billing built to handle real-world edge cases, not just the happy path." },
          { title: "Scale-Ready Infrastructure", desc: "Architecture designed to handle growth without a rebuild at 1,000 customers." }
        ],
        faq: [
          { q: "Should we use a shared database or separate databases per customer?", a: "It depends on your compliance needs, scale, and budget. We walk through the tradeoffs during architecture scoping and recommend the model that fits your specific situation." },
          { q: "Can you integrate with Stripe or another billing provider?", a: "Yes, subscription billing integration — including plans, seats, and usage-based pricing — is a standard part of SaaS development." },
          { q: "How do you handle scaling as we grow?", a: "We design the infrastructure to scale horizontally from the start, and set up monitoring so scaling decisions are made from real data, not guesswork." },
          { q: "Can you help migrate our existing single-tenant app to SaaS?", a: "Yes, migrating an existing application to a proper multi-tenant SaaS architecture is one of our common engagement types." }
        ]
      },
      {
        slug: "mvp-development",
        name: "MVP Development",
        shortDesc: "Fast, focused builds that validate your product idea with real users.",
        metaTitle: "MVP Development Services — Sanestix",
        metaDescription: "Fast, focused MVP development to validate your product idea with real users — built lean, without cutting corners on quality.",
        heroKicker: "Software Development / MVP Development",
        heroHeadline: "A real product, built fast enough to test with actual users",
        heroDescription: "We build minimum viable products focused on your core value proposition — fast enough to validate demand, solid enough not to be thrown away when it works.",
        introTitle: "Fast doesn't have to mean throwaway",
        introParagraphs: [
          "A good MVP isn't a prototype held together with duct tape — it's a lean but properly engineered version of your core idea, scoped tightly enough to launch fast and built well enough to become your production system once it validates.",
          "We help you cut scope ruthlessly to the features that actually test your core hypothesis, then build that scope properly — clean code, real authentication, a database that won't need to be rebuilt from scratch."
        ],
        whatWeBuild: [
          { title: "Core Feature MVPs", desc: "A focused build of just the features needed to test your product's core value proposition." },
          { title: "Landing Page + Waitlist Systems", desc: "Pre-launch validation systems to gauge demand before full development." },
          { title: "Functional Prototypes", desc: "Clickable, working prototypes for investor demos or early user testing." },
          { title: "Beta-Ready Platforms", desc: "MVPs built solid enough to onboard your first real paying customers." }
        ],
        capabilities: [
          { title: "Ruthless Scope Prioritization", desc: "We help identify the minimum feature set that actually tests your hypothesis." },
          { title: "Fast, Clean Development", desc: "Speed without technical debt that would need a rewrite once the MVP succeeds." },
          { title: "Real Authentication & Data Model", desc: "Proper user accounts and data architecture from day one, not a throwaway shortcut." },
          { title: "Analytics From Launch", desc: "Usage tracking built in from day one so you can measure what's actually working." },
          { title: "Investor-Ready Presentation", desc: "A polished enough product to support fundraising conversations." },
          { title: "Clear Path to V2", desc: "Architecture that supports adding features post-validation without a rebuild." }
        ],
        useCases: [
          { title: "Startup Product Validation", desc: "Testing a new product idea with real users before committing to full development." },
          { title: "Internal Idea Pilot", desc: "A lightweight build to test a new internal tool concept before scaling investment." },
          { title: "Fundraising Demo Product", desc: "A working MVP to support seed or Series A fundraising conversations." },
          { title: "New Market Test", desc: "A scoped-down version of an existing product to test a new market or segment." }
        ],
        process: [
          { title: "Hypothesis & Scope Definition", desc: "We define exactly what you're trying to validate and cut scope to match." },
          { title: "Rapid Design & Build", desc: "Fast, focused development sprints on just the core validated feature set." },
          { title: "Launch to Real Users", desc: "Deployment to your first real users with analytics tracking from day one." },
          { title: "Learn & Plan Next Steps", desc: "Review of real usage data to plan the next development phase with confidence." }
        ],
        technology: ["Next.js", "React", "Node.js", "PostgreSQL", "Supabase", "Vercel", "Stripe"],
        whySanestix: [
          { title: "Speed Without Shortcuts", desc: "We move fast on scope, not on code quality — your MVP won't need a rewrite to scale." },
          { title: "Validation-Focused", desc: "Every feature decision is filtered through what actually tests your hypothesis." },
          { title: "A Real Path Forward", desc: "We plan the architecture so a successful MVP grows into your production platform." }
        ],
        faq: [
          { q: "How fast can an MVP realistically be built?", a: "Most focused MVPs launch in 3-6 weeks depending on scope. We give you a concrete timeline once we've cut the feature list down to the true core." },
          { q: "Will we need to rebuild this once it validates?", a: "Not if scoped correctly. We build with clean architecture specifically so a successful MVP becomes your production system, not a throwaway." },
          { q: "How do you decide what features to cut?", a: "We work with you to identify the single hypothesis the MVP needs to test, then include only the features required to test it honestly." },
          { q: "Can this support real paying customers from launch?", a: "Yes — we include real authentication, billing, and data architecture so the MVP can take on real users and revenue from day one." }
        ]
      },
      {
        slug: "legacy-application-modernization",
        name: "Legacy Application Modernization",
        shortDesc: "Modernize aging systems without disrupting the business that depends on them.",
        metaTitle: "Legacy Application Modernization Services — Sanestix",
        metaDescription: "Modernize legacy applications and systems without business disruption — careful migration, re-architecture, and technical debt reduction by Sanestix.",
        heroKicker: "Software Development / Legacy Application Modernization",
        heroHeadline: "Modernize the systems your business depends on, without breaking them",
        heroDescription: "We modernize legacy applications — outdated frameworks, unmaintainable codebases, and aging infrastructure — through careful, incremental migration that keeps your business running throughout.",
        introTitle: "Legacy systems carry real risk, but rewrites carry real risk too",
        introParagraphs: [
          "A legacy system that's hard to maintain, slow to change, and running on unsupported infrastructure is a real business risk. But a reckless full rewrite carries its own risk — lost business logic, months of downtime exposure, and a project that never quite finishes. We specialize in the careful middle path.",
          "Our modernization approach maps the existing system's business logic first, then migrates incrementally — component by component — so your business keeps running on a working system throughout the transition."
        ],
        whatWeBuild: [
          { title: "Incremental Migration Plans", desc: "A phased roadmap that modernizes your system in safe, testable stages." },
          { title: "Re-Architected Backends", desc: "Modern, maintainable backend architecture replacing outdated frameworks." },
          { title: "Database Modernization", desc: "Migration to modern, scalable database systems with careful data integrity checks." },
          { title: "API Layer Extraction", desc: "Extracting a clean API layer from monolithic legacy code to enable gradual replacement." }
        ],
        capabilities: [
          { title: "Legacy Codebase Auditing", desc: "Deep assessment of existing code, dependencies, and hidden business logic." },
          { title: "Incremental Migration Strategy", desc: "Strangler-fig and phased migration patterns that avoid risky big-bang rewrites." },
          { title: "Data Migration & Integrity", desc: "Careful data migration with validation to prevent data loss or corruption." },
          { title: "Zero-Downtime Cutover Planning", desc: "Migration plans designed to avoid or minimize business-disrupting downtime." },
          { title: "Technical Debt Reduction", desc: "Systematic paydown of technical debt alongside feature and infrastructure work." },
          { title: "Documentation Recovery", desc: "Rebuilding documentation for systems that have lost institutional knowledge." }
        ],
        useCases: [
          { title: "Framework Version Modernization", desc: "Migrating off unsupported or end-of-life frameworks and language versions." },
          { title: "Monolith-to-Services Migration", desc: "Gradually extracting services from a large, hard-to-maintain monolith." },
          { title: "On-Premise to Cloud Migration", desc: "Moving legacy infrastructure to modern, scalable cloud environments." },
          { title: "Database Platform Migration", desc: "Migrating from outdated or unsupported database systems to modern alternatives." }
        ],
        process: [
          { title: "Legacy System Audit", desc: "We map the existing codebase, dependencies, and business logic in detail." },
          { title: "Migration Roadmap Design", desc: "We design a phased plan that minimizes risk and business disruption." },
          { title: "Incremental Migration", desc: "Component-by-component migration with testing at each stage before proceeding." },
          { title: "Cutover & Stabilization", desc: "Careful cutover to the modernized system with close monitoring post-migration." }
        ],
        technology: ["Node.js", "PostgreSQL", "Docker", "AWS", "Kubernetes", "GraphQL", "REST APIs"],
        whySanestix: [
          { title: "Business Continuity First", desc: "We design migrations that keep your system running throughout, not a risky full rewrite." },
          { title: "Business Logic Preserved", desc: "We audit and document hidden logic before touching code, so nothing important is lost." },
          { title: "Incremental, Testable Progress", desc: "Every migration stage is tested and validated before moving to the next." }
        ],
        faq: [
          { q: "Do we have to rewrite everything from scratch?", a: "No — in most cases an incremental migration is safer and faster than a full rewrite. We assess your specific system and recommend the approach with the least business risk." },
          { q: "Will there be downtime during the migration?", a: "We design specifically to minimize or eliminate downtime through incremental, tested cutover stages rather than a single risky switch-over." },
          { q: "What if the legacy system has no documentation?", a: "That's common. Our audit phase reconstructs the necessary documentation by analyzing the actual code and behavior of the system before planning the migration." },
          { q: "How long does a typical modernization project take?", a: "It depends heavily on system size and complexity, but we provide a concrete phased roadmap with timelines after the initial audit." }
        ]
      }
    ]
  },

  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    imageDir: "mobile-app-development",
    navBlurb: "Native Android, iOS, cross-platform & Flutter apps.",
    metaTitle: "Mobile App Development Services — Sanestix",
    metaDescription: "Sanestix builds native Android and iOS apps, cross-platform apps, and Flutter apps engineered for performance, retention, and scale.",
    heroKicker: "Mobile App Development",
    heroHeadline: "Mobile apps engineered for performance, not just app store approval",
    heroDescription: "Native Android, native iOS, cross-platform, and Flutter — we build mobile apps that perform well, retain users, and scale from first release through growth.",
    overviewTitle: "Mobile done right, on whichever platform fits your product",
    overviewParagraphs: [
      "The right mobile approach depends on your product, budget, and timeline — not a one-size-fits-all default. We build fully native apps when performance and platform-specific features matter most, and cross-platform or Flutter apps when speed-to-market and shared codebases make more sense.",
      "Every mobile build goes through the same discipline regardless of platform: careful UX design for touch interfaces, performance profiling, and a release process that gets through app store review without the usual delays."
    ],
    benefits: [
      { title: "Right Platform For The Job", desc: "We recommend native, cross-platform, or Flutter based on your actual requirements, not a default preference." },
      { title: "Performance-Tuned", desc: "Apps profiled and optimized for smooth performance on real, mid-range devices — not just flagship phones." },
      { title: "App Store Ready", desc: "We handle the submission process and platform guidelines so review delays are minimized." },
      { title: "Offline-First Where It Matters", desc: "Robust offline handling and sync for apps that need to work with unreliable connectivity." },
      { title: "Push Notification Infrastructure", desc: "Reliable, well-targeted push notification systems built in from the start." },
      { title: "Analytics From Launch", desc: "Usage and crash analytics wired in from day one to guide post-launch iteration." }
    ],
    technologies: ["Swift", "Kotlin", "Flutter", "React Native", "Firebase", "GraphQL", "REST APIs", "App Store Connect"],
    process: [
      { title: "Platform & Scope Strategy", desc: "We help decide native vs. cross-platform based on your product and constraints." },
      { title: "UX & Interface Design", desc: "Mobile-first UX design tailored to platform conventions and touch interaction." },
      { title: "Development & QA", desc: "Iterative development with device testing across a real range of hardware." },
      { title: "Launch & Store Submission", desc: "App store submission handled end-to-end, with post-launch monitoring in place." }
    ],
    categories: [
      {
        slug: "android-application",
        name: "Android Application",
        shortDesc: "Native Android apps built with Kotlin, optimized for the real Android device landscape.",
        metaTitle: "Android App Development Services — Sanestix",
        metaDescription: "Native Android app development in Kotlin — performance-optimized across the real Android device landscape, by Sanestix.",
        heroKicker: "Mobile App Development / Android Application",
        heroHeadline: "Native Android apps built for the real device landscape, not just a Pixel",
        heroDescription: "We build native Android applications in Kotlin, tested and optimized across the fragmented range of screen sizes, chipsets, and Android versions your users actually have.",
        introTitle: "Android fragmentation is a real engineering problem, not a footnote",
        introParagraphs: [
          "Unlike iOS, Android spans a huge range of device capabilities, screen sizes, and OS versions still in active use. Building a genuinely native Android app means designing and testing for that range from the start, not assuming every user has the latest flagship device.",
          "We build with Kotlin and modern Android architecture components, with a testing process that covers the actual mix of devices your target users are likely to carry."
        ],
        whatWeBuild: [
          { title: "Consumer Android Apps", desc: "Full-featured consumer apps built for the Google Play Store from the ground up." },
          { title: "Enterprise Android Apps", desc: "Internal or B2B Android apps with proper device management and security controls." },
          { title: "Android Widgets & Extensions", desc: "Home screen widgets and system-level integrations for deeper platform presence." },
          { title: "Offline-Capable Field Apps", desc: "Android apps designed for field teams working with unreliable connectivity." }
        ],
        capabilities: [
          { title: "Kotlin & Jetpack Compose", desc: "Modern, maintainable Android development using current best-practice tooling." },
          { title: "Device Fragmentation Testing", desc: "Testing across a real spread of screen sizes, chipsets, and Android OS versions." },
          { title: "Material Design Implementation", desc: "Interfaces that follow Android platform conventions users already understand." },
          { title: "Background & Battery Optimization", desc: "Careful handling of background tasks respecting Android's battery optimization rules." },
          { title: "Play Store Submission", desc: "End-to-end handling of Google Play policies, review, and release management." },
          { title: "Push & Deep Link Integration", desc: "Firebase Cloud Messaging and deep linking wired in for engagement and navigation." }
        ],
        useCases: [
          { title: "Field Service Android App", desc: "Offline-capable apps for technicians and field teams working outside connectivity." },
          { title: "Consumer Marketplace App", desc: "A native Android storefront or marketplace app optimized for conversion." },
          { title: "Enterprise Device Fleet App", desc: "Internal apps deployed and managed across a company-owned Android device fleet." },
          { title: "Loyalty & Rewards App", desc: "Native Android apps driving repeat engagement through loyalty mechanics." }
        ],
        process: [
          { title: "Platform Requirements Scoping", desc: "We define target Android versions, device range, and key platform integrations needed." },
          { title: "UI/UX Design", desc: "Material Design-aligned interface design tailored to your product and users." },
          { title: "Native Development", desc: "Kotlin-based development with modern Android architecture components." },
          { title: "Device Testing & Play Store Launch", desc: "Testing across real devices followed by Google Play submission and release." }
        ],
        technology: ["Kotlin", "Jetpack Compose", "Firebase", "Room", "Retrofit", "Google Play Console"],
        whySanestix: [
          { title: "Real Device Testing", desc: "We test against an actual spread of Android hardware, not just an emulator." },
          { title: "Native Performance", desc: "Kotlin and modern Android architecture deliver the performance users expect." },
          { title: "Play Store Expertise", desc: "We know Google Play's review process well enough to avoid common submission delays." }
        ],
        faq: [
          { q: "Which Android versions will the app support?", a: "We define your minimum supported Android version together during scoping, based on your target users' actual device data where available." },
          { q: "How do you test across so many different Android devices?", a: "We maintain a testing matrix covering common screen sizes, chipsets, and OS versions, supplemented by cloud device testing services for broader coverage." },
          { q: "Can you help publish the app to the Google Play Store?", a: "Yes, we handle the full Play Store submission process, including policy compliance and release management." },
          { q: "Do you build for tablets and foldables too?", a: "We can, if that's part of your target audience — this is scoped explicitly during the requirements phase so layouts are designed to adapt properly." }
        ]
      },
      {
        slug: "ios-application",
        name: "iOS Application",
        shortDesc: "Native iOS apps built with Swift, designed to feel truly at home on Apple devices.",
        metaTitle: "iOS App Development Services — Sanestix",
        metaDescription: "Native iOS app development in Swift and SwiftUI — polished, performant apps designed to feel at home on Apple devices, by Sanestix.",
        heroKicker: "Mobile App Development / iOS Application",
        heroHeadline: "Native iOS apps that feel like they belong on Apple devices",
        heroDescription: "We build native iOS applications in Swift and SwiftUI, designed around Apple's Human Interface Guidelines so your app feels polished and familiar from the first launch.",
        introTitle: "iOS users notice when an app doesn't feel native",
        introParagraphs: [
          "iOS users have high expectations for interface polish, gesture behavior, and performance — shaped by years of using Apple's own apps. A native build in Swift and SwiftUI, done properly, is what makes an app feel like it belongs on the platform rather than a port from somewhere else.",
          "We design and build with Apple's Human Interface Guidelines as the baseline, then go further where your product needs distinctive interaction design."
        ],
        whatWeBuild: [
          { title: "Consumer iOS Apps", desc: "Polished, App Store-ready consumer applications built natively for iPhone and iPad." },
          { title: "iOS Widgets & App Clips", desc: "Home screen widgets and App Clips that extend your app's reach beyond the full install." },
          { title: "Apple Watch Companions", desc: "watchOS companion apps that extend core functionality to the wrist." },
          { title: "Enterprise iOS Apps", desc: "Internal iOS apps with proper MDM support for company-managed devices." }
        ],
        capabilities: [
          { title: "Swift & SwiftUI Development", desc: "Modern, maintainable native iOS development using current Apple frameworks." },
          { title: "Human Interface Guideline Adherence", desc: "Interfaces designed to match the conventions iOS users already expect." },
          { title: "Performance Profiling", desc: "Instruments-based profiling to catch performance issues before they reach users." },
          { title: "App Store Review Readiness", desc: "Submissions prepared to avoid the most common App Store rejection reasons." },
          { title: "Push Notifications & Deep Linking", desc: "APNs integration and universal links wired in for engagement and navigation." },
          { title: "Accessibility Support", desc: "VoiceOver and Dynamic Type support built in, not bolted on after launch." }
        ],
        useCases: [
          { title: "Premium Consumer App", desc: "A polished iOS-first consumer app where interface quality is a competitive differentiator." },
          { title: "Subscription-Based iOS App", desc: "Apps built around Apple's in-app purchase and subscription infrastructure." },
          { title: "Health & Fitness App", desc: "iOS apps integrating with HealthKit and Apple Watch for tracking and insights." },
          { title: "Enterprise Field App", desc: "Company-managed iOS apps for field teams, integrated with MDM policies." }
        ],
        process: [
          { title: "Platform Requirements Scoping", desc: "We define target iOS versions, devices, and key Apple platform integrations needed." },
          { title: "HIG-Aligned Design", desc: "Interface design following Apple's Human Interface Guidelines as the baseline." },
          { title: "Native Development", desc: "Swift and SwiftUI development with performance profiling throughout." },
          { title: "TestFlight & App Store Launch", desc: "Beta testing via TestFlight followed by App Store submission and release." }
        ],
        technology: ["Swift", "SwiftUI", "Combine", "Core Data", "Firebase", "App Store Connect"],
        whySanestix: [
          { title: "Feels Genuinely Native", desc: "We build to Apple's own interface conventions, not a cross-platform compromise." },
          { title: "App Store Submission Expertise", desc: "We know the common rejection reasons and design submissions to avoid them." },
          { title: "Performance-First", desc: "Instruments profiling catches issues before real users ever see them." }
        ],
        faq: [
          { q: "Do you build for both iPhone and iPad?", a: "Yes, we can design for iPhone-only, or a universal app supporting iPad with adaptive layouts, depending on your product's target audience." },
          { q: "How do you handle Apple's App Store review process?", a: "We design submissions specifically to avoid the most common rejection reasons, and manage the submission and any review communication on your behalf." },
          { q: "Can you integrate with HealthKit or Apple Watch?", a: "Yes, HealthKit integration and Apple Watch companion apps are part of our native iOS development capability." },
          { q: "Will the app support accessibility features like VoiceOver?", a: "We build accessibility support in from the start, including VoiceOver and Dynamic Type, rather than treating it as a late addition." }
        ]
      },
      {
        slug: "cross-platform-apps",
        name: "Cross-Platform Apps",
        shortDesc: "One codebase, native performance on both iOS and Android with React Native.",
        metaTitle: "Cross-Platform App Development Services — Sanestix",
        metaDescription: "Cross-platform mobile app development with React Native — one codebase, native performance on both iOS and Android, by Sanestix.",
        heroKicker: "Mobile App Development / Cross-Platform Apps",
        heroHeadline: "One codebase, genuinely native performance on iOS and Android",
        heroDescription: "We build cross-platform apps with React Native that share a single codebase across iOS and Android without sacrificing the performance or platform feel users expect.",
        introTitle: "Cross-platform done right doesn't feel like a compromise",
        introParagraphs: [
          "Cross-platform development gets a bad reputation from apps that feel sluggish or generic on both platforms. Done properly — with native modules where performance demands it and platform-aware UI decisions — a React Native app can feel just as good as a fully native build, at a fraction of the development cost.",
          "We use cross-platform architecture strategically: shared business logic and UI where it makes sense, native modules where platform-specific performance or APIs genuinely require it."
        ],
        whatWeBuild: [
          { title: "Cross-Platform Consumer Apps", desc: "Full-featured consumer apps shipping to both app stores from a single codebase." },
          { title: "MVP Mobile Apps", desc: "Fast, cost-effective mobile MVPs to validate demand before a larger native investment." },
          { title: "Internal Business Apps", desc: "Cross-platform internal tools that need to reach both Android and iOS staff devices." },
          { title: "Companion Apps", desc: "Mobile companions to an existing web product, sharing business logic where practical." }
        ],
        capabilities: [
          { title: "React Native Architecture", desc: "Modern React Native development with clean, maintainable shared codebases." },
          { title: "Native Module Integration", desc: "Custom native modules for the specific features that genuinely need platform-level performance." },
          { title: "Platform-Aware UI", desc: "Interface decisions that respect iOS and Android conventions rather than forcing a single look everywhere." },
          { title: "Shared Business Logic", desc: "Core logic shared across platforms to reduce duplicate work and bugs." },
          { title: "Performance Optimization", desc: "Profiling and optimization to avoid the common performance pitfalls of cross-platform apps." },
          { title: "Faster Iteration Cycles", desc: "Shared codebase means new features ship to both platforms simultaneously." }
        ],
        useCases: [
          { title: "Startup MVP Mobile App", desc: "A cost-effective way to launch on both app stores while validating product-market fit." },
          { title: "Marketplace or Booking App", desc: "Cross-platform apps for marketplaces and booking platforms with shared logic across iOS and Android." },
          { title: "Internal Staff App", desc: "A single build reaching both Android and iOS company devices without duplicated effort." },
          { title: "Existing Product's Mobile Companion", desc: "A mobile companion app to an existing web product, sharing API and business logic." }
        ],
        process: [
          { title: "Platform & Feature Scoping", desc: "We define which features can be fully shared and which need native modules." },
          { title: "Shared Architecture Design", desc: "We design a codebase architecture that balances shared code with platform-specific needs." },
          { title: "Development & Cross-Platform QA", desc: "Development with testing on real iOS and Android devices throughout." },
          { title: "Dual App Store Launch", desc: "Coordinated submission and release to both the App Store and Google Play." }
        ],
        technology: ["React Native", "TypeScript", "Expo", "Firebase", "GraphQL", "REST APIs"],
        whySanestix: [
          { title: "Native Feel, Shared Codebase", desc: "We use native modules where it matters so the app never feels like a compromise." },
          { title: "Faster, More Cost-Effective", desc: "One codebase means both platforms move forward together, at lower overall cost." },
          { title: "Built for Long-Term Maintenance", desc: "Clean architecture that's easier and cheaper to maintain than two separate native codebases." }
        ],
        faq: [
          { q: "Will a cross-platform app feel slower than native?", a: "Not if built properly. We use native modules for performance-critical features, so the parts of the app users interact with most feel just as responsive as a native build." },
          { q: "Is React Native a good fit for our specific app?", a: "For most consumer and business apps, yes. We assess your specific performance and platform-integration needs during scoping and recommend cross-platform or native accordingly." },
          { q: "Can we add native-only features later if needed?", a: "Yes, React Native supports adding custom native modules for specific features without abandoning the shared codebase for everything else." },
          { q: "Is cross-platform actually cheaper than building two native apps?", a: "In most cases yes, since shared code and QA effort reduce both development time and ongoing maintenance cost across the two platforms." }
        ]
      },
      {
        slug: "flutter-development",
        name: "Flutter Development",
        shortDesc: "Pixel-perfect, high-performance apps from a single Flutter codebase.",
        metaTitle: "Flutter App Development Services — Sanestix",
        metaDescription: "Flutter app development for pixel-perfect, high-performance apps across iOS and Android from a single Dart codebase — by Sanestix.",
        heroKicker: "Mobile App Development / Flutter Development",
        heroHeadline: "Pixel-perfect apps across platforms from a single Flutter codebase",
        heroDescription: "We build Flutter applications that render consistently across iOS and Android with near-native performance, ideal for products where design consistency across platforms matters most.",
        introTitle: "When pixel-perfect consistency matters more than platform-native feel",
        introParagraphs: [
          "Flutter renders its own UI rather than relying on platform components, which means your app looks and behaves identically on iOS and Android — a real advantage for brand-heavy products where visual consistency matters more than mimicking each platform's native look.",
          "We build with Flutter's widget architecture and Dart for apps that need this level of design control, while still integrating cleanly with platform-specific APIs where genuinely required."
        ],
        whatWeBuild: [
          { title: "Brand-Consistent Consumer Apps", desc: "Apps where visual brand consistency across iOS and Android is a priority." },
          { title: "Flutter MVPs", desc: "Fast, single-codebase MVPs for validating a mobile product idea across both platforms." },
          { title: "Internal Tools & Dashboards", desc: "Cross-platform internal apps with complex, custom UI built once in Flutter." },
          { title: "Multi-Platform Products", desc: "Apps that may later extend to web and desktop using Flutter's broader platform support." }
        ],
        capabilities: [
          { title: "Custom Widget Architecture", desc: "Clean, reusable Flutter widget structures built for maintainability at scale." },
          { title: "Pixel-Perfect UI Implementation", desc: "Precise implementation of custom designs that look identical across platforms." },
          { title: "State Management", desc: "Robust state management using Riverpod, Bloc, or Provider depending on app complexity." },
          { title: "Native API Bridging", desc: "Platform channel integration when Flutter needs to call native iOS or Android APIs." },
          { title: "Performance Optimization", desc: "Profiling to keep animations and rendering smooth even on complex screens." },
          { title: "Single Codebase Maintenance", desc: "One Dart codebase to maintain, test, and extend across every supported platform." }
        ],
        useCases: [
          { title: "Design-Led Consumer App", desc: "Apps where custom, brand-specific UI needs to render identically everywhere." },
          { title: "Fast Multi-Platform MVP", desc: "A single build validating your product across both app stores quickly." },
          { title: "Internal Ops Dashboard App", desc: "Custom internal Flutter apps with rich, data-dense interfaces." },
          { title: "Future Multi-Platform Product", desc: "Apps planned to eventually expand to web or desktop from the same codebase." }
        ],
        process: [
          { title: "Design & Platform Scoping", desc: "We confirm Flutter is the right fit given your design and platform-integration needs." },
          { title: "Widget Architecture Design", desc: "We design a clean, scalable widget and state management structure upfront." },
          { title: "Development & Device Testing", desc: "Development with continuous testing across real iOS and Android devices." },
          { title: "Dual Store Launch", desc: "Coordinated release to both the App Store and Google Play Store." }
        ],
        technology: ["Flutter", "Dart", "Riverpod", "Firebase", "GraphQL", "REST APIs"],
        whySanestix: [
          { title: "Design Consistency Guaranteed", desc: "Flutter's rendering model means your app looks identical across platforms, by design." },
          { title: "Near-Native Performance", desc: "Compiled Dart code delivers smooth performance even for animation-heavy interfaces." },
          { title: "Single Codebase Efficiency", desc: "One codebase to build, test, and maintain across every platform you target." }
        ],
        faq: [
          { q: "Is Flutter a good fit if we care about platform-native feel?", a: "If matching each platform's native look and feel exactly is the priority, cross-platform React Native or fully native builds may fit better — we'll advise honestly based on your goals during scoping." },
          { q: "Can Flutter apps access native device features?", a: "Yes, through platform channels and a large ecosystem of plugins, Flutter apps can access native APIs and hardware features when needed." },
          { q: "How is Flutter's performance compared to native?", a: "Flutter compiles to native ARM code and generally performs very close to native for most app types, with careful profiling needed for particularly animation-heavy screens." },
          { q: "Can a Flutter app later expand to web or desktop?", a: "Yes, Flutter supports web and desktop targets from the same codebase, which we can architect for if future expansion is part of your roadmap." }
        ]
      }
    ]
  },

  {
    slug: "web-development",
    name: "Web Development",
    imageDir: "web-development",
    navBlurb: "Custom websites, WordPress, Shopify & web applications.",
    metaTitle: "Web Development Services — Sanestix",
    metaDescription: "Sanestix builds custom websites, WordPress sites, Shopify stores, and full web applications engineered to perform under real traffic.",
    heroKicker: "Web Development",
    heroHeadline: "Websites and web apps built to perform under real traffic",
    heroDescription: "Custom websites, WordPress, Shopify, and full web applications — we build for speed, conversion, and search visibility, not just how it looks in a demo.",
    overviewTitle: "Fast, conversion-focused web development",
    overviewParagraphs: [
      "A website's job is to convert visitors into leads or customers — and that requires more than good visual design. Page speed, mobile experience, and clear conversion paths determine whether a beautiful site actually performs.",
      "Whether you need a fully custom-built site, a WordPress platform your team can manage, a Shopify store ready to sell, or a full web application, we build with performance and conversion as first-class requirements, not afterthoughts."
    ],
    benefits: [
      { title: "Performance Budgeted", desc: "Every project has a page-speed budget enforced from the design phase onward, not fixed after launch." },
      { title: "SEO-Ready Architecture", desc: "Semantic HTML, clean URL structures, and metadata built in from the first line of code." },
      { title: "Mobile-First Design", desc: "Every layout is designed and tested mobile-first, since that's where most of your traffic is." },
      { title: "Content-Editable by Your Team", desc: "CMS or admin tooling that lets your team update content without needing a developer." },
      { title: "Conversion-Focused UX", desc: "Clear calls-to-action and friction-free forms designed around your actual funnel." },
      { title: "Ongoing Support Available", desc: "Maintenance and iteration plans so the site keeps improving after launch." }
    ],
    technologies: ["Next.js", "React", "WordPress", "Shopify", "Eleventy", "Tailwind CSS", "Node.js", "Webflow"],
    process: [
      { title: "Strategy & UX Planning", desc: "We define goals, target users, and the conversion paths the site needs to support." },
      { title: "Design & Prototyping", desc: "Visual design and interactive prototypes reviewed with you before development starts." },
      { title: "Development & Performance Testing", desc: "Build with continuous performance and cross-browser testing throughout." },
      { title: "Launch & SEO Setup", desc: "Go-live with proper analytics, search console setup, and technical SEO in place." }
    ],
    categories: [
      {
        slug: "custom-websites",
        name: "Custom Websites",
        shortDesc: "Fully custom-coded websites, built without the bloat of a generic template.",
        metaTitle: "Custom Website Development Services — Sanestix",
        metaDescription: "Fully custom-coded websites built for speed, conversion, and search visibility — without the bloat of a generic template or page builder.",
        heroKicker: "Web Development / Custom Websites",
        heroHeadline: "Custom-coded websites, without the bloat of a page builder",
        heroDescription: "We build fully custom websites from clean code — no bloated page-builder frameworks, no unnecessary plugins — just fast, maintainable sites designed around your brand and goals.",
        introTitle: "Why fully custom still wins for performance and control",
        introParagraphs: [
          "Page builders and heavy CMS themes are convenient, but they carry a real performance and flexibility cost — bloated code, plugin conflicts, and design constraints you eventually hit. A fully custom-coded site avoids all of that, at the cost of needing a developer for structural changes.",
          "We build custom sites when performance, unique design, or long-term maintainability matter more than short-term convenience — with clean, well-documented code your team or ours can maintain."
        ],
        whatWeBuild: [
          { title: "Brand & Marketing Websites", desc: "Custom-designed marketing sites built to convert and load fast." },
          { title: "Portfolio & Agency Sites", desc: "Distinctive, custom-built sites for agencies and professionals where design stands out." },
          { title: "Landing Page Systems", desc: "High-converting, fast-loading landing pages built for specific campaigns or offers." },
          { title: "Static Site Architectures", desc: "Statically-generated sites for maximum speed and minimal hosting complexity." }
        ],
        capabilities: [
          { title: "Clean, Custom Code", desc: "No page-builder bloat — hand-written HTML, CSS, and JavaScript optimized for performance." },
          { title: "Performance Budgeting", desc: "Page-speed targets set and enforced throughout design and development." },
          { title: "Custom Design Systems", desc: "A cohesive visual design system built specifically for your brand, not a template." },
          { title: "SEO-First Markup", desc: "Semantic HTML and structured data built in from the start, not retrofitted." },
          { title: "Accessible by Default", desc: "WCAG-aligned markup and interaction patterns built into every custom build." },
          { title: "Lightweight CMS Integration", desc: "Headless CMS integration where your team needs to edit content without a developer." }
        ],
        useCases: [
          { title: "Company Marketing Site", desc: "A fast, custom-designed site that represents your brand and converts visitors." },
          { title: "Campaign Landing Pages", desc: "Purpose-built landing pages optimized for a specific ad campaign or launch." },
          { title: "Professional Services Site", desc: "Custom sites for law firms, consultancies, and agencies where trust and design matter." },
          { title: "Product Launch Microsite", desc: "A standalone, fast-loading site built around a single product or campaign launch." }
        ],
        process: [
          { title: "Discovery & Content Strategy", desc: "We define goals, target audience, and the content the site needs to support." },
          { title: "Custom Design", desc: "Visual design built specifically for your brand, not adapted from a template." },
          { title: "Hand-Coded Development", desc: "Clean, performance-optimized code built without unnecessary dependencies." },
          { title: "Launch & Performance Audit", desc: "Go-live with a final performance and SEO audit before handover." }
        ],
        technology: ["HTML5", "CSS3", "JavaScript", "Eleventy", "Next.js", "Tailwind CSS"],
        whySanestix: [
          { title: "No Bloat, No Compromise", desc: "Custom code means no page-builder overhead dragging down your load times." },
          { title: "Built To Your Exact Design", desc: "No template constraints — the site looks exactly like your brand, not a theme." },
          { title: "Performance As A Requirement", desc: "Speed targets are part of the spec from day one, not a post-launch fix." }
        ],
        faq: [
          { q: "Why choose custom code over WordPress or a page builder?", a: "Custom code gives you full control over performance and design without the plugin bloat or theme constraints that come with page builders — it's the right choice when speed and a unique design matter most." },
          { q: "Will our team be able to update content ourselves?", a: "Yes, where needed we integrate a lightweight headless CMS so your team can update text and images without touching code." },
          { q: "How much faster is a custom site really?", a: "Results vary, but custom-coded sites routinely load significantly faster than page-builder equivalents since there's no unnecessary framework or plugin overhead to load." },
          { q: "Can you still add a blog or dynamic content later?", a: "Yes, we architect custom sites so a CMS-backed blog or additional dynamic sections can be added without a rebuild." }
        ]
      },
      {
        slug: "wordpress-development",
        name: "WordPress Development",
        shortDesc: "Custom WordPress builds your team can manage, without the plugin bloat.",
        metaTitle: "WordPress Development Services — Sanestix",
        metaDescription: "Custom WordPress development — fast, secure, and easy for your team to manage, without unnecessary plugin bloat. Built by Sanestix.",
        heroKicker: "Web Development / WordPress Development",
        heroHeadline: "WordPress sites your team can actually manage, without the bloat",
        heroDescription: "We build custom WordPress sites and themes designed for speed and simplicity — giving your team full content control without the plugin sprawl that slows most WordPress sites down.",
        introTitle: "WordPress done well vs. WordPress done by default",
        introParagraphs: [
          "Most slow WordPress sites aren't slow because of the platform — they're slow because of a dozen stacked plugins and a bloated page-builder theme. Done properly, WordPress can be fast, secure, and genuinely easy for a non-technical team to manage.",
          "We build custom themes and a curated, minimal plugin set — giving your team the content editing power WordPress is known for, without the performance and security tradeoffs of an over-plugin'd build."
        ],
        whatWeBuild: [
          { title: "Custom WordPress Themes", desc: "Hand-built themes matching your brand exactly, without relying on a generic theme." },
          { title: "Content-Managed Marketing Sites", desc: "Marketing sites your content team can update independently, safely, and quickly." },
          { title: "WordPress-Powered Blogs", desc: "SEO-optimized blog and content platforms built on WordPress's strong publishing tools." },
          { title: "Multilingual WordPress Sites", desc: "Properly structured multilingual sites for businesses serving multiple markets." }
        ],
        capabilities: [
          { title: "Custom Theme Development", desc: "Hand-coded themes, not a customized off-the-shelf theme with layers of overrides." },
          { title: "Minimal, Curated Plugins", desc: "A deliberately small, well-vetted plugin set to avoid bloat and security risk." },
          { title: "Editor-Friendly Content Blocks", desc: "Custom Gutenberg blocks designed for how your content team actually works." },
          { title: "Security Hardening", desc: "WordPress-specific security hardening to reduce the platform's common attack surface." },
          { title: "Performance Optimization", desc: "Caching, image optimization, and database tuning for genuinely fast WordPress sites." },
          { title: "SEO Plugin Integration", desc: "Proper technical SEO setup using lightweight, well-maintained SEO tooling." }
        ],
        useCases: [
          { title: "Content-Heavy Marketing Site", desc: "A WordPress site built for a marketing team that publishes frequently." },
          { title: "Company Blog & Resource Hub", desc: "A fast, SEO-optimized blog platform supporting an ongoing content strategy." },
          { title: "Multi-Author Publication", desc: "Editorial workflows and permissions for a team of multiple content contributors." },
          { title: "Small Business Website", desc: "An affordable, easy-to-manage WordPress site for a growing small business." }
        ],
        process: [
          { title: "Content & Structure Planning", desc: "We map the content types and editing workflows your team actually needs." },
          { title: "Custom Theme Design & Build", desc: "A hand-built theme matching your brand, without unnecessary plugin dependencies." },
          { title: "Editor Training", desc: "We train your content team on managing the site confidently after launch." },
          { title: "Launch & Performance Tuning", desc: "Go-live with caching, image optimization, and security hardening in place." }
        ],
        technology: ["WordPress", "PHP", "MySQL", "Advanced Custom Fields", "Gutenberg", "WP Rocket"],
        whySanestix: [
          { title: "Built To Be Fast", desc: "We deliberately avoid plugin bloat, so your WordPress site loads fast, not just at launch." },
          { title: "Genuinely Editable", desc: "Custom content blocks designed around how your team actually writes and publishes." },
          { title: "Secured By Default", desc: "WordPress-specific hardening reduces the platform's most common security risks." }
        ],
        faq: [
          { q: "Will our site be slow like other WordPress sites we've seen?", a: "Not if built properly. Most WordPress slowness comes from plugin bloat and unoptimized themes — we build custom, minimal-plugin sites specifically to avoid that." },
          { q: "Can our marketing team update content without a developer?", a: "Yes, that's a core goal of our WordPress builds — we design custom content blocks and workflows for your team to manage independently." },
          { q: "How do you keep a WordPress site secure?", a: "Through WordPress-specific hardening, a minimal and well-vetted plugin set, and clear update and backup processes we set up as part of the build." },
          { q: "Can you migrate our existing WordPress site instead of rebuilding it?", a: "Yes, we can assess your current site and recommend either a migration or rebuild depending on its current state and your goals." }
        ]
      },
      {
        slug: "shopify-development",
        name: "Shopify Development",
        shortDesc: "Custom Shopify stores and apps built to convert and scale with your catalog.",
        metaTitle: "Shopify Development Services — Sanestix",
        metaDescription: "Custom Shopify store development, theme customization, and app integrations built to convert and scale — by Sanestix.",
        heroKicker: "Web Development / Shopify Development",
        heroHeadline: "Shopify stores built to convert, not just to look nice",
        heroDescription: "We build custom Shopify storefronts, theme customizations, and app integrations designed around your catalog, checkout flow, and conversion goals.",
        introTitle: "A Shopify store is more than a theme install",
        introParagraphs: [
          "Shopify's platform strength is speed to launch, but a store that actually converts needs custom theme work, thoughtful product page design, and the right app integrations for your specific catalog and fulfillment process — not just a default theme with a logo swapped in.",
          "We build custom Shopify themes and integrations tuned to your specific products, whether that's a large variant-heavy catalog, subscription products, or a highly curated small collection."
        ],
        whatWeBuild: [
          { title: "Custom Shopify Themes", desc: "Hand-customized or fully custom Shopify themes matching your brand exactly." },
          { title: "Shopify App Integrations", desc: "Integration of third-party or custom apps for subscriptions, reviews, and loyalty." },
          { title: "Headless Shopify Storefronts", desc: "Headless builds using Shopify's Storefront API for maximum frontend flexibility." },
          { title: "Product & Checkout Optimization", desc: "Product page and checkout flow redesigns focused on conversion rate improvement." }
        ],
        capabilities: [
          { title: "Custom Theme Development", desc: "Liquid theme customization or fully custom themes beyond default Shopify templates." },
          { title: "App & API Integrations", desc: "Integration of Shopify apps and third-party APIs for fulfillment, marketing, and support." },
          { title: "Conversion Rate Optimization", desc: "Product and checkout page design decisions grounded in ecommerce conversion best practices." },
          { title: "Performance Optimization", desc: "Theme performance tuning so page speed doesn't suffer as your catalog grows." },
          { title: "Headless Commerce Architecture", desc: "Storefront API-based headless builds for brands needing full frontend control." },
          { title: "Multi-Currency & Market Setup", desc: "Configuration for stores selling across multiple currencies and regions." }
        ],
        useCases: [
          { title: "New Shopify Store Launch", desc: "A custom-themed store built and launched from scratch on Shopify." },
          { title: "Theme Migration & Redesign", desc: "Migrating from a default theme to a fully custom design without losing SEO equity." },
          { title: "Subscription Commerce Store", desc: "Shopify stores built around recurring subscription products and billing." },
          { title: "Headless Shopify Frontend", desc: "A custom frontend built on Shopify's Storefront API for brands wanting full design freedom." }
        ],
        process: [
          { title: "Catalog & Conversion Audit", desc: "We assess your product catalog, checkout flow, and current conversion bottlenecks." },
          { title: "Theme & App Strategy", desc: "We plan the custom theme scope and the app integrations your store genuinely needs." },
          { title: "Development & Testing", desc: "Theme build and app integration with testing across devices and payment flows." },
          { title: "Launch & Conversion Monitoring", desc: "Go-live with analytics in place to track conversion improvements over time." }
        ],
        technology: ["Shopify Liquid", "Shopify Storefront API", "React", "Node.js", "Shopify Apps"],
        whySanestix: [
          { title: "Conversion-Focused Builds", desc: "Every theme and page decision is grounded in what actually improves conversion." },
          { title: "Right-Sized for Your Catalog", desc: "We design around your actual product structure, not a generic template's assumptions." },
          { title: "Performance at Scale", desc: "Themes optimized to stay fast even as your catalog and traffic grow." }
        ],
        faq: [
          { q: "Do we need a fully custom theme or can you customize an existing one?", a: "It depends on your brand and conversion goals — we assess this during the catalog audit and recommend whichever gets you to a strong result faster." },
          { q: "Can you integrate our existing fulfillment or ERP system?", a: "Yes, integrating Shopify with existing fulfillment, ERP, or accounting systems is a common part of our Shopify development work." },
          { q: "What is headless Shopify and do we need it?", a: "Headless means building a fully custom frontend on top of Shopify's backend via its Storefront API — it's worth it when you need design flexibility beyond what themes allow, which we'll help you assess." },
          { q: "Can you help improve our existing store's conversion rate?", a: "Yes, conversion audits and targeted redesign of product and checkout pages on an existing store is a common engagement for us." }
        ]
      },
      {
        slug: "web-application-development",
        name: "Web Application Development",
        shortDesc: "Full-featured web applications with real functionality, not just static pages.",
        metaTitle: "Web Application Development Services — Sanestix",
        metaDescription: "Custom web application development — dashboards, portals, and full-featured platforms built to perform and scale, by Sanestix.",
        heroKicker: "Web Development / Web Application Development",
        heroHeadline: "Web applications built for real functionality, not just static pages",
        heroDescription: "We build full-featured web applications — dashboards, customer portals, and interactive platforms — with the authentication, data architecture, and performance a real product needs.",
        introTitle: "A web app is a product, not a website with more pages",
        introParagraphs: [
          "Web applications carry different engineering requirements than marketing websites — user authentication, data persistence, real-time updates, and complex state management. Treating a web app like a bigger website leads to fragile, hard-to-maintain systems.",
          "We architect web applications properly from the start: a clear data model, secure authentication, and a frontend architecture that can grow with new features without becoming unmanageable."
        ],
        whatWeBuild: [
          { title: "Customer Portals", desc: "Self-service portals where your customers manage accounts, orders, or subscriptions." },
          { title: "Admin Dashboards", desc: "Internal dashboards giving your team visibility and control over business operations." },
          { title: "Interactive Data Platforms", desc: "Applications built around visualizing and interacting with complex data sets." },
          { title: "Booking & Scheduling Systems", desc: "Web applications handling appointments, reservations, or resource scheduling." }
        ],
        capabilities: [
          { title: "Secure Authentication", desc: "Robust user authentication and authorization built to modern security standards." },
          { title: "Real-Time Features", desc: "WebSocket-based real-time updates where your application genuinely needs them." },
          { title: "Scalable Data Architecture", desc: "Database and API design that holds up as your users and data volume grow." },
          { title: "Responsive, Accessible UI", desc: "Interfaces that work well across devices and are usable with assistive technology." },
          { title: "Third-Party Integrations", desc: "Clean integration with payment providers, CRMs, and other business systems." },
          { title: "Performance at Scale", desc: "Frontend and backend performance work so the app stays fast as usage grows." }
        ],
        useCases: [
          { title: "Customer Self-Service Portal", desc: "A portal reducing support load by letting customers self-manage their accounts." },
          { title: "Internal Operations Dashboard", desc: "A dashboard giving leadership and operations teams real-time business visibility." },
          { title: "Booking & Reservation Platform", desc: "A scheduling application for service businesses managing appointments online." },
          { title: "Data Visualization Tool", desc: "An interactive application for exploring and analyzing complex data sets." }
        ],
        process: [
          { title: "Requirements & Data Modeling", desc: "We define the core entities, user roles, and workflows the application needs to support." },
          { title: "Architecture & UX Design", desc: "System architecture and interface design agreed together before development starts." },
          { title: "Iterative Development", desc: "Build in sprints with regular demos so functionality is validated as it's built." },
          { title: "Launch & Scaling Support", desc: "Deployment with monitoring and a support plan as usage grows post-launch." }
        ],
        technology: ["React", "Next.js", "Node.js", "PostgreSQL", "GraphQL", "WebSockets", "AWS"],
        whySanestix: [
          { title: "Engineered Like a Product", desc: "We treat web applications with the architectural discipline a real product needs." },
          { title: "Secure From The Start", desc: "Authentication and authorization are designed properly, not patched in later." },
          { title: "Built To Scale With You", desc: "Data and API architecture designed to handle growth without a rebuild." }
        ],
        faq: [
          { q: "How is a web application different from a website?", a: "A web application involves user accounts, data persistence, and interactive functionality — it requires backend architecture and security considerations a static website doesn't need." },
          { q: "Can this integrate with our existing CRM or payment provider?", a: "Yes, integrating with your existing business systems is a standard part of web application development." },
          { q: "How do you make sure the app stays fast as we add more users?", a: "Through scalable data architecture, performance testing, and infrastructure decisions made upfront — plus ongoing monitoring to catch issues before they affect users." },
          { q: "Do you provide ongoing support after the application launches?", a: "Yes, we offer maintenance and feature development plans so the application keeps evolving and performing well as your usage grows." }
        ]
      }
    ]
  },

  {
    slug: "automation-solutions",
    name: "Automation Solutions",
    imageDir: "automation",
    navBlurb: "AI calling, chatbots, WhatsApp, Instagram, CRM & workflow automation.",
    metaTitle: "Automation Solutions — AI Calling, Chatbots & Workflow Automation — Sanestix",
    metaDescription: "Sanestix builds end-to-end automation — AI calling agents, chatbots, WhatsApp and Instagram automation, CRM integration, and custom workflows.",
    heroKicker: "Automation Solutions",
    heroHeadline: "End-to-end automation that captures, qualifies, and converts every lead",
    heroDescription: "From AI calling agents and smart chatbots to WhatsApp, Instagram, CRM, and full workflow automation — we connect every channel so no lead falls through the cracks.",
    overviewTitle: "Automation across every channel your customers actually use",
    overviewParagraphs: [
      "Customers reach your business through many channels — your website, WhatsApp, Instagram DMs, phone calls — and each one is an opportunity that's lost the moment a human isn't available to respond instantly. Automation Solutions closes that gap across every channel at once, not just one.",
      "We design automation as a connected system: leads captured on one channel flow into your CRM, trigger the right follow-up, and get nurtured automatically — with a human looped in exactly where it matters."
    ],
    benefits: [
      { title: "Every Channel Connected", desc: "Website, WhatsApp, Instagram, and phone automation working together, not in isolation." },
      { title: "24/7 Lead Capture", desc: "No lead waits for business hours — every channel responds instantly, any time of day." },
      { title: "CRM-Synced by Default", desc: "Every automated interaction is logged and routed into your CRM automatically." },
      { title: "Trained On Your Business", desc: "Automation reflects your actual products, pricing, and tone — not generic scripted replies." },
      { title: "Human Handoff Built In", desc: "Clear escalation paths so a human steps in exactly when a lead needs one." },
      { title: "Measurable Results", desc: "Dashboards tracking leads captured, response times, and conversion improvements." }
    ],
    technologies: ["WhatsApp Business API", "Twilio", "n8n", "Zapier", "HubSpot", "Meta Graph API", "OpenAI API", "Make"],
    process: [
      { title: "Channel & Workflow Audit", desc: "We map every channel your leads come through and where automation gaps exist." },
      { title: "Automation Design", desc: "We design the flows, scripts, and CRM logic across every channel involved." },
      { title: "Build & AI Training", desc: "Build and train the automation on your actual products, pricing, and FAQs." },
      { title: "Launch & Optimize", desc: "Go-live with ongoing optimization based on real conversation and conversion data." }
    ],
    categories: [
      {
        slug: "ai-calling-agent",
        name: "AI Calling Agent",
        shortDesc: "AI voice agents that answer, qualify, and book calls automatically, 24/7.",
        metaTitle: "AI Calling Agent Services — Sanestix",
        metaDescription: "AI voice calling agents that answer inbound calls, qualify leads, and book appointments automatically, 24/7 — built by Sanestix.",
        heroKicker: "Automation Solutions / AI Calling Agent",
        heroHeadline: "An AI voice agent that never misses a call, day or night",
        heroDescription: "We build AI calling agents that answer inbound calls, handle common questions, qualify leads, and book appointments — trained on your business so it sounds like your best phone rep.",
        introTitle: "Missed calls are missed revenue",
        introParagraphs: [
          "Every missed call is a lead that likely calls your competitor next. An AI calling agent answers instantly, every time, handling routine questions and qualification so your team only picks up calls that are ready to convert.",
          "We train the agent on your specific products, pricing, and booking rules — so callers get accurate, natural answers instead of a generic phone tree."
        ],
        whatWeBuild: [
          { title: "Inbound Call Answering", desc: "AI agents that answer every inbound call instantly, any time of day." },
          { title: "Lead Qualification Scripts", desc: "Conversational qualification flows tuned to your specific sales criteria." },
          { title: "Appointment Booking Integration", desc: "Direct booking into your calendar system during the call itself." },
          { title: "Outbound Follow-Up Calling", desc: "Automated outbound calls for confirmations, reminders, and follow-ups." }
        ],
        capabilities: [
          { title: "Natural Voice Conversations", desc: "Low-latency, natural-sounding voice AI that handles real conversational back-and-forth." },
          { title: "Business-Trained Responses", desc: "Answers grounded in your actual pricing, hours, and service details." },
          { title: "Calendar & Booking Integration", desc: "Live booking into your existing calendar or scheduling system." },
          { title: "Call Transcription & Logging", desc: "Every call transcribed and logged automatically into your CRM." },
          { title: "Human Handoff", desc: "Seamless transfer to a live team member for complex or high-value calls." },
          { title: "Multi-Language Support", desc: "Support for calls in multiple languages relevant to your customer base." }
        ],
        useCases: [
          { title: "Service Business Booking Line", desc: "An AI agent that books appointments for clinics, salons, or service businesses around the clock." },
          { title: "Sales Lead Qualification", desc: "Inbound sales calls automatically qualified before being routed to a human closer." },
          { title: "Reminder & Confirmation Calls", desc: "Automated outbound calls confirming appointments and reducing no-shows." },
          { title: "After-Hours Call Coverage", desc: "Full call coverage outside business hours without hiring night staff." }
        ],
        process: [
          { title: "Call Flow & Script Design", desc: "We map the exact call scenarios and design conversation flows for each." },
          { title: "Voice AI Training", desc: "The agent is trained on your business details, pricing, and booking rules." },
          { title: "Integration & Testing", desc: "Integration with your calendar and CRM, tested against real call scenarios." },
          { title: "Launch & Refinement", desc: "Go-live with ongoing script refinement based on real call transcripts." }
        ],
        technology: ["Twilio", "OpenAI Realtime API", "ElevenLabs", "n8n", "HubSpot", "Google Calendar API"],
        whySanestix: [
          { title: "Sounds Like Your Business", desc: "Trained on your actual pricing and services, not a generic phone script." },
          { title: "Books Directly Into Your Calendar", desc: "No manual follow-up needed — appointments are confirmed during the call." },
          { title: "Every Call Logged", desc: "Full transcripts and call data flow straight into your CRM automatically." }
        ],
        faq: [
          { q: "Will callers know they're talking to an AI?", a: "We're transparent about this where required by local regulations, and design the conversation to be clear, helpful, and efficient regardless — the goal is a good experience, not deception." },
          { q: "Can it actually book appointments during the call?", a: "Yes, the agent integrates directly with your calendar system to check availability and confirm bookings live during the conversation." },
          { q: "What happens with complex questions it can't answer?", a: "The agent is designed to recognize when a call needs a human and hands off smoothly with full context, rather than guessing." },
          { q: "How natural does the voice actually sound?", a: "Modern voice AI is very close to natural conversational speech, including appropriate pacing and tone — we can share a live demo call so you can judge it directly." }
        ]
      },
      {
        slug: "ai-website-development",
        name: "AI Website Development",
        shortDesc: "Websites built with an AI chatbot layer woven in from the ground up.",
        metaTitle: "AI Website Development Services — Sanestix",
        metaDescription: "AI-powered websites built with an intelligent chatbot layer from the ground up — capturing and qualifying leads 24/7. Built by Sanestix.",
        heroKicker: "Automation Solutions / AI Website Development",
        heroHeadline: "A website that talks back, and knows what it's talking about",
        heroDescription: "We build websites with an AI chatbot woven into the core experience — trained on your products and FAQs, so visitors get real answers instead of a static contact form.",
        introTitle: "A website with an AI layer, not a website plus a chat widget",
        introParagraphs: [
          "Bolting a generic chat widget onto an existing site is different from designing the site around an AI-first visitor experience. We build the website and the AI layer together, so the chatbot has context about what the visitor is looking at and can genuinely help.",
          "The result is a site that qualifies leads, answers product questions accurately, and books appointments — all without the visitor needing to fill out a static form and wait for a callback."
        ],
        whatWeBuild: [
          { title: "AI-First Marketing Sites", desc: "Websites designed with the AI chatbot as a core conversion feature, not an add-on." },
          { title: "Contextual Chat Experiences", desc: "Chat that knows which page or product the visitor is viewing and responds accordingly." },
          { title: "Lead Qualification Flows", desc: "Chatbot-driven qualification that routes hot leads to your team automatically." },
          { title: "AI-Assisted Booking Sites", desc: "Sites where the chatbot can book a consultation or demo directly during the conversation." }
        ],
        capabilities: [
          { title: "Business-Trained Chatbot", desc: "Chat responses grounded in your actual products, pricing, and policies." },
          { title: "Page-Aware Context", desc: "The chatbot understands what page the visitor is on and tailors responses accordingly." },
          { title: "Lead Capture & Routing", desc: "Qualified leads are captured and routed straight into your CRM automatically." },
          { title: "Performance-Optimized Build", desc: "Fast page loads even with an AI chat layer running client-side." },
          { title: "Seamless Human Handoff", desc: "Clear escalation to a human team member when a conversation needs it." },
          { title: "Analytics Dashboard", desc: "Visibility into chat conversations, conversion rates, and common visitor questions." }
        ],
        useCases: [
          { title: "Service Business Website", desc: "A site where the chatbot qualifies and books consultations automatically." },
          { title: "Product Catalog Site", desc: "A site where visitors get instant, accurate answers about products and pricing." },
          { title: "Real Estate Listing Site", desc: "A site where the chatbot qualifies buyer interest and schedules viewings." },
          { title: "SaaS Marketing Site", desc: "A site where the chatbot handles product questions and books demo calls." }
        ],
        process: [
          { title: "Content & FAQ Audit", desc: "We gather the product, pricing, and FAQ content the chatbot needs to be trained on." },
          { title: "Site & Chat Design Together", desc: "Website design and chatbot experience designed as one cohesive flow." },
          { title: "Build & AI Training", desc: "Site development alongside chatbot training and testing against real questions." },
          { title: "Launch & Ongoing Tuning", desc: "Go-live with ongoing chatbot refinement based on real visitor conversations." }
        ],
        technology: ["OpenAI API", "Anthropic API", "Next.js", "Node.js", "HubSpot", "Google Analytics"],
        whySanestix: [
          { title: "Chat Designed Into The Site", desc: "The AI layer is part of the core site design, not a bolted-on widget." },
          { title: "Accurate, Business-Specific Answers", desc: "Trained on your real content, so visitors get correct answers, not generic replies." },
          { title: "Every Lead Captured", desc: "Qualified conversations flow directly into your CRM without manual follow-up." }
        ],
        faq: [
          { q: "Will the AI chat slow down our website?", a: "No — we architect the chat layer to load asynchronously so it never blocks or slows down the core page experience." },
          { q: "How does the chatbot know about our specific products?", a: "We train it directly on your product catalog, pricing, and FAQ content during the content audit phase, and can update it as your offerings change." },
          { q: "Can visitors book an appointment directly through the chat?", a: "Yes, we integrate the chatbot with your booking or calendar system so it can schedule appointments during the conversation." },
          { q: "What if the chatbot gets a question it doesn't know?", a: "It's designed to recognize the limits of its training and hand off to a human or capture the visitor's contact details for follow-up, rather than guessing." }
        ]
      },
      {
        slug: "smart-chatbot-integration",
        name: "Smart Chatbot Integration",
        shortDesc: "AI chatbots integrated into your existing website, app, or support tools.",
        metaTitle: "Smart Chatbot Integration Services — Sanestix",
        metaDescription: "AI chatbot integration into your existing website, app, or support desk — trained on your business and connected to your CRM. By Sanestix.",
        heroKicker: "Automation Solutions / Smart Chatbot Integration",
        heroHeadline: "An AI chatbot that fits into what you already have",
        heroDescription: "We integrate an AI chatbot into your existing website, app, or support desk — trained on your business, connected to your CRM, without requiring a site rebuild.",
        introTitle: "You don't need a new website to get a great chatbot",
        introParagraphs: [
          "If your website or app already works, adding a smart chatbot shouldn't mean rebuilding it. Smart Chatbot Integration adds a trained AI assistant to your existing platform — connected to your CRM and support tools — with minimal disruption to what's already working.",
          "We handle the training, integration, and handoff logic, so the chatbot behaves like a natural extension of your existing customer experience."
        ],
        whatWeBuild: [
          { title: "Website Chat Widgets", desc: "AI chat widgets added to your existing site, trained on your specific content." },
          { title: "In-App Assistants", desc: "Chatbot assistants embedded inside your existing mobile or web application." },
          { title: "Help Desk AI Layers", desc: "AI-assisted first response layered on top of your existing support desk." },
          { title: "Multi-Channel Chat Sync", desc: "A chatbot experience kept consistent across web, app, and social channels." }
        ],
        capabilities: [
          { title: "Non-Disruptive Integration", desc: "Added to your existing platform without requiring a rebuild or migration." },
          { title: "Business-Specific Training", desc: "Trained on your actual products, policies, and support history." },
          { title: "CRM & Helpdesk Sync", desc: "Conversations and leads synced automatically into your existing CRM or helpdesk." },
          { title: "Human Handoff Logic", desc: "Clear rules for when to escalate a conversation to your support team." },
          { title: "Conversation Analytics", desc: "Dashboards showing common questions, resolution rates, and lead capture." },
          { title: "Ongoing Retraining", desc: "Regular updates as your products, policies, and FAQs change over time." }
        ],
        useCases: [
          { title: "Support Ticket Deflection", desc: "AI-handled first responses that reduce repetitive tickets reaching your support team." },
          { title: "Website Lead Capture Widget", desc: "A chat widget added to an existing site to capture and qualify leads." },
          { title: "In-App Customer Assistant", desc: "A chatbot embedded inside your existing app for account or product questions." },
          { title: "E-Commerce Pre-Sales Chat", desc: "AI chat that answers product questions and reduces cart abandonment." }
        ],
        process: [
          { title: "Platform & Content Audit", desc: "We review your existing platform and gather the content the bot needs to be trained on." },
          { title: "Integration Design", desc: "We design how the chatbot connects to your CRM, helpdesk, and existing UI." },
          { title: "Build & Training", desc: "Integration development alongside chatbot training and conversation testing." },
          { title: "Launch & Ongoing Tuning", desc: "Go-live with monitoring and regular retraining based on real conversations." }
        ],
        technology: ["OpenAI API", "Anthropic API", "Zendesk", "Intercom", "HubSpot", "Node.js"],
        whySanestix: [
          { title: "Fits Your Existing Platform", desc: "Integration designed to work with what you already have, not replace it." },
          { title: "Trained On Real Support History", desc: "We use your actual FAQs and support history to train accurate responses." },
          { title: "Clear Escalation Rules", desc: "Human handoff is designed deliberately, not left to chance." }
        ],
        faq: [
          { q: "Do we need to rebuild our website to add this chatbot?", a: "No, we design the integration to layer on top of your existing website or app without requiring a rebuild." },
          { q: "Can it connect to our existing helpdesk software?", a: "Yes, integration with common helpdesk and CRM platforms is a standard part of this service." },
          { q: "How do you train it on our specific business?", a: "We use your existing FAQs, product documentation, and support ticket history as training material, refined through testing before launch." },
          { q: "What happens if the chatbot can't resolve a question?", a: "It's designed with clear rules for escalating to a human agent with full conversation context, rather than leaving the customer stuck." }
        ]
      },
      {
        slug: "whatsapp-automation",
        name: "WhatsApp Automation",
        shortDesc: "Automated WhatsApp conversations for orders, support, and lead follow-up.",
        metaTitle: "WhatsApp Automation Services — Sanestix",
        metaDescription: "WhatsApp Business API automation for order updates, customer support, and lead follow-up — built and integrated by Sanestix.",
        heroKicker: "Automation Solutions / WhatsApp Automation",
        heroHeadline: "WhatsApp automation that responds the moment a customer messages",
        heroDescription: "We build WhatsApp Business API automation that handles product questions, order updates, and lead follow-up instantly — the channel most of your customers already prefer.",
        introTitle: "WhatsApp is often the first channel customers actually use",
        introParagraphs: [
          "For many markets, WhatsApp isn't a secondary channel — it's the primary way customers expect to reach a business. Manual responses can't keep up with volume, and delayed replies cost sales. WhatsApp automation keeps response times instant without losing the personal feel customers expect from the channel.",
          "We build on the official WhatsApp Business API, so automation is compliant, reliable, and integrates cleanly with your CRM and order systems."
        ],
        whatWeBuild: [
          { title: "Automated Order Updates", desc: "Automatic WhatsApp notifications for order confirmation, shipping, and delivery." },
          { title: "Product Q&A Automation", desc: "Instant, accurate answers to common product and pricing questions." },
          { title: "Lead Follow-Up Sequences", desc: "Automated follow-up messages that keep leads warm without manual effort." },
          { title: "Cart Recovery Messaging", desc: "Automated WhatsApp reminders for abandoned carts or incomplete orders." }
        ],
        capabilities: [
          { title: "WhatsApp Business API Setup", desc: "Proper official API setup and verification, not a risky unofficial workaround." },
          { title: "Template Message Compliance", desc: "Message templates designed to meet WhatsApp's approval and compliance requirements." },
          { title: "CRM & Order System Sync", desc: "Conversations and triggers connected directly to your CRM and order data." },
          { title: "Conversational AI Layer", desc: "AI-driven responses for open-ended questions beyond fixed templates." },
          { title: "Broadcast & Segmentation", desc: "Compliant broadcast messaging to segmented customer lists where appropriate." },
          { title: "Human Handoff", desc: "Clear escalation to a live team member for sensitive or complex conversations." }
        ],
        useCases: [
          { title: "E-Commerce Order Updates", desc: "Automatic order and shipping status updates sent directly via WhatsApp." },
          { title: "Retail Product Inquiries", desc: "Instant answers to product availability and pricing questions from shoppers." },
          { title: "Service Booking Reminders", desc: "Automated appointment reminders and confirmations sent through WhatsApp." },
          { title: "Lead Nurture Sequences", desc: "Automated multi-step WhatsApp follow-up for leads who haven't yet converted." }
        ],
        process: [
          { title: "WhatsApp Business API Setup", desc: "Official business verification and API access setup handled end-to-end." },
          { title: "Flow & Template Design", desc: "Message flows and templates designed and submitted for WhatsApp approval." },
          { title: "Integration & Automation Build", desc: "Automation logic built and connected to your CRM and order systems." },
          { title: "Launch & Optimization", desc: "Go-live with ongoing monitoring of response rates and conversion impact." }
        ],
        technology: ["WhatsApp Business API", "Twilio", "n8n", "HubSpot", "OpenAI API"],
        whySanestix: [
          { title: "Official API, Done Right", desc: "We build on the compliant WhatsApp Business API, avoiding risky workarounds." },
          { title: "Feels Personal, Runs Automatically", desc: "Automation designed to keep the conversational, personal feel customers expect on WhatsApp." },
          { title: "Fully Connected to Your CRM", desc: "Every conversation and order trigger flows straight into your existing systems." }
        ],
        faq: [
          { q: "Is this the official WhatsApp Business API?", a: "Yes, we set up and build on the official WhatsApp Business API and Meta's approval process, rather than unofficial tools that risk your number being banned." },
          { q: "Can we send promotional messages through automation?", a: "Yes, within WhatsApp's messaging policies — we design template and broadcast messaging to stay compliant with Meta's rules for promotional content." },
          { q: "How long does WhatsApp Business API approval take?", a: "Business verification and template approval typically takes a few days to a couple of weeks, depending on Meta's review process — we handle this on your behalf." },
          { q: "Can customers still reach a real person if needed?", a: "Yes, we build in clear handoff points so a customer can always reach your team when the situation calls for a human." }
        ]
      },
      {
        slug: "instagram-automation",
        name: "Instagram Automation",
        shortDesc: "Automated Instagram DMs that turn comments and messages into sales.",
        metaTitle: "Instagram Automation Services — Sanestix",
        metaDescription: "Instagram DM and comment automation that turns social engagement into qualified leads and sales — built and integrated by Sanestix.",
        heroKicker: "Automation Solutions / Instagram Automation",
        heroHeadline: "Turn Instagram comments and DMs into qualified leads automatically",
        heroDescription: "We build Instagram automation that responds to comments and DMs instantly, answers product questions, and guides interested followers straight to checkout or booking.",
        introTitle: "Instagram engagement that goes nowhere is a wasted opportunity",
        introParagraphs: [
          "A flood of comments and DMs on a good post is genuine buying intent — but only if someone responds fast enough. Instagram automation captures that intent the moment it happens, answering questions and guiding the conversation toward a sale or booking, even outside business hours.",
          "We build on Meta's official Graph API, so automation stays compliant with Instagram's platform rules while still feeling responsive and on-brand."
        ],
        whatWeBuild: [
          { title: "Comment-to-DM Automation", desc: "Automatic DM triggers when someone comments a specific keyword on a post." },
          { title: "DM Q&A Automation", desc: "Instant, accurate responses to product and pricing questions in DMs." },
          { title: "DM-to-Checkout Flows", desc: "Automated flows that guide an interested follower directly to a purchase link." },
          { title: "Story Reply Automation", desc: "Automated responses to story replies and interactions." }
        ],
        capabilities: [
          { title: "Meta Graph API Integration", desc: "Built on Instagram's official Graph API for compliant, reliable automation." },
          { title: "Keyword-Triggered Flows", desc: "Automation triggered by specific comment or DM keywords relevant to your campaigns." },
          { title: "Business-Trained Responses", desc: "DM replies grounded in your actual products, pricing, and availability." },
          { title: "CRM Lead Sync", desc: "Qualified DM conversations synced automatically into your CRM." },
          { title: "Human Handoff", desc: "Clear escalation to your team for conversations that need a personal touch." },
          { title: "Campaign-Specific Flows", desc: "Automation flows tailored to specific product launches or promotions." }
        ],
        useCases: [
          { title: "Fashion & Retail DM Sales", desc: "Automated DM flows that convert comment engagement into completed purchases." },
          { title: "Influencer Campaign Follow-Up", desc: "Automated response to the surge of DMs following an influencer collaboration post." },
          { title: "Service Booking via DM", desc: "DM automation that qualifies interest and books a consultation or appointment." },
          { title: "Giveaway & Contest Automation", desc: "Automated handling of the high DM volume around giveaways and contests." }
        ],
        process: [
          { title: "Account & API Setup", desc: "We connect your Instagram business account via Meta's official Graph API." },
          { title: "Flow & Keyword Design", desc: "We design comment and DM automation flows aligned to your campaigns and offers." },
          { title: "Build & Response Training", desc: "Automation built and trained on your product and pricing information." },
          { title: "Launch & Optimization", desc: "Go-live with monitoring of engagement-to-lead conversion over time." }
        ],
        technology: ["Meta Graph API", "ManyChat", "n8n", "HubSpot", "OpenAI API"],
        whySanestix: [
          { title: "Official Meta API", desc: "Built compliantly on Instagram's Graph API, avoiding risky third-party workarounds." },
          { title: "Captures Intent Instantly", desc: "Comment and DM engagement is met with an instant, relevant response, not a delay." },
          { title: "Every Lead Tracked", desc: "Qualified DM conversations flow straight into your CRM automatically." }
        ],
        faq: [
          { q: "Is this compliant with Instagram's platform rules?", a: "Yes, we build using Meta's official Graph API and design flows to stay within Instagram's automation and messaging policies." },
          { q: "Can it respond differently based on what someone comments?", a: "Yes, we design keyword-triggered flows so different comments or messages can lead to different automated responses relevant to that specific interest." },
          { q: "Will it feel robotic to our followers?", a: "We design the conversational flow and tone to match your brand voice, and always include a clear path to reach a real person for anything the automation can't handle well." },
          { q: "Can this work alongside our existing Instagram content strategy?", a: "Yes, we design automation to support your existing content and campaigns rather than requiring changes to your posting strategy." }
        ]
      },
      {
        slug: "crm-integration",
        name: "CRM Integration",
        shortDesc: "Connect every automation channel into one clean, synced CRM system.",
        metaTitle: "CRM Integration Services — Sanestix",
        metaDescription: "CRM integration connecting your website, WhatsApp, Instagram, and calling automation into one clean, synced system — by Sanestix.",
        heroKicker: "Automation Solutions / CRM Integration",
        heroHeadline: "Every channel, one CRM, no lead falling through the cracks",
        heroDescription: "We integrate your CRM with every automation channel — website chat, WhatsApp, Instagram, and calling — so every lead and conversation lands in one clean, synced system.",
        introTitle: "Automation without CRM integration just creates more data silos",
        introParagraphs: [
          "Automated channels that don't feed into a central CRM create a new problem: leads scattered across chat logs, WhatsApp threads, and DMs with no single view of the customer. CRM Integration ties every automated channel into one system, so your team always has full context.",
          "We work with your existing CRM — HubSpot, Zoho, Salesforce, Pipedrive, or others — rather than forcing a migration to a new platform."
        ],
        whatWeBuild: [
          { title: "Multi-Channel Lead Sync", desc: "Leads from website, WhatsApp, Instagram, and calls synced into one CRM automatically." },
          { title: "Automated Lead Scoring", desc: "CRM-based scoring rules that prioritize the leads most likely to convert." },
          { title: "Workflow Automation Within CRM", desc: "Automated follow-up sequences and task assignment triggered by CRM data." },
          { title: "Custom CRM Dashboards", desc: "Dashboards surfacing the pipeline and conversion metrics your team needs." }
        ],
        capabilities: [
          { title: "Multi-Platform CRM Expertise", desc: "Integration experience across HubSpot, Zoho, Salesforce, Pipedrive, and more." },
          { title: "Channel-to-CRM Mapping", desc: "Clean mapping of data from each automated channel into the right CRM fields." },
          { title: "Duplicate & Data Hygiene Rules", desc: "Logic to prevent duplicate records and keep CRM data clean over time." },
          { title: "Automated Task & Alert Rules", desc: "CRM automation that assigns tasks and alerts your team at the right moment." },
          { title: "Custom Field & Pipeline Setup", desc: "CRM configuration matched to your specific sales process and terminology." },
          { title: "Reporting & Attribution", desc: "Clear reporting on which channel and campaign each lead actually came from." }
        ],
        useCases: [
          { title: "Unified Lead Pipeline", desc: "All leads from every automated channel visible in one consolidated pipeline." },
          { title: "Sales Team Task Automation", desc: "Automatic task creation and follow-up reminders based on CRM triggers." },
          { title: "Marketing Attribution Reporting", desc: "Clear visibility into which channels are driving the most qualified leads." },
          { title: "CRM Migration & Cleanup", desc: "Migrating and cleaning existing CRM data as part of a broader automation rollout." }
        ],
        process: [
          { title: "CRM & Channel Audit", desc: "We review your current CRM setup and every channel that needs to feed into it." },
          { title: "Integration & Data Mapping Design", desc: "We design how data flows from each channel into the right CRM fields and pipelines." },
          { title: "Build & Automation Rules", desc: "Integration build alongside scoring, task, and alert automation rules." },
          { title: "Launch & Data Quality Monitoring", desc: "Go-live with ongoing monitoring for data quality and duplicate records." }
        ],
        technology: ["HubSpot", "Zoho CRM", "Salesforce", "Pipedrive", "n8n", "Zapier", "REST APIs"],
        whySanestix: [
          { title: "Works With Your Existing CRM", desc: "We integrate with the CRM you already use, rather than forcing a migration." },
          { title: "One View of Every Lead", desc: "Every channel feeds into the same system, so nothing gets lost between tools." },
          { title: "Clean, Reliable Data", desc: "Deliberate data hygiene rules keep your CRM usable as volume grows." }
        ],
        faq: [
          { q: "Which CRMs do you work with?", a: "We integrate with HubSpot, Zoho CRM, Salesforce, Pipedrive, and most platforms via API — if you're not using one yet, we'll help you choose the right fit." },
          { q: "Will this create duplicate records in our CRM?", a: "We design specific deduplication and matching rules as part of the integration to prevent this, rather than leaving it to chance." },
          { q: "Can you set up automated follow-up tasks for our sales team?", a: "Yes, automated task creation and alerts based on CRM triggers are a standard part of this service." },
          { q: "How do we know which channel is actually generating results?", a: "We set up attribution reporting so you can see exactly which channel and campaign each lead originated from." }
        ]
      },
      {
        slug: "e-commerce-automation",
        name: "E-Commerce Automation",
        shortDesc: "Automated order updates, cart recovery, and customer support for online stores.",
        metaTitle: "E-Commerce Automation Services — Sanestix",
        metaDescription: "E-commerce automation for order updates, abandoned cart recovery, and automated customer support — built and integrated by Sanestix.",
        heroKicker: "Automation Solutions / E-Commerce Automation",
        heroHeadline: "Automation that recovers carts and answers order questions for you",
        heroDescription: "We build e-commerce automation that handles order status updates, abandoned cart recovery, and common customer support questions — freeing your team to focus on what actually needs a human.",
        introTitle: "Most e-commerce support volume is repetitive and automatable",
        introParagraphs: [
          "\"Where's my order?\" and abandoned cart follow-up make up a large share of e-commerce support and lost revenue — and both are highly automatable when done well. E-Commerce Automation handles this volume automatically, with a human only involved for genuine exceptions.",
          "We connect directly to your store platform and order data, so automated messages are always accurate and current, not based on stale information."
        ],
        whatWeBuild: [
          { title: "Order Status Automation", desc: "Automatic updates sent via email, SMS, or WhatsApp as an order progresses." },
          { title: "Abandoned Cart Recovery", desc: "Automated, timed follow-up sequences that recover otherwise lost sales." },
          { title: "Automated Support Responses", desc: "Instant answers to common order, shipping, and return questions." },
          { title: "Post-Purchase Engagement", desc: "Automated review requests and cross-sell messaging after delivery." }
        ],
        capabilities: [
          { title: "Store Platform Integration", desc: "Direct integration with Shopify, WooCommerce, or your existing store platform." },
          { title: "Multi-Channel Notifications", desc: "Automated messaging across email, SMS, and WhatsApp based on customer preference." },
          { title: "Cart Recovery Sequencing", desc: "Timed, tested message sequences designed to maximize recovered revenue." },
          { title: "Order-Aware Support Bot", desc: "Support automation with live access to real order and shipping status data." },
          { title: "Returns & Refund Automation", desc: "Automated handling of routine return and refund request workflows." },
          { title: "Performance Reporting", desc: "Dashboards tracking recovered revenue and automated resolution rates." }
        ],
        useCases: [
          { title: "Abandoned Cart Recovery Campaign", desc: "Automated multi-step messaging recovering a meaningful share of abandoned carts." },
          { title: "Order Tracking Automation", desc: "Customers get real-time order and shipping updates without contacting support." },
          { title: "Automated Returns Handling", desc: "Routine return requests processed automatically within defined policy rules." },
          { title: "Post-Purchase Review Requests", desc: "Automated, well-timed requests for reviews after a successful delivery." }
        ],
        process: [
          { title: "Store & Support Audit", desc: "We review your store platform, order data, and current support ticket patterns." },
          { title: "Automation Flow Design", desc: "We design the notification, recovery, and support flows specific to your store." },
          { title: "Integration & Build", desc: "Automation built directly against your store's live order and customer data." },
          { title: "Launch & Revenue Tracking", desc: "Go-live with tracking on recovered revenue and support deflection rates." }
        ],
        technology: ["Shopify", "WooCommerce", "Klaviyo", "WhatsApp Business API", "n8n", "Zendesk"],
        whySanestix: [
          { title: "Connected To Real Order Data", desc: "Automated messages always reflect current, accurate order and shipping status." },
          { title: "Revenue-Focused", desc: "Cart recovery flows are designed and measured against actual recovered revenue." },
          { title: "Reduces Repetitive Support Load", desc: "Frees your support team to focus on the exceptions that genuinely need a human." }
        ],
        faq: [
          { q: "Which e-commerce platforms do you integrate with?", a: "Shopify and WooCommerce are our most common integrations, and we can work with other platforms with an accessible API — we'll confirm feasibility during the audit." },
          { q: "How much revenue can abandoned cart automation realistically recover?", a: "Results vary by store and audience, but well-designed cart recovery sequences typically recover a meaningful share of otherwise-lost carts — we'll track this explicitly after launch." },
          { q: "Can this handle refund requests automatically?", a: "Yes, for requests that fit clearly within your defined return policy — anything outside that scope is routed to your team." },
          { q: "Will customers still be able to reach a real person?", a: "Yes, automation is designed to handle the repetitive volume while escalating anything that needs a human, so customers are never stuck without an option to reach your team." }
        ]
      },
      {
        slug: "lead-generation-systems",
        name: "Lead Generation Systems",
        shortDesc: "Automated systems that capture, qualify, and route leads without manual effort.",
        metaTitle: "Lead Generation Systems — Sanestix",
        metaDescription: "Automated lead generation systems that capture, qualify, and route leads from every channel — built and integrated by Sanestix.",
        heroKicker: "Automation Solutions / Lead Generation Systems",
        heroHeadline: "Lead capture and qualification that runs itself",
        heroDescription: "We build automated lead generation systems that capture inquiries across channels, qualify them against your criteria, and route the hottest leads straight to your sales team.",
        introTitle: "More leads only helps if they're qualified and routed fast",
        introParagraphs: [
          "Generating more leads is only half the problem — without automated qualification and routing, sales teams waste time chasing unqualified inquiries while hot leads go cold waiting for a response. Lead Generation Systems solve both sides at once.",
          "We design the capture points, qualification logic, and routing rules together as one system, so every lead is scored and delivered to the right person the moment it's ready."
        ],
        whatWeBuild: [
          { title: "Multi-Channel Capture Forms", desc: "Lead capture points across your website, landing pages, and social channels." },
          { title: "Automated Qualification Logic", desc: "Scoring and qualification rules based on your specific sales criteria." },
          { title: "Lead Routing Automation", desc: "Automatic assignment of qualified leads to the right sales rep or team." },
          { title: "Nurture Sequence Automation", desc: "Automated follow-up for leads that aren't yet sales-ready." }
        ],
        capabilities: [
          { title: "Cross-Channel Lead Capture", desc: "Consistent capture and qualification whether a lead comes from web, chat, or social." },
          { title: "Custom Scoring Models", desc: "Lead scoring rules built around the criteria that actually predict conversion for you." },
          { title: "Real-Time Routing", desc: "Qualified leads routed to the right rep instantly, not batched for later review." },
          { title: "Nurture Automation", desc: "Automated, timed nurture sequences for leads still earlier in the funnel." },
          { title: "CRM & Sales Tool Integration", desc: "Full integration with your CRM so qualification and routing happen in one system." },
          { title: "Conversion Reporting", desc: "Reporting on lead quality and conversion rate by source and channel." }
        ],
        useCases: [
          { title: "B2B Sales Lead Routing", desc: "Inbound B2B leads automatically qualified and routed to the right account executive." },
          { title: "Real Estate Buyer Qualification", desc: "Automated qualification of property inquiries before agent follow-up." },
          { title: "Service Business Booking Funnel", desc: "A funnel that qualifies and routes service inquiries straight to available staff." },
          { title: "Multi-Channel Campaign Capture", desc: "Consistent lead capture and qualification across every active marketing campaign." }
        ],
        process: [
          { title: "Qualification Criteria Definition", desc: "We define exactly what makes a lead sales-ready for your specific business." },
          { title: "Capture & Routing Design", desc: "We design capture points and routing logic across every relevant channel." },
          { title: "Build & CRM Integration", desc: "The system is built and integrated directly with your CRM and sales tools." },
          { title: "Launch & Conversion Monitoring", desc: "Go-live with tracking on lead quality and conversion rate improvements." }
        ],
        technology: ["HubSpot", "n8n", "Zapier", "Typeform", "Meta Ads", "Google Ads", "REST APIs"],
        whySanestix: [
          { title: "Qualification Built On Your Criteria", desc: "Scoring rules reflect what actually predicts a good customer for your business." },
          { title: "Instant Routing", desc: "Hot leads reach the right rep immediately, not after a delay that lets them cool off." },
          { title: "Full-Funnel Design", desc: "Capture, qualification, and nurture are designed together as one connected system." }
        ],
        faq: [
          { q: "How do you decide what makes a lead 'qualified'?", a: "We work with your sales team to define scoring criteria based on what's historically predicted a good customer, then encode that into the automated qualification logic." },
          { q: "Can this route leads to specific reps automatically?", a: "Yes, automated routing based on territory, product interest, or rep availability is a standard part of this service." },
          { q: "What happens to leads that aren't sales-ready yet?", a: "They enter an automated nurture sequence designed to keep them engaged until they meet your qualification criteria." },
          { q: "Can this work across multiple marketing campaigns at once?", a: "Yes, the system is designed to capture and qualify leads consistently regardless of which campaign or channel they originated from." }
        ]
      },
      {
        slug: "custom-workflows",
        name: "Custom Workflows",
        shortDesc: "Bespoke automation connecting your specific tools, teams, and business logic.",
        metaTitle: "Custom Workflow Automation Services — Sanestix",
        metaDescription: "Bespoke workflow automation connecting your specific tools and business logic — built and maintained by Sanestix.",
        heroKicker: "Automation Solutions / Custom Workflows",
        heroHeadline: "Automation built around the specific way your business actually runs",
        heroDescription: "When off-the-shelf automation templates don't fit, we build custom workflows connecting your specific tools, teams, and business logic into one reliable, automated process.",
        introTitle: "Not every process fits a pre-built automation template",
        introParagraphs: [
          "Most automation platforms offer templates for common use cases — but every business eventually has a process that's genuinely specific to how it operates, involving several tools and conditional logic no template anticipates. Custom Workflows are built for exactly that.",
          "We design and build the automation from your actual process map, connecting whichever tools are involved — CRM, spreadsheets, internal systems, communication platforms — into one dependable, maintainable workflow."
        ],
        whatWeBuild: [
          { title: "Multi-System Workflow Automation", desc: "Automation connecting several disconnected tools into a single reliable process." },
          { title: "Conditional Business Logic", desc: "Automation encoding your specific approval rules, exceptions, and edge cases." },
          { title: "Internal Notification Systems", desc: "Automated alerts and notifications triggered by specific business events." },
          { title: "Data Sync Automation", desc: "Keeping data consistent automatically across multiple systems your team uses." }
        ],
        capabilities: [
          { title: "Process Mapping", desc: "Careful mapping of your actual process, including exceptions and edge cases." },
          { title: "Multi-Tool Integration", desc: "Connecting CRMs, spreadsheets, internal tools, and communication platforms." },
          { title: "Conditional Logic Design", desc: "Automation that correctly handles the real branching logic of your process." },
          { title: "Error Handling & Alerts", desc: "Built-in error handling so failures are caught and flagged, not silently lost." },
          { title: "Maintainable Automation", desc: "Clear documentation so your team can understand and adjust the workflow later." },
          { title: "Scalable Automation Architecture", desc: "Workflows designed to handle growing volume without breaking down." }
        ],
        useCases: [
          { title: "Multi-Department Approval Workflow", desc: "Automated routing and tracking of approvals across multiple departments." },
          { title: "Cross-Tool Data Synchronization", desc: "Keeping customer or operational data consistent across several disconnected tools." },
          { title: "Custom Alerting System", desc: "Automated internal alerts triggered by specific operational thresholds or events." },
          { title: "Vendor & Partner Workflow", desc: "Automation connecting your systems with external vendor or partner processes." }
        ],
        process: [
          { title: "Process Mapping & Discovery", desc: "We map your current process in detail, including every tool and exception involved." },
          { title: "Workflow Design", desc: "We design the automation logic, integration points, and error handling upfront." },
          { title: "Build & Testing", desc: "The workflow is built and tested against real scenarios, including edge cases." },
          { title: "Launch & Documentation", desc: "Go-live with clear documentation so your team can maintain the workflow long-term." }
        ],
        technology: ["n8n", "Zapier", "Make", "REST APIs", "Google Workspace", "Airtable", "Node.js"],
        whySanestix: [
          { title: "Built Around Your Actual Process", desc: "No forcing your business logic into a generic automation template." },
          { title: "Handles Real Edge Cases", desc: "We map and design for exceptions, not just the happy path." },
          { title: "Documented and Maintainable", desc: "Clear documentation so the workflow doesn't become a black box your team can't touch." }
        ],
        faq: [
          { q: "What if our process doesn't fit a standard automation template?", a: "That's exactly what custom workflows are for — we map your actual process, including exceptions, and build automation specific to it rather than forcing a generic template." },
          { q: "How many different tools can be connected in one workflow?", a: "As many as your process genuinely requires — we've connected CRMs, spreadsheets, internal tools, and communication platforms within a single automated workflow." },
          { q: "What happens if something in the workflow fails?", a: "We build in error handling and alerts so failures are caught and flagged to your team immediately, rather than silently breaking the process." },
          { q: "Can our team make changes to the workflow later without you?", a: "We provide clear documentation and, where practical, build using tools your team can learn to adjust — though we're also available for ongoing support and changes." }
        ]
      }
    ]
  }
];

// ---- Build fast lookup maps (used by the group/category page templates) ----
const groupsBySlug = {};
const categoriesBySlug = {};

groups.forEach((group) => {
  groupsBySlug[group.slug] = group;
  group.categories.forEach((category) => {
    categoriesBySlug[category.slug] = Object.assign({}, category, {
      groupSlug: group.slug,
      groupName: group.name,
      groupImageDir: group.imageDir
    });
  });
});

module.exports = {
  groups,
  groupsBySlug,
  categoriesBySlug
};
