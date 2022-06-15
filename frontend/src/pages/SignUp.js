// import {
//   Container,
//   Flex,
//   VStack,
//   Heading,
//   Text,
//   SimpleGrid,
//   GridItem,
//   FormControl,
//   FormLabel,
//   Input,
//   Button,
//   Image,
//   Box,
//   useBreakpointValue,
// } from '@chakra-ui/react';

// const Signup = () => {
//   const colSpan = useBreakpointValue({ base: 2, md: 1 });

//   return (
//     <Container maxW="container.xl" p={0} >
//       <Flex
//         h={{ base: 'auto', md: '100vh' }}
//         py={[0, 10, 20]}
//         direction={{ base: 'column-reverse', md: 'row' }}
//       >
//         <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
//           <VStack spacing={3} alignItems="flex-start" marginTop="120px">
//             <Heading size="2xl">Your details</Heading>
//             <Text>If you already have an account, click here to log in.</Text>
//           </VStack>
//           <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
//             <GridItem colSpan={colSpan}>
//               <FormControl>
//                 <FormLabel>UserName</FormLabel>
//                 <Input placeholder="John" />
//               </FormControl>
//             </GridItem>
//             <GridItem colSpan={1}>
//               <FormControl>
//                 <FormLabel>Email</FormLabel>
//                 <Input placeholder="Sunset boulevard 21" type="email" isRequired/>
//               </FormControl>
//             </GridItem>
//             <GridItem colSpan={2}>
//               <Button size="lg" w="full">
//                 Register
//               </Button>
//             </GridItem>
//           </SimpleGrid>
//         </VStack>
//         <VStack
//           w="full"
//           h="full"
//           p={10}
//           spacing={10}
//           alignItems="center"
//           justifyContent="center"
//           // bg="gray.50"
//         >
//           <Box boxSize="500px">
//             <Image
//               src="https://img.freepik.com/free-vector/group-tourists-with-suitcases-bags-standing-airport_74855-7437.jpg?t=st=1655064131~exp=1655064731~hmac=abb03ba85623da27be6c726ff9fda9bee7998090f46ae42ac4d06c7d43e4aa67&w=1380"
//               alt="Tourist planning trip"
//               height="300px"
//               width="500px"
//             />
//           </Box>
//         </VStack>
//       </Flex>
//     </Container>
//   );
// };
// export default Signup;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, batch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "utils/utils";

import user from "reducers/user";

import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Alert from '@mui/material/Alert';


const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);


    const [mode, setMode] = useState("register");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const accessToken = useSelector((store) => store.user.accessToken);

    useEffect(() => {
        if(accessToken) {
            navigate("/notes");
        }
    }, [accessToken]);


    const onFormSubmit = (event) => {
        event.preventDefault();

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username: username, password: password})
    };

    fetch(BASE_URL(mode), options)
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                batch(() => {
                    dispatch(user.actions.setUserId(data.userId));
                    dispatch(user.actions.setAccessToken(data.accessToken));
                    dispatch(user.actions.setUserName(data.username));
                    dispatch(user.actions.setError(null));
                    setErrorMessage(null);
                });
            } else {
                batch(() => {
                    dispatch(user.actions.setError(data.response));
                    dispatch(user.actions.setUserId(null));
                    dispatch(user.actions.setAccessToken(null));
                    dispatch(user.actions.setUserName(null));
                    setErrorMessage(data.response);
                });
            }
        })
    }

    return (
        <>
        <div className="container">
            <form onSubmit={onFormSubmit}>
                    <TextField
                        id="outlined-basic"
                        label="Username"
                        variant="outlined"
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                        required/>

                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        variant="outlined"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)} 
                        required/>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="register"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel 
                            value="register" 
                            control={<Radio />} 
                            label="Register"
                            checked={mode === "register"}
                            onChange={() => setMode("register")}
                            />

                            <FormControlLabel 
                            value="login" 
                            control={<Radio />} 
                            label="Log in"
                            checked={mode === "login"}
                            onChange={() => setMode("login")}
                            />
                        </RadioGroup>
                    </FormControl>

                    <Button 
                        variant="contained"
                        type="submit"
                        disabled={password.length < 5}
                        >
                        Submit
                    </Button>
            </form>
            {errorMessage !== null && (
                <Alert severity="error">{errorMessage}</Alert>
            )}
        </div>
        </>
    )  
};

export default Signup;
