# Enterprise WhatsApp Clone

## Project Goal
Build a scalable real-time messaging platform demonstrating enterprise architecture using TypeScript, Prisma, MongoDB, Redis, Socket.io, and Next.js.

## Target Users
- Developers learning real-time systems
- Portfolio demonstration
- YouTube educational content

## Core Value
- Real-time communication
- Scalable backend design
- Enterprise architecture demonstration

### Authentication
- User registration
- Login
- JWT authentication
- Profile update

### Chat
- One-to-one chat
- Group chat
- Send messages
- Message history

### Real-Time
- Instant messaging
- Typing indicator
- Online status

### Media
- Image sending
- File sending

## Phase 2
- Message reactions
- Reply threading
- Voice messages
- Message editing
- Message deletion
- Search chats
- Push notifications
- AI smart replies

## Message Lifecycle

1. User types message
2. Message sent via socket
3. Message saved in database
4. Message broadcast to recipients
5. Status updates:
   - SENT
   - DELIVERED
   - READ


## Services Architecture

- API Gateway
- Auth Service
- Chat Service
- Presence Service
- Media Service


## Technology Stack

Frontend:
- Next.js
- TypeScript
- TailwindCSS
- Zustand
- React Query

Backend:
- Node.js
- Express / NestJS
- Prisma ORM
- MongoDB
- Socket.io
- Redis

Infrastructure:
- Docker
- Cloudinary
- Nginx
- GitHub Actions
