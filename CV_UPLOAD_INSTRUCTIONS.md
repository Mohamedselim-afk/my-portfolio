# How to Upload Your CV for Download

## Step 1: Prepare Your CV
1. Make sure your CV is in **PDF format** (recommended for best compatibility)
2. Name it: `Mohamed_Selim_CV.pdf`

## Step 2: Upload Your CV
Place your CV file in this location:
```
my-portfolio/
  └── assets/
      └── documents/
          └── Mohamed_Selim_CV.pdf  ← Put your CV here
```

## Step 3: Verify It Works
1. Open your `index.html` file in a browser
2. Scroll to the **About** section
3. Click the **"Download CV"** button
4. Your CV should download automatically!

## Alternative: Using Google Drive or Dropbox

If you prefer to host your CV online:

1. Upload your CV to **Google Drive** or **Dropbox**
2. Get a **direct download link**
3. Update line 207 in `index.html`:

### For Google Drive:
```html
<a href="YOUR_GOOGLE_DRIVE_DIRECT_LINK" class="btn btn-outline" target="_blank">
```

### For Dropbox:
```html
<a href="YOUR_DROPBOX_DIRECT_LINK" class="btn btn-outline" target="_blank">
```

## Current Status
✅ Folder created: `assets/documents/`
✅ HTML updated: CV download button is ready
⏳ **Next step:** Add your `Mohamed_Selim_CV.pdf` file to `assets/documents/` folder

---

## About Your Projects and Skills Sections

Your portfolio already has:

### ✅ Projects Section (My Work)
- Mashariq App
- Hajj App
- Car Wash App
- Vet Pharmacy
- Mazra3ty App

### ✅ Skills Section (My Expertise)
- Mobile Development (Flutter, Dart, Android, iOS)
- Backend & Tools (Firebase, REST APIs, Git, Figma)
- Architecture & Patterns (BLoC, MVVM, Clean Architecture, etc.)

If these sections are not displaying properly, try:
1. Open your browser's **Developer Console** (F12)
2. Check for any JavaScript errors
3. Make sure all files (CSS, JS) are loading correctly
4. Clear your browser cache and refresh the page

