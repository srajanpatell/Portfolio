📌 Project Overview

JobBoard is a platform where:

Employers can create, publish, and manage job postings

Candidates can view job listings and apply

Administrators can manage users and job records

A REST API allows external clients to consume job and application data

✨ Main Features

🔐 User authentication (Devise)

👥 Employer vs Candidate roles

📄 Job CRUD (create, update, publish, archive)

📨 Applications system

🌐 REST API (/api/v1/...)

🎨 HTML frontend using Tailwind CSS

🐳 Dockerized environment for local development

🧪 Full RSpec test suite

🌱 Seed data for demo environment

🛠 Tech Stack
Backend

Ruby on Rails (7.x)

PostgreSQL

Redis

Sidekiq-ready

Frontend

ERB templates

TailwindCSS

API

JSON REST API

Namespaced under /api/v1

Authentication-ready

Infrastructure / Tools

Docker & Docker Compose

RSpec

FactoryBot + Faker


🧑‍💻 Local Setup Instructions (Without Docker)
1. Clone the repository
git clone https://github.com/your-username/jobboard.git
cd jobboard

2. Install Ruby (via rbenv or asdf)
rbenv install 3.2.2
rbenv local 3.2.2

3. Install Gems
bundle install

4. Setup Database
rails db:create
rails db:migrate
rails db:seed

5. Start Rails Server
rails server


Visit:

http://localhost:3000

🐳 Docker Setup
1. Build containers
docker compose build

2. Start services
docker compose up -d

3. Access Rails console
docker exec -it rails_app rails c

4. Run migrations
docker exec -it rails_app rails db:migrate

5. Seed database
docker exec -it rails_app rails db:seed

6. View logs
docker compose logs -f

7. Stop containers
docker compose down

🧪 How to Run Tests (RSpec)
Run all tests (local)
bundle exec rspec

Run all tests (docker)
docker exec -it rails_app bundle exec rspec

Run a single spec
bundle exec rspec spec/models/job_spec.rb

🌱 How to Seed the Database

Seeds create:

Employer & candidate users

Sample jobs

Sample job applications

Local
rails db:seed

Docker
docker exec -it rails_app rails db:seed

📡 API Documentation (v1)

Base URL:

/api/v1/

🔐 Auth Endpoints
POST /api/v1/auth/register

Registers a new user.

POST /api/v1/auth/login

Logs in user — returns JWT or session.

DELETE /api/v1/auth/logout

Logs out user.

📄 Jobs API
GET /api/v1/jobs

Returns all published jobs.

Response example:

[
  {
    "id": 1,
    "title": "Software Engineer",
    "slug": "software-engineer",
    "location": "Remote"
  }
]

POST /api/v1/jobs

Create a job (employer only).

Payload:

{
  "job": {
    "title": "Backend Developer",
    "description": "Job details",
    "location": "Remote",
    "salary_min": 40000,
    "salary_max": 90000
  }
}

GET /api/v1/jobs/:id

Show a single job by ID or slug.

PATCH /api/v1/jobs/:id

Update job details.

DELETE /api/v1/jobs/:id

Delete a job (employer/admin only).

📨 Applications API
GET /api/v1/jobs/:job_id/applications

List all applications for a job.

POST /api/v1/jobs/:job_id/applications

Submit a new application.

Payload:

{
  "application": {
    "full_name": "John Doe",
    "email": "john@example.com",
    "resume": "link or text"
  }
}
