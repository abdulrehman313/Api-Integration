"use client";
import { Button, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import axios, { Axios } from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
  //   const { data, setData } = useState([]);
  //   useEffect(() => {
  //     const getdata = async () => {
  //       const res = await Axios.get("https://fakestoreapi.com/products");
  //       setData(res.data);
  //       console.log(res.data);
  //     };
  //     getdata();
  //   }, []);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
      setData(res.data);
      console.log(res.data);
    };
    getdata();
  }, []);

  return (
    <>
      <Flex justifyContent="center">
        <Link href="\Mobile">
          {" "}
          <Button p="20px" m="30px" colorScheme="red">
            GO TO MOBILE MART
          </Button>
        </Link>
      </Flex>
      <Flex
        gap={2}
        m="30px"
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Heading> Shopping </Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {data.map((detail, i) => (
            <Flex
              direction="column"
              border="5px solid black"
              p="30px"
              gap="5"
              w="600px"
              fontSize="20px"
            >
              <Text> ID:{i}</Text>
              <Text> TITLE: {detail.title} </Text>
              <Image src={detail.image} w="200px" h="200px" />
              <Text> PRICE: {detail.price}</Text>
              <Text> DESCRIPTION:{detail.description} </Text>
              <Text> CATEGORY: {detail.category} </Text>
            </Flex>
          ))}
        </Grid>
      </Flex>
    </>
  );
};

export default page;
