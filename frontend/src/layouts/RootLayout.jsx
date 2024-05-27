import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import useVerifyToken from "@/hooks/useVerifyToken";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { useToast } from "@/components/ui/use-toast";
import isEmptyObject from "@/lib/isEmptyObject";
import { openRegister, reset } from "@/store/states/authStatus";

export default function RootLayout() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { isLoggedIn } = useSelector((state) => state.userData);
  const { toast } = useToast();
  const { isLoading, error, verifyToken } = useVerifyToken();

  const token = localStorage.getItem("token");
  useEffect(() => {
    (async () => {
      if (token && status === "") {
        await verifyToken(token);
      }
    })();
  }, [token]);

  useEffect(() => {
    if (!isEmptyObject(error)) {
      toast({
        variant: "destructive",
        title: "LogIn failed",
        description: error.msg,
      });
    }
  }, [error]);

  const login = searchParams.get("login");

  useEffect(() => {
    if (isLoggedIn && login) {
      searchParams.delete("login");
      setSearchParams(searchParams);
    } else if (!isLoggedIn && login === "false") {
      dispatch(openRegister());
    }
  }, [login, isLoggedIn]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="paragraph flex flex-col min-h-svh">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
