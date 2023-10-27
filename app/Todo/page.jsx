"use client";
import { Flex, Grid, HStack, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState([]);
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      // const data = res.data;
      setData(res.data);

      console.log(res.data);
    };
    fetchdata();
  }, []);
  return (
    <>
      <Flex
        gap={2}
        m="30px"
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Heading>TO-DO LIST </Heading>
        <Grid templateColumns="repeat(2 , 1fr)" gap={6}>
          {data.map((detail, i) => (
            <Flex
              key={i}
              direction="column"
              border="5px solid black"
              p="30px"
              gap="2"
              w="600px"
              fontSize="20px"
            >
              <Text> ID:{i}</Text>
              <HStack>
                <Text fontSize="25px" fontWeight="bold " color="red">
                  {" "}
                  TITLE:
                </Text>
                <Text fontSize="25px" fontWeight="bold ">
                  {detail.title}{" "}
                </Text>
              </HStack>

              <HStack>
                {/* <Flex> */}
                <Text fontSize="25px" fontWeight="bold " color="red">
                  {" "}
                  COMPLETED:
                </Text>
                <Text fontSize="25px" fontWeight="bold ">
                  {detail.completed.toString()} {/* {detail.title}{" "} */}
                </Text>
                {/* </Flex> */}
              </HStack>
            </Flex>
          ))}
        </Grid>
      </Flex>
    </>
  );
};

export default page;
