# AWS Amplify Deployment Guide for 7 Shades Photography

## Prerequisites
- AWS Account (new account is fine)
- GitHub account with your code repository
- Node.js 18+ installed locally (for testing)

## Step-by-Step Deployment Instructions

### Step 1: Prepare Your Code Repository

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - 7 Shades Photography website"
   ```

2. **Push to GitHub**:
   - Create a new repository on GitHub (e.g., `7-shades-photography`)
   - Push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/7-shades-photography.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Create AWS Account

1. Go to [https://aws.amazon.com/](https://aws.amazon.com/)
2. Click "Create an AWS Account"
3. Follow the registration process:
   - Enter email and password
   - Provide payment information (you'll get free tier benefits)
   - Verify your identity via phone
   - Choose a support plan (Basic is free)

### Step 3: Access AWS Amplify Console

1. Sign in to AWS Console: [https://console.aws.amazon.com/](https://console.aws.amazon.com/)
2. In the search bar at the top, type "Amplify"
3. Click on "AWS Amplify" service

### Step 4: Deploy Your App

1. **Click "New app" → "Host web app"**

2. **Choose Repository**:
   - Select "GitHub" (or your Git provider)
   - Click "Authorize" to connect your GitHub account
   - Select your repository: `7-shades-photography`
   - Select branch: `main` (or `master`)

3. **Configure Build Settings**:
   - AWS Amplify will auto-detect Next.js
   - It should automatically use the `amplify.yml` file we created
   - If not, you can use these build settings:
     ```yaml
     version: 1
     frontend:
       phases:
         preBuild:
           commands:
             - npm ci
         build:
           commands:
             - npm run build
       artifacts:
         baseDirectory: .next
         files:
           - '**/*'
       cache:
         paths:
           - node_modules/**/*
           - .next/cache/**/*
     ```

4. **Review Settings**:
   - App name: `7-shades-photography` (or your preferred name)
   - Environment: `main` (or `production`)
   - Review the configuration

5. **Click "Save and deploy"**

### Step 5: Wait for Deployment

- AWS Amplify will:
  1. Clone your repository
  2. Install dependencies (`npm ci`)
  3. Build your Next.js app (`npm run build`)
  4. Deploy to a CDN
  5. Provide you with a live URL

- This process takes about 5-10 minutes
- You can watch the build progress in real-time

### Step 6: Access Your Live Site

- Once deployment completes, you'll get a URL like:
  `https://main.xxxxxxxxx.amplifyapp.com`
- Click on the URL to view your live site
- Share this URL with others!

### Step 7: Custom Domain (Optional)

1. In Amplify Console, go to your app
2. Click "Domain management" in the left sidebar
3. Click "Add domain"
4. Enter your domain name (e.g., `7shades.photography`)
5. Follow the DNS configuration instructions
6. AWS will provide DNS records to add to your domain registrar

### Step 8: Environment Variables (If Needed)

If you need to add environment variables later:

1. In Amplify Console → Your App
2. Go to "Environment variables" in the left sidebar
3. Click "Manage variables"
4. Add any variables needed (e.g., API keys, etc.)

### Step 9: Automatic Deployments

- Every time you push to your `main` branch, Amplify will automatically:
  - Detect the changes
  - Build the new version
  - Deploy it to production
  - Update your live site

### Troubleshooting

**Build Fails:**
- Check the build logs in Amplify Console
- Common issues:
  - Missing dependencies in `package.json`
  - Build errors in your code
  - Node.js version mismatch

**Site Not Loading:**
- Check that the build completed successfully
- Verify all images are in the `public` folder
- Check browser console for errors

**Need to Update:**
- Just push changes to your GitHub repository
- Amplify will automatically rebuild and deploy

### Cost Estimate

- **AWS Amplify Free Tier:**
  - 1,000 build minutes/month
  - 15 GB served/month
  - 5 GB stored/month
  - Perfect for small to medium websites

- **After Free Tier:**
  - Build: $0.01 per build minute
  - Hosting: $0.15 per GB served
  - Storage: $0.023 per GB/month

### Support Resources

- AWS Amplify Docs: https://docs.amplify.aws/
- Next.js on Amplify: https://docs.aws.amazon.com/amplify/latest/userguide/deploy-nextjs-app.html
- AWS Support: Available in AWS Console

---

**Your site will be live at:** `https://[your-app-id].amplifyapp.com`

Good luck with your deployment! 🚀

