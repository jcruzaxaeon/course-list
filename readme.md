# Course List
Fullstack webapp that allows instructors to create descriptions for courses they offer.

## NOTICE

### Download
1. Open a terminal (or other command-line utility).
2. `cd` into project's parent-directory (e.g. `~/dev/projects`) and clone directory:
```bash
 $ cd ~/dev/projects
 $ git clone https://github.com/jcruzaxaeon/course-list.git
```
3. Perform either the [Manual Setup](#manual-setup) or [Automated Setup](#automated-setup).

### Manual Setup
1. To start the REST API database at `http://localhost:5000`, `cd` to the `api`-directory then run the initialization commands:
```bash
 $ cd course-list/api
 $ npm i
 $ npm run seed
 $ npm start
```
2. Open a second terminal.
3. To start the client at `http://localhost:3000`, `cd` to the `client`-directory and run the initialization commands:
```bash
 $ cd ~/dev/projects/course-list/client
 $ npm i
 $ npm start
```

### Automated Setup
1. Note that the REST API database will be run in the background. Hit `Ctrl-C` twice to exit both processes in your terminal.
2. Change directory to `{parent}/course-list`, grant permissions to the script, and run `course-list-setup.sh`:
```bash
 $ cd course-list
 $ chmod +x course-list-setup.sh # Grants script permissions
 $ ./course-list-setup.sh
```

### To Run the Project after Setup
1. `Manual`: Open 2 terminals and run `npm start` in both the `api`, and `client` directories. OR
2. `Automatic`: `cd` to `course-list`-directory:
```bash
 $ cd ~/dev/projects/course-list/
 $ chmod +x exe.sh
 $ ./exe.sh
```
- Note that the REST API database will be run in the background. Hit `Ctrl-C` twice to exit both processes in your terminal.

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
