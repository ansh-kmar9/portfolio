// data/blogs.js
export const blogs = [
    {
      id: "react-performance-optimization",
      title: "10 React Performance Optimization Techniques",
      date: "2023-09-15",
      excerpt: "Learn how to optimize your React applications for better performance with these essential techniques.",
      coverImage: "/assets/images/blogs/react-performance.jpg",
      readTime: 8,
      tags: ["React", "Performance", "JavaScript", "Web Development"],
      content: `# 10 React Performance Optimization Techniques
  
  React is an excellent library for building user interfaces, but without proper optimization, your applications can become slow and unresponsive as they grow in complexity.
  
  In this article, I'll share 10 proven techniques to optimize your React applications for better performance.
  
  ## 1. Use React.memo for Component Memoization
  
  React.memo is a higher-order component that memoizes your component, preventing unnecessary re-renders when the props haven't changed.
  
  \`\`\`jsx
  const MyComponent = React.memo(function MyComponent(props) {
    // Your component logic
  });
  \`\`\`
  
  ## 2. Virtualize Long Lists
  
  When rendering long lists, use virtualization libraries like react-window or react-virtualized to only render items that are currently visible to the user.
  
  ## 3. Code Splitting with React.lazy and Suspense
  
  Split your code into smaller chunks and load them on demand:
  
  \`\`\`jsx
  const LazyComponent = React.lazy(() => import('./LazyComponent'));
  
  function MyComponent() {
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </React.Suspense>
    );
  }
  \`\`\`
  
  ## 4. Use useCallback for Event Handlers
  
  Prevent unnecessary re-creation of function objects for event handlers:
  
  \`\`\`jsx
  const handleClick = useCallback(() => {
    // Handle click event
  }, [/* dependencies */]);
  \`\`\`
  
  ## 5. Memoize Expensive Calculations with useMemo
  
  \`\`\`jsx
  const expensiveResult = useMemo(() => {
    return computeExpensiveValue(a, b);
  }, [a, b]);
  \`\`\`
  
  ## 6. Avoid Anonymous Functions in Renders
  
  Instead of:
  
  \`\`\`jsx
  <button onClick={() => handleClick(id)}>Click</button>
  \`\`\`
  
  Use:
  
  \`\`\`jsx
  const handleButtonClick = useCallback(() => {
    handleClick(id);
  }, [id, handleClick]);
  
  <button onClick={handleButtonClick}>Click</button>
  \`\`\`
  
  ## 7. Use Production Builds
  
  Always use production builds for deployment to remove development-only code.
  
  ## 8. Implement shouldComponentUpdate or PureComponent
  
  For class components, implement shouldComponentUpdate or extend PureComponent to prevent unnecessary renders.
  
  ## 9. Avoid Inline Object Styles
  
  Inline object styles create new objects on each render. Instead, use className with CSS or styled-components.
  
  ## 10. Use Web Workers for CPU-intensive Tasks
  
  Move CPU-intensive operations to Web Workers to avoid blocking the main thread.
  
  By implementing these techniques, you can significantly improve the performance of your React applications, providing a smoother experience for your users.`,
    },
    {
      id: "typescript-react-guide",
      title: "A Comprehensive Guide to TypeScript with React",
      date: "2023-08-22",
      excerpt: "Explore how to effectively use TypeScript in your React projects to create more maintainable and error-free code.",
      coverImage: "/assets/images/blogs/typescript-react.jpg",
      readTime: 12,
      tags: ["TypeScript", "React", "JavaScript", "Web Development"],
      content: `# A Comprehensive Guide to TypeScript with React
  
  TypeScript has become increasingly popular in the React ecosystem, and for good reason. It adds static type checking to your JavaScript code, helping you catch errors during development rather than at runtime.
  
  In this comprehensive guide, I'll walk you through how to effectively use TypeScript with React to create more robust applications.
  
  ## Setting Up a TypeScript React Project
  
  You can quickly set up a new project using Create React App with the TypeScript template:
  
  \`\`\`bash
  npx create-react-app my-app --template typescript
  \`\`\`
  
  ## Typing Component Props
  
  Here's how to define types for your component props:
  
  \`\`\`tsx
  interface UserProps {
    name: string;
    age: number;
    email?: string; // Optional prop
    onUserClick: (id: number) => void;
  }
  
  const User: React.FC<UserProps> = ({ name, age, email, onUserClick }) => {
    return (
      <div onClick={() => onUserClick(1)}>
        <h2>{name}</h2>
        <p>Age: {age}</p>
        {email && <p>Email: {email}</p>}
      </div>
    );
  };
  \`\`\`
  
  ## Typing Hooks
  
  ### useState
  
  \`\`\`tsx
  const [user, setUser] = useState<User | null>(null);
  \`\`\`
  
  ### useRef
  
  \`\`\`tsx
  const inputRef = useRef<HTMLInputElement>(null);
  \`\`\`
  
  ### useContext
  
  \`\`\`tsx
  interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
  }
  
  const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
  \`\`\`
  
  ## Event Handling
  
  \`\`\`tsx
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Submit logic
  };
  \`\`\`
  
  ## Working with APIs
  
  \`\`\`tsx
  interface User {
    id: number;
    name: string;
    email: string;
  }
  
  async function fetchUsers(): Promise<User[]> {
    const response = await fetch('https://api.example.com/users');
    return response.json();
  }
  \`\`\`
  
  ## Using Generics for Reusable Components
  
  \`\`\`tsx
  interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
  }
  
  function List<T>({ items, renderItem }: ListProps<T>) {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{renderItem(item)}</li>
        ))}
      </ul>
    );
  }
  \`\`\`
  
  ## Type Assertions
  
  Sometimes TypeScript can't infer types correctly, and you need to assert types:
  
  \`\`\`tsx
  const userInput = event.target.value as string;
  \`\`\`
  
  ## Conclusion
  
  TypeScript adds a powerful layer of type safety to your React applications. While there's a learning curve, the benefits of catching errors at compile time rather than runtime make it well worth the effort. As your projects grow in complexity, you'll find that TypeScript makes your code more maintainable and self-documenting.
  
  Start with the basics and gradually increase your usage of TypeScript's more advanced features as you become more comfortable with it.`,
    },
    {
      id: "css-grid-mastery",
      title: "Mastering CSS Grid: From Basics to Advanced Layouts",
      date: "2023-07-10",
      excerpt: "A complete guide to CSS Grid layout with practical examples for building complex, responsive web layouts.",
      coverImage: "/assets/images/blogs/css-grid.jpg",
      readTime: 10,
      tags: ["CSS", "Web Design", "Responsive Design", "Frontend"],
      content: `# Mastering CSS Grid: From Basics to Advanced Layouts
  
  CSS Grid has revolutionized the way we approach layout design on the web. It provides a two-dimensional system for creating complex layouts with unprecedented flexibility and control.
  
  In this guide, I'll take you from the basics of CSS Grid to advanced techniques for creating sophisticated layouts.
  
  ## Getting Started with CSS Grid
  
  To create a grid container, set the display property to grid:
  
  \`\`\`css
  .container {
    display: grid;
    grid-template-columns: 200px 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 20px;
  }
  \`\`\`
  
  ## Grid Template Areas
  
  One of the most intuitive features of CSS Grid is the ability to define template areas:
  
  \`\`\`css
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      "header header header"
      "sidebar main main"
      "footer footer footer";
    min-height: 100vh;
  }
  
  .header { grid-area: header; }
  .sidebar { grid-area: sidebar; }
  .main { grid-area: main; }
  .footer { grid-area: footer; }
  \`\`\`
  
  ## Creating Responsive Layouts with Minmax and Auto-fill
  
  \`\`\`css
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
  \`\`\`
  
  ## Alignment and Positioning
  
  CSS Grid provides powerful alignment properties:
  
  \`\`\`css
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center; /* Horizontal alignment of items */
    align-items: center; /* Vertical alignment of items */
    justify-content: space-between; /* Alignment of the grid tracks */
    align-content: center; /* Alignment of the grid tracks */
  }
  \`\`\`
  
  ## Spanning Multiple Columns or Rows
  
  \`\`\`css
  .item {
    grid-column: 1 / 3; /* Start at column line 1, end at column line 3 */
    grid-row: 2 / 4; /* Start at row line 2, end at row line 4 */
  }
  
  /* Or more simply */
  .item {
    grid-column: 1 / span 2; /* Span 2 columns starting from line 1 */
    grid-row: 2 / span 2; /* Span 2 rows starting from line 2 */
  }
  \`\`\`
  
  ## Creating a Masonry-like Layout
  
  \`\`\`css
  .masonry-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: 10px;
    grid-auto-flow: dense;
  }
  
  .item {
    grid-row-end: span calc(var(--height) / 10);
  }
  \`\`\`
  
  With JavaScript:
  
  \`\`\`javascript
  document.querySelectorAll('.item').forEach(item => {
    const height = item.getBoundingClientRect().height;
    item.style.setProperty('--height', height);
  });
  \`\`\`
  
  ## Grid Auto Flow
  
  Control how the auto-placement algorithm works:
  
  \`\`\`css
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: dense; /* Makes the algorithm attempt to fill holes earlier in the grid */
  }
  \`\`\`
  
  ## Conclusion
  
  CSS Grid is a powerful tool that has transformed the way we approach layout on the web. By combining Grid with other CSS features like Flexbox, you can create almost any layout imaginable with clean, semantic HTML.
  
  Start with the basics and experiment with more complex layouts as you grow comfortable with the system. Remember that the best way to learn is by building projects and solving real layout challenges.`,
    },
    {
      id: "nodejs-rest-api",
      title: "Building a RESTful API with Node.js and Express",
      date: "2023-06-05",
      excerpt: "Learn how to create a robust RESTful API using Node.js, Express, and MongoDB with best practices for authentication and error handling.",
      coverImage: "/assets/images/blogs/nodejs-api.jpg",
      readTime: 15,
      tags: ["Node.js", "Express", "API", "MongoDB", "Backend"],
      // data/blogs.js (continued)
    content: `# Building a RESTful API with Node.js and Express

    A well-designed API is the backbone of many modern web applications. In this tutorial, I'll walk you through creating a robust RESTful API using Node.js, Express, and MongoDB.
    
    ## Setting Up the Project
    
    First, let's set up our project structure:
    
    \`\`\`bash
    mkdir node-api
    cd node-api
    npm init -y
    npm install express mongoose dotenv bcryptjs jsonwebtoken
    \`\`\`
    
    Create the following project structure:
    
    \`\`\`
    node-api/
    ├── controllers/
    │   └── userController.js
    ├── models/
    │   └── userModel.js
    ├── routes/
    │   └── userRoutes.js
    ├── middleware/
    │   ├── authMiddleware.js
    │   └── errorMiddleware.js
    ├── config/
    │   └── db.js
    ├── .env
    └── server.js
    \`\`\`
    
    ## Setting Up the Server
    
    Let's create our server.js file:
    
    \`\`\`javascript
    const express = require('express');
    const dotenv = require('dotenv');
    const connectDB = require('./config/db');
    const { errorHandler } = require('./middleware/errorMiddleware');
    
    // Load env vars
    dotenv.config();
    
    // Connect to database
    connectDB();
    
    const app = express();
    
    // Body parser
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    
    // Routes
    app.use('/api/users', require('./routes/userRoutes'));
    
    // Error middleware
    app.use(errorHandler);
    
    const PORT = process.env.PORT || 5000;
    
    app.listen(PORT, () => {
      console.log(\`Server running on port \${PORT}\`);
    });
    \`\`\`
    
    ## Connecting to MongoDB
    
    Create a config/db.js file:
    
    \`\`\`javascript
    const mongoose = require('mongoose');
    
    const connectDB = async () => {
      try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log(\`MongoDB Connected: \${conn.connection.host}\`);
      } catch (error) {
        console.error(\`Error: \${error.message}\`);
        process.exit(1);
      }
    };
    
    module.exports = connectDB;
    \`\`\`
    
    ## Creating the User Model
    
    Let's create a user model in models/userModel.js:
    
    \`\`\`javascript
    const mongoose = require('mongoose');
    const bcrypt = require('bcryptjs');
    
    const userSchema = mongoose.Schema(
      {
        name: {
          type: String,
          required: [true, 'Please add a name'],
        },
        email: {
          type: String,
          required: [true, 'Please add an email'],
          unique: true,
          match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email',
          ],
        },
        password: {
          type: String,
          required: [true, 'Please add a password'],
          minlength: 6,
          select: false,
        },
      },
      {
        timestamps: true,
      }
    );
    
    // Encrypt password using bcrypt
    userSchema.pre('save', async function (next) {
      if (!this.isModified('password')) {
        next();
      }
    
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    });
    
    // Match user entered password to hashed password in database
    userSchema.methods.matchPassword = async function (enteredPassword) {
      return await bcrypt.compare(enteredPassword, this.password);
    };
    
    module.exports = mongoose.model('User', userSchema);
    \`\`\`
    
    ## Authentication Middleware
    
    Create middleware/authMiddleware.js:
    
    \`\`\`javascript
    const jwt = require('jsonwebtoken');
    const asyncHandler = require('express-async-handler');
    const User = require('../models/userModel');
    
    const protect = asyncHandler(async (req, res, next) => {
      let token;
    
      if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
      ) {
        try {
          // Get token from header
          token = req.headers.authorization.split(' ')[1];
    
          // Verify token
          const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
          // Get user from the token
          req.user = await User.findById(decoded.id).select('-password');
    
          next();
        } catch (error) {
          console.error(error);
          res.status(401);
          throw new Error('Not authorized');
        }
      }
    
      if (!token) {
        res.status(401);
        throw new Error('Not authorized, no token');
      }
    });
    
    module.exports = { protect };
    \`\`\`
    
    ## Creating User Routes and Controllers
    
    Create routes/userRoutes.js:
    
    \`\`\`javascript
    const express = require('express');
    const router = express.Router();
    const {
      registerUser,
      loginUser,
      getMe,
    } = require('../controllers/userController');
    const { protect } = require('../middleware/authMiddleware');
    
    router.post('/', registerUser);
    router.post('/login', loginUser);
    router.get('/me', protect, getMe);
    
    module.exports = router;
    \`\`\`
    
    Create controllers/userController.js:
    
    \`\`\`javascript
    const jwt = require('jsonwebtoken');
    const asyncHandler = require('express-async-handler');
    const User = require('../models/userModel');
    
    // @desc    Register new user
    // @route   POST /api/users
    // @access  Public
    const registerUser = asyncHandler(async (req, res) => {
      const { name, email, password } = req.body;
    
      // Validation
      if (!name || !email || !password) {
        res.status(400);
        throw new Error('Please add all fields');
      }
    
      // Check if user exists
      const userExists = await User.findOne({ email });
    
      if (userExists) {
        res.status(400);
        throw new Error('User already exists');
      }
    
      // Create user
      const user = await User.create({
        name,
        email,
        password,
      });
    
      if (user) {
        res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          token: generateToken(user._id),
        });
      } else {
        res.status(400);
        throw new Error('Invalid user data');
      }
    });
    
    // @desc    Authenticate a user
    // @route   POST /api/users/login
    // @access  Public
    const loginUser = asyncHandler(async (req, res) => {
      const { email, password } = req.body;
    
      // Check for user email
      const user = await User.findOne({ email }).select('+password');
    
      if (user && (await user.matchPassword(password))) {
        res.json({
          _id: user._id,
          name: user.name,
          email: user.email,
          token: generateToken(user._id),
        });
      } else {
        res.status(401);
        throw new Error('Invalid credentials');
      }
    });
    
    // @desc    Get user data
    // @route   GET /api/users/me
    // @access  Private
    const getMe = asyncHandler(async (req, res) => {
      res.status(200).json(req.user);
    });
    
    // Generate JWT
    const generateToken = (id) => {
      return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
      });
    };
    
    module.exports = {
      registerUser,
      loginUser,
      getMe,
    };
    \`\`\`
    
    ## Error Handling Middleware
    
    Create middleware/errorMiddleware.js:
    
    \`\`\`javascript
    const errorHandler = (err, req, res, next) => {
      const statusCode = res.statusCode ? res.statusCode : 500;
    
      res.status(statusCode);
    
      res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
      });
    };
    
    module.exports = { errorHandler };
    \`\`\`
    
    ## Environment Variables
    
    Create a .env file:
    
    \`\`\`env
    NODE_ENV=development
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    \`\`\`
    
    ## Conclusion
    
    You now have a fully functional RESTful API with user authentication using JWT. This serves as a solid foundation for building any kind of application.
    
    To expand this API, you might consider adding:
    
    1. Password reset functionality
    2. Email verification
    3. Role-based authorization
    4. Additional resources like products, posts, etc.
    5. Input validation with packages like Joi or express-validator
    6. Rate limiting to prevent abuse
    
    Remember that security is crucial for any API, so always keep your dependencies updated and follow best practices for securing Node.js applications.`,
      },
    ];
    
    export const getBlogById = (id) => {
      return blogs.find(blog => blog.id === id) || null;
    };