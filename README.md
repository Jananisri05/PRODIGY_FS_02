# PRODIGY_FS_02 - User Management System

A modern React-based web application for managing users with full CRUD (Create, Read, Update, Delete) operations.

## 🎯 Overview

PRODIGY_FS_02 is a full-stack user management system built with React and Node.js. It provides a clean, intuitive interface for creating, viewing, updating, and deleting user records with a responsive design.

## 📋 Key Features

- ✅ **Create Users** - Add new user records with form validation
- ✅ **View Users** - Display all users in an organized table
- ✅ **Update Users** - Modify existing user information
- ✅ **Delete Users** - Remove user records
- ✅ **Responsive Design** - Works on desktop and mobile devices
- ✅ **Form Validation** - Client-side validation for data integrity
- ✅ **Database Integration** - Persistent data storage

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React, JSX, CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB / SQLite |
| **Package Manager** | npm |

## 📂 Project Structure

```
PRODIGY_FS_02/
├── App.jsx                 # Main application component
├── App.css                 # Application styles
├── CreateUser.jsx          # User creation form component
├── UpdateUser.jsx          # User update form component
├── Users.jsx              # Users list display component
├── User.js                # User model/schema
├── main.jsx               # React entry point
├── index.js               # Backend server setup
├── package.json           # Project dependencies
├── .env                   # Environment variables
├── .gitignore            # Git ignore rules
└── README.md             # Documentation
```

## 📦 Components

### **App.jsx** - Main Application
Root component that manages routing and state:
- Routes between different views
- State management
- Page layout structure

### **Users.jsx** - Users List
Displays all users in a table format:
- Table view of all users
- Edit and delete buttons
- Links to user details
- Search/filter functionality

### **CreateUser.jsx** - User Creation
Form for adding new users:
- Text input fields (name, email, etc.)
- Form validation
- Submit handler
- Success/error messages

### **UpdateUser.jsx** - User Update
Form for editing existing users:
- Pre-populated form fields
- Update submission
- Validation
- Cancel option

### **User.js** - User Schema/Model
Defines user data structure:
```javascript
const userSchema = {
  id: String,
  name: String,
  email: String,
  phone: String,
  address: String,
  // ... other fields
};
```

### **index.js** - Backend Server
Express.js server setup:
- Route handlers
- Database connections
- API endpoints
- Middleware configuration

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Jananisri05/PRODIGY_FS_02.git
cd PRODIGY_FS_02
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
Create a `.env` file:
```env
PORT=5000
DATABASE_URL=your_database_url
NODE_ENV=development
```

4. **Start the development server**
```bash
npm start
```

5. **Open in browser**
```
http://localhost:3000
```

## 📡 API Endpoints

### Users Management

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users |
| POST | `/api/users` | Create new user |
| GET | `/api/users/:id` | Get user by ID |
| PUT | `/api/users/:id` | Update user |
| DELETE | `/api/users/:id` | Delete user |

## 💻 Usage Examples

### Creating a User
```javascript
const createUser = async (userData) => {
  const response = await fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });
  return response.json();
};
```

### Fetching All Users
```javascript
const getUsers = async () => {
  const response = await fetch('/api/users');
  return response.json();
};
```

### Updating a User
```javascript
const updateUser = async (id, userData) => {
  const response = await fetch(`/api/users/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });
  return response.json();
};
```

### Deleting a User
```javascript
const deleteUser = async (id) => {
  const response = await fetch(`/api/users/${id}`, {
    method: 'DELETE'
  });
  return response.json();
};
```

## 🎨 Styling

### App.css
Contains styles for:
- Main layout
- Navigation
- Component containers
- Responsive design

### Color Scheme
- Primary: `#007bff` (Blue)
- Secondary: `#6c757d` (Gray)
- Success: `#28a745` (Green)
- Danger: `#dc3545` (Red)

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔄 State Management

Using React Hooks:
```javascript
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
```

## ✅ Form Validation

### Validation Rules
- **Name**: Required, minimum 2 characters
- **Email**: Required, valid email format
- **Phone**: Valid phone number format
- **Address**: Optional, maximum 100 characters

## 🔐 Security Features

- Input sanitization
- XSS protection
- CSRF tokens
- Password encryption (backend)
- Rate limiting

## 📊 Database Schema

```javascript
UserSchema = {
  _id: ObjectId,
  name: String (required),
  email: String (required, unique),
  phone: String,
  address: String,
  createdAt: Date,
  updatedAt: Date
}
```

## 🧪 Testing

### Running Tests
```bash
npm test
```

### Test Coverage
```bash
npm test -- --coverage
```

## 📝 Environment Variables

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
DATABASE_URL=mongodb://localhost:27017/users
DB_NAME=userdb

# Client
REACT_APP_API_URL=http://localhost:5000
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
lsof -i :5000
kill -9 <PID>
```

### Database Connection Error
- Verify database is running
- Check DATABASE_URL in .env
- Ensure network connectivity

### Dependencies Issues
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📦 Dependencies

```json
{
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "express": "^4.18.0",
  "mongoose": "^6.0.0",
  "axios": "^0.27.0"
}
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Heroku
```bash
heroku create app-name
git push heroku main
```

### Deploy to Vercel (Frontend)
```bash
npm install -g vercel
vercel
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -m 'Add improvement'`)
4. Push to branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

[Add your license here]

## 👨‍💻 Author

Jananisri05

## 📞 Support

For issues or questions:
- Open a GitHub issue
- Contact the repository maintainer

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [MongoDB Documentation](https://docs.mongodb.com)
- [REST API Best Practices](https://restfulapi.net)

---

**Last Updated**: December 2025  
**Language Composition**: JavaScript 68.7%, CSS 31.3%  
**Status**: Active Development
