# UI Specification

## Layout Style
WhatsApp inspired layout with modern SaaS styling.

## Design Principles
- Clean minimal interface
- Fast messaging interaction
- Mobile-first responsiveness
- Accessibility compliance

## Color Mode
- Light mode
- Dark mode
Authentication:
- Login page
- Register page

Main App:
- Chat list sidebar
- Chat conversation screen
- Message input area
- Profile page
- Settings page

Chat Features:
- Group creation modal
- Media viewer
- Search modal
## Layout Structure

Sidebar:
- Chat list
- Search bar
- User avatar

Chat Window:
- Header (chat name + online status)
- Messages area
- Message input
## Component Breakdown

### Layout Components
- AppLayout
- Sidebar
- ChatContainer

### Chat Components
- ChatHeader
- MessageBubble
- MessageInput
- TypingIndicator
- MessageStatus

### User Components
- Avatar
- UserStatus
- ProfileCard

### Modals
- CreateGroupModal
- MediaPreviewModal
## State Management Mapping

Auth State:
- Current user
- Token

Chat State:
- Active chat
- Chat list
- Messages
- Typing users

Presence State:
- Online users
Primary: #25D366
Background Light: #FFFFFF
Background Dark: #111B21
Accent: #128C7E
Font:
Inter / Poppins

Sizes:
- Heading: 24px
- Body: 16px
- Caption: 12px
## Tailwind Strategy

Use design tokens via Tailwind config.

Define:
- Primary colors
- Dark mode toggle
- Spacing scale
## Responsive Plan

Desktop:
Sidebar + Chat view

Tablet:
Collapsible sidebar

Mobile:
Full screen chat navigation
