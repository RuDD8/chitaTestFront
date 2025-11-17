# Chita Chat

A beautiful, modern chat interface that connects to the Chita webhook API.

## 🚀 Quick Start

Simply open `index.html` in your browser to use the chat locally.

## 🌐 Deploy to GitHub Pages (FREE)

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in (or create an account)
2. Click the **"+"** icon in the top-right corner
3. Select **"New repository"**
4. Name it whatever you want (e.g., `chita-chat`)
5. Make it **Public**
6. Click **"Create repository"**

### Step 2: Upload Your Files

**Option A: Using GitHub Web Interface (Easiest)**

1. In your new repository, click **"Add file"** → **"Upload files"**
2. Drag and drop these three files:
   - `index.html`
   - `style.css`
   - `script.js`
3. Click **"Commit changes"**

**Option B: Using Git Command Line**

```bash
# Initialize git in your project folder
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. In your repository, go to **Settings**
2. Scroll down to **"Pages"** in the left sidebar
3. Under **"Source"**, select **"Deploy from a branch"**
4. Under **"Branch"**, select **"main"** and **"/ (root)"**
5. Click **"Save"**

### Step 4: Access Your Site

After a few minutes, your site will be live at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

GitHub will show you the exact URL in the Pages settings.

## 🎉 Other Free Hosting Options

### [Netlify](https://www.netlify.com/) (Recommended Alternative)
1. Drag and drop your folder on [Netlify Drop](https://app.netlify.com/drop)
2. Your site is live instantly!
3. You get a random URL (can customize later)

### [Vercel](https://vercel.com/)
1. Sign up with GitHub
2. Click "New Project"
3. Import your repository
4. Deploy automatically

### [Cloudflare Pages](https://pages.cloudflare.com/)
1. Sign up for free
2. Connect your GitHub repository
3. Deploy with one click

## 📁 Files

- `index.html` - Main HTML structure
- `style.css` - Styling and animations
- `script.js` - Chat functionality and API integration

## 🔧 Configuration

The webhook URL is configured in `script.js`:
```javascript
const WEBHOOK_URL = 'https://chita-uizp.onrender.com/webhook';
```

If you need to change it, edit line 10 in `script.js`.

## 🌟 Features

- ✨ Beautiful gradient design
- 💬 Real-time chat interface
- 📱 Mobile responsive
- ⚡ Smooth animations
- 🌐 Georgian language support
- ⏳ Loading indicators
- ❌ Error handling

## 🛠️ Customization

### Change Colors
Edit the gradient colors in `style.css`:
```css
/* Lines 8 and 37 - Main gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Change Text
Edit Georgian text in `index.html` and `script.js`.

---

Made with ❤️ for Chita

