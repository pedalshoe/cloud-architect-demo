import React, { useState, useEffect } from 'react';
import { Cloud, Database, Server, Shield, Zap, BarChart3, Brain, Users, Settings, Monitor, AlertTriangle, CheckCircle, Activity } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [metrics, setMetrics] = useState({
    uptime: 99.94,
    requests: 2847392,
    latency: 45,
    costs: 12847
  });
  const [aiInsights, setAiInsights] = useState([]);

  // Simulate real-time metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        uptime: Math.max(99.5, prev.uptime + (Math.random() - 0.5) * 0.01),
        requests: prev.requests + Math.floor(Math.random() * 100),
        latency: Math.max(20, prev.latency + (Math.random() - 0.5) * 5),
        costs: prev.costs + Math.random() * 10
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Generate AI insights
  useEffect(() => {
    const insights = [
      { type: 'optimization', message: 'Recommended: Scale down Dev environment during off-hours (Est. savings: $1,200/month)' },
      { type: 'security', message: 'Alert: Unusual API access pattern detected from new geographic region' },
      { type: 'performance', message: 'Performance boost: Consider implementing CDN for static assets (38% faster load times)' },
      { type: 'cost', message: 'Cost optimization: Reserved instances could reduce compute costs by 23%' }
    ];
    setAiInsights(insights);
  }, []);

  const architectureComponents = [
    { name: 'Load Balancer', type: 'gateway', status: 'healthy', connections: 24 },
    { name: 'API Gateway', type: 'api', status: 'healthy', connections: 18 },
    { name: 'Microservices Cluster', type: 'compute', status: 'healthy', connections: 12 },
    { name: 'AI/ML Pipeline', type: 'ai', status: 'processing', connections: 8 },
    { name: 'Primary Database', type: 'database', status: 'healthy', connections: 16 },
    { name: 'Cache Layer', type: 'cache', status: 'healthy', connections: 22 },
    { name: 'Message Queue', type: 'queue', status: 'healthy', connections: 14 },
    { name: 'Analytics Engine', type: 'analytics', status: 'healthy', connections: 6 }
  ];

  const deployments = [
    { env: 'Production', region: 'us-east-1', status: 'active', version: 'v2.4.1', instances: 12 },
    { env: 'Staging', region: 'us-west-2', status: 'active', version: 'v2.5.0-rc1', instances: 4 },
    { env: 'Development', region: 'eu-west-1', status: 'active', version: 'v2.5.0-dev', instances: 2 }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'healthy':
      case 'active':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'processing':
        return <Activity className="w-4 h-4 text-blue-500" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      default:
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
    }
  };

  const getComponentIcon = (type) => {
    const iconMap = {
      gateway: Shield,
      api: Server,
      compute: Cloud,
      ai: Brain,
      database: Database,
      cache: Zap,
      queue: Settings,
      analytics: BarChart3
    };
    const Icon = iconMap[type] || Server;
    return <Icon className="w-6 h-6" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Cloud className="w-8 h-8 text-blue-400" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Enterprise Cloud Architecture Dashboard
            </h1>
          </div>
          <p className="text-gray-300">Real-time monitoring and AI-powered optimization for multi-region cloud infrastructure</p>
          <p className="text-sm text-gray-400 mt-2">Designed by Christopher Logan - Principal Cloud Architect</p>
        </div>

        {/* Navigation */}
        <div className="flex gap-2 mb-6 bg-slate-800/50 rounded-lg p-1 backdrop-blur-sm">
          {[
            { id: 'overview', label: 'System Overview', icon: Monitor },
            { id: 'architecture', label: 'Architecture', icon: Cloud },
            { id: 'deployments', label: 'Deployments', icon: Server },
            { id: 'ai-insights', label: 'AI Insights', icon: Brain }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                activeTab === id 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 rounded-xl p-6 border border-green-500/30">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-green-300 font-medium">System Uptime</h3>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <p className="text-2xl font-bold text-white">{metrics.uptime.toFixed(2)}%</p>
                <p className="text-green-300 text-sm">Last 30 days</p>
              </div>

              <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-xl p-6 border border-blue-500/30">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-blue-300 font-medium">API Requests</h3>
                  <Activity className="w-5 h-5 text-blue-400" />
                </div>
                <p className="text-2xl font-bold text-white">{metrics.requests.toLocaleString()}</p>
                <p className="text-blue-300 text-sm">Today</p>
              </div>

              <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-xl p-6 border border-purple-500/30">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-purple-300 font-medium">Avg Latency</h3>
                  <Zap className="w-5 h-5 text-purple-400" />
                </div>
                <p className="text-2xl font-bold text-white">{Math.round(metrics.latency)}ms</p>
                <p className="text-purple-300 text-sm">Global average</p>
              </div>

              <div className="bg-gradient-to-br from-orange-600/20 to-orange-800/20 rounded-xl p-6 border border-orange-500/30">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-orange-300 font-medium">Monthly Cost</h3>
                  <BarChart3 className="w-5 h-5 text-orange-400" />
                </div>
                <p className="text-2xl font-bold text-white">${Math.round(metrics.costs).toLocaleString()}</p>
                <p className="text-orange-300 text-sm">Current month</p>
              </div>
            </div>

            {/* System Health */}
            <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Monitor className="w-5 h-5 text-blue-400" />
                System Health Overview
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-300">Core Services</h4>
                  {architectureComponents.slice(0, 4).map((component, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        {getComponentIcon(component.type)}
                        <span>{component.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(component.status)}
                        <span className="text-sm text-gray-400">{component.connections} conn</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-300">Data & Analytics</h4>
                  {architectureComponents.slice(4).map((component, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        {getComponentIcon(component.type)}
                        <span>{component.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(component.status)}
                        <span className="text-sm text-gray-400">{component.connections} conn</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'architecture' && (
          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Cloud className="w-5 h-5 text-blue-400" />
                Multi-Tier Cloud Architecture
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Presentation Layer */}
                <div className="space-y-4">
                  <h4 className="font-medium text-blue-300 border-b border-blue-500/30 pb-2">Presentation Layer</h4>
                  <div className="bg-gradient-to-b from-blue-600/20 to-transparent p-4 rounded-lg border border-blue-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-5 h-5 text-blue-400" />
                      <span className="font-medium">Load Balancer</span>
                    </div>
                    <p className="text-sm text-gray-300">AWS ALB with SSL termination</p>
                  </div>
                  <div className="bg-gradient-to-b from-blue-600/20 to-transparent p-4 rounded-lg border border-blue-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Server className="w-5 h-5 text-blue-400" />
                      <span className="font-medium">CDN</span>
                    </div>
                    <p className="text-sm text-gray-300">Global content delivery</p>
                  </div>
                </div>

                {/* Application Layer */}
                <div className="space-y-4">
                  <h4 className="font-medium text-green-300 border-b border-green-500/30 pb-2">Application Layer</h4>
                  <div className="bg-gradient-to-b from-green-600/20 to-transparent p-4 rounded-lg border border-green-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Cloud className="w-5 h-5 text-green-400" />
                      <span className="font-medium">Microservices</span>
                    </div>
                    <p className="text-sm text-gray-300">Containerized with Docker</p>
                  </div>
                  <div className="bg-gradient-to-b from-green-600/20 to-transparent p-4 rounded-lg border border-green-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="w-5 h-5 text-green-400" />
                      <span className="font-medium">AI/ML Services</span>
                    </div>
                    <p className="text-sm text-gray-300">RAG agents & neural networks</p>
                  </div>
                </div>

                {/* Data Layer */}
                <div className="space-y-4">
                  <h4 className="font-medium text-purple-300 border-b border-purple-500/30 pb-2">Data Layer</h4>
                  <div className="bg-gradient-to-b from-purple-600/20 to-transparent p-4 rounded-lg border border-purple-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Database className="w-5 h-5 text-purple-400" />
                      <span className="font-medium">Oracle Database</span>
                    </div>
                    <p className="text-sm text-gray-300">Master-slave clustering</p>
                  </div>
                  <div className="bg-gradient-to-b from-purple-600/20 to-transparent p-4 rounded-lg border border-purple-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-5 h-5 text-purple-400" />
                      <span className="font-medium">Redis Cache</span>
                    </div>
                    <p className="text-sm text-gray-300">High-performance caching</p>
                  </div>
                </div>
              </div>

              {/* Architecture Flow */}
              <div className="mt-8 p-4 bg-slate-700/30 rounded-lg">
                <h5 className="font-medium mb-3">Data Flow & Security</h5>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4" /> Users
                  </span>
                  <span>→</span>
                  <span className="flex items-center gap-2">
                    <Shield className="w-4 h-4" /> WAF
                  </span>
                  <span>→</span>
                  <span className="flex items-center gap-2">
                    <Server className="w-4 h-4" /> API Gateway
                  </span>
                  <span>→</span>
                  <span className="flex items-center gap-2">
                    <Cloud className="w-4 h-4" /> Services
                  </span>
                  <span>→</span>
                  <span className="flex items-center gap-2">
                    <Database className="w-4 h-4" /> Data
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'deployments' && (
          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Server className="w-5 h-5 text-blue-400" />
                Multi-Region Deployments
              </h3>
              
              <div className="space-y-4">
                {deployments.map((deployment, index) => (
                  <div key={index} className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${
                          deployment.status === 'active' ? 'bg-green-400' : 'bg-yellow-400'
                        }`}></div>
                        <h4 className="font-medium text-lg">{deployment.env}</h4>
                        <span className="text-sm bg-slate-600 px-2 py-1 rounded">{deployment.region}</span>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-400">Version: {deployment.version}</p>
                        <p className="text-sm text-gray-400">{deployment.instances} instances</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div className="bg-slate-600/50 p-3 rounded">
                        <p className="text-sm text-gray-300">Compute</p>
                        <p className="font-medium">Auto-scaling enabled</p>
                      </div>
                      <div className="bg-slate-600/50 p-3 rounded">
                        <p className="text-sm text-gray-300">Storage</p>
                        <p className="font-medium">Encrypted at rest</p>
                      </div>
                      <div className="bg-slate-600/50 p-3 rounded">
                        <p className="text-sm text-gray-300">Network</p>
                        <p className="font-medium">VPC with security groups</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CI/CD Pipeline Status */}
              <div className="mt-8 bg-slate-700/30 rounded-lg p-4">
                <h5 className="font-medium mb-3 flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  CI/CD Pipeline Status
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm">Build: Passing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm">Tests: 98% coverage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-blue-400" />
                    <span className="text-sm">Deploy: In progress</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'ai-insights' && (
          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Brain className="w-5 h-5 text-blue-400" />
                AI-Powered Infrastructure Insights
              </h3>
              
              <div className="space-y-4">
                {aiInsights.map((insight, index) => (
                  <div key={index} className={`p-4 rounded-lg border-l-4 ${
                    insight.type === 'optimization' ? 'bg-blue-900/30 border-blue-400' :
                    insight.type === 'security' ? 'bg-red-900/30 border-red-400' :
                    insight.type === 'performance' ? 'bg-green-900/30 border-green-400' :
                    'bg-orange-900/30 border-orange-400'
                  }`}>
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded ${
                        insight.type === 'optimization' ? 'bg-blue-600/20' :
                        insight.type === 'security' ? 'bg-red-600/20' :
                        insight.type === 'performance' ? 'bg-green-600/20' :
                        'bg-orange-600/20'
                      }`}>
                        {insight.type === 'optimization' && <Settings className="w-4 h-4 text-blue-400" />}
                        {insight.type === 'security' && <Shield className="w-4 h-4 text-red-400" />}
                        {insight.type === 'performance' && <Zap className="w-4 h-4 text-green-400" />}
                        {insight.type === 'cost' && <BarChart3 className="w-4 h-4 text-orange-400" />}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium capitalize mb-1">{insight.type} Recommendation</p>
                        <p className="text-gray-300">{insight.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* RAG Agent Status */}
              <div className="mt-8 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg p-4 border border-purple-500/30">
                <h5 className="font-medium mb-3 flex items-center gap-2">
                  <Brain className="w-4 h-4 text-purple-400" />
                  RAG Agent Performance
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-purple-400">94.7%</p>
                    <p className="text-sm text-gray-300">Query Accuracy</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-400">1.2s</p>
                    <p className="text-sm text-gray-300">Avg Response Time</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-400">15.3k</p>
                    <p className="text-sm text-gray-300">Daily Queries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
