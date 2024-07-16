import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAreas } from "@/store/states/areas";
import { setCategories } from "@/store/states/categories";
import useVerifyToken from "@/hooks/useVerifyToken";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { useToast } from "@/components/ui/use-toast";
import isEmptyObject from "@/lib/isEmptyObject";
import Spinner from "@/components/common/Spinner";

export default function RootLayout() {
  const { toast } = useToast();
  const { isLoading, error, verifyToken } = useVerifyToken();
  const dispatch = useDispatch();
  const data = useLoaderData();

  const token = localStorage.getItem("token");
  useEffect(() => {
    (async () => {
      await verifyToken(token);
    })();
    if (!data.errors) {
      dispatch(setAreas(data.area));
      dispatch(setCategories(data.category));
    } else {
      console.error(data.errors);
    }
  }, []);

  useEffect(() => {
    if (!isEmptyObject(error)) {
      toast({
        variant: "destructive",
        title: "LogIn failed",
        description: error.msg,
      });
    }
  }, [error]);

  return (
    <div className="paragraph flex flex-col min-h-svh">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      )}
    </div>
  );
}
