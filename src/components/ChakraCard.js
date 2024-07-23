import React from 'react';
import { Box, Image, Badge, Text, Stack, Button, Heading } from '@chakra-ui/react';

function ChakraCard({ title, description, image, tags }) {
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
            <Image src={image} alt={title} />

            <Box p="6">
                <Stack direction="row" spacing={4} align="center">
                    {tags.map((tag, index) => (
                        <Badge key={index} borderRadius="full" px="2" colorScheme="teal">
                            {tag}
                        </Badge>
                    ))}
                </Stack>

                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                    <Heading as="h4" size="md">
                        {title}
                    </Heading>
                </Box>

                <Box>
                    <Text mt="2" color="gray.500" noOfLines={3}>
                        {description}
                    </Text>
                </Box>

                <Box display="flex" mt="4" alignItems="center">
                    <Button colorScheme="teal" size="sm">
                        Read more
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default ChakraCard;