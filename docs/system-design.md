# System Design Documentation

This document describes architecture, services, real-time messaging flow, and infrastructure design.

## Services Overview

### API Gateway
- Entry point for frontend requests
- Authentication verification
- Routing to microservices

### Auth Service
- User registration
- Login & token management
- Profile management

### Chat Service
- Chat creation
- Message storage
- Chat queries

### Presence Service
- Online tracking
- Typing indicators
- Last seen updates

### Media Service
- File upload
- Media compression
- CDN integration


Frontend (Next.js)
        |
        |
API Gateway
   |     |     |
Auth  Chat  Media
         |
     Presence
         |
       Redis
         |
      MongoDB


## HTTP Request Flow

Client → API Gateway → Service → Database → Response


## Real-Time Messaging Flow

1. Client emits send-message event
2. Socket Gateway receives event
3. Chat Service saves message
4. Message pushed to Redis queue
5. Message broadcast to chat members
6. Status updated


## Socket Events

Client → Server

- join-chat
- send-message
- typing-start
- typing-stop
- mark-read

Server → Client

- new-message
- message-read
- user-online
- user-offline
- typing-update


User ↔ Chat via ChatMember
Chat ↔ Message (one to many)
User ↔ Message (one to many)


## Message Queue Purpose

Used for:
- Scaling real-time messaging
- Handling notifications
- Decoupling socket broadcast from DB write


Message Created
     |
Queue (BullMQ / Redis)
     |
Socket Broadcast
     |
Push Notifications


## Presence System

Redis stores:

user:{id}:online
user:{id}:lastSeen
chat:{id}:typingUsers


## Deployment Architecture

Frontend → Vercel
Backend Services → Docker containers
Database → MongoDB Atlas
Cache → Redis Cloud
Media → Cloudinary
Reverse Proxy → Nginx

# Database Architecture

The system uses MongoDB with Prisma ORM.

Database design prioritizes:
- Fast message retrieval
- Scalable chat membership
- Efficient unread tracking
- Real-time performance

## Data Modeling Strategy

### Why MongoDB
- Flexible schema
- High write throughput
- Better horizontal scaling for chat apps

### Why Prisma
- Type safety
- Migration management
- Query abstraction


## Indexing Strategy

Indexes improve message retrieval performance.

Message Indexes:
- chatId + createdAt (message pagination)
- senderId (user message history)

ChatMember Indexes:
- userId (fetch user chats quickly)


## Unread Message Strategy

Unread counts will be calculated using:
- Last read timestamp per user
- Message createdAt comparison
