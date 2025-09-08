# --- Build stage ---
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# --- Run stage ---
FROM node:20-alpine AS runner
WORKDIR /app

# Copy only what’s needed for runtime
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# Expose port
EXPOSE 8080
ENV PORT=8080

# Start Next.js in standalone mode
CMD ["npm", "start"]