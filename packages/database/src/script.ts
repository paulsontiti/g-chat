import prisma from ".";

const getChats = async () => {
  const chats = await prisma.chat.findMany();

  console.log(chats);
};

getChats();
