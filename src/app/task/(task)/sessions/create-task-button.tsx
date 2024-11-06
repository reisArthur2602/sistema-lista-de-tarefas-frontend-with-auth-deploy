"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogClose } from "@radix-ui/react-dialog";
import { Plus } from "lucide-react";
import { useTaskModel } from "../task.model";
import { MaskInputNumber } from "@/lib/utils";
import ErrorMessage from "@/components/error-message";

const CreateTaskButton = () => {
  const { handleCreateTask, createForm } = useTaskModel();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus />
          <>Nova Tarefa</>
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nova Tarefa</DialogTitle>
          <DialogDescription>
            Prencha o formulário para cadastrar uma tarefa
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleCreateTask}>
          <div className="mb-4 flex flex-col gap-3">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              placeholder="Nome para a tarefa"
              autoFocus
              {...createForm.register("name")}
              disabled={createForm.formState.isSubmitting}
            />
            <ErrorMessage message={createForm.formState.errors.name?.message} />
          </div>

          <div className="mb-4 flex flex-col gap-3">
            <Label htmlFor="limitDate">Data Limite</Label>
            <Input
              id="limitDate"
              type="date"
              {...createForm.register("limitDate")}
              disabled={createForm.formState.isSubmitting}
            />
            <ErrorMessage
              message={createForm.formState.errors.limitDate?.message}
            />
          </div>

          <div className="mb-4 flex flex-col gap-3">
            <Label htmlFor="cost">Custo</Label>
            <Input
              type="number"
              id="cost"
              placeholder="R$"
              onKeyDown={MaskInputNumber}
              {...createForm.register("cost")}
              disabled={createForm.formState.isSubmitting}
            />
            <ErrorMessage message={createForm.formState.errors.cost?.message} />
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button
                variant="secondary"
                type="button"
                disabled={createForm.formState.isSubmitting}
              >
                Cancelar
              </Button>
            </DialogClose>

            <Button disabled={createForm.formState.isSubmitting}>
              Cadastrar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTaskButton;
