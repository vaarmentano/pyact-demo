FROM nikolaik/python-nodejs:python3.8-nodejs16

WORKDIR /app/frontend
COPY ./react-frontend /app/frontend
RUN npm install
RUN npm run build

WORKDIR /app/backend
COPY ./py-backend/requirements.txt /app/backend/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /app/backend/requirements.txt
COPY ./py-backend/app /app/backend/app

RUN cp -r ../frontend/build /app/backend/static


CMD ["uvicorn", "app.main:app", "--proxy-headers", "--host", "0.0.0.0", "--port", "80"]
