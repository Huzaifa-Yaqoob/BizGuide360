import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import useVerifyToken from "@/hooks/useVerifyToken";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { useToast } from "@/components/ui/use-toast";
import isEmptyObject from "@/lib/isEmptyObject";
import { useSelector } from "react-redux";

export default function RootLayout() {
  const { status } = useSelector((state) => state.userData);
  const { toast } = useToast();
  const { isLoading, error, verifyToken } = useVerifyToken();

  const token = localStorage.getItem("token");
  useEffect(() => {
    (async () => {
      if (token && status !== "") {
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
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
