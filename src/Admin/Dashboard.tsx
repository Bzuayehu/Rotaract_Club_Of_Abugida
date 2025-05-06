import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { FiMenu, FiUsers, FiCalendar, FiSettings, FiActivity, FiFolder, FiPlus, FiCheckSquare } from 'react-icons/fi';

// Types
interface Project {
  id: string;
  title: string;
  status: 'planned' | 'in-progress' | 'completed';
  deadline: string;
  assignedTo: string;
}

interface Post {
  id: string;
  title: string;
  author: string;
  progress: number;
  status: 'draft' | 'published';
}

// Mock Data
const chartData = [
  { name: 'Jan', users: 4000, events: 2400 },
  { name: 'Feb', users: 3000, events: 1398 },
  { name: 'Mar', users: 2000, events: 9800 },
];

const recentActivities = [
  { id: 1, user: 'Alice', action: 'Created Event: Charity Run' },
  { id: 2, user: 'Bob', action: 'Updated Member List' },
];

const projects: Project[] = [
  { id: '1', title: 'Community Cleanup', status: 'in-progress', deadline: '2024-03-15', assignedTo: 'Alice' },
  { id: '2', title: 'Fundraising Campaign', status: 'planned', deadline: '2024-04-01', assignedTo: 'Bob' },
];

const posts: Post[] = [
  { id: '1', title: 'Charity Event Update', author: 'Alice', progress: 75, status: 'published' },
  { id: '2', title: 'Volunteer Recruitment', author: 'Bob', progress: 30, status: 'draft' },
];

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showNewProjectModal, setShowNewProjectModal] = useState(false);
  const [newPost, setNewPost] = useState({ title: '', content: '' });

  const renderContent = () => {
    switch(activeTab) {
      case 'projects':
        return (
          <div style={styles.section}>
            <div style={styles.sectionHeader}>
              <h2>Project Management</h2>
              <button 
                style={styles.primaryButton}
                onClick={() => setShowNewProjectModal(true)}
              >
                <FiPlus /> New Project
              </button>
            </div>
            
            <div style={styles.grid}>
              {projects.map(project => (
                <div key={project.id} style={{ 
                  ...styles.projectCard,
                  borderLeftColor: statusColors[project.status]
                }}>
                  <h3>{project.title}</h3>
                  <p>Status: <span style={{ color: statusColors[project.status] }}>
                    {project.status}
                  </span></p>
                  <p>Deadline: {project.deadline}</p>
                  <p>Assigned to: {project.assignedTo}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'user-posts':
        return (
          <div style={styles.section}>
            <h2>User Posts & Progress</h2>
            <div style={styles.postForm}>
              <input
                type="text"
                placeholder="Post Title"
                style={styles.input}
                value={newPost.title}
                onChange={(e) => setNewPost({...newPost, title: e.target.value})}
              />
              <textarea
                placeholder="Post Content"
                style={{...styles.input, height: '100px'}}
                value={newPost.content}
                onChange={(e) => setNewPost({...newPost, content: e.target.value})}
              />
              <button style={styles.primaryButton}>
                <FiCheckSquare /> Publish Post
              </button>
            </div>

            <div style={styles.tableContainer}>
              {posts.map(post => (
                <div key={post.id} style={styles.postItem}>
                  <h4>{post.title}</h4>
                  <p>Author: {post.author}</p>
                  <div style={styles.progressBar}>
                    <div style={{ 
                      width: `${post.progress}%`,
                      backgroundColor: post.status === 'published' ? '#4CAF50' : '#2196F3'
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <>
            {/* Dashboard Content */}
            <header style={styles.header}>
              <h1>Dashboard Overview</h1>
            </header>

            <div style={styles.statsGrid}>
              <div style={styles.statCard}>
                <h3>Total Members</h3>
                <p>1,234</p>
              </div>
              <div style={styles.statCard}>
                <h3>Upcoming Events</h3>
                <p>15</p>
              </div>
              <div style={styles.statCard}>
                <h3>Active Projects</h3>
                <p>8</p>
              </div>
            </div>

            <div style={styles.chartContainer}>
              <h3>Monthly Activity</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="users" stroke="#8884d8" />
                  <Line type="monotone" dataKey="events" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div style={styles.tableContainer}>
              <h3>Recent Activities</h3>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {recentActivities.map((activity) => (
                    <tr key={activity.id}>
                      <td>{activity.user}</td>
                      <td>{activity.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        );
    }
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={{ ...styles.sidebar, width: isSidebarOpen ? '250px' : '60px' }}>
        <div style={styles.sidebarHeader}>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            style={styles.menuButton}
          >
            <FiMenu />
          </button>
          {isSidebarOpen && <h2 style={styles.logo}>Rotaract Admin</h2>}
        </div>
        <nav style={styles.nav}>
          <button 
            style={styles.navLink} 
            onClick={() => setActiveTab('dashboard')}
          >
            <FiActivity /> {isSidebarOpen && 'Dashboard'}
          </button>

          <button 
            style={styles.navLink}
            onClick={() => setActiveTab('projects')}
          >
            <FiFolder /> {isSidebarOpen && 'Projects'}
          </button>

          <button 
            style={styles.navLink}
            onClick={() => setActiveTab('user-posts')}
          >
            <FiUsers /> {isSidebarOpen && 'User Posts'}
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {renderContent()}
      </div>

      {/* New Project Modal */}
      {showNewProjectModal && (
        <div style={styles.modalOverlay as React.CSSProperties}>
          <div style={styles.modal}>
            <h2>Create New Project</h2>
            <button 
              style={styles.primaryButton}
              onClick={() => setShowNewProjectModal(false)}
            >
              Create Project
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Styles
const statusColors = {
  planned: '#FFB300',
  'in-progress': '#2196F3',
  completed: '#4CAF50'
};

const styles = {
  container: {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: '#f5f6fa',
  },
  sidebar: {
    backgroundColor: '#2c3e50',
    color: 'white',
    transition: '0.3s',
  },
  sidebarHeader: {
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  menuButton: {
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '24px',
    cursor: 'pointer',
  },
  logo: {
    margin: 0,
    fontSize: '1.5rem',
  },
  nav: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '10px',
    padding: '20px',
  },
  navLink: {
    background: 'none',
    border: 'none',
    color: 'white',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px',
    borderRadius: '8px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#34495e',
    },
  },
  mainContent: {
    flex: 1,
    padding: '20px',
  },
  header: {
    marginBottom: '30px',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    marginBottom: '30px',
  },
  statCard: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  chartContainer: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    marginBottom: '30px',
  },
  tableContainer: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse' as const,
    marginTop: '10px',
    'th, td': {
      padding: '12px',
      textAlign: 'left' as const,
      borderBottom: '1px solid #ddd',
    },
    th: {
      backgroundColor: '#f8f9fa',
    },
  },
  section: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '24px',
    marginBottom: '24px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px'
  },
  projectCard: {
    borderLeft: '4px solid #2196F3',
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
  },
  postForm: {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '24px'
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '12px',
    border: '1px solid #ddd',
    borderRadius: '6px'
  },
  progressBar: {
    height: '8px',
    backgroundColor: '#eee',
    borderRadius: '4px',
    overflow: 'hidden',
    marginTop: '8px'
  },
  postItem: {
    backgroundColor: 'white',
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '16px'
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modal: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '12px',
    width: '500px'
  },
  primaryButton: {
    backgroundColor: '#2196F3',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '6px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    ':hover': {
      backgroundColor: '#1976D2'
    }
  }
};

export default AdminDashboard;