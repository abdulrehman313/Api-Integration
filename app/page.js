"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Button, Flex, Grid, Heading, Spacer, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setData(res.data);
      console.log(res.data);
    };

    fetchData();
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
        <Heading>EMAILS </Heading>
        <Flex justifyContent="center">
          {" "}
          <Link href="\Newpage">
            {" "}
            <Button p="20px" m="30px" colorScheme="red">
              GO Next
            </Button>
          </Link>
        </Flex>
        <Grid templateColumns="repeat(2 , 1fr)" gap={6}>
          {data.map((detail, i) => (
            <>
              <Flex
                key={i}
                direction="column"
                border="5px solid black"
                fontSize="20px"
                p="20px 30px"
              >
                <Text>ID: {i}</Text>
                <Text>Email: {detail.email}</Text>

                <Text>Body: {detail.body}</Text>
              </Flex>
            </>
          ))}
        </Grid>
      </Flex>
    </>
  );
}
