'use client'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
// import { loginSchema } from '../validations/formValidations';
import { blue } from '@mui/material/colors';

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginmsg, setloginMsg] = useState([])
  const [showPW, setShowPW] = useState(false)
  const [errors, setErrors] = useState({})

  const loginCredentials = { email: email, password: password }

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      // await loginSchema.validate(loginCredentials, { abortEarly: false });


    } catch (error:any) {
      let err = {}

      const errArray = error.inner

      // if (errArray && errArray.length > 0) {
      //   errArray.forEach(error => {
      //     err[error.path] = error.message
      //   });
      // }
      setErrors(err)

    
    }
    if (email && password) {
      setEmail('')
      setPassword('')
    }

  }
  // useEffect(() => {
  //   console.log("Error object:", errors)
  // }, [errors])
  const handleVisibility = () => {
    setShowPW(!showPW)
  }

  return (
    <Box width="100vw" height="100vh" position="relative" bgcolor="whitesmoke">

      <Box
        display="flex"
        flexDirection="column"
        marginTop="80px"
        position="absolute"
        right="15%"
        width="90%"
        maxWidth="488px"
        padding="50px"
        bgcolor="white"
        borderRadius="20px"
        alignItems="center"
      >
        <Avatar sx={{
          height: "70px",
          width: "70px",
        }}>
          I
        </Avatar>
        <Typography variant="h4" marginBottom="20px">
          Sign-in
        </Typography>

        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          rowGap="20px"
        >
          <TextField
            value={email}
            onChange={(e:any) => setEmail(e.target.value)}
            // error={errors.email && true}
            // helperText={errors.email}
            fullWidth
            placeholder='Email'
            type='text'
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: "10px"
              }
            }}
          />
          <FormControl>
            <OutlinedInput
              value={password}
              onChange={(e:any) => setPassword(e.target.value)}
              // error={errors.password && true}
              fullWidth
              placeholder='Password'
              type={showPW ? 'text' : 'password'}
              sx={{
                borderRadius: "10px"
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleVisibility}
                  >
                    {showPW ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {/* <FormHelperText sx={{ color: "#d32f2f" }}>{errors.password}</FormHelperText> */}
          </FormControl>
        </Box>

        <Grid
          container
          display="flex"
          alignItems="center"
        >
          <Grid item flexGrow={1}>
            <FormControlLabel
              control={<Checkbox size='small' />} label="Remember me"
              sx={{
                '& .MuiTypography-root': {
                  fontSize: "12px"
                }
              }}
            />
          </Grid>

          <Grid item>
            <Button
              disableRipple
              sx={{
                textTransform: "capitalize",
                fontSize: "12px",
                '&:hover': {
                  // fontWeight: "bold",
                  bgcolor: "white",
                  color: blue['900']
                }
              }}
            >
              Forgot password ?
            </Button>
          </Grid>

        </Grid>

        <Button
          onClick={handleLogin}
          variant="contained"
          fullWidth
          sx={{
            fontSize: "18px",
            textTransform: "capitalize",
            borderRadius: "10px",
            marginTop: "25px",
            marginBottom: "5px",
          }}
        >
          Sign in
        </Button>

        <Typography
          width="100%"
          fontSize="12px"
        >
          Don't have an account? <a href='#'>Sign up</a>
        </Typography>
      </Box>

    </Box>

  )
}

export default Login
