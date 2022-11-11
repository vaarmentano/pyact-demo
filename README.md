# pyact-demo 
This project is meant to serve as a demonstration of full-stack development using python, react, and aws.

The application is deployed at https://mbvzbxpqpp.us-east-1.awsapprunner.com/

## Development
The application can be run in a development environment by running the each component (backend and frontend) in their respective development modes.  

To start the frontend development server:
```
cd py-frontend
npm run start
```

To start the backend server in development
```
cd py-backend
./venv/bin/uvicorn app.main:app --reload   
```
## Deployment
Deployment is accomplished by first building a docker image (effectively the production build of this app)
```
docker build -t varmentano-pyact-image-repo . 
```
From here, the image is pushed to an AWS ECR repository, and deployed the application using AWS AppRunner.


