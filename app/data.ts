import { Cpu, Brain, Database, Code, Wrench } from "lucide-react";

export const personalInfo = {
  name: "Pavan Kumar S",
  title: "Robotics & AI Engineer",
  location: "Bengaluru, Karnataka",
  email: "pavan102cs2020@gmail.com",
  linkedin: "https://linkedin.com/in/pavan-kumar-s-546495259",
  github: "https://github.com/AutonomousAlchemist",
  phone: "+918861779133",
  about: "Results-driven Robotics & AI (RAI) student specializing in the development of autonomous agents and intelligent monitoring systems. Expert at leveraging Google Gemini and OpenCV APIs to build end-to-end solutions that translate raw sensor data into actionable insights. Proficient in Python-based system design, real-time data handling, and optimizing hardware performance for AI-driven assistive and safety technologies."
};

export const skills = [
  { 
    name: "Robotics & Control", 
    items: ["ROS (Jazzy)", "URDF", "State Machine Logic", "SLAM (Conceptual)", "Microcontrollers"], 
    icon: Cpu 
  },
  { 
    name: "Agentic AI & ML", 
    items: ["LLM Orchestration (Gemini API)", "Multi-modal Agents", "Computer Vision (OpenCV, MediaPipe)", "Scikit-learn", "Pose Estimation"], 
    icon: Brain 
  },
  { 
    name: "Data Engineering", 
    items: ["Data Pipeline Design (Conceptual)", "BLE Data Ingestion", "SQLite", "SQL", "Pandas", "NumPy"], 
    icon: Database 
  },
  { 
    name: "Languages & Frameworks", 
    items: ["Python (Advanced)", "Java", "Flask", "Streamlit"], 
    icon: Code 
  },
  {
    name: "Hardware & Tools",
    items: ["Raspberry Pi 4B", "Linux (Ubuntu)", "Git", "VS Code", "ALSA Audio Drivers"],
    icon: Wrench
  }
];

export const projects = [
  {
    title: "AI-Driven Elderly Care Robot",
    tech: ["Python", "Gemini API", "Twilio", "Flask", "ROS", "Computer Vision"],
    sections: [
      {
        subtitle: "Architecture (Agentic AI)",
        description: "Engineered a custom, modular Python architecture utilizing a sophisticated state-machine to orchestrate reasoning, perception, and autonomous action execution for fall detection."
      },
      {
        subtitle: "Logic & Intervention",
        description: "Integrated the Gemini API as a reasoning engine to analyze real-time video telemetry; developed an autonomous alert pipeline via Twilio API and gTTS to perform emergency interventions without human oversight."
      },
      {
        subtitle: "Data Streaming",
        description: "Architected a custom Flask-based MJPEG framework to bridge hardware-level processing with remote web dashboards, ensuring <200ms latency for real-time safety monitoring in headless environments."
      }
    ]
  },
  {
    title: "End-to-End Biometric Data Pipeline",
    tech: ["Python", "BLE", "SQLite", "Streamlit"],
    sections: [
      {
        subtitle: "Data Engineering",
        description: "Developed a high-throughput ETL pipeline to ingest and parse 8-bit/16-bit biometric packets from BLE wearables into an optimized SQLite database for longitudinal health analysis."
      },
      {
        subtitle: "Visualization & Feedback",
        description: "Designed a real-time Streamlit HMI and integrated Gemini-driven AI analysis to convert raw sensor telemetry into proactive, voice-optimized health feedback for user safety."
      }
    ]
  },
  {
    title: "Portable AI-Powered Assistive Agent",
    tech: ["Python", "Gemini API", "IoT"],
    sections: [
      {
        subtitle: "Edge Processing",
        description: "Implemented local wake-word detection to reduce 'always-on' cloud latency and ensure user privacy by processing sensitive voice data on-device before LLM transmission."
      },
      {
        subtitle: "NLU Optimization",
        description: "Refined Natural Language Understanding (NLU) by engineering custom prompt templates for the Gemini API, enabling the agent to handle ambiguous commands like 'make it cozy' to trigger specific lighting and temperature presets."
      },
      {
        subtitle: "Error Handling",
        description: "Developed a robust fallback mechanism that utilizes offline rule-based logic when internet connectivity is lost, maintaining basic home-appliance control via local Bluetooth/GPIO protocols."
      }
    ]
  },
  {
    title: "ML Data Optimization (Internship-Ants AI)",
    tech: ["Python", "Scikit-learn"],
    sections: [
      {
        subtitle: "Statistical Data Validation",
        description: "Developed rigorous data-cleaning protocols to handle class imbalance and outliers in medical datasets, utilizing techniques such as SMOTE (Synthetic Minority Over-sampling Technique) and Z-score normalization to ensure model generalization across diverse patient demographics."
      },
      {
        subtitle: "System Testing & QA",
        description: "Implemented unit testing and automated validation scripts for Python-based processing modules, ensuring 100% code reliability and data consistency during the transition from experimental notebooks to production-ready scripts."
      }
    ]
  }
];

