# Rotaract Club of Abugida - Complete Project

This is a complete web application for the Rotaract Club of Abugida, featuring a public-facing website and an admin dashboard for content management.

## Project Structure

- **Main Frontend** (`/src`) - Public-facing website built with React + TypeScript + Tailwind CSS
- **Admin Dashboard** (`/admin-dashboard`) - Admin panel for content management
- **Backend Server** (`/server`) - Express.js API with MongoDB

## Features

### Public Website
- Home page with hero section and key information
- About Us page
- News and Events
- Projects (Community Service, Professional Development, Fellowship)
- Gallery
- Contact Us
- Donate page
- Board of Directors information

### Admin Dashboard
- **Dashboard Overview** - Statistics and analytics
- **News Management** - Create, edit, delete news articles
- **Events Management** - Create, edit, delete events
- **Projects Management** - Create, edit, delete projects with categories
- **BOD Management** - Manage Board of Directors members
- **Analytics** - Charts and data visualization

### Backend API
- RESTful API endpoints for all content types
- File upload support for images
- JWT authentication
- MongoDB database integration

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB database (local or cloud)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd abugida-3
   ```

2. **Install dependencies for all projects**
   ```bash
   # Install main frontend dependencies
   npm install

   # Install admin dashboard dependencies
   cd admin-dashboard
   npm install
   cd ..

   # Install server dependencies
   cd server
   npm install
   cd ..
   ```

3. **Environment Setup**
   
   Create a `.env` file in the `server` directory:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

## Running the Application

### Option 1: Run All Services Together (Recommended)
```bash
npm run dev:all
```

This will start:
- Main frontend on http://localhost:5173
- Admin dashboard on http://localhost:5174
- Backend server on http://localhost:5000

### Option 2: Run Services Individually

**Main Frontend:**
```bash
npm run dev
```
Access at: http://localhost:5173

**Admin Dashboard:**
```bash
npm run admin
```
Access at: http://localhost:5174

**Backend Server:**
```bash
npm run server
```
Access at: http://localhost:5000

## API Endpoints

### News
- `GET /api/news` - Get all news
- `POST /api/news` - Create news (admin only)
- `PUT /api/news/:id` - Update news (admin only)
- `DELETE /api/news/:id` - Delete news (admin only)

### Events
- `GET /api/events` - Get all events
- `POST /api/events` - Create event (admin only)
- `PUT /api/events/:id` - Update event (admin only)
- `DELETE /api/events/:id` - Delete event (admin only)

### Projects
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create project (admin only)
- `PUT /api/projects/:id` - Update project (admin only)
- `DELETE /api/projects/:id` - Delete project (admin only)

### Board of Directors
- `GET /api/bod` - Get all BOD members
- `POST /api/bod` - Create BOD member (admin only)
- `PUT /api/bod/:id` - Update BOD member (admin only)
- `DELETE /api/bod/:id` - Delete BOD member (admin only)

## Admin Dashboard Access

1. Navigate to the admin dashboard: http://localhost:5174
2. Use the login credentials (you may need to create an admin user first)
3. Default admin credentials (if not set up):
   - Email: admin@rotaractabugida.com
   - Password: admin123

## File Upload

The application supports image uploads for:
- News articles
- Events
- Projects
- BOD member profiles

Uploaded files are stored in the `server/uploads` directory and served statically.

## Technologies Used

### Frontend
- React 19
- TypeScript
- Tailwind CSS
- React Router DOM
- Axios
- Recharts (for analytics)
- Heroicons

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Multer for file uploads
- bcryptjs for password hashing

### Development Tools
- Vite
- ESLint
- TypeScript
- Concurrently (for running multiple services)

## Deployment

### Frontend Deployment
```bash
npm run build
```

### Backend Deployment
1. Set up environment variables on your hosting platform
2. Install dependencies: `npm install`
3. Start the server: `npm start`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact the development team or create an issue in the repository.
