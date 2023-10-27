"use client";
import {
  Button,
  Flex,
  Grid,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const res = await axios.get("https://dummyjson.com/products");
      const data = res.data.products;
      setProducts(data);
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
        <Heading> Mobile Mart </Heading>
        <Flex justifyContent="center">
          <Link href="\Todo">
            {" "}
            <Button p="20px" m="30px" colorScheme="red">
              TO DO LIST
            </Button>
          </Link>
        </Flex>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {products.map((detail, i) => (
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
              <Image src={detail.thumbnail} /* w="400px" */ h="300px" />
              <Flex justifyContent="space-between">
                {" "}
                <Text> PRICE: {detail.price}</Text>
                <Text> DISCOUNT PERCENTANGE: {detail.discountPercentage}</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text> RATING: {detail.rating}</Text>
                <Text> BRAND: {detail.brand}</Text>
              </Flex>
              <Text> CATEGORY: {detail.category} </Text>
              <Text> DESCRIPTION:{detail.description} </Text>
            </Flex>
          ))}
        </Grid>
      </Flex>
    </>
  );
};

export default page;
