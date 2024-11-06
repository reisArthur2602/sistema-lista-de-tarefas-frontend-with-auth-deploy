export const TASK_ENDPOINT = "/task";

export const TASK_MESSAGES = {
  CREATE_TASK_SUCCESS: "Tarefa criada com sucesso! 🎉",
  CREATE_TASK_ERROR:
    "Ops! Não foi possível criar a tarefa. Por favor, tente novamente.",
  DELETE_TASK_SUCCESS: "Tarefa removida com sucesso! 🗑️",
  DELETE_TASK_ERROR:
    "Não conseguimos remover a tarefa. Verifique a conexão e tente novamente.",
  UPDATE_TASK_SUCCESS: "Tarefa atualizada com sucesso! ✅",
  UPDATE_TASK_ERROR:
    "Houve um problema ao atualizar a tarefa. Por favor, tente novamente.",
  REORDER_TASK_SUCCESS: "Tarefas reordenadas com sucesso! 🔄",
  REORDER_TASK_ERROR:
    "Erro ao reordenar as tarefas. Por favor, tente novamente.",
};

export const TASK_SCHEMA_MESSAGES = {
  NAME_MIN_LENGTH:
    "O nome da tarefa deve ter pelo menos 3 caracteres. Que tal adicionar mais detalhes?",
  COST_POSITIVE: "O custo deve ser maior que zero!",
  LIMIT_DATE_REQUIRED:
    "A data limite é importante! Por favor, escolha uma data para a tarefa.",
  LIMIT_DATE_INVALID:
    "Ops! A data que você inseriu não parece ser válida. Por favor, tente novamente.",
};
