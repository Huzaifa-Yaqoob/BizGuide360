import { useSelector, useDispatch } from "react-redux";
import { Mail, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { logOut } from "@/store/states/userData";
import DeleteAccount from "@/components/dialogs/DeleteAccount";
import EditUsername from "@/components/dialogs/EditUsername";

export default function AccountSetting() {
  const dispatch = useDispatch();
  const { userData: user } = useSelector((state) => state.userData.data);
  console.log(user);
  return (
    <div className="flex justify-center items-center h-full">
      <main className="bg-card flex flex-col items-center p-4 gap-8 rounded shadow-md">
        <Avatar className="w-24 h-24">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback className="bg-secondary">
            {user ? user.username.charAt(0) : ""}
          </AvatarFallback>
        </Avatar>
        <div className="space-y-4 min-w-96">
          <div className="w-full bg-primary-foreground py-1 px-4 rounded flex items-start gap-2">
            <Mail />
            {user ? user.email : ""}
          </div>
          <div className="w-full bg-primary-foreground py-1 px-4 rounded flex justify-between items-center">
            <div className="flex items-start gap-2">
              <User />
              {user ? user.username : ""}
            </div>
            <EditUsername />
          </div>
          <div className="flex justify-between">
            <Button
              type="button"
              onClick={() => {
                dispatch(logOut());
                localStorage.removeItem("token");
              }}
              variant="destructive"
              size="sm"
            >
              Log Out
            </Button>
            <DeleteAccount />
          </div>
        </div>
      </main>
    </div>
  );
}