export const stats = [
  { label: "Projects Completed", value: "5+", icon: "🤖" },
  { label: "Technologies Mastered", value: "20+", icon: "⚙️" },
  { label: "Years of Experience", value: "3+", icon: "📚" },
  { label: "API Integrations", value: "5+", icon: "🔌" }
];

export const experience = [
  {
    company: "Ants AI",
    role: "Intern",
    location: "Bengaluru, KA",
    url: "https://antsai.in/",
    date: "Summer 2023",
    achievements: [
      "Optimized data preprocessing workflows for medical datasets, improving model detection accuracy by 15%.",
      "Programmed Python-based algorithms for real-time data processing and delivered analytical reports to stakeholders."
    ]
  }
];

export const education = [
  {
    institution: "Bangalore Institute of Technology",
    degree: "Bachelor of Engineering (RAI)",
    date: "2023-2025",
    url: "https://bit-bangalore.edu.in/"
  },
  {
    institution: "SJ Govt Polytechnic",
    degree: "Diploma (CSE)",
    date: "2020-2023",
    url: "https://sjpolytechnic.karnataka.gov.in/en"
  },
  {
    institution: "KVVP High School",
    degree: "High School",
    date: "2016-2020",
    url: "https://share.google/ZxKwvV3IacYpGjlH1"
  }
];

export const certifications = [
  {
    name: "Introduction to Data Science",
    issuer: "Infosys Springboard",
    year: "2022",
    url: "https://drive.google.com/file/d/1OgKLrzfkleGaFrPWohDDp4DLI1M7NUWr/view?usp=sharing"
  },
  {
    name: "Pandas & NumPy Tips, Tricks, and Techniques",
    issuer: "Infosys Springboard",
    year: "2022",
    url: "https://drive.google.com/file/d/1EsnAeXaJRMoBDtK9jKNtUCSWI9KDgEdC/view?usp=sharing"
  },
  {
    name: "Developing Cloud Apps with Node.js & React",
    issuer: "Coursera",
    year: "2023",
    url: "https://drive.google.com/file/d/1qb75nWsAPNXoVdBr7Il1aphx1LOMei2M/view?usp=sharing"
  },
  {
    name: "HTML, CSS, and JavaScript for Web Developers",
    issuer: "Coursera",
    year: "2023",
    url: "https://drive.google.com/file/d/1yYHBk780CGGk3djufB-nkTi7IVdSsYZ5/view?usp=sharing"
  },
  {
    name: "Artificial Intelligence & Machine Learning Training",
    issuer: "Infosys Springboard",
    year: "2024",
    url: "https://drive.google.com/file/d/1x5i3f47cU5W-woAXgsO0qIoHG7O1dhNU/view?usp=sharing"
  },
  {
    name: "Developing Cloud Apps with Node.js and React",
    issuer: "Coursera",
    year: "2023",
    url: "https://drive.google.com/file/d/1dt7aUV_NqkRRgsLJPeVKq1_AuX51uWSA/view?usp=sharing"
  },
  {
    name: "TATA-Virtual Job Simulation",
    issuer: "Forage",
    year: "2025",
    url: "https://drive.google.com/file/d/1nmEyVGVCodAhR9_sSoG6nkO4ctVSie_0/view?usp=sharing"
  }
];