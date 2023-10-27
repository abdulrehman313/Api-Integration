"use client";
import { Button, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setData(res.data);
    };
    getdata();
  }, []);
  return (
    <>
      <Flex justifyContent="center" alignItems="center" direction="column">
        <Heading m="20px">Data of User</Heading>
        <Link href="\Imgpage">
          {" "}
          <Button p="20px" m="30px" colorScheme="red">
            GO PICTURES
          </Button>
        </Link>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          {data.map((detail, i) => (
            <Flex
              key={i}
              p="20px"
              border="10px solid black"
              direction="column"
              w="300px"
            >
              <Text borderBottom="1px">ID:{i}</Text>

              <Text borderBottom="1px"> Name:{detail.name}</Text>
              <Text borderBottom="1px"> User Name:{detail.username}</Text>

              <Text borderBottom="1px"> Email: {detail.email}</Text>

              <Text borderBottom="1px"> Street: {detail.address.street}</Text>
              <Text borderBottom="1px"> Suite: {detail.address.suite}</Text>
              <Text borderBottom="1px"> City: {detail.address.city}</Text>
              <Text borderBottom="1px">
                {" "}
                Zip Code: {detail.address.zipcode}
              </Text>
            </Flex>
          ))}
        </Grid>
      </Flex>
    </>
  );
};

export default page;
