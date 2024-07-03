import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useState } from "react";
import { DialogFooter } from "../ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { ButtonLoading } from "../common/ButtonLoading";
import ErrorMessage from "../common/ErrorMessage";
import isEmptyObject from "@/lib/isEmptyObject";
import { changeAvatarFormSchema } from "@/lib/zod/updateUserData";
import MyDropZone from "../common/MyDropZone";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import getFormData from "@/lib/getFormData";
import useChangeAvatar from "@/hooks/useChangeAvatar";
import useRemoveAvatar from "@/hooks/useRemoveAvatar";

export default function ChangeAvatarForm() {
  const { isLoading, error, changeAvatar } = useChangeAvatar();
  const {
    isLoading: isLoading2,
    error: error2,
    removeAvatar,
  } = useRemoveAvatar();
  const { userData: user } = useSelector((state) => state.userData.data);
  const [fileData, setFileSata] = useState({
    filePreview: user.avatar,
    errorMessage: "",
  });

  const form = useForm({
    resolver: zodResolver(changeAvatarFormSchema),
    defaultValues: {
      avatar: "",
    },
  });

  async function onSubmit(values) {
    await changeAvatar(getFormData(values));
  }

  async function onRemove() {
    await removeAvatar();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {!isEmptyObject(error) && <ErrorMessage msg={error.msg} />}
        {!isEmptyObject(error2) && <ErrorMessage msg={error2.msg} />}
        <FormField
          control={form.control}
          name="avatar"
          render={({ field }) => (
            <FormItem className="space-y-4">
              <Avatar className="w-24 h-24 m-auto">
                <AvatarImage src={fileData.filePreview} />
                <AvatarFallback className="bg-secondary">
                  {user ? user.username.charAt(0) : "B"}
                </AvatarFallback>
              </Avatar>
              <FormControl>
                <MyDropZone
                  field={field}
                  form={form}
                  fileData={fileData}
                  setFileData={setFileSata}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <DialogFooter>
          <ButtonLoading
            type="button"
            variant="destructive"
            isLoading={isLoading2}
            onClick={onRemove}
          >
            Remove
          </ButtonLoading>
          <ButtonLoading type="submit" isLoading={isLoading}>
            Ok
          </ButtonLoading>
        </DialogFooter>
      </form>
    </Form>
  );
}
