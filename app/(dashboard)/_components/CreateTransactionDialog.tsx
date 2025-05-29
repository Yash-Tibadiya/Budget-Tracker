"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DrawerTrigger } from "@/components/ui/drawer";
import { TransactionType } from "@/lib/types";
import { cn } from "@/lib/utils";

interface Props {
  trigger: React.ReactNode;
  type: TransactionType;
}

const CreateTransactionDialog = ({ trigger, type }: Props) => {
  return (
    <Dialog>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Create a new
            <span
              className={cn(
                "m-1",
                type === "income" ? "text-emerald-500" : "text-rose-500"
              )}
            >
              {type}
            </span>
            transaction
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTransactionDialog;
