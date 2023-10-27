"use client";
import { Button, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      const res = await axios.get(
        "https://api.slingacademy.com/v1/sample-data/photos"
      );
      setData(res.data);
      setPhotos(res.data.photos);
      console.log(res.data);
    };
    getdata();
  }, []);

  return (
    <>
      <Flex justifyContent="center" direction="column" alignItems="center">
        <Heading m="20px">Image API </Heading>
        <Link href="Shopping">
          <Button p="20px" m="30px" colorScheme="red">
            GO SHOPPING
          </Button>
        </Link>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          {photos.map((detail, i) => (
            <Flex
              direction="column"
              border="5px solid black"
              p="30px"
              gap="5"
              //   h="500px"
              w="500px"
              key={i}
            >
              <Text>ID:{i}</Text>
              <Text>Title:{detail.title}</Text>
              <Text> User: {detail.user}</Text>
              <Image src={detail.url} w="400px" h="200px" />
              <Text>Description: {detail.description} </Text>
            </Flex>
          ))}
        </Grid>
      </Flex>
    </>
  );
};

export default page;
