"use client";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
  //   const [title, setTitle] = useState([]);
  //   const [body, setBody] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      setData(res.data);
    };
    fetchdata();
  }, []);
  return (
    <>
      <Flex justifyContent="center" alignItems="center" direction="column">
        <Heading>ONE API</Heading>
        <Link href="\Address">
          {" "}
          <Button p="20px" m="30px" colorScheme="red">
            GO TO CARDS
          </Button>
        </Link>

        {/* {data.map((detail, i) => { */}
        <Flex
          direction="column"
          gap="10"
          fontSize="24px"
          p="20px"
          border="1px "
        >
          <Text> Title Name: {data.title}</Text>
          <Text> Body: {data.body}</Text>
        </Flex>

        {/* })} */}
      </Flex>
    </>
  );
};

export default page;
