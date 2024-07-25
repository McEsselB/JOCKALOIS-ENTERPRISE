import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import logo from "../../../assets/images/logo.png";
import workerImage from "../../../assets/images/worker2.png";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../../../firebase";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../context/userContext";

export default function SignIn() {
  const { fetchUserDetails } = useUserContext();
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      await axios
        .post(
          "/api/auth/google",
          {
            username: result.user.displayName,
            email: result.user.email,
            profilePicture: result.user.photoURL,
          },
          { withCredentials: true }
        )
        .then(() => {
          toast.success("Log in successful");
          fetchUserDetails();
          navigate("/");
          navigate(0);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log("Error Google Sign in/up", error);
      toast.error("Google Sign in Failed");
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    await axios
      .post("/api/auth/login", data, { withCredentials: true })
      .then(() => {
        toast.success("Logged In");
        fetchUserDetails();
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data?.message || "Something went wrong");
      });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    setData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="grid md:grid-cols-2 h-screen items-center justify-center gap-10">
      <div className="items-center hidden md:flex bg-blue-800 h-screen justify-center  flex-col">
        <img src={logo} alt="" className="w-10 h-10" />
        <img src={workerImage} alt="" className="w-10 h-10" />
      </div>

      <div className="flex flex-col md:pr-10 w-full md:max-w-[500px] justify-self-center ">
        <p className="text-center text-slate-800 font-bold text-3xl">
          Welcome Back
        </p>
        <form onSubmit={handleSignIn}>
          <div className=" flex flex-col gap-4 ">
            <input
              required
              type="email"
              placeholder="Email "
              onChange={handleChange}
              id="email"
              className="border-slate-700 py-2 border rounded-md w-full pl-2"
            />
            <input
              required
              type="password"
              placeholder="Password"
              onChange={handleChange}
              id="password"
              className="border-slate-700 border rounded-md py-2 w-full pl-2"
            />
          </div>

          <p className="text-sm text-right text-blue-700">Forget password?</p>

          <div className="flex gap-2">
            <input type="checkbox" className="cursor-pointer" />
            <p className=" text-base">Remember me on this device</p>
          </div>

          <button className="bg-blue-700 self-center justify-self-center items-center w-full text-white py-2 rounded-lg">
            SIGN IN
          </button>
        </form>

        <Box sx={{ display: "flex", justifyContent: "space-around", mt: 2 }}>
          <Button
            variant="outlined"
            startIcon={<GoogleIcon />}
            sx={{ textTransform: "none", borderRadius: 5 }}
            onClick={handleGoogleClick}
          >
            Google
          </Button>
          <Button
            variant="outlined"
            startIcon={<AppleIcon />}
            sx={{ textTransform: "none", borderRadius: 5 }}
            onClick={() => {
              /* handle Apple sign-in */
            }}
          >
            Apple
          </Button>
          <Button
            variant="outlined"
            startIcon={<FacebookIcon />}
            sx={{ textTransform: "none", borderRadius: 5 }}
            onClick={() => {
              /* handle Facebook sign-in */
            }}
          >
            Facebook
          </Button>
        </Box>

        <p className="text-base text-center">
          Don{"'"}t have an account yet?{" "}
          <a className="text-blue-700" href="/sign-up">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
