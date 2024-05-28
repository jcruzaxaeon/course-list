# Course List
Fullstack webapp that allows instructors to create descriptions for courses they offer.

## NOTICE

### Quickstart Guide
1. Run a command-line utility, e.g. Bash (Linux Terminal)
2. `REST API`: To run the database REST API at `http://localhost:5000`, change directory to `...\course-list\api`, and run the [Initialization Commands](#initialization-commands).
3. `Client`: To run the client at `http://localhost:3000`, change directory to `...\course-list\client`, and run the [Initialization Commands](#initialization-commands).

   #### Initialization Commands
   ```bash
   npm i
   npm start
   ```

### Security
1. *Encryption Attempt*: Security was not part of this project's scope.  The project spec called for storing a *plain-text* password in a cookie for session managment.  For educational purposes, I decided to attempt a rudimentary, frontend-only security improvement by encrypting the password before storage.  Although my solution is ineffective without modifying the REST API, I learned a lot from implementing it, and at least I *feel* like its better than storing the password in plain-text.
1. *Public "Secret-Key"*: *To facilitate instructor testing*, the `.env` file containing the "secret-key" used to encrypt the password before storage in the cookie is intentionally public and tracked by GitHub.
1. *Production*: In a (production / non-educational) environment, (1) an entirely different security solution would be used for session management, and (2) the `.env` would be kept private.

## Data
- summary: "Team Treehouse Project: Unit 10. Final Project."
- filename: "readme.md"
- author: {
   - name: "Joel Cruz",
   - email: "jcruz@axaeon.com", }
- project: {
   - name: "Course List",
   - tier: "practice",
   - type: "unit",
   - id: "10t",
   - description: "Project developed independently, for educational purposes, following broad step-by-step specifications provided by Team Treehouse code academy.", }
- org: {
   - name: "Team Treehouse",
   - description: "Online code academy", }
- tools: {
   - Node.js,
   - Express,
	- sequelize,
	- sqlite3,
   - React,
   - react-router-dom, }

## CLI Shortcuts
```
cd /mnt/i/srv/axaeon/app/unit/10t
```

## Code Review Template
- [ ] CourseDetail.js
- [ ] Courses.js
- [ ] CreateCourse.js
- [ ] Error.js
- [ ] ErrorList.js
- [ ] Forbidden.js
- [ ] Header.js
- [ ] Nav.js
- [ ] NotFound.js
- [ ] PrivateRoute.js
- [ ] UpdateCourse.js
- [ ] UserSignIn.js
- [ ] UserSignOut.js
- [ ] UserSignUp.js
- [ ] ErrorMessageContext.js
- [ ] UserContext.js
- [ ] .css
- [ ] App.js
- [ ] index.js
- [ ] .env
