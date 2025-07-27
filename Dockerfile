
# Frontend
FROM node:18 as frontend
WORKDIR /app/frontend
COPY frontend/package.json .
RUN npm install
COPY frontend/ .
RUN npm run build

# Backend
FROM node:18 as backend
WORKDIR /app/backend
COPY backend/package.json .
RUN npm install
COPY backend/ .

# Final image
FROM node:18
WORKDIR /app
COPY --from=frontend /app/frontend/build ./frontend
COPY --from=backend /app/backend ./backend
CMD ["node", "backend/server.js"]
