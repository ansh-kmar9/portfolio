// data/blogs.js

import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";
import blog3 from "../assets/images/blog3.png";
import blog4 from "../assets/images/blog4.png";
import blog5 from "../assets/images/blog5.png";
import blog6 from "../assets/images/blog6.png";


export const blogs = [
  {
    id: "react-performance-optimization",
    title: "10 React Performance Optimization Techniques",
    date: "2023-09-15",
    excerpt:
      "Learn how to optimize your React applications for better performance with these essential techniques.",
    coverImage: blog1,
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
    excerpt:
      "Explore how to effectively use TypeScript in your React projects to create more maintainable and error-free code.",
    coverImage: blog2,
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
    excerpt:
      "A complete guide to CSS Grid layout with practical examples for building complex, responsive web layouts.",
    coverImage: blog3,
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
    excerpt:
      "Learn how to create a robust RESTful API using Node.js, Express, and MongoDB with best practices for authentication and error handling.",
    coverImage: blog4,
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

\`\`\`bash
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

Let's create our \`server.js\` file:

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

Create \`config/db.js\`:

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

Create \`models/userModel.js\`:

\`\`\`javascript
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: [true, 'Please add a name'] },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
      minlength: 6,
      select: false,
    },
  },
  { timestamps: true }
);

// Encrypt password
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
\`\`\`

## Authentication Middleware

Create \`middleware/authMiddleware.js\`:

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
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
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

## User Routes and Controller

Create \`routes/userRoutes.js\`:

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

Create \`controllers/userController.js\`:

\`\`\`javascript
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please add all fields');
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({ name, email, password });

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

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
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

const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

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

## Error Middleware

Create \`middleware/errorMiddleware.js\`:

\`\`\`javascript
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

module.exports = { errorHandler };
\`\`\`

## .env File

Create a \`.env\` file:

\`\`\`env
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
\`\`\`

## Conclusion

You now have a fully functional RESTful API with authentication. You can expand this by adding:
- Email verification
- Password reset
- Role-based access
- Input validation
- Rate limiting
- Logging & monitoring
`,
  },
  {
  id: "system-design-basics",
  title: "System Design Basics: Scalable Architecture Explained",
  date: "2024-02-14",
  excerpt: "Understand the core components of scalable system architecture — load balancers, caching, databases, and more.",
  coverImage: blog5,
  readTime: 12,
  tags: ["System Design", "Backend", "Scalability", "Architecture"],
  content: `# System Design Basics: Scalable Architecture Explained

Designing scalable, resilient, and performant systems is a core competency for modern developers. Whether you're building a simple web app or a complex distributed system, understanding the fundamentals of system design helps you architect solutions that can handle real-world load and failures.

---

## 1. Load Balancer

A **load balancer** acts as the front door to your servers, distributing incoming requests across multiple instances to avoid overloading any one of them. It improves availability and fault tolerance.

\`\`\`txt
Client ---> Load Balancer ---> Server 1
                              ---> Server 2
\`\`\`

Types:
- **Layer 4**: TCP/UDP-based
- **Layer 7**: HTTP-based (e.g., NGINX, HAProxy, AWS ALB)

---

## 2. Caching Layer

**Caching** reduces latency and load on your primary database or services. Popular tools include Redis and Memcached.

Use cases:
- Caching API responses
- Session storage
- Frequently accessed database queries

\`\`\`js
// Example using Redis in Node.js
redisClient.get("user:123", async (err, cachedUser) => {
  if (cachedUser) return res.json(JSON.parse(cachedUser));
  const user = await db.getUser("123");
  redisClient.setex("user:123", 3600, JSON.stringify(user)); // cache for 1 hour
  res.json(user);
});
\`\`\`

---

## 3. Database Scaling

A database can be scaled in two main ways:

- **Vertical Scaling** (scale-up): Add more CPU/RAM to a single server. Easy but limited.
- **Horizontal Scaling** (scale-out): Distribute data across nodes.

Techniques:
- **Replication**: Read replicas for scaling reads
- **Sharding**: Partition data by userID, region, etc.

---

## 4. Asynchronous Processing

Tasks like sending emails or processing video uploads shouldn't block the main thread. Use **message queues** to handle these asynchronously.

Popular tools:
- **RabbitMQ**
- **Kafka**
- **Amazon SQS**

\`\`\`js
// Example: pushing a task to a queue
const task = { email: "hello@example.com", type: "welcome" };
queue.publish("emailQueue", JSON.stringify(task));
\`\`\`

---

## 5. CDN (Content Delivery Network)

A **CDN** stores and serves static content like images, stylesheets, and scripts from edge servers located geographically closer to users.

Benefits:
- Reduced latency
- Lower origin server load
- Better global performance

Popular CDNs: Cloudflare, Akamai, AWS CloudFront

---

## 6. Database vs Object Storage

- **Relational/NoSQL DB**: Store structured user data
- **Object Storage** (like AWS S3): For large binary assets like images, PDFs, and videos

Use presigned URLs or cloud SDKs to manage uploads securely.

---

## 7. Health Checks and Auto Scaling

- Set up **health checks** to monitor service uptime
- Use **auto scaling** (e.g., AWS ASG, GCP Instance Groups) to dynamically add/remove resources

---

## 8. Monitoring and Observability

Use tools like **Prometheus**, **Grafana**, or **Datadog** to track:
- Latency
- Error rates
- Uptime
- Resource usage

Also add structured logging and request tracing (e.g., OpenTelemetry, Jaeger).

---

## Conclusion

Scalable systems are built using **modular, layered designs** — with load balancers, distributed caches, databases, async queues, and observability tools working in harmony. 

This blog scratched the surface — in interviews and real projects, expect to go deeper into:
- CAP theorem
- Consistent hashing
- Eventual consistency
- Rate limiting
- Circuit breakers

Continue exploring by designing systems like:
- URL Shortener
- Messaging Queue
- YouTube/Netflix clone
`
  },
  {
  id: "intro-to-generative-ai",
  title: "Introduction to Generative AI: How It Works",
  date: "2024-03-05",
  excerpt: "Explore the fundamentals of generative AI, from transformers to diffusion models, and learn how machines create content.",
  coverImage: blog6,
  readTime: 11,
  tags: ["AI", "Generative AI", "ML", "Deep Learning"],
  content: `# Introduction to Generative AI: How It Works

**Generative AI** is a type of artificial intelligence that can create new data from learned patterns. It’s the tech behind tools like ChatGPT, DALL·E, Midjourney, and GitHub Copilot — powering text generation, image creation, music composition, and even code.

---

## What Is Generative AI?

Traditional AI models classify or predict. Generative models go one step further: **they create**.

Examples:
- **GPT**: generates human-like text
- **DALL·E**: creates images from text
- **Jukebox**: composes music

---

## Core Concepts

### 1. Transformers

Transformers are the backbone of modern generative models like GPT, BERT, and T5.

\`\`\`python
# Pseudo-transformer logic
for layer in transformer_layers:
    x = layer.self_attention(x)
    x = layer.feed_forward(x)
\`\`\`

Key ideas:
- Self-attention mechanism
- Positional encoding
- Layer normalization
- Multi-head attention

---

### 2. Diffusion Models

Used in tools like **DALL·E 2**, **Stable Diffusion**, and **Midjourney**, these models learn to reverse a gradual noise process and turn it into meaningful images.

They start from pure noise and refine it over multiple steps into realistic content.

---

### 3. Prompt Engineering

Prompts guide model output. The art of designing effective prompts is known as **prompt engineering**.

\`\`\`txt
Prompt: "A cyberpunk city at night, in the style of Blade Runner"
Model: DALL·E -> generates detailed futuristic cityscape
\`\`\`

Prompting allows control over:
- Style
- Format
- Detail level
- Constraints

---

## Applications

Generative AI is transforming industries:

- **Content Generation**: Articles, ads, tweets, blogs
- **Art & Design**: AI illustrations, game assets, storyboards
- **Music**: Songwriting, beat creation
- **Coding**: AI pair programming (e.g., GitHub Copilot)
- **Education**: Personalized tutoring bots

---

## Limitations and Challenges

- **Hallucination**: Models may confidently output false info.
- **Bias**: Based on training data.
- **Compute-heavy**: Training LLMs requires huge resources.
- **Copyright**: Legal concerns over generated content.

---

## Tools and Ecosystem

- **OpenAI**: GPT, DALL·E
- **Google DeepMind**: Gemini, AlphaCode
- **Anthropic**: Claude
- **Meta**: LLaMA
- **HuggingFace**: Open-source model hub
- **Stable Diffusion**: Open image generation model

---

## Conclusion

Generative AI is not just a trend — it’s a new way to create. Whether you're writing, designing, coding, or teaching, it unlocks possibilities that were previously unimaginable.

As tools become more accessible, learning to harness and direct them (via good prompts or fine-tuning) will become a critical digital skill of the future.

> Creativity + Code = Generative AI Magic
`
},


];

export const getBlogById = (id) => {
  return blogs.find((blog) => blog.id === id) || null;
};
