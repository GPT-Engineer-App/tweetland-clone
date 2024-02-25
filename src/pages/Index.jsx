// src/pages/Index.jsx
import { Box, Button, Flex, Heading, Image, Input, Stack, Text, VStack, HStack, Avatar, IconButton, useToast, Spacer } from "@chakra-ui/react";
import { FaHome, FaHashtag, FaUserAlt, FaHeart, FaRetweet, FaReply } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  // Placeholder function to simulate interactions
  const handleInteraction = (interaction) => {
    toast({
      title: `You clicked ${interaction}.`,
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  // Header component
  const Header = () => (
    <Flex bg="twitter.500" p={4} color="white" position="sticky" top={0} zIndex={1}>
      <Heading size="md">MiniTwitter</Heading>
      <Spacer />
      <HStack spacing={4}>
        <Button leftIcon={<FaHome />} variant="ghost">
          Home
        </Button>
        <Button leftIcon={<FaHashtag />} variant="ghost">
          Explore
        </Button>
        <Button leftIcon={<FaUserAlt />} variant="ghost">
          Profile
        </Button>
      </HStack>
    </Flex>
  );

  // TweetItem component
  const TweetItem = ({ content, author }) => (
    <Box borderWidth="1px" borderRadius="lg" p={4} mb={4}>
      <HStack spacing={4}>
        <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHx8fDE3MDg4NDk3MTd8MA&ixlib=rb-4.0.3&q=80&w=1080" />
        <VStack align="start">
          <Text fontWeight="bold">{author.name}</Text>
          <Text fontSize="sm">@{author.handle}</Text>
        </VStack>
      </HStack>
      <Text mt={2}>{content}</Text>
      <HStack mt={2} spacing={4}>
        <IconButton aria-label="Like tweet" icon={<FaHeart />} onClick={() => handleInteraction("like")} />
        <IconButton aria-label="Retweet" icon={<FaRetweet />} onClick={() => handleInteraction("retweet")} />
        <IconButton aria-label="Reply" icon={<FaReply />} onClick={() => handleInteraction("reply")} />
      </HStack>
    </Box>
  );

  // TweetList component
  const TweetList = () => (
    <VStack spacing={0} align="stretch">
      {Array.from({ length: 5 }).map((_, index) => (
        <TweetItem key={index} content={`This is the content of tweet ${index + 1}`} author={{ name: `Author ${index + 1}`, handle: `handle${index + 1}` }} />
      ))}
    </VStack>
  );

  // Main layout
  return (
    <Box>
      <Header />
      <Flex direction="column" mt={4} maxW="600px" mx="auto">
        <Input placeholder="What's happening?" mb={4} />
        <TweetList />
      </Flex>
    </Box>
  );
};

export default Index;
