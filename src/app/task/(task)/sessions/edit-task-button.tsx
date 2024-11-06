"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Pen } from "lucide-react";

import { TaskResponse } from "../task.types";

import { useTaskModel } from "../task.model";

import { formatDate, MaskInputNumber } from "@/lib/utils";
import ErrorMessage from "@/components/error-message";

type EditTaskButtonProps = {
  task: TaskResponse;
};

const EditTaskButton = ({ task }: EditTaskButtonProps) => {
  const { editForm, handleEditTask } = useTaskModel(task.id);

  const formattedDate = formatDate(task.limitDate);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"icon"} variant={"ghost"}>
          <Pen />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Editar Tarefa</SheetTitle>
          <SheetDescription>
            Faça alterações na tarefa. Clique em salvar quando terminar.
          </SheetDescription>
        </SheetHeader>

        <form className="pt-4" onSubmit={handleEditTask}>
          <div className="mb-4 flex flex-col gap-3">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              placeholder="Nome para a tarefa"
              autoFocus
              disabled={editForm.formState.isSubmitting}
              defaultValue={task.name}
              {...editForm.register("name")}
            />

            <ErrorMessage message={editForm.formState.errors.name?.message} />
          </div>

          <div className="mb-4 flex flex-col gap-3">
            <Label htmlFor="limitDate">Data Limite</Label>
            <Input
              {...editForm.register("limitDate")}
              id="limitDate"
              type="date"
              defaultValue={formattedDate}
              disabled={editForm.formState.isSubmitting}
            />
            <ErrorMessage
              message={editForm.formState.errors.limitDate?.message}
            />
          </div>

          <div className="mb-4 flex flex-col gap-3">
            <Label htmlFor="cost">Custo</Label>
            <Input
              {...editForm.register("cost")}
              id="cost"
              type="number"
              placeholder="R$"
              defaultValue={task.cost}
              onKeyDown={MaskInputNumber}
              disabled={editForm.formState.isSubmitting}
            />
            <ErrorMessage message={editForm.formState.errors.cost?.message} />
          </div>

          <SheetFooter>
            <SheetClose asChild>
              <Button
                variant={"secondary"}
                type="button"
                disabled={editForm.formState.isSubmitting}
              >
                Cancelar
              </Button>
            </SheetClose>

            <Button disabled={editForm.formState.isSubmitting}>
              Salvar alterações
            </Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default EditTaskButton;
