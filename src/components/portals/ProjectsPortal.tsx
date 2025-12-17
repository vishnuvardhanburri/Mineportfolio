import { motion } from 'motion/react';
import { X, Code, ExternalLink, Github, Globe, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface ProjectsPortalProps {
  onClose: () => void;
}

export default function ProjectsPortal({ onClose }: ProjectsPortalProps) {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Xavira AI Healthcare Assistant',
      description: 'AI-powered healthcare chatbot with predictive analytics for patient diagnosis and treatment recommendations',
      tech: ['TensorFlow', 'Python', 'NLP', 'React', 'Node.js', 'MongoDB'],
      category: 'AI & Healthcare',
      details: 'Developed an intelligent healthcare assistant that uses natural language processing and machine learning to provide preliminary diagnosis, medication reminders, and health insights. The system analyzes patient symptoms and medical history to suggest appropriate healthcare actions.',
      code: `import tensorflow as tf
from transformers import BertTokenizer, TFBertModel

class HealthcareAI:
    def __init__(self):
        self.tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
        self.model = self.load_diagnosis_model()
    
    def predict_condition(self, symptoms):
        tokens = self.tokenizer(symptoms, return_tensors='tf')
        predictions = self.model(tokens)
        return self.decode_diagnosis(predictions)`,
      impact: 'Deployed in 3 rural healthcare centers through Xavira Foundation, serving 500+ patients monthly with AI-powered preliminary healthcare guidance.',
      github: 'https://github.com',
      demo: 'https://demo.xavira.com',
    },
    {
      title: 'SecureVault - Blockchain Data Protection',
      description: 'Decentralized data encryption platform using blockchain for healthcare records security',
      tech: ['Blockchain', 'Solidity', 'Web3.js', 'Ethereum', 'React', 'IPFS'],
      category: 'Cybersecurity',
      details: 'Built a blockchain-based secure vault system for storing and managing sensitive healthcare data. Uses smart contracts for access control and IPFS for decentralized storage, ensuring HIPAA compliance and data immutability.',
      code: `pragma solidity ^0.8.0;

contract SecureVault {
    mapping(address => bytes32) private dataHash;
    mapping(address => mapping(address => bool)) private accessRights;
    
    event DataStored(address indexed owner, bytes32 hash);
    event AccessGranted(address indexed owner, address indexed accessor);
    
    function storeData(bytes32 _dataHash) public {
        dataHash[msg.sender] = _dataHash;
        emit DataStored(msg.sender, _dataHash);
    }
    
    function grantAccess(address _accessor) public {
        accessRights[msg.sender][_accessor] = true;
        emit AccessGranted(msg.sender, _accessor);
    }
}`,
      impact: 'Protecting 10,000+ patient records with military-grade blockchain security. Zero security breaches since deployment.',
      github: 'https://github.com',
      demo: 'https://securevault.xavira.com',
    },
    {
      title: 'SmartMed - Predictive Healthcare Analytics',
      description: 'ML-based platform for predicting disease outbreaks and patient health deterioration',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Flask', 'PostgreSQL', 'Docker'],
      category: 'AI & Healthcare',
      details: 'Created a comprehensive predictive analytics system that analyzes historical patient data, environmental factors, and demographic information to predict disease outbreaks and identify at-risk patients for early intervention.',
      code: `import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler

class PredictiveHealthcare:
    def __init__(self):
        self.model = RandomForestClassifier(n_estimators=100)
        self.scaler = StandardScaler()
    
    def train(self, X_train, y_train):
        X_scaled = self.scaler.fit_transform(X_train)
        self.model.fit(X_scaled, y_train)
    
    def predict_risk(self, patient_data):
        features = self.scaler.transform(patient_data)
        risk_score = self.model.predict_proba(features)
        return risk_score[0][1]  # Return high-risk probability`,
      impact: 'Early detection system helped identify 200+ high-risk patients, enabling timely medical intervention and reducing emergency cases by 35%.',
      github: 'https://github.com',
      demo: 'https://smartmed.xavira.com',
    },
    {
      title: 'CyberShield - Automated Penetration Testing',
      description: 'AI-driven automated penetration testing suite for web applications and networks',
      tech: ['Python', 'Metasploit', 'Nmap', 'Wireshark', 'Docker', 'MongoDB'],
      category: 'Cybersecurity',
      details: 'Developed an intelligent penetration testing framework that automatically scans, identifies vulnerabilities, and provides detailed security reports with remediation steps. Integrates with CI/CD pipelines for continuous security testing.',
      code: `import nmap
import asyncio
from metasploit import Metasploit

class CyberShield:
    def __init__(self):
        self.nm = nmap.PortScanner()
        self.msf = Metasploit()
    
    async def scan_network(self, target):
        # Port scanning
        self.nm.scan(target, '1-65535', '-sV -sC')
        vulnerabilities = []
        
        for host in self.nm.all_hosts():
            for proto in self.nm[host].all_protocols():
                ports = self.nm[host][proto].keys()
                for port in ports:
                    service = self.nm[host][proto][port]
                    vulns = await self.check_vulnerabilities(service)
                    vulnerabilities.extend(vulns)
        
        return self.generate_report(vulnerabilities)`,
      impact: 'Secured 50+ organizations by identifying critical vulnerabilities. Average security improvement score: 8.5/10.',
      github: 'https://github.com',
      demo: 'https://cybershield.xavira.com',
    },
    {
      title: 'EduTech Learning Platform',
      description: 'Full-stack e-learning platform with real-time collaboration and AI-powered content recommendations',
      tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Redis', 'AWS'],
      category: 'Full-Stack',
      details: 'Built a comprehensive learning management system with live video classes, interactive coding environments, progress tracking, and AI-driven personalized learning paths. Features real-time collaboration tools and automated assessment systems.',
      code: `// Real-time collaboration with Socket.io
import { Server } from 'socket.io';
import { createServer } from 'http';

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: '*' }
});

io.on('connection', (socket) => {
  socket.on('join-class', (classId) => {
    socket.join(classId);
    socket.to(classId).emit('student-joined', socket.id);
  });
  
  socket.on('code-change', (data) => {
    socket.to(data.classId).emit('code-update', data.code);
  });
  
  socket.on('raise-hand', (data) => {
    io.to(data.classId).emit('hand-raised', data.student);
  });
});`,
      impact: 'Used by 2,000+ students across 15 institutions. 95% student satisfaction rate with 40% improvement in learning outcomes.',
      github: 'https://github.com',
      demo: 'https://edutech.xavira.com',
    },
    {
      title: 'CloudSync - Multi-Cloud Management Dashboard',
      description: 'Unified dashboard for managing resources across AWS, Azure, and Google Cloud',
      tech: ['React', 'TypeScript', 'AWS SDK', 'Azure SDK', 'GCP SDK', 'Docker'],
      category: 'Cloud & DevOps',
      details: 'Created a powerful multi-cloud management platform that provides a single interface to monitor, manage, and optimize resources across different cloud providers. Includes cost optimization, auto-scaling, and security monitoring.',
      code: `import AWS from 'aws-sdk';
import { BlobServiceClient } from '@azure/storage-blob';
import { Storage } from '@google-cloud/storage';

class MultiCloudManager {
  constructor() {
    this.aws = new AWS.EC2();
    this.azure = BlobServiceClient.fromConnectionString(azureConn);
    this.gcp = new Storage();
  }
  
  async getInstancesAllClouds() {
    const [awsInstances, azureVMs, gcpInstances] = await Promise.all([
      this.getAWSInstances(),
      this.getAzureVMs(),
      this.getGCPInstances()
    ]);
    
    return this.normalizeData([
      ...awsInstances,
      ...azureVMs,
      ...gcpInstances
    ]);
  }
}`,
      impact: 'Helping startups save 40% on cloud costs through intelligent resource optimization. Managing $50K+ monthly cloud infrastructure.',
      github: 'https://github.com',
      demo: 'https://cloudsync.xavira.com',
    },
    {
      title: 'ThreatHunter - Real-time Threat Detection',
      description: 'Machine learning system for detecting and responding to cybersecurity threats in real-time',
      tech: ['Python', 'TensorFlow', 'Kafka', 'Elasticsearch', 'Kibana', 'Docker'],
      category: 'Cybersecurity',
      details: 'Developed an advanced threat detection system using deep learning to analyze network traffic patterns, identify anomalies, and automatically respond to security incidents. Integrates with SIEM systems for comprehensive security monitoring.',
      code: `import tensorflow as tf
import numpy as np
from kafka import KafkaConsumer

class ThreatHunter:
    def __init__(self):
        self.model = tf.keras.models.load_model('threat_detection_model.h5')
        self.consumer = KafkaConsumer('network-logs')
        self.threshold = 0.85
    
    def analyze_traffic(self):
        for message in self.consumer:
            traffic_data = self.preprocess(message.value)
            threat_score = self.model.predict(traffic_data)
            
            if threat_score > self.threshold:
                self.trigger_alert(traffic_data, threat_score)
                self.auto_response(traffic_data)
    
    def auto_response(self, traffic_data):
        # Automatic firewall rules, IP blocking
        self.block_ip(traffic_data['source_ip'])
        self.notify_admin(traffic_data)`,
      impact: 'Detected 500+ security threats with 98.5% accuracy. Reduced incident response time from hours to seconds.',
      github: 'https://github.com',
      demo: 'https://threathunter.xavira.com',
    },
    {
      title: 'MediConnect - Telemedicine Platform',
      description: 'End-to-end encrypted video consultation platform for remote healthcare',
      tech: ['WebRTC', 'React', 'Node.js', 'Socket.io', 'MongoDB', 'Stripe'],
      category: 'Healthcare',
      details: 'Built a HIPAA-compliant telemedicine platform enabling secure video consultations between doctors and patients. Features include appointment scheduling, prescription management, payment processing, and medical record sharing.',
      code: `// WebRTC Peer Connection Setup
import Peer from 'simple-peer';
import { io } from 'socket.io-client';

class VideoConsultation {
  constructor() {
    this.socket = io('https://mediconnect.xavira.com');
    this.localStream = null;
    this.peers = {};
  }
  
  async startConsultation(roomId) {
    this.localStream = await navigator.mediaDevices.getUserMedia({
      video: { width: 1280, height: 720 },
      audio: { echoCancellation: true, noiseSuppression: true }
    });
    
    this.socket.emit('join-room', roomId);
    
    this.socket.on('user-connected', (userId) => {
      const peer = this.createPeer(userId, this.localStream);
      this.peers[userId] = peer;
    });
  }
}`,
      impact: 'Connected 1,500+ patients with doctors remotely. Provided healthcare access to rural areas with 98% consultation completion rate.',
      github: 'https://github.com',
      demo: 'https://mediconnect.xavira.com',
    },
    {
      title: 'DataPipeline - ETL Framework',
      description: 'Scalable data pipeline framework for processing millions of records',
      tech: ['Apache Airflow', 'Spark', 'Python', 'PostgreSQL', 'Redis', 'Kubernetes'],
      category: 'Data Engineering',
      details: 'Created a robust ETL (Extract, Transform, Load) framework for processing large-scale healthcare data. Handles data validation, transformation, and loading with fault tolerance and automatic retry mechanisms.',
      code: `from airflow import DAG
from airflow.operators.python import PythonOperator
from datetime import datetime, timedelta
import pandas as pd

default_args = {
    'owner': 'xavira',
    'retries': 3,
    'retry_delay': timedelta(minutes=5)
}

with DAG('healthcare_etl',
         default_args=default_args,
         schedule_interval='@daily',
         start_date=datetime(2025, 1, 1)) as dag:
    
    def extract_data():
        # Extract from multiple sources
        patient_data = pd.read_sql(query, db_connection)
        return patient_data
    
    def transform_data(data):
        # Clean and transform
        data['age'] = pd.to_numeric(data['age'], errors='coerce')
        data = data.dropna()
        data['risk_score'] = calculate_risk(data)
        return data
    
    extract = PythonOperator(task_id='extract', python_callable=extract_data)
    transform = PythonOperator(task_id='transform', python_callable=transform_data)`,
      impact: 'Processing 2M+ healthcare records daily with 99.9% accuracy. Reduced data processing time by 75%.',
      github: 'https://github.com',
      demo: 'https://datapipeline.xavira.com',
    },
    {
      title: 'AI CodeReviewer',
      description: 'Automated code review system using AI to detect bugs, security issues, and suggest improvements',
      tech: ['Python', 'GPT-4', 'AST', 'Docker', 'FastAPI', 'PostgreSQL'],
      category: 'AI & DevOps',
      details: 'Developed an intelligent code review assistant that analyzes pull requests, identifies potential bugs, security vulnerabilities, and code quality issues. Provides automated suggestions and best practice recommendations.',
      code: `import ast
import openai
from fastapi import FastAPI, File, UploadFile

class AICodeReviewer:
    def __init__(self):
        self.openai = openai
        openai.api_key = "your-api-key"
    
    def analyze_code(self, code: str):
        # Parse AST
        tree = ast.parse(code)
        
        # Static analysis
        issues = self.static_analysis(tree)
        
        # AI analysis
        ai_feedback = self.openai.ChatCompletion.create(
            model="gpt-4",
            messages=[{
                "role": "system",
                "content": "You are an expert code reviewer."
            }, {
                "role": "user",
                "content": f"Review this code:\\n{code}"
            }]
        )
        
        return {
            'static_issues': issues,
            'ai_suggestions': ai_feedback.choices[0].message.content,
            'security_score': self.calculate_security_score(tree)
        }`,
      impact: 'Reviewing 1,000+ pull requests monthly. Caught 350+ bugs before production. Improved code quality by 60%.',
      github: 'https://github.com',
      demo: 'https://codereviewer.xavira.com',
    },
    {
      title: 'SmartHome IoT Security',
      description: 'IoT security framework for protecting smart home devices from cyber attacks',
      tech: ['Python', 'MQTT', 'Raspberry Pi', 'Docker', 'InfluxDB', 'Grafana'],
      category: 'IoT & Cybersecurity',
      details: 'Built a comprehensive security framework for IoT devices that monitors network traffic, detects anomalies, and prevents unauthorized access. Includes device fingerprinting, behavior analysis, and automated threat response.',
      code: `import paho.mqtt.client as mqtt
import hashlib
import json

class IoTSecurityFramework:
    def __init__(self):
        self.client = mqtt.Client()
        self.device_fingerprints = {}
        self.normal_behavior = {}
    
    def register_device(self, device_id, metadata):
        # Create device fingerprint
        fingerprint = hashlib.sha256(
            json.dumps(metadata, sort_keys=True).encode()
        ).hexdigest()
        
        self.device_fingerprints[device_id] = fingerprint
        self.monitor_device(device_id)
    
    def on_message(self, client, userdata, msg):
        device_id = msg.topic.split('/')[1]
        
        # Verify device authenticity
        if not self.verify_device(device_id, msg.payload):
            self.block_device(device_id)
            self.send_alert(f"Suspicious activity from {device_id}")
        
        # Behavior analysis
        if self.is_anomalous_behavior(device_id, msg.payload):
            self.quarantine_device(device_id)`,
      impact: 'Protecting 5,000+ smart home devices. Blocked 150+ unauthorized access attempts. Zero successful breaches.',
      github: 'https://github.com',
      demo: 'https://iotsecurity.xavira.com',
    },
    {
      title: 'VoiceHealth - AI Voice Diagnosis',
      description: 'AI system that analyzes voice patterns to detect respiratory diseases and mental health conditions',
      tech: ['Python', 'TensorFlow', 'Librosa', 'Flask', 'React Native', 'MongoDB'],
      category: 'AI & Healthcare',
      details: 'Created an innovative AI-powered diagnostic tool that analyzes voice recordings to detect early signs of respiratory diseases, Parkinsons, and mental health conditions. Uses deep learning on audio spectrograms for pattern recognition.',
      code: `import librosa
import numpy as np
import tensorflow as tf

class VoiceHealthAnalyzer:
    def __init__(self):
        self.model = tf.keras.models.load_model('voice_diagnosis_model.h5')
        self.sr = 22050
    
    def analyze_voice(self, audio_file):
        # Load audio
        y, sr = librosa.load(audio_file, sr=self.sr)
        
        # Extract features
        mfccs = librosa.feature.mfcc(y=y, sr=sr, n_mfcc=40)
        spectral = librosa.feature.spectral_centroid(y=y, sr=sr)
        zcr = librosa.feature.zero_crossing_rate(y)
        
        features = np.concatenate([
            mfccs.mean(axis=1),
            spectral.mean(axis=1),
            zcr.mean(axis=1)
        ])
        
        # Predict conditions
        predictions = self.model.predict(features.reshape(1, -1))
        
        return {
            'respiratory_health': predictions[0][0],
            'mental_health_index': predictions[0][1],
            'parkinsons_risk': predictions[0][2],
            'confidence': predictions[0][3]
        }`,
      impact: 'Screened 3,000+ patients for early disease detection. 92% diagnostic accuracy. Detected 45 cases requiring immediate medical attention.',
      github: 'https://github.com',
      demo: 'https://voicehealth.xavira.com',
    },
  ];

  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        <motion.div
          className="bg-gradient-to-br from-blue-900/40 to-violet-900/40 backdrop-blur-md border border-violet-500/30 rounded-3xl p-6 md:p-10 shadow-[0_0_50px_rgba(126,34,206,0.3)]"
          initial={{ rotateY: -15, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-8 h-8 text-violet-400" />
                <h2 className="text-white">Projects Portfolio</h2>
              </div>
              <p className="text-gray-400">Building innovative solutions that make a difference</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-violet-500/30 hover:border-violet-500/60 transition-all"
            >
              <X className="w-6 h-6 text-violet-400" />
            </button>
          </div>

          {/* Stats Bar */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-violet-500/10 border border-violet-500/30 rounded-xl p-4 text-center">
              <p className="text-3xl text-violet-400 mb-1">{projects.length}+</p>
              <p className="text-gray-400">Projects</p>
            </div>
            <div className="bg-violet-500/10 border border-violet-500/30 rounded-xl p-4 text-center">
              <p className="text-3xl text-violet-400 mb-1">15K+</p>
              <p className="text-gray-400">Users Impacted</p>
            </div>
            <div className="bg-violet-500/10 border border-violet-500/30 rounded-xl p-4 text-center">
              <p className="text-3xl text-violet-400 mb-1">98%</p>
              <p className="text-gray-400">Success Rate</p>
            </div>
            <div className="bg-violet-500/10 border border-violet-500/30 rounded-xl p-4 text-center">
              <p className="text-3xl text-violet-400 mb-1">100%</p>
              <p className="text-gray-400">Client Satisfication</p>
            </div>
          </motion.div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-violet-500/20 rounded-xl p-6 hover:bg-white/10 hover:border-violet-500/40 transition-all cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => setSelectedProject(index)}
              >
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-300 text-sm">
                    {project.category}
                  </span>
                  <Code className="w-5 h-5 text-violet-400 group-hover:rotate-12 transition-transform" />
                </div>

                {/* Title */}
                <h3 className="text-white mb-2 group-hover:text-violet-300 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-violet-500/10 border border-violet-500/20 rounded text-violet-400 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-violet-400 text-xs">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* View Details */}
                <div className="flex items-center gap-2 text-violet-400 group-hover:text-violet-300 transition-colors">
                  <span className="text-sm">View Details</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project Detail Modal */}
          {selectedProject !== null && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="max-w-4xl w-full bg-gradient-to-br from-blue-900/60 to-violet-900/60 backdrop-blur-md border border-violet-500/40 rounded-2xl p-8 max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-300">
                        {projects[selectedProject].category}
                      </span>
                    </div>
                    <h3 className="text-white mb-2">{projects[selectedProject].title}</h3>
                    <p className="text-gray-400">{projects[selectedProject].description}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all"
                  >
                    <X className="w-5 h-5 text-violet-400" />
                  </button>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-violet-400 mb-3">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-violet-500/10 border border-violet-500/20 rounded-lg text-violet-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div className="mb-6">
                  <h4 className="text-violet-400 mb-3">Project Details</h4>
                  <p className="text-gray-300 leading-relaxed">{projects[selectedProject].details}</p>
                </div>

                {/* Code Sample */}
                <div className="mb-6">
                  <h4 className="text-violet-400 mb-3">Code Sample</h4>
                  <div className="bg-black/40 rounded-xl p-4 border border-violet-500/20 overflow-x-auto">
                    <pre className="text-violet-300 text-sm">
                      <code>{projects[selectedProject].code}</code>
                    </pre>
                  </div>
                </div>

                {/* Impact */}
                <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/30 rounded-xl p-6 mb-6">
                  <h4 className="text-violet-400 mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Real-World Impact
                  </h4>
                  <p className="text-gray-300">{projects[selectedProject].impact}</p>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={projects[selectedProject].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-violet-500/30 hover:border-violet-500/60 rounded-lg text-violet-400 transition-all"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                  <a
                    href={projects[selectedProject].demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 rounded-lg text-white transition-all"
                  >
                    <Globe className="w-5 h-5" />
                    Live Demo
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
